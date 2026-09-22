// js/simbolosData.js — 80 Símbolos en Planta y 80 Símbolos Unifilares
export const SIMBOLOS_PLANOS = [
  {
    id: 'plano-01',
    numero: 1,
    nombre: 'Boca de Salida para Centro de Iluminación en Techo',
    categoria: 'Alumbrado e Iluminación',
    descripcion: 'Círculo con cruz inscrita simétrica que identifica la boca de luz de techo.',
    svg: `<circle cx="50" cy="50" r="28" stroke="#182233" stroke-width="2.5" fill="#f8fafc" /><line x1="14" y1="50" x2="86" y2="50" stroke="#182233" stroke-width="2.5" stroke-linecap="round" /><line x1="50" y1="14" x2="50" y2="86" stroke="#182233" stroke-width="2.5" stroke-linecap="round" /><circle cx="50" cy="50" r="3.5" fill="#0d80ef" />`
  },
  {
    id: 'plano-02',
    numero: 2,
    nombre: 'Boca de Iluminación en Pared (Aplique / Braquete)',
    categoria: 'Alumbrado e Iluminación',
    descripcion: 'Semicírculo adosado a la pared con trazo perpendicular.',
    svg: `<line x1="16" y1="76" x2="84" y2="76" stroke="#182233" stroke-width="4.5" stroke-linecap="square" /><path d="M 26 76 A 24 24 0 0 1 74 76" stroke="#182233" stroke-width="2.5" fill="#f8fafc" /><line x1="50" y1="52" x2="50" y2="24" stroke="#182233" stroke-width="2.5" stroke-linecap="round" /><line x1="32" y1="38" x2="68" y2="38" stroke="#182233" stroke-width="2" stroke-linecap="round" />`
  },
  {
    id: 'plano-04',
    numero: 4,
    nombre: 'Tomacorriente Bipolar con Toma de Tierra (2P+T)',
    categoria: 'Tomas de Corriente',
    descripcion: 'Semicírculo con dos polos de conexión y derivación a tierra IRAM 2071.',
    svg: `<path d="M 22 62 A 28 28 0 0 1 78 62 Z" stroke="#182233" stroke-width="2.5" fill="#f8fafc" /><line x1="50" y1="34" x2="50" y2="18" stroke="#182233" stroke-width="2.5" stroke-linecap="round" /><line x1="38" y1="18" x2="62" y2="18" stroke="#182233" stroke-width="2.5" stroke-linecap="round" /><line x1="34" y1="62" x2="34" y2="76" stroke="#182233" stroke-width="2" stroke-linecap="round" /><line x1="66" y1="62" x2="66" y2="76" stroke="#182233" stroke-width="2" stroke-linecap="round" />`
  },
  // ... aquí van los 80 símbolos de planta
];

export const SIMBOLOS_UNIFILARES = [
  {
    id: 'uni-01',
    numero: 1,
    nombre: 'Interruptor Automático Termomagnético Bipolar (PIA 2P)',
    categoria: 'Aparatos de Protección',
    descripcion: 'Protección termomagnética bifilar contra sobrecargas y cortocircuitos.',
    svg: `<line x1="50" y1="10" x2="50" y2="30" stroke="#182233" stroke-width="2.5" /><circle cx="50" cy="30" r="3.5" fill="#182233" /><line x1="50" y1="30" x2="68" y2="58" stroke="#182233" stroke-width="2.5" stroke-linecap="round" /><rect x="58" y="38" width="10" height="7" stroke="#0d80ef" stroke-width="1.8" fill="#e0f2fe" /><path d="M 64 50 L 72 50 L 72 56" fill="none" stroke="#d33d3d" stroke-width="1.8" /><circle cx="50" cy="70" r="3.5" fill="#182233" /><line x1="50" y1="70" x2="50" y2="90" stroke="#182233" stroke-width="2.5" /><text x="26" y="54" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700" fill="#182233">2P</text>`
  },
  {
    id: 'uni-03',
    numero: 3,
    nombre: 'Interruptor Diferencial Bipolar (Disyuntor ID 2P 30mA)',
    categoria: 'Aparatos de Protección',
    descripcion: 'Protección diferencial de personas contra contactos directos e indirectos.',
    svg: `<line x1="50" y1="10" x2="50" y2="30" stroke="#182233" stroke-width="2.5" /><circle cx="50" cy="30" r="3" fill="#182233" /><line x1="50" y1="30" x2="68" y2="56" stroke="#182233" stroke-width="2.5" /><ellipse cx="50" cy="50" rx="18" ry="12" stroke="#0d80ef" stroke-width="2" fill="none" /><line x1="50" y1="68" x2="50" y2="90" stroke="#182233" stroke-width="2.5" /><circle cx="50" cy="68" r="3" fill="#182233" /><text x="74" y="54" font-family="'JetBrains Mono', monospace" font-size="8" font-weight="700" fill="#1f9d63">IΔn</text>`
  },
  // ... aquí van los 80 símbolos unifilares
];
