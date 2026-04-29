# 03 — Perplexity Prompts

This file preserves the Perplexity research prompts created in the thread.

## Prompt 1 — Master free AI course directory

```text
I am building an AI upskilling resource directory for a website called AI Evolving You.

Please research and create a comprehensive directory of high-quality AI courses, guides and learning resources that are free or mostly free.

Prioritise authoritative sources such as:
- Google
- Microsoft
- IBM
- AWS
- Stanford
- Harvard
- MIT
- Yale
- DeepLearning.AI
- Anthropic
- OpenAI
- Hugging Face
- Kaggle
- Coursera free/audit options
- edX free/audit options
- FutureLearn free options
- LinkedIn Learning only if free or trial-based
- UK government / Skills Bootcamps / public sector resources where relevant

Please include resources focused on:
1. AI for beginners
2. Generative AI basics
3. Prompt engineering
4. AI productivity for knowledge workers
5. AI for business leaders
6. AI for HR/recruitment/people teams
7. AI for marketing/content
8. AI for sales/customer teams
9. AI for finance/operations/admin
10. AI for developers/builders
11. Responsible AI / AI ethics / AI safety
12. AI and the future of work / labour market impact

For each resource, output a table with these columns:
- title
- provider
- direct URL
- category
- role/industry fit
- cost model: free / free audit / paid certificate / paid
- certificate available: yes/no/paid/unknown
- level: beginner/intermediate/advanced
- estimated duration
- format: course/guide/lab/video/learning path/report
- best for
- why it is worth including
- affiliate programme available: yes/no/unknown
- affiliate programme URL if found
- caveats
- date last verified

Rules:
- Prioritise free resources.
- Be precise about whether a course is genuinely free or only free to audit.
- Do not include low-quality SEO listicles as sources unless they point to original course providers.
- Use original provider pages wherever possible.
- Include source links for every claim.
- Add a final shortlist of the top 20 resources I should publish first.
```

## Prompt 2 — Role-based AI course paths

```text
I am creating an AI Skills Library for AI Evolving You.

Please turn free and low-cost AI courses into practical role-based learning pathways.

Create learning pathways for these audiences:
1. Job seekers / career changers
2. HR and recruitment professionals
3. Managers and business leaders
4. Marketing and content professionals
5. Sales and customer success professionals
6. Finance, operations and admin professionals
7. Product managers and founders
8. Developers and technical builders
9. Educators and trainers
10. Procurement, risk and compliance teams

For each pathway, provide:
- pathway name
- target audience
- beginner starting point
- 3-6 recommended free or mostly-free courses/resources
- suggested learning order
- estimated total learning time
- what the learner should be able to do afterwards
- where this links to AI displacement / future-of-work concerns
- which resource should be the “hero” recommendation
- whether any links appear to have affiliate options
- source URLs

Important:
- Do not just list courses.
- Explain why each resource fits that role.
- Prioritise practical work-use of AI over abstract AI theory.
- Clearly label any paid certificate, free audit, or free-only option.
- Use authoritative sources and direct provider pages.
```

## Prompt 2B — Convert Prompt 2 output into structured pathway tables

Use this immediately after Prompt 2. Paste the full Prompt 2 output underneath it.

```text
I have a set of 10 role-based AI learning pathways.

Your task is to convert the pathway content into clean, structured data that can later be imported into a database or CMS.

Do not add new courses unless needed to fill an obvious gap.
Do not rewrite the strategy.
Do not turn this into a blog post.

Please produce three separate tables:

TABLE 1: pathways

Columns:
- pathway_id
- pathway_title
- pathway_slug
- target_audience
- category
- beginner_starting_point
- hero_resource_title
- short_description
- future_of_work_link
- estimated_total_time
- difficulty_level
- publish_priority: high / medium / low
- notes

TABLE 2: pathway_steps

Columns:
- pathway_id
- step_number
- step_title
- resource_title
- provider
- resource_type: course / guide / article / learning_path / report / video / tool
- cost_label: free / free_audit / paid_certificate / paid / unknown
- certificate_label: free_certificate / paid_certificate / no_certificate / unknown
- why_this_step
- learner_action
- estimated_time
- source_url
- needs_verification: yes / no
- verification_note

TABLE 3: resource_aliases

Columns:
- canonical_resource_title
- variant_title_used_in_pathway
- provider
- reason_for_alias

Important rules:
- Use stable snake_case IDs.
- Use clean slugs.
- Remove citation brackets like [1], [2], etc.
- Preserve the learning order.
- Clearly flag anything that was based on a secondary source rather than an original provider page.
- Clearly flag anything where the cost, certificate, or affiliate status is uncertain.
- Keep descriptions concise and website-ready.
- Output as CSV-style tables or markdown tables that can easily be copied into a spreadsheet.
```

