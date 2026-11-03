# Licenciatura em Design de Comunicação, Faculdade de Belas Artes da Universidade do Porto
**Web Design (WD101), 2026-27 • Pedro Amado (pamado@fba.up.pt)**

---

# Projeto Final (Fase 1): "DRUMTIKS '26" Portal Web Responsivo & Motor Reativo Pure CSS (Semanas 5 a 8)

> **Documento Estruturado em Abas (Multi-Tab Architecture)** para importação / consulta no Google Docs:
> - **Aba 1:** Enunciado, Instruções Gerais, Metodologia & Objetivos Pedagógicos
> - **Aba 2:** Arquitetura Semântica HTML5 & Landmarks de Acessibilidade
> - **Aba 3:** Arquitetura CSS3, Design Tokens & Tipografia Fluida (`clamp()`)
> - **Aba 4:** Design Responsivo (RWD) Mobile-First & Art-Direction com `<picture>` / `srcset`
> - **Aba 5:** Padrões Interativos Pure CSS (Scroll-Driven Animations, Carousel Snap, Details Accordion, Motor `:has()`)
> - **Aba 6:** Anexos de Código Integralmente Comentado & Guia de Referência MDN Web Docs

---

## TAB 1: Enunciado, Instruções Gerais, Metodologia & Objetivos Pedagógicos

### 1.1 Introdução ao Projeto
O **DRUMTIKS '26** é um festival fictício de hip-hop, cultura de beatmaking analógico e turntablism sediado nas abóbadas de granito subterrâneas da **Alfândega do Porto**.
Partindo do protótipo mobile desenvolvido em Figma pela equipa da estudante Joana (FBAUP, 2026), este exercício tem como meta a sua **transposição integral para a Web real** através de código estritamente estandardizado: **HTML5 semântico e CSS3 puro (Strictly Zero JavaScript)**.

O projeto desafia os estudantes a expandir o design mobile original para um **canvas desktop responsivo de duas colunas**, aplicando os princípios contemporâneos de **Progressive Enhancement** (Melhoria Progressiva), tipografia fluida via funções matemáticas (`clamp()`), animações nativas baseadas no scroll do viewport (`animation-timeline: scroll()`), carrossel de fotos com scroll-snap e paginação sem scripts, accordion animado em `<details>`, e o padrão de cálculo de preços via seletor relacional `:root:has()`.

### 1.2 Objetivos Pedagógicos de Aprendizagem (Learning Outcomes)
Ao concluir este exercício, o estudante será capaz de:
1. **Modelar uma Arquitetura de Informação Multi-Páginas:** Implementar a página principal (`index.html`), a página de perfil e alinhamento do artista principal (`dj-warp.html`), a página de regulamento da batalha de produtores (`battle-rules.html`) e a página institucional de créditos (`credits.html`).
2. **Construir um Layout Responsivo Mobile-First:** Estabelecer a CSS de base para ecrãs pequenos (`< 600px`) e enriquecer progressivamente o layout através de media queries de largura mínima (`@media (min-width: 600px)` e `@media (min-width: 960px)`), culminando numa grelha desktop de 2 colunas com palco sticky.
3. **Dominar Tipografia Fluida com `clamp()`:** Abandonar valores estáticos de pixels para títulos e parágrafos em prol de equações dinâmicas que recalculam a escala tipográfica proporcionalmente à largura do ecrã (`clamp(min, preferred, max)`).
4. **Implementar Direção de Arte e Resolução com `<picture>` e `srcset`:** Otimizar e servir imagens com múltiplos rácios de aspeto (16:9 widescreen para desktop, 1:1 quadrado para tablet, e 9:16 vertical para mobile), integrando compressão moderna WebP com fallbacks universais em JPEG.
5. **Autohospedar (Vendorizar) Webfonts Variáveis:** Descarregar e servir localmente ficheiros WOFF2 de fontes variáveis (`Syne`, `Martian Mono`, `Inter`) a partir de `assets/fonts/`, eliminando chamadas externas a CDNs e dependências de terceiros.
6. **Construir Motores de Estado Reativos Pure CSS:** Aplicar o seletor relacional pai `:root:has(#pass:checked)` combinado com conteúdo gerado (`::after { content: ... }`) para simular cálculos em tempo real de carrinho de compras e janelas modais acessíveis via `:target`.
7. **Explorar Recursos Modernos de CSS:** Aplicar animações nativas vinculadas ao scroll do viewport (`animation-timeline: scroll(root)`), carrossel de imagens com scroll-snap (`scroll-marker`), e acordeões articulados via `<details>` e CSS Grid (`grid-template-rows: 0fr -> 1fr`).

