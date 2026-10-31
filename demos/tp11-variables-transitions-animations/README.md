# TP11 • Variables, Transitions, Animations, Transforms & Filters
## Faculdade de Belas Artes da Universidade do Porto (FBAUP)
### Unidade Curricular: Web Design (WD101) — 2026/27

---

## 🎯 Visão Geral da Unidade Pedagógica
Este repositório reúne a suite de demonstradores práticos para a temática **Development: HTML & CSS (Variables, Transitions, Animations, Transforms & Filters)**, totalmente contextualizada no universo do protótipo **DRUMTIKS '26** (Festival de Hip Hop e Beatmaking na Alfândega do Porto).

Cada módulo é 100% autónomo, modular, inclui fontes variáveis locais, ícones SVG, imagens dedicadas e anotações exaustivas no código HTML e CSS com links canónicos para a **MDN Web Docs**.

---

## 📁 Estrutura Completa de Pastas

```text
TP11 Variables & Transitions & Animations/
├── index.html                     # Portal / Dashboard principal com os 5 módulos e links MDN
├── README.md                      # Compêndio pedagógico e matriz de competências
│
├── 01-variables/                  # 1. VARIÁVEIS CSS & THEMING DINÂMICO
│   ├── index.html                 # Menu com toggle prefers-color-scheme & light-dark()
│   ├── README.md                  # Explicação técnica de variáveis e herança
│   ├── css/
│   │   ├── styles.css             # :root tokens, escopo local, :root:has(), transições
│   │   └── fonts.css              # @font-face (Syne, Martian Mono, Inter)
│   └── assets/                    # Ícones vetoriais, imagens e fontes
│
├── 02-transitions/                # 2. TRANSIÇÕES, EASING & VINYL CRATE FAN-OUT
│   ├── index.html                 # Versão A: Carrossel simples com scroll-snap e hover
│   ├── versao-b.html              # Versão B: Vinyl Crate com 3 capas em leque 3D
│   ├── README.md                  # Análise de timing functions e modelo IPO
│   ├── css/
│   │   ├── styles.css             # Estilos do carrossel
│   │   ├── crate.css              # Estilos da caixa 3D, leque e curvas cubic-bezier
│   │   └── fonts.css
│   └── assets/
│       ├── images/                # 3 capas fictícias geradas pelo Gemini + imagens festival
│       └── icons/                 # Ícone de vinil, checkmarks
│
├── 03-animations/                 # 3. SCROLL-DRIVEN ANIMATIONS
│   ├── index.html                 # Versão A: Barra de progresso total scroll(root)
│   ├── versao-b.html              # Versão B: Viewport trigger view() e percentagens
│   ├── README.md                  # Desmistificação de animation-timeline e animation-range
│   ├── css/
│   │   ├── styles.css             # Layout longo e timeline scroll(root)
│   │   ├── viewport-reveal.css    # Revelação por viewport, keyframes e régua
│   │   └── fonts.css
│   └── assets/                    # Ativos visuais do festival
│
├── 04-transforms/                 # 4. TRANSFORMAÇÕES GEOMÉTRICAS (TRANSFORMS)
│   ├── index.html                 # Laboratório interativo de transformações 2D e 3D
│   ├── README.md                  # Guia conceitual de posição, tamanho e pivot origin
│   ├── css/styles.css             # translate, scale, rotate, skew, transform-origin
│   └── assets/                    # Ativos e fontes variáveis
│
└── 05-filters/                    # 5. EFEITOS DE FILTRO CSS (FILTERS)
    ├── index.html                 # Laboratório interativo de filtros visuais
    ├── README.md                  # Guia de pós-processamento, drop-shadow vs box-shadow
    ├── css/styles.css             # blur, contrast, hue-rotate, drop-shadow, backdrop-filter
    └── assets/                    # Capas e ativos
```

---

## 📋 Resumo Detalhado dos 5 Módulos

### 1. `01-variables` — Variáveis CSS & Dynamic Theming
* **MDN Guide:** [Using CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)
* **Conceitos Demonstrados:**
  * **Escopo Global (`:root`) vs Escopo Local (`.card-featured`)**.
  * Declaração de `color-scheme: light dark` e consumo da função nativa `light-dark()`.
  * **Alternador de Tema no Menu (`<nav>`)**: Controlo acessível com 3 estados (Auto, Claro, Escuro) acionado puramente em CSS via `:root:has(#theme-light:checked)`.
  * Transição unificada entre esquemas de cor sem cintilação (*flash of unstyled content*).
  * Tabela interativa de inspeção de tokens em tempo real.

