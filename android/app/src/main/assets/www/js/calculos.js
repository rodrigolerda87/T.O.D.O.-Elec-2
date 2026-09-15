// calculos.js — motor de cálculos normativos (AEA 90364).
// Todo esto es lógica pura (sin DOM), fácil de testear y de ajustar si
// aparece un caso que no matchea con lo que necesita Uri en obra.
//
// IMPORTANTE: estos valores son una simplificación orientativa de la
// Reglamentación AEA 90364 (secciones 770/771), pensada para dar un punto
// de partida rápido en obra. No reemplazan el proyecto ejecutivo firmado
// por un instalador matriculado — eso se aclara también en la UI y en el PDF.

// ---------------------------------------------------------------------
// Caída de tensión
// ---------------------------------------------------------------------

// Resistividad a 70°C (temperatura de operación normal del PVC), Ω·mm²/m
export const RESISTIVIDAD = { cobre: 0.0225, aluminio: 0.036 };

export const SECCIONES_NORMALIZADAS = [1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240];

/**
 * Calcula la caída de tensión (o la sección mínima necesaria) de un tramo.
 * input: { tipoCircuito: 'monofasico'|'trifasico', material: 'cobre'|'aluminio',
 *          calcularPor: 'potencia'|'corriente', potenciaW, corrienteA,
 *          longitudM, factorPotencia, seccionMm2 (opcional, si se quiere
 *          verificar una sección puntual en vez de que la sugiera) }
 */
export function calcularCaidaTension(input) {
  const {
    tipoCircuito = 'monofasico',
    material = 'cobre',
    calcularPor = 'potencia',
    potenciaW = 0,
    corrienteA = 0,
    longitudM = 0,
    factorPotencia = 1,
    seccionMm2 = null,
  } = input;

  const rho = RESISTIVIDAD[material] || RESISTIVIDAD.cobre;
  const tensionNominal = tipoCircuito === 'trifasico' ? 380 : 220;
  const fp = Math.min(1, Math.max(0.5, Number(factorPotencia) || 1));

  let corriente = Number(corrienteA) || 0;
  if (calcularPor === 'potencia') {
    const p = Number(potenciaW) || 0;
    corriente = tipoCircuito === 'trifasico'
      ? p / (Math.sqrt(3) * tensionNominal * fp)
      : p / (tensionNominal * fp);
  }

  const k = tipoCircuito === 'trifasico' ? Math.sqrt(3) : 2;
  const L = Number(longitudM) || 0;

  // Sección mínima para no pasar el 3% (o la que se pida verificar)
  const limitePorc = 3;
  const limiteV = tensionNominal * (limitePorc / 100);
  const seccionMinimaCalc = (k * corriente * L * rho) / limiteV;
  const seccionSugerida = SECCIONES_NORMALIZADAS.find(s => s >= seccionMinimaCalc) || SECCIONES_NORMALIZADAS[SECCIONES_NORMALIZADAS.length - 1];

  const seccionAVerificar = seccionMm2 ? Number(seccionMm2) : seccionSugerida;
  const caidaV = (k * corriente * L * rho) / seccionAVerificar;
  const caidaPorc = (caidaV / tensionNominal) * 100;

  return {
    tensionNominal,
    corriente,
    seccionMinimaCalc,
    seccionSugerida,
    seccionVerificada: seccionAVerificar,
    caidaV,
    caidaPorc,
    cumple3: caidaPorc <= 3,
    cumple5: caidaPorc <= 5,
  };
}

// ---------------------------------------------------------------------
// Tipos de inmueble y grado de electrificación (AEA 90364-7-770/771)
// ---------------------------------------------------------------------

export const TIPOS_INMUEBLE = [
  { id: 'vivienda', nombre: 'Vivienda unifamiliar', norma: 'AEA 90364-7-770' },
  { id: 'departamento', nombre: 'Departamento en propiedad horizontal', norma: 'AEA 90364-7-771' },
  { id: 'local', nombre: 'Local comercial / oficina', norma: 'AEA 90364-7-771' },
  { id: 'galpon', nombre: 'Galpón / depósito / taller', norma: 'AEA 90364-7-771' },
];

