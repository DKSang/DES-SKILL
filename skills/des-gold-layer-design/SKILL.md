---
name: des-gold-layer-design
description: Use when designing business-ready Gold tables, marts, facts, dimensions, metrics, and single source of truth datasets for analytics or serving.
---

# des-gold-layer-design

## When To Use

Use after Silver layer design and domain modeling are complete. Use before data contracts or transformation implementation when consumers need trusted, business-ready datasets.

## Purpose

Design Gold datasets that represent business processes as analytical models (facts, dimensions, or OBTs), with certified metrics and explicit grain — optimized for how consumers *query* the data, not how it was stored at source.

## HALT Policy

This skill must stop when a required decision cannot be safely inferred.

The agent must not continue if any of these are unresolved:

- required upstream artifacts are missing or inconsistent;
- business owner, metric owner, source owner, or release owner is unclear;
- business priority, consumer, or project intent is ambiguous;
- source of truth, access, quality, legal use, cost, or ownership is unknown;
- KPI formula, grain, freshness, SLA, threshold, or acceptance criteria is ambiguous;
- architecture, storage, compute, deployment, or engine trade-off needs approval;
- data contract owner, consumer impact, schema version, or breaking-change policy is missing;
- DQ severity, threshold, remediation, alerting, or escalation is unknown;
- security, access, retention, environment, secret, or release evidence is missing.

Use the detailed HALT checkpoints in `steps/`: readiness HALT in step 01, phase decision HALT in step 02, and validation HALT in the final step. HALT asks for a decision, not permission to continue.


## Inputs Required

- KPI catalog and consumer query patterns (`03-requirements-and-kpi-catalog.md`).
- Domain model and entity definitions (`06-conceptual-domain-model.md`).
- Silver table specifications (`10-silver-layer-design.md`).
- Business definitions and stakeholder-approved metric formulas.

## Decision Matrix — Analytical Modeling Pattern

| Scenario | Recommended Pattern | When to Override |
| :--- | :--- | :--- |
| BI analysts use self-serve dashboards with filters | **Kimball Dimensional** (Star Schema: Fact + Dims) | OBT if domain is simple and team is small |
| Enterprise data warehouse with normalized domain | **Inmon 3NF** | Kimball if BI performance is critical |
| Simple domain, small team, exploratory analytics | **One Big Table (OBT)** | Kimball when dataset > 10M rows; OBT joins become expensive |
| ML feature engineering | **Feature Table** (flat, denormalized) | Separate from BI Gold; maintain independently |
| Real-time operational analytics | **Streaming Aggregate Table** | Only if P99 latency SLA < 1 min |

**Default**: Use **Kimball Dimensional** for standard analytics use cases. Document the choice as an ADR.

## Grain Rules

| Rule | Guidance |
| :--- | :--- |
| One grain per fact table | Never mix daily and monthly grain in the same fact table |
| Grain approved by business consumer | Grain must be confirmed with the primary BI analyst or data consumer |
| Additive measures only in fact tables | Non-additive measures (ratios, averages) belong in the semantic/metrics layer, not in Gold |
| Surrogate keys on all dimensions | Use auto-increment integers — never natural keys from source systems |
| Orphan FK handling | Facts with no matching dimension key use sentinel key (`-1` = "Unknown") — never NULL FK |

## Step-By-Step Process

1. Select the analytical modeling pattern using the Decision Matrix.
2. Define all Gold tables: type (Fact / Dimension / Mart / OBT), grain, source Silver datasets.
3. For each Fact table: document grain, additive measures, and foreign key references.
4. For each Dimension: decide SCD type (1 = overwrite, 2 = track history); define surrogate key generation.
5. Define certified metric formulas — with owner sign-off for each metric.
6. Design orphan FK handling (sentinel key policy).
7. Map each Gold table to its consumer(s) and access SLA.

## Output File


The output_file path is configured in `customize.toml`. Default:

Write the final artifact to:

`{project-root}/_des-output/planning-artifacts/11-gold-layer-design.md`

Use the matching template from:

`{skill-root}/../../templates/11-gold-layer-design-template.md`

After writing the file, summarize the file path and recommend the next skill.

## Required Outputs

- Gold table inventory (type, grain, source, consumer, SLA).
- Fact table design (grain, additive measures, FK references, orphan handling).
- Dimension table design (surrogate key, SCD type, tracked attributes).
- Certified metric catalog (formula, grain, owner, filter conditions).
- Consumer SLA mapping.

## Quality Checklist

- [ ] Analytical modeling pattern (Kimball / Inmon / OBT) is chosen and documented in ADR.
- [ ] Every fact table has an explicitly declared grain — confirmed by business consumer.
- [ ] All fact table measures are **additive** (non-additive metrics in semantic layer only).
- [ ] All dimensions use **surrogate keys** — no natural/source keys in fact table FKs.
- [ ] Orphan FK handling uses sentinel key (`-1` → "Unknown") — never NULL FK.
- [ ] All certified metrics have an **owner** who has reviewed and approved the formula.
- [ ] Gold is not a mirror of Silver — it models business processes, not source tables.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Mirroring Silver tables instead of modeling business concepts | Silver is for source conformity; Gold must model business process, not source structure |
| Creating metrics without a named owner | Metrics drift; different reports show different numbers; no one is accountable |
| Mixing multiple grains in one fact table | Aggregations on mixed-grain tables produce incorrect totals |
| Optimizing Gold for one specific dashboard | Other consumers get a degraded experience; Gold should serve the widest set of use cases |
| Using natural keys as FKs in fact tables | Source system key changes break all historical fact rows |
| Putting calculated ratios or averages in fact tables | Non-additive: `SUM(average_order_value)` is meaningless; keep averages in semantic layer |

## Undercurrent Coverage

| Undercurrent | Action Required at This Phase |
| :--- | :--- |
| Security | Gold serves analysts directly; RLS and RBAC applied; no PII columns exposed |
| Data Management | Certified metric definitions registered in catalog with owner sign-off |
| DataOps | Gold refresh tested for correctness (row count + metric total vs Silver source) in staging |
| Data Architecture | Modeling pattern (Kimball / Inmon / OBT) is an architectural decision; logged in ADR |
| Orchestration | Silver-to-Gold quality gate defined; blocks Gold refresh if Silver gate fails |
| Software Engineering | Surrogate key generation and SCD logic are version-controlled; tested in dbt or equivalent |

## Handoff To The Next Skill

Next use `des-data-contracts` to formalize producer and consumer expectations for critical Gold datasets.
