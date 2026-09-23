// simbolosData.js — 160 Símbolos Normalizados (80 Plano + 80 Unifilar)
export const SIMBOLOS_PLANOS = [
  {
    "id": "plano-1",
    "numero": 1,
    "nombre": "Boca de Salida para Centro de Iluminación en Techo",
    "categoria": "Alumbrado e Iluminación",
    "descripcion": "Círculo con cruz inscrita simétrica que identifica la boca de luz de techo.",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"28\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"14\" y1=\"50\" x2=\"86\" y2=\"50\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <line x1=\"50\" y1=\"14\" x2=\"50\" y2=\"86\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <circle cx=\"50\" cy=\"50\" r=\"3.5\" fill=\"#0d80ef\" />\n    "
  },
  {
    "id": "plano-2",
    "numero": 2,
    "nombre": "Boca de Iluminación en Pared (Aplique / Braquete)",
    "categoria": "Alumbrado e Iluminación",
    "descripcion": "Semicírculo adosado a la línea continua gruesa de pared con trazo perpendicular.",
    "svg": "\n      <line x1=\"16\" y1=\"76\" x2=\"84\" y2=\"76\" stroke=\"#182233\" stroke-width=\"4.5\" stroke-linecap=\"square\" />\n      <path d=\"M 26 76 A 24 24 0 0 1 74 76\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"50\" y1=\"52\" x2=\"50\" y2=\"24\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <line x1=\"32\" y1=\"38\" x2=\"68\" y2=\"38\" stroke=\"#182233\" stroke-width=\"2\" stroke-linecap=\"round\" />\n    "
  },
  {
    "id": "plano-3",
    "numero": 3,
    "nombre": "Artefacto de Alumbrado Fluorescente / Tubo Lineal",
    "categoria": "Alumbrado e Iluminación",
    "descripcion": "Representación rectangular con cruz interior para luminarias de descarga o tubos.",
    "svg": "\n      <rect x=\"18\" y=\"36\" width=\"64\" height=\"28\" rx=\"2\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"18\" y1=\"36\" x2=\"82\" y2=\"64\" stroke=\"#182233\" stroke-width=\"2\" stroke-linecap=\"round\" />\n      <line x1=\"18\" y1=\"64\" x2=\"82\" y2=\"36\" stroke=\"#182233\" stroke-width=\"2\" stroke-linecap=\"round\" />\n      <circle cx=\"50\" cy=\"50\" r=\"3\" fill=\"#0d80ef\" />\n    "
  },
  {
    "id": "plano-4",
    "numero": 4,
    "nombre": "Tomacorriente Bipolar con Toma de Tierra (2P+T)",
    "categoria": "Tomas de Corriente",
    "descripcion": "Semicírculo con dos polos de conexión y derivación a tierra según norma argentina IRAM 2071.",
    "svg": "\n      <path d=\"M 22 62 A 28 28 0 0 1 78 62 Z\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"50\" y1=\"34\" x2=\"50\" y2=\"18\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <line x1=\"38\" y1=\"18\" x2=\"62\" y2=\"18\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <line x1=\"34\" y1=\"62\" x2=\"34\" y2=\"76\" stroke=\"#182233\" stroke-width=\"2\" stroke-linecap=\"round\" />\n      <line x1=\"66\" y1=\"62\" x2=\"66\" y2=\"76\" stroke=\"#182233\" stroke-width=\"2\" stroke-linecap=\"round\" />\n    "
  },
  {
    "id": "plano-5",
    "numero": 5,
    "nombre": "Tomacorriente para Fuerza Motriz / Especial (Uso Pesado)",
    "categoria": "Tomas de Corriente",
    "descripcion": "Semicírculo con relleno pleno que distingue tomas de fuerza motriz o de uso especial >10A.",
    "svg": "\n      <path d=\"M 22 62 A 28 28 0 0 1 78 62 Z\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#182233\" />\n      <line x1=\"50\" y1=\"34\" x2=\"50\" y2=\"18\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <line x1=\"38\" y1=\"18\" x2=\"62\" y2=\"18\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <line x1=\"34\" y1=\"62\" x2=\"34\" y2=\"76\" stroke=\"#182233\" stroke-width=\"2\" stroke-linecap=\"round\" />\n      <line x1=\"66\" y1=\"62\" x2=\"66\" y2=\"76\" stroke=\"#182233\" stroke-width=\"2\" stroke-linecap=\"round\" />\n    "
  },
  {
    "id": "plano-6",
    "numero": 6,
    "nombre": "Tomacorriente Bipolar Simple (Sin Tierra - Existente)",
    "categoria": "Tomas de Corriente",
    "descripcion": "Semicírculo simple sin borne de protección, representativo de tomas clase 0 en relevamientos.",
    "svg": "\n      <path d=\"M 22 62 A 28 28 0 0 1 78 62 Z\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"34\" y1=\"62\" x2=\"34\" y2=\"78\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <line x1=\"66\" y1=\"62\" x2=\"66\" y2=\"78\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <text x=\"50\" y=\"52\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#64748b\" text-anchor=\"middle\">2P</text>\n    "
  },
  {
    "id": "plano-7",
    "numero": 7,
    "nombre": "Tomacorriente Trifásico con Tierra (3P+T)",
    "categoria": "Tomas de Corriente",
    "descripcion": "Toma de tres fases más tierra para maquinarias o motores industriales.",
    "svg": "\n      <path d=\"M 20 62 A 30 30 0 0 1 80 62 Z\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"32\" y1=\"62\" x2=\"32\" y2=\"78\" stroke=\"#182233\" stroke-width=\"2\" stroke-linecap=\"round\" />\n      <line x1=\"50\" y1=\"62\" x2=\"50\" y2=\"78\" stroke=\"#182233\" stroke-width=\"2\" stroke-linecap=\"round\" />\n      <line x1=\"68\" y1=\"62\" x2=\"68\" y2=\"78\" stroke=\"#182233\" stroke-width=\"2\" stroke-linecap=\"round\" />\n      <line x1=\"50\" y1=\"32\" x2=\"50\" y2=\"16\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"40\" y1=\"16\" x2=\"60\" y2=\"16\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <text x=\"50\" y=\"52\" font-family=\"'JetBrains Mono', monospace\" font-size=\"9\" font-weight=\"700\" fill=\"#0d80ef\" text-anchor=\"middle\">3P+T</text>\n    "
  },
  {
    "id": "plano-8",
    "numero": 8,
    "nombre": "Tomacorriente Doble en Misma Caja (2 x 2P+T)",
    "categoria": "Tomas de Corriente",
    "descripcion": "Par de semicírculos adyacentes indicando dos tomas independientes montados sobre un mismo bastidor.",
    "svg": "\n      <path d=\"M 16 64 A 20 20 0 0 1 48 64 Z\" stroke=\"#182233\" stroke-width=\"2.2\" fill=\"#f8fafc\" />\n      <path d=\"M 52 64 A 20 20 0 0 1 84 64 Z\" stroke=\"#182233\" stroke-width=\"2.2\" fill=\"#f8fafc\" />\n      <line x1=\"32\" y1=\"44\" x2=\"32\" y2=\"28\" stroke=\"#182233\" stroke-width=\"2\" />\n      <line x1=\"68\" y1=\"44\" x2=\"68\" y2=\"28\" stroke=\"#182233\" stroke-width=\"2\" />\n      <line x1=\"24\" y1=\"28\" x2=\"76\" y2=\"28\" stroke=\"#182233\" stroke-width=\"2\" />\n      <line x1=\"50\" y1=\"28\" x2=\"50\" y2=\"16\" stroke=\"#182233\" stroke-width=\"2.5\" />\n    "
  },
  {
    "id": "plano-9",
    "numero": 9,
    "nombre": "Tomacorriente Estanco / Protegido para Intemperie",
    "categoria": "Tomas de Corriente",
    "descripcion": "Tomacorriente con marco punteado que indica grado de protección mínima IP44/IP54.",
    "svg": "\n      <rect x=\"18\" y=\"20\" width=\"64\" height=\"56\" rx=\"5\" stroke=\"#182233\" stroke-width=\"2.2\" stroke-dasharray=\"4 3\" fill=\"#f8fafc\" />\n      <path d=\"M 28 58 A 22 22 0 0 1 72 58 Z\" stroke=\"#182233\" stroke-width=\"2.2\" fill=\"#e2e8f0\" />\n      <line x1=\"50\" y1=\"36\" x2=\"50\" y2=\"26\" stroke=\"#182233\" stroke-width=\"2\" />\n      <line x1=\"42\" y1=\"26\" x2=\"58\" y2=\"26\" stroke=\"#182233\" stroke-width=\"2\" />\n      <text x=\"50\" y=\"70\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#0d80ef\" text-anchor=\"middle\">ESTANCO</text>\n    "
  },
  {
    "id": "plano-10",
    "numero": 10,
    "nombre": "Interruptor Unipolar de Un Efecto (Punto Simple)",
    "categoria": "Aparatos de Maniobra",
    "descripcion": "Círculo con trazo a 45° rematado en bandera que indica un contacto unipolar de apertura.",
    "svg": "\n      <circle cx=\"50\" cy=\"52\" r=\"14\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"50\" y1=\"52\" x2=\"74\" y2=\"28\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <line x1=\"74\" y1=\"28\" x2=\"82\" y2=\"36\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <circle cx=\"50\" cy=\"52\" r=\"3.5\" fill=\"#182233\" />\n    "
  },
  {
    "id": "plano-11",
    "numero": 11,
    "nombre": "Interruptor Bipolar de Un Efecto (Corte de 2 Polos)",
    "categoria": "Aparatos de Maniobra",
    "descripcion": "Círculo con brazo de comando provisto de dos trazos transversales indicando 2 polos.",
    "svg": "\n      <circle cx=\"50\" cy=\"54\" r=\"14\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"50\" y1=\"54\" x2=\"76\" y2=\"28\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <line x1=\"76\" y1=\"28\" x2=\"84\" y2=\"36\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <!-- Dos marcas transversales de bipolar -->\n      <line x1=\"60\" y1=\"36\" x2=\"68\" y2=\"44\" stroke=\"#0d80ef\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <line x1=\"54\" y1=\"42\" x2=\"62\" y2=\"50\" stroke=\"#0d80ef\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <circle cx=\"50\" cy=\"54\" r=\"3.5\" fill=\"#182233\" />\n    "
  },
  {
    "id": "plano-12",
    "numero": 12,
    "nombre": "Interruptor de Dos Efectos (Doble Punto Independiente)",
    "categoria": "Aparatos de Maniobra",
    "descripcion": "Dos brazos independientes que salen del mismo centro para maniobrar dos centros de luz.",
    "svg": "\n      <circle cx=\"50\" cy=\"56\" r=\"14\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"42\" y1=\"48\" x2=\"26\" y2=\"24\" stroke=\"#182233\" stroke-width=\"2.2\" stroke-linecap=\"round\" />\n      <line x1=\"26\" y1=\"24\" x2=\"18\" y2=\"30\" stroke=\"#182233\" stroke-width=\"2.2\" stroke-linecap=\"round\" />\n      <line x1=\"58\" y1=\"48\" x2=\"74\" y2=\"24\" stroke=\"#182233\" stroke-width=\"2.2\" stroke-linecap=\"round\" />\n      <line x1=\"74\" y1=\"24\" x2=\"82\" y2=\"30\" stroke=\"#182233\" stroke-width=\"2.2\" stroke-linecap=\"round\" />\n      <circle cx=\"50\" cy=\"56\" r=\"3.5\" fill=\"#182233\" />\n    "
  },
  {
    "id": "plano-13",
    "numero": 13,
    "nombre": "Interruptor de Tres Efectos (Triple Llave)",
    "categoria": "Aparatos de Maniobra",
    "descripcion": "Tres brazos de comando unipolar agrupados en un único artefacto de maniobra.",
    "svg": "\n      <circle cx=\"50\" cy=\"60\" r=\"14\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"42\" y1=\"52\" x2=\"24\" y2=\"30\" stroke=\"#182233\" stroke-width=\"2.2\" stroke-linecap=\"round\" />\n      <line x1=\"24\" y1=\"30\" x2=\"16\" y2=\"36\" stroke=\"#182233\" stroke-width=\"2.2\" stroke-linecap=\"round\" />\n      <line x1=\"50\" y1=\"46\" x2=\"50\" y2=\"20\" stroke=\"#182233\" stroke-width=\"2.2\" stroke-linecap=\"round\" />\n      <line x1=\"50\" y1=\"20\" x2=\"58\" y2=\"20\" stroke=\"#182233\" stroke-width=\"2.2\" stroke-linecap=\"round\" />\n      <line x1=\"58\" y1=\"52\" x2=\"76\" y2=\"30\" stroke=\"#182233\" stroke-width=\"2.2\" stroke-linecap=\"round\" />\n      <line x1=\"76\" y1=\"30\" x2=\"84\" y2=\"36\" stroke=\"#182233\" stroke-width=\"2.2\" stroke-linecap=\"round\" />\n      <circle cx=\"50\" cy=\"60\" r=\"3.5\" fill=\"#182233\" />\n    "
  },
  {
    "id": "plano-14",
    "numero": 14,
    "nombre": "Interruptor de Combinación (Conmutador de 2 Vías)",
    "categoria": "Aparatos de Maniobra",
    "descripcion": "Conmutador de dos direcciones con dos brazos opuestos simétricos para control desde 2 accesos.",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"14\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"50\" y1=\"50\" x2=\"72\" y2=\"28\" stroke=\"#182233\" stroke-width=\"2.2\" stroke-linecap=\"round\" />\n      <line x1=\"72\" y1=\"28\" x2=\"80\" y2=\"34\" stroke=\"#182233\" stroke-width=\"2.2\" stroke-linecap=\"round\" />\n      <line x1=\"50\" y1=\"50\" x2=\"28\" y2=\"72\" stroke=\"#182233\" stroke-width=\"2.2\" stroke-linecap=\"round\" />\n      <line x1=\"28\" y1=\"72\" x2=\"20\" y2=\"66\" stroke=\"#182233\" stroke-width=\"2.2\" stroke-linecap=\"round\" />\n      <circle cx=\"50\" cy=\"50\" r=\"3.5\" fill=\"#182233\" />\n    "
  },
  {
    "id": "plano-15",
    "numero": 15,
    "nombre": "Interruptor de Cruzamiento (Conmutador Inversor de 4 Vías)",
    "categoria": "Aparatos de Maniobra",
    "descripcion": "Círculo con aspa cruzada interior para encendidos desde tres o más puntos.",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"16\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"38\" y1=\"38\" x2=\"62\" y2=\"62\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <line x1=\"62\" y1=\"38\" x2=\"38\" y2=\"62\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <line x1=\"50\" y1=\"34\" x2=\"50\" y2=\"16\" stroke=\"#182233\" stroke-width=\"2\" stroke-linecap=\"round\" />\n      <line x1=\"50\" y1=\"66\" x2=\"50\" y2=\"84\" stroke=\"#182233\" stroke-width=\"2\" stroke-linecap=\"round\" />\n    "
  },
  {
    "id": "plano-16",
    "numero": 16,
    "nombre": "Pulsador de Mando / Timbre (Contacto Momentáneo NA)",
    "categoria": "Aparatos de Maniobra",
    "descripcion": "Círculo exterior con botón central macizo que representa el pulsador sin retención.",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"18\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <circle cx=\"50\" cy=\"50\" r=\"8\" fill=\"#182233\" />\n      <line x1=\"50\" y1=\"32\" x2=\"50\" y2=\"16\" stroke=\"#182233\" stroke-width=\"2\" stroke-linecap=\"round\" />\n    "
  },
  {
    "id": "plano-17",
    "numero": 17,
    "nombre": "Tablero Principal de Distribución (TP)",
    "categoria": "Tableros e Instalaciones",
    "descripcion": "Rectángulo dividido diagonalmente con un sector oscurecido que denota el tablero principal.",
    "svg": "\n      <rect x=\"20\" y=\"24\" width=\"60\" height=\"52\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#ffffff\" />\n      <polygon points=\"20,24 80,24 20,76\" fill=\"#182233\" />\n      <text x=\"50\" y=\"90\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#182233\" text-anchor=\"middle\">TP</text>\n    "
  },
  {
    "id": "plano-18",
    "numero": 18,
    "nombre": "Tablero Seccional de Distribución (TS)",
    "categoria": "Tableros e Instalaciones",
    "descripcion": "Rectángulo con recuadro concéntrico para tableros seccionales de circuitos terminales.",
    "svg": "\n      <rect x=\"20\" y=\"24\" width=\"60\" height=\"52\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#ffffff\" />\n      <rect x=\"26\" y=\"30\" width=\"48\" height=\"40\" stroke=\"#182233\" stroke-width=\"1.8\" fill=\"#f8fafc\" />\n      <text x=\"50\" y=\"54\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0d80ef\" text-anchor=\"middle\">TS</text>\n    "
  },
  {
    "id": "plano-19",
    "numero": 19,
    "nombre": "Gabinete de Medición / Medidor de Energía (M)",
    "categoria": "Acometida y Medición",
    "descripcion": "Círculo central con letra \"M\" inscripto en recuadro que representa la caja de medidor.",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"28\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <rect x=\"22\" y=\"22\" width=\"56\" height=\"56\" rx=\"3\" stroke=\"#182233\" stroke-width=\"2\" stroke-dasharray=\"4 3\" fill=\"none\" />\n      <text x=\"50\" y=\"58\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"22\" font-weight=\"700\" fill=\"#0d80ef\" text-anchor=\"middle\">M</text>\n    "
  },
  {
    "id": "plano-20",
    "numero": 20,
    "nombre": "Caja de Conexión, Paso o Derivación",
    "categoria": "Canalizaciones y Cajas",
    "descripcion": "Cuadrado con cruz en X para cajas ortogonales o rectangulares de empalme.",
    "svg": "\n      <rect x=\"24\" y=\"24\" width=\"52\" height=\"52\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"24\" y1=\"24\" x2=\"76\" y2=\"76\" stroke=\"#182233\" stroke-width=\"2\" />\n      <line x1=\"24\" y1=\"76\" x2=\"76\" y2=\"24\" stroke=\"#182233\" stroke-width=\"2\" />\n      <circle cx=\"50\" cy=\"50\" r=\"4\" fill=\"#0d80ef\" />\n    "
  },
  {
    "id": "plano-21",
    "numero": 21,
    "nombre": "Línea de Circuito por Techo o Losa (Embutida)",
    "categoria": "Líneas y Canalizaciones",
    "descripcion": "Línea continua de trazo uniforme que representa la cañería en losa superior.",
    "svg": "\n      <line x1=\"12\" y1=\"50\" x2=\"88\" y2=\"50\" stroke=\"#182233\" stroke-width=\"3.5\" stroke-linecap=\"round\" />\n      <circle cx=\"24\" cy=\"50\" r=\"5\" fill=\"#182233\" />\n      <circle cx=\"76\" cy=\"50\" r=\"5\" fill=\"#182233\" />\n      <text x=\"50\" y=\"42\" font-family=\"'JetBrains Mono', monospace\" font-size=\"9\" font-weight=\"700\" fill=\"#0d80ef\" text-anchor=\"middle\">CAÑO EN TECHO</text>\n    "
  },
  {
    "id": "plano-22",
    "numero": 22,
    "nombre": "Línea de Circuito por Pared (Mampostería)",
    "categoria": "Líneas y Canalizaciones",
    "descripcion": "Línea a trazos discontinuos regulares que identifica canalizaciones por pared.",
    "svg": "\n      <line x1=\"12\" y1=\"50\" x2=\"88\" y2=\"50\" stroke=\"#182233\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-dasharray=\"8 6\" />\n      <circle cx=\"24\" cy=\"50\" r=\"5\" fill=\"#182233\" />\n      <circle cx=\"76\" cy=\"50\" r=\"5\" fill=\"#182233\" />\n      <text x=\"50\" y=\"42\" font-family=\"'JetBrains Mono', monospace\" font-size=\"9\" font-weight=\"700\" fill=\"#5c6675\" text-anchor=\"middle\">CAÑO EN PARED</text>\n    "
  },
  {
    "id": "plano-23",
    "numero": 23,
    "nombre": "Línea de Circuito por Piso / Enterrada en Contrapiso",
    "categoria": "Líneas y Canalizaciones",
    "descripcion": "Línea de trazo y punto para canalizaciones alojadas bajo el pavimento.",
    "svg": "\n      <line x1=\"12\" y1=\"50\" x2=\"88\" y2=\"50\" stroke=\"#182233\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-dasharray=\"12 4 3 4\" />\n      <circle cx=\"20\" cy=\"50\" r=\"5\" fill=\"#182233\" />\n      <circle cx=\"80\" cy=\"50\" r=\"5\" fill=\"#182233\" />\n      <text x=\"50\" y=\"42\" font-family=\"'JetBrains Mono', monospace\" font-size=\"9\" font-weight=\"700\" fill=\"#5c6675\" text-anchor=\"middle\">BAJO PISO</text>\n    "
  },
  {
    "id": "plano-24",
    "numero": 24,
    "nombre": "Línea Subterránea / Cable Directamente Enterrado",
    "categoria": "Líneas y Canalizaciones",
    "descripcion": "Trazo específico con flechas o triángulos que indica conductor armado protegido en zanja.",
    "svg": "\n      <line x1=\"12\" y1=\"50\" x2=\"88\" y2=\"50\" stroke=\"#182233\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-dasharray=\"14 4 2 4\" />\n      <polygon points=\"12,50 20,44 20,56\" fill=\"#182233\" />\n      <polygon points=\"88,50 80,44 80,56\" fill=\"#182233\" />\n      <text x=\"50\" y=\"42\" font-family=\"'JetBrains Mono', monospace\" font-size=\"9\" font-weight=\"700\" fill=\"#1f9d63\" text-anchor=\"middle\">SUBTERRÁNEO</text>\n    "
  },
  {
    "id": "plano-25",
    "numero": 25,
    "nombre": "Indicación de Conductores que Pasan por la Canalización",
    "categoria": "Líneas y Canalizaciones",
    "descripcion": "Marcas oblicuas o rectas: trazo largo (Fase), trazo con círculo (Neutro), trazo con T (Tierra).",
    "svg": "\n      <line x1=\"10\" y1=\"55\" x2=\"90\" y2=\"55\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <!-- Fase R -->\n      <line x1=\"28\" y1=\"36\" x2=\"28\" y2=\"68\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <!-- Neutro N -->\n      <line x1=\"44\" y1=\"36\" x2=\"44\" y2=\"68\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <circle cx=\"44\" cy=\"34\" r=\"3\" fill=\"#0d80ef\" />\n      <!-- Retorno -->\n      <line x1=\"60\" y1=\"44\" x2=\"60\" y2=\"68\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <!-- Tierra PE -->\n      <line x1=\"76\" y1=\"36\" x2=\"76\" y2=\"68\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <line x1=\"70\" y1=\"36\" x2=\"82\" y2=\"36\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n    "
  },
  {
    "id": "plano-26",
    "numero": 26,
    "nombre": "Toma de Tierra / Jabalina (Electrodo Dispersor)",
    "categoria": "Puesta a Tierra",
    "descripcion": "Tres líneas horizontales paralelas decrecientes conectadas al conductor de dispersión a tierra.",
    "svg": "\n      <line x1=\"50\" y1=\"18\" x2=\"50\" y2=\"52\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"26\" y1=\"52\" x2=\"74\" y2=\"52\" stroke=\"#182233\" stroke-width=\"3.5\" stroke-linecap=\"round\" />\n      <line x1=\"34\" y1=\"62\" x2=\"66\" y2=\"62\" stroke=\"#182233\" stroke-width=\"2.8\" stroke-linecap=\"round\" />\n      <line x1=\"42\" y1=\"72\" x2=\"58\" y2=\"72\" stroke=\"#182233\" stroke-width=\"2\" stroke-linecap=\"round\" />\n      <text x=\"78\" y=\"44\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#1f9d63\">TIERRA</text>\n    "
  },
  {
    "id": "plano-27",
    "numero": 27,
    "nombre": "Campanilla de Llamada / Timbre Eléctrico",
    "categoria": "Señalización y Avisos",
    "descripcion": "Campana acústica con semicírculo invertido y percutor de aviso.",
    "svg": "\n      <path d=\"M 28 66 A 22 22 0 0 1 72 66 Z\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"50\" y1=\"44\" x2=\"50\" y2=\"24\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <circle cx=\"50\" cy=\"20\" r=\"4\" fill=\"#0d80ef\" />\n      <line x1=\"38\" y1=\"74\" x2=\"62\" y2=\"74\" stroke=\"#182233\" stroke-width=\"2\" stroke-linecap=\"round\" />\n    "
  },
  {
    "id": "plano-28",
    "numero": 28,
    "nombre": "Zumbador Acústico de Tablero o Pared",
    "categoria": "Señalización y Avisos",
    "descripcion": "Avisador de tono continuo para alarmas o timbres secundarios.",
    "svg": "\n      <path d=\"M 28 40 A 22 22 0 0 0 72 40 Z\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"24\" y1=\"40\" x2=\"76\" y2=\"40\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <line x1=\"36\" y1=\"62\" x2=\"36\" y2=\"76\" stroke=\"#182233\" stroke-width=\"2\" stroke-linecap=\"round\" />\n      <line x1=\"64\" y1=\"62\" x2=\"64\" y2=\"76\" stroke=\"#182233\" stroke-width=\"2\" stroke-linecap=\"round\" />\n    "
  },
  {
    "id": "plano-29",
    "numero": 29,
    "nombre": "Ventilador Eléctrico / Extractor de Aire",
    "categoria": "Fuerza Motriz y Climatización",
    "descripcion": "Círculo con aspas de hélice que denota ventiladores de techo o extractores mecánicos.",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"28\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <path d=\"M 50 50 C 44 32, 56 24, 50 24 C 44 24, 46 36, 50 50 Z\" fill=\"#182233\" />\n      <path d=\"M 50 50 C 68 44, 76 56, 76 50 C 76 44, 64 46, 50 50 Z\" fill=\"#182233\" />\n      <path d=\"M 50 50 C 56 68, 44 76, 50 76 C 56 76, 54 64, 50 50 Z\" fill=\"#182233\" />\n      <path d=\"M 50 50 C 32 56, 24 44, 24 50 C 24 56, 36 54, 50 50 Z\" fill=\"#182233\" />\n      <circle cx=\"50\" cy=\"50\" r=\"4\" fill=\"#0d80ef\" />\n    "
  },
  {
    "id": "plano-30",
    "numero": 30,
    "nombre": "Luminaria Autónoma de Iluminación de Emergencia",
    "categoria": "Alumbrado Especial",
    "descripcion": "Equipo autónomo con haz lumínico y acumulador de respaldo ante falta de suministro.",
    "svg": "\n      <rect x=\"18\" y=\"30\" width=\"64\" height=\"40\" rx=\"3\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <polygon points=\"34,60 50,40 66,60\" fill=\"#182233\" />\n      <line x1=\"50\" y1=\"40\" x2=\"50\" y2=\"60\" stroke=\"#ffffff\" stroke-width=\"2\" />\n      <circle cx=\"72\" cy=\"38\" r=\"3\" fill=\"#d33d3d\" />\n      <text x=\"24\" y=\"44\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#0d80ef\">EMERG</text>\n    "
  },
  {
    "id": "plano-31",
    "numero": 31,
    "nombre": "Boca de Techo con Regulador de Intensidad (Dimmer)",
    "categoria": "Iluminación y Control",
    "descripcion": "Boca de iluminación dimerizable con flecha diagonal indicadora de variación de flujo luminoso.",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"26\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"20\" y1=\"50\" x2=\"80\" y2=\"50\" stroke=\"#182233\" stroke-width=\"2\" />\n      <line x1=\"50\" y1=\"20\" x2=\"50\" y2=\"80\" stroke=\"#182233\" stroke-width=\"2\" />\n      <line x1=\"28\" y1=\"72\" x2=\"72\" y2=\"28\" stroke=\"#0d80ef\" stroke-width=\"2.5\" />\n      <polygon points=\"72,28 62,29 71,38\" fill=\"#0d80ef\" />\n    "
  },
  {
    "id": "plano-32",
    "numero": 32,
    "nombre": "Boca para Proyector / Reflector Exterior",
    "categoria": "Iluminación Exterior",
    "descripcion": "Artefacto orientable de alta potencia para fachadas, playones y áreas perimetrales.",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"24\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <polygon points=\"50,50 34,20 66,20\" stroke=\"#182233\" stroke-width=\"2\" fill=\"#0d80ef\" fill-opacity=\"0.2\" />\n      <line x1=\"26\" y1=\"14\" x2=\"74\" y2=\"14\" stroke=\"#182233\" stroke-width=\"3\" stroke-linecap=\"round\" />\n      <circle cx=\"50\" cy=\"50\" r=\"3.5\" fill=\"#182233\" />\n    "
  },
  {
    "id": "plano-33",
    "numero": 33,
    "nombre": "Artefacto Embutido en Piso para Iluminación (Uplight)",
    "categoria": "Iluminación Especial",
    "descripcion": "Luminaria rasante para solados con haz de proyección vertical hacia copas o muros.",
    "svg": "\n      <rect x=\"22\" y=\"32\" width=\"56\" height=\"42\" rx=\"3\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"14\" y1=\"32\" x2=\"86\" y2=\"32\" stroke=\"#182233\" stroke-width=\"4\" stroke-linecap=\"round\" />\n      <polygon points=\"50,44 32,66 68,66\" stroke=\"#0d80ef\" stroke-width=\"2\" fill=\"#0d80ef\" fill-opacity=\"0.2\" />\n      <circle cx=\"50\" cy=\"44\" r=\"3\" fill=\"#0d80ef\" />\n    "
  },
  {
    "id": "plano-34",
    "numero": 34,
    "nombre": "Luminaria Vial / Columna de Alumbrado Público",
    "categoria": "Alumbrado Exterior",
    "descripcion": "Poste o columna con brazo soporte para luminaria de calle, vereda o predio industrial.",
    "svg": "\n      <circle cx=\"34\" cy=\"66\" r=\"10\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#182233\" />\n      <line x1=\"34\" y1=\"66\" x2=\"68\" y2=\"32\" stroke=\"#182233\" stroke-width=\"3\" stroke-linecap=\"round\" />\n      <circle cx=\"68\" cy=\"32\" r=\"14\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"56\" y1=\"32\" x2=\"80\" y2=\"32\" stroke=\"#0d80ef\" stroke-width=\"2\" />\n      <line x1=\"68\" y1=\"20\" x2=\"68\" y2=\"44\" stroke=\"#0d80ef\" stroke-width=\"2\" />\n    "
  },
  {
    "id": "plano-35",
    "numero": 35,
    "nombre": "Cartel Señalizador de Salida de Emergencia (EXIT)",
    "categoria": "Seguridad y Emergencia",
    "descripcion": "Pictograma fotoluminiscente o baliza luminosa para señalización de vías de evacuación.",
    "svg": "\n      <rect x=\"16\" y=\"32\" width=\"68\" height=\"36\" rx=\"4\" stroke=\"#1f9d63\" stroke-width=\"2.5\" fill=\"#f0fdf4\" />\n      <line x1=\"30\" y1=\"50\" x2=\"58\" y2=\"50\" stroke=\"#1f9d63\" stroke-width=\"3\" stroke-linecap=\"round\" />\n      <polygon points=\"58,50 50,44 50,56\" fill=\"#1f9d63\" />\n      <text x=\"50\" y=\"42\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#1f9d63\" text-anchor=\"middle\">SALIDA</text>\n    "
  },
  {
    "id": "plano-36",
    "numero": 36,
    "nombre": "Interruptor Regulador de Tensión (Variador Dimmer en Pared)",
    "categoria": "Aparatos de Maniobra",
    "descripcion": "Placa con potenciómetro o pulsador electrónico para regulación de nivel luminoso en pared.",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"16\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"50\" y1=\"50\" x2=\"74\" y2=\"26\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <line x1=\"74\" y1=\"26\" x2=\"82\" y2=\"34\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <path d=\"M 36 60 Q 50 36 64 60\" fill=\"none\" stroke=\"#0d80ef\" stroke-width=\"2\" />\n      <polygon points=\"64,60 56,58 61,52\" fill=\"#0d80ef\" />\n    "
  },
  {
    "id": "plano-37",
    "numero": 37,
    "nombre": "Pulsador Temporizado de Palier / Automático de Escalera",
    "categoria": "Aparatos de Maniobra",
    "descripcion": "Pulsador para activación temporizada del alumbrado de espacios comunes en edificios.",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"18\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <circle cx=\"50\" cy=\"50\" r=\"8\" fill=\"#182233\" />\n      <text x=\"50\" y=\"86\" font-family=\"'JetBrains Mono', monospace\" font-size=\"9\" font-weight=\"700\" fill=\"#0d80ef\" text-anchor=\"middle\">TEMP</text>\n    "
  },
  {
    "id": "plano-38",
    "numero": 38,
    "nombre": "Interruptor a Tirador de Techo o Pared",
    "categoria": "Aparatos de Maniobra",
    "descripcion": "Accionamiento mecánico mediante cordel o cadena para baños o sobrecamas.",
    "svg": "\n      <circle cx=\"50\" cy=\"38\" r=\"14\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"50\" y1=\"52\" x2=\"50\" y2=\"76\" stroke=\"#182233\" stroke-width=\"2\" stroke-dasharray=\"3 3\" />\n      <circle cx=\"50\" cy=\"80\" r=\"4\" fill=\"#0d80ef\" />\n    "
  },
  {
    "id": "plano-39",
    "numero": 39,
    "nombre": "Interruptor con Indicador Luminoso Incorporado",
    "categoria": "Aparatos de Maniobra",
    "descripcion": "Llave de luz con testigo de neón o LED piloto para localización nocturna en pasillos.",
    "svg": "\n      <circle cx=\"50\" cy=\"52\" r=\"15\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"50\" y1=\"52\" x2=\"74\" y2=\"28\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <line x1=\"74\" y1=\"28\" x2=\"82\" y2=\"36\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <circle cx=\"50\" cy=\"52\" r=\"4\" fill=\"#ef4444\" />\n    "
  },
  {
    "id": "plano-40",
    "numero": 40,
    "nombre": "Interruptor de Llave de Seguridad con Cerradura",
    "categoria": "Aparatos de Maniobra",
    "descripcion": "Comando operado mediante llave codificada para evitar maniobras no autorizadas.",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"18\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <rect x=\"47\" y=\"40\" width=\"6\" height=\"14\" rx=\"2\" fill=\"#182233\" />\n      <circle cx=\"50\" cy=\"58\" r=\"3\" fill=\"#182233\" />\n      <line x1=\"50\" y1=\"32\" x2=\"50\" y2=\"16\" stroke=\"#182233\" stroke-width=\"2\" />\n      <text x=\"76\" y=\"54\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#0d80ef\">KEY</text>\n    "
  },
  {
    "id": "plano-41",
    "numero": 41,
    "nombre": "Tomacorriente Tetrapolar Industrial (3P+N+T)",
    "categoria": "Tomas de Fuerza Motriz",
    "descripcion": "Ficha y base tipo CEE de 5 polos para distribución de 380V/220V en plantas y talleres.",
    "svg": "\n      <path d=\"M 20 62 A 30 30 0 0 1 80 62 Z\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"28\" y1=\"62\" x2=\"28\" y2=\"78\" stroke=\"#182233\" stroke-width=\"2\" />\n      <line x1=\"42\" y1=\"62\" x2=\"42\" y2=\"78\" stroke=\"#182233\" stroke-width=\"2\" />\n      <line x1=\"58\" y1=\"62\" x2=\"58\" y2=\"78\" stroke=\"#182233\" stroke-width=\"2\" />\n      <line x1=\"72\" y1=\"62\" x2=\"72\" y2=\"78\" stroke=\"#182233\" stroke-width=\"2\" />\n      <line x1=\"50\" y1=\"32\" x2=\"50\" y2=\"16\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"40\" y1=\"16\" x2=\"60\" y2=\"16\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <text x=\"50\" y=\"52\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#0d80ef\" text-anchor=\"middle\">3P+N+T</text>\n    "
  },
  {
    "id": "plano-42",
    "numero": 42,
    "nombre": "Tomacorriente con Transformador de Aislamiento para Afeitadora",
    "categoria": "Tomas Especiales",
    "descripcion": "Toma para baños alimentado por trafo de separación de circuitos (MBTS / aislación galvánica).",
    "svg": "\n      <rect x=\"20\" y=\"24\" width=\"60\" height=\"52\" rx=\"4\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <circle cx=\"42\" cy=\"50\" r=\"10\" stroke=\"#0d80ef\" stroke-width=\"2\" fill=\"none\" />\n      <circle cx=\"58\" cy=\"50\" r=\"10\" stroke=\"#0d80ef\" stroke-width=\"2\" fill=\"none\" />\n      <text x=\"50\" y=\"70\" font-family=\"'JetBrains Mono', monospace\" font-size=\"7\" font-weight=\"700\" fill=\"#182233\" text-anchor=\"middle\">AFEITADORA</text>\n    "
  },
  {
    "id": "plano-43",
    "numero": 43,
    "nombre": "Boca de Conexión Fija para Aire Acondicionado",
    "categoria": "Climatización y Conexión Fija",
    "descripcion": "Alimentación sin ficha móvil dedicada a equipo split o multisplit con llave bipolar adyacente.",
    "svg": "\n      <rect x=\"22\" y=\"32\" width=\"56\" height=\"36\" rx=\"3\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <text x=\"50\" y=\"55\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"#0d80ef\" text-anchor=\"middle\">AA</text>\n      <circle cx=\"50\" cy=\"22\" r=\"4\" fill=\"#182233\" />\n      <line x1=\"50\" y1=\"22\" x2=\"50\" y2=\"32\" stroke=\"#182233\" stroke-width=\"2\" />\n    "
  },
  {
    "id": "plano-44",
    "numero": 44,
    "nombre": "Boca de Alimentación para Termotanque / Calefón Eléctrico",
    "categoria": "Cargas Térmicas Fijas",
    "descripcion": "Circuito terminal de uso especial o específico para calentamiento sanitario por resistencia.",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"26\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <path d=\"M 34 50 Q 42 38 50 50 T 66 50\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"3\" />\n      <text x=\"50\" y=\"68\" font-family=\"'JetBrains Mono', monospace\" font-size=\"9\" font-weight=\"700\" fill=\"#182233\" text-anchor=\"middle\">TT</text>\n    "
  },
  {
    "id": "plano-45",
    "numero": 45,
    "nombre": "Boca de Alimentación para Bomba Elevadora de Agua",
    "categoria": "Fuerza Motriz Sanitaria",
    "descripcion": "Conexión para motobomba de cisterna o tanque de reserva con control por flotante.",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"26\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <text x=\"50\" y=\"56\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#182233\" text-anchor=\"middle\">B</text>\n      <path d=\"M 28 32 L 50 20 L 72 32\" fill=\"none\" stroke=\"#0d80ef\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n    "
  },
  {
    "id": "plano-46",
    "numero": 46,
    "nombre": "Boca para Campana Extractora de Cocina",
    "categoria": "Ventilación y Cocina",
    "descripcion": "Toma sobre mesada o conducto para purificador y extractor forzado de humos.",
    "svg": "\n      <polygon points=\"22,64 50,30 78,64\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <rect x=\"42\" y=\"18\" width=\"16\" height=\"12\" stroke=\"#182233\" stroke-width=\"2\" fill=\"#182233\" />\n      <circle cx=\"50\" cy=\"50\" r=\"5\" fill=\"#0d80ef\" />\n    "
  },
  {
    "id": "plano-47",
    "numero": 47,
    "nombre": "Boca para Anafe / Horno Eléctrico Empotrado",
    "categoria": "Cargas Térmicas Fijas",
    "descripcion": "Circuito independiente para electrodoméstico de cocción de alta potencia.",
    "svg": "\n      <rect x=\"20\" y=\"24\" width=\"60\" height=\"52\" rx=\"4\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <circle cx=\"38\" cy=\"42\" r=\"7\" stroke=\"#ef4444\" stroke-width=\"2\" fill=\"none\" />\n      <circle cx=\"62\" cy=\"42\" r=\"7\" stroke=\"#ef4444\" stroke-width=\"2\" fill=\"none\" />\n      <circle cx=\"50\" cy=\"60\" r=\"7\" stroke=\"#ef4444\" stroke-width=\"2\" fill=\"none\" />\n    "
  },
  {
    "id": "plano-48",
    "numero": 48,
    "nombre": "Boca para Portón Levadizo / Corredizo Automatizado",
    "categoria": "Automatización y Motores",
    "descripcion": "Alimentación en vano de garaje para central de comando y motorreductor de portón.",
    "svg": "\n      <rect x=\"18\" y=\"32\" width=\"64\" height=\"36\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"26\" y1=\"50\" x2=\"74\" y2=\"50\" stroke=\"#0d80ef\" stroke-width=\"2\" stroke-dasharray=\"4 3\" />\n      <polygon points=\"74,50 66,45 66,55\" fill=\"#0d80ef\" />\n      <text x=\"36\" y=\"44\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#182233\">MOT</text>\n    "
  },
  {
    "id": "plano-49",
    "numero": 49,
    "nombre": "Punto de Carga para Vehículo Eléctrico (VE Wallbox)",
    "categoria": "Movilidad Eléctrica",
    "descripcion": "Estación de carga modo 3 con conector tipo 2 para vehículos híbridos enchufables y eléctricos.",
    "svg": "\n      <rect x=\"24\" y=\"22\" width=\"52\" height=\"56\" rx=\"6\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <path d=\"M 44 34 L 56 34 L 46 50 L 58 50 L 42 66\" fill=\"none\" stroke=\"#1f9d63\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n      <text x=\"50\" y=\"86\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#1f9d63\" text-anchor=\"middle\">EV CHARGE</text>\n    "
  },
  {
    "id": "plano-50",
    "numero": 50,
    "nombre": "Tomacorriente Alimentado por Circuito Ininterrumpido (UPS)",
    "categoria": "Tomas Especiales",
    "descripcion": "Tomacorriente estabilizado con respaldo por batería para informática y servidores.",
    "svg": "\n      <path d=\"M 22 62 A 28 28 0 0 1 78 62 Z\" stroke=\"#e11d48\" stroke-width=\"2.5\" fill=\"#fff1f2\" />\n      <line x1=\"50\" y1=\"34\" x2=\"50\" y2=\"18\" stroke=\"#e11d48\" stroke-width=\"2.5\" />\n      <line x1=\"38\" y1=\"18\" x2=\"62\" y2=\"18\" stroke=\"#e11d48\" stroke-width=\"2.5\" />\n      <text x=\"50\" y=\"52\" font-family=\"'JetBrains Mono', monospace\" font-size=\"9\" font-weight=\"700\" fill=\"#e11d48\" text-anchor=\"middle\">UPS</text>\n    "
  },
  {
    "id": "plano-51",
    "numero": 51,
    "nombre": "Boca de Datos y Red RJ-45 (Red Estructurada)",
    "categoria": "Corrientes Débiles y Datos",
    "descripcion": "Toma hembra RJ-45 para cableado categoría 6 o superior de Ethernet.",
    "svg": "\n      <rect x=\"24\" y=\"24\" width=\"52\" height=\"52\" rx=\"4\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <polygon points=\"50,34 68,66 32,66\" stroke=\"#0d80ef\" stroke-width=\"2.5\" fill=\"#e0f2fe\" />\n      <text x=\"50\" y=\"60\" font-family=\"'JetBrains Mono', monospace\" font-size=\"9\" font-weight=\"700\" fill=\"#0d80ef\" text-anchor=\"middle\">D</text>\n    "
  },
  {
    "id": "plano-52",
    "numero": 52,
    "nombre": "Boca de Telefonía RJ-11",
    "categoria": "Corrientes Débiles y Datos",
    "descripcion": "Punto de conexión para aparato telefónico fijo o centralita IP/analógica.",
    "svg": "\n      <rect x=\"24\" y=\"24\" width=\"52\" height=\"52\" rx=\"4\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <text x=\"50\" y=\"56\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"18\" font-weight=\"700\" fill=\"#182233\" text-anchor=\"middle\">TEL</text>\n    "
  },
  {
    "id": "plano-53",
    "numero": 53,
    "nombre": "Boca de Televisión / Cable Coaxial (TV / CATV / SAT)",
    "categoria": "Corrientes Débiles y Datos",
    "descripcion": "Conector tipo F o IEC para señal de televisión por cable o satélite.",
    "svg": "\n      <rect x=\"24\" y=\"24\" width=\"52\" height=\"52\" rx=\"4\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <polygon points=\"32,36 68,36 50,64\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#e2e8f0\" />\n      <text x=\"50\" y=\"32\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#0d80ef\" text-anchor=\"middle\">TV</text>\n    "
  },
  {
    "id": "plano-54",
    "numero": 54,
    "nombre": "Boca Combinada de Datos y Telefonía (D+T)",
    "categoria": "Corrientes Débiles y Datos",
    "descripcion": "Placa mixta con dos conectores modulares para datos informáticos y voz.",
    "svg": "\n      <rect x=\"22\" y=\"26\" width=\"56\" height=\"48\" rx=\"4\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"50\" y1=\"26\" x2=\"50\" y2=\"74\" stroke=\"#182233\" stroke-width=\"2\" />\n      <text x=\"36\" y=\"54\" font-family=\"'JetBrains Mono', monospace\" font-size=\"10\" font-weight=\"700\" fill=\"#0d80ef\" text-anchor=\"middle\">D</text>\n      <text x=\"64\" y=\"54\" font-family=\"'JetBrains Mono', monospace\" font-size=\"10\" font-weight=\"700\" fill=\"#182233\" text-anchor=\"middle\">T</text>\n    "
  },
  {
    "id": "plano-55",
    "numero": 55,
    "nombre": "Boca para Portero Eléctrico / Frente de Calle",
    "categoria": "Comunicaciones y Accesos",
    "descripcion": "Punto de pulsador, micrófono y altavoz para llamada en acceso principal.",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"26\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <circle cx=\"50\" cy=\"50\" r=\"14\" stroke=\"#0d80ef\" stroke-width=\"2\" fill=\"none\" />\n      <circle cx=\"50\" cy=\"50\" r=\"6\" fill=\"#182233\" />\n      <text x=\"50\" y=\"86\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#182233\" text-anchor=\"middle\">PORTERO</text>\n    "
  },
  {
    "id": "plano-56",
    "numero": 56,
    "nombre": "Teléfono Interno / Monitor de Portero Visor",
    "categoria": "Comunicaciones y Accesos",
    "descripcion": "Aparato receptor mural interior con pantalla de video y pulsador de apertura de cerradura.",
    "svg": "\n      <rect x=\"24\" y=\"24\" width=\"52\" height=\"52\" rx=\"4\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <rect x=\"30\" y=\"30\" width=\"40\" height=\"26\" rx=\"2\" stroke=\"#0d80ef\" stroke-width=\"2\" fill=\"#e0f2fe\" />\n      <circle cx=\"50\" cy=\"65\" r=\"4\" fill=\"#182233\" />\n    "
  },
  {
    "id": "plano-57",
    "numero": 57,
    "nombre": "Cerradura Eléctrica / Abrepuerta Automático",
    "categoria": "Comunicaciones y Accesos",
    "descripcion": "Pestillo electromagnético accionado a baja tensión (12V~) desde el portero.",
    "svg": "\n      <rect x=\"26\" y=\"32\" width=\"48\" height=\"36\" rx=\"4\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <path d=\"M 42 32 L 42 22 C 42 16, 58 16, 58 22 L 58 32\" fill=\"none\" stroke=\"#182233\" stroke-width=\"3\" />\n      <circle cx=\"50\" cy=\"50\" r=\"4\" fill=\"#0d80ef\" />\n    "
  },
  {
    "id": "plano-58",
    "numero": 58,
    "nombre": "Punto de Acceso Wi-Fi en Techo (Access Point AP)",
    "categoria": "Corrientes Débiles y Datos",
    "descripcion": "Boca en cielorraso con canalización PoE para antena de red inalámbrica.",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"26\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <path d=\"M 34 42 A 20 20 0 0 1 66 42\" fill=\"none\" stroke=\"#0d80ef\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <path d=\"M 40 50 A 12 12 0 0 1 60 50\" fill=\"none\" stroke=\"#0d80ef\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <circle cx=\"50\" cy=\"58\" r=\"3\" fill=\"#182233\" />\n      <text x=\"50\" y=\"86\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#0d80ef\" text-anchor=\"middle\">WI-FI</text>\n    "
  },
  {
    "id": "plano-59",
    "numero": 59,
    "nombre": "Altavoz / Parlante de Música Funcional y Evacuación",
    "categoria": "Audio y Evacuación",
    "descripcion": "Difusor sonoro empotrado en cielorraso para sonorización ambiental y avisos.",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"26\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <polygon points=\"40,42 50,42 62,32 62,68 50,58 40,58\" fill=\"#182233\" />\n    "
  },
  {
    "id": "plano-60",
    "numero": 60,
    "nombre": "Gabinete de Telecomunicaciones / Rack de Datos",
    "categoria": "Corrientes Débiles y Datos",
    "descripcion": "Armario distribuidor de fibra óptica, switch de red, pacheras y router.",
    "svg": "\n      <rect x=\"20\" y=\"20\" width=\"60\" height=\"60\" rx=\"3\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <rect x=\"28\" y=\"28\" width=\"44\" height=\"10\" stroke=\"#0d80ef\" stroke-width=\"1.8\" fill=\"#e0f2fe\" />\n      <rect x=\"28\" y=\"44\" width=\"44\" height=\"10\" stroke=\"#0d80ef\" stroke-width=\"1.8\" fill=\"#e0f2fe\" />\n      <rect x=\"28\" y=\"60\" width=\"44\" height=\"10\" stroke=\"#0d80ef\" stroke-width=\"1.8\" fill=\"#e0f2fe\" />\n    "
  },
  {
    "id": "plano-61",
    "numero": 61,
    "nombre": "Detector Óptico de Humo para Techo",
    "categoria": "Seguridad contra Incendios",
    "descripcion": "Sensor puntual fotoeléctrico de partículas de humo para aviso temprano de incendio.",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"26\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <circle cx=\"50\" cy=\"50\" r=\"14\" stroke=\"#ef4444\" stroke-width=\"2\" fill=\"none\" />\n      <text x=\"50\" y=\"54\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#ef4444\" text-anchor=\"middle\">H</text>\n    "
  },
  {
    "id": "plano-62",
    "numero": 62,
    "nombre": "Detector Térmico / Termovelocimétrico de Incendio",
    "categoria": "Seguridad contra Incendios",
    "descripcion": "Sensor de temperatura máxima o incremento veloz de calor para cocinas y cocheras.",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"26\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <circle cx=\"50\" cy=\"50\" r=\"14\" stroke=\"#ef4444\" stroke-width=\"2\" fill=\"none\" />\n      <text x=\"50\" y=\"54\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#ef4444\" text-anchor=\"middle\">T°</text>\n    "
  },
  {
    "id": "plano-63",
    "numero": 63,
    "nombre": "Avisador Manual de Incendio (Pulsador Rompa el Vidrio)",
    "categoria": "Seguridad contra Incendios",
    "descripcion": "Estación de alarma manual mural de color rojo reglamentaria en rutas de escape.",
    "svg": "\n      <rect x=\"22\" y=\"22\" width=\"56\" height=\"56\" rx=\"4\" stroke=\"#ef4444\" stroke-width=\"3\" fill=\"#fef2f2\" />\n      <circle cx=\"50\" cy=\"50\" r=\"14\" stroke=\"#ef4444\" stroke-width=\"2\" fill=\"#ffffff\" />\n      <circle cx=\"50\" cy=\"50\" r=\"6\" fill=\"#ef4444\" />\n      <text x=\"50\" y=\"88\" font-family=\"'JetBrains Mono', monospace\" font-size=\"7\" font-weight=\"700\" fill=\"#ef4444\" text-anchor=\"middle\">INCENDIO</text>\n    "
  },
  {
    "id": "plano-64",
    "numero": 64,
    "nombre": "Sirena con Luz Estroboscópica de Incendio",
    "categoria": "Seguridad contra Incendios",
    "descripcion": "Avisador audiovisual de evacuación acústico >90dB con destellador xenón/LED.",
    "svg": "\n      <polygon points=\"30,34 52,34 68,20 68,80 52,66 30,66\" stroke=\"#ef4444\" stroke-width=\"2.5\" fill=\"#fef2f2\" />\n      <!-- Rayos estroboscópicos -->\n      <line x1=\"74\" y1=\"36\" x2=\"84\" y2=\"30\" stroke=\"#f59e0b\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <line x1=\"74\" y1=\"50\" x2=\"86\" y2=\"50\" stroke=\"#f59e0b\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <line x1=\"74\" y1=\"64\" x2=\"84\" y2=\"70\" stroke=\"#f59e0b\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n    "
  },
  {
    "id": "plano-65",
    "numero": 65,
    "nombre": "Detector de Gas Combustible (Metano / Envasado / CO)",
    "categoria": "Seguridad Ambiental",
    "descripcion": "Sensor electroquímico para detección de fugas de gas natural o monóxido de carbono.",
    "svg": "\n      <rect x=\"22\" y=\"24\" width=\"56\" height=\"52\" rx=\"5\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <text x=\"50\" y=\"48\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#f59e0b\" text-anchor=\"middle\">GAS</text>\n      <line x1=\"32\" y1=\"58\" x2=\"68\" y2=\"58\" stroke=\"#182233\" stroke-width=\"2\" />\n      <circle cx=\"50\" cy=\"66\" r=\"3\" fill=\"#ef4444\" />\n    "
  },
  {
    "id": "plano-66",
    "numero": 66,
    "nombre": "Cámara de Seguridad CCTV / Domo de Vigilancia",
    "categoria": "CCTV y Seguridad Física",
    "descripcion": "Cámara fija o domo motorizado PTZ conectada a sistema de videovigilancia.",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"26\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <path d=\"M 32 44 L 56 44 L 68 34 L 68 66 L 56 56 L 32 56 Z\" fill=\"#182233\" />\n      <circle cx=\"34\" cy=\"50\" r=\"2\" fill=\"#0d80ef\" />\n    "
  },
  {
    "id": "plano-67",
    "numero": 67,
    "nombre": "Sensor de Rotura de Cristales (Acústico / Impacto)",
    "categoria": "Seguridad contra Intrusión",
    "descripcion": "Detector para aventanamientos que capta la frecuencia de quiebre de vidrio.",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"24\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <path d=\"M 38 34 L 48 48 L 44 54 L 62 66\" fill=\"none\" stroke=\"#0d80ef\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <text x=\"76\" y=\"54\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#182233\">GB</text>\n    "
  },
  {
    "id": "plano-68",
    "numero": 68,
    "nombre": "Contacto Magnético de Apertura para Puerta o Ventana",
    "categoria": "Seguridad contra Intrusión",
    "descripcion": "Interruptor reed switch para señalización de apertura en aberturas perimetrales.",
    "svg": "\n      <rect x=\"28\" y=\"28\" width=\"18\" height=\"44\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <rect x=\"54\" y=\"28\" width=\"18\" height=\"44\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#0d80ef\" />\n      <line x1=\"37\" y1=\"20\" x2=\"37\" y2=\"28\" stroke=\"#182233\" stroke-width=\"2\" />\n      <text x=\"50\" y=\"86\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#182233\" text-anchor=\"middle\">MAG</text>\n    "
  },
  {
    "id": "plano-69",
    "numero": 69,
    "nombre": "Teclado de Comando de Sistema de Alarma",
    "categoria": "Seguridad contra Intrusión",
    "descripcion": "Panel numérico táctil o con pulsadores para armado y desarmado de zonas.",
    "svg": "\n      <rect x=\"20\" y=\"24\" width=\"60\" height=\"52\" rx=\"4\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <rect x=\"26\" y=\"30\" width=\"48\" height=\"12\" stroke=\"#182233\" stroke-width=\"1.8\" fill=\"#e2e8f0\" />\n      <circle cx=\"34\" cy=\"50\" r=\"2.5\" fill=\"#182233\" />\n      <circle cx=\"50\" cy=\"50\" r=\"2.5\" fill=\"#182233\" />\n      <circle cx=\"66\" cy=\"50\" r=\"2.5\" fill=\"#182233\" />\n      <circle cx=\"34\" cy=\"62\" r=\"2.5\" fill=\"#182233\" />\n      <circle cx=\"50\" cy=\"62\" r=\"2.5\" fill=\"#182233\" />\n      <circle cx=\"66\" cy=\"62\" r=\"2.5\" fill=\"#182233\" />\n    "
  },
  {
    "id": "plano-70",
    "numero": 70,
    "nombre": "Barrera Infrarroja Perimetral (Emisor / Receptor)",
    "categoria": "Seguridad contra Intrusión",
    "descripcion": "Columnas fotoeléctricas activas de doble o cuádruple haz para líneas divisorias.",
    "svg": "\n      <rect x=\"20\" y=\"24\" width=\"16\" height=\"52\" rx=\"2\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#182233\" />\n      <rect x=\"64\" y=\"24\" width=\"16\" height=\"52\" rx=\"2\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#182233\" />\n      <line x1=\"36\" y1=\"40\" x2=\"64\" y2=\"40\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-dasharray=\"3 2\" />\n      <line x1=\"36\" y1=\"60\" x2=\"64\" y2=\"60\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-dasharray=\"3 2\" />\n    "
  },
  {
    "id": "plano-71",
    "numero": 71,
    "nombre": "Bandeja Portacables Metálica Perforada / Tipo Escalerilla",
    "categoria": "Canalizaciones Industriales",
    "descripcion": "Canalización suspendida o sobre ménsulas para tendidos troncales de conductores aislados.",
    "svg": "\n      <line x1=\"12\" y1=\"36\" x2=\"88\" y2=\"36\" stroke=\"#182233\" stroke-width=\"3\" />\n      <line x1=\"12\" y1=\"64\" x2=\"88\" y2=\"64\" stroke=\"#182233\" stroke-width=\"3\" />\n      <line x1=\"24\" y1=\"36\" x2=\"24\" y2=\"64\" stroke=\"#0d80ef\" stroke-width=\"2\" />\n      <line x1=\"40\" y1=\"36\" x2=\"40\" y2=\"64\" stroke=\"#0d80ef\" stroke-width=\"2\" />\n      <line x1=\"56\" y1=\"36\" x2=\"56\" y2=\"64\" stroke=\"#0d80ef\" stroke-width=\"2\" />\n      <line x1=\"72\" y1=\"36\" x2=\"72\" y2=\"64\" stroke=\"#0d80ef\" stroke-width=\"2\" />\n    "
  },
  {
    "id": "plano-72",
    "numero": 72,
    "nombre": "Ducto para Instalación a la Vista / Cablecanal Plástico",
    "categoria": "Canalizaciones a la Vista",
    "descripcion": "Conducto de PVC con tapa a presión para instalaciones adosadas sin romper mampostería.",
    "svg": "\n      <rect x=\"14\" y=\"38\" width=\"72\" height=\"24\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"14\" y1=\"50\" x2=\"86\" y2=\"50\" stroke=\"#0d80ef\" stroke-width=\"2\" stroke-dasharray=\"6 4\" />\n      <text x=\"50\" y=\"32\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#5c6675\" text-anchor=\"middle\">CABLECANAL</text>\n    "
  },
  {
    "id": "plano-73",
    "numero": 73,
    "nombre": "Cañería de Acero Semipesado tipo RS / EMT a la Vista",
    "categoria": "Canalizaciones Industriales",
    "descripcion": "Cañería rígida de acero para zonas expuestas a daños mecánicos severos o garajes.",
    "svg": "\n      <line x1=\"12\" y1=\"44\" x2=\"88\" y2=\"44\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"12\" y1=\"56\" x2=\"88\" y2=\"56\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"30\" y1=\"38\" x2=\"30\" y2=\"62\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <line x1=\"70\" y1=\"38\" x2=\"70\" y2=\"62\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <text x=\"50\" y=\"34\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#182233\" text-anchor=\"middle\">CAÑO ACERO</text>\n    "
  },
  {
    "id": "plano-74",
    "numero": 74,
    "nombre": "Cañería Flexible Metálica / Vaina Sintética (Tipo Sealtite)",
    "categoria": "Canalizaciones Especiales",
    "descripcion": "Tubería flexible estanca para acometida a motores con vibración o bombas.",
    "svg": "\n      <path d=\"M 16 50 C 26 36, 30 64, 40 50 C 50 36, 54 64, 64 50 C 74 36, 78 64, 88 50\" fill=\"none\" stroke=\"#182233\" stroke-width=\"3\" stroke-linecap=\"round\" />\n    "
  },
  {
    "id": "plano-75",
    "numero": 75,
    "nombre": "Cámara de Inspección para Jabalina de Puesta a Tierra",
    "categoria": "Puesta a Tierra",
    "descripcion": "Cámara circular o cuadrada de 15x15 cm con tapa de inspección y borne seccionador de medición.",
    "svg": "\n      <rect x=\"22\" y=\"22\" width=\"56\" height=\"56\" rx=\"4\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <circle cx=\"50\" cy=\"50\" r=\"18\" stroke=\"#182233\" stroke-width=\"2\" fill=\"none\" />\n      <circle cx=\"50\" cy=\"50\" r=\"5\" fill=\"#1f9d63\" />\n      <text x=\"50\" y=\"88\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#1f9d63\" text-anchor=\"middle\">CÁMARA PAT</text>\n    "
  },
  {
    "id": "plano-76",
    "numero": 76,
    "nombre": "Barra Equipotencial Principal de Tierra (BEP)",
    "categoria": "Puesta a Tierra",
    "descripcion": "Bornera colectora que vincula tierra de servicio, cañerías metálicas de agua/gas y armaduras.",
    "svg": "\n      <rect x=\"18\" y=\"38\" width=\"64\" height=\"24\" rx=\"2\" stroke=\"#1f9d63\" stroke-width=\"2.5\" fill=\"#f0fdf4\" />\n      <circle cx=\"28\" cy=\"50\" r=\"3\" fill=\"#1f9d63\" />\n      <circle cx=\"42\" cy=\"50\" r=\"3\" fill=\"#1f9d63\" />\n      <circle cx=\"58\" cy=\"50\" r=\"3\" fill=\"#1f9d63\" />\n      <circle cx=\"72\" cy=\"50\" r=\"3\" fill=\"#1f9d63\" />\n      <text x=\"50\" y=\"30\" font-family=\"'JetBrains Mono', monospace\" font-size=\"9\" font-weight=\"700\" fill=\"#1f9d63\" text-anchor=\"middle\">BEP</text>\n    "
  },
  {
    "id": "plano-77",
    "numero": 77,
    "nombre": "Punta Captora de Pararrayos (Tipo Franklin)",
    "categoria": "Protección contra Rayos",
    "descripcion": "Elemento terminal en cumbrera o azotea para interceptación de descargas atmosféricas.",
    "svg": "\n      <line x1=\"50\" y1=\"84\" x2=\"50\" y2=\"28\" stroke=\"#182233\" stroke-width=\"3\" />\n      <line x1=\"50\" y1=\"28\" x2=\"50\" y2=\"12\" stroke=\"#0d80ef\" stroke-width=\"2.5\" />\n      <line x1=\"50\" y1=\"36\" x2=\"36\" y2=\"22\" stroke=\"#0d80ef\" stroke-width=\"2\" />\n      <line x1=\"50\" y1=\"36\" x2=\"64\" y2=\"22\" stroke=\"#0d80ef\" stroke-width=\"2\" />\n      <polygon points=\"50,12 47,20 53,20\" fill=\"#0d80ef\" />\n    "
  },
  {
    "id": "plano-78",
    "numero": 78,
    "nombre": "Tablero de Bombas contra Incendio (TBCI)",
    "categoria": "Tableros e Instalaciones",
    "descripcion": "Gabinete eléctrico pintado de rojo exclusivo para alimentación segura de bombas hidrantes.",
    "svg": "\n      <rect x=\"20\" y=\"22\" width=\"60\" height=\"56\" stroke=\"#ef4444\" stroke-width=\"2.5\" fill=\"#fff1f2\" />\n      <line x1=\"20\" y1=\"22\" x2=\"80\" y2=\"78\" stroke=\"#ef4444\" stroke-width=\"2\" />\n      <line x1=\"20\" y1=\"78\" x2=\"80\" y2=\"22\" stroke=\"#ef4444\" stroke-width=\"2\" />\n      <text x=\"50\" y=\"90\" font-family=\"'JetBrains Mono', monospace\" font-size=\"9\" font-weight=\"700\" fill=\"#ef4444\" text-anchor=\"middle\">TBCI</text>\n    "
  },
  {
    "id": "plano-79",
    "numero": 79,
    "nombre": "Tablero Seccional de Ascensores (TSA)",
    "categoria": "Tableros e Instalaciones",
    "descripcion": "Tablero en sala de máquinas para fuerza motriz y maniobra de coche y cabina.",
    "svg": "\n      <rect x=\"20\" y=\"22\" width=\"60\" height=\"56\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <rect x=\"30\" y=\"32\" width=\"40\" height=\"36\" stroke=\"#0d80ef\" stroke-width=\"2\" fill=\"#e0f2fe\" />\n      <text x=\"50\" y=\"55\" font-family=\"'JetBrains Mono', monospace\" font-size=\"11\" font-weight=\"700\" fill=\"#0d80ef\" text-anchor=\"middle\">TSA</text>\n    "
  },
  {
    "id": "plano-80",
    "numero": 80,
    "nombre": "Tablero de Iluminación de Emergencia Centralizada (TIEC)",
    "categoria": "Tableros e Instalaciones",
    "descripcion": "Distribución y comando para luminarias de emergencia alimentadas por banco de baterías central.",
    "svg": "\n      <rect x=\"20\" y=\"22\" width=\"60\" height=\"56\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <polygon points=\"50,30 68,66 32,66\" stroke=\"#0d80ef\" stroke-width=\"2\" fill=\"#0d80ef\" fill-opacity=\"0.2\" />\n      <text x=\"50\" y=\"88\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#182233\" text-anchor=\"middle\">TIEC</text>\n    "
  }
];