// Grados según AEA 90364-7-770 (viviendas ≤63A). Se usa también como
// referencia orientativa para los demás tipos de inmueble, aclarando en
// la UI que en esos casos la 771 exige criterio de proyecto adicional.
const GRADOS = [
  { id: 'minimo', nombre: 'Mínimo', hastaM2: 60, kva: 3.7, circuitosMin: 2, seccionRamalMm2: 6 },
  { id: 'medio', nombre: 'Medio', hastaM2: 130, kva: 7, circuitosMin: 3, seccionRamalMm2: 10 },
  { id: 'elevado', nombre: 'Elevado', hastaM2: 200, kva: 11, circuitosMin: 5, seccionRamalMm2: 16 },
  { id: 'superior', nombre: 'Superior', hastaM2: Infinity, kva: null, circuitosMin: 6, seccionRamalMm2: 16 },
];

export function determinarGradoElectrificacion(superficieM2) {
  const s = Number(superficieM2) || 0;
  return GRADOS.find(g => s <= g.hastaM2) || GRADOS[GRADOS.length - 1];
}

export function listaGrados() { return GRADOS; }

// ---------------------------------------------------------------------
// Puntos mínimos de utilización por ambiente (simplificado de AEA 770/771)
// Formato: { iug, tug, tue } = bocas mínimas de Iluminación de Uso General,
// Tomacorrientes de Uso General y Tomas de Uso Específico.
// ---------------------------------------------------------------------

export const TIPOS_AMBIENTE = [
  { id: 'estar_comedor', nombre: 'Estar / comedor', iug: 1, tug: 3, tue: 0 },
  { id: 'dormitorio', nombre: 'Dormitorio', iug: 1, tug: 3, tue: 0 },
  { id: 'cocina', nombre: 'Cocina', iug: 1, tug: 3, tue: 2 },
  { id: 'lavadero', nombre: 'Lavadero', iug: 1, tug: 1, tue: 1 },
  { id: 'bano', nombre: 'Baño', iug: 1, tug: 1, tue: 0 },
  { id: 'pasillo', nombre: 'Pasillo / circulación', iug: 1, tug: 0, tue: 0 },
  { id: 'garage', nombre: 'Garage / cochera', iug: 1, tug: 1, tue: 0 },
  { id: 'exterior', nombre: 'Galería / patio / exterior', iug: 1, tug: 1, tue: 0 },
  { id: 'deposito', nombre: 'Depósito / taller / galpón', iug: 1, tug: 2, tue: 0 },
  { id: 'oficina', nombre: 'Oficina / local', iug: 1, tug: 2, tue: 0 },
  { id: 'otro', nombre: 'Otro ambiente', iug: 1, tug: 1, tue: 0 },
];

// Puntos mínimos por (ambiente × grado). Simplificación orientativa de las
// tablas 770/771 — a más grado, más bocas mínimas exigidas por ambiente.
const TABLA_BOCAS = {
  estar_comedor: { minimo: { iug: 1, tug: 2, tue: 0 }, medio: { iug: 1, tug: 3, tue: 0 }, elevado: { iug: 1, tug: 3, tue: 1 }, superior: { iug: 2, tug: 4, tue: 1 } },
  dormitorio:    { minimo: { iug: 1, tug: 2, tue: 0 }, medio: { iug: 1, tug: 3, tue: 0 }, elevado: { iug: 1, tug: 3, tue: 1 }, superior: { iug: 2, tug: 3, tue: 1 } },
  cocina:        { minimo: { iug: 1, tug: 2, tue: 1 }, medio: { iug: 1, tug: 3, tue: 2 }, elevado: { iug: 1, tug: 3, tue: 3 }, superior: { iug: 1, tug: 4, tue: 3 } },
  lavadero:      { minimo: { iug: 1, tug: 1, tue: 1 }, medio: { iug: 1, tug: 1, tue: 1 }, elevado: { iug: 1, tug: 2, tue: 1 }, superior: { iug: 1, tug: 2, tue: 2 } },
  bano:          { minimo: { iug: 1, tug: 1, tue: 0 }, medio: { iug: 1, tug: 1, tue: 0 }, elevado: { iug: 1, tug: 1, tue: 0 }, superior: { iug: 1, tug: 2, tue: 0 } },
  pasillo:       { minimo: { iug: 1, tug: 0, tue: 0 }, medio: { iug: 1, tug: 0, tue: 0 }, elevado: { iug: 1, tug: 1, tue: 0 }, superior: { iug: 1, tug: 1, tue: 0 } },
  garage:        { minimo: { iug: 1, tug: 1, tue: 0 }, medio: { iug: 1, tug: 1, tue: 0 }, elevado: { iug: 1, tug: 2, tue: 0 }, superior: { iug: 1, tug: 2, tue: 1 } },
  exterior:      { minimo: { iug: 1, tug: 1, tue: 0 }, medio: { iug: 1, tug: 1, tue: 0 }, elevado: { iug: 1, tug: 2, tue: 0 }, superior: { iug: 2, tug: 2, tue: 0 } },
  deposito:      { minimo: { iug: 1, tug: 1, tue: 0 }, medio: { iug: 1, tug: 2, tue: 0 }, elevado: { iug: 2, tug: 2, tue: 0 }, superior: { iug: 2, tug: 3, tue: 0 } },
  oficina:       { minimo: { iug: 1, tug: 2, tue: 0 }, medio: { iug: 1, tug: 3, tue: 0 }, elevado: { iug: 1, tug: 4, tue: 0 }, superior: { iug: 2, tug: 4, tue: 0 } },
  otro:          { minimo: { iug: 1, tug: 1, tue: 0 }, medio: { iug: 1, tug: 1, tue: 0 }, elevado: { iug: 1, tug: 2, tue: 0 }, superior: { iug: 1, tug: 2, tue: 0 } },
};