### 1.3 Metodologia de Desenvolvimento
O desenvolvimento deve seguir o ciclo iterativo consagrado na Unidade Curricular:
1. **Estruturar (HTML5):** Marcar os conteúdos com tags semânticas e landmarks de acessibilidade antes de qualquer estilização visual.
2. **Tokenizar (CSS Variables):** Declarar variáveis centrais de cor, tipografia e espaçamento na camada `@layer theme`.
3. **Mobile Default (CSS Base):** Estilizar e validar primeiro para dispositivos móveis (390px / 430px) no modo de inspeção móvel das Developer Tools.
4. **Desktop Breakpoints (Media Queries):** Adicionar `@media (min-width: 600px)` e `@media (min-width: 960px)` para orquestrar as duas colunas e adaptar o botão de compra de bilhetes (CTA).
5. **Comentar & Validar:** Inserir comentários pedagógicos explicando cada landmark, seletor de CSS e fórmula matemática. Validar no W3C Nu HTML Checker e W3C CSS Validator.

### 1.4 Estrutura de Pastas e Ficheiros Recomendada
```text
TP06-responsive/
├── index.html                  # Portal principal do festival & simulador de passes
├── dj-warp.html                # Perfil do artista headliner & masterclass de vinil
├── battle-rules.html           # Regulamento oficial e grelha de avaliação do 808 Clash
├── credits.html                # Ficha técnica académica, autoria e mapa de tokens
├── assets/
│   ├── icons/                  # Vetores SVG (favicon, platter, check-badge, checkbox)
│   ├── fonts/                  # Webfonts variáveis vendorizadas (Inter, Martian Mono, Syne)
│   └── images/                 # Imagens otimizadas (WebP + JPG em 1400w, 960w, 600w, 400w)
└── css/
    ├── fonts.css               # Declarações @font-face para fontes locais
    └── styles.css              # Folha de estilos unificada orquestrada por @layer
```

---

## TAB 2: Estrutura do Site & Arquitetura Semântica HTML5

### 2.1 Mapa de Conteúdos e Arquitetura de Informação
A experiência do website divide-se em quatro nós de navegação complementares:

| Ficheiro | Papel Informativo & Semântico | Componentes Principais |
| :--- | :--- | :--- |
| `index.html` | Portal de entrada, programa diário e simulador de bilhetes | Header, Hero Headliner, Grelha de Horários, Galeria de Fotos em Carrossel, Simulador Pure CSS, Accordion de FAQ, Modais |
| `dj-warp.html` | Editorial detalhado sobre o artista principal e set ao vivo | Biografia arqueológica, filosofia de quad-turntablism, rider técnico de hardware, decomposição faseada do concerto, imagens responsivas |
| `battle-rules.html` | Documento regulamentar do torneio "The 808 Clash" | Fases eliminatórias (Round of 16, Quartos, Meias, Final Cega), regras de hardware sem portáteis, matriz de avaliação (100 pts) |
| `credits.html` | Página de enquadramento curricular e design system | FBAUP, equipa de design de estudantes (Joana & colegas), documentação da arquitetura `:has()`, paleta interativa de tokens |

