# TP12 • Navegação Swipe Zero-JS & Máquinas de Estado Declarativas
> **Faculdade de Belas Artes da Universidade do Porto (FBAUP)**  
> **Unidade Curricular:** Web Design 101 (2026/27)  
> **Tema Curricular:** Festival DRUMTIKS '26 (Alfândega do Porto)  
> **Módulo:** 6. Seletores Modernos, Pseudo-Classes & Máquinas de Estado Zero-JS  
> **Portal Mestre:** [Abrir index.html](index.html) | **Guião HTML Passo a Passo:** [Abrir GUIDE.html](GUIDE.html)

---

## 🎯 Objetivo Pedagógico da Demonstração

Construir uma **simulação de aplicação web móvel de página única (100dvh)** com navegação horizontal por transição de deslize (*click-to-swipe*), comparando **três técnicas de cálculo de movimento** e uma **variante furtiva de produção** — estritamente em **CSS Puro (Zero JavaScript)** para a mecânica de transição e máquina de estados.

A suíte foi decomposta em **4 laboratórios práticos isolados** para clareza didática, sem sobrecarga de informação, com formatação espaçada para leitura humana e suporte nativo a **Modo Claro / Modo Escuro** e **Diagnóstico Raio-X**.

---

## 📂 Estrutura de Ficheiros da Suíte

```text
demos/tp12-zero-js-swipe-state-machine/
├── index.html              # Portal Mestre da Suíte (Hub com acesso aos 4 laboratórios e guião)
├── 01-calc-offset.html     # Laboratório 1: Deslocamento Matricial com calc()
├── 02-data-attributes.html # Laboratório 2: Mapeamento Semântico com Atributos data-*
├── 03-css-iterator.html    # Laboratório 3: Contador Iterador Moderno W3C sibling-index()
├── 04-stealth-console.html # Variante 4: Modo Furtivo de Produção (Consola DJ + Touch Swipe)
├── GUIDE.html              # Guião pedagógico passo a passo interativo com diagramas e links MDN
├── README.md               # Este documento explicativo da arquitetura
└── css/
    ├── common.css          # Design tokens (Dark/Light), grelha tipográfica, vinil e motor Raio-X
    ├── hub.css             # Estilos do Portal Mestre (index.html)
    ├── demo-01.css         # Regras isoladas e documentadas da Técnica 1
    ├── demo-02.css         # Regras isoladas e documentadas da Técnica 2
    ├── demo-03.css         # Regras isoladas e documentadas da Técnica 3
    └── demo-04.css         # Regras isoladas e documentadas da Variante 4 (Stealth DJ)
```

---

## 🔬 Os Quatro Laboratórios Práticos

### [Demo 01: Deslocamento Matricial com `calc()`](01-calc-offset.html)
- A fita deslizante (`.slider-track`) desloca-se com base numa única fórmula matemática:
  ```css
  transform: translate3d(calc(var(--active-index) * -100%), 0, 0);
  transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
  ```
- O ancestral `#wrapper` atualiza `--active-index` (0, 1, 2, 3) através de `:has(#round-X:checked)`.
- **Ficheiro CSS:** `css/demo-01.css`

### [Demo 02: Direcionamento por Atributos HTML `data-*`](02-data-attributes.html)
- O HTML declara explicitamente `data-page="0"`, `data-round="1"`, `data-offset="0%"`.
- O CSS recorre a seletores de atributo (`[data-page]`, `[data-round]`) para aplicar o movimento sem nomes de classes estáticas, com especificidade previsível `(0, 1, 0)`.
- **Ficheiro CSS:** `css/demo-02.css`

### [Demo 03: Iterador Moderno CSS (`sibling-index()`)](03-css-iterator.html)
- Explora a especificação recente **W3C CSS Values and Units Module Level 5 § 10.3** (`sibling-index()` e `sibling-count()`).
- Cada elemento ou fita calcula a sua posição ordinal dinâmica:
  ```css
  transform: translate3d(calc((sibling-index() - 1) * -100%), 0, 0);
  ```
