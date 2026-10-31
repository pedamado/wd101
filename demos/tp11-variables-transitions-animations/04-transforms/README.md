# Módulo Complementar: CSS Transforms (Posição, Tamanho, Rotação & Origem)

## 1. Enquadramento Pedagógico
As transformações no CSS moderno (`transform`) são o alicerce geométrico para microinterações táteis e animações performantes. Diferem de propriedades como `top`, `left`, `width` ou `height` porque **não alteram o fluxo do documento (document reflow)** e são calculadas diretamente pela GPU (Graphical Processing Unit) via matrizes afins.

## 2. Conceitos-Chave
1. **Posição (`translate`, `translateX`, `translateY`, `translate3d`)**: Deslocamento espacial relativo sem alterar as caixas vizinhas.
2. **Tamanho (`scale`, `scaleX`, `scaleY`)**: Fator escalar de dilatação ou contração.
3. **Rotação (`rotate`, `rotateZ`)**: Orientação angular expressa em `deg`, `rad` ou `turn`.
4. **Inclinação (`skew`, `skewX`, `skewY`)**: Distorção oblíqua angular dos eixos ortogonais.
5. **Ponto de Pivot (`transform-origin`)**: Coordenada de ancoragem (centro `50% 50%`, canto superior esquerdo `0% 0%`, base `bottom center`).
6. **Espaço 3D (`perspective`, `transform-style: preserve-3d`)**: Projeção de planos no eixo Z com ponto de fuga realista.

## 3. Referências Oficiais MDN
- [MDN: CSS Transforms Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Transforms)
- [MDN: CSS transform property](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [MDN: CSS transform-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)
- [MDN: CSS perspective](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective)
