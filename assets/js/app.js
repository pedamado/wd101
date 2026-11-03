/**
 * Core Application Controller v2.0 for WD101 Learning Scaffold
 * Powers:
 *  - Dedicated HTML5/CSS3 Matrix page (matrix.html) + Sticky Category Rail
 *  - 13 Flagship Drumtiks 4-View Pattern Sandboxes (demos/index.html & featured previews)
 *  - Universal Query Router (?id, ?mat, ?pat, ?cat, ?lev, ?type, ?ass, ?proj)
 *    with automatic legacy deep-link forwarding from index.html to matrix.html / demos/index.html.
 */

document.addEventListener('DOMContentLoaded', () => {
  const store = window.SCAFFOLD_DATA;
  if (!store) return;

  const ROOT = (window.WD101Shell && window.WD101Shell.root) || '';

  // --- 0. Legacy Deep-Link Forwarding on Hub (index.html) ---
  // Preserves 100% of existing links like index.html?id=14, index.html?cat=2, index.html?pat=7
  const pathname = window.location.pathname.toLowerCase();
  const isRootHub = (pathname.endsWith('/learning-scaffold/') || pathname.endsWith('/learning-scaffold/index.html'));
  if (isRootHub) {
    const incomingParams = new URLSearchParams(window.location.search);
    const hash = window.location.hash;
    if (hash && hash.startsWith('#matrix')) {
      const q = hash.includes('?') ? '?' + hash.split('?')[1] : window.location.search;
      window.location.replace(`${ROOT}matrix.html${q}`);
      return;
    }
    if (hash === '#interaction-design') {
      window.location.replace(`${ROOT}ixd-principles.html`);
      return;
    }
    if (hash === '#patterns') {
      window.location.replace(`${ROOT}demos/index.html#core-patterns`);
      return;
    }
    if (incomingParams.has('id') || incomingParams.has('mat') || incomingParams.has('cat') || incomingParams.has('type') ||
        (incomingParams.has('uid') && (incomingParams.get('uid').startsWith('mat-') || incomingParams.get('uid').startsWith('cat-')))) {
      window.location.replace(`${ROOT}matrix.html?${incomingParams.toString()}`);
      return;
    }
    if (incomingParams.has('pat') || (incomingParams.has('uid') && incomingParams.get('uid').startsWith('pat-'))) {
      window.location.replace(`${ROOT}demos/index.html?${incomingParams.toString()}#core-patterns`);
      return;
    }
  }

  // --- 1. Global State ---
  const state = {
    searchQuery: '',
    typeFilter: 'all',
    milestoneFilter: 'all',
    tierFilter: 'all',
    statusFilter: 'all',
    categoryFilter: 'all',
    sortColumn: 'id',
    sortAsc: true
  };

  // --- 2. Element References ---
  const matrixSearch = document.getElementById('matrix-search');
  const filterType = document.getElementById('filter-type');
  const filterMilestone = document.getElementById('filter-milestone');
  const filterTier = document.getElementById('filter-tier');
  const filterStatus = document.getElementById('filter-status');
  const filterCategory = document.getElementById('filter-category');
  const matrixTbody = document.getElementById('matrix-tbody');
  const matrixCount = document.getElementById('matrix-count');
  const matrixAsideList = document.getElementById('matrix-aside-categories');
  const activeFilterBanner = document.getElementById('matrix-active-filters');
  const patternsContainer = document.getElementById('patterns-container');
  const assignmentsContainer = document.getElementById('assignments-container');

  const tierIcon = (tier) => {
    if (tier === 'foundational') return '🟢';
    if (tier === 'intermediate') return '🔵';
    if (tier === 'advanced') return '🟣';
    return '🧭';
  };

  // --- 3. Faceted Filter Engine & Live Count Calculations ---
  window.computeFacetedCounts = function () {
    const all = (store && store.matrix) || [];
    const lang = (window.I18N && window.I18N.currentLang) || 'pt';

    function itemMatches(item, filterKey, filterVal) {
      if (!filterVal || filterVal === 'all') return true;
      if (filterKey === 'type') return item.type.toUpperCase() === filterVal.toUpperCase();
      if (filterKey === 'milestone') return (item.introduced_in || '').toUpperCase() === filterVal.toUpperCase();
      if (filterKey === 'tier') {
        if (Array.isArray(filterVal)) {
          if (filterVal.length === 0 || filterVal.length === 3) return true;
          const normalized = filterVal.map(t => (t === 'foundation' || t === '1') ? 'foundational' : t);
          return normalized.includes(item.tier);
        }
        const norm = (filterVal === 'foundation' || filterVal === 'foundational' || filterVal === '1') ? 'foundational' :
                     (filterVal === 'intermediate' || filterVal === '2') ? 'intermediate' :
                     (filterVal === 'advanced' || filterVal === '3') ? 'advanced' : filterVal;
        return item.tier === norm;
      }
      if (filterKey === 'status') return (item.status || '').toUpperCase() === filterVal.toUpperCase();
      if (filterKey === 'category') return item.category === filterVal;
      return true;
    }

    function matchesSearch(item) {
      if (!state.searchQuery) return true;
      const q = state.searchQuery.toLowerCase();
      const sym = (item.symbol || '').toLowerCase();
      const desc = ((item.desc && (item.desc[lang] || item.desc.pt)) || '').toLowerCase();
      const numStr = String(item.id);
      const intro = (item.introduced_in || '').toLowerCase();
      return sym.includes(q) || desc.includes(q) || numStr.includes(q) || intro.includes(q);
    }

    // Items matching the exact combination of active filters and search
    const combinationItems = all.filter(item => {
      if (!matchesSearch(item)) return false;
      if (!itemMatches(item, 'type', state.typeFilter)) return false;
      if (!itemMatches(item, 'milestone', state.milestoneFilter)) return false;
      if (!itemMatches(item, 'tier', state.tierFilter)) return false;
      if (!itemMatches(item, 'status', state.statusFilter)) return false;
      if (!itemMatches(item, 'category', state.categoryFilter)) return false;
      return true;
    });

    // Compute faceted counts for each filter select dropdown
    const filterKeys = ['type', 'milestone', 'tier', 'status', 'category'];
    const facets = {};

    filterKeys.forEach(facetKey => {
      const facetSubset = all.filter(item => {
        if (!matchesSearch(item)) return false;
        for (const k of filterKeys) {
          if (k === facetKey) continue;
          if (!itemMatches(item, k, state[k + 'Filter'])) return false;
        }
        return true;
      });

      const counts = {};
      facetSubset.forEach(item => {
        const val = facetKey === 'type' ? item.type :
                    facetKey === 'milestone' ? item.introduced_in :
                    facetKey === 'tier' ? item.tier :
                    facetKey === 'status' ? item.status : item.category;
        if (val) counts[val] = (counts[val] || 0) + 1;
      });

      facets[facetKey] = {
        subsetTotal: facetSubset.length,
        counts
      };
    });

    return {
      combinationItems,
      combinationCount: combinationItems.length,
      totalCount: all.length,
      facets
    };
  };

  // --- 4. Populate Categories Dropdown & Live Option Counts ---
  window.populateCategoriesFilter = function () {
    if (!filterCategory || !store.categories) return;
    const currentVal = filterCategory.value || state.categoryFilter;
    const lang = (window.I18N && window.I18N.currentLang) || 'pt';
    const isPt = lang === 'pt';
    filterCategory.innerHTML = `<option value="all">${isPt ? 'Todas as Categorias (12)' : 'All Categories (12)'}</option>`;
    store.categories.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat.id;
      opt.textContent = `${cat.num_id}. ${cat.title[lang] || cat.title.pt}`;
      filterCategory.appendChild(opt);
    });
    filterCategory.value = currentVal || 'all';
  };

  window.updateFilterDropdownOptions = function (facetedData) {
    if (!facetedData || !facetedData.facets) return;
    const lang = (window.I18N && window.I18N.currentLang) || 'pt';
    const isPt = lang === 'pt';
    const f = facetedData.facets;

    // 1. Type
    if (filterType && filterType.options.length >= 3) {
      const cHTML = f.type.counts['HTML'] || 0;
      const cCSS = f.type.counts['CSS'] || 0;
      filterType.options[0].textContent = isPt ? `Todos os Tipos (${f.type.subsetTotal})` : `All Types (${f.type.subsetTotal})`;
      filterType.options[1].textContent = isPt ? `Apenas HTML (${cHTML})` : `HTML Only (${cHTML})`;
      filterType.options[2].textContent = isPt ? `Apenas CSS (${cCSS})` : `CSS Only (${cCSS})`;
    }

    // 2. Milestone
    if (filterMilestone && filterMilestone.options.length >= 6) {
      const mCounts = f.milestone.counts;
      filterMilestone.options[0].textContent = isPt ? `Todos os Marcos (${f.milestone.subsetTotal})` : `All Milestones (${f.milestone.subsetTotal})`;
      filterMilestone.options[1].textContent = `EX1 (Hello Warp! • ${mCounts['EX1'] || 0})`;
      filterMilestone.options[2].textContent = `EX2 (Media & Box • ${mCounts['EX2'] || 0})`;
      filterMilestone.options[3].textContent = `TP06 (Drumtiks S1 • ${mCounts['TP06'] || 0})`;
      filterMilestone.options[4].textContent = `TP11 (Capstone • ${mCounts['TP11'] || 0})`;
      filterMilestone.options[5].textContent = isPt ? `Beyond (Fora do Âmbito • ${mCounts['Beyond'] || 0})` : `Beyond (Out of Scope • ${mCounts['Beyond'] || 0})`;
    }

    // 3. Tier
    if (filterTier && filterTier.options.length >= 4) {
      const tCounts = f.tier.counts;
      filterTier.options[0].textContent = isPt ? `Todos os Escalões (${f.tier.subsetTotal})` : `All Tiers (${f.tier.subsetTotal})`;
      filterTier.options[1].textContent = isPt ? `🟢 Básico / Foundational (${tCounts['foundational'] || 0})` : `🟢 Foundational (${tCounts['foundational'] || 0})`;
      filterTier.options[2].textContent = isPt ? `🔵 Intermédio / Intermediate (${tCounts['intermediate'] || 0})` : `🔵 Intermediate (${tCounts['intermediate'] || 0})`;
      filterTier.options[3].textContent = isPt ? `🟣 Avançado / Advanced (${tCounts['advanced'] || 0})` : `🟣 Advanced (${tCounts['advanced'] || 0})`;
    }

    // 4. Status
    if (filterStatus && filterStatus.options.length >= 4) {
      const sCounts = f.status.counts;
      filterStatus.options[0].textContent = isPt ? `Todo o Estado (${f.status.subsetTotal})` : `All Statuses (${f.status.subsetTotal})`;
      filterStatus.options[1].textContent = isPt ? `Sim (No Curso • ${sCounts['YES'] || 0})` : `Yes (In Course • ${sCounts['YES'] || 0})`;
      filterStatus.options[2].textContent = isPt ? `TBD (Opcional • ${sCounts['TBD'] || 0})` : `TBD (Optional • ${sCounts['TBD'] || 0})`;
      filterStatus.options[3].textContent = isPt ? `Fora do Âmbito (${sCounts['NO'] || 0})` : `Out of Scope (${sCounts['NO'] || 0})`;
    }

    // 5. Category
    if (filterCategory && store.categories) {
      const cCounts = f.category.counts;
      const currentCatVal = filterCategory.value || state.categoryFilter;
      filterCategory.innerHTML = `<option value="all">${isPt ? `Todas as Categorias (12 • ${f.category.subsetTotal})` : `All Categories (12 • ${f.category.subsetTotal})`}</option>`;
      store.categories.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat.id;
        const count = cCounts[cat.id] || 0;
        opt.textContent = `${cat.num_id}. ${cat.title[lang] || cat.title.pt} (${count})`;
        filterCategory.appendChild(opt);
      });
      filterCategory.value = currentCatVal || 'all';
    }
  };

  // --- 5. Render Sticky Aside Rail with Live Combination Feedback ---
  window.renderMatrixAsideCategories = function (facetedData) {
    if (!matrixAsideList || !store.categories || !store.matrix) return;
    const lang = (window.I18N && window.I18N.currentLang) || 'pt';
    const isPt = lang === 'pt';
    const totalCount = store.matrix.length;

    const catCounts = (facetedData && facetedData.facets && facetedData.facets.category && facetedData.facets.category.counts) || {};
    const hasOtherFilters = Boolean(
      state.searchQuery ||
      state.typeFilter !== 'all' ||
      state.milestoneFilter !== 'all' ||
      state.tierFilter !== 'all' ||
      state.statusFilter !== 'all'
    );

    const allLabel = isPt ? 'Todas as Entradas' : 'All Entries';
    const allCountDisplay = hasOtherFilters && facetedData ? facetedData.combinationCount : totalCount;

    let html = `
      <li class="aside-toc-item">
        <button type="button" class="aside-toc-link ${state.categoryFilter === 'all' ? 'active' : ''}" data-cat="all">
          <span>${allLabel}</span>
          <span class="aside-toc-count">${allCountDisplay}</span>
        </button>
      </li>
    `;

    store.categories.forEach(cat => {
      const isActive = state.categoryFilter === cat.id;
      let count = 0;
      if (hasOtherFilters) {
        count = catCounts[cat.id] || 0;
      } else {
        count = store.matrix.filter(m => m.category === cat.id).length;
      }
      const isDimmed = hasOtherFilters && count === 0 && !isActive;

      html += `
        <li class="aside-toc-item">
          <button type="button" class="aside-toc-link ${isActive ? 'active' : ''} ${isDimmed ? 'is-dimmed' : ''}" data-cat="${cat.id}">
            <span>${cat.num_id}. ${escapeHtml(cat.title[lang] || cat.title.pt)}</span>
            <span class="aside-toc-count">${count}</span>
          </button>
        </li>
      `;
    });

    matrixAsideList.innerHTML = html;
    matrixAsideList.querySelectorAll('button[data-cat]').forEach(btn => {
      btn.addEventListener('click', () => {
        const selected = btn.getAttribute('data-cat');
        state.categoryFilter = selected;
        if (filterCategory) filterCategory.value = selected;
        window.navigateToQuery({ cat: selected === 'all' ? null : selected });
        window.renderMatrixTable();
      });
    });
  };

  // --- 6. Render Dedicated Combination Results Feedback Bar ---
  window.renderActiveFilterFeedback = function (facetedData) {
    if (!activeFilterBanner || !store.matrix) return;
    const lang = (window.I18N && window.I18N.currentLang) || 'pt';
    const isPt = lang === 'pt';
    const count = facetedData.combinationCount;
    const total = facetedData.totalCount;

    const hasAny = Boolean(
      state.searchQuery ||
      state.typeFilter !== 'all' ||
      state.milestoneFilter !== 'all' ||
      state.tierFilter !== 'all' ||
      state.statusFilter !== 'all' ||
      state.categoryFilter !== 'all'
    );

    if (!hasAny) {
      activeFilterBanner.className = 'matrix-results-feedback';
      activeFilterBanner.innerHTML = `
        <div class="feedback-summary-row feedback-all-neutral">
          <div class="feedback-badge-and-text">
            <span class="results-count-pill pill-neutral">${total}</span>
            <span class="feedback-message">
              ${isPt ? 'A mostrar <strong>todas as 314 entradas</strong> oficiais da matriz curricular (12 categorias W3C).' : 'Showing <strong>all 314 official curriculum entries</strong> in the reference matrix (12 W3C categories).'}
            </span>
          </div>
        </div>
      `;
      return;
    }

    activeFilterBanner.className = 'matrix-results-feedback is-filtered';

    const chips = [];
    const tokens = [];

    // Category
    if (state.categoryFilter !== 'all') {
      const catObj = store.categories && store.categories.find(c => c.id === state.categoryFilter);
      const catName = catObj ? (catObj.title[lang] || catObj.title.pt) : state.categoryFilter;
      const catBaseCount = store.matrix.filter(m => m.category === state.categoryFilter).length;
      tokens.push(`<strong>${escapeHtml(catName)}</strong>`);
      chips.push(`
        <span class="filter-chip">
          🏛️ ${escapeHtml(catName)} <span class="filter-chip-count">(${catBaseCount})</span>
          <button type="button" class="filter-chip-remove" data-clear="category" aria-label="${isPt ? 'Remover filtro de Categoria' : 'Remove Category filter'}">✕</button>
        </span>
      `);
    }

    // Tier
    if (state.tierFilter !== 'all') {
      let tierLabel = '';
      let tierBaseCount = 0;
      if (Array.isArray(state.tierFilter)) {
        const labels = state.tierFilter.map(t => {
          if (t === 'foundational') return isPt ? '🟢 Fundação' : '🟢 Foundation';
          if (t === 'intermediate') return isPt ? '🔵 Intermédio' : '🔵 Intermediate';
          return isPt ? '🟣 Avançado' : '🟣 Advanced';
        });
        tierLabel = labels.join(' + ');
        tierBaseCount = store.matrix.filter(m => state.tierFilter.includes(m.tier)).length;
      } else {
        tierLabel = state.tierFilter === 'foundational' ? (isPt ? '🟢 Básico / Foundational' : '🟢 Foundational') :
                    state.tierFilter === 'intermediate' ? (isPt ? '🔵 Intermédio / Intermediate' : '🔵 Intermediate') :
                    (isPt ? '🟣 Avançado / Advanced' : '🟣 Advanced');
        tierBaseCount = store.matrix.filter(m => m.tier === state.tierFilter).length;
      }
      tokens.push(`<strong>${tierLabel}</strong>`);
      chips.push(`
        <span class="filter-chip">
          ${tierLabel} <span class="filter-chip-count">(${tierBaseCount})</span>
          <button type="button" class="filter-chip-remove" data-clear="tier" aria-label="${isPt ? 'Remover filtro de Escalão' : 'Remove Tier filter'}">✕</button>
        </span>
      `);
    }

    // Milestone
    if (state.milestoneFilter !== 'all') {
      const msBaseCount = store.matrix.filter(m => (m.introduced_in || '').toUpperCase() === state.milestoneFilter.toUpperCase()).length;
      tokens.push(`<strong>${state.milestoneFilter}</strong>`);
      chips.push(`
        <span class="filter-chip">
          🏷️ ${state.milestoneFilter} <span class="filter-chip-count">(${msBaseCount})</span>
          <button type="button" class="filter-chip-remove" data-clear="milestone" aria-label="${isPt ? 'Remover filtro de Marco' : 'Remove Milestone filter'}">✕</button>
        </span>
      `);
    }

    // Type
    if (state.typeFilter !== 'all') {
      const typeBaseCount = store.matrix.filter(m => m.type.toUpperCase() === state.typeFilter.toUpperCase()).length;
      tokens.push(`<strong>${state.typeFilter}</strong>`);
      chips.push(`
        <span class="filter-chip">
          ${state.typeFilter === 'HTML' ? '📄 HTML' : '🎨 CSS'} <span class="filter-chip-count">(${typeBaseCount})</span>
          <button type="button" class="filter-chip-remove" data-clear="type" aria-label="${isPt ? 'Remover filtro de Tipo' : 'Remove Type filter'}">✕</button>
        </span>
      `);
    }

    // Status
    if (state.statusFilter !== 'all') {
      const statusLabel = state.statusFilter === 'YES' ? (isPt ? 'No Curso (Sim)' : 'In Course (Yes)') :
                          state.statusFilter === 'TBD' ? (isPt ? 'Opcional (TBD)' : 'Optional (TBD)') :
                          (isPt ? 'Fora do Âmbito (Não)' : 'Out of Scope (No)');
      const statusBaseCount = store.matrix.filter(m => (m.status || '').toUpperCase() === state.statusFilter.toUpperCase()).length;
      tokens.push(`<strong>${statusLabel}</strong>`);
      chips.push(`
        <span class="filter-chip">
          ⚙️ ${statusLabel} <span class="filter-chip-count">(${statusBaseCount})</span>
          <button type="button" class="filter-chip-remove" data-clear="status" aria-label="${isPt ? 'Remover filtro de Estado' : 'Remove Status filter'}">✕</button>
        </span>
      `);
    }

    // Search
    if (state.searchQuery) {
      tokens.push(`"<strong>${escapeHtml(state.searchQuery)}</strong>"`);
      chips.push(`
        <span class="filter-chip">
          🔍 "${escapeHtml(state.searchQuery)}"
          <button type="button" class="filter-chip-remove" data-clear="search" aria-label="${isPt ? 'Limpar pesquisa' : 'Clear search'}">✕</button>
        </span>
      `);
    }

    const clearAllLabel = isPt ? '✕ Limpar Todos' : '✕ Clear All';
    const clearBtnHtml = `<button type="button" class="btn-clear-all-filters" id="btn-clear-matrix-filters">${clearAllLabel}</button>`;

    if (count === 0) {
      activeFilterBanner.innerHTML = `
        <div class="feedback-summary-row feedback-empty-alert">
          <div class="feedback-badge-and-text">
            <span class="results-count-pill pill-zero">0 / ${total}</span>
            <span class="feedback-message">
              ⚠️ ${isPt ? 'Nenhuma entrada encontrada para a combinação:' : 'No entries found for combination:'}
              <span class="combination-tokens">${tokens.join(' + ')}</span>.
            </span>
          </div>
          <div class="feedback-chips-container">
            ${chips.join('')}
            ${clearBtnHtml}
          </div>
        </div>
      `;
    } else {
      const countMsg = isPt
        ? `<strong>${count}</strong> ${count === 1 ? 'entrada encontrada' : 'entradas encontradas'} para a combinação:`
        : `<strong>${count}</strong> ${count === 1 ? 'entry found' : 'entries found'} for combination:`;

      activeFilterBanner.innerHTML = `
        <div class="feedback-summary-row">
          <div class="feedback-badge-and-text">
            <span class="results-count-pill">${count} / ${total}</span>
            <span class="feedback-message">
              ${countMsg} <span class="combination-tokens">${tokens.join(' + ')}</span>
            </span>
          </div>
          <div class="feedback-chips-container">
            ${chips.join('')}
            ${clearBtnHtml}
          </div>
        </div>
      `;
    }

    // Attach listeners to individual remove buttons and clear-all
    activeFilterBanner.querySelectorAll('button[data-clear]').forEach(btn => {
      btn.addEventListener('click', () => {
        const filterToClear = btn.getAttribute('data-clear');
        if (filterToClear === 'category') {
          state.categoryFilter = 'all';
          if (filterCategory) filterCategory.value = 'all';
          window.navigateToQuery({ cat: null });
        } else if (filterToClear === 'tier') {
          state.tierFilter = 'all';
          if (filterTier) filterTier.value = 'all';
          if (window.WD101 && window.WD101.applyTiers) {
            window.WD101.applyTiers(['foundation', 'intermediate', 'advanced'], true);
          }
          window.navigateToQuery({ tier: null, lev: null, difficulty: null });
        } else if (filterToClear === 'milestone') {
          state.milestoneFilter = 'all';
          if (filterMilestone) filterMilestone.value = 'all';
          window.navigateToQuery({ intro: null, milestone: null });
        } else if (filterToClear === 'type') {
          state.typeFilter = 'all';
          if (filterType) filterType.value = 'all';
          window.navigateToQuery({ type: null });
        } else if (filterToClear === 'status') {
          state.statusFilter = 'all';
          if (filterStatus) filterStatus.value = 'all';
          window.navigateToQuery({ status: null });
        } else if (filterToClear === 'search') {
          state.searchQuery = '';
          if (matrixSearch) matrixSearch.value = '';
          window.renderMatrixTable();
          return;
        }
        window.renderMatrixTable();
      });
    });

    const clearAllBtn = document.getElementById('btn-clear-matrix-filters');
    if (clearAllBtn) {
      clearAllBtn.addEventListener('click', () => {
        state.searchQuery = '';
        state.typeFilter = 'all';
        state.milestoneFilter = 'all';
        state.tierFilter = 'all';
        state.statusFilter = 'all';
        state.categoryFilter = 'all';
        if (matrixSearch) matrixSearch.value = '';
        if (filterType) filterType.value = 'all';
        if (filterMilestone) filterMilestone.value = 'all';
        if (filterTier) filterTier.value = 'all';
        if (filterStatus) filterStatus.value = 'all';
        if (filterCategory) filterCategory.value = 'all';
        if (window.WD101 && window.WD101.applyTiers) {
          window.WD101.applyTiers(['foundation', 'intermediate', 'advanced'], true);
        }
        window.navigateToQuery({ id: null, mat: null, cat: null, lev: null, tier: null, difficulty: null, type: null, intro: null, milestone: null, status: null, q: null });
        window.renderMatrixTable();
      });
    }
  };

  // --- 7. Render Assignments (Only if container is not marked data-static="true") ---
  window.renderAssignments = function () {
    if (!assignmentsContainer || assignmentsContainer.hasAttribute('data-static') || !store.assignments) return;
  };

  // --- 8. Render Matrix Table ---
  window.renderMatrixTable = function () {
    if (!matrixTbody || !store.matrix) return;
    const lang = (window.I18N && window.I18N.currentLang) || 'pt';

    // 1. Compute faceted counts and combination items
    const facetedData = window.computeFacetedCounts();
    const filtered = facetedData.combinationItems;

    // 2. Sort filtered items
    filtered.sort((a, b) => {
      let valA = a[state.sortColumn];
      let valB = b[state.sortColumn];
      if (typeof valA === 'string') valA = valA.toLowerCase();
      if (typeof valB === 'string') valB = valB.toLowerCase();
      if (valA < valB) return state.sortAsc ? -1 : 1;
      if (valA > valB) return state.sortAsc ? 1 : -1;
      return 0;
    });

    // 3. Update count in hero header
    if (matrixCount) {
      matrixCount.textContent = `(${filtered.length} / ${store.matrix.length})`;
    }

    // 4. Update dropdown option counts dynamically
    window.updateFilterDropdownOptions(facetedData);

    // 5. Update sticky aside rail category counts
    window.renderMatrixAsideCategories(facetedData);

    // 6. Update dedicated results and combination feedback bar
    window.renderActiveFilterFeedback(facetedData);

    // 7. Render table rows or empty state
    if (filtered.length === 0) {
      const emptyMsg = lang === 'pt'
        ? 'Nenhuma tag ou propriedade corresponde aos filtros atuais.'
        : 'No HTML tag or CSS property matches the current filters.';
      matrixTbody.innerHTML = `<tr><td colspan="8" style="text-align:center;padding:2.5rem;color:var(--text-secondary);">${emptyMsg}</td></tr>`;
      return;
    }

    matrixTbody.innerHTML = filtered.map(item => `
      <tr id="entry-${item.canonical_id}" data-id="${item.id}" data-uid="${item.uid}">
        <td style="font-family:var(--font-mono);color:var(--text-muted);">
          <a href="?id=${item.id}" onclick="event.preventDefault(); window.navigateToQuery({id: ${item.id}})" style="color:inherit;text-decoration:none;">#${item.id}</a>
        </td>
        <td>
          <code class="matrix-symbol">${escapeHtml(item.symbol)}</code>
        </td>
        <td>
          <span class="badge ${item.type === 'HTML' ? 'badge-foundational' : 'badge-intermediate'} clickable-badge" onclick="window.navigateToQuery({type: '${item.type}'})">
            ${escapeHtml(item.type)}
          </span>
        </td>
        <td>
          <span class="badge badge-milestone badge-milestone-${(item.introduced_in || 'beyond').toLowerCase()} clickable-badge" onclick="window.navigateToQuery({intro: '${item.introduced_in}'})" title="${lang === 'pt' ? 'Introduzido em ' + item.introduced_in : 'Introduced in ' + item.introduced_in}">
            ${escapeHtml(item.introduced_in || '—')}
          </span>
        </td>
        <td>
          <span class="badge badge-${item.tier} clickable-badge" onclick="window.navigateToQuery({lev: ${item.lev}})">
            ${tierIcon(item.tier)} ${escapeHtml(item.tier)}
          </span>
        </td>
        <td>
          <span class="badge badge-status-${(item.status || 'yes').toLowerCase()}">${escapeHtml(item.status)}</span>
          ${item.status_note ? `<small class="matrix-status-note" title="${escapeHtml(item.status_note)}">${escapeHtml(item.status_note)}</small>` : ''}
        </td>
        <td class="matrix-desc">${item.desc[lang] || item.desc.pt}</td>
        <td style="white-space:nowrap;">
          ${item.mdn_url ? `<a href="${item.mdn_url}" target="_blank" rel="noopener noreferrer" class="matrix-link">MDN ↗</a>` : ''}
          ${item.pat_ref ? ` &bull; <a href="${ROOT}demos/index.html?pat=${item.pat_ref}#core-patterns" class="matrix-link" style="color:var(--color-swiss-red);font-weight:700;">Demo P${item.pat_ref} ↗</a>` : ''}
        </td>
      </tr>
    `).join('');
  };

  // --- 6. Render 4-View Patterns Showcase (Rendered | X-Ray | HTML | CSS + Walkthrough) ---
  window.renderPatternsShowcase = function () {
    if (!patternsContainer || !store.patterns) return;
    const lang = (window.I18N && window.I18N.currentLang) || 'pt';
    const limitAttr = patternsContainer.getAttribute('data-limit');
    const items = limitAttr ? store.patterns.slice(0, parseInt(limitAttr, 10)) : store.patterns;

    patternsContainer.innerHTML = items.map(p => {
      const resolvedDemoHtml = (p.demo_html || '').replace(/\{\{ROOT\}\}/g, ROOT);
      const walk = p.walkthrough || {};
      const walkHtml = (walk.html && (walk.html[lang] || walk.html.pt)) || (p.purpose[lang] || p.purpose.pt);
      const walkCss = (walk.css && (walk.css[lang] || walk.css.pt)) || (p.summary[lang] || p.summary.pt);
      const walkUx = (walk.ux && (walk.ux[lang] || walk.ux.pt)) || '';
      const isolatedLink = p.isolated_demo_url ? `${ROOT}${p.isolated_demo_url}` : '';

      return `
      <article class="pattern-view" id="pattern-${p.code.toLowerCase()}" data-pat="${p.pat}" data-uid="${p.uid}">
        <header class="pattern-header">
          <div>
            <div style="display:flex;align-items:center;gap:var(--space-2);flex-wrap:wrap;margin-bottom:var(--space-1);">
              <span class="badge badge-${p.tier}">${tierIcon(p.tier)} ${p.tier}</span>
              <span class="badge badge-status-yes">${escapeHtml(p.assignment)}</span>
              <span style="font-family:var(--font-mono);font-size:var(--text-xs);color:var(--text-muted);">${p.code} &bull; DRUMTIKS '26</span>
            </div>
            <h3 class="pattern-title">${escapeHtml(p.title[lang] || p.title.pt)}</h3>
          </div>
          <div class="pattern-tabs" role="tablist" aria-label="${escapeHtml(p.code)} Sandbox Views">
            <button type="button" class="tab-btn active" role="tab" aria-selected="true" data-tab="preview" data-pattern="${p.code}">${window.I18N.t('tab_preview')}</button>
            <button type="button" class="tab-btn" role="tab" aria-selected="false" data-tab="xray" data-pattern="${p.code}">${window.I18N.t('tab_xray')}</button>
            <button type="button" class="tab-btn" role="tab" aria-selected="false" data-tab="html" data-pattern="${p.code}">${window.I18N.t('tab_html')}</button>
            <button type="button" class="tab-btn" role="tab" aria-selected="false" data-tab="css" data-pattern="${p.code}">${window.I18N.t('tab_css')}</button>
          </div>
        </header>

        <div style="padding:var(--space-3) var(--space-5);background:var(--bg-surface-subtle);border-bottom:1px solid var(--border-color);font-size:var(--text-xs);display:flex;flex-wrap:wrap;gap:var(--space-3);justify-content:space-between;align-items:center;">
          <div style="max-width:72ch;color:var(--text-secondary);">
            <strong style="color:var(--text-primary);">${window.I18N.t('purpose_label')}</strong> ${escapeHtml(p.purpose[lang] || p.purpose.pt)}
          </div>
          <div style="font-family:var(--font-mono);display:flex;flex-wrap:wrap;gap:0.5rem;align-items:center;">
            ${p.mdn_links.map(l => `<a href="${l.url}" target="_blank" rel="noopener noreferrer" class="wd-mesh-chip">MDN: ${escapeHtml(l.label)} ↗</a>`).join('')}
            ${isolatedLink ? `<a href="${isolatedLink}" class="wd-mesh-chip" style="border-color:var(--color-swiss-red);color:var(--color-swiss-red);">🔬 ${lang === 'pt' ? 'Sandbox Isolada' : 'Isolated Lab'} ↗</a>` : ''}
          </div>
        </div>

        <!-- X-Ray Inspector Legend Bar -->
        <div class="xray-legend-bar">
          <span>${window.I18N.t('xray_legend')}</span>
        </div>

        <!-- Pane 1 & 2: Live Rendered + X-Ray Inspector -->
        <div class="pattern-sandbox-preview active" id="pane-preview-${p.code}">
          ${resolvedDemoHtml}
        </div>

        <!-- Pane 3: HTML Code -->
        <div class="pattern-code-view" id="pane-html-${p.code}">
          <button type="button" class="btn-copy-code" data-code="${escapeHtml(p.html_code)}">${window.I18N.t('btn_copy')}</button>
          <pre><code>${escapeHtml(p.html_code)}</code></pre>
        </div>

        <!-- Pane 4: CSS Code -->
        <div class="pattern-code-view" id="pane-css-${p.code}">
          <button type="button" class="btn-copy-code" data-code="${escapeHtml(p.css_code)}">${window.I18N.t('btn_copy')}</button>
          <pre><code>${escapeHtml(p.css_code)}</code></pre>
        </div>

        <!-- Anatomical Code Snippet Explanations -->
        <div class="sandbox-walkthrough">
          <div class="walkthrough-item">
            <strong>📄 ${window.I18N.t('walk_html_label')}</strong>
            <span>${escapeHtml(walkHtml)}</span>
          </div>
          <div class="walkthrough-item">
            <strong>🎨 ${window.I18N.t('walk_css_label')}</strong>
            <span>${escapeHtml(walkCss)}</span>
          </div>
          ${walkUx ? `
          <div class="walkthrough-item">
            <strong>🧭 ${window.I18N.t('walk_ux_label')}</strong>
            <span>${escapeHtml(walkUx)}</span>
          </div>` : ''}
        </div>
      </article>
      `;
    }).join('');

    // Attach 4-Tab Handlers
    patternsContainer.querySelectorAll('.tab-btn[data-pattern]').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        const patCode = btn.getAttribute('data-pattern');
        const parent = btn.closest('.pattern-view');

        parent.querySelectorAll('.tab-btn').forEach(b => {
          b.classList.toggle('active', b === btn);
          b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
        });

        parent.classList.toggle('is-xray-mode', tab === 'xray');

        const previewPane = parent.querySelector(`#pane-preview-${patCode}`);
        const htmlPane = parent.querySelector(`#pane-html-${patCode}`);
        const cssPane = parent.querySelector(`#pane-css-${patCode}`);

        if (previewPane) previewPane.style.display = (tab === 'preview' || tab === 'xray') ? 'block' : 'none';
        if (htmlPane) htmlPane.style.display = tab === 'html' ? 'block' : 'none';
        if (cssPane) cssPane.style.display = tab === 'css' ? 'block' : 'none';
      });
    });

    // Attach Copy Handlers
    patternsContainer.querySelectorAll('.btn-copy-code').forEach(btn => {
      btn.addEventListener('click', () => {
        const pre = btn.closest('.pattern-code-view')?.querySelector('code');
        const code = pre ? pre.textContent : btn.getAttribute('data-code');
        navigator.clipboard.writeText(code).then(() => {
          const original = btn.textContent;
          btn.textContent = window.I18N.t('copied');
          setTimeout(() => { btn.textContent = original; }, 1400);
        });
      });
    });
  };

  // --- 7. Matrix Filter & Sort Listeners ---
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
  if (filterMilestone) {
    filterMilestone.addEventListener('change', (e) => {
      state.milestoneFilter = e.target.value;
      window.renderMatrixTable();
    });
  }
  if (filterTier) {
    filterTier.addEventListener('change', (e) => {
      state.tierFilter = e.target.value;
      const mapped = state.tierFilter === 'foundational' ? 'foundation' : state.tierFilter;
      if (window.WD101 && window.WD101.applyTiers) {
        window.WD101.applyTiers(mapped === 'all' ? ['foundation', 'intermediate', 'advanced'] : [mapped], true);
      }
      window.renderMatrixTable();
      window.renderMatrixAsideCategories();
    });
  }

  // Live synchronization with global tier events from top nav or home
  window.addEventListener('wd101:tierchange', (e) => {
    const tierStr = (e.detail && (e.detail.tierStr || e.detail.tier)) ? (e.detail.tierStr || e.detail.tier) : 'all';
    if (tierStr === 'all') {
      state.tierFilter = 'all';
      if (filterTier) filterTier.value = 'all';
    } else {
      const parts = tierStr.split(',').map(s => s.trim().toLowerCase());
      if (parts.length === 1) {
        const p = parts[0];
        state.tierFilter = (p === 'foundation' || p === 'foundational' || p === '1') ? 'foundational' : p;
        if (filterTier) filterTier.value = state.tierFilter;
      } else {
        state.tierFilter = parts.map(p => (p === 'foundation' || p === '1') ? 'foundational' : p);
        if (filterTier) filterTier.value = 'all';
      }
    }
    if (window.renderMatrixTable) {
      window.renderMatrixTable();
      window.renderMatrixAsideCategories();
    }
  });
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
      window.renderMatrixAsideCategories();
    });
  }

  document.querySelectorAll('.matrix-table th[data-sort]').forEach(th => {
    th.addEventListener('click', () => {
      const col = th.getAttribute('data-sort');
      if (state.sortColumn === col) {
        state.sortAsc = !state.sortAsc;
      } else {
        state.sortColumn = col;
        state.sortAsc = true;
      }
      window.renderMatrixTable();
    });
  });

  // --- 8. Universal Query Router ---
  window.navigateToQuery = function (params) {
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

  window.applyQueryRouting = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const hash = window.location.hash;

    if (hash && hash.includes('?')) {
      const hashQuery = hash.split('?')[1];
      const hashParams = new URLSearchParams(hashQuery);
      hashParams.forEach((v, k) => urlParams.set(k, v));
    }

    let needsRender = false;

    const uidParam = urlParams.get('uid');
    if (uidParam) {
      if (uidParam.startsWith('pat-')) urlParams.set('pat', uidParam.replace('pat-', ''));
      else if (uidParam.startsWith('ass-')) urlParams.set('ass', uidParam.replace('ass-', ''));
      else if (uidParam.startsWith('mat-')) urlParams.set('mat', uidParam.replace('mat-', ''));
      else if (uidParam.startsWith('cat-')) urlParams.set('cat', uidParam.replace('cat-', ''));
    }

    const catParam = urlParams.get('cat');
    if (catParam && store.categories) {
      const matchedCat = /^\d+$/.test(catParam)
        ? store.categories.find(c => c.num_id === parseInt(catParam, 10))
        : store.categories.find(c => c.id === catParam || c.slug === catParam);
      if (matchedCat) {
        state.categoryFilter = matchedCat.id;
        if (filterCategory) filterCategory.value = matchedCat.id;
        needsRender = true;
      }
    }

    // Tier resolution priority: URL (?lev= or ?tier= or ?difficulty=) -> localStorage -> Cookie -> document.documentElement
    const levParam = urlParams.get('lev') || urlParams.get('tier') || urlParams.get('difficulty');
    const storedTier = localStorage.getItem('wd101_tier');
    const cookieMatch = document.cookie.match(/(?:^|;\s*)wd101_tier=([^;]+)/);
    const cookieTier = cookieMatch ? decodeURIComponent(cookieMatch[1]) : null;
    const tierSource = levParam || storedTier || cookieTier || (window.WD101 && window.WD101.getTier ? window.WD101.getTier() : document.documentElement.getAttribute('data-tier'));

    if (tierSource && tierSource !== 'all') {
      const parts = tierSource.split(',').map(s => s.trim().toLowerCase());
      if (parts.length === 1) {
        const p = parts[0];
        if (p === '1' || p === 'foundation' || p === 'foundational') state.tierFilter = 'foundational';
        else if (p === '2' || p === 'intermediate') state.tierFilter = 'intermediate';
        else if (p === '3' || p === 'advanced') state.tierFilter = 'advanced';
        if (filterTier) filterTier.value = state.tierFilter;
      } else {
        state.tierFilter = parts.map(p => (p === 'foundation' || p === '1') ? 'foundational' : p);
        if (filterTier) filterTier.value = 'all';
      }
      needsRender = true;
    }

    const introParam = urlParams.get('intro') || urlParams.get('milestone');
    if (introParam) {
      state.milestoneFilter = introParam.toUpperCase();
      if (filterMilestone) filterMilestone.value = state.milestoneFilter;
      needsRender = true;
    }

    const statusParam = urlParams.get('status');
    if (statusParam) {
      state.statusFilter = statusParam.toUpperCase();
      if (filterStatus) filterStatus.value = state.statusFilter;
      needsRender = true;
    }

    const typeParam = urlParams.get('type');
    if (typeParam) {
      state.typeFilter = typeParam.toUpperCase();
      if (filterType) filterType.value = state.typeFilter;
      needsRender = true;
    }

    const qParam = urlParams.get('q');
    if (qParam) {
      state.searchQuery = qParam;
      if (matrixSearch) matrixSearch.value = qParam;
      needsRender = true;
    }

    if (needsRender) {
      window.renderMatrixTable();
      window.renderMatrixAsideCategories();
    }

    const patParam = urlParams.get('pat');
    if (patParam) {
      const num = parseInt(patParam.replace(/[^0-9]/g, ''), 10);
      const targetCard = document.querySelector(`.pattern-view[data-pat="${num}"]`) ||
                         document.getElementById(`pattern-p${num}`);
      if (targetCard) {
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetCard.classList.remove('highlight-target');
        void targetCard.offsetWidth;
        targetCard.classList.add('highlight-target');
        return;
      }
    }

    const assParam = urlParams.get('ass');
    const projParam = urlParams.get('proj');
    if (assParam || projParam) {
      let targetAssign = null;
      if (projParam || assParam === '3' || assParam === 'project') targetAssign = document.getElementById('assign-project');
      else if (assParam === '1' || assParam === 'ex1') targetAssign = document.getElementById('assign-ex1');
      else if (assParam === '2' || assParam === 'ex2') targetAssign = document.getElementById('assign-ex2');
      if (targetAssign) {
        targetAssign.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetAssign.classList.remove('highlight-target');
        void targetAssign.offsetWidth;
        targetAssign.classList.add('highlight-target');
        return;
      }
    }

    const matParam = urlParams.get('mat') || urlParams.get('id');
    if (matParam && matrixTbody) {
      state.searchQuery = '';
      if (matrixSearch) matrixSearch.value = '';
      window.renderMatrixTable();
      const num = parseInt(matParam.replace(/[^0-9]/g, ''), 10);
      const row = document.querySelector(`tr[data-id="${num}"]`) ||
                  document.querySelector(`tr[data-uid="mat-${num}"]`);
      if (row) {
        row.scrollIntoView({ behavior: 'smooth', block: 'center' });
        row.classList.remove('highlight-target');
        void row.offsetWidth;
        row.classList.add('highlight-target');
      }
    }
  };

  // --- 9. Initial Render ---
  window.populateCategoriesFilter();
  window.I18N.updateUI();
  window.renderMatrixTable();
  window.applyQueryRouting();
  window.addEventListener('popstate', () => window.applyQueryRouting());
});

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
