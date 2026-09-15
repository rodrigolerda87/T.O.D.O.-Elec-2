// guias.js — Circuitos Eléctricos Interactivos Normalizados (AEA 90364 / IRAM 2183)
const NODE_COLOR = { fuente: '#8b93a1', control: '#3b82f6', carga: '#f5765c', proteccion: '#8b93a1' };
const NODE_BG = { fuente: 'rgba(139,147,161,0.14)', control: 'rgba(59,130,246,0.14)', carga: 'rgba(245,118,92,0.14)', proteccion: 'rgba(139,147,161,0.14)' };

const SVG_DEFS = `
  <defs>
    <filter id="din-shadow" x="-10%" y="-10%" width="125%" height="125%">
      <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000" flood-opacity="0.6" />
    </filter>
    <filter id="bulb-glow-filter" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    <pattern id="cable-pe-stripes" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="10" stroke="#16a34a" stroke-width="6" />
      <line x1="5" y1="0" x2="5" y2="10" stroke="#eab308" stroke-width="4" />
    </pattern>
    <radialGradient id="lamp-glow-on" cx="50%" cy="45%" r="55%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
      <stop offset="25%" stop-color="#fef08a" stop-opacity="0.95" />
      <stop offset="65%" stop-color="#f59e0b" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#b45309" stop-opacity="0.1" />
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
    <button id="btn-toggle-switch" style="margin-bottom:12px;padding:10px 20px;background:#f59e0b;color:#090e17;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:13px;box-shadow:0 2px 8px rgba(245,158,11,0.3);">
      🔘 ACCIONAR LLAVE DE LUZ
    </button>
    <svg id="svg-punto-simple" viewBox="0 0 920 450" width="100%" style="display:block;max-width:880px;" role="img">
      ${SVG_DEFS}
      <g transform="translate(60, 65)" filter="url(#din-shadow)">
        <polygon points="50,0 150,0 200,50 200,150 150,200 50,200 0,150 0,50" fill="#1e293b" stroke="#475569" stroke-width="2.5" />
        <text x="100" y="32" text-anchor="middle" fill="#94a3b8" font-size="10" font-weight="bold">CAJA OCTOGONAL</text>
        <circle cx="50" cy="80" r="7" fill="#8b4513" stroke="#fff" stroke-width="1.5" />
        <text x="50" y="70" text-anchor="middle" fill="#f59e0b" font-size="9" font-weight="bold">FASE (L)</text>
        <circle cx="100" cy="80" r="7" fill="#0284c7" stroke="#fff" stroke-width="1.5" />
        <text x="100" y="70" text-anchor="middle" fill="#38bdf8" font-size="9" font-weight="bold">NEUTRO (N)</text>
        <circle cx="150" cy="80" r="7" fill="url(#cable-pe-stripes)" stroke="#fff" stroke-width="1.5" />
        <text x="150" y="70" text-anchor="middle" fill="#4ade80" font-size="9" font-weight="bold">TIERRA (PE)</text>
      </g>
      <g transform="translate(180, 235)" filter="url(#din-shadow)" style="cursor:pointer;" id="click-llave-unipolar">
        <rect x="0" y="0" width="160" height="150" rx="10" fill="#1e293b" stroke="#475569" stroke-width="2" />
        <rect x="15" y="15" width="130" height="120" rx="6" fill="#0f172a" />
        <text x="80" y="36" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">LLAVE UNIPOLAR</text>
        <circle cx="45" cy="85" r="6" fill="#8b4513" stroke="#fff" stroke-width="1.5" />
        <text x="45" y="105" text-anchor="middle" fill="#f59e0b" font-size="9">Borne L</text>
        <circle cx="115" cy="85" r="6" fill="#64748b" stroke="#fff" stroke-width="1.5" />
        <text x="115" y="105" text-anchor="middle" fill="#cbd5e1" font-size="9">Borne 1</text>
        <line id="switch-blade" x1="45" y1="85" x2="105" y2="65" stroke="#f59e0b" stroke-width="4.5" stroke-linecap="round" />
        <text id="switch-state-text" x="80" y="125" text-anchor="middle" fill="#ef4444" font-size="10" font-weight="bold">ABIERTO (OFF)</text>
      </g>
      <g transform="translate(570, 65)" filter="url(#din-shadow)">
        <rect x="75" y="30" width="70" height="30" rx="4" fill="#334155" stroke="#64748b" stroke-width="2" />
        <text x="110" y="22" text-anchor="middle" fill="#94a3b8" font-size="11" font-weight="bold">PORTALÁMPARAS E27</text>
        <rect x="85" y="60" width="50" height="28" rx="2" fill="#94a3b8" stroke="#cbd5e1" stroke-width="1.5" />
        <circle id="lamp-halo" cx="110" cy="150" r="90" fill="url(#lamp-glow-on)" opacity="0" filter="url(#bulb-glow-filter)" />
        <path id="lamp-bulb-glass" d="M 90 88 C 80 105 70 125 70 145 C 70 172 88 195 110 195 C 132 195 150 172 150 145 C 150 125 140 105 130 88 Z" fill="#1e293b" stroke="#cbd5e1" stroke-width="2.5" />
        <path id="lamp-filament" d="M 95 130 L 105 110 L 110 115 L 115 110 L 125 130" fill="none" stroke="#64748b" stroke-width="2.5" stroke-linecap="round" />
        <circle cx="65" cy="50" r="6" fill="#0284c7" stroke="#fff" stroke-width="1.5" />
        <text x="50" y="38" text-anchor="middle" fill="#38bdf8" font-size="9" font-weight="bold">ROSCA (N)</text>
        <circle cx="155" cy="50" r="6" fill="#64748b" stroke="#fff" stroke-width="1.5" />
        <text x="170" y="38" text-anchor="middle" fill="#cbd5e1" font-size="9" font-weight="bold">CENTRO (RET)</text>
        <text id="lamp-text" x="110" y="225" text-anchor="middle" fill="#64748b" font-size="12" font-weight="bold">LÁMPARA APAGADA</text>
      </g>
      <path d="M 110 145 L 110 320 L 225 320" stroke="#8b4513" stroke-width="4.5" fill="none" />
      <path id="cable-retorno" d="M 295 320 L 725 320 L 725 115" stroke="#475569" stroke-width="4.5" fill="none" />
      <path d="M 160 145 L 635 145 L 635 115" stroke="#0284c7" stroke-width="4.5" fill="none" />
      <path d="M 210 145 L 780 145 L 780 170" stroke="url(#cable-pe-stripes)" stroke-width="4" fill="none" />
    </svg>
  </div>`;
}

// -------------------------------------------------------------
// 2. CONMUTADA (2 PUNTOS / ESCALERA)
// -------------------------------------------------------------
function svgConmutada() {
  return `
  <div style="background:#090e17;border-radius:10px;padding:12px;display:flex;flex-direction:column;align-items:center;">
    <div style="display:flex;gap:12px;margin-bottom:12px;">
      <button id="btn-conm-1" style="padding:9px 16px;background:#3b82f6;color:#fff;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:12px;">
        🔘 Conmutar Llave 1
      </button>
      <button id="btn-conm-2" style="padding:9px 16px;background:#3b82f6;color:#fff;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:12px;">
        🔘 Conmutar Llave 2
      </button>
    </div>
    <svg viewBox="0 0 940 450" width="100%" style="display:block;max-width:880px;" role="img">
      ${SVG_DEFS}
      <g transform="translate(50, 95)" filter="url(#din-shadow)">
        <rect width="170" height="230" rx="10" fill="#1e293b" stroke="#475569" stroke-width="2" />
        <text x="85" y="32" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="bold">CONMUTADA 1</text>
        <circle cx="85" cy="65" r="7" fill="#8b4513" stroke="#fff" stroke-width="1.5" />
        <circle cx="45" cy="165" r="7" fill="#8b5cf6" stroke="#fff" stroke-width="1.5" />
        <circle cx="125" cy="165" r="7" fill="#f97316" stroke="#fff" stroke-width="1.5" />
        <line id="blade-conm-1" x1="85" y1="65" x2="45" y2="165" stroke="#f59e0b" stroke-width="4.5" stroke-linecap="round" />
      </g>
      <g transform="translate(380, 95)" filter="url(#din-shadow)">
        <rect width="170" height="230" rx="10" fill="#1e293b" stroke="#475569" stroke-width="2" />
        <text x="85" y="32" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="bold">CONMUTADA 2</text>
        <circle cx="45" cy="65" r="7" fill="#8b5cf6" stroke="#fff" stroke-width="1.5" />
        <circle cx="125" cy="65" r="7" fill="#f97316" stroke="#fff" stroke-width="1.5" />
        <circle cx="85" cy="165" r="7" fill="#64748b" stroke="#fff" stroke-width="1.5" />
        <line id="blade-conm-2" x1="85" y1="165" x2="45" y2="65" stroke="#f59e0b" stroke-width="4.5" stroke-linecap="round" />
      </g>
      <g transform="translate(680, 75)" filter="url(#din-shadow)">
        <rect x="75" y="30" width="70" height="28" rx="4" fill="#334155" stroke="#64748b" stroke-width="2" />
        <rect x="85" y="58" width="50" height="26" rx="2" fill="#94a3b8" stroke="#cbd5e1" stroke-width="1.5" />
        <circle id="lamp-halo-conm" cx="110" cy="145" r="90" fill="url(#lamp-glow-on)" opacity="1" filter="url(#bulb-glow-filter)" />
        <path id="lamp-bulb-conm" d="M 90 84 C 80 100 70 120 70 140 C 70 167 88 190 110 190 C 132 190 150 167 150 140 C 150 120 140 100 130 84 Z" fill="#fef08a" stroke="#eab308" stroke-width="2.5" />
        <circle cx="65" cy="45" r="6" fill="#0284c7" stroke="#fff" stroke-width="1.5" />
        <circle cx="155" cy="45" r="6" fill="#64748b" stroke="#fff" stroke-width="1.5" />
        <text id="lamp-text-conm" x="110" y="220" text-anchor="middle" fill="#facc15" font-size="12" font-weight="bold">LÁMPARA ENCENDIDA</text>
      </g>
      <path d="M 20 160 L 135 160" stroke="#8b4513" stroke-width="4.5" fill="none" />
      <path d="M 95 260 L 95 360 L 425 360 L 425 160" stroke="#8b5cf6" stroke-width="4" fill="none" />
      <path d="M 175 260 L 175 390 L 505 390 L 505 160" stroke="#f97316" stroke-width="4" fill="none" />
      <path id="cable-ret-conm" d="M 465 260 L 835 260 L 835 120" stroke="#f59e0b" stroke-width="4.5" fill="none" />
      <path d="M 20 65 L 745 65 L 745 120" stroke="#0284c7" stroke-width="4.5" fill="none" />
    </svg>
  </div>`;
}

