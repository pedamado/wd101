/**
 * WD101 Unified Global Shell Controller (site-shell.js)
 * Provides consistent 5-item course navigation, accessible submenus & mobile drawer,
 * strict Light-default theme switching, PT/EN bilingual switching, and 4-View Sandbox controls
 * across all Hub, Guide, IxD, Demo Repository, Matrix, and Pattern pages.
 */
(function () {
  'use strict';

  // 1. Determine relative root prefix from script tag or html[data-root]
  function detectRootPrefix() {
    if (document.documentElement.hasAttribute('data-root')) {
      return document.documentElement.getAttribute('data-root');
    }
    const scripts = document.querySelectorAll('script[src*="site-shell.js"]');
    if (scripts.length > 0) {
      const src = scripts[scripts.length - 1].getAttribute('src') || '';
      const idx = src.indexOf('assets/js/site-shell.js');
      if (idx >= 0) {
        return src.slice(0, idx);
      }
    }
    return '';
  }

  const ROOT = detectRootPrefix();

  // Helpers for URL Query Parameters & Global Preferences
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

  // Cookie helpers with safe fallbacks
  function getCookie(name) {
    try {
      const match = document.cookie.match(new RegExp('(?:^|;\\s*)' + name.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') + '=([^;]+)'));
      return match ? decodeURIComponent(match[1]) : null;
    } catch (e) {
      return null;
    }
  }

  function setCookie(name, value, days = 365) {
    try {
      const maxAge = days * 86400;
      document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax`;
    } catch (e) {}
  }

  function deleteCookie(name) {
    try {
      document.cookie = `${name}=; path=/; max-age=0; SameSite=Lax`;
    } catch (e) {}
  }

  function parseTiers(val) {
    if (!val || val === 'all') return ['foundation', 'intermediate', 'advanced'];
    const parts = String(val).split(',').map(s => s.trim().toLowerCase());
    const valid = [];
    parts.forEach(p => {
      if (['foundation', 'foundational', 'begginer', 'beginner', '1'].includes(p)) valid.push('foundation');
      if (['intermediate', 'intermedio', 'medium', '2'].includes(p)) valid.push('intermediate');
      if (['advanced', 'avancado', 'expert', '3'].includes(p)) valid.push('advanced');
    });
    return valid.length > 0 ? Array.from(new Set(valid)) : ['foundation', 'intermediate', 'advanced'];
  }

  function formatTiers(tiersArr) {
    if (!tiersArr || tiersArr.length === 3) return 'all';
    return tiersArr.join(',');
  }

  // 2. Enforce Preferences Immediately (Priority: URL Param -> localStorage -> Cookie -> Default)
  const urlTier = getQueryParam('tier') || getQueryParam('difficulty');
  const storedTier = localStorage.getItem('wd101_tier');
  const cookieTier = getCookie('wd101_tier');
  const initialTiers = parseTiers(urlTier || storedTier || cookieTier || 'all');
  const initialTierStr = formatTiers(initialTiers);
  document.documentElement.setAttribute('data-tier', initialTierStr);
  localStorage.setItem('wd101_tier', initialTierStr);
  setCookie('wd101_tier', initialTierStr, 365);

  const urlTheme = getQueryParam('theme');
  const storedTheme = localStorage.getItem('wd101_theme');
  const cookieTheme = getCookie('wd101_theme');
  const initialTheme = (urlTheme === 'dark' || (!urlTheme && (storedTheme === 'dark' || cookieTheme === 'dark'))) ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', initialTheme);
  localStorage.setItem('wd101_theme', initialTheme);
  setCookie('wd101_theme', initialTheme, 365);

  const urlLang = getQueryParam('lang') || getQueryParam('language');
  const storedLang = localStorage.getItem('wd101_lang');
  const cookieLang = getCookie('wd101_lang');
  const initialLang = (urlLang === 'pt' || (!urlLang && (storedLang === 'pt' || cookieLang === 'pt'))) ? 'pt' : 'en';
  document.documentElement.setAttribute('lang', initialLang);
  localStorage.setItem('wd101_lang', initialLang);
  setCookie('wd101_lang', initialLang, 365);

  const storedAesthetic = localStorage.getItem('wd101_aesthetic');
  const cookieAesthetic = getCookie('wd101_aesthetic');
  const initialAesthetic = storedAesthetic || cookieAesthetic || 'airy';
  document.documentElement.setAttribute('data-aesthetic', initialAesthetic);

  // 3. Detect Active Section for Highlighting
  function detectActiveSection() {
    const p = window.location.pathname.toLowerCase();
    const h = window.location.hash.toLowerCase();

    if (p.endsWith('/matrix.html')) return 'matrix';
    if (
      p.endsWith('/ixd-principles.html') ||
      p.endsWith('/ux-laws.html') ||
      p.endsWith('/heuristics-guide.html') ||
      p.endsWith('/heuristic-checklist.html') ||
      p.endsWith('/project-documentation-guide.html') ||
      p.endsWith('/interaction-patterns.html') ||
      p.includes('/demos/patterns/')
    ) {
      return 'ixd';
    }
    if (
      (p.includes('/demos/') && !p.includes('/demos/patterns/')) ||
      p.includes('/starter-') ||
      p.endsWith('/design-system-boilerplate.html') ||
      p.endsWith('/css-path-transitions-guide.html')
    ) {
      return 'demos';
    }
    if (
      p.endsWith('/ex1-hello-warp-guide.html') ||
      p.endsWith('/ex2-guide.html') ||
      p.endsWith('/tp06-early-prototype-guide.html') ||
      p.includes('/tp06-responsive/assignment') ||
      p.includes('/tp11-integrated-responsive-project/guide.html') ||
      h === '#assignments'
    ) {
      return 'assignments';
    }
    return 'objectives';
  }

  // 4. Build Unified 5-Item Global Header Markup
  function buildHeaderHTML(active) {
    const r = ROOT;
    return `
      <div class="header-inner">
        <div class="brand">
          <a href="${r}index.html" class="brand-logo" aria-label="WD101 Home">WD<span>101</span></a>
          <span class="brand-meta">FBAUP Design 2026/27</span>
        </div>

        <nav class="site-nav" id="wd-primary-nav" aria-label="Primary">
          <ul class="wd-nav-list">
            <!-- 1. Learning Objectives & RWD -->
            <li class="wd-nav-item ${active === 'objectives' ? 'is-current' : ''}">
              <button type="button" class="wd-nav-trigger" aria-expanded="false" aria-haspopup="true">
                <span class="lang-pt">Objetivos &amp; RWD</span>
                <span class="lang-en">Objectives &amp; RWD</span>
                <span class="wd-nav-caret" aria-hidden="true">▾</span>
              </button>
              <ul class="wd-dropdown">
                <li class="wd-dropdown-label">
                  <span class="lang-pt">Mapa Curricular (6 Módulos)</span>
                  <span class="lang-en">Course Map (6 Modules)</span>
                </li>
                <li><a href="${r}index.html#study-goals"><span>🧭 <span class="lang-pt">Visão Geral &amp; Como Estudar RWD</span><span class="lang-en">Overview &amp; How to Study RWD</span></span></a></li>
                <li><hr class="wd-dropdown-divider"></li>
                <li><a href="${r}mobile-first-foundation.html"><span>🟢 <span class="lang-pt">1. Mentalidade Mobile-First</span><span class="lang-en">1. Mobile-First Mindset</span></span></a></li>
                <li><a href="${r}intrinsic-sizing-box-model.html"><span>🔵 <span class="lang-pt">2. Dimensionamento Intrínseco &amp; Box Model</span><span class="lang-en">2. Intrinsic Sizing &amp; Box Model</span></span></a></li>
                <li><a href="${r}fluid-variable-typography.html"><span>🔵 <span class="lang-pt">3. Tipografia Fluida &amp; Variável</span><span class="lang-en">3. Fluid &amp; Variable Typography</span></span></a></li>
                <li><a href="${r}design-system.html"><span>🟣 <span class="lang-pt">4. Sistema de Design &amp; Atomic CSS</span><span class="lang-en">4. Design System &amp; Atomic CSS</span></span></a></li>
                <li><a href="${r}ai-mentor-guide.html"><span>🤖 <span class="lang-pt">5. Mentor IA &amp; Antigravity ADE</span><span class="lang-en">5. AI Mentor &amp; Antigravity ADE</span></span></a></li>
                <li><a href="${r}to-infinity-and-beyond.html"><span>🚀 <span class="lang-pt">6. Pós-WD101 &amp; Programação Criativa</span><span class="lang-en">6. Post-WD101 &amp; Creative Coding</span></span></a></li>
              </ul>
            </li>

            <!-- 2. Assignments & Pedagogical Progression -->
            <li class="wd-nav-item ${active === 'assignments' ? 'is-current' : ''}">
              <button type="button" class="wd-nav-trigger" aria-expanded="false" aria-haspopup="true">
                <span class="lang-pt">Enunciados</span>
                <span class="lang-en">Assignments</span>
                <span class="wd-nav-caret" aria-hidden="true">▾</span>
              </button>
              <ul class="wd-dropdown">
                <li class="wd-dropdown-label">
                  <span class="lang-pt">Progressão Pedagógica</span>
                  <span class="lang-en">Pedagogical Progression</span>
                </li>
                <li><a href="${r}index.html#assignments"><span>📐 <span class="lang-pt">Todos os Enunciados &amp; Breakpoints</span><span class="lang-en">All Assignments &amp; Breakpoints</span></span></a></li>
                <li><hr class="wd-dropdown-divider"></li>
                <li><a href="${r}ex1-hello-warp-guide.html"><span>🟢 <span class="lang-pt">EX1: Hello Warp! (Fluxo &amp; Semântica)</span><span class="lang-en">EX1: Hello Warp! (Normal Flow)</span></span></a></li>
                <li><a href="${r}ex2-guide.html"><span>🔵 <span class="lang-pt">EX2: Media, Reset &amp; Box Model</span><span class="lang-en">EX2: Media, Reset &amp; Box Model</span></span></a></li>
                <li><a href="${r}tp06-early-prototype-guide.html"><span>🔵 <span class="lang-pt">Projeto Fase 1: Protótipo (Semanas 5–8)</span><span class="lang-en">Project Stage 1: Early Prototype (Weeks 5–8)</span></span></a></li>
                <li><a href="${r}demos/tp11-integrated-responsive-project/GUIDE.html"><span>🟣 <span class="lang-pt">Projeto Fase 2: Capstone (Semanas 9–13)</span><span class="lang-en">Project Stage 2: Capstone (Weeks 9–13)</span></span></a></li>
              </ul>
            </li>

            <!-- 3. Interaction Design (Consolidated Principles, Laws, Heuristics, UX Docs, Patterns) -->
            <li class="wd-nav-item ${active === 'ixd' ? 'is-current' : ''}">
              <button type="button" class="wd-nav-trigger" aria-expanded="false" aria-haspopup="true">
                <span class="lang-pt">Design de Interação</span>
                <span class="lang-en">Interaction Design</span>
                <span class="wd-nav-caret" aria-hidden="true">▾</span>
              </button>
              <ul class="wd-dropdown">
                <li class="wd-dropdown-label">
                  <span class="lang-pt">Teoria, Crítica &amp; Padrões</span>
                  <span class="lang-en">Theory, Critique &amp; Patterns</span>
                </li>
                <li><a href="${r}ixd-principles.html"><span>🧭 <span class="lang-pt">Princípios de IxD &amp; Anti-Padrões</span><span class="lang-en">IxD Principles &amp; Anti-Patterns</span></span></a></li>
                <li><a href="${r}ux-laws.html"><span>🧠 <span class="lang-pt">30 Leis de UX (Explorador)</span><span class="lang-en">30 Laws of UX (Explorer)</span></span></a></li>
                <li><a href="${r}heuristics-guide.html"><span>📖 <span class="lang-pt">18 Heurísticas de Usabilidade</span><span class="lang-en">18 Usability Heuristics</span></span></a></li>
                <li><a href="${r}heuristic-checklist.html"><span>📋 <span class="lang-pt">Checklist de Avaliação Heurística</span><span class="lang-en">Heuristic Evaluation Checklist</span></span></a></li>
                <li><a href="${r}project-documentation-guide.html"><span>🗂️ <span class="lang-pt">Documentação UX &amp; Testes</span><span class="lang-en">UX Documentation &amp; Testing</span></span></a></li>
                <li><hr class="wd-dropdown-divider"></li>
                <li><a href="${r}interaction-patterns.html"><span>✨ <span class="lang-pt">Catálogo Global: 142 Padrões Web</span><span class="lang-en">Global Catalog: 142 Web Patterns</span></span></a></li>
              </ul>
            </li>

            <!-- 4. Demos & Boilerplates Repository -->
            <li class="wd-nav-item wd-nav-item--demos ${active === 'demos' ? 'is-current' : ''}">
              <button type="button" class="wd-nav-trigger" aria-expanded="false" aria-haspopup="true">
                <span class="lang-pt">Demos &amp; Boilerplates</span>
                <span class="lang-en">Demos &amp; Boilerplates</span>
                <span class="wd-nav-caret" aria-hidden="true">▾</span>
              </button>
              <div class="wd-dropdown wd-dropdown-mega">
                <!-- Coluna 1: Boilerplates & Resoluções dos Enunciados -->
                <div class="wd-dropdown-col">
                  <div class="wd-dropdown-label">
                    <span class="lang-pt">Repositório &amp; Modelos Base</span>
                    <span class="lang-en">Repository &amp; Starters</span>
                  </div>
                  <ul class="wd-dropdown-list">
                    <li>
                      <a href="${r}demos/index.html">
                        <span>🏛️ <span class="lang-pt">Repositório Central (Visão Geral)</span><span class="lang-en">Central Demos Hub (Overview)</span></span>
                      </a>
                    </li>
                    <li><hr class="wd-dropdown-divider"></li>
                    <li class="wd-dropdown-sublabel">
                      <span class="lang-pt">1. Starter Boilerplates</span>
                      <span class="lang-en">1. Starter Boilerplates</span>
                    </li>
                    <li>
                      <a href="${r}starter-mobile-first/index.html">
                        <span>🟢 <span class="lang-pt">Boilerplate Mobile-First (EX1)</span><span class="lang-en">Mobile-First Starter (EX1)</span></span>
                      </a>
                    </li>
                    <li>
                      <a href="${r}starter-intermediate-media-box/index.html">
                        <span>🔵 <span class="lang-pt">Boilerplate Media &amp; Box (EX2)</span><span class="lang-en">Media &amp; Box Starter (EX2)</span></span>
                      </a>
                    </li>
                    <li>
                      <a href="${r}starter-advanced-project/index.html">
                        <span>🟣 <span class="lang-pt">Boilerplate DRUMTIKS '26 Capstone</span><span class="lang-en">DRUMTIKS '26 Capstone Starter</span></span>
                      </a>
                    </li>
                    <li>
                      <a href="${r}design-system-boilerplate.html">
                        <span>🧬 <span class="lang-pt">Boilerplate Design System &amp; Tokens</span><span class="lang-en">Design System &amp; Tokens Starter</span></span>
                      </a>
                    </li>
                    <li><hr class="wd-dropdown-divider"></li>
                    <li class="wd-dropdown-sublabel">
                      <span class="lang-pt">2. Resoluções dos Enunciados</span>
                      <span class="lang-en">2. Assignment Resolutions</span>
                    </li>
                    <li>
                      <a href="${r}demos/hello-warp/index.html">
                        <span>🟢 <span class="lang-pt">EX1: Hello Warp! (Semântica)</span><span class="lang-en">EX1: Hello Warp! (Semantic)</span></span>
                      </a>
                    </li>
                    <li>
                      <a href="${r}demos/ex2-media-box-model/index.html">
                        <span>🔵 <span class="lang-pt">EX2: Media &amp; Box Model (DJ Warp)</span><span class="lang-en">EX2: Media &amp; Box Model (DJ Warp)</span></span>
                      </a>
                    </li>
                    <li>
                      <a href="${r}demos/tp06-responsive/index.html">
                        <span>🔵 <span class="lang-pt">Projeto Fase 1: Protótipo (Sem. 5–8)</span><span class="lang-en">Stage 1: Early Prototype (W5–8)</span></span>
                      </a>
                    </li>
                    <li>
                      <a href="${r}demos/tp11-integrated-responsive-project/index.html">
                        <span>🟣 <span class="lang-pt">Projeto Fase 2: Capstone (Sem. 9–13)</span><span class="lang-en">Stage 2: Capstone Portal (W9–13)</span></span>
                      </a>
                    </li>
                  </ul>
                </div>

                <!-- Coluna 2: Masterclasses & Sandboxes -->
                <div class="wd-dropdown-col">
                  <div class="wd-dropdown-label">
                    <span class="lang-pt">Masterclasses &amp; Sandboxes</span>
                    <span class="lang-en">Masterclasses &amp; Sandboxes</span>
                  </div>
                  <ul class="wd-dropdown-list">
                    <li class="wd-dropdown-sublabel">
                      <span class="lang-pt">3. Suites Técnicas Especializadas</span>
                      <span class="lang-en">3. Specialized Masterclasses</span>
                    </li>
                    <li>
                      <a href="${r}demos/tp11-css-flexbox-grid/index.html">
                        <span>🔵 <span class="lang-pt">Flexbox 1D &amp; CSS Grid 2D</span><span class="lang-en">1D Flexbox &amp; 2D CSS Grid</span></span>
                      </a>
                    </li>
                    <li>
                      <a href="${r}demos/wireframe-cards-demo.html">
                        <span>🩻 <span class="lang-pt">Contentor &amp; 2 Cartões Wireframe</span><span class="lang-en">Container &amp; 2 Wireframe Cards</span></span>
                      </a>
                    </li>
                    <li>
                      <a href="${r}demos/tp11-variables-transitions-animations/index.html">
                        <span>🟣 <span class="lang-pt">Tokens, Transições &amp; Vinis 3D</span><span class="lang-en">Tokens, Transitions &amp; 3D Vinyl</span></span>
                      </a>
                    </li>
                    <li>
                      <a href="${r}demos/tp12-zero-js-swipe-state-machine/index.html">
                        <span>🟣 <span class="lang-pt">Navegação Swipe Zero-JS (3 Técnicas)</span><span class="lang-en">Zero-JS Swipe Navigation (3 Techs)</span></span>
                      </a>
                    </li>
                    <li>
                      <a href="${r}demos/tp13-animated-section-css-path-transitions/index.html">
                        <span>🟣 <span class="lang-pt">Morfismos de Caminho CSS &amp; Motion</span><span class="lang-en">CSS Path Transitions &amp; Motion</span></span>
                      </a>
                    </li>
                    <li>
                      <a href="${r}demos/tp11-integrated-responsive-project/accordion-showcase.html">
                        <span>⚡ <span class="lang-pt">Suite Mestre de Acordeões Pure CSS</span><span class="lang-en">Master Pure CSS Accordion Suite</span></span>
                      </a>
                    </li>
                    <li>
                      <a href="${r}demos/tp09-css-shape-animations/index.html">
                        <span>🎯 <span class="lang-pt">Formas Bézier &amp; Scroll Lab (TP09)</span><span class="lang-en">Bézier Shapes &amp; Scroll Lab (TP09)</span></span>
                      </a>
                    </li>
                    <li>
                      <a href="${r}demos/tp09-drumtiks-festival/index.html">
                        <span>🎪 <span class="lang-pt">Portal Festival DRUMTIKS (TP09)</span><span class="lang-en">DRUMTIKS Multi-Page Portal (TP09)</span></span>
                      </a>
                    </li>
                    <li><hr class="wd-dropdown-divider"></li>
                    <li class="wd-dropdown-sublabel">
                      <span class="lang-pt">4. Sandboxes DRUMTIKS '26 &amp; Padrões</span>
                      <span class="lang-en">4. DRUMTIKS '26 Sandboxes</span>
                    </li>
                    <li>
                      <a href="${r}demos/index.html#core-patterns">
                        <span>✨ <span class="lang-pt">13 Sandboxes 4-Vistas DRUMTIKS</span><span class="lang-en">13 Core DRUMTIKS Sandboxes</span></span>
                      </a>
                    </li>
                    <li>
                      <a href="${r}demos/patterns/index.html">
                        <span>🌐 <span class="lang-pt">Explorador de 142 Padrões Isolados</span><span class="lang-en">142 Isolated Patterns Explorer</span></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <!-- 5. HTML & CSS Matrix (Final Top-Level Option) -->
            <li class="wd-nav-item ${active === 'matrix' ? 'is-current' : ''}">
              <a href="${r}matrix.html" class="${active === 'matrix' ? 'active' : ''}">
                <span class="lang-pt">Matriz HTML &amp; CSS</span>
                <span class="lang-en">HTML &amp; CSS Matrix</span>
              </a>
            </li>
          </ul>
        </nav>

        <div class="header-controls">
          <button type="button" id="wd-mobile-menu-btn" class="btn-control wd-mobile-menu-btn" aria-expanded="false" aria-controls="wd-primary-nav">
            ☰ <span class="lang-pt">Menu</span><span class="lang-en">Menu</span>
          </button>
          <!-- Global Pedagogical Tier Selector -->
          <div class="tier-dropdown-wrapper" id="wd-tier-dropdown">
            <button type="button" id="tier-toggle-btn" class="btn-control" aria-haspopup="true" aria-expanded="false" aria-label="Filtrar por Nível Pedagógico / Filter by Learning Tier">
              <span id="tier-btn-label">Tier: All</span>
            </button>
            <div id="tier-dropdown-menu" class="tier-dropdown-menu" role="menu" aria-label="Opções de Nível Pedagógico">
              <div style="padding:0.35rem 0.85rem; font-size:10px; font-family:var(--font-mono); color:var(--text-muted); text-transform:uppercase;">
                <span class="lang-pt">Combinar Níveis Pedagógicos:</span>
                <span class="lang-en">Combine Pedagogical Tiers:</span>
              </div>
              <button type="button" role="menuitemcheckbox" class="tier-menu-item tier-checkbox" data-tier="foundation" aria-checked="true">
                <span style="display:flex;align-items:center;"><span class="tier-check-box">✓</span> 🟢 <span class="lang-pt">Fundação (Iniciante)</span><span class="lang-en">Foundation (Beginner)</span></span>
              </button>
              <button type="button" role="menuitemcheckbox" class="tier-menu-item tier-checkbox" data-tier="intermediate" aria-checked="true">
                <span style="display:flex;align-items:center;"><span class="tier-check-box">✓</span> 🟡 <span class="lang-pt">Intermédio</span><span class="lang-en">Intermediate</span></span>
              </button>
              <button type="button" role="menuitemcheckbox" class="tier-menu-item tier-checkbox" data-tier="advanced" aria-checked="true">
                <span style="display:flex;align-items:center;"><span class="tier-check-box">✓</span> 🔴 <span class="lang-pt">Avançado</span><span class="lang-en">Advanced</span></span>
              </button>
              <hr style="border:none; border-top:1px solid var(--border-color); margin:var(--space-1) 0;">
              <button type="button" role="menuitem" class="tier-menu-item" data-tier-action="all">
                <span class="lang-pt">✓ Selecionar Todos (Pleno)</span>
                <span class="lang-en">✓ Select All (Full View)</span>
              </button>
              <button type="button" role="menuitem" class="tier-menu-item tier-menu-reset" data-tier-action="reset">
                <span class="lang-pt">↺ Repor Preferências</span>
                <span class="lang-en">↺ Reset Preferences</span>
              </button>
            </div>
          </div>
          <button type="button" id="aesthetic-toggle-btn" class="btn-control" aria-label="Alternar Modelo Visual / Switch Design Template">Moderno</button>
          <button type="button" id="lang-toggle-btn" class="btn-control" aria-label="Alternar Idioma / Switch Language">EN</button>
          <button type="button" id="theme-toggle-btn" class="btn-control" aria-label="Alternar Tema / Switch Theme">Escuro</button>
        </div>
      </div>
    `;
  }

  // 5. Update Language, Theme & Tier Buttons State
  function syncControlLabels() {
    const activeTiers = parseTiers(document.documentElement.getAttribute('data-tier') || 'all');
    const tierLabelSpan = document.getElementById('tier-btn-label');
    const lang = document.documentElement.getAttribute('lang') === 'en' ? 'en' : 'pt';

    if (tierLabelSpan) {
      if (activeTiers.length === 3) {
        tierLabelSpan.textContent = lang === 'pt' ? 'Nível: Todos (3)' : 'Tier: All (3)';
      } else if (activeTiers.length === 1) {
        const t = activeTiers[0];
        if (t === 'foundation') tierLabelSpan.textContent = lang === 'pt' ? '🟢 Fundação' : '🟢 Foundation';
        else if (t === 'intermediate') tierLabelSpan.textContent = lang === 'pt' ? '🟡 Intermédio' : '🟡 Intermediate';
        else if (t === 'advanced') tierLabelSpan.textContent = lang === 'pt' ? '🔴 Avançado' : '🔴 Advanced';
      } else if (activeTiers.length === 2) {
        if (activeTiers.includes('foundation') && activeTiers.includes('intermediate')) {
          tierLabelSpan.textContent = lang === 'pt' ? '🟢🟡 Fund.+Inter.' : '🟢🟡 Found.+Inter.';
        } else if (activeTiers.includes('intermediate') && activeTiers.includes('advanced')) {
          tierLabelSpan.textContent = lang === 'pt' ? '🟡🔴 Inter.+Avanç.' : '🟡🔴 Inter.+Adv.';
        } else {
          tierLabelSpan.textContent = lang === 'pt' ? '🟢🔴 Fund.+Avanç.' : '🟢🔴 Found.+Adv.';
        }
      }
    }

    document.querySelectorAll('.tier-menu-item[data-tier]').forEach(item => {
      const t = item.dataset.tier;
      const isActive = activeTiers.includes(t);
      item.classList.toggle('is-active', isActive);
      item.setAttribute('aria-checked', isActive ? 'true' : 'false');
      const box = item.querySelector('.tier-check-box');
      if (box) box.textContent = isActive ? '✓' : '';
    });
    const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const aesthetic = document.documentElement.getAttribute('data-aesthetic') || 'airy';

    // 1. Language Toggle: shows target language to switch into ("EN" or "PT")
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
      const text = lang === 'pt' ? 'EN' : 'PT';
      langBtn.textContent = text;
      langBtn.setAttribute(
        'aria-label',
        lang === 'pt' ? 'Mudar idioma para Inglês' : 'Switch language to Portuguese'
      );
      langBtn.setAttribute(
        'title',
        lang === 'pt' ? 'Mudar idioma para Inglês (EN)' : 'Switch language to Portuguese (PT)'
      );
    }

    // 2. Theme Toggle: shows target theme to switch into (in Light -> "Escuro" / "Dark"; in Dark -> "Claro" / "Light")
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      const isDark = theme === 'dark';
      const text = isDark
        ? (lang === 'pt' ? 'Claro' : 'Light')
        : (lang === 'pt' ? 'Escuro' : 'Dark');
      themeBtn.textContent = text;
      themeBtn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      themeBtn.setAttribute(
        'title',
        lang === 'pt'
          ? (isDark ? 'Mudar para tema Claro' : 'Mudar para tema Escuro')
          : (isDark ? 'Switch to Light theme' : 'Switch to Dark theme')
      );
      themeBtn.setAttribute(
        'aria-label',
        lang === 'pt'
          ? (isDark ? 'Mudar para tema Claro' : 'Mudar para tema Escuro')
          : (isDark ? 'Switch to Light theme' : 'Switch to Dark theme')
      );
    }

    // 3. Aesthetic Toggle: shows target aesthetic to switch into:
    // In Airy (Spacious) -> "Moderno" (PT) / "Modern" (EN) to switch to Swiss
    // In Swiss -> "Aberto" (PT) / "Spacious" (EN) to switch to Airy
    const aestheticBtn = document.getElementById('aesthetic-toggle-btn');
    if (aestheticBtn) {
      const isAiry = aesthetic === 'airy';
      const text = isAiry
        ? (lang === 'pt' ? 'Moderno' : 'Modern')
        : (lang === 'pt' ? 'Aberto' : 'Spacious');
      aestheticBtn.textContent = text;
      aestheticBtn.setAttribute('aria-pressed', isAiry ? 'true' : 'false');
      aestheticBtn.setAttribute(
        'title',
        lang === 'pt'
          ? (isAiry ? 'Mudar para modelo Moderno (Suíço / Compacto)' : 'Mudar para modelo Aberto (Espaçoso)')
          : (isAiry ? 'Switch to Modern template (Swiss / Compact)' : 'Switch to Spacious template')
      );
      aestheticBtn.setAttribute(
        'aria-label',
        lang === 'pt'
          ? (isAiry ? 'Mudar para modelo Moderno' : 'Mudar para modelo Aberto')
          : (isAiry ? 'Switch to Modern template' : 'Switch to Spacious template')
      );
    }
  }

  function applyAesthetic(nextAesthetic) {
    const aesthetic = nextAesthetic === 'swiss' ? 'swiss' : 'airy';
    localStorage.setItem('wd101_aesthetic', aesthetic);
    setCookie('wd101_aesthetic', aesthetic, 365);
    document.documentElement.setAttribute('data-aesthetic', aesthetic);
    syncControlLabels();
    window.dispatchEvent(new CustomEvent('wd101:aestheticchange', { detail: { aesthetic } }));
  }

  function applyLanguage(nextLang) {
    const lang = nextLang === 'en' ? 'en' : 'pt';
    localStorage.setItem('wd101_lang', lang);
    setCookie('wd101_lang', lang, 365);
    document.documentElement.setAttribute('lang', lang);

    if (window.I18N && typeof window.I18N.setLang === 'function') {
      if (window.I18N.currentLang !== lang) {
        window.I18N.setLang(lang);
      } else {
        window.I18N.updateUI();
      }
    }
    syncControlLabels();
    window.dispatchEvent(new CustomEvent('wd101:langchange', { detail: { lang } }));
  }

  function applyTiers(tiersArr, updateURL = true) {
    const cleanTiers = parseTiers(Array.isArray(tiersArr) ? tiersArr.join(',') : tiersArr);
    const tierStr = formatTiers(cleanTiers);
    localStorage.setItem('wd101_tier', tierStr);
    setCookie('wd101_tier', tierStr, 365);
    document.documentElement.setAttribute('data-tier', tierStr);
    if (updateURL) setQueryParam('tier', tierStr);
    syncControlLabels();
    window.dispatchEvent(new CustomEvent('wd101:tierchange', { detail: { tiers: cleanTiers, tierStr: tierStr } }));
  }

  function toggleTier(tier) {
    const current = parseTiers(document.documentElement.getAttribute('data-tier') || 'all');
    let next;
    if (current.length === 3) {
      // When all 3 are active (full compendium view), clicking one tier isolates it for focused study
      next = [tier];
    } else if (current.includes(tier)) {
      if (current.length === 1) {
        // If unchecking the only active tier, cycle back to full compendium view
        next = ['foundation', 'intermediate', 'advanced'];
      } else {
        next = current.filter(t => t !== tier);
      }
    } else {
      next = [...current, tier];
    }
    applyTiers(next);
  }

  function resetPreferences() {
    localStorage.removeItem('wd101_tier');
    localStorage.removeItem('wd101_theme');
    localStorage.removeItem('wd101_lang');
    deleteCookie('wd101_tier');
    deleteCookie('wd101_theme');
    deleteCookie('wd101_lang');
    applyTiers(['foundation', 'intermediate', 'advanced'], true);
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

  function applyTheme(nextTheme) {
    const theme = nextTheme === 'dark' ? 'dark' : 'light';
    localStorage.setItem('wd101_theme', theme);
    setCookie('wd101_theme', theme, 365);
    document.documentElement.setAttribute('data-theme', theme);
    syncControlLabels();
    window.dispatchEvent(new CustomEvent('wd101:themechange', { detail: { theme } }));
  }

  // 6. Initialize Accessible Dropdowns & Mobile Drawer
  function initHeaderInteractions(header) {
    const items = Array.from(header.querySelectorAll('.wd-nav-item'));
    const triggers = Array.from(header.querySelectorAll('.wd-nav-trigger'));
    const mobileBtn = header.querySelector('#wd-mobile-menu-btn');

    function closeAllDropdowns(exceptItem) {
      items.forEach(item => {
        if (item !== exceptItem) {
          item.classList.remove('is-open');
          const btn = item.querySelector('.wd-nav-trigger');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    triggers.forEach(trigger => {
      const parentItem = trigger.closest('.wd-nav-item');
      const dropdown = parentItem ? parentItem.querySelector('.wd-dropdown') : null;
      if (!parentItem || !dropdown) return;

      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = parentItem.classList.contains('is-open');
        closeAllDropdowns(parentItem);
        parentItem.classList.toggle('is-open', !isOpen);
        trigger.setAttribute('aria-expanded', String(!isOpen));
      });

      trigger.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          closeAllDropdowns(parentItem);
          parentItem.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
          const firstLink = dropdown.querySelector('a');
          if (firstLink) firstLink.focus();
        } else if (e.key === 'Escape') {
          parentItem.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
        }
      });

      dropdown.addEventListener('keydown', (e) => {
        const links = Array.from(dropdown.querySelectorAll('a'));
        const idx = links.indexOf(document.activeElement);
        if (e.key === 'Escape') {
          e.preventDefault();
          e.stopPropagation();
          parentItem.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
          trigger.focus();
        } else if (e.key === 'ArrowDown' && links.length) {
          e.preventDefault();
          links[(idx + 1) % links.length].focus();
        } else if (e.key === 'ArrowUp' && links.length) {
          e.preventDefault();
          links[(idx - 1 + links.length) % links.length].focus();
        }
      });

      dropdown.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          closeAllDropdowns();
          header.classList.remove('nav-open');
          if (mobileBtn) mobileBtn.setAttribute('aria-expanded', 'false');
        });
      });
    });

    if (mobileBtn) {
      mobileBtn.addEventListener('click', () => {
        const nextOpen = !header.classList.contains('nav-open');
        header.classList.toggle('nav-open', nextOpen);
        mobileBtn.setAttribute('aria-expanded', String(nextOpen));
        if (!nextOpen) closeAllDropdowns();
      });
    }

    document.addEventListener('click', (e) => {
      if (!header.contains(e.target)) {
        closeAllDropdowns();
        header.classList.remove('nav-open');
        if (mobileBtn) mobileBtn.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllDropdowns();
        header.classList.remove('nav-open');
        if (mobileBtn) mobileBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Bind Language & Theme Buttons (prevent duplicate bindings via dataset flag)
    const langBtn = header.querySelector('#lang-toggle-btn');
    if (langBtn && !langBtn.dataset.wdBound) {
      langBtn.dataset.wdBound = 'true';
      langBtn.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        const curr = document.documentElement.getAttribute('lang') === 'en' ? 'en' : 'pt';
        applyLanguage(curr === 'pt' ? 'en' : 'pt');
      });
    }

    const aestheticBtn = header.querySelector('#aesthetic-toggle-btn');
    if (aestheticBtn && !aestheticBtn.dataset.wdBound) {
      aestheticBtn.dataset.wdBound = 'true';
      aestheticBtn.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        const curr = document.documentElement.getAttribute('data-aesthetic') || 'airy';
        applyAesthetic(curr === 'airy' ? 'swiss' : 'airy');
      });
    }

    const themeBtn = header.querySelector('#theme-toggle-btn');
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
          const t = item.dataset.tier;
          const action = item.dataset.tierAction;
          if (action === 'reset') {
            resetPreferences();
            tierMenu.classList.remove('is-open');
            tierBtn.setAttribute('aria-expanded', 'false');
          } else if (action === 'all') {
            applyTiers(['foundation', 'intermediate', 'advanced']);
          } else if (t) {
            toggleTier(t);
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
    }
  }

  // 7. Universal 4-View Sandbox Controller (.wd-sandbox)
  function initStaticSandboxes() {
    document.querySelectorAll('.wd-sandbox').forEach(sandbox => {
      if (sandbox.dataset.wdSandboxReady) return;
      sandbox.dataset.wdSandboxReady = 'true';

      const tabs = Array.from(sandbox.querySelectorAll('.tab-btn[data-tab]'));
      const previewPane = sandbox.querySelector('.wd-sandbox-preview');
      const htmlPane = sandbox.querySelector('.wd-sandbox-code[data-pane="html"]');
      const cssPane = sandbox.querySelector('.wd-sandbox-code[data-pane="css"]');

      tabs.forEach(btn => {
        btn.addEventListener('click', () => {
          const target = btn.getAttribute('data-tab');
          tabs.forEach(b => {
            b.classList.toggle('active', b === btn);
            b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
          });

          sandbox.classList.toggle('is-xray-mode', target === 'xray');

          if (previewPane) previewPane.style.display = (target === 'preview' || target === 'xray') ? 'block' : 'none';
          if (htmlPane) htmlPane.style.display = target === 'html' ? 'block' : 'none';
          if (cssPane) cssPane.style.display = target === 'css' ? 'block' : 'none';
        });
      });

      sandbox.querySelectorAll('.btn-copy-code').forEach(copyBtn => {
        copyBtn.addEventListener('click', () => {
          const pre = copyBtn.closest('.wd-sandbox-code')?.querySelector('code');
          const text = pre ? pre.textContent : (copyBtn.getAttribute('data-code') || '');
          if (!text) return;
          navigator.clipboard.writeText(text).then(() => {
            const lang = document.documentElement.getAttribute('lang') === 'en' ? 'en' : 'pt';
            const orig = copyBtn.innerHTML;
            copyBtn.textContent = lang === 'pt' ? '✓ Copiado!' : '✓ Copied!';
            setTimeout(() => { copyBtn.innerHTML = orig; }, 1400);
          });
        });
      });
    });
  }

  // 8. Boot Shell on DOMContentLoaded
  function bootShell() {
    // Ensure Skip Link exists at top of body
    const mainEl = document.querySelector('main');
    if (mainEl && !mainEl.id) {
      mainEl.id = 'main-content';
    }
    if (mainEl && !document.querySelector('.skip-link')) {
      const skip = document.createElement('a');
      skip.href = `#${mainEl.id}`;
      skip.className = 'skip-link';
      skip.innerHTML = '<span class="lang-pt">Saltar para o conteúdo principal</span><span class="lang-en">Skip to main content</span>';
      document.body.insertBefore(skip, document.body.firstChild);
    }

    // Mount or upgrade .site-header unless opted out with data-custom-header="true"
    let header = document.querySelector('header.site-header');
    if (!header && !document.body.hasAttribute('data-no-global-header')) {
      const legacyHeader = document.querySelector('.doc-topbar, .bp-header, .top-nav, .page-header, .top-bar, .roadmap-header');
      header = document.createElement('header');
      header.className = 'site-header';
      header.setAttribute('role', 'banner');
      if (legacyHeader) {
        legacyHeader.replaceWith(header);
      } else {
        const firstMain = document.querySelector('main') || document.body.firstChild;
        document.body.insertBefore(header, firstMain);
      }
    }

    if (header && !header.hasAttribute('data-static-shell')) {
      header.innerHTML = buildHeaderHTML(detectActiveSection());
    }

    if (header) {
      initHeaderInteractions(header);
    }

    // Sync initial language, theme & aesthetic across I18N and buttons
    const curTheme = localStorage.getItem('wd101_theme') || getCookie('wd101_theme') || 'light';
    const curLang = localStorage.getItem('wd101_lang') || getCookie('wd101_lang') || 'en';
    const curAesthetic = localStorage.getItem('wd101_aesthetic') || getCookie('wd101_aesthetic') || 'airy';
    const curTierStr = document.documentElement.getAttribute('data-tier') || 'all';
    const curTiers = parseTiers(curTierStr);

    applyTheme(curTheme === 'dark' ? 'dark' : 'light');
    applyLanguage(curLang === 'en' ? 'en' : 'pt');
    applyAesthetic(curAesthetic);
    syncControlLabels();

    // Dispatch initial events so pages listening to wd101:tierchange receive state immediately on load
    window.dispatchEvent(new CustomEvent('wd101:tierchange', {
      detail: { tiers: curTiers, tierStr: curTierStr, isInitial: true }
    }));

    initStaticSandboxes();
    initTOCSpy();
  }

  /**
   * Scroll spy for sticky aside-toc-card navigation across complex guides
   */
  function initTOCSpy() {
    const toc = document.querySelector('.aside-toc');
    if (!toc) return;

    const links = Array.from(toc.querySelectorAll('a.aside-toc-link[href^="#"]'));
    if (!links.length) return;

    const targets = [];
    links.forEach(link => {
      const id = link.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        targets.push({ id, el, link });
      }
    });

    if (!targets.length) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const match = targets.find(t => t.el === entry.target);
            if (match) {
              links.forEach(l => l.classList.remove('active'));
              match.link.classList.add('active');
            }
          }
        });
      }, {
        rootMargin: '-10% 0px -70% 0px',
        threshold: 0
      });

      targets.forEach(t => observer.observe(t.el));
    }
  }

  window.WD101Shell = {
    root: ROOT,
    applyLanguage,
    applyTheme,
    applyAesthetic,
    applyTiers,
    toggleTier,
    resetPreferences,
    getCookie,
    setCookie,
    deleteCookie,
    getPreference: (key, fallback = null) => {
      const urlVal = getQueryParam(key);
      if (urlVal !== null) return urlVal;
      const stored = localStorage.getItem('wd101_' + key);
      if (stored !== null) return stored;
      const cookieVal = getCookie('wd101_' + key);
      if (cookieVal !== null) return cookieVal;
      return fallback;
    },
    getTier: () => document.documentElement.getAttribute('data-tier') || 'all',
    getTiers: () => parseTiers(document.documentElement.getAttribute('data-tier') || 'all'),
    isTierActive: (t) => parseTiers(document.documentElement.getAttribute('data-tier') || 'all').includes(t),
    setTier: (t) => applyTiers([t]),
    setTiers: applyTiers,
    getLang: () => document.documentElement.getAttribute('lang') || 'en',
    setLang: applyLanguage,
    getTheme: () => document.documentElement.getAttribute('data-theme') || 'light',
    setTheme: applyTheme,
    syncControlLabels,
    initStaticSandboxes,
    initTOCSpy
  };
  window.WD101 = window.WD101Shell;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootShell);
  } else {
    bootShell();
  }
})();
