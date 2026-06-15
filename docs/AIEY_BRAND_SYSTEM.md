# AI Evolving You Brand System

This document is the single source of truth for AI Evolving You visual identity, interface design, product consistency, and future development decisions.

It applies across the main AI Evolving You site and related products, including Interview Coach, Displaced Index, AI Risk Report, Organisation Toolkits, and future products.

---

## Brand Position

AI Evolving You helps people and organisations evolve with the changing world of work.

The brand sits at the intersection of artificial intelligence, labour market change, hiring, careers, organisational adaptation, and practical decision-making.

It should feel like a calm, credible guide through structural change rather than a hype-led AI product.

### Core Themes

- AI
- Work
- Careers
- Hiring
- Workforce change
- Adaptation
- Evidence
- Practical guidance

### Avoid

- Hype
- Futurism
- Cyberpunk aesthetics
- Fear-based messaging
- SaaS growth-hack styling
- Overpromising certainty
- Generic "future of work" language without substance
- Decorative AI visual tropes such as glowing brains, robot hands, neon grids, or abstract data storms

### Strategic Narrative

AI Evolving You should consistently express this idea:

Work is changing. Hiring is changing. Technology is changing. Old assumptions are being displaced. People and organisations need to understand what is shifting and evolve with what replaces it.

The brand should connect practical tools with deeper analysis:

- Interview Coach helps individuals practise and adapt.
- Displaced Index tracks visible labour market change.
- Human Intelligence provides analysis and commentary.
- Organisation Toolkits help teams make better AI adoption decisions.
- AI Risk Report helps people understand exposure and transition risk.

---

## Design Principles

## Organic Precision

Organic Precision is the core design language.

The design should feel human and editorial, but structured enough to support research, tools, products, and decision-making.

### The Design Language Should Feel

- Editorial
- Calm
- Thoughtful
- Credible
- Human
- Structured
- Research-led
- Useful
- Quietly confident

### Inspired By

- Displaced Index
- Financial Times restraint
- Editorial publications
- Research institutions
- Policy briefings
- Serious product documentation
- Well-designed public-interest data projects

### Not Inspired By

- Startup SaaS dashboards
- Crypto products
- AI neon interfaces
- Productivity app aesthetics
- Growth marketing landing pages
- Decorative portfolio sites
- Overanimated technology demos

### Design Logic

The design should prioritise:

- Reading before scanning tricks
- Structure before decoration
- Evidence before persuasion
- Calm confidence before excitement
- Clear product paths before marketing funnels

Where possible, visual interest should come from typography, spacing, borders, editorial composition, and restrained colour accents.

---

## Typography

Typography is a defining part of the AI Evolving You system.

The typographic hierarchy should feel editorial, precise, and calm. Avoid extreme contrast, oversized marketing type, compressed spacing, or overly playful type treatments.

### Heading Font

**Manrope**

Usage:

- H1
- H2
- H3
- Major card titles
- Featured project titles
- Metric values where a strong editorial display style is needed

Characteristics:

- Confident
- Modern
- Human
- Clear
- Slightly editorial without becoming decorative

Implementation guidance:

```css
--font-heading: 'Manrope', 'Inter', sans-serif;
```

Recommended heading traits:

- Weight: `600` for most headings
- Weight: `700` only for special emphasis or compact cards where extra clarity is needed
- Line-height: `1.15` to `1.25`
- Letter-spacing: around `-0.02em` to `-0.03em`

Avoid:

- Overly heavy hero type
- Excessive negative letter spacing
- Campaign-style display typography that feels detached from the rest of the site

### Body Font

**Inter**

Usage:

- Paragraphs
- Forms
- Buttons
- Dropdown content
- Product descriptions
- Supporting copy
- Long-form reading interfaces

Implementation guidance:

```css
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
```

Recommended body traits:

- Weight: `400`
- Line-height: `1.6` to `1.75`
- Body size: usually `0.95rem` to `1.08rem`
- Keep paragraphs readable and uncompressed

Avoid:

- Thin body text that reduces readability
- Overly small paragraph text in important sections
- Dense text blocks without section rhythm

### Mono Font

**JetBrains Mono**

Usage:

- Section labels
- Metadata
- Category tags
- Statistics labels
- Navigation microcopy
- Small product/state labels
- Editorial eyebrows

Implementation guidance:

