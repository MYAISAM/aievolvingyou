# 04 — Processing Prompt 2 Output

## Current state

Prompt 2 produced 10 role-based AI learning pathways.

The output is useful but still narrative-heavy. It should not be pasted directly into the website or ingested directly into a database.

## Why Prompt 2 should not be ingested as-is

Issues:

- Repeated resources appear across multiple pathways.
- Some resource names are inconsistent.
- Some source links point to secondary articles instead of original provider pages.
- Affiliate availability is speculative in places.
- Citations appear as bracket references such as `[1]` and `[2]`.
- Course, guide, article and pathway types are mixed together.
- Descriptions are too long for reusable cards or database rows.
- Some resource costs and certificate details need verification.

## Next processing step

Run Prompt 2B in Perplexity.

Purpose:

Convert the pathway narrative into structured data.

Expected output:

1. `pathways`
2. `pathway_steps`
3. `resource_aliases`

## Desired output structure

### Table 1: pathways

Each row should represent one role-based learning pathway.

Suggested columns:

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
- notes

### Table 2: pathway_steps

Each row should represent one step inside a pathway.

Suggested columns:

- pathway_id
- step_number
- step_title
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

### Table 3: resource_aliases

This table helps reconcile differently named versions of the same resource.

Suggested columns:

- canonical_resource_title
- variant_title_used_in_pathway
- provider
- reason_for_alias

## Example of the problem this solves

Prompt 2 may refer to:

- Career Essentials in Generative AI
- Microsoft/LinkedIn Career Essentials in Generative AI
- Career Essentials in Generative AI by Microsoft and LinkedIn

These should resolve to one canonical resource record.

## Recommended workflow

```text
Prompt 2 narrative output
→ Prompt 2B structured conversion
→ Manual review of verification flags
→ Match against Prompt 1 resource CSV
→ Add missing resources
→ Import into CMS/Supabase later
```

## Important rule

Do not optimise for affiliate revenue before trust.

Prioritise:

1. usefulness
2. credibility
3. cost clarity
4. provider authority
5. relevance to role
6. affiliate potential last