// -------------------------------------------------------------
// 3. CRUZAMIENTO (3+ PUNTOS)
// -------------------------------------------------------------
function svgCruzamiento() {
  return `
  <div style="background:#090e17;border-radius:10px;padding:12px;display:flex;flex-direction:column;align-items:center;">
    <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;justify-content:center;">
      <button id="btn-cruz-1" style="padding:8px 14px;background:#3b82f6;color:#fff;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:11px;">Llave Conmutada A</button>
      <button id="btn-cruz-inv" style="padding:8px 14px;background:#8b5cf6;color:#fff;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:11px;">🔄 Llave Cruzamiento</button>
      <button id="btn-cruz-2" style="padding:8px 14px;background:#3b82f6;color:#fff;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:11px;">Llave Conmutada B</button>
    </div>
    <svg viewBox="0 0 960 450" width="100%" style="display:block;max-width:920px;" role="img">
      ${SVG_DEFS}
      <g transform="translate(30, 90)" filter="url(#din-shadow)">
        <rect width="150" height="230" rx="8" fill="#1e293b" stroke="#475569" stroke-width="2" />
        <text x="75" y="30" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">CONMUTADA 1</text>
        <circle cx="75" cy="65" r="6" fill="#8b4513" stroke="#fff" stroke-width="1.5" />
        <circle cx="45" cy="165" r="6" fill="#8b5cf6" stroke="#fff" stroke-width="1.5" />
        <circle cx="105" cy="165" r="6" fill="#f97316" stroke="#fff" stroke-width="1.5" />
        <line id="blade-cruz-1" x1="75" y1="65" x2="45" y2="165" stroke="#f59e0b" stroke-width="4.5" stroke-linecap="round" />
      </g>
      <g transform="translate(260, 90)" filter="url(#din-shadow)">
        <rect width="190" height="230" rx="8" fill="#1e293b" stroke="#8b5cf6" stroke-width="2" />
        <text x="95" y="30" text-anchor="middle" fill="#c084fc" font-size="11" font-weight="bold">CRUZAMIENTO (4 VÍAS)</text>
        <circle cx="50" cy="70" r="6" fill="#8b5cf6" stroke="#fff" stroke-width="1.5" />
        <circle cx="140" cy="70" r="6" fill="#f97316" stroke="#fff" stroke-width="1.5" />
        <circle cx="50" cy="165" r="6" fill="#8b5cf6" stroke="#fff" stroke-width="1.5" />
        <circle cx="140" cy="165" r="6" fill="#f97316" stroke="#fff" stroke-width="1.5" />
        <line id="cruz-l1" x1="50" y1="70" x2="50" y2="165" stroke="#f59e0b" stroke-width="4" stroke-linecap="round" />
        <line id="cruz-l2" x1="140" y1="70" x2="140" y2="165" stroke="#f59e0b" stroke-width="4" stroke-linecap="round" />
      </g>
      <g transform="translate(530, 90)" filter="url(#din-shadow)">
        <rect width="150" height="230" rx="8" fill="#1e293b" stroke="#475569" stroke-width="2" />
        <text x="75" y="30" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">CONMUTADA 2</text>
        <circle cx="45" cy="70" r="6" fill="#8b5cf6" stroke="#fff" stroke-width="1.5" />
        <circle cx="105" cy="70" r="6" fill="#f97316" stroke="#fff" stroke-width="1.5" />
        <circle cx="75" cy="165" r="6" fill="#64748b" stroke="#fff" stroke-width="1.5" />
        <line id="blade-cruz-2" x1="75" y1="165" x2="45" y2="70" stroke="#f59e0b" stroke-width="4.5" stroke-linecap="round" />
      </g>
      <g transform="translate(750, 75)" filter="url(#din-shadow)">
        <rect x="50" y="30" width="70" height="26" rx="4" fill="#334155" stroke="#64748b" stroke-width="2" />
        <circle id="lamp-halo-cruz" cx="85" cy="145" r="85" fill="url(#lamp-glow-on)" opacity="1" filter="url(#bulb-glow-filter)" />
        <path id="lamp-bulb-cruz" d="M 65 80 C 55 96 45 116 45 136 C 45 163 63 186 85 186 C 107 186 125 163 125 136 C 125 116 115 96 105 80 Z" fill="#fef08a" stroke="#eab308" stroke-width="2.5" />
        <text id="lamp-text-cruz" x="85" y="215" text-anchor="middle" fill="#facc15" font-size="11" font-weight="bold">ENCENDIDA</text>
      </g>
      <path d="M 10 155 L 105 155" stroke="#8b4513" stroke-width="4" fill="none" />
      <path d="M 75 255 L 310 160" stroke="#8b5cf6" stroke-width="3.5" fill="none" />
      <path d="M 135 255 L 400 160" stroke="#f97316" stroke-width="3.5" fill="none" />
      <path d="M 310 255 L 575 160" stroke="#8b5cf6" stroke-width="3.5" fill="none" />
      <path d="M 400 255 L 635 160" stroke="#f97316" stroke-width="3.5" fill="none" />
      <path id="cable-ret-cruz" d="M 605 255 L 880 255 L 880 117" stroke="#f59e0b" stroke-width="4" fill="none" />
      <path d="M 10 65 L 790 65 L 790 117" stroke="#0284c7" stroke-width="4" fill="none" />
    </svg>
  </div>`;
}

// -------------------------------------------------------------
// 4. ESCALERA AUTOMÁTICA
// -------------------------------------------------------------
function svgEscaleraAutomatica() {
  return `
  <div style="background:#090e17;border-radius:10px;padding:12px;display:flex;flex-direction:column;align-items:center;">
    <button id="btn-pulsador-escalera" style="margin-bottom:12px;padding:10px 22px;background:#ec4899;color:#fff;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:13px;box-shadow:0 2px 8px rgba(236,72,153,0.3);">
      ⏱️ PRESIONAR PULSADOR DE ESCALERA
    </button>
    <svg viewBox="0 0 920 440" width="100%" style="display:block;max-width:880px;" role="img">
      ${SVG_DEFS}
      <g transform="translate(320, 80)" filter="url(#din-shadow)">
        <rect width="240" height="240" rx="8" fill="#1e293b" stroke="#475569" stroke-width="2.5" />
        <rect x="20" y="20" width="200" height="70" rx="6" fill="#0f172a" />
        <text x="120" y="45" text-anchor="middle" fill="#94a3b8" font-size="11" font-weight="bold">TEMPORIZADOR DIN 220V</text>
        <text id="escalera-timer-display" x="120" y="75" text-anchor="middle" fill="#22c55e" font-size="20" font-family="monospace" font-weight="bold">STANDBY (OFF)</text>
        <circle cx="120" cy="150" r="32" fill="#334155" stroke="#94a3b8" stroke-width="2" />
        <line x1="120" y1="150" x2="135" y2="130" stroke="#f59e0b" stroke-width="3" stroke-linecap="round" />
        <text x="120" y="205" text-anchor="middle" fill="#cbd5e1" font-size="10">Tiempo: 15 seg</text>
      </g>
      <g transform="translate(60, 120)" filter="url(#din-shadow)">
        <rect width="160" height="160" rx="10" fill="#1e293b" stroke="#ec4899" stroke-width="2" />
        <text x="80" y="32" text-anchor="middle" fill="#f472b6" font-size="11" font-weight="bold">PULSADOR PISO</text>
        <circle cx="80" cy="90" r="35" fill="#db2777" stroke="#fff" stroke-width="2" />
        <text x="80" y="95" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">PULSAR</text>
      </g>
      <g transform="translate(680, 80)" filter="url(#din-shadow)">
        <rect x="50" y="30" width="70" height="26" rx="4" fill="#334155" stroke="#64748b" stroke-width="2" />
        <circle id="lamp-halo-esc" cx="85" cy="140" r="85" fill="url(#lamp-glow-on)" opacity="0" filter="url(#bulb-glow-filter)" />
        <path id="lamp-bulb-esc" d="M 65 75 C 55 91 45 111 45 131 C 45 158 63 181 85 181 C 107 181 125 158 125 131 C 125 111 115 91 105 75 Z" fill="#1e293b" stroke="#cbd5e1" stroke-width="2.5" />
        <text id="lamp-text-esc" x="85" y="210" text-anchor="middle" fill="#64748b" font-size="11" font-weight="bold">LUCES APAGADAS</text>
      </g>
      <path d="M 20 180 L 60 180" stroke="#8b4513" stroke-width="4" fill="none" />
      <path d="M 220 180 L 320 180" stroke="#ec4899" stroke-width="3.5" fill="none" />
      <path id="cable-ret-esc" d="M 560 180 L 680 180" stroke="#475569" stroke-width="4" fill="none" />
      <path d="M 20 50 L 765 50 L 765 106" stroke="#0284c7" stroke-width="4" fill="none" />
    </svg>
  </div>`;
}

