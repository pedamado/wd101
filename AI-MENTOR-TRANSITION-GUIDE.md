# From Manual Code to Agentic Mastery: The Web Design & Development Transition Guide
## How to Harness Antigravity ADE & IDE as Your Socratic Mentor, Sandboxing Lab, and Quality Assurance Assistant

> **Target Audience:** Communication Design & Web Design Students (FBAUP / WD101), Educators, and Front-End Practitioners.  
> **Pedagogical Direction:** Prof. Pedro Amado (FBAUP / i2ADS — University of Porto)  
> **Course:** Web Design 101 • Academic Year 2026/2027  
> **Institutional Framework:** *Orientações para o Uso e Adoção Responsável de Inteligência Artificial Generativa no Domínio Educativo da Universidade do Porto (Junho de 2026)* • Despacho N.º GR. 08/05/2025 • Código de Conduta e Boas Práticas da U.Porto.  
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
│   • Complies with University of Porto Ethical & Traffic Light Rules.  │
│                               ▼                                        │
│   STAGE 3: THE CREATIVE DIRECTOR & ORCHESTRATOR (IDE + ADE Mode)       │
│   • Uses IDE for granular tactile control, inspection, and refinement. │
│   • Uses ADE (Antigravity) for architectural scaffolding, parallel     │
│     learning sandboxes, empirical DevTools drills, and 360° QA audits. │
└────────────────────────────────────────────────────────────────────────┘
```

This guide provides students with a **repeatable, ethical, and highly structured methodology** to turn Antigravity into their personal **Senior Design Technologist, Socratic Tutor, and Strict QA Inspector**, in strict alignment with the University of Porto's educational policies.

---

## 1. 🏛️ Institutional Ethics: Universidade do Porto Guidelines

Before prompting an agent, students must internalize the ethical, pedagogical, and legal requirements established by the **Universidade do Porto (Junho de 2026)**:

### 1.1 The Three Inviolable Tenets
1. **Exclusive Human Authorship & Responsibility:**  
   AI is neither an academic author nor a legal entity. You, the student, retain 100% intellectual, aesthetic, and technical responsibility for the submitted code, accessibility compliance (WCAG 2.2 AAA), font licenses, and layout resilience. You cannot deflect blame to the AI for broken layouts or security flaws.
2. **Equity of Access & The Free Functional Standard:**  
   Under U.Porto regulations, no graded coursework can mandate or rely on paid software or proprietary commercial models. All WD101 workflows rely strictly on free, accessible, and open-standard tools: Google Antigravity, Gemini, VS Code, and local Live Server.
3. **Privacy, GDPR & Server Credentials:**  
   **Strict Prohibition:** Never introduce personal information, student peer data, non-public university files, FTP/SSH passwords, or private API keys into public or cloud-based AI tools. All code shared with cloud models must be strictly public, dummy-data-driven, and anonymized.

### 1.2 The "15-Minute Struggle" Rule (U.Porto Study Promptary)
> *"Always attempt on your own for a few minutes before consulting GenAI."*

When facing a layout bug (e.g. sticky navigation failing, a broken grid track, or an unaligned flex row), spend at least **15 minutes** investigating the issue manually using your IDE, the browser Computed panel, and MDN Web Docs. Only after this productive cognitive effort may you consult Antigravity ADE for hypotheses, hints, or Socratic sandboxes.

### 1.3 The "Driver's License" Metaphor: When are you ready?
You are ready to invite Antigravity ADE into your project when you can answer **"YES"** to all four questions:
1. Can you build a semantic, unstyled HTML5 document using appropriate landmarks (`<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`) from memory?
2. Can you explain the difference between the Content Box, Padding Box, Border Box, and Margin Box in the browser DevTools?
3. Can you debug a broken image or stylesheet path by reading the console 404 error and understanding relative paths (`../`, `./`)?
4. Do you have the discipline to **reject** AI suggestions you do not understand?

---

## 2. 🚦 The U.Porto Traffic Light System in Web Design

The University of Porto regulates educational tasks through a three-tier traffic light system:

| Tier | Status | Authorized Web Design Tasks | Student Obligations |
| :--- | :--- | :--- | :--- |
| 🟩 **Green** | **Permitted** (Learning & Scaffolding) | • Explaining modern CSS concepts (`@container`, `light-dark()`, `:has()`).<br>• Generating isolated test sandboxes in `demos/sandbox-*/`.<br>• Quizzes and Socratic autotests.<br>• Creating accessibility checklists and cross-browser test plans.<br>• Clarity review of comments and `README.md`. | • Always verify facts with MDN / W3C specifications.<br>• Empirical browser testing.<br>• Short transparency disclosure if requested. |
| 🟨 **Yellow** | **Conditional** (Process Trace Required) | • Structural HTML5 boilerplate scaffolding under strict student specification.<br>• Diagnostic debugging hypotheses (identifying causes of overflow).<br>• Utility snippet generation (`cubic-bezier()` curves, SVG matrices). | • **Mandatory Process Trace:** semantic Git commits (`feat:`, `fix:`), `/demos/` folder, DevTools screenshots.<br>• **Declaration of AI Use** in `README.md`.<br>• **In-Person Defense:** ability to modify code live. |
| 🟥 **Red** | **Strictly Prohibited** (Academic Fraud) | • Turnkey website generation ("vibe coding" / ghostwriting full pages).<br>• Delegating art direction, visual identity, or typographic scale.<br>• Blind copy-paste debugging without understanding the root cause.<br>• AI usage during closed in-person exams or live assessments.<br>• Inserting server passwords (FTP/SSH) or private credentials into prompts. | • Immediate failure of assignment and formal disciplinary proceedings for academic misconduct. |

---

## 3. 🏗️ The Dual-Engine Architecture: IDE vs. ADE

Antigravity operates in two complementary modalities:

| Dimension | The IDE Mode (Visual Studio Code / Antigravity Editor) | The ADE Mode (Agentic Development Environment) |
| :--- | :--- | :--- |
| **Primary Interaction** | Keystrokes, tactile cursor editing, file navigation, syntax highlights. | Natural language specs, autonomous tool execution, subagent orchestration. |
| **Role in Learning** | **The Workbench:** Where you write the core bones, read code line-by-line, and make fine aesthetic adjustments. | **The Senior Architect & QA Lab:** Where you ask for architectural reviews, generate parallel learning sandboxes, and audit edge cases. |
| **Cognitive Stance** | Focus, muscle memory, syntax mastery. | Critical thinking, prompt precision, verification, systems design. |
| **Browser Relationship**| Live Server / localhost inspection. | Direct workspace inspection, terminal tasks, automated sanity testing. |

---

## 4. 🔄 The 4-Phase Transition Workflow

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
Phase 4: 360° Quality & Ethics Audit (File, Link, Cache, Media, A11y & U.Porto checklist)
   │
   ▼
Verified Production Deployment & In-Person Critique Defense (GitHub Pages / Web Server)
```

