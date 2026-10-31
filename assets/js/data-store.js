/**
 * In-Memory Data Store for WD101 Learning Scaffold
 * Ensures zero-configuration execution via both file:/// and HTTP servers.
 */
window.SCAFFOLD_DATA = {
  "categories": [
    {
      "uid": "cat-1",
      "num_id": 1,
      "id": "cat-landmarks",
      "slug": "landmarks",
      "title": {
        "pt": "Landmarks & Estrutura Semântica",
        "en": "Landmarks & Semantic Structure"
      },
      "tier": "foundational",
      "lev": 1
    },
    {
      "uid": "cat-2",
      "num_id": 2,
      "id": "cat-text-semantics",
      "slug": "text-semantics",
      "title": {
        "pt": "Tipografia & Semântica Textual",
        "en": "Typography & Text Semantics"
      },
      "tier": "foundational",
      "lev": 1
    },
    {
      "uid": "cat-3",
      "num_id": 3,
      "id": "cat-media",
      "slug": "media",
      "title": {
        "pt": "Media & Direção de Arte",
        "en": "Media & Art Direction"
      },
      "tier": "intermediate",
      "lev": 2
    },
    {
      "uid": "cat-4",
      "num_id": 4,
      "id": "cat-forms",
      "slug": "forms",
      "title": {
        "pt": "Formulários & Controlos",
        "en": "Forms & Controls"
      },
      "tier": "intermediate",
      "lev": 2
    },
    {
      "uid": "cat-5",
      "num_id": 5,
      "id": "cat-selectors",
      "slug": "selectors",
      "title": {
        "pt": "Seletores & Combinadores",
        "en": "Selectors & Combinators"
      },
      "tier": "foundational",
      "lev": 1
    },
    {
      "uid": "cat-6",
      "num_id": 6,
      "id": "cat-pseudo",
      "slug": "pseudo-classes",
      "title": {
        "pt": "Pseudo-Classes & Estados",
        "en": "Pseudo-Classes & States"
      },
      "tier": "intermediate",
      "lev": 2
    },
    {
      "uid": "cat-7",
      "num_id": 7,
      "id": "cat-boxmodel",
      "slug": "box-model",
      "title": {
        "pt": "Modelo de Caixa & Geometria",
        "en": "Box Model & Geometry"
      },
      "tier": "foundational",
      "lev": 1
    },
    {
      "uid": "cat-8",
      "num_id": 8,
      "id": "cat-flex-grid",
      "slug": "layout-flex-grid",
      "title": {
        "pt": "Layout (Flexbox & Grid)",
        "en": "Layout (Flexbox & Grid)"
      },
      "tier": "intermediate",
      "lev": 2
    },
    {
      "uid": "cat-9",
      "num_id": 9,
      "id": "cat-positioning",
      "slug": "positioning",
      "title": {
        "pt": "Posicionamento & Âncoras",
        "en": "Positioning & Anchors"
      },
      "tier": "advanced",
      "lev": 3
    },
    {
      "uid": "cat-10",
      "num_id": 10,
      "id": "cat-effects-animations",
      "slug": "effects-animations",
      "title": {
        "pt": "Efeitos, Transições & Animações",
        "en": "Effects, Transitions & Animations"
      },
      "tier": "advanced",
      "lev": 3
    },
    {
      "uid": "cat-11",
      "num_id": 11,
      "id": "cat-atrules",
      "slug": "at-rules",
      "title": {
        "pt": "Regras Condicionais (@rules)",
        "en": "Conditional Rules (@rules)"
      },
      "tier": "advanced",
      "lev": 3
    },
    {
      "uid": "cat-12",
      "num_id": 12,
      "id": "cat-functions-units",
      "slug": "functions-units",
      "title": {
        "pt": "Funções Matemáticas & Unidades",
        "en": "Math Functions & Units"
      },
      "tier": "intermediate",
      "lev": 2
    }
  ],
  "menus": [
    {
      "id": "menu-goals",
      "target": "#study-goals",
      "title": {
        "pt": "Objetivos & Como Estudar",
        "en": "Study Goals & How-To"
      }
    },
    {
      "id": "menu-assignments",
      "target": "#assignments",
      "title": {
        "pt": "Enunciados (EX1, EX2, Projeto)",
        "en": "Assignments (EX1, EX2, Project)"
      }
    },
    {
      "id": "menu-matrix",
      "target": "#matrix",
      "title": {
        "pt": "Matriz MDN (Tags & CSS)",
        "en": "MDN Matrix (Tags & CSS)"
      }
    },
    {
      "id": "menu-patterns",
      "target": "#patterns",
      "title": {
        "pt": "Padrões Interativos (Drumtiks)",
        "en": "Interactive Patterns (Drumtiks)"
      }
    }
  ],
  "assignments": [
    {
      "uid": "ass-1",
      "num_id": 1,
      "ass": 1,
      "canonical_id": "2026-09-18-001",
      "code": "EX1",
      "slug": "ex1-hello-wendy",
      "title": {
        "pt": "EX1: Hello Warp! (Wendy) — Landmarks & Fluxo Normal",
        "en": "EX1: Hello Warp! (Wendy) — Semantic Landmarks & Normal Flow"
      },
      "guide_url": "ex1-hello-warp-guide.html",
      "demo_url": "demos/hello-warp/index.html",
      "tag": {
        "pt": "Estrutura Semântica Fundamental",
        "en": "Foundational Semantic Structure"
      },
      "tier": "foundational",
      "lev": 1,
      "objective": {
        "pt": "Compreender o fluxo normal do documento HTML5 e a hierarquia tipográfica através de landmarks semânticos puros, estritamente sem classes ou IDs.",
        "en": "Master HTML5 normal document flow and typographic hierarchy using pure semantic landmarks, strictly with zero classes or IDs."
      },
      "drumtiks_adaptation": {
        "pt": "Decomposição do Drumtiks '26 em versão 'Naked': o cartaz e alinhamento do festival estruturados apenas com header, nav, main, section, article e footer. O layout flui naturalmente em mobile e desktop recorrendo a unidades rem e seletores descendentes (nav ul li a).",
        "en": "Deconstruction of Drumtiks '26 in 'Naked' form: festival poster and lineup structured strictly with header, nav, main, section, article, and footer. Layout flows naturally on mobile and desktop using rem units and descendant selectors (nav ul li a)."
      },
      "constraints": [
        "Zero classes e Zero IDs no código HTML",
        "Seletores CSS exclusivamente por tipo e descendência (ex: nav ul li a)",
        "Unidades relativas rem e em; proibido width/height fixos em px",
        "Sem qualquer recurso a JavaScript"
      ],
      "patterns_used": [
        "Landmarks HTML5",
        "Descendant Selectors",
        "Relative Units"
      ]
    },
    {
      "uid": "ass-2",
      "num_id": 2,
      "ass": 2,
      "canonical_id": "2026-10-02-002",
      "code": "EX2",
      "slug": "ex2-media-box-model",
      "title": {
        "pt": "EX2: Media & Box Model — Geometria e Imagem Responsiva",
        "en": "EX2: Media & Box Model — Responsive Images & Geometry"
      },
      "guide_url": "ex2-guide.html",
      "demo_url": "demos/ex2-media-box-model/index.html",
      "tag": {
        "pt": "Direção de Arte & Modelo de Caixa",
        "en": "Art Direction & Box Model"
      },
      "tier": "intermediate",
      "lev": 2,
      "objective": {
        "pt": "Introdução ao CSS Reset de Eric Meyer v2.0, classes utilitárias, incorporação de fontes remotas (Google Fonts), multimédia responsiva (<picture>, <video>, <iframe>) e posicionamento relativo/absoluto/sticky.",
        "en": "Introduction to Eric Meyer CSS Reset v2.0, classes, remote webfonts (Google Fonts), responsive multimedia (<picture>, <video>, <iframe>), and relative/absolute/sticky positioning."
      },
      "drumtiks_adaptation": {
        "pt": "O Drumtiks ganha identidade visual e multimédia: o cartaz transforma-se numa página com direção de arte fotográfica para o DJ Warp (webp/jpg em rácios 16:9 e 1:1), vídeo promocional, grelha básica de artistas e barra de navegação com position: sticky.",
        "en": "Drumtiks gains visual identity and media: the poster evolves into a page featuring photographic art direction for DJ Warp (webp/jpg in 16:9 and 1:1 ratios), promo video, artist cards grid, and sticky navigation."
      },
      "constraints": [
        "Integração obrigatória do Eric Meyer CSS Reset v2.0",
        "Direção de arte com <picture> e múltiplos <source> otimizados",
        "Classes semânticas BEM simplificadas",
        "Uso de position: sticky e stacking context z-index"
      ],
      "patterns_used": [
        "P2 (Art Direction)",
        "P7 (Sticky Stage inicial)",
        "P12 (Sticky Nav inicial)"
      ]
    },
    {
      "uid": "ass-3",
      "num_id": 3,
      "ass": 3,
      "proj": 1,
      "canonical_id": "2026-10-23-003",
      "code": "PROJECT",
      "slug": "project-drumtiks-26",
      "title": {
        "pt": "Projeto Final: Festival DRUMTIKS '26 — Portal Pure CSS",
        "en": "Final Project: DRUMTIKS '26 — Pure CSS Festival Portal"
      },
      "tag": {
        "pt": "Portal Responsivo Completo (Zero-JS)",
        "en": "Full Responsive Portal (Zero-JS)"
      },
      "tier": "advanced",
      "lev": 3,
      "objective": {
        "pt": "Construir um portal web responsivo de nível profissional, estritamente sem JavaScript, aplicando arquitetura @layer, variáveis e tokens a 3 níveis, fontes variáveis locais WOFF2, carrosséis magnéticos, gaveta móvel, modais e motor de preços reativo em CSS.",
        "en": "Build a professional-grade, strictly zero-JavaScript responsive web portal using @layer architecture, 3-tier design tokens, self-hosted WOFF2 variable fonts, scroll-snap carousels, off-canvas drawers, modals, and pure CSS reactive pricing."
      },
      "drumtiks_adaptation": {
        "pt": "A experiência integral do festival: navegação dual (desktop flyout / gaveta mobile), galeria com scroll snap, horários em acordeão expansível, simulador de bilheteira com cálculo em tempo real via :has() e :checked, tema escuro/claro nativo, e cartões intrínsecos com @container.",
        "en": "The complete festival experience: dual navigation (desktop flyout / mobile drawer), scroll-snap photo gallery, expandable schedule accordion, live cart simulator via :has() and :checked, native light/dark theming, and container queries."
      },
      "constraints": [
        "Zero JavaScript: qualquer <script> invalida os componentes interativos",
        "Organização em @layer (reset, theme, base, layout, components, interactive, xray)",
        "Webfonts variáveis locais com continuous axes wght/wdth",
        "Compatibilidade estrita com W3C e navegadores modernos"
      ],
      "stages": [
        {
          "name": { "pt": "Fase 1: Protótipo Preliminar (TP06)", "en": "Stage 1: Early Prototype (TP06)" },
          "desc": { "pt": "Website responsivo a 2 colunas com breakpoint a 960px, sticky stage inicial e galeria de fotos.", "en": "Two-column responsive website with 960px desktop breakpoint, sticky hero stage, and photo gallery." },
          "color": "var(--color-swiss-red)",
          "guide_url": "demos/tp06-responsive/ASSIGNMENT-TP06-RESPONSIVE.html",
          "demo_url": "demos/tp06-responsive/index.html"
        },
        {
          "name": { "pt": "Fase 2: Capstone Avançado Integrado (TP11)", "en": "Stage 2: Full Integrated Capstone (TP11)" },
          "desc": { "pt": "Masterclass integrada: 4 breakpoints mobile-first, Macro Grid 2D com template-areas, Masonry denso com voids artísticos, Crate 3D fan-out, theming dinâmico e inspetor de Raios-X.", "en": "Integrated masterclass: 4 mobile-first breakpoints, 2D Grid with template-areas, Dense Masonry with artistic voids, 3D Vinyl Crate fan-out, dynamic theming, and X-Ray inspector." },
          "color": "var(--color-accent-cyan)",
          "guide_url": "demos/tp11-integrated-responsive-project/GUIDE.html",
          "demo_url": "demos/tp11-integrated-responsive-project/index.html"
        }
      ],
      "patterns_used": [
        "P1 a P13 (Todos os 13 Padrões)",
        "3D Vinyl Crate",
        "Dense Masonry Voids"
      ]
    },
    {
      "uid": "ass-4",
      "num_id": 4,
      "ass": 4,
      "canonical_id": "2026-10-31-004",
      "code": "TP11-B",
      "slug": "tp11-b-layout-suite",
      "title": {
        "pt": "TP11-B: Advanced CSS Layout Suite — Flexbox & CSS Grid",
        "en": "TP11-B: Advanced CSS Layout Suite — Flexbox & CSS Grid"
      },
      "guide_url": "demos/tp11-css-flexbox-grid/README.md",
      "demo_url": "demos/tp11-css-flexbox-grid/index.html",
      "tag": {
        "pt": "Composição 1D vs. 2D & Container Queries",
        "en": "1D vs. 2D Composition & Container Queries"
      },
      "tier": "advanced",
      "lev": 3,
      "objective": {
        "pt": "Aprofundar os modelos de layout contemporâneos: Flexbox 1D no console de faixas, CSS Grid 2D na discografia com auto-flow denso, arquitetura híbrida e componentização contextual via @container.",
        "en": "Master modern layout models: 1D Flexbox in track consoles, 2D CSS Grid in discography with dense auto-flow, hybrid macro/micro architecture, and context-aware styling via @container."
      },
      "drumtiks_adaptation": {
        "pt": "Exploração dos lançamentos e instrumentais de DJ Warp em 4 demonstradores autónomos e interativos com inspetor de raios-x e alternadores puros de estado em CSS.",
        "en": "Exploration of DJ Warp releases and tracks across 4 self-contained interactive laboratories with X-ray inspector and pure CSS state switchers."
      },
      "constraints": [
        "Zero JavaScript para layout, filtros ou reordenação",
        "Adoção estrita da Regra de Ouro: Grid para macro e Flexbox para micro",
        "Acessibilidade de teclado e contraste em conformidade com WCAG 2.2"
      ],
      "patterns_used": ["CSS Grid 2D", "Flexbox 1D", "Container Queries", "X-Ray Diagnostics"]
    },
    {
      "uid": "ass-5",
      "num_id": 5,
      "ass": 5,
      "canonical_id": "2026-10-30-005",
      "code": "TP11",
      "slug": "tp11-motion-theming",
      "title": {
        "pt": "TP11: Variables, Transitions & Animations Suite",
        "en": "TP11: Variables, Transitions & Animations Suite"
      },
      "guide_url": "demos/tp11-variables-transitions-animations/README.md",
      "demo_url": "demos/tp11-variables-transitions-animations/index.html",
      "tag": {
        "pt": "Theming Dinâmico, Física 3D & Scroll Motion",
        "en": "Dynamic Theming, 3D Physics & Scroll Motion"
      },
      "tier": "advanced",
      "lev": 3,
      "objective": {
        "pt": "Dominar tokens de design com escopo local e global, theming nativo com light-dark(), física elástica com cubic-bezier(), animações associadas ao scroll e pós-processamento com filtros CSS.",
        "en": "Master design tokens with local/global scope, native theming via light-dark(), elastic spring physics with cubic-bezier(), scroll-driven animations, and post-processing CSS filters."
      },
      "drumtiks_adaptation": {
        "pt": "Cinco módulos práticos explorando a caixa de vinis 3D com ejeção de disco, barra de progresso no scroll global, revelação no viewport e comutador claro/escuro.",
        "en": "Five practical modules featuring 3D vinyl crate fan-out, global scroll progress bar, viewport reveals, and pure CSS light/dark switching."
      },
      "constraints": [
        "Zero JavaScript para animações e alternador de tema",
        "Aceleração por hardware GPU através de transform e opacity",
        "Suporte estrito a @media (prefers-reduced-motion: reduce)"
      ],
      "patterns_used": ["light-dark()", "cubic-bezier()", "scroll(root)", "view()", "perspective"]
    }
  ],
  "patterns": [
    {
      "uid": "pat-1",
      "num_id": 1,
      "pat": 1,
      "code": "P1",
      "id": "P1",
      "slug": "p01-dual-navigation",
      "canonical_id": "2026-10-24-101",
      "title": {
        "pt": "P1: Navegação Dual (Desktop Flyout & Mobile Off-Canvas Drawer)",
        "en": "P1: Dual Navigation (Desktop Flyout & Mobile Off-Canvas Drawer)"
      },
      "tier": "intermediate",
      "lev": 2,
      "assignment": "Projeto Final",
      "ass_ids": [
        3
      ],
      "proj": 1,
      "cat_ids": [
        1,
        5,
        6,
        8
      ],
      "categories": [
        "cat-landmarks",
        "cat-pseudo",
        "cat-flex-grid"
      ],
      "summary": {
        "pt": "Menu com submenus acessíveis no desktop via :focus-within e gaveta off-canvas no mobile via Checkbox Hack, sem JavaScript.",
        "en": "Accessible desktop submenus via :focus-within and mobile off-canvas drawer via Checkbox Hack, zero JavaScript."
      },
      "purpose": {
        "pt": "Demonstrar como criar interfaces acessíveis pelo teclado no desktop (:focus-within) e menus deslizantes móveis usando estados de formulário (:checked).",
        "en": "Demonstrate keyboard-accessible desktop menus (:focus-within) and sliding mobile drawers using form states (:checked)."
      },
      "mdn_links": [
        {
          "label": ":focus-within",
          "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within"
        },
        {
          "label": ":checked",
          "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:checked"
        }
      ],
      "html_code": "<!-- P1: Navegação Dual Drumtiks -->\n<nav class=\"demo-p1-nav\" aria-label=\"Navegação Principal\">\n  <div class=\"nav-bar\">\n    <div class=\"brand\">DRUMTIKS '26</div>\n    <input type=\"checkbox\" id=\"p1-drawer-toggle\" class=\"menu-toggle\" aria-label=\"Abrir Menu\">\n    <label for=\"p1-drawer-toggle\" class=\"burger-label\">☰ Menu</label>\n    <ul class=\"nav-list\">\n      <li><a href=\"#\">Início</a></li>\n      <li class=\"has-sub\">\n        <a href=\"#\" aria-haspopup=\"true\">Palcos ▾</a>\n        <ul class=\"sub-menu\">\n          <li><a href=\"#\">Main Stage</a></li>\n          <li><a href=\"#\">Club Arena</a></li>\n        </ul>\n      </li>\n      <li><a href=\"#\">Bilhetes</a></li>\n    </ul>\n  </div>\n</nav>",
      "css_code": "/* P1: Desktop Flyout e Mobile Drawer */\n.has-sub { position: relative; }\n.sub-menu {\n  position: absolute; top: 100%; left: 0;\n  opacity: 0; visibility: hidden; transform: translateY(6px);\n  transition: opacity 0.2s, transform 0.2s, visibility 0.2s;\n}\n.has-sub:hover .sub-menu,\n.has-sub:focus-within .sub-menu {\n  opacity: 1; visibility: visible; transform: translateY(0);\n}\n@media (max-width: 768px) {\n  .menu-toggle:checked ~ .nav-list { display: flex; }\n}",
      "demo_html": "<nav class=\"demo-p1-nav\"><div class=\"nav-bar\"><div class=\"brand\">DRUMTIKS '26</div><input type=\"checkbox\" id=\"p1-demo-check\" class=\"menu-toggle\"><label for=\"p1-demo-check\" class=\"burger-label\">☰ Menu</label><ul class=\"nav-list\"><li><a href=\"#\">Início</a></li><li class=\"has-sub\"><a href=\"#\">Palcos ▾</a><ul class=\"sub-menu\"><li><a href=\"#\">Main Stage</a></li><li><a href=\"#\">Club Arena</a></li></ul></li><li><a href=\"#\">Bilhetes</a></li></ul></div></nav>"
    },
    {
      "uid": "pat-2",
      "num_id": 2,
      "pat": 2,
      "code": "P2",
      "id": "P2",
      "slug": "p02-art-direction",
      "canonical_id": "2026-10-24-102",
      "title": {
        "pt": "P2: Direção de Arte Fotográfica (<picture> & aspect-ratio)",
        "en": "P2: Photographic Art Direction (<picture> & aspect-ratio)"
      },
      "tier": "intermediate",
      "lev": 2,
      "assignment": "EX2 & Projeto",
      "ass_ids": [
        2,
        3
      ],
      "proj": 1,
      "cat_ids": [
        3,
        7
      ],
      "categories": [
        "cat-media",
        "cat-boxmodel"
      ],
      "summary": {
        "pt": "Alternância inteligente entre rácios 16:9 (desktop) e 1:1 (mobile) com formatos WebP/JPEG e prevenção de salto de layout (CLS).",
        "en": "Smart aspect-ratio switching between 16:9 (desktop) and 1:1 (mobile) with WebP/JPEG formats and zero CLS."
      },
      "purpose": {
        "pt": "Ensinar a servir a imagem exata para cada contexto visual, poupando dados móveis e evitando Cumulative Layout Shift através de aspect-ratio.",
        "en": "Teach serving optimal images for each screen context, saving mobile bandwidth and preventing Cumulative Layout Shift with aspect-ratio."
      },
      "mdn_links": [
        {
          "label": "<picture>",
          "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/picture"
        },
        {
          "label": "aspect-ratio",
          "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio"
        }
      ],
      "html_code": "<!-- P2: Direção de Arte Drumtiks -->\n<figure class=\"demo-p2-art\">\n  <picture>\n    <source media=\"(min-width: 960px)\" srcset=\"assets/hero-dj-warp-1400w.webp\" type=\"image/webp\">\n    <source media=\"(min-width: 600px)\" srcset=\"assets/hero-dj-warp-960w.webp\" type=\"image/webp\">\n    <img src=\"assets/hero-dj-warp-600w.jpg\" alt=\"DJ Warp no Palco Drumtiks\" width=\"600\" height=\"338\" loading=\"lazy\">\n  </picture>\n  <figcaption>DJ Warp • Live Showcase (Porto)</figcaption>\n</figure>",
      "css_code": "/* P2: Prevenção de CLS e Geometria */\npicture img {\n  width: 100%;\n  height: auto;\n  aspect-ratio: 16 / 9;\n  object-fit: cover;\n  display: block;\n}",
      "demo_html": "<div class=\"demo-p2-art\"><figure><picture><img src=\"TP06-responsive/assets/hero-dj-warp-600w.jpg\" alt=\"DJ Warp\" style=\"width:100%;aspect-ratio:16/9;object-fit:cover;\"></picture><figcaption>DJ Warp • Headliner Showcase</figcaption></figure></div>"
    },
    {
      "uid": "pat-3",
      "num_id": 3,
      "pat": 3,
      "code": "P3",
      "id": "P3",
      "slug": "p03-scroll-snap-carousel",
      "canonical_id": "2026-10-24-103",
      "title": {
        "pt": "P3: Carrossel Magnético com CSS Scroll Snap",
        "en": "P3: Magnetic Carousel with CSS Scroll Snap"
      },
      "tier": "intermediate",
      "lev": 2,
      "assignment": "Projeto Final",
      "ass_ids": [
        3
      ],
      "proj": 1,
      "cat_ids": [
        7,
        10
      ],
      "categories": [
        "cat-boxmodel",
        "cat-effects-animations"
      ],
      "summary": {
        "pt": "Carrossel horizontal suave que ancora as fotos perfeitamente nos limites da viewport sem qualquer JavaScript.",
        "en": "Smooth horizontal carousel snapping items precisely into view without JavaScript."
      },
      "purpose": {
        "pt": "Compreender a aceleração por hardware nativa do browser para rolagem tátil através de scroll-snap-type e scroll-snap-align.",
        "en": "Understand native browser hardware-accelerated touch gestures using scroll-snap-type and scroll-snap-align."
      },
      "mdn_links": [
        {
          "label": "scroll-snap-type",
          "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type"
        },
        {
          "label": "scroll-snap-align",
          "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-align"
        }
      ],
      "html_code": "<!-- P3: Carrossel Drumtiks -->\n<div class=\"demo-p3-carousel\">\n  <article class=\"demo-p3-card\">\n    <h4>Palco 1: Beat Foundry</h4>\n    <p>Percussão industrial e live-coding sensorial.</p>\n  </article>\n  <article class=\"demo-p3-card\">\n    <h4>Palco 2: Warp Tunnel</h4>\n    <p>Subgraves pesados e sintetizadores analógicos.</p>\n  </article>\n  <article class=\"demo-p3-card\">\n    <h4>Palco 3: Ambient Garden</h4>\n    <p>Paisagens sonoras relaxantes e frequências binaurais.</p>\n  </article>\n</div>",
      "css_code": "/* P3: Scroll Snap Magnético */\n.demo-p3-carousel {\n  display: flex; gap: 1rem;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  scroll-behavior: smooth;\n}\n.demo-p3-card {\n  flex: 0 0 75%;\n  scroll-snap-align: start;\n}",
      "demo_html": "<div class=\"demo-p3-carousel\"><article class=\"demo-p3-card\"><h4>Palco 1: Beat Foundry</h4><p>Percussão industrial e live-coding sensorial.</p></article><article class=\"demo-p3-card\"><h4>Palco 2: Warp Tunnel</h4><p>Subgraves pesados e sintetizadores analógicos.</p></article><article class=\"demo-p3-card\"><h4>Palco 3: Ambient Garden</h4><p>Paisagens sonoras relaxantes e frequências binaurais.</p></article></div>"
    },
    {
      "uid": "pat-4",
      "num_id": 4,
      "pat": 4,
      "code": "P4",
      "id": "P4",
      "slug": "p04-grid-accordion",
      "canonical_id": "2026-10-24-104",
      "title": {
        "pt": "P4: Acordeão Dobrável Animado (<details> + CSS Grid)",
        "en": "P4: Smooth Expandable Accordion (<details> + CSS Grid)"
      },
      "tier": "advanced",
      "lev": 3,
      "assignment": "Projeto Final",
      "ass_ids": [
        3
      ],
      "proj": 1,
      "cat_ids": [
        1,
        8,
        10
      ],
      "categories": [
        "cat-landmarks",
        "cat-flex-grid",
        "cat-effects-animations"
      ],
      "summary": {
        "pt": "Animação suave de abertura e fecho de acordeão sem altura fixa, recorrendo à técnica moderna grid-template-rows: 0fr -> 1fr.",
        "en": "Smooth accordion expansion animation without fixed heights via grid-template-rows: 0fr -> 1fr."
      },
      "purpose": {
        "pt": "Superar a limitação histórica de animar height: auto através de CSS Grid e preservar a acessibilidade semântica nativa de details/summary.",
        "en": "Overcome the historic limitation of animating height: auto using CSS Grid while retaining native accessibility."
      },
      "mdn_links": [
        {
          "label": "<details>",
          "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details"
        },
        {
          "label": "grid-template-rows",
          "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows"
        }
      ],
      "html_code": "<!-- P4: Acordeão de Horários Drumtiks -->\n<div class=\"demo-p4-accordion\">\n  <details open>\n    <summary>Sexta-Feira, 24 Outubro</summary>\n    <div class=\"accordion-content\">\n      <div class=\"content-inner\">\n        <p>21:00 — Abertura de Portas & Soundcheck</p>\n        <p>22:30 — DJ Warp (Live Drums & Modular)</p>\n      </div>\n    </div>\n  </details>\n  <details>\n    <summary>Sábado, 25 Outubro</summary>\n    <div class=\"accordion-content\">\n      <div class=\"content-inner\">\n        <p>19:00 — Workshop de Percussão Experimental</p>\n        <p>23:00 — Drumtiks All-Stars Battle</p>\n      </div>\n    </div>\n  </details>\n</div>",
      "css_code": "/* P4: Animação Fluida via Grid */\n.accordion-content {\n  display: grid;\n  grid-template-rows: 0fr;\n  transition: grid-template-rows 0.3s ease-out;\n}\ndetails[open] .accordion-content {\n  grid-template-rows: 1fr;\n}\n.content-inner { overflow: hidden; }",
      "demo_html": "<div class=\"demo-p4-accordion\"><details open><summary>Sexta-Feira, 24 Outubro</summary><div class=\"accordion-content\"><div class=\"content-inner\"><p>21:00 — Abertura de Portas & Soundcheck</p><p>22:30 — DJ Warp (Live Drums & Modular)</p></div></div></details><details><summary>Sábado, 25 Outubro</summary><div class=\"accordion-content\"><div class=\"content-inner\"><p>19:00 — Workshop de Percussão Experimental</p><p>23:00 — Drumtiks All-Stars Battle</p></div></div></details></div>"
    },
    {
      "uid": "pat-5",
      "num_id": 5,
      "pat": 5,
      "code": "P5",
      "id": "P5",
      "slug": "p05-pure-css-modal",
      "canonical_id": "2026-10-24-105",
      "title": {
        "pt": "P5: Janela Modal Pure CSS (:target & Popover API)",
        "en": "P5: Pure CSS Modal (:target & HTML Popover API)"
      },
      "tier": "intermediate",
      "lev": 2,
      "assignment": "Projeto Final",
      "ass_ids": [
        3
      ],
      "proj": 1,
      "cat_ids": [
        6,
        9
      ],
      "categories": [
        "cat-pseudo",
        "cat-positioning"
      ],
      "summary": {
        "pt": "Janela modal com escurecimento de fundo (backdrop) e botão de fechar, utilizando o clássico :target ou a nova Popover API.",
        "en": "Modal dialog with backdrop dimming and close button, leveraging classic :target or the modern Popover API."
      },
      "purpose": {
        "pt": "Aprender a manipular camadas superiores (top layer / z-index) e histórico de navegação para janelas de diálogo sem scripts.",
        "en": "Master top layer / z-index manipulation and navigation history for scriptless dialog windows."
      },
      "mdn_links": [
        {
          "label": ":target",
          "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:target"
        },
        {
          "label": "popover",
          "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover"
        }
      ],
      "html_code": "<!-- P5: Modal de Regras Drumtiks -->\n<a href=\"#regras-modal\" class=\"demo-p5-modal-btn\">Ver Regras do Festival</a>\n\n<aside id=\"regras-modal\" class=\"demo-p5-modal\">\n  <div class=\"demo-p5-modal-box\">\n    <a href=\"#\" class=\"demo-p5-modal-close\" aria-label=\"Fechar\">✕</a>\n    <h3>Regras da Bilheteira</h3>\n    <p>A entrada no recinto exige pulseira eletrónica colocada no check-in. É proibida a entrada com recipientes de vidro.</p>\n  </div>\n</aside>",
      "css_code": "/* P5: Modal com :target */\n.demo-p5-modal {\n  display: none;\n  position: fixed; inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(4px);\n  align-items: center; justify-content: center;\n}\n.demo-p5-modal:target { display: flex; }",
      "demo_html": "<div><a href=\"#demo-p5-box\" class=\"demo-p5-modal-btn\">Abrir Modal de Exemplo</a><aside id=\"demo-p5-box\" class=\"demo-p5-modal\"><div class=\"demo-p5-modal-box\"><a href=\"#\" class=\"demo-p5-modal-close\">✕</a><h3>Regulamento Drumtiks '26</h3><p>Entrada livre para estudantes com cartão UP. Pulseiras levantadas no átrio da FBAUP.</p></div></aside></div>"
    },
    {
      "uid": "pat-6",
      "num_id": 6,
      "pat": 6,
      "code": "P6",
      "id": "P6",
      "slug": "p06-scroll-driven-animations",
      "canonical_id": "2026-10-24-106",
      "title": {
        "pt": "P6: Animações Orientadas ao Scroll (Scroll-Driven Animations)",
        "en": "P6: Scroll-Driven Animations (scroll() & view())"
      },
      "tier": "advanced",
      "lev": 3,
      "assignment": "Projeto Final",
      "ass_ids": [
        3
      ],
      "proj": 1,
      "cat_ids": [
        10,
        12
      ],
      "categories": [
        "cat-effects-animations",
        "cat-functions-units"
      ],
      "summary": {
        "pt": "Barra de progresso de leitura no topo e revelação gradual de cartões de artistas acionados pelo scroll da página.",
        "en": "Top reading progress bar and entrance animations driven directly by page scroll position."
      },
      "purpose": {
        "pt": "Dominar a nova API de animações do W3C sem IntersectionObserver nem listeners de scroll em JavaScript.",
        "en": "Master the modern W3C animation timeline API replacing heavy JS scroll listeners."
      },
      "mdn_links": [
        {
          "label": "animation-timeline",
          "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline"
        },
        {
          "label": "scroll()",
          "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline/scroll"
        }
      ],
      "html_code": "<!-- P6: Barra de Progresso Drumtiks -->\n<div class=\"demo-p6-box\">\n  <div class=\"demo-p6-progress\"></div>\n  <p>Role o conteúdo abaixo para observar a barra de leitura a progredir sincronizada...</p>\n  <div style=\"height: 350px; padding: 1rem 0;\"><p>Alinhamento de Artistas...</p><p>Palco Principal...</p><p>Fim da Programação.</p></div>\n</div>",
      "css_code": "/* P6: Scroll Timeline Progress Bar */\n.demo-p6-progress {\n  position: sticky; top: 0;\n  height: 4px; background: #e60000;\n  transform-origin: 0 50%;\n  animation: fill-bar auto linear;\n  animation-timeline: scroll(nearest);\n}\n@keyframes fill-bar {\n  from { transform: scaleX(0); }\n  to { transform: scaleX(1); }\n}",
      "demo_html": "<div class=\"demo-p6-box\"><div class=\"demo-p6-progress\"></div><p>Role esta caixa para testar o progresso visual:</p><div style=\"height: 300px; padding-top: 1rem;\"><p>22:00 — DJ Warp</p><p>23:30 — Beat Foundry</p><p>01:00 — Encerramento</p></div></div>"
    },
    {
      "uid": "pat-7",
      "num_id": 7,
      "pat": 7,
      "code": "P7",
      "id": "P7",
      "slug": "p07-grid-sticky-stage",
      "canonical_id": "2026-10-24-107",
      "title": {
        "pt": "P7: Grelha Assimétrica de 2 Colunas com Palco Sticky",
        "en": "P7: Asymmetrical 2-Column Grid with Sticky Stage"
      },
      "tier": "intermediate",
      "lev": 2,
      "assignment": "EX2 & Projeto",
      "ass_ids": [
        2,
        3
      ],
      "proj": 1,
      "cat_ids": [
        8,
        9
      ],
      "categories": [
        "cat-flex-grid",
        "cat-positioning"
      ],
      "summary": {
        "pt": "Coluna lateral esquerda informativa fixa no viewport enquanto a coluna direita de cartões de artistas desliza.",
        "en": "Sticky left sidebar info panel while the right artist card catalog scrolls freely."
      },
      "purpose": {
        "pt": "Aprender a articular CSS Grid bi-dimensional com position: sticky em elementos filhos de grelha.",
        "en": "Learn to combine 2D CSS Grid with position: sticky on grid child containers."
      },
      "mdn_links": [
        {
          "label": "position: sticky",
          "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position"
        },
        {
          "label": "CSS Grid",
          "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid"
        }
      ],
      "html_code": "<!-- P7: Layout de Palco Drumtiks -->\n<div class=\"demo-p7-layout\">\n  <aside class=\"demo-p7-sticky\">\n    <h3>Palco Principal</h3>\n    <p>Capacidade: 800 lugares • FBAUP Jardim</p>\n  </aside>\n  <div class=\"demo-p7-cards\">\n    <div class=\"demo-p7-card\">DJ Warp • 22h</div>\n    <div class=\"demo-p7-card\">Beat Foundry • 23h30</div>\n    <div class=\"demo-p7-card\">Sub-Modular • 01h</div>\n  </div>\n</div>",
      "css_code": "/* P7: Grelha Assimétrica e Sticky */\n.demo-p7-layout {\n  display: grid; grid-template-columns: 1fr 2fr; gap: 1.5rem;\n}\n.demo-p7-sticky {\n  position: sticky; top: 1rem;\n  align-self: start;\n}",
      "demo_html": "<div class=\"demo-p7-layout\"><aside class=\"demo-p7-sticky\"><h4>Palco Jardim</h4><p style=\"font-size:0.8rem;color:#aaa;\">Painel fixo durante a rolagem.</p></aside><div class=\"demo-p7-cards\"><div class=\"demo-p7-card\">DJ Warp</div><div class=\"demo-p7-card\">Beat Foundry</div><div class=\"demo-p7-card\">Sub-Modular</div></div></div>"
    },
    {
      "uid": "pat-8",
      "num_id": 8,
      "pat": 8,
      "code": "P8",
      "id": "P8",
      "slug": "p08-reactive-pricing-engine",
      "canonical_id": "2026-10-24-108",
      "title": {
        "pt": "P8: Motor Reativo de Seleção & Preços (:has() & :checked)",
        "en": "P8: Pure CSS Reactive Pricing Engine (:has() & :checked)"
      },
      "tier": "advanced",
      "lev": 3,
      "assignment": "Projeto Final",
      "ass_ids": [
        3
      ],
      "proj": 1,
      "cat_ids": [
        4,
        6
      ],
      "categories": [
        "cat-pseudo",
        "cat-forms"
      ],
      "summary": {
        "pt": "Simulador de bilheteira que calcula o total e destaca os cartões selecionados puramente em CSS através de :has().",
        "en": "Ticket shop simulator calculating subtotals and styling selected cards purely via :has() and generated content."
      },
      "purpose": {
        "pt": "Dominar o seletor relacional :has(), o 'Santo Graal' do CSS moderno que permite aos pais reagirem aos estados dos filhos.",
        "en": "Master the relational :has() pseudo-class, the Holy Grail of CSS allowing parents to react to child states."
      },
      "mdn_links": [
        {
          "label": ":has()",
          "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:has"
        },
        {
          "label": "content",
          "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/content"
        }
      ],
      "html_code": "<!-- P8: Simulador de Bilhetes Drumtiks -->\n<div class=\"demo-p8-shop\">\n  <h3>Passe Drumtiks '26</h3>\n  <div class=\"demo-p8-options\">\n    <label class=\"demo-p8-option\">\n      <input type=\"checkbox\" id=\"opt-standard\"> Bilhete Geral (+35€)\n    </label>\n    <label class=\"demo-p8-option\">\n      <input type=\"checkbox\" id=\"opt-vip\"> Acesso VIP & Backstage (+75€)\n    </label>\n  </div>\n  <div class=\"demo-p8-total\"><span>Total a Pagar:</span><span class=\"total-price\"></span></div>\n</div>",
      "css_code": "/* P8: Motor de Preços em CSS */\n.demo-p8-shop:has(#opt-standard:checked):not(:has(#opt-vip:checked)) .total-price::after { content: \"35 €\"; }\n.demo-p8-shop:has(#opt-vip:checked):not(:has(#opt-standard:checked)) .total-price::after { content: \"75 €\"; }\n.demo-p8-shop:has(#opt-standard:checked):has(#opt-vip:checked) .total-price::after { content: \"110 €\"; }\n.demo-p8-shop:not(:has(input:checked)) .total-price::after { content: \"0 €\"; }",
      "demo_html": "<div class=\"demo-p8-shop\"><h4>Simulador de Bilhetes Drumtiks</h4><div class=\"demo-p8-options\"><label class=\"demo-p8-option\"><input type=\"checkbox\" id=\"opt-standard\"> Geral (35€)</label><label class=\"demo-p8-option\"><input type=\"checkbox\" id=\"opt-vip\"> VIP (75€)</label></div><div class=\"demo-p8-total\"><span>Total Estimado:</span><span class=\"total-price\"></span></div></div>"
    },
    {
      "uid": "pat-9",
      "num_id": 9,
      "pat": 9,
      "code": "P9",
      "id": "P9",
      "slug": "p09-theme-switcher",
      "canonical_id": "2026-10-24-109",
      "title": {
        "pt": "P9: Alternador de Tema Escuro/Claro (light-dark())",
        "en": "P9: Light/Dark Theme Switcher (light-dark())"
      },
      "tier": "intermediate",
      "lev": 2,
      "assignment": "Projeto Final",
      "ass_ids": [
        3
      ],
      "proj": 1,
      "cat_ids": [
        11,
        12
      ],
      "categories": [
        "cat-functions-units",
        "cat-tokens"
      ],
      "summary": {
        "pt": "Suporte a tema claro e escuro sem duplicação de regras CSS, recorrendo à nova função CSS light-dark().",
        "en": "Seamless light and dark theming without CSS rule duplication via modern light-dark() function."
      },
      "purpose": {
        "pt": "Eliminar blocos repetidos de @media (prefers-color-scheme) através de tokens semânticos unificados.",
        "en": "Eliminate redundant @media query blocks using unified semantic tokens and light-dark()."
      },
      "mdn_links": [
        {
          "label": "light-dark()",
          "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark"
        },
        {
          "label": "color-scheme",
          "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme"
        }
      ],
      "html_code": "<!-- P9: Seletor de Tema -->\n<div class=\"theme-box\">\n  <p>Esta caixa adapta as suas cores sem JavaScript através de light-dark().</p>\n</div>",
      "css_code": "/* P9: Tokens com light-dark() */\n:root {\n  color-scheme: light dark;\n  --card-bg: light-dark(#ffffff, #18181b);\n  --card-text: light-dark(#09090b, #fafafa);\n}\n.theme-box {\n  background: var(--card-bg);\n  color: var(--card-text);\n  padding: 1.5rem;\n  border: 1px solid currentColor;\n}",
      "demo_html": "<div style=\"padding:1rem;border:1px solid #71717a;border-radius:4px;\"><p>O tema respeita a preferência do sistema operativo ou o botão 'Tema' no topo do site.</p></div>"
    },
    {
      "uid": "pat-10",
      "num_id": 10,
      "pat": 10,
      "code": "P10",
      "id": "P10",
      "slug": "p10-anchor-positioning",
      "canonical_id": "2026-10-24-110",
      "title": {
        "pt": "P10: Menus Flutuantes e Tooltips (CSS Anchor Positioning)",
        "en": "P10: Floating Menus & Tooltips (CSS Anchor Positioning)"
      },
      "tier": "advanced",
      "lev": 3,
      "assignment": "Projeto Final",
      "ass_ids": [
        3
      ],
      "proj": 1,
      "cat_ids": [
        9
      ],
      "categories": [
        "cat-positioning"
      ],
      "summary": {
        "pt": "Ancoragem precisa de caixas flutuantes a botões de referência sem JavaScript nem wrappers envolventes.",
        "en": "Pixel-perfect anchoring of floating tooltips to reference buttons without JS or parent wrappers."
      },
      "purpose": {
        "pt": "Introduzir a especificação do CSS Anchor Positioning (anchor-name, position-anchor, position-area).",
        "en": "Introduce CSS Anchor Positioning standards (anchor-name, position-anchor, position-area)."
      },
      "mdn_links": [
        {
          "label": "anchor-name",
          "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/anchor-name"
        },
        {
          "label": "position-anchor",
          "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position-anchor"
        }
      ],
      "html_code": "<!-- P10: Tooltip Ancorada -->\n<button class=\"anchor-trigger\">Info DJ Warp</button>\n<div class=\"anchor-tooltip\">Pioneiro do live-drumming eletrónico no Porto.</div>",
      "css_code": "/* P10: CSS Anchor Positioning */\n.anchor-trigger {\n  anchor-name: --warp-btn;\n}\n.anchor-tooltip {\n  position: absolute;\n  position-anchor: --warp-btn;\n  position-area: bottom center;\n  position-try-fallbacks: flip-block;\n}",
      "demo_html": "<div style=\"display:flex;gap:1rem;align-items:center;\"><button style=\"background:#e60000;color:#fff;border:none;padding:0.4rem 0.8rem;border-radius:3px;\">DJ Warp (Info)</button><span style=\"font-size:0.8rem;color:#a1a1aa;\">← Ancoragem automática por baixo</span></div>"
    },
    {
      "uid": "pat-11",
      "num_id": 11,
      "pat": 11,
      "code": "P11",
      "id": "P11",
      "slug": "p11-container-queries",
      "canonical_id": "2026-10-24-111",
      "title": {
        "pt": "P11: Contentores Responsivos Intrínsecos (Container Queries)",
        "en": "P11: Intrinsic Responsive Cards (CSS Container Queries)"
      },
      "tier": "advanced",
      "lev": 3,
      "assignment": "Projeto Final",
      "ass_ids": [
        3
      ],
      "proj": 1,
      "cat_ids": [
        7,
        11
      ],
      "categories": [
        "cat-atrules",
        "cat-boxmodel"
      ],
      "summary": {
        "pt": "Cartões de artistas que alteram a sua disposição (coluna para linha) consoante a largura do seu contentor e não da janela.",
        "en": "Artist cards adapting their internal layout based on parent container width rather than viewport."
      },
      "purpose": {
        "pt": "Construir componentes 100% reutilizáveis e autónomos com container-type: inline-size e @container.",
        "en": "Build truly autonomous, modular components with container-type: inline-size and @container."
      },
      "mdn_links": [
        {
          "label": "@container",
          "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@container"
        },
        {
          "label": "container-type",
          "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/container-type"
        }
      ],
      "html_code": "<!-- P11: Cartão com Container Query -->\n<div class=\"demo-p11-wrapper\">\n  <article class=\"demo-p11-card\">\n    <div class=\"demo-p11-thumb\">FOTO</div>\n    <div>\n      <h4>Beat Foundry</h4>\n      <p>Redimensione a largura desta caixa para ver o cartão mudar de disposição.</p>\n    </div>\n  </article>\n</div>",
      "css_code": "/* P11: Container Queries */\n.demo-p11-wrapper {\n  container-type: inline-size;\n  container-name: card-box;\n}\n@container card-box (min-width: 380px) {\n  .demo-p11-card { flex-direction: row; }\n}",
      "demo_html": "<div class=\"demo-p11-wrapper\"><article class=\"demo-p11-card\"><div class=\"demo-p11-thumb\">LIVE</div><div><h4>Beat Foundry</h4><p style=\"font-size:0.8rem;color:#aaa;\">Arraste o canto inferior direito para redimensionar.</p></div></article></div>"
    },
    {
      "uid": "pat-12",
      "num_id": 12,
      "pat": 12,
      "code": "P12",
      "id": "P12",
      "slug": "p12-sticky-cards-deck",
      "canonical_id": "2026-10-24-112",
      "title": {
        "pt": "P12: Cartões Empilhados com Sobrescrita (Sticky Stacking Deck)",
        "en": "P12: Stacking Sticky Cards Deck (Sibling Overwrite)"
      },
      "tier": "advanced",
      "lev": 3,
      "assignment": "Projeto Final",
      "ass_ids": [
        3
      ],
      "proj": 1,
      "cat_ids": [
        7,
        9
      ],
      "categories": [
        "cat-positioning",
        "cat-boxmodel"
      ],
      "summary": {
        "pt": "Baralho de cartões sticky onde os irmãos subsequentes sobem no scroll e sobrepõem os anteriores em cascata.",
        "en": "Card deck where following sticky sibling elements overlap and cover prior cards."
      },
      "purpose": {
        "pt": "Explorar stacking contexts, z-index e cálculos com top escalonado através de variáveis CSS.",
        "en": "Explore stacking contexts, z-index, and staggered top calculations using CSS variables."
      },
      "mdn_links": [
        {
          "label": "position: sticky",
          "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position"
        },
        {
          "label": "z-index",
          "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index"
        }
      ],
      "html_code": "<!-- P12: Baralho de Cartões Drumtiks -->\n<div class=\"demo-p12-deck\">\n  <div class=\"demo-p12-card\">Cartão 1: Abertura e Credenciação</div>\n  <div class=\"demo-p12-card\">Cartão 2: Concertos e Live Acts</div>\n  <div class=\"demo-p12-card\">Cartão 3: Encerramento com DJs</div>\n</div>",
      "css_code": "/* P12: Efeito Baralho de Cartas */\n.demo-p12-card {\n  position: sticky;\n  top: 1rem;\n  box-shadow: 0 -4px 12px rgba(0,0,0,0.3);\n}\n.demo-p12-card:nth-child(2) { top: 2rem; }\n.demo-p12-card:nth-child(3) { top: 3rem; }",
      "demo_html": "<div class=\"demo-p12-deck\"><div class=\"demo-p12-card\">Cartão 1: Abertura e Credenciação</div><div class=\"demo-p12-card\">Cartão 2: Concertos e Live Acts</div><div class=\"demo-p12-card\">Cartão 3: Encerramento com DJs</div></div>"
    },
    {
      "uid": "pat-13",
      "num_id": 13,
      "pat": 13,
      "code": "P13",
      "id": "P13",
      "slug": "p13-parallax-scrolling",
      "canonical_id": "2026-10-24-113",
      "title": {
        "pt": "P13: Efeitos de Parallax Puro no Scroll (3D & Scroll-Driven)",
        "en": "P13: Pure CSS Parallax Scrolling (3D & Scroll-Driven)"
      },
      "tier": "advanced",
      "lev": 3,
      "assignment": "Projeto Final",
      "ass_ids": [
        3
      ],
      "proj": 1,
      "cat_ids": [
        9,
        10
      ],
      "categories": [
        "cat-effects-animations",
        "cat-positioning"
      ],
      "summary": {
        "pt": "Profundidade visual de camadas em diferentes velocidades de scroll sem dependências de JavaScript.",
        "en": "Multi-layered depth moving at different scroll speeds without any JavaScript dependencies."
      },
      "purpose": {
        "pt": "Demonstrar a técnica de perspectiva 3D (perspective: 1px) e a nova API de scroll timelines.",
        "en": "Demonstrate the 3D perspective technique (perspective: 1px) and the modern scroll timeline API."
      },
      "mdn_links": [
        {
          "label": "perspective",
          "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/perspective"
        },
        {
          "label": "transform: translateZ()",
          "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateZ"
        }
      ],
      "html_code": "<!-- P13: Parallax Drumtiks -->\n<div class=\"parallax-stage\">\n  <div class=\"parallax-layer-back\">CAMADA DE FUNDO (Lenta)</div>\n  <div class=\"parallax-layer-front\">CAMADA FRONTAL (Normal)</div>\n</div>",
      "css_code": "/* P13: Parallax 3D Puro */\n.parallax-stage {\n  perspective: 1px;\n  height: 300px; overflow-y: auto;\n}\n.parallax-layer-back {\n  transform: translateZ(-1px) scale(2);\n}",
      "demo_html": "<div style=\"height:140px;background:#18181b;border:1px solid #333;display:flex;align-items:center;justify-content:center;color:#fff;border-radius:4px;\"><p>Efeito de profundidade com perspective: 1px e translateZ(-1px) scale(2)</p></div>"
    }
  ],
  "matrix": [
    {
      "uid": "mat-1",
      "id": 1,
      "num_id": 1,
      "canonical_id": "2026-10-24-001",
      "symbol": ":---",
      "type": ":---:",
      "tier": "foundational",
      "lev": 1,
      "status": ":---:",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": ":---",
      "mdn_url": "",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :--- do standard web.",
        "en": "Official standard reference for :---."
      }
    },
    {
      "uid": "mat-1",
      "id": 1,
      "num_id": 1,
      "canonical_id": "2026-10-24-001",
      "symbol": "<!DOCTYPE html>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: Doctype",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Glossary/Doctype",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <!DOCTYPE html> do standard web.",
        "en": "Official standard reference for <!DOCTYPE html>."
      }
    },
    {
      "uid": "mat-2",
      "id": 2,
      "num_id": 2,
      "canonical_id": "2026-10-24-002",
      "symbol": "<html>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: html",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <html> do standard web.",
        "en": "Official standard reference for <html>."
      }
    },
    {
      "uid": "mat-3",
      "id": 3,
      "num_id": 3,
      "canonical_id": "2026-10-24-003",
      "symbol": "<head>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: head",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <head> do standard web.",
        "en": "Official standard reference for <head>."
      }
    },
    {
      "uid": "mat-4",
      "id": 4,
      "num_id": 4,
      "canonical_id": "2026-10-24-004",
      "symbol": "<title>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: title",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <title> do standard web.",
        "en": "Official standard reference for <title>."
      }
    },
    {
      "uid": "mat-5",
      "id": 5,
      "num_id": 5,
      "canonical_id": "2026-10-24-005",
      "symbol": "<meta charset=\"UTF-8\">",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: meta",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <meta charset=\"UTF-8\"> do standard web.",
        "en": "Official standard reference for <meta charset=\"UTF-8\">."
      }
    },
    {
      "uid": "mat-6",
      "id": 6,
      "num_id": 6,
      "canonical_id": "2026-10-24-006",
      "symbol": "<meta name=\"viewport\">",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: Viewport meta tag",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <meta name=\"viewport\"> do standard web.",
        "en": "Official standard reference for <meta name=\"viewport\">."
      }
    },
    {
      "uid": "mat-7",
      "id": 7,
      "num_id": 7,
      "canonical_id": "2026-10-24-007",
      "symbol": "<meta name=\"description\">",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: Standard metadata names",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <meta name=\"description\"> do standard web.",
        "en": "Official standard reference for <meta name=\"description\">."
      }
    },
    {
      "uid": "mat-8",
      "id": 8,
      "num_id": 8,
      "canonical_id": "2026-10-24-008",
      "symbol": "<link rel=\"stylesheet\">",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-forms",
      "cat_id": 4,
      "label": "MDN: link",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <link rel=\"stylesheet\"> do standard web.",
        "en": "Official standard reference for <link rel=\"stylesheet\">."
      }
    },
    {
      "uid": "mat-9",
      "id": 9,
      "num_id": 9,
      "canonical_id": "2026-10-24-009",
      "symbol": "<link rel=\"preconnect\">",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Otimização de Webfonts remotas)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: rel=preconnect",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preconnect",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <link rel=\"preconnect\"> do standard web.",
        "en": "Official standard reference for <link rel=\"preconnect\">."
      }
    },
    {
      "uid": "mat-10",
      "id": 10,
      "num_id": 10,
      "canonical_id": "2026-10-24-010",
      "symbol": "<link rel=\"preload\" as=\"font\">",
      "type": "HTML",
      "tier": "advanced",
      "lev": 3,
      "status": "**YES** *(Carregamento antecipado de WOFF2)*",
      "category": "cat-text-semantics",
      "cat_id": 2,
      "label": "MDN: rel=preload",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <link rel=\"preload\" as=\"font\"> do standard web.",
        "en": "Official standard reference for <link rel=\"preload\" as=\"font\">."
      }
    },
    {
      "uid": "mat-11",
      "id": 11,
      "num_id": 11,
      "canonical_id": "2026-10-24-011",
      "symbol": "<link rel=\"icon\"> (Favicon)",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: link types: icon",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel#icon",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <link rel=\"icon\"> (Favicon) do standard web.",
        "en": "Official standard reference for <link rel=\"icon\"> (Favicon)."
      }
    },
    {
      "uid": "mat-12",
      "id": 12,
      "num_id": 12,
      "canonical_id": "2026-10-24-012",
      "symbol": "<style>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**NO** *(Folhas externas obrigatórias)*",
      "category": "cat-forms",
      "cat_id": 4,
      "label": "MDN: style",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <style> do standard web.",
        "en": "Official standard reference for <style>."
      }
    },
    {
      "uid": "mat-13",
      "id": 13,
      "num_id": 13,
      "canonical_id": "2026-10-24-013",
      "symbol": "<base>",
      "type": "HTML",
      "tier": "advanced",
      "lev": 3,
      "status": "**NO**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: base",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <base> do standard web.",
        "en": "Official standard reference for <base>."
      }
    },
    {
      "uid": "mat-15",
      "id": 15,
      "num_id": 15,
      "canonical_id": "2026-10-24-015",
      "symbol": ":---",
      "type": ":---:",
      "tier": "foundational",
      "lev": 1,
      "status": ":---:",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": ":---",
      "mdn_url": "",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :--- do standard web.",
        "en": "Official standard reference for :---."
      }
    },
    {
      "uid": "mat-14",
      "id": 14,
      "num_id": 14,
      "canonical_id": "2026-10-24-014",
      "symbol": "<header>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: header",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header",
      "pat_ref": 1,
      "desc": {
        "pt": "Elemento/propriedade <header> do standard web.",
        "en": "Official standard reference for <header>."
      }
    },
    {
      "uid": "mat-15",
      "id": 15,
      "num_id": 15,
      "canonical_id": "2026-10-24-015",
      "symbol": "<nav>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: nav",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav",
      "pat_ref": 1,
      "desc": {
        "pt": "Elemento/propriedade <nav> do standard web.",
        "en": "Official standard reference for <nav>."
      }
    },
    {
      "uid": "mat-16",
      "id": 16,
      "num_id": 16,
      "canonical_id": "2026-10-24-016",
      "symbol": "<main>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: main",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <main> do standard web.",
        "en": "Official standard reference for <main>."
      }
    },
    {
      "uid": "mat-17",
      "id": 17,
      "num_id": 17,
      "canonical_id": "2026-10-24-017",
      "symbol": "<section>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: section",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <section> do standard web.",
        "en": "Official standard reference for <section>."
      }
    },
    {
      "uid": "mat-18",
      "id": 18,
      "num_id": 18,
      "canonical_id": "2026-10-24-018",
      "symbol": "<article>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: article",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <article> do standard web.",
        "en": "Official standard reference for <article>."
      }
    },
    {
      "uid": "mat-19",
      "id": 19,
      "num_id": 19,
      "canonical_id": "2026-10-24-019",
      "symbol": "<aside>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-forms",
      "cat_id": 4,
      "label": "MDN: aside",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <aside> do standard web.",
        "en": "Official standard reference for <aside>."
      }
    },
    {
      "uid": "mat-20",
      "id": 20,
      "num_id": 20,
      "canonical_id": "2026-10-24-020",
      "symbol": "<footer>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: footer",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <footer> do standard web.",
        "en": "Official standard reference for <footer>."
      }
    },
    {
      "uid": "mat-21",
      "id": 21,
      "num_id": 21,
      "canonical_id": "2026-10-24-021",
      "symbol": "<h1>, <h2>, <h3>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-text-semantics",
      "cat_id": 2,
      "label": "MDN: Heading Elements",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <h1>, <h2>, <h3> do standard web.",
        "en": "Official standard reference for <h1>, <h2>, <h3>."
      }
    },
    {
      "uid": "mat-22",
      "id": 22,
      "num_id": 22,
      "canonical_id": "2026-10-24-022",
      "symbol": "<h4>, <h5>, <h6>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: Heading Elements",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <h4>, <h5>, <h6> do standard web.",
        "en": "Official standard reference for <h4>, <h5>, <h6>."
      }
    },
    {
      "uid": "mat-23",
      "id": 23,
      "num_id": 23,
      "canonical_id": "2026-10-24-023",
      "symbol": "<hgroup>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**TBD** *(Excelente para subtítulos)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: hgroup",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hgroup",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <hgroup> do standard web.",
        "en": "Official standard reference for <hgroup>."
      }
    },
    {
      "uid": "mat-24",
      "id": 24,
      "num_id": 24,
      "canonical_id": "2026-10-24-024",
      "symbol": "<address>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: address",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <address> do standard web.",
        "en": "Official standard reference for <address>."
      }
    },
    {
      "uid": "mat-25",
      "id": 25,
      "num_id": 25,
      "canonical_id": "2026-10-24-025",
      "symbol": "<search>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**TBD** *(Substitui div/form de pesquisa)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: search",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/search",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <search> do standard web.",
        "en": "Official standard reference for <search>."
      }
    },
    {
      "uid": "mat-28",
      "id": 28,
      "num_id": 28,
      "canonical_id": "2026-10-24-028",
      "symbol": ":---",
      "type": ":---:",
      "tier": "foundational",
      "lev": 1,
      "status": ":---:",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": ":---",
      "mdn_url": "",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :--- do standard web.",
        "en": "Official standard reference for :---."
      }
    },
    {
      "uid": "mat-26",
      "id": 26,
      "num_id": 26,
      "canonical_id": "2026-10-24-026",
      "symbol": "<p>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-text-semantics",
      "cat_id": 2,
      "label": "MDN: p",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <p> do standard web.",
        "en": "Official standard reference for <p>."
      }
    },
    {
      "uid": "mat-27",
      "id": 27,
      "num_id": 27,
      "canonical_id": "2026-10-24-027",
      "symbol": "<ul>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: ul",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul",
      "pat_ref": 1,
      "desc": {
        "pt": "Elemento/propriedade <ul> do standard web.",
        "en": "Official standard reference for <ul>."
      }
    },
    {
      "uid": "mat-28",
      "id": 28,
      "num_id": 28,
      "canonical_id": "2026-10-24-028",
      "symbol": "<ol>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: ol",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <ol> do standard web.",
        "en": "Official standard reference for <ol>."
      }
    },
    {
      "uid": "mat-29",
      "id": 29,
      "num_id": 29,
      "canonical_id": "2026-10-24-029",
      "symbol": "<li>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: li",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li",
      "pat_ref": 1,
      "desc": {
        "pt": "Elemento/propriedade <li> do standard web.",
        "en": "Official standard reference for <li>."
      }
    },
    {
      "uid": "mat-30",
      "id": 30,
      "num_id": 30,
      "canonical_id": "2026-10-24-030",
      "symbol": "<dl>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**TBD** *(Fichas técnicas e alinhamentos)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: dl",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <dl> do standard web.",
        "en": "Official standard reference for <dl>."
      }
    },
    {
      "uid": "mat-31",
      "id": 31,
      "num_id": 31,
      "canonical_id": "2026-10-24-031",
      "symbol": "<dt>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**TBD**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: dt",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <dt> do standard web.",
        "en": "Official standard reference for <dt>."
      }
    },
    {
      "uid": "mat-32",
      "id": 32,
      "num_id": 32,
      "canonical_id": "2026-10-24-032",
      "symbol": "<dd>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**TBD**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: dd",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <dd> do standard web.",
        "en": "Official standard reference for <dd>."
      }
    },
    {
      "uid": "mat-33",
      "id": 33,
      "num_id": 33,
      "canonical_id": "2026-10-24-033",
      "symbol": "<blockquote>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-text-semantics",
      "cat_id": 2,
      "label": "MDN: blockquote",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <blockquote> do standard web.",
        "en": "Official standard reference for <blockquote>."
      }
    },
    {
      "uid": "mat-34",
      "id": 34,
      "num_id": 34,
      "canonical_id": "2026-10-24-034",
      "symbol": "<figure>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-media",
      "cat_id": 3,
      "label": "MDN: figure",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure",
      "pat_ref": 2,
      "desc": {
        "pt": "Elemento/propriedade <figure> do standard web.",
        "en": "Official standard reference for <figure>."
      }
    },
    {
      "uid": "mat-35",
      "id": 35,
      "num_id": 35,
      "canonical_id": "2026-10-24-035",
      "symbol": "<figcaption>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-media",
      "cat_id": 3,
      "label": "MDN: figcaption",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption",
      "pat_ref": 2,
      "desc": {
        "pt": "Elemento/propriedade <figcaption> do standard web.",
        "en": "Official standard reference for <figcaption>."
      }
    },
    {
      "uid": "mat-36",
      "id": 36,
      "num_id": 36,
      "canonical_id": "2026-10-24-036",
      "symbol": "<pre>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-text-semantics",
      "cat_id": 2,
      "label": "MDN: pre",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <pre> do standard web.",
        "en": "Official standard reference for <pre>."
      }
    },
    {
      "uid": "mat-37",
      "id": 37,
      "num_id": 37,
      "canonical_id": "2026-10-24-037",
      "symbol": "<hr>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: hr",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <hr> do standard web.",
        "en": "Official standard reference for <hr>."
      }
    },
    {
      "uid": "mat-38",
      "id": 38,
      "num_id": 38,
      "canonical_id": "2026-10-24-038",
      "symbol": "<div>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Com restrição pedagógica estrita)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: div",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <div> do standard web.",
        "en": "Official standard reference for <div>."
      }
    },
    {
      "uid": "mat-39",
      "id": 39,
      "num_id": 39,
      "canonical_id": "2026-10-24-039",
      "symbol": "<menu>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**NO** *(Preterido por ul em nav)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: menu",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <menu> do standard web.",
        "en": "Official standard reference for <menu>."
      }
    },
    {
      "uid": "mat-43",
      "id": 43,
      "num_id": 43,
      "canonical_id": "2026-10-24-043",
      "symbol": ":---",
      "type": ":---:",
      "tier": "foundational",
      "lev": 1,
      "status": ":---:",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": ":---",
      "mdn_url": "",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :--- do standard web.",
        "en": "Official standard reference for :---."
      }
    },
    {
      "uid": "mat-40",
      "id": 40,
      "num_id": 40,
      "canonical_id": "2026-10-24-040",
      "symbol": "<a>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: a",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <a> do standard web.",
        "en": "Official standard reference for <a>."
      }
    },
    {
      "uid": "mat-41",
      "id": 41,
      "num_id": 41,
      "canonical_id": "2026-10-24-041",
      "symbol": "<strong>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-text-semantics",
      "cat_id": 2,
      "label": "MDN: strong",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <strong> do standard web.",
        "en": "Official standard reference for <strong>."
      }
    },
    {
      "uid": "mat-42",
      "id": 42,
      "num_id": 42,
      "canonical_id": "2026-10-24-042",
      "symbol": "<em>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-text-semantics",
      "cat_id": 2,
      "label": "MDN: em",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <em> do standard web.",
        "en": "Official standard reference for <em>."
      }
    },
    {
      "uid": "mat-43",
      "id": 43,
      "num_id": 43,
      "canonical_id": "2026-10-24-043",
      "symbol": "<small>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-text-semantics",
      "cat_id": 2,
      "label": "MDN: small",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <small> do standard web.",
        "en": "Official standard reference for <small>."
      }
    },
    {
      "uid": "mat-44",
      "id": 44,
      "num_id": 44,
      "canonical_id": "2026-10-24-044",
      "symbol": "<cite>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: cite",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <cite> do standard web.",
        "en": "Official standard reference for <cite>."
      }
    },
    {
      "uid": "mat-45",
      "id": 45,
      "num_id": 45,
      "canonical_id": "2026-10-24-045",
      "symbol": "<q>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: q",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <q> do standard web.",
        "en": "Official standard reference for <q>."
      }
    },
    {
      "uid": "mat-46",
      "id": 46,
      "num_id": 46,
      "canonical_id": "2026-10-24-046",
      "symbol": "<abbr>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-text-semantics",
      "cat_id": 2,
      "label": "MDN: abbr",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <abbr> do standard web.",
        "en": "Official standard reference for <abbr>."
      }
    },
    {
      "uid": "mat-47",
      "id": 47,
      "num_id": 47,
      "canonical_id": "2026-10-24-047",
      "symbol": "<time>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-text-semantics",
      "cat_id": 2,
      "label": "MDN: time",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <time> do standard web.",
        "en": "Official standard reference for <time>."
      }
    },
    {
      "uid": "mat-48",
      "id": 48,
      "num_id": 48,
      "canonical_id": "2026-10-24-048",
      "symbol": "<code>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-text-semantics",
      "cat_id": 2,
      "label": "MDN: code",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <code> do standard web.",
        "en": "Official standard reference for <code>."
      }
    },
    {
      "uid": "mat-49",
      "id": 49,
      "num_id": 49,
      "canonical_id": "2026-10-24-049",
      "symbol": "<kbd>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**TBD** *(Atalhos de teclado de navegação)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: kbd",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <kbd> do standard web.",
        "en": "Official standard reference for <kbd>."
      }
    },
    {
      "uid": "mat-50",
      "id": 50,
      "num_id": 50,
      "canonical_id": "2026-10-24-050",
      "symbol": "<samp>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**NO**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: samp",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <samp> do standard web.",
        "en": "Official standard reference for <samp>."
      }
    },
    {
      "uid": "mat-51",
      "id": 51,
      "num_id": 51,
      "canonical_id": "2026-10-24-051",
      "symbol": "<var>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**NO**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: var",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <var> do standard web.",
        "en": "Official standard reference for <var>."
      }
    },
    {
      "uid": "mat-52",
      "id": 52,
      "num_id": 52,
      "canonical_id": "2026-10-24-052",
      "symbol": "<mark>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: mark",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <mark> do standard web.",
        "en": "Official standard reference for <mark>."
      }
    },
    {
      "uid": "mat-53",
      "id": 53,
      "num_id": 53,
      "canonical_id": "2026-10-24-053",
      "symbol": "<span>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-text-semantics",
      "cat_id": 2,
      "label": "MDN: span",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <span> do standard web.",
        "en": "Official standard reference for <span>."
      }
    },
    {
      "uid": "mat-54",
      "id": 54,
      "num_id": 54,
      "canonical_id": "2026-10-24-054",
      "symbol": "<br>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES** *(Uso poético/morada estrito)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: br",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <br> do standard web.",
        "en": "Official standard reference for <br>."
      }
    },
    {
      "uid": "mat-55",
      "id": 55,
      "num_id": 55,
      "canonical_id": "2026-10-24-055",
      "symbol": "<wbr>",
      "type": "HTML",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Quebras fluidas de palavras longas)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: wbr",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <wbr> do standard web.",
        "en": "Official standard reference for <wbr>."
      }
    },
    {
      "uid": "mat-56",
      "id": 56,
      "num_id": 56,
      "canonical_id": "2026-10-24-056",
      "symbol": "<sub> / <sup>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: sub",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <sub> / <sup> do standard web.",
        "en": "Official standard reference for <sub> / <sup>."
      }
    },
    {
      "uid": "mat-57",
      "id": 57,
      "num_id": 57,
      "canonical_id": "2026-10-24-057",
      "symbol": "<s>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: s",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <s> do standard web.",
        "en": "Official standard reference for <s>."
      }
    },
    {
      "uid": "mat-58",
      "id": 58,
      "num_id": 58,
      "canonical_id": "2026-10-24-058",
      "symbol": "<i> / <b>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES** *(Com distinção semântica de em/strong)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: i",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <i> / <b> do standard web.",
        "en": "Official standard reference for <i> / <b>."
      }
    },
    {
      "uid": "mat-59",
      "id": 59,
      "num_id": 59,
      "canonical_id": "2026-10-24-059",
      "symbol": "<u>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**NO** *(Evitado por colidir com hiperligações)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: u",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <u> do standard web.",
        "en": "Official standard reference for <u>."
      }
    },
    {
      "uid": "mat-60",
      "id": 60,
      "num_id": 60,
      "canonical_id": "2026-10-24-060",
      "symbol": "<data>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**TBD** *(Para associação a atributos de dados)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: data",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <data> do standard web.",
        "en": "Official standard reference for <data>."
      }
    },
    {
      "uid": "mat-61",
      "id": 61,
      "num_id": 61,
      "canonical_id": "2026-10-24-061",
      "symbol": "<dfn>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**NO**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: dfn",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <dfn> do standard web.",
        "en": "Official standard reference for <dfn>."
      }
    },
    {
      "uid": "mat-62",
      "id": 62,
      "num_id": 62,
      "canonical_id": "2026-10-24-062",
      "symbol": "<bdi> / <bdo>",
      "type": "HTML",
      "tier": "advanced",
      "lev": 3,
      "status": "**NO** *(Apenas para multilinguismo bidirecional)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: bdi",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <bdi> / <bdo> do standard web.",
        "en": "Official standard reference for <bdi> / <bdo>."
      }
    },
    {
      "uid": "mat-63",
      "id": 63,
      "num_id": 63,
      "canonical_id": "2026-10-24-063",
      "symbol": "<ruby>, <rt>, <rp>",
      "type": "HTML",
      "tier": "advanced",
      "lev": 3,
      "status": "**NO** *(Apenas para anotações fonéticas asiáticas)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: ruby",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <ruby>, <rt>, <rp> do standard web.",
        "en": "Official standard reference for <ruby>, <rt>, <rp>."
      }
    },
    {
      "uid": "mat-68",
      "id": 68,
      "num_id": 68,
      "canonical_id": "2026-10-24-068",
      "symbol": ":---",
      "type": ":---:",
      "tier": "foundational",
      "lev": 1,
      "status": ":---:",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": ":---",
      "mdn_url": "",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :--- do standard web.",
        "en": "Official standard reference for :---."
      }
    },
    {
      "uid": "mat-64",
      "id": 64,
      "num_id": 64,
      "canonical_id": "2026-10-24-064",
      "symbol": "<img>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-media",
      "cat_id": 3,
      "label": "MDN: img",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img",
      "pat_ref": 2,
      "desc": {
        "pt": "Elemento/propriedade <img> do standard web.",
        "en": "Official standard reference for <img>."
      }
    },
    {
      "uid": "mat-65",
      "id": 65,
      "num_id": 65,
      "canonical_id": "2026-10-24-065",
      "symbol": "<picture>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-media",
      "cat_id": 3,
      "label": "MDN: picture",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture",
      "pat_ref": 2,
      "desc": {
        "pt": "Elemento/propriedade <picture> do standard web.",
        "en": "Official standard reference for <picture>."
      }
    },
    {
      "uid": "mat-66",
      "id": 66,
      "num_id": 66,
      "canonical_id": "2026-10-24-066",
      "symbol": "<source>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-media",
      "cat_id": 3,
      "label": "MDN: source",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source",
      "pat_ref": 2,
      "desc": {
        "pt": "Elemento/propriedade <source> do standard web.",
        "en": "Official standard reference for <source>."
      }
    },
    {
      "uid": "mat-67",
      "id": 67,
      "num_id": 67,
      "canonical_id": "2026-10-24-067",
      "symbol": "<video>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-media",
      "cat_id": 3,
      "label": "MDN: video",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <video> do standard web.",
        "en": "Official standard reference for <video>."
      }
    },
    {
      "uid": "mat-68",
      "id": 68,
      "num_id": 68,
      "canonical_id": "2026-10-24-068",
      "symbol": "<audio>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-media",
      "cat_id": 3,
      "label": "MDN: audio",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <audio> do standard web.",
        "en": "Official standard reference for <audio>."
      }
    },
    {
      "uid": "mat-69",
      "id": 69,
      "num_id": 69,
      "canonical_id": "2026-10-24-069",
      "symbol": "<track>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**TBD** *(Legendas de acessibilidade em vídeo)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: track",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <track> do standard web.",
        "en": "Official standard reference for <track>."
      }
    },
    {
      "uid": "mat-70",
      "id": 70,
      "num_id": 70,
      "canonical_id": "2026-10-24-070",
      "symbol": "<map> / <area>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**NO** *(Obsoleto vs Responsive SVG)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: map",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <map> / <area> do standard web.",
        "en": "Official standard reference for <map> / <area>."
      }
    },
    {
      "uid": "mat-76",
      "id": 76,
      "num_id": 76,
      "canonical_id": "2026-10-24-076",
      "symbol": ":---",
      "type": ":---:",
      "tier": "foundational",
      "lev": 1,
      "status": ":---:",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": ":---",
      "mdn_url": "",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :--- do standard web.",
        "en": "Official standard reference for :---."
      }
    },
    {
      "uid": "mat-71",
      "id": 71,
      "num_id": 71,
      "canonical_id": "2026-10-24-071",
      "symbol": "<iframe>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: iframe",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <iframe> do standard web.",
        "en": "Official standard reference for <iframe>."
      }
    },
    {
      "uid": "mat-72",
      "id": 72,
      "num_id": 72,
      "canonical_id": "2026-10-24-072",
      "symbol": "<svg>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-media",
      "cat_id": 3,
      "label": "MDN: SVG",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <svg> do standard web.",
        "en": "Official standard reference for <svg>."
      }
    },
    {
      "uid": "mat-73",
      "id": 73,
      "num_id": 73,
      "canonical_id": "2026-10-24-073",
      "symbol": "<embed>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**NO**",
      "category": "cat-text-semantics",
      "cat_id": 2,
      "label": "MDN: embed",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <embed> do standard web.",
        "en": "Official standard reference for <embed>."
      }
    },
    {
      "uid": "mat-74",
      "id": 74,
      "num_id": 74,
      "canonical_id": "2026-10-24-074",
      "symbol": "<object>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**NO**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: object",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <object> do standard web.",
        "en": "Official standard reference for <object>."
      }
    },
    {
      "uid": "mat-75",
      "id": 75,
      "num_id": 75,
      "canonical_id": "2026-10-24-075",
      "symbol": "<math>",
      "type": "HTML",
      "tier": "advanced",
      "lev": 3,
      "status": "**NO**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: math",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/MathML/Element/math",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <math> do standard web.",
        "en": "Official standard reference for <math>."
      }
    },
    {
      "uid": "mat-76",
      "id": 76,
      "num_id": 76,
      "canonical_id": "2026-10-24-076",
      "symbol": "<canvas>",
      "type": "HTML",
      "tier": "advanced",
      "lev": 3,
      "status": "**NO** *(Exige JavaScript)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: canvas",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <canvas> do standard web.",
        "en": "Official standard reference for <canvas>."
      }
    },
    {
      "uid": "mat-83",
      "id": 83,
      "num_id": 83,
      "canonical_id": "2026-10-24-083",
      "symbol": ":---",
      "type": ":---:",
      "tier": "foundational",
      "lev": 1,
      "status": ":---:",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": ":---",
      "mdn_url": "",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :--- do standard web.",
        "en": "Official standard reference for :---."
      }
    },
    {
      "uid": "mat-77",
      "id": 77,
      "num_id": 77,
      "canonical_id": "2026-10-24-077",
      "symbol": "<table>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: table",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <table> do standard web.",
        "en": "Official standard reference for <table>."
      }
    },
    {
      "uid": "mat-78",
      "id": 78,
      "num_id": 78,
      "canonical_id": "2026-10-24-078",
      "symbol": "<caption>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: caption",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <caption> do standard web.",
        "en": "Official standard reference for <caption>."
      }
    },
    {
      "uid": "mat-79",
      "id": 79,
      "num_id": 79,
      "canonical_id": "2026-10-24-079",
      "symbol": "<thead>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: thead",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <thead> do standard web.",
        "en": "Official standard reference for <thead>."
      }
    },
    {
      "uid": "mat-80",
      "id": 80,
      "num_id": 80,
      "canonical_id": "2026-10-24-080",
      "symbol": "<tbody>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: tbody",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <tbody> do standard web.",
        "en": "Official standard reference for <tbody>."
      }
    },
    {
      "uid": "mat-81",
      "id": 81,
      "num_id": 81,
      "canonical_id": "2026-10-24-081",
      "symbol": "<tfoot>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: tfoot",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <tfoot> do standard web.",
        "en": "Official standard reference for <tfoot>."
      }
    },
    {
      "uid": "mat-82",
      "id": 82,
      "num_id": 82,
      "canonical_id": "2026-10-24-082",
      "symbol": "<tr>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: tr",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <tr> do standard web.",
        "en": "Official standard reference for <tr>."
      }
    },
    {
      "uid": "mat-83",
      "id": 83,
      "num_id": 83,
      "canonical_id": "2026-10-24-083",
      "symbol": "<th>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: th",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <th> do standard web.",
        "en": "Official standard reference for <th>."
      }
    },
    {
      "uid": "mat-84",
      "id": 84,
      "num_id": 84,
      "canonical_id": "2026-10-24-084",
      "symbol": "<td>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: td",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <td> do standard web.",
        "en": "Official standard reference for <td>."
      }
    },
    {
      "uid": "mat-85",
      "id": 85,
      "num_id": 85,
      "canonical_id": "2026-10-24-085",
      "symbol": "<colgroup> / <col>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**TBD** *(Estilização colunar eficiente)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: colgroup",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <colgroup> / <col> do standard web.",
        "en": "Official standard reference for <colgroup> / <col>."
      }
    },
    {
      "uid": "mat-93",
      "id": 93,
      "num_id": 93,
      "canonical_id": "2026-10-24-093",
      "symbol": ":---",
      "type": ":---:",
      "tier": "foundational",
      "lev": 1,
      "status": ":---:",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": ":---",
      "mdn_url": "",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :--- do standard web.",
        "en": "Official standard reference for :---."
      }
    },
    {
      "uid": "mat-86",
      "id": 86,
      "num_id": 86,
      "canonical_id": "2026-10-24-086",
      "symbol": "<form>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-forms",
      "cat_id": 4,
      "label": "MDN: form",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
      "pat_ref": 8,
      "desc": {
        "pt": "Elemento/propriedade <form> do standard web.",
        "en": "Official standard reference for <form>."
      }
    },
    {
      "uid": "mat-87",
      "id": 87,
      "num_id": 87,
      "canonical_id": "2026-10-24-087",
      "symbol": "<fieldset>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: fieldset",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <fieldset> do standard web.",
        "en": "Official standard reference for <fieldset>."
      }
    },
    {
      "uid": "mat-88",
      "id": 88,
      "num_id": 88,
      "canonical_id": "2026-10-24-088",
      "symbol": "<legend>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: legend",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <legend> do standard web.",
        "en": "Official standard reference for <legend>."
      }
    },
    {
      "uid": "mat-89",
      "id": 89,
      "num_id": 89,
      "canonical_id": "2026-10-24-089",
      "symbol": "<label>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-forms",
      "cat_id": 4,
      "label": "MDN: label",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <label> do standard web.",
        "en": "Official standard reference for <label>."
      }
    },
    {
      "uid": "mat-90",
      "id": 90,
      "num_id": 90,
      "canonical_id": "2026-10-24-090",
      "symbol": "<input type=\"text\">",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-forms",
      "cat_id": 4,
      "label": "MDN: input/text",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <input type=\"text\"> do standard web.",
        "en": "Official standard reference for <input type=\"text\">."
      }
    },
    {
      "uid": "mat-91",
      "id": 91,
      "num_id": 91,
      "canonical_id": "2026-10-24-091",
      "symbol": "<input type=\"email\">",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-forms",
      "cat_id": 4,
      "label": "MDN: input/email",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <input type=\"email\"> do standard web.",
        "en": "Official standard reference for <input type=\"email\">."
      }
    },
    {
      "uid": "mat-92",
      "id": 92,
      "num_id": 92,
      "canonical_id": "2026-10-24-092",
      "symbol": "<input type=\"radio\">",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Motor de estado Pure CSS)*",
      "category": "cat-forms",
      "cat_id": 4,
      "label": "MDN: input/radio",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <input type=\"radio\"> do standard web.",
        "en": "Official standard reference for <input type=\"radio\">."
      }
    },
    {
      "uid": "mat-93",
      "id": 93,
      "num_id": 93,
      "canonical_id": "2026-10-24-093",
      "symbol": "<input type=\"checkbox\">",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Gatilho para gavetas/toggles)*",
      "category": "cat-forms",
      "cat_id": 4,
      "label": "MDN: input/checkbox",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <input type=\"checkbox\"> do standard web.",
        "en": "Official standard reference for <input type=\"checkbox\">."
      }
    },
    {
      "uid": "mat-94",
      "id": 94,
      "num_id": 94,
      "canonical_id": "2026-10-24-094",
      "symbol": "<input type=\"submit\">",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-forms",
      "cat_id": 4,
      "label": "MDN: input/submit",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/submit",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <input type=\"submit\"> do standard web.",
        "en": "Official standard reference for <input type=\"submit\">."
      }
    },
    {
      "uid": "mat-95",
      "id": 95,
      "num_id": 95,
      "canonical_id": "2026-10-24-095",
      "symbol": "<button>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-forms",
      "cat_id": 4,
      "label": "MDN: button",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <button> do standard web.",
        "en": "Official standard reference for <button>."
      }
    },
    {
      "uid": "mat-96",
      "id": 96,
      "num_id": 96,
      "canonical_id": "2026-10-24-096",
      "symbol": "<select>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-forms",
      "cat_id": 4,
      "label": "MDN: select",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <select> do standard web.",
        "en": "Official standard reference for <select>."
      }
    },
    {
      "uid": "mat-97",
      "id": 97,
      "num_id": 97,
      "canonical_id": "2026-10-24-097",
      "symbol": "<optgroup>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: optgroup",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <optgroup> do standard web.",
        "en": "Official standard reference for <optgroup>."
      }
    },
    {
      "uid": "mat-98",
      "id": 98,
      "num_id": 98,
      "canonical_id": "2026-10-24-098",
      "symbol": "<option>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: option",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <option> do standard web.",
        "en": "Official standard reference for <option>."
      }
    },
    {
      "uid": "mat-99",
      "id": 99,
      "num_id": 99,
      "canonical_id": "2026-10-24-099",
      "symbol": "<textarea>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-forms",
      "cat_id": 4,
      "label": "MDN: textarea",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <textarea> do standard web.",
        "en": "Official standard reference for <textarea>."
      }
    },
    {
      "uid": "mat-100",
      "id": 100,
      "num_id": 100,
      "canonical_id": "2026-10-24-100",
      "symbol": "<datalist>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**TBD** *(Autocomplete nativo sem scripts)*",
      "category": "cat-forms",
      "cat_id": 4,
      "label": "MDN: datalist",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <datalist> do standard web.",
        "en": "Official standard reference for <datalist>."
      }
    },
    {
      "uid": "mat-101",
      "id": 101,
      "num_id": 101,
      "canonical_id": "2026-10-24-101",
      "symbol": "<output>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**TBD** *(Apresentação de resultados)*",
      "category": "cat-forms",
      "cat_id": 4,
      "label": "MDN: output",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <output> do standard web.",
        "en": "Official standard reference for <output>."
      }
    },
    {
      "uid": "mat-102",
      "id": 102,
      "num_id": 102,
      "canonical_id": "2026-10-24-102",
      "symbol": "<progress>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**TBD** *(Barras nativas de progresso)*",
      "category": "cat-forms",
      "cat_id": 4,
      "label": "MDN: progress",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <progress> do standard web.",
        "en": "Official standard reference for <progress>."
      }
    },
    {
      "uid": "mat-103",
      "id": 103,
      "num_id": 103,
      "canonical_id": "2026-10-24-103",
      "symbol": "<meter>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**TBD** *(Indicadores de medida/lotação)*",
      "category": "cat-forms",
      "cat_id": 4,
      "label": "MDN: meter",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <meter> do standard web.",
        "en": "Official standard reference for <meter>."
      }
    },
    {
      "uid": "mat-112",
      "id": 112,
      "num_id": 112,
      "canonical_id": "2026-10-24-112",
      "symbol": ":---",
      "type": ":---:",
      "tier": "foundational",
      "lev": 1,
      "status": ":---:",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": ":---",
      "mdn_url": "",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :--- do standard web.",
        "en": "Official standard reference for :---."
      }
    },
    {
      "uid": "mat-104",
      "id": 104,
      "num_id": 104,
      "canonical_id": "2026-10-24-104",
      "symbol": "<details>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Pure CSS Accordion)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: details",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details",
      "pat_ref": 4,
      "desc": {
        "pt": "Elemento/propriedade <details> do standard web.",
        "en": "Official standard reference for <details>."
      }
    },
    {
      "uid": "mat-105",
      "id": 105,
      "num_id": 105,
      "canonical_id": "2026-10-24-105",
      "symbol": "<summary>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Cabeçalho clicável do accordion)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: summary",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary",
      "pat_ref": 4,
      "desc": {
        "pt": "Elemento/propriedade <summary> do standard web.",
        "en": "Official standard reference for <summary>."
      }
    },
    {
      "uid": "mat-106",
      "id": 106,
      "num_id": 106,
      "canonical_id": "2026-10-24-106",
      "symbol": "<dialog>",
      "type": "HTML",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Janelas modais acessíveis)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: dialog",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",
      "pat_ref": 5,
      "desc": {
        "pt": "Elemento/propriedade <dialog> do standard web.",
        "en": "Official standard reference for <dialog>."
      }
    },
    {
      "uid": "mat-116",
      "id": 116,
      "num_id": 116,
      "canonical_id": "2026-10-24-116",
      "symbol": ":---",
      "type": ":---:",
      "tier": "foundational",
      "lev": 1,
      "status": ":---:",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": ":---",
      "mdn_url": "",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :--- do standard web.",
        "en": "Official standard reference for :---."
      }
    },
    {
      "uid": "mat-107",
      "id": 107,
      "num_id": 107,
      "canonical_id": "2026-10-24-107",
      "symbol": "<del>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: del",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <del> do standard web.",
        "en": "Official standard reference for <del>."
      }
    },
    {
      "uid": "mat-108",
      "id": 108,
      "num_id": 108,
      "canonical_id": "2026-10-24-108",
      "symbol": "<ins>",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: ins",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <ins> do standard web.",
        "en": "Official standard reference for <ins>."
      }
    },
    {
      "uid": "mat-109",
      "id": 109,
      "num_id": 109,
      "canonical_id": "2026-10-24-109",
      "symbol": "<template>",
      "type": "HTML",
      "tier": "advanced",
      "lev": 3,
      "status": "**NO** *(Exige JavaScript para clonagem)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: template",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <template> do standard web.",
        "en": "Official standard reference for <template>."
      }
    },
    {
      "uid": "mat-110",
      "id": 110,
      "num_id": 110,
      "canonical_id": "2026-10-24-110",
      "symbol": "<slot>",
      "type": "HTML",
      "tier": "advanced",
      "lev": 3,
      "status": "**NO** *(Shadow DOM / Web Components)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: slot",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <slot> do standard web.",
        "en": "Official standard reference for <slot>."
      }
    },
    {
      "uid": "mat-111",
      "id": 111,
      "num_id": 111,
      "canonical_id": "2026-10-24-111",
      "symbol": "<script>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**NO** *(Curso estritamente Zero JavaScript)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: script",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <script> do standard web.",
        "en": "Official standard reference for <script>."
      }
    },
    {
      "uid": "mat-112",
      "id": 112,
      "num_id": 112,
      "canonical_id": "2026-10-24-112",
      "symbol": "<noscript>",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**NO**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: noscript",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade <noscript> do standard web.",
        "en": "Official standard reference for <noscript>."
      }
    },
    {
      "uid": "mat-123",
      "id": 123,
      "num_id": 123,
      "canonical_id": "2026-10-24-123",
      "symbol": ":---",
      "type": ":---:",
      "tier": "foundational",
      "lev": 1,
      "status": ":---:",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": ":---",
      "mdn_url": "",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :--- do standard web.",
        "en": "Official standard reference for :---."
      }
    },
    {
      "uid": "mat-113",
      "id": 113,
      "num_id": 113,
      "canonical_id": "2026-10-24-113",
      "symbol": "class",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-forms",
      "cat_id": 4,
      "label": "MDN: class attribute",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade class do standard web.",
        "en": "Official standard reference for class."
      }
    },
    {
      "uid": "mat-114",
      "id": 114,
      "num_id": 114,
      "canonical_id": "2026-10-24-114",
      "symbol": "id",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-forms",
      "cat_id": 4,
      "label": "MDN: id attribute",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade id do standard web.",
        "en": "Official standard reference for id."
      }
    },
    {
      "uid": "mat-115",
      "id": 115,
      "num_id": 115,
      "canonical_id": "2026-10-24-115",
      "symbol": "lang / dir",
      "type": "HTML",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: lang attribute",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade lang / dir do standard web.",
        "en": "Official standard reference for lang / dir."
      }
    },
    {
      "uid": "mat-116",
      "id": 116,
      "num_id": 116,
      "canonical_id": "2026-10-24-116",
      "symbol": "hidden",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-forms",
      "cat_id": 4,
      "label": "MDN: hidden attribute",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade hidden do standard web.",
        "en": "Official standard reference for hidden."
      }
    },
    {
      "uid": "mat-117",
      "id": 117,
      "num_id": 117,
      "canonical_id": "2026-10-24-117",
      "symbol": "tabindex",
      "type": "HTML",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-forms",
      "cat_id": 4,
      "label": "MDN: tabindex attribute",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade tabindex do standard web.",
        "en": "Official standard reference for tabindex."
      }
    },
    {
      "uid": "mat-118",
      "id": 118,
      "num_id": 118,
      "canonical_id": "2026-10-24-118",
      "symbol": "data-* (Data Attributes)",
      "type": "HTML",
      "tier": "advanced",
      "lev": 3,
      "status": "**YES** *(Para seletores `[data-theme]`)*",
      "category": "cat-forms",
      "cat_id": 4,
      "label": "MDN: data-* attributes",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade data-* (Data Attributes) do standard web.",
        "en": "Official standard reference for data-* (Data Attributes)."
      }
    },
    {
      "uid": "mat-119",
      "id": 119,
      "num_id": 119,
      "canonical_id": "2026-10-24-119",
      "symbol": "popover",
      "type": "HTML",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Modais e gavetas Pure CSS)*",
      "category": "cat-forms",
      "cat_id": 4,
      "label": "MDN: popover attribute",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover",
      "pat_ref": 5,
      "desc": {
        "pt": "Elemento/propriedade popover do standard web.",
        "en": "Official standard reference for popover."
      }
    },
    {
      "uid": "mat-120",
      "id": 120,
      "num_id": 120,
      "canonical_id": "2026-10-24-120",
      "symbol": "popovertarget",
      "type": "HTML",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Gatilho declarativo sem JS)*",
      "category": "cat-forms",
      "cat_id": 4,
      "label": "MDN: popovertarget",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#popovertarget",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade popovertarget do standard web.",
        "en": "Official standard reference for popovertarget."
      }
    },
    {
      "uid": "mat-121",
      "id": 121,
      "num_id": 121,
      "canonical_id": "2026-10-24-121",
      "symbol": "popovertargetaction",
      "type": "HTML",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(toggle, show, hide)*",
      "category": "cat-forms",
      "cat_id": 4,
      "label": "MDN: popovertargetaction",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#popovertargetaction",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade popovertargetaction do standard web.",
        "en": "Official standard reference for popovertargetaction."
      }
    },
    {
      "uid": "mat-122",
      "id": 122,
      "num_id": 122,
      "canonical_id": "2026-10-24-122",
      "symbol": "inert",
      "type": "HTML",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Bloqueio de foco fora de modais)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: inert attribute",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inert",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade inert do standard web.",
        "en": "Official standard reference for inert."
      }
    },
    {
      "uid": "mat-134",
      "id": 134,
      "num_id": 134,
      "canonical_id": "2026-10-24-134",
      "symbol": ":---",
      "type": ":---:",
      "tier": "foundational",
      "lev": 1,
      "status": ":---:",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": ":---",
      "mdn_url": "",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :--- do standard web.",
        "en": "Official standard reference for :---."
      }
    },
    {
      "uid": "mat-123",
      "id": 123,
      "num_id": 123,
      "canonical_id": "2026-10-24-123",
      "symbol": "* (Universal)",
      "type": "CSS",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES** *(Reset de box-sizing e margens)*",
      "category": "cat-selectors",
      "cat_id": 5,
      "label": "MDN: Universal selectors",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade * (Universal) do standard web.",
        "en": "Official standard reference for * (Universal)."
      }
    },
    {
      "uid": "mat-124",
      "id": 124,
      "num_id": 124,
      "canonical_id": "2026-10-24-124",
      "symbol": "element (Type / Tag)",
      "type": "CSS",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES** *(Estilização base e herança)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: Type selectors",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade element (Type / Tag) do standard web.",
        "en": "Official standard reference for element (Type / Tag)."
      }
    },
    {
      "uid": "mat-125",
      "id": 125,
      "num_id": 125,
      "canonical_id": "2026-10-24-125",
      "symbol": ".class (Class Selector)",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-selectors",
      "cat_id": 5,
      "label": "MDN: Class selectors",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade .class (Class Selector) do standard web.",
        "en": "Official standard reference for .class (Class Selector)."
      }
    },
    {
      "uid": "mat-126",
      "id": 126,
      "num_id": 126,
      "canonical_id": "2026-10-24-126",
      "symbol": "#id (ID Selector)",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Usado com parcimónia para âncoras)*",
      "category": "cat-selectors",
      "cat_id": 5,
      "label": "MDN: ID selectors",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade #id (ID Selector) do standard web.",
        "en": "Official standard reference for #id (ID Selector)."
      }
    },
    {
      "uid": "mat-139",
      "id": 139,
      "num_id": 139,
      "canonical_id": "2026-10-24-139",
      "symbol": ":---",
      "type": ":---:",
      "tier": "foundational",
      "lev": 1,
      "status": ":---:",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": ":---",
      "mdn_url": "",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :--- do standard web.",
        "en": "Official standard reference for :---."
      }
    },
    {
      "uid": "mat-127",
      "id": 127,
      "num_id": 127,
      "canonical_id": "2026-10-24-127",
      "symbol": "A B (Descendant Combinator)",
      "type": "CSS",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES** *(Pilar do TP01: `nav ul`, `header h1`)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: Descendant combinator",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade A B (Descendant Combinator) do standard web.",
        "en": "Official standard reference for A B (Descendant Combinator)."
      }
    },
    {
      "uid": "mat-128",
      "id": 128,
      "num_id": 128,
      "canonical_id": "2026-10-24-128",
      "symbol": "A > B (Child Combinator)",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Filho direto estrito)*",
      "category": "cat-selectors",
      "cat_id": 5,
      "label": "MDN: Child combinator",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade A > B (Child Combinator) do standard web.",
        "en": "Official standard reference for A > B (Child Combinator)."
      }
    },
    {
      "uid": "mat-129",
      "id": 129,
      "num_id": 129,
      "canonical_id": "2026-10-24-129",
      "symbol": "A + B (Next-Sibling)",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Irmão adjacente: parágrafos seguidos)*",
      "category": "cat-selectors",
      "cat_id": 5,
      "label": "MDN: Next-sibling combinator",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Next-sibling_combinator",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade A + B (Next-Sibling) do standard web.",
        "en": "Official standard reference for A + B (Next-Sibling)."
      }
    },
    {
      "uid": "mat-130",
      "id": 130,
      "num_id": 130,
      "canonical_id": "2026-10-24-130",
      "symbol": "A ~ B (Subsequent-Sibling)",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Irmãos subsequentes: tab panels)*",
      "category": "cat-selectors",
      "cat_id": 5,
      "label": "MDN: Subsequent-sibling combinator",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Subsequent-sibling_combinator",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade A ~ B (Subsequent-Sibling) do standard web.",
        "en": "Official standard reference for A ~ B (Subsequent-Sibling)."
      }
    },
    {
      "uid": "mat-131",
      "id": 131,
      "num_id": 131,
      "canonical_id": "2026-10-24-131",
      "symbol": "",
      "type": "",
      "tier": "foundational",
      "lev": 1,
      "status": "CSS",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "",
      "mdn_url": "",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade  do standard web.",
        "en": "Official standard reference for ."
      }
    },
    {
      "uid": "mat-145",
      "id": 145,
      "num_id": 145,
      "canonical_id": "2026-10-24-145",
      "symbol": ":---",
      "type": ":---:",
      "tier": "foundational",
      "lev": 1,
      "status": ":---:",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": ":---",
      "mdn_url": "",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :--- do standard web.",
        "en": "Official standard reference for :---."
      }
    },
    {
      "uid": "mat-132",
      "id": 132,
      "num_id": 132,
      "canonical_id": "2026-10-24-132",
      "symbol": "[attr]",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Ex.: `input[required]`)*",
      "category": "cat-selectors",
      "cat_id": 5,
      "label": "MDN: Attribute selectors",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade [attr] do standard web.",
        "en": "Official standard reference for [attr]."
      }
    },
    {
      "uid": "mat-133",
      "id": 133,
      "num_id": 133,
      "canonical_id": "2026-10-24-133",
      "symbol": "[attr=\"value\"]",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Ex.: `input[type=\"radio\"]`)*",
      "category": "cat-selectors",
      "cat_id": 5,
      "label": "MDN: Attribute selectors",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade [attr=\"value\"] do standard web.",
        "en": "Official standard reference for [attr=\"value\"]."
      }
    },
    {
      "uid": "mat-134",
      "id": 134,
      "num_id": 134,
      "canonical_id": "2026-10-24-134",
      "symbol": "[attr^=\"value\"]",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Links externos: `a[href^=\"https://\"]`)*",
      "category": "cat-selectors",
      "cat_id": 5,
      "label": "MDN: Attribute selectors",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade [attr^=\"value\"] do standard web.",
        "en": "Official standard reference for [attr^=\"value\"]."
      }
    },
    {
      "uid": "mat-135",
      "id": 135,
      "num_id": 135,
      "canonical_id": "2026-10-24-135",
      "symbol": "[attr$=\"value\"]",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Ficheiros: `a[href$=\".pdf\"]`)*",
      "category": "cat-selectors",
      "cat_id": 5,
      "label": "MDN: Attribute selectors",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade [attr$=\"value\"] do standard web.",
        "en": "Official standard reference for [attr$=\"value\"]."
      }
    },
    {
      "uid": "mat-136",
      "id": 136,
      "num_id": 136,
      "canonical_id": "2026-10-24-136",
      "symbol": "[attr*=\"value\"]",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Substring match)*",
      "category": "cat-selectors",
      "cat_id": 5,
      "label": "MDN: Attribute selectors",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade [attr*=\"value\"] do standard web.",
        "en": "Official standard reference for [attr*=\"value\"]."
      }
    },
    {
      "uid": "mat-137",
      "id": 137,
      "num_id": 137,
      "canonical_id": "2026-10-24-137",
      "symbol": "[attr~=\"value\"]",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Word match)*",
      "category": "cat-selectors",
      "cat_id": 5,
      "label": "MDN: Attribute selectors",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade [attr~=\"value\"] do standard web.",
        "en": "Official standard reference for [attr~=\"value\"]."
      }
    },
    {
      "uid": "mat-138",
      "id": 138,
      "num_id": 138,
      "canonical_id": "2026-10-24-138",
      "symbol": "[attr",
      "type": "=\"value\"]`",
      "tier": "foundational",
      "lev": 1,
      "status": "Intermediate",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "[attr",
      "mdn_url": "",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade [attr do standard web.",
        "en": "Official standard reference for [attr."
      }
    },
    {
      "uid": "mat-139",
      "id": 139,
      "num_id": 139,
      "canonical_id": "2026-10-24-139",
      "symbol": "[attr=\"val\" i] (Case Insensitive)",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Robustez com extensões)*",
      "category": "cat-selectors",
      "cat_id": 5,
      "label": "MDN: Attribute selectors (case-sensitivity)",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors#case-sensitivity",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade [attr=\"val\" i] (Case Insensitive) do standard web.",
        "en": "Official standard reference for [attr=\"val\" i] (Case Insensitive)."
      }
    },
    {
      "uid": "mat-154",
      "id": 154,
      "num_id": 154,
      "canonical_id": "2026-10-24-154",
      "symbol": ":---",
      "type": ":---:",
      "tier": "foundational",
      "lev": 1,
      "status": ":---:",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": ":---",
      "mdn_url": "",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :--- do standard web.",
        "en": "Official standard reference for :---."
      }
    },
    {
      "uid": "mat-140",
      "id": 140,
      "num_id": 140,
      "canonical_id": "2026-10-24-140",
      "symbol": ":hover",
      "type": "CSS",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: :hover",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:hover",
      "pat_ref": 1,
      "desc": {
        "pt": "Elemento/propriedade :hover do standard web.",
        "en": "Official standard reference for :hover."
      }
    },
    {
      "uid": "mat-141",
      "id": 141,
      "num_id": 141,
      "canonical_id": "2026-10-24-141",
      "symbol": ":active",
      "type": "CSS",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: :active",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:active",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :active do standard web.",
        "en": "Official standard reference for :active."
      }
    },
    {
      "uid": "mat-142",
      "id": 142,
      "num_id": 142,
      "canonical_id": "2026-10-24-142",
      "symbol": ":focus",
      "type": "CSS",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: :focus",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :focus do standard web.",
        "en": "Official standard reference for :focus."
      }
    },
    {
      "uid": "mat-143",
      "id": 143,
      "num_id": 143,
      "canonical_id": "2026-10-24-143",
      "symbol": ":focus-visible",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Acessibilidade essencial)*",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: :focus-visible",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :focus-visible do standard web.",
        "en": "Official standard reference for :focus-visible."
      }
    },
    {
      "uid": "mat-144",
      "id": 144,
      "num_id": 144,
      "canonical_id": "2026-10-24-144",
      "symbol": ":focus-within",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**TBD** *(Abertura de submenus via teclado)*",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: :focus-within",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within",
      "pat_ref": 1,
      "desc": {
        "pt": "Elemento/propriedade :focus-within do standard web.",
        "en": "Official standard reference for :focus-within."
      }
    },
    {
      "uid": "mat-145",
      "id": 145,
      "num_id": 145,
      "canonical_id": "2026-10-24-145",
      "symbol": ":link",
      "type": "CSS",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: :link",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:link",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :link do standard web.",
        "en": "Official standard reference for :link."
      }
    },
    {
      "uid": "mat-146",
      "id": 146,
      "num_id": 146,
      "canonical_id": "2026-10-24-146",
      "symbol": ":visited",
      "type": "CSS",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: :visited",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:visited",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :visited do standard web.",
        "en": "Official standard reference for :visited."
      }
    },
    {
      "uid": "mat-147",
      "id": 147,
      "num_id": 147,
      "canonical_id": "2026-10-24-147",
      "symbol": ":any-link",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**TBD** *(Reset unificado de hiperligações)*",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: :any-link",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:any-link",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :any-link do standard web.",
        "en": "Official standard reference for :any-link."
      }
    },
    {
      "uid": "mat-163",
      "id": 163,
      "num_id": 163,
      "canonical_id": "2026-10-24-163",
      "symbol": ":---",
      "type": ":---:",
      "tier": "foundational",
      "lev": 1,
      "status": ":---:",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": ":---",
      "mdn_url": "",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :--- do standard web.",
        "en": "Official standard reference for :---."
      }
    },
    {
      "uid": "mat-148",
      "id": 148,
      "num_id": 148,
      "canonical_id": "2026-10-24-148",
      "symbol": ":checked",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Motor de cálculo e toggles)*",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: :checked",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:checked",
      "pat_ref": 1,
      "desc": {
        "pt": "Elemento/propriedade :checked do standard web.",
        "en": "Official standard reference for :checked."
      }
    },
    {
      "uid": "mat-149",
      "id": 149,
      "num_id": 149,
      "canonical_id": "2026-10-24-149",
      "symbol": ":disabled / :enabled",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: :disabled",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :disabled / :enabled do standard web.",
        "en": "Official standard reference for :disabled / :enabled."
      }
    },
    {
      "uid": "mat-150",
      "id": 150,
      "num_id": 150,
      "canonical_id": "2026-10-24-150",
      "symbol": ":required / :optional",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: :required",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:required",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :required / :optional do standard web.",
        "en": "Official standard reference for :required / :optional."
      }
    },
    {
      "uid": "mat-151",
      "id": 151,
      "num_id": 151,
      "canonical_id": "2026-10-24-151",
      "symbol": ":valid / :invalid",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: :valid",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:valid",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :valid / :invalid do standard web.",
        "en": "Official standard reference for :valid / :invalid."
      }
    },
    {
      "uid": "mat-152",
      "id": 152,
      "num_id": 152,
      "canonical_id": "2026-10-24-152",
      "symbol": ":user-valid / :user-invalid",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**TBD** *(Validação pós-interação sem sustos)*",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: :user-valid",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:user-valid",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :user-valid / :user-invalid do standard web.",
        "en": "Official standard reference for :user-valid / :user-invalid."
      }
    },
    {
      "uid": "mat-153",
      "id": 153,
      "num_id": 153,
      "canonical_id": "2026-10-24-153",
      "symbol": ":placeholder-shown",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**TBD** *(Labels flutuantes Pure CSS)*",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: :placeholder-shown",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:placeholder-shown",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :placeholder-shown do standard web.",
        "en": "Official standard reference for :placeholder-shown."
      }
    },
    {
      "uid": "mat-154",
      "id": 154,
      "num_id": 154,
      "canonical_id": "2026-10-24-154",
      "symbol": ":read-only / :read-write",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**NO**",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: :read-only",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:read-only",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :read-only / :read-write do standard web.",
        "en": "Official standard reference for :read-only / :read-write."
      }
    },
    {
      "uid": "mat-155",
      "id": 155,
      "num_id": 155,
      "canonical_id": "2026-10-24-155",
      "symbol": ":default",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**TBD**",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: :default",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:default",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :default do standard web.",
        "en": "Official standard reference for :default."
      }
    },
    {
      "uid": "mat-172",
      "id": 172,
      "num_id": 172,
      "canonical_id": "2026-10-24-172",
      "symbol": ":---",
      "type": ":---:",
      "tier": "foundational",
      "lev": 1,
      "status": ":---:",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": ":---",
      "mdn_url": "",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :--- do standard web.",
        "en": "Official standard reference for :---."
      }
    },
    {
      "uid": "mat-156",
      "id": 156,
      "num_id": 156,
      "canonical_id": "2026-10-24-156",
      "symbol": ":root",
      "type": "CSS",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES** *(Âncora global de variáveis/tokens)*",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: :root",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:root",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :root do standard web.",
        "en": "Official standard reference for :root."
      }
    },
    {
      "uid": "mat-157",
      "id": 157,
      "num_id": 157,
      "canonical_id": "2026-10-24-157",
      "symbol": ":first-child / :last-child",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Limpeza de bordas/margens em listas)*",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: :first-child",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :first-child / :last-child do standard web.",
        "en": "Official standard reference for :first-child / :last-child."
      }
    },
    {
      "uid": "mat-158",
      "id": 158,
      "num_id": 158,
      "canonical_id": "2026-10-24-158",
      "symbol": ":only-child",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: :only-child",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:only-child",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :only-child do standard web.",
        "en": "Official standard reference for :only-child."
      }
    },
    {
      "uid": "mat-159",
      "id": 159,
      "num_id": 159,
      "canonical_id": "2026-10-24-159",
      "symbol": ":nth-child(An+B)",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Zebra striping e padrões repetitivos)*",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: :nth-child",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :nth-child(An+B) do standard web.",
        "en": "Official standard reference for :nth-child(An+B)."
      }
    },
    {
      "uid": "mat-160",
      "id": 160,
      "num_id": 160,
      "canonical_id": "2026-10-24-160",
      "symbol": ":nth-last-child(An+B)",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**TBD** *(Contagem a partir do fim)*",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: :nth-last-child",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-child",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :nth-last-child(An+B) do standard web.",
        "en": "Official standard reference for :nth-last-child(An+B)."
      }
    },
    {
      "uid": "mat-161",
      "id": 161,
      "num_id": 161,
      "canonical_id": "2026-10-24-161",
      "symbol": ":first-of-type / :last-of-type",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: :first-of-type",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :first-of-type / :last-of-type do standard web.",
        "en": "Official standard reference for :first-of-type / :last-of-type."
      }
    },
    {
      "uid": "mat-162",
      "id": 162,
      "num_id": 162,
      "canonical_id": "2026-10-24-162",
      "symbol": ":nth-of-type(An+B)",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: :nth-of-type",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :nth-of-type(An+B) do standard web.",
        "en": "Official standard reference for :nth-of-type(An+B)."
      }
    },
    {
      "uid": "mat-163",
      "id": 163,
      "num_id": 163,
      "canonical_id": "2026-10-24-163",
      "symbol": ":empty",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Ocultar contentores vazios)*",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: :empty",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:empty",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :empty do standard web.",
        "en": "Official standard reference for :empty."
      }
    },
    {
      "uid": "mat-181",
      "id": 181,
      "num_id": 181,
      "canonical_id": "2026-10-24-181",
      "symbol": ":---",
      "type": ":---:",
      "tier": "foundational",
      "lev": 1,
      "status": ":---:",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": ":---",
      "mdn_url": "",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :--- do standard web.",
        "en": "Official standard reference for :---."
      }
    },
    {
      "uid": "mat-164",
      "id": 164,
      "num_id": 164,
      "canonical_id": "2026-10-24-164",
      "symbol": ":has() (Relational Parent)",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**YES** *(Pilar dos TP06 e TP06-B)*",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: :has()",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:has",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :has() (Relational Parent) do standard web.",
        "en": "Official standard reference for :has() (Relational Parent)."
      }
    },
    {
      "uid": "mat-165",
      "id": 165,
      "num_id": 165,
      "canonical_id": "2026-10-24-165",
      "symbol": ":not() (Negation)",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Ex.: `:not(:last-child)`)*",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: :not()",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:not",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :not() (Negation) do standard web.",
        "en": "Official standard reference for :not() (Negation)."
      }
    },
    {
      "uid": "mat-166",
      "id": 166,
      "num_id": 166,
      "canonical_id": "2026-10-24-166",
      "symbol": ":is() (Matches-Any)",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**TBD** *(Redução dramática de seletores longos)*",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: :is()",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:is",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :is() (Matches-Any) do standard web.",
        "en": "Official standard reference for :is() (Matches-Any)."
      }
    },
    {
      "uid": "mat-167",
      "id": 167,
      "num_id": 167,
      "canonical_id": "2026-10-24-167",
      "symbol": ":where() (Zero Specificity)",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**TBD** *(Estilos de reset fáceis de sobrepor)*",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: :where()",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:where",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :where() (Zero Specificity) do standard web.",
        "en": "Official standard reference for :where() (Zero Specificity)."
      }
    },
    {
      "uid": "mat-186",
      "id": 186,
      "num_id": 186,
      "canonical_id": "2026-10-24-186",
      "symbol": ":---",
      "type": ":---:",
      "tier": "foundational",
      "lev": 1,
      "status": ":---:",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": ":---",
      "mdn_url": "",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :--- do standard web.",
        "en": "Official standard reference for :---."
      }
    },
    {
      "uid": "mat-168",
      "id": 168,
      "num_id": 168,
      "canonical_id": "2026-10-24-168",
      "symbol": ":target",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Modais, tabs e slide highlights)*",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: :target",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:target",
      "pat_ref": 3,
      "desc": {
        "pt": "Elemento/propriedade :target do standard web.",
        "en": "Official standard reference for :target."
      }
    },
    {
      "uid": "mat-169",
      "id": 169,
      "num_id": 169,
      "canonical_id": "2026-10-24-169",
      "symbol": ":popover-open",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Estilização de menus/modais abertos)*",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: :popover-open",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:popover-open",
      "pat_ref": 5,
      "desc": {
        "pt": "Elemento/propriedade :popover-open do standard web.",
        "en": "Official standard reference for :popover-open."
      }
    },
    {
      "uid": "mat-170",
      "id": 170,
      "num_id": 170,
      "canonical_id": "2026-10-24-170",
      "symbol": ":modal",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Estilização do dialog em estado modal)*",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: :modal",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:modal",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :modal do standard web.",
        "en": "Official standard reference for :modal."
      }
    },
    {
      "uid": "mat-171",
      "id": 171,
      "num_id": 171,
      "canonical_id": "2026-10-24-171",
      "symbol": ":fullscreen",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD**",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: :fullscreen",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:fullscreen",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :fullscreen do standard web.",
        "en": "Official standard reference for :fullscreen."
      }
    },
    {
      "uid": "mat-191",
      "id": 191,
      "num_id": 191,
      "canonical_id": "2026-10-24-191",
      "symbol": ":---",
      "type": ":---:",
      "tier": "foundational",
      "lev": 1,
      "status": ":---:",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": ":---",
      "mdn_url": "",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :--- do standard web.",
        "en": "Official standard reference for :---."
      }
    },
    {
      "uid": "mat-172",
      "id": 172,
      "num_id": 172,
      "canonical_id": "2026-10-24-172",
      "symbol": "::before",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Conteúdo gerado, ícones, overlays)*",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: ::before",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/::before",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade ::before do standard web.",
        "en": "Official standard reference for ::before."
      }
    },
    {
      "uid": "mat-173",
      "id": 173,
      "num_id": 173,
      "canonical_id": "2026-10-24-173",
      "symbol": "::after",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Motor reativo de preços, setas)*",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: ::after",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/::after",
      "pat_ref": 8,
      "desc": {
        "pt": "Elemento/propriedade ::after do standard web.",
        "en": "Official standard reference for ::after."
      }
    },
    {
      "uid": "mat-174",
      "id": 174,
      "num_id": 174,
      "canonical_id": "2026-10-24-174",
      "symbol": "::marker",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Estilização do bullet de lista/summary)*",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: ::marker",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/::marker",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade ::marker do standard web.",
        "en": "Official standard reference for ::marker."
      }
    },
    {
      "uid": "mat-175",
      "id": 175,
      "num_id": 175,
      "canonical_id": "2026-10-24-175",
      "symbol": "::placeholder",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: ::placeholder",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade ::placeholder do standard web.",
        "en": "Official standard reference for ::placeholder."
      }
    },
    {
      "uid": "mat-176",
      "id": 176,
      "num_id": 176,
      "canonical_id": "2026-10-24-176",
      "symbol": "::backdrop",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Fundo escurecido/desfocado de modais)*",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: ::backdrop",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop",
      "pat_ref": 5,
      "desc": {
        "pt": "Elemento/propriedade ::backdrop do standard web.",
        "en": "Official standard reference for ::backdrop."
      }
    },
    {
      "uid": "mat-177",
      "id": 177,
      "num_id": 177,
      "canonical_id": "2026-10-24-177",
      "symbol": "::selection",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Personalização da cor de seleção)*",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: ::selection",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/::selection",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade ::selection do standard web.",
        "en": "Official standard reference for ::selection."
      }
    },
    {
      "uid": "mat-178",
      "id": 178,
      "num_id": 178,
      "canonical_id": "2026-10-24-178",
      "symbol": "::first-letter",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Letra capitular editorial)*",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: ::first-letter",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/::first-letter",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade ::first-letter do standard web.",
        "en": "Official standard reference for ::first-letter."
      }
    },
    {
      "uid": "mat-179",
      "id": 179,
      "num_id": 179,
      "canonical_id": "2026-10-24-179",
      "symbol": "::first-line",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Abertura editorial de parágrafo)*",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: ::first-line",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/::first-line",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade ::first-line do standard web.",
        "en": "Official standard reference for ::first-line."
      }
    },
    {
      "uid": "mat-180",
      "id": 180,
      "num_id": 180,
      "canonical_id": "2026-10-24-180",
      "symbol": "::file-selector-button",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**TBD**",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: ::file-selector-button",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/::file-selector-button",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade ::file-selector-button do standard web.",
        "en": "Official standard reference for ::file-selector-button."
      }
    },
    {
      "uid": "mat-181",
      "id": 181,
      "num_id": 181,
      "canonical_id": "2026-10-24-181",
      "symbol": "::view-transition",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Transições suaves entre páginas)*",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: ::view-transition",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/::view-transition",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade ::view-transition do standard web.",
        "en": "Official standard reference for ::view-transition."
      }
    },
    {
      "uid": "mat-202",
      "id": 202,
      "num_id": 202,
      "canonical_id": "2026-10-24-202",
      "symbol": ":---",
      "type": ":---:",
      "tier": "foundational",
      "lev": 1,
      "status": ":---:",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": ":---",
      "mdn_url": "",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :--- do standard web.",
        "en": "Official standard reference for :---."
      }
    },
    {
      "uid": "mat-182",
      "id": 182,
      "num_id": 182,
      "canonical_id": "2026-10-24-182",
      "symbol": "CSS Reset (Eric Meyer v2.0)",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Fundação estrutural nos TP02 a TP06)*",
      "category": "cat-selectors",
      "cat_id": 5,
      "label": "MDN: Handling conflicts & resets",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#css_resets",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade CSS Reset (Eric Meyer v2.0) do standard web.",
        "en": "Official standard reference for CSS Reset (Eric Meyer v2.0)."
      }
    },
    {
      "uid": "mat-183",
      "id": 183,
      "num_id": 183,
      "canonical_id": "2026-10-24-183",
      "symbol": "box-sizing",
      "type": "CSS",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES** *(Obrigatório `border-box` no reset)*",
      "category": "cat-boxmodel",
      "cat_id": 7,
      "label": "MDN: box-sizing",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade box-sizing do standard web.",
        "en": "Official standard reference for box-sizing."
      }
    },
    {
      "uid": "mat-184",
      "id": 184,
      "num_id": 184,
      "canonical_id": "2026-10-24-184",
      "symbol": "width / height",
      "type": "CSS",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-boxmodel",
      "cat_id": 7,
      "label": "MDN: width",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/width",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade width / height do standard web.",
        "en": "Official standard reference for width / height."
      }
    },
    {
      "uid": "mat-185",
      "id": 185,
      "num_id": 185,
      "canonical_id": "2026-10-24-185",
      "symbol": "min-width / max-width",
      "type": "CSS",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES** *(Fator de segurança mobile)*",
      "category": "cat-boxmodel",
      "cat_id": 7,
      "label": "MDN: min-width",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/min-width",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade min-width / max-width do standard web.",
        "en": "Official standard reference for min-width / max-width."
      }
    },
    {
      "uid": "mat-186",
      "id": 186,
      "num_id": 186,
      "canonical_id": "2026-10-24-186",
      "symbol": "min-height / max-height",
      "type": "CSS",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES** *(Prevenção de sobreposições)*",
      "category": "cat-boxmodel",
      "cat_id": 7,
      "label": "MDN: min-height",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/min-height",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade min-height / max-height do standard web.",
        "en": "Official standard reference for min-height / max-height."
      }
    },
    {
      "uid": "mat-187",
      "id": 187,
      "num_id": 187,
      "canonical_id": "2026-10-24-187",
      "symbol": "margin (e shorthand)",
      "type": "CSS",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES** *(Centralização com `0 auto`)*",
      "category": "cat-boxmodel",
      "cat_id": 7,
      "label": "MDN: margin",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/margin",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade margin (e shorthand) do standard web.",
        "en": "Official standard reference for margin (e shorthand)."
      }
    },
    {
      "uid": "mat-188",
      "id": 188,
      "num_id": 188,
      "canonical_id": "2026-10-24-188",
      "symbol": "padding (e shorthand)",
      "type": "CSS",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES** *(Gutters de segurança lateral)*",
      "category": "cat-boxmodel",
      "cat_id": 7,
      "label": "MDN: padding",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/padding",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade padding (e shorthand) do standard web.",
        "en": "Official standard reference for padding (e shorthand)."
      }
    },
    {
      "uid": "mat-189",
      "id": 189,
      "num_id": 189,
      "canonical_id": "2026-10-24-189",
      "symbol": "margin-inline / margin-block",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**TBD** *(Propriedades lógicas modernas)*",
      "category": "cat-boxmodel",
      "cat_id": 7,
      "label": "MDN: margin-inline",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade margin-inline / margin-block do standard web.",
        "en": "Official standard reference for margin-inline / margin-block."
      }
    },
    {
      "uid": "mat-190",
      "id": 190,
      "num_id": 190,
      "canonical_id": "2026-10-24-190",
      "symbol": "padding-inline / padding-block",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**TBD** *(Propriedades lógicas modernas)*",
      "category": "cat-boxmodel",
      "cat_id": 7,
      "label": "MDN: padding-inline",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade padding-inline / padding-block do standard web.",
        "en": "Official standard reference for padding-inline / padding-block."
      }
    },
    {
      "uid": "mat-191",
      "id": 191,
      "num_id": 191,
      "canonical_id": "2026-10-24-191",
      "symbol": "aspect-ratio",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Preserva rácios 16:9, 1:1 sem jumps)*",
      "category": "cat-boxmodel",
      "cat_id": 7,
      "label": "MDN: aspect-ratio",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio",
      "pat_ref": 2,
      "desc": {
        "pt": "Elemento/propriedade aspect-ratio do standard web.",
        "en": "Official standard reference for aspect-ratio."
      }
    },
    {
      "uid": "mat-192",
      "id": 192,
      "num_id": 192,
      "canonical_id": "2026-10-24-192",
      "symbol": "container-type",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(inline-size para Container Queries)*",
      "category": "cat-boxmodel",
      "cat_id": 7,
      "label": "MDN: container-type",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/container-type",
      "pat_ref": 11,
      "desc": {
        "pt": "Elemento/propriedade container-type do standard web.",
        "en": "Official standard reference for container-type."
      }
    },
    {
      "uid": "mat-193",
      "id": 193,
      "num_id": 193,
      "canonical_id": "2026-10-24-193",
      "symbol": "container-name",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Nomeação de contexto do contentor)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: container-name",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/container-name",
      "pat_ref": 11,
      "desc": {
        "pt": "Elemento/propriedade container-name do standard web.",
        "en": "Official standard reference for container-name."
      }
    },
    {
      "uid": "mat-194",
      "id": 194,
      "num_id": 194,
      "canonical_id": "2026-10-24-194",
      "symbol": "container (shorthand)",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Shorthand: name / type)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: container",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/container",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade container (shorthand) do standard web.",
        "en": "Official standard reference for container (shorthand)."
      }
    },
    {
      "uid": "mat-216",
      "id": 216,
      "num_id": 216,
      "canonical_id": "2026-10-24-216",
      "symbol": ":---",
      "type": ":---:",
      "tier": "foundational",
      "lev": 1,
      "status": ":---:",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": ":---",
      "mdn_url": "",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :--- do standard web.",
        "en": "Official standard reference for :---."
      }
    },
    {
      "uid": "mat-194",
      "id": 194,
      "num_id": 194,
      "canonical_id": "2026-10-24-194",
      "symbol": "display",
      "type": "CSS",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES** *(block, inline, inline-block, none)*",
      "category": "cat-flex-grid",
      "cat_id": 8,
      "label": "MDN: display",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/display",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade display do standard web.",
        "en": "Official standard reference for display."
      }
    },
    {
      "uid": "mat-195",
      "id": 195,
      "num_id": 195,
      "canonical_id": "2026-10-24-195",
      "symbol": "display: flex",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(TP05: alinhamento unidimensional)*",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: CSS flexible box layout",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade display: flex do standard web.",
        "en": "Official standard reference for display: flex."
      }
    },
    {
      "uid": "mat-196",
      "id": 196,
      "num_id": 196,
      "canonical_id": "2026-10-24-196",
      "symbol": "flex-direction",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(row, column, reverse)*",
      "category": "cat-flex-grid",
      "cat_id": 8,
      "label": "MDN: flex-direction",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade flex-direction do standard web.",
        "en": "Official standard reference for flex-direction."
      }
    },
    {
      "uid": "mat-197",
      "id": 197,
      "num_id": 197,
      "canonical_id": "2026-10-24-197",
      "symbol": "flex-wrap",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Quebra fluida de cartões)*",
      "category": "cat-flex-grid",
      "cat_id": 8,
      "label": "MDN: flex-wrap",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade flex-wrap do standard web.",
        "en": "Official standard reference for flex-wrap."
      }
    },
    {
      "uid": "mat-198",
      "id": 198,
      "num_id": 198,
      "canonical_id": "2026-10-24-198",
      "symbol": "justify-content",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Alinhamento no eixo principal)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: justify-content",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade justify-content do standard web.",
        "en": "Official standard reference for justify-content."
      }
    },
    {
      "uid": "mat-199",
      "id": 199,
      "num_id": 199,
      "canonical_id": "2026-10-24-199",
      "symbol": "align-items",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Alinhamento no eixo cruzado)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: align-items",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/align-items",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade align-items do standard web.",
        "en": "Official standard reference for align-items."
      }
    },
    {
      "uid": "mat-200",
      "id": 200,
      "num_id": 200,
      "canonical_id": "2026-10-24-200",
      "symbol": "flex-grow / flex-shrink / flex-basis",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-flex-grid",
      "cat_id": 8,
      "label": "MDN: flex",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade flex-grow / flex-shrink / flex-basis do standard web.",
        "en": "Official standard reference for flex-grow / flex-shrink / flex-basis."
      }
    },
    {
      "uid": "mat-201",
      "id": 201,
      "num_id": 201,
      "canonical_id": "2026-10-24-201",
      "symbol": "order",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Reordenação visual responsiva)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: order",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/order",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade order do standard web.",
        "en": "Official standard reference for order."
      }
    },
    {
      "uid": "mat-202",
      "id": 202,
      "num_id": 202,
      "canonical_id": "2026-10-24-202",
      "symbol": "display: grid",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(TP05 & TP06: 2 colunas)*",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: CSS grid layout",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",
      "pat_ref": 7,
      "desc": {
        "pt": "Elemento/propriedade display: grid do standard web.",
        "en": "Official standard reference for display: grid."
      }
    },
    {
      "uid": "mat-203",
      "id": 203,
      "num_id": 203,
      "canonical_id": "2026-10-24-203",
      "symbol": "grid-template-columns",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Uso de `fr`, `minmax()`, `repeat()`)*",
      "category": "cat-flex-grid",
      "cat_id": 8,
      "label": "MDN: grid-template-columns",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns",
      "pat_ref": 7,
      "desc": {
        "pt": "Elemento/propriedade grid-template-columns do standard web.",
        "en": "Official standard reference for grid-template-columns."
      }
    },
    {
      "uid": "mat-204",
      "id": 204,
      "num_id": 204,
      "canonical_id": "2026-10-24-204",
      "symbol": "grid-template-rows",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**YES** *(Accordion animado `0fr -> 1fr`)*",
      "category": "cat-flex-grid",
      "cat_id": 8,
      "label": "MDN: grid-template-rows",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows",
      "pat_ref": 4,
      "desc": {
        "pt": "Elemento/propriedade grid-template-rows do standard web.",
        "en": "Official standard reference for grid-template-rows."
      }
    },
    {
      "uid": "mat-205",
      "id": 205,
      "num_id": 205,
      "canonical_id": "2026-10-24-205",
      "symbol": "grid-template-areas",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Mapas visuais semânticos de grelha)*",
      "category": "cat-flex-grid",
      "cat_id": 8,
      "label": "MDN: grid-template-areas",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade grid-template-areas do standard web.",
        "en": "Official standard reference for grid-template-areas."
      }
    },
    {
      "uid": "mat-206",
      "id": 206,
      "num_id": 206,
      "canonical_id": "2026-10-24-206",
      "symbol": "grid-column / grid-row",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Posicionamento explícito de items)*",
      "category": "cat-flex-grid",
      "cat_id": 8,
      "label": "MDN: grid-column",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade grid-column / grid-row do standard web.",
        "en": "Official standard reference for grid-column / grid-row."
      }
    },
    {
      "uid": "mat-207",
      "id": 207,
      "num_id": 207,
      "canonical_id": "2026-10-24-207",
      "symbol": "gap / row-gap / column-gap",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Espaçamento limpo em Grid e Flexbox)*",
      "category": "cat-flex-grid",
      "cat_id": 8,
      "label": "MDN: gap",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/gap",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade gap / row-gap / column-gap do standard web.",
        "en": "Official standard reference for gap / row-gap / column-gap."
      }
    },
    {
      "uid": "mat-208",
      "id": 208,
      "num_id": 208,
      "canonical_id": "2026-10-24-208",
      "symbol": "columns / column-count",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**TBD** *(Layout editorial multicolunas)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: columns",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/columns",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade columns / column-count do standard web.",
        "en": "Official standard reference for columns / column-count."
      }
    },
    {
      "uid": "mat-232",
      "id": 232,
      "num_id": 232,
      "canonical_id": "2026-10-24-232",
      "symbol": ":---",
      "type": ":---:",
      "tier": "foundational",
      "lev": 1,
      "status": ":---:",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": ":---",
      "mdn_url": "",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :--- do standard web.",
        "en": "Official standard reference for :---."
      }
    },
    {
      "uid": "mat-209",
      "id": 209,
      "num_id": 209,
      "canonical_id": "2026-10-24-209",
      "symbol": "position: relative",
      "type": "CSS",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES** *(Âncora local de coordenadas)*",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: position",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position#relative",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade position: relative do standard web.",
        "en": "Official standard reference for position: relative."
      }
    },
    {
      "uid": "mat-210",
      "id": 210,
      "num_id": 210,
      "canonical_id": "2026-10-24-210",
      "symbol": "position: absolute",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Descolagem do fluxo normal)*",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: position",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position#absolute",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade position: absolute do standard web.",
        "en": "Official standard reference for position: absolute."
      }
    },
    {
      "uid": "mat-211",
      "id": 211,
      "num_id": 211,
      "canonical_id": "2026-10-24-211",
      "symbol": "position: fixed",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Barras fixas de cabeçalho/leitura)*",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: position",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade position: fixed do standard web.",
        "en": "Official standard reference for position: fixed."
      }
    },
    {
      "uid": "mat-212",
      "id": 212,
      "num_id": 212,
      "canonical_id": "2026-10-24-212",
      "symbol": "position: sticky",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Sticky Nav, Stacking Headers & Cards)*",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": "MDN: position",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position#sticky",
      "pat_ref": 7,
      "desc": {
        "pt": "Elemento/propriedade position: sticky do standard web.",
        "en": "Official standard reference for position: sticky."
      }
    },
    {
      "uid": "mat-213",
      "id": 213,
      "num_id": 213,
      "canonical_id": "2026-10-24-213",
      "symbol": "top / right / bottom / left",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-positioning",
      "cat_id": 9,
      "label": "MDN: top",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/top",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade top / right / bottom / left do standard web.",
        "en": "Official standard reference for top / right / bottom / left."
      }
    },
    {
      "uid": "mat-214",
      "id": 214,
      "num_id": 214,
      "canonical_id": "2026-10-24-214",
      "symbol": "inset",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**TBD** *(Shorthand para top/right/bottom/left)*",
      "category": "cat-positioning",
      "cat_id": 9,
      "label": "MDN: inset",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/inset",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade inset do standard web.",
        "en": "Official standard reference for inset."
      }
    },
    {
      "uid": "mat-215",
      "id": 215,
      "num_id": 215,
      "canonical_id": "2026-10-24-215",
      "symbol": "z-index",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Gestão de camadas e Stacking Contexts)*",
      "category": "cat-positioning",
      "cat_id": 9,
      "label": "MDN: z-index",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index",
      "pat_ref": 12,
      "desc": {
        "pt": "Elemento/propriedade z-index do standard web.",
        "en": "Official standard reference for z-index."
      }
    },
    {
      "uid": "mat-216",
      "id": 216,
      "num_id": 216,
      "canonical_id": "2026-10-24-216",
      "symbol": "anchor-name",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Identificador de elemento âncora)*",
      "category": "cat-positioning",
      "cat_id": 9,
      "label": "MDN: anchor-name",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/anchor-name",
      "pat_ref": 10,
      "desc": {
        "pt": "Elemento/propriedade anchor-name do standard web.",
        "en": "Official standard reference for anchor-name."
      }
    },
    {
      "uid": "mat-217",
      "id": 217,
      "num_id": 217,
      "canonical_id": "2026-10-24-217",
      "symbol": "position-anchor",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Associação a uma âncora)*",
      "category": "cat-positioning",
      "cat_id": 9,
      "label": "MDN: position-anchor",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position-anchor",
      "pat_ref": 10,
      "desc": {
        "pt": "Elemento/propriedade position-anchor do standard web.",
        "en": "Official standard reference for position-anchor."
      }
    },
    {
      "uid": "mat-218",
      "id": 218,
      "num_id": 218,
      "canonical_id": "2026-10-24-218",
      "symbol": "position-area",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Posicionamento declarativo: `top span-all`)*",
      "category": "cat-positioning",
      "cat_id": 9,
      "label": "MDN: position-area",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position-area",
      "pat_ref": 10,
      "desc": {
        "pt": "Elemento/propriedade position-area do standard web.",
        "en": "Official standard reference for position-area."
      }
    },
    {
      "uid": "mat-219",
      "id": 219,
      "num_id": 219,
      "canonical_id": "2026-10-24-219",
      "symbol": "position-try-fallbacks",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Fallbacks se faltar espaço no viewport)*",
      "category": "cat-positioning",
      "cat_id": 9,
      "label": "MDN: position-try-fallbacks",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position-try-fallbacks",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade position-try-fallbacks do standard web.",
        "en": "Official standard reference for position-try-fallbacks."
      }
    },
    {
      "uid": "mat-244",
      "id": 244,
      "num_id": 244,
      "canonical_id": "2026-10-24-244",
      "symbol": ":---",
      "type": ":---:",
      "tier": "foundational",
      "lev": 1,
      "status": ":---:",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": ":---",
      "mdn_url": "",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :--- do standard web.",
        "en": "Official standard reference for :---."
      }
    },
    {
      "uid": "mat-220",
      "id": 220,
      "num_id": 220,
      "canonical_id": "2026-10-24-220",
      "symbol": "font-family",
      "type": "CSS",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES** *(Stacks nativas + fallbacks genéricos)*",
      "category": "cat-text-semantics",
      "cat_id": 2,
      "label": "MDN: font-family",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-family",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade font-family do standard web.",
        "en": "Official standard reference for font-family."
      }
    },
    {
      "uid": "mat-221",
      "id": 221,
      "num_id": 221,
      "canonical_id": "2026-10-24-221",
      "symbol": "font-size",
      "type": "CSS",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES** *(Em `rem`/`em` no básico; `clamp()` no av.)*",
      "category": "cat-text-semantics",
      "cat_id": 2,
      "label": "MDN: font-size",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-size",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade font-size do standard web.",
        "en": "Official standard reference for font-size."
      }
    },
    {
      "uid": "mat-222",
      "id": 222,
      "num_id": 222,
      "canonical_id": "2026-10-24-222",
      "symbol": "font-weight",
      "type": "CSS",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES** *(Valores fixos ou intervalo em variáveis)*",
      "category": "cat-text-semantics",
      "cat_id": 2,
      "label": "MDN: font-weight",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade font-weight do standard web.",
        "en": "Official standard reference for font-weight."
      }
    },
    {
      "uid": "mat-223",
      "id": 223,
      "num_id": 223,
      "canonical_id": "2026-10-24-223",
      "symbol": "font-style",
      "type": "CSS",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES** *(normal, italic, oblique com ângulo)*",
      "category": "cat-text-semantics",
      "cat_id": 2,
      "label": "MDN: font-style",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-style",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade font-style do standard web.",
        "en": "Official standard reference for font-style."
      }
    },
    {
      "uid": "mat-224",
      "id": 224,
      "num_id": 224,
      "canonical_id": "2026-10-24-224",
      "symbol": "font-display",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Obrigatório `swap` contra FOIT)*",
      "category": "cat-flex-grid",
      "cat_id": 8,
      "label": "MDN: font-display",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade font-display do standard web.",
        "en": "Official standard reference for font-display."
      }
    },
    {
      "uid": "mat-225",
      "id": 225,
      "num_id": 225,
      "canonical_id": "2026-10-24-225",
      "symbol": "font-variation-settings",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**YES** *(Controlo fino de eixos: `wght`, `wdth`)*",
      "category": "cat-text-semantics",
      "cat_id": 2,
      "label": "MDN: font-variation-settings",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variation-settings",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade font-variation-settings do standard web.",
        "en": "Official standard reference for font-variation-settings."
      }
    },
    {
      "uid": "mat-226",
      "id": 226,
      "num_id": 226,
      "canonical_id": "2026-10-24-226",
      "symbol": "font-optical-sizing",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(`auto` para eixos ópticos `opsz`)*",
      "category": "cat-text-semantics",
      "cat_id": 2,
      "label": "MDN: font-optical-sizing",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-optical-sizing",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade font-optical-sizing do standard web.",
        "en": "Official standard reference for font-optical-sizing."
      }
    },
    {
      "uid": "mat-227",
      "id": 227,
      "num_id": 227,
      "canonical_id": "2026-10-24-227",
      "symbol": "font-stretch",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Percentagens de condensação/expansão)*",
      "category": "cat-text-semantics",
      "cat_id": 2,
      "label": "MDN: font-stretch",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade font-stretch do standard web.",
        "en": "Official standard reference for font-stretch."
      }
    },
    {
      "uid": "mat-228",
      "id": 228,
      "num_id": 228,
      "canonical_id": "2026-10-24-228",
      "symbol": "size-adjust",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Compensação métrica para Zero CLS)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: size-adjust",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/size-adjust",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade size-adjust do standard web.",
        "en": "Official standard reference for size-adjust."
      }
    },
    {
      "uid": "mat-229",
      "id": 229,
      "num_id": 229,
      "canonical_id": "2026-10-24-229",
      "symbol": "line-height",
      "type": "CSS",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES** *(Unitless: 1.2 a 1.6)*",
      "category": "cat-text-semantics",
      "cat_id": 2,
      "label": "MDN: line-height",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/line-height",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade line-height do standard web.",
        "en": "Official standard reference for line-height."
      }
    },
    {
      "uid": "mat-230",
      "id": 230,
      "num_id": 230,
      "canonical_id": "2026-10-24-230",
      "symbol": "letter-spacing",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-text-semantics",
      "cat_id": 2,
      "label": "MDN: letter-spacing",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade letter-spacing do standard web.",
        "en": "Official standard reference for letter-spacing."
      }
    },
    {
      "uid": "mat-231",
      "id": 231,
      "num_id": 231,
      "canonical_id": "2026-10-24-231",
      "symbol": "text-align",
      "type": "CSS",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-text-semantics",
      "cat_id": 2,
      "label": "MDN: text-align",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-align",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade text-align do standard web.",
        "en": "Official standard reference for text-align."
      }
    },
    {
      "uid": "mat-232",
      "id": 232,
      "num_id": 232,
      "canonical_id": "2026-10-24-232",
      "symbol": "text-transform",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(uppercase, lowercase, capitalize)*",
      "category": "cat-text-semantics",
      "cat_id": 2,
      "label": "MDN: text-transform",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade text-transform do standard web.",
        "en": "Official standard reference for text-transform."
      }
    },
    {
      "uid": "mat-233",
      "id": 233,
      "num_id": 233,
      "canonical_id": "2026-10-24-233",
      "symbol": "text-decoration",
      "type": "CSS",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES** *(Sublinhados e limpeza de links)*",
      "category": "cat-text-semantics",
      "cat_id": 2,
      "label": "MDN: text-decoration",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade text-decoration do standard web.",
        "en": "Official standard reference for text-decoration."
      }
    },
    {
      "uid": "mat-234",
      "id": 234,
      "num_id": 234,
      "canonical_id": "2026-10-24-234",
      "symbol": "text-underline-offset",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Afastamento tipográfico da linha)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: text-underline-offset",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-offset",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade text-underline-offset do standard web.",
        "en": "Official standard reference for text-underline-offset."
      }
    },
    {
      "uid": "mat-235",
      "id": 235,
      "num_id": 235,
      "canonical_id": "2026-10-24-235",
      "symbol": "text-overflow",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(ellipsis com `white-space: nowrap`)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: text-overflow",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade text-overflow do standard web.",
        "en": "Official standard reference for text-overflow."
      }
    },
    {
      "uid": "mat-236",
      "id": 236,
      "num_id": 236,
      "canonical_id": "2026-10-24-236",
      "symbol": "overflow-wrap / word-break",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Prevenção de quebra lateral em mobile)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: overflow-wrap",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade overflow-wrap / word-break do standard web.",
        "en": "Official standard reference for overflow-wrap / word-break."
      }
    },
    {
      "uid": "mat-237",
      "id": 237,
      "num_id": 237,
      "canonical_id": "2026-10-24-237",
      "symbol": "hyphens",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**TBD** *(Hifenação automática em português)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: hyphens",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade hyphens do standard web.",
        "en": "Official standard reference for hyphens."
      }
    },
    {
      "uid": "mat-238",
      "id": 238,
      "num_id": 238,
      "canonical_id": "2026-10-24-238",
      "symbol": "writing-mode",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Títulos verticais para posters/menus)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: writing-mode",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade writing-mode do standard web.",
        "en": "Official standard reference for writing-mode."
      }
    },
    {
      "uid": "mat-264",
      "id": 264,
      "num_id": 264,
      "canonical_id": "2026-10-24-264",
      "symbol": ":---",
      "type": ":---:",
      "tier": "foundational",
      "lev": 1,
      "status": ":---:",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": ":---",
      "mdn_url": "",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :--- do standard web.",
        "en": "Official standard reference for :---."
      }
    },
    {
      "uid": "mat-239",
      "id": 239,
      "num_id": 239,
      "canonical_id": "2026-10-24-239",
      "symbol": "color",
      "type": "CSS",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-effects-animations",
      "cat_id": 10,
      "label": "MDN: color",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/color",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade color do standard web.",
        "en": "Official standard reference for color."
      }
    },
    {
      "uid": "mat-240",
      "id": 240,
      "num_id": 240,
      "canonical_id": "2026-10-24-240",
      "symbol": "background-color",
      "type": "CSS",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-effects-animations",
      "cat_id": 10,
      "label": "MDN: background-color",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-color",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade background-color do standard web.",
        "en": "Official standard reference for background-color."
      }
    },
    {
      "uid": "mat-241",
      "id": 241,
      "num_id": 241,
      "canonical_id": "2026-10-24-241",
      "symbol": "background-image",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Gradientes e imagens)*",
      "category": "cat-effects-animations",
      "cat_id": 10,
      "label": "MDN: background-image",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-image",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade background-image do standard web.",
        "en": "Official standard reference for background-image."
      }
    },
    {
      "uid": "mat-242",
      "id": 242,
      "num_id": 242,
      "canonical_id": "2026-10-24-242",
      "symbol": "background-size",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(cover, contain)*",
      "category": "cat-effects-animations",
      "cat_id": 10,
      "label": "MDN: background-size",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-size",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade background-size do standard web.",
        "en": "Official standard reference for background-size."
      }
    },
    {
      "uid": "mat-243",
      "id": 243,
      "num_id": 243,
      "canonical_id": "2026-10-24-243",
      "symbol": "background-position",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-positioning",
      "cat_id": 9,
      "label": "MDN: background-position",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-position",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade background-position do standard web.",
        "en": "Official standard reference for background-position."
      }
    },
    {
      "uid": "mat-244",
      "id": 244,
      "num_id": 244,
      "canonical_id": "2026-10-24-244",
      "symbol": "border (e sub-props)",
      "type": "CSS",
      "tier": "foundational",
      "lev": 1,
      "status": "**YES**",
      "category": "cat-boxmodel",
      "cat_id": 7,
      "label": "MDN: border",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/border",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade border (e sub-props) do standard web.",
        "en": "Official standard reference for border (e sub-props)."
      }
    },
    {
      "uid": "mat-245",
      "id": 245,
      "num_id": 245,
      "canonical_id": "2026-10-24-245",
      "symbol": "border-radius",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Arredondamento e pílulas)*",
      "category": "cat-boxmodel",
      "cat_id": 7,
      "label": "MDN: border-radius",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade border-radius do standard web.",
        "en": "Official standard reference for border-radius."
      }
    },
    {
      "uid": "mat-246",
      "id": 246,
      "num_id": 246,
      "canonical_id": "2026-10-24-246",
      "symbol": "outline / outline-offset",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Anéis de foco acessíveis sem deslocar)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: outline",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/outline",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade outline / outline-offset do standard web.",
        "en": "Official standard reference for outline / outline-offset."
      }
    },
    {
      "uid": "mat-247",
      "id": 247,
      "num_id": 247,
      "canonical_id": "2026-10-24-247",
      "symbol": "box-shadow",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-effects-animations",
      "cat_id": 10,
      "label": "MDN: box-shadow",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade box-shadow do standard web.",
        "en": "Official standard reference for box-shadow."
      }
    },
    {
      "uid": "mat-248",
      "id": 248,
      "num_id": 248,
      "canonical_id": "2026-10-24-248",
      "symbol": "opacity",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-effects-animations",
      "cat_id": 10,
      "label": "MDN: opacity",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/opacity",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade opacity do standard web.",
        "en": "Official standard reference for opacity."
      }
    },
    {
      "uid": "mat-249",
      "id": 249,
      "num_id": 249,
      "canonical_id": "2026-10-24-249",
      "symbol": "filter",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(blur, brightness, grayscale, etc.)*",
      "category": "cat-effects-animations",
      "cat_id": 10,
      "label": "MDN: filter",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade filter do standard web.",
        "en": "Official standard reference for filter."
      }
    },
    {
      "uid": "mat-250",
      "id": 250,
      "num_id": 250,
      "canonical_id": "2026-10-24-250",
      "symbol": "backdrop-filter",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**YES** *(Efeito de vidro fosco / frosted glass)*",
      "category": "cat-effects-animations",
      "cat_id": 10,
      "label": "MDN: backdrop-filter",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade backdrop-filter do standard web.",
        "en": "Official standard reference for backdrop-filter."
      }
    },
    {
      "uid": "mat-251",
      "id": 251,
      "num_id": 251,
      "canonical_id": "2026-10-24-251",
      "symbol": "mix-blend-mode",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Efeitos de sobreposição gráfica)*",
      "category": "cat-effects-animations",
      "cat_id": 10,
      "label": "MDN: mix-blend-mode",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade mix-blend-mode do standard web.",
        "en": "Official standard reference for mix-blend-mode."
      }
    },
    {
      "uid": "mat-252",
      "id": 252,
      "num_id": 252,
      "canonical_id": "2026-10-24-252",
      "symbol": "clip-path",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Recortes geométricos e diagonais)*",
      "category": "cat-effects-animations",
      "cat_id": 10,
      "label": "MDN: clip-path",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade clip-path do standard web.",
        "en": "Official standard reference for clip-path."
      }
    },
    {
      "uid": "mat-279",
      "id": 279,
      "num_id": 279,
      "canonical_id": "2026-10-24-279",
      "symbol": ":---",
      "type": ":---:",
      "tier": "foundational",
      "lev": 1,
      "status": ":---:",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": ":---",
      "mdn_url": "",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :--- do standard web.",
        "en": "Official standard reference for :---."
      }
    },
    {
      "uid": "mat-253",
      "id": 253,
      "num_id": 253,
      "canonical_id": "2026-10-24-253",
      "symbol": "overflow / overflow-x/y",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Prevenção de scroll parasita)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: overflow",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade overflow / overflow-x/y do standard web.",
        "en": "Official standard reference for overflow / overflow-x/y."
      }
    },
    {
      "uid": "mat-254",
      "id": 254,
      "num_id": 254,
      "canonical_id": "2026-10-24-254",
      "symbol": "scroll-behavior",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(`smooth` para âncoras internas)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: scroll-behavior",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade scroll-behavior do standard web.",
        "en": "Official standard reference for scroll-behavior."
      }
    },
    {
      "uid": "mat-255",
      "id": 255,
      "num_id": 255,
      "canonical_id": "2026-10-24-255",
      "symbol": "scroll-snap-type",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**YES** *(Carrossel de galeria: `x mandatory`)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: scroll-snap-type",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type",
      "pat_ref": 3,
      "desc": {
        "pt": "Elemento/propriedade scroll-snap-type do standard web.",
        "en": "Official standard reference for scroll-snap-type."
      }
    },
    {
      "uid": "mat-256",
      "id": 256,
      "num_id": 256,
      "canonical_id": "2026-10-24-256",
      "symbol": "scroll-snap-align",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**YES** *(`center` ou `start` nos slides)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: scroll-snap-align",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-align",
      "pat_ref": 3,
      "desc": {
        "pt": "Elemento/propriedade scroll-snap-align do standard web.",
        "en": "Official standard reference for scroll-snap-align."
      }
    },
    {
      "uid": "mat-257",
      "id": 257,
      "num_id": 257,
      "canonical_id": "2026-10-24-257",
      "symbol": "scroll-padding / scroll-margin",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Evita que cabeçalho tape a âncora)*",
      "category": "cat-boxmodel",
      "cat_id": 7,
      "label": "MDN: scroll-padding",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade scroll-padding / scroll-margin do standard web.",
        "en": "Official standard reference for scroll-padding / scroll-margin."
      }
    },
    {
      "uid": "mat-258",
      "id": 258,
      "num_id": 258,
      "canonical_id": "2026-10-24-258",
      "symbol": "animation-timeline",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**YES** *(TP06: barra de leitura via `scroll()`)*",
      "category": "cat-effects-animations",
      "cat_id": 10,
      "label": "MDN: animation-timeline",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline",
      "pat_ref": 6,
      "desc": {
        "pt": "Elemento/propriedade animation-timeline do standard web.",
        "en": "Official standard reference for animation-timeline."
      }
    },
    {
      "uid": "mat-259",
      "id": 259,
      "num_id": 259,
      "canonical_id": "2026-10-24-259",
      "symbol": "animation-range",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Sincronização em `entry` ou `cover`)*",
      "category": "cat-effects-animations",
      "cat_id": 10,
      "label": "MDN: animation-range",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-range",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade animation-range do standard web.",
        "en": "Official standard reference for animation-range."
      }
    },
    {
      "uid": "mat-260",
      "id": 260,
      "num_id": 260,
      "canonical_id": "2026-10-24-260",
      "symbol": "scrollbar-width / scrollbar-color",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**TBD** *(Estilização da barra nativa)*",
      "category": "cat-effects-animations",
      "cat_id": 10,
      "label": "MDN: scrollbar-width",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade scrollbar-width / scrollbar-color do standard web.",
        "en": "Official standard reference for scrollbar-width / scrollbar-color."
      }
    },
    {
      "uid": "mat-261",
      "id": 261,
      "num_id": 261,
      "canonical_id": "2026-10-24-261",
      "symbol": "overscroll-behavior",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Impede scroll acorrentado em modais)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: overscroll-behavior",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade overscroll-behavior do standard web.",
        "en": "Official standard reference for overscroll-behavior."
      }
    },
    {
      "uid": "mat-289",
      "id": 289,
      "num_id": 289,
      "canonical_id": "2026-10-24-289",
      "symbol": ":---",
      "type": ":---:",
      "tier": "foundational",
      "lev": 1,
      "status": ":---:",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": ":---",
      "mdn_url": "",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :--- do standard web.",
        "en": "Official standard reference for :---."
      }
    },
    {
      "uid": "mat-262",
      "id": 262,
      "num_id": 262,
      "canonical_id": "2026-10-24-262",
      "symbol": "transition (e sub-props)",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Microinterações de hover/focus)*",
      "category": "cat-effects-animations",
      "cat_id": 10,
      "label": "MDN: transition",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/transition",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade transition (e sub-props) do standard web.",
        "en": "Official standard reference for transition (e sub-props)."
      }
    },
    {
      "uid": "mat-263",
      "id": 263,
      "num_id": 263,
      "canonical_id": "2026-10-24-263",
      "symbol": "transform",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(translate, scale, rotate)*",
      "category": "cat-effects-animations",
      "cat_id": 10,
      "label": "MDN: transform",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform",
      "pat_ref": 13,
      "desc": {
        "pt": "Elemento/propriedade transform do standard web.",
        "en": "Official standard reference for transform."
      }
    },
    {
      "uid": "mat-264",
      "id": 264,
      "num_id": 264,
      "canonical_id": "2026-10-24-264",
      "symbol": "transform-origin",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Origem de escala na barra de scroll)*",
      "category": "cat-effects-animations",
      "cat_id": 10,
      "label": "MDN: transform-origin",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade transform-origin do standard web.",
        "en": "Official standard reference for transform-origin."
      }
    },
    {
      "uid": "mat-265",
      "id": 265,
      "num_id": 265,
      "canonical_id": "2026-10-24-265",
      "symbol": "perspective",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Base para Parallax 3D Pure CSS)*",
      "category": "cat-effects-animations",
      "cat_id": 10,
      "label": "MDN: perspective",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/perspective",
      "pat_ref": 13,
      "desc": {
        "pt": "Elemento/propriedade perspective do standard web.",
        "en": "Official standard reference for perspective."
      }
    },
    {
      "uid": "mat-266",
      "id": 266,
      "num_id": 266,
      "canonical_id": "2026-10-24-266",
      "symbol": "perspective-origin",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Ponto de fuga visual 3D)*",
      "category": "cat-effects-animations",
      "cat_id": 10,
      "label": "MDN: perspective-origin",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade perspective-origin do standard web.",
        "en": "Official standard reference for perspective-origin."
      }
    },
    {
      "uid": "mat-267",
      "id": 267,
      "num_id": 267,
      "canonical_id": "2026-10-24-267",
      "symbol": "transform-style",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(`preserve-3d` para profundidade)*",
      "category": "cat-effects-animations",
      "cat_id": 10,
      "label": "MDN: transform-style",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade transform-style do standard web.",
        "en": "Official standard reference for transform-style."
      }
    },
    {
      "uid": "mat-268",
      "id": 268,
      "num_id": 268,
      "canonical_id": "2026-10-24-268",
      "symbol": "animation (e sub-props)",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Orquestração com `@keyframes`)*",
      "category": "cat-effects-animations",
      "cat_id": 10,
      "label": "MDN: animation",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade animation (e sub-props) do standard web.",
        "en": "Official standard reference for animation (e sub-props)."
      }
    },
    {
      "uid": "mat-269",
      "id": 269,
      "num_id": 269,
      "canonical_id": "2026-10-24-269",
      "symbol": "will-change",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**YES** *(Otimização de rendering da GPU)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: will-change",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/will-change",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade will-change do standard web.",
        "en": "Official standard reference for will-change."
      }
    },
    {
      "uid": "mat-270",
      "id": 270,
      "num_id": 270,
      "canonical_id": "2026-10-24-270",
      "symbol": "transition-behavior",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Permite transição de `display: none`)*",
      "category": "cat-effects-animations",
      "cat_id": 10,
      "label": "MDN: transition-behavior",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/transition-behavior",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade transition-behavior do standard web.",
        "en": "Official standard reference for transition-behavior."
      }
    },
    {
      "uid": "mat-271",
      "id": 271,
      "num_id": 271,
      "canonical_id": "2026-10-24-271",
      "symbol": "interpolate-size",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Animação nativa de `height: auto`)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: interpolate-size",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/interpolate-size",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade interpolate-size do standard web.",
        "en": "Official standard reference for interpolate-size."
      }
    },
    {
      "uid": "mat-300",
      "id": 300,
      "num_id": 300,
      "canonical_id": "2026-10-24-300",
      "symbol": ":---",
      "type": ":---:",
      "tier": "foundational",
      "lev": 1,
      "status": ":---:",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": ":---",
      "mdn_url": "",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :--- do standard web.",
        "en": "Official standard reference for :---."
      }
    },
    {
      "uid": "mat-272",
      "id": 272,
      "num_id": 272,
      "canonical_id": "2026-10-24-272",
      "symbol": "content",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Uso com `::before`/`::after` e `:has()`)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: content",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/content",
      "pat_ref": 8,
      "desc": {
        "pt": "Elemento/propriedade content do standard web.",
        "en": "Official standard reference for content."
      }
    },
    {
      "uid": "mat-273",
      "id": 273,
      "num_id": 273,
      "canonical_id": "2026-10-24-273",
      "symbol": "cursor",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(`pointer` em botões/toggles)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: cursor",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/cursor",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade cursor do standard web.",
        "en": "Official standard reference for cursor."
      }
    },
    {
      "uid": "mat-274",
      "id": 274,
      "num_id": 274,
      "canonical_id": "2026-10-24-274",
      "symbol": "pointer-events",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Desativar cliques em overlays inertes)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: pointer-events",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade pointer-events do standard web.",
        "en": "Official standard reference for pointer-events."
      }
    },
    {
      "uid": "mat-275",
      "id": 275,
      "num_id": 275,
      "canonical_id": "2026-10-24-275",
      "symbol": "user-select",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Evitar seleção acidental em botões)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: user-select",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/user-select",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade user-select do standard web.",
        "en": "Official standard reference for user-select."
      }
    },
    {
      "uid": "mat-276",
      "id": 276,
      "num_id": 276,
      "canonical_id": "2026-10-24-276",
      "symbol": "accent-color",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**TBD** *(Estilização nativa instantânea de inputs)*",
      "category": "cat-effects-animations",
      "cat_id": 10,
      "label": "MDN: accent-color",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade accent-color do standard web.",
        "en": "Official standard reference for accent-color."
      }
    },
    {
      "uid": "mat-277",
      "id": 277,
      "num_id": 277,
      "canonical_id": "2026-10-24-277",
      "symbol": "color-scheme",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**TBD** *(Sinalização de suporte a Dark/Light Mode)*",
      "category": "cat-effects-animations",
      "cat_id": 10,
      "label": "MDN: color-scheme",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme",
      "pat_ref": 9,
      "desc": {
        "pt": "Elemento/propriedade color-scheme do standard web.",
        "en": "Official standard reference for color-scheme."
      }
    },
    {
      "uid": "mat-278",
      "id": 278,
      "num_id": 278,
      "canonical_id": "2026-10-24-278",
      "symbol": "--* (Custom Property Declaration)",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Declaração de variáveis CSS simples)*",
      "category": "cat-selectors",
      "cat_id": 5,
      "label": "MDN: Using CSS custom properties",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade --* (Custom Property Declaration) do standard web.",
        "en": "Official standard reference for --* (Custom Property Declaration)."
      }
    },
    {
      "uid": "mat-308",
      "id": 308,
      "num_id": 308,
      "canonical_id": "2026-10-24-308",
      "symbol": ":---",
      "type": ":---:",
      "tier": "foundational",
      "lev": 1,
      "status": ":---:",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": ":---",
      "mdn_url": "",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :--- do standard web.",
        "en": "Official standard reference for :---."
      }
    },
    {
      "uid": "mat-279",
      "id": 279,
      "num_id": 279,
      "canonical_id": "2026-10-24-279",
      "symbol": "@media (min-width / max-width)",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(RWD Mobile-First)*",
      "category": "cat-atrules",
      "cat_id": 11,
      "label": "MDN: @media",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade @media (min-width / max-width) do standard web.",
        "en": "Official standard reference for @media (min-width / max-width)."
      }
    },
    {
      "uid": "mat-280",
      "id": 280,
      "num_id": 280,
      "canonical_id": "2026-10-24-280",
      "symbol": "@media (prefers-color-scheme)",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Dark Mode nativo)*",
      "category": "cat-effects-animations",
      "cat_id": 10,
      "label": "MDN: prefers-color-scheme",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade @media (prefers-color-scheme) do standard web.",
        "en": "Official standard reference for @media (prefers-color-scheme)."
      }
    },
    {
      "uid": "mat-281",
      "id": 281,
      "num_id": 281,
      "canonical_id": "2026-10-24-281",
      "symbol": "@media (prefers-reduced-motion)",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Acessibilidade vestibular)*",
      "category": "cat-atrules",
      "cat_id": 11,
      "label": "MDN: prefers-reduced-motion",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade @media (prefers-reduced-motion) do standard web.",
        "en": "Official standard reference for @media (prefers-reduced-motion)."
      }
    },
    {
      "uid": "mat-282",
      "id": 282,
      "num_id": 282,
      "canonical_id": "2026-10-24-282",
      "symbol": "@container (Container Queries)",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Componentes intrinsecamente responsivos)*",
      "category": "cat-atrules",
      "cat_id": 11,
      "label": "MDN: @container",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@container",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade @container (Container Queries) do standard web.",
        "en": "Official standard reference for @container (Container Queries)."
      }
    },
    {
      "uid": "mat-283",
      "id": 283,
      "num_id": 283,
      "canonical_id": "2026-10-24-283",
      "symbol": "@font-face (Local WOFF2 Vendorizado)",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**YES** *(Soberania de dados e zero CDNs)*",
      "category": "cat-text-semantics",
      "cat_id": 2,
      "label": "MDN: @font-face",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade @font-face (Local WOFF2 Vendorizado) do standard web.",
        "en": "Official standard reference for @font-face (Local WOFF2 Vendorizado)."
      }
    },
    {
      "uid": "mat-284",
      "id": 284,
      "num_id": 284,
      "canonical_id": "2026-10-24-284",
      "symbol": "@keyframes",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Sequenciação temporal de animações)*",
      "category": "cat-atrules",
      "cat_id": 11,
      "label": "MDN: @keyframes",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes",
      "pat_ref": 6,
      "desc": {
        "pt": "Elemento/propriedade @keyframes do standard web.",
        "en": "Official standard reference for @keyframes."
      }
    },
    {
      "uid": "mat-285",
      "id": 285,
      "num_id": 285,
      "canonical_id": "2026-10-24-285",
      "symbol": "@layer",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**YES** *(TP06: orquestração de especificidade)*",
      "category": "cat-atrules",
      "cat_id": 11,
      "label": "MDN: @layer",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@layer",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade @layer do standard web.",
        "en": "Official standard reference for @layer."
      }
    },
    {
      "uid": "mat-286",
      "id": 286,
      "num_id": 286,
      "canonical_id": "2026-10-24-286",
      "symbol": "@supports",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Progressive Enhancement de APIs)*",
      "category": "cat-atrules",
      "cat_id": 11,
      "label": "MDN: @supports",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@supports",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade @supports do standard web.",
        "en": "Official standard reference for @supports."
      }
    },
    {
      "uid": "mat-287",
      "id": 287,
      "num_id": 287,
      "canonical_id": "2026-10-24-287",
      "symbol": "@property (CSS Properties API)",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Variáveis tipadas e animáveis)*",
      "category": "cat-atrules",
      "cat_id": 11,
      "label": "MDN: @property",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@property",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade @property (CSS Properties API) do standard web.",
        "en": "Official standard reference for @property (CSS Properties API)."
      }
    },
    {
      "uid": "mat-288",
      "id": 288,
      "num_id": 288,
      "canonical_id": "2026-10-24-288",
      "symbol": "@starting-style",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Animação suave de entrada de modais/popups)*",
      "category": "cat-atrules",
      "cat_id": 11,
      "label": "MDN: @starting-style",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@starting-style",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade @starting-style do standard web.",
        "en": "Official standard reference for @starting-style."
      }
    },
    {
      "uid": "mat-289",
      "id": 289,
      "num_id": 289,
      "canonical_id": "2026-10-24-289",
      "symbol": "@scope",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Isolamento estrito de componentes)*",
      "category": "cat-atrules",
      "cat_id": 11,
      "label": "MDN: @scope",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@scope",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade @scope do standard web.",
        "en": "Official standard reference for @scope."
      }
    },
    {
      "uid": "mat-290",
      "id": 290,
      "num_id": 290,
      "canonical_id": "2026-10-24-290",
      "symbol": "@view-transition",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Navegação suave SPA sem scripts)*",
      "category": "cat-effects-animations",
      "cat_id": 10,
      "label": "MDN: @view-transition",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@view-transition",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade @view-transition do standard web.",
        "en": "Official standard reference for @view-transition."
      }
    },
    {
      "uid": "mat-291",
      "id": 291,
      "num_id": 291,
      "canonical_id": "2026-10-24-291",
      "symbol": "@import",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**NO** *(Preterido por `<link>` por performance)*",
      "category": "cat-atrules",
      "cat_id": 11,
      "label": "MDN: @import",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@import",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade @import do standard web.",
        "en": "Official standard reference for @import."
      }
    },
    {
      "uid": "mat-322",
      "id": 322,
      "num_id": 322,
      "canonical_id": "2026-10-24-322",
      "symbol": ":---",
      "type": ":---:",
      "tier": "foundational",
      "lev": 1,
      "status": ":---:",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": ":---",
      "mdn_url": "",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :--- do standard web.",
        "en": "Official standard reference for :---."
      }
    },
    {
      "uid": "mat-292",
      "id": 292,
      "num_id": 292,
      "canonical_id": "2026-10-24-292",
      "symbol": "calc()",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Cálculos híbridos de medidas: `100% - 20px`)*",
      "category": "cat-functions-units",
      "cat_id": 12,
      "label": "MDN: calc()",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/calc",
      "pat_ref": 12,
      "desc": {
        "pt": "Elemento/propriedade calc() do standard web.",
        "en": "Official standard reference for calc()."
      }
    },
    {
      "uid": "mat-293",
      "id": 293,
      "num_id": 293,
      "canonical_id": "2026-10-24-293",
      "symbol": "clamp()",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Pilar do TP06: tipografia e padding fluidos)*",
      "category": "cat-functions-units",
      "cat_id": 12,
      "label": "MDN: clamp()",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/clamp",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade clamp() do standard web.",
        "en": "Official standard reference for clamp()."
      }
    },
    {
      "uid": "mat-294",
      "id": 294,
      "num_id": 294,
      "canonical_id": "2026-10-24-294",
      "symbol": "min()",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Limites superiores automáticos)*",
      "category": "cat-functions-units",
      "cat_id": 12,
      "label": "MDN: min()",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/min",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade min() do standard web.",
        "en": "Official standard reference for min()."
      }
    },
    {
      "uid": "mat-295",
      "id": 295,
      "num_id": 295,
      "canonical_id": "2026-10-24-295",
      "symbol": "max()",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Limites inferiores automáticos)*",
      "category": "cat-functions-units",
      "cat_id": 12,
      "label": "MDN: max()",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/max",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade max() do standard web.",
        "en": "Official standard reference for max()."
      }
    },
    {
      "uid": "mat-296",
      "id": 296,
      "num_id": 296,
      "canonical_id": "2026-10-24-296",
      "symbol": "cqi / cqw (Container Query Units)",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Percentagem da largura do contentor)*",
      "category": "cat-landmarks",
      "cat_id": 1,
      "label": "MDN: Container query length units",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade cqi / cqw (Container Query Units) do standard web.",
        "en": "Official standard reference for cqi / cqw (Container Query Units)."
      }
    },
    {
      "uid": "mat-328",
      "id": 328,
      "num_id": 328,
      "canonical_id": "2026-10-24-328",
      "symbol": ":---",
      "type": ":---:",
      "tier": "foundational",
      "lev": 1,
      "status": ":---:",
      "category": "cat-pseudo",
      "cat_id": 6,
      "label": ":---",
      "mdn_url": "",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade :--- do standard web.",
        "en": "Official standard reference for :---."
      }
    },
    {
      "uid": "mat-297",
      "id": 297,
      "num_id": 297,
      "canonical_id": "2026-10-24-297",
      "symbol": "var()",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Consumo de variáveis CSS com fallback)*",
      "category": "cat-functions-units",
      "cat_id": 12,
      "label": "MDN: var()",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/var",
      "pat_ref": 12,
      "desc": {
        "pt": "Elemento/propriedade var() do standard web.",
        "en": "Official standard reference for var()."
      }
    },
    {
      "uid": "mat-298",
      "id": 298,
      "num_id": 298,
      "canonical_id": "2026-10-24-298",
      "symbol": "light-dark()",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**TBD** *(Alternância de cor claro/escuro nativa)*",
      "category": "cat-functions-units",
      "cat_id": 12,
      "label": "MDN: light-dark()",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/light-dark",
      "pat_ref": 9,
      "desc": {
        "pt": "Elemento/propriedade light-dark() do standard web.",
        "en": "Official standard reference for light-dark()."
      }
    },
    {
      "uid": "mat-299",
      "id": 299,
      "num_id": 299,
      "canonical_id": "2026-10-24-299",
      "symbol": "color-mix()",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Mistura de cores na proporção `%`)*",
      "category": "cat-effects-animations",
      "cat_id": 10,
      "label": "MDN: color-mix()",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/color-mix",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade color-mix() do standard web.",
        "en": "Official standard reference for color-mix()."
      }
    },
    {
      "uid": "mat-300",
      "id": 300,
      "num_id": 300,
      "canonical_id": "2026-10-24-300",
      "symbol": "scroll()",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**YES** *(Timeline ligada ao scroll do contentor)*",
      "category": "cat-functions-units",
      "cat_id": 12,
      "label": "MDN: scroll()",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline/scroll",
      "pat_ref": 6,
      "desc": {
        "pt": "Elemento/propriedade scroll() do standard web.",
        "en": "Official standard reference for scroll()."
      }
    },
    {
      "uid": "mat-301",
      "id": 301,
      "num_id": 301,
      "canonical_id": "2026-10-24-301",
      "symbol": "view()",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Animação de entrada do elemento no viewport)*",
      "category": "cat-functions-units",
      "cat_id": 12,
      "label": "MDN: view()",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline/view",
      "pat_ref": 6,
      "desc": {
        "pt": "Elemento/propriedade view() do standard web.",
        "en": "Official standard reference for view()."
      }
    },
    {
      "uid": "mat-302",
      "id": 302,
      "num_id": 302,
      "canonical_id": "2026-10-24-302",
      "symbol": "anchor()",
      "type": "CSS",
      "tier": "advanced",
      "lev": 3,
      "status": "**TBD** *(Cálculo de coordenadas relativas à âncora)*",
      "category": "cat-positioning",
      "cat_id": 9,
      "label": "MDN: anchor()",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/anchor",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade anchor() do standard web.",
        "en": "Official standard reference for anchor()."
      }
    },
    {
      "uid": "mat-303",
      "id": 303,
      "num_id": 303,
      "canonical_id": "2026-10-24-303",
      "symbol": "attr()",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Extração de atributos no `content`)*",
      "category": "cat-functions-units",
      "cat_id": 12,
      "label": "MDN: attr()",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/attr",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade attr() do standard web.",
        "en": "Official standard reference for attr()."
      }
    },
    {
      "uid": "mat-304",
      "id": 304,
      "num_id": 304,
      "canonical_id": "2026-10-24-304",
      "symbol": "env()",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES** *(Safe areas em smartphones: `safe-area-inset-*`)*",
      "category": "cat-functions-units",
      "cat_id": 12,
      "label": "MDN: env()",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/env",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade env() do standard web.",
        "en": "Official standard reference for env()."
      }
    },
    {
      "uid": "mat-305",
      "id": 305,
      "num_id": 305,
      "canonical_id": "2026-10-24-305",
      "symbol": "linear-gradient() / radial-gradient()",
      "type": "CSS",
      "tier": "intermediate",
      "lev": 2,
      "status": "**YES**",
      "category": "cat-functions-units",
      "cat_id": 12,
      "label": "MDN: linear-gradient()",
      "mdn_url": "https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient",
      "pat_ref": null,
      "desc": {
        "pt": "Elemento/propriedade linear-gradient() / radial-gradient() do standard web.",
        "en": "Official standard reference for linear-gradient() / radial-gradient()."
      }
    }
  ]
};
