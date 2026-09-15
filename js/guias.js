// guias.js — Circuitos Eléctricos Interactivos Normalizados (AEA 90364 / IRAM 2183)
const NODE_COLOR = { fuente: '#8b93a1', control: '#3b82f6', carga: '#f5765c', proteccion: '#8b93a1' };
const NODE_BG = { fuente: 'rgba(139,147,161,0.14)', control: 'rgba(59,130,246,0.14)', carga: 'rgba(245,118,92,0.14)', proteccion: 'rgba(139,147,161,0.14)' };

const SVG_DEFS = `
  <defs>
    <filter id="din-shadow" x="-8%" y="-8%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000" flood-opacity="0.5" />
    </filter>
    <pattern id="cable-pe-stripes" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="10" stroke="#16a34a" stroke-width="6" />
      <line x1="5" y1="0" x2="5" y2="10" stroke="#eab308" stroke-width="4" />
    </pattern>
    <radialGradient id="lamp-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fef08a" stop-opacity="1" />
      <stop offset="60%" stop-color="#facc15" stop-opacity="0.85" />
      <stop offset="100%" stop-color="#eab308" stop-opacity="0.2" />
    </radialGradient>
  </defs>
`;

function escXml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// -------------------------------------------------------------
// 1. PUNTO SIMPLE
// -------------------------------------------------------------
function svgPuntoSimple() {
  return `
  <div style="background:#090e17;border-radius:10px;padding:12px;display:flex;flex-direction:column;align-items:center;">
    <button id="btn-toggle-switch" style="margin-bottom:10px;padding:8px 16px;background:#f59e0b;color:#0f172a;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:12px;">
      🔘 Accionar Llave de Luz
    </button>
    <svg id="svg-punto-simple" viewBox="0 0 900 460" width="100%" style="display:block;max-width:860px;" role="img">
      ${SVG_DEFS}
      <!-- Caja Octogonal Techo -->
      <g transform="translate(60, 80)" filter="url(#din-shadow)">
        <polygon points="50,0 150,0 200,50 200,150 150,200 50,200 0,150 0,50" fill="#1e293b" stroke="#475569" stroke-width="2.5" />
        <text x="100" y="32" text-anchor="middle" fill="#94a3b8" font-size="10" font-weight="bold">CAJA OCTOGONAL</text>
        <circle cx="50" cy="80" r="7" fill="#8b4513" stroke="#fff" stroke-width="1.5" />
        <text x="50" y="70" text-anchor="middle" fill="#f59e0b" font-size="9">FASE (L)</text>
        <circle cx="100" cy="80" r="7" fill="#0284c7" stroke="#fff" stroke-width="1.5" />
        <text x="100" y="70" text-anchor="middle" fill="#38bdf8" font-size="9">NEUTRO (N)</text>
        <circle cx="150" cy="80" r="7" fill="url(#cable-pe-stripes)" stroke="#fff" stroke-width="1.5" />
        <text x="150" y="70" text-anchor="middle" fill="#4ade80" font-size="9">TIERRA (PE)</text>
      </g>

      <!-- Llave Unipolar 5x10 -->
      <g transform="translate(180, 250)" filter="url(#din-shadow)" style="cursor:pointer;" id="click-llave-unipolar">
        <rect x="0" y="0" width="160" height="150" rx="10" fill="#1e293b" stroke="#475569" stroke-width="2" />
        <rect x="15" y="15" width="130" height="120" rx="6" fill="#0f172a" />
        <text x="80" y="38" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">LLAVE UNIPOLAR</text>
        <circle cx="45" cy="90" r="6" fill="#8b4513" stroke="#fff" stroke-width="1.5" />
        <text x="45" y="112" text-anchor="middle" fill="#f59e0b" font-size="9">Borne L</text>
        <circle cx="115" cy="90" r="6" fill="#334155" stroke="#fff" stroke-width="1.5" />
        <text x="115" y="112" text-anchor="middle" fill="#94a3b8" font-size="9">Borne 1</text>
        <line id="switch-blade" x1="45" y1="90" x2="105" y2="70" stroke="#f59e0b" stroke-width="4" stroke-linecap="round" />
        <text id="switch-state-text" x="80" y="130" text-anchor="middle" fill="#ef4444" font-size="10" font-weight="bold">ABIERTO (OFF)</text>
      </g>

      <!-- Portalámparas E27 -->
      <g transform="translate(580, 100)" filter="url(#din-shadow)">
        <circle cx="110" cy="110" r="85" fill="#1e293b" stroke="#475569" stroke-width="2" />
        <circle id="lamp-glow-circle" cx="110" cy="110" r="60" fill="#1e293b" stroke="#64748b" stroke-width="2" />
        <circle cx="85" cy="110" r="7" fill="#0284c7" stroke="#fff" stroke-width="1.5" />
        <text x="85" y="130" text-anchor="middle" fill="#38bdf8" font-size="8" font-weight="bold">ROSCA (N)</text>
        <circle cx="135" cy="110" r="7" fill="#0f172a" stroke="#fff" stroke-width="1.5" />
        <text x="135" y="130" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">CENTRO (RET)</text>
        <text id="lamp-text" x="110" y="195" text-anchor="middle" fill="#94a3b8" font-size="11" font-weight="bold">LÁMPARA APAGADA</text>
      </g>

      <!-- Cables IRAM -->
      <path d="M 110 160 L 110 340 L 225 340" stroke="#8b4513" stroke-width="4.5" fill="none" />
      <path id="cable-retorno" d="M 295 340 L 715 340 L 715 110" stroke="#475569" stroke-width="4.5" fill="none" />
      <path d="M 160 160 L 665 160 L 665 110" stroke="#0284c7" stroke-width="4.5" fill="none" />
      <path d="M 210 160 L 760 160 L 760 180" stroke="url(#cable-pe-stripes)" stroke-width="4" fill="none" />
    </svg>
  </div>`;
}