// -------------------------------------------------------------
// 5. FOTOCÉLULA
// -------------------------------------------------------------
function svgFotocelula() {
  return `
  <div style="background:#090e17;border-radius:10px;padding:12px;display:flex;flex-direction:column;align-items:center;">
    <div style="display:flex;gap:10px;margin-bottom:12px;">
      <button id="btn-foto-dia" style="padding:9px 16px;background:#eab308;color:#0f172a;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:12px;">☀️ Día (OFF)</button>
      <button id="btn-foto-noche" style="padding:9px 16px;background:#475569;color:#fff;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:12px;">🌙 Noche (ON)</button>
    </div>
    <svg viewBox="0 0 920 440" width="100%" style="display:block;max-width:880px;" role="img">
      ${SVG_DEFS}
      <g transform="translate(180, 80)" filter="url(#din-shadow)">
        <rect width="220" height="230" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5" />
        <text x="110" y="32" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">FOTOCÉLULA CREPUSCULAR</text>
        <circle id="ojo-fotocelula" cx="110" cy="85" r="28" fill="#fde047" stroke="#ca8a04" stroke-width="3" />
        <text id="foto-estado-sensor" x="110" y="140" text-anchor="middle" fill="#eab308" font-size="11" font-weight="bold">SENSOR: LUZ SOLAR</text>
        <circle cx="50" cy="180" r="6" fill="#8b4513" stroke="#fff" stroke-width="1.5" />
        <circle cx="110" cy="180" r="6" fill="#0284c7" stroke="#fff" stroke-width="1.5" />
        <circle cx="170" cy="180" r="6" fill="#dc2626" stroke="#fff" stroke-width="1.5" />
      </g>
      <g transform="translate(630, 80)" filter="url(#din-shadow)">
        <rect x="50" y="30" width="70" height="26" rx="4" fill="#334155" stroke="#64748b" stroke-width="2" />
        <circle id="lamp-halo-foto" cx="85" cy="140" r="85" fill="url(#lamp-glow-on)" opacity="0" filter="url(#bulb-glow-filter)" />
        <path id="lamp-bulb-foto" d="M 65 75 C 55 91 45 111 45 131 C 45 158 63 181 85 181 C 107 181 125 158 125 131 C 125 111 115 91 105 75 Z" fill="#1e293b" stroke="#cbd5e1" stroke-width="2.5" />
        <text id="lamp-text-foto" x="85" y="210" text-anchor="middle" fill="#64748b" font-size="11" font-weight="bold">LUCES OFF</text>
      </g>
      <path d="M 40 260 L 230 260" stroke="#8b4513" stroke-width="4" fill="none" />
      <path d="M 40 100 L 290 100 L 290 260" stroke="#0284c7" stroke-width="4" fill="none" />
      <path d="M 290 100 L 715 100 L 715 110" stroke="#0284c7" stroke-width="4" fill="none" />
      <path id="cable-ret-foto" d="M 350 260 L 680 260 L 680 110" stroke="#475569" stroke-width="4" fill="none" />
    </svg>
  </div>`;
}

// -------------------------------------------------------------
// 6. DIMMER
// -------------------------------------------------------------
function svgDimmer() {
  return `
  <div style="background:#090e17;border-radius:10px;padding:14px;display:flex;flex-direction:column;align-items:center;">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;background:#1e293b;padding:8px 16px;border-radius:10px;border:1px solid #334155;">
      <span style="font-size:12px;font-weight:bold;color:#f59e0b;">🎛️ Regulador:</span>
      <input type="range" id="dimmer-slider" min="0" max="100" value="70" style="width:180px;accent-color:#f59e0b;cursor:pointer;" />
      <span id="dimmer-val-text" style="font-size:13px;font-weight:bold;color:#f8fafc;font-family:monospace;">70% (154V)</span>
    </div>
    <svg viewBox="0 0 920 440" width="100%" style="display:block;max-width:880px;" role="img">
      ${SVG_DEFS}
      <g transform="translate(140, 90)" filter="url(#din-shadow)">
        <rect width="200" height="220" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2.5" />
        <text x="100" y="32" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">DIMMER ELECTRÓNICO</text>
        <circle cx="100" cy="95" r="42" fill="#0f172a" stroke="#475569" stroke-width="2" />
        <circle cx="100" cy="95" r="28" fill="#334155" stroke="#f59e0b" stroke-width="2" />
        <line id="dimmer-knob-pointer" x1="100" y1="95" x2="115" y2="75" stroke="#fff" stroke-width="3.5" stroke-linecap="round" />
        <circle cx="50" cy="180" r="6" fill="#8b4513" stroke="#fff" stroke-width="1.5" />
        <circle cx="150" cy="180" r="6" fill="#eab308" stroke="#fff" stroke-width="1.5" />
      </g>
      <g transform="translate(600, 80)" filter="url(#din-shadow)">
        <rect x="50" y="30" width="70" height="26" rx="4" fill="#334155" stroke="#64748b" stroke-width="2" />
        <circle id="lamp-halo-dimmer" cx="85" cy="140" r="85" fill="url(#lamp-glow-on)" opacity="0.7" filter="url(#bulb-glow-filter)" />
        <path id="lamp-bulb-dimmer" d="M 65 75 C 55 91 45 111 45 131 C 45 158 63 181 85 181 C 107 181 125 158 125 131 C 125 111 115 91 105 75 Z" fill="#fef08a" stroke="#eab308" stroke-width="2.5" />
        <text id="lamp-text-dimmer" x="85" y="210" text-anchor="middle" fill="#facc15" font-size="11" font-weight="bold">BRILLO: 70%</text>
      </g>
      <path d="M 30 270 L 190 270" stroke="#8b4513" stroke-width="4" fill="none" />
      <path id="cable-ret-dimmer" d="M 290 270 L 685 270 L 685 106" stroke="#f59e0b" stroke-width="4" fill="none" />
      <path d="M 30 80 L 650 80 L 650 106" stroke="#0284c7" stroke-width="4" fill="none" />
    </svg>
  </div>`;
}

// -------------------------------------------------------------
// 7. TABLERO UNIFILAR
// -------------------------------------------------------------
function svgTableroUnifilar() {
  return `
  <div style="background:#090e17;border-radius:10px;padding:12px;display:flex;flex-direction:column;align-items:center;">
    <div style="display:flex;gap:10px;margin-bottom:12px;flex-wrap:wrap;justify-content:center;">
      <button id="btn-toggle-iga" style="padding:8px 14px;background:#3b82f6;color:#fff;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:12px;">⚡ IGA Bipolar</button>
      <button id="btn-toggle-id" style="padding:8px 14px;background:#10b981;color:#fff;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:12px;">🛡️ Disyuntor Diferencial</button>
      <button id="btn-test-diferencial" style="padding:8px 14px;background:#ef4444;color:#fff;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:12px;">🧪 Botón TEST</button>
    </div>
    <svg viewBox="0 0 920 460" width="100%" style="display:block;max-width:880px;" role="img">
      ${SVG_DEFS}
      <g transform="translate(160, 100)" filter="url(#din-shadow)">
        <rect width="180" height="240" rx="8" fill="#1e293b" stroke="#475569" stroke-width="2" />
        <text x="90" y="38" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">IGA C25</text>
        <rect id="lever-iga" x="65" y="85" width="50" height="30" rx="4" fill="#22c55e" />
        <text id="status-iga-text" x="90" y="175" text-anchor="middle" fill="#22c55e" font-size="10" font-weight="bold">ACTIVA (ON)</text>
      </g>
      <g transform="translate(420, 100)" filter="url(#din-shadow)">
        <rect width="200" height="240" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2.5" />
        <text x="100" y="38" text-anchor="middle" fill="#10b981" font-size="11" font-weight="bold">DIFERENCIAL 30mA</text>
        <rect id="lever-id" x="50" y="85" width="45" height="30" rx="4" fill="#22c55e" />
        <circle id="btn-test-circle" cx="140" cy="100" r="16" fill="#ef4444" stroke="#fff" stroke-width="1.5" />
        <text x="140" y="104" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">T</text>
        <text id="status-id-text" x="100" y="175" text-anchor="middle" fill="#22c55e" font-size="10" font-weight="bold">CONECTADO (ON)</text>
      </g>
      <g transform="translate(690, 150)" filter="url(#din-shadow)">
        <circle id="led-tablero" cx="50" cy="50" r="30" fill="#22c55e" stroke="#fff" stroke-width="2" />
        <text id="text-tablero-output" x="50" y="115" text-anchor="middle" fill="#22c55e" font-size="11" font-weight="bold">CIRCUITOS CON 220V</text>
      </g>
      <path d="M 40 140 L 160 140" stroke="#8b4513" stroke-width="4.5" fill="none" />
      <path d="M 40 180 L 160 180" stroke="#0284c7" stroke-width="4.5" fill="none" />
      <path id="unifilar-bridge-fase" d="M 340 140 L 420 140" stroke="#8b4513" stroke-width="4.5" fill="none" />
      <path id="unifilar-bridge-neutro" d="M 340 180 L 420 180" stroke="#0284c7" stroke-width="4.5" fill="none" />
      <path id="unifilar-out-fase" d="M 620 160 L 690 160" stroke="#f59e0b" stroke-width="4.5" fill="none" />
    </svg>
  </div>`;
}

// -------------------------------------------------------------
// 8. PUESTA A TIERRA
// -------------------------------------------------------------
function svgJabalinaTablero() {
  return `
  <div style="background:#090e17;border-radius:10px;padding:12px;display:flex;flex-direction:column;align-items:center;">
    <button id="btn-medir-pat" style="margin-bottom:12px;padding:10px 20px;background:#22c55e;color:#0f172a;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:13px;">
      🟢 MEDIR CON TELURÍMETRO
    </button>
    <svg viewBox="0 0 920 460" width="100%" style="display:block;max-width:880px;" role="img">
      ${SVG_DEFS}
      <g transform="translate(50, 70)" filter="url(#din-shadow)">
        <rect width="240" height="190" rx="10" fill="#1e293b" stroke="#4ade80" stroke-width="2.5" />
        <text x="120" y="32" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="bold">BARRA COLECTORA PE</text>
        <rect x="25" y="80" width="190" height="22" rx="3" fill="#ca8a04" stroke="#eab308" stroke-width="1.5" />
        <text x="120" y="135" text-anchor="middle" fill="#cbd5e1" font-size="10">Cable PE 4 mm² IRAM 2183</text>
      </g>
      <g transform="translate(500, 140)" filter="url(#din-shadow)">
        <rect x="-80" y="70" width="450" height="220" fill="#2d1f14" />
        <line x1="-80" y1="70" x2="370" y2="70" stroke="#78350f" stroke-width="4" />
        <text x="180" y="270" text-anchor="middle" fill="#a16207" font-size="12" font-weight="bold">SUELO NATURAL</text>
        <rect x="40" y="30" width="140" height="90" fill="#475569" stroke="#94a3b8" stroke-width="2" />
        <text x="110" y="22" text-anchor="middle" fill="#94a3b8" font-size="10" font-weight="bold">CÁMARA INSPECCIÓN</text>
        <rect x="104" y="60" width="12" height="200" fill="#b45309" stroke="#f59e0b" stroke-width="1.5" />
        <rect x="98" y="75" width="24" height="20" rx="3" fill="#eab308" stroke="#78350f" stroke-width="2" />
      </g>
      <path d="M 190 180 L 190 225 L 604 225" stroke="url(#cable-pe-stripes)" stroke-width="6" fill="none" />
      <g transform="translate(300, 50)">
        <rect width="180" height="60" rx="8" fill="#0f172a" stroke="#22c55e" stroke-width="2" />
        <text x="90" y="25" text-anchor="middle" fill="#94a3b8" font-size="10">RESISTENCIA (AEA &lt; 10 Ω)</text>
        <text id="pat-ohms-val" x="90" y="48" text-anchor="middle" fill="#22c55e" font-size="18" font-family="monospace" font-weight="bold">3.8 Ω (CONFORME)</text>
      </g>
    </svg>
  </div>`;
}

