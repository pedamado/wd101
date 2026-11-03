/**
 * WD101 Learning Scaffold — Design System & Pattern Library Controller
 * File: learning-scaffold/assets/js/design-system.js
 * Progressive enhancement only: all layout, 3D Vinyl Crate, X-Ray Grid,
 * and 12-state Pass Pricing Simulator work in 100% Pure CSS without JS.
 */

(() => {
  // 1. Tri-State Color Scheme Override (<meta name="color-scheme"> + localStorage)
  const metaScheme = document.querySelector('meta[name="color-scheme"]');
  const themeRadios = document.querySelectorAll('input[name="doc-theme"]');
  const systemLabel = document.getElementById('system-theme-label');
  const mqlDark = window.matchMedia('(prefers-color-scheme: dark)');

  const updateSystemHint = () => {
    if (systemLabel) {
      systemLabel.textContent = `System (${mqlDark.matches ? 'Dark' : 'Light'})`;
    }
  };

  const applyStoredScheme = (val) => {
    const effective = val === 'light' || val === 'dark' ? val : 'light dark';
    if (metaScheme) metaScheme.content = effective;
    themeRadios.forEach((r) => { r.checked = (r.value === effective); });
  };

  try {
    applyStoredScheme(localStorage.getItem('color-scheme'));
  } catch (_) {}
  updateSystemHint();
  mqlDark.addEventListener('change', updateSystemHint);

  themeRadios.forEach((radio) => {
    radio.addEventListener('change', () => {
      const val = radio.value;
      if (metaScheme) metaScheme.content = val;
      try {
        if (val === 'light dark') {
          localStorage.removeItem('color-scheme');
        } else {
          localStorage.setItem('color-scheme', val);
        }
      } catch (_) {}
    });
  });

  window.addEventListener('storage', (e) => {
    if (e.key === 'color-scheme') applyStoredScheme(e.newValue);
  });

  // 2. Content & UI Pattern Inventory Search + Filter
  const searchInput = document.getElementById('inv-search-input');
  const tierBtns = document.querySelectorAll('[data-tier-filter]');
  const lensBtns = document.querySelectorAll('[data-lens-filter]');
  const rows = document.querySelectorAll('#inventory-table tbody tr');
  const statusEl = document.getElementById('inv-status-count');
  let activeTier = 'all';
  let activeLens = 'all';

  const filterInventory = () => {
    const q = (searchInput?.value || '').trim().toLowerCase();
    let shown = 0;
    rows.forEach((row) => {
      const matchTier = activeTier === 'all' || row.dataset.tier === activeTier;
      const matchLens = activeLens === 'all' || row.dataset.lens === activeLens;
      const matchText = !q || row.textContent.toLowerCase().includes(q);
      const visible = matchTier && matchLens && matchText;
      row.hidden = !visible;
      if (visible) shown++;
    });
    if (statusEl) {
      statusEl.textContent = `Showing ${shown} of ${rows.length} documented entries`;
    }
  };

  searchInput?.addEventListener('input', filterInventory);

  tierBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeTier = btn.dataset.tierFilter;
      tierBtns.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      filterInventory();
    });
  });

  lensBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeLens = btn.dataset.lensFilter;
      lensBtns.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      filterInventory();
    });
  });

  // 3. Copy Snippet Buttons
  document.querySelectorAll('.copy-code-btn').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const code = btn.closest('.code-figure')?.querySelector('code')?.textContent || '';
      try {
        await navigator.clipboard.writeText(code);
        const prev = btn.textContent;
        btn.textContent = 'Copied ✓';
        setTimeout(() => { btn.textContent = prev; }, 1600);
      } catch (_) {}
    });
  });

  // 4. Native <dialog> Modal Demo
  const dialogBtn = document.getElementById('open-receipt-modal-btn');
  const receiptDialog = document.getElementById('ds-receipt-dialog');
  if (dialogBtn && receiptDialog && typeof receiptDialog.showModal === 'function') {
    dialogBtn.addEventListener('click', () => receiptDialog.showModal());
  }

  // 5. Sync aria-invalid with :user-invalid + WeakMap fallback for legacy browsers
  const demoForm = document.getElementById('ds-validation-demo');
  if (demoForm) {
    demoForm.addEventListener('submit', (e) => e.preventDefault());
    const dirtyMap = new WeakMap();
    const supportsUserInvalid = CSS.supports('selector(:user-invalid)');

    const syncField = (el) => {
      if (!el || typeof el.checkValidity !== 'function') return;
      if (supportsUserInvalid) {
        el.setAttribute('aria-invalid', el.matches(':user-invalid') ? 'true' : 'false');
      } else {
        const valid = el.checkValidity();
        el.classList.toggle('user-invalid-fallback', !valid);
        el.classList.toggle('user-valid-fallback', valid);
        if (!valid) el.setAttribute('aria-invalid', 'true');
        else el.removeAttribute('aria-invalid');
      }
    };

    demoForm.addEventListener('blur', (e) => {
      const st = dirtyMap.get(e.target) || { interacted: false, blurred: false };
      st.blurred = true;
      dirtyMap.set(e.target, st);
      if (supportsUserInvalid || st.interacted) syncField(e.target);
    }, true);

    demoForm.addEventListener('input', (e) => {
      const st = dirtyMap.get(e.target) || { interacted: false, blurred: false };
      st.interacted = true;
      dirtyMap.set(e.target, st);
      if (e.target.hasAttribute('aria-invalid') || st.blurred) syncField(e.target);
    });
  }

  // 6. Legacy @supports not selector(:has(*)) fallback for selectable cards
  if (!CSS.supports('selector(:has(*))')) {
    document.querySelectorAll('.ticket-tier-card input, .addon-checkbox-label input').forEach((inp) => {
      const syncSel = () => {
        if (inp.type === 'radio') {
          document.querySelectorAll(`input[name="${inp.name}"]`).forEach((r) => {
            r.closest('.ticket-tier-card')?.classList.toggle('is-selected', r.checked);
          });
        } else {
          inp.closest('.addon-checkbox-label')?.classList.toggle('is-selected', inp.checked);
        }
      };
      syncSel();
      inp.addEventListener('change', syncSel);
    });
  }
})();