export function bocasPorAmbiente(tipoAmbienteId, superficieM2, gradoId = 'medio') {
  const tabla = TABLA_BOCAS[tipoAmbienteId] || TABLA_BOCAS.otro;
  const s = Number(superficieM2) || 0;

  // Nota AEA 770: en viviendas <130 m² no debería haber dormitorios >36 m²;
  // si igualmente lo hay, esos puntos se toman del grado "elevado".
  let gradoEfectivo = gradoId;
  if (tipoAmbienteId === 'dormitorio' && s > 36) gradoEfectivo = 'elevado';
  const base = tabla[gradoEfectivo] || tabla.medio;
  let { iug, tug, tue } = base;

  // Ajustes por superficie del propio ambiente (más m², más bocas).
  if (tipoAmbienteId === 'pasillo' && s > 5) iug += Math.floor(s / 5);
  if (tipoAmbienteId === 'estar_comedor' && s > 18) tug += Math.ceil((s - 18) / 6);

  return { iug, tug, tue, total: iug + tug + tue };
}

/** A partir de la lista de ambientes ya dibujados y tipificados, calcula
 * bocas totales, circuitos sugeridos por tipo y grado de electrificación. */
export function calcularInstalacion(ambientes, superficieTotalM2) {
  const grado = determinarGradoElectrificacion(superficieTotalM2);

  let totalIug = 0, totalTug = 0, totalTue = 0;
  const detalle = ambientes.map(a => {
    const b = bocasPorAmbiente(a.tipoAmbienteId, a.areaM2, grado.id);
    totalIug += b.iug; totalTug += b.tug; totalTue += b.tue;
    const tipo = TIPOS_AMBIENTE.find(t => t.id === a.tipoAmbienteId);
    return { ...a, tipoAmbienteNombre: tipo ? tipo.nombre : 'Ambiente', bocas: b };
  });

  // Circuitos sugeridos: se agrupan bocas de IUG y TUG en circuitos de
  // hasta 15 bocas (criterio habitual de obra para no saturar un
  // termomagnético de 10A/16A), y cada TUE de cocina/lavadero va con
  // circuito propio (heladera, lavarropas, etc. no comparten protección).
  const circuitosIug = Math.max(1, Math.ceil(totalIug / 15));
  const circuitosTug = Math.max(1, Math.ceil(totalTug / 15));
  const circuitosTue = totalTue; // cada TUE es, como mínimo, un circuito propio
  const circuitosSugeridos = Math.max(grado.circuitosMin, circuitosIug + circuitosTug + circuitosTue);

  return {
    grado,
    superficieTotalM2: Number(superficieTotalM2) || 0,
    totalIug, totalTug, totalTue,
    totalBocas: totalIug + totalTug + totalTue,
    circuitosIug, circuitosTug, circuitosTue,
    circuitosSugeridos,
    detalle,
  };
}

// ---------------------------------------------------------------------
// Lista de materiales, a partir del cálculo anterior + canalizaciones
// dibujadas sobre el plano (largo total en metros, por color/circuito).
// ---------------------------------------------------------------------

