---
name: de-data-source-assessment
description: Use when identifying, profiling, comparing, or approving source systems before ingestion, architecture, modeling, or transformation design.
---

# de-data-source-assessment

## When To Use

Use after KPIs and requirements are known. Use before ingestion or architecture decisions when source reliability, ownership, schema, access, volume, or quality are uncertain.

## Purpose

Create a source inventory and readiness assessment that shows which systems can support the data product and where risks remain.

## Inputs Required

- KPI catalog and reporting needs.
- Candidate source systems.
- Source owners or access contacts.
- Known data samples, schemas, files, APIs, databases, streams, or exports.

## Step-By-Step Process

1. List candidate sources and map each to business requirements.
2. Capture owner, access method, authentication, format, and license or policy constraints.
3. Profile grain, volume, freshness, history, schema stability, and completeness.
4. Identify PII, sensitive data, and regulatory constraints.
5. Rate reliability, coverage, completeness, cost, and operational risk.
6. Decide whether to accept, reject, defer, or replace each source.
7. Document source gaps and mitigation options.

## Required Outputs

- Data source inventory.
- Source-to-requirement mapping.
- Source readiness score or decision.
- Access and risk notes.

## Quality Checklist

- Each source has an owner and access path.
- Grain and freshness are known.
- Data samples or schemas are inspected when available.
- Licensing and privacy constraints are recorded.
- Accepted sources map to at least one requirement.

## Common Mistakes To Avoid

- Assuming API documentation reflects real delivered data.
- Ignoring rate limits, exports delays, and schema drift.
- Accepting sources without ownership.
- Treating missing history as a later issue.

## Handoff To The Next Skill

Next use `de-domain-modeling` to define business entities, events, relationships, glossary terms, and fact or dimension candidates before architecture and Gold modeling.

## Example Output Format

```markdown
# Data Source Inventory
| Source | Owner | Access | Format | Grain | Freshness | Risk | Decision |
## Source Gaps
## Mitigation Plan
```