// -------------------------------------------------------------
// 2. CONMUTADA (2 PUNTOS / ESCALERA)
// -------------------------------------------------------------
function svgConmutada() {
  return `
  <div style="background:#090e17;border-radius:10px;padding:12px;display:flex;flex-direction:column;align-items:center;">
    <div style="display:flex;gap:10px;margin-bottom:10px;">
      <button id="btn-conm-1" style="padding:8px 14px;background:#3b82f6;color:#fff;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:12px;">
        Llave 1
      </button>
      <button id="btn-conm-2" style="padding:8px 14px;background:#3b82f6;color:#fff;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:12px;">
        Llave 2
      </button>
    </div>
    <svg viewBox="0 0 940 460" width="100%" style="display:block;max-width:880px;" role="img">
      ${SVG_DEFS}
      <!-- Conmutada 1 -->
      <g transform="translate(60, 110)" filter="url(#din-shadow)">
        <rect width="170" height="220" rx="10" fill="#1e293b" stroke="#475569" stroke-width="2" />
        <text x="85" y="32" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="bold">CONMUTADA 1</text>
        <circle cx="85" cy="65" r="7" fill="#8b4513" stroke="#fff" stroke-width="1.5" />
        <text x="85" y="85" text-anchor="middle" fill="#f59e0b" font-size="9">Común C (Fase)</text>
        <circle cx="45" cy="160" r="7" fill="#8b5cf6" stroke="#fff" stroke-width="1.5" />
        <text x="45" y="182" text-anchor="middle" fill="#a78bfa" font-size="9">Borne 1 (Viajero)</text>
        <circle cx="125" cy="160" r="7" fill="#f97316" stroke="#fff" stroke-width="1.5" />
        <text x="125" y="182" text-anchor="middle" fill="#fb923c" font-size="9">Borne 2 (Viajero)</text>
        <line id="blade-conm-1" x1="85" y1="65" x2="45" y2="160" stroke="#f59e0b" stroke-width="4" stroke-linecap="round" />
      </g>

      <!-- Conmutada 2 -->
      <g transform="translate(390, 110)" filter="url(#din-shadow)">
        <rect width="170" height="220" rx="10" fill="#1e293b" stroke="#475569" stroke-width="2" />
        <text x="85" y="32" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="bold">CONMUTADA 2</text>
        <circle cx="45" cy="65" r="7" fill="#8b5cf6" stroke="#fff" stroke-width="1.5" />
        <text x="45" y="85" text-anchor="middle" fill="#a78bfa" font-size="9">Borne 1 (Viajero)</text>
        <circle cx="125" cy="65" r="7" fill="#f97316" stroke="#fff" stroke-width="1.5" />
        <text x="125" y="85" text-anchor="middle" fill="#fb923c" font-size="9">Borne 2 (Viajero)</text>
        <circle cx="85" cy="160" r="7" fill="#0f172a" stroke="#fff" stroke-width="1.5" />
        <text x="85" y="182" text-anchor="middle" fill="#cbd5e1" font-size="9">Común C (Retorno)</text>
        <line id="blade-conm-2" x1="85" y1="160" x2="45" y2="65" stroke="#f59e0b" stroke-width="4" stroke-linecap="round" />
      </g>

      <!-- Lámpara -->
      <g transform="translate(710, 110)" filter="url(#din-shadow)">
        <circle cx="95" cy="110" r="75" fill="#1e293b" stroke="#475569" stroke-width="2" />
        <circle id="lamp-glow-conm" cx="95" cy="110" r="50" fill="url(#lamp-glow)" stroke="#eab308" stroke-width="2" />
        <text id="lamp-text-conm" x="95" y="195" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">ENCENDIDA</text>
      </g>

      <!-- Cables -->
      <path d="M 20 175 L 145 175" stroke="#8b4513" stroke-width="4.5" fill="none" />
      <path d="M 105 270 L 105 360 L 435 360 L 435 175" stroke="#8b5cf6" stroke-width="4" fill="none" />
      <path d="M 185 270 L 185 390 L 515 390 L 515 175" stroke="#f97316" stroke-width="4" fill="none" />
      <path d="M 475 270 L 805 270 L 805 110" stroke="#0f172a" stroke-width="4.5" fill="none" />
      <path d="M 20 70 L 750 70 L 750 110" stroke="#0284c7" stroke-width="4.5" fill="none" />
    </svg>
  </div>`;
}