export function calcularMateriales({ instalacion, canalizaciones, seccionRamalMm2 }) {
  const { totalIug, totalTug, totalTue, circuitosSugeridos, grado } = instalacion;

  const largoCanalizaciones = (canalizaciones || []).reduce((s, c) => s + (c.largoM || 0), 0);
  // Margen del 15% para empalmes, subidas a tablero y desperdicio de obra.
  const metrosCableCircuitos = Math.ceil(largoCanalizaciones * 1.15);

  return {
    cajasOctogonales: totalIug,
    cajasRectangulares: totalTug + totalTue,
    tapasCiegas: Math.ceil((totalIug + totalTug + totalTue) * 0.05), // repuesto/bocas de paso
    modulosToma: totalTug + totalTue,
    modulosLlave: totalIug,
    termomagneticas: circuitosSugeridos,
    diferenciales: circuitosSugeridos <= 3 ? 1 : Math.ceil(circuitosSugeridos / 4),
    tableros: 1,
    metrosCanoCorrugado: Math.ceil(largoCanalizaciones),
    metrosCableCircuitos: `${metrosCableCircuitos} m (aprox., por circuito según su sección)`,
    metrosCableRamal: '— (definir según distancia medidor-tablero)',
    seccionRamalMm2: seccionRamalMm2 || grado.seccionRamalMm2,
  };
}

// ---------------------------------------------------------------------
// Ampacidad del cable (AEA 90364-7-770 Tabla 770.12.I / IEC 60364-5-52,
// cobre, método B1 -caño en/sobre pared-, 40C de aire de referencia AEA)
// ---------------------------------------------------------------------
export const AMPACIDAD_PVC = [
  { s: 1.5, iz: 15, disyMax: 10 }, { s: 2.5, iz: 21, disyMax: 20 }, { s: 4, iz: 28, disyMax: 25 },
  { s: 6, iz: 36, disyMax: 32 }, { s: 10, iz: 50, disyMax: 50 }, { s: 16, iz: 66, disyMax: 63 },
  { s: 25, iz: 88, disyMax: 80 }, { s: 35, iz: 109, disyMax: 100 }, { s: 50, iz: 131, disyMax: 125 },
  { s: 70, iz: 167, disyMax: 160 }, { s: 95, iz: 202, disyMax: 200 }, { s: 120, iz: 234, disyMax: 200 },
  { s: 150, iz: 261, disyMax: 250 }, { s: 185, iz: 297, disyMax: 250 }, { s: 240, iz: 348, disyMax: 315 },
];
export const FACTOR_XLPE_SOBRE_PVC = 1.29;

export const METODOS_INSTALACION = [
  { id: 'A', nombre: 'En caño dentro de pared aislante', factor: 0.87 },
  { id: 'B1', nombre: 'En caño en/sobre pared (referencia AEA)', factor: 1.00 },
  { id: 'D1', nombre: 'En caño enterrado', factor: 0.90 },
  { id: 'E', nombre: 'Bandeja perforada / al aire libre', factor: 1.20 },
];

export const FACTOR_TEMPERATURA = {
  pvc: { 25: 1.22, 30: 1.15, 35: 1.08, 40: 1.00, 45: 0.91, 50: 0.82 },
  xlpe: { 25: 1.14, 30: 1.10, 35: 1.05, 40: 1.00, 45: 0.96, 50: 0.90 },
};

export const FACTOR_AGRUPAMIENTO = [
  { circuitos: 1, factor: 1.00 }, { circuitos: 2, factor: 0.80 }, { circuitos: 3, factor: 0.70 },
  { circuitos: 4, factor: 0.65 }, { circuitos: 5, factor: 0.60 }, { circuitos: 6, factor: 0.57 },
];

export function calcularAmpacidad({ aislacion = 'pvc', metodoId = 'B1', temperatura = 40, circuitosAgrupados = 1, corrienteRequeridaA = 0 }) {
  const metodo = METODOS_INSTALACION.find(m => m.id === metodoId) || METODOS_INSTALACION[1];
  const fTemp = (FACTOR_TEMPERATURA[aislacion] && FACTOR_TEMPERATURA[aislacion][temperatura]) || 1;
  const fAgrup = (FACTOR_AGRUPAMIENTO.find(f => circuitosAgrupados <= f.circuitos) || FACTOR_AGRUPAMIENTO[FACTOR_AGRUPAMIENTO.length - 1]).factor;
  const factorTotal = metodo.factor * fTemp * fAgrup;

  const filas = AMPACIDAD_PVC.map(row => {
    const izBase = aislacion === 'xlpe' ? row.iz * FACTOR_XLPE_SOBRE_PVC : row.iz;
    const izCorregida = izBase * factorTotal;
    return { s: row.s, izTabla: izBase, izCorregida, disyMax: row.disyMax };
  });

  const sugerida = filas.find(f => f.izCorregida >= corrienteRequeridaA) || filas[filas.length - 1];
  return { filas, factorTotal, metodo, fTemp, fAgrup, sugerida };
}