## Prompt 3 — Affiliate verification

```text
Research affiliate, partner, referral, or creator programmes for AI learning platforms and course providers.

Focus only on providers that appear in my AI Skills Library research:
- Coursera
- edX
- Udemy
- Skillshare
- FutureLearn
- LinkedIn Learning
- DataCamp
- Pluralsight
- Codecademy
- DeepLearning.AI
- Google Cloud Skills Boost
- Microsoft Learn
- AWS Skill Builder
- IBM SkillsBuild
- Hugging Face
- Anthropic
- OpenAI Academy or OpenAI learning resources
- Mind the Product
- Product School

For each provider, produce a table with:
- provider
- affiliate_programme_available: yes / no / unclear
- programme_type: affiliate / partner / referral / reseller / none / unclear
- official_programme_url
- affiliate_network_used
- commission_model_if_public
- cookie_window_if_public
- free_resource_available: yes / no / unclear
- paid_resource_available: yes / no / unclear
- suitable_for_trust_first_directory: yes / no / maybe
- reason
- disclosure_note_needed
- caveats
- source_url

Rules:
- Use official provider pages or recognised affiliate network pages only.
- Do not use random blog posts unless no official source exists.
- Do not guess commission rates.
- If unclear, say unclear.
- Separate “has paid courses” from “has an affiliate programme”.
- Prioritise trust and usefulness over commission.
- Finish with a ranked list of the top 5 affiliate programmes worth applying to first, and the top 5 providers to include even with no affiliate relationship.
```

## Prompt 4 — AI displacement/resource reports

```text
I am building a resource section for AI Evolving You and Evolve focused on AI displacement, labour market change, role risk and future skills.

Please research high-quality reports, datasets, studies and trackers from 2023-2026 related to:
- AI impact on jobs
- AI displacement risk
- occupational exposure to AI
- skills disruption
- future job predictions
- generative AI adoption at work
- role-level automation exposure
- labour market changes caused by AI
- hiring changes linked to AI
- productivity and workforce restructuring

Prioritise:
- Anthropic Economic Index
- OpenAI research
- Microsoft Work Trend Index
- McKinsey Global Institute
- Goldman Sachs
- World Economic Forum Future of Jobs
- OECD
- ILO
- IMF
- Gartner
- Forrester
- Stanford AI Index
- O*NET / Department of Labor
- UK ONS
- UK Government reports
- LinkedIn Economic Graph / Jobs on the Rise
- BLS where relevant

For each resource, provide:
- title
- organisation
- publication date
- URL
- geography covered
- industries covered
- whether it includes role-level data
- whether it includes skill-level data
- whether it includes predictions or observed evidence
- key finding in plain English
- usefulness for Evolve
- caveats / limitations
- suggested site category
- source URL

Then create:
1. A “must include” shortlist of 15 resources.
2. A separate list of resources that could feed an AI displacement database.
3. A plain-English summary for non-technical readers.
```

## Prompt 5 — Website-ready copy

```text
Using the AI course research gathered so far, convert the findings into website-ready content for an AI Skills Library.

Create the following:

1. A homepage intro section for the AI Skills Library.
Tone: clear, human, practical, not hypey.

2. Category cards for:
- Start Here: AI Basics
- Prompting & Productivity
- AI for Business Leaders
- AI for HR & Recruitment
- AI for Marketing & Content
- AI for Sales & Customer Teams
- AI for Finance & Operations
- AI for Developers & Builders
- Responsible AI & Ethics
- AI Displacement & Future of Work

For each card include:
- title
- short description
- who it is for
- suggested CTA text

3. A table of recommended resources with:
- title
- provider
- category
- cost
- level
- estimated time
- best for
- CTA label
- affiliate disclosure note where relevant

4. A clear affiliate disclosure paragraph.

5. A trust statement explaining that free resources are prioritised and paid resources are only included where genuinely useful.

6. Suggested SEO title and meta description.
```