// Fallback por si la guía aún no tiene dibujo específico
function renderFallbackBoxes(nodes) {
  const W = 360;
  const boxH = 50, gap = 34;
  const totalH = nodes.length * boxH + (nodes.length - 1) * gap + 24;
  let y = 12;
  const parts = [];
  nodes.forEach((n, i) => {
    const color = NODE_COLOR[n.k] || NODE_COLOR.control;
    const bg = NODE_BG[n.k] || NODE_BG.control;
    parts.push(`
      <rect x="30" y="${y}" width="300" height="${boxH}" rx="10" fill="${bg}" stroke="${color}" stroke-width="1.3"/>
      <text x="180" y="${y + (n.sub ? 21 : 29)}" text-anchor="middle" font-size="13.5" font-weight="700" fill="${color}" font-family="sans-serif">${escXml(n.t)}</text>
      ${n.sub ? `<text x="180" y="${y + 37}" text-anchor="middle" font-size="10.5" fill="${color}" opacity="0.8" font-family="sans-serif">${escXml(n.sub)}</text>` : ''}
    `);
    if (i < nodes.length - 1) {
      const y1 = y + boxH, y2 = y + boxH + gap;
      parts.push(`<line x1="180" y1="${y1}" x2="180" y2="${y2 - 8}" stroke="var(--text-dim,#5c6675)" stroke-width="1.6"/>
        <path d="M180,${y2 - 8} l-5,-9 l10,0 z" fill="var(--text-dim,#5c6675)"/>`);
    }
    y += boxH + gap;
  });
  return `<svg viewBox="0 0 ${W} ${totalH}" width="100%" role="img" style="display:block;">${parts.join('')}</svg>`;
}

const DETAILED_DIAGRAMS = {
  'punto-simple': svgPuntoSimple,
  'conmutada': svgConmutada,
};

export function renderCircuitDiagramSvg(nodes, guiaId) {
  if (guiaId && DETAILED_DIAGRAMS[guiaId]) {
    return DETAILED_DIAGRAMS[guiaId]();
  }
  return renderFallbackBoxes(nodes);
}