// -------------------------------------------------------------
// 9. TRANSFERENCIA MANUAL
// -------------------------------------------------------------
function svgTransferenciaManual() {
  return `
  <div style="background:#090e17;border-radius:10px;padding:12px;display:flex;flex-direction:column;align-items:center;">
    <div style="display:flex;gap:10px;margin-bottom:12px;">
      <button id="btn-transf-red" style="padding:9px 15px;background:#3b82f6;color:#fff;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:12px;">🏢 1: RED</button>
      <button id="btn-transf-cero" style="padding:9px 15px;background:#64748b;color:#fff;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:12px;">⛔ 0: APAGADO</button>
      <button id="btn-transf-gen" style="padding:9px 15px;background:#f59e0b;color:#0f172a;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:12px;">⚡ 2: GENERADOR</button>
    </div>
    <svg viewBox="0 0 920 460" width="100%" style="display:block;max-width:880px;" role="img">
      ${SVG_DEFS}
      <g transform="translate(320, 100)" filter="url(#din-shadow)">
        <rect width="260" height="240" rx="12" fill="#1e293b" stroke="#475569" stroke-width="2.5" />
        <text x="130" y="32" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">SELECTORA 1-0-2</text>
        <circle cx="130" cy="120" r="55" fill="#0f172a" stroke="#64748b" stroke-width="2" />
        <line id="lever-transf" x1="130" y1="120" x2="100" y2="80" stroke="#3b82f6" stroke-width="6" stroke-linecap="round" />
        <text id="status-transf-text" x="130" y="210" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">RED COMERCIAL 220V</text>
      </g>
      <g transform="translate(40, 120)" filter="url(#din-shadow)">
        <rect width="180" height="80" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="2" />
        <text x="90" y="35" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">RED ELÉCTRICA</text>
      </g>
      <g transform="translate(40, 240)" filter="url(#din-shadow)">
        <rect width="180" height="80" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
        <text x="90" y="35" text-anchor="middle" fill="#f59e0b" font-size="11" font-weight="bold">GRUPO ELECTRÓGENO</text>
      </g>
      <g transform="translate(680, 160)" filter="url(#din-shadow)">
        <circle id="led-casa" cx="50" cy="50" r="32" fill="#22c55e" stroke="#fff" stroke-width="2" />
        <text id="status-casa-text" x="50" y="115" text-anchor="middle" fill="#22c55e" font-size="11" font-weight="bold">CASA ENERGIZADA</text>
      </g>
      <path d="M 220 160 L 320 160" stroke="#3b82f6" stroke-width="4.5" fill="none" />
      <path d="M 220 280 L 320 280" stroke="#f59e0b" stroke-width="4.5" fill="none" />
      <path id="cable-out-transf" d="M 580 210 L 680 210" stroke="#22c55e" stroke-width="4.5" fill="none" />
    </svg>
  </div>`;
}

// -------------------------------------------------------------
// 10. BOMBA CON FLOTANTE Y SELECTOR MANUAL / AUTO
// -------------------------------------------------------------
function svgBombaFlotante() {
  return `
  <div style="background:#090e17;border-radius:10px;padding:12px;display:flex;flex-direction:column;align-items:center;">
    <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;justify-content:center;">
      <button id="btn-bomba-man" style="padding:8px 14px;background:#f59e0b;color:#090e17;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:12px;">✋ Modo Manual</button>
      <button id="btn-bomba-off" style="padding:8px 14px;background:#64748b;color:#fff;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:12px;">⛔ Posición 0 (Corte)</button>
      <button id="btn-bomba-auto" style="padding:8px 14px;background:#3b82f6;color:#fff;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:12px;">⚙️ Modo Automático</button>
      <button id="btn-toggle-nivel" style="padding:8px 14px;background:#0284c7;color:#fff;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:12px;">💧 Simular Nivel Tanque</button>
    </div>
    <svg viewBox="0 0 940 460" width="100%" style="display:block;max-width:900px;" role="img">
      ${SVG_DEFS}
      <!-- Selector Man / 0 / Auto -->
      <g transform="translate(40, 90)" filter="url(#din-shadow)">
        <rect width="190" height="230" rx="10" fill="#1e293b" stroke="#475569" stroke-width="2" />
        <text x="95" y="32" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">SELECTOR M - 0 - A</text>
        <circle cx="95" cy="95" r="38" fill="#0f172a" stroke="#64748b" stroke-width="2" />
        <line id="lever-bomba" x1="95" y1="95" x2="65" y2="75" stroke="#f59e0b" stroke-width="5" stroke-linecap="round" />
        <text x="60" y="65" fill="#f59e0b" font-size="10" font-weight="bold">MAN</text>
        <text x="95" y="50" text-anchor="middle" fill="#94a3b8" font-size="10" font-weight="bold">0</text>
        <text x="130" y="65" fill="#38bdf8" font-size="10" font-weight="bold">AUTO</text>
        <text id="txt-modo-bomba" x="95" y="175" text-anchor="middle" fill="#f59e0b" font-size="11" font-weight="bold">MANUAL ACTIVO</text>
      </g>
      <!-- Tanque y Flotante Eléctrico 24V -->
      <g transform="translate(290, 80)" filter="url(#din-shadow)">
        <rect width="240" height="250" rx="8" fill="#0f172a" stroke="#0284c7" stroke-width="2" />
        <text x="120" y="28" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">TANQUE DE AGUA (ELEVADO)</text>
        <!-- Nivel de Agua -->
        <rect id="rect-agua-tanque" x="10" y="110" width="220" height="130" rx="4" fill="#0284c7" opacity="0.6" />
        <!-- Pera de nivel flotante hermético -->
        <circle id="flotante-pera" cx="120" cy="125" r="16" fill="#f59e0b" stroke="#fff" stroke-width="1.5" />
        <text id="txt-tanque-status" x="120" y="225" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">AGUA: LLENO (BOBINA REPOSO)</text>
      </g>
      <!-- Electrobomba Monofásica -->
      <g transform="translate(620, 100)" filter="url(#din-shadow)">
        <rect width="260" height="220" rx="12" fill="#1e293b" stroke="#475569" stroke-width="2" />
        <text x="130" y="32" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="bold">ELECTROBOMBA 3/4 HP</text>
        <!-- Cuerpo de Motor y Aletas -->
        <rect x="40" y="65" width="100" height="90" rx="6" fill="#334155" stroke="#64748b" stroke-width="1.5" />
        <line x1="55" y1="65" x2="55" y2="155" stroke="#1e293b" stroke-width="2" />
        <line x1="75" y1="65" x2="75" y2="155" stroke="#1e293b" stroke-width="2" />
        <line x1="95" y1="65" x2="95" y2="155" stroke="#1e293b" stroke-width="2" />
        <!-- Caracol / Turbina de Bombeo -->
        <circle cx="185" cy="110" r="42" fill="#0f172a" stroke="#0284c7" stroke-width="2.5" />
        <circle id="motor-spinner" cx="185" cy="110" r="28" fill="#1e293b" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 4" />
        <text id="txt-motor-status" x="130" y="195" text-anchor="middle" fill="#ef4444" font-size="12" font-weight="bold">MOTOR APAGADO</text>
      </g>
      <!-- Cables IRAM -->
      <path d="M 10 160 L 40 160" stroke="#8b4513" stroke-width="4" fill="none" />
      <path id="cable-bomba-fase" d="M 230 160 L 620 160" stroke="#475569" stroke-width="4.5" fill="none" />
      <path d="M 10 50 L 750 50 L 750 100" stroke="#0284c7" stroke-width="4.5" fill="none" />
      <path d="M 10 390 L 750 390 L 750 320" stroke="url(#cable-pe-stripes)" stroke-width="4" fill="none" />
    </svg>
  </div>`;
}

// -------------------------------------------------------------
// 11. BOMBA CON PRESOSTATO (PRESURIZADORA)
// -------------------------------------------------------------
function svgBombaPresostato() {
  return `
  <div style="background:#090e17;border-radius:10px;padding:12px;display:flex;flex-direction:column;align-items:center;">
    <button id="btn-toggle-canilla" style="margin-bottom:12px;padding:10px 22px;background:#0284c7;color:#fff;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:13px;box-shadow:0 2px 8px rgba(2,132,199,0.3);">
      🚰 ABRIR CANILLA / DUCHA (CAÍDA DE PRESIÓN)
    </button>
    <svg viewBox="0 0 940 450" width="100%" style="display:block;max-width:900px;" role="img">
      ${SVG_DEFS}
      <!-- Módulo Presostato electromecánico -->
      <g transform="translate(180, 80)" filter="url(#din-shadow)">
        <rect width="240" height="250" rx="10" fill="#1e293b" stroke="#0284c7" stroke-width="2.5" />
        <text x="120" y="32" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">PRESOSTATO DE LÍNEA</text>
        <!-- Manómetro analógico -->
        <circle cx="120" cy="100" r="45" fill="#0f172a" stroke="#fff" stroke-width="2" />
        <line id="needle-presostato" x1="120" y1="100" x2="145" y2="75" stroke="#ef4444" stroke-width="3" stroke-linecap="round" />
        <text x="120" y="125" text-anchor="middle" fill="#94a3b8" font-size="9">BAR</text>
        <text id="txt-bar-val" x="120" y="175" text-anchor="middle" fill="#22c55e" font-size="15" font-family="monospace" font-weight="bold">2.8 BAR (ALTA)</text>
        <!-- Contacto interno -->
        <circle cx="60" cy="210" r="6" fill="#8b4513" stroke="#fff" stroke-width="1.5" />
        <circle cx="180" cy="210" r="6" fill="#f59e0b" stroke="#fff" stroke-width="1.5" />
        <line id="blade-presostato" x1="60" y1="210" x2="165" y2="195" stroke="#94a3b8" stroke-width="4" stroke-linecap="round" />
      </g>
      <!-- Electrobomba Presurizadora -->
      <g transform="translate(560, 90)" filter="url(#din-shadow)">
        <rect width="260" height="230" rx="12" fill="#1e293b" stroke="#475569" stroke-width="2" />
        <text x="130" y="32" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="bold">BOMBA PRESURIZADORA</text>
        <!-- Tanque de expansión hidroneumático -->
        <circle cx="70" cy="115" r="45" fill="#3b82f6" stroke="#fff" stroke-width="2" />
        <text x="70" y="120" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">VASO 24L</text>
        <!-- Motor -->
        <rect x="135" y="70" width="105" height="90" rx="6" fill="#334155" stroke="#64748b" stroke-width="1.5" />
        <circle id="spinner-presurizadora" cx="190" cy="115" r="26" fill="#1e293b" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 4" />
        <text id="txt-presurizadora-status" x="130" y="200" text-anchor="middle" fill="#64748b" font-size="12" font-weight="bold">STANDBY (PRESURIZADA)</text>
      </g>
      <!-- Conductores y Cañería -->
      <path d="M 40 290 L 240 290" stroke="#8b4513" stroke-width="4.5" fill="none" />
      <path id="cable-pres-out" d="M 360 290 L 560 290" stroke="#475569" stroke-width="4.5" fill="none" />
      <path d="M 40 60 L 690 60 L 690 90" stroke="#0284c7" stroke-width="4.5" fill="none" />
    </svg>
  </div>`;
}

