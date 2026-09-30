# Personal Brand Site Content and Structure

## Purpose

This document captures the current website's content, information architecture, and interaction model so it can be reviewed without reading the codebase.

## Audience and goal

The site supports a search for:

- Head of FP&A or Director of FP&A roles at companies with fewer than about 500 people
- Head of Finance roles at companies with fewer than about 100 people

Primary readers are the CFOs, CEOs, founders, and recruiters hiring for those seats. Each panel answers one of their questions in order:

`who is this -> what have they delivered -> where have they done it -> are they looking for a role like mine`

## Experience model

A single page of four full-screen panels, scrolled natively.

- Desktop: panels snap one per screen when the window is tall enough, a side rail tracks the active panel, and the portrait and career signals stay pinned in a right-hand column.
- Tablet and phone: a fixed top bar (monogram, name, LinkedIn, email) with a progress line; the portrait becomes its own panel after the intro, and each panel's points become a swipeable row of cards.
- The resume PDF (`public/assets/matt-chrzaszcz-resume.pdf`) opens in a new tab from the intro and fit panels, the career panel, and the footer.

## Global elements

Header brand: `Matt Chrzaszcz` with the tagline `Strategic Finance. FP&A. CPA.`

Portrait caption: `Matt Chrzaszcz, CPA`, `Strategic finance and FP&A leader based in Kitchener–Toronto`

Career signals under the portrait:

| Value | Label | Note |
| --- | --- | --- |
| 10+ | Years | FP&A, strategic finance, and startup finance |
| CPA | Since 2019 | Chartered Professional Accountant, CPA Ontario |
| 3 | Functions built | Startup finance set up from zero, as first hire or fractional lead |

Footer: email, LinkedIn, `Resume (PDF)`

## Panel 1: Intro

Headline: `Clear Numbers. Earlier Decisions.`

Summary: `I'm a CPA with 10+ years in FP&A and startup finance, turning fragmented data into decisions CEOs and CFOs can act on.`

Points:

1. **FP&A leadership**: Budgets, forecasts, long-range plans, and board reporting that leaders actually use.
2. **Profitability**: Cost control, pricing, and unit economics that show up in operating margin.
3. **Finance from zero**: First-hire experience owning the close, cash, compliance, payroll, and investor reporting.
4. **Data & AI**: SQL, dbt, BI, and AI-enabled tools I build myself, so finance keeps pace with the business.

Actions: `Get in touch` (email), `Resume`, LinkedIn

## Panel 2: Impact

Headline: `Results That Show Up in the P&L.`

Summary: `The pattern repeats: find where money leaks or stalls, prove it with data, and fix the mechanism behind it.`

Points:

1. **+50% operating profit**: Led Pinnacle's annual budget with a hard line on cost: operating expenses down 15% versus fiscal 2023.
2. **$2M recovered and saved**: Partnered with Payments to recover ~$0.5M in overcharges and secure lower fees worth ~$1.5M more.
3. **$1M a month saved**: At Vidyard, helped cut marketing spend ~$1M a month as the market shifted, without a major revenue hit.
4. **$1M+ cash unlocked**: As Looka's first finance hire, freed funds stuck in PayPal with banks and payment partners.

Action: `See my career` (scrolls to the next panel)

## Panel 3: Career

Headline: `From First Finance Hire to Head of FP&A.`

Summary: `Each role widened the brief, from reporting the numbers to owning the plan to building the function around it.`

Timeline (start year, company, role, context):

| Year | Company | Role | Context |
| --- | --- | --- | --- |
| 2025 | Current role | Head of Strategic Finance | Online gaming |
| 2023 | Pinnacle | Head of FP&A | Global online gaming |
| 2020 | Vidyard | Senior Manager, Revenue FP&A | B2B video SaaS |
| 2020 | Bonsai & Vital Bio | Fractional Head of Finance | Early-stage startups |
| 2019 | Looka | Head of Finance | First finance hire |
| 2017 | FreshBooks | FP&A Manager | Small-business accounting SaaS |

The current employer is deliberately unnamed, matching LinkedIn. Titles and years follow the 2026 resume.

Action: `View full resume`

## Panel 4: Fit

Headline: `The Right Seat at the Right Stage.`

Summary: `I'm open to senior finance roles at growing companies that need both a strategic partner and a hands-on builder.`

Points:

1. **Head or Director of FP&A**: Growth companies of up to about 500 people building a planning function the CFO can trust.
2. **Head of Finance**: Startups of up to about 100 people that need one leader across accounting, cash, and planning.
3. **How I work**: Hands-on, direct, and data-first. I'd rather fix the mechanism than explain the variance.
4. **Based in**: Kitchener–Toronto, Ontario, Canada.

Actions: `Let's talk` (email), `Resume`, LinkedIn

## Search and sharing

- Title: `Matt Chrzaszcz, CPA | Strategic Finance & FP&A Leader`
- Description: `Matt Chrzaszcz is a CPA and strategic finance leader with 10+ years in FP&A and startup finance across SaaS and online gaming, based in Kitchener–Toronto.`
- Structured data: a schema.org `Person` block in `public/index.html`

## Visual system

- Palette: near-black base, bone and parchment text, champagne and bronze accents, oxblood rules
- Type: Instrument Serif for headlines, company names, and figures; Manrope for body and interface text
- Each headline italicizes one word in champagne; the Impact figures use the same treatment

## Reviewer questions

- Can a hiring CFO tell within five seconds that this is a CPA finance leader aimed at Head or Director of FP&A roles?
- Would a founder hiring a first Head of Finance see the first-hire and fractional experience?
- Are the Impact numbers precise enough to defend in an interview?
- Should the current employer be named?