// -------------------------------------------------------------
// CONTROLADOR DE INTERACTIVIDAD (Event Listeners en vivo)
// -------------------------------------------------------------
export function initCircuitInteractions(guiaId) {
  if (guiaId === 'punto-simple') {
    let isOn = false;
    const toggle = () => {
      isOn = !isOn;
      const blade = document.getElementById('switch-blade');
      const glow = document.getElementById('lamp-glow-circle');
      const text = document.getElementById('lamp-text');
      const switchText = document.getElementById('switch-state-text');
      const cableRetorno = document.getElementById('cable-retorno');

      if (blade) {
        blade.setAttribute('x2', isOn ? '115' : '105');
        blade.setAttribute('y2', isOn ? '90' : '70');
      }
      if (switchText) {
        switchText.textContent = isOn ? 'CERRADO (ON)' : 'ABIERTO (OFF)';
        switchText.setAttribute('fill', isOn ? '#22c55e' : '#ef4444');
      }
      if (glow) {
        glow.setAttribute('fill', isOn ? 'url(#lamp-glow)' : '#1e293b');
        glow.setAttribute('stroke', isOn ? '#eab308' : '#64748b');
      }
      if (cableRetorno) {
        cableRetorno.setAttribute('stroke', isOn ? '#eab308' : '#475569');
      }
      if (text) {
        text.textContent = isOn ? 'LÁMPARA ENCENDIDA (220V)' : 'LÁMPARA APAGADA';
        text.setAttribute('fill', isOn ? '#facc15' : '#94a3b8');
      }
    };

    const btn = document.getElementById('btn-toggle-switch');
    const llaveBox = document.getElementById('click-llave-unipolar');
    if (btn) btn.onclick = toggle;
    if (llaveBox) llaveBox.onclick = toggle;
  }

  if (guiaId === 'conmutada') {
    let s1 = 1; // 1 o 2
    let s2 = 1; // 1 o 2

    const updateConm = () => {
      const isOn = s1 === s2;
      const blade1 = document.getElementById('blade-conm-1');
      const blade2 = document.getElementById('blade-conm-2');
      const glow = document.getElementById('lamp-glow-conm');
      const text = document.getElementById('lamp-text-conm');

      if (blade1) blade1.setAttribute('x2', s1 === 1 ? '45' : '125');
      if (blade2) blade2.setAttribute('x2', s2 === 1 ? '45' : '125');

      if (glow) {
        glow.setAttribute('fill', isOn ? 'url(#lamp-glow)' : '#1e293b');
        glow.setAttribute('stroke', isOn ? '#eab308' : '#64748b');
      }
      if (text) {
        text.textContent = isOn ? 'LÁMPARA ENCENDIDA' : 'LÁMPARA APAGADA';
        text.setAttribute('fill', isOn ? '#f8fafc' : '#64748b');
      }
    };

    const btn1 = document.getElementById('btn-conm-1');
    const btn2 = document.getElementById('btn-conm-2');
    if (btn1) btn1.onclick = () => { s1 = s1 === 1 ? 2 : 1; updateConm(); };
    if (btn2) btn2.onclick = () => { s2 = s2 === 1 ? 2 : 1; updateConm(); };
  }
}

export const CATEGORIAS_GUIA = ['Iluminación', 'Tablero y protecciones', 'Bombas de agua', 'Motores', 'Circuitos dedicados'];