```css
--font-mono: 'JetBrains Mono', 'Inter', monospace;
```

Recommended mono traits:

- Weight: `500`
- Uppercase for labels and metadata
- Font size: usually `10px` to `12px`
- Letter-spacing: `0.08em` to `0.12em`

Avoid:

- Large blocks of mono text
- Using mono for paragraph copy
- Making labels too loud or too dark

---

## Colour System

The colour system should feel grounded, editorial, and restrained. Colours should clarify hierarchy and product state rather than decorate for its own sake.

### Core Colours

#### Primary Forest

`#315E52`

Use for:

- Primary buttons
- Core brand accents
- Navigation logo or active states
- Key product CTAs
- Important rule lines or top borders
- Research/product identity marks

Avoid:

- Large flat colour blocks unless used for a deliberate featured section
- Overusing forest so the whole interface becomes monochrome

#### Clay Accent

`#C9782B`

Use for:

- Hover underlines
- Subtle product-state accents
- Small badges or editorial markers
- Warm emphasis
- Contact or conversation-oriented sections
- Secondary accents in cards

Avoid:

- Large orange blocks
- Orange buttons as the default action treatment
- Alert-like usage unless the context genuinely warrants it

#### Charcoal

`#1E1E1E`

Use for:

- Primary headings
- High-emphasis text
- Research/editorial framing
- Dark accent borders where needed

Avoid:

- Pure black-heavy interfaces
- Overly stark contrast that breaks the calm tone

#### Background

`#F7F5F3`

Use for:

- Main page background
- Editorial surface context
- Soft contrast behind white content areas

Avoid:

- Pure white as the only background across long pages
- Beige-heavy layouts that feel lifestyle or hospitality-led

#### Border

`#E4E0DA`

Use for:

- Section dividers
- Cards
- Form fields
- Tables
- Resource lists
- Navigation borders

Avoid:

- Heavy shadows where a border would be clearer
- Dark borders except for deliberate emphasis

#### Text

`#1A1A1A`

Use for:

- Primary reading text where high contrast is needed
- Main headings
- Important labels

#### Muted Text

`#5F6462`

Use for:

- Paragraph copy
- Supporting text
- Metadata that should remain readable
- Secondary navigation text

Avoid:

- Very pale grey for body copy
- Low contrast in forms or cards

### CSS Token Recommendation

```css
:root {
  --green: #315E52;
  --orange: #C9782B;
  --charcoal: #1E1E1E;
  --background: #F7F5F3;
  --surface: #FFFFFF;
  --border: #E4E0DA;
  --text-primary: #1A1A1A;
  --text-secondary: #5F6462;
}
```

---

## Layout Principles

AI Evolving You layouts should feel editorial and spacious, with enough structure to support products, resources, and research.

### Core Layout Rules

- Use wide editorial layouts where appropriate.
- Preserve generous whitespace.
- Maintain clear section rhythm.
- Prioritise maximum readability.
- Keep visual noise low.
- Use consistent horizontal containers across related sections.
- Let section structure do the work before adding decoration.

### Use

- Cards sparingly
- Borders before shadows
- Structure before decoration
- Tinted backgrounds to create rhythm
- Full-width section bands where useful
- Editorial grids for related ideas
- Strong but quiet section labels

### Avoid

- Glassmorphism
- Heavy gradients
- Excessive animation
- Bright colour blocks
- Nested cards
- Floating card-heavy layouts
- Generic SaaS pricing-page patterns
- Decorative bokeh/orb backgrounds

### Spacing Rhythm

Recommended section rhythm:

- Desktop major sections: `96px` to `128px` vertical padding
- Mobile major sections: `64px` to `80px` vertical padding
- Heading-to-body spacing: `18px` to `28px`
- Card internal padding: `24px` to `40px`
- Card grid gap: `16px` to `28px`

Whitespace should feel intentional, not empty.

---

## Component Library

These component standards should guide future UI work across all AI Evolving You products.

### Hero Sections

Purpose:

- Establish the product or page idea quickly.
- Set the editorial tone.
- Provide one clear next action.

Standards:

- Use Manrope for the main heading.
- Keep the heading concise and grounded.
- Use Inter for the subheading.
- Avoid multiple competing CTAs.
- Use restrained background treatments.
- If using the grid motif, keep it subtle and slow.

Avoid:

