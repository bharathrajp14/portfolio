# Portfolio Rebuild Design Brainstorm

## Three Direction Options

### Theme Name: Editorial Systems
Very Brief Intro: A warm, print-inspired portfolio that treats engineering work like a set of carefully edited case studies, with strong typographic hierarchy and generous white space.
Probability: 0.06

### Theme Name: Signal / Structure
Very Brief Intro: A dark, technical portfolio built around precise grids, luminous data accents, and the visual language of developer tooling without becoming a generic cyberpunk interface.
Probability: 0.03

### Theme Name: Field Notes
Very Brief Intro: An off-white, ink-black, and mineral-green portfolio that feels like a field notebook for a builder: candid, tactile, and focused on decisions, outcomes, and lessons learned.
Probability: 0.08

## Chosen Direction: Field Notes

### Design Movement
Contemporary editorial brutalism, softened by field-journal tactility: oversized typography, visible structure, paper-like surfaces, and restrained utility marks.

### Core Principles
1. **Evidence over decoration.** Projects are presented through outcomes, constraints, decisions, and links rather than vague claims.
2. **Editorial asymmetry.** The page uses offset columns, marginalia, section numbers, and varied widths instead of repetitive centered cards.
3. **Tactile precision.** Thin rules, paper textures, stamped labels, and ink-like accents create personality while the interaction remains crisp.
4. **Progressive disclosure.** The homepage gives a sharp overview; project details, source links, and technical context are revealed through focused interactions.

### Color Philosophy
The base is warm paper (#F2EEE5) rather than stark white, making the portfolio feel considered and human. Ink black (#171816) carries authority and readability. A signature mineral green (#3F6B57) signals craft, growth, and systems thinking; a muted clay accent (#B56F52) is used sparingly for status, emphasis, and small editorial marks. Color should clarify hierarchy, never act as decoration without meaning.

### Layout Paradigm
A long-form editorial canvas with a fixed, narrow rail for identity and navigation on desktop, paired with an offset content column. Major sections begin with oversized numerals and short margin notes. Featured projects alternate between text-led and visual-led compositions, while mobile collapses the rail into a compact top bar without losing the editorial rhythm.

### Signature Elements
- A vertical identity rail with a hand-drawn-style monogram mark, live availability note, and section anchors.
- Oversized section numerals paired with small uppercase editorial labels.
- Project cards that use a “brief / build / proof” structure with mineral-green rule lines and compact technology stamps.

### Interaction Philosophy
Interactions should feel like turning a page or inspecting a well-organized notebook. Hover states reveal metadata, links use clear directional cues, and project filtering is immediate. No interaction should hide essential information or depend on decorative motion.

### Animation
Use short, physical transitions: 160–220ms ease-out for buttons and links, 240ms for cards revealing metadata, and 40–70ms staggered entrances for project rows. Use subtle upward translation and opacity only; avoid looping animation. Respect prefers-reduced-motion. A project card may shift 4px and expose a clay-colored marker on hover, suggesting a note being pulled forward.

### Typography System
Display: **DM Serif Display** for high-contrast editorial headlines and section numerals. Body/UI: **IBM Plex Sans** for technical clarity, readable paragraphs, labels, metadata, and navigation. Use uppercase IBM Plex Sans with generous tracking for labels. Headlines should be sentence case, with the largest scale reserved for the positioning statement, not every section.

### Brand Essence
A builder’s portfolio for teams who value thoughtful software, clear systems, and work that earns trust through evidence. Personality: **observant, grounded, quietly ambitious**.

### Brand Voice
Headlines are direct, specific, and slightly editorial. CTAs are active and descriptive rather than generic. Microcopy explains what the visitor will learn or inspect.

Example lines:
- “I build useful software, then make the reasoning visible.”
- “Inspect the build: decisions, stack, and what changed.”

### Wordmark & Logo
Use a compact “BRP” monogram built from three offset vertical strokes, suggesting a field-note index and the initials without spelling the name. The mark should work as a stamped symbol in the rail, favicon, and project metadata. The full wordmark uses DM Serif Display with a custom underline rule, never a default logo font treatment.

### Signature Brand Color
**Mineral Green — #3F6B57.** It is ownable because it sits between institutional green and technical teal: calm enough for trust, distinctive enough to become the portfolio’s visual signature.

## Style Decisions

- Use warm paper as the primary canvas and ink black for text.
- Keep mineral green for structural emphasis and clay for rare calls to attention.
- Prefer editorial asymmetry over centered marketing sections.
- Let project evidence drive the copy and hierarchy.
- Avoid generic gradient hero art, excessive rounded cards, and vague capability claims.
