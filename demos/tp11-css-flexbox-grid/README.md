# TP11-B • Advanced CSS Layout: Flexbox & CSS Grid Masterclass
## Faculdade de Belas Artes da Universidade do Porto (FBAUP)
### Unidade Curricular: Web Design (WD101) — Ano Letivo 2026/27
### Contexto: Festival DRUMTIKS '26 (Alfândega do Porto) • DJ Warp Discography Suite

---

## 🎯 Visão Geral da Unidade Pedagógica

Esta suite de demonstradores práticos aprofunda os conceitos avançados de composição e layout responsivo moderno com recurso exclusivo a **HTML5 semântico** e **CSS3 moderno (Pure CSS, Zero JavaScript)**.

O universo temático é a discografia de **DJ Warp**, turntablista headline do festival de beatmaking e hip-hop **DRUMTIKS '26** (Alfândega do Porto). A suite é composta por **3 demonstradores práticos autónomos** e um **Portal HUB** com matriz de decisão conceitual e compêndio de documentação canónica da **MDN Web Docs**.

---

## 📁 Estrutura de Pastas e Ficheiros

```text
TP11-CSS Flexbox and CSS Grid Demo/
├── index.html                     # Portal HUB principal: Resumo, Matriz 1D vs 2D e Links MDN
├── 01-flexbox-tracks.html         # PÁGINA 1: Flexbox Masterclass (Detalhes do Álbum e Faixas)
├── 02-grid-albums.html            # PÁGINA 2: CSS Grid Masterclass (Discografia Asymmetric Masonry)
├── 03-hybrid-discography.html     # PÁGINA 3: Hybrid Architecture (Grid Macro 2D + Flexbox Micro 1D)
│
├── css/
│   ├── base.css                   # Tokens :root, reset, tipografia, cabeçalho global e controlos
│   ├── fonts.css                  # Fontes variáveis locais (@font-face: Inter, Martian Mono, Syne)
│   ├── flexbox-demo.css           # Estilos ultra-documentados do Demonstrador 01 (Flexbox)
│   ├── grid-demo.css              # Estilos ultra-documentados do Demonstrador 02 (CSS Grid)
│   └── hybrid-demo.css            # Estilos ultra-documentados do Demonstrador 03 (Hybrid Layout)
│
└── assets/
    ├── fonts/                     # WOFF2 das fontes variáveis Inter, Martian Mono e Syne
    ├── icons/                     # Ícones SVG (vinil, prato, badges de controlo)
    └── images/                    # As 5 capas da discografia (1024x1024) e fotos do DJ Warp
        ├── album-1-warp-theory.jpg          # LP 1: WARP THEORY — The 808 Chronicles
        ├── album-2-concrete-pulse.jpg       # LP 2: CONCRETE PULSE — Alfândega Vault Sessions
        ├── album-3-dust-and-grooves.jpg     # LP 3: DUST & GROOVES — Subterranean Cuts Vol. 1
        ├── album-4-fader-kinetics.jpg       # EP 1: FADER KINETICS — The Needle & The Iron
        ├── album-5-circuit-bender.jpg       # EP 2: CIRCUIT BENDER — Riverbank Sonics
        ├── dj-warp-600w.webp                # Retrato horizontal de DJ Warp
        └── dj-warp-tight-portrait.webp      # Retrato de estúdio DJ Warp
```

---

## 📋 Detalhe dos 3 Demonstradores

### 1. `01-flexbox-tracks.html` — CSS Flexbox Masterclass
* **Foco Didático:** O modelo unidimensional (1D), eixos principal (*Main Axis*) e transversal (*Cross Axis*), quebras de linha fluidas e reordenação visual.
* **Cenário:** O utilizador pode selecionar qualquer um dos 5 álbuns no *crate* superior (via seletores puros de CSS `:has()` e botões rádio). A seleção abre a consola de faixas com especificações acústicas, técnicas de *scratch* e BPM.
* **Modos de Visualização CodePen (Tabs):**
  * `Rendered Preview`: Sandbox interativo renderizado em tempo real.
  * `HTML View`: Bloco de código com o HTML semântico e marcos de acessibilidade da grelha de faixas.
  * `CSS View`: Regras ativas de Flexbox (`display: flex`, `flex-direction`, `flex-wrap`, `justify-content`, `align-items`, `order`, etc.).
* **Inspetor de Raios-X:** Botão de alternância que desenha o contorno ciano do contentor flexível, a seta indicadora do eixo principal (*Main Axis*) e os rácios `flex: grow shrink basis` de cada item.
* **Transição Responsiva:**
  * **Mobile:** Pilha vertical de coluna única (`flex-direction: column`).
  * **Desktop (`@media (min-width: 768px)`):** Grelha flexível com quebra automática em múltiplas linhas (`flex-direction: row; flex-wrap: wrap;`).