// ---------------------------------------------------------------------
// Diametro de cano segun cantidad de cables (AEA 90364-7-771 771.12.3.13:
// max. 35% de la seccion interna; IRAM 62386-21, serie semipesada)
// ---------------------------------------------------------------------
export const CANOS_IRAM = [
  { nombre: '5/8" (16 mm)', extMm: 16, intMm: 13.4, areaMm2: 141 },
  { nombre: '3/4" (20 mm)', extMm: 20, intMm: 17, areaMm2: 227 },
  { nombre: '7/8" (22 mm)', extMm: 22, intMm: 19.3, areaMm2: 293 },
  { nombre: '1" (25 mm)', extMm: 25, intMm: 21.5, areaMm2: 363 },
  { nombre: '1 1/4" (32 mm)', extMm: 32, intMm: 28, areaMm2: 616 },
  { nombre: '1 1/2" (40 mm)', extMm: 40, intMm: 35.6, areaMm2: 995 },
  { nombre: '2" (50 mm)', extMm: 50, intMm: 44.8, areaMm2: 1576 },
];
export const DIAMETRO_CABLE_PVC = [
  { s: 1.5, dExtMm: 3.1 }, { s: 2.5, dExtMm: 3.66 }, { s: 4, dExtMm: 4.2 },
  { s: 6, dExtMm: 4.6 }, { s: 10, dExtMm: 5.7 }, { s: 16, dExtMm: 6.5 },
  { s: 25, dExtMm: 8.2 }, { s: 35, dExtMm: 9.2 },
];
export const LLENADO_MAX_PORC = 35;

export function calcularLlenadoCano({ conductores, canoNombre }) {
  const areaOcupada = conductores.reduce((total, c) => {
    const d = (DIAMETRO_CABLE_PVC.find(x => x.s === c.s) || DIAMETRO_CABLE_PVC[0]).dExtMm;
    const areaUnit = Math.PI * (d / 2) ** 2;
    return total + areaUnit * c.cantidad;
  }, 0);
  const cano = CANOS_IRAM.find(c => c.nombre === canoNombre) || CANOS_IRAM[1];
  const limiteMm2 = cano.areaMm2 * (LLENADO_MAX_PORC / 100);
  const porcentaje = (areaOcupada / cano.areaMm2) * 100;

  const canoSugerido = CANOS_IRAM.find(c => areaOcupada <= c.areaMm2 * (LLENADO_MAX_PORC / 100)) || CANOS_IRAM[CANOS_IRAM.length - 1];
  const cantidadCables = conductores.reduce((s, c) => s + c.cantidad, 0);
  const cableMasGrueso = Math.max(...conductores.map(c => (DIAMETRO_CABLE_PVC.find(x => x.s === c.s) || DIAMETRO_CABLE_PVC[0]).dExtMm));
  const riesgoAtasco = cableMasGrueso > cano.intMm / 3;

  return { areaOcupada, cano, limiteMm2, porcentaje, cumple: areaOcupada <= limiteMm2, canoSugerido, cantidadCables, riesgoAtasco };
}

