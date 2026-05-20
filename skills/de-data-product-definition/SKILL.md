---
name: de-data-product-definition
description: Use when defining dashboards, APIs, semantic models, Gold tables, exports, feature sets, or AI agent datasets as owned data products.
---

# de-data-product-definition

## When To Use

Use after business questions and KPI requirements. Use before source assessment or architecture when the project needs clear data product boundaries, consumers, owners, SLAs, and success criteria.

## Purpose

Define each deliverable as a data product with consumers, inputs, outputs, access policy, quality expectations, and measurable value.

## Inputs Required

- Business question catalog.
- KPI and reporting requirements.
- Stakeholders and consumers.
- Known access, security, or freshness constraints.

## Step-By-Step Process

1. Identify candidate data products: dashboard, mart, API, semantic model, export, reverse ETL sync, feature set, or AI agent tool.
2. Name each data product clearly using domain language.
3. Define consumers, supported business questions, and decisions.
4. Define expected inputs, outputs, interface, and delivery channel.
5. Define owner, steward, SLA, quality expectations, and access policy.
6. Define success criteria and adoption signals.
7. Prioritize products for first delivery and future phases.

## Required Outputs

- Data product specification.
- Consumer and owner matrix.
- SLA and access policy per data product.
- Success criteria and priority ranking.

## Quality Checklist

- Every data product has a named consumer and owner.
- Every product supports one or more business questions.
- Inputs and outputs are concrete.
- SLA and access policy are defined.
- Success criteria are measurable.

## Common Mistakes To Avoid

- Treating every table as a data product.
- Defining products without consumers.
- Mixing internal staging datasets with certified products.
- Ignoring ownership and support expectations.

## Handoff To The Next Skill

Next use `de-data-source-assessment` to evaluate whether available sources can support the prioritized data products.

## Example Output Format

```markdown
# Data Product Spec
## Product: Customer Churn Risk API
| Field | Value |
| Consumers | Retention application, CRM team |
| Business Questions | BQ-004, BQ-007 |
| Inputs | Customer activity, billing, support tickets |
| Outputs | Customer ID, churn score, reason codes |
| SLA | Daily by 07:00 |
| Owner | Data Products Team |
| Access Policy | CRM service account, retention analysts |
| Success Criteria | 90% of weekly retention workflow uses API |
```
