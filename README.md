# WD101 • Learning Scaffold & Open Courseware Repository (2026/27)
## Faculdade de Belas Artes da Universidade do Porto (FBAUP)
### Licenciatura em Design de Comunicação • Instituto de Investigação em Arte, Design e Sociedade (i2ADS)

---

## 👥 Autoria & Créditos Pedagógicos
* **Conceção Curricular, Direção Pedagógica & Supervisão:**  
  **Prof. Pedro Amado** (FBAUP / i2ADS — Universidade do Porto)
* **Co-Autoria Técnica, Pair Programming & Agente IA:**  
  **Google Gemini** (*Gemini Pro 3 Flash* e *Gemini Pro4 Argon* — Google DeepMind / Antigravity)

---

## 🎯 Visão Pedagógica & Andaime de Aprendizagem
Esta plataforma é o repositório principal de apoio ao estudo e desenvolvimento de competências para a unidade curricular **Web Design (WD101)** na FBAUP. 

A estrutura foi concebida para funcionar em **duplo modo**:
1. **Ambiente Local & Offline Completo:** Execução direta no browser ou via extensões locais (ex: Live Server) com fontes variáveis locais (`Inter`, `Martian Mono`, `Syne`) e recursos SVG autónomos.
2. **Publicação no GitHub Pages:** Estrutura concebida para atuar como a **raiz do repositório GitHub**, permitindo ativação imediata do `https://<utilizador>.github.io/<repositorio>/` sem processos de build (*build-less static web*).

---

## 📁 Estrutura de Ficheiros & Mapa de Demonstadores

```text
learning-scaffold/
├── index.html                                  # 🏠 PORTAL PRINCIPAL DA PLATAFORMA & MATRIZ INTERATIVA
├── README.md                                   # Este manual de enquadramento curricular e créditos
│
├── mobile-first-foundation.html                # 📘 Guião profundo: Semanas 1-2, HTML5 e Arquitetura Web
├── intrinsic-sizing-box-model.html             # 📘 Guião profundo: Dimensionamento Intrínseco e Box Model
├── fluid-variable-typography.html              # 📘 Guião profundo: Tipografia Fluida, Escalas & Fontes Variáveis
├── AI-MENTOR-TRANSITION-GUIDE.md               # 🤖 MANUAL DO ESTUDANTE: Transição do Código Manual para Antigravity ADE
├── ex1-hello-warp-guide.html                   # 📘 Guião Passo a Passo: EX1 (Hello Warp!)
├── ex2-guide.html                              # 📘 Guião Passo a Passo: EX2 (Media & Box Model)
├── tp06-early-prototype-guide.html             # 📘 Guião Passo a Passo: Fase 1 — Protótipo Preliminar (TP06)
│
├── assets/                                     # CSS modular (@layer), fontes variáveis e scripts
│   ├── css/                                    # reset.css, modernist.css, patterns-demo.css
│   └── js/                                     # i18n.js, data-store.js, app.js
│
├── data/                                       # Bases de dados pedagógicas estruturadas em JSON
│   ├── matrix.json                             # 323+ entradas canónicas da Living Standard MDN
│   ├── assignments.json                        # Enunciados, restrições e etapas dos projetos
│   ├── patterns.json                           # Catálogo de 13+ padrões interativos do festival
│   └── categories.json                         # Categorias e taxonomia curricular
│
└── demos/                                      # 🚀 SUITE INTEGRADA DE DEMONSTRADORES
    ├── hello-warp/                             # EX1: Semântica fundamental e fluxo normal HTML5
    ├── ex2-media-box-model/                    # EX2: Multimédia responsiva, <picture> e posições
    ├── tp06-responsive/                        # PROJETO FINAL (Fase 1): Protótipo preliminar a 2 colunas
    ├── tp11-variables-transitions-animations/  # SUITE TP11: Theming light-dark(), física 3D e scroll(root)
    ├── tp11-css-flexbox-grid/                  # SUITE TP11-B: Flexbox 1D, CSS Grid 2D e @container
    └── tp11-integrated-responsive-project/     # PROJETO FINAL (Fase 2): Capstone Avançado Masterclass
```

---

## 🚀 Matriz Curricular: Enunciados & Progressão de Demonstadores

| Código | Momento Curricular | Foco Didático & Arquitetura | Demonstração Online |
| :--- | :--- | :--- | :--- |
| **EX1** | *Hello Warp! (Wendy)* | Marcos HTML5 semânticos puros, fluxo normal, tipografia rem, zero classes/IDs. | [Lançar Demo EX1](demos/hello-warp/index.html) |
| **EX2** | *Media & Box Model* | Reset de Eric Meyer, direção de arte com `<picture>`, classes BEM e `position: sticky`. | [Lançar Demo EX2](demos/ex2-media-box-model/index.html) |
| **STAGE 1** | *Final Project — Early Prototype* | Protótipo responsivo preliminar (`TP06`), grelha a 2 colunas no desktop (960px), galeria e calculadora de bilhetes. | [Lançar Demo TP06](demos/tp06-responsive/index.html) |
| **TP11-B** | *Advanced CSS Layout Suite* | 4 Laboratórios: Flexbox 1D, CSS Grid 2D Asymmetric Masonry, Arquitetura Híbrida e Container Queries `@container`. | [Lançar Demo TP11-B](demos/tp11-css-flexbox-grid/index.html) |
| **TP11** | *Dynamic Sensory & Motion* | 5 Módulos: Tokens `:root`, `light-dark()`, física elástica `cubic-bezier()`, scroll animations `scroll(root)` e filtros. | [Lançar Demo TP11](demos/tp11-variables-transitions-animations/index.html) |
| **STAGE 2** | *Final Project — Full Capstone* | Masterclass integrada: 4 breakpoints mobile-first, Macro Grid 2D com `grid-template-areas`, Masonry denso com voids, Crate de vinis 3D e inspetor de Raios-X. | [Lançar Capstone TP11](demos/tp11-integrated-responsive-project/index.html) |