- Inclui fallback progressivo universal para browsers atuais utilizando a pseudo-classe estrutural `:nth-child(n)` que injeta `--sibling-index`.
- **Ficheiro CSS:** `css/demo-03.css`

### [Demo 04: Modo Furtivo de Produção (Inputs Invisíveis + Consola DJ)](04-stealth-console.html)
- Ocultação acessível dos inputs nativos via classe `.visually-hidden`.
- Controlo através de **Pads MPC iluminados**, **Crossfader com trilho analógico** e **Zonas Táteis de Swipe** nas margens do ecrã (`<label class="swipe-hit-zone">`).
- **Ficheiro CSS:** `css/demo-04.css`

---

## 🛡️ Prevenção de Overflow Horizontal em Desktop

Um dos desafios fundamentais em aplicações móveis *click-to-swipe* é a transição para ecrãs largos (desktop):
- **O Problema:** Se os slides dentro da fita tiverem larguras inferiores a 100% da viewport (por exemplo, `max-width: 900px` diretamente no slide), ao transladar `-100%` da viewport a fita descalibra-se, revelando partes dos slides adjacentes e gerando scroll horizontal indesejado.
- **A Solução Arquitetural:** 
  1. Cada `<article class="battle-stage">` possui estritamente `flex: 0 0 100%; width: 100%; min-width: 100%; max-width: 100%;`.
  2. A restrição de largura máxima é aplicada apenas ao contentor de conteúdo interno: `.stage-card-inner { width: 100%; max-width: 660px; margin: auto; }`.
  3. O `#wrapper` e o `<main>` aplicam `overflow: hidden; contain: paint;`.

---

## 🗺️ Mapa de Landmarks HTML5 & Acessibilidade

| Elemento | Role ARIA | Propósito Estrutural & Acessibilidade |
| :--- | :--- | :--- |
| `<div id="wrapper">` | — | Contentor mestre de `100dvh` com `overflow: hidden; contain: paint;`. |
| `<header class="app-header">` | `banner` | Cabeçalho com identidade DRUMTIKS '26, botão de tema e raio-X. |
| `<main class="battle-main-stage">` | `main` | Área de conteúdo principal onde desliza a fita `.slider-track`. |
| `<article class="battle-stage">` | `article` | Cada um dos 4 palcos/páginas de combate DJ com acessibilidade independente. |
| `<nav class="rounds-nav-bar">` | `navigation` | Barra de separadores acionada via `<label for="...">`. |
| `<section class="dj-console-dock">` | `region` | Consola DJ com Pads iluminados e Crossfader mecânico (Demo 04). |
| `<aside class="demo-formula-banner">` | `complementary` | Inspetor visual da regra CSS e especificidade ativa em tempo real. |
| `<footer class="app-footer">` | `contentinfo` | Rodapé com referências curriculares e hiperligações para as restantes demos. |

---

## 🔗 Referências Oficiais MDN Web Docs & W3C

- [Seletor Relacional `:has()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:has)
- [Pseudo-classe de Formulário `:checked`](https://developer.mozilla.org/en-US/docs/Web/CSS/:checked)
- [Unidades Dinâmicas de Viewport (`100dvh`)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_values_and_units#relative_length_units_based_on_viewport)
- [Função Matemática `calc()`](https://developer.mozilla.org/en-US/docs/Web/CSS/calc)
- [Função W3C `sibling-index()`](https://drafts.csswg.org/css-values-5/#sibling-index)
- [Especificidade CSS (Specificity)](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
- [Combinadores CSS (Descendente, Filho, Irmão Adjacente, Geral)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Combinators)
- [Atributos Globais `data-*`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*)
- [Padrão Acessível de Ocultação `.visually-hidden`](https://developer.mozilla.org/en-US/docs/Web/CSS/clip)