* **Controlos Interativos no Ecrã (Pure CSS):**
  * **Orientação (`flex-direction`):** `row`, `row-reverse`, `column`, `column-reverse`.
  * **Quebra (`flex-wrap`):** `wrap`, `nowrap`, `wrap-reverse`.
  * **Alinhamento no Eixo Principal (`justify-content`):** `flex-start`, `center`, `space-between`, `space-around`, `space-evenly`.
  * **Alinhamento no Eixo Cruzado (`align-items`):** `stretch`, `flex-start`, `center`, `flex-end`.
  * **Reordenação e Posicionamento (`order`):** Ordem natural da árvore DOM, destaque de faixa de cabeceira (`order: -10`), ordenação por BPM (cortes rápidos primeiro) e fluxo invertido.
* **Demonstração de Quebra por Largura de Conteúdo:**
  * Cartões com comprimentos de texto variáveis e `flex-basis` distintos (`card-wide`: 460px, `card-compact`: 260px) demonstram como `flex-grow` e `flex-shrink` preenchem ou quebram conforme a largura disponível.
* **O Truque do `margin-left: auto`:** Utilizado para empurrar o tempo da faixa e botões para o extremo oposto sem recorrer a floats.
* **Blueprint Estrutural Barebone:** Bloco resumo que isola apenas os marcos HTML5 fundamentais e seletores CSS puros de posicionamento (sem estilos cosméticos como cores, fontes, sombras ou bordas).

---

### 2. `02-grid-albums.html` — CSS Grid Masterclass
* **Foco Didático:** O modelo bidimensional (2D), faixas (*tracks*), linhas, frações proporcionais (`fr`), `minmax()`, `repeat()`, fluxo automático (`grid-auto-flow: dense`) e espaço negativo intencional.
* **Cenário:** A discografia completa de DJ Warp em formato poster editorial: os 3 álbuns completos (LPs) ocupam áreas dominantes maiores, enquanto os 2 EPs ocupam áreas compactas satélite.
* **Modos de Visualização CodePen (Tabs):**
  * `Rendered Preview`: Visualização gráfica dos álbuns e módulos editoriais.
  * `HTML View`: Estrutura de marcas semânticas dos cartões de álbum e células de espaço negativo.
  * `CSS View`: Regras ativas de CSS Grid para as 3 variações.
* **Transição Responsiva:** Coluna única no ecrã móvel; matriz desktop a partir de 900px.
* **As 3 Variações Alternáveis em Tempo Real (Pure CSS):**
  1. **Variação 1: Modular (Unidades Iguais):** Grelha modular estrita `repeat(4, 1fr)`. LPs ocupam 2 colunas e 2 linhas; EPs ocupam 1 coluna e 1 linha. Ritmo suíço regular.
  2. **Variação 2: Modular com Espaço Negativo Intencional:** Mantém as faixas modulares, mas deixa intencionalmente células vazias (espaço em branco editorial), criando respiração visual e realce tipográfico.
  3. **Variação 3: Espaços Assimétricos e Irregulares (Masonry & Dense):** Faixas não uniformes (`1.2fr 2.2fr 0.9fr 1.5fr`), alturas de linha variadas, citações editoriais e `grid-auto-flow: dense` para preenchimento dinâmico de vazios.
* **Inspetor de Raios-X:** Botão de alternância que desenha as linhas da matriz, quadrículas de fundo e coordenadas no ecrã.
* **Blueprint Estrutural Barebone:** Código limpo e comentado demonstrando o esqueleto mínimo de CSS Grid para cada variação.

---

### 3. `03-hybrid-discography.html` — Hybrid Architecture Masterclass
* **Foco Didático:** A regra de ouro da arquitetura frontend moderna:
  > **CSS Grid para Macro-Layout (Estrutura 2D da Página)**  
  > **Flexbox para Micro-Layout (Componentes Internos 1D)**
* **Modos de Visualização CodePen (Tabs):**
  * `Rendered Preview`: Aplicação completa interativa com player giratório, sidebar e faixas.
  * `HTML View`: Mapeamento de marcos semânticos (`<header>`, `<section>`, `<aside>`, `<footer>`) nas áreas da grelha.
  * `CSS View`: Código comparativo das Abordagens A, B e C, e dos componentes internos Flexbox.
* **Confirmação do Conceito Pedagógico:**
  * O CSS Grid orquestra a colocação de grandes blocos: Banner Hero, Player de Áudio, Barra Lateral com Horários do Festival, Faixa de Álbuns, Consola de Faixas Ativas e Notas Técnicas de Gravação.
  * O Flexbox organiza o interior de cada um desses blocos: alinhamento dos controlos do reprodutor com a barra de progresso que absorve o espaço livre (`flex-grow: 1`), metadados empurrados com `margin-left: auto`, badges de BPM e tags de técnicas de *scratch*.
