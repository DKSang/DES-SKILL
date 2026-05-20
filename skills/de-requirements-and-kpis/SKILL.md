---
name: de-requirements-and-kpis
description: Use when business discovery exists and a data engineering project needs stakeholders, goals, KPIs, reporting needs, freshness requirements, or SLA requirements defined.
---

# de-requirements-and-kpis

## When To Use

Use after business discovery and before source assessment or architecture. Use when requirements are still expressed as broad wishes rather than measurable data outcomes.

## Purpose

Translate business goals into measurable KPIs, reporting needs, data freshness targets, and service-level expectations.

## Inputs Required

- Business discovery brief.
- Stakeholders and decisions.
- Known reports, dashboards, APIs, or analytics outputs.
- Business deadlines and operational expectations.

## Step-By-Step Process

1. Convert each business goal into one or more measurable KPIs.
2. Define each KPI formula, grain, filters, owner, and target.
3. Identify reporting and analytical questions.
4. Define freshness, availability, latency, and historical retention requirements.
5. Separate hard SLAs from preferences.
6. Identify metric certification needs and expected consumers.
7. Document unresolved definitions that need business approval.

## Required Outputs

- KPI catalog.
- Reporting requirements matrix.
- Freshness and SLA table.
- Metric definition backlog.

## Quality Checklist

- Every KPI has an owner and definition.
- Every report has an audience and decision.
- Freshness targets are realistic for source systems.
- SLA language distinguishes "must" from "nice to have".
- Metrics include grain and filter assumptions.

## Common Mistakes To Avoid

- Defining KPIs without formulas.
- Mixing operational SLAs with dashboard refresh preferences.
- Ignoring historical backfill requirements.
- Treating conflicting metric definitions as a technical problem only.

## Handoff To The Next Skill

Next use `de-data-product-definition` to define the dashboards, APIs, semantic models, AI agents, or Gold datasets as owned data products.

## Example Output Format

```markdown
# Requirements And KPI Catalog
| KPI | Definition | Grain | Owner | Target | Refresh SLA |
| Report | Audience | Questions | Refresh | Priority |
| Dataset | Freshness | Availability | Latency | Owner |
```
