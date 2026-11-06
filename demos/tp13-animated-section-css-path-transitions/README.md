# TP13 • Morfismos de Caminho CSS, Separadores de Secção & Motion Path
> **Faculdade de Belas Artes da Universidade do Porto (FBAUP)**  
> **Unidade Curricular:** Web Design 101 (2026/27)  
> **Tema Curricular:** Festival DRUMTIKS '26 (Alfândega do Porto)  
> **Módulo:** 7. Geometria de Secções, Morfismos de Caminho & CSS Motion Path  
> **Demonstrador Ao Vivo:** [Abrir index.html](index.html) | **Guião HTML Completo:** [Abrir GUIDE.html](GUIDE.html)

---

## 🎯 Objetivo Pedagógico da Demonstração

Construir uma **experiência imersiva de festival de música (DRUMTIKS '26)** demonstrando a transição contínua e animada entre secções através de **dois métodos de corte de caminhos vetoriais CSS** e um **agente viajante em CSS Motion Path** — estritamente em **CSS Puro (Zero JavaScript)**, acelerado por hardware na GPU e com comentários educativos aprofundados.

---

## 📂 Ficheiros no Projeto

```text
demos/tp13-animated-section-css-path-transitions/
├── index.html   # Aplicação web com 4 palcos do festival, consola interativa e inspetor HUD
├── styles.css   # Arquitetura em camadas (@layer) com comentários exaustivos e MDN links
├── GUIDE.html   # Guião pedagógico passo a passo interativo com teoria, diagramas e desafios
└── README.md    # Este documento explicativo do módulo curricular
```

---

## 🔬 As Três Técnicas Centrais Demonstradas

### 1. Invariância de Vértices em `clip-path: polygon(...)`
- Transição fluida de recortes de secção com GPU rendering:
  ```css
  .section-clip-morph {
    clip-path: var(--active-polygon);
    transition: clip-path 0.85s cubic-bezier(0.34, 1.56, 0.64, 1);
    will-change: clip-path;
  }
  ```
- **A Regra de Ouro:** Todas as 4 formas (Onda Sinusoidal, Corte Angular, Arco de Vinil e Espigão 808) partilham rigorosamente **N = 8 vértices**. As formas retilíneas alinham os pontos colinearmente, garantindo interpolação sem cortes bruscos.

### 2. Morfismo SVG Declarativo com CSS `d: path(...)`
- Manipulação direta da geometria de curvas de Bézier cúbicas no CSS:
  ```css
  .svg-path-divider path.morphing-boundary {
    d: path("M 0,0 L 1440,0 L 1440,65 C 1180,140 920,15 680,85 C 440,155 220,15 0,65 Z");
    transition: d 0.85s var(--active-ease);
  }
  ```
- O motor de renderização do browser interpola as tangentes das curvas sem recorrer a bibliotecas externas em JavaScript (como GSAP).

### 3. CSS Motion Path (`offset-path`, `offset-distance` & `offset-rotate`)
- Um elemento vetorial com as baquetas de percussão do DRUMTIKS viaja ao longo da crista da secção:
  ```css
  .drumstick-traveler {
    offset-path: var(--active-motion-path);
    offset-distance: 0%;
    offset-rotate: auto 20deg;
    offset-anchor: 50% 50%;
    transition: offset-path 0.85s var(--active-ease);
  }
  ```
- O valor `offset-rotate: auto` calcula a derivada da curva em cada ponto e orienta a baqueta no ângulo de impacto ideal.

---

## 🗺️ Mapa de Landmarks HTML5 & Acessibilidade

| Elemento | Role ARIA | Propósito Estrutural & Acessibilidade |
| :--- | :--- | :--- |
| `<header class="app-header">` | `banner` | Cabeçalho com identidade DRUMTIKS '26 e seletor de tema. |
| `<nav class="path-studio-deck">` | `navigation` | Mesa de controlo das geometrias, física de temporização e BPM. |
| `<main id="main-content">` | `main` | Área principal com os 4 palcos e separadores animados. |
| `<section id="stage-douro">` | `region` | Palco 1: Sub-Bass Trench com separador e Motion Path. |
| `<section id="stage-vaults">` | `region` | Palco 2: Arcos de Granito com encaixe negativo interbloqueado. |
| `<section id="stage-turntable">` | `region` | Palco 3: Octógono de Turntablism com consola de vinil a 33⅓ RPM. |
| `<section id="stage-lab">` | `region` | Palco 4: Laboratório de Código com matriz de coordenadas. |
| `<aside class="hud-inspector-card">` | `complementary` | Inspetor visual da regra CSS e especificidade ativa em tempo real. |
| `<footer class="app-footer">` | `contentinfo` | Rodapé informativo com referências curriculares e normas W3C. |

---

## ♿ Diretrizes de Acessibilidade (WCAG 2.2)

- Conformidade com o critério **2.3.3 (Animation from Interactions)**.
- Consulta da media query `@media (prefers-reduced-motion: reduce)`:
  - Anula os loops contínuos de patrulha da baqueta.
  - Fixa o viajante no centro seguro da secção.
  - Reduz as transições de caminho a 0.01ms (fade instantâneo), prevenindo tonturas e desconforto vestibular.