### 2.2 Landmarks Estruturais de Acessibilidade (WAI-ARIA & HTML5)
Para garantir navegação fluida por tecnologias de apoio (leitores de ecrã como VoiceOver e NVDA), todos os documentos utilizam estritamente landmarks semânticos:
- `<header class="site-header">`: Identificador global da marca e ponto de entrada da navegação.
- `<nav class="site-nav">`: Agrupamento de hiperligações primárias devidamente rotulado com `aria-label="Main Navigation"`.
- `<main class="site-main-content">`: Contentor único de conteúdo representativo da página atual.
- `<article class="hero-card">` / `<article class="program-item">`: Unidades de informação autónomas e reutilizáveis.
- `<section class="festival-gallery-section">`: Secções temáticas com cabeçalhos acessíveis associados via `aria-labelledby`.
- `<aside class="venue-info-box">` / `<aside class="sticky-footer-bar">`: Informação complementar tangencial ao fluxo principal.
- `<figure>` e `<figcaption>`: Associação semântica inequívoca entre imagem fotográfica e a respetiva legenda contextual.
- `<footer>`: Metadados institucionais, copyright e links de rodapé.

### 2.3 Boas Práticas do `<head>`
Todo o documento HTML inclui:
- `viewport-fit=cover`: Essencial em ecrãs OLED modernos de dispositivos móveis para preencher a totalidade da área útil (safari safe areas).
- `fetchpriority="high"` no elemento `<img>` crítico da secção Hero para otimizar o Largest Contentful Paint (LCP).
- Tipos MIME explícitos nos elementos `<source type="image/webp">` para permitir que o navegador descarte formatos não suportados sem efetuar pedidos de rede redundantes.

---

## TAB 3: Arquitetura CSS3, Design Tokens & Tipografia Fluida (`clamp()`)

### 3.1 Orquestração em Camadas com `@layer`
Para evitar conflitos de especificidade sem recorrer a `!important`, as regras de CSS são organizadas em camadas formais:
```css
@layer reset, fonts, theme, base, layout, components, gallery, accordion, subpages, simulator, modals, animations, utilities;
```
A ordem de declaração no topo garante que as camadas declaradas mais à direita sobrepõem as camadas à esquerda, mantendo o reset e os estilos base isolados dos componentes interativos.

### 3.2 Design Tokens Centralizados na `:root`
Extraídos fielmente das variáveis locais do ficheiro Figma (`khltT9eeMTCJn5ItjYtw7C`):

```css
:root {
  /* Cores Base */
  --color-black: #0a0a0c;
  --color-charcoal-black: #16171a;
  --color-medium-gray: #71747e;
  --color-light-gray: #d1d3d8;
  --color-off-white: #f4f4f6;
  --color-white: #ffffff;

  /* Cores de Acento */
  --color-accent-red: #e60000;
  --color-accent-red-hover: #ff1a1a;
  --color-accent-purple: #8a2be2;
  --color-card-selected-bg: #201826;
  --color-box-bg-dark: #121217;
  --color-divider: rgba(113, 116, 126, 0.3);

  /* Famílias Tipográficas Variáveis */
  --font-family-display: 'Syne', sans-serif;
  --font-family-mono: 'Martian Mono', monospace;
  --font-family-body: 'Inter', sans-serif;

  /* Escala Tipográfica Fluida clamp(min, preferred, max) */
  --text-size-hero-title: clamp(1.6rem, 1rem + 2.5vw, 2.5rem);
  --text-size-section-header: clamp(1.2rem, 0.9rem + 1.2vw, 1.6rem);
  --text-size-pass-title: clamp(1rem, 0.85rem + 0.6vw, 1.2rem);
  --text-size-sim-price: clamp(1.6rem, 1.2rem + 1.8vw, 2.4rem);
}
```

