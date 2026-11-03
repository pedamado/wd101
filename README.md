# WD101 • Learning Scaffold & Open Courseware Platform (2026/27)
## Faculdade de Belas Artes da Universidade do Porto (FBAUP)
### Licenciatura em Design de Comunicação • Instituto de Investigação em Arte, Design e Sociedade (i2ADS)

> ⚠️ **PROJECT STATUS: WORK IN PROGRESS (WIP)**  
> This open courseware repository and interactive learning platform is an evolving pedagogical scaffold. It is actively maintained and iteratively expanded throughout the academic semester (2026/27). New demonstrators, interactive sandboxes, design heuristics, and documentation templates are updated continuously to support student self-paced exploration and studio practice.

---

## 👥 Authorship & Pedagogical Credits
* **Curricular Conception, Pedagogical Direction & Supervision:**  
  **Prof. Pedro Amado** (FBAUP / i2ADS — Universidade do Porto)
* **Technical Co-Authorship, Pair Programming & AI Agent:**  
  **Google Gemini** (*Gemini Pro 3 Flash* & *Gemini Pro4 Argon* — Google DeepMind / Antigravity)

---

## 🎯 Pedagogical Vision: An Open Learning Scaffold for WD101

This platform serves as the **open learning scaffold** for the undergraduate course **Web Design (WD101)** within the Communication Design degree at FBAUP. 

### How This Scaffold Complements the Course Ecosystem
To ensure academic rigor, clear communication, and self-directed learning, the WD101 learning environment is organized across complementary layers:

1. **Institutional Platform (Moodle UP):**  
   The formal administrative home for assignment brief distribution, official deadlines, individual project file submissions, academic attendance, and official gradebook entries.
2. **In-Person Studio & Lectures (Aulas Teórico-Práticas FBAUP):**  
   The critical forum for group crits, individual desk critiques, conceptual debates, typographical fine-tuning, and viva-voce code reviews (*"O Teste da Autoria"*).
3. **Official Syllabus & Reading List:**  
   The theoretical, academic, and historical foundations of interaction design, graphic communication, and digital epistemology.
4. **This Learning Scaffold (`WD101` Repository & Public Site):**  
   The **living, hands-on, asynchronous self-learning workbench**. It provides communication design students with production-grade HTML5/CSS code templates, interactive visual demonstrations, live sandboxes, accessibility benchmarks, heuristic evaluation checklists, and architectural blueprints that students can freely inspect, fork, test, and adapt.

