# 01 — Thread Context and Decisions

## Thread purpose

This thread focused on expanding the AI Evolving You website by adding an AI upskilling section within Resources.

The working idea is to curate high-quality AI courses, guides and reports for people who want to learn AI skills, understand how AI affects their role, and take practical next steps.

The user has a paid Perplexity subscription for a month and wants to make heavy use of it to gather structured research.

## Main site context

Current Resources direction:

### Candidate / individual resources

The user has already written interview-related material. These resources should lead naturally into the Interview Coach tool.

Examples:

- Interview preparation guides
- CV and application support
- Candidate confidence / value articulation
- Job search support
- Interview Coach CTA

### Organisation resources

The site will also hold organisation-facing resources.

Examples:

- Free articles / opinion pieces
- Digital downloads
- AI bias checklist
- AI procurement questionnaire
- Hiring fairness tools
- Governance and trust materials

### Future AI displacement resources

The Resources area should eventually include AI displacement and labour market intelligence.

Examples:

- New role predictions
- Anthropic reports
- Gartner studies
- Stanford AI Index
- WEF Future of Jobs
- OECD / IMF / ILO reports
- Role risk and future skills material

This content should lead into Evolve.

### New AI courses section

The proposed new section focuses on AI upskilling.

It should include:

- Free AI courses
- Mostly-free AI courses
- Free-to-audit courses
- Paid certificates clearly labelled
- Role-based learning pathways
- Resources from credible institutions and providers

Potential providers include:

- Stanford
- Google
- Yale
- Harvard
- Microsoft
- Anthropic
- DeepLearning.AI
- OpenAI
- Hugging Face
- IBM
- AWS
- Coursera
- edX
- FutureLearn
- LinkedIn Learning

## Key decision: do not make this a link dump

The AI courses section should not become a generic list of links.

It should be structured around practical user needs, roles and pathways.

Recommended framing:

> **AI Skills Library**

Recommended description:

> Free and low-cost courses, guides and learning pathways to help people understand, use and adapt to AI at work.

## Key decision: organise by role/use case

The proposed structure should be user-led.

Instead of organising by provider first, organise by audience:

- Job seekers and career changers
- HR and recruitment professionals
- Managers and business leaders
- Marketing and content professionals
- Sales and customer success teams
- Finance, operations and admin professionals
- Product managers and founders
- Developers and technical builders
- Educators and trainers
- Procurement, risk and compliance teams

## Key decision: free resources first

The directory should prioritise genuinely free resources.

Paid resources may be included if they are genuinely useful, but must be clearly labelled.

Cost labelling should distinguish:

- Free
- Free audit
- Paid certificate
- Paid
- Unknown

## Key decision: affiliate links must be declared

If any course links are affiliate links, they must be clearly disclosed.

The site should be trust-first. Affiliate revenue should not drive inclusion.

Suggested disclosure language:

> Some links may be affiliate links. If you use them, we may earn a small commission at no extra cost to you. We only include resources that appear genuinely useful, and free resources are prioritised wherever possible.

## Key decision: Prompt 2 should not be ingested as-is

Prompt 2 output is useful as narrative research, but it is not yet clean enough for database or CMS ingestion.

Problems with ingesting Prompt 2 directly:

- Repeated resources across pathways
- Inconsistent course names
- Fuzzy affiliate claims
- Source references like `[1]`, `[2]`
- Mixed formats: course, guide, article, learning path, report
- Some sources require verification against original provider pages
- Pathway language is too long for website cards

Decision:

Prompt 2 should first be converted into structured pathway data.

## Key decision: data should be normalised

The eventual ingest structure should separate resources from pathways.

Suggested model:

1. `ai_learning_resources`
   - Every course, guide, report, academy or learning path

2. `ai_learning_pathways`
   - Each role-based track, e.g. AI for HR & Recruitment

3. `ai_learning_pathway_steps`
   - Ordered resources inside each pathway

This avoids duplication and allows one resource to appear in multiple pathways.

## Recommended publishing approach

Do not publish hundreds of resources first.

Start with a curated first version:

- 10 beginner AI resources
- 10 role-based resources
- 10 responsible AI / future-of-work resources
- 5 displacement reports

This is enough to be useful and credible without becoming overwhelming.