* **As 3 Técnicas de Macro-Grid Demonstradas:**
  * **Técnica A: Named Template Areas (`grid-template-areas`):** Notação ASCII visual das áreas semânticas (`"area-hero area-hero area-hero"`).
  * **Técnica B: Named Grid Lines (`[sidebar-start] ... [content-end]`):** Nomenclatura explícita de linhas entre parênteses retos e posicionamento semântico.
  * **Técnica C: Coordenadas Numéricas e Span (`grid-column: 1 / -1`, `span 2`):** Posicionamento por índices absolutos e relativos.
* **Modo Raio-X:** Sobreposição com o nome de cada célula da grelha em tempo real e anotação dos eixos flexíveis internos.
* **Blueprint Estrutural Barebone:** Esqueleto minimalista com HTML5 semântico e regras estritas de posicionamento macro/micro.

---

### 4. `04-container-queries.html` — CSS Container Queries Masterclass
* **Foco Didático:** A superação das frágeis `@media` queries globais para design de componentes modulares autónomos através de `@container`.
* **Cenário:** O mesmo componente de álbum adapta-se intrinsecamente ao espaço do seu contentor pai (`container-type: inline-size`):
  * **Contentor Estreito (< 440px):** 1D Flexbox Vertical Stack (estilo cartão de barra lateral / telemóvel).
  * **Contentor Médio (440px – 739px):** 1D Flexbox Horizontal Row (alinhamento horizontal de capa, biografia e reprodutor).
  * **Contentor Largo (>= 740px):** 2D CSS Grid Matrix (banner panorâmico a 3 colunas com faixas estendidas e reprodutor completo).
* **O "Drop-in Test" (Prova de Barra Lateral vs Área Principal):** Demonstração lado a lado colocando o *exato mesmo markup HTML* num `<aside>` estreito (~320px) e numa `<section>` principal larga (~780px), sem qualquer `@media` query ou classes modificadoras BEM!
* **Unidades de Contentor (`cqi`):** Tipografia fluida com `clamp(1.15rem, 2cqi + 0.6rem, 1.85rem)` que escala com a largura do componente, não da janela do browser.
* **Playground Interativo com Alça de Redimensionamento:** Contentor com `resize: horizontal; overflow: auto;` e botões de largura predefinida (320px, 540px, 920px, Fluido).
* **Modos de Visualização CodePen (Tabs):** `Rendered Preview`, `HTML View` e `CSS View`.
* **Inspetor de Raios-X:** Desenha o contorno ciano do contentor com a etiqueta `QUERY CONTAINER [container-type: inline-size]` e realça os elementos internos.
* **Blueprint Estrutural Barebone:** Bloco resumo isolando apenas os marcos fundamentais e regras `@container` limpas sem estilos visuais cosméticos.

---

## 📚 Compêndio de Links Canónicos da MDN Web Docs

### CSS Grid Layout
1. [CSS Grid Layout Overview](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout)
2. [Basic Concepts of Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
3. [Relationship of Grid Layout with Other Layout Methods](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods)
4. [Grid Template Areas](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
5. [Using Named Grid Lines](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)
6. [Line-based Placement with Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
7. [Auto-placement in CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout/Auto-placement)

### CSS Flexbox
1. [Core Tutorial: Flexible Box Layout](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox)
2. [Basic Concepts of Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
3. [Relationship of Flexbox to Other Layout Methods](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods)
4. [Aligning Items in a Flex Container](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
5. [Ordering Flex Items](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
6. [Controlling Ratios of Flex Items Along the Main Axis](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
7. [Wrapping Flex Items](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
8. [Typical Use Cases of Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout/Use_cases)

### CSS Container Queries
1. [CSS Container Queries Complete Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries)
2. [container-type Property](https://developer.mozilla.org/en-US/docs/Web/CSS/container-type)
3. [container-name Property](https://developer.mozilla.org/en-US/docs/Web/CSS/container-name)
4. [@container At-Rule Syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/@container)
5. [Container Size and Style Queries Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)

---

## 🛠️ Tecnologias e Métodos de Implementação

* **HTML5 Semântico:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<figure>`, `<footer>`, com atributos WAI-ARIA (`role="region"`, `role="list"`, `aria-label`).
* **CSS Custom Properties (Variables):** Gestão centralizada de cores, fontes, raios de curvatura e transições em `:root`.
* **Motor de Estados Pure CSS (`:has()` & `:checked`):** Todos os filtros, alternadores de álbum e seletores de grelha funcionam sem JavaScript, demonstrando a potência do seletor de parentesco `:has()`.
* **Fontes Variáveis Web Localizadas:** Inter (100–900), Martian Mono (100–800) e Syne (400–800) em formato WOFF2 de alto desempenho e funcionamento 100% offline.
