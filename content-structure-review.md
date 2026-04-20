# Personal Brand Site Content and Structure

## Purpose

This document captures the current website's content, information architecture, interaction model, and creative direction so it can be reviewed by another LLM without reading the codebase.

## Core Creative Thesis

**Current direction:** Convergence Atlas, simplified into a consistent stage-card system

**Concept summary:**
The site interprets `缘分 (Yuánfèn)` through convergence, timing, and meaningful alignment rather than literal symbolism.

The intended brand feeling is:

- strategic
- authored
- premium
- operationally credible
- emotionally restrained
- recruiter-friendly without feeling templated

## Experience Model

This is not a traditional scrolling page.

It is a **single-screen responsive stage deck** with 4 states:

1. Thesis
2. Stack
3. Proof
4. Fit

The user remains on one screen while content transitions between stages.

### Supported interactions

- mouse wheel
- touch swipe
- keyboard arrow keys
- keyboard page up/page down
- keyboard home/end
- clicking top navigation
- clicking bottom dots

### Helper footer behavior

The helper line:

`Use wheel, swipe, or arrow keys to move through the site.`

appears at first load, but disappears permanently for that session after the first navigation interaction. It does not return when the user comes back to the first stage.

## Key Structural Decisions

- Matt's name appears only in the top bar.
- The portrait/headshot has been removed.
- Left-side stage navigation has been removed to reduce clash with the main composition.
- The top nav now carries the numbered stage language.
- Bottom dots are clickable and act as the main secondary navigation.
- Arrow icon controls were removed.
- The content is positioned for full-time employment, not consultancy.
- The content now reflects real current AI, infrastructure, BI, and strategic operating work from the last 12 months.
- All 4 stages now use the same card shell and left/right content structure.
- The first stage no longer uses a special atlas/image-like visual treatment; it uses concise point bubbles instead.

## Global Layout

### Top Bar

**Brand text:**

`MATT CHRZASZCZ`

**Navigation items:**

- `01 Thesis`
- `02 Stack`
- `03 Proof`
- `04 Fit`

**Utility actions:**

- Email icon
- LinkedIn icon
- current stage counter (`01 / 04`, etc.)

### Footer Area

The footer region always reserves space for navigation.

It contains:

- the interaction hint on first load only
- 4 clickable dots for stage navigation

## Content Structure by Stage

---

## Stage 1: Thesis

### Role

Introduce the professional identity and establish that the value proposition is not generic AI enthusiasm, but real operating leverage.

### Kicker

`Finance, systems, and applied AI`

### Main headline

`I build the systems that help a business see clearly and move earlier.`

### Supporting summary

`In the last 12 months I have launched infrastructure, automation, BI, internal AI tools, and strategic operating changes that made it into the business.`

### Supporting note

`I'm looking for full-time roles where finance is expected to shape decisions, challenge assumptions, and help the company build better systems.`

### Primary actions

- `Start a conversation`
- `See the stack`

### Point bubbles

**Point A**

- label: `Automation`
- text: `n8n flows and orchestration shipped into real operating work.`

**Point B**

- label: `BI`
- text: `Metabase, datamarts, and SQL infrastructure that teams can actually use.`

**Point C**

- label: `AI systems`
- text: `Lumina AI, Silver CRM tool calls, scheduled tasks, and AI in workflow.`

**Point D**

- label: `Strategy`
- text: `Approved recommendations that changed incentives, pricing, org design, and economics.`

---

## Stage 2: Stack

### Role

Show the real stack and scope of execution in a concrete, non-hand-wavy way.

### Kicker

`What I actually built`

### Main headline

`This is not AI enthusiasm. It is shipped operating infrastructure.`

### Supporting summary

`I didn't stop at prompting. I put infrastructure, orchestration, BI, AI tooling, and workflow into the hands of the teams using them.`

### Structured rows

**01 Built the operating stack**

`Launched my own server and stood up n8n, Metabase, Airflow, dbt, and the SQL infrastructure behind datamarts used for analysis, applications, BI, data science, and marketing.`