// ---------------------------------------------------------------------
// Puesta a tierra - cantidad de jabalinas (AEA 90364-5-54, formula de
// Dwight para 1 jabalina + factor de paralelo de Tagg para n jabalinas)
// ---------------------------------------------------------------------
export const TIPOS_SUELO = [
  { id: 'organico', nombre: 'Orgánico / pantanoso / húmedo', rho: 30 },
  { id: 'arcilloso_humedo', nombre: 'Arcilloso húmedo / agrícola', rho: 100 },
  { id: 'arenoso_humedo', nombre: 'Arenoso húmedo', rho: 200 },
  { id: 'arcilloso_seco', nombre: 'Arcilloso seco', rho: 300 },
  { id: 'relleno', nombre: 'Relleno / escombros / mezcla urbana', rho: 500 },
  { id: 'arenoso_seco', nombre: 'Arenoso seco', rho: 1000 },
  { id: 'rocoso', nombre: 'Rocoso / pedregoso', rho: 2500 },
];
export const TIPOS_JABALINA = [
  { id: 'estandar', nombre: 'Estándar 1,5 m × 1/2" (acero-cobre)', largoM: 1.5, diamMm: 12.6 },
  { id: 'robusta', nombre: 'Robusta 1,5 m × 5/8" (acero-cobre)', largoM: 1.5, diamMm: 14.3 },
  { id: 'larga', nombre: 'Larga 3,0 m × 5/8" (suelos secos)', largoM: 3.0, diamMm: 14.3 },
];
const FACTOR_PARALELO_JABALINAS = { 1: 1.00, 2: 0.91, 3: 0.85, 4: 0.80, 5: 0.77, 6: 0.75, 8: 0.70 };

function resistenciaUnaJabalina(rho, largoM, diamMm) {
  const a = (diamMm / 1000) / 2;
  return (rho / (2 * Math.PI * largoM)) * (Math.log((4 * largoM) / a) - 1);
}
function factorParaleloN(n) {
  if (FACTOR_PARALELO_JABALINAS[n]) return FACTOR_PARALELO_JABALINAS[n];
  const keys = Object.keys(FACTOR_PARALELO_JABALINAS).map(Number).sort((a, b) => a - b);
  const kMax = keys[keys.length - 1];
  return n >= kMax ? FACTOR_PARALELO_JABALINAS[kMax] : 0.65;
}

export function calcularPuestaTierra({ tipoSueloId, tipoJabalinaId, objetivoOhm = 10, seccionFaseMm2 = 10 }) {
  const suelo = TIPOS_SUELO.find(t => t.id === tipoSueloId) || TIPOS_SUELO[1];
  const jabalina = TIPOS_JABALINA.find(t => t.id === tipoJabalinaId) || TIPOS_JABALINA[0];
  const r1 = resistenciaUnaJabalina(suelo.rho, jabalina.largoM, jabalina.diamMm);

  let n = 1, req = r1;
  while (req > objetivoOhm && n < 12) {
    n++;
    req = r1 / (n * factorParaleloN(n));
  }
  const cumpleAea40 = req <= 40;
  const cumpleObjetivo = req <= objetivoOhm;

  let seccionPE;
  if (seccionFaseMm2 <= 16) seccionPE = seccionFaseMm2;
  else if (seccionFaseMm2 <= 35) seccionPE = 16;
  else seccionPE = Math.max(16, seccionFaseMm2 / 2);

  return { suelo, jabalina, r1, n, resistenciaEstimada: req, cumpleAea40, cumpleObjetivo, seccionPE, separacionMinM: jabalina.largoM * 2 };
}

// ---------------------------------------------------------------------
// Contactor / termica para motores
// ---------------------------------------------------------------------
export const FLA_MONOFASICO_220V = [
  { hp: 0.5, kw: 0.37, a: 4.9 }, { hp: 1, kw: 0.75, a: 8.0 }, { hp: 1.5, kw: 1.1, a: 10.0 },
  { hp: 2, kw: 1.5, a: 12.0 }, { hp: 3, kw: 2.2, a: 17.0 }, { hp: 5, kw: 3.7, a: 28.0 },
];
export const FLA_TRIFASICO_380V = [
  { hp: 1, kw: 0.75, a: 2.1 }, { hp: 2, kw: 1.5, a: 3.8 }, { hp: 3, kw: 2.2, a: 5.3 },
  { hp: 5, kw: 3.7, a: 8.4 }, { hp: 7.5, kw: 5.5, a: 12.2 }, { hp: 10, kw: 7.5, a: 15.8 },
  { hp: 15, kw: 11, a: 23.0 }, { hp: 20, kw: 15, a: 30.0 }, { hp: 25, kw: 18.5, a: 37.0 },
  { hp: 30, kw: 22, a: 44.0 }, { hp: 40, kw: 30, a: 58.0 }, { hp: 50, kw: 37, a: 73.0 },
];
export const FACTOR_ARRANQUE = [
  { id: 'directo', nombre: 'Directo (motores chicos)', factor: 7 },
  { id: 'estrella_triangulo', nombre: 'Estrella-triángulo', factor: 2.6 },
  { id: 'electronico', nombre: 'Arrancador electrónico (soft-starter)', factor: 3.5 },
];

