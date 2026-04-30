# AI Evolving You — Decisions Log

**Last updated:** 13 April 2026

This document tracks key decisions made across the Interview Coach, AI Evolving You site, and related products so they are not lost in chat history.

---

## 1. Product lanes are separate

### Decision
The work is split into four distinct lanes:

1. **Interview Coach** — live product, candidate-facing, tactical interview prep tool
2. **AI Evolving You site** — main brand home, product hub, resources, articles, waitlists
3. **Organisational products** — paid frameworks and process aids for HR/hiring teams
4. **Evolve Displacement Report** — separate product line, referenced on main site via waitlist only

### Why
Without this split, product thinking, site content, and future paid products blur together.

### Implication
All future work should be assigned to one lane before being added to roadmap or build plan.

---

## 2. Interview Coach is session-based, not subscription-first

### Decision
The Interview Coach is positioned as a **when-I-need-it tool**, not a recurring subscription product.

### Why
Users use it in bursts around active interview processes, not consistently every month.

### Implication
Pricing and product design should optimise for short-term use, fast value, and repeat purchase only when needed.

---

## 3. Pricing for paid launch

### Decision
- **Free** — first 3 questions + coaching feedback
- **£5** — 1 full session (all 7 questions + cheat sheet)
- **£12** — 3 full sessions

### Why
Low-friction entry point with a sensible bundle for active job seekers. Subscriptions dropped — annual and weekly tiers removed to reduce decision fatigue.

### Implication
Do not lead with monthly or quarterly subscriptions at launch.

---

## 4. Paywall placement

### Decision
The paywall appears **mid-session at question 4**.

### Why
Users have already experienced value and tailoring, but haven't completed the full session or received the cheat sheet.

### Implication
Free experience is a real product taste. Completion and final output remain paid.

---

## 5. Paid product definition (one sentence)

**Free:** Try the first 3 questions and experience the coaching.
**Paid:** Unlock the full 7-question session, tailored coaching throughout, and your personalised cheat sheet.
**Bundle:** 3 sessions for people preparing across multiple roles or interviews.

### Implication
All pricing pages, product copy, Stripe product names, and paywall messaging should reflect this exact offer.

---

## 6. No user accounts for Phase 1

### Decision
Phase 1 launches without auth or user accounts.

### Why
Simpler, faster to build, lighter from a data/privacy/GDPR perspective. Build towards it when users ask for it.

### Implication
Session history, redo flows, progress tracking, and persistent dashboards are postponed. Optional email capture on the feedback form is the lightweight bridge until auth is built.

---

## 7. Supabase scope for Phase 1 is intentionally limited

### Decision
Supabase will be used only for lightweight anonymous session tracking and payment/access support.

### Initial scope
- Session ID, date/time
- Role category used
- Job title / extracted role input
- Number of questions answered
- Completed yes/no
- Access/payment state

### Why
Avoid overbuilding and collecting unnecessary user data before product-market validation.

### Implication
Do not build full profile systems, stored answer histories, or broad user models in Phase 1.

---

## 8. Stripe is the payment platform

### Decision
Use **Stripe Payment Links**. Not Gumroad (10% cut). Not Stan Store (£29/month subscription).

### Why
Lowest fees (~1.5% + 20p per UK transaction), zero monthly cost, full brand control, supports discount codes and gift purchase natively.

### Implication
Payment flow, access control, and future product sales should be built around Stripe.

---

## 9. Gift purchase is not a day-one priority

### Decision
"Buy for someone else" is a future enhancement, not a launch requirement.

### Why
Useful feature but not essential for validating paid demand.

### Implication
Do not delay payment launch because of gifting logic. Add post-launch.

---

## 10. Main site nav

### Decision
Nav should be: **Interview Coach · Resources · YouTube · Substack · Connect**

### Why
Previous nav ("Work", "Products") was unclear and too portfolio-like. The site should behave as a product hub.

### Implication
Remove Work and Products nav items. Resources placeholder goes in now even before content is live.

---

## 11. Main site is product-first, not founder-first

### Decision
The site focuses on what the platform is, what is live, and why it matters — not on Man as the central subject.

### Why
Visitors should immediately understand the purpose and available tools. Founder background is available through YouTube and Substack.

### Implication
Hero, bridge copy, and product sections do the work. No lengthy founder bio on the homepage.

---

## 12. Resources structured in three buckets

### Decision
Resources section split into:
1. **Interview Resources** — candidate traffic, funnel into Interview Coach
2. **AI & Hiring** — authority building, org relevance, SEO
3. **Organisational Frameworks** — paid framework products, HR/hiring audience

### Why
Clean content architecture supports SEO and product funneling without mixing audiences.

### Implication
Every new content idea should be assigned to one bucket before being created.

---

## 13. No CMS for now

### Decision
Articles added directly in code. No CMS platform at this stage.

### Why
Manageable for a solo founder at current publishing volume. CMS revisited if publishing frequency increases significantly.

### Implication
Article formatting is handled manually in code. Keep a consistent article template to make this easy.

---

## 14. Substack remains distinct from the main site

### Decision
- **Substack** — broader Human Intelligence thinking, personal/exploratory essays, wider AI and society themes
- **Main site** — product-adjacent, SEO-relevant, commercially aligned resources

### Why
The two spaces serve different purposes and audiences. Core interview, AI hiring, and framework content lives on the site.

### Implication
Do not outsource commercial-intent content to Substack.

---

## 15. Organisational products are operational frameworks, not legal documents