### 3.3 Matemática Fluida com a Função `clamp()`
A técnica de tipografia fluida estabelece um limite inferior (para smartphones compactos como o iPhone SE de 375px), uma taxa de crescimento proporcional à viewport width (`vw`), e um limite superior de segurança (para ecrãs desktop de alta resolução):
$$\text{font-size} = \text{clamp}(\text{Mínimo}, \text{Valor Base} + \text{Fator}\times\text{vw}, \text{Máximo})$$
Isto elimina os saltos visuais bruscos típicos de abordagens clássicas baseadas em dezenas de media queries rígidas, permitindo que a hierarquia visual escale harmoniosamente em qualquer largura de janela.

---

## TAB 4: Design Responsivo Mobile-First & Art-Direction com `<picture>` e `srcset`

### 4.1 Filosofia Mobile-First e Breakpoints
No modelo Mobile-First da FBAUP, o código CSS fora de media queries corresponde ao layout móvel padrão. À medida que o ecrã se alarga, adicionam-se regras com `min-width`:
1. **Mobile Default (`< 600px`):** Layout em coluna única fluida. Botão "BUY TICKETS" fixado na base do ecrã (`sticky-footer-bar`) para garantir alcance imediato do polegar.
2. **Tablet Breakpoint (`@media (min-width: 600px)`):** Alargamento do padding dos contentores (`clamp(20px, 4vw, 40px)`), expansão da grelha da galeria de fotos para duas colunas visíveis por snap, e alinhamento do menu de navegação.
3. **Desktop Breakpoint (`@media (min-width: 960px)`):** 
   - A grelha principal passa a 2 colunas: `grid-template-columns: minmax(0, 1.18fr) minmax(0, 1fr);`.
   - A coluna esquerda (Headliner DJ Warp e Dados de Acesso) fixa-se verticalmente no ecrã com `position: sticky; top: 32px;`.
   - A coluna direita contém a grelha horária de concertos, o carrossel fotográfico, o simulador de bilhetes e o acordeão de FAQ.
   - O botão de compra desktop surge no cabeçalho (`.header-desktop-cta`), e a barra de rodapé móvel é ocultada sem causar saltos de layout.

### 4.2 Direção de Arte Fotográfica (Art-Direction)
Diferentes orientações de ecrã exigem composições fotográficas distintas:
- **Ecrã Desktop Widescreen (`min-width: 1024px`):** Rácio panorâmico **16:9** destacando a vastidão das abóbadas de granito e os corredores de caixas de vinil (`dj-warp-vault-16x9.webp`).
- **Ecrã Tablet (`min-width: 600px`):** Rácio quadrado **1:1** com enquadramento equilibrado do artista e das arcadas laterais (`dj-warp-vault-1x1.webp`).
- **Ecrã Mobile (`< 600px`):** Rácio vertical **9:16** centrado na figura do artista com foco no teto arqueado e nas mesas de mistura (`dj-warp-vault-9x16.webp`).

Snippet didático de implementação:
```html
<picture>
  <!-- Desktop: 16:9 Panorâmica WebP -->
  <source media="(min-width: 1024px)" 
          type="image/webp" 
          srcset="assets/images/dj-warp-vault-16x9-960w.webp 960w, assets/images/dj-warp-vault-16x9-1400w.webp 1400w" 
          sizes="(min-width: 1240px) 1160px, 92vw">

  <!-- Tablet: 1:1 Quadrado WebP -->
  <source media="(min-width: 600px)" 
          type="image/webp" 
          srcset="assets/images/dj-warp-vault-1x1-600w.webp 600w, assets/images/dj-warp-vault-1x1-960w.webp 960w" 
          sizes="85vw">

  <!-- Mobile Default: 9:16 Vertical WebP -->
  <source type="image/webp" 
          srcset="assets/images/dj-warp-vault-9x16-400w.webp 400w, assets/images/dj-warp-vault-9x16-600w.webp 600w" 
          sizes="100vw">

  <!-- Fallback Universal JPEG -->
  <img src="assets/images/dj-warp-vault-16x9-960w.jpg" 
       alt="DJ WARP rodeado por caixas de vinil nos subterrâneos da Alfândega" 
       width="1200" height="675" loading="lazy">
</picture>
```

