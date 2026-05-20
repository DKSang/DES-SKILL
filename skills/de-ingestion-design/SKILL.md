---
name: de-ingestion-design
description: Use when designing batch, streaming, API, file, CDC, database, or event ingestion pipelines before implementing source-to-raw data movement.
---

# de-ingestion-design

## When To Use

Use after architecture design and before Bronze table design. Use when each source needs an ingestion mode, schedule, destination, retry policy, and backfill plan.

## Purpose

Create ingestion specifications that make source collection repeatable, idempotent, observable, and aligned with freshness requirements.

## Inputs Required

- Source inventory.
- Architecture decision record.
- Freshness and SLA requirements.
- Access details, schemas, and sample payloads.

## Step-By-Step Process

1. Classify each source as file, API, database, CDC, stream, SaaS export, or manual upload.
2. Select ingestion mode: batch, micro-batch, streaming, CDC, or one-time backfill.
3. Define schedule, trigger, partitioning, destination, and expected volume.
4. Define authentication, rate limits, pagination, checkpoints, and watermarks.
5. Define idempotency, retry, deduplication, and backfill behavior.
6. Define metadata captured for audit and lineage.
7. Specify failure alerts and owner.

## Output File

Write the final artifact to:

`.agents/des-skill/output/08-ingestion-design.md`

Use the matching template from:

`.agents/des-skill/templates/ingestion_spec_template.md`

After writing the file, summarize the file path and recommend the next skill.

## Required Outputs

- Ingestion specification per source.
- Pipeline inventory.
- Backfill plan.
- Failure and retry policy.

## Quality Checklist

- Every source has an ingestion mode and destination.
- Raw records are preserved.
- Backfill and replay strategy are defined.
- Incremental logic is explicit.
- Pipeline owner and alert path are known.

## Common Mistakes To Avoid

- Overwriting raw files without traceability.
- Assuming timestamps are reliable watermarks.
- Ignoring API pagination and rate limits.
- Building non-idempotent ingestion.

## Handoff To The Next Skill

Next use `de-bronze-layer-design` to specify raw landing tables and metadata.

## Example Output Format

```markdown
# Ingestion Spec
| Pipeline | Source | Mode | Schedule | Destination | Watermark | Owner |
## Retry Policy
## Backfill Plan
## Alerts
```