### Decision
Paid org products are practical process/framework tools.

### Initial product types
- AI Hiring Policy Framework
- Bias Audit Checklist
- AI Vendor / Agentic Procurement Guide
- Candidate Transparency Standards

**Price range:** £49–£149 per document

### Why
Real gap for usable operational material. Must not pretend to provide legal advice.

### Implication
All copy must be clear these are practical frameworks, not legal/compliance guarantees.

---

## 16. Testimonial capture uses before/after format

### Decision
Feedback form Q5 asks "Before this session I felt…" and "Now I feel…" rather than generic satisfaction wording.

### Why
Produces more emotionally useful, quotable, shareable feedback for social proof.

### Implication
Strong responses should be manually tracked in a simple sheet with columns: date / before / after / role category / usable publicly / strongest quote.

---

## 17. Aleto beta is the immediate deadline

### Decision
16 April 2026. Pre-beta changes should be minimal and support stability only.

### Why
Breaking a working product right before real users arrive would be counterproductive.

### Implication
No major feature expansion before beta. Focus on stability, testing, and feedback capture.

---

## 18. Export / download cheat sheet is post-beta priority

### Decision
Cheat sheet PDF export / print view is a post-beta, pre-paid-launch enhancement.

### Why
Does three jobs: gives user something tangible, makes tool feel more premium, creates shareable branded output.

### Implication
Not before beta. Prioritise after Aleto feedback is collected.
## 19. Resources section restructured as two audience tracks

### Decision
Resources section split from a single embedded homepage section into a standalone page at /resources with two clearly labelled tabs: For Candidates and For Organisations.

### Why
Single list mixed audiences and had no connective logic. Two-track structure creates a learning journey for candidates and a product funnel for organisations.

### Implication
Resources has its own route. Nav links directly to /resources. Articles link back to /resources. New content must be assigned to either the Candidates or Organisations track before being built.

---

## 20. Journey label system for article cards

### Decision
Candidate article cards use six distinct journey labels in sequence:
1. Start here (green badge)
2. Next up (orange badge)
3. Then try this (orange badge)
4. Level up (orange badge)
5. Go deeper (orange badge)
6. Going further (orange badge)

Start here uses the green brand colour. All other steps use the orange palette (#D47A2C background, #7A3A0E text).

### Why
"Going deeper" was used three times in a row which lost meaning. Distinct labels reinforce the learning journey and give each card a unique identity.

### Implication
Any new candidate articles added must be assigned a journey label. Labels should not repeat within the same track.

---

## 21. Article visual component system

### Decision
Candidate articles use a consistent set of inline React visual components defined at the top of each article JSX file. The full component library is documented in SKILL-article-visual-components.md.

Core components:
- CategoryGrid — coloured cards for named categories
- FrameworkSteps — horizontal step flow for named frameworks
- Trap — orange callout for traps to avoid
- Mistake — ✗ callout for common mistakes
- WeakStrong — two-column weak vs strong comparison
- NumberedSteps — vertical numbered preparation steps
- Checklist — ✓ checklist for criteria or qualities
- TwoColumnTimeline — two-phase split (e.g. day before / morning of)
- StrategyCards — numbered strategy options with examples
- AvoidList — ✗ list of things not to do
- CalloutBlock — prominent highlighted section

### Why
Consistent visual language across all articles. Easier to scan, more useful as a reference. Reduces cognitive load compared to dense prose.

### Implication
All future articles should use components from this library rather than inventing new patterns. Add new components to SKILL-article-visual-components.md when genuinely needed.

---

## 22. Article learning journey chain

### Decision
Every candidate article (except the last) passes a nextArticle prop to ArticleLayout which renders a "next in the series" card above the CTA. The sequence is:

1. four-types-of-interview-question → star-method
2. star-method → weakness-question
3. weakness-question → ai-interview-prep
4. ai-interview-prep → behavioural-interview
5. behavioural-interview → career-changers
6. career-changers → no next article (CTA only)

### Why
Creates a reading loop, reinforces the journey labels on the Resources page, and increases time on site.

### Implication
New articles added to the candidate track must be inserted into the chain. The article before it needs its nextArticle prop updated.

---

## 23. CTA button colour rule

### Decision
- Article CTA buttons (Try the Interview Coach) are green (#3F6F63)
- Purchase buttons (Buy now) are orange (#D47A2C)

### Why
Green = navigate/engage. Orange = spend/transact. Consistent colour meaning across the site.

### Implication
Never use orange for navigation CTAs. Never use green for purchase buttons.

---

## 24. First paid org product is live — AI Procurement Questions

### Decision
AI Procurement Questions for Hiring Teams is live at £79 via Stripe Payment Link, with a custom thank-you page at `/thank-you/ai-procurement-questions` and PDF delivery via Netlify static file hosting.

### Why
First commercial validation of the org product lane. Establishes the technical pattern for all future paid framework products.

### Implication
All future org product purchases follow the same pattern: Stripe Payment Link → redirect to `/thank-you/[product-slug]` → download from `/downloads/[filename].pdf`.

---

## 25. PDF delivery via Netlify static hosting with Content-Disposition header

### Decision
PDFs are stored in `public/downloads/` and served via Netlify with a `Content-Disposition: attachment` header set in `netlify.toml`.

### Why
The `download` attribute alone is unreliable across browsers. Safari corrupts files when the `/* → /index.html` catch-all redirect intercepts the request. The header solution forces correct download behaviour regardless of browser.

### netlify.toml pattern (locked)
```toml