### 2. `02-transitions` — Transições CSS & Metáfora da Caixa de Discos
* **MDN Guide:** [CSS Transitions Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Transitions) & [CSS transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)
* **Conceitos Demonstrados:**
  * **O Modelo IPO das Transições (Input -> Process -> Output)**: Interpolação matemática entre estados de repouso e `:hover`.
  * **Versão A**: Carrossel suave com *CSS Scroll Snap*, paginação por âncoras e microinterações nos cartões.
  * **Versão B**: Caixa física de vinis (*Record Crate*) com **3 capas geradas pelo Gemini**:
    1. *WARP THEORY — The 808 Chronicles* (DJ Warp)
    2. *CONCRETE PULSE — Alfândega Vault Sessions* (Vault Collective)
    3. *DUST & GROOVES — Subterranean Cuts Vol. 1* (Crate Diggers Porto)
  * Abertura em leque 3D com `transform-origin: bottom center`, `perspective: 1000px` e desfasamento escalonado (`transition-delay: 0s, 0.08s, 0.16s`).
  * Extração do disco de vinil preto de dentro da manga no hover individual (`transform: translateX(52%) rotate(135deg)`).
  * **Playground de Easing**: Comutador interativo entre `linear`, `ease`, `ease-out`, `ease-in-out` e `cubic-bezier(0.34, 1.56, 0.64, 1)` (mola elástica com retorno).

### 3. `03-animations` — Scroll-Driven Animations Pure CSS
* **MDN Guide:** [Using CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Animations/Using) & [CSS animation-timeline](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline)
* **Conceitos Demonstrados:**
  * **Versão A**: Barra de progresso fixa no topo da janela acionada pelo scroll total do documento através de `animation-timeline: scroll(root)`.
  * **Versão B**: Animação vinculada à visibilidade do elemento no viewport através de `animation-timeline: view()`.
  * Calibração fina de percentagens de início e fim com `animation-range: entry <início%> cover <fim%>` (Borda Imediata `0%–100%`, Equilibrado `15%–40%`, Profundo `25%–65%`).
  * Régua visual lateral marcando as zonas de avaliação do viewport.

### 4. `04-transforms` — Transformações Geométricas 2D e 3D
* **MDN Guide:** [CSS Transforms Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Transforms)
* **Conceitos Demonstrados:**
  * As 4 operações cardinais: **Posição** (`translate`), **Tamanho** (`scale`), **Rotação** (`rotate`) e **Inclinação** (`skew`).
  * **Importância do `transform-origin`**: Ponto de apoio geométrico (`center`, `top left`, `bottom center`).
  * Aceleração gráfica por GPU sem causar recálculo de layout (*reflow*).
  * Palco interativo com grelha milimétrica, caixa fantasma e indicador visual do ponto de pivot.

### 5. `05-filters` — Efeitos de Filtro CSS & Sombras com Recorte Alfa
* **MDN Guide:** [CSS Filter Effects Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Filter_effects)
* **Conceitos Demonstrados:**
  * Filtros de imagem: `blur()`, `brightness()`, `contrast()`, `grayscale()`, `sepia()`, `hue-rotate()`, `invert()`, `saturate()`.
  * **Diferença Crítica: `box-shadow` vs `filter: drop-shadow()`**:
    * `box-shadow` desenha uma caixa retangular em torno dos limites da tag.
    * `drop-shadow()` respeita o canal alfa de imagens transparentes e ícones SVG recortados.
  * `backdrop-filter: blur(14px)` para efeito vidro fosco (*glassmorphism*).
  * Encadeamento de múltiplos filtros em pipeline único.

---

## 🚀 Como Explorar os Exercícios
1. Abre o [index.html](file:///Volumes/Documents%20HD/FBAUP/2026-27/WD101-26/TP11%20Variables%20%26%20Transitions%20%26%20Animations/index.html) na raiz do TP11 num browser moderno.
2. Navega entre os cinco demonstradores e testa os controlos interativos de tema, curvas de easing, percentagens de scroll, transformações geométricas e filtros.
3. Inspeciona o código fonte com as DevTools do navegador (`Cmd + Option + I` no Mac ou `F12` no Windows) para examinar as anotações e comentários detalhados.
