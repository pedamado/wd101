import re

with open('learning-scaffold/assets/js/site-shell.js', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Update Section 2
s2_old = """  // 2. Enforce Light Default & Saved Language Immediately
  const initialTheme = localStorage.getItem('wd101_theme') === 'dark' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', initialTheme);

  const initialLang = localStorage.getItem('wd101_lang') === 'en' ? 'en' : 'pt';
  document.documentElement.setAttribute('lang', initialLang);

  const initialAesthetic = localStorage.getItem('wd101_aesthetic') || 'airy';
  document.documentElement.setAttribute('data-aesthetic', initialAesthetic);"""

s2_new = """  // Helpers for URL Query Parameters & Global Preferences
  function getQueryParam(key) {
    try {
      const p = new URLSearchParams(window.location.search);
      return p.get(key);
    } catch (e) {
      return null;
    }
  }

  function setQueryParam(key, value) {
    try {
      const url = new URL(window.location.href);
      if (value && value !== 'all') {
        url.searchParams.set(key, value);
      } else {
        url.searchParams.delete(key);
      }
      window.history.replaceState({}, '', url.toString());
    } catch (e) {}
  }

  function normalizeTier(val) {
    if (!val) return 'all';
    const v = String(val).toLowerCase().trim();
    if (['foundation', 'foundational', 'begginer', 'beginner', '1'].includes(v)) return 'foundation';
    if (['intermediate', 'intermedio', 'medium', '2'].includes(v)) return 'intermediate';
    if (['advanced', 'avancado', 'expert', '3'].includes(v)) return 'advanced';
    return 'all';
  }

  // 2. Enforce Preferences Immediately (Priority: URL Param -> localStorage -> Default)
  const urlTier = getQueryParam('tier') || getQueryParam('difficulty');
  const storedTier = localStorage.getItem('wd101_tier');
  const initialTier = normalizeTier(urlTier || storedTier || 'all');
  document.documentElement.setAttribute('data-tier', initialTier);
  localStorage.setItem('wd101_tier', initialTier);

  const urlTheme = getQueryParam('theme');
  const storedTheme = localStorage.getItem('wd101_theme');
  const initialTheme = (urlTheme === 'dark' || (!urlTheme && storedTheme === 'dark')) ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', initialTheme);
  localStorage.setItem('wd101_theme', initialTheme);

  const urlLang = getQueryParam('lang') || getQueryParam('language');
  const storedLang = localStorage.getItem('wd101_lang');
  const initialLang = (urlLang === 'pt' || (!urlLang && storedLang === 'pt')) ? 'pt' : 'en';
  document.documentElement.setAttribute('lang', initialLang);
  localStorage.setItem('wd101_lang', initialLang);

  const initialAesthetic = localStorage.getItem('wd101_aesthetic') || 'airy';
  document.documentElement.setAttribute('data-aesthetic', initialAesthetic);"""

assert s2_old in text, 's2_old not found'
text = text.replace(s2_old, s2_new, 1)

# 2. Update header-controls in renderShell
controls_old = """        <div class="header-controls">
          <button type="button" id="wd-mobile-menu-btn" class="btn-control wd-mobile-menu-btn" aria-expanded="false" aria-controls="wd-primary-nav">
            ☰ <span class="lang-pt">Menu</span><span class="lang-en">Menu</span>
          </button>
          <button type="button" id="aesthetic-toggle-btn" class="btn-control" aria-label="Alternar Modelo Visual / Switch Design Template">Moderno</button>
          <button type="button" id="lang-toggle-btn" class="btn-control" aria-label="Alternar Idioma / Switch Language">EN</button>
          <button type="button" id="theme-toggle-btn" class="btn-control" aria-label="Alternar Tema / Switch Theme">Escuro</button>
        </div>"""

controls_new = """        <div class="header-controls">
          <button type="button" id="wd-mobile-menu-btn" class="btn-control wd-mobile-menu-btn" aria-expanded="false" aria-controls="wd-primary-nav">
            ☰ <span class="lang-pt">Menu</span><span class="lang-en">Menu</span>
          </button>
          <!-- Global Pedagogical Tier Selector -->
          <div class="tier-dropdown-wrapper" id="wd-tier-dropdown">
            <button type="button" id="tier-toggle-btn" class="btn-control" aria-haspopup="true" aria-expanded="false" aria-label="Filtrar por Nível Pedagógico / Filter by Learning Tier">
              <span id="tier-btn-label">Tier: All</span>
            </button>
            <div id="tier-dropdown-menu" class="tier-dropdown-menu" role="menu" aria-label="Opções de Nível Pedagógico">
              <button type="button" role="menuitem" class="tier-menu-item" data-tier="all">
                <span class="lang-pt">Todos os Níveis (Pleno)</span>
                <span class="lang-en">All Tiers (Full View)</span>
              </button>
              <button type="button" role="menuitem" class="tier-menu-item" data-tier="foundation">
                <span class="lang-pt">🟢 Fundação (Iniciante)</span>
                <span class="lang-en">🟢 Foundation (Beginner)</span>
              </button>
              <button type="button" role="menuitem" class="tier-menu-item" data-tier="intermediate">
                <span class="lang-pt">🟡 Intermédio</span>
                <span class="lang-en">🟡 Intermediate</span>
              </button>
              <button type="button" role="menuitem" class="tier-menu-item" data-tier="advanced">
                <span class="lang-pt">🔴 Avançado</span>
                <span class="lang-en">🔴 Advanced</span>
              </button>
              <hr style="border:none; border-top:1px solid var(--border-color); margin:var(--space-1) 0;">
              <button type="button" role="menuitem" class="tier-menu-item tier-menu-reset" data-tier="reset">
                <span class="lang-pt">↺ Repor Preferências</span>
                <span class="lang-en">↺ Reset Preferences</span>
              </button>
            </div>
          </div>
          <button type="button" id="aesthetic-toggle-btn" class="btn-control" aria-label="Alternar Modelo Visual / Switch Design Template">Moderno</button>
          <button type="button" id="lang-toggle-btn" class="btn-control" aria-label="Alternar Idioma / Switch Language">EN</button>
          <button type="button" id="theme-toggle-btn" class="btn-control" aria-label="Alternar Tema / Switch Theme">Escuro</button>
        </div>"""

assert controls_old in text, 'controls_old not found'
text = text.replace(controls_old, controls_new, 1)

# 3. Add TIER_BUTTON_LABELS & update syncControlLabels
sync_old = """  // 5. Update Language & Theme Buttons State
  function syncControlLabels() {"""

sync_new = """  const TIER_BUTTON_LABELS = {
    all: { pt: 'Nível: Todos', en: 'Tier: All' },
    foundation: { pt: '🟢 Fundação', en: '🟢 Foundation' },
    intermediate: { pt: '🟡 Intermédio', en: '🟡 Intermediate' },
    advanced: { pt: '🔴 Avançado', en: '🔴 Advanced' }
  };

  // 5. Update Language, Theme & Tier Buttons State
  function syncControlLabels() {
    const currentTier = document.documentElement.getAttribute('data-tier') || 'all';
    const tierLabelSpan = document.getElementById('tier-btn-label');
    const lang = document.documentElement.getAttribute('lang') === 'en' ? 'en' : 'pt';
    if (tierLabelSpan) {
      const tLabels = TIER_BUTTON_LABELS[currentTier] || TIER_BUTTON_LABELS.all;
      tierLabelSpan.textContent = lang === 'pt' ? tLabels.pt : tLabels.en;
    }
    document.querySelectorAll('.tier-menu-item[data-tier]').forEach(item => {
      item.classList.toggle('is-active', item.dataset.tier === currentTier);
    });"""

assert sync_old in text, 'sync_old not found'
text = text.replace(sync_old, sync_new, 1)

# 4. Add applyTier and resetPreferences
apply_pos = text.find('  function applyTheme(nextTheme) {')
assert apply_pos > 0, 'applyTheme not found'

tier_fns = """  function applyTier(nextTier, updateURL = true) {
    const tier = normalizeTier(nextTier);
    localStorage.setItem('wd101_tier', tier);
    document.documentElement.setAttribute('data-tier', tier);
    if (updateURL) setQueryParam('tier', tier);
    syncControlLabels();
    window.dispatchEvent(new CustomEvent('wd101:tierchange', { detail: { tier } }));
  }

  function resetPreferences() {
    applyTier('all', true);
    applyTheme('light');
    applyLanguage('en');
    try {
      const url = new URL(window.location.href);
      url.searchParams.delete('tier');
      url.searchParams.delete('difficulty');
      url.searchParams.delete('theme');
      url.searchParams.delete('lang');
      url.searchParams.delete('language');
      window.history.replaceState({}, '', url.toString());
    } catch (e) {}
    window.dispatchEvent(new CustomEvent('wd101:resetpreferences'));
  }

"""
text = text[:apply_pos] + tier_fns + text[apply_pos:]

# 5. Bind Tier dropdown in bootShell
bind_theme_old = """    const themeBtn = header.querySelector('#theme-toggle-btn');
    if (themeBtn && !themeBtn.dataset.wdBound) {
      themeBtn.dataset.wdBound = 'true';
      themeBtn.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        const curr = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        applyTheme(curr === 'dark' ? 'light' : 'dark');
      });
    }"""

bind_tier_new = """    const themeBtn = header.querySelector('#theme-toggle-btn');
    if (themeBtn && !themeBtn.dataset.wdBound) {
      themeBtn.dataset.wdBound = 'true';
      themeBtn.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        const curr = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        applyTheme(curr === 'dark' ? 'light' : 'dark');
      });
    }

    // Bind Tier Dropdown Toggle & Options
    const tierDropdown = header.querySelector('#wd-tier-dropdown');
    const tierBtn = header.querySelector('#tier-toggle-btn');
    const tierMenu = header.querySelector('#tier-dropdown-menu');

    if (tierBtn && tierMenu && !tierBtn.dataset.wdBound) {
      tierBtn.dataset.wdBound = 'true';
      tierBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = tierMenu.classList.toggle('is-open');
        tierBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

      tierMenu.querySelectorAll('.tier-menu-item').forEach(item => {
        item.addEventListener('click', (e) => {
          e.stopPropagation();
          tierMenu.classList.remove('is-open');
          tierBtn.setAttribute('aria-expanded', 'false');
          const t = item.dataset.tier;
          if (t === 'reset') {
            resetPreferences();
          } else {
            applyTier(t);
          }
        });
      });

      document.addEventListener('click', (e) => {
        if (tierDropdown && !tierDropdown.contains(e.target)) {
          tierMenu.classList.remove('is-open');
          tierBtn.setAttribute('aria-expanded', 'false');
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && tierMenu.classList.contains('is-open')) {
          tierMenu.classList.remove('is-open');
          tierBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }"""

assert bind_theme_old in text, 'bind_theme_old not found'
text = text.replace(bind_theme_old, bind_tier_new, 1)

# 6. Expose in window.WD101Shell and window.WD101
export_old = """  window.WD101Shell = {
    root: ROOT,
    applyLanguage,
    applyTheme,
    applyAesthetic,
    syncControlLabels,
    initStaticSandboxes,
    initTOCSpy
  };"""

export_new = """  window.WD101Shell = {
    root: ROOT,
    applyLanguage,
    applyTheme,
    applyAesthetic,
    applyTier,
    resetPreferences,
    getTier: () => document.documentElement.getAttribute('data-tier') || 'all',
    setTier: applyTier,
    getLang: () => document.documentElement.getAttribute('lang') || 'en',
    setLang: applyLanguage,
    getTheme: () => document.documentElement.getAttribute('data-theme') || 'light',
    setTheme: applyTheme,
    syncControlLabels,
    initStaticSandboxes,
    initTOCSpy
  };
  window.WD101 = window.WD101Shell;"""

assert export_old in text, 'export_old not found'
text = text.replace(export_old, export_new, 1)

with open('learning-scaffold/assets/js/site-shell.js', 'w', encoding='utf-8') as f:
    f.write(text)

print('Updated site-shell.js successfully')
