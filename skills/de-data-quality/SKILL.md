---
name: de-data-quality
description: Use when defining or implementing data quality checks, validation gates, anomaly detection, freshness tests, schema tests, and failure actions.
---

# de-data-quality

## When To Use

Use before productionizing pipelines and after core datasets or transformations are defined. Use whenever trust, correctness, freshness, or data incident handling is unclear.

## Purpose

Create a data quality rule catalog and validation strategy that protects Bronze, Silver, Gold, contracts, and serving outputs.

## Inputs Required

- Dataset specifications.
- Data contracts.
- Transformation design.
- SLA and freshness requirements.
- Known quality risks from source assessment.

## Step-By-Step Process

1. Define quality dimensions: schema, completeness, uniqueness, validity, referential integrity, freshness, volume, distribution, and reconciliation.
2. Assign checks to Bronze, Silver, Gold, and serving layers.
3. Define severity: warn, quarantine, block, page owner, or rollback.
4. Choose implementation tools: SQL tests, dbt tests, Great Expectations, Soda, Python, Spark, platform-native checks.
5. Define alert owners and failure response.
6. Define quality result storage and reporting.
7. Add regression tests for critical metrics.

## Output File

Write the final artifact to:

`.agents/des-skill/output/14-data-quality.md`

Use the matching template from:

`.agents/des-skill/templates/data_quality_rule_template.md`

After writing the file, summarize the file path and recommend the next skill.

## Required Outputs

- Data quality rule catalog.
- Layer-specific quality gates.
- Failure action policy.
- Quality dashboard or reporting plan.

## Quality Checklist

- Critical datasets have freshness checks.
- Critical keys have uniqueness and not-null checks.
- Facts reference valid dimensions.
- Rules have severity and owner.
- Quality failures are observable.

## Common Mistakes To Avoid

- Checking only schema.
- Creating warnings nobody reads.
- Blocking pipelines on low-value checks.
- Forgetting metric reconciliation.

## Handoff To The Next Skill

Next use `de-orchestration-and-observability` to schedule, monitor, alert, and operate pipelines.

## Example Output Format

```markdown
# Data Quality Catalog
| Rule ID | Dataset | Rule | Severity | Owner | Action |
## Quality Gates
## Incident Handling
```
