# 🚀 To Infinity & Beyond! • Para o Infinito e Mais Além!
## What to Learn Next: A Post-WD101 Curricular Roadmap for Communication Designers
### Faculdade de Belas Artes da Universidade do Porto (FBAUP) • Licenciatura em Design de Comunicação
**Pedagogical Direction:** Prof. Pedro Amado (FBAUP / i2ADS)  
**Historical Precedent:** Inspired by the LSI Course Guide [*Para o infinito e mais além!* (2019–2021)](https://lsi.fba.up.pt/2019/to-infinity-beyond/index.html)

---

> *"The foundational semester of Web Design (WD101) is complete. You have conquered semantic HTML5 landmarks, pure CSS cascading architecture, 2D CSS Grid macro-layouts, 1D Flexbox micro-components, design tokens, dynamic `light-dark()` theming, and native scroll-driven animations.*  
>  
> *Now comes the million-euro question every design student asks: **Where do I go from here? What should I learn next to stand out, build real-world products, and amplify my creative vision?**"*

---

## 🗺️ The Fundamental Law: Practice, Practice, Practice

Before choosing a technical specialty, embrace this universal truth of the digital medium: **the web is an empirical craft**. You do not master web design by merely reading documentation or watching video tutorials at 2× speed. You master it by breaking layouts, debugging specificity conflicts in browser DevTools, inspecting live websites, and shipping real projects.

Building **ten small, imperfect, experimental micro-sites** will teach you vastly more than spending months hesitating over one "perfect" portfolio.

As you step beyond WD101, an immediate visual bridge in **interactive animation, real-time 3D, and WebXR/AR** opens up, alongside a fundamental strategic pillar in **design systems, web writing, responsible performance, and sustainable design management**, leading into two distinct technical trajectories—all united on the universal foundation of **Git version control, instant GitHub Pages publishing, and a public developer profile**:

```
                                  WD101 GRADUATION
                        (Semantic HTML5 + Modern Pure CSS)
                                        │
                 ┌──────────────────────┴──────────────────────┐
                 ▼                                             ▼
       IMMEDIATE VISUAL BRIDGE:                      STRATEGIC & SYSTEMIC PILLAR:
      MOTION, 3D & SPATIAL WEB               DESIGN SYSTEMS, ART DIRECTION, PM & ETHICS
  • Adobe Animate & Google Web Designer        • Systematic Design (Atomic Design, Kholmatova)
  • Vector JSON Micro-Motion (LottieFiles)     • Web Writing & Content (Yahoo! Guide, Kubie)
  • Real-Time Interactive 3D (Spline 3D)       • Icon Design & SVG Graphic Systems
  • Immersive WebXR/AR (<model-viewer>, A-Frame)• Digital Project Management (Breandán Knowlton)
                                               • Art Direction in the Age of AI (Andy Clarke, Don Norman)
                                               • Responsible & Sustainable Web (Scott Jehl, Greenwood)
                                               • Professional Practice & Ethics (Monteiro, Hogan)
                                        │
                 ┌──────────────────────┴──────────────────────┐
                 ▼                                             ▼
         TRACK 1: THE CSS MASTER                       TRACK 2: THE CREATIVE CODER
           & CMS SPECIALIST                             & INTERACTIVE DEVELOPER
  (Web Designer / Agency Powerhouse)             (Product Designer / Creative Technologist)
                 │                                             │
  • CSS Frameworks (Tailwind, Bootstrap)          • Creative Coding with p5.js (Processing)
  • Canonical Design Systems (M3, HIG, Carbon)    • Daniel Shiffman / The Coding Train
  • Database-driven CMS (WordPress core DOM)      • Structured Vanilla JS & DOM Fetch
  • Local Server Stacks (LocalWP / MAMP)          • Progressive Web Apps (PWAs)
  • Bespoke Theme & Template Engineering          • Animation & Visual Libraries (GSAP, D3)
  • Pedro Amado's WP Theme Masterclass            • Variable Font Engines (OpenType, Samsa)
                                                  • Native App Wrappers (Capacitor/Electron)
                                                  • Server-Side Peek (PHP & SQL)
                                        │
                                        ▼
             UNIVERSAL CRAFT INFRASTRUCTURE: GIT & GITHUB MASTERY
            (Version Control, Instant Publishing & Living Profile)
      • Mental model: Atomic commits, commit discipline, time-travel checkpoints
      • Fearless experimentation: Safe branching (git checkout -b feature) & merging
      • Instant zero-cost publishing: GitHub Pages (gh-pages), custom CNAME domains
      • Living portfolio: github.com/<username>/<username> profile README & pinned repos
      • Industry collaboration: Pull Requests, code reviews, visual diffs & open source
```

---

# 🎬 IMMEDIATE VISUAL BRIDGE: Interactive Motion, Real-Time 3D & WebXR / AR
*The natural next evolutionary step directly following WD101 animations and transitions: visual timeline authoring, vector micro-interactions, browser-native 3D, and spatial computing.*

---

### 0.1 Visual Animation & Interactive Authoring Tools
In WD101 (Weeks 9–13), you learned how to orchestrate pure CSS transitions, keyframe animations, and native scroll-driven animations (`scroll(root)` and `view()`). While coding motion by hand is crucial for UI performance, visual communication designers also thrive when working with **dedicated visual timelines and authoring environments**.

#### 1. [Adobe Animate](https://www.adobe.com/products/animate.html) (formerly Flash Professional)
Do not write off this tool simply because the legacy Flash browser plugin is gone!
* **The Living Vector Engine:** Adobe Animate remains an industry-standard powerhouse for vector character animation, storyboard animatics, and rich interactive web banners.
* **HTML5 Canvas & CreateJS:** It exports clean, interactive HTML5 `<canvas>` elements driven by JavaScript (via the CreateJS library suite).
* **Interactive Prototyping:** Designers can attach code directly to timeline keyframes to build interactive infographics, web games, and narrative digital comics without manual SVG geometry calculations.

#### 2. [Google Web Designer](https://webdesigner.withgoogle.com/)
Google's free, professional visual authoring environment designed specifically for creating **responsive, interactive HTML5 web content and motion graphics**.
* **Dual GUI & Code Workflow:** Switch seamlessly between a visual multi-track animation timeline (with 3D stage rotation) and a full code editor with live syntax highlighting.
* **Open Web Standards:** Outputs standard HTML5, CSS3, and JavaScript—zero proprietary plugin lock-in.
* **Responsive Motion:** Animate across responsive breakpoints, create custom event triggers (taps, hovers, orientation changes), and bind data dynamically for advertising, landing pages, and interactive digital editorial.

#### 3. [LottieFiles](https://lottiefiles.com/) & Lottie Creator
The undisputed modern standard for app and website micro-interactions (used by Airbnb, Uber, Duolingo, and Apple).
* **Vector Animations as Tiny JSON:** Animated in Adobe After Effects (exported via the **Bodymovin** plugin) or built directly in the browser with **Lottie Creator**.
* **Resolution-Independent & Ultralight:** Because animations are stored as mathematical vector JSON files, they are razor-sharp on 4K/Retina displays and typically 90% smaller than an animated GIF or MP4 video (often just 15–40 KB!).
* **Effortless Web Integration:** Embed them in your HTML with one custom element:
  ```html
  <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
  <lottie-player src="animation.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay hover></lottie-player>
  ```
* **Reactive Motion:** Scrub and trigger animations based on cursor position, scroll progress, click states, or viewport visibility.

---

### 0.2 Real-Time 3D on the Web: Spline 3D
Until recently, creating interactive 3D web experiences required deep knowledge of WebGL shaders and complex code. **[Spline 3D](https://spline.design/)** has completely democratized this for digital designers—it is essentially the *"Figma of 3D"*.

* **Browser-Native 3D Design:** Model, texture, light, and animate 3D scenes collaboratively inside the browser.
* **Interactive Event Triggers:** Add interactive states without code—make objects look at the mouse cursor, float with spring physics, animate on scroll, or react to clicks and drag gestures.
* **Instant Web Embedding:** Export your scene directly as a standard Web Component:
  ```html
  <script type="module" src="https://unpkg.com/@splinetool/viewer/build/spline-viewer.js"></script>
  <spline-viewer url="https://prod.spline.design/your-scene/scene.splinecode"></spline-viewer>
  ```
* **Developer Hand-Off:** Exports to Three.js and React Three Fiber for designers who want to bridge into Track 2 code.

---

### 0.3 Spatial Computing & Immersive Web: WebXR and WebAR
The physical and digital worlds are merging. **WebXR** (the W3C standard combining Virtual Reality and Augmented Reality) and **WebAR** allow users to experience interactive 3D and spatial computing **directly inside standard mobile web browsers without installing native apps**.

#### Key WebXR & WebAR Technologies for Designers:
* **[Google `<model-viewer>`](https://model-viewer.dev/) (The Fastest Path to WebAR):**
  A production-ready Web Component developed by Google. With a single HTML tag, you can render an interactive 3D model with realistic PBR lighting, and provide a native **"View in your space" AR button** on iOS (via Apple AR Quick Look / `.usdz`) and Android (via Google Scene Viewer / `.glb`):
  ```html
  <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js"></script>
  <model-viewer src="chair.glb" ios-src="chair.usdz" alt="3D Model" ar auto-rotate camera-controls></model-viewer>
  ```
* **[A-Frame](https://aframe.io/):**
  An open-source WebXR framework created by Mozilla. It allows you to build complete virtual reality and augmented reality scenes using declarative HTML tags:
  ```html
  <a-scene>
    <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
    <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
    <a-sky color="#ECECEC"></a-sky>
  </a-scene>
  ```
* **[Three.js](https://threejs.org/):**
  The foundational WebGL and WebXR JavaScript library that powers Spline, A-Frame, and almost every high-end interactive 3D site on the web.
* **WebAR Marker & Surface Tracking ([MindAR](https://hiukim.github.io/mind-ar-js-doc/), [AR.js](https://ar-js-org.github.io/AR.js-Docs/), [8th Wall](https://www.8thwall.com/)):**
  Brings communication design into physical space: point a smartphone camera at an exhibition poster, book cover, or vinyl record sleeve to trigger real-time 3D animations, holographic typography, and interactive video.

---

# 🎨 TRACK 1: The HTML + CSS Master & CMS Specialist
*For designers who want to dominate website creation, agency workflows, client publishing systems, and production design systems.*

### 1.1 Harnessing the Power of CSS Libraries & Frameworks
In WD101, you learned how CSS works under the hood: the cascade, selector specificity, box-sizing, and `@layer`. In commercial agency practice, teams often leverage **CSS libraries and design token engines** to accelerate production and enforce team consistency.

The utility-first paradigm pioneered by **Tailwind CSS** has transformed modern web development. Instead of writing separate CSS files with bespoke class names, you compose interfaces directly in your HTML using atomic utility classes (`flex`, `grid-cols-3`, `gap-6`, `p-8`, `bg-neutral-900`, `hover:scale-105`).

> [!NOTE]
> **The Cyclical Nature of CSS Frameworks:**  
> CSS libraries experience shifting semestral hype cycles. A library that dominates Twitter/X today may be superseded tomorrow. However, learning *how* design systems tokenize spacing, typography, and color scales gives you transferable superpowers.

#### Top 5 Most Popular & Influential CSS Libraries Today

| # | Library / Framework | Paradigm | Why Designers Should Know It | Ideal Use Case |
|---|---------------------|----------|------------------------------|----------------|
| **1** | **[Tailwind CSS](https://tailwindcss.com/)** | Utility-First (JIT Engine) | The reigning industry titan. Generates zero unused CSS via just-in-time compilation; enforces strict design token scales. | Modern web applications, Next.js / Astro marketing sites, agency design systems. |
| **2** | **[Bootstrap 5](https://getbootstrap.com/)** | Prebuilt Component System | The enduring giant of the web. Fully dropped jQuery for modern vanilla JS; clean Flexbox/Grid grid system and battle-tested accessible UI components. | Fast client prototypes, enterprise admin portals, dashboards, content-heavy portals. |
| **3** | **[DaisyUI](https://daisyui.com/)** | Semantic Tailwind Extension | Bridges Tailwind utilities with semantic class names (`btn`, `card`, `modal`, `navbar`). Saves hundreds of class strings while retaining Tailwind flexibility. | Rapid prototyping with Tailwind without markup clutter. |
| **4** | **[Open Props](https://open-props.style/)** | Native CSS Custom Properties | Zero build step! Provides hundreds of normalized, pre-engineered CSS variables (fluid typography, spring easings, shadows, aspect ratios) directly in pure CSS. | Pure CSS enthusiasts who want ready-to-use modern design tokens without Node.js or bundlers. |
| **5** | **[UnoCSS](https://unocss.dev/) / [Panda CSS](https://panda-css.com/)** | Zero-Runtime / Atomic Engine | The bleeding edge of styling engines: instant on-demand atomic compilation with type-safe design tokens and CSS-in-JS ergonomics without runtime performance penalty. | High-performance design systems and modern TypeScript applications. |

---

### 1.2 The Mandatory Canonical Design Systems & Platform Guidelines
When learning UI and CSS libraries, **studying official design systems and platform Human Interface Guidelines is non-negotiable**.

A CSS framework gives you syntax, but it does **not** teach you *why* an interface behaves, scales, and communicates effectively. The world's top digital product designers master the **Canonical Trifecta** of design systems:

#### 1. [Google Material Design (Material 3 / M3)](https://m3.material.io/)
Google's design system powers Android, ChromeOS, and hundreds of web applications.
* **Material You & Dynamic Color:** Learns how color palettes are generated dynamically from a single seed color (or user wallpaper) using mathematical tonal palettes that guarantee WCAG 2.2 contrast compliance.
* **Token Architecture:** Material 3 formalizes the 3-tier token hierarchy: *Reference tokens* (`ref.palette.primary40`) → *System tokens* (`sys.color.primary`) → *Component tokens* (`comp.button.container.color`).
* **Tonal Elevation:** Replaces outdated, harsh black drop shadows with tinted surface color overlays to represent physical z-index elevation.
* **Production Web Components:** Accessible, ready-to-use custom elements ([Material Web](https://github.com/material-components/material-web)).

#### 2. [Apple Human Interface Guidelines (HIG — iOS / iPadOS / macOS)](https://developer.apple.com/design/human-interface-guidelines/)
The definitive standard for mobile touch ergonomics, tactile feedback, and sensory elegance.
* **Core Principles (Clarity, Deference, Depth):** Interface controls step back so the user's content remains hero.
* **Touch Ergonomics & Safe Areas:** Strict adherence to 44×44 pt minimum touch targets, viewport safe area insets (`env(safe-area-inset-top)` for notches/Dynamic Island), and thumb-zone bottom navigation bars.
* **Dynamic Type & Typography:** Accessible font scaling based on user system preferences (`SF Pro` and `New York`).
* **Fluid Physics & Spring Motion:** Easing curves modeled on real physical springs, swipe-back gesture stacks, and tactile haptic feedback.

#### 3. [IBM Carbon Design System](https://carbondesignsystem.com/)
The undisputed open-source benchmark for complex enterprise software, developer tools, and data-dense web dashboards.
* **The 2x Grid System:** A rigorous mathematical spatial mini-unit (8px / 16px) governing all margins, paddings, gutters, and line-heights, creating flawless visual harmony.
* **Radical WCAG 2.2 AAA Accessibility:** Every component includes exhaustive keyboard focus navigation patterns, screen reader landmarks, and high-contrast color pairings.
* **Data Visualization Palettes (Carbon Charts):** Industry-standard categorical, sequential, and diverging color systems engineered specifically for complex analytical charts and dashboards.
* **Multi-Framework Living Code:** Fully implemented in Web Components, Vanilla JS, React, Svelte, and Vue.

#### 📊 The Design Systems Comparative Matrix

| Design System | Creator / Environment | Primary Strength | Spatial & Grid System | Color & Theming Strategy |
|:---|:---|:---|:---|:---|
| **[Material Design 3](https://m3.material.io/)** | Google (Android & Web) | Dynamic personal theming & mobile touch | 8dp grid with 4dp micro-increments | Algorithmic tonal palettes; dynamic wallpaper extraction |
| **[Apple HIG](https://developer.apple.com/design/human-interface-guidelines/)** | Apple (iOS, iPadOS, macOS) | Touch ergonomics, fluid physics & typography | 8pt base with 44pt touch target floor | Semantic system colors (adaptive light/dark vibrancy) |
| **[IBM Carbon](https://carbondesignsystem.com/)** | IBM (Enterprise & Cloud) | Radical accessibility & data visualization | Strict mathematical 2x Grid (8px / 16px) | Token-driven color families; specialized chart palettes |

---

### 1.2.1 The Laws of UX, Cognitive Heuristics & Interface Patterns
*Moving from subjective aesthetics to empirical cognitive ergonomics: how human psychology, Gestalt visual perception, and motor limits govern effective web interfaces.*

A design system gives you tokens, components, and layout grids; however, **understanding *why* human beings perceive, evaluate, and navigate an interface requires studying the canonical Laws of UX**.

Rooted in research from the **Interaction Design Foundation (IxDF)**, cognitive psychology, Gestalt perceptual science, and human factors engineering (ergonomics), these laws are organized into **three progressive tiers of implementation complexity for web designers**:

```
                       THE TRIAD OF HUMAN-INTERFACE INTERACTION
                                          │
            ┌─────────────────────────────┼─────────────────────────────┐
            ▼                             ▼                             ▼
   THE PERCEPTUAL SYSTEM         THE COGNITIVE SYSTEM         THE MOTOR / TEMPORAL SYSTEM
       (Gestalt / Eye)             (Memory / Mind)                (Ergonomics / Body)
 • Proximity, Similarity,      • Hick's Law, Miller's Law,    • Fitts's Law (touch targets)
   Common Region, Closure        Peak-End Rule, Zeigarnik,    • Steering Law (tunnel navigation)
 • Visual hierarchy & layout     Occam's Razor, Parallels     • Doherty Threshold (< 400ms flow)
            │                             │                             │
            └─────────────────────────────┼─────────────────────────────┘
                                          ▼
                3-TIER WEB DESIGN IMPLEMENTATION COMPLEXITY MODEL
   🟢 LEVEL 1: FOUNDATION   — Pure semantic HTML5 + CSS Grid/Flexbox (zero JS required)
   🟡 LEVEL 2: INTERMEDIATE — Progressive disclosure, multi-state UI, faceted filters
   🔴 LEVEL 3: ADVANCED     — Sub-400ms latency, optimistic UI, state sync & ethics
```

#### 🟢 Foundation Tier (Core Visual Hierarchy & Physical Ergonomics)
Implemented directly in semantic HTML5 markup and clean CSS layout (Box Model, Flexbox, Grid, design tokens):
* **Fitts’s Law:** Target acquisition time depends on target size and distance. (*Implement 44–48px minimum touch targets, sticky bottom navigation bars, and thumb-zone actions on mobile; WCAG 2.5.8*).
* **Law of Proximity:** Elements placed close together are perceived as belonging together. (*Use CSS `gap` and structured vertical margins to cluster form labels with inputs and metadata with headings*).
* **Law of Similarity:** Elements sharing color, shape, or typography are perceived as having a shared function. (*Establish consistent design tokens for primary buttons, link colors, and status badges*).
* **Law of Common Region:** Elements enclosed within an explicit visual boundary are perceived as a cohesive group. (*Containerize related content using card surfaces, `<fieldset>` blocks, and modal borders*).
* **Jakob’s Law:** Users spend most of their time on *other* sites. (*Follow standard conventions: top-left logo home link, top-right cart/profile, familiar search bar, and standard form controls*).
* **Aesthetic-Usability Effect:** Users perceive beautiful, polished designs as more usable and trustworthy. (*Craft harmonic typographic scales, balanced whitespace, and accessible `light-dark()` palettes*).
* **Occam’s Razor:** The simplest design with the fewest assumptions and elements is best. (*Remove decorative clutter, limit views to one primary CTA, and prune superfluous form fields*).
* **Miller’s Law:** Working memory holds 7 ± 2 discrete chunks. (*Format credit cards and phone numbers into digestible chunks, and restrict top navigation to 5–7 primary categories*).
* **Law of Symmetry & Order:** The visual brain seeks balance and stability. (*Align layout blocks to consistent columns; avoid center-aligning multi-line body copy*).
* **Law of Closure:** The brain completes incomplete visual shapes. (*Use horizontal overflow cards peeking past the mobile viewport edge to communicate scrollability without explicit arrows*).

#### 🟡 Intermediate Tier (Information Architecture, Progressive Flow & States)
Governs progressive disclosure, multi-step workflows, and responsive state coordination:
* **Hick’s Law:** Decision time increases logarithmically with the number and complexity of choices. (*Break massive workflows into stepped wizards, collapse secondary options in `<details>`, and highlight recommended pricing tiers*).
* **Von Restorff Effect (Isolation Effect):** An item that visually differs from its surroundings is remembered best. (*Elevate primary CTA buttons with high-contrast fills while keeping secondary actions in ghost styling*).
* **Serial Position Effect:** Primacy (first) and Recency (last) items are remembered best; middle items are forgotten. (*Anchor key links at the extremes of navigation bars and hero/footer sections*).
* **Postel’s Law (Robustness Principle):** Be liberal in what you accept, conservative in what you send. (*Accept flexible phone and zip code formats and sanitize them automatically on input*).
* **Law of Uniform Connectedness:** Elements linked by lines, arrows, or frames are perceived as more strongly unified than by proximity alone. (*Connect checkout steps with progress lines and connect active tabs seamlessly to content panels*).
* **Law of Continuity:** The eye follows smooth, continuous visual pathways. (*Align content along unbroken vertical margin lines; design for F-pattern and Z-pattern scanning*).
* **Law of Prägnanz:** Complex reality is simplified into elementary shapes. (*Use clear, unambiguous geometric SVG iconography for core utilities*).
* **Steering Law (Accot-Zhai):** Time to navigate a constrained tunnel depends on path length divided by width. (*Design mega-menus with triangular safe hover paths or dismissal delays to prevent accidental collapse*).
* **Peak–End Rule:** Experiences are judged by their emotional peak and conclusion. (*Celebrate completed orders with celebratory confirmation screens and craft empathetic, helpful 404 pages*).
* **Goal-Gradient Effect:** Motivation accelerates as users get closer to the finish line. (*Show endowed progress in onboarding checklists and clear progress bars in multi-step checkouts*).

#### 🔴 Advanced Tier (Latency, Systems Architecture, State & Behavioral Ethics)
Requires high-performance engineering, asynchronous data flow, and ethical safeguards:
* **Doherty Threshold:** Productivity soars when system response time drops under 400ms. (*Implement optimistic UI updates, replace blocking spinners with shimmering skeleton wireframes, and keep Interaction to Next Paint (INP) under 200ms*).
* **Tesler’s Law (Conservation of Complexity):** Inherent complexity cannot be destroyed—either the system absorbs it or the user suffers it. (*Auto-detect payment card types, auto-fill address from postal codes, and adapt automatically to system dark mode*).
* **Zeigarnik Effect:** Incomplete tasks linger in human memory as cognitive tension. (*Auto-save drafts to `localStorage`, display cart badge counters, and offer seamless task resumption*).
* **Parkinson’s Law:** Tasks expand to fill available time. (*Provide bounded session reservations for high-demand ticket checkouts, but never use deceptive reset countdown timers*).
* **Pareto Principle (80/20 Rule):** 80% of interactions stem from 20% of features. (*Prioritize the top 20% most-used actions in top-level navigation; prune bloat*).
* **Labor Illusion:** Users value results more when they observe the system working. (*Display animated step-by-step search aggregations and streaming text tokens during complex computations*).
* **Weber-Fechner Law (Just Noticeable Difference):** Perceptual discrimination scales proportionally with initial intensity. (*Use modular typographic scales (`clamp()`) and uniform lightness OKLCH color spaces for subtle hover/pressed states*).
* **Law of Common Fate:** Elements moving simultaneously in the same direction are perceived as a unit. (*Coordinate off-canvas drawer slides with canvas displacement; respect `prefers-reduced-motion`*).
* **Choice Overload Effect:** Massive choice catalogs paralyze users. (*Curate 'Top 3' recommendations and structure dropdowns with `<optgroup>` categories*).
* **The Ethical Imperative (Anti-Deceptive Design):** Reject dark patterns. (*Ensure equal effort for cancellation as signup, eliminate confirmshaming, ensure transparent pricing, and never pre-tick consent checkboxes*).

> 📖 **Deep Dive Reference Manual:** For the complete 30-law compendium featuring mathematical formulas, concrete HTML5/CSS code implementations, and full WCAG 2.2 cross-references, see the dedicated companion guide:  
> 👉 [**`UX-LAWS-AND-PATTERNS.md`**](UX-LAWS-AND-PATTERNS.md)

---

### 1.3 Database-Driven CMS: Mastering WordPress
Static HTML files are wonderful for small portfolios, but the real commercial web is **dynamic and database-driven**.

**WordPress** powers over **43% of all websites on the internet** (and over 62% of CMS-based sites). It is the undisputed industry standard for digital publishing, design studio portfolios, cultural institution portals, and independent commerce (WooCommerce).

#### What a Designer Must Understand About a CMS:
1. **Separation of Content and Presentation:** Content is stored in a relational database (posts, pages, custom post types, categories, tags, custom fields), while HTML/CSS templates control how that content is displayed.
2. **Inspecting Core DOM Landmarks & Classes:** WordPress automatically injects contextual CSS classes into the `<body>` tag (e.g. `.page-id-42`, `.single-post`, `.logged-in`, `.category-editorial`). Learning to target these classes with your CSS allows you to customize layouts without touching PHP code.
3. **Block Architecture:** Understanding how the block editor (Gutenberg) outputs semantic markup (`.wp-block-columns`, `.wp-block-group`, `.wp-block-image`) and how to style them with your own CSS rules.

---

### 1.4 Local Server Environments: Moving Beyond Live Server
VS Code's "Live Server" extension is fantastic for static HTML, CSS, and client-side JavaScript. **However, Live Server cannot execute server-side PHP or query MySQL databases.**

To work with WordPress, Craft CMS, or PHP backends, you must run a **local web server stack** directly on your computer:
* **[LocalWP](https://localwp.com/) (Recommended for Designers):** The absolute gold standard for local WordPress development. Free, elegant UI, one-click WordPress install, automatic local domain names (`mysite.local`), built-in SSL certificates, and one-click database management.
* **[MAMP](https://www.mamp.info/) (macOS & Windows):** The classic stack bundling **M**acintosh/Windows, **A**pache/Nginx, **M**ySQL, and **P**HP.
* **[XAMPP](https://www.apachefriends.org/):** The cross-platform open-source alternative.

> [!TIP]
> **You Don't Need to Be a PHP or Database Guru to Start!**  
> Do not be intimidated by backend jargon. At this stage, your goal is simply to learn how to install, boot, configure, and manage local server instances on your laptop. Developing locally is 100× faster, safer, and more reliable than editing files on a live server over slow FTP.

---

### 1.5 Creating Custom WordPress Themes & Templates: The Ultimate Superpower
The transition from a "static page coder" to a **super-powered web designer** happens the moment you learn to convert your own bespoke HTML5 and CSS into a custom WordPress theme.

Instead of being trapped inside restrictive commercial themes or visual site-builders, you control every single HTML tag, CSS rule, and responsive breakpoint.

#### The Anatomy of a Custom Theme:
* `style.css`: Theme metadata header and core stylesheet.
* `index.php`: The master fallback template.
* `header.php` & `footer.php`: Reusable modular HTML landmarks (`<header>`, `<nav>`, `<footer>`).
* `single.php`: Editorial post layout.
* `page.php`: Static page layout.
* `functions.php`: Theme feature enqueuing, custom navigation menus, and post thumbnail support.
* **The Loop:** The simple PHP engine that asks the database: *"Do we have posts? While we have posts, print the title, date, excerpt, and content."*

#### 📺 The Canonical Video Series:
* **Prof. Pedro Amado's Masterclass Series:**  
  [**HTML & CSS to WordPress Theme Tutorial Playlist**](https://www.youtube.com/watch?v=rqcPkZL6fQk)  
  *Follow this step-by-step video guide to take a hand-crafted HTML/CSS template and turn it into a dynamic, production-ready WordPress theme.*

---

# 💻 TRACK 2: The Programmer, Creative Coder & Interactive App Developer
*For designers who want to create computational art, kinetic typography, dynamic data visualizations, generative identities, and native installable applications.*

---

### 2.1 Creative Coding with p5.js: The Designer's Gateway to Code
If you want to learn programming, **do not start with abstract console arithmetic**. Start with visual, sensory, tangible feedback!

**[p5.js](https://p5js.org/)** is the JavaScript incarnation of **Processing**. It was created specifically **by designers and artists, for designers and artists** (John Maeda, Casey Reas, Ben Fry, Lauren McCarthy). 

#### Why p5.js is the Ultimate "Gateway Drug":
* **Immediate Visual Joy:** With just two core functions—`setup()` (run once) and `draw()` (loops 60 times per second)—you can draw shapes, animate vectors, and respond to mouse/touch gestures in under five lines of code.
* **Computational Power:** It effortlessly handles image manipulation, sound synthesis, algorithmic trigonometry, camera/video feeds, physics simulations, and machine learning (via [ml5.js](https://ml5js.org/)).
* **Web Native:** It renders directly into an HTML5 `<canvas>`, making it seamless to embed inside your web design portfolios.

#### 🚂 Daniel Shiffman & The Coding Train:
There is no better teacher on earth for creative coding than **Daniel Shiffman**. His infectious enthusiasm, pedagogical clarity, and playful approach turn complex mathematical concepts into pure creative fun.

* **Coding Train Website:** [thecodingtrain.com](https://thecodingtrain.com/)
* **YouTube Channel:** [The Coding Train on YouTube](https://www.youtube.com/thecodingtrain)
* **Foundational Course (Start Here!):**  
  [**Code! Programming with p5.js for Beginners (YouTube Playlist)**](https://www.youtube.com/watch?v=HerCR8bw_GE&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
* **Advanced Algorithmic Thinking:**  
  [**The Nature of Code**](https://natureofcode.com/) *(Vectors, forces, particle systems, steering behaviors, physics engines, genetic algorithms, and neural networks).*

---

### 2.2 Structured Vanilla JavaScript & Dynamic Web Applications
While p5.js solves roughly **75% of a designer's creative and experimental needs**, real-world digital products require you to manipulate the Document Object Model (DOM), handle user form input, manage application state, and load dynamic data.

Once you understand variables, loops, conditionals, and functions in p5.js, you should learn **structured vanilla JavaScript** for the web.

#### Recommended Resource: Brad Traversy (Traversy Media)
* **[Traversy Media on YouTube](https://www.youtube.com/@TraversyMedia)**
* Brad Traversy provides the cleanest, most pragmatic, fluff-free tutorials on modern JavaScript (ES6+, DOM manipulation, asynchronous JavaScript, Fetch API, and project-based tutorials).

#### The Breakthrough: Moving from Static Pages to Dynamic Data-Driven Apps
The turning point in your journey as a developer is learning how to fetch external data asynchronously without reloading the page:
1. **The Fetch API:** Calling `fetch('https://api.example.com/data.json')` to retrieve remote data.
2. **Parsing JSON:** Converting raw strings into JavaScript arrays and objects.
3. **Array Methods:** Using `.map()`, `.filter()`, `.reduce()`, and `.sort()` to slice, transform, and search content in real time.
4. **Dynamic DOM Injection:** Creating HTML elements on the fly and appending them to your layout.

#### Free & Lightweight Cloud Backends (BaaS) for Custom CMSs:
You don't need a heavy server to build dynamic web applications. You can use these client-friendly services as your database:
* **Google Sheets as a CMS:** Turn a collaborative Google Sheet into a live JSON API using simple endpoints or tools like Sheety. Perfect for updating event listings, menus, and client directories without writing an admin dashboard!
* **[Google Firebase / Cloud Firestore](https://firebase.google.com/):** Realtime NoSQL cloud database with authentication, storage, and serverless hosting.
* **[Supabase](https://supabase.com/):** The open-source Firebase alternative based on PostgreSQL. Instant REST and GraphQL APIs with real-time web socket subscriptions.

---

### 2.3 Progressive Web Apps (PWAs): Making Web Apps Feel Native
JavaScript and modern browser APIs allow you to build web applications that can be installed directly onto iPhones, Android phones, iPads, MacBooks, and Windows laptops—**behaving identically to native apps**.

#### Key Pillars of a PWA:
1. **Web App Manifest (`manifest.json`):** Defines the app name, launcher icons, theme colors, splash screen, and display mode (`"display": "standalone"` hides the browser URL bar!).
2. **Service Workers:** Background JavaScript worker scripts that intercept network requests, cache CSS/HTML/JS assets, and enable **complete offline operation**.
3. **Hardware & OS Integration:** Access to web push notifications, device orientation/gyroscope, camera, geolocation, and clipboard.
4. **Zero App-Store Friction:** Users install your app directly from the browser with a single tap, bypassing App Store review delays and fees.

---

### 2.4 The JavaScript Library Ecosystem: Supercharging Your Creativity
Libraries allow you to stand on the shoulders of giants. Rather than reinventing complex mathematical algorithms or rendering engines from scratch, you import specialized libraries to achieve extraordinary visual results.

#### A Historical Nod: The Legend of jQuery & jQuery Mobile
In the late 2000s and early 2010s, **jQuery** revolutionized the web. It smoothed over nightmare browser incompatibilities, introduced elegant DOM querying (`$('#element')`), and democratized AJAX. **jQuery Mobile** pioneered unified touch interfaces for the earliest smartphones. Today, modern browsers have adopted jQuery's best ideas into native JavaScript (`document.querySelector()`, `fetch()`, `classList`). While you won't build new apps with jQuery today, understanding its legacy gives you profound respect for the modern living standard.

#### Top 5 Most Popular & Essential General JS Libraries/Frameworks of All Time & Today

| # | Library / Framework | Paradigm | Why It Matters for Designers |
|---|---------------------|----------|------------------------------|
| **1** | **[React](https://react.dev/)** | Component-Based UI Engine | The dominant industry standard in digital product design (Figma plugins, Airbnb, Meta). Teaches you to think in modular, state-driven interface components. |
| **2** | **[Vue.js](https://vuejs.org/)** | Progressive Reactive Framework | The most designer-friendly framework. Separates `<template>`, `<script>`, and `<style>` naturally within single files. Extremely gentle learning curve. |
| **3** | **[Alpine.js](https://alpinejs.dev/) / [HTMX](https://htmx.org/)** | HTML-First Reactive Attributes | The anti-bloat modern rebellion! Add interactive drop-downs, tabs, modals, and AJAX swaps directly in your HTML tags without giant build steps. |
| **4** | **[jQuery](https://jquery.com/)** | Classic DOM Utility | Still running on millions of websites and WordPress core. Essential for maintaining and customizing legacy client projects. |
| **5** | **[Lodash](https://lodash.com/) / [date-fns](https://date-fns.org/)** | Functional Data Utilities | Indispensable toolkits for manipulating complex JSON arrays, debouncing scroll/resize events, and formatting multi-language dates. |

#### Specialized Creative, Motion & Typographic Powerhouse Libraries

```
                                  CREATIVE CODING TOOLKIT
                                             │
             ┌───────────────────┬───────────┴───────────┬───────────────────┐
             ▼                   ▼                       ▼                   ▼
      VECTOR GRAPHICS      DATA VISUALIZATION     TIMELINE ANIMATION    DYNAMIC TYPOGRAPHY
        (Paper.js)              (D3.js)              (GSAP / Anime)      (OpenType / Samsa)
             │                   │                       │                   │
      Bézier curves,      Data-driven charts,     Silky 60fps timelines, Glyph Bézier parsing,
      path booleans,      geographic maps, SVG    scroll triggers, SVG   variable font axes
      vector geometry     scales & projections    morphing & physics     real-time animation
```

* **[Paper.js](http://paperjs.org/):** Vector Graphics Scripting. The canvas vector engine. Unrivaled for manipulating Bézier curves, path intersections, smoothing, segment handles, and mathematical vector geometry.
* **[D3.js](https://d3js.org/) (Data-Driven Documents):** The undisputed world standard for interactive data visualization and information design. Binds arbitrary data to the DOM/SVG, offering scales, geographic projections, Voronoi diagrams, and hierarchical trees.
* **[GSAP (GreenSock Animation Platform)](https://gsap.com/):** The gold standard of web animation. Silky smooth 60fps timeline choreography, SVG path morphing, split-text typography animations, and the legendary **ScrollTrigger** plugin.
* **[Anime.js](https://animejs.com/):** Lightweight and elegant JavaScript animation engine. Super-intuitive API for animating CSS properties, SVG paths, DOM attributes, and JS objects.
* **[OpenType.js](https://opentype.js.org/):** A true typography nerd's dream. Allows you to open, parse, inspect, and manipulate OpenType, TrueType, and WOFF fonts directly in the browser. Extract glyph outlines as Bézier vector paths, read kerning tables, and generate generative typography!
* **[Samsa / samsa-core.js](https://github.com/Lorp/samsa):** High-speed Variable Font inspector and rendering library. Gives you direct programmatic control over variable font axes (weight, width, slant, optical size, and custom designer axes) in real-time.

---

### 2.5 Native Desktop & Mobile Application Wrappers
Why remain confined inside the browser tab? Modern web technologies allow you to package your HTML, CSS, and JavaScript into **fully standalone, installable desktop and mobile applications**.

* **[Capacitor](https://capacitorjs.com/) (by Ionic):** The modern, high-performance successor to Apache Cordova / PhoneGap. Packages your web app into native iOS (Xcode) and Android (Android Studio) projects with complete access to native camera, geolocation, biometric FaceID, haptics, and push notifications.
* **[Electron](https://www.electronjs.org/):** The engine that powers **Figma, VS Code, Slack, Discord, and Spotify**. Bundles Chromium and Node.js into a native macOS, Windows, and Linux executable. Grants unprecedented access to the local filesystem, system tray, native menus, and multi-window management.
* **[Tauri](https://tauri.app/):** The cutting-edge, lightweight alternative to Electron. Uses the operating system's native webview and a blazing-fast Rust backend, resulting in tiny binary files (<5 MB vs Electron's 100+ MB) with virtually zero memory bloat.

---

### 2.6 A Peek Behind the Server Curtain: Backend Coding with PHP & SQL
In modern web development, much of the server workload can be abstracted with JavaScript (Node.js, Express, serverless edge functions) or BaaS (Firebase, Supabase).

However, learning a foundational slice of **PHP and SQL** is mighty fun, enlightening, and deeply empowering:
* **Demystifying HTTP & The Web Server:** Understand what actually happens when a browser sends a `GET` or `POST` request, how session cookies authenticate users, and how servers render dynamic HTML before sending it across the wire.
* **Relational Databases with SQL:** Writing clean queries (`SELECT title, date FROM projects WHERE category = 'editorial' ORDER BY date DESC;`) demystifies how relational data tables connect through primary and foreign keys.
* **Connecting the Dots:** Learning PHP and SQL closes the loop between **Track 1** (WordPress themes and templates) and **Track 2** (full-stack application design).

---

# 🌿 MODULE 3: Systematic Craft, Art Direction, Web Writing & Project Stewardship
*The indispensable intellectual and ethical foundation for all digital designers—moving beyond raw syntax into systematic thinking, icon design, web art direction, digital project management, performance ethics, ecological impact, and design leadership in the Age of AI.*

---

### 3.1 Design Systems & Modular UI Architecture
Great digital design is no longer about isolated mockups or static pages; it is about building **living, scalable design systems**. Whether working in an agency, a startup, or an international cultural institution, you must master the architecture of modular design.

#### Essential Reading from the FBAUP Collection:
* **[Atomic Design](Atomic%20Design.pdf) — Brad Frost (2016)**  
  *Core Concept:* Designing systems from the micro to the macro: **Atoms** (color tokens, font styles, raw buttons) → **Molecules** (search input + button) → **Organisms** (navigation bars, product cards, audio scrubber decks) → **Templates** (page skeletons) → **Pages** (real instances populated with real editorial copy).
* **[Design Systems: A Practical Guide to Creating Design Languages for Digital Products](Design%20Systems%20(Smashing%20eBooks)%20--%20Kholmatova,%20Alla.mobi) — Alla Kholmatova (Smashing Magazine, 2017)**  
  *Core Concept:* The vital distinction between **functional patterns** (reusable code components: inputs, modals, tabs) and **perceptual patterns** (brand tone, typography, iconography, spatial pacing, color harmony). Teaches how to cultivate a shared design language across multidisciplinary teams.
* **[Design Systems Handbook](Design%20Systems%20Handbook%20--%20Marco%20Suarez,%20Jina%20Anne,%20Katie%20Sylor-Miller,%20Diana%20Mounter.pdf) — Marco Suarez, Jina Anne, Katie Sylor-Miller, Diana Mounter (DesignBetter.co / InVision, 2019)**  
  *Core Concept:* Practical implementation and organizational governance: how to establish design token pipelines, manage version control between Figma and CSS (`tokens.css`), conduct component audits, and maintain adoption across engineering and design departments.

---

### 3.2 Writing for the Web, Interaction Design & Content Strategy
*"Interface design is verbal design."* Over 90% of web communication consists of text. If you cannot write clear, structured, and accessible prose, your layouts will fail—no matter how beautiful your CSS Grid is.

#### Essential Reading from the FBAUP Collection:
* **[The Yahoo! Style Guide: The Ultimate Sourcebook for Writing, Editing, and Creating Content for the Digital World](The%20Yahoo!%20style%20guide%20_%20the%20ultimate%20sourcebook%20for%20--%20Barr,%20Chris,%20Yahoo!%20Inc.pdf) — Chris Barr & Yahoo! Editorial Staff (St. Martin's Griffin, 2010)**  
  *The timeless bible of web writing.* Key rules every web designer must memorize:
  1. **Writing for Scanners:** Web users don't read books linearly; they scan in F-patterns. Use front-loaded headlines, subheadings, and concise bullet points.
  2. **The Inverted Pyramid:** Place critical conclusions, summaries, and action triggers at the very top; follow with supporting context.
  3. **Accessible Link Anchor Text:** Never write *"Click here"* or *"Read more"*. Write explicit, context-independent anchors like *"Download the Drumtiks '26 Festival Timetable (PDF, 2MB)"*.
  4. **Radical Brevity & Chunking:** Cut text by 50% compared to print media. One clear thought per paragraph.
* **[Writing for Designers](Writing%20for%20Designers%20--%20Scott%20Kubie.pdf) — Scott Kubie (A Book Apart #26, 2018)**  
  *Core Concept:* Microcopy as a design material. Designers must proactively write button labels, input placeholders, empty state instructions, and inline error validation. If you leave placeholder *"Lorem Ipsum"* in your designs, you are abdicating your responsibility as an interaction designer.
* **[The Elements of Content Strategy](The%20Elements%20of%20Content%20Strategy%20--%20Erin%20Kissane.mobi) — Erin Kissane (A Book Apart #3, 2011)**  
  *Core Concept:* The foundational guide to content auditing, editorial architecture, tone-and-voice consistency, and long-term content maintenance.
* **[Conversational Design](Conversational%20Design%20--%20Erika%20Hall.pdf) — Erika Hall (A Book Apart #24, 2018)**  
  *Core Concept:* Treating user interface interaction as a human conversation. Designing intuitive, polite, and cooperative feedback states across web flows.
* **[UI Is Communication: How to Design Intuitive, User-Centered Interfaces](UI%20Is%20Communication%20_%20How%20to%20Design%20Intuitive,%20User%20Centered%20--%20McKay,%20Everett.pdf) — Everett McKay (Morgan Kaufmann, 2013)**  
  *Core Concept:* Evaluating UI elements through the lens of spoken conversation: does this dialog interrupt rudely? Does this error message explain *how* to recover, or merely scold the user?

---

### 3.3 Responsible Responsive Design & Performance Ethics
In WD101, you learned how to write CSS media queries and fluid layouts. But responsive web design is **not merely aesthetic fluidity**—it is a technical and ethical commitment to every user.

#### Essential Reading from the FBAUP Collection:
* **[Responsible Responsive Web Design](Scott%20Jehl%20-%20Responsible%20Responsive%20Web%20Design%20(2014,%20A%20Book%20Apart)%20-%20libgen.li.pdf) — Scott Jehl (A Book Apart #11, 2014)**  
  *Core Concept:* The web is accessed on diverse devices: flaky 3G connections, low-cost smartphones with limited RAM, and expensive metered cellular plans. Being **responsible** means:
  * **Progressive Enhancement as an Ethical Duty:** HTML delivers full readable content to *any* device first; CSS enriches layout for capable screens; JavaScript adds behavioral delight only when supported.
  * **Conditional Asset Loading:** Never serve 4K desktop hero images to a phone on a slow connection. Leverage `<picture>`, modern formats (`image/avif`, `image/webp`), and responsive `srcset`.
  * **Performance Budgets:** Establish non-negotiable payload ceilings (e.g. <500 KB total page weight on mobile, Largest Contentful Paint under 2.5s) to prevent digital exclusion.

---

### 3.4 Sustainable Web Design & Digital Ecology
If the global internet were a country, it would be the **4th largest polluter on Earth**, responsible for roughly **3.7% of all greenhouse gas emissions**—surpassing the commercial aviation industry. Every byte transferred through data centers, undersea cables, and mobile cell towers consumes electricity.

#### Essential Reading from the FBAUP Collection:
* **[Sustainable Web Design](Sustainable%20Web%20Design%20(A%20Book%20Apart%20#34)%20--%20Tom%20Greenwood.pdf) — Tom Greenwood (A Book Apart #34, 2021)**  
  *Core Concept:* How digital designers can drastically reduce the carbon footprint of digital products.
  * **The Sustainable Web Manifesto Principles:** Clean (powered by renewable energy), Efficient (minimal data transfer), Open, Honest, Regenerative, and Resilient.
  * **Eco-Design Strategies for Web Designers:**
    1. **Eliminate Video Bloat:** Replace autostarting background video loops with vector SVG illustrations or lightweight canvas animations.
    2. **Variable & SubsetFonts:** Using single variable WOFF2 fonts with `unicode-range` subsetting saves megabytes of bandwidth compared to loading 8 separate static font weights.
    3. **Dark Mode Power Conservation:** Pure dark UI (`--color-bg: #090a0d`) physically turns off pixels on OLED/AMOLED mobile screens, conserving device battery life.
    4. **Aggressive Caching & PWAs:** Using Service Workers to cache assets locally so return visits generate zero unnecessary server round-trips.
    5. **Carbon Auditing:** Measuring page emissions with tools like [Website Carbon Calculator](https://www.websitecarbon.com/) and verifying green hosting with [The Green Web Foundation](https://www.thegreenwebfoundation.org/).

---

### 3.5 Design Management, Professional Practice & Ethical UX
To build a sustainable, respected career as a digital designer, you must master the business, contractual, and human realities of professional practice.

#### Essential Reading from the FBAUP Collection:
* **[Design Is a Job](_A%20Book%20Apart/Design%20Is%20a%20Job%20--%20Mike%20Monteiro.epub) — Mike Monteiro (A Book Apart #7, 2012)**  
  *Core Concept:* Designers are not decorators who make things pretty; they are hired experts brought in to solve business and communication problems. Master client contracts, value pricing, presenting design rationales with confidence, and learning when—and how—to say "no" to clients.
* **[You’re My Favorite Client](_A%20Book%20Apart/You’re%20My%20Favorite%20Client%20--%20Mike%20Monteiro;%20Austin%20Kleon.pdf) — Mike Monteiro (A Book Apart #12, 2014)**  
  *Core Concept:* The essential companion for understanding the client’s mindset, running productive design reviews, and building collaborative trust.
* **[Resilient Management](_A%20Book%20Apart/Resilient%20Management%20--%20Lara%20Hogan;%20Camille%20Fournier.pdf) — Lara Hogan (A Book Apart #28, 2019)**  
  *Core Concept:* Leading design teams, conducting empathetic 1-on-1s, managing creative burnout, giving constructive peer critique, and steering teams through organizational change.
* **[Design for Real Life](_A%20Book%20Apart/Design%20for%20Real%20Life%20--%20Eric%20Meyer%20and%20Sara%20Wachter-Boettcher.epub) — Eric Meyer & Sara Wachter-Boettcher (A Book Apart, 2016)**  
  *Core Concept:* Designing for stress cases. Users interact with our interfaces while grieving, panicking, or dealing with emergencies. Avoid toxic cheerfulness, exclusionary assumptions in forms, and predatory defaults.
* **[Deceptive Patterns: Exposing the Tricks Tech Companies Use to Control You](Deceptive%20Patterns_%20Exposing%20the%20Tricks%20Tech%20Companies%20Use%20--%20Harry%20Brignull.epub) — Harry Brignull (2023)** & **[Universal Methods of Ethical Design](Universal%20Methods%20of%20Ethical%20Design%20--%20Sai%20Shruthi%20Chivukula.epub) — Sai Shruthi Chivukula (2024)**  
  *Core Concept:* Recognizing, documenting, and fighting against dark patterns (confirmshaming, hidden subscription roach motels, fake countdown timers, trick questions). Designers are the gatekeepers of human attention and dignity.

---

### 3.6 Icon Design & SVG Graphic Systems: The Visual Grammar of the Interface
Icons are not decorative stickers; they are a high-speed pictorial visual language, communicative signage, and vital interaction affordances. In a world of responsive screen sizes, high-DPI retina displays, and diverse cultural contexts, mastering **systematic icon design** is a cornerstone of communication design.

#### 1. Core Principles of Interface Iconography:
* **The Mathematical Pixel Grid:** Designing icons on standardized base canvases (16×16px, 20×20px, 24×24px, 32×32px). Snapping strokes and nodes to integer pixels to prevent fuzzy anti-aliasing.
* **Optical Sizing & Perceptual Weight:** A circle with diameter $20\text{px}$ has less visual area than a $20\times20\text{px}$ square. Designers must balance geometric containers so circles, triangles, and oblong shapes look optically uniform in weight.
* **Stroke vs. Fill Harmony:** Establishing a consistent visual grammar: outline (unselected/default state) vs. solid filled (selected/active state). Standardizing stroke cap (`stroke-linecap="round"`), joins (`stroke-linejoin="round"`), and stroke weight across the entire set.
* **Semiotics & Cognitive Metaphor (Jakob's Law):** Avoid idiosyncratic metaphors that confuse users (e.g. using a lightbulb for 'settings' instead of a gear or sliders). As Nielsen Norman Group demonstrates, an icon without a label often creates cognitive friction—always pair critical action icons with clear typographic microcopy.

#### 2. SVG Engineering & Accessible Web Implementation:
* **Vector Optimization (SVGO & SVGOMG):** Stripping invisible editor metadata, decimal bloat, and empty groups from Illustrator/Figma exports to reduce file sizes to <1 KB.
* **Web Accessibility (WCAG 2.2):**
  * *Decorative Icons:* Add `aria-hidden="true"` so screen readers don't announce redundant graphics.
  * *Standalone Action Icons (e.g. close buttons):* Provide an accessible label using `aria-label="Close dialog"` or an inline `<title id="close-title">Close</title>` paired with `role="img" aria-labelledby="close-title"`.
* **Scalable SVG Delivery Architectures:**
  * *Inline SVG:* Instant styling via CSS `fill: currentColor` and `stroke: currentColor`.
  * *SVG Sprites (`<use href="#icon-search">`):* Efficient caching across multi-page sites.
  * *CSS `mask-image`:* Coloring SVG icons dynamically with CSS variables while keeping icons in external files.

#### 3. Canonical Icon Systems for Study:
* **[Lucide Icons](https://lucide.dev/)** & **[Feather](https://feathericons.com/):** The gold standard of 24px minimalist geometric stroke design.
* **[Phosphor Icons](https://phosphoricons.com/):** Masterclass in multiple weight variants (thin, light, regular, bold, fill, duotone).
* **[Heroicons](https://heroicons.com/):** Crafted specifically for modern component libraries (Tailwind ecosystem) in 16px micro, 20px mini, and 24px outline/solid.
* **[Google Material Symbols](https://fonts.google.com/icons):** Variable font technology applied to iconography (continuous weight, grade, fill, and optical size axes).
* *Essential Reading from Collection:* **[Refactoring UI](Refactoring%20UI%20--%20Adam%20Wathan,%20Steve%20Schoger%20--%20v1_0_2,%202018%20--%20682f4a2cbd71df1558e1daaec2529242%20--%20Anna%E2%80%99s%20Archive.pdf)** (Wathan & Schoger), **[Universal Methods of Design](Bruce%20Hanington,%20Bella%20Martin%20-%20Universal%20Methods%20of%20Design_%20100%20Ways%20to%20Research%20Complex%20Problems,%20Develop%20Innovative%20Ideas,%20and%20Design%20Effective%20Solutions-Rockport%20Publishers%20(2012).pdf)** (Martin & Hanington).

---

### 3.7 Web & Digital Project Management: Steering Projects from Brief to Production
Great communication designers don't work in an artistic vacuum. To see your creative visions actually reach users intact, you must learn **digital project management**—bridging client goals, creative strategy, technical realities, and delivery timelines.

#### Essential Reading from the FBAUP Collection:
* **[A Practical Guide to Managing Web Projects](A%20Practical%20Guide%20to%20Managing%20Web%20Projects%20--%20Breanda%CC%81n%20Knowlton%20--%202012%20--%20Five%20Simple%20Steps%20Publishing%20Ltd%20--%20isbn13%209781907828089%20--%2068ea243101ca41d69b74b0a1f569c923%20--%20Anna%E2%80%99s%20Archive.pdf) — Breandán Knowlton (Five Simple Steps, 2012)**  
  *The essential practitioner's playbook for shipping digital work.* Knowlton breaks down the complete lifecycle of web delivery:
  1. **Scoping & Discovery:** Turning ambiguous client wishes into clear, measurable deliverables, functional specifications, and technical constraints.
  2. **Estimation & Scheduling:** Why designers underestimate complexity, how to calculate contingency buffers, and how to define milestones (Milestone 1: Architecture & Content; Milestone 2: Design Tokens & Prototypes; Milestone 3: Production Code & QA; Milestone 4: Content Population & Launch).
  3. **Managing Scope Creep:** Learning how to handle *"Could we just add one small feature?"* gracefully through written change orders and trade-offs rather than uncompensated overtime.
  4. **The Launch Checklist:** DNS configuration, 404 redirects, SSL certificates, analytics verification, accessibility auditing, and post-launch maintenance SLA agreements.
* **[Communicating the User Experience: A Practical Guide for Agile Teams](Communicating%20the%20User%20Experience%20_%20A%20Practical%20Guide%20for%20--%20Richard%20Caddick,%20Steve%20Cable%20--%201,%20US,%202011%20--%20John%20Wiley%20&%20Sons,%20Ltd%20--%20isbn13%209781119971108%20--%20a5905f4f4b4f4bc2e56f8a67601050b0%20--%20Anna%E2%80%99s%20Archive.pdf) — Richard Caddick & Steve Cable (Wiley, 2011)**  
  *Core Concept:* Facilitating collaborative workshops, running agile sprints, communicating wireframes and user journeys to developers and business analysts, and maintaining team alignment.
* **Modern Studio Methodologies:**
  * **Kanban & Visual Boards (Linear / Trello / GitHub Projects):** Visualizing work-in-progress (Backlog → In Progress → Design Review → In Development → QA → Shipped).
  * **Basecamp's Shape Up Methodology:** 6-week fixed-time, variable-scope cycles that empower small integrated teams of designers and developers to ship without endless agile meetings.

---

### 3.8 Art Direction for the Web in the Age of AI: Human-AI Co-Creation & Taste
The commercial web has suffered from acute visual homogenization: cookie-cutter landing pages, identical three-column hero sections, and bland blue-gray buttons. Now, generative AI tools can produce this average, generic boilerplate in milliseconds.

In the **Age of AI**, the communication designer's core irreplaceable value is **Art Direction**: conceptual courage, visual voice, cultural taste, emotional storytelling, and knowing *how to direct and orchestrate AI systems rather than being directed by them*.

#### Essential Reading from the FBAUP Collection:
* **[Art Direction for the Web](Art%20Direction%20for%20the%20Web%20--%20Clarke,%20Andy%20--%202019%20--%20Smashing%20Magazine%20GmbH%20--%20isbn13%209783945749777%20--%20d2277b8fc11d42bee2ceae097802388a%20--%20Anna%E2%80%99s%20Archive.epub) — Andy Clarke (Smashing Magazine, 2019)**  
  *The landmark manifesto on web art direction.* Andy Clarke argues that the web is not merely software; it is an expressive visual medium. Key lessons:
  1. **Editorial Pacing & Rhythm:** Designing the page like a dynamic magazine spread. Varying rhythm between dense editorial text, sweeping full-bleed visual breaks, asymmetrical pull quotes, and intimate captioning.
  2. **Breaking the Cookie-Cutter Mold:** Moving past boring 12-column symmetrical templates. Leveraging CSS Grid for overlapping elements, angled containers, vertical text baselines (`writing-mode: vertical-rl`), and bespoke layout personality.
  3. **Visual Identity & Brand Tone:** Infusing typography, art-directed photography, custom iconography, and color atmosphere so a website feels unmistakable even with the logo covered.
* **[The Design of Future Things](The%20Design%20of%20Future%20Things%20--%20Donald%20A_%20Norman%20--%201st%20paperback%20edition,%20New%20York,%202009%20--%20Basic%20Books,%20a%20member%20of%20the%20Perseus%20Book%20Group%20--%20isbn13%209780465002276%20--%20f24458cb31b5ccd50766fcd5a860b6ce%20--%20Anna%E2%80%99s%20Archive.epub) — Donald A. Norman (Basic Books, 2009)**  
  *The prophetic guide to human-machine collaboration.* Don Norman examines how humans must interact with intelligent, autonomous machines: avoiding automation surprises, establishing clear feedback loops, and ensuring humans retain critical oversight and final judgment.
* **[A Practical Guide to Designing for the Web](A%20Practical%20Guide%20to%20Designing%20for%20the%20Web%20(Five%20Simple%20--%20Mark,%20auteur%20Boulton%20--%20Five%20simple%20steps,%20Five%20simple%20steps,%20Penarth,%20U_K,%20United%20--%20Mark%20--%20isbn13%209780956174017%20--%2008169a0c1b71898e90e60e0e5c2c15cc%20--%20Anna%E2%80%99s%20Archive.pdf) — Mark Boulton (Five Simple Steps, 2009)**  
  *Core Concept:* Classical typography, proportional layout systems, grid structures, and colour theory transposed from Swiss modernist print traditions into web design.

#### The Communication Designer's Playbook in the Age of AI:
1. **Art Direction as Prompting & Steering:**
   Prompting is not magic; it is **art direction articulated through language and visual tokens**. A novice asks an AI for *"a modern website for a museum"*; an art director prompts: *"Construct an asymmetrical Swiss modernist layout with high contrast, 1970s Dutch brutalist typography, wide negative space, deep olive and charcoal tones, and micro-motion on scroll"*.
2. **Curation over Generation (Fighting the 'AI Slop'):**
   Because AI generates infinite variations effortlessly, the designer's defining skill shifts from *making* to **discriminating, filtering, and curating**. Your taste is the filter that eliminates algorithmic cliché and ensures cultural authenticity.
3. **Orchestrating Agentic Workflows (Human-in-the-Loop):**
   Tools like Google Antigravity ADE and agentic coding models write boilerplate markup, scaffolding, and responsive media queries. Your role as Art Director and Project Manager is to **steer the agent**: review the code for semantic cleanliness, enforce token design systems, verify WCAG accessibility, and ensure the finished product fulfills an authentic emotional and conceptual vision.

---

# 🐙 MODULE 4: Version Control, GitHub Publishing & The Designer's Living Code Profile
*The mandatory professional superpower: escaping "final_v2_really_final.zip", mastering atomic commits, publishing live sites instantly at zero cost, and showcasing your craft to studios through a polished GitHub presence.*

---

### 4.1 The Version Control Mental Model: Time Travel & Fearless Experimentation
In graphic design, students often succumb to the chaotic file-naming trap: `poster_v1.ai`, `poster_v2_final.ai`, `poster_v2_final_PRINT_definitivo.ai`. In web and digital product design, **this chaotic habit is eliminated forever by Git**.

Git is a distributed version control system. It does not save bloated duplicate copies of your project folder; instead, it tracks the precise character-by-character delta (diff) of every file over time.

```
       [commit: e4a1f] ───► [commit: 89b2c] ───► [commit: 31d0e] ───► (main branch)
       feat: HTML landmarks  feat: CSS Grid layout   feat: design tokens
                                     │
                                     └───► [checkout -b experiment-dark-mode]
                                                  │
                                           [commit: 7f83a]
                                           test: oklch dynamic theme
                                                  │
                                      (merge back or discard cleanly!)
```

#### Core Concepts Every Designer Must Internalize:
1. **Commits as Atomic Time-Travel Checkpoints:**
   A commit is an immutable snapshot of your codebase at a specific point in time. If a bold CSS experiment breaks your layout at 2 AM, you don't panic—you simply step back to your last working commit.
2. **Commit Message Discipline:**
   Treat commit messages like an editorial log of your design intent. Follow the conventional commits standard:
   * `feat: implement responsive off-canvas drawer navigation`
   * `fix: correct color contrast on secondary button hover (WCAG AAA)`
   * `style: adjust fluid typography clamp values for mobile viewport`
   * `refactor: extract color palette tokens to tokens.css`
3. **Fearless Branching (`git branch` / `git checkout -b`):**
   A branch is an isolated parallel dimension. Want to try a radical dark-mode palette or refactor your CSS Grid layout? Spin up a branch:
   ```bash
   git checkout -b experiment/dark-mode
   ```
   If the experiment succeeds, merge it into `main`. If it fails, delete the branch with zero risk to your live production code.
4. **Tools for Designers: GUI vs. Terminal:**
   * **Visual GUI Clients:** You don't have to live in the terminal! [**GitHub Desktop**](https://desktop.github.com/) provides a clean visual diff viewer showing additions in green and deletions in red. In VS Code, the built-in Source Control tab and extensions like **GitLens** let you inspect line-by-line blame and history directly in your editor.
   * **The Essential 5 Terminal Commands:**
     ```bash
     git status                  # Check modified and unstaged files
     git add .                   # Stage all changes for snapshot
     git commit -m "feat: ..."   # Save atomic snapshot with message
     git push origin main        # Send commits to remote GitHub repository
     git pull origin main        # Download latest updates from remote
     ```

---

### 4.2 Instant Static Publishing: GitHub Pages, Custom Domains & Zero-Cost Hosting
One of the greatest gifts of modern web design is **instant, friction-free publishing**. In WD101, all your project milestones and demonstrations are deployed live through **GitHub Pages**.

#### Why GitHub Pages is Essential for Communication Designers:
* **Zero Cost, Zero Maintenance:** Every public repository can be hosted completely free of charge. No Apache configuration, no FTP credentials to lose, no surprise server billing.
* **Continuous Deployment (GitOps):** The moment you run `git push origin main`, GitHub's automated servers rebuild and deploy your updated files globally across a CDN within 30 seconds.
* **Custom Domain Branding (`CNAME`):**
  Turn `username.github.io/portfolio` into your own personal design studio URL: `studio.yourname.pt` or `portfolio.design`. Simply add a 1-line plain text file named `CNAME` containing your domain name, point your DNS records to GitHub's Anycast IP addresses, and GitHub automatically generates a **free, auto-renewing SSL/TLS HTTPS certificate**.
* **Modern Static Hosts Beyond GitHub Pages:**
  Once comfortable with Git push-to-deploy workflows, explore [**Vercel**](https://vercel.com/) and [**Netlify**](https://www.netlify.com/). Both offer instant preview URLs for every Git branch, allowing you to send a live, working link of an experimental design to a client or tutor before merging it into production!

---

### 4.3 Building a Standout GitHub Profile: The Designer's Living Code Portfolio
When creative directors, design leads, and digital product agencies hire interaction designers, **they check your GitHub profile**.

A PDF portfolio shows static mockups, but a GitHub profile provides **tangible, undeniable proof of craftsmanship, code literacy, and technical curiosity**.

#### The Special Profile Repository: `github.com/<username>/<username>`
Did you know that creating a public repository matching your exact GitHub username displays its `README.md` directly on your public profile front page? This is your digital billboard to the global web development and design community.

#### Anatomy of a World-Class Designer Profile README:
1. **Clear Bio & Visual Header:**
   A clean typographic SVG banner or animated Lottie header introducing your design philosophy, your university affiliation (FBAUP), and your areas of interest (Interaction Design, Creative Coding, Editorial Web, Typography).
2. **Curated Badges & Tech Stack:**
   Display sleek, monochromatic badges (via [Shields.io](https://shields.io/)) highlighting your foundational competencies: `HTML5`, `Modern CSS`, `JavaScript`, `p5.js`, `WordPress`, `Figma`, `GSAP`.
3. **Pinned Repositories with Live Demo Links:**
   Pin your top 4–6 projects. Every single pinned repository MUST have:
   * A clear, 1-line description explaining the project.
   * A live deployment link in the repository header (via GitHub Pages or Vercel).
   * A comprehensive repository `README.md` featuring a project thumbnail/GIF, design rationale, typography specs, and local setup instructions.
4. **The "Green Contribution Graph" (Commit Activity):**
   The famous grid of green squares is not about gaming meaningless statistics; it illustrates **consistency, grit, and an active practice of building**. Pushing commits regularly proves to employers that you write code as a natural part of your design workflow.
5. **Open-Source Micro-Contributions:**
   Share small, generous tools: a bare-bones typographic CSS starter, a collection of p5.js generative patterns, an accessible color token palette, or an interactive variable font tester.

---

### 4.4 Collaboration & The Engineering Handshake: Pull Requests & Open Source
In digital product teams, designers who can speak the collaborative language of engineers are revered like unicorns.

* **Pull Requests (PRs):** A Pull Request is an invitation to review, discuss, and refine code before merging. Instead of vague feedback over Slack or email, PRs allow you to review visual diffs line-by-line, suggest code changes directly in the browser, and verify automated preview deployments.
* **Figma-to-Code Alignment:** In modern design system workflows, design tokens exported from Figma (via Style Dictionary or Figma Variables) are synchronized with code repositories through automated Git PRs.
* **Issue Tracking & Bug Reporting:** Using GitHub Issues with structured markdown templates allows designers to report visual bugs, layout regressions, and accessibility defects with precision (including browser viewport, OS, reproduction steps, and screenshots).
* **Contributing to Open Source:** The entire modern web is built on open source. Submitting a small fix to an open-source CSS framework, documentation typo, or accessibility attribute on GitHub gives you real-world credentials that set your CV apart from thousands of applicants.

---

## 🧭 Decision Matrix: Which Path Fits Your Creative Ambition?

| Designer Profile | Recommended Primary Track | Secondary Exploration | Essential Next Tools & Books to Learn |
|:---|:---|:---|:---|
| **The Motion & Interaction Designer** | **Immediate Visual Bridge** | Creative Coder (Track 2) | LottieFiles, Adobe Animate, Google Web Designer, GSAP |
| **The 3D & Immersive Web Designer** | **Immediate Visual Bridge** | Creative Coder (Track 2) | Spline 3D, Google `<model-viewer>`, WebXR, Three.js, A-Frame |
| **The Content Strategist & UX Writer** | **Module 3: Systems & Content** | Track 1 (CMS Master) | *The Yahoo! Style Guide*, *Writing for Designers*, *Conversational Design*, WordPress CMS |
| **The Design Systems Architect** | **Module 3: Systems & Content** | Track 1 (CSS Master) | *Atomic Design*, *Design Systems Handbook*, Tokens, IBM Carbon, Tailwind, Figma Tokens |
| **The Sustainable & Ethical Web Designer** | **Module 3: Systems & Content** | Track 1 (CSS Master) | *Sustainable Web Design*, *Responsible Responsive Design*, *Deceptive Patterns*, Website Carbon |
| **The Graphic & Editorial Designer** | **Track 1** (HTML/CSS Master) | Creative Typography | WordPress Custom Themes, LocalWP, OpenType.js, Tailwind CSS |
| **The Brand & Design Systems Designer** | **Track 1** (HTML/CSS Master) | Interactive Prototyping | Google Material 3, Apple HIG, IBM Carbon, Tailwind CSS, Open Props, Figma Code Connect |
| **The Kinetic Type & Generative Designer** | **Track 2** (Creative Coder) | Vanilla JS | GSAP (ScrollTrigger), Samsa-core.js, Anime.js, p5.js |
| **The Information & Data Designer** | **Track 2** (Creative Coder) | Backend & APIs | IBM Carbon Charts, p5.js, D3.js, Fetch API, Google Sheets API, Paper.js |
| **The UX/UI & Digital Product Designer** | **Track 2** (Interactive Apps) | Design Systems & CSS | Apple HIG, Material 3, IBM Carbon, Vanilla JS, PWAs, Vue.js / React, Supabase, Capacitor |
| **The Creative Technologist / New Media Artist** | **Track 2** (Creative Coder) | Native Wrappers & XR | p5.js, Nature of Code, Spline 3D, WebXR/AR, Electron, Tauri |
| **The Iconographer & Systems Designer** | **Module 3: Systems & Craft** | Track 1 (CSS Master) | Lucide, Phosphor, Heroicons, SVGOMG, SVGO, *Refactoring UI*, *Universal Methods of Design* |
| **The Digital Project Manager & Producer** | **Module 3: Systems & Stewardship** | Track 1 & Track 2 | *A Practical Guide to Managing Web Projects* (Knowlton), *Communicating UX* (Caddick), Linear, Shape Up |
| **The Web Art Director in the Age of AI** | **Module 3: Art Direction & Taste** | Both Tracks & AI Workflows | *Art Direction for the Web* (Andy Clarke), *The Design of Future Things* (Don Norman), Mark Boulton, Antigravity ADE |
| **The Serious Industry Candidate / Portfolio Builder** | **Module 4: Git & GitHub Mastery** | Universal Infrastructure | Git branching, GitHub Pages, CNAME, Profile README, Pull Requests, Open Source |

---

## 📚 Curated Reference Directory & Essential Links

### 🎓 Pedro Amado & FBAUP References:
* [LSI 2019: *Para o infinito e mais além!* (Original Post)](https://lsi.fba.up.pt/2019/to-infinity-beyond/index.html)
* [Prof. Pedro Amado: HTML & CSS to WordPress Theme Video Series](https://www.youtube.com/watch?v=rqcPkZL6fQk)
* [WD101 Curricular Course Hub](index.html)
* [Plataforma Pedagógica MDN & Box Model Guide](index.html)

### 🐙 Version Control, Git & GitHub Mastery:
* [GitHub Skills (Interactive Hands-On Courses)](https://skills.github.com/)
* [Pro Git Book by Scott Chacon and Ben Straub (Free Official Book)](https://git-scm.com/book/en/v2)
* [GitHub Desktop (Intuitive GUI Client for Visual Thinkers)](https://desktop.github.com/)
* [Oh Shit, Git!?! / Dangit, Git! (Human-Friendly Recovery Guide)](https://dangitgit.com/)
* [GitHub Pages Official Documentation](https://docs.github.com/en/pages)
* [Awesome GitHub Profile READMEs Directory](https://github.com/abhisheknaiidu/awesome-github-profile-readme)
* [Shields.io (Quality Metadata Badges)](https://shields.io/)

### 📖 Essential Bookshelf (FBAUP Digital Library & Reference Shelf):
* **Web Art Direction & Aesthetic Voice:** *Art Direction for the Web* (Andy Clarke / Smashing Magazine), *Hardboiled Web Design* (Andy Clarke / Five Simple Steps), *A Practical Guide to Designing for the Web* (Mark Boulton), *On Web Typography* (Jason Santa Maria), *Designing for Emotion* (Aarron Walter / Keith, Cederholm, Marcotte).
* **AI Collaboration & Human Factors:** *The Design of Future Things* (Donald A. Norman), *The Design of Everyday Things* (Donald A. Norman), *Universal Principles of UX* (Irene Pereyra).
* **Digital Project Management & Ops:** *A Practical Guide to Managing Web Projects* (Breandán Knowlton / Five Simple Steps), *Communicating the User Experience* (Richard Caddick & Steve Cable / Wiley), *Resilient Management* (Lara Hogan), *Design Is a Job* & *You’re My Favorite Client* (Mike Monteiro).
* **Icon Design & UI Craft:** *Refactoring UI* (Adam Wathan & Steve Schoger), *Universal Methods of Design* (Bruce Hanington & Bella Martin).
* **Web Writing & Content:** *The Yahoo! Style Guide* (Chris Barr / Yahoo!), *Writing for Designers* (Scott Kubie), *The Elements of Content Strategy* (Erin Kissane), *Conversational Design* (Erika Hall), *Design by Definition* (Elizabeth McGuane), *UI Is Communication* (Everett McKay).
* **Design Systems:** *Atomic Design* (Brad Frost), *Design Systems* (Alla Kholmatova), *Design Systems Handbook* (Suarez, Anne, Sylor-Miller, Mounter).
* **Responsible & Sustainable Web:** *Responsible Responsive Web Design* (Scott Jehl), *Sustainable Web Design* (Tom Greenwood).
* **Professional Practice & Ethics:** *Design for Real Life* (Eric Meyer & Sara Wachter-Boettcher), *Deceptive Patterns* (Harry Brignull), *Universal Methods of Ethical Design* (Sai Shruthi Chivukula).

### 🎨 Icon Design & SVG Graphic Systems:
* [Lucide Icons (Community-Engineered Open Iconography)](https://lucide.dev/)
* [Phosphor Icons (Flexible Multi-Weight Icon Family)](https://phosphoricons.com/)
* [Heroicons by Tailwind Labs](https://heroicons.com/)
* [Google Material Symbols (Variable Font Iconography)](https://fonts.google.com/icons)
* [SVGOMG (Web GUI for SVGO Vector Optimization)](https://jakearchibald.github.io/svgomg/)

### 📋 Web Project Management & Team Workflows:
* [Shape Up: Stop Running in Circles and Ship Work that Matters (Basecamp)](https://basecamp.com/shapeup)
* [The Linear Method (Modern Principles for Software & Product Teams)](https://linear.app/method)
* [GitHub Projects (Issue & Kanban Workflows)](https://docs.github.com/en/issues/planning-and-tracking-with-projects)

### 📐 Canonical Design Systems & Platform Guidelines:
* [Google Material Design (Material 3 / M3)](https://m3.material.io/)
* [Apple Human Interface Guidelines (HIG — iOS / macOS)](https://developer.apple.com/design/human-interface-guidelines/)
* [IBM Carbon Design System (Enterprise & Open Source)](https://carbondesignsystem.com/)
* [Material Web Components](https://github.com/material-components/material-web)
* [IBM Carbon Charts Data Visualization](https://charts.carbondesignsystem.com/)

### 🎬 Interactive Animation, 3D & WebXR/AR:
* [Google Web Designer Official Site](https://webdesigner.withgoogle.com/)
* [Adobe Animate Official Portal](https://www.adobe.com/products/animate.html)
* [LottieFiles & Lottie Creator](https://lottiefiles.com/)
* [Spline 3D Collaborative Design Tool](https://spline.design/)
* [Google `<model-viewer>` WebAR Documentation](https://model-viewer.dev/)
* [A-Frame WebXR Framework](https://aframe.io/)
* [Three.js 3D JavaScript Engine](https://threejs.org/)
* [MindAR Web Augmented Reality](https://hiukim.github.io/mind-ar-js-doc/)

### 🎨 CSS Frameworks & Tokens:
* [Tailwind CSS Documentation](https://tailwindcss.com/docs)
* [DaisyUI Semantic Components](https://daisyui.com/)
* [Open Props CSS Variables](https://open-props.style/)
* [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
* [Panda CSS Styling Engine](https://panda-css.com/)

### 🛠️ CMS & Local Server Tools:
* [LocalWP (Local WordPress Development Made Simple)](https://localwp.com/)
* [MAMP & MAMP PRO](https://www.mamp.info/)
* [WordPress Theme Developer Handbook](https://developer.wordpress.org/themes/)

### 🚂 Creative Coding & JavaScript Education:
* [The Coding Train (Daniel Shiffman)](https://thecodingtrain.com/)
* [The Coding Train on YouTube](https://www.youtube.com/thecodingtrain)
* [Code! Programming with p5.js for Beginners](https://www.youtube.com/watch?v=HerCR8bw_GE&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
* [The Nature of Code by Daniel Shiffman](https://natureofcode.com/)
* [p5.js Official Reference](https://p5js.org/reference/)
* [Traversy Media Modern JavaScript](https://www.youtube.com/@TraversyMedia)

### ⚡ Libraries & Power Tools:
* [Paper.js Vector Graphics](http://paperjs.org/)
* [D3.js Data-Driven Documents](https://d3js.org/)
* [GSAP by GreenSock](https://gsap.com/)
* [Anime.js Animation Engine](https://animejs.com/)
* [OpenType.js Font Inspector](https://opentype.js.org/)
* [Samsa Variable Font Engine](https://github.com/Lorp/samsa)
* [Capacitor by Ionic](https://capacitorjs.com/)
* [Electron Desktop Framework](https://www.electronjs.org/)
* [Tauri Lightweight Desktop & Mobile](https://tauri.app/)
* [Supabase Realtime Database](https://supabase.com/)

---

### Colophon & Academic Context
* **Institution:** Faculdade de Belas Artes da Universidade do Porto (FBAUP)  
* **Degree:** Licenciatura em Design de Comunicação  
* **Curricular Unit:** Web Design (WD101) — 2026/27  
* **Research Unit:** Instituto de Investigação em Arte, Design e Sociedade (i2ADS)  
* **Supervision:** Prof. Pedro Amado  
* **Co-authoring & Agentic Engineering:** Google Gemini (DeepMind Antigravity)  
* **Living Standard:** HTML5 • Modern CSS • Zero Jargon Gatekeeping • Open Education