- Stock imagery
- Generic AI illustrations
- Large marketing claims
- Neon gradients
- Hero content inside decorative cards

### Section Labels

Purpose:

- Orient the reader.
- Create editorial rhythm.
- Signal categories without overpowering headings.

Standards:

- Use JetBrains Mono.
- Uppercase.
- Small size.
- Letter-spaced.
- Forest or context-specific muted accent colour.

Example:

```css
.section-label {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
```

### Buttons

Purpose:

- Make the next useful action obvious.

Standards:

- Primary buttons should use forest.
- Button text should use Inter.
- Keep radius modest.
- Avoid heavy shadows.
- Hover states should be subtle.

Primary button:

- Background: Primary Forest
- Text: White
- Font weight: `500` or `600`
- Padding: comfortable but not oversized

Avoid:

- Bright orange primary CTAs
- Gradient buttons
- Pill-heavy SaaS styling
- Multiple primary buttons in one view

### Cards

Purpose:

- Group related information.
- Help users compare options.
- Support product, resource, or pathway navigation.

Standards:

- Use borders rather than heavy shadows.
- Use subtle background tints only when they clarify distinction.
- Keep card titles in Manrope.
- Keep labels in JetBrains Mono.
- Keep body text in Inter.
- Use accent top borders for gentle differentiation.

Avoid:

- Cards inside cards
- Overdecorated cards
- Excessive icons
- Loud badges
- Uniform grids that make unrelated things feel equivalent

### Featured Project Blocks

Purpose:

- Highlight a major product, research asset, or initiative.

Standards:

- May use stronger forest or charcoal treatments.
- Should feel editorial, not promotional.
- Can include one metric or proof point.
- Should have one clear CTA.
- Use subtle grid or border treatments if aligned with product identity.

Avoid:

- Overly glossy product banners
- Dense feature lists
- Multiple unrelated CTAs

### Resource Lists

Purpose:

- Help users find useful writing, frameworks, and tools.

Standards:

- Prioritise clarity and sequence.
- Use labels for category and journey stage.
- Use borders to separate items.
- Keep excerpts concise.
- Route users to the correct audience track where applicable.

Audience tracks should remain distinct:

- Candidate resources
- Organisation resources
- Toolkits
- Research and commentary

### Forms

Purpose:

- Capture contact, waitlist, or product interest with minimal friction.

Standards:

- Use Inter for labels and fields.
- Keep labels clear and concise.
- Use restrained borders.
- Use forest for submit buttons.
- Confirmation states should feel calm and personal.

Avoid:

- Overly complex forms
- Multi-step forms unless necessary
- Aggressive conversion copy
- Loud success animations

### Navigation

Purpose:

- Help users understand the ecosystem and move between products.

Standards:

- Use JetBrains Mono for nav microcopy.
- Keep top-level navigation concise.
- Products may sit in a dropdown when needed.
- External links should open in a new tab where appropriate.
- Mobile navigation should remain simple and accessible.

Avoid:

- Overcrowding the top nav
- Repeating the same destination under multiple unclear labels
- Badges unless they communicate a meaningful product state

### Footer

Purpose:

- Provide quiet closure and secondary navigation.

Standards:

- Keep minimal.
- Use muted text.
- Include product ecosystem links only where useful.
- Avoid large newsletter or marketing blocks unless strategically needed.

### Metrics Panels

Purpose:

- Present evidence, scale, or research findings.

Standards:

- Use Manrope for large metric values.
- Use JetBrains Mono for metric labels.
- Use clear source/provenance language.
- Keep numbers grounded and contextualised.

Avoid:

- Vanity metrics
- Unsupported claims
- Overly animated counters

### Tool/Product Cards

Purpose:

- Represent practical offerings clearly.

Standards:

- Product name should be short and scannable.
- Product status should be explicit only when useful.
- Product CTA should communicate availability:
  - Available product: direct action
  - Upcoming product: waitlist or early access
  - Resource/toolkit: browse, download, or read

Avoid:

- Template-style badges
- Startup-y labels
- Feature overload
- Treating every product as equally urgent

---

## Product Consistency Rules

Every AI Evolving You product should share the same core system.

### Shared Across Products

- Typography
- Colour system
- Spacing rhythm
- Navigation style
- Button treatments
- Editorial section labels
- Border-led structure
- Calm motion standards
- Evidence-led messaging

### Applies To

