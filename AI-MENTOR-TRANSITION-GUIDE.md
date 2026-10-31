# From Manual Code to Agentic Mastery: The Web Design & Development Transition Guide
## How to Harness Antigravity ADE & IDE as Your Socratic Mentor, Sandboxing Lab, and Quality Assurance Assistant

> **Target Audience:** Communication Design & Web Design Students (FBAUP / WD101), Educators, and Front-End Practitioners.  
> **Pedagogical Direction:** Prof. Pedro Amado (FBAUP / i2ADS — University of Porto)  
> **Course:** Web Design 101 • Academic Year 2026/2027  
> **Toolchain:** Manual Coding (VS Code / Antigravity IDE) $\to$ Agentic Development Environment (Antigravity ADE Mode)

---

## 🧭 Executive Summary & Pedagogical Manifesto

The transition from writing raw HTML, CSS, and JavaScript in a code editor to collaborating with Artificial Intelligence is **not** an abandonment of craft—it is an **amplification of creative and technical agency**. 

In conventional education, generative AI poses a severe risk: the **"Helpful Assistant Trap"**. When an AI immediately generates complete, turnkey code, it robs the learner of the **productive struggle** (Vygotsky's *Zone of Proximal Development*), leading to brittle mental models, copy-paste illusions of competence, and an inability to debug or art-direct complex layouts.

```text
┌────────────────────────────────────────────────────────────────────────┐
│                   THE THREE STAGES OF THE WEB DESIGNER                 │
│                                                                        │
│   STAGE 1: THE BRICKLAYER (Manual Coding in IDE)                       │
│   • Writes every HTML tag, CSS declaration, and path by hand.          │
│   • Internalizes the DOM, Box Model, Cascade, and Normal Flow.         │
│   • Builds visceral intuition for why layouts break.                  │
│                               ▼                                        │
│   STAGE 2: THE ETHICAL TRANSITION (The "Driver's License")             │
│   • Understands syntax enough to evaluate, critique, and reject code. │
│   • Adopts moral & pedagogical guardrails: AI is tutor, not ghostwriter.│
│                               ▼                                        │
│   STAGE 3: THE CREATIVE DIRECTOR & ORCHESTRATOR (IDE + ADE Mode)       │
│   • Uses IDE for granular tactile control, inspection, and refinement. │
│   • Uses ADE (Antigravity) for architectural scaffolding, parallel     │
│     learning sandboxes, empirical DevTools drills, and 360° QA audits. │
└────────────────────────────────────────────────────────────────────────┘
```

This guide provides students with a **repeatable, ethical, and highly structured methodology** to turn Antigravity into their personal **Senior Design Technologist, Socratic Tutor, and Strict QA Inspector**.

---

## 1. 📚 Foundational Literature & Pedagogical Frameworks

Before prompting an agent, students and educators must understand the learning science behind AI-assisted development:

### 1.1 Socratic Mentoring vs. The "Oracle Trap"
* **Harvard CS50’s AI Pedagogy (*Teaching CS50 with AI*, Prof. David J. Malan et al.):**  
  Standard LLMs are trained to be "pleasing problem solvers"—they give immediate code answers. CS50 pioneered the **CS50 Duck (`ddb`)**, enforcing hard constraints: the AI must act as a Socratic rubber-duck debugger, offering progressive hints, diagnostic questions, and code explanations without handing over completed solutions.
* **Ethan & Lilach Mollick (Wharton / *Assigning AI: Seven Approaches for Students*):**  
  Establishes the **"AI Tutor" and "AI Coach"** paradigms. Requires students to articulate what they already know and what they suspect is wrong *before* the AI provides insights, preventing passive cognitive offloading.
* **Productive Struggle & Cognitive Load (Wood, Bruner & Ross / Vygotsky):**  
  Learning happens at the boundary of challenge. If an agent writes the CSS Grid layout for you, your brain never forms the spatial schema of track sizing, auto-placement algorithms, or explicit vs. implicit grids.

### 1.2 The "Driver's License" Metaphor: When are you ready?
You are ready to invite Antigravity ADE into your project when you can answer **"YES"** to all four questions:
1. Can you build a semantic, unstyled HTML5 document using appropriate landmarks (`<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`) from memory?
2. Can you explain the difference between the Content Box, Padding Box, Border Box, and Margin Box in the browser DevTools?
3. Can you debug a broken image or stylesheet path by reading the console 404 error and understanding relative paths (`../`, `./`)?
4. Do you have the discipline to **reject** AI suggestions you do not understand?

---

## 2. 🏗️ The Dual-Engine Architecture: IDE vs. ADE

Antigravity operates in two complementary modalities. Understanding their roles is crucial:

| Dimension | The IDE Mode (Visual Studio Code / Antigravity Editor) | The ADE Mode (Agentic Development Environment) |
| :--- | :--- | :--- |
| **Primary Interaction** | Keystrokes, tactile cursor editing, file navigation, syntax highlights. | Natural language specs, autonomous tool execution, subagent orchestration. |
| **Role in Learning** | **The Workbench:** Where you write the core bones, read code line-by-line, and make fine aesthetic adjustments. | **The Senior Architect & QA Lab:** Where you ask for architectural reviews, generate parallel learning sandboxes, and audit edge cases. |
| **Cognitive Stance** | Focus, muscle memory, syntax mastery. | Critical thinking, prompt precision, verification, systems design. |
| **Browser Relationship**| Live Server / localhost inspection. | Direct workspace inspection, terminal tasks, automated sanity testing. |

---

## 3. 🔄 The 4-Phase Transition Workflow

```text
Phase 1: Scaffolding (Prompt ADE for semantic boilerplate & spec)
   │
   ▼
Phase 2: IDE Inspection (Manual review, line-by-line understanding)
   │
   ├─► Stuck on a concept? ──► Phase 3: Socratic Sandbox (Prompt ADE for /demos/ lab)
   │                                  │
   │                                  ▼
   │                             Explore Demo in Browser DevTools (MDN Links + experiments)
   │                                  │
   ▼                                  ▼
Phase 4: 360° Quality Audit (File, Link, Cache, Media & A11y checklist)
   │
   ▼
Verified Production Deployment (GitHub Pages / Web Server)
```

---

### Phase 1: Structural Scaffolding & Boilerplates

Never ask an agent: *"Build me a festival website."* That is a black-box prompt that produces generic, bloated code. Instead, use **Spec-Driven Scaffolding**:

#### The Golden Rule of Scaffolding Prompts:
1. State the **semantic purpose** and document outline.
2. State the **technical constraints** (e.g. Pure CSS, modern semantic landmarks, no unnecessary wrapper `<div>`s, `@layer` architecture).
3. Request **code commentary** explaining the semantic justification of every element.

```markdown
<!-- Bad Prompt -->
"Make a responsive navbar and hero section for my vinyl festival."

<!-- Good Socratic Scaffold Prompt -->
"Act as a Senior Web Architect and Design Technologist.
I am designing the semantic HTML5 skeleton for our festival capstone project.
Generate ONLY the semantic HTML5 structure for:
1. A site header with accessible navigation landmarks.
2. A hero section featuring an artist showcase and primary call-to-action.
3. An editorial article section with a timestamp and author credits.

Constraints:
- Follow the HTML5 Living Standard strictly; use zero presentational <div>s.
- Include proper ARIA landmarks where native HTML tags need reinforcement.
- Add inline HTML comments explaining WHY each tag was chosen over alternatives.
- Do NOT generate CSS yet. I will inspect and write the styles in my IDE."
```

#### What to do once the boilerplate arrives:
1. Open the file in your **IDE**.
2. Read every single line from top to bottom.
3. If an attribute or tag is unfamiliar (e.g. `<time datetime="...">` or `role="region"`), **pause**. Ask Antigravity in ADE mode:
   > *"Explain the difference between `<time datetime="...">` and plain text. How do search engines and screen readers consume this attribute?"*

---

### Phase 2: The Socratic Sandbox Pattern ("Parallel Learning Demos")

When you encounter an unfamiliar or complex CSS/JS feature—such as **CSS Grid `grid-auto-flow: dense`**, **`:has()` relational selectors**, **Container Queries (`@container`)**, or **Scroll-Driven Animations (`scroll(root)`)**—**DO NOT** let the AI inject untested snippets directly into your main project!

Instead, invoke the **Socratic Sandbox Pattern**: prompt Antigravity to build an isolated, barebones educational demonstrator in a dedicated subfolder (e.g. `demos/sandbox-<concept>/` or `learning-scaffold/demos/`).

#### Blueprint of a Parallel Learning Demo:
Every demo generated by Antigravity must contain:
1. **`index.html`**: Barebones, valid markup with zero framework bloat.
2. **`styles.css`**: Heavily annotated CSS with CSS Custom Properties and visual borders/tints to reveal the layout mechanics.
3. **Step-by-Step Educational Commentary**: Explaining the default behavior vs. the modified behavior.
4. **Authoritative MDN Web Docs Links**: Direct links to the relevant MDN living documentation.
5. **"Try It Yourself" Browser Challenges**: 3 specific modifications the student must make inside browser DevTools.

```markdown
<!-- Socratic Sandbox Prompt Template -->
"Antigravity, I am struggling to understand how CSS Grid 'minmax()' and 'grid-auto-flow: dense' work together in an asymmetric gallery.

Please create a self-contained learning demo in the folder:
'demos/sandbox-grid-dense/'

Requirements for the demo:
1. 'index.html': A simple page with 8 cards of varying sizes (small, medium, hero).
2. 'styles.css': Pure CSS using modern CSS Grid. Use bright debug backgrounds or outline colors so I can visually see the grid tracks.
3. Provide direct markdown links to the official MDN documentation for:
   - 'grid-template-columns'
   - 'minmax()'
   - 'grid-auto-flow'
4. Write 3 'DevTools Experiments' as HTML comments at the top of the file, instructing me on which CSS values to toggle in the browser to see the layout re-pack itself."
```

---

### Phase 3: The Browser & DevTools Empirical Feedback Loop

A web designer's primary laboratory is **not** the code editor; it is the **Browser DevTools** (Chrome, Firefox, or Safari). Code is purely a set of instructions; what the browser renders is the empirical truth.

Antigravity should be explicitly prompted to give you **DevTools action items**:

```markdown
<!-- DevTools Guidance Prompt -->
"I have applied CSS Grid to my main festival lineup, but on mobile (<540px) my cards are overflowing horizontally off the screen.
Do NOT just rewrite my CSS.
Guide me through debugging this using the Chrome/Firefox DevTools:
1. Tell me which panels to open (Elements, Computed, Console, Layout).
2. Tell me which badges (e.g., 'grid', 'flex', 'scroll') to toggle.
3. Explain how to identify which child element is forcing the container's width past 100vw.
4. Give me a hypothesis on what property might be causing it (e.g., min-width: auto on flex/grid items)."
```

#### The 5 Essential DevTools Reflexes Every Student Must Practice:
1. **The Box Model Inspector:** Always verify whether `box-sizing: border-box` is applied, and check the calculated padding, margin, and borders in the Computed tab.
2. **The Grid/Flex Badge Toggle:** Click the `grid` or `flex` badge in the DOM tree to visualize track lines, gaps, and cross-axis alignment lines directly on the canvas.
3. **Responsive Device Mode:** Never test responsiveness by merely resizing your desktop window. Use the Device Toolbar (`Cmd+Shift+M` or `Ctrl+Shift+M`), test standard mobile viewports (360px, 390px, 412px), and test orientation flips.
4. **Network Tab (Cache Disabled):** Always check the Network tab with *"Disable cache"* checked when DevTools is open. Check status codes (200 OK vs. 304 Not Modified vs. 404 Not Found) and asset weights.
5. **The Console Tab:** Keep the Console open. A production page must have **zero red errors** (no failed font loads, no broken images, no unhandled exceptions).

---

### Phase 4: The 360° Craftsmanship & Quality Checklist

Before committing code or deploying to a web server (such as GitHub Pages or an institutional Apache/Nginx server), prompt Antigravity to act as your **Strict Quality Inspector** using this battle-tested checklist:

```text
┌────────────────────────────────────────────────────────────────────────┐
│             THE 360° WEB DESIGN QUALITY CHECKLIST                      │
├────────────────────────────────────────────────────────────────────────┤
│ 1. FILE & ASSET ARCHITECTURE                                           │
│    [ ] Strictly lowercase, kebab-case file & folder names (no spaces,  │
│        no accents: use 'album-cover.webp', not 'Álbum Cover 2.WEBP').  │
│    [ ] Predictable hierarchy: /assets/css/, /assets/fonts/, /assets/img│
│    [ ] RELATIVE PATH AUDIT: Use relative paths ('./css/styles.css' or  │
│        '../assets/img/hero.webp') instead of root-relative ('/css/')   │
│        so pages run smoothly both locally and on GitHub Pages subpaths.│
│                                                                        │
│ 2. WEB SERVER, CACHING & DEPLOYMENT                                    │
│    [ ] Cache awareness: Verify if browser or proxy cache is serving    │
│        stale CSS/assets. Use Hard Refresh ('Cmd+Shift+R') to test.     │
│    [ ] Cache-busting test: Append '?v=1.1' to stylesheet links when    │
│        diagnosing stubborn server caching during live critique.        │
│    [ ] Ensure directory index: Main entry file is always 'index.html'. │
│                                                                        │
│ 3. TYPOGRAPHY & WEB FONTS                                              │
│    [ ] Modern font format: Local WOFF2 fonts with local fallbacks.     │
│    [ ] 'font-display: swap;' declared on all @font-face rules to       │
│        prevent Flash of Invisible Text (FOIT).                         │
│    [ ] Fallback font stack: Always end with 'sans-serif' or 'serif'.   │
│                                                                        │
│ 4. MEDIA & RESPONSIVE ASSETS                                           │
│    [ ] Modern formats: WebP or AVIF with fallback JPG/PNG.             │
│    [ ] Aspect Ratio & CLS: Every <img> and <video> has explicit        │
│        'width' and 'height' attributes or 'aspect-ratio' in CSS.       │
│    [ ] Art direction: Uses <picture> and <source media="..."> for      │
│        different image crops across mobile and desktop.                │
│    [ ] Decorative SVGs: Cleaned of inline editor garbage (Inkscape/    │
│        Illustrator metadata); proper 'viewBox' attributes declared.    │
│                                                                        │
│ 5. LAYOUT, VISIBILITY & POSITIONING                                    │
│    [ ] Mobile-First Foundation: Base styles work seamlessly at 320px;  │
│        media queries expand progressively via 'min-width'.             │
│    [ ] Golden Layout Rule: CSS Grid for 2D macro layout; Flexbox for   │
│        1D micro-alignment.                                             │
│    [ ] Overflow sanity: Zero accidental horizontal scrollbars on mobile│
│    [ ] Stacking Contexts: Sensible z-index scale (e.g. 1, 10, 100).    │
│                                                                        │
│ 6. ACCESSIBILITY (WCAG 2.2 AAA / AA)                                  │
│    [ ] Valid heading hierarchy: Single <h1>; no skipped levels.        │
│    [ ] Contrast ratio: Minimum 4.5:1 for body text against background. │
│    [ ] Informative alt text on content images; alt="" on decorative.   │
│    [ ] Focus states: Distinct, high-contrast ':focus-visible' outline. │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 4. 🤖 The Student Prompt Library: 5 Reusable Archetypes

Save these prompt templates into your project workspace or custom Antigravity rules (`.gemini/antigravity/rules/` or project `AGENTS.md`) to summon the exact agent persona you need:

### Prompt 1: The Socratic Tutor (Concept Learning)
```text
"You are my Web Design Tutor at FBAUP. I am currently learning [CONCEPT, e.g. CSS @layer and specificity]. 
Do NOT write my project code for me. 
Instead:
1. Explain the mental model of this concept using a clear real-world analogy.
2. Provide a 10-line minimal, barebones HTML/CSS code snippet showing how it behaves.
3. Link me to the official MDN Web Docs reference for this feature.
4. Ask me two diagnostic questions to test if I truly understood how it works."
```

### Prompt 2: The Socratic Sandbox Generator
```text
"You are my Lab Demonstrator. I am confused by how [CSS PROPERTY, e.g. position: sticky] works when parent elements have [overflow: hidden].
Please create an educational sandbox folder inside 'demos/sandbox-sticky-overflow/' containing:
- 'index.html': A clean, valid barebones page demonstrating both the broken case and the fixed case.
- 'styles.css': Heavily commented styles with visual debug borders.
- Include 3 specific steps for me to test inside Chrome/Firefox DevTools to observe the stacking and scroll behavior."
```

### Prompt 3: The Code Reviewer & Architect
```text
"You are a Senior Design Technologist and Code Reviewer. Review my stylesheet [PATH, e.g. css/styles.css] and markup [PATH, e.g. index.html].
Critique my code according to the following strict criteria:
1. Semantic accuracy: Are there unnecessary <div> wrappers? Are landmarks used correctly?
2. Layout architecture: Am I violating the rule of using Grid for 2D and Flexbox for 1D?
3. Maintainability: Am I using CSS variables for colors, spacing, and typography?
4. Do not rewrite everything at once. Highlight the 3 most critical improvements and explain the 'why' behind each."
```

### Prompt 4: The Empirical DevTools Debugger
```text
"I am experiencing a layout bug: [DESCRIBE BUG, e.g. My navigation items are squishing together instead of wrapping on narrow mobile screens].
Here is my current HTML and CSS snippet:
[PASTE SNIPPET]

Do NOT just fix the code. Guide me through diagnosing it in my browser:
1. What DevTools panel should I open?
2. Which computed properties should I inspect on the parent and child?
3. What is the browser's default calculation that is causing this behavior?
4. What is the single CSS rule that corrects it, and why?"
```

### Prompt 5: The Pre-Deployment QA Inspector
```text
"Act as a strict Web Quality Assurance Lead. Audit my project in [FOLDER PATH, e.g. TP11-integrated-responsive-project/].
Check every file against the 360° Web Quality Checklist:
1. File and folder naming (casing, spaces, special characters).
2. Relative vs. absolute paths in <link>, <script>, and <img> elements.
3. Font loading strategies (@font-face, WOFF2, font-display: swap).
4. Responsive image syntax (<picture>, srcset, dimensions for CLS).
5. Output a structured report with 'PASSED', 'WARNING', and 'CRITICAL DEFECT', along with immediate actionable fixes."
```

---

## 5. 🌐 Curated Online Resources & Essential Reading

Here is the essential syllabus of authoritative resources to bookmark and explore:

### Pedagogy & AI in Programming
1. **Teaching CS50 with AI (Harvard University):**  
   *David J. Malan et al.* — Explains why unconstrained LLMs are harmful to beginners and how Socratic guardrails cultivate genuine understanding.  
   [https://cs50.harvard.edu](https://cs50.harvard.edu)
2. **Assigning AI: Seven Approaches for Students (Wharton School):**  
   *Ethan R. Mollick & Lilach Mollick* — Practical strategies for students using AI as tutor, coach, team player, and simulator.  
   [https://oneusefulthing.org](https://oneusefulthing.org)
3. **The AI Pedagogy Project (metaLAB at Harvard):**  
   Curated assignment ideas, critical prompts, and reflective exercises for creative and code-based disciplines.  
   [https://aipedagogy.org](https://aipedagogy.org)

### Living Web Standards & MDN Documentation
4. **MDN Web Docs — Learn Web Development:**  
   The definitive, community-maintained living standard reference for HTML5, CSS layout, and Web APIs.  
   [https://developer.mozilla.org/en-US/docs/Learn](https://developer.mozilla.org/en-US/docs/Learn)
5. **web.dev by Google Chrome Team:**  
   In-depth guides on Core Web Vitals, modern CSS layouts (`:has()`, container queries), and responsive media.  
   [https://web.dev/learn/css](https://web.dev/learn/css)
6. **The Front-End Checklist (David Dias):**  
   The meticulous, industry-standard checklist for HTML, CSS, assets, performance, and SEO before shipping.  
   [https://frontendchecklist.io](https://frontendchecklist.io)
7. **The A11Y Project:**  
   A community-driven effort to make digital accessibility easier to understand and implement.  
   [https://www.a11yproject.com](https://www.a11yproject.com)

---

## 6. 🎓 Conclusion: The Designer-Technologist of Tomorrow

The most capable web designers of the next decade will neither be those who fear AI and refuse to touch it, nor those who passively surrender their craft to automated code generators.

The master designer-technologists will be those who **understand the craft deeply with their own hands**, and who orchestrate AI agents like **Antigravity ADE** as an intellectual extension of their design intent:
- Questioning every line of code,
- Testing every layout empirically in the browser,
- Insisting on universal accessibility and semantic integrity,
- And elevating web design into an art form of structured communication.