export function calcularContactorMotor({ tipoCircuito = 'trifasico', potenciaKw, factorArranqueId = 'directo' }) {
  const tabla = tipoCircuito === 'trifasico' ? FLA_TRIFASICO_380V : FLA_MONOFASICO_220V;
  let fila = tabla.find(f => f.kw >= potenciaKw) || tabla[tabla.length - 1];
  const arranque = FACTOR_ARRANQUE.find(a => a.id === factorArranqueId) || FACTOR_ARRANQUE[0];
  const corrienteArranque = fila.a * arranque.factor;
  const contactorSugeridoA = Math.ceil(fila.a * 1.25);
  const guardamotorRangoA = { min: Math.round(fila.a * 0.9 * 10) / 10, max: Math.round(fila.a * 1.15 * 10) / 10 };
  const cableSugerido = AMPACIDAD_PVC.find(r => r.iz >= fila.a) || AMPACIDAD_PVC[AMPACIDAD_PVC.length - 1];

  return { fila, arranque, corrienteArranque, contactorSugeridoA, guardamotorRangoA, cableSugerido };
}

// ---------------------------------------------------------------------
// Potencia total y factor de simultaneidad
// ---------------------------------------------------------------------
export const CARGAS_TIPICAS = [
  { id: 'iluminacion', nombre: 'Iluminación general', w: 1000, fs: 1.00 },
  { id: 'tug', nombre: 'Tomacorrientes de uso general', w: 3300, fs: 0.60 },
  { id: 'heladera', nombre: 'Heladera', w: 200, fs: 1.00 },
  { id: 'lavarropas', nombre: 'Lavarropas', w: 1500, fs: 0.50 },
  { id: 'microondas', nombre: 'Microondas', w: 1200, fs: 0.50 },
  { id: 'ac', nombre: 'Aire acondicionado (por equipo)', w: 2200, fs: 0.80 },
  { id: 'termotanque', nombre: 'Termotanque eléctrico', w: 2000, fs: 0.70 },
  { id: 'horno', nombre: 'Horno / anafe eléctrico', w: 2500, fs: 0.70 },
  { id: 'ducha', nombre: 'Ducha eléctrica', w: 5500, fs: 0.50 },
];

export function calcularPotenciaSimultaneidad(cargasSeleccionadas) {
  let potenciaInstalada = 0, potenciaSimultanea = 0;
  const detalle = cargasSeleccionadas.map(c => {
    const tipo = CARGAS_TIPICAS.find(t => t.id === c.id);
    const w = (c.w != null ? c.w : (tipo ? tipo.w : 0)) * c.cantidad;
    const fs = tipo ? tipo.fs : 0.7;
    potenciaInstalada += w;
    potenciaSimultanea += w * fs;
    return { ...c, nombre: tipo ? tipo.nombre : c.id, wTotal: w, fs, wSimultaneo: w * fs };
  });
  const corrienteMono = potenciaSimultanea / 220;
  const corrienteTri = potenciaSimultanea / (Math.sqrt(3) * 380);
  return { detalle, potenciaInstalada, potenciaSimultanea, corrienteMono, corrienteTri };
}

// ---------------------------------------------------------------------
// Sensibilidad de diferencial segun aplicacion
// ---------------------------------------------------------------------
export const APLICACIONES_DIFERENCIAL = [
  { id: 'tomas_general', nombre: 'Tomacorrientes y circuitos generales', mA: 30, motivo: 'Protección de personas contra contacto directo/indirecto (AEA 90364-7-770)' },
  { id: 'bano_pileta', nombre: 'Baños, piletas y locales húmedos', mA: 30, motivo: 'Tensión de contacto reducida (25V) en locales especiales — 30mA obligatorio' },
  { id: 'auto_electrico', nombre: 'Carga de auto eléctrico (wallbox)', mA: 30, motivo: 'Diferencial Tipo B (o Tipo A + detección CC) — el cargador puede generar fuga de corriente continua' },
  { id: 'general_comercial', nombre: 'Interruptor general (selectivo, aguas arriba)', mA: 300, motivo: 'Selectividad con los diferenciales de 30mA aguas abajo — tipo S/retardado' },
  { id: 'proteccion_incendio', nombre: 'Protección contra incendio (tablero general)', mA: 300, motivo: 'AEA 90364-4-42 — no protege personas, previene arcos/incendio por fuga a tierra' },
];
