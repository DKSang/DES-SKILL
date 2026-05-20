---
name: de-bronze-layer-design
description: Use when designing raw landing datasets, Bronze tables, raw zones, audit metadata, partitions, retention, and replayable source storage.
---

# de-bronze-layer-design

## When To Use

Use after ingestion design and before Silver standardization. Use when raw source records must be stored safely and replayably.

## Purpose

Design Bronze datasets that preserve source truth, support audit and replay, and avoid premature cleaning.

## Inputs Required

- Ingestion specifications.
- Source schemas or payload samples.
- Retention and privacy requirements.
- Architecture decision record.

## Step-By-Step Process

1. Define one Bronze dataset per source feed or logical raw object.
2. Preserve raw payloads and source fields with minimal transformation.
3. Add ingestion metadata: ingestion time, source system, source file or event ID, run ID, payload hash.
4. Define partitioning and clustering based on query and retention needs.
5. Define retention, archival, and deletion requirements.
6. Document PII and sensitive fields.
7. Define raw schema drift handling.

## Output File

Write the final artifact to:

`.agents/des-skill/output/09-bronze-layer-design.md`

Use the matching template from:

`.agents/des-skill/templates/bronze_table_spec_template.md`

After writing the file, summarize the file path and recommend the next skill.

## Required Outputs

- Bronze table specifications.
- Metadata column standard.
- Partition and retention plan.
- Raw schema drift policy.

## Quality Checklist

- Bronze can replay Silver transformations.
- Source identity and run identity are captured.
- Raw records are not silently cleaned.
- Retention and privacy rules are documented.
- Partitioning avoids tiny-file or hot-partition problems.

## Common Mistakes To Avoid

- Transforming business logic in Bronze.
- Dropping raw fields too early.
- Missing ingestion timestamps.
- Designing Bronze only for current dashboards.

## Handoff To The Next Skill

Next use `de-silver-layer-design` to standardize, type, deduplicate, and conform raw data.

## Example Output Format

```markdown
# Bronze Table Spec
| Table | Source | Raw Format | Partition | Retention | PII |
## Metadata Columns
## Schema Drift Policy
```