// -------------------------------------------------------------
// 12. ARRANQUE DIRECTO MOTOR MONOFÁSICO
// -------------------------------------------------------------
function svgMotorDirectoMono() {
  return `
  <div style="background:#090e17;border-radius:10px;padding:12px;display:flex;flex-direction:column;align-items:center;">
    <div style="display:flex;gap:12px;margin-bottom:12px;">
      <button id="btn-motor-marcha" style="padding:9px 18px;background:#22c55e;color:#090e17;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:12px;">▶️ Marcha (I)</button>
      <button id="btn-motor-parada" style="padding:9px 18px;background:#ef4444;color:#fff;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:12px;">⏹️ Parada (0)</button>
    </div>
    <svg viewBox="0 0 940 450" width="100%" style="display:block;max-width:900px;" role="img">
      ${SVG_DEFS}
      <!-- Contactor Bipolar y Rele Térmico -->
      <g transform="translate(180, 80)" filter="url(#din-shadow)">
        <rect width="240" height="260" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="2.5" />
        <text x="120" y="32" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">CONTACTOR BIPOLAR 220V</text>
        <rect id="contactor-nucleo" x="40" y="60" width="160" height="40" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="1.5" />
        <text id="txt-contactor-state" x="120" y="85" text-anchor="middle" fill="#94a3b8" font-size="11" font-weight="bold">BOBINA A1-A2: OFF</text>
        <!-- Contactos principales L1-T1 / L2-T2 -->
        <circle cx="65" cy="150" r="6" fill="#8b4513" stroke="#fff" stroke-width="1.5" />
        <circle cx="175" cy="150" r="6" fill="#0284c7" stroke="#fff" stroke-width="1.5" />
        <circle cx="65" cy="220" r="6" fill="#f59e0b" stroke="#fff" stroke-width="1.5" />
        <circle cx="175" cy="220" r="6" fill="#38bdf8" stroke="#fff" stroke-width="1.5" />
        <line id="contactor-cuchilla-1" x1="65" y1="150" x2="65" y2="200" stroke="#94a3b8" stroke-width="4.5" stroke-linecap="round" />
        <line id="contactor-cuchilla-2" x1="175" y1="150" x2="175" y2="200" stroke="#94a3b8" stroke-width="4.5" stroke-linecap="round" />
      </g>
      <!-- Motor Monofásico con Capacitor -->
      <g transform="translate(560, 80)" filter="url(#din-shadow)">
        <rect width="280" height="260" rx="12" fill="#1e293b" stroke="#475569" stroke-width="2" />
        <text x="140" y="32" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="bold">MOTOR MONOFÁSICO 1.5 HP</text>
        <!-- Capacitor permanente de arranque -->
        <rect x="40" y="60" width="45" height="75" rx="5" fill="#64748b" stroke="#cbd5e1" stroke-width="1.5" />
        <text x="62" y="105" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">35 µF</text>
        <!-- Carcasa y Eje rotor -->
        <circle cx="175" cy="120" r="55" fill="#334155" stroke="#64748b" stroke-width="2" />
        <circle id="rotor-spinner" cx="175" cy="120" r="35" fill="#1e293b" stroke="#f59e0b" stroke-width="3" stroke-dasharray="6 6" />
        <circle cx="175" cy="120" r="12" fill="#94a3b8" />
        <text id="txt-motor-rpm" x="140" y="215" text-anchor="middle" fill="#64748b" font-size="12" font-weight="bold">DETENIDO (0 RPM)</text>
      </g>
      <!-- Cables -->
      <path d="M 40 230 L 245 230" stroke="#8b4513" stroke-width="4.5" fill="none" />
      <path d="M 40 130 L 355 130" stroke="#0284c7" stroke-width="4.5" fill="none" />
      <path id="cable-motor-fase" d="M 245 300 L 560 300" stroke="#475569" stroke-width="4.5" fill="none" />
      <path id="cable-motor-neutro" d="M 355 300 L 560 300" stroke="#475569" stroke-width="4.5" fill="none" />
      <path d="M 40 400 L 700 400 L 700 340" stroke="url(#cable-pe-stripes)" stroke-width="4" fill="none" />
    </svg>
  </div>`;
}

// -------------------------------------------------------------
// 13. CIRCUITO AIRE ACONDICIONADO
// -------------------------------------------------------------
function svgCircuitoAC() {
  return `
  <div style="background:#090e17;border-radius:10px;padding:12px;display:flex;flex-direction:column;align-items:center;">
    <button id="btn-toggle-remoto-ac" style="margin-bottom:12px;padding:10px 20px;background:#38bdf8;color:#090e17;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:13px;box-shadow:0 2px 8px rgba(56,189,248,0.3);">
      ❄️ ENCENDER SPLIT CON CONTROL REMOTO
    </button>
    <svg viewBox="0 0 940 450" width="100%" style="display:block;max-width:900px;" role="img">
      ${SVG_DEFS}
      <!-- Térmica C16 / C20 en Tablero -->
      <g transform="translate(60, 90)" filter="url(#din-shadow)">
        <rect width="160" height="230" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
        <text x="80" y="32" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">CIRCUITO TUE / AC</text>
        <text x="80" y="55" text-anchor="middle" fill="#94a3b8" font-size="10">Térmica C20 Bipolar</text>
        <rect x="55" y="85" width="50" height="55" rx="4" fill="#334155" />
        <rect x="65" y="90" width="30" height="25" rx="3" fill="#22c55e" />
        <text x="80" y="175" text-anchor="middle" fill="#cbd5e1" font-size="10">Cable 2,5 mm² mínimo</text>
      </g>
      <!-- Tomacorriente Dedicado 20A con Tierra -->
      <g transform="translate(280, 110)" filter="url(#din-shadow)">
        <rect width="140" height="180" rx="10" fill="#1e293b" stroke="#cbd5e1" stroke-width="2" />
        <text x="70" y="28" text-anchor="middle" fill="#f8fafc" font-size="10" font-weight="bold">TOMACORRIENTE 20A</text>
        <!-- Espigas especiales chatas gruesas 20A IRAM 2071 -->
        <rect x="40" y="70" width="8" height="26" rx="2" fill="#0f172a" />
        <rect x="92" y="70" width="8" height="26" rx="2" fill="#0f172a" />
        <rect x="66" y="115" width="8" height="26" rx="2" fill="#0f172a" />
        <text x="70" y="165" text-anchor="middle" fill="#94a3b8" font-size="8">Perno tierra obligatorio</text>
      </g>
      <!-- Unidad Interior Split -->
      <g transform="translate(500, 80)" filter="url(#din-shadow)">
        <rect width="380" height="150" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2" />
        <rect x="280" y="30" width="70" height="35" rx="4" fill="#0f172a" />
        <text id="txt-display-ac" x="315" y="54" text-anchor="middle" fill="#64748b" font-size="16" font-family="monospace" font-weight="bold">OFF</text>
        <!-- Flap deflector -->
        <rect id="flap-ac" x="40" y="125" width="300" height="10" rx="2" fill="#cbd5e1" />
        <!-- Brisa de aire frío animada -->
        <g id="brisa-aire" opacity="0">
          <line x1="60" y1="145" x2="60" y2="185" stroke="#38bdf8" stroke-width="3" stroke-dasharray="5 5" />
          <line x1="120" y1="145" x2="120" y2="195" stroke="#38bdf8" stroke-width="3" stroke-dasharray="5 5" />
          <line x1="180" y1="145" x2="180" y2="185" stroke="#38bdf8" stroke-width="3" stroke-dasharray="5 5" />
          <line x1="240" y1="145" x2="240" y2="195" stroke="#38bdf8" stroke-width="3" stroke-dasharray="5 5" />
        </g>
        <text id="txt-status-ac" x="190" y="80" text-anchor="middle" fill="#64748b" font-size="12" font-weight="bold">AIRE EN ESPERA (STANDBY)</text>
      </g>
      <!-- Cables -->
      <path d="M 220 160 L 280 160" stroke="#8b4513" stroke-width="4.5" fill="none" />
      <path d="M 220 200 L 280 200" stroke="#0284c7" stroke-width="4.5" fill="none" />
      <path d="M 220 240 L 280 240" stroke="url(#cable-pe-stripes)" stroke-width="4.5" fill="none" />
      <path id="cable-plug-ac" d="M 420 180 L 500 180" stroke="#334155" stroke-width="6" fill="none" />
    </svg>
  </div>`;
}

