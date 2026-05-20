---
name: de-silver-layer-design
description: Use when designing cleaned, standardized, conformed, typed, deduplicated, and validated Silver datasets before business-ready Gold modeling.
---

# de-silver-layer-design

## When To Use

Use after Bronze design and before Gold modeling. Use when raw data must be standardized into reliable source-aligned datasets.

## Purpose

Design Silver datasets that normalize schemas, keys, types, timestamps, units, and quality expectations while preserving lineage to Bronze.

## Inputs Required

- Bronze table specifications.
- Source schemas and samples.
- Standard naming and type conventions.
- Business requirements and source inventory.

## Step-By-Step Process

1. Define Silver dataset grain and primary keys.
2. Standardize column names, data types, timestamps, time zones, currencies, and units.
3. Define deduplication and late-arriving record rules.
4. Map source codes to canonical reference values.
5. Define null handling and invalid record handling.
6. Add lineage fields back to Bronze.
7. Define Silver quality gates.

## Output File

Write the final artifact to:

`.agents/des-skill/output/10-silver-layer-design.md`

Use the matching template from:

`.agents/des-skill/templates/silver_table_spec_template.md`

After writing the file, summarize the file path and recommend the next skill.

## Required Outputs

- Silver table specifications.
- Standardization rules.
- Deduplication and invalid record policy.
- Reference mapping requirements.

## Quality Checklist

- Grain and keys are explicit.
- Types and time zones are consistent.
- Silver records trace back to Bronze.
- Invalid records have a handling path.
- Quality gates block bad downstream data where appropriate.

## Common Mistakes To Avoid

- Mixing business aggregates into Silver.
- Hiding invalid records instead of quarantining or flagging them.
- Leaving source-specific naming in shared datasets.
- Ignoring late-arriving data.

## Handoff To The Next Skill

Next use `de-gold-layer-design` to model business-ready facts, dimensions, marts, and metrics.

## Example Output Format

```markdown
# Silver Table Spec
| Table | Grain | Primary Key | Inputs | Standardization | Quality Gates |
## Deduplication Rules
## Invalid Record Handling
```
