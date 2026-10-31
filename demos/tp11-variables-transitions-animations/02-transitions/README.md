# TP11 • Exercício 2: Transições CSS (Carrossel Simples & Versão B: Vinyl Crate Deck)

## 1. Enquadramento Pedagógico
Este módulo explora a manipulação de transições no CSS moderno (`transition-property`, `transition-duration`, `transition-timing-function`, `transition-delay`) através de duas soluções práticas no universo do festival DRUMTIKS:
1. **Versão A (`index.html`)**: Um carrossel de atmosfera com deslizamento horizontal contínuo (*CSS Scroll Snap*) e transições responsivas nos cartões e botões de paginação.
2. **Versão B (`versao-b.html`)**: Uma metáfora táctil de **Caixa de Discos de Vinil (*Vinyl Crate Digging*)**, onde três capas de álbuns fictícias emergem e abrem em leque tridimensional sob o efeito de `:hover`.

## 2. Destaques da Versão B (Vinyl Crate Fan-out)
- **3 Capas de Álbuns Fictícias**: Geradas para o festival (estéticas boom-bap, síntese modular nos cofres da Alfândega e macro-sulcos de vinil).
- **Curvas de Easing Interativas**: Playground com alternador de curvas (`ease`, `ease-out`, `ease-in-out`, `linear` e `cubic-bezier(0.34, 1.56, 0.64, 1)` com efeito de retorno elástico/mola).
- **Abertura em Leque Escalonada**:
  - Disco da Esquerda (`rotate(-16deg)`): `transition-delay: 0.0s`
  - Disco do Centro (`scale(1.08)`): `transition-delay: 0.08s`
  - Disco da Direita (`rotate(+16deg)`): `transition-delay: 0.16s`
- **Extração do Vinil Físico**: Quando o rato foca diretamente num dos álbuns, o disco de vinil preto gira e desliza para fora da manga (`transform: translateX(52%) rotate(135deg)`).

## 3. Ficheiros Incluídos
- `index.html`: Carrossel de destaques com scroll-snap e transições de hover.
- `versao-b.html`: Caixa de vinis com leque 3D e seletor de curvas de easing.
- `css/styles.css`: Folha de estilos para o carrossel.
- `css/crate.css`: Folha de estilos da caixa de vinis e abertura em leque.
- `assets/images/`: Capas fictícias dos 3 álbuns (`album-1-warp-theory.jpg`, `album-2-concrete-pulse.jpg`, `album-3-dust-and-grooves.jpg`) e fotos do festival.