### Phase 1: Structural Scaffolding & Boilerplates (Spec-Driven)
Never prompt: *"Build me a festival website."* Instead, request a strict semantic HTML5 skeleton without presentational styling, requiring inline comments explaining why each landmark was chosen.

### Phase 2: IDE Line-by-Line Inspection & Interrogation
Open the generated file in your IDE. Step through every tag with your cursor. If you encounter an unfamiliar attribute (e.g. `<time datetime="...">` or `scope="col"`), interrogate Antigravity ADE before writing any styles.

### Phase 3: The Socratic Sandbox Pattern ("Parallel Learning Demos")
When encountering a complex property (e.g. `grid-auto-flow: dense`, `subgrid`, container queries `@container`, or fluid `clamp()`), do **not** experiment blindly in your capstone project. Prompt Antigravity ADE to build an isolated, barebones demo in `demos/sandbox-<concept>/` featuring:
1. `index.html`: Clean, valid markup demonstrating both the broken case and fixed case.
2. `styles.css`: Heavily annotated styles with visual debug borders.
3. MDN Canonical Links for reference.
4. 3 Browser DevTools challenges to test the limits of the property.

### Phase 4: The Browser & DevTools Empirical Feedback Loop
Your primary validation environment is the browser inspection panel:
- Open the Elements and Computed panels.
- Toggle grid and flex badges to visualize layout lines.
- Audit the Network tab with "Disable cache" checked.
- Ensure the Console tab has zero red errors.

---

## 5. 📝 Process Traceability & Official U.Porto Disclosure Templates

In all **Yellow Light (🟨)** assignments at U.Porto, students must maintain a demonstrable process trace and append an official disclosure statement:

