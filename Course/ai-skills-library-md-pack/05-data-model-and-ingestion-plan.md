# 05 — Data Model and Ingestion Plan

## Recommended data model

The AI Skills Library should be normalised.

Do not store every pathway as one big block of text.

Use separate tables for resources, pathways and pathway steps.

## Table 1: ai_learning_resources

Purpose:

Stores every individual course, guide, report, learning path or tool.

Example fields:

- resource_id
- title
- provider
- url
- category
- role_fit
- cost_model
- certificate_available
- level
- estimated_duration
- format
- best_for
- why_include
- affiliate_available
- affiliate_url
- caveats
- date_last_verified
- status
- notes

Suggested status values:

- draft
- verified
- published
- archived

Suggested cost_model values:

- free
- free_audit
- paid_certificate
- paid
- unknown

Suggested format values:

- course
- guide
- article
- lab
- video
- learning_path
- report
- tool

## Table 2: ai_learning_pathways

Purpose:

Stores each role-based pathway.

Example fields:

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
- publish_priority
- status
- notes

Suggested difficulty_level values:

- beginner
- intermediate
- advanced
- mixed

Suggested publish_priority values:

- high
- medium
- low

## Table 3: ai_learning_pathway_steps

Purpose:

Stores the ordered sequence of resources inside each pathway.

Example fields:

- step_id
- pathway_id
- step_number
- step_title
- resource_id
- resource_title
- provider
- resource_type
- cost_label
- certificate_label
- why_this_step
- learner_action
- estimated_time
- source_url
- needs_verification
- verification_note

## Table 4: ai_learning_resource_aliases

Purpose:

Helps resolve duplicate or inconsistent course naming.

Example fields:

- alias_id
- canonical_resource_title
- variant_title_used
- provider
- reason_for_alias

## Why this model matters

One resource can appear in many pathways.

For example:

- Career Essentials in Generative AI
- Google AI Essentials
- Prompt Engineering for ChatGPT
- DeepLearning.AI short courses

These may appear across job seeker, HR, marketing, sales, operations and educator pathways.

Normalising the data avoids duplication and makes future updates easier.

## Ingestion sequence

Recommended order:

```text
1. Clean individual resource list
2. Verify source URLs and cost labels
3. Structure pathway data
4. Match pathway steps to resource IDs
5. Add missing resource records
6. Import resources
7. Import pathways
8. Import pathway steps
9. Review published page output
```

## Manual verification checklist

Before publishing a resource, check:

- Is the direct URL the original provider page?
- Is the course genuinely free, free-to-audit, or paid?
- Is a certificate available?
- Is the certificate free or paid?
- Is the provider credible?
- Is the resource current?
- Does it fit the role/category?
- Is an affiliate link being used?
- Is affiliate disclosure needed?

## Recommended first public release

Start small:

- 10 beginner AI resources
- 10 role-based resources
- 10 responsible AI / future-of-work resources
- 5 displacement reports

This avoids overbuilding and gives enough substance for a credible launch.