### Core Architectural Principles
* **Build-Less & Web-Native:** 100% native HTML5, modern vanilla CSS (using `@layer`, CSS Custom Properties, and relational pseudo-classes like `:has()`), and vanilla ES Modules. Zero build tools, zero dependencies, zero `node_modules`.
* **Universal Accessibility (WCAG 2.2 AAA Target):** Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`), keyboard focus traps and indicators (`:focus-visible`), touch targets (&ge; 44&times;44px), and fluid typography with legible scale ratios.
* **Dual-Mode Operation:** 
  * Works offline or locally via standard browsers and local servers (e.g. VS Code Live Server or Python HTTP).
  * Ready for zero-configuration publishing on **GitHub Pages** directly from the repository root.

---

## 📁 Repository Anatomy & Learning Directory Map

```text
learning-scaffold/
├── index.html                                  # 🏠 CENTRAL PORTAL & INTERACTIVE CURRICULUM HUB
├── README.md                                   # Comprehensive platform manual, WIP statement & APA7 bibliography
├── .gitignore                                  # Git exclusion rules (OS artifacts, caches, scratch files)
│
├── docs/                                       # 📁 Strategic Foundations & Evaluation Compendia
│   ├── README.md                               # Documentation map & curriculum index
│   ├── strategy/                               # 📐 Strategy & Architectural Matrices
│   │   ├── interactive-learning-scaffold-strategy.md
│   │   ├── html5-css3-comprehensive-curriculum-matrix.md
│   │   └── pure-css-interaction-patterns-blueprint.md
│   └── ex1/                                    # 🎯 Exercise 1 Evaluation & Visual Inspection Guides
│       ├── CADERNO-AVALIACAO-PEDAGOGICA.md     # Formative evaluation matrix for Exercise 1
│       ├── COMPENDIO-PRINCIPIOS-VISUAIS-UX-UI.md # Graphic & visual design criteria
│       └── CHECKLIST-AUTO-AVALIACAO-EX1.md     # Student self-assessment checklist
│
├── mobile-first-foundation.html                # 📱 Weeks 1-2 Guide: Mobile-First Strategy, HTML5 Landmarks & Normal Flow
├── intrinsic-sizing-box-model.html             # 📐 Weeks 3-4 Guide: Box Model Dynamics, Intrinsic Sizing & @container
├── fluid-variable-typography.html              # 🔤 Weeks 5-6 Guide: Fluid Typographic Scales (clamp()) & Variable Webfonts
│
├── interaction-patterns.html                   # 📑 Comprehensive Catalog: 142 Standalone Web Interaction Patterns
├── design-system.html                          # 🧬 Living Design System, Content Inventory & Pattern Library (DRUMTIKS '26)
├── design-system-boilerplate.html              # 📋 Clean Design System Starter Template for Student Projects
│
├── heuristics-guide.html                       # 📖 Interactive Guide & Searchable Matrix: 18 Usability Heuristics
├── heuristic-checklist.html                    # 📋 Interactive Evaluation Audit & Printable Assessment Sheet
├── HEURISTICS-AND-BEST-PRACTICES.md            # 📄 Theoretical Compendium: Nielsen & Tognazzini Harmonized
│
├── ux-laws.html                                # 🧠 Interactive Laboratory: 30 Cognitive & Ergonomic UX Laws
├── UX-LAWS-AND-PATTERNS.md                     # 📄 Theoretical Compendium: 30 Laws of UX & UI Patterns
│
├── project-documentation-guide.html            # 🗂️ Illustrated Guide: Information Architecture, Wireframing & Usability Testing
├── PROJECT-DOCUMENTATION-GUIDE.md              # 📄 Markdown Templates for Student Final Project Dossiers
│
├── ai-mentor-guide.html                        # 🤖 Guide: Transitioning from Manual Code to AI-Assisted Pair Programming
├── AI-MENTOR-TRANSITION-GUIDE.md               # 📄 Markdown Manual on Academic Integrity, Authorship & ADE Workflows
│
├── to-infinity-and-beyond.html                 # 🚀 Post-WD101 Curricular Roadmap: Motion, 3D, WebAR, Modern CMS & Tokens
├── TO-INFINITY-AND-BEYOND.md                   # 📄 Markdown Reference of the Advanced Post-Course Roadmap
│
├── ex1-hello-warp-guide.html                   # 📘 Step-by-Step Practical Guide: Exercise 1 (Semantic Typography)
├── ex2-guide.html                              # 📘 Step-by-Step Practical Guide: Exercise 2 (Media & Box Model)
├── tp06-early-prototype-guide.html             # 📘 Step-by-Step Practical Guide: Stage 1 Prototype (2-Column Responsive)
│
├── assets/                                     # Global platform design assets
│   ├── css/                                    # Modular cascade layers (@layer), reset.css, modernist.css
│   ├── fonts/                                  # Self-hosted variable fonts (Inter, Martian Mono, Syne)
│   ├── images/                                 # Visual figures, diagrams, and illustrative assets
│   └── js/                                     # Translation dictionary (i18n.js), app.js, data-store.js
│
├── data/                                       # Structured curriculum databases in JSON
│   ├── matrix.json                             # 323 canonical Living Standard MDN competencies
│   ├── assignments.json                        # Structured briefs, pedagogical constraints, and project phases
│   ├── patterns.json                           # Metadata for the 142 interaction pattern modules
│   └── categories.json                         # Course taxonomy and learning stages
│
├── starter-mobile-first/                       # 📦 Clean starter skeleton for Mobile-First layouts
├── starter-intermediate-media-box/             # 📦 Clean starter skeleton for media queries & responsive pictures
├── starter-advanced-project/                   # 📦 Clean starter skeleton for multi-breakpoint CSS Grid projects
│
└── demos/                                      # 🚀 Integrated Suite of Practical Demonstrators
    ├── hello-warp/                             # EX1: Pure semantic HTML5 landmarks, zero classes, normal flow
    ├── ex2-media-box-model/                    # EX2: Media elements, art direction with <picture>, Meyer reset
    ├── tp06-responsive/                        # Capstone Stage 1: Preliminary 2-column responsive festival portal
    ├── tp11-css-flexbox-grid/                  # Layout Lab Suite: 1D Flexbox, 2D Grid, Hybrid & Container Queries
    ├── tp11-variables-transitions-animations/  # Dynamic Lab Suite: light-dark(), 3D vinyl crate, scroll-driven motion
    ├── tp11-integrated-responsive-project/     # Capstone Stage 2: Masterclass multi-breakpoint portal with X-Ray mode
    └── patterns/                               # 142 individual interactive pattern sandboxes with source tabs