// -------------------------------------------------------------
// 14. CIRCUITO TERMOTANQUE ELÉCTRICO
// -------------------------------------------------------------
function svgCircuitoTermotanque() {
  return `
  <div style="background:#090e17;border-radius:10px;padding:12px;display:flex;flex-direction:column;align-items:center;">
    <button id="btn-toggle-termostato" style="margin-bottom:12px;padding:10px 22px;background:#ef4444;color:#fff;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:13px;box-shadow:0 2px 8px rgba(239,68,68,0.3);">
      🔥 SIMULAR CONSUMO / ENFRIAMIENTO DE AGUA
    </button>
    <svg viewBox="0 0 940 450" width="100%" style="display:block;max-width:900px;" role="img">
      ${SVG_DEFS}
      <!-- Térmica y Termostato de Seguridad -->
      <g transform="translate(80, 80)" filter="url(#din-shadow)">
        <rect width="200" height="250" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
        <text x="100" y="32" text-anchor="middle" fill="#f59e0b" font-size="11" font-weight="bold">TERMOSTATO BIMETÁLICO</text>
        <circle cx="100" cy="95" r="40" fill="#0f172a" stroke="#475569" stroke-width="2" />
        <line id="needle-termostato" x1="100" y1="95" x2="100" y2="65" stroke="#ef4444" stroke-width="3.5" stroke-linecap="round" />
        <text id="txt-termo-temp" x="100" y="165" text-anchor="middle" fill="#22c55e" font-size="13" font-weight="bold">TEMP: 65°C (CORTE)</text>
        <!-- Luz Testigo Neón -->
        <circle id="neon-resistencia" cx="100" cy="205" r="14" fill="#334155" stroke="#64748b" stroke-width="1.5" />
        <text x="100" y="232" text-anchor="middle" fill="#94a3b8" font-size="9">Testigo Calentamiento</text>
      </g>
      <!-- Tanque con Resistencia Blindada -->
      <g transform="translate(380, 60)" filter="url(#din-shadow)">
        <rect width="480" height="300" rx="20" fill="#1e293b" stroke="#64748b" stroke-width="2" />
        <text x="240" y="35" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="bold">TERMOTANQUE ELÉCTRICO 80 LITROS</text>
        <!-- Agua interna -->
        <rect id="rect-agua-termo" x="30" y="55" width="420" height="225" rx="8" fill="#0284c7" opacity="0.4" />
        <!-- Resistencia sumergida 2000W -->
        <path id="resistencia-calefactora" d="M 60 180 L 300 180 C 340 180 340 220 300 220 L 60 220" fill="none" stroke="#64748b" stroke-width="10" stroke-linecap="round" />
        <!-- Burbujas térmicas -->
        <g id="burbujas-calor" opacity="0">
          <circle cx="160" cy="150" r="5" fill="#fef08a" />
          <circle cx="220" cy="140" r="7" fill="#fef08a" />
          <circle cx="280" cy="160" r="4" fill="#fef08a" />
        </g>
        <text id="txt-resistencia-status" x="240" y="265" text-anchor="middle" fill="#94a3b8" font-size="12" font-weight="bold">RESISTENCIA EN REPOSO (0W)</text>
      </g>
      <!-- Cables -->
      <path d="M 20 180 L 80 180" stroke="#8b4513" stroke-width="4.5" fill="none" />
      <path id="cable-fase-termo" d="M 280 180 L 440 180" stroke="#475569" stroke-width="4.5" fill="none" />
      <path d="M 20 50 L 440 50 L 440 220" stroke="#0284c7" stroke-width="4.5" fill="none" />
      <path d="M 20 390 L 440 390 L 440 340" stroke="url(#cable-pe-stripes)" stroke-width="4.5" fill="none" />
    </svg>
  </div>`;
}

// -------------------------------------------------------------
// 15. PORTERO ELÉCTRICO CON APERTURA DE PUERTA
// -------------------------------------------------------------
function svgPorteroElectrico() {
  return `
  <div style="background:#090e17;border-radius:10px;padding:12px;display:flex;flex-direction:column;align-items:center;">
    <div style="display:flex;gap:12px;margin-bottom:12px;">
      <button id="btn-portero-llamar" style="padding:9px 18px;background:#f59e0b;color:#090e17;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:12px;">🔔 Tocar Timbre de Frente</button>
      <button id="btn-portero-abrir" style="padding:9px 18px;background:#22c55e;color:#090e17;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:12px;">🔑 Botón Destraba Puerta (12V)</button>
    </div>
    <svg viewBox="0 0 940 450" width="100%" style="display:block;max-width:900px;" role="img">
      ${SVG_DEFS}
      <!-- Frente de Calle -->
      <g transform="translate(60, 90)" filter="url(#din-shadow)">
        <rect width="170" height="250" rx="10" fill="#334155" stroke="#94a3b8" stroke-width="2.5" />
        <text x="85" y="32" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">FRENTE DE CALLE</text>
        <circle id="pulsador-frente" cx="85" cy="90" r="28" fill="#f59e0b" stroke="#fff" stroke-width="2" />
        <text x="85" y="95" text-anchor="middle" fill="#090e17" font-size="11" font-weight="bold">LLAMAR</text>
        <!-- Micrófono y Altavoz -->
        <rect x="35" y="150" width="100" height="50" rx="4" fill="#0f172a" />
        <line x1="45" y1="165" x2="125" y2="165" stroke="#475569" stroke-width="2" />
        <line x1="45" y1="175" x2="125" y2="175" stroke="#475569" stroke-width="2" />
        <line x1="45" y1="185" x2="125" y2="185" stroke="#475569" stroke-width="2" />
      </g>
      <!-- Fuente 12V y Teléfono Interno -->
      <g transform="translate(360, 80)" filter="url(#din-shadow)">
        <rect width="220" height="270" rx="12" fill="#1e293b" stroke="#475569" stroke-width="2" />
        <text x="110" y="32" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">TELÉFONO INTERIOR</text>
        <!-- Auricular -->
        <rect x="35" y="60" width="40" height="150" rx="10" fill="#f8fafc" />
        <!-- Botón Apertura Puerta -->
        <circle id="btn-tel-abrir" cx="140" cy="110" r="26" fill="#22c55e" stroke="#fff" stroke-width="2" />
        <text x="140" y="115" text-anchor="middle" fill="#090e17" font-size="11" font-weight="bold">ABRIR</text>
        <!-- Estado de Llamada -->
        <text id="txt-portero-status" x="110" y="240" text-anchor="middle" fill="#94a3b8" font-size="11" font-weight="bold">EN ESPERA</text>
      </g>
      <!-- Cerradura Eléctrica / Pestillo -->
      <g transform="translate(680, 110)" filter="url(#din-shadow)">
        <rect width="200" height="210" rx="8" fill="#1e293b" stroke="#cbd5e1" stroke-width="2" />
        <text x="100" y="32" text-anchor="middle" fill="#cbd5e1" font-size="11" font-weight="bold">PESTILLO ELÉCTRICO (12V)</text>
        <rect id="pestillo-traba" x="30" y="70" width="80" height="50" rx="4" fill="#64748b" stroke="#cbd5e1" stroke-width="2" />
        <text id="txt-puerta-status" x="100" y="165" text-anchor="middle" fill="#ef4444" font-size="12" font-weight="bold">PUERTA TRABADA</text>
      </g>
      <!-- Cables señal y 12V -->
      <path id="cable-portero-timbre" d="M 230 180 L 360 180" stroke="#f59e0b" stroke-width="3" fill="none" />
      <path id="cable-portero-traba" d="M 580 190 L 680 190" stroke="#475569" stroke-width="3.5" fill="none" />
    </svg>
  </div>`;
}

// -------------------------------------------------------------
// 16. TIMBRE / CAMPANILLA CLÁSICA CON TRANSFORMADOR
// -------------------------------------------------------------
function svgTimbre() {
  return `
  <div style="background:#090e17;border-radius:10px;padding:12px;display:flex;flex-direction:column;align-items:center;">
    <button id="btn-sonar-timbre" style="margin-bottom:12px;padding:10px 22px;background:#eab308;color:#090e17;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:13px;box-shadow:0 2px 8px rgba(234,179,8,0.3);">
      🔔 TOCAR TIMBRE (PULSADOR DE CALLE)
    </button>
    <svg viewBox="0 0 940 450" width="100%" style="display:block;max-width:900px;" role="img">
      ${SVG_DEFS}
      <!-- Transformador de Seguridad 220V / 12V -->
      <g transform="translate(60, 90)" filter="url(#din-shadow)">
        <rect width="200" height="230" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="2" />
        <text x="100" y="32" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">TRANSFORMADOR DE TIMBRE</text>
        <text x="100" y="55" text-anchor="middle" fill="#94a3b8" font-size="9">Primario 220V ~ Secundario 12V</text>
        <circle cx="50" cy="90" r="24" fill="#0f172a" stroke="#8b4513" stroke-width="3" />
        <circle cx="150" cy="90" r="24" fill="#0f172a" stroke="#eab308" stroke-width="3" />
        <text x="50" y="145" text-anchor="middle" fill="#f59e0b" font-size="9" font-weight="bold">220V</text>
        <text x="150" y="145" text-anchor="middle" fill="#facc15" font-size="9" font-weight="bold">12V (MBTS)</text>
      </g>
      <!-- Pulsador Exterior (Seguridad en 12V) -->
      <g transform="translate(340, 110)" filter="url(#din-shadow)">
        <rect width="160" height="190" rx="10" fill="#1e293b" stroke="#eab308" stroke-width="2" />
        <text x="80" y="32" text-anchor="middle" fill="#facc15" font-size="11" font-weight="bold">PULSADOR DE CALLE</text>
        <circle id="pulsador-timbre-circle" cx="80" cy="95" r="30" fill="#ca8a04" stroke="#fff" stroke-width="2" />
        <text x="80" y="100" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">PULSAR</text>
        <text x="80" y="155" text-anchor="middle" fill="#cbd5e1" font-size="9">Aislado 12V (Anti-Shock)</text>
      </g>
      <!-- Campanilla Electromecánica Ding-Dong -->
      <g transform="translate(600, 80)" filter="url(#din-shadow)">
        <rect width="280" height="250" rx="12" fill="#1e293b" stroke="#cbd5e1" stroke-width="2" />
        <text x="140" y="32" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="bold">CAMPANILLA ELECTROMECÁNICA</text>
        <!-- Barras de gong resonante -->
        <rect x="50" y="60" width="30" height="120" rx="4" fill="#94a3b8" stroke="#fff" stroke-width="1.5" />
        <rect x="200" y="75" width="30" height="105" rx="4" fill="#94a3b8" stroke="#fff" stroke-width="1.5" />
        <!-- Martillo percutor -->
        <circle id="martillo-timbre" cx="140" cy="120" r="14" fill="#f59e0b" stroke="#fff" stroke-width="2" />
        <text id="txt-timbre-sonido" x="140" y="215" text-anchor="middle" fill="#64748b" font-size="14" font-weight="bold">SILENCIO</text>
      </g>
      <!-- Conductores -->
      <path d="M 20 180 L 60 180" stroke="#8b4513" stroke-width="4" fill="none" />
      <path d="M 20 100 L 60 100" stroke="#0284c7" stroke-width="4" fill="none" />
      <path d="M 260 180 L 340 180" stroke="#eab308" stroke-width="3.5" fill="none" />
      <path id="cable-ret-timbre" d="M 500 200 L 600 200" stroke="#475569" stroke-width="3.5" fill="none" />
    </svg>
  </div>`;
}

