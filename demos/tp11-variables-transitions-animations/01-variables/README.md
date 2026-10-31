# TP11 • Exercício 1: Variáveis CSS (Custom Properties) & Alternador de Tema

## 1. Enquadramento Pedagógico
Este exercício demonstra a utilização prática e moderna de **Variáveis CSS (`--*`)**, a especificação **`color-scheme: light dark`** e a função nativa **`light-dark()`**, sem recurso a scripts de JavaScript.

## 2. Conceitos-Chave Demonstrados
1. **Declaração Global em `:root`**:
   - Definição de tokens de cor, tipografia fluida (`clamp()`), raios de curvatura e sombras.
   - Aplicação de `color-scheme: light dark` que informa o browser sobre a compatibilidade nativa com ambos os modos de cor.
2. **Função CSS `light-dark()`**:
   - `var(--bg-canvas: light-dark(#f4f4f7, #0a0a0c));` permite definir o par (valor-claro, valor-escuro) numa única instrução limpa e legível.
3. **Alternador de Tema no Menu (`<nav>`)**:
   - Utilização de controlos `<input type="radio">` integrados num `<fieldset>`.
   - Seletor relacional `:root:has(#theme-light:checked) { color-scheme: light; }` e `:root:has(#theme-dark:checked) { color-scheme: dark; }`.
   - Quando o utilizador escolhe "Auto", prevalece a preferência do sistema operativo via `@media (prefers-color-scheme)`.
4. **Transições de Tema Suaves**:
   - `transition: background-color 0.35s ease, color 0.35s ease, border-color 0.35s ease;` para evitar mudanças bruscas de contraste visual.

## 3. Estrutura de Ficheiros
- `index.html`: Marcação semântica com `<header>`, `<nav>`, `<fieldset>`, `<main>`, `<section>`, `<article>`.
- `css/styles.css`: Declarações de variáveis, seletores `:root:has()` e regras de componentes.
- `css/fonts.css`: Declarações `@font-face` com as fontes variáveis locais (Syne, Martian Mono, Inter).
- `assets/`: Tipografia, ícones vetoriais e imagens do festival DRUMTIKS.