### 5.1 What Constitutes a Process Trace in Web Design?
1. **Semantic Git Commits:** Regular version history showing incremental progress (`feat: implement mobile grid`, `fix: remove sticky overflow trap`).
2. **Intermediate Sandboxes:** The `/demos/` subfolder preserving self-contained experimental prototypes.
3. **DevTools Captures:** Screenshots of box-model or layout line debugging sessions.
4. **README Notes:** Brief changelog documenting decisions and what was accepted or rejected from AI prompts.

### 5.2 Template 1: Short Declaration in `README.md` (U.Porto Annex B1)
```markdown
### 🤖 Declaração de Uso de Inteligência Artificial Generativa
* **Ferramenta & Versão:** Google Antigravity / Gemini 3.8 Flash (acesso gratuito).
* **Âmbito:** Apoio auxiliar com impacto limitado (Semáforo Amarelo 🟨).
* **Finalidade:** Esclarecimento de sintaxe de seletores relacionais `:has()` e geração de sandbox isolada para teste de `minmax()`.
* **O que foi gerado:** Esqueleto inicial da secção de lineup musical em `demos/sandbox-grid/` e sugestões de reestruturação de tags.
* **O que foi verificado manualmente:** Conformidade com a Living Standard da MDN Web Docs, validação de rácio de contraste WCAG 2.2 AAA no painel Lighthouse, e funcionamento cross-browser em Chrome, Firefox e Safari.
* **Rasto de Processo:** 12 commits semânticos no repositório Git e pasta `/demos/sandbox-grid/` anexada.
* **Responsabilidade:** O autor assume integral responsabilidade intelectual e técnica pelo código final entregue.
```

### 5.3 Template 2: Brief Prompt Log (U.Porto Annex B3)
```markdown
| Data | Prompt / Questão Submetida | Output da IA (Resumo) | Decisão do Estudante (O que aceitei / rejeitei e porquê) |
| :--- | :--- | :--- | :--- |
| 2026-10-18 | "Como fazer sticky nav que muda de cor ao descer sem JS?" | Sugeriu scroll-driven animations com animation-timeline: scroll(). | Aceitei a sintaxe de scroll(); rejeitei as cores sugeridas para manter a paleta do festival. |
| 2026-10-24 | "Porque é que o meu grid-template-columns quebra a 480px?" | Apontou que os cartões tinham min-width: 320px rígido. | Aceitei a correção usando minmax(0, 1fr) após testar no painel Layout das DevTools. |
```

### 5.4 Template 3: Structured Declaration for Capstone Projects (U.Porto Annex B2 / GAIDeT)
```markdown
### Declaração Estruturada de Uso de IA (Capstone TP11 / FBAUP)
* **Identificação do Trabalho:** DRUMTIKS '26 • Integrated Capstone Project
* **Estudante / Turma:** [Nome do Estudante] • Design de Comunicação (WD101)
* **Docente Responsável:** Prof. Pedro Amado
* **Ferramenta(s) e Período:** Antigravity ADE / Gemini (Outubro - Novembro 2026)
* **Âmbito do Uso:** [x] Apoio auxiliar com impacto limitado   [ ] Contributo substantivo

* **Tarefas Delegadas à IA (Assinalar):**
  [ ] Conceptualização e Ideação Visual (Autoria 100% humana do estudante)
  [x] Apoio Sintático a Software & Código (Scaffolding inicial de secções isoladas)
  [x] Supervisão & Controlo de Qualidade (Auditoria de caminhos relativos e conformidade WCAG)
  [ ] Escrita de Memória Descritiva (Redação 100% autoral do estudante)
  [x] Apoio a Depuração / Testes (Identificação de causas de overflow nas DevTools)

* **Verificações Humanas Efetuadas:**
  - Código testado em Live Server local sem qualquer framework externa.
  - Zero erros vermelhos na consola do navegador.
  - Links relativos validados para suporte local e GitHub Pages.
  - Defesa presencial: o estudante declara estar preparado para modificar qualquer regra CSS ao vivo em aula.
```

---

## 6. 🎯 The In-Person Critique: The Real Authorship Test at FBAUP

In communication design education at FBAUP, project evaluation culminates in live, in-person critique. Submitting code that you cannot explain or live-modify results in immediate failure:

