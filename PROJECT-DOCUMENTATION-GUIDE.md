# Final Project UX Documentation, Information Architecture & Usability Guide
## Faculdade de Belas Artes da Universidade do Porto (FBAUP) • Web Design (WD101 — 2026/27)
### Licenciatura em Design de Comunicação • i2ADS

> **Interactive Web Edition (with SVG/CSS Swimlane Diagrams, Wireframe Visuals & Printable Checklist):** [Launch `project-documentation-guide.html`](project-documentation-guide.html)

---

## 0. Purpose & End-to-End Documentation Pipeline

Before coding responsive CSS Grid or Flexbox layouts, communication designers define **scope**, **information architecture**, **expected user flows**, **screen skeletons**, and **empirical usability validation**. Grounded primarily in **Kim Goodwin** (*Designing for the Digital Age*, 2009), **Richard Caddick & Steve Cable** (*Communicating the User Experience*, 2011), **Jeffrey Rubin, Dana Chisnell & Jared Spool** (*Handbook of Usability Testing*, 2nd ed., 2008), and **Steve Krug** (*Don't Make Me Think, Revisited*, 2014), your Final Project dossier follows six sequential stages:

```text
[01. Content Inventory] ──► [02. Site Outline] ──► [03. Swimlane Site Map]
                                                            │
[06. Usability Test & Report] ◄── [05. Figma Wireframes] ◄── [04. Task Model & User Journey]
```

1. **Content Inventory & Qualitative Audit** — Catalogs raw copy, imagery, tables, licenses/AI provenance, and production readiness (*Ready / Revise / Create*).
2. **Site Outline** — Indented textual specification strictly ordered: **1. Page Name** → **2. File Name (`*.html`)** → **3. Brief Description**.
3. **Swimlane Site Map** — Visual hierarchy across navigation depth bands showing **pages / navigation destinations ONLY** (never menus, buttons, or decision flowcharts), strictly ordered inside each card: **1. `filename.html`** → **2. Page Name/Title** → **3. Brief Description** → **4. Optional Content/Visual Description**.
4. **Task Model & Expected User Journey / Flow Diagram** — Behavioral flow reused directly for **(a) Formative Heuristic Walkthroughs** ([`heuristic-checklist.html`](heuristic-checklist.html)) and **(b) Quick & Dirty Peer Usability Sessions**.
5. **Lower- or Higher-Fidelity Wireframes in Figma** — Grayscale *Visual Heat* annotated layouts or interactive Auto Layout + Variable + Variant prototypes across Mobile (`390px`) and Desktop (`1440px`).
6. **First-Timer Usability Test Protocol & Actionable Report** — 15–20 minute 1-on-1 tests with 3–5 friends/colleagues outside your team, logging objective completion, clicks/hesitations, Rubin's `Criticality = Severity + Frequency`, annotated visual finding cards, and a block-step completion funnel.

---

## 1. Content Inventory & Qualitative Audit
*References: Caddick & Cable (2011, Ch. 4); Goodwin (2009, Ch. 12 & Ch. 16 "Data Objects"); Kissane (2011).*

Catalog every asset before drawing layout boxes so containers match real word counts, table columns, and media aspect ratios.

### Worked Excerpt — DRUMTIKS '26 Capstone

| Asset ID | Target File | Content Item / Data Object | Format & Dimensions | Source / License / AI Disclosure | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `C-01.1` | `index.html` | Festival Masthead, Dates (14–16 Nov) & Venue (Alfândega) | Hero copy (45w) + `<time>` | Original studio copy | ✓ Ready |
| `C-01.2` | `index.html` | 3D Vinyl Crate Hero & Headliner Sleeves | 4 WebP sleeves (`1:1`, 600×600px, <90 KB) | Studio archive + custom SVG | ✓ Ready |
| `C-01.3` | `index.html` | Reactive Festival Pass & Masterclass Simulator | Form controls + pricing tier notes | Course brief (`TP06`/`TP11`) | ▲ Revise |
| `C-02.1` | `dj-warp.html` | DJ Warp Biography, Quad-Turntable Rig & Set Slot | 280w profile + `4:5` portrait WebP | Edited press kit; AI lighting study noted | ✓ Ready |
| `C-03.1` | `battle-rules.html` | The 808 Clash Rules, 3-Min Rounds & Hardware Matrix | 650w editorial + 5-col `<table>` | Original rules; add TL;DR summary box | ▲ Revise |
| `C-04.1` | `credits.html` | Colophon, Fonts, Bibliography & AI Transparency Log | `<dl>` metadata + syllabus citations | Mandatory FBAUP WD101 imprint | ◆ Create |

---

## 2. Site Outline (Strict Textual Hierarchy)
*References: Caddick & Cable (2011, Ch. 5 "Outline View"); WD101 Final Project Specification.*

### Mandatory Entry Order
Every line item in your Site Outline **must** follow this exact sequence:
> **1. Page Name** — **2. `filename.html`** — **3. Brief Description** *(+ Assigned Template Archetype)*

Use lowercase ASCII kebab-case filenames (`dj-warp.html`, `battle-rules.html`)—never spaces, uppercase letters, or accented characters.

### Worked Example A — DRUMTIKS '26 Festival
- **0.0 Festival Home & Pass Simulator** — `index.html` — Root landing page presenting festival dates/venue at Alfândega do Porto, 3D vinyl headliner showcase, photo masonry, and interactive pass/workshop cost simulator. *(Landing Archetype)*
  - **1.0 Full Lineup & Stage Timetable** — `lineup.html` — Chronological Friday–Sunday schedule across Main Warehouse and Sub-Bass Lab with artist overview cards. *(Hub / Index Archetype)*
    - **1.1 Headliner Profile: DJ Warp** — `dj-warp.html` — Short-form visual profile featuring Saturday 23:30 slot, sticky portrait, quad-deck analog setup, and vinyl discography. *(Short-Form Visual Template)*
  - **2.0 The 808 Clash — Official Rules & Gear** — `battle-rules.html` — Long-form competition specification detailing 3-minute elimination rounds, judging rubric, laptop prohibition, and permitted hardware sampler table. *(Long-Form Editorial Template)*
  - **3.0 Academic Credits & Colophon** — `credits.html` — Institutional FBAUP/WD101 authorship, variable font specimens, bibliography, media licenses, and AI disclosure. *(Global Utility / Imprint Template)*

### Worked Example B — Pure Print Archaeology (PPA Brief)
- **0.0 Archive Home & Featured Press** — `index.html` — Editorial gateway introducing the letterpress type archive, featured wood-type exhibition, and studio open days. *(Landing Archetype)*
  - **1.0 Type Specimen Catalogue** — `collection.html` — Visual index of cataloged wood and lead founts filtered by classification and cicero/point size. *(Hub / Index Archetype)*
    - **1.1 Specimen Sheet: Grotesque Wood No. 8** — `specimen-wood-08.html` — Macro ink-pull gallery, glyph completeness matrix, and foundry provenance notes. *(Short-Form Visual Template)*
  - **2.0 Letterpress Workshop Manual & Safety** — `press-manual.html` — Long-form Vandercook cylinder press operating guide, lock-up furniture rules, and booking tiers. *(Long-Form Editorial Template)*
  - **3.0 Colophon, Archival Sources & Credits** — `credits.html` — Student authorship, archival permissions, typefaces, bibliography, and AI transparency log. *(Global Utility / Imprint Template)*

---

## 3. Swimlane Site Map (Pages / Navigation Destinations ONLY)
*References: Caddick & Cable (2011, Ch. 5); Garrett (2011, Ch. 5 Visual Vocabulary); Course Project Brief Figure 2.*

### Visual Hierarchical Tree Diagram (Syllabus Figure 2 Alignment)
The visual diagram for the DRUMTIKS '26 capstone follows the exact orthogonal tree notation, clipped dog-ear document card styling, and 4-tier color taxonomy modeled in **Figure 2 ("Exemplo de um 'Swimlane' Sitemap utilizando o Gloomaps")** of the official FBAUP course project brief:

- **Vector Asset:** [drumtiks-sitemap-tree.svg](file:///Volumes/Documents%20HD/FBAUP/2026-27/WD101-26/learning-scaffold/assets/images/drumtiks-sitemap-tree.svg)
- **Raster Asset (1x):** [drumtiks-sitemap-tree.png](file:///Volumes/Documents%20HD/FBAUP/2026-27/WD101-26/learning-scaffold/assets/images/drumtiks-sitemap-tree.png)
- **High-DPI Retina (2x):** [drumtiks-sitemap-tree@2x.png](file:///Volumes/Documents%20HD/FBAUP/2026-27/WD101-26/learning-scaffold/assets/images/drumtiks-sitemap-tree@2x.png)

#### Syllabus Color Key (Course Brief Fig. 2):
- ◼️ **Solid Black (`A1`):** Root Landing Page (`index.html`) — entry gateway and central orientation anchor.
- 🟧 **Vivid Orange (`B1`):** Colophon / Credits / Imprint (`credits.html`) — mandatory academic impressum, student authorship, font/media licenses, and AI usage log.
- 🟨 **Vivid Yellow (`B2`, `C2`, `D1`):** Mandatory Informative Formats:
  - *Long format with complex hierarchy / content structure:* `battle-rules.html` (`B2`) and `lineup.html#artists` (`C2`).
  - *Short format simpler visual structure:* `dj-warp.html` (`D1`).
- ⬜️ **Light Gray (`B3`, `C1`, `C3`, `D2`):** Section hubs, practical access guides, and **Garrett Page Stacks** for repeated detail templates (`lineup.html`, `venue-access.html`, `artist-*.html`).

### Critical Structural Constraints
1. **Swimlanes by Hierarchical Navigation Depth:** Group pages into horizontal bands (*Swimlane L0: Root Gateway*, *Swimlane L1: Primary Navigation*, *Swimlane L2: Category/Detail Pages*, *Swimlane U: Global Persistent Footer Utility*).
2. **Pages / Discrete States of Navigation ONLY:**
   - **NOT a flowchart (`fluxograma`) or decision tree.**
   - **Menus, navbars, dropdown buttons, filter toggles, and Yes/No diamonds are NEVER drawn as boxes.** Only actual pages/navigation destinations belong on the Site Map.
   - Use **Garrett's Page Stack** (stacked card border) when multiple pages share one identical HTML/CSS template (e.g., `dj-warp.html` representing all artist detail pages).
3. **Mandatory Internal Node Order (Inverting #1 and #2 from the Outline):**
   1. **`filename.html`** *(1st — File Name at top in monospace)*
   2. **Page Name / Title** *(2nd — Editorial/Navigation Title)*
   3. **Brief Description** *(3rd — Summary of page contents)*
   4. **Optional Content / Visual Description** *(4th — Template typology, layout grid, or visual cue)*

```text
====================================================================================================
SWIMLANE L0 (ROOT GATEWAY)
  ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
  │ 1. index.html                                                                    [◼ Gateway] │
  │ 2. DRUMTIKS '26 — Festival Home & Pass Simulator                                             │
  │ 3. Root landing page: dates/venue, headliner highlights, photo masonry & pass calculator.    │
  │ 4. [Visual] 4-breakpoint 2D Macro Grid • 3D Vinyl Crate Hero • Pure CSS Pricing Simulator    │
  └──────────────────────────────────────────────┬───────────────────────────────────────────────┘
                                                 │
=================================================▼==================================================
SWIMLANE L1 (PRIMARY NAVIGATION DESTINATIONS)
  ┌──────────────────────────────────────────────┐  ┌────────────────────────────────────────────┐
  │ 1. lineup.html                       [◆ Hub] │  │ 1. battle-rules.html         [▲ Editorial] │
  │ 2. Full Lineup & Stage Schedule              │  │ 2. The 808 Clash — Official Rules & Gear   │
  │ 3. Fri–Sun timetable & artist overview cards │  │ 3. 3-min round rules, rubric & gear matrix │
  │ 4. [Visual] Asymmetric Grid + Day Chips      │  │ 4. [Visual] 65ch Editorial + 5-Col Table   │
  └──────────────────────┬───────────────────────┘  └────────────────────────────────────────────┘
                         │
=========================▼==========================================================================
SWIMLANE L2 (DETAIL / SHARED TEMPLATE STACK)
  ┌──────────────────────────────────────────────┐┐
  │ 1. dj-warp.html (+ artist-*.html) [◆ Visual] ││ ◄── Garrett Page Stack (repeated template)
  │ 2. DJ Warp — Headliner Artist Profile        ││
  │ 3. Sat 23:30 slot, bio, 4-deck rig & EPs     ││
  │ 4. [Visual] Sticky 4:5 Portrait + Sleeve Row ││
  └──────────────────────────────────────────────┘┘

====================================================================================================
SWIMLANE U (GLOBAL PERSISTENT FOOTER UTILITY — LINKED FROM ALL PAGES)
  ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
  │ 1. credits.html                                                                  [● Utility] │
  │ 2. Colophon, Bibliography & AI Disclosure                                                    │
  │ 3. FBAUP WD101 authorship, variable fonts, asset licenses, syllabus refs & AI log.           │
  │ 4. [Visual] Clean 2-Column Editorial Imprint + Structured Reference Table                    │
  └──────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Task Model & Expected User Journey / Flow Diagram
*References: Caddick & Cable (2011, Ch. 2 & Ch. 3); Goodwin (2009, Ch. 16 Key Path Scenarios & Ch. 23).*

### Caddick & Cable's Three Evaluation Behavior Patterns
1. **Direct Connection:** User knows the exact target and seeks immediate access with zero comparison (*"What time does DJ Warp perform Saturday?"*).
2. **Controlled Evaluation:** User compares 2–3 bounded options against a clear constraint (*"Does €75 cover a Full Weekend Pass plus one synthesis masterclass?"*).
3. **Complex Evaluation:** User cross-checks multiple constraints across pages before deciding (*"Can my friend enter The 808 Clash using an Ableton laptop + Roland SP-404 sampler?"*).

### Expected User Journey Flow (DRUMTIKS '26 Beatmaker Scenario)
```text
(● Trigger: Sees Poster) ──► [Page: index.html] Scans nav/hero for live beat battle
                                     │
                                     ▼ (1 click)
                             [Page: battle-rules.html] Reads 3-min round limit
                                     │
                                     ▼
                             <Decision: Checks 5-Col Allowed Hardware Table>
                               ├─► Standalone Samplers: ALLOWED
                               └─► Laptops / DAWs: PROHIBITED
                                     │
                                     ▼ (Loopback to Home Pass Simulator)
                             [Page: index.html#pass-simulator] Checks Weekend Pass € total ──► (✓ Complete)
```

### Mandatory Two-Stage Downstream Reuse
1. **Formative Heuristic Evaluation & Cognitive Walkthrough:** Walk every step, decision diamond, and loopback of your Expected Journey against [`heuristics-guide.html`](heuristics-guide.html) and [`heuristic-checklist.html`](heuristic-checklist.html) *before* testing with peers (checking label scent, memory load, mobile table readability, and recovery paths).
2. **Summative "Quick & Dirty" Peer Usability Sessions:** Convert each Expected User Journey directly into a **Usability Task Scenario** in Stage 6 (Trigger → Prompt; Expected Path → Optimal Click Benchmark; Completion State → Successful Completion Criterion).

---

## 5. Recommendations for Lower- or Higher-Fidelity Wireframes in Figma
*References: Caddick & Cable (2011, Ch. 6); Goodwin (2009, Ch. 14, 16, 23, 24); Cooper et al. (2014, Ch. 5); WD101 TP06 Figma Spec.*

| Criterion | Lower-Fidelity Grayscale Wireframe | Higher-Fidelity Interactive Figma Prototype |
| :--- | :--- | :--- |
| **Best Timing** | Early structure & content hierarchy validation | Mid/late visual affordance, token & interactive flow validation |
| **Visual Heat / Color** | 3–4 neutral gray tonal steps (**avoid pure `#000000`**; ~75% dark gray text) so weight reflects hierarchy | Full project design tokens (`--color-*`), variable fonts, AA/AAA contrast |
| **Copy & Media Rules** | **Real headlines, real nav labels, real CTA verbs** (never blind *Lorem Ipsum* in menus!); explicit media aspect-ratio + subject labels (never empty blind `X` boxes) | Final audited copy and cropped WebP-equivalent assets from Stage 1 |
| **Figma Architecture** | Mobile (`390×844px`) + Desktop (`1440×900px`) frames, viewport fold guide, numbered behavioral callouts | Semantic HTML5 frame names (`<header>`, `<nav>`, `<main>`, `<footer>`), Auto Layout, Local Variables, Component Variants (`Default`/`Hover`/`Focus-Visible`), Prototype links |

---

## 6. First-Timer Usability Test Protocol & Actionable Report
*References: Rubin, Chisnell & Spool (2008, Ch. 1, 5, 8–12); Krug (2014, Ch. 9); Caddick & Cable (2011, Ch. 7–8).*

### Core Rules for First-Time Student Moderators
- **3–5 Friends/Colleagues, Tested 1-on-1 (Never a Focus Group):** Recruit 4–5 peers outside your project team (`P1`–`P5`, anonymized). Run at least **2 sessions on Mobile** and **2–3 on Desktop**, counterbalancing task order (`1→2→3` vs. `2→3→1`).
- **Orientation & Seating (2 Min):** Sit slightly behind and ~45° to the side. Explicitly state: *"We are testing the website/prototype, **never testing you**; please think out loud."*
- **Krug's Home Page Tour (3 Min, Hands Off Clicking First):** Ask *"Whose site is this? What is happening, where, and when? What catches your eye first?"* before starting Task 1.
- **Indirect Task Prompts:** Never repeat exact UI menu labels in your spoken task prompt (do not say *"Click Battle Rules"* if testing whether users can find `battle-rules.html`!).

### Three Worked Task Scenarios & Observation Measures (DRUMTIKS '26)

| Task & Pattern | Verbatim Indirect Scenario Prompt | Optimal Path | Successful Completion Criteria (SCC) & Efficiency Metrics |
| :--- | :--- | :--- | :--- |
| **Task 1: Pass Budget** *(Controlled Evaluation)* | *"You are a student with a **€75 budget** who wants to attend **all 3 days** plus **one synthesis masterclass**. Check if your budget covers it and state the exact total."* | `index.html` Pass Simulator (1 page, 2 clicks) | **SCC:** States exact € bundle price & yes/no vs. €75. **Metrics:** Completion (`100%/50%/0%`), clicks vs. optimal, hesitations (>5s), SEQ (1–7). |
| **Task 2: Beat Contest Rules** *(Complex Evaluation)* | *"Your friend uses a **MacBook running Ableton** + a **standalone hardware sampler** and wants to enter the live beat contest. Find **how long each round lasts** and whether **their rig is allowed**."* | `index.html` → `battle-rules.html` Hardware Table (2 pages, 1–2 clicks) | **SCC:** Names **3-minute limit** AND states **standalone samplers allowed / laptops banned**. **Observe:** Mobile table horizontal clipping or false completions! |
| **Task 3: Headliner & Imprint** *(Direct + Utility)* | *"Find **what day, time, and how many turntables** the main turntablist headliner uses, then check **who designed this site** and whether **AI tools were used**."* | Hero/Lineup → `dj-warp.html` → Footer → `credits.html` (3 pages, 2 clicks) | **SCC:** Names Sat 23:30 + 4 turntables on `dj-warp.html`, then locates authorship & AI log on `credits.html`. |

> **Timing Caveat (Rubin & Chisnell, Ch. 5):** Concurrent **Think-Aloud** naturally slows down reading. Always interpret task seconds alongside **click detours**, **hesitations (>5s)**, and **Median** values rather than raw stopwatch averages alone.

### Shorthand Observation Codes & Criticality Prioritization
- **Caddick & Cable Shorthand (Fig. 7-10):** `"` Verbatim quote • `!` Critical barrier • `*` Hesitation/insight • `?` Confusion • `+` Positive delight • `??` Debrief probe.
- **Rubin's Formula (Ch. 11):** `Criticality = Severity (1–4) + Frequency (1–4)`
  - `7–8` = Mandatory immediate fix before submission • `5–6` = High-priority fix • `2–4` = Polish if time permits.
- **Visual Report Format (Caddick Ch. 7–8):** Present your top 3–5 findings as **Annotated Screen Cards** (screenshot + numbered callout + Criticality score + verbatim quote + heuristic root cause + concrete HTML/CSS fix) paired with a **Block-Step Task Completion Funnel** (`5/5 → 4/5 → 3/5 → 3/5`) showing exact step drop-offs.

---

## 7. Master Submission Checklist

- [ ] **01. Content Inventory:** Every asset has an ID, target `*.html` file, media/word-count spec, license/AI provenance, and status (*Ready / Revise / Create*).
- [ ] **02. Site Outline:** Strictly formatted as **Page Name → `filename.html` → Brief Description** (+ template archetype).
- [ ] **03. Swimlane Site Map:** Horizontal hierarchy lanes; **pages/navigation destinations ONLY** (zero menus, buttons, or flowchart diamonds); internal node order strictly **1. `filename.html` → 2. Page Name/Title → 3. Brief Description → 4. Optional Content/Visual Note**; legend + Garrett Page Stacks included.
- [ ] **04. Task Model & User Journey:** Classifies evaluation patterns; maps triggers, page containers, decisions, and loopbacks; explicitly walked through [`heuristic-checklist.html`](heuristic-checklist.html) and reused for peer testing.
- [ ] **05. Figma Wireframes:** Mobile (`390px`) + Desktop (`1440px`) archetypes with real nav/heading copy, media aspect ratios, fold marker, and behavioral callouts (or full Auto Layout + Variables + Variants prototype).
- [ ] **06. Usability Protocol & Report:** 3–5 individual peer sessions (`P1`–`P5`, Mobile + Desktop), orientation + Home Page Tour script, 2–3 indirect task scenarios, completion/click/SEQ metrics, `Severity + Frequency` ranking, visual finding cards, and step funnel.

---

## 8. Syllabus & Supporting Materials Bibliography (`_Materiais de Apoio 2026`)

1. **Caddick, R., & Cable, S.** (2011). *Communicating the User Experience: A Practical Guide for Creating Useful UX Documentation*. Wiley. *(Intro Fig. 9; Ch. 2–8).*
2. **Goodwin, K.** (2009). *Designing for the Digital Age: How to Create Human-Centered Products and Services*. Wiley. *(Ch. 12, 14, 16, 23, 24).*
3. **Rubin, J., Chisnell, D., & Spool, J.** (2008). *Handbook of Usability Testing: How to Plan, Design, and Conduct Effective Tests* (2nd ed.). Wiley. *(Foreword; Ch. 1–3, 5, 8–12).*
4. **Krug, S.** (2014). *Don't Make Me Think, Revisited* (3rd ed.). New Riders. *(Ch. 2, 6, 9).*
5. **Cooper, A., Reimann, R., Cronin, D., & Noessel, C.** (2014). *About Face: The Essentials of Interaction Design* (4th ed.). Wiley. *(Ch. 5, 9).*
6. **Garrett, J. J.** (2011). *The Elements of User Experience* (2nd ed.). New Riders. *(5 Planes & Visual Vocabulary).*
7. **Saffer, D.** (2010). *Designing for Interaction* (2nd ed.). New Riders.
8. **Kissane, E.** (2011). *The Elements of Content Strategy*. A Book Apart.
9. **Nielsen, J.** (1994/2020). *10 Usability Heuristics for User Interface Design* — see [`heuristics-guide.html`](heuristics-guide.html) & [`heuristic-checklist.html`](heuristic-checklist.html).
10. **Yablonski, J.** (2020). *Laws of UX* — see [`ux-laws.html`](ux-laws.html).

---
*Faculdade de Belas Artes da Universidade do Porto (FBAUP) • Web Design (WD101) • Prof. Pedro Amado (i2ADS)*
