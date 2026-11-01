/**
 * Internationalization (i18n) Engine for WD101 Learning Scaffold
 * Supports Portuguese (pt) and English (en) with reactive UI updates.
 */

window.I18N = {
  currentLang: localStorage.getItem('wd101_lang') || 'pt',

  dict: {
    pt: {
      site_title: "WD101 — Plataforma Pedagógica",
      brand_sub: "FBAUP Design 2026/27",
      nav_goals: "Objetivos & Como Estudar",
      nav_assignments: "Enunciados (EX1, EX2, Projeto)",
      nav_matrix: "Matriz MDN (Tags & CSS)",
      nav_patterns: "Padrões Interativos (Drumtiks)",
      theme_toggle: "Tema",
      lang_toggle: "English",

      // Hero
      hero_eyebrow: "Unidade Curricular Web Design 101 • FBAUP",
      hero_title: "Documentação & Andaime Pedagógico Interativo",
      hero_desc: "Referência completa de HTML5 Living Standard e CSS3/4/5, articulada com o universo concetual do Festival DRUMTIKS '26. Aprenda os princípios de design responsivo móvel-primeiro, sem recurso a frameworks ou JavaScript na camada de apresentação.",
      hero_btn_matrix: "Explorar Matriz de Referência",
      hero_btn_patterns: "Ver Padrões Drumtiks",

      // Goals Section
      goals_heading: "Objetivos de Aprendizagem & Como Estudar RWD",
      goals_sub: "Metodologias e modelos mentais para o sucesso no design e desenvolvimento web moderno.",
      goal_1_title: "1. Mentalidade Mobile-First",
      goal_1_desc: "Desenhe e estruture primeiro para ecrãs pequenos com o fluxo normal do documento. Adicione complexidade com breakpoints min-width progressivos.",
      goal_1_link: "📘 Guião Detalhado: Semanas 1-2 & Arquitetura Web ↗",
      goal_2_title: "2. Dimensionamento Intrínseco",
      goal_2_desc: "Deixe o conteúdo ditar a sua forma. Utilize min(), max(), clamp(), flex-basis e minmax() em vez de larguras fixas em pixels.",
      goal_2_link: "📘 Guião Detalhado: Dimensionamento Intrínseco & Box Model ↗",
      goal_3_title: "3. Tipografia Fluida & Variável",
      goal_3_desc: "Elimine dezenas de media queries tipográficas. Utilize clamp() e eixos contínuos de fontes variáveis WOFF2 auto-hospedadas.",
      goal_4_title: "4. Variáveis, Transições & Animações",
      goal_4_desc: "Controle o pipeline de apresentação com Tokens globais e locais, transição suave via light-dark(), física elástica cubic-bezier() e animações orientadas ao scroll.",
      goal_5_title: "5. Layouts Avançados: CSS Grid & Flexbox",
      goal_5_desc: "Aplique a Regra de Ouro do Layout Moderno: CSS Grid 2D para a grelha macro estrutural e Flexbox 1D alternante para micro-alinhamentos.",
      goal_6_title: "6. Seletores Modernos, Pseudo-Classes & Máquinas de Estado Zero-JS",
      goal_6_desc: "Domine o seletor relacional :has(), construa reatividade sem JavaScript com :checked, :focus-within, :target e Popover API, reduza especificidade com :where() e agrupe com :is().",
      goal_7_title: "7. Princípios de Design de Interação",
      goal_7_desc: "Alie a engenharia CSS aos modelos mentais da interação: Affordance perceptível, Signifiers explícitos, Feedback imediato, Mapeamento natural, Divulgação Progressiva e prevenção de Anti-Padrões.",
      goal_8_title: "8. Leis de Design de Interação",
      goal_8_desc: "Compreenda os modelos empíricos e limites cognitivos da mente humana: Leis de Fitts, Hick, Miller, Jakob, Limiar de Doherty e princípios Gestalt. Elimine atritos motores e sobrecarga perceptual.",
      goal_8_link: "🧠 Compêndio de Leis de UX (.md) ↗",
      goal_9_title: "9. Heurísticas de Interação",
      goal_9_desc: "Avalie interfaces com as 18 Heurísticas harmonizadas de Jakob Nielsen e Bruce Tognazzini, estruturadas em 3 níveis (Fundação, Intermédio e Avançado). Inclui matriz com filtro dinâmico e grelha interativa de avaliação para apresentações críticas.",
      goal_9_link_guide: "📖 Guia Completo & Matriz Filtrável ↗",
      goal_9_link_checklist: "📋 Checklist Interativa & Grelha de Avaliação ↗",
      goal_10_title: "10. Transição para IA & Antigravity ADE",
      goal_10_desc: "Transite do código manual no VS Code para o potencial do Antigravity (Modo ADE + Editor IDE). Use a IA como mentor socrático, crie sandboxes paralelas em /demos/ com links MDN e aplique checklists 360° de controlo de qualidade.",
      goal_10_link: "🤖 Guião Detalhado: Transição para Antigravity ADE ↗",

      // Assignments Section
      assign_heading: "Enunciados & Decomposição Pedagógica",
      assign_sub: "Os três momentos letivos articulados através do estudo de caso Drumtiks '26.",
      assign_ex1_title: "EX1: Hello Wendy",
      assign_ex1_tag: "HTML5 Semântico & Fluxo Natural",
      assign_ex1_desc: "Estruturação semântica com landmarks HTML5 puros. Sem classes nem IDs. Seletores puramente descendentes e unidades relativas.",
      assign_ex2_title: "EX2: Media & Box Model",
      assign_ex2_tag: "CSS Reset, Media & Geometria",
      assign_ex2_desc: "Introdução ao Eric Meyer Reset v2.0, classes, imagens responsivas com picture, vídeos, fontes web e posições relative/absolute/sticky.",
      assign_project_title: "Projeto Final: Drumtiks '26",
      assign_project_tag: "Portal Responsivo Completo Pure CSS",
      assign_project_desc: "A consagração: 13 padrões de interação avançados, grelha assimétrica, menu off-canvas, acordeão, modais, motor de bilhetes e temas.",

      // Matrix Section
      matrix_heading: "Matriz Curricular de Referência MDN",
      matrix_sub: "Catálogo exaustivo com 323+ entradas. Pesquise, filtre por escalão ou categoria, e abra a documentação oficial ou padrão correspondente.",
      matrix_search_placeholder: "Pesquisar por tag, seletor, propriedade ou palavra-chave...",
      filter_all_types: "Todos os Tipos",
      filter_html: "Apenas HTML",
      filter_css: "Apenas CSS",
      filter_all_tiers: "Todos os Escalões",
      filter_foundational: "Básico / Foundational",
      filter_intermediate: "Intermédio / Intermediate",
      filter_advanced: "Avançado / Advanced",
      filter_all_status: "Todo o Estado",
      filter_status_yes: "Sim (No Curso)",
      filter_status_tbd: "TBD (A Considerar)",
      filter_status_no: "Não (Fora do Âmbito)",

      th_id: "#",
      th_symbol: "Tag / Seletor / Propriedade",
      th_type: "Tipo",
      th_tier: "Escalão",
      th_status: "No Curso?",
      th_desc: "Definição Sintética",
      th_links: "Ligações",

      // Patterns Section
      patterns_heading: "Catálogo de Padrões Interativos Drumtiks",
      patterns_sub: "Soluções práticas, comentadas e prontas a inspecionar para o projeto final.",
      tab_preview: "Vista Renderizada (Sandbox)",
      tab_html: "Código HTML",
      tab_css: "Código CSS",
      btn_copy: "Copiar Código",
      copied: "Copiado!",
      mdn_ref_label: "Referências MDN:",
      purpose_label: "Propósito Pedagógico:",

      footer_text: "Faculdade de Belas Artes da Universidade do Porto • Licenciatura em Design de Comunicação • WD101"
    },

    en: {
      site_title: "WD101 — Pedagogical Platform",
      brand_sub: "FBAUP Design 2026/27",
      nav_goals: "Study Goals & How-To",
      nav_assignments: "Assignments (EX1, EX2, Project)",
      nav_matrix: "MDN Matrix (Tags & CSS)",
      nav_patterns: "Interactive Patterns (Drumtiks)",
      theme_toggle: "Theme",
      lang_toggle: "Português",

      // Hero
      hero_eyebrow: "Web Design 101 Course • FBAUP",
      hero_title: "Interactive Documentation & Learning Scaffold",
      hero_desc: "Comprehensive reference matrix of HTML5 Living Standard and CSS3/4/5, built around the DRUMTIKS '26 festival case study. Master mobile-first responsive web design with zero JavaScript on the presentation layer.",
      hero_btn_matrix: "Explore Reference Matrix",
      hero_btn_patterns: "View Drumtiks Patterns",

      // Goals Section
      goals_heading: "Learning Objectives & How to Study RWD",
      goals_sub: "Core mental models and methodologies for modern web design and development.",
      goal_1_title: "1. Mobile-First Mindset",
      goal_1_desc: "Design and code for small viewports first using natural document flow. Layer complexity using progressive min-width media queries.",
      goal_1_link: "📘 Detailed Guide: Weeks 1-2 & Web Architecture ↗",
      goal_2_title: "2. Intrinsic Sizing",
      goal_2_desc: "Let content inform dimensions. Leverage min(), max(), clamp(), flex-basis, and minmax() rather than rigid pixel widths.",
      goal_2_link: "📘 Detailed Guide: Intrinsic Sizing & Box Model ↗",
      goal_3_title: "3. Fluid & Variable Typography",
      goal_3_desc: "Eliminate dozens of breakpoint queries. Use fluid clamp() equations and continuous font-variation axes with self-hosted WOFF2.",
      goal_4_title: "4. Variables, Transitions & Animations",
      goal_4_desc: "Master presentation pipelines with design tokens, smooth color-scheme switches via light-dark(), spring physics easing, and scroll-driven animations.",
      goal_5_title: "5. Advanced Layouts: CSS Grid & Flexbox",
      goal_5_desc: "Apply the Golden Rule of Modern Layout: 2D CSS Grid for macro-structural skeleton and alternating 1D Flexbox for micro-alignments.",
      goal_6_title: "6. Modern Selectors, Pseudo-Classes & Zero-JS State Machines",
      goal_6_desc: "Master relational parent queries with :has(), architect pure CSS reactive state machines using :checked, :focus-within, :target, and Popover API, flatten specificity with :where() and group with :is().",
      goal_7_title: "7. Interaction Design Principles",
      goal_7_desc: "Connect CSS engineering to cognitive interaction mental models: Perceptible Affordance, Explicit Signifiers, Immediate Feedback, Natural Mapping, Progressive Disclosure, and preventing Web Anti-Patterns.",
      goal_8_title: "8. Interaction Design Laws",
      goal_8_desc: "Master empirical cognitive models and human limits: Fitts's, Hick's, Miller's, Jakob's Laws, Doherty Threshold, and Gestalt principles. Eliminate motor friction and perceptual load.",
      goal_8_link: "🧠 UX Laws Compendium (.md) ↗",
      goal_9_title: "9. Interaction Heuristics",
      goal_9_desc: "Audit interfaces using 18 harmonized Usability Heuristics by Jakob Nielsen and Bruce Tognazzini, organized across 3 difficulty tiers (Foundation, Intermediate, Advanced). Features a filterable matrix and an interactive printable evaluation checklist for critique sessions.",
      goal_9_link_guide: "📖 Comprehensive Guide & Filterable Matrix ↗",
      goal_9_link_checklist: "📋 Interactive Checklist & Evaluation Form ↗",
      goal_10_title: "10. Transition to AI & Antigravity ADE",
      goal_10_desc: "Transition from manual coding in VS Code to harness Antigravity (ADE Mode + IDE Editor). Use AI as a Socratic mentor, spin up parallel learning sandboxes in /demos/ with MDN links, inspect the browser via DevTools, and enforce rigorous quality & asset path checklists.",
      goal_10_link: "🤖 Detailed Guide: Transition to Antigravity ADE ↗",

      // Assignments Section
      assign_heading: "Assignments & Pedagogical Progression",
      assign_sub: "The three course milestones deconstructed from the Drumtiks '26 case study.",
      assign_ex1_title: "EX1: Hello Wendy",
      assign_ex1_tag: "Semantic HTML5 & Natural Flow",
      assign_ex1_desc: "Semantic structure using clean HTML5 landmarks. Strictly no classes or IDs. Descendant selectors and relative rem units only.",
      assign_ex2_title: "EX2: Media & Box Model",
      assign_ex2_tag: "CSS Reset, Media & Geometry",
      assign_ex2_desc: "Introduction to Eric Meyer Reset v2.0, classes, responsive images with picture, video, webfonts, and relative/absolute/sticky positioning.",
      assign_project_title: "Final Project: Drumtiks '26",
      assign_project_tag: "Full Pure CSS Responsive Portal",
      assign_project_desc: "The capstone: 13 advanced patterns, asymmetric grid, mobile off-canvas drawer, accordion, modals, reactive pricing, and theme switcher.",

      // Matrix Section
      matrix_heading: "MDN Reference Curriculum Matrix",
      matrix_sub: "Exhaustive 323+ entries catalog. Search, filter by tier or category, and jump straight to MDN documentation or the live demo pattern.",
      matrix_search_placeholder: "Search tag, selector, property or keyword...",
      filter_all_types: "All Types",
      filter_html: "HTML Only",
      filter_css: "CSS Only",
      filter_all_tiers: "All Tiers",
      filter_foundational: "Basic / Foundational",
      filter_intermediate: "Intermediate",
      filter_advanced: "Advanced",
      filter_all_status: "All Status",
      filter_status_yes: "Yes (In Course)",
      filter_status_tbd: "TBD (Consider)",
      filter_status_no: "No (Out of Scope)",

      th_id: "#",
      th_symbol: "Tag / Selector / Property",
      th_type: "Type",
      th_tier: "Tier",
      th_status: "In Course?",
      th_desc: "Concise Definition",
      th_links: "Links",

      // Patterns Section
      patterns_heading: "Drumtiks Interactive Patterns Catalog",
      patterns_sub: "Field-tested, heavily commented pure CSS interaction patterns for the final project.",
      tab_preview: "Live Preview (Sandbox)",
      tab_html: "HTML Code",
      tab_css: "CSS Code",
      btn_copy: "Copy Code",
      copied: "Copied!",
      mdn_ref_label: "MDN References:",
      purpose_label: "Pedagogical Purpose:",

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
    return this.dict[this.currentLang][key] || key;
  },

  updateUI() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
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

    const langToggleBtn = document.getElementById('lang-toggle-btn');
    if (langToggleBtn) {
      langToggleBtn.textContent = this.t('lang_toggle');
    }

    if (window.renderMatrixTable) {
      window.renderMatrixTable();
    }
    if (window.renderPatternsShowcase) {
      window.renderPatternsShowcase();
    }
    if (window.renderAssignments) {
      window.renderAssignments();
    }
    if (window.populateCategoriesFilter) {
      window.populateCategoriesFilter();
    }
    if (window.updateThemeButtonState) {
      window.updateThemeButtonState();
    }
  }
};