export const SIMBOLOS_UNIFILARES = [
  {
    "id": "uni-1",
    "numero": 1,
    "nombre": "Interruptor Automático Termomagnético Bipolar",
    "categoria": "Aparatos de Protección",
    "descripcion": "Símbolo IRAM con disparador térmico (bimetal en rectángulo) y magnético contra sobrecargas y cortocircuitos.",
    "svg": "\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"30\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <circle cx=\"50\" cy=\"30\" r=\"3.5\" fill=\"#182233\" />\n      <!-- Brazo de corte con disparador térmico y magnético -->\n      <line x1=\"50\" y1=\"30\" x2=\"68\" y2=\"58\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <!-- Térmico (rectángulo bimetal) -->\n      <rect x=\"58\" y=\"38\" width=\"10\" height=\"7\" stroke=\"#0d80ef\" stroke-width=\"1.8\" fill=\"#e0f2fe\" />\n      <!-- Magnético (arco o cruce) -->\n      <path d=\"M 64 50 L 72 50 L 72 56\" fill=\"none\" stroke=\"#d33d3d\" stroke-width=\"1.8\" />\n      <circle cx=\"50\" cy=\"70\" r=\"3.5\" fill=\"#182233\" />\n      <line x1=\"50\" y1=\"70\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <text x=\"24\" y=\"54\" font-family=\"'JetBrains Mono', monospace\" font-size=\"9\" font-weight=\"700\" fill=\"#182233\">2P</text>\n    "
  },
  {
    "id": "uni-2",
    "numero": 2,
    "nombre": "Interruptor Automático Termomagnético Tetrapolar",
    "categoria": "Aparatos de Protección",
    "descripcion": "Protección unifilar para alimentadores trifásicos con neutro (3F+N).",
    "svg": "\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"30\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <circle cx=\"50\" cy=\"30\" r=\"3.5\" fill=\"#182233\" />\n      <line x1=\"50\" y1=\"30\" x2=\"68\" y2=\"58\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <rect x=\"58\" y=\"38\" width=\"10\" height=\"7\" stroke=\"#0d80ef\" stroke-width=\"1.8\" fill=\"#e0f2fe\" />\n      <path d=\"M 64 50 L 72 50 L 72 56\" fill=\"none\" stroke=\"#d33d3d\" stroke-width=\"1.8\" />\n      <circle cx=\"50\" cy=\"70\" r=\"3.5\" fill=\"#182233\" />\n      <line x1=\"50\" y1=\"70\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <text x=\"22\" y=\"54\" font-family=\"'JetBrains Mono', monospace\" font-size=\"9\" font-weight=\"700\" fill=\"#182233\">4P</text>\n    "
  },
  {
    "id": "uni-3",
    "numero": 3,
    "nombre": "Interruptor Diferencial por Corriente Residual Bipolar",
    "categoria": "Aparatos de Protección",
    "descripcion": "Transformador toroidal diferencial que detecta corrientes de fuga a tierra IΔn ≤ 30mA.",
    "svg": "\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"28\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <circle cx=\"50\" cy=\"28\" r=\"3\" fill=\"#182233\" />\n      <line x1=\"50\" y1=\"28\" x2=\"66\" y2=\"52\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <circle cx=\"50\" cy=\"66\" r=\"3\" fill=\"#182233\" />\n      <!-- Toróide con núcleo IRAM -->\n      <ellipse cx=\"50\" cy=\"50\" rx=\"20\" ry=\"12\" stroke=\"#0d80ef\" stroke-width=\"2\" fill=\"none\" />\n      <line x1=\"50\" y1=\"66\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <text x=\"76\" y=\"53\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#0d80ef\">IΔn</text>\n    "
  },
  {
    "id": "uni-4",
    "numero": 4,
    "nombre": "Interruptor Diferencial Tetrapolar (3F+N)",
    "categoria": "Aparatos de Protección",
    "descripcion": "Dispositivo de corriente residual tetrapolar para tableros trifásicos de cabecera.",
    "svg": "\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"28\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <circle cx=\"50\" cy=\"28\" r=\"3\" fill=\"#182233\" />\n      <line x1=\"50\" y1=\"28\" x2=\"66\" y2=\"52\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <circle cx=\"50\" cy=\"66\" r=\"3\" fill=\"#182233\" />\n      <ellipse cx=\"50\" cy=\"50\" rx=\"22\" ry=\"14\" stroke=\"#0d80ef\" stroke-width=\"2\" fill=\"none\" />\n      <line x1=\"50\" y1=\"66\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <text x=\"20\" y=\"54\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#182233\">4P</text>\n      <text x=\"76\" y=\"53\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#0d80ef\">300mA</text>\n    "
  },
  {
    "id": "uni-5",
    "numero": 5,
    "nombre": "Fusible Calibrado / Cartucho de Protección",
    "categoria": "Aparatos de Protección",
    "descripcion": "Rectángulo con línea axial continua representativo de fusible de protección contra sobreintensidades.",
    "svg": "\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"30\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <rect x=\"38\" y=\"30\" width=\"24\" height=\"40\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"50\" y1=\"30\" x2=\"50\" y2=\"70\" stroke=\"#182233\" stroke-width=\"2\" />\n      <line x1=\"50\" y1=\"70\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <circle cx=\"50\" cy=\"50\" r=\"3\" fill=\"#d33d3d\" />\n    "
  },
  {
    "id": "uni-6",
    "numero": 6,
    "nombre": "Interruptor Seccionador Bajo Carga Manual",
    "categoria": "Aparatos de Maniobra",
    "descripcion": "Contacto de apertura con trazo de retención terminal que asegura separación dieléctrica visible.",
    "svg": "\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"30\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <circle cx=\"50\" cy=\"30\" r=\"3.5\" fill=\"#182233\" />\n      <line x1=\"50\" y1=\"30\" x2=\"68\" y2=\"60\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <line x1=\"62\" y1=\"60\" x2=\"74\" y2=\"60\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <circle cx=\"50\" cy=\"70\" r=\"3.5\" fill=\"#182233\" />\n      <line x1=\"50\" y1=\"70\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2.5\" />\n    "
  },
  {
    "id": "uni-7",
    "numero": 7,
    "nombre": "Seccionador Bajo Carga con Fusibles (Secc-Fusible)",
    "categoria": "Aparatos de Maniobra y Protección",
    "descripcion": "Dispositivo combinado de maniobra en carga dotado de fusibles para protección de línea.",
    "svg": "\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"26\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <circle cx=\"50\" cy=\"26\" r=\"3\" fill=\"#182233\" />\n      <line x1=\"50\" y1=\"26\" x2=\"66\" y2=\"48\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"60\" y1=\"48\" x2=\"72\" y2=\"48\" stroke=\"#182233\" stroke-width=\"2\" />\n      <circle cx=\"50\" cy=\"54\" r=\"3\" fill=\"#182233\" />\n      <!-- Cartucho fusible integrado -->\n      <rect x=\"42\" y=\"58\" width=\"16\" height=\"24\" stroke=\"#182233\" stroke-width=\"2\" fill=\"#f8fafc\" />\n      <line x1=\"50\" y1=\"58\" x2=\"50\" y2=\"82\" stroke=\"#182233\" stroke-width=\"1.8\" />\n      <line x1=\"50\" y1=\"82\" x2=\"50\" y2=\"94\" stroke=\"#182233\" stroke-width=\"2.5\" />\n    "
  },
  {
    "id": "uni-8",
    "numero": 8,
    "nombre": "Descargador de Sobretensiones Transitorias (DPS)",
    "categoria": "Aparatos de Protección",
    "descripcion": "Varistor de óxido metálico para derivación de rayos y sobretensiones a tierra.",
    "svg": "\n      <line x1=\"50\" y1=\"12\" x2=\"50\" y2=\"30\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <rect x=\"36\" y=\"30\" width=\"28\" height=\"36\" rx=\"2\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"36\" y1=\"66\" x2=\"64\" y2=\"30\" stroke=\"#0d80ef\" stroke-width=\"2.5\" />\n      <line x1=\"30\" y1=\"66\" x2=\"42\" y2=\"66\" stroke=\"#0d80ef\" stroke-width=\"2\" />\n      <line x1=\"50\" y1=\"66\" x2=\"50\" y2=\"80\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <!-- Tierra -->\n      <line x1=\"38\" y1=\"80\" x2=\"62\" y2=\"80\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"44\" y1=\"86\" x2=\"56\" y2=\"86\" stroke=\"#182233\" stroke-width=\"2\" />\n    "
  },
  {
    "id": "uni-9",
    "numero": 9,
    "nombre": "Contactor Electromagnético de Fuerza Motriz",
    "categoria": "Aparatos de Maniobra",
    "descripcion": "Interruptor accionado a distancia mediante electroimán para motores o cargas elevadas.",
    "svg": "\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"28\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <circle cx=\"50\" cy=\"28\" r=\"3.5\" fill=\"#182233\" />\n      <line x1=\"50\" y1=\"28\" x2=\"66\" y2=\"52\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <circle cx=\"50\" cy=\"62\" r=\"3.5\" fill=\"#182233\" />\n      <!-- Arco semicircular característico de contactor -->\n      <path d=\"M 64 42 A 8 8 0 0 1 76 50\" fill=\"none\" stroke=\"#0d80ef\" stroke-width=\"2.2\" />\n      <line x1=\"50\" y1=\"62\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <text x=\"26\" y=\"50\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#182233\">KM</text>\n    "
  },
  {
    "id": "uni-10",
    "numero": 10,
    "nombre": "Relé Térmico de Sobrecarga para Motor",
    "categoria": "Aparatos de Protección",
    "descripcion": "Elemento sensor bimetálico térmico que protege motores contra sobrecargas continuadas.",
    "svg": "\n      <line x1=\"50\" y1=\"12\" x2=\"50\" y2=\"30\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <rect x=\"36\" y=\"30\" width=\"28\" height=\"38\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <!-- Bimetal de relé térmico IRAM -->\n      <path d=\"M 42 42 L 50 42 L 58 56 L 50 56\" fill=\"none\" stroke=\"#d33d3d\" stroke-width=\"2.5\" />\n      <line x1=\"50\" y1=\"68\" x2=\"50\" y2=\"88\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <text x=\"70\" y=\"52\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#182233\">RT</text>\n    "
  },
  {
    "id": "uni-11",
    "numero": 11,
    "nombre": "Guardamotor Magnético-Térmico Regulable",
    "categoria": "Aparatos de Protección y Maniobra",
    "descripcion": "Disyuntor integral de protección de motores con comando manual y ajuste térmico.",
    "svg": "\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"28\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <circle cx=\"50\" cy=\"28\" r=\"3\" fill=\"#182233\" />\n      <line x1=\"50\" y1=\"28\" x2=\"68\" y2=\"56\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <rect x=\"58\" y=\"36\" width=\"10\" height=\"7\" stroke=\"#0d80ef\" stroke-width=\"1.8\" fill=\"#e0f2fe\" />\n      <path d=\"M 64 48 L 72 48 L 72 54\" fill=\"none\" stroke=\"#d33d3d\" stroke-width=\"1.8\" />\n      <circle cx=\"50\" cy=\"68\" r=\"3\" fill=\"#182233\" />\n      <line x1=\"50\" y1=\"68\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <text x=\"24\" y=\"52\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#182233\">QM</text>\n    "
  },
  {
    "id": "uni-12",
    "numero": 12,
    "nombre": "Transformador Monofásico de Reducción / Separación",
    "categoria": "Transformación",
    "descripcion": "Dos círculos entrelazados que representan los devanados primario y secundario.",
    "svg": "\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"26\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <circle cx=\"50\" cy=\"38\" r=\"15\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <circle cx=\"50\" cy=\"58\" r=\"15\" stroke=\"#0d80ef\" stroke-width=\"2.5\" fill=\"#f8fafc\" fill-opacity=\"0.6\" />\n      <line x1=\"50\" y1=\"73\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <text x=\"74\" y=\"52\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#182233\">TRAFO</text>\n    "
  },
  {
    "id": "uni-13",
    "numero": 13,
    "nombre": "Transformador de Intensidad / Corriente (TI)",
    "categoria": "Medición e Instrumentación",
    "descripcion": "Círculo que abraza el conductor principal para alimentar amperímetros de cuadro.",
    "svg": "\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"3\" />\n      <circle cx=\"50\" cy=\"50\" r=\"16\" stroke=\"#0d80ef\" stroke-width=\"2.5\" fill=\"none\" />\n      <line x1=\"66\" y1=\"50\" x2=\"84\" y2=\"50\" stroke=\"#0d80ef\" stroke-width=\"2\" />\n      <circle cx=\"84\" cy=\"50\" r=\"3\" fill=\"#0d80ef\" />\n      <text x=\"24\" y=\"54\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#182233\">TI</text>\n    "
  },
  {
    "id": "uni-14",
    "numero": 14,
    "nombre": "Voltímetro de Tablero (V)",
    "categoria": "Medición e Instrumentación",
    "descripcion": "Instrumento indicador de tensión de red en voltios.",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"24\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <text x=\"50\" y=\"58\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"22\" font-weight=\"700\" fill=\"#0d80ef\" text-anchor=\"middle\">V</text>\n      <line x1=\"50\" y1=\"12\" x2=\"50\" y2=\"26\" stroke=\"#182233\" stroke-width=\"2\" />\n      <line x1=\"50\" y1=\"74\" x2=\"50\" y2=\"88\" stroke=\"#182233\" stroke-width=\"2\" />\n    "
  },
  {
    "id": "uni-15",
    "numero": 15,
    "nombre": "Amperímetro de Tablero (A)",
    "categoria": "Medición e Instrumentación",
    "descripcion": "Instrumento indicador del consumo instantáneo en amperes.",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"24\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <text x=\"50\" y=\"58\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"22\" font-weight=\"700\" fill=\"#182233\" text-anchor=\"middle\">A</text>\n      <line x1=\"50\" y1=\"12\" x2=\"50\" y2=\"26\" stroke=\"#182233\" stroke-width=\"2\" />\n      <line x1=\"50\" y1=\"74\" x2=\"50\" y2=\"88\" stroke=\"#182233\" stroke-width=\"2\" />\n    "
  },
  {
    "id": "uni-16",
    "numero": 16,
    "nombre": "Contador de Energía Activa (Medidor kWh)",
    "categoria": "Medición e Instrumentación",
    "descripcion": "Cuadro dividido con indicación de unidad de potencia consumida kWh.",
    "svg": "\n      <rect x=\"22\" y=\"24\" width=\"56\" height=\"52\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"22\" y1=\"46\" x2=\"78\" y2=\"46\" stroke=\"#182233\" stroke-width=\"2\" />\n      <text x=\"50\" y=\"40\" font-family=\"'JetBrains Mono', monospace\" font-size=\"10\" font-weight=\"700\" fill=\"#0d80ef\" text-anchor=\"middle\">kWh</text>\n      <circle cx=\"50\" cy=\"62\" r=\"7\" stroke=\"#182233\" stroke-width=\"2\" fill=\"none\" />\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"24\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"50\" y1=\"76\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2.5\" />\n    "
  },
  {
    "id": "uni-17",
    "numero": 17,
    "nombre": "Conmutador de Voltímetro (Selector Multifásico)",
    "categoria": "Medición e Instrumentación",
    "descripcion": "Llave rotativa para medir tensiones entre fases (RS-ST-TR) con un solo voltímetro.",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"22\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <circle cx=\"50\" cy=\"50\" r=\"4\" fill=\"#182233\" />\n      <line x1=\"50\" y1=\"50\" x2=\"66\" y2=\"34\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <circle cx=\"50\" cy=\"32\" r=\"2\" fill=\"#0d80ef\" />\n      <circle cx=\"68\" cy=\"50\" r=\"2\" fill=\"#0d80ef\" />\n      <circle cx=\"50\" cy=\"68\" r=\"2\" fill=\"#0d80ef\" />\n      <circle cx=\"32\" cy=\"50\" r=\"2\" fill=\"#0d80ef\" />\n      <text x=\"50\" y=\"86\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#182233\" text-anchor=\"middle\">V-SEL</text>\n    "
  },
  {
    "id": "uni-18",
    "numero": 18,
    "nombre": "Barra Colectora Principal de Cobre (Fases)",
    "categoria": "Distribución y Barras",
    "descripcion": "Línea de trazo muy grueso que identifica la barra colectora de potencia en tablero.",
    "svg": "\n      <line x1=\"10\" y1=\"50\" x2=\"90\" y2=\"50\" stroke=\"#182233\" stroke-width=\"7\" stroke-linecap=\"round\" />\n      <line x1=\"28\" y1=\"50\" x2=\"28\" y2=\"76\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"50\" y1=\"50\" x2=\"50\" y2=\"76\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"72\" y1=\"50\" x2=\"72\" y2=\"76\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <circle cx=\"28\" cy=\"50\" r=\"4.5\" fill=\"#f8fafc\" stroke=\"#182233\" stroke-width=\"2\" />\n      <circle cx=\"50\" cy=\"50\" r=\"4.5\" fill=\"#f8fafc\" stroke=\"#182233\" stroke-width=\"2\" />\n      <circle cx=\"72\" cy=\"50\" r=\"4.5\" fill=\"#f8fafc\" stroke=\"#182233\" stroke-width=\"2\" />\n      <text x=\"50\" y=\"36\" font-family=\"'JetBrains Mono', monospace\" font-size=\"9\" font-weight=\"700\" fill=\"#0d80ef\" text-anchor=\"middle\">BARRA Cu</text>\n    "
  },
  {
    "id": "uni-19",
    "numero": 19,
    "nombre": "Barra Colectora de Conductor Neutro Aislado (N)",
    "categoria": "Distribución y Barras",
    "descripcion": "Barra colectora montada sobre aisladores soporte para distribución de neutro.",
    "svg": "\n      <line x1=\"16\" y1=\"50\" x2=\"84\" y2=\"50\" stroke=\"#0d80ef\" stroke-width=\"5\" stroke-linecap=\"round\" />\n      <!-- Aisladores en extremos -->\n      <rect x=\"12\" y=\"44\" width=\"8\" height=\"12\" stroke=\"#182233\" stroke-width=\"1.8\" fill=\"#e2e8f0\" />\n      <rect x=\"80\" y=\"44\" width=\"8\" height=\"12\" stroke=\"#182233\" stroke-width=\"1.8\" fill=\"#e2e8f0\" />\n      <circle cx=\"34\" cy=\"50\" r=\"3\" fill=\"#182233\" />\n      <circle cx=\"50\" cy=\"50\" r=\"3\" fill=\"#182233\" />\n      <circle cx=\"66\" cy=\"50\" r=\"3\" fill=\"#182233\" />\n      <text x=\"50\" y=\"36\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0d80ef\" text-anchor=\"middle\">N (AISLADO)</text>\n    "
  },
  {
    "id": "uni-20",
    "numero": 20,
    "nombre": "Barra Colectora de Puesta a Tierra de Protección (PE)",
    "categoria": "Distribución y Barras",
    "descripcion": "Barra de cobre unida directamente a la masa metálica del tablero y al electrodo de tierra.",
    "svg": "\n      <line x1=\"16\" y1=\"46\" x2=\"84\" y2=\"46\" stroke=\"#1f9d63\" stroke-width=\"5\" stroke-linecap=\"round\" />\n      <line x1=\"50\" y1=\"46\" x2=\"50\" y2=\"68\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"34\" y1=\"68\" x2=\"66\" y2=\"68\" stroke=\"#182233\" stroke-width=\"3\" stroke-linecap=\"round\" />\n      <line x1=\"40\" y1=\"74\" x2=\"60\" y2=\"74\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <line x1=\"46\" y1=\"80\" x2=\"54\" y2=\"80\" stroke=\"#182233\" stroke-width=\"2\" stroke-linecap=\"round\" />\n      <text x=\"50\" y=\"34\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#1f9d63\" text-anchor=\"middle\">PE (MASA)</text>\n    "
  },
  {
    "id": "uni-21",
    "numero": 21,
    "nombre": "Interruptor Horario Programable / Temporizador DIN",
    "categoria": "Automatización y Maniobra",
    "descripcion": "Reloj de programación horaria con reserva de marcha para maniobra de circuitos.",
    "svg": "\n      <rect x=\"22\" y=\"24\" width=\"56\" height=\"52\" rx=\"3\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <circle cx=\"50\" cy=\"50\" r=\"16\" stroke=\"#182233\" stroke-width=\"2\" fill=\"#ffffff\" />\n      <!-- Agujas reloj -->\n      <line x1=\"50\" y1=\"50\" x2=\"50\" y2=\"40\" stroke=\"#0d80ef\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <line x1=\"50\" y1=\"50\" x2=\"58\" y2=\"50\" stroke=\"#0d80ef\" stroke-width=\"2\" stroke-linecap=\"round\" />\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"24\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"50\" y1=\"76\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <text x=\"50\" y=\"86\" font-family=\"'JetBrains Mono', monospace\" font-size=\"7\" font-weight=\"700\" fill=\"#182233\" text-anchor=\"middle\">TIMER</text>\n    "
  },
  {
    "id": "uni-22",
    "numero": 22,
    "nombre": "Interruptor Crepuscular / Fotoeléctrico (Fotocontrol)",
    "categoria": "Automatización y Maniobra",
    "descripcion": "Elemento fotosensible para accionamiento automático del alumbrado exterior por luz natural.",
    "svg": "\n      <rect x=\"24\" y=\"24\" width=\"52\" height=\"52\" rx=\"3\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <circle cx=\"50\" cy=\"50\" r=\"14\" stroke=\"#182233\" stroke-width=\"2\" fill=\"#ffffff\" />\n      <!-- Flechas luminosas incidentes -->\n      <line x1=\"22\" y1=\"30\" x2=\"38\" y2=\"44\" stroke=\"#eab308\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <polygon points=\"38,44 32,41 35,36\" fill=\"#eab308\" />\n      <line x1=\"28\" y1=\"22\" x2=\"44\" y2=\"36\" stroke=\"#eab308\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <polygon points=\"44,36 38,33 41,28\" fill=\"#eab308\" />\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"24\" stroke=\"#182233\" stroke-width=\"2\" />\n      <line x1=\"50\" y1=\"76\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2\" />\n    "
  },
  {
    "id": "uni-23",
    "numero": 23,
    "nombre": "Lámpara de Señalización Luminosa / Ojo de Buey LED",
    "categoria": "Señalización y Tableros",
    "descripcion": "Luz piloto para señalización de presencia de fase o estado de marcha.",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"22\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"34\" y1=\"34\" x2=\"66\" y2=\"66\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"34\" y1=\"66\" x2=\"66\" y2=\"34\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"50\" y1=\"12\" x2=\"50\" y2=\"28\" stroke=\"#182233\" stroke-width=\"2\" />\n      <line x1=\"50\" y1=\"72\" x2=\"50\" y2=\"88\" stroke=\"#182233\" stroke-width=\"2\" />\n      <circle cx=\"50\" cy=\"50\" r=\"4\" fill=\"#0d80ef\" />\n    "
  },
  {
    "id": "uni-24",
    "numero": 24,
    "nombre": "Sirena o Bocina de Alarma en Tablero",
    "categoria": "Señalización y Tableros",
    "descripcion": "Avisador acústico para disparo por falla, sobretemperatura o alarma técnica.",
    "svg": "\n      <polygon points=\"34,36 50,36 68,22 68,78 50,64 34,64\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <!-- Ondas acústicas -->\n      <path d=\"M 76 38 A 16 16 0 0 1 76 62\" fill=\"none\" stroke=\"#d33d3d\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <path d=\"M 82 30 A 24 24 0 0 1 82 70\" fill=\"none\" stroke=\"#d33d3d\" stroke-width=\"2\" stroke-linecap=\"round\" />\n      <line x1=\"34\" y1=\"50\" x2=\"16\" y2=\"50\" stroke=\"#182233\" stroke-width=\"2.5\" />\n    "
  },
  {
    "id": "uni-25",
    "numero": 25,
    "nombre": "Generador Eléctrico de Emergencia (Grupo Electrógeno)",
    "categoria": "Fuentes y Generación",
    "descripcion": "Círculo con letra \"G\" e indicación de corriente alterna senoidal.",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"26\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <text x=\"50\" y=\"48\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"20\" font-weight=\"700\" fill=\"#182233\" text-anchor=\"middle\">G</text>\n      <path d=\"M 38 60 Q 44 54, 50 60 T 62 60\" fill=\"none\" stroke=\"#0d80ef\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <line x1=\"50\" y1=\"12\" x2=\"50\" y2=\"24\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"50\" y1=\"76\" x2=\"50\" y2=\"88\" stroke=\"#182233\" stroke-width=\"2.5\" />\n    "
  },
  {
    "id": "uni-26",
    "numero": 26,
    "nombre": "Conmutador de Transferencia Red - Generador",
    "categoria": "Aparatos de Maniobra",
    "descripcion": "Selector biestable con enclavamiento mecánico que impide el paralelismo de fuentes.",
    "svg": "\n      <circle cx=\"36\" cy=\"30\" r=\"3.5\" fill=\"#182233\" />\n      <circle cx=\"64\" cy=\"30\" r=\"3.5\" fill=\"#182233\" />\n      <line x1=\"50\" y1=\"68\" x2=\"38\" y2=\"34\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <circle cx=\"50\" cy=\"68\" r=\"3.5\" fill=\"#182233\" />\n      <line x1=\"50\" y1=\"68\" x2=\"50\" y2=\"88\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <!-- Enclavamiento mecánico punteado -->\n      <line x1=\"38\" y1=\"46\" x2=\"62\" y2=\"46\" stroke=\"#d33d3d\" stroke-width=\"2\" stroke-dasharray=\"3 3\" />\n      <text x=\"36\" y=\"22\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#0d80ef\" text-anchor=\"middle\">RED</text>\n      <text x=\"64\" y=\"22\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#1f9d63\" text-anchor=\"middle\">GEN</text>\n    "
  },
  {
    "id": "uni-27",
    "numero": 27,
    "nombre": "Variador Electrónico de Frecuencia (Inverter / VFD)",
    "categoria": "Fuerza Motriz y Electrónica",
    "descripcion": "Convertidor estático de frecuencia para control y arranque suave de motores trifásicos.",
    "svg": "\n      <rect x=\"20\" y=\"24\" width=\"60\" height=\"52\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"20\" y1=\"76\" x2=\"80\" y2=\"24\" stroke=\"#182233\" stroke-width=\"2\" />\n      <!-- CA / CC / CA -->\n      <text x=\"32\" y=\"44\" font-family=\"'JetBrains Mono', monospace\" font-size=\"11\" font-weight=\"700\" fill=\"#0d80ef\">~</text>\n      <text x=\"60\" y=\"66\" font-family=\"'JetBrains Mono', monospace\" font-size=\"11\" font-weight=\"700\" fill=\"#0d80ef\">~</text>\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"24\" stroke=\"#182233\" stroke-width=\"2\" />\n      <line x1=\"50\" y1=\"76\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2\" />\n    "
  },
  {
    "id": "uni-28",
    "numero": 28,
    "nombre": "Regleta de Bornes de Conexión de Tablero",
    "categoria": "Conexión y Borneras",
    "descripcion": "Bornes de paso montados sobre riel para salida ordenada hacia canalizaciones externas.",
    "svg": "\n      <circle cx=\"50\" cy=\"36\" r=\"6\" stroke=\"#182233\" stroke-width=\"2.2\" fill=\"#ffffff\" />\n      <circle cx=\"50\" cy=\"50\" r=\"6\" stroke=\"#182233\" stroke-width=\"2.2\" fill=\"#ffffff\" />\n      <circle cx=\"50\" cy=\"64\" r=\"6\" stroke=\"#182233\" stroke-width=\"2.2\" fill=\"#ffffff\" />\n      <line x1=\"50\" y1=\"12\" x2=\"50\" y2=\"30\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"50\" y1=\"70\" x2=\"50\" y2=\"88\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <rect x=\"36\" y=\"24\" width=\"28\" height=\"52\" rx=\"2\" stroke=\"#0d80ef\" stroke-width=\"1.8\" stroke-dasharray=\"3 2\" fill=\"none\" />\n      <text x=\"74\" y=\"53\" font-family=\"'JetBrains Mono', monospace\" font-size=\"9\" font-weight=\"700\" fill=\"#182233\">X1</text>\n    "
  },
  {
    "id": "uni-29",
    "numero": 29,
    "nombre": "Motor Asincrónico Trifásico Jaula de Ardilla (M 3~)",
    "categoria": "Fuerza Motriz",
    "descripcion": "Círculo con letra \"M\" y designación de tres fases de corriente alterna.",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"26\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <text x=\"50\" y=\"46\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"20\" font-weight=\"700\" fill=\"#182233\" text-anchor=\"middle\">M</text>\n      <text x=\"50\" y=\"64\" font-family=\"'JetBrains Mono', monospace\" font-size=\"12\" font-weight=\"700\" fill=\"#0d80ef\" text-anchor=\"middle\">3 ~</text>\n      <line x1=\"50\" y1=\"12\" x2=\"50\" y2=\"24\" stroke=\"#182233\" stroke-width=\"2.5\" />\n    "
  },
  {
    "id": "uni-30",
    "numero": 30,
    "nombre": "Puesta a Tierra de Servicio e Interconexión de Masas",
    "categoria": "Puesta a Tierra",
    "descripcion": "Símbolo de tierra para esquema unifilar que señala el punto de conexión equipotencial.",
    "svg": "\n      <line x1=\"50\" y1=\"14\" x2=\"50\" y2=\"46\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"26\" y1=\"46\" x2=\"74\" y2=\"46\" stroke=\"#182233\" stroke-width=\"3.5\" stroke-linecap=\"round\" />\n      <line x1=\"34\" y1=\"56\" x2=\"66\" y2=\"56\" stroke=\"#182233\" stroke-width=\"2.8\" stroke-linecap=\"round\" />\n      <line x1=\"42\" y1=\"66\" x2=\"58\" y2=\"66\" stroke=\"#182233\" stroke-width=\"2\" stroke-linecap=\"round\" />\n      <text x=\"50\" y=\"82\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#1f9d63\" text-anchor=\"middle\">IRAM 2281</text>\n    "
  },
  {
    "id": "uni-31",
    "numero": 31,
    "nombre": "Interruptor Automático Termomagnético Tripolar (PIA 3P)",
    "categoria": "Aparatos de Protección",
    "descripcion": "Disyuntor termomagnético trifásico para cargas equilibradas puras o motores sin neutro.",
    "svg": "\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"30\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <circle cx=\"50\" cy=\"30\" r=\"3.5\" fill=\"#182233\" />\n      <line x1=\"50\" y1=\"30\" x2=\"68\" y2=\"58\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <rect x=\"58\" y=\"38\" width=\"10\" height=\"7\" stroke=\"#0d80ef\" stroke-width=\"1.8\" fill=\"#e0f2fe\" />\n      <path d=\"M 64 50 L 72 50 L 72 56\" fill=\"none\" stroke=\"#d33d3d\" stroke-width=\"1.8\" />\n      <circle cx=\"50\" cy=\"70\" r=\"3.5\" fill=\"#182233\" />\n      <line x1=\"50\" y1=\"70\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <text x=\"24\" y=\"54\" font-family=\"'JetBrains Mono', monospace\" font-size=\"9\" font-weight=\"700\" fill=\"#182233\">3P</text>\n    "
  },
  {
    "id": "uni-32",
    "numero": 32,
    "nombre": "Interruptor Automático Termomagnético Unipolar (PIA 1P)",
    "categoria": "Aparatos de Protección",
    "descripcion": "Protección unipolar para circuitos auxiliares de mando y señalización.",
    "svg": "\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"30\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <circle cx=\"50\" cy=\"30\" r=\"3.5\" fill=\"#182233\" />\n      <line x1=\"50\" y1=\"30\" x2=\"68\" y2=\"58\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <rect x=\"58\" y=\"38\" width=\"10\" height=\"7\" stroke=\"#0d80ef\" stroke-width=\"1.8\" fill=\"#e0f2fe\" />\n      <circle cx=\"50\" cy=\"70\" r=\"3.5\" fill=\"#182233\" />\n      <line x1=\"50\" y1=\"70\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <text x=\"24\" y=\"54\" font-family=\"'JetBrains Mono', monospace\" font-size=\"9\" font-weight=\"700\" fill=\"#182233\">1P</text>\n    "
  },
  {
    "id": "uni-33",
    "numero": 33,
    "nombre": "Interruptor en Caja Moldeada (MCCB / Caja Fija)",
    "categoria": "Aparatos de Protección",
    "descripcion": "Interruptor de potencia industrial con poder de corte elevado (hasta 50kA) y disparadores ajustables.",
    "svg": "\n      <rect x=\"26\" y=\"24\" width=\"48\" height=\"52\" rx=\"3\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"24\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"50\" y1=\"32\" x2=\"64\" y2=\"56\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <rect x=\"56\" y=\"40\" width=\"8\" height=\"6\" fill=\"#0d80ef\" />\n      <line x1=\"50\" y1=\"76\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <text x=\"50\" y=\"70\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#182233\" text-anchor=\"middle\">MCCB</text>\n    "
  },
  {
    "id": "uni-34",
    "numero": 34,
    "nombre": "Interruptor Diferencial Superinmunizado (Tipo F / B)",
    "categoria": "Aparatos de Protección",
    "descripcion": "ID con filtro contra disparos intempestivos por armónicos y detección de corrientes de fuga CC pulsantes.",
    "svg": "\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"28\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <circle cx=\"50\" cy=\"28\" r=\"3\" fill=\"#182233\" />\n      <line x1=\"50\" y1=\"28\" x2=\"66\" y2=\"52\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <ellipse cx=\"50\" cy=\"50\" rx=\"20\" ry=\"12\" stroke=\"#0d80ef\" stroke-width=\"2\" fill=\"none\" />\n      <path d=\"M 40 50 Q 44 45 48 50 T 56 50\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"1.8\" />\n      <line x1=\"50\" y1=\"66\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <text x=\"76\" y=\"53\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#10b981\">TIPO F</text>\n    "
  },
  {
    "id": "uni-35",
    "numero": 35,
    "nombre": "Relé Detector de Asimetría y Secuencia de Fases (RSF)",
    "categoria": "Protección de Red Trifásica",
    "descripcion": "Vigila la inversión o falta de una fase para proteger bobinados de motores contra giro invertido.",
    "svg": "\n      <rect x=\"22\" y=\"24\" width=\"56\" height=\"52\" rx=\"3\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <text x=\"50\" y=\"44\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0d80ef\" text-anchor=\"middle\">L1-L2-L3</text>\n      <path d=\"M 38 60 L 50 50 L 62 60\" fill=\"none\" stroke=\"#d33d3d\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"24\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"50\" y1=\"76\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2.5\" />\n    "
  },
  {
    "id": "uni-36",
    "numero": 36,
    "nombre": "Bobina de Emisión de Corriente para Disparo a Distancia (Shunt Trip)",
    "categoria": "Accionamiento y Teledisparo",
    "descripcion": "Actuador electromagnético asociado a una termomagnética para apertura remota por pulsador de emergencia.",
    "svg": "\n      <rect x=\"26\" y=\"30\" width=\"48\" height=\"40\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"32\" y1=\"62\" x2=\"68\" y2=\"38\" stroke=\"#ef4444\" stroke-width=\"2.5\" />\n      <polygon points=\"68,38 58,40 65,47\" fill=\"#ef4444\" />\n      <text x=\"50\" y=\"54\" font-family=\"'JetBrains Mono', monospace\" font-size=\"9\" font-weight=\"700\" fill=\"#182233\" text-anchor=\"middle\">MX</text>\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"30\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"50\" y1=\"70\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2.5\" />\n    "
  },
  {
    "id": "uni-37",
    "numero": 37,
    "nombre": "Bobina de Mínima Tensión (Disparo por Tensión Nula)",
    "categoria": "Accionamiento y Teledisparo",
    "descripcion": "Dispara el disyuntor si la tensión desciende de un umbral para evitar reintentos de arranque peligrosos.",
    "svg": "\n      <rect x=\"26\" y=\"30\" width=\"48\" height=\"40\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <text x=\"50\" y=\"54\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"#0d80ef\" text-anchor=\"middle\">U &lt;</text>\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"30\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"50\" y1=\"70\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2.5\" />\n    "
  },
  {
    "id": "uni-38",
    "numero": 38,
    "nombre": "Contacto Auxiliar de Estado Abierto / Cerrado (OF)",
    "categoria": "Señalización y Contactos Auxiliares",
    "descripcion": "Microinterruptor acoplado mecánicamente al polo del disyuntor para telegestión o alarmas.",
    "svg": "\n      <line x1=\"50\" y1=\"14\" x2=\"50\" y2=\"32\" stroke=\"#182233\" stroke-width=\"2\" />\n      <circle cx=\"50\" cy=\"32\" r=\"3\" fill=\"#182233\" />\n      <line x1=\"50\" y1=\"32\" x2=\"68\" y2=\"56\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <circle cx=\"50\" cy=\"66\" r=\"3\" fill=\"#182233\" />\n      <line x1=\"50\" y1=\"66\" x2=\"50\" y2=\"86\" stroke=\"#182233\" stroke-width=\"2\" />\n      <text x=\"24\" y=\"52\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#0d80ef\">11-14</text>\n    "
  },
  {
    "id": "uni-39",
    "numero": 39,
    "nombre": "Contacto Auxiliar de Disparo por Falla / Defecto (SD)",
    "categoria": "Señalización y Contactos Auxiliares",
    "descripcion": "Conmuta únicamente si el interruptor dispara por causa eléctrica (cortocircuito o sobrecarga).",
    "svg": "\n      <line x1=\"50\" y1=\"14\" x2=\"50\" y2=\"32\" stroke=\"#182233\" stroke-width=\"2\" />\n      <circle cx=\"50\" cy=\"32\" r=\"3\" fill=\"#182233\" />\n      <line x1=\"50\" y1=\"32\" x2=\"68\" y2=\"56\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <circle cx=\"50\" cy=\"66\" r=\"3\" fill=\"#182233\" />\n      <line x1=\"50\" y1=\"66\" x2=\"50\" y2=\"86\" stroke=\"#182233\" stroke-width=\"2\" />\n      <polygon points=\"68,44 74,48 68,52\" fill=\"#ef4444\" />\n      <text x=\"24\" y=\"52\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#ef4444\">SD</text>\n    "
  },
  {
    "id": "uni-40",
    "numero": 40,
    "nombre": "Dispositivo de Reconexión Automática para Interruptor Diferencial",
    "categoria": "Automatización y Reconexión",
    "descripcion": "Servomotor de rearme programable que verifica el aislamiento antes de restablecer el servicio.",
    "svg": "\n      <rect x=\"24\" y=\"24\" width=\"52\" height=\"52\" rx=\"3\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <path d=\"M 36 50 A 14 14 0 1 1 64 50\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2.5\" />\n      <polygon points=\"64,50 69,42 60,44\" fill=\"#10b981\" />\n      <text x=\"50\" y=\"86\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#10b981\" text-anchor=\"middle\">REARME</text>\n    "
  },
  {
    "id": "uni-41",
    "numero": 41,
    "nombre": "Frecuencímetro de Tablero (Hz)",
    "categoria": "Medición e Instrumentación",
    "descripcion": "Instrumento para control de la frecuencia de oscilación de la red (50 Hz nominal en Argentina).",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"24\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <text x=\"50\" y=\"56\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#0d80ef\" text-anchor=\"middle\">Hz</text>\n      <line x1=\"50\" y1=\"12\" x2=\"50\" y2=\"26\" stroke=\"#182233\" stroke-width=\"2\" />\n      <line x1=\"50\" y1=\"74\" x2=\"50\" y2=\"88\" stroke=\"#182233\" stroke-width=\"2\" />\n    "
  },
  {
    "id": "uni-42",
    "numero": 42,
    "nombre": "Cofímetro / Medidor de Factor de Potencia (cos φ)",
    "categoria": "Medición e Instrumentación",
    "descripcion": "Instrumento para evaluar el desfase entre corriente y tensión y el factor de potencia.",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"24\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <text x=\"50\" y=\"56\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"#182233\" text-anchor=\"middle\">cos φ</text>\n      <line x1=\"50\" y1=\"12\" x2=\"50\" y2=\"26\" stroke=\"#182233\" stroke-width=\"2\" />\n      <line x1=\"50\" y1=\"74\" x2=\"50\" y2=\"88\" stroke=\"#182233\" stroke-width=\"2\" />\n    "
  },
  {
    "id": "uni-43",
    "numero": 43,
    "nombre": "Vatímetro de Tablero (kW)",
    "categoria": "Medición e Instrumentación",
    "descripcion": "Medidor de potencia activa instantánea demandada por la instalación.",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"24\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <text x=\"50\" y=\"56\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#182233\" text-anchor=\"middle\">W</text>\n      <line x1=\"50\" y1=\"12\" x2=\"50\" y2=\"26\" stroke=\"#182233\" stroke-width=\"2\" />\n      <line x1=\"50\" y1=\"74\" x2=\"50\" y2=\"88\" stroke=\"#182233\" stroke-width=\"2\" />\n    "
  },
  {
    "id": "uni-44",
    "numero": 44,
    "nombre": "Varmímetro de Tablero (kvar)",
    "categoria": "Medición e Instrumentación",
    "descripcion": "Medidor de potencia reactiva inductiva o capacitiva.",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"24\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <text x=\"50\" y=\"56\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"#182233\" text-anchor=\"middle\">var</text>\n      <line x1=\"50\" y1=\"12\" x2=\"50\" y2=\"26\" stroke=\"#182233\" stroke-width=\"2\" />\n      <line x1=\"50\" y1=\"74\" x2=\"50\" y2=\"88\" stroke=\"#182233\" stroke-width=\"2\" />\n    "
  },
  {
    "id": "uni-45",
    "numero": 45,
    "nombre": "Central de Medición Multifunción Digital de Tablero",
    "categoria": "Medición Digital",
    "descripcion": "Analizador de redes microprocesado que integra V, A, kW, kWh, armónicos THD y comunicación RS-485.",
    "svg": "\n      <rect x=\"22\" y=\"24\" width=\"56\" height=\"52\" rx=\"3\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <rect x=\"28\" y=\"30\" width=\"44\" height=\"20\" stroke=\"#0d80ef\" stroke-width=\"1.8\" fill=\"#e0f2fe\" />\n      <text x=\"50\" y=\"44\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#0d80ef\" text-anchor=\"middle\">MULTI-M</text>\n      <circle cx=\"36\" cy=\"62\" r=\"3\" fill=\"#182233\" />\n      <circle cx=\"50\" cy=\"62\" r=\"3\" fill=\"#182233\" />\n      <circle cx=\"64\" cy=\"62\" r=\"3\" fill=\"#182233\" />\n    "
  },
  {
    "id": "uni-46",
    "numero": 46,
    "nombre": "Conmutador de Amperímetro (Selector de Fases A-SEL)",
    "categoria": "Medición e Instrumentación",
    "descripcion": "Llave selectora para conectar secuencialmente los transformadores de corriente al amperímetro.",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"22\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <circle cx=\"50\" cy=\"50\" r=\"4\" fill=\"#182233\" />\n      <line x1=\"50\" y1=\"50\" x2=\"66\" y2=\"34\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <text x=\"50\" y=\"86\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#182233\" text-anchor=\"middle\">A-SEL</text>\n    "
  },
  {
    "id": "uni-47",
    "numero": 47,
    "nombre": "Transformador Trifásico de Potencia (Trafo BT/BT o MT/BT)",
    "categoria": "Transformación",
    "descripcion": "Transformador trifásico acoplado en triángulo-estrella (Dyn11) con borne de neutro accesible.",
    "svg": "\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"26\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <circle cx=\"44\" cy=\"38\" r=\"14\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <circle cx=\"56\" cy=\"58\" r=\"14\" stroke=\"#0d80ef\" stroke-width=\"2.5\" fill=\"#e0f2fe\" fill-opacity=\"0.5\" />\n      <line x1=\"50\" y1=\"72\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <text x=\"24\" y=\"52\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#182233\">3~</text>\n    "
  },
  {
    "id": "uni-48",
    "numero": 48,
    "nombre": "Transformador de Tensión para Medición (TT / TP)",
    "categoria": "Medición e Instrumentación",
    "descripcion": "Transformador para rebajar tensiones de barra y alimentar voltímetros con total aislamiento.",
    "svg": "\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"34\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <circle cx=\"50\" cy=\"44\" r=\"10\" stroke=\"#182233\" stroke-width=\"2\" fill=\"none\" />\n      <circle cx=\"50\" cy=\"56\" r=\"10\" stroke=\"#0d80ef\" stroke-width=\"2\" fill=\"none\" />\n      <line x1=\"50\" y1=\"66\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <text x=\"72\" y=\"52\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#182233\">TT</text>\n    "
  },
  {
    "id": "uni-49",
    "numero": 49,
    "nombre": "Contador de Energía Reactiva (Medidor kvarh)",
    "categoria": "Medición e Instrumentación",
    "descripcion": "Medidor acumulador de consumo de energía reactiva para fiscalización de penalizaciones.",
    "svg": "\n      <rect x=\"22\" y=\"24\" width=\"56\" height=\"52\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"22\" y1=\"46\" x2=\"78\" y2=\"46\" stroke=\"#182233\" stroke-width=\"2\" />\n      <text x=\"50\" y=\"40\" font-family=\"'JetBrains Mono', monospace\" font-size=\"9\" font-weight=\"700\" fill=\"#d33d3d\" text-anchor=\"middle\">kvarh</text>\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"24\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"50\" y1=\"76\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2.5\" />\n    "
  },
  {
    "id": "uni-50",
    "numero": 50,
    "nombre": "Horómetro / Contador de Horas de Marcha",
    "categoria": "Medición e Instrumentación",
    "descripcion": "Registro mecánico o digital del tiempo total de funcionamiento para mantenimiento de motores.",
    "svg": "\n      <rect x=\"22\" y=\"24\" width=\"56\" height=\"52\" rx=\"3\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <rect x=\"28\" y=\"36\" width=\"44\" height=\"18\" stroke=\"#182233\" stroke-width=\"1.8\" fill=\"#e2e8f0\" />\n      <text x=\"50\" y=\"49\" font-family=\"'JetBrains Mono', monospace\" font-size=\"11\" font-weight=\"700\" fill=\"#182233\" text-anchor=\"middle\">00248 h</text>\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"24\" stroke=\"#182233\" stroke-width=\"2\" />\n      <line x1=\"50\" y1=\"76\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2\" />\n    "
  },
  {
    "id": "uni-51",
    "numero": 51,
    "nombre": "Pulsador de Parada de Emergencia (Golpe de Puño con Enclavamiento)",
    "categoria": "Aparatos de Seguridad",
    "descripcion": "Seta roja de corte de energía inmediato con retención y desenclavamiento por giro.",
    "svg": "\n      <line x1=\"50\" y1=\"14\" x2=\"50\" y2=\"34\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"50\" y1=\"34\" x2=\"68\" y2=\"58\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <circle cx=\"50\" cy=\"66\" r=\"3.5\" fill=\"#182233\" />\n      <line x1=\"50\" y1=\"66\" x2=\"50\" y2=\"86\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <!-- Cabeza seta de emergencia -->\n      <path d=\"M 54 36 A 14 14 0 0 1 82 36 Z\" fill=\"#ef4444\" stroke=\"#ef4444\" />\n      <text x=\"24\" y=\"52\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#ef4444\">STOP</text>\n    "
  },
  {
    "id": "uni-52",
    "numero": 52,
    "nombre": "Contactor Auxiliar de Maniobra / Relé Encapsulado (KA)",
    "categoria": "Aparatos de Automatización",
    "descripcion": "Relé electromagnético para multiplicación de contactos y lógica de enclavamiento.",
    "svg": "\n      <rect x=\"28\" y=\"28\" width=\"44\" height=\"44\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"28\" y1=\"28\" x2=\"72\" y2=\"72\" stroke=\"#0d80ef\" stroke-width=\"2\" />\n      <text x=\"50\" y=\"86\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#0d80ef\" text-anchor=\"middle\">KA</text>\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"28\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"50\" y1=\"72\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2.5\" />\n    "
  },
  {
    "id": "uni-53",
    "numero": 53,
    "nombre": "Relé Temporizador a la Conexión (Delay ON)",
    "categoria": "Aparatos de Automatización",
    "descripcion": "Temporizador que retarda el cierre del circuito un tiempo regulable t tras energizarse.",
    "svg": "\n      <rect x=\"28\" y=\"28\" width=\"44\" height=\"44\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <rect x=\"28\" y=\"28\" width=\"16\" height=\"44\" fill=\"#0d80ef\" fill-opacity=\"0.3\" stroke=\"#0d80ef\" stroke-width=\"1.5\" />\n      <text x=\"56\" y=\"54\" font-family=\"'JetBrains Mono', monospace\" font-size=\"9\" font-weight=\"700\" fill=\"#182233\" text-anchor=\"middle\">TON</text>\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"28\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"50\" y1=\"72\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2.5\" />\n    "
  },
  {
    "id": "uni-54",
    "numero": 54,
    "nombre": "Relé Temporizador a la Desconexión (Delay OFF)",
    "categoria": "Aparatos de Automatización",
    "descripcion": "Temporizador que mantiene activada la carga durante un tiempo tras quitar el comando.",
    "svg": "\n      <rect x=\"28\" y=\"28\" width=\"44\" height=\"44\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <rect x=\"56\" y=\"28\" width=\"16\" height=\"44\" fill=\"#182233\" />\n      <text x=\"42\" y=\"54\" font-family=\"'JetBrains Mono', monospace\" font-size=\"9\" font-weight=\"700\" fill=\"#182233\" text-anchor=\"middle\">TOFF</text>\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"28\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"50\" y1=\"72\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2.5\" />\n    "
  },
  {
    "id": "uni-55",
    "numero": 55,
    "nombre": "Relé de Estado Sólido (SSR)",
    "categoria": "Electrónica de Potencia",
    "descripcion": "Conmutador estático por semiconductores (triac/tiristor) sin piezas mecánicas móviles.",
    "svg": "\n      <rect x=\"26\" y=\"26\" width=\"48\" height=\"48\" rx=\"3\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <polygon points=\"40,54 50,42 60,54\" fill=\"#182233\" />\n      <polygon points=\"40,46 50,58 60,46\" fill=\"#182233\" />\n      <text x=\"50\" y=\"86\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#0d80ef\" text-anchor=\"middle\">SSR</text>\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"26\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"50\" y1=\"74\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2.5\" />\n    "
  },
  {
    "id": "uni-56",
    "numero": 56,
    "nombre": "Controlador Lógico Programable (Autómata / PLC)",
    "categoria": "Automatización y Control",
    "descripcion": "Unidad central microprocesada para automatización de maniobras y procesos de tablero.",
    "svg": "\n      <rect x=\"20\" y=\"24\" width=\"60\" height=\"52\" rx=\"4\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <text x=\"50\" y=\"48\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#0d80ef\" text-anchor=\"middle\">PLC</text>\n      <circle cx=\"32\" cy=\"62\" r=\"2.5\" fill=\"#10b981\" />\n      <circle cx=\"44\" cy=\"62\" r=\"2.5\" fill=\"#10b981\" />\n      <circle cx=\"56\" cy=\"62\" r=\"2.5\" fill=\"#10b981\" />\n      <circle cx=\"68\" cy=\"62\" r=\"2.5\" fill=\"#10b981\" />\n    "
  },
  {
    "id": "uni-57",
    "numero": 57,
    "nombre": "Arrancador Suave Electrónico (Soft Starter)",
    "categoria": "Fuerza Motriz y Arranque",
    "descripcion": "Control de tensión por tiristores para limitación de corriente durante el arranque de motores.",
    "svg": "\n      <rect x=\"22\" y=\"24\" width=\"56\" height=\"52\" rx=\"3\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"22\" y1=\"76\" x2=\"78\" y2=\"24\" stroke=\"#182233\" stroke-width=\"2\" />\n      <text x=\"36\" y=\"44\" font-family=\"'JetBrains Mono', monospace\" font-size=\"10\" font-weight=\"700\" fill=\"#0d80ef\">U</text>\n      <text x=\"58\" y=\"66\" font-family=\"'JetBrains Mono', monospace\" font-size=\"9\" font-weight=\"700\" fill=\"#10b981\">RAMPA</text>\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"24\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"50\" y1=\"76\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2.5\" />\n    "
  },
  {
    "id": "uni-58",
    "numero": 58,
    "nombre": "Llave Selectora Manual de 3 Posiciones (Manual - 0 - Auto)",
    "categoria": "Aparatos de Maniobra",
    "descripcion": "Selector frontal para elegir funcionamiento manual, apagado o control automático por sensor.",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"22\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"50\" y1=\"50\" x2=\"50\" y2=\"30\" stroke=\"#182233\" stroke-width=\"3\" stroke-linecap=\"round\" />\n      <text x=\"34\" y=\"38\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#182233\">M</text>\n      <text x=\"50\" y=\"24\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#182233\" text-anchor=\"middle\">0</text>\n      <text x=\"66\" y=\"38\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#0d80ef\">A</text>\n    "
  },
  {
    "id": "uni-59",
    "numero": 59,
    "nombre": "Fin de Carrera Mecánico / Interruptor de Posición (Limit Switch)",
    "categoria": "Sensores y Maniobra",
    "descripcion": "Contacto electromecánico accionado por el desplazamiento físico de portones o carros.",
    "svg": "\n      <line x1=\"50\" y1=\"14\" x2=\"50\" y2=\"34\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <circle cx=\"50\" cy=\"34\" r=\"3\" fill=\"#182233\" />\n      <line x1=\"50\" y1=\"34\" x2=\"68\" y2=\"58\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <!-- Roldana fin de carrera -->\n      <circle cx=\"72\" cy=\"54\" r=\"5\" stroke=\"#0d80ef\" stroke-width=\"2\" fill=\"#ffffff\" />\n      <circle cx=\"50\" cy=\"68\" r=\"3\" fill=\"#182233\" />\n      <line x1=\"50\" y1=\"68\" x2=\"50\" y2=\"88\" stroke=\"#182233\" stroke-width=\"2.5\" />\n    "
  },
  {
    "id": "uni-60",
    "numero": 60,
    "nombre": "Flotante Eléctrico de Nivel para Tanque / Cisterna",
    "categoria": "Sensores y Maniobra",
    "descripcion": "Interruptor basculante sellado que habilita o corta la bomba según el nivel de agua.",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"18\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <path d=\"M 38 56 Q 44 48 50 56 T 62 56\" fill=\"none\" stroke=\"#0d80ef\" stroke-width=\"2.5\" />\n      <line x1=\"50\" y1=\"14\" x2=\"50\" y2=\"32\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <circle cx=\"50\" cy=\"32\" r=\"3\" fill=\"#182233\" />\n    "
  },
  {
    "id": "uni-61",
    "numero": 61,
    "nombre": "Capacitor / Banco Fijo de Condensadores de Potencia",
    "categoria": "Corrección Factor de Potencia",
    "descripcion": "Celda capacitiva trifásica en derivación para compensación de energía reactiva en tableros.",
    "svg": "\n      <line x1=\"50\" y1=\"12\" x2=\"50\" y2=\"44\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"30\" y1=\"44\" x2=\"70\" y2=\"44\" stroke=\"#182233\" stroke-width=\"3\" stroke-linecap=\"round\" />\n      <line x1=\"30\" y1=\"56\" x2=\"70\" y2=\"56\" stroke=\"#182233\" stroke-width=\"3\" stroke-linecap=\"round\" />\n      <line x1=\"50\" y1=\"56\" x2=\"50\" y2=\"88\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <text x=\"76\" y=\"53\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#0d80ef\">kvar</text>\n    "
  },
  {
    "id": "uni-62",
    "numero": 62,
    "nombre": "Regulador Automático de Factor de Potencia (Controlador de Pasos)",
    "categoria": "Corrección Factor de Potencia",
    "descripcion": "Relé inteligente que conecta y desconecta pasos de capacitores según el cos φ medido.",
    "svg": "\n      <rect x=\"22\" y=\"24\" width=\"56\" height=\"52\" rx=\"3\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <text x=\"50\" y=\"44\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#182233\" text-anchor=\"middle\">cos φ</text>\n      <text x=\"50\" y=\"60\" font-family=\"'JetBrains Mono', monospace\" font-size=\"9\" font-weight=\"700\" fill=\"#0d80ef\" text-anchor=\"middle\">AUTO</text>\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"24\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"50\" y1=\"76\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2.5\" />\n    "
  },
  {
    "id": "uni-63",
    "numero": 63,
    "nombre": "Acumulador Eléctrico / Batería Estacionaria",
    "categoria": "Fuentes y Almacenamiento",
    "descripcion": "Fuente de corriente continua formada por placas positivas y negativas.",
    "svg": "\n      <line x1=\"50\" y1=\"12\" x2=\"50\" y2=\"40\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"32\" y1=\"40\" x2=\"68\" y2=\"40\" stroke=\"#182233\" stroke-width=\"3.5\" stroke-linecap=\"round\" />\n      <line x1=\"40\" y1=\"48\" x2=\"60\" y2=\"48\" stroke=\"#182233\" stroke-width=\"2\" stroke-linecap=\"round\" />\n      <line x1=\"32\" y1=\"56\" x2=\"68\" y2=\"56\" stroke=\"#182233\" stroke-width=\"3.5\" stroke-linecap=\"round\" />\n      <line x1=\"40\" y1=\"64\" x2=\"60\" y2=\"64\" stroke=\"#182233\" stroke-width=\"2\" stroke-linecap=\"round\" />\n      <line x1=\"50\" y1=\"64\" x2=\"50\" y2=\"88\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <text x=\"74\" y=\"42\" font-family=\"'JetBrains Mono', monospace\" font-size=\"9\" font-weight=\"700\" fill=\"#ef4444\">+</text>\n      <text x=\"74\" y=\"66\" font-family=\"'JetBrains Mono', monospace\" font-size=\"9\" font-weight=\"700\" fill=\"#182233\">-</text>\n    "
  },
  {
    "id": "uni-64",
    "numero": 64,
    "nombre": "Sistema de Alimentación Ininterrumpida (UPS / SAI)",
    "categoria": "Fuentes y Almacenamiento",
    "descripcion": "Conjunto rectificador-cargador, acumulador e inversor estático para energía sin corte.",
    "svg": "\n      <rect x=\"20\" y=\"24\" width=\"60\" height=\"52\" rx=\"4\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <text x=\"50\" y=\"55\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#e11d48\" text-anchor=\"middle\">UPS</text>\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"24\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"50\" y1=\"76\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2.5\" />\n    "
  },
  {
    "id": "uni-65",
    "numero": 65,
    "nombre": "Inversor Solar Fotovoltaico On-Grid / Híbrido",
    "categoria": "Energías Renovables",
    "descripcion": "Convertidor de corriente continua de paneles solares a corriente alterna sincronizada a la red.",
    "svg": "\n      <rect x=\"22\" y=\"24\" width=\"56\" height=\"52\" rx=\"3\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"22\" y1=\"76\" x2=\"78\" y2=\"24\" stroke=\"#182233\" stroke-width=\"2\" />\n      <text x=\"34\" y=\"44\" font-family=\"'JetBrains Mono', monospace\" font-size=\"10\" font-weight=\"700\" fill=\"#f59e0b\">=</text>\n      <text x=\"58\" y=\"66\" font-family=\"'JetBrains Mono', monospace\" font-size=\"12\" font-weight=\"700\" fill=\"#0d80ef\">~</text>\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"24\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"50\" y1=\"76\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2.5\" />\n    "
  },
  {
    "id": "uni-66",
    "numero": 66,
    "nombre": "Generador Fotovoltaico (Arreglo de Paneles Solares PV)",
    "categoria": "Energías Renovables",
    "descripcion": "Símbolo representativo de la cadena o string de módulos fotovoltaicos generadores de CC.",
    "svg": "\n      <rect x=\"24\" y=\"28\" width=\"52\" height=\"44\" rx=\"2\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"24\" y1=\"50\" x2=\"76\" y2=\"50\" stroke=\"#0d80ef\" stroke-width=\"1.8\" />\n      <line x1=\"50\" y1=\"28\" x2=\"50\" y2=\"72\" stroke=\"#0d80ef\" stroke-width=\"1.8\" />\n      <line x1=\"16\" y1=\"20\" x2=\"26\" y2=\"30\" stroke=\"#f59e0b\" stroke-width=\"2.5\" />\n      <polygon points=\"26,30 20,29 25,24\" fill=\"#f59e0b\" />\n      <line x1=\"50\" y1=\"72\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2.5\" />\n    "
  },
  {
    "id": "uni-67",
    "numero": 67,
    "nombre": "Rectificador Estático CA / CC (Cargador de Baterías)",
    "categoria": "Fuentes y Almacenamiento",
    "descripcion": "Puente de diodos o tiristores para conversión de alterna a continua filtrada.",
    "svg": "\n      <rect x=\"22\" y=\"24\" width=\"56\" height=\"52\" rx=\"3\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"22\" y1=\"76\" x2=\"78\" y2=\"24\" stroke=\"#182233\" stroke-width=\"2\" />\n      <text x=\"34\" y=\"44\" font-family=\"'JetBrains Mono', monospace\" font-size=\"11\" font-weight=\"700\" fill=\"#0d80ef\">~</text>\n      <text x=\"58\" y=\"66\" font-family=\"'JetBrains Mono', monospace\" font-size=\"11\" font-weight=\"700\" fill=\"#182233\">=</text>\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"24\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"50\" y1=\"76\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2.5\" />\n    "
  },
  {
    "id": "uni-68",
    "numero": 68,
    "nombre": "Medidor Bidireccional de Inyección a Red (Ley de Generación Distribuida)",
    "categoria": "Medición e Instrumentación",
    "descripcion": "Contador de energía que mide tanto el consumo importado como el excedente renovable exportado.",
    "svg": "\n      <rect x=\"22\" y=\"24\" width=\"56\" height=\"52\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <text x=\"50\" y=\"40\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#1f9d63\" text-anchor=\"middle\">IMPORT</text>\n      <path d=\"M 34 56 L 66 56\" stroke=\"#0d80ef\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <polygon points=\"34,56 42,51 42,61\" fill=\"#0d80ef\" />\n      <polygon points=\"66,56 58,51 58,61\" fill=\"#0d80ef\" />\n      <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"24\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"50\" y1=\"76\" x2=\"50\" y2=\"90\" stroke=\"#182233\" stroke-width=\"2.5\" />\n    "
  },
  {
    "id": "uni-69",
    "numero": 69,
    "nombre": "Tablero de Transferencia Automática (TTA / ATS)",
    "categoria": "Fuentes y Transferencia",
    "descripcion": "Módulo electromecánico o motorizado que conmuta automáticamente entre red comercial y generador.",
    "svg": "\n      <rect x=\"20\" y=\"24\" width=\"60\" height=\"52\" rx=\"4\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <text x=\"50\" y=\"54\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"#0d80ef\" text-anchor=\"middle\">TTA</text>\n      <text x=\"50\" y=\"68\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#182233\" text-anchor=\"middle\">RED / GEN</text>\n    "
  },
  {
    "id": "uni-70",
    "numero": 70,
    "nombre": "Filtro Activo de Armónicos (Active Harmonic Filter AHF)",
    "categoria": "Calidad de Energía",
    "descripcion": "Equipo electrónico de inyección de contracorrientes para anular armónicos generados por variadores.",
    "svg": "\n      <rect x=\"20\" y=\"24\" width=\"60\" height=\"52\" rx=\"3\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <path d=\"M 28 50 Q 36 34 44 50 T 60 50\" fill=\"none\" stroke=\"#d33d3d\" stroke-width=\"2\" />\n      <line x1=\"36\" y1=\"62\" x2=\"64\" y2=\"62\" stroke=\"#10b981\" stroke-width=\"2.5\" />\n      <text x=\"50\" y=\"40\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#0d80ef\" text-anchor=\"middle\">AHF</text>\n    "
  },
  {
    "id": "uni-71",
    "numero": 71,
    "nombre": "Borne Seccionable de Prueba / Desconector de Ensayo",
    "categoria": "Conexión y Medición",
    "descripcion": "Borne especial que permite intercalar instrumentos en serie o aislar circuitos sin desconectar cables.",
    "svg": "\n      <circle cx=\"36\" cy=\"50\" r=\"4\" fill=\"#182233\" />\n      <circle cx=\"64\" cy=\"50\" r=\"4\" fill=\"#182233\" />\n      <line x1=\"36\" y1=\"50\" x2=\"60\" y2=\"34\" stroke=\"#182233\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <rect x=\"22\" y=\"38\" width=\"56\" height=\"24\" rx=\"2\" stroke=\"#0d80ef\" stroke-width=\"1.8\" stroke-dasharray=\"3 2\" fill=\"none\" />\n      <line x1=\"10\" y1=\"50\" x2=\"32\" y2=\"50\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"68\" y1=\"50\" x2=\"90\" y2=\"50\" stroke=\"#182233\" stroke-width=\"2.5\" />\n    "
  },
  {
    "id": "uni-72",
    "numero": 72,
    "nombre": "Conexión Mediante Enchufe Desenchufable (Macho - Hembra)",
    "categoria": "Conexión y Maniobra",
    "descripcion": "Par de contactos de acoplamiento rápido para módulos extraíbles en armarios modulares.",
    "svg": "\n      <line x1=\"50\" y1=\"12\" x2=\"50\" y2=\"40\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <path d=\"M 38 40 L 62 40\" stroke=\"#182233\" stroke-width=\"3\" stroke-linecap=\"round\" />\n      <path d=\"M 34 54 C 34 46, 66 46, 66 54\" fill=\"none\" stroke=\"#0d80ef\" stroke-width=\"2.5\" />\n      <line x1=\"50\" y1=\"58\" x2=\"50\" y2=\"88\" stroke=\"#182233\" stroke-width=\"2.5\" />\n    "
  },
  {
    "id": "uni-73",
    "numero": 73,
    "nombre": "Resistencia Calefactora Anticondensación de Tablero",
    "categoria": "Accesorios de Tablero",
    "descripcion": "Elemento resistivo blindado para evitar condensación de humedad interior en armarios.",
    "svg": "\n      <rect x=\"28\" y=\"34\" width=\"44\" height=\"32\" rx=\"2\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <path d=\"M 34 50 L 40 42 L 48 58 L 56 42 L 62 50\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n      <line x1=\"50\" y1=\"12\" x2=\"50\" y2=\"34\" stroke=\"#182233\" stroke-width=\"2\" />\n      <line x1=\"50\" y1=\"66\" x2=\"50\" y2=\"88\" stroke=\"#182233\" stroke-width=\"2\" />\n    "
  },
  {
    "id": "uni-74",
    "numero": 74,
    "nombre": "Termostato de Tablero Eléctrico (Regulador de Ventilación)",
    "categoria": "Accesorios de Tablero",
    "descripcion": "Contacto bimetálico para arranque automático de ventiladores o corte de calefactores.",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"22\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <text x=\"50\" y=\"56\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#0d80ef\" text-anchor=\"middle\">°C</text>\n      <line x1=\"50\" y1=\"12\" x2=\"50\" y2=\"28\" stroke=\"#182233\" stroke-width=\"2\" />\n      <line x1=\"50\" y1=\"72\" x2=\"50\" y2=\"88\" stroke=\"#182233\" stroke-width=\"2\" />\n    "
  },
  {
    "id": "uni-75",
    "numero": 75,
    "nombre": "Ventilador Forzado con Filtro para Tablero",
    "categoria": "Accesorios de Tablero",
    "descripcion": "Extractor con rejilla y filtro antipolvo para refrigeración activa de componentes térmicos.",
    "svg": "\n      <rect x=\"22\" y=\"24\" width=\"56\" height=\"52\" rx=\"3\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <circle cx=\"50\" cy=\"50\" r=\"16\" stroke=\"#182233\" stroke-width=\"2\" fill=\"none\" />\n      <path d=\"M 50 50 L 44 38 M 50 50 L 62 44 M 50 50 L 56 62 M 50 50 L 38 56\" stroke=\"#0d80ef\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n    "
  },
  {
    "id": "uni-76",
    "numero": 76,
    "nombre": "Bloque Repartidor Tetrapolar Modular (Escalonado 100A/160A)",
    "categoria": "Distribución y Repartidores",
    "descripcion": "Bloque distribuidor sobre riel DIN para ramificación prolija de 3 Fases y Neutro hacia interruptores.",
    "svg": "\n      <rect x=\"18\" y=\"28\" width=\"64\" height=\"44\" rx=\"2\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <line x1=\"28\" y1=\"28\" x2=\"28\" y2=\"72\" stroke=\"#d33d3d\" stroke-width=\"2\" />\n      <line x1=\"42\" y1=\"28\" x2=\"42\" y2=\"72\" stroke=\"#182233\" stroke-width=\"2\" />\n      <line x1=\"56\" y1=\"28\" x2=\"56\" y2=\"72\" stroke=\"#0d80ef\" stroke-width=\"2\" />\n      <line x1=\"70\" y1=\"28\" x2=\"70\" y2=\"72\" stroke=\"#0d80ef\" stroke-width=\"2\" stroke-dasharray=\"2 2\" />\n      <circle cx=\"28\" cy=\"50\" r=\"2.5\" fill=\"#d33d3d\" />\n      <circle cx=\"42\" cy=\"50\" r=\"2.5\" fill=\"#182233\" />\n      <circle cx=\"56\" cy=\"50\" r=\"2.5\" fill=\"#0d80ef\" />\n      <circle cx=\"70\" cy=\"50\" r=\"2.5\" fill=\"#0d80ef\" />\n    "
  },
  {
    "id": "uni-77",
    "numero": 77,
    "nombre": "Derivación en T sin Corte de Conductor (Empalme Derivado)",
    "categoria": "Conexión y Barras",
    "descripcion": "Punto de conexión eléctrica firme representado por un círculo relleno sobre el conductor.",
    "svg": "\n      <line x1=\"12\" y1=\"50\" x2=\"88\" y2=\"50\" stroke=\"#182233\" stroke-width=\"3\" />\n      <line x1=\"50\" y1=\"50\" x2=\"50\" y2=\"88\" stroke=\"#182233\" stroke-width=\"3\" />\n      <circle cx=\"50\" cy=\"50\" r=\"6\" fill=\"#0d80ef\" stroke=\"#182233\" stroke-width=\"2\" />\n    "
  },
  {
    "id": "uni-78",
    "numero": 78,
    "nombre": "Cruce de Conductores sin Conexión Eléctrica",
    "categoria": "Líneas y Esquemas",
    "descripcion": "Dos conductores que se cruzan en el plano sin unión galvánica ni contacto eléctrico.",
    "svg": "\n      <line x1=\"12\" y1=\"50\" x2=\"88\" y2=\"50\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"50\" y1=\"12\" x2=\"50\" y2=\"40\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <path d=\"M 50 40 A 10 10 0 0 0 50 60\" fill=\"none\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <line x1=\"50\" y1=\"60\" x2=\"50\" y2=\"88\" stroke=\"#182233\" stroke-width=\"2.5\" />\n    "
  },
  {
    "id": "uni-79",
    "numero": 79,
    "nombre": "Electrodo de Puesta a Tierra en Malla / Conductor Enterrado",
    "categoria": "Puesta a Tierra",
    "descripcion": "Malla reticulada o conductor horizontal desnudo enterrado para equipotencialidad de subestaciones.",
    "svg": "\n      <line x1=\"50\" y1=\"14\" x2=\"50\" y2=\"40\" stroke=\"#182233\" stroke-width=\"2.5\" />\n      <rect x=\"20\" y=\"40\" width=\"60\" height=\"36\" stroke=\"#1f9d63\" stroke-width=\"2.5\" fill=\"#f0fdf4\" />\n      <line x1=\"20\" y1=\"58\" x2=\"80\" y2=\"58\" stroke=\"#1f9d63\" stroke-width=\"1.8\" />\n      <line x1=\"40\" y1=\"40\" x2=\"40\" y2=\"76\" stroke=\"#1f9d63\" stroke-width=\"1.8\" />\n      <line x1=\"60\" y1=\"40\" x2=\"60\" y2=\"76\" stroke=\"#1f9d63\" stroke-width=\"1.8\" />\n      <text x=\"50\" y=\"88\" font-family=\"'JetBrains Mono', monospace\" font-size=\"8\" font-weight=\"700\" fill=\"#1f9d63\" text-anchor=\"middle\">MALLA PAT</text>\n    "
  },
  {
    "id": "uni-80",
    "numero": 80,
    "nombre": "Motor Asincrónico Monofásico con Capacitor Permanente (M 1~)",
    "categoria": "Fuerza Motriz",
    "descripcion": "Motor monofásico a 220V con bobinado auxiliar y condensador para bombas o extractores.",
    "svg": "\n      <circle cx=\"50\" cy=\"50\" r=\"26\" stroke=\"#182233\" stroke-width=\"2.5\" fill=\"#f8fafc\" />\n      <text x=\"50\" y=\"46\" font-family=\"'Space Grotesk', sans-serif\" font-size=\"20\" font-weight=\"700\" fill=\"#182233\" text-anchor=\"middle\">M</text>\n      <text x=\"50\" y=\"64\" font-family=\"'JetBrains Mono', monospace\" font-size=\"12\" font-weight=\"700\" fill=\"#0d80ef\" text-anchor=\"middle\">1 ~</text>\n      <line x1=\"50\" y1=\"12\" x2=\"50\" y2=\"24\" stroke=\"#182233\" stroke-width=\"2.5\" />\n    "
  }
];
