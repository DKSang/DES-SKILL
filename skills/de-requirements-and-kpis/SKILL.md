---
name: de-requirements-and-kpis
description: Use when business discovery exists and a data engineering project needs stakeholders, goals, KPIs, reporting needs, freshness requirements, or SLA requirements defined.
---

# de-requirements-and-kpis

## When To Use

Use after business discovery and before source assessment or architecture. Use when requirements are still expressed as broad wishes rather than measurable, agreed data outcomes.

## Purpose

Translate business goals into measurable KPIs with certified formulas, reporting requirements with explicit grains, and SLA commitments that the data platform must meet.

## Inputs Required

- Business discovery brief (`01-business-discovery.md`).
- Business question catalog (`02-business-questions.md`).
- Known reports, dashboards, APIs, or analytics outputs.
- Business deadlines and operational expectations.

## Decision Matrix — KPI Quality Gate

A KPI is ready to build only when it passes all 5 criteria:

| Criterion | Question to Answer | Failure Example |
| :--- | :--- | :--- |
| **Formula** | Is the exact calculation documented? | "Revenue" with no agreed formula |
| **Grain** | What is the lowest level of detail? | "Sales by customer" — daily? monthly? per transaction? |
| **Filter** | What data is included/excluded? | "Active users" — does this include trial users? |
| **Owner** | Who approves this metric's definition? | Metric defined by data team, not the business |
| **Conflict-free** | Is there only one definition used across all teams? | Finance uses "gross revenue", marketing uses "net revenue" |

## Decision Matrix — SLA Classification

| Requirement Type | How to Classify | Engineering Implication |
| :--- | :--- | :--- |
| Business cannot operate without this | **Hard SLA** — P1 | Pipeline failure = incident; on-call alert required |
| Business prefers but can tolerate delay | **Soft SLA** — P2 | WARN alert; no on-call page |
| Nice to have, no downstream impact | **Preference** — P3 | Document only; no alert configured |

**Never negotiate away Hard SLAs** — they must drive architecture decisions, not the other way around.

## Step-By-Step Process

1. Convert each business goal / question into one or more measurable KPIs.
2. Run every KPI through the KPI Quality Gate (5 criteria above).
3. Resolve all metric definition conflicts — get sign-off from the business owner.
4. Separate Hard SLAs from Soft SLAs and Preferences using the Decision Matrix.
5. Define freshness, availability, latency, and historical retention per data product.
6. Identify metric certification requirements (who approves a metric before it's published).
7. Document unresolved definitions as blocking open questions with an owner and due date.

## Output File

Write the final artifact to:

`.agents/des-skill/output/03-requirements-and-kpis.md`

Use the matching template from:

`.agents/des-skill/templates/03-requirements-and-kpis-template.md`

After writing the file, summarize the file path and recommend the next skill.

## Required Outputs

- KPI catalog (formula, grain, filter, owner, conflict-free status).
- Reporting requirements with audience and priority.
- SLA classification table (Hard / Soft / Preference) per data product.
- Open metric definition conflicts with owner and due date.

## Quality Checklist

- [ ] Every KPI has a formula, grain, filter, and named owner.
- [ ] All metric definition conflicts are resolved before architecture begins.
- [ ] Hard SLAs are clearly distinguished from soft SLAs and preferences.
- [ ] Freshness requirements are confirmed as achievable from assessed source systems.
- [ ] Historical backfill depth is specified (e.g., "2 years of order history").
- [ ] No unresolved metric conflict remains before moving to architecture.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Defining KPIs without a formula | Developers implement different interpretations; reports diverge |
| Treating all SLAs as equally critical | Over-engineering every pipeline for P1 response; or missing real P1 breaches |
| Ignoring historical backfill requirements | Backfill scope discovered late adds months to delivery timeline |
| Treating metric conflicts as "technical to sort out later" | Conflicting business definitions cannot be resolved by engineers alone; business must decide |
| Accepting "refresh daily" without a time | "Daily" could mean 00:00, 06:00, or 23:59 — specify the exact time |

## Undercurrent Coverage

| Undercurrent | Action Required at This Phase |
| :--- | :--- |
| Security | Identify which KPIs require access to PII or financial data — flag for governance design |
| Data Management | Certified metric formulas and owners defined here become the master KPI catalog |
| DataOps | Hard SLAs drive automated alerting requirements documented later in orchestration |
| Data Architecture | Hard SLAs and historical retention depth directly constrain architecture decisions |
| Orchestration | Freshness SLA times (e.g., "by 7AM") define the pipeline schedule deadline |
| Software Engineering | Metric formula complexity may require code review and unit testing in CI/CD |

## Handoff To The Next Skill

Next use `de-data-product-definition` to define the dashboards, APIs, semantic models, AI agents, or Gold datasets as owned data products with explicit contracts.
