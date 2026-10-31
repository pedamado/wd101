# TP11 • Exercício 3: Animações por Scroll (Scroll-Driven Animations)

## 1. Enquadramento Pedagógico
Este exercício aborda a especificação moderna de **CSS Scroll-Driven Animations**, permitindo controlar o avanço de animações através do deslocamento de scroll (*scroll progress* ou *view progress*), dispensando completamente bibliotecas pesadas de JavaScript como ScrollMagic ou GreenSock ScrollTrigger.

## 2. Abordagens Demonstradas
1. **Versão A (`index.html`) • Modo Scroll Total (`scroll(root)`)**:
   - Cria uma **Barra de Progresso Fixa** no topo da janela.
   - A timeline acompanha o scroll da raiz da página (`animation-timeline: scroll(root)`).
   - O `@keyframes` interpola `scaleX(0)` a `scaleX(1)` ao longo de todo o documento.
2. **Versão B (`versao-b.html`) • Modo Entrada no Viewport com Percentagens (`view()` & `animation-range`)**:
   - Cada cartão do programa ativa a animação apenas quando entra no campo de visão do utilizador (`animation-timeline: view()`).
   - Demonstra a parametrização fina com **percentagens de início e fim**:
     - `entry 0% entry 100%`: Interpolação imediata na travessia da borda inferior.
     - `entry 15% cover 40%`: Revelação progressiva e suave (fade-in, subida e desfoque a zero).
     - `entry 25% cover 65%`: Revelação prolongada até ultrapassar o centro da janela.
   - Inclui régua visual lateral e seletor interativo de predefinições (*presets*) de `animation-range`.

## 3. Ficheiros Incluídos
- `index.html`: Demonstrador da barra de progresso com scroll total.
- `versao-b.html`: Demonstrador de revelação de cartões por viewport com calibração de percentagens.
- `css/styles.css`: Regras da barra de leitura e do layout longo do festival.
- `css/viewport-reveal.css`: Regras da timeline `view()`, `animation-range` e régua de calibração.
- `assets/`: Tipografia, ícones e imagens do festival.