---

## 🧠 Princípios de Design de Interação & Padrões vs. Anti-Padrões Web

| Domínio de Interação | ✅ Padrão Recomendado (Best Practice) | ❌ Anti-Padrão a Evitar (Dark UX / Fricção) |
| :--- | :--- | :--- |
| **Navegação Principal** | Barra horizontal persistente no desktop; gaveta deslizante acessível no telemóvel com alvos &ge; 44px. | **Menu Hamburguer no Desktop** widescreen que esconde a navegação sem justificação espacial (*Mystery Meat Navigation*). |
| **Estabilidade Visual** | Dimensões (`width`, `height`) e `aspect-ratio` reservados previamente em todas as imagens e vídeos (CLS = 0). | **Carregamento tardio de anúncios/imagens sem reserva**, provocando saltos bruscos no texto enquanto o utilizador está a ler. |
| **Acessibilidade de Foco** | Indicadores `:focus-visible` de alto contraste com `outline-offset` para navegação por teclado. | **Remoção global do foco** através de `outline: none !important` sem qualquer substituto visual alternativo. |
| **Formulários & Botões** | Botões sempre clicáveis que fornecem mensagens inline de validação com feedback imediato e explicativo. | **Botões desativados (`disabled`) mudos** com baixo contraste que não respondem e não explicam o motivo do erro. |
| **Acesso ao Rodapé** | Paginação semântica acessível ou botão explícito "Carregar Mais Resultados". | **Scroll Infinito ininterrupto** que empurra o rodapé infinitamente, impedindo o acesso a contactos, termos e acessibilidade. |
| **Movimento & Transições** | Transições espaciais subtis (150ms a 300ms) com respeito escrupuloso por `@media (prefers-reduced-motion)`. | **Animações contínuas, rotações gratuitas e molas exageradas** que sobrecarregam a cognição e causam desconforto vestibular. |

---

## 📚 Compêndio de Documentação Canónica MDN Web Docs

1. **Estrutura & Semântica HTML5:**
   * [HTML Semantic Elements](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html)
   * [ARIA Landmark Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/landmark_role)
   * [&lt;picture&gt; Responsive Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
   * [&lt;details&gt; and &lt;summary&gt; Disclosures](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
2. **Layout Moderno CSS:**
   * [CSS Grid Layout Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout)
   * [Flexible Box Layout Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout)
   * [CSS Container Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries)
   * [Cascade Layers (@layer)](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)
3. **Cores, Variáveis & Movimento:**
   * [Using CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)
   * [light-dark() Color Function](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark)
   * [CSS Transitions Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Transitions)
   * [Scroll-Driven Animations Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations)
   * [The :has() Relational Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:has)

---

## 📺 Aulas & Recursos de Vídeo Recomendados
* **CSS Grid Masterclass:** [Rachel Andrew & Kevin Powell (YouTube)](https://www.youtube.com/results?search_query=CSS+Grid+Kevin+Powell+Rachel+Andrew)
* **Flexbox em 20 Minutos:** [Kevin Powell (YouTube)](https://www.youtube.com/results?search_query=Flexbox+in+20+Minutes+Kevin+Powell)
* **Scroll-Driven Animations Pure CSS:** [Bramus Van Damme — Google Chrome Developers](https://www.youtube.com/results?search_query=Scroll-driven+animations+Chrome+Developers)
* **Modern CSS Theming com light-dark():** [Modern CSS Features & Color Systems](https://www.youtube.com/results?search_query=light-dark+css+function)

---

## 🛠️ Ativação no GitHub Pages & Sincronização GitHub Desktop

Como esta pasta é a **raiz do repositório**, o procedimento de publicação é direto e sem passos de compilação:

### Passo a Passo para GitHub Desktop & GitHub Pages:
1. Abra o **GitHub Desktop**.
2. Vá a `File` &rarr; `Add Existing Repository...`.
3. Selecione o caminho desta pasta:
   ```text
   /Volumes/Documents HD/FBAUP/2026-27/WD101-26/learning-scaffold
   ```
4. Publique ou sincronize com o seu repositório no GitHub.
5. No GitHub (no browser), aceda a **Settings** &rarr; **Pages**.
6. Em **Build and deployment**:
   * **Source:** `Deploy from a branch`
   * **Branch:** `main` (ou `master`)
   * **Folder:** `/ (root)`
7. Clique em **Save**. A sua plataforma ficará disponível em:
   ```text
   https://<seu-utilizador>.github.io/<nome-do-repositorio>/
   ```
   e os estudantes poderão aceder imediatamente à matriz e a todos os demonstradores!

---
*Faculdade de Belas Artes da Universidade do Porto (FBAUP) • Web Design WD101 • 2026/27*