---

## TAB 5: Padrões Interativos Pure CSS (Sem JavaScript)

### 5.1 Barra de Leitura com Scroll-Driven Animation
Utilizando a especificação moderna de **CSS Scroll-Driven Animations**, a barra de progresso no topo da janela sincroniza o seu dimensionamento horizontal diretamente com o scroll da página:
```css
.scroll-progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--color-accent-red) 0%, var(--color-accent-purple) 100%);
  transform-origin: 0% 50%;
  transform: scaleX(0);
  z-index: 9999;
}

@supports (animation-timeline: scroll()) {
  .scroll-progress-bar {
    animation: growProgressBar auto linear;
    animation-timeline: scroll(root);
  }

  @keyframes growProgressBar {
    from { transform: scaleX(0); }
    to { transform: scaleX(1); }
  }
}
```

### 5.2 Carrossel de Galeria Fotográfica com Scroll-Snap
A secção de atmosfera do festival recorre a **CSS Scroll Snap** e âncoras para navegar entre slides sem recorrer a bibliotecas de scripts:
```css
.gallery-viewport {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  gap: 16px;
  scroll-marker-group: after;
}

.gallery-slide {
  flex: 0 0 88%;
  scroll-snap-align: center;
}

@media (min-width: 600px) {
  .gallery-slide {
    flex: 0 0 calc(50% - 10px);
  }
}

/* Indicadores de Paginação via Âncoras */
.gallery-slide:target {
  border-color: var(--color-accent-red);
  box-shadow: 0 0 16px rgba(230, 0, 0, 0.4);
}
```

### 5.3 Accordion Dobrável Animado com `<details>` e CSS Grid
A animação de abertura e fecho de `<details>` era tradicionalmente impossível sem scripts devido a `height: auto`. Usando CSS Grid (`grid-template-rows`), atinge-se uma transição fluida a 60 fps:
```css
.accordion-item[open] .accordion-icon {
  transform: rotate(45deg);
  color: var(--color-accent-purple);
}

.accordion-body-grid {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
  opacity: 0;
}

.accordion-item[open] .accordion-body-grid {
  grid-template-rows: 1fr;
  opacity: 1;
}

.accordion-body-content {
  overflow: hidden;
  padding: 0 20px 20px;
}
```

### 5.4 Motor Reativo de Cálculo de Preços (`:has()` + `::after`)
Inspirado na demonstração de seletores avançados das **Semanas 5 a 8**, quando o utilizador seleciona uma opção de bilhete via `<input type="radio">`, a pseudo-classe `:root:has(...)` deteta o estado ativo na árvore DOM e reescreve os totais através de conteúdo gerado:
```css
/* Estado Padrão (Combo Pass €30.00 Ativo) */
#sim-price::after { content: "€30.00"; }
#sim-summary::after { content: "Selecionado: ALL-ACCESS FESTIVAL PASS"; }

/* Estado Reativo A: Bilhete Batalha 808 Selecionado (€10.00) */
:root:has(#pass-battle:checked) {
  #sim-price::after { content: "€10.00"; }
  #sim-summary::after { content: "Selecionado: THE 808 CLASH Competitor Pass"; }
  #sim-savings { display: none; }
  .receipt-row-battle { display: flex; }
  .receipt-row-warp { display: none; }
  .receipt-row-combo { display: none; }
  #receipt-dyn-total::after { content: "€10.00"; }
}

/* Estado Reativo B: Bilhete Concerto DJ Warp Selecionado (€25.00) */
:root:has(#pass-warp:checked) {
  #sim-price::after { content: "€25.00"; }
  #sim-summary::after { content: "Selecionado: DJ WARP Headline Concert Pass"; }
  #sim-savings { display: none; }
  .receipt-row-battle { display: none; }
  .receipt-row-warp { display: flex; }
  .receipt-row-combo { display: none; }
  #receipt-dyn-total::after { content: "€25.00"; }
}
```

