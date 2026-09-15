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
    <button id="btn-toggle-switch" style="margin-bottom:12px;padding:10px 20px;background:#f59e0b;color:#090e17;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:13px;display:flex;align-items:center;gap:6px;box-shadow:0 2px 8px rgba(245,158,11,0.3);">
      🔘 <span>ACCIONAR LLAVE DE LUZ</span>
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
        <line x1="85" y1="68" x2="135" y2="68" stroke="#64748b" stroke-width="2" />
        <line x1="85" y1="76" x2="135" y2="76" stroke="#64748b" stroke-width="2" />
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
        <text x="85" y="85" text-anchor="middle" fill="#f59e0b" font-size="9" font-weight="bold">Común C (Fase)</text>
        <circle cx="45" cy="165" r="7" fill="#8b5cf6" stroke="#fff" stroke-width="1.5" />
        <text x="45" y="187" text-anchor="middle" fill="#a78bfa" font-size="9">Viajero 1</text>
        <circle cx="125" cy="165" r="7" fill="#f97316" stroke="#fff" stroke-width="1.5" />
        <text x="125" y="187" text-anchor="middle" fill="#fb923c" font-size="9">Viajero 2</text>
        <line id="blade-conm-1" x1="85" y1="65" x2="45" y2="165" stroke="#f59e0b" stroke-width="4.5" stroke-linecap="round" />
      </g>
      <g transform="translate(380, 95)" filter="url(#din-shadow)">
        <rect width="170" height="230" rx="10" fill="#1e293b" stroke="#475569" stroke-width="2" />
        <text x="85" y="32" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="bold">CONMUTADA 2</text>
        <circle cx="45" cy="65" r="7" fill="#8b5cf6" stroke="#fff" stroke-width="1.5" />
        <text x="45" y="85" text-anchor="middle" fill="#a78bfa" font-size="9">Viajero 1</text>
        <circle cx="125" cy="65" r="7" fill="#f97316" stroke="#fff" stroke-width="1.5" />
        <text x="125" y="85" text-anchor="middle" fill="#fb923c" font-size="9">Viajero 2</text>
        <circle cx="85" cy="165" r="7" fill="#64748b" stroke="#fff" stroke-width="1.5" />
        <text x="85" y="187" text-anchor="middle" fill="#cbd5e1" font-size="9" font-weight="bold">Común C (Retorno)</text>
        <line id="blade-conm-2" x1="85" y1="165" x2="45" y2="65" stroke="#f59e0b" stroke-width="4.5" stroke-linecap="round" />
      </g>
      <g transform="translate(680, 75)" filter="url(#din-shadow)">
        <rect x="75" y="30" width="70" height="28" rx="4" fill="#334155" stroke="#64748b" stroke-width="2" />
        <text x="110" y="22" text-anchor="middle" fill="#94a3b8" font-size="11" font-weight="bold">LÁMPARA</text>
        <rect x="85" y="58" width="50" height="26" rx="2" fill="#94a3b8" stroke="#cbd5e1" stroke-width="1.5" />
        <circle id="lamp-halo-conm" cx="110" cy="145" r="90" fill="url(#lamp-glow-on)" opacity="1" filter="url(#bulb-glow-filter)" />
        <path id="lamp-bulb-conm" d="M 90 84 C 80 100 70 120 70 140 C 70 167 88 190 110 190 C 132 190 150 167 150 140 C 150 120 140 100 130 84 Z" fill="#fef08a" stroke="#eab308" stroke-width="2.5" />
        <path id="lamp-filament-conm" d="M 95 125 L 105 105 L 110 110 L 115 105 L 125 125" fill="none" stroke="#ea580c" stroke-width="2.5" stroke-linecap="round" />
        <circle cx="65" cy="45" r="6" fill="#0284c7" stroke="#fff" stroke-width="1.5" />
        <text x="50" y="35" text-anchor="middle" fill="#38bdf8" font-size="9" font-weight="bold">N</text>
        <circle cx="155" cy="45" r="6" fill="#64748b" stroke="#fff" stroke-width="1.5" />
        <text x="170" y="35" text-anchor="middle" fill="#cbd5e1" font-size="9" font-weight="bold">RET</text>
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
// 3. CRUZAMIENTO / COMBINADA (3+ PUNTOS)
// -------------------------------------------------------------
function svgCruzamiento() {
  return `
  <div style="background:#090e17;border-radius:10px;padding:12px;display:flex;flex-direction:column;align-items:center;">
    <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;justify-content:center;">
      <button id="btn-cruz-1" style="padding:8px 14px;background:#3b82f6;color:#fff;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:11px;">
        Llave Conmutada A
      </button>
      <button id="btn-cruz-inv" style="padding:8px 14px;background:#8b5cf6;color:#fff;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:11px;">
        🔄 Llave Cruzamiento (Centro)
      </button>
      <button id="btn-cruz-2" style="padding:8px 14px;background:#3b82f6;color:#fff;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:11px;">
        Llave Conmutada B
      </button>
    </div>
    <svg viewBox="0 0 960 450" width="100%" style="display:block;max-width:920px;" role="img">
      ${SVG_DEFS}
      <!-- Conmutada 1 -->
      <g transform="translate(30, 90)" filter="url(#din-shadow)">
        <rect width="150" height="230" rx="8" fill="#1e293b" stroke="#475569" stroke-width="2" />
        <text x="75" y="30" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">CONMUTADA 1</text>
        <circle cx="75" cy="65" r="6" fill="#8b4513" stroke="#fff" stroke-width="1.5" />
        <circle cx="45" cy="165" r="6" fill="#8b5cf6" stroke="#fff" stroke-width="1.5" />
        <circle cx="105" cy="165" r="6" fill="#f97316" stroke="#fff" stroke-width="1.5" />
        <line id="blade-cruz-1" x1="75" y1="65" x2="45" y2="165" stroke="#f59e0b" stroke-width="4.5" stroke-linecap="round" />
      </g>
      <!-- Cruzamiento 4 vías -->
      <g transform="translate(260, 90)" filter="url(#din-shadow)">
        <rect width="190" height="230" rx="8" fill="#1e293b" stroke="#8b5cf6" stroke-width="2" />
        <text x="95" y="30" text-anchor="middle" fill="#c084fc" font-size="11" font-weight="bold">LLAVE CRUZAMIENTO (4 VÍAS)</text>
        <circle cx="50" cy="70" r="6" fill="#8b5cf6" stroke="#fff" stroke-width="1.5" />
        <circle cx="140" cy="70" r="6" fill="#f97316" stroke="#fff" stroke-width="1.5" />
        <circle cx="50" cy="165" r="6" fill="#8b5cf6" stroke="#fff" stroke-width="1.5" />
        <circle cx="140" cy="165" r="6" fill="#f97316" stroke="#fff" stroke-width="1.5" />
        <g id="cruz-contacts">
          <line id="cruz-l1" x1="50" y1="70" x2="50" y2="165" stroke="#f59e0b" stroke-width="4" stroke-linecap="round" />
          <line id="cruz-l2" x1="140" y1="70" x2="140" y2="165" stroke="#f59e0b" stroke-width="4" stroke-linecap="round" />
        </g>
      </g>
      <!-- Conmutada 2 -->
      <g transform="translate(530, 90)" filter="url(#din-shadow)">
        <rect width="150" height="230" rx="8" fill="#1e293b" stroke="#475569" stroke-width="2" />
        <text x="75" y="30" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">CONMUTADA 2</text>
        <circle cx="45" cy="70" r="6" fill="#8b5cf6" stroke="#fff" stroke-width="1.5" />
        <circle cx="105" cy="70" r="6" fill="#f97316" stroke="#fff" stroke-width="1.5" />
        <circle cx="75" cy="165" r="6" fill="#64748b" stroke="#fff" stroke-width="1.5" />
        <line id="blade-cruz-2" x1="75" y1="165" x2="45" y2="70" stroke="#f59e0b" stroke-width="4.5" stroke-linecap="round" />
      </g>
      <!-- Lámpara -->
      <g transform="translate(750, 75)" filter="url(#din-shadow)">
        <rect x="50" y="30" width="70" height="26" rx="4" fill="#334155" stroke="#64748b" stroke-width="2" />
        <rect x="60" y="56" width="50" height="24" rx="2" fill="#94a3b8" stroke="#cbd5e1" stroke-width="1.5" />
        <circle id="lamp-halo-cruz" cx="85" cy="145" r="85" fill="url(#lamp-glow-on)" opacity="1" filter="url(#bulb-glow-filter)" />
        <path id="lamp-bulb-cruz" d="M 65 80 C 55 96 45 116 45 136 C 45 163 63 186 85 186 C 107 186 125 163 125 136 C 125 116 115 96 105 80 Z" fill="#fef08a" stroke="#eab308" stroke-width="2.5" />
        <circle cx="40" cy="42" r="6" fill="#0284c7" stroke="#fff" stroke-width="1.5" />
        <circle cx="130" cy="42" r="6" fill="#64748b" stroke="#fff" stroke-width="1.5" />
        <text id="lamp-text-cruz" x="85" y="215" text-anchor="middle" fill="#facc15" font-size="11" font-weight="bold">ENCENDIDA</text>
      </g>
      <!-- Cables viajeros -->
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
// 4. ESCALERA AUTOMÁTICA (TELERRUPTOR / TEMPORIZADOR)
// -------------------------------------------------------------
function svgEscaleraAutomatica() {
  return `
  <div style="background:#090e17;border-radius:10px;padding:12px;display:flex;flex-direction:column;align-items:center;">
    <button id="btn-pulsador-escalera" style="margin-bottom:12px;padding:10px 22px;background:#ec4899;color:#fff;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:13px;display:flex;align-items:center;gap:6px;box-shadow:0 2px 8px rgba(236,72,153,0.3);">
      ⏱️ <span>PRESIONAR PULSADOR DE ESCALERA</span>
    </button>
    <svg viewBox="0 0 920 440" width="100%" style="display:block;max-width:880px;" role="img">
      ${SVG_DEFS}
      <!-- Módulo Temporizador de Riel DIN -->
      <g transform="translate(320, 80)" filter="url(#din-shadow)">
        <rect width="240" height="240" rx="8" fill="#1e293b" stroke="#475569" stroke-width="2.5" />
        <rect x="20" y="20" width="200" height="70" rx="6" fill="#0f172a" />
        <text x="120" y="45" text-anchor="middle" fill="#94a3b8" font-size="11" font-weight="bold">TEMPORIZADOR DIN 220V</text>
        <text id="escalera-timer-display" x="120" y="75" text-anchor="middle" fill="#22c55e" font-size="20" font-family="monospace" font-weight="bold">STANDBY (OFF)</text>
        <!-- Perilla reguladora -->
        <circle cx="120" cy="150" r="32" fill="#334155" stroke="#94a3b8" stroke-width="2" />
        <line x1="120" y1="150" x2="135" y2="130" stroke="#f59e0b" stroke-width="3" stroke-linecap="round" />
        <text x="120" y="205" text-anchor="middle" fill="#cbd5e1" font-size="10">Tiempo: 30 seg</text>
      </g>
      <!-- Pulsador luminoso -->
      <g transform="translate(60, 120)" filter="url(#din-shadow)">
        <rect width="160" height="160" rx="10" fill="#1e293b" stroke="#ec4899" stroke-width="2" />
        <text x="80" y="32" text-anchor="middle" fill="#f472b6" font-size="11" font-weight="bold">PULSADOR PISO</text>
        <circle id="pulsador-btn-visual" cx="80" cy="90" r="35" fill="#db2777" stroke="#fff" stroke-width="2" />
        <text x="80" y="95" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">PULSAR</text>
      </g>
      <!-- Lámparas de pasillo/escalera -->
      <g transform="translate(680, 80)" filter="url(#din-shadow)">
        <rect x="50" y="30" width="70" height="26" rx="4" fill="#334155" stroke="#64748b" stroke-width="2" />
        <circle id="lamp-halo-esc" cx="85" cy="140" r="85" fill="url(#lamp-glow-on)" opacity="0" filter="url(#bulb-glow-filter)" />
        <path id="lamp-bulb-esc" d="M 65 75 C 55 91 45 111 45 131 C 45 158 63 181 85 181 C 107 181 125 158 125 131 C 125 111 115 91 105 75 Z" fill="#1e293b" stroke="#cbd5e1" stroke-width="2.5" />
        <text id="lamp-text-esc" x="85" y="210" text-anchor="middle" fill="#64748b" font-size="11" font-weight="bold">LUCES APAGADAS</text>
      </g>
      <!-- Cables -->
      <path d="M 20 180 L 60 180" stroke="#8b4513" stroke-width="4" fill="none" />
      <path d="M 220 180 L 320 180" stroke="#ec4899" stroke-width="3.5" fill="none" />
      <path id="cable-ret-esc" d="M 560 180 L 680 180" stroke="#475569" stroke-width="4" fill="none" />
      <path d="M 20 50 L 765 50 L 765 106" stroke="#0284c7" stroke-width="4" fill="none" />
    </svg>
  </div>`;
}

// -------------------------------------------------------------
// 5. ENCENDIDO CON FOTOCÉLULA
// -------------------------------------------------------------
function svgFotocelula() {
  return `
  <div style="background:#090e17;border-radius:10px;padding:12px;display:flex;flex-direction:column;align-items:center;">
    <div style="display:flex;gap:10px;margin-bottom:12px;">
      <button id="btn-foto-dia" style="padding:9px 16px;background:#eab308;color:#0f172a;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:12px;">
        ☀️ Simular Luz de Día (Lámpara OFF)
      </button>
      <button id="btn-foto-noche" style="padding:9px 16px;background:#475569;color:#fff;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:12px;">
        🌙 Simular Oscuridad / Noche (Lámpara ON)
      </button>
    </div>
    <svg viewBox="0 0 920 440" width="100%" style="display:block;max-width:880px;" role="img">
      ${SVG_DEFS}
      <!-- Sensor Fotocélula 3 Cables -->
      <g transform="translate(180, 80)" filter="url(#din-shadow)">
        <rect width="220" height="230" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5" />
        <text x="110" y="32" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">FOTOCÉLULA CREPUSCULAR</text>
        <circle id="ojo-fotocelula" cx="110" cy="85" r="28" fill="#fde047" stroke="#ca8a04" stroke-width="3" />
        <text id="foto-estado-sensor" x="110" y="140" text-anchor="middle" fill="#eab308" font-size="11" font-weight="bold">SENSOR: DETECTA LUZ SOLAR</text>
        <!-- Bornes fotocelula -->
        <circle cx="50" cy="180" r="6" fill="#8b4513" stroke="#fff" stroke-width="1.5" />
        <text x="50" y="205" text-anchor="middle" fill="#f59e0b" font-size="8">L (Fase)</text>
        <circle cx="110" cy="180" r="6" fill="#0284c7" stroke="#fff" stroke-width="1.5" />
        <text x="110" y="205" text-anchor="middle" fill="#38bdf8" font-size="8">N (Neutro)</text>
        <circle cx="170" cy="180" r="6" fill="#dc2626" stroke="#fff" stroke-width="1.5" />
        <text x="170" y="205" text-anchor="middle" fill="#f87171" font-size="8">Carga (Rojo)</text>
      </g>
      <!-- Luminaria Exterior -->
      <g transform="translate(630, 80)" filter="url(#din-shadow)">
        <rect x="50" y="30" width="70" height="26" rx="4" fill="#334155" stroke="#64748b" stroke-width="2" />
        <circle id="lamp-halo-foto" cx="85" cy="140" r="85" fill="url(#lamp-glow-on)" opacity="0" filter="url(#bulb-glow-filter)" />
        <path id="lamp-bulb-foto" d="M 65 75 C 55 91 45 111 45 131 C 45 158 63 181 85 181 C 107 181 125 158 125 131 C 125 111 115 91 105 75 Z" fill="#1e293b" stroke="#cbd5e1" stroke-width="2.5" />
        <text id="lamp-text-foto" x="85" y="210" text-anchor="middle" fill="#64748b" font-size="11" font-weight="bold">LUCES EXTERIORES OFF</text>
      </g>
      <!-- Cables -->
      <path d="M 40 260 L 230 260" stroke="#8b4513" stroke-width="4" fill="none" />
      <path d="M 40 100 L 290 100 L 290 260" stroke="#0284c7" stroke-width="4" fill="none" />
      <path d="M 290 100 L 715 100 L 715 110" stroke="#0284c7" stroke-width="4" fill="none" />
      <path id="cable-ret-foto" d="M 350 260 L 680 260 L 680 110" stroke="#475569" stroke-width="4" fill="none" />
    </svg>
  </div>`;
}

// -------------------------------------------------------------
// 6. DIMMER (REGULADOR DE INTENSIDAD)
// -------------------------------------------------------------
function svgDimmer() {
  return `
  <div style="background:#090e17;border-radius:10px;padding:14px;display:flex;flex-direction:column;align-items:center;">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;background:#1e293b;padding:8px 16px;border-radius:10px;border:1px solid #334155;">
      <span style="font-size:12px;font-weight:bold;color:#f59e0b;">🎛️ Regulador (0 a 100%):</span>
      <input type="range" id="dimmer-slider" min="0" max="100" value="70" style="width:200px;accent-color:#f59e0b;cursor:pointer;" />
      <span id="dimmer-val-text" style="font-size:13px;font-weight:bold;color:#f8fafc;font-family:monospace;">70% (154V)</span>
    </div>
    <svg viewBox="0 0 920 440" width="100%" style="display:block;max-width:880px;" role="img">
      ${SVG_DEFS}
      <!-- Módulo Dimmer Rotativo -->
      <g transform="translate(140, 90)" filter="url(#din-shadow)">
        <rect width="200" height="220" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2.5" />
        <text x="100" y="32" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">DIMMER ELECTRÓNICO</text>
        <circle cx="100" cy="95" r="42" fill="#0f172a" stroke="#475569" stroke-width="2" />
        <circle cx="100" cy="95" r="28" fill="#334155" stroke="#f59e0b" stroke-width="2" />
        <line id="dimmer-knob-pointer" x1="100" y1="95" x2="115" y2="75" stroke="#fff" stroke-width="3.5" stroke-linecap="round" />
        <circle cx="50" cy="180" r="6" fill="#8b4513" stroke="#fff" stroke-width="1.5" />
        <text x="50" y="200" text-anchor="middle" fill="#f59e0b" font-size="8">L (Entrada)</text>
        <circle cx="150" cy="180" r="6" fill="#eab308" stroke="#fff" stroke-width="1.5" />
        <text x="150" y="200" text-anchor="middle" fill="#facc15" font-size="8">Regulado</text>
      </g>
      <!-- Lámpara Dimerizable -->
      <g transform="translate(600, 80)" filter="url(#din-shadow)">
        <rect x="50" y="30" width="70" height="26" rx="4" fill="#334155" stroke="#64748b" stroke-width="2" />
        <circle id="lamp-halo-dimmer" cx="85" cy="140" r="85" fill="url(#lamp-glow-on)" opacity="0.7" filter="url(#bulb-glow-filter)" />
        <path id="lamp-bulb-dimmer" d="M 65 75 C 55 91 45 111 45 131 C 45 158 63 181 85 181 C 107 181 125 158 125 131 C 125 111 115 91 105 75 Z" fill="#fef08a" stroke="#eab308" stroke-width="2.5" />
        <text id="lamp-text-dimmer" x="85" y="210" text-anchor="middle" fill="#facc15" font-size="11" font-weight="bold">BRILLO: 70%</text>
      </g>
      <!-- Cables -->
      <path d="M 30 270 L 190 270" stroke="#8b4513" stroke-width="4" fill="none" />
      <path id="cable-ret-dimmer" d="M 290 270 L 685 270 L 685 106" stroke="#f59e0b" stroke-width="4" fill="none" />
      <path d="M 30 80 L 650 80 L 650 106" stroke="#0284c7" stroke-width="4" fill="none" />
    </svg>
  </div>`;
}

// -------------------------------------------------------------
// 7. ESQUEMA UNIFILAR DE TABLERO PRINCIPAL
// -------------------------------------------------------------
function svgTableroUnifilar() {
  return `
  <div style="background:#090e17;border-radius:10px;padding:12px;display:flex;flex-direction:column;align-items:center;">
    <div style="display:flex;gap:10px;margin-bottom:12px;flex-wrap:wrap;justify-content:center;">
      <button id="btn-toggle-iga" style="padding:8px 14px;background:#3b82f6;color:#fff;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:12px;">
        ⚡ Llave Termomagnética IGA
      </button>
      <button id="btn-toggle-id" style="padding:8px 14px;background:#10b981;color:#fff;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:12px;">
        🛡️ Disyuntor Diferencial ID
      </button>
      <button id="btn-test-diferencial" style="padding:8px 14px;background:#ef4444;color:#fff;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:12px;">
        🧪 Botón TEST (Disparo 30mA)
      </button>
    </div>
    <svg viewBox="0 0 920 460" width="100%" style="display:block;max-width:880px;" role="img">
      ${SVG_DEFS}
      <!-- IGA Termomagnética Bipolar 25A -->
      <g transform="translate(160, 100)" filter="url(#din-shadow)">
        <rect width="180" height="240" rx="8" fill="#1e293b" stroke="#475569" stroke-width="2" />
        <rect x="15" y="15" width="150" height="40" rx="4" fill="#0f172a" />
        <text x="90" y="38" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">IGA C25 (4,5kA)</text>
        <rect x="55" y="80" width="70" height="65" rx="6" fill="#334155" />
        <rect id="lever-iga" x="65" y="85" width="50" height="30" rx="4" fill="#22c55e" />
        <text id="status-iga-text" x="90" y="175" text-anchor="middle" fill="#22c55e" font-size="10" font-weight="bold">ACTIVA (ON)</text>
        <text x="90" y="215" text-anchor="middle" fill="#94a3b8" font-size="9">Curva C · IRAM 2169</text>
      </g>
      <!-- Disyuntor Diferencial 40A / 30mA -->
      <g transform="translate(420, 100)" filter="url(#din-shadow)">
        <rect width="200" height="240" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2.5" />
        <rect x="15" y="15" width="170" height="40" rx="4" fill="#0f172a" />
        <text x="100" y="38" text-anchor="middle" fill="#10b981" font-size="11" font-weight="bold">DIFERENCIAL 40A 30mA</text>
        <rect id="lever-id" x="50" y="85" width="45" height="30" rx="4" fill="#22c55e" />
        <!-- Botón Test -->
        <circle id="btn-test-circle" cx="140" cy="100" r="16" fill="#ef4444" stroke="#fff" stroke-width="1.5" />
        <text x="140" y="104" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">T</text>
        <text id="status-id-text" x="100" y="175" text-anchor="middle" fill="#22c55e" font-size="10" font-weight="bold">CONECTADO (ON)</text>
        <text x="100" y="215" text-anchor="middle" fill="#94a3b8" font-size="9">Protección vidas humanas</text>
      </g>
      <!-- Indicador Estado de Salida Tablero -->
      <g transform="translate(690, 150)" filter="url(#din-shadow)">
        <circle id="led-tablero" cx="50" cy="50" r="30" fill="#22c55e" stroke="#fff" stroke-width="2" />
        <text id="text-tablero-output" x="50" y="115" text-anchor="middle" fill="#22c55e" font-size="11" font-weight="bold">CIRCUITOS CON 220V</text>
      </g>
      <!-- Líneas de alimentación -->
      <path d="M 40 140 L 160 140" stroke="#8b4513" stroke-width="4.5" fill="none" />
      <path d="M 40 180 L 160 180" stroke="#0284c7" stroke-width="4.5" fill="none" />
      <path id="unifilar-bridge-fase" d="M 340 140 L 420 140" stroke="#8b4513" stroke-width="4.5" fill="none" />
      <path id="unifilar-bridge-neutro" d="M 340 180 L 420 180" stroke="#0284c7" stroke-width="4.5" fill="none" />
      <path id="unifilar-out-fase" d="M 620 160 L 690 160" stroke="#f59e0b" stroke-width="4.5" fill="none" />
    </svg>
  </div>`;
}

// -------------------------------------------------------------
// 8. PUESTA A TIERRA (JABALINA Y TABLERO)
// -------------------------------------------------------------
function svgJabalinaTablero() {
  return `
  <div style="background:#090e17;border-radius:10px;padding:12px;display:flex;flex-direction:column;align-items:center;">
    <button id="btn-medir-pat" style="margin-bottom:12px;padding:10px 20px;background:#22c55e;color:#0f172a;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:13px;display:flex;align-items:center;gap:6px;">
      🟢 <span>MEDIR RESISTENCIA DE PUESTA A TIERRA (TELURÍMETRO)</span>
    </button>
    <svg viewBox="0 0 920 460" width="100%" style="display:block;max-width:880px;" role="img">
      ${SVG_DEFS}
      <!-- Tablero Seccional con Barra PE -->
      <g transform="translate(50, 70)" filter="url(#din-shadow)">
        <rect width="240" height="190" rx="10" fill="#1e293b" stroke="#4ade80" stroke-width="2.5" />
        <text x="120" y="32" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="bold">BARRA COLECTORA EQUIPOTENCIAL</text>
        <rect x="25" y="80" width="190" height="22" rx="3" fill="#ca8a04" stroke="#eab308" stroke-width="1.5" />
        <circle cx="50" cy="91" r="5" fill="#1e293b" stroke="#fff" stroke-width="1.5" />
        <circle cx="90" cy="91" r="5" fill="#1e293b" stroke="#fff" stroke-width="1.5" />
        <circle cx="140" cy="91" r="5" fill="#1e293b" stroke="#fff" stroke-width="1.5" />
        <circle cx="190" cy="91" r="5" fill="#1e293b" stroke="#fff" stroke-width="1.5" />
        <text x="120" y="135" text-anchor="middle" fill="#cbd5e1" font-size="10">Borne Conexión Jabalina (4 mm²)</text>
      </g>
      <!-- Caja de Inspección y Jabalina en Suelo -->
      <g transform="translate(500, 140)" filter="url(#din-shadow)">
        <!-- Suelo / Terreno -->
        <rect x="-80" y="70" width="450" height="220" fill="#2d1f14" />
        <line x1="-80" y1="70" x2="370" y2="70" stroke="#78350f" stroke-width="4" />
        <text x="180" y="270" text-anchor="middle" fill="#a16207" font-size="12" font-weight="bold">SUELO NATURAL</text>
        <!-- Cámara de inspección 15x15 -->
        <rect x="40" y="30" width="140" height="90" fill="#475569" stroke="#94a3b8" stroke-width="2" />
        <text x="110" y="22" text-anchor="middle" fill="#94a3b8" font-size="10" font-weight="bold">CÁMARA INSPECCIÓN</text>
        <!-- Jabalina cobreada de 1,5m -->
        <rect x="104" y="60" width="12" height="200" fill="#b45309" stroke="#f59e0b" stroke-width="1.5" />
        <!-- Tomacable / Morseto -->
        <rect x="98" y="75" width="24" height="20" rx="3" fill="#eab308" stroke="#78350f" stroke-width="2" />
      </g>
      <!-- Cable de Tierra PE -->
      <path d="M 190 180 L 190 225 L 604 225" stroke="url(#cable-pe-stripes)" stroke-width="6" fill="none" />
      <!-- Display Medición -->
      <g transform="translate(300, 50)">
        <rect width="180" height="60" rx="8" fill="#0f172a" stroke="#22c55e" stroke-width="2" />
        <text x="90" y="25" text-anchor="middle" fill="#94a3b8" font-size="10">VALOR MEDIDO (AEA &lt; 10 Ω)</text>
        <text id="pat-ohms-val" x="90" y="48" text-anchor="middle" fill="#22c55e" font-size="18" font-family="monospace" font-weight="bold">3.8 Ω (CONFORME)</text>
      </g>
    </svg>
  </div>`;
}

// -------------------------------------------------------------
// 9. TABLERO DE TRANSFERENCIA MANUAL (GRUPO ELECTRÓGENO)
// -------------------------------------------------------------
function svgTransferenciaManual() {
  return `
  <div style="background:#090e17;border-radius:10px;padding:12px;display:flex;flex-direction:column;align-items:center;">
    <div style="display:flex;gap:10px;margin-bottom:12px;">
      <button id="btn-transf-red" style="padding:9px 15px;background:#3b82f6;color:#fff;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:12px;">
        🏢 Posición 1: RED COMERCIAL
      </button>
      <button id="btn-transf-cero" style="padding:9px 15px;background:#64748b;color:#fff;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:12px;">
        ⛔ Posición 0: APAGADO
      </button>
      <button id="btn-transf-gen" style="padding:9px 15px;background:#f59e0b;color:#0f172a;font-weight:bold;border:none;border-radius:8px;cursor:pointer;font-size:12px;">
        ⚡ Posición 2: GENERADOR
      </button>
    </div>
    <svg viewBox="0 0 920 460" width="100%" style="display:block;max-width:880px;" role="img">
      ${SVG_DEFS}
      <!-- Conmutadora Rotativa 1-0-2 con enclavamiento -->
      <g transform="translate(320, 100)" filter="url(#din-shadow)">
        <rect width="260" height="240" rx="12" fill="#1e293b" stroke="#475569" stroke-width="2.5" />
        <text x="130" y="32" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">LLAVE SELECTORA 1-0-2 (TETRAPOLAR)</text>
        <!-- Dial rotativo -->
        <circle cx="130" cy="120" r="55" fill="#0f172a" stroke="#64748b" stroke-width="2" />
        <line id="lever-transf" x1="130" y1="120" x2="100" y2="80" stroke="#3b82f6" stroke-width="6" stroke-linecap="round" />
        <text x="90" y="70" fill="#3b82f6" font-size="12" font-weight="bold">1 (RED)</text>
        <text x="130" y="60" text-anchor="middle" fill="#94a3b8" font-size="12" font-weight="bold">0</text>
        <text x="170" y="70" fill="#f59e0b" font-size="12" font-weight="bold">2 (GEN)</text>
        <text id="status-transf-text" x="130" y="210" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">SUMINISTRO DESDE RED (220V)</text>
      </g>
      <!-- Fuente 1: Red -->
      <g transform="translate(40, 120)" filter="url(#din-shadow)">
        <rect width="180" height="80" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="2" />
        <text x="90" y="35" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">RED ELÉCTRICA (EDENOR/EDESUR)</text>
        <text x="90" y="60" text-anchor="middle" fill="#22c55e" font-size="10">220V Activo</text>
      </g>
      <!-- Fuente 2: Generador -->
      <g transform="translate(40, 240)" filter="url(#din-shadow)">
        <rect width="180" height="80" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
        <text x="90" y="35" text-anchor="middle" fill="#f59e0b" font-size="11" font-weight="bold">GRUPO ELECTRÓGENO</text>
        <text x="90" y="60" text-anchor="middle" fill="#cbd5e1" font-size="10">Generador Nafta/Diesel</text>
      </g>
      <!-- Consumo / Casa -->
      <g transform="translate(680, 160)" filter="url(#din-shadow)">
        <circle id="led-casa" cx="50" cy="50" r="32" fill="#22c55e" stroke="#fff" stroke-width="2" />
        <text id="status-casa-text" x="50" y="115" text-anchor="middle" fill="#22c55e" font-size="11" font-weight="bold">CASA CON ENERGÍA</text>
      </g>
      <!-- Líneas -->
      <path d="M 220 160 L 320 160" stroke="#3b82f6" stroke-width="4.5" fill="none" />
      <path d="M 220 280 L 320 280" stroke="#f59e0b" stroke-width="4.5" fill="none" />
      <path id="cable-out-transf" d="M 580 210 L 680 210" stroke="#22c55e" stroke-width="4.5" fill="none" />
    </svg>
  </div>`;
}

// Fallback por si alguna guía no tiene esquema específico
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
      const filament = document.getElementById('lamp-filament-conm');
      const text = document.getElementById('lamp-text-conm');
      const cableRet = document.getElementById('cable-ret-conm');

      if (blade1) blade1.setAttribute('x2', s1 === 1 ? '45' : '125');
      if (blade2) blade2.setAttribute('x2', s2 === 1 ? '45' : '125');
      if (halo) halo.setAttribute('opacity', isOn ? '1' : '0');
      if (bulb) {
        bulb.setAttribute('fill', isOn ? '#fef08a' : '#1e293b');
        bulb.setAttribute('stroke', isOn ? '#eab308' : '#cbd5e1');
      }
      if (filament) filament.setAttribute('stroke', isOn ? '#ea580c' : '#64748b');
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

  // 3. CRUZAMIENTO (3+ PUNTOS)
  if (guiaId === 'cruzamiento') {
    let s1 = 1, sInv = 1, s2 = 1;
    const updateCruz = () => {
      // Estado de encendido XOR entre los 3 interruptores
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
          // Cruzados
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
        secondsLeft = 15; // 15 segundos para probar rápido
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

  // 7. TABLERO UNIFILAR (IGA + ID)
  if (guiaId === 'tablero-unifilar') {
    let igaOn = true;
    let idOn = true;

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

  // 8. JABALINA Y PUESTA A TIERRA
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
    const setPos = (pos) => { // 1 = red, 0 = off, 2 = gen
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
