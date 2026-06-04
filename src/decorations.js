/* ============================================================
   ORIGAMI · Decorative SVG Library
   Inline SVG snippets to scatter through the UI.
   Use via:  <span data-deco="crane"></span>
   or call:  Deco.crane()  // returns SVG string
   ============================================================ */

(function() {
  const Deco = {

    /* ----- ORIGAMI CRANE ----- */
    crane: (opts = {}) => `
      <svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg" style="width:${opts.size||120}px;height:auto;color:${opts.color||'currentColor'}">
        <defs>
          <linearGradient id="cr1-${opts.id||0}" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stop-color="currentColor" stop-opacity="0.96"/>
            <stop offset="1" stop-color="currentColor" stop-opacity="0.72"/>
          </linearGradient>
          <linearGradient id="cr2-${opts.id||0}" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stop-color="currentColor" stop-opacity="0.55"/>
            <stop offset="1" stop-color="currentColor" stop-opacity="0.32"/>
          </linearGradient>
        </defs>
        <!-- body / fold -->
        <path d="M20,62 L60,38 L100,52 L86,68 L60,58 L34,76 Z" fill="url(#cr1-${opts.id||0})" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/>
        <!-- back wing -->
        <path d="M60,38 L80,12 L100,52 L78,42 Z" fill="url(#cr2-${opts.id||0})" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/>
        <!-- front wing -->
        <path d="M40,30 L60,38 L34,76 L24,46 Z" fill="currentColor" fill-opacity="0.85" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/>
        <!-- neck + head -->
        <path d="M60,38 L92,30 L96,26 L90,28 L88,24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- tail -->
        <path d="M20,62 L8,56 L14,66 Z" fill="currentColor" fill-opacity="0.75" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/>
        <!-- fold lines -->
        <path d="M60,38 L60,58 M34,76 L60,58 M86,68 L60,58" fill="none" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.4"/>
      </svg>`,

    /* ----- PAPER PLANE ----- */
    plane: (opts = {}) => `
      <svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" style="width:${opts.size||80}px;height:auto;color:${opts.color||'currentColor'}">
        <path d="M8,40 L92,8 L62,72 L48,48 L20,42 Z" fill="currentColor" fill-opacity="0.92" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
        <path d="M48,48 L92,8 L62,72 Z" fill="currentColor" fill-opacity="0.65" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
        <path d="M48,48 L20,42 M48,48 L62,72" fill="none" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.45"/>
      </svg>`,

    /* ----- PAPER BOAT ----- */
    boat: (opts = {}) => `
      <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" style="width:${opts.size||100}px;height:auto;color:${opts.color||'currentColor'}">
        <!-- hull -->
        <path d="M10,52 L110,52 L92,72 L28,72 Z" fill="currentColor" fill-opacity="0.85" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
        <!-- left sail -->
        <path d="M60,8 L60,52 L18,52 Z" fill="currentColor" fill-opacity="0.7" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
        <!-- right sail -->
        <path d="M60,8 L60,52 L102,52 Z" fill="currentColor" fill-opacity="0.55" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
        <!-- fold -->
        <line x1="60" y1="8" x2="60" y2="52" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.4"/>
      </svg>`,

    /* ----- PAPER FLOWER (5 petals) ----- */
    flower: (opts = {}) => `
      <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style="width:${opts.size||72}px;height:auto;color:${opts.color||'currentColor'}">
        <g transform="translate(40 40)">
          ${[0,72,144,216,288].map(a=>`
            <path transform="rotate(${a})" d="M0,-6 C10,-32 -10,-32 0,-6 Z" fill="currentColor" fill-opacity="0.85" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/>
          `).join('')}
          <circle r="6" fill="#F5E27A" stroke="currentColor" stroke-width="0.8"/>
        </g>
      </svg>`,

    /* ----- FOUNTAIN PEN ----- */
    pen: (opts = {}) => `
      <svg viewBox="0 0 140 40" xmlns="http://www.w3.org/2000/svg" style="width:${opts.size||140}px;height:auto;color:${opts.color||'currentColor'}">
        <!-- barrel -->
        <rect x="40" y="14" width="80" height="12" rx="3" fill="currentColor" fill-opacity="0.85"/>
        <rect x="40" y="14" width="6" height="12" fill="currentColor"/>
        <!-- clip -->
        <rect x="90" y="10" width="4" height="22" rx="1" fill="currentColor" fill-opacity="0.85"/>
        <!-- nib -->
        <path d="M40,20 L18,20 L8,24 L18,28 L40,28 Z" fill="currentColor"/>
        <path d="M22,20 L22,28 M30,21 L30,27" stroke="#FFFDF7" stroke-width="0.8"/>
        <circle cx="22" cy="24" r="1.4" fill="#FFFDF7"/>
        <!-- cap -->
        <rect x="120" y="12" width="14" height="16" rx="2" fill="currentColor" fill-opacity="0.9"/>
      </svg>`,

    /* ----- PENCIL ----- */
    pencil: (opts = {}) => `
      <svg viewBox="0 0 140 36" xmlns="http://www.w3.org/2000/svg" style="width:${opts.size||130}px;height:auto;color:${opts.color||'currentColor'}">
        <rect x="22" y="10" width="92" height="16" rx="1" fill="${opts.barrel||'#F5C8A0'}" stroke="currentColor" stroke-width="1"/>
        <rect x="22" y="10" width="92" height="3" fill="rgba(0,0,0,0.10)"/>
        <path d="M22,10 L8,18 L22,26 Z" fill="#3A332C" stroke="currentColor" stroke-width="1"/>
        <path d="M14,18 L8,18 L4,18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <rect x="114" y="10" width="10" height="16" fill="${opts.metal||'#D9C8A8'}" stroke="currentColor" stroke-width="1"/>
        <rect x="124" y="10" width="12" height="16" rx="1" fill="${opts.eraser||'#ED9DAE'}" stroke="currentColor" stroke-width="1"/>
      </svg>`,

    /* ----- PAPER CLIP ----- */
    clip: (opts = {}) => `
      <svg viewBox="0 0 40 80" xmlns="http://www.w3.org/2000/svg" style="width:${opts.size||34}px;height:auto;color:${opts.color||'currentColor'}">
        <path d="M12,8 L12,60 C12,68 28,68 28,60 L28,18 C28,12 18,12 18,18 L18,54"
              fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>
      </svg>`,

    /* ----- SCISSORS ----- */
    scissors: (opts = {}) => `
      <svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" style="width:${opts.size||72}px;height:auto;color:${opts.color||'currentColor'}">
        <line x1="44" y1="40" x2="92" y2="14" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        <line x1="44" y1="40" x2="92" y2="66" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        <circle cx="22" cy="22" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
        <circle cx="22" cy="58" r="10" fill="none" stroke="currentColor" stroke-width="3"/>
        <line x1="30" y1="28" x2="44" y2="40" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        <line x1="30" y1="52" x2="44" y2="40" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        <circle cx="44" cy="40" r="3" fill="currentColor"/>
      </svg>`,

    /* ----- STAMP (round ink stamp) ----- */
    stamp: (opts = {}) => `
      <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" style="width:${opts.size||60}px;height:auto;color:${opts.color||'currentColor'}">
        <circle cx="40" cy="40" r="32" fill="none" stroke="currentColor" stroke-width="3"/>
        <circle cx="40" cy="40" r="24" fill="none" stroke="currentColor" stroke-width="1.5"/>
        <text x="40" y="34" text-anchor="middle" font-family="Caveat, cursive" font-size="14" fill="currentColor" font-weight="700">${opts.text||'origami'}</text>
        <text x="40" y="50" text-anchor="middle" font-family="Caveat, cursive" font-size="11" fill="currentColor">★ approved ★</text>
      </svg>`,

    /* ----- BRUSH STROKE UNDERLINE ----- */
    brush: (opts = {}) => `
      <svg viewBox="0 0 200 24" xmlns="http://www.w3.org/2000/svg" style="width:${opts.size||200}px;height:auto;color:${opts.color||'currentColor'}">
        <path d="M4,12 C40,4 80,18 120,10 C150,4 180,16 196,10" fill="none" stroke="currentColor" stroke-width="${opts.weight||7}" stroke-linecap="round" stroke-opacity="0.85"/>
        <path d="M8,16 C40,12 84,20 130,14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-opacity="0.5"/>
      </svg>`,

    /* ----- SCRIBBLED ARROW (down-right) ----- */
    arrow: (opts = {}) => `
      <svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg" style="width:${opts.size||100}px;height:auto;color:${opts.color||'currentColor'}">
        <path d="M8,12 C30,32 14,52 50,56 C80,60 86,76 96,84"
              fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M96,84 L86,76 M96,84 L92,72" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
      </svg>`,

    /* ----- SCRIBBLED ARROW (curve right) ----- */
    arrowRight: (opts = {}) => `
      <svg viewBox="0 0 140 40" xmlns="http://www.w3.org/2000/svg" style="width:${opts.size||120}px;height:auto;color:${opts.color||'currentColor'}">
        <path d="M4,28 C40,4 96,4 130,20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <path d="M130,20 L118,18 M130,20 L122,28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>`,

    /* ----- STAR (hand-drawn) ----- */
    star: (opts = {}) => `
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width:${opts.size||22}px;height:auto;color:${opts.color||'currentColor'}">
        <path d="M12,2.5 L14.4,8.5 L20.6,9.2 L15.9,13.4 L17.4,19.8 L12,16.3 L6.6,19.8 L8.1,13.4 L3.4,9.2 L9.6,8.5 Z"
              fill="${opts.fill||'currentColor'}" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
      </svg>`,

    /* ----- HEART (hand-drawn) ----- */
    heart: (opts = {}) => `
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width:${opts.size||22}px;height:auto;color:${opts.color||'currentColor'}">
        <path d="M12,21 C5,16 2,12 2,8 C2,5 4,3 7,3 C9,3 11,4 12,6 C13,4 15,3 17,3 C20,3 22,5 22,8 C22,12 19,16 12,21 Z" fill="${opts.fill||'currentColor'}" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
      </svg>`,

    /* ----- WASHI TAPE STRIP (decorative) ----- */
    tape: (opts = {}) => `
      <svg viewBox="0 0 200 32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style="width:${opts.size||200}px;height:32px;display:block;">
        <defs>
          <pattern id="washi-${opts.id||0}" x="0" y="0" width="20" height="32" patternUnits="userSpaceOnUse">
            <rect width="20" height="32" fill="${opts.color||'rgba(245,226,122,0.78)'}"/>
            <rect x="0" width="2" height="32" fill="rgba(255,255,255,0.3)"/>
            <rect x="8" width="1" height="32" fill="rgba(255,255,255,0.18)"/>
          </pattern>
        </defs>
        <rect width="200" height="32" fill="url(#washi-${opts.id||0})" opacity="0.92"/>
      </svg>`,

    /* ----- NOTEBOOK SPIRAL BIND ROW ----- */
    spiral: (opts = {}) => {
      const n = opts.holes || 8;
      const w = opts.width || 320;
      const step = w / n;
      return `
      <svg viewBox="0 0 ${w} 32" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:32px;display:block;color:${opts.color||'currentColor'}">
        ${Array.from({length: n}, (_, i) => `
          <ellipse cx="${step/2 + i*step}" cy="16" rx="6" ry="10" fill="none" stroke="currentColor" stroke-width="1.6"/>
          <ellipse cx="${step/2 + i*step}" cy="16" rx="2.4" ry="6" fill="${opts.bg||'#FBF7EE'}"/>
        `).join('')}
      </svg>`;
    },

    /* ----- FOLDED PAPER CORNER (decorative dog-ear) ----- */
    fold: (opts = {}) => `
      <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" style="width:${opts.size||50}px;height:auto;color:${opts.color||'currentColor'}">
        <path d="M0,0 L60,0 L60,40 L40,60 L0,60 Z" fill="${opts.fill||'currentColor'}" fill-opacity="0.06" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.30"/>
        <path d="M60,40 L40,60 L40,40 Z" fill="${opts.fill||'currentColor'}" fill-opacity="0.20" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.35"/>
        <path d="M60,40 L40,40" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.35"/>
      </svg>`,

    /* ----- ENVELOPE ----- */
    envelope: (opts = {}) => `
      <svg viewBox="0 0 80 56" xmlns="http://www.w3.org/2000/svg" style="width:${opts.size||72}px;height:auto;color:${opts.color||'currentColor'}">
        <rect x="4" y="8" width="72" height="44" rx="3" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.4"/>
        <path d="M4,12 L40,34 L76,12" fill="none" stroke="currentColor" stroke-width="1.4"/>
        <path d="M4,52 L30,30 M76,52 L50,30" stroke="currentColor" stroke-width="1.4" fill="none"/>
      </svg>`,

    /* ----- CHERRY BLOSSOM (5 petals, small) ----- */
    sakura: (opts = {}) => `
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" style="width:${opts.size||32}px;height:auto;color:${opts.color||'#ED9DAE'}">
        <g transform="translate(20 20)">
          ${[0,72,144,216,288].map(a=>`
            <path transform="rotate(${a})" d="M0,-4 C6,-16 -6,-16 0,-4 Z" fill="currentColor" stroke="currentColor" stroke-width="0.6" stroke-linejoin="round"/>
          `).join('')}
          <circle r="2" fill="#F5E27A"/>
        </g>
      </svg>`,

    /* ----- LEAF ----- */
    leaf: (opts = {}) => `
      <svg viewBox="0 0 40 60" xmlns="http://www.w3.org/2000/svg" style="width:${opts.size||32}px;height:auto;color:${opts.color||'currentColor'}">
        <path d="M20,4 C36,16 36,44 20,56 C4,44 4,16 20,4 Z" fill="currentColor" fill-opacity="0.78" stroke="currentColor" stroke-width="1"/>
        <path d="M20,4 L20,56" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.5"/>
      </svg>`,

    /* ----- DASHED CONNECTOR PATH ----- */
    dashes: (opts = {}) => `
      <svg viewBox="0 0 120 20" xmlns="http://www.w3.org/2000/svg" style="width:${opts.size||120}px;height:20px;color:${opts.color||'currentColor'}">
        <path d="M2,10 L118,10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 7"/>
      </svg>`,

    /* ----- TINY CONFETTI PIECE (assorted) ----- */
    confettiPieces: (opts = {}) => {
      const palette = opts.palette || ['#ED9DAE','#A2C181','#F5B98A','#B7A7D7','#F5E27A','#4A6B8A'];
      const count = opts.count || 24;
      return Array.from({length: count}, (_, i) => {
        const c = palette[i % palette.length];
        const left = Math.random() * 100;
        const delay = Math.random() * 1.6;
        const dur = 3 + Math.random() * 3;
        const rot = Math.random() * 360;
        const w = 6 + Math.random() * 8;
        const h = 8 + Math.random() * 10;
        const shape = i % 3;
        const piece = shape === 0
          ? `<rect width="${w}" height="${h}" fill="${c}" transform="rotate(${rot} ${w/2} ${h/2})"/>`
          : shape === 1
          ? `<circle cx="${w/2}" cy="${w/2}" r="${w/2.5}" fill="${c}"/>`
          : `<polygon points="0,${h} ${w/2},0 ${w},${h}" fill="${c}" transform="rotate(${rot} ${w/2} ${h/2})"/>`;
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" style="position:absolute;top:-40px;left:${left}%;width:${w}px;height:${h}px;animation:confettiFall ${dur}s ${delay}s linear infinite">${piece}</svg>`;
      }).join('');
    },

    /* ----- ICON SET (line icons for nav, fields, etc) ----- */
    icon: (name, opts = {}) => {
      const s = opts.size || 18;
      const w = opts.weight || 1.7;
      const base = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" style="width:${s}px;height:${s}px"`;
      const icons = {
        home: `<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>`,
        forms: `<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>`,
        analytics: `<path d="M4 19V5"/><path d="M4 19h16"/><rect x="7" y="11" width="3" height="6"/><rect x="12" y="8" width="3" height="9"/><rect x="17" y="14" width="3" height="3"/>`,
        templates: `<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>`,
        themes: `<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18M3 12h18"/>`,
        settings: `<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>`,
        plus: `<path d="M12 5v14M5 12h14"/>`,
        check: `<path d="M5 12l5 5 9-11"/>`,
        x: `<path d="M6 6l12 12M18 6L6 18"/>`,
        edit: `<path d="M11 4H4v16h16v-7"/><path d="M18.5 2.5a2 2 0 0 1 3 3L12 15l-4 1 1-4z"/>`,
        trash: `<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M6 6l1 14h10l1-14"/>`,
        share: `<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>`,
        copy: `<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>`,
        eye: `<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>`,
        bell: `<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21a2 2 0 0 0 4 0"/>`,
        search: `<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>`,
        filter: `<path d="M3 5h18l-7 9v6l-4-2v-4z"/>`,
        download: `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>`,
        upload: `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M17 8l-5-5-5 5"/><path d="M12 3v12"/>`,
        sun: `<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>`,
        moon: `<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>`,
        sliders: `<path d="M4 21V14M4 10V3M12 21V12M12 8V3M20 21v-5M20 12V3"/><circle cx="4" cy="12" r="1.6"/><circle cx="12" cy="10" r="1.6"/><circle cx="20" cy="14" r="1.6"/>`,
        chevron: `<path d="M9 6l6 6-6 6"/>`,
        chevronDown: `<path d="M6 9l6 6 6-6"/>`,
        arrow: `<path d="M5 12h14M13 5l7 7-7 7"/>`,
        arrowLeft: `<path d="M19 12H5M12 19l-7-7 7-7"/>`,
        drag: `<circle cx="9" cy="6" r="1.4" fill="currentColor"/><circle cx="9" cy="12" r="1.4" fill="currentColor"/><circle cx="9" cy="18" r="1.4" fill="currentColor"/><circle cx="15" cy="6" r="1.4" fill="currentColor"/><circle cx="15" cy="12" r="1.4" fill="currentColor"/><circle cx="15" cy="18" r="1.4" fill="currentColor"/>`,
        mail: `<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>`,
        lock: `<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>`,
        user: `<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>`,
        globe: `<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18"/>`,
        link: `<path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/>`,
        sparkles: `<path d="M12 3l1.6 4.6L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.4z"/><path d="M19 16l.8 2.4L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.4-.8z"/>`,
        layers: `<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5M3 18l9 5 9-5"/>`,
        wand: `<path d="M15 4l5 5L9 20H4v-5z"/><path d="M14 5l5 5"/>`,
        zap: `<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>`,
        text: `<path d="M5 4h14M12 4v16M9 20h6"/>`,
        align: `<path d="M3 6h18M3 12h12M3 18h18"/>`,
        list: `<path d="M9 6h12M9 12h12M9 18h12"/><circle cx="4" cy="6" r="1.2" fill="currentColor"/><circle cx="4" cy="12" r="1.2" fill="currentColor"/><circle cx="4" cy="18" r="1.2" fill="currentColor"/>`,
        calendar: `<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/>`,
        phone: `<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 13 13 0 0 0 .7 2.8 2 2 0 0 1-.5 2L8 9.6a16 16 0 0 0 6 6l1.1-1.4a2 2 0 0 1 2-.5 13 13 0 0 0 2.8.7 2 2 0 0 1 1.7 2z"/>`,
        hash: `<path d="M4 9h16M4 15h16M10 3l-2 18M16 3l-2 18"/>`,
        toggleLeft: `<rect x="3" y="7" width="18" height="10" rx="5"/><circle cx="8" cy="12" r="2.4" fill="currentColor"/>`,
        toggleRight: `<rect x="3" y="7" width="18" height="10" rx="5"/><circle cx="16" cy="12" r="2.4" fill="currentColor"/>`,
        star: `<path d="M12 2.5l2.7 6.4 6.9.6-5.2 4.7 1.6 6.7L12 17.3 5.9 21l1.6-6.7-5.2-4.7 6.9-.6z"/>`,
        play: `<polygon points="6,4 22,12 6,20" fill="currentColor" stroke="none"/>`,
        clock: `<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>`,
      };
      return `<svg ${base}>${icons[name] || icons.plus}</svg>`;
    },
  };

  /* ---------- AUTO-MOUNT via data-deco attribute ---------- */
  function mount(root = document) {
    root.querySelectorAll('[data-deco]:not([data-deco-mounted])').forEach(el => {
      const name = el.dataset.deco;
      const opts = {};
      for (const a of el.attributes) {
        if (a.name.startsWith('data-opt-')) {
          opts[a.name.slice(9)] = isNaN(a.value) ? a.value : Number(a.value);
        }
      }
      if (Deco[name]) {
        el.innerHTML = Deco[name](opts);
        el.dataset.decoMounted = '1';
      } else if (name.startsWith('icon-')) {
        el.innerHTML = Deco.icon(name.slice(5), opts);
        el.dataset.decoMounted = '1';
      }
    });
  }

  window.Deco = Deco;
  window.mountDeco = mount;
  if (document.readyState !== 'loading') mount();
  else document.addEventListener('DOMContentLoaded', () => mount());
})();