---

## TAB 6: Anexos de Código Integralmente Comentado & Referências MDN Web Docs

### 6.1 Anexo A: Esqueleto de Ficheiro com Landmarks Semânticos
```html
<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>DRUMTIKS '26 • Portal do Festival</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <!-- Landmark de Acessibilidade 1: Cabeçalho do Site -->
  <header class="site-header"> ... </header>

  <!-- Landmark de Acessibilidade 2: Conteúdo Principal -->
  <main class="site-main-content">
    <div class="festival-grid-layout">
      <!-- Coluna 1 (Esquerda / Palco Sticky) -->
      <div class="grid-column-primary">
        <article class="hero-card"> ... </article>
        <aside class="venue-info-box"> ... </aside>
      </div>

      <!-- Coluna 2 (Direita / Fluxo Dinâmico) -->
      <div class="grid-column-secondary">
        <section class="program-section"> ... </section>
        <section class="festival-gallery-section"> ... </section>
        <section class="simulator-panel"> ... </section>
        <section class="festival-accordion-section"> ... </section>
      </div>
    </div>
  </main>

  <!-- Landmark de Acessibilidade 3: Rodapé Global -->
  <footer class="site-footer"> ... </footer>
</body>
</html>
```

### 6.2 Anexo B: Matriz de Ligações Oficiais da MDN Web Docs
Para aprofundamento das matérias lecionadas, consulte a documentação oficial nos seguintes tópicos:

1. **Estrutura & Landmarks HTML5:**
   - [HTML Semantic Elements (MDN)](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html)
   - [ARIA Landmark Roles (MDN)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/landmark_role)
   - [HTML `<picture>` Element (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
   - [Responsive Images with srcset and sizes (MDN)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Textual_content/Responsive_images)
   - [HTML `<details>` & `<summary>` (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)

2. **Arquitetura CSS3 & Layout:**
   - [CSS Cascade Layers (`@layer`) (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)
   - [CSS Math Function: `clamp()` (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)
   - [CSS Custom Properties (Variables) (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
   - [CSS Grid Layout (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout)
   - [CSS Flexible Box Layout (Flexbox) (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout)
   - [CSS Position Sticky (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/position#sticky)

3. **Padrões Interativos Modernos Pure CSS:**
   - [CSS Scroll-Driven Animations: `animation-timeline` (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline)
   - [CSS Scroll Snap (`scroll-snap-type`) (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap)
   - [The CSS Relational Pseudo-Class: `:has()` (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/:has)
   - [The CSS URL Fragment Pseudo-Class: `:target` (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/:target)
   - [CSS Variable Fonts Guide (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts/Variable_fonts_guide)
   - [W3C Nu HTML Checker](https://validator.w3.org/nu/)
   - [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)

---

### 6.3 Avaliação & Critérios de Submissão
A avaliação do trabalho incidirá sobre:
- **Conformidade com o Design e Fidelidade aos Tokens (20%):** Cores HEX, pesos de fontes e proporções idênticas ao Figma.
- **Rigor Semântico e Acessibilidade HTML5 (20%):** Utilização correta de landmarks semânticos, atributos `alt`, e ausência de divs redundantes.
- **Eficiência e Arquitetura do CSS (20%):** Utilização de `@layer`, variáveis CSS, equações fluidas `clamp()` e ausência de código duplicado.
- **Responsividade e Progressive Enhancement (20%):** Transição natural entre visualizações de smartphone, tablet e desktop 2 colunas.
- **Interatividade Pure CSS e Inovação (20%):** Funcionamento sem falhas do simulador de preços `:has()`, carrossel de fotos, acordeão articulado e animações de scroll.