### Typical Live Questions Asked During Critique:
1. **The Live Modification Challenge:** *"Open your stylesheet right now. Change the 768px breakpoint to 840px and explain how your editorial grid voids adapt."*
2. **The Semantic Justification:** *"Why did you use an `<aside>` element here instead of a `<section>`? How does a screen reader interpret this landmark?"*
3. **The Computed Panel Diagnosis:** *"Open the Computed tab in DevTools. What is pushing this button out of alignment: margin, padding, or grid gap?"*
4. **The Git Traceability Test:** *"Show me your Git log commit where you built the initial version of this component before refactoring it with AI."*

---

## 7. 📋 The 360° Craftsmanship, Quality & Ethics Checklist

Before submitting an assignment or deploying to GitHub Pages, run this 16-point audit:

```text
┌────────────────────────────────────────────────────────────────────────┐
│             THE 360° WEB DESIGN QUALITY & ETHICS CHECKLIST             │
├────────────────────────────────────────────────────────────────────────┤
│ 1. FILE & ASSET ARCHITECTURE                                           │
│    [ ] Strictly lowercase, kebab-case file & folder names (no spaces,  │
│        no accents: use 'album-cover.webp', not 'Álbum Cover 2.WEBP').  │
│    [ ] Predictable hierarchy: /assets/css/, /assets/fonts/, /assets/img│
│    [ ] RELATIVE PATH AUDIT: Use relative paths ('./css/styles.css' or  │
│        '../assets/img/hero.webp') instead of root-relative ('/css/').  │
│                                                                        │
│ 2. WEB SERVER, CACHING & DEPLOYMENT                                    │
│    [ ] Cache awareness: Verify changes with Hard Refresh (Cmd+Shift+R).│
│    [ ] Cache-busting test: Append '?v=1.1' to stylesheet links if      │
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
│                                                                        │
│ 5. ACCESSIBILITY & CONSOLE QUALITY                                     │
│    [ ] Clean console: Zero red errors in the DevTools Console panel.   │
│    [ ] Valid heading hierarchy: Single <h1>; contrast ratio ≥ 4.5:1.   │
│                                                                        │
│ 6. U.PORTO ETHICS & ACADEMIC INTEGRITY                                │
│    [ ] Short AI Disclosure Statement included in project README.md.    │
│    [ ] Demonstrated process trace (semantic Git commits & /demos/ lab).│
│    [ ] Privacy & GDPR compliance (zero credentials or sensitive data). │
│    [ ] Critique readiness: able to explain and modify any line live.   │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 8. 🤖 The Student Prompt Library & Promptary Rules

### 8.1 Constructive Prompts vs. Anti-Patterns to Avoid (U.Porto Promptary)

| Anti-Pattern to Avoid (Red Light 🟥) | Why it Damages Learning | Recommended Socratic Alternative (Green/Yellow Light) |
| :--- | :--- | :--- |
| *"Build the complete HTML and CSS page for the Drumtiks festival."* | Bypasses conceptual effort, eliminates authorship, guarantees failure during in-person critique. | *"Generate only the semantic HTML5 skeleton for the tickets section, explaining why each tag was chosen."* |
| *"My layout broke at 768px. Fix my CSS here [pasted file]."* | Prevents understanding of box model, overflow, and cascade collisions. Creates helpless dependency. | *"Analyze this error and indicate which properties I should inspect in DevTools to isolate the overflowing element."* |
| *"Write the project statement and rationales with references."* | Destroys the student's critical design voice; high risk of hallucinated sources. | *"Based on these 3 design decisions I made [list], suggest topics to structure my project statement."* |

### 8.2 Five Battle-Tested Prompt Archetypes

#### Prompt 1: The Socratic Tutor in 3 Levels
```text
"Act as my Socratic Web Design Tutor at FBAUP. 
I am studying [CONCEPT, e.g. CSS clamp() for fluid typography]. 
Do NOT write my project code. 
Instead:
1. Explain this concept across 3 levels: (a) intuitive/visual, (b) mathematical calculation, (c) advanced web design application.
2. Provide a 6-line minimal barebones functional example.
3. Give me the canonical link to the official MDN Web Docs reference.
4. Ask me 2 diagnostic questions to verify my understanding."
```

#### Prompt 2: The Senior Code Reviewer (The Golden Layout Rule)
```text
"Act as a Senior Design Technologist and Code Reviewer. 
Inspect this snippet of my code [PASTE SNIPPET]:
Evaluate it against the WD101 excellence standards:
1. Semantic purity: Do I have unnecessary divs or redundant classes?
2. The Golden Layout Rule: Am I using CSS Grid for 2D macro layout and Flexbox for 1D micro alignments?
3. Design Tokens: Am I using CSS variables consistently for color, spacing, and typography?
Highlight only the 3 most critical improvements and explain the technical 'why' behind each."
```

#### Prompt 3: The Socratic Sandbox Generator
```text
"Antigravity, I am confused by how [CSS PROPERTY, e.g. position: sticky] behaves when a parent has [overflow: hidden].
Create an isolated learning demo in 'demos/sandbox-sticky/' containing:
1. 'index.html': A barebones page showing both the broken case and fixed case.
2. 'styles.css': Heavily commented styles with visual debug borders.
3. Links to MDN Web Docs for 'position' and 'overflow'.
4. 3 practical DevTools experiments in comments for me to test in the browser."
```

#### Prompt 4: The In-Person Critique Simulator (U.Porto Promptary)
```text
"Act as my Web Design professor at FBAUP during an in-person critique session.
Review this code [PASTE HTML/CSS].
Ask me 5 difficult questions regarding:
1. Why I chose certain layout properties over simpler alternatives.
2. How the cascade specificity operates in this section.
3. What happens if an image fails to load.
Do NOT provide answers. Ask one question at a time and evaluate my explanation."
```

#### Prompt 5: Pre-Deployment QA Inspector
```text
"Assume the role of Web Quality Assurance Lead (QA). 
Audit all files in folder [PROJECT PATH] before publication:
1. Verify lowercase kebab-case naming without spaces or accents.
2. Ensure all asset links (<link>, <script>, <img>) are strictly relative.
3. Confirm WOFF2 font loading ('font-display: swap') and explicit image dimensions.
Provide a structured report (PASSED, WARNING, CRITICAL DEFECT) with instructions for me to fix in my IDE."
```

---

## 9. 🌐 Curated Online Resources & Essential Reading

### U.Porto & Academic AI Pedagogy
1. **Orientações para o Uso e Adoção Responsável de IAGen na U.Porto (Junho 2026):**  
   Universidade do Porto • Unidade de Inovação Educativa / Despacho GR. 08/05/2025.  
   [https://sigarra.up.pt](https://sigarra.up.pt)
2. **Teaching CS50 with AI (Harvard University):**  
   *David J. Malan et al.* — The definitive benchmark on Socratic rubber-duck debugging constraints.  
   [https://cs50.harvard.edu](https://cs50.harvard.edu)
3. **Assigning AI: Seven Approaches for Students (Wharton School):**  
   *Ethan R. Mollick & Lilach Mollick* — Strategies for AI as Socratic tutor, coach, and simulator.  
   [https://oneusefulthing.org](https://oneusefulthing.org)

### Living Web Standards & Quality Checklists
4. **MDN Web Docs — Learn Web Development:**  
   The definitive, community-maintained living standard reference for HTML5, CSS layout, and Web APIs.  
   [https://developer.mozilla.org/en-US/docs/Learn](https://developer.mozilla.org/en-US/docs/Learn)
5. **web.dev by Google Chrome Team:**  
   In-depth guides on Core Web Vitals, modern CSS layouts (`:has()`, container queries), and responsive media.  
   [https://web.dev/learn/css](https://web.dev/learn/css)
6. **The Front-End Checklist (David Dias):**  
   Industry quality checklist for HTML, CSS, assets, performance, and SEO.  
   [https://frontendchecklist.io](https://frontendchecklist.io)
7. **The A11Y Project:**  
   Practical WCAG 2.2 accessibility checklist focusing on keyboard navigation and contrast.  
   [https://www.a11yproject.com](https://www.a11yproject.com)

---

## 10. 🎓 Conclusion: The Designer-Technologist of Tomorrow

The most capable web designers of the next decade will neither be those who fear AI and refuse to touch it, nor those who passively surrender their craft to automated code generators.

The master designer-technologists will be those who **understand the craft deeply with their own hands**, and who orchestrate AI agents like **Antigravity ADE** as an intellectual extension of their design intent:
- Questioning every line of code,
- Testing every layout empirically in the browser,
- Respecting academic integrity and institutional ethical standards,
- Insisting on universal accessibility and semantic integrity,
- And elevating web design into an art form of structured communication.
