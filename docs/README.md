# WD101 • Knowledge Base, Compendiums & Strategy Documentation
## Faculdade de Belas Artes da Universidade do Porto (FBAUP)
### Licenciatura em Design de Comunicação • Web Design 101 (2026/27)

---

## 🧭 Mapa de Documentação & Estratégia Curricular

Este diretório centraliza os referenciais estratégicos, compêndios teóricos, matrizes de competência e guiões de avaliação pedagógica da unidade curricular **Web Design 101 (WD101)**.

```text
learning-scaffold/docs/
├── README.md                                   # Este mapa central de documentação e referenciais
│
├── strategy/                                   # 📐 Estratégia Pedagógica, Arquitetura & Matrizes
│   ├── interactive-learning-scaffold-strategy.md    # Visão estratégica, objetivos e andaime interativo
│   ├── html5-css3-comprehensive-curriculum-matrix.md # Matriz técnica canónica (HTML5 Living Standard & CSS3/4/5)
│   └── pure-css-interaction-patterns-blueprint.md   # Blueprint dos 13 padrões fundamentais Pure CSS
│
└── ex1/                                        # 🎯 Avaliação e Referenciais do Exercício 1
    ├── CADERNO-AVALIACAO-PEDAGOGICA.md        # Caderno de critérios e matriz de avaliação
    ├── COMPENDIO-PRINCIPIOS-VISUAIS-UX-UI.md  # Princípios visuais e relatório de inspeção da coluna F
    └── CHECKLIST-AUTO-AVALIACAO-EX1.md        # Grelha de autoavaliação formativa para estudantes
```

---

## 📚 Compêndios Teóricos & Guiões no Diretório Principal (`learning-scaffold/`)

Cada compêndio em Markdown possui uma página HTML interativa espelho acessível diretamente no portal web da plataforma:

| Documento Markdown | Guião Web Interativo | Domínio Pedagógico |
| :--- | :--- | :--- |
| [`HEURISTICS-AND-BEST-PRACTICES.md`](../HEURISTICS-AND-BEST-PRACTICES.md) | [`heuristics-guide.html`](../heuristics-guide.html) · [`checklist`](../heuristic-checklist.html) | **18 Heurísticas de Usabilidade** (Jakob Nielsen + Bruce Tognazzini harmonizadas) |
| [`UX-LAWS-AND-PATTERNS.md`](../UX-LAWS-AND-PATTERNS.md) | [`ux-laws.html`](../ux-laws.html) | **30 Leis de UX e Ergonomia Cognitiva** para designers de comunicação |
| [`PROJECT-DOCUMENTATION-GUIDE.md`](../PROJECT-DOCUMENTATION-GUIDE.md) | [`project-documentation-guide.html`](../project-documentation-guide.html) | **Manual de Documentação UX de Projeto** (Arquitetura de Informação, Wireframes, Testes) |
| [`TO-INFINITY-AND-BEYOND.md`](../TO-INFINITY-AND-BEYOND.md) | [`to-infinity-and-beyond.html`](../to-infinity-and-beyond.html) | **Roadmap Pós-WD101** (Motion, 3D, Design Systems, WordPress, Creative Coding) |
| [`AI-MENTOR-TRANSITION-GUIDE.md`](../AI-MENTOR-TRANSITION-GUIDE.md) | [`ai-mentor-guide.html`](../ai-mentor-guide.html) | **Transição do Código Manual para Antigravity ADE** (Mentoria Socrática por IA) |

---

## 🎯 Articulação com os Momentos Práticos & Demonstadores

- **EX1 (Hello Warp! / Wendy):** Foco estrito em HTML5 semântico, fluxo normal do documento, unidades relativas `rem` e zero classes.
- **EX2 (Media & Box Model):** Reset acessível de Eric Meyer, direção de arte com `<picture>`, classes BEM, e posicionamento relativo/absoluto/sticky.
- **Projeto Final (Fase 1 — TP06):** Protótipo preliminar a 2 colunas com breakpoint a 960px e calculadora de bilhetes Pure CSS.
- **Projeto Final (Fase 2 — Capstone TP11):** Masterclass integrada com 4 breakpoints mobile-first, macro-grelha 2D com `grid-template-areas`, Flexbox 1D alternante, **Container Queries (`@container`)**, theming com `light-dark()`, Crate 3D de vinis e inspetor de Raios-X.
