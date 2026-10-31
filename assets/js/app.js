/**
 * Core Application Controller for WD101 Learning Scaffold
 * Vanilla JavaScript (Zero-dependency, Modernist Architecture)
 * Supports Universal Unique IDs and Query Routing (?id, ?pat, ?cat, ?lev, ?ass, ?proj)
 */

document.addEventListener('DOMContentLoaded', () => {
  const store = window.SCAFFOLD_DATA;
  if (!store) {
    console.error("Data store not found. Please ensure data-store.js is loaded.");
    return;
  }

  // --- 1. Global State ---
  const state = {
    searchQuery: '',
    typeFilter: 'all',
    tierFilter: 'all',
    statusFilter: 'all',
    categoryFilter: 'all',
    sortColumn: 'id',
    sortAsc: true
  };

  // --- 2. Element References ---
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const matrixSearch = document.getElementById('matrix-search');
  const filterType = document.getElementById('filter-type');
  const filterTier = document.getElementById('filter-tier');
  const filterStatus = document.getElementById('filter-status');
  const filterCategory = document.getElementById('filter-category');
  const matrixTbody = document.getElementById('matrix-tbody');
  const matrixCount = document.getElementById('matrix-count');
  const patternsContainer = document.getElementById('patterns-container');
  const assignmentsContainer = document.getElementById('assignments-container');

  // --- 3. Language & Theme Handlers ---
  window.updateThemeButtonState = function() {
    if (!themeToggleBtn) return;
    const current = document.documentElement.getAttribute('data-theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const isDark = current === 'dark';
    const lang = (window.I18N && window.I18N.currentLang) || 'pt';
    const label = isDark ? (lang === 'pt' ? 'Escuro' : 'Dark') : (lang === 'pt' ? 'Claro' : 'Light');
    const icon = isDark ? '🌙' : '☀';
    themeToggleBtn.innerHTML = `${icon} <span>${label}</span>`;
    themeToggleBtn.setAttribute('title', lang === 'pt' ? `Tema atual: ${label}. Clique para alternar.` : `Current theme: ${label}. Click to toggle.`);
  };

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('wd101_theme', next);
      window.updateThemeButtonState();
    });
    const savedTheme = localStorage.getItem('wd101_theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
    window.updateThemeButtonState();
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      window.I18N.toggleLang();
      window.updateThemeButtonState();
    });
  }

  // Populate Categories Filter
  window.populateCategoriesFilter = function() {
    if (!filterCategory || !store.categories) return;
    const currentVal = filterCategory.value;
    const lang = (window.I18N && window.I18N.currentLang) || 'pt';
    filterCategory.innerHTML = `<option value="all">${lang === 'pt' ? 'Todas as Categorias' : 'All Categories'}</option>`;
    store.categories.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat.id;
      opt.textContent = `${cat.num_id}. ${cat.title[lang] || cat.title.pt}`;
      filterCategory.appendChild(opt);
    });
    if (currentVal) filterCategory.value = currentVal;
  };
  window.populateCategoriesFilter();

  // --- 4. Render Assignments ---
  window.renderAssignments = function() {
    if (!assignmentsContainer || !store.assignments) return;
    const lang = window.I18N.currentLang;
    
    assignmentsContainer.innerHTML = store.assignments.map(a => `
      <article class="card-item" id="assign-${a.code.toLowerCase()}" data-uid="${a.uid}" data-num="${a.num_id}">
        <div>
          <div class="card-item-header">
            <span class="badge badge-${a.tier} clickable-badge" onclick="window.navigateToQuery({lev: ${a.lev}})">${a.tier}</span>
            <span class="badge badge-status-yes clickable-badge" onclick="window.navigateToQuery({ass: ${a.num_id}})">${a.code}</span>
          </div>
          <h3 class="card-item-title">${escapeHtml(a.title[lang] || a.title.pt)}</h3>
          <p style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-swiss-red);margin-bottom:var(--space-2);">
            ${escapeHtml(a.tag[lang] || a.tag.pt)}
          </p>
          <p class="card-item-body">
            <strong>${lang === 'pt' ? 'Objetivo:' : 'Objective:'}</strong> ${escapeHtml(a.objective[lang] || a.objective.pt)}
          </p>
          <div style="background:var(--bg-surface-elevated);border-left:3px solid var(--color-swiss-red);padding:var(--space-3);margin-bottom:var(--space-3);font-size:var(--text-xs);">
            <strong>${lang === 'pt' ? 'Decomposição Drumtiks:' : 'Drumtiks Adaptation:'}</strong>
            <p style="margin-top:0.3rem;color:var(--text-secondary);">${escapeHtml(a.drumtiks_adaptation[lang] || a.drumtiks_adaptation.pt)}</p>
          </div>
          <ul style="font-size:var(--text-xs);color:var(--text-secondary);line-height:1.6;list-style:disc;padding-left:1.2rem;margin-bottom:var(--space-4);">
            ${a.constraints.map(c => `<li>${escapeHtml(c)}</li>`).join('')}
          </ul>
          ${a.stages ? `
            <div style="display:flex;flex-direction:column;gap:var(--space-3);margin-bottom:var(--space-3);">
              ${a.stages.map(st => `
                <div style="background:var(--bg-surface);border:1px solid ${st.color || 'var(--border-color)'};border-radius:var(--radius-sm);padding:var(--space-3);">
                  <div style="font-weight:700;font-size:var(--text-xs);color:${st.color || 'var(--color-swiss-red)'};margin-bottom:var(--space-1);">
                    ${escapeHtml(st.name[lang] || st.name.pt)}
                  </div>
                  <p style="font-size:var(--text-xs);color:var(--text-secondary);margin-bottom:var(--space-2);">
                    ${escapeHtml(st.desc[lang] || st.desc.pt)}
                  </p>
                  <div style="display:flex;gap:var(--space-2);flex-wrap:wrap;">
                    ${st.guide_url ? `<a href="${st.guide_url}" class="btn-control" style="font-size:var(--text-xs);font-weight:700;">📘 ${lang === 'pt' ? 'Guião' : 'Guide'} ↗</a>` : ''}
                    ${st.demo_url ? `<a href="${st.demo_url}" target="_blank" rel="noopener noreferrer" class="btn-control" style="font-size:var(--text-xs);background:${st.color || 'var(--color-swiss-red)'};color:#fff;border-color:${st.color || 'var(--color-swiss-red)'};font-weight:700;">🚀 ${lang === 'pt' ? 'Ver Demonstração' : 'Live Demo'} ↗</a>` : ''}
                  </div>
                </div>
              `).join('')}
            </div>
          ` : (a.guide_url || a.demo_url ? `
            <div style="display:flex;gap:var(--space-2);margin-bottom:var(--space-3);flex-wrap:wrap;">
              ${a.guide_url ? `<a href="${a.guide_url}" class="btn-control" style="background:var(--color-swiss-red);color:#fff;border-color:var(--color-swiss-red);font-size:var(--text-xs);font-weight:700;">📘 ${lang === 'pt' ? 'Guião Passo a Passo' : 'Step-by-Step Guide'} ↗</a>` : ''}
              ${a.demo_url ? `<a href="${a.demo_url}" target="_blank" rel="noopener noreferrer" class="btn-control" style="font-size:var(--text-xs);">🚀 ${lang === 'pt' ? 'Ver Mini-Site' : 'Live Demo'} ↗</a>` : ''}
            </div>
          ` : '')}
        </div>
        <div style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--text-muted);border-top:1px solid var(--border-color);padding-top:var(--space-2);">
          ${lang === 'pt' ? 'Padrões:' : 'Patterns:'} ${escapeHtml(a.patterns_used.join(', '))}
        </div>
      </article>
    `).join('');
  };

  // --- 5. Render Matrix Table ---
  window.renderMatrixTable = function() {
    if (!matrixTbody || !store.matrix) return;
    const lang = window.I18N.currentLang;

    // Filter
    let filtered = store.matrix.filter(item => {
      if (state.typeFilter !== 'all' && item.type.toUpperCase() !== state.typeFilter.toUpperCase()) return false;
      if (state.tierFilter !== 'all' && item.tier !== state.tierFilter) return false;
      if (state.statusFilter !== 'all' && item.status.toUpperCase() !== state.statusFilter.toUpperCase()) return false;
      if (state.categoryFilter !== 'all' && item.category !== state.categoryFilter) return false;
      if (state.searchQuery) {
        const q = state.searchQuery.toLowerCase();
        const sym = item.symbol.toLowerCase();
        const desc = (item.desc[lang] || item.desc.pt).toLowerCase();
        const numStr = String(item.id);
        if (!sym.includes(q) && !desc.includes(q) && !numStr.includes(q)) return false;
      }
      return true;
    });

    // Sort
    filtered.sort((a, b) => {
      let valA = a[state.sortColumn];
      let valB = b[state.sortColumn];
      if (typeof valA === 'string') valA = valA.toLowerCase();
      if (typeof valB === 'string') valB = valB.toLowerCase();
      if (valA < valB) return state.sortAsc ? -1 : 1;
      if (valA > valB) return state.sortAsc ? 1 : -1;
      return 0;
    });

    if (matrixCount) {
      matrixCount.textContent = `(${filtered.length} / ${store.matrix.length})`;
    }

    if (filtered.length === 0) {
      matrixTbody.innerHTML = `<tr><td colspan="7" style="text-align:center;padding:2rem;color:var(--text-muted);">Nenhum resultado encontrado.</td></tr>`;
      return;
    }

    matrixTbody.innerHTML = filtered.map(item => `
      <tr id="entry-${item.canonical_id}" data-id="${item.id}" data-uid="${item.uid}">
        <td style="font-family:var(--font-mono);color:var(--text-muted);">
          <a href="?id=${item.id}" onclick="event.preventDefault(); window.navigateToQuery({id: ${item.id}})" style="color:inherit;text-decoration:none;">#${item.id}</a>
        </td>
        <td>
          <span class="matrix-symbol">${escapeHtml(item.symbol)}</span>
        </td>
        <td>
          <span class="badge ${item.type === 'HTML' ? 'badge-foundational' : 'badge-intermediate'} clickable-badge" onclick="window.navigateToQuery({type: '${item.type}'})">
            ${item.type}
          </span>
        </td>
        <td>
          <span class="badge badge-${item.tier} clickable-badge" onclick="window.navigateToQuery({lev: ${item.lev}})">
            ${item.tier}
          </span>
        </td>
        <td><span class="badge badge-status-${item.status.toLowerCase()}">${item.status}</span></td>
        <td class="matrix-desc">${item.desc[lang] || item.desc.pt}</td>
        <td style="white-space:nowrap;">
          ${item.mdn_url ? `<a href="${item.mdn_url}" target="_blank" rel="noopener noreferrer" class="matrix-link">MDN ↗</a>` : ''}
          ${item.pat_ref ? ` &bull; <a href="?pat=${item.pat_ref}" onclick="event.preventDefault(); window.navigateToQuery({pat: ${item.pat_ref}})" class="matrix-link" style="color:var(--color-swiss-red);font-weight:700;">Demo P${item.pat_ref}</a>` : ''}
        </td>
      </tr>
    `).join('');
  };

  // --- 6. Render Patterns Showcase ---
  window.renderPatternsShowcase = function() {
    if (!patternsContainer || !store.patterns) return;
    const lang = window.I18N.currentLang;

    patternsContainer.innerHTML = store.patterns.map(p => `
      <article class="pattern-view" id="pattern-${p.code.toLowerCase()}" data-pat="${p.pat}" data-uid="${p.uid}">
        <header class="pattern-header">
          <div>
            <div style="display:flex;align-items:center;gap:var(--space-2);margin-bottom:var(--space-1);">
              <span class="badge badge-${p.tier} clickable-badge" onclick="window.navigateToQuery({lev: ${p.lev}})">${p.tier}</span>
              <span class="badge badge-status-yes clickable-badge" onclick="window.navigateToQuery({proj: 1})">${p.assignment}</span>
              <span style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--text-muted);">${p.canonical_id} (P${p.pat})</span>
            </div>
            <h3 class="pattern-title">${p.title[lang] || p.title.pt}</h3>
          </div>
          <div class="pattern-tabs">
            <button class="tab-btn active" data-tab="preview" data-pattern="${p.code}">${window.I18N.t('tab_preview')}</button>
            <button class="tab-btn" data-tab="html" data-pattern="${p.code}">${window.I18N.t('tab_html')}</button>
            <button class="tab-btn" data-tab="css" data-pattern="${p.code}">${window.I18N.t('tab_css')}</button>
          </div>
        </header>

        <div style="padding:var(--space-4);background:var(--bg-surface-elevated);border-bottom:1px solid var(--border-color);font-size:var(--text-xs);display:flex;flex-wrap:wrap;gap:var(--space-4);justify-content:space-between;">
          <div style="max-width:700px;">
            <strong>${window.I18N.t('purpose_label')}</strong> ${p.purpose[lang] || p.purpose.pt}
          </div>
          <div style="font-family:var(--font-mono);">
            <strong>${window.I18N.t('mdn_ref_label')}</strong> 
            ${p.mdn_links.map(l => `<a href="${l.url}" target="_blank" rel="noopener noreferrer" style="color:var(--color-swiss-red);text-decoration:underline;margin-left:0.3rem;">${l.label} ↗</a>`).join(' ')}
          </div>
        </div>

        <!-- Tab Content 1: Live Preview -->
        <div class="pattern-sandbox-preview active" id="pane-preview-${p.code}">
          ${p.demo_html}
        </div>

        <!-- Tab Content 2: HTML Code -->
        <div class="pattern-code-view" id="pane-html-${p.code}">
          <button class="btn-copy-code" data-code="${escapeHtml(p.html_code)}">${window.I18N.t('btn_copy')}</button>
          <pre><code>${escapeHtml(p.html_code)}</code></pre>
        </div>

        <!-- Tab Content 3: CSS Code -->
        <div class="pattern-code-view" id="pane-css-${p.code}">
          <button class="btn-copy-code" data-code="${escapeHtml(p.css_code)}">${window.I18N.t('btn_copy')}</button>
          <pre><code>${escapeHtml(p.css_code)}</code></pre>
        </div>
      </article>
    `).join('');

    // Attach Tab Handlers
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = e.target.getAttribute('data-tab');
        const patCode = e.target.getAttribute('data-pattern');
        const parent = e.target.closest('.pattern-view');

        parent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');

        const previewPane = parent.querySelector(`#pane-preview-${patCode}`);
        const htmlPane = parent.querySelector(`#pane-html-${patCode}`);
        const cssPane = parent.querySelector(`#pane-css-${patCode}`);

        if (tab === 'preview') {
          previewPane.style.display = 'block';
          htmlPane.style.display = 'none';
          cssPane.style.display = 'none';
        } else if (tab === 'html') {
          previewPane.style.display = 'none';
          htmlPane.style.display = 'block';
          cssPane.style.display = 'none';
        } else if (tab === 'css') {
          previewPane.style.display = 'none';
          htmlPane.style.display = 'none';
          cssPane.style.display = 'block';
        }
      });
    });

    // Attach Copy Handlers
    document.querySelectorAll('.btn-copy-code').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const code = e.target.getAttribute('data-code');
        navigator.clipboard.writeText(code).then(() => {
          const original = e.target.textContent;
          e.target.textContent = window.I18N.t('copied');
          setTimeout(() => { e.target.textContent = original; }, 1500);
        });
      });
    });
  };

  // --- 7. Event Listeners for Search & Filters ---
  if (matrixSearch) {
    matrixSearch.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      window.renderMatrixTable();
    });
  }

  if (filterType) {
    filterType.addEventListener('change', (e) => {
      state.typeFilter = e.target.value;
      window.renderMatrixTable();
    });
  }

  if (filterTier) {
    filterTier.addEventListener('change', (e) => {
      state.tierFilter = e.target.value;
      window.renderMatrixTable();
    });
  }

  if (filterStatus) {
    filterStatus.addEventListener('change', (e) => {
      state.statusFilter = e.target.value;
      window.renderMatrixTable();
    });
  }

  if (filterCategory) {
    filterCategory.addEventListener('change', (e) => {
      state.categoryFilter = e.target.value;
      window.renderMatrixTable();
    });
  }

  // Table header sorting
  document.querySelectorAll('.matrix-table th[data-sort]').forEach(th => {
    th.addEventListener('click', (e) => {
      const col = e.target.getAttribute('data-sort');
      if (state.sortColumn === col) {
        state.sortAsc = !state.sortAsc;
      } else {
        state.sortColumn = col;
        state.sortAsc = true;
      }
      window.renderMatrixTable();
    });
  });

  // --- 8. Universal Query Router & Deep Linking ---
  // Supports: ?id=14, ?pat=13, ?cat=2, ?lev=2, ?ass=1, ?proj=1
  window.navigateToQuery = function(params) {
    const url = new URL(window.location.href);
    Object.keys(params).forEach(k => {
      if (params[k] === null || params[k] === undefined || params[k] === 'all') {
        url.searchParams.delete(k);
      } else {
        url.searchParams.set(k, params[k]);
      }
    });
    window.history.pushState(null, '', url.toString());
    window.applyQueryRouting();
  };

  window.applyQueryRouting = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const hash = window.location.hash;

    // Also check hash parameters if formatted as #matrix?cat=2
    if (hash && hash.includes('?')) {
      const hashQuery = hash.split('?')[1];
      const hashParams = new URLSearchParams(hashQuery);
      hashParams.forEach((v, k) => urlParams.set(k, v));
    }

    let needsRender = false;

    // Filter by Category: ?cat=2 or ?cat=cat-flex-grid
    const catParam = urlParams.get('cat');
    if (catParam) {
      let matchedCat = null;
      if (/^\d+$/.test(catParam)) {
        const num = parseInt(catParam, 10);
        matchedCat = store.categories.find(c => c.num_id === num);
      } else {
        matchedCat = store.categories.find(c => c.id === catParam || c.slug === catParam);
      }
      if (matchedCat) {
        state.categoryFilter = matchedCat.id;
        if (filterCategory) filterCategory.value = matchedCat.id;
        needsRender = true;
      }
    }

    // Filter by Level/Tier: ?lev=2 or ?tier=intermediate
    const levParam = urlParams.get('lev') || urlParams.get('tier');
    if (levParam) {
      if (levParam === '1' || levParam === 'foundational') {
        state.tierFilter = 'foundational';
      } else if (levParam === '2' || levParam === 'intermediate') {
        state.tierFilter = 'intermediate';
      } else if (levParam === '3' || levParam === 'advanced') {
        state.tierFilter = 'advanced';
      }
      if (filterTier) filterTier.value = state.tierFilter;
      needsRender = true;
    }

    // Filter by Type: ?type=html or ?type=css
    const typeParam = urlParams.get('type');
    if (typeParam) {
      state.typeFilter = typeParam.toUpperCase();
      if (filterType) filterType.value = state.typeFilter;
      needsRender = true;
    }

    if (needsRender) {
      window.renderMatrixTable();
    }

    // Target Pattern: ?pat=13 or ?pat=p13
    const patParam = urlParams.get('pat');
    if (patParam) {
      const num = parseInt(patParam.replace(/[^0-9]/g, ''), 10);
      const targetCard = document.querySelector(`.pattern-view[data-pat="${num}"]`) || 
                         document.getElementById(`pattern-p${num}`);
      if (targetCard) {
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetCard.classList.remove('highlight-target');
        void targetCard.offsetWidth; // trigger reflow
        targetCard.classList.add('highlight-target');
        return;
      }
    }

    // Target Assignment: ?ass=1 or ?ass=ex1 or ?proj=1
    const assParam = urlParams.get('ass');
    const projParam = urlParams.get('proj');
    if (assParam || projParam) {
      let targetAssign = null;
      if (projParam || assParam === '3' || assParam === 'project') {
        targetAssign = document.getElementById('assign-project');
      } else if (assParam === '1' || assParam === 'ex1') {
        targetAssign = document.getElementById('assign-ex1');
      } else if (assParam === '2' || assParam === 'ex2') {
        targetAssign = document.getElementById('assign-ex2');
      }
      if (targetAssign) {
        targetAssign.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetAssign.classList.remove('highlight-target');
        void targetAssign.offsetWidth;
        targetAssign.classList.add('highlight-target');
        return;
      }
    }

    // Target by Universal UID: ?uid=mat-14 or ?uid=pat-13 or ?uid=ass-1
    const uidParam = urlParams.get('uid');
    if (uidParam) {
      if (uidParam.startsWith('pat-')) {
        const patNum = parseInt(uidParam.replace('pat-', ''), 10);
        urlParams.set('pat', patNum);
      } else if (uidParam.startsWith('ass-')) {
        const assNum = parseInt(uidParam.replace('ass-', ''), 10);
        urlParams.set('ass', assNum);
      } else if (uidParam.startsWith('mat-')) {
        const matNum = parseInt(uidParam.replace('mat-', ''), 10);
        urlParams.set('mat', matNum);
      } else if (uidParam.startsWith('cat-')) {
        urlParams.set('cat', uidParam.replace('cat-', ''));
      }
    }

    // Target Matrix Item: ?id=14 or ?mat=14
    const matParam = urlParams.get('mat') || urlParams.get('id');
    if (matParam) {
      state.searchQuery = '';
      if (matrixSearch) matrixSearch.value = '';
      window.renderMatrixTable();

      const num = parseInt(matParam.replace(/[^0-9]/g, ''), 10);
      const row = document.querySelector(`tr[data-id="${num}"]`) || 
                  document.querySelector(`tr[data-uid="mat-${num}"]`) ||
                  document.getElementById(`entry-${matParam}`) ||
                  document.querySelector(`[data-uid="${matParam}"]`);
      if (row) {
        row.scrollIntoView({ behavior: 'smooth', block: 'center' });
        row.classList.remove('highlight-target');
        void row.offsetWidth;
        row.classList.add('highlight-target');
        return;
      }
    }
  };

  window.addEventListener('popstate', () => {
    window.applyQueryRouting();
  });

  // --- 9. Helper Utilities ---
  function escapeHtml(text) {
    if (!text) return '';
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // --- 10. Initial Render & Query Application ---
  window.I18N.updateUI();
  window.applyQueryRouting();
});