**02 Shipped internal AI systems**

`Built Lumina AI and an AI-in-the-loop data science application, then connected workflow, permissions, scheduled tasks, and tool calls into Silver CRM for real operating use.`

**03 Pushed business decisions that matter**

`Recommended and won approval for changes across incentives, performance reviews, customer support structure, product leadership, pricing logic, and affiliate economics.`

---

## Stage 3: Proof

### Role

Demonstrate range and credibility through compact proof signals instead of generic metrics.

### Kicker

`Proof of range`

### Main headline

`The pattern is simple: build the system, then improve the business through it.`

### Supporting summary

`The work spans technical delivery and commercial judgment, because the bottleneck is rarely confined to one function.`

### Proof signals

**12 months**

`Built infrastructure, automation, BI, orchestration, and AI tooling instead of stopping at slideware.`

**Own stack**

`Server, n8n, Metabase, Airflow, dbt, SQL datamarts, and the connective layer between them.`

**AI in workflow**

`Lumina AI, Silver CRM integrations, scheduled tasks, and an auto data science loop placed directly inside real operations.`

**Approved**

`Strategic recommendations on org design, incentives, pricing, customer support, product leadership, and acquisition economics were adopted.`

---

## Stage 4: Fit

### Role

Clarify working style, ideal role context, and the closing contact position.

### Main content kicker

`How I operate`

### Main headline

`The best fit is a company that wants one person who can build and challenge.`

### Operating rows

**01 Build where the business is actually constrained**

`I focus on the operational bottleneck first, whether that lives in data infrastructure, workflow design, org shape, or commercial logic.`

**02 Connect systems to decisions**

`The point is not tools in isolation. It is a tighter loop between information, judgment, and action for the people running the business.`

**03 Challenge the economics when needed**

`If incentives, fee structures, affiliate deals, or team design are wrong, I will say it and help redesign them around real outcomes.`

### Supporting summary

`I'm looking for an in-house role where I can keep building systems, influence the operating model, and raise the quality of decisions across the business.`

### Supporting note

`Open to full-time opportunities.`

### Contact actions

- `Email`
- `LinkedIn`

### Contact note

`Email or LinkedIn are still the fastest paths in.`

## Visual System

### Palette

- deep charcoal / near-black base
- warm bone / parchment highlights
- muted copper accent
- restrained clay / oxblood undertones

### Typography

- editorial serif for primary headlines
- modern sans-serif for navigation, supporting copy, and interface text

### Layout direction

Each screen uses the same centered card structure:

- left side: large headline, short supporting copy, and optional actions
- right side: structured proof, operating rows, or point bubbles
- stacked layouts let the left headline area take the full width, preserving the large editorial impact

### Background direction

The background is now more controlled and less atmospheric-random:

- dark editorial field
- subtle line/grid texture
- faint topographic / path-like contours
- restrained warm tonal blooms

### Motion direction

- quiet stage transitions
- subtle depth and fade between screens
- restrained navigation feedback
- no floating “random light” effects

## Current Brand Positioning Summary

The site currently positions Matt as:

- a strategic finance leader
- a systems builder
- an operator who has actually shipped AI infrastructure and internal tools
- someone comfortable moving between technical architecture and business judgment
- a candidate for full-time roles with broad leverage and high agency

## Explicitly Removed From the Previous Version

- portrait/headshot
- repeated use of Matt's name in the body
- left rail stage navigation
- arrow button controls
- special-case first-stage visual
- bright beige contact card
- consultancy-forward framing
- generic AI/finance copy
- background treatment that felt too random or janky

## Reviewer Prompt Suggestions

Useful questions for another LLM:

- Does the new content feel materially more credible and current?
- Is the full-time-employment positioning clear enough?
- Does the stage deck format support the story or get in its way?
- Which proof signals feel strongest, and which need more specificity?
- Is the balance right between technical range and executive credibility?
- Does the Yuánfèn / convergence concept still come through subtly enough?
- Does the site now feel more personal without losing restraint?