- Main website
- Interview Coach
- Displaced Index
- AI Risk Report
- Organisation Toolkits
- Future products

### Product Differentiation

Products may have their own emphasis, but should not feel like unrelated brands.

Acceptable differentiation:

- Slight variation in accent balance
- Different page structures based on product function
- Product-specific metrics or data components
- Domain-specific copy and examples

Not acceptable:

- Different typography systems
- Neon AI styling
- Unrelated palettes
- Inconsistent button styles
- Overly app-like dashboards for editorial pages
- Overly editorial pages for functional tools

---

## Voice & Messaging

The AI Evolving You voice should be calm, direct, evidence-led, and human.

It should help people think clearly about change without inflating or minimising what is happening.

### Tone

- Calm
- Direct
- Evidence-led
- Human
- Practical
- Grounded
- Thoughtful

### Avoid

- Hype
- Buzzwords
- AI evangelism
- Doom narratives
- Empty futurism
- Corporate abstraction
- Overly clever phrasing
- Fear-based urgency

### Prefer

- Clarity
- Context
- Practical guidance
- Measured conclusions
- Specific examples
- Useful distinctions
- Plain language

### Messaging Rules

Use language that helps people understand what is changing and what they can do next.

Prefer:

- "Understand what's changing."
- "Prepare for what comes next."
- "Make better decisions about AI adoption."
- "Practise with the tools shaping hiring."
- "Track evidence of workforce change."

Avoid:

- "Unlock the future of work."
- "Supercharge your career with AI."
- "Revolutionise hiring."
- "AI-powered transformation at scale."
- "The ultimate platform for the AI era."

### Audience Sensitivity

The audience includes individuals worried about their roles, candidates navigating opaque hiring processes, and organisations trying to adopt AI responsibly.

Messaging should never make people feel naive, obsolete, or blamed for uncertainty.

The brand should acknowledge pressure without exploiting it.

---

## Motion and Interaction

Motion should be subtle and purposeful.

Use motion for:

- Gentle fade-ins
- Slow grid drift
- Clear hover feedback
- Dropdown opening/closing

Avoid:

- Fast animations
- Parallax-heavy effects
- Scroll-jacking
- Decorative motion that distracts from reading
- Bouncy or playful transitions

Recommended:

```css
transition: color 0.2s ease, background 0.2s ease, transform 0.2s ease;
```

Grid motion, where used:

- Slow
- Horizontal
- Subtle
- Low opacity
- Never visually dominant

---

## Accessibility Standards

All future development should preserve accessibility as a baseline, not an enhancement.

Standards:

- Maintain sufficient colour contrast.
- Use semantic HTML.
- Use real buttons for actions.
- Use links for navigation.
- Provide `aria-expanded` for dropdowns.
- Provide `aria-label` where icon-only controls exist.
- Preserve keyboard access.
- Do not rely on colour alone to communicate state.
- Keep focus states visible.

Avoid:

- Div-based buttons
- Click-only interactions
- Hidden labels on forms
- Tiny tap targets on mobile
- Overlapping text or controls

---

## Implementation Guidance for Claude and Codex

When making future changes:

1. Preserve the Organic Precision design direction.
2. Use the established font roles:
   - Manrope for headings
   - Inter for body and controls
   - JetBrains Mono for labels and metadata
3. Use the shared colour system.
4. Prefer editing existing components over adding new abstractions.
5. Preserve routes, forms, downloads, resources, and product links unless explicitly asked.
6. Keep copy concise and grounded.
7. Avoid introducing new visual concepts without a clear reason.
8. Test mobile layouts when navigation, hero, cards, or forms change.
9. Run a production build after implementation.

### Default CSS Tokens

Future products should start from these tokens or map their local tokens to them:

```css
:root {
  --font-heading: 'Manrope', 'Inter', sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  --font-mono: 'JetBrains Mono', 'Inter', monospace;

  --green: #315E52;
  --orange: #C9782B;
  --charcoal: #1E1E1E;
  --background: #F7F5F3;
  --surface: #FFFFFF;
  --border: #E4E0DA;
  --text-primary: #1A1A1A;
  --text-secondary: #5F6462;
}
```

### Final Quality Bar

A finished AI Evolving You product or page should feel:

- Useful before decorative
- Editorial before promotional
- Calm before exciting
- Evidence-led before persuasive
- Human before technical
- Consistent with the wider ecosystem