```

---

## 🚀 Progressive Project Matrix: Learning Milestones

| Milestone | Curricular Focus | Architecture & Key Competencies | Live Sandbox |
| :--- | :--- | :--- | :--- |
| **EX1** | *Hello Warp! (Wendy)* | Pure semantic HTML5 landmarks (`<header>`, `<main>`, `<article>`, `<section>`, `<footer>`), normal document flow, relative `rem` typography, zero styling classes. | [Launch EX1 Demo](demos/hello-warp/index.html) |
| **EX2** | *Media & Box Model* | CSS Box Model, Eric Meyer accessible reset, responsive art direction with `<picture>`, WebP/AVIF formats, BEM naming, `position: sticky`. | [Launch EX2 Demo](demos/ex2-media-box-model/index.html) |
| **STAGE 1 (TP06)** | *Early Responsive Prototype* | 2-column desktop breakpoint (960px), mobile-first stacking, ticket simulator, accessible form elements, responsive picture grid. | [Launch TP06 Demo](demos/tp06-responsive/index.html) |
| **TP11-B** | *Advanced CSS Layout Suite* | 4 dedicated laboratories: 1D Flexbox (axes & alignment), 2D CSS Grid (minmax, dense packing), Hybrid Layout, and CSS Container Queries (`@container`, `cqi`). | [Launch Layout Suite](demos/tp11-css-flexbox-grid/index.html) |
| **TP11** | *Dynamic Sensory & Motion* | CSS Custom Properties, dynamic theming with `light-dark()`, natural cubic-bezier physics, 3D CSS transforms, and CSS Scroll-Driven Animations (`scroll(root)`). | [Launch Motion Suite](demos/tp11-variables-transitions-animations/index.html) |
| **DESIGN SYSTEM** | *Living Style Guide & Boilerplate* | Cascade `@layer`, Design Tokens (IBM Carbon / Google Material Design 3 / Jina Anne), Atomic Design (Brad Frost), Web Typography (Jason Santa Maria), and Writing Guidelines (Yahoo! / Kubie). | [View Specification](design-system.html) · [Get Boilerplate](design-system-boilerplate.html) |
| **STAGE 2 (TP11)** | *Integrated Capstone Masterclass* | Full responsive festival portal: 4 mobile-first breakpoints, 2D Macro Grid with `grid-template-areas`, asymmetric masonry with voids, 3D vinyl crates, and CSS X-Ray inspector. | [Launch Capstone Demo](demos/tp11-integrated-responsive-project/index.html) |

---

## 📚 APA 7th Edition Bibliographical References

The following comprehensive bibliography documents the foundational web development references, interaction design literature, usability guidelines, design system frameworks, and living web specifications integrated throughout the WD101 curriculum and this learning scaffold.

### 🌟 Foundational Web Learning Platforms & Textbooks (Compulsory Reference)

* **Mozilla Corporation, & MDN Web Docs Community.** (n.d.). *MDN Web Docs: Resources for developers, by developers*. Mozilla. Retrieved November 3, 2026, from [https://developer.mozilla.org/](https://developer.mozilla.org/)
* **Traversy, B.** (n.d.). *Traversy Media: Web development & programming tutorials* [YouTube channel]. YouTube. Retrieved November 3, 2026, from [https://www.youtube.com/@TraversyMedia](https://www.youtube.com/@TraversyMedia)
* **Duckett, J.** (2011). *HTML and CSS: Design and build websites*. John Wiley & Sons. [https://www.jonduckett.com/html-and-css](https://www.jonduckett.com/html-and-css)
* **Duckett, J.** (2014). *JavaScript and JQuery: Interactive front-end web development*. John Wiley & Sons. [https://www.jonduckett.com/javascript-and-jquery](https://www.jonduckett.com/javascript-and-jquery)
* **Robbins, J. N.** (2018). *Learning web design: A beginner's guide to HTML, CSS, JavaScript, and web graphics* (5th ed.). O'Reilly Media. [https://www.oreilly.com/library/view/learning-web-design/9781491960196/](https://www.oreilly.com/library/view/learning-web-design/9781491960196/)

---

### 🧠 Usability Engineering, Cognitive Psychology & Interaction Design

* **Brignull, H.** (2023). *Deceptive patterns: Exposing the tricks tech companies use to control you*. Testimonium Limited. [https://www.deceptive.design/book](https://www.deceptive.design/book)
* **Caddick, R., & Cable, S.** (2011). *Communicating the user experience: A practical guide for creating useful UX documentation*. John Wiley & Sons. [https://www.wiley.com/en-us/Communicating+the+User+Experience%3A+A+Practical+Guide+for+Creating+Useful+UX+Documentation-p-9781119971108](https://www.wiley.com/en-us/Communicating+the+User+Experience%3A+A+Practical+Guide+for+Creating+Useful+UX+Documentation-p-9781119971108)
* **Chivukula, S. S.** (2024). *Universal methods of ethical design: 100 ways to design responsibly, transparently, and humanely*. Rockport Publishers. [https://www.quarto.com/books/9780760375167/universal-methods-of-ethical-design](https://www.quarto.com/books/9780760375167/universal-methods-of-ethical-design)
* **Colborne, G.** (2010). *Simple and usable web, mobile, and interaction design*. New Riders. [https://www.peachpit.com/store/simple-and-usable-web-mobile-and-interaction-design-9780321703545](https://www.peachpit.com/store/simple-and-usable-web-mobile-and-interaction-design-9780321703545)
* **Cooper, A., Reimann, R., Cronin, D., & Noessel, C.** (2014). *About face: The essentials of interaction design* (4th ed.). John Wiley & Sons. [https://www.wiley.com/en-us/About+Face%3A+The+Essentials+of+Interaction+Design%2C+4th+Edition-p-9781118766408](https://www.wiley.com/en-us/About+Face%3A+The+Essentials+of+Interaction+Design%2C+4th+Edition-p-9781118766408)
* **Garrett, J. J.** (2011). *The elements of user experience: User-centered design for the Web and beyond* (2nd ed.). New Riders. [https://www.oreilly.com/library/view/the-elements-of/9780321688651/](https://www.oreilly.com/library/view/the-elements-of/9780321688651/)
* **Goodwin, K.** (2009). *Designing for the digital age: How to create human-centered products and services*. John Wiley & Sons. [https://www.wiley.com/en-us/Designing+for+the+Digital+Age%3A+How+to+Create+Human-Centered+Products+and+Services-p-9780470229101](https://www.wiley.com/en-us/Designing+for+the+Digital+Age%3A+How+to+Create+Human-Centered+Products+and+Services-p-9780470229101)
* **Hanington, B., & Martin, B.** (2012). *Universal methods of design: 100 ways to research complex problems, develop innovative ideas, and design effective solutions*. Rockport Publishers. [https://www.quarto.com/books/9781592537563/universal-methods-of-design](https://www.quarto.com/books/9781592537563/universal-methods-of-design)
* **Hoekman, R., Jr., & Spool, J.** (2009). *Web anatomy: Interaction design frameworks that work*. New Riders. [https://www.peachpit.com/store/web-anatomy-interaction-design-frameworks-that-work-9780321635020](https://www.peachpit.com/store/web-anatomy-interaction-design-frameworks-that-work-9780321635020)
* **Hoober, S.** (2024). *Touch design for mobile interfaces: Designing for how people actually hold and touch devices*. Smashing Magazine. [https://www.smashingmagazine.com/printed-books/touch-design/](https://www.smashingmagazine.com/printed-books/touch-design/)
* **Hoober, S., & Berkman, E.** (2012). *Designing mobile interfaces: Patterns for interaction design*. O'Reilly Media. [https://www.oreilly.com/library/view/designing-mobile-interfaces/9781449302788/](https://www.oreilly.com/library/view/designing-mobile-interfaces/9781449302788/)
* **Krug, S.** (2014). *Don't make me think, revisited: A common sense approach to Web usability* (3rd ed.). New Riders. [https://sensible.com/dont-make-me-think/](https://sensible.com/dont-make-me-think/)
* **Lidwell, W., Holden, K., & Butler, J.** (2023). *Universal principles of design: 150 essential ways to research complex problems, develop innovative ideas, and design effective solutions* (3rd ed.). Rockport Publishers. [https://www.quarto.com/books/9780760375167/universal-principles-of-design](https://www.quarto.com/books/9780760375167/universal-principles-of-design)
* **McKay, E.** (2013). *UI is communication: How to design intuitive, user centered interfaces by focusing on effective communication*. Morgan Kaufmann. [https://www.elsevier.com/books/ui-is-communication/mckay/978-0-12-396980-4](https://www.elsevier.com/books/ui-is-communication/mckay/978-0-12-396980-4)
* **Nielsen, J.** (1994). *10 usability heuristics for user interface design*. Nielsen Norman Group. [https://www.nngroup.com/articles/ten-usability-heuristics/](https://www.nngroup.com/articles/ten-usability-heuristics/)
* **Nielsen, J., & Mack, R. L.** (Eds.). (1994). *Usability inspection methods*. John Wiley & Sons. [https://www.wiley.com/en-us/Usability+Inspection+Methods-p-9780471018773](https://www.wiley.com/en-us/Usability+Inspection+Methods-p-9780471018773)
* **Norman, D. A.** (2013). *The design of everyday things* (Revised and expanded ed.). Basic Books. [https://www.basicbooks.com/titles/don-norman/the-design-of-everyday-things/9780465050659/](https://www.basicbooks.com/titles/don-norman/the-design-of-everyday-things/9780465050659/)
* **Pereyra, I.** (2023). *Universal principles of UX: 100 timeless strategies to create positive interactions between people and technology*. Rockport Publishers. [https://www.quarto.com/books/9780760378045/universal-principles-of-ux](https://www.quarto.com/books/9780760378045/universal-principles-of-ux)
* **Rubin, J., Chisnell, D., & Spool, J.** (2008). *Handbook of usability testing: How to plan, design, and conduct effective tests* (2nd ed.). John Wiley & Sons. [https://www.wiley.com/en-us/Handbook+of+Usability+Testing%3A+How+to+Plan%2C+Design%2C+and+Conduct+Effective+Tests%2C+2nd+Edition-p-9780470185483](https://www.wiley.com/en-us/Handbook+of+Usability+Testing%3A+How+to+Plan%2C+Design%2C+and+Conduct+Effective+Tests%2C+2nd+Edition-p-9780470185483)
* **Saffer, D.** (2010). *Designing for interaction: Creating innovative applications and devices* (2nd ed.). New Riders. [https://www.peachpit.com/store/designing-for-interaction-creating-innovative-applications-9780321606990](https://www.peachpit.com/store/designing-for-interaction-creating-innovative-applications-9780321606990)
* **Scott, B., & Neil, T.** (2009). *Designing web interfaces: Principles and patterns for rich interactions*. O'Reilly Media. [https://www.oreilly.com/library/view/designing-web-interfaces/9780596516253/](https://www.oreilly.com/library/view/designing-web-interfaces/9780596516253/)
* **Tidwell, J., Brewer, C., & Valencia, A.** (2020). *Designing interfaces: Patterns for effective interaction design* (3rd ed.). O'Reilly Media. [https://www.oreilly.com/library/view/designing-interfaces-3rd/9781492051954/](https://www.oreilly.com/library/view/designing-interfaces-3rd/9781492051954/)
* **Tognazzini, B.** (2014). *First principles of interaction design* (Revised ed.). AskTog. [https://asktog.com/atc/principles-of-interaction-design/](https://asktog.com/atc/principles-of-interaction-design/)
* **Weinschenk, S.** (2020). *100 things every designer needs to know about people* (2nd ed.). New Riders. [https://www.peachpit.com/store/100-things-every-designer-needs-to-know-about-people-9780136746911](https://www.peachpit.com/store/100-things-every-designer-needs-to-know-about-people-9780136746911)
* **Wigdor, D., & Wixon, D.** (2011). *Brave NUI world: Designing natural user interfaces for touch and gesture*. Morgan Kaufmann. [https://www.elsevier.com/books/brave-nui-world/wigdor/978-0-12-382231-4](https://www.elsevier.com/books/brave-nui-world/wigdor/978-0-12-382231-4)
* **Wilson, C.** (2014). *User interface inspection methods: A user-centered design method*. Morgan Kaufmann. [https://www.elsevier.com/books/user-interface-inspection-methods/wilson/978-0-12-410391-7](https://www.elsevier.com/books/user-interface-inspection-methods/wilson/978-0-12-410391-7)
* **Yablonski, J.** (2020). *Laws of UX: Using psychology to design better products & services*. O'Reilly Media. [https://lawsofux.com/](https://lawsofux.com/)

---

### 🎨 Design Systems, Typographic Architecture & Content Strategy

* **Anne, J., Suarez, M., Sylor-Miller, K., Mounter, D., & Stanfield, R.** (2019). *Design systems handbook*. DesignBetter.Co / InVision. [https://www.designbetter.co/design-systems-handbook](https://www.designbetter.co/design-systems-handbook)
* **Barr, C., & Senior Editors of Yahoo!.** (2010). *The Yahoo! style guide: The ultimate sourcebook for writing, editing, and creating content for the digital world*. St. Martin's Griffin. [https://yahoostyleguide.wordpress.com/](https://yahoostyleguide.wordpress.com/)
* **Boulton, M.** (2009). *A practical guide to designing for the Web*. Five Simple Steps. [https://www.markboulton.co.uk/](https://www.markboulton.co.uk/)
* **Brown, T.** (2013). *A pocket guide to combining typefaces*. Five Simple Steps.
* **Brown, T.** (2018). *Flexible typesetting*. A Book Apart. [https://abookapart.com/products/flexible-typesetting](https://abookapart.com/products/flexible-typesetting)
* **Cederholm, D.** (2011). *Bulletproof Web design: Improving flexibility and protecting against worst-case scenarios with XHTML and CSS* (3rd ed.). New Riders. [https://www.peachpit.com/store/bulletproof-web-design-improving-flexibility-and-protecting-9780321743527](https://www.peachpit.com/store/bulletproof-web-design-improving-flexibility-and-protecting-9780321743527)
* **Cederholm, D.** (2014). *CSS3 for Web designers* (2nd ed.). A Book Apart. [https://abookapart.com/products/css3-for-web-designers](https://abookapart.com/products/css3-for-web-designers)
* **Clarke, A.** (2010). *Hardboiled Web design*. Five Simple Steps.
* **Clarke, A.** (2019). *Art direction for the Web*. Smashing Magazine. [https://www.smashingmagazine.com/printed-books/art-direction-for-the-web/](https://www.smashingmagazine.com/printed-books/art-direction-for-the-web/)
* **Frost, B.** (2016). *Atomic design*. Brad Frost Web. [https://atomicdesign.bradfrost.com/](https://atomicdesign.bradfrost.com/)
* **Google.** (n.d.). *Material Design 3: Google's open-source design system*. Retrieved November 3, 2026, from [https://m3.material.io/](https://m3.material.io/)
* **Greenwood, T.** (2021). *Sustainable Web design*. A Book Apart. [https://abookapart.com/products/sustainable-web-design](https://abookapart.com/products/sustainable-web-design)
* **Hall, E.** (2018). *Conversational design*. A Book Apart. [https://abookapart.com/products/conversational-design](https://abookapart.com/products/conversational-design)
* **IBM.** (n.d.). *Carbon Design System: IBM's open-source design system for products and digital experiences*. Retrieved November 3, 2026, from [https://carbondesignsystem.com/](https://carbondesignsystem.com/)
* **Jehl, S.** (2014). *Responsible responsive design*. A Book Apart. [https://abookapart.com/products/responsible-responsive-design](https://abookapart.com/products/responsible-responsive-design)
* **Kholmatova, A.** (2017). *Design systems: A practical guide to creating design languages for digital products*. Smashing Magazine. [https://www.smashingmagazine.com/design-systems-book/](https://www.smashingmagazine.com/design-systems-book/)
* **Kissane, E.** (2011). *The elements of content strategy*. A Book Apart. [https://abookapart.com/products/the-elements-of-content-strategy](https://abookapart.com/products/the-elements-of-content-strategy)
* **Kubie, S.** (2018). *Writing for designers*. A Book Apart. [https://abookapart.com/products/writing-for-designers](https://abookapart.com/products/writing-for-designers)
* **Marcotte, E.** (2011). *Responsive Web design*. A Book Apart. [https://abookapart.com/products/responsive-web-design](https://abookapart.com/products/responsive-web-design)
* **McGuane, E.** (2023). *Design by definition*. A Book Apart. [https://abookapart.com/products/design-by-definition](https://abookapart.com/products/design-by-definition)
* **Meyer, E. A., & Wachter-Boettcher, S.** (2016). *Design for real life*. A Book Apart. [https://abookapart.com/products/design-for-real-life](https://abookapart.com/products/design-for-real-life)
* **Monteiro, M.** (2012). *Design is a job*. A Book Apart. [https://abookapart.com/products/design-is-a-job](https://abookapart.com/products/design-is-a-job)
* **Santa Maria, J.** (2014). *On Web typography*. A Book Apart. [https://abookapart.com/products/on-web-typography](https://abookapart.com/products/on-web-typography)
* **Spencer, D.** (2010). *A practical guide to information architecture*. Five Simple Steps. [https://rosenfeldmedia.com/books/card-sorting/](https://rosenfeldmedia.com/books/card-sorting/)
* **Suda, B.** (2010). *A practical guide to designing with data*. Five Simple Steps.
* **Walter, A.** (2011). *Designing for emotion*. A Book Apart. [https://abookapart.com/products/designing-for-emotion](https://abookapart.com/products/designing-for-emotion)
* **Wroblewski, L.** (2011). *Mobile first*. A Book Apart. [https://abookapart.com/products/mobile-first](https://abookapart.com/products/mobile-first)

---

### 🌐 Living Web Standards, Technical Specifications & Expert Resources

* **Andrew, R.** (2017). *The new CSS layout*. A Book Apart. [https://abookapart.com/products/the-new-css-layout](https://abookapart.com/products/the-new-css-layout)
* **Andrew, R.** (n.d.). *CSS Grid by example*. [https://gridbyexample.com/](https://gridbyexample.com/)
* **Argyle, A., & Kravets, U.** (n.d.). *The CSS Podcast*. Google Chrome Developers. [https://thecsspodcast.libsyn.com/](https://thecsspodcast.libsyn.com/)
* **Atkins, T., Etemad, E. J., & CSS Working Group.** (2024). *CSS Container Queries Level 1* (W3C Working Draft). World Wide Web Consortium. [https://www.w3.org/TR/css-contain-3/](https://www.w3.org/TR/css-contain-3/)
* **Bidelman, E., & Google Chrome Developers.** (n.d.). *web.dev: Guidance for modern web development*. Google. [https://web.dev/](https://web.dev/)
* **Coyier, C.** (2024). *A complete guide to CSS Grid*. CSS-Tricks. [https://css-tricks.com/snippets/css/complete-guide-grid/](https://css-tricks.com/snippets/css/complete-guide-grid/)
* **Coyier, C.** (2024). *A complete guide to Flexbox*. CSS-Tricks. [https://css-tricks.com/snippets/css/a-guide-to-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* **Frain, B.** (2020). *Responsive Web design with HTML5 and CSS: Develop future-proof responsive websites using the latest HTML5 and CSS techniques* (3rd ed.). Packt Publishing. [https://www.packtpub.com/product/responsive-web-design-with-html5-and-css-third-edition/9781839211560](https://www.packtpub.com/product/responsive-web-design-with-html5-and-css-third-edition/9781839211560)
* **Powell, K.** (n.d.). *Kevin Powell — CSS Evangelist* [YouTube channel]. YouTube. [https://www.youtube.com/@KevinPowell](https://www.youtube.com/@KevinPowell)
* **Soueidan, S.** (n.d.). *Practical accessibility & modern CSS*. [https://www.sarasoueidan.com/](https://www.sarasoueidan.com/)
* **The A11Y Project.** (n.d.). *The A11Y Project: A community-driven effort to make digital accessibility easier*. [https://www.a11yproject.com/](https://www.a11yproject.com/)
* **Van Damme, B.** (n.d.). *Scroll-driven animations*. Google Chrome Developers. [https://scroll-driven-animations.style/](https://scroll-driven-animations.style/)
* **Verou, L.** (2015). *CSS secrets: Better solutions to everyday web design problems*. O'Reilly Media. [https://www.oreilly.com/library/view/css-secrets/9781449372620/](https://www.oreilly.com/library/view/css-secrets/9781449372620/)
* **WHATWG.** (2026). *HTML Living Standard*. Web Hypertext Application Technology Working Group. [https://html.spec.whatwg.org/multipage/](https://html.spec.whatwg.org/multipage/)
* **World Wide Web Consortium.** (2023). *Web Content Accessibility Guidelines (WCAG) 2.2* (W3C Recommendation). W3C. [https://www.w3.org/TR/WCAG22/](https://www.w3.org/TR/WCAG22/)

---

## ⚖️ Academic Integrity, Code Ethics & Generative AI

Students enrolled in WD101 are encouraged to experiment with generative AI tools and Agentic Development Environments (ADE) as pair-programming mentors, following the pedagogical model detailed in [`ai-mentor-guide.html`](ai-mentor-guide.html) and [`AI-MENTOR-TRANSITION-GUIDE.md`](AI-MENTOR-TRANSITION-GUIDE.md).

However, following the **University of Porto Code of Good Practice and AI Adoption (UP 2024)** and FBAUP pedagogical directives:
1. **Authorship is 100% Human:** Students maintain full legal, intellectual, and aesthetic responsibility for their code, design tokens, asset licenses, and accessibility conformance.
2. **Mandatory Colophon & AI Log (`credits.html`):** Every final project must include a dedicated imprint page detailing typography licenses, image credits, syllabus bibliography, and a transparent log of any AI tools used.
3. **In-Person Code Defense:** Evaluation in WD101 relies on in-person studio reviews where students must explain the semantic purpose, cascade order, and responsive mechanics of their submitted source code.

---

*Faculdade de Belas Artes da Universidade do Porto (FBAUP) • Licenciatura em Design de Comunicação*  
*Web Design (WD101) • 2026/2027 • Prof. Pedro Amado (i2ADS)*