export const GUIAS = [
  // --- Iluminación ---
  {
    id: 'punto-simple', categoria: 'Iluminación', nombre: 'Punto de luz simple', nivel: 'Básico',
    diagrama: [{ t: 'Llave de un punto', k: 'control' }, { t: 'Lámpara', k: 'carga' }],
    materiales: ['Llave de un punto', 'Cable 1,5 mm² (2 hilos)', 'Caja rectangular', 'Caja octogonal', 'Portalámparas'],
    pasos: [
      'Llevar fase a un borne de la llave.',
      'Del otro borne de la llave, cable hacia el portalámparas.',
      'Neutro directo desde el tablero hasta el portalámparas (no pasa por la llave).',
      'La llave siempre corta la fase, nunca el neutro.',
    ],
  },
  {
    id: 'conmutada', categoria: 'Iluminación', nombre: 'Conmutada (2 puntos)', nivel: 'Básico',
    diagrama: [{ t: 'Llave conmutada 1', k: 'control' }, { t: 'Llave conmutada 2', k: 'control' }, { t: 'Lámpara', k: 'carga' }],
    materiales: ['2 llaves de combinación (conmutadas)', 'Cable 1,5 mm²', '2 cajas rectangulares', 'Caja octogonal'],
    pasos: [
      'Fase al común de la primera llave conmutada.',
      'Los dos "viajeros" (cables intermedios) unen ambas llaves entre sí.',
      'Del común de la segunda llave, cable hacia la lámpara.',
      'Neutro directo del tablero a la lámpara.',
      'Cualquiera de las dos llaves prende o apaga, sin importar cómo quedó la otra.',
    ],
  },
  {
    id: 'cruzamiento', categoria: 'Iluminación', nombre: 'Combinada / cruzamiento (3+ puntos)', nivel: 'Intermedio',
    diagrama: [{ t: 'Llave conmutada 1', k: 'control' }, { t: 'Llave de cruzamiento', k: 'control', sub: 'una o más' }, { t: 'Llave conmutada 2', k: 'control' }, { t: 'Lámpara', k: 'carga' }],
    materiales: ['2 llaves conmutadas', '1 o más llaves de cruzamiento (4 vías)', 'Cable 1,5 mm²', 'Cajas rectangulares', 'Caja octogonal'],
    pasos: [
      'Los dos extremos van con llaves conmutadas (igual que en el punto anterior).',
      'Cada punto intermedio (pasillo largo, varias entradas) lleva una llave de cruzamiento entre los dos viajeros.',
      'La de cruzamiento invierte los dos viajeros al accionarse, sin importar el resto.',
      'Cualquier llave, desde cualquier punto, prende o apaga la lámpara.',
    ],
  },
  {
    id: 'escalera-automatica', categoria: 'Iluminación', nombre: 'Escalera automática (telerruptor/temporizador)', nivel: 'Intermedio',
    diagrama: [{ t: 'Pulsadores (varios pisos)', k: 'control' }, { t: 'Telerruptor o temporizador', k: 'control', sub: 'bobina 220V' }, { t: 'Lámparas de escalera', k: 'carga' }],
    materiales: ['Telerruptor (o temporizador de escalera)', 'Pulsadores luminosos (uno por piso)', 'Cable 1,5 mm²', 'Cajas rectangulares'],
    pasos: [
      'Todos los pulsadores se conectan en paralelo a la bobina del telerruptor (no llevan corriente de la lámpara, solo un pulso).',
      'El telerruptor conmuta la fase real hacia las lámparas cada vez que se pulsa.',
      'Con temporizador: al pulsar, enciende y se apaga solo pasado el tiempo ajustado.',
      'Con telerruptor simple: cada pulso cambia el estado (prendido/apagado), como un interruptor a distancia.',
    ],
  },
  {
    id: 'fotocelula', categoria: 'Iluminación', nombre: 'Encendido con fotocélula', nivel: 'Básico',
    diagrama: [{ t: 'Fotocélula', k: 'control', sub: 'sensor de luz' }, { t: 'Contactor (opcional, cargas grandes)', k: 'control' }, { t: 'Luces exteriores', k: 'carga' }],
    materiales: ['Fotocélula crepuscular', 'Contactor (si son muchas luminarias)', 'Cable 1,5-2,5 mm²'],
    pasos: [
      'La fotocélula se instala mirando al cielo, sin luz artificial directa encima.',
      'Fase de red entra a la fotocélula; su salida alimenta las luces (o la bobina del contactor si son muchas).',
      'Al oscurecer, la fotocélula cierra el circuito y prende sola; al amanecer, corta.',
      'Para muchas luminarias, la fotocélula comanda un contactor y el contactor mueve la carga real.',
    ],
  },
  {
    id: 'dimmer', categoria: 'Iluminación', nombre: 'Dimmer (regulador de intensidad)', nivel: 'Básico',
    diagrama: [{ t: 'Dimmer', k: 'control' }, { t: 'Lámpara regulable', k: 'carga', sub: 'LED dimerizable' }],
    materiales: ['Módulo dimmer', 'Cable 1,5 mm²', 'Caja rectangular'],
    pasos: [
      'Reemplaza a la llave simple: fase entra al dimmer, sale hacia la lámpara.',
      'Verificar que la lámpara sea LED "dimerizable" — un LED común puede parpadear o quemarse.',
      'Neutro directo del tablero a la lámpara, igual que en un punto simple.',
    ],
  },

  // --- Tablero y protecciones ---
  {
    id: 'tablero-unifilar', categoria: 'Tablero y protecciones', nombre: 'Esquema unifilar de tablero principal', nivel: 'Intermedio',
    diagrama: [{ t: 'Acometida / medidor', k: 'fuente' }, { t: 'Interruptor general', k: 'proteccion' }, { t: 'Diferencial 30mA', k: 'proteccion' }, { t: 'Termomagnéticas por circuito', k: 'control' }, { t: 'Circuitos (IUG / TUG / TUE)', k: 'carga' }],
    materiales: ['Interruptor general', 'Diferencial(es) 30mA', 'Termomagnéticas por circuito', 'Gabinete y riel DIN', 'Borne de tierra (PE)'],
    pasos: [
      'La acometida entra al interruptor general (corta todo el tablero).',
      'De ahí a uno o más diferenciales de 30mA (según cuántos circuitos agrupe cada uno).',
      'De cada diferencial salen las termomagnéticas, una por circuito.',
      'Cada circuito sale ya protegido en fase, con neutro y tierra propios hasta las bocas.',
      'Ver la pestaña "Grado de Electrificación" para la cantidad de circuitos según tu caso.',
    ],
  },
  {
    id: 'jabalina-tablero', categoria: 'Tablero y protecciones', nombre: 'Puesta a tierra — conexión al tablero', nivel: 'Intermedio',
    diagrama: [{ t: 'Jabalina(s) en tierra', k: 'fuente' }, { t: 'Cable de tierra principal', k: 'control' }, { t: 'Borne PE del tablero', k: 'carga' }],
    materiales: ['Jabalina(s) copperweld', 'Cable de Cu 10-25mm² verde-amarillo', 'Conector cuproaluminotérmico o a cuña', 'Caja de inspección'],
    pasos: [
      'Hincar la jabalina en tierra, fuera de la huella de la construcción.',
      'Dejar una caja de inspección accesible sobre la jabalina (nunca bajo piso terminado).',
      'Cable de tierra principal, entubado, desde la jabalina hasta el borne PE del tablero.',
      'Desde el borne PE, un cable verde-amarillo propio a cada circuito (nunca compartido con el neutro).',
      'Ver la pestaña "Puesta a tierra" para calcular cuántas jabalinas hacen falta según tu suelo.',
    ],
  },
  {
    id: 'transferencia-manual', categoria: 'Tablero y protecciones', nombre: 'Tablero de transferencia manual (grupo electrógeno)', nivel: 'Avanzado',
    diagrama: [{ t: 'Red / Generador', k: 'fuente', sub: 'dos fuentes' }, { t: 'Llave conmutadora (inversora)', k: 'control' }, { t: 'Tablero de la vivienda', k: 'carga' }],
    materiales: ['Llave inversora (conmutadora) de doble vía', 'Cable acorde a la carga', 'Gabinete propio'],
    pasos: [
      'La llave inversora tiene dos posiciones: Red o Generador, nunca las dos juntas.',
      'Nunca puentear red y generador directo — daña el generador y es peligroso para la cuadrilla de la distribuidora.',
      'Antes de pasar a Generador, cortar el interruptor general de la red.',
      'El generador alimenta solo los circuitos elegidos (no toda la casa, salvo que esté sobredimensionado).',
    ],
  },
  {
    id: 'diferencial-termica', categoria: 'Tablero y protecciones', nombre: 'Diferencial + térmica por circuito', nivel: 'Básico',
    diagrama: [{ t: 'Diferencial 30mA (general del grupo)', k: 'proteccion' }, { t: 'Termomagnética del circuito', k: 'control' }, { t: 'Bocas del circuito', k: 'carga' }],
    materiales: ['Diferencial 30mA', 'Termomagnética (curva C, calibre según circuito)', 'Cableado del circuito'],
    pasos: [
      'El diferencial va aguas arriba, protegiendo un grupo de circuitos (o uno solo, en instalaciones grandes).',
      'Cada circuito individual lleva su propia termomagnética, calibrada a la sección de su cable (ver "Ampacidad del cable").',
      'El diferencial detecta fuga a tierra (protege personas); la térmica detecta sobrecarga/cortocircuito (protege el cable).',
      'Ambas protecciones son necesarias — una no reemplaza a la otra.',
    ],
  },

  // --- Bombas de agua ---
  {
    id: 'bomba-flotante', categoria: 'Bombas de agua', nombre: 'Arranque automático de bomba con flotante', nivel: 'Intermedio',
    diagrama: [{ t: 'Red 220V', k: 'fuente' }, { t: 'Transformador 24V', k: 'control', sub: 'aísla el mando' }, { t: 'Flotante (automático de tanque)', k: 'control', sub: 'corta al llenarse' }, { t: 'Contactor 24V', k: 'control' }, { t: 'Bomba', k: 'carga' }],
    materiales: ['Automático de tanque tipo italiano (flotante)', 'Transformador 220V/24V', 'Contactor bobina 24V', 'Térmica de protección', 'Selector Manual/Automático (opcional)'],
    pasos: [
      'Montar el flotante en el tanque, contrapeso hacia abajo.',
      'Cablear el transformador a la red y su salida de 24V al flotante.',
      'Conectar el flotante a la bobina del contactor.',
      'Conectar la salida de potencia del contactor a la bomba.',
      'Probar: al vaciarse el tanque, el flotante cierra el contacto y la bomba arranca sola; al llenarse, corta.',
    ],
  },
  {
    id: 'bomba-presostato', categoria: 'Bombas de agua', nombre: 'Bomba con presostato', nivel: 'Intermedio',
    diagrama: [{ t: 'Red 220V', k: 'fuente' }, { t: 'Presostato', k: 'control', sub: 'corta por presión' }, { t: 'Bomba', k: 'carga' }],
    materiales: ['Presostato ajustable', 'Tanque hidroneumático (si aplica)', 'Cable 2,5mm²', 'Térmica de protección'],
    pasos: [
      'El presostato se instala en la cañería de salida de la bomba.',
      'Ajustar presión de arranque (mínima) y de corte (máxima) según el sistema.',
      'Fase de red entra al presostato, sale hacia la bomba.',
      'La bomba arranca cuando la presión de red cae por debajo del mínimo, y corta al alcanzar el máximo.',
      'A diferencia del flotante, no depende de un tanque elevado — mantiene presión directa.',
    ],
  },
  {
    id: 'bomba-alternancia', categoria: 'Bombas de agua', nombre: 'Doble bomba con alternancia', nivel: 'Avanzado',
    diagrama: [{ t: 'Flotante / presostato', k: 'control' }, { t: 'Relé de alternancia', k: 'control', sub: 'turna las bombas' }, { t: 'Bomba A / Bomba B', k: 'carga', sub: 'una por vez' }],
    materiales: ['Relé de alternancia (o PLC simple)', '2 contactores', '2 térmicas', 'Flotante o presostato de mando'],
    pasos: [
      'El sensor (flotante o presostato) da la orden de arranque al relé de alternancia.',
      'El relé alterna cuál bomba arranca cada vez, repartiendo el desgaste.',
      'Cada bomba tiene su propio contactor y térmica independientes.',
      'Si una bomba falla, el sistema puede configurarse para que la otra tome el relevo (backup).',
    ],
  },
  {
    id: 'bomba-selector', categoria: 'Bombas de agua', nombre: 'Selector Manual/Automático para bomba', nivel: 'Básico',
    diagrama: [{ t: 'Flotante', k: 'control' }, { t: 'Selector Manual / 0 / Automático', k: 'control' }, { t: 'Bomba', k: 'carga' }],
    materiales: ['Selector de 3 posiciones (Manual-0-Automático)', 'Cableado del circuito de mando existente'],
    pasos: [
      'En posición Automático, el flotante manda como siempre.',
      'En posición Manual, se puentea el flotante y la bomba arranca igual (para forzar el llenado).',
      'En posición 0, la bomba queda cortada sin importar el flotante (para mantenimiento).',
      'Útil para probar la bomba sin esperar a que el tanque se vacíe.',
    ],
  },

  // --- Motores ---
  {
    id: 'motor-directo-mono', categoria: 'Motores', nombre: 'Arranque directo de motor monofásico', nivel: 'Básico',
    diagrama: [{ t: 'Red 220V', k: 'fuente' }, { t: 'Guardamotor / térmica', k: 'proteccion' }, { t: 'Motor monofásico', k: 'carga' }],
    materiales: ['Guardamotor regulable (o térmica + contactor)', 'Cable según potencia', 'Llave de corte'],
    pasos: [
      'Ajustar el guardamotor a la corriente nominal de la placa del motor.',
      'Fase y neutro del circuito al guardamotor, salida al motor.',
      'Para arranque a distancia, agregar contactor comandado por pulsadores o automatismo.',
      'Ver "Contactor / motor" en Cálculos para el calibre exacto según la potencia.',
    ],
  },
  {
    id: 'motor-directo-tri', categoria: 'Motores', nombre: 'Arranque directo de motor trifásico', nivel: 'Intermedio',
    diagrama: [{ t: 'Red 380V', k: 'fuente' }, { t: 'Guardamotor', k: 'proteccion' }, { t: 'Contactor', k: 'control' }, { t: 'Motor trifásico', k: 'carga' }],
    materiales: ['Guardamotor', 'Contactor categoría AC-3', 'Pulsadores marcha/paro', 'Cable según potencia'],
    pasos: [
      'Las 3 fases pasan por el guardamotor (protección contra sobrecarga y falta de fase).',
      'Del guardamotor a los contactos de potencia del contactor.',
      'El contactor se comanda con pulsadores (marcha con enclavamiento, paro) o un automatismo.',
      'Salida del contactor a las 3 bornes del motor (U-V-W).',
    ],
  },
  {
    id: 'motor-inversion', categoria: 'Motores', nombre: 'Inversión de giro de motor', nivel: 'Avanzado',
    diagrama: [{ t: 'Red 380V', k: 'fuente' }, { t: 'Guardamotor', k: 'proteccion' }, { t: 'Contactor Adelante / Contactor Atrás', k: 'control', sub: 'enclavados entre sí' }, { t: 'Motor (portón, persiana)', k: 'carga' }],
    materiales: ['2 contactores enclavados eléctrica y mecánicamente', 'Guardamotor', 'Pulsadores Adelante/Atrás/Paro'],
    pasos: [
      'Dos contactores: uno da el sentido normal, el otro invierte dos de las tres fases.',
      'Los dos contactores se enclavan entre sí (eléctrica y, si es posible, mecánicamente) para que NUNCA se cierren juntos — cortocircuitaría el motor.',
      'Los pulsadores Adelante/Atrás activan un contactor u otro; el de Paro corta ambos.',
      'Uso típico: portones corredizos, persianas, motores reversibles.',
    ],
  },
  {
    id: 'motor-estrella-triangulo', categoria: 'Motores', nombre: 'Arranque estrella-triángulo', nivel: 'Avanzado',
    diagrama: [{ t: 'Red 380V', k: 'fuente' }, { t: 'Contactor de línea', k: 'control' }, { t: 'Contactor Estrella → Triángulo', k: 'control', sub: 'temporizado' }, { t: 'Motor trifásico grande', k: 'carga' }],
    materiales: ['3 contactores (línea, estrella, triángulo)', 'Relé temporizador', 'Guardamotor', 'Motor con las 6 bornes accesibles'],
    pasos: [
      'Requiere un motor con las 6 bornes del bobinado accesibles (doble tensión).',
      'Arranca en Estrella (menor corriente de arranque, menor torque) unos segundos.',
      'El temporizador conmuta a Triángulo (tensión plena) una vez tomada velocidad.',
      'Nunca deben quedar cerrados Estrella y Triángulo al mismo tiempo — lógica de enclavamiento obligatoria.',
      'Se usa en motores grandes para no golpear la red con la corriente de arranque directo.',
    ],
  },

  // --- Circuitos dedicados ---
  {
    id: 'circuito-ac', categoria: 'Circuitos dedicados', nombre: 'Circuito dedicado para aire acondicionado', nivel: 'Básico',
    diagrama: [{ t: 'Tablero (circuito propio)', k: 'fuente' }, { t: 'Térmica exclusiva', k: 'proteccion' }, { t: 'Toma o conexión directa', k: 'carga' }],
    materiales: ['Cable 2,5-4mm² (según potencia del equipo)', 'Térmica exclusiva', 'Toma de uso específico (TUE) o conexión directa'],
    pasos: [
      'Circuito propio desde el tablero, sin compartir con otras tomas.',
      'Sección de cable según la corriente de placa del equipo (ver "Ampacidad del cable").',
      'Térmica exclusiva, dimensionada a esa misma corriente.',
      'Preferible toma de uso específico (TUE) antes que ficha común, para equipos de más de 10A.',
    ],
  },
  {
    id: 'circuito-termotanque', categoria: 'Circuitos dedicados', nombre: 'Circuito dedicado para termotanque eléctrico', nivel: 'Básico',
    diagrama: [{ t: 'Tablero (circuito propio)', k: 'fuente' }, { t: 'Térmica exclusiva', k: 'proteccion' }, { t: 'Termotanque', k: 'carga' }],
    materiales: ['Cable 4-6mm²', 'Térmica exclusiva 25-32A', 'Llave de corte cerca del termotanque (recomendado)'],
    pasos: [
      'Circuito propio, nunca compartido con tomas comunes.',
      'Sección 4 o 6mm² según la potencia del termotanque (ver placa del equipo).',
      'Agregar una llave de corte visible cerca del artefacto, para mantenimiento seguro.',
      'Verificar puesta a tierra: el termotanque debe tener su masa conectada a tierra.',
    ],
  },
  {
    id: 'portero-electrico', categoria: 'Circuitos dedicados', nombre: 'Portero eléctrico / timbre', nivel: 'Básico',
    diagrama: [{ t: 'Transformador 12-24V', k: 'fuente' }, { t: 'Pulsador / botonera', k: 'control' }, { t: 'Campanilla o abrepuertas', k: 'carga' }],
    materiales: ['Transformador de timbre 12-24V', 'Cable de bajo voltaje (bipolar fino)', 'Pulsador o botonera', 'Campanilla o cerradura eléctrica (abrepuertas)'],
    pasos: [
      'El transformador baja la tensión de red a un circuito seguro de 12-24V.',
      'El pulsador está siempre en baja tensión — no lleva 220V en ningún tramo hacia la puerta.',
      'Al presionar, cierra el circuito y suena la campanilla o libera el abrepuertas.',
      'Para porteros con portero visor o video, seguir el esquema propio del equipo (mismo principio de baja tensión).',
    ],
  },
];

export function getGuia(id) { return GUIAS.find(g => g.id === id); }
