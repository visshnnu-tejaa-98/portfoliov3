/* ============================================================
   ORIGAMI · App Shell
   - Persists theme + tweaks across pages via localStorage
   - Implements the host Tweaks-panel protocol
   - Provides a top-right floating control cluster on every page
   ============================================================ */

(function () {
  const STORAGE_KEY = 'origami-tweaks-v1';

  const DEFAULTS = {
    theme: 'light',           // light | dark
    palette: 'coral',         // coral | sakura | matcha | indigo | lavender | peach
    headingFont: 'caveat',    // caveat | kalam | shadows | yuji | nanum | patrick
    texture: 'med',           // off | low | med | high
    rotation: 'gentle',       // none | gentle | playful
    formTheme: 'minimal',     // minimal | anime | gaming | cyberpunk | hacker | space | movies | retro | startup
  };

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return { ...DEFAULTS, ...(raw ? JSON.parse(raw) : {}) };
    } catch { return { ...DEFAULTS }; }
  }

  function save(state) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
  }

  let state = load();

  function apply() {
    const html = document.documentElement;
    html.dataset.theme = state.theme;
    html.dataset.palette = state.palette;
    html.dataset.headingFont = state.headingFont;
    html.dataset.texture = state.texture;
    html.dataset.rotation = state.rotation;
    html.dataset.formTheme = state.formTheme;
    save(state);
    document.dispatchEvent(new CustomEvent('origami:tweaks', { detail: state }));
  }

  function set(patch) {
    state = { ...state, ...patch };
    apply();
    renderPanel();
    renderQuickBar();
  }

  /* ===========================================================
     QUICK BAR (always visible) — theme toggle + breakpoint hint
     =========================================================== */
  let quickBarEl = null;
  function ensureQuickBar() {
    if (quickBarEl) return quickBarEl;
    const bar = document.createElement('div');
    bar.id = 'origami-quickbar';
    bar.innerHTML = `
      <style>
        #origami-quickbar {
          position: fixed; right: 16px; bottom: 16px; z-index: 70;
          display: inline-flex; gap: 6px; padding: 6px;
          background: var(--surface-card);
          border: 1px solid var(--rule-line);
          border-radius: 14px;
          box-shadow: var(--shadow-paper-2);
          font-family: var(--font-body);
        }
        #origami-quickbar button {
          width: 34px; height: 34px;
          display: grid; place-items: center;
          background: transparent;
          border: 0; border-radius: 10px;
          color: var(--ink-2);
          cursor: pointer;
          transition: background 180ms, color 180ms;
        }
        #origami-quickbar button:hover { background: var(--bg-elevated); color: var(--ink-1); }
        #origami-quickbar button[data-active="true"] { background: var(--accent-soft); color: var(--accent-deep); }
        #origami-quickbar .qsep { width: 1px; background: var(--rule-line); margin: 4px 2px; }
        #origami-quickbar .qhome { width: auto; padding: 0 10px; font-weight: 600; font-size: 0.8rem; gap: 6px; display: inline-flex; align-items: center; }
      </style>
      <a href="index.html" class="qhome" title="Origami home" style="text-decoration:none;color:var(--ink-1);display:inline-flex;align-items:center;padding:0 10px;font-weight:600;font-size:0.82rem;gap:6px;">
        <span style="color:var(--accent-deep);font-family:var(--font-hand);font-size:1.4rem;line-height:1;">✶</span>
        <span style="font-family:var(--font-hand);font-size:1.2rem;line-height:1;">origami</span>
      </a>
      <div class="qsep"></div>
      <button data-qb="theme" title="Toggle dark mode">
        ${state.theme === 'dark' ? Deco.icon('sun') : Deco.icon('moon')}
      </button>
      <button data-qb="tweaks" title="Open Tweaks">${Deco.icon('sliders')}</button>
    `;
    document.body.appendChild(bar);
    bar.querySelector('[data-qb="theme"]').addEventListener('click', () => {
      set({ theme: state.theme === 'dark' ? 'light' : 'dark' });
    });
    bar.querySelector('[data-qb="tweaks"]').addEventListener('click', () => togglePanel());
    quickBarEl = bar;
    return bar;
  }

  function renderQuickBar() {
    if (!quickBarEl) return;
    quickBarEl.querySelector('[data-qb="theme"]').innerHTML =
      state.theme === 'dark' ? Deco.icon('sun') : Deco.icon('moon');
  }

  /* ===========================================================
     TWEAKS PANEL — full controls
     =========================================================== */
  let panelEl = null;
  let panelOpen = false;

  function togglePanel(open) {
    panelOpen = open !== undefined ? open : !panelOpen;
    if (panelOpen) {
      ensurePanel();
      panelEl.classList.add('open');
      window.parent.postMessage({ type: '__activate_edit_mode' }, '*');
    } else if (panelEl) {
      panelEl.classList.remove('open');
      window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*');
    }
  }

  function paletteSwatch(name, color) {
    return `
      <button class="ot-swatch" data-tweak="palette" data-value="${name}" title="${name}" data-active="${state.palette === name}">
        <span style="background:${color}"></span>
      </button>`;
  }

  function fontPreview(name, family) {
    return `
      <button class="ot-fontpick" data-tweak="headingFont" data-value="${name}" data-active="${state.headingFont === name}">
        <span style="font-family:${family}, cursive">handcrafted</span>
        <em>${name}</em>
      </button>`;
  }

  function segBtn(tweak, value, label) {
    return `<button class="ot-seg" data-tweak="${tweak}" data-value="${value}" data-active="${state[tweak] === value}">${label}</button>`;
  }

  const FORM_THEMES = [
    ['minimal', 'Minimal', '#FBF7EE', '#1F1B17'],
    ['anime', 'Anime', '#FFD9E5', '#FF5C8A'],
    ['cyberpunk', 'Cyberpunk', '#0F0A1F', '#FF1F8E'],
    ['gaming', 'Gaming', '#0E1A2E', '#3DDC97'],
    ['hacker', 'Hacker', '#0A0F0A', '#54FF6A'],
    ['space', 'Space', '#0A0E22', '#7BB8FF'],
    ['movies', 'Movies', '#1A0F08', '#E5B85C'],
    ['retro', 'Retro OS', '#D5CFC2', '#1F4FB0'],
    ['startup', 'Startup', '#FFFFFF', '#1F1F1F'],
  ];

  function ensurePanel() {
    if (panelEl) return panelEl;
    const p = document.createElement('div');
    p.id = 'origami-tweaks';
    p.innerHTML = `
      <style>
        #origami-tweaks {
          position: fixed; top: 16px; right: 16px; z-index: 90;
          width: 320px; max-width: calc(100vw - 32px);
          max-height: calc(100vh - 32px);
          background: var(--surface-card);
          border: 1px solid var(--rule-line);
          border-radius: 16px 18px 16px 18px / 18px 16px 18px 16px;
          box-shadow: var(--shadow-paper-3);
          font-family: var(--font-body);
          transform: translateX(calc(100% + 32px));
          opacity: 0;
          transition: transform 320ms cubic-bezier(.2,.7,.2,1), opacity 200ms;
          overflow: hidden;
          display: flex; flex-direction: column;
        }
        #origami-tweaks.open { transform: translateX(0); opacity: 1; }
        #origami-tweaks .ot-head {
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 16px;
          border-bottom: 1px dashed var(--rule-line);
        }
        #origami-tweaks .ot-title { font-family: var(--font-hand); font-size: 1.6rem; line-height: 1; }
        #origami-tweaks .ot-close {
          width: 28px; height: 28px; display: grid; place-items: center;
          border: 0; background: transparent; border-radius: 8px; cursor: pointer; color: var(--ink-3);
        }
        #origami-tweaks .ot-close:hover { background: var(--bg-elevated); color: var(--ink-1); }
        #origami-tweaks .ot-body { padding: 12px 16px 18px; overflow-y: auto; }
        #origami-tweaks .ot-section { margin-top: 14px; }
        #origami-tweaks .ot-section:first-child { margin-top: 4px; }
        #origami-tweaks .ot-label {
          font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--ink-3); margin-bottom: 8px;
          display: flex; align-items: center; gap: 8px;
        }
        #origami-tweaks .ot-row { display: flex; flex-wrap: wrap; gap: 6px; }
        #origami-tweaks .ot-swatch {
          width: 34px; height: 34px; padding: 3px;
          background: var(--bg-elevated);
          border: 1.5px solid var(--rule-line); border-radius: 10px;
          cursor: pointer; transition: all 180ms;
        }
        #origami-tweaks .ot-swatch span {
          display: block; width: 100%; height: 100%; border-radius: 7px;
        }
        #origami-tweaks .ot-swatch[data-active="true"] { border-color: var(--ink-1); transform: translateY(-1px); }
        #origami-tweaks .ot-seg {
          flex: 1; min-width: 0;
          padding: 6px 8px; font-size: 0.78rem; font-weight: 600;
          background: var(--bg-elevated); color: var(--ink-3);
          border: 1px solid var(--rule-line); border-radius: 8px;
          cursor: pointer; transition: all 180ms;
        }
        #origami-tweaks .ot-seg[data-active="true"] { background: var(--ink-1); color: var(--paper-0); border-color: var(--ink-1); }
        #origami-tweaks .ot-fontgrid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
        #origami-tweaks .ot-fontpick {
          padding: 8px 10px;
          background: var(--bg-elevated);
          border: 1px solid var(--rule-line); border-radius: 10px;
          cursor: pointer; text-align: left;
          display: flex; flex-direction: column; gap: 2px;
          transition: all 180ms;
        }
        #origami-tweaks .ot-fontpick span {
          font-size: 1.1rem; color: var(--ink-1); line-height: 1.1;
        }
        #origami-tweaks .ot-fontpick em {
          font-style: normal; font-size: 0.7rem; color: var(--ink-3); font-family: var(--font-body);
        }
        #origami-tweaks .ot-fontpick[data-active="true"] {
          background: var(--accent-soft); border-color: var(--accent-deep);
        }
        #origami-tweaks .ot-fontpick[data-active="true"] em { color: var(--accent-deep); }
        #origami-tweaks .ot-themes { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }
        #origami-tweaks .ot-theme {
          padding: 0; border: 1.5px solid var(--rule-line); border-radius: 10px;
          overflow: hidden; cursor: pointer;
          background: transparent;
          transition: all 180ms;
        }
        #origami-tweaks .ot-theme .sw { height: 36px; display: flex; }
        #origami-tweaks .ot-theme .sw .a { flex: 1.6; }
        #origami-tweaks .ot-theme .sw .b { flex: 1; }
        #origami-tweaks .ot-theme em {
          display: block; padding: 4px 6px; font-style: normal;
          font-size: 0.7rem; font-weight: 600; color: var(--ink-2);
          background: var(--bg-elevated);
        }
        #origami-tweaks .ot-theme[data-active="true"] { border-color: var(--ink-1); transform: translateY(-1px); }
        #origami-tweaks .ot-foot {
          padding: 10px 16px 14px;
          border-top: 1px dashed var(--rule-line);
          font-size: 0.72rem; color: var(--ink-3);
          font-style: italic;
        }
        @media (max-width: 520px) {
          #origami-tweaks { width: calc(100vw - 24px); right: 12px; top: 12px; }
        }
      </style>
      <div class="ot-head">
        <div>
          <div class="ot-title">Tweaks</div>
          <div style="font-size:0.74rem;color:var(--ink-3);margin-top:-2px">remix the paper</div>
        </div>
        <button class="ot-close" aria-label="Close">${Deco.icon('x')}</button>
      </div>
      <div class="ot-body">
        <div class="ot-section">
          <div class="ot-label">Mode</div>
          <div class="ot-row">
            ${segBtn('theme','light','☀ Light')}
            ${segBtn('theme','dark','☾ Dark')}
          </div>
        </div>
        <div class="ot-section">
          <div class="ot-label">Accent palette</div>
          <div class="ot-row">
            ${paletteSwatch('coral', '#E68872')}
            ${paletteSwatch('sakura', '#ED9DAE')}
            ${paletteSwatch('matcha', '#A2C181')}
            ${paletteSwatch('indigo', '#4A6B8A')}
            ${paletteSwatch('lavender', '#B7A7D7')}
            ${paletteSwatch('peach', '#F5B98A')}
          </div>
        </div>
        <div class="ot-section">
          <div class="ot-label">Heading font</div>
          <div class="ot-fontgrid">
            ${fontPreview('caveat', 'Caveat')}
            ${fontPreview('kalam', 'Kalam')}
            ${fontPreview('shadows', 'Shadows Into Light')}
            ${fontPreview('yuji', 'Yuji Mai')}
            ${fontPreview('nanum', 'Nanum Pen Script')}
            ${fontPreview('patrick', 'Patrick Hand')}
          </div>
        </div>
        <div class="ot-section">
          <div class="ot-label">Paper texture</div>
          <div class="ot-row">
            ${segBtn('texture','off','off')}
            ${segBtn('texture','low','low')}
            ${segBtn('texture','med','med')}
            ${segBtn('texture','high','high')}
          </div>
        </div>
        <div class="ot-section">
          <div class="ot-label">Card playfulness</div>
          <div class="ot-row">
            ${segBtn('rotation','none','flat')}
            ${segBtn('rotation','gentle','gentle')}
            ${segBtn('rotation','playful','playful')}
          </div>
        </div>
        <div class="ot-section">
          <div class="ot-label">Public form theme preview</div>
          <div class="ot-themes">
            ${FORM_THEMES.map(([n, lbl, bg, accent]) => `
              <button class="ot-theme" data-tweak="formTheme" data-value="${n}" data-active="${state.formTheme === n}">
                <div class="sw"><div class="a" style="background:${bg}"></div><div class="b" style="background:${accent}"></div></div>
                <em>${lbl}</em>
              </button>
            `).join('')}
          </div>
        </div>
      </div>
      <div class="ot-foot">All tweaks persist across pages. Reset by clearing browser storage.</div>
    `;
    document.body.appendChild(p);
    p.addEventListener('click', (e) => {
      const t = e.target.closest('[data-tweak]');
      if (t) {
        set({ [t.dataset.tweak]: t.dataset.value });
      }
      if (e.target.closest('.ot-close')) togglePanel(false);
    });
    panelEl = p;
    return p;
  }

  function renderPanel() {
    if (!panelEl) return;
    panelEl.querySelectorAll('[data-tweak]').forEach(el => {
      const k = el.dataset.tweak;
      el.dataset.active = state[k] === el.dataset.value ? 'true' : 'false';
    });
  }

  /* ===========================================================
     HOST PROTOCOL
     =========================================================== */
  window.addEventListener('message', (e) => {
    if (!e.data || !e.data.type) return;
    if (e.data.type === '__activate_edit_mode') togglePanel(true);
    if (e.data.type === '__deactivate_edit_mode') togglePanel(false);
  });

  /* ===========================================================
     INIT
     =========================================================== */
  function init() {
    apply();
    if (!document.body) return;
    // expose state read-only
    window.OrigamiTweaks = {
      get: () => ({ ...state }),
      set,
      togglePanel,
    };
    // mount chrome
    ensureQuickBar();
    renderQuickBar();
    // announce
    setTimeout(() => window.parent.postMessage({ type: '__edit_mode_available' }, '*'), 0);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
