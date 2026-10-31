# Módulo Complementar: CSS Filter Effects (Cor, Desfoque & Composição Gráfica)

## 1. Enquadramento Pedagógico
A especificação **CSS Filter Effects (`filter` e `backdrop-filter`)** capacita o desenvolvedor a realizar operações de pós-processamento gráfico em tempo real diretamente sobre o pipeline de composição do browser.

## 2. Conceitos-Chave
1. **Filtros Ópticos e Espaciais**:
   - `blur(px)`: Desfoque gaussiano suave.
2. **Filtros de Cor e Ajuste Dinâmico**:
   - `brightness(fator)` e `contrast(fator)`: Manipulação de exposição e faixa dinâmica.
   - `grayscale(%)` e `sepia(%)`: Conversões de tom e filtros de atmosfera analógica.
   - `hue-rotate(deg)`: Rotação angular em torno da roda cromática.
   - `invert(%)` e `saturate(fator)`.
3. **Diferença Crítica: `drop-shadow()` versus `box-shadow`**:
   - `box-shadow`: Projeta uma sombra em torno do retângulo exterior da caixa (box model).
   - `drop-shadow()`: Respeita a transparência do canal alfa de imagens PNG e formas vetoriais SVG, projetando sombras fiéis ao contorno real do elemento.
4. **`backdrop-filter`**:
   - Aplica os filtros aos elementos que se encontram por detrás do elemento no eixo Z, permitindo o efeito de vidro fosco (*glassmorphism*).

## 3. Referências Oficiais MDN
- [MDN: CSS Filter Effects Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Filter_effects)
- [MDN: CSS filter property](https://developer.mozilla.org/en-US/docs/Web/CSS/filter)
- [MDN: CSS backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)
- [MDN: CSS drop-shadow()](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow)
