/**
 * Internationalization (i18n) Engine for WD101 Learning Scaffold
 * Supports Portuguese (pt) and English (en) with reactive UI updates.
 * Note: Declarative .lang-pt / .lang-en spans are preferred on mixed markup so child elements are never overwritten.
 */

window.I18N = {
  currentLang: localStorage.getItem('wd101_lang') === 'en' ? 'en' : 'pt',

  dict: {
    pt: {
      site_title: "WD101 — Plataforma Pedagógica",
      brand_sub: "FBAUP Design 2026/27",
      nav_goals: "Objetivos & RWD",
      nav_assignments: "Enunciados",
      nav_ixd: "Design de Interação",
      nav_demos: "Demos & Boilerplates",
      nav_matrix: "Matriz HTML & CSS",
      theme_toggle: "Escuro",
      lang_toggle: "EN",

      hero_eyebrow: "Unidade Curricular Web Design 101 • FBAUP",
      hero_title: "Andaime Pedagógico de Web Design & Design de Interação",
      hero_desc: "Percurso progressivo de HTML5 e CSS moderno para estudantes de Design de Comunicação, articulado através do festival DRUMTIKS '26 — do fluxo normal do documento à responsividade intrínseca e sistemas de design.",
      hero_btn_demos: "Explorar Demos & Boilerplates",
      hero_btn_matrix: "Consultar Matriz HTML & CSS",

      goals_heading: "Objetivos de Aprendizagem & Como Estudar RWD",
      goals_sub: "Organizados nos módulos estruturantes da unidade curricular — expanda cada cartão para ver as tags e práticas associadas.",

      assign_heading: "Enunciados & Progressão Pedagógica",
      assign_sub: "Três marcos práticos graduais articulados através do universo DRUMTIKS '26.",

      matrix_heading: "Matriz Curricular de Referência HTML5 & CSS3 (MDN)",
      matrix_sub: "Catálogo completo com 314 entradas oficiais (normas W3C e currículo fundamental de Web Design). Pesquise por tag ou propriedade, filtre por escalão ou categoria, e salte para a documentação MDN ou padrão interativo.",
      matrix_search_placeholder: "Pesquisar por tag, seletor, propriedade ou palavra-chave...",
      filter_all_types: "Todos os Tipos",
      filter_html: "Apenas HTML",
      filter_css: "Apenas CSS",
      filter_all_tiers: "Todos os Escalões",
      filter_foundational: "🟢 Básico / Foundational",
      filter_intermediate: "🔵 Intermédio / Intermediate",
      filter_advanced: "🟣 Avançado / Advanced",
      filter_all_milestones: "Todos os Marcos",
      filter_all_status: "Todo o Estado",
      filter_status_yes: "Sim (No Curso)",
      filter_status_tbd: "TBD (Opcional)",
      filter_status_no: "Fora do Âmbito",
      filter_showing_all: "A mostrar todas as 314 entradas oficiais (12 categorias W3C)",
      filter_showing_results: "A mostrar {count} de {total} entradas",
      filter_combination_label: "Combinação ativa:",
      filter_no_results: "Nenhuma entrada corresponde à combinação de filtros selecionada.",
      filter_clear_all: "✕ Limpar Todos os Filtros",
      filter_chip_cat: "Categoria",
      filter_chip_tier: "Escalão",
      filter_chip_type: "Tipo",
      filter_chip_milestone: "Marco",
      filter_chip_status: "Estado",
      filter_chip_search: "Pesquisa",

      th_id: "#",
      th_symbol: "Tag / Seletor / Propriedade",
      th_type: "Tipo",
      th_milestone: "Marco",
      th_tier: "Escalão",
      th_status: "No Curso?",
      th_desc: "Definição Sintética",
      th_links: "Ligações",

      patterns_heading: "13 Padrões Estruturantes DRUMTIKS '26 (Sandboxes 4-Vistas)",
      patterns_sub: "Cada padrão inclui Vista Renderizada, Inspeção Raio-X (Box Model & Alvos), Código HTML, Código CSS e explicação anatómica passo a passo.",
      tab_preview: "▶ Renderizado",
      tab_xray: "🩻 Raio-X",
      tab_html: "📄 HTML",
      tab_css: "🎨 CSS",
      btn_copy: "📋 Copiar Código",
      copied: "✓ Copiado!",
      mdn_ref_label: "Referências MDN:",
      purpose_label: "Propósito Pedagógico:",
      walk_html_label: "1. Semântica HTML & Acessibilidade",
      walk_css_label: "2. Motor CSS & Geometria",
      walk_ux_label: "3. Ergonomia & Design de Interação",
      xray_legend: "🩻 MODO RAIO-X ATIVO: Tracejado azul = Caixas Block/Flex/Grid • Contorno verde = Alvos interativos • Etiquetas = Landmarks semânticos",

      footer_text: "Faculdade de Belas Artes da Universidade do Porto • Licenciatura em Design de Comunicação • WD101"
    },

    en: {
      site_title: "WD101 — Pedagogical Platform",
      brand_sub: "FBAUP Design 2026/27",
      nav_goals: "Objectives & RWD",
      nav_assignments: "Assignments",
      nav_ixd: "Interaction Design",
      nav_demos: "Demos & Boilerplates",
      nav_matrix: "HTML & CSS Matrix",
      theme_toggle: "Dark",
      lang_toggle: "PT",

      hero_eyebrow: "Web Design 101 Course • FBAUP",
      hero_title: "Web Design & Interaction Design Learning Scaffold",
      hero_desc: "Progressive HTML5 and modern CSS pathway for Communication Design students, contextualized around the DRUMTIKS '26 festival — from normal document flow to intrinsic responsiveness and design systems.",
      hero_btn_demos: "Explore Demos & Boilerplates",
      hero_btn_matrix: "Browse HTML & CSS Matrix",

      goals_heading: "Learning Objectives & How to Study RWD",
      goals_sub: "Structured across the course's core modules — expand any card to inspect practiced HTML/CSS primitives and resources.",

      assign_heading: "Assignments & Pedagogical Progression",
      assign_sub: "Three gradual hands-on milestones unified through the DRUMTIKS '26 festival case study.",

      matrix_heading: "HTML5 & CSS3 Curriculum Reference Matrix (MDN)",
      matrix_sub: "Complete catalog of 314 official web standards entries (W3C standards and foundational web design curriculum). Search tags or properties, filter by tier or category, and jump straight to MDN docs or live patterns.",
      matrix_search_placeholder: "Search tag, selector, property or keyword...",
      filter_all_types: "All Types",
      filter_html: "HTML Only",
      filter_css: "CSS Only",
      filter_all_tiers: "All Tiers",
      filter_foundational: "🟢 Foundational",
      filter_intermediate: "🔵 Intermediate",
      filter_advanced: "🟣 Advanced",
      filter_all_milestones: "All Milestones",
      filter_all_status: "All Status",
      filter_status_yes: "Yes (In Course)",
      filter_status_tbd: "TBD (Optional)",
      filter_status_no: "Out of Scope",
      filter_showing_all: "Showing all 314 official curriculum entries (12 W3C categories)",
      filter_showing_results: "Showing {count} of {total} entries",
      filter_combination_label: "Active combination:",
      filter_no_results: "No entries match the selected filter combination.",
      filter_clear_all: "✕ Clear All Filters",
      filter_chip_cat: "Category",
      filter_chip_tier: "Tier",
      filter_chip_type: "Type",
      filter_chip_milestone: "Milestone",
      filter_chip_status: "Status",
      filter_chip_search: "Search",

      th_id: "#",
      th_symbol: "Tag / Selector / Property",
      th_type: "Type",
      th_milestone: "Milestone",
      th_tier: "Tier",
      th_status: "In Course?",
      th_desc: "Concise Definition",
      th_links: "Links",

      patterns_heading: "13 Core DRUMTIKS '26 Patterns (4-View Sandboxes)",
      patterns_sub: "Every pattern provides Rendered Preview, X-Ray Box/Target Inspector, HTML Code, CSS Code, and an anatomical code walkthrough.",
      tab_preview: "▶ Rendered",
      tab_xray: "🩻 X-Ray",
      tab_html: "📄 HTML",
      tab_css: "🎨 CSS",
      btn_copy: "📋 Copy Code",
      copied: "✓ Copied!",
      mdn_ref_label: "MDN References:",
      purpose_label: "Pedagogical Purpose:",
      walk_html_label: "1. HTML Semantics & A11y",
      walk_css_label: "2. CSS Engine & Geometry",
      walk_ux_label: "3. UX & Touch Ergonomics",
      xray_legend: "🩻 X-RAY INSPECTOR ACTIVE: Blue dashed = Block/Flex/Grid boxes • Green solid = Interactive targets • Pills = Semantic landmarks",

      footer_text: "Faculty of Fine Arts of the University of Porto • Degree in Communication Design • WD101"
    }
  },

  setLang(lang) {
    if (this.dict[lang]) {
      this.currentLang = lang;
      localStorage.setItem('wd101_lang', lang);
      document.documentElement.lang = lang;
      this.updateUI();
    }
  },

  toggleLang() {
    this.setLang(this.currentLang === 'pt' ? 'en' : 'pt');
  },

  t(key) {
    return (this.dict[this.currentLang] && this.dict[this.currentLang][key]) || key;
  },

  updateUI() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      // Guard: never overwrite elements containing declarative .lang-pt / .lang-en children
      if (el.querySelector('.lang-pt, .lang-en')) return;
      const key = el.getAttribute('data-i18n');
      if (this.dict[this.currentLang][key]) {
        el.textContent = this.dict[this.currentLang][key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (this.dict[this.currentLang][key]) {
        el.placeholder = this.dict[this.currentLang][key];
      }
    });

    if (window.renderMatrixTable) window.renderMatrixTable();
    if (window.renderMatrixAsideCategories) window.renderMatrixAsideCategories();
    if (window.renderPatternsShowcase) window.renderPatternsShowcase();
    if (window.renderAssignments) window.renderAssignments();
    if (window.populateCategoriesFilter) window.populateCategoriesFilter();
    if (window.WD101Shell && window.WD101Shell.syncControlLabels) {
      window.WD101Shell.syncControlLabels();
    }
  }
};
