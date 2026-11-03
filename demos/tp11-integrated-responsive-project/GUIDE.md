# Step-by-Step Pedagogical Guide: From Early Prototype to Full Capstone
## Evolution: Early Prototype (Weeks 5–8) &rarr; Full Integrated Capstone (Weeks 9–13)
### Faculdade de Belas Artes da Universidade do Porto (FBAUP) • Web Design (WD101) — 2026/27
**Authors:** Pedro Amado (FBAUP / i2ADS) & Google Gemini (Pro 3 Flash / Pro4 Argon)

---

## 🎯 Pedagogical Progression & Prototype Comparison

| Dimension | Final Project — Early Prototype (Weeks 5–8) | Final Project — Advanced Integrated Capstone (Weeks 9–13) |
| :--- | :--- | :--- |
| **Live Demo** | [Launch Early Prototype](../tp06-responsive/index.html) | [Launch Advanced Capstone](index.html) |
| **Grid Architecture** | Binary jump (1-column on mobile `<960px` to 2-column on desktop `minmax(0, 1.18fr) minmax(0, 1fr)`) | **4-Breakpoint Mobile-First Progressive Enhancement** with named `grid-template-areas` |
| **Gallery System** | Basic 2-column image list | **Asymmetric Dense Masonry** (`grid-auto-flow: dense`) with intentional typographic voids |
| **Micro-Layout** | Static flex rows | **Alternating 1D Flexbox** (Vertical stacked list on mobile &rarr; Wrapping row on desktop) |
| **Theming** | Static dark theme | **Dynamic Theming** (`light-dark()`, `:root:has()`) with 3 states: Auto, Light, Dark |
| **Interactivity** | Simple CSS hover effects | **3D Vinyl Crate Fan-Out** (`perspective: 1000px`, `cubic-bezier` spring easing, vinyl disc slide-out) |
| **Motion** | Standard keyframes | **Scroll-Driven Animations** (`animation-timeline: scroll(root)` and `view()`) |
| **Diagnostics** | Browser DevTools only | **Pure CSS X-Ray Matrix Inspector Overlay** (`:root:has(#xray-toggle:checked)`) |
| **Cascade Control** | Unlayered CSS | Formal **@layer cascade hierarchy** (`reset, tokens, layout, components, interactive, xray`) |

---

## 📋 The 8-Step Architectural Evolution

### Step 1: Establish the 4-Breakpoint Mobile-First Escalation
* **Problem in Early Prototype (Weeks 5–8):** Moving directly from mobile portrait to 960px desktop caused layout distortion on phablets and landscape mobile devices.
* **Solution:** Implement a 4-tier mobile-first progression:
  1. `Base (< 540px)`: Single column natural flow, touch targets &ge; 44px.
  2. `Mobile Landscape / Phablet (>= 540px)`: Dual micro-tracks and wrapping flex items.
  3. `Tablet & Small Laptop (>= 768px)`: Split-column pricing calculator and 4-column masonry.
  4. `Desktop Widescreen (>= 1120px)`: Full 2D CSS Grid with sticky command column.

### Step 2: Implement 2D CSS Grid with Named Template Areas
* **MDN Reference:** [Grid Template Areas](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
* Map regions semantically on desktop screens:
  ```css
  grid-template-areas:
    "stage-headliner stage-schedule"
    "stage-headliner stage-gallery"
    "stage-headliner stage-simulator"
    "stage-headliner stage-faq";
  ```

### Step 3: Build the Asymmetric Masonry Gallery with Editorial Voids
* **MDN Reference:** [Auto-placement in CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout/Auto-placement)
* Use `grid-auto-flow: dense` so smaller items automatically pack into slots left by `span 2` elements.
* Inject intentional empty cells (`gallery-tile--void`) with vertical typography to establish editorial breathing room and visual tension.

### Step 4: Refactor Listings with Alternating 1D Flexbox
* **MDN Reference:** [Flexbox flex-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)
* On mobile: `flex-direction: column; align-items: stretch;`
* On desktop: `flex-direction: row; flex-wrap: wrap; justify-content: space-between;`
* This ensures navigation, ticket cards, and festival schedule rows never cause horizontal scroll clipping.

### Step 5: Integrate Dynamic Theming with `light-dark()` and `:has()`
* **MDN Reference:** [light-dark() Color Function](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark)
* Declare tokens with `light-dark(lightColor, darkColor)` in `:root`.
* Toggle with pure CSS radio inputs:
  ```css
  :root:has(#theme-light:checked) { color-scheme: light; }
  :root:has(#theme-dark:checked)  { color-scheme: dark; }
  ```

### Step 6: Integrate the 3D Vinyl Crate Fan-out into the Hero Showcase
* **MDN Reference:** [CSS Transforms (perspective)](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Transforms)
* Setup `perspective: 1000px` on the crate container.
* Add three album sleeves with `transform-origin: bottom center` and bouncy spring physics `cubic-bezier(0.34, 1.56, 0.64, 1)`.
* On sleeve hover, extrude the vinyl disc: `transform: translateX(55%) rotate(140deg);`.

### Step 7: Add Native Scroll-Driven Animations
* **MDN Reference:** [Scroll-driven animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations)
* Track whole-document scroll with `animation-timeline: scroll(root)` on a fixed 4px progress bar.
* Animate entrance of content sections with `animation-timeline: view()` and `animation-range: entry 10% cover 30%`.

### Step 8: Build the Pure CSS X-Ray Matrix Overlay Inspector
* **MDN Reference:** [:has() relational pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:has)
* Trigger diagnostic outlines across the entire page when the checkbox `#xray-toggle` is checked:
  * Cyan dashed matrix on all CSS Grid containers.
  * Magenta solid frame on all Flexbox containers.
  * Gold badges on editorial voids.

---

## 🛠️ Verification & Testing Protocol
1. Open [index.html](index.html) in Chrome, Firefox, or Safari.
2. Click the **📐 X-Ray** button in the header to inspect all grid tracks and flex boxes live.
3. Test the **Auto / Light / Dark** pills to observe instant theme switching.
4. Hover over the **3D Vinyl Crate** in the left stage to trigger the spring fan-out and disc extraction.
5. Resize your browser window across all widths (320px &rarr; 600px &rarr; 840px &rarr; 1280px) to verify fluid progressive enhancement without horizontal overflow.