// Fallback para guías restantes
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

// Mapa de los circuitos interactivos
const DETAILED_DIAGRAMS = {
  'punto-simple': svgPuntoSimple,
  'conmutada': svgConmutada,
  'cruzamiento': svgCruzamiento,
  'escalera-automatica': svgEscaleraAutomatica,
  'fotocelula': svgFotocelula,
  'dimmer': svgDimmer,
  'tablero-unifilar': svgTableroUnifilar,
  'jabalina-tablero': svgJabalinaTablero,
  'transferencia-manual': svgTransferenciaManual,
  'bomba-flotante': svgBombaFlotante,
  'bomba-presostato': svgBombaPresostato,
  'motor-directo-mono': svgMotorDirectoMono,
  'circuito-ac': svgCircuitoAC,
  'circuito-termotanque': svgCircuitoTermotanque,
  'portero-electrico': svgPorteroElectrico,
  'timbre': svgTimbre,
};

export function renderCircuitDiagramSvg(nodes, guiaId) {
  if (guiaId && DETAILED_DIAGRAMS[guiaId]) {
    return DETAILED_DIAGRAMS[guiaId]();
  }
  return renderFallbackBoxes(nodes);
}

// -------------------------------------------------------------
// CONTROLADOR CENTRAL DE INTERACTIVIDAD (Event Listeners)
// -------------------------------------------------------------
export function initCircuitInteractions(guiaId) {
  // 1. PUNTO SIMPLE
  if (guiaId === 'punto-simple') {
    let isOn = false;
    const toggle = () => {
      isOn = !isOn;
      const blade = document.getElementById('switch-blade');
      const bulb = document.getElementById('lamp-bulb-glass');
      const halo = document.getElementById('lamp-halo');
      const filament = document.getElementById('lamp-filament');
      const text = document.getElementById('lamp-text');
      const switchText = document.getElementById('switch-state-text');
      const cableRetorno = document.getElementById('cable-retorno');

      if (blade) {
        blade.setAttribute('x2', isOn ? '115' : '105');
        blade.setAttribute('y2', isOn ? '85' : '65');
      }
      if (switchText) {
        switchText.textContent = isOn ? 'CERRADO (ON)' : 'ABIERTO (OFF)';
        switchText.setAttribute('fill', isOn ? '#22c55e' : '#ef4444');
      }
      if (halo) halo.setAttribute('opacity', isOn ? '1' : '0');
      if (bulb) {
        bulb.setAttribute('fill', isOn ? '#fef08a' : '#1e293b');
        bulb.setAttribute('stroke', isOn ? '#eab308' : '#cbd5e1');
      }
      if (filament) filament.setAttribute('stroke', isOn ? '#ea580c' : '#64748b');
      if (cableRetorno) cableRetorno.setAttribute('stroke', isOn ? '#f59e0b' : '#475569');
      if (text) {
        text.textContent = isOn ? 'LÁMPARA ENCENDIDA (220V)' : 'LÁMPARA APAGADA';
        text.setAttribute('fill', isOn ? '#facc15' : '#64748b');
      }
    };
    const btn = document.getElementById('btn-toggle-switch');
    const box = document.getElementById('click-llave-unipolar');
    if (btn) btn.onclick = toggle;
    if (box) box.onclick = toggle;
  }

  // 2. CONMUTADA
  if (guiaId === 'conmutada') {
    let s1 = 1, s2 = 1;
    const updateConm = () => {
      const isOn = s1 === s2;
      const blade1 = document.getElementById('blade-conm-1');
      const blade2 = document.getElementById('blade-conm-2');
      const halo = document.getElementById('lamp-halo-conm');
      const bulb = document.getElementById('lamp-bulb-conm');
      const text = document.getElementById('lamp-text-conm');
      const cableRet = document.getElementById('cable-ret-conm');

      if (blade1) blade1.setAttribute('x2', s1 === 1 ? '45' : '125');
      if (blade2) blade2.setAttribute('x2', s2 === 1 ? '45' : '125');
      if (halo) halo.setAttribute('opacity', isOn ? '1' : '0');
      if (bulb) {
        bulb.setAttribute('fill', isOn ? '#fef08a' : '#1e293b');
        bulb.setAttribute('stroke', isOn ? '#eab308' : '#cbd5e1');
      }
      if (cableRet) cableRet.setAttribute('stroke', isOn ? '#f59e0b' : '#475569');
      if (text) {
        text.textContent = isOn ? 'LÁMPARA ENCENDIDA' : 'LÁMPARA APAGADA';
        text.setAttribute('fill', isOn ? '#facc15' : '#64748b');
      }
    };
    const btn1 = document.getElementById('btn-conm-1');
    const btn2 = document.getElementById('btn-conm-2');
    if (btn1) btn1.onclick = () => { s1 = s1 === 1 ? 2 : 1; updateConm(); };
    if (btn2) btn2.onclick = () => { s2 = s2 === 1 ? 2 : 1; updateConm(); };
  }

  // 3. CRUZAMIENTO
  if (guiaId === 'cruzamiento') {
    let s1 = 1, sInv = 1, s2 = 1;
    const updateCruz = () => {
      const isOn = ((s1 === 1 ? 1 : 0) ^ (sInv === 1 ? 1 : 0) ^ (s2 === 1 ? 1 : 0)) === 1;
      const b1 = document.getElementById('blade-cruz-1');
      const b2 = document.getElementById('blade-cruz-2');
      const l1 = document.getElementById('cruz-l1');
      const l2 = document.getElementById('cruz-l2');
      const halo = document.getElementById('lamp-halo-cruz');
      const bulb = document.getElementById('lamp-bulb-cruz');
      const text = document.getElementById('lamp-text-cruz');
      const cableRet = document.getElementById('cable-ret-cruz');

      if (b1) b1.setAttribute('x2', s1 === 1 ? '45' : '105');
      if (b2) b2.setAttribute('x2', s2 === 1 ? '45' : '105');
      if (l1 && l2) {
        if (sInv === 1) {
          l1.setAttribute('x2', '50'); l1.setAttribute('y2', '165');
          l2.setAttribute('x2', '140'); l2.setAttribute('y2', '165');
        } else {
          l1.setAttribute('x2', '140'); l1.setAttribute('y2', '165');
          l2.setAttribute('x2', '50'); l2.setAttribute('y2', '165');
        }
      }
      if (halo) halo.setAttribute('opacity', isOn ? '1' : '0');
      if (bulb) {
        bulb.setAttribute('fill', isOn ? '#fef08a' : '#1e293b');
        bulb.setAttribute('stroke', isOn ? '#eab308' : '#cbd5e1');
      }
      if (cableRet) cableRet.setAttribute('stroke', isOn ? '#f59e0b' : '#475569');
      if (text) {
        text.textContent = isOn ? 'LÁMPARA ENCENDIDA' : 'LÁMPARA APAGADA';
        text.setAttribute('fill', isOn ? '#facc15' : '#64748b');
      }
    };
    const bBtn1 = document.getElementById('btn-cruz-1');
    const bBtnInv = document.getElementById('btn-cruz-inv');
    const bBtn2 = document.getElementById('btn-cruz-2');
    if (bBtn1) bBtn1.onclick = () => { s1 = s1 === 1 ? 2 : 1; updateCruz(); };
    if (bBtnInv) bBtnInv.onclick = () => { sInv = sInv === 1 ? 2 : 1; updateCruz(); };
    if (bBtn2) bBtn2.onclick = () => { s2 = s2 === 1 ? 2 : 1; updateCruz(); };
  }

  // 4. ESCALERA AUTOMÁTICA
  if (guiaId === 'escalera-automatica') {
    let timerId = null;
    let secondsLeft = 0;
    const btn = document.getElementById('btn-pulsador-escalera');
    const display = document.getElementById('escalera-timer-display');
    const halo = document.getElementById('lamp-halo-esc');
    const bulb = document.getElementById('lamp-bulb-esc');
    const text = document.getElementById('lamp-text-esc');
    const cableRet = document.getElementById('cable-ret-esc');

    if (btn) {
      btn.onclick = () => {
        if (timerId) clearInterval(timerId);
        secondsLeft = 15;
        if (halo) halo.setAttribute('opacity', '1');
        if (bulb) { bulb.setAttribute('fill', '#fef08a'); bulb.setAttribute('stroke', '#eab308'); }
        if (cableRet) cableRet.setAttribute('stroke', '#f59e0b');
        if (text) { text.textContent = 'ENCENDIDAS (TEMPORIZANDO)'; text.setAttribute('fill', '#facc15'); }

        timerId = setInterval(() => {
          secondsLeft--;
          if (display) display.textContent = `${secondsLeft} seg RESTANTES`;
          if (secondsLeft <= 0) {
            clearInterval(timerId);
            timerId = null;
            if (display) display.textContent = 'STANDBY (OFF)';
            if (halo) halo.setAttribute('opacity', '0');
            if (bulb) { bulb.setAttribute('fill', '#1e293b'); bulb.setAttribute('stroke', '#cbd5e1'); }
            if (cableRet) cableRet.setAttribute('stroke', '#475569');
            if (text) { text.textContent = 'LUCES APAGADAS'; text.setAttribute('fill', '#64748b'); }
          }
        }, 1000);
      };
    }
  }

  // 5. FOTOCÉLULA
  if (guiaId === 'fotocelula') {
    const btnDia = document.getElementById('btn-foto-dia');
    const btnNoche = document.getElementById('btn-foto-noche');
    const ojo = document.getElementById('ojo-fotocelula');
    const estadoTxt = document.getElementById('foto-estado-sensor');
    const halo = document.getElementById('lamp-halo-foto');
    const bulb = document.getElementById('lamp-bulb-foto');
    const text = document.getElementById('lamp-text-foto');
    const cableRet = document.getElementById('cable-ret-foto');

    const setNoche = (isNight) => {
      if (ojo) ojo.setAttribute('fill', isNight ? '#0f172a' : '#fde047');
      if (estadoTxt) {
        estadoTxt.textContent = isNight ? 'SENSOR: DETECTA OSCURIDAD (RELE ACTIVO)' : 'SENSOR: DETECTA LUZ SOLAR';
        estadoTxt.setAttribute('fill', isNight ? '#38bdf8' : '#eab308');
      }
      if (halo) halo.setAttribute('opacity', isNight ? '1' : '0');
      if (bulb) {
        bulb.setAttribute('fill', isNight ? '#fef08a' : '#1e293b');
        bulb.setAttribute('stroke', isNight ? '#eab308' : '#cbd5e1');
      }
      if (cableRet) cableRet.setAttribute('stroke', isNight ? '#f59e0b' : '#475569');
      if (text) {
        text.textContent = isNight ? 'LUMINARIAS EXTERIORES ON' : 'LUCES EXTERIORES OFF';
        text.setAttribute('fill', isNight ? '#facc15' : '#64748b');
      }
    };

    if (btnDia) btnDia.onclick = () => setNoche(false);
    if (btnNoche) btnNoche.onclick = () => setNoche(true);
  }

  // 6. DIMMER
  if (guiaId === 'dimmer') {
    const slider = document.getElementById('dimmer-slider');
    const valText = document.getElementById('dimmer-val-text');
    const pointer = document.getElementById('dimmer-knob-pointer');
    const halo = document.getElementById('lamp-halo-dimmer');
    const bulb = document.getElementById('lamp-bulb-dimmer');
    const text = document.getElementById('lamp-text-dimmer');

    if (slider) {
      slider.oninput = (e) => {
        const val = parseInt(e.target.value);
        const voltios = Math.round((val / 100) * 220);
        if (valText) valText.textContent = `${val}% (${voltios}V)`;
        if (halo) halo.setAttribute('opacity', (val / 100).toString());
        if (bulb) {
          bulb.setAttribute('fill', val > 10 ? '#fef08a' : '#1e293b');
          bulb.setAttribute('stroke', val > 10 ? '#eab308' : '#64748b');
        }
        if (text) {
          text.textContent = val === 0 ? 'APAGADO' : `BRILLO: ${val}% (${voltios}V)`;
          text.setAttribute('fill', val > 0 ? '#facc15' : '#64748b');
        }
        if (pointer) {
          const angle = (val / 100) * 270 - 135;
          const rad = (angle * Math.PI) / 180;
          const x2 = 100 + 20 * Math.sin(rad);
          const y2 = 95 - 20 * Math.cos(rad);
          pointer.setAttribute('x2', x2.toString());
          pointer.setAttribute('y2', y2.toString());
        }
      };
    }
  }

  // 7. TABLERO UNIFILAR
  if (guiaId === 'tablero-unifilar') {
    let igaOn = true, idOn = true;
    const updateTablero = () => {
      const hasPower = igaOn && idOn;
      const leverIga = document.getElementById('lever-iga');
      const statusIga = document.getElementById('status-iga-text');
      const leverId = document.getElementById('lever-id');
      const statusId = document.getElementById('status-id-text');
      const led = document.getElementById('led-tablero');
      const outText = document.getElementById('text-tablero-output');
      const bridgeFase = document.getElementById('unifilar-bridge-fase');
      const bridgeNeutro = document.getElementById('unifilar-bridge-neutro');
      const outFase = document.getElementById('unifilar-out-fase');

      if (leverIga) leverIga.setAttribute('fill', igaOn ? '#22c55e' : '#ef4444');
      if (statusIga) {
        statusIga.textContent = igaOn ? 'ACTIVA (ON)' : 'CORTADA (OFF)';
        statusIga.setAttribute('fill', igaOn ? '#22c55e' : '#ef4444');
      }
      if (bridgeFase) bridgeFase.setAttribute('stroke', igaOn ? '#8b4513' : '#475569');
      if (bridgeNeutro) bridgeNeutro.setAttribute('stroke', igaOn ? '#0284c7' : '#475569');

      if (leverId) leverId.setAttribute('fill', idOn ? '#22c55e' : '#ef4444');
      if (statusId) {
        statusId.textContent = idOn ? 'CONECTADO (ON)' : 'DISPARADO (OFF)';
        statusId.setAttribute('fill', idOn ? '#22c55e' : '#ef4444');
      }
      if (outFase) outFase.setAttribute('stroke', hasPower ? '#f59e0b' : '#475569');
      if (led) led.setAttribute('fill', hasPower ? '#22c55e' : '#ef4444');
      if (outText) {
        outText.textContent = hasPower ? 'CIRCUITOS CON 220V' : 'CIRCUITOS SIN TENSIÓN';
        outText.setAttribute('fill', hasPower ? '#22c55e' : '#ef4444');
      }
    };
    const btnIga = document.getElementById('btn-toggle-iga');
    const btnId = document.getElementById('btn-toggle-id');
    const btnTest = document.getElementById('btn-test-diferencial');
    if (btnIga) btnIga.onclick = () => { igaOn = !igaOn; updateTablero(); };
    if (btnId) btnId.onclick = () => { idOn = !idOn; updateTablero(); };
    if (btnTest) btnTest.onclick = () => { idOn = false; updateTablero(); };
  }

  // 8. PUESTA A TIERRA
  if (guiaId === 'jabalina-tablero') {
    const btn = document.getElementById('btn-medir-pat');
    const valText = document.getElementById('pat-ohms-val');
    if (btn) {
      btn.onclick = () => {
        if (valText) valText.textContent = 'MIDIENDO...';
        setTimeout(() => {
          const ohm = (Math.random() * 3 + 2.5).toFixed(1);
          if (valText) valText.textContent = `${ohm} Ω (CONFORME AEA)`;
        }, 600);
      };
    }
  }

  // 9. TRANSFERENCIA MANUAL
  if (guiaId === 'transferencia-manual') {
    const setPos = (pos) => {
      const lever = document.getElementById('lever-transf');
      const statusTxt = document.getElementById('status-transf-text');
      const led = document.getElementById('led-casa');
      const casaTxt = document.getElementById('status-casa-text');
      const outCable = document.getElementById('cable-out-transf');

      if (pos === 1) {
        if (lever) { lever.setAttribute('x2', '100'); lever.setAttribute('y2', '80'); lever.setAttribute('stroke', '#3b82f6'); }
        if (statusTxt) { statusTxt.textContent = 'SUMINISTRO DESDE RED (220V)'; statusTxt.setAttribute('fill', '#38bdf8'); }
        if (led) led.setAttribute('fill', '#22c55e');
        if (casaTxt) { casaTxt.textContent = 'ENERGIZADA POR RED'; casaTxt.setAttribute('fill', '#22c55e'); }
        if (outCable) outCable.setAttribute('stroke', '#22c55e');
      } else if (pos === 2) {
        if (lever) { lever.setAttribute('x2', '160'); lever.setAttribute('y2', '80'); lever.setAttribute('stroke', '#f59e0b'); }
        if (statusTxt) { statusTxt.textContent = 'SUMINISTRO DESDE GENERADOR (220V)'; statusTxt.setAttribute('fill', '#f59e0b'); }
        if (led) led.setAttribute('fill', '#eab308');
        if (casaTxt) { casaTxt.textContent = 'ENERGIZADA POR GRUPO'; casaTxt.setAttribute('fill', '#eab308'); }
        if (outCable) outCable.setAttribute('stroke', '#eab308');
      } else {
        if (lever) { lever.setAttribute('x2', '130'); lever.setAttribute('y2', '70'); lever.setAttribute('stroke', '#94a3b8'); }
        if (statusTxt) { statusTxt.textContent = 'CORTE TOTAL - POSICIÓN CERO'; statusTxt.setAttribute('fill', '#94a3b8'); }
        if (led) led.setAttribute('fill', '#ef4444');
        if (casaTxt) { casaTxt.textContent = 'CASA SIN ENERGÍA (0V)'; casaTxt.setAttribute('fill', '#ef4444'); }
        if (outCable) outCable.setAttribute('stroke', '#475569');
      }
    };
    const bRed = document.getElementById('btn-transf-red');
    const bCero = document.getElementById('btn-transf-cero');
    const bGen = document.getElementById('btn-transf-gen');
    if (bRed) bRed.onclick = () => setPos(1);
    if (bCero) bCero.onclick = () => setPos(0);
    if (bGen) bGen.onclick = () => setPos(2);
  }

  // 10. BOMBA FLOTANTE CON SELECTOR 3 POSICIONES
  if (guiaId === 'bomba-flotante') {
    let modo = 'MAN'; // 'MAN', 'OFF', 'AUTO'
    let tanqueVacio = false;

    const updateBomba = () => {
      const lever = document.getElementById('lever-bomba');
      const txtModo = document.getElementById('txt-modo-bomba');
      const txtMotor = document.getElementById('txt-motor-status');
      const cableFase = document.getElementById('cable-bomba-fase');
      const spinner = document.getElementById('motor-spinner');
      const pera = document.getElementById('flotante-pera');
      const rectAgua = document.getElementById('rect-agua-tanque');
      const txtTanque = document.getElementById('txt-tanque-status');

      if (pera && rectAgua && txtTanque) {
        if (tanqueVacio) {
          pera.setAttribute('cy', '190');
          rectAgua.setAttribute('height', '50');
          rectAgua.setAttribute('y', '190');
          txtTanque.textContent = 'AGUA: BAJO (PIDE ARRANQUE)';
          txtTanque.setAttribute('fill', '#f59e0b');
        } else {
          pera.setAttribute('cy', '125');
          rectAgua.setAttribute('height', '130');
          rectAgua.setAttribute('y', '110');
          txtTanque.textContent = 'AGUA: LLENO (BOBINA REPOSO)';
          txtTanque.setAttribute('fill', '#fff');
        }
      }

      let motorEnMarcha = false;
      if (modo === 'MAN') {
        motorEnMarcha = true;
        if (lever) { lever.setAttribute('x2', '65'); lever.setAttribute('y2', '75'); }
        if (txtModo) { txtModo.textContent = 'MANUAL: FORZADO DIRECTO'; txtModo.setAttribute('fill', '#f59e0b'); }
      } else if (modo === 'OFF') {
        motorEnMarcha = false;
        if (lever) { lever.setAttribute('x2', '95'); lever.setAttribute('y2', '65'); }
        if (txtModo) { txtModo.textContent = 'POSICIÓN 0: APAGADO'; txtModo.setAttribute('fill', '#94a3b8'); }
      } else if (modo === 'AUTO') {
        motorEnMarcha = tanqueVacio; // Arranca si el tanque está vacío
        if (lever) { lever.setAttribute('x2', '125'); lever.setAttribute('y2', '75'); }
        if (txtModo) { txtModo.textContent = 'AUTOMÁTICO POR FLOTANTE'; txtModo.setAttribute
