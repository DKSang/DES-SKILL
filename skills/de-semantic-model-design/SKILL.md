---
name: de-semantic-model-design
description: Use when defining certified metrics, KPI hierarchies, dimensions, relationships, filters, and business glossary in a semantic or metrics layer before BI or AI consumers.
---

# de-semantic-model-design

## When To Use

Use after Gold layer design and before serving layer or BI consumer configuration. Use when multiple consumers (dashboards, APIs, AI agents) must share a single certified metric definition.

## Purpose

Define a semantic model that acts as a single source of truth for certified metrics and business dimensions — ensuring every consumer sees the same numbers with the same formula, grain, and filters.

## Inputs Required

- Gold table specifications (`11-gold-layer-design.md`).
- KPI catalog with certified formulas (`03-requirements-and-kpis.md`).
- Data product consumer requirements (`04-data-product-definition.md`).
- Business glossary from domain modeling.

## Decision Matrix — Semantic Layer Tool Selection

| Scenario | Recommended Tool | When to Override |
| :--- | :--- | :--- |
| Microsoft Fabric / Power BI ecosystem | **Fabric Semantic Model (Power BI Dataset)** | — |
| dbt Cloud or dbt Core users | **dbt Metrics + MetricFlow** | Use Cube if multiple BI tools need the same metrics |
| Multi-BI tool environment (Power BI + Tableau + Superset) | **Cube.dev** | dbt Metrics if team is already dbt-native |
| Standalone self-serve analytics | **Apache Superset Datasets** | Cube for cross-tool consistency |
| AI agent grounding / LLM context | **Structured context layer** (JSON/YAML metric definitions) | — |

**Default**: If the team uses dbt, start with **dbt Metrics + MetricFlow**. Avoid building metric logic in each BI tool separately — this creates divergent definitions.

## Decision Matrix — Metric Type Classification

| Metric Type | Definition | Example | Aggregation |
| :--- | :--- | :--- | :--- |
| **Simple** | Single aggregation over one measure | Total Revenue = SUM(amount) | SUM, COUNT, AVG, MIN, MAX |
| **Ratio** | Division of two simple metrics | Conversion Rate = Orders / Sessions | Non-additive — compute separately |
| **Derived** | Formula combining multiple metrics | Gross Margin = (Revenue - COGS) / Revenue | Non-additive — compute in semantic layer |
| **Cumulative** | Running aggregation over time | YTD Revenue | Window function |
| **Period-over-Period** | Comparison between two time periods | MoM Revenue Growth % | Requires date dimension hierarchy |

**Rule**: Ratio and Derived metrics must NEVER be materialized in Gold tables — they must live in the semantic layer to remain accurate when consumers apply filters.

## Step-By-Step Process

1. List all certified metrics from the KPI catalog; classify each using the Metric Type matrix.
2. Define Simple metrics first (SUM/COUNT/AVG on Gold measures).
3. Derive Ratio and Derived metrics in the semantic layer — not in Gold SQL.
4. Define dimensions available for slicing: date hierarchy, geography, product category, etc.
5. Define relationships between semantic entities (metrics, dimensions, filters).
6. Choose semantic layer tool using the Decision Matrix.
7. Define row-level security (RLS) rules at the semantic layer for multi-tenant access.
8. Document business glossary entries linked to each metric.

## Output File

Write the final artifact to:

`.agents/des-skill/output/16-semantic-model-design.md`

Use the matching template from:

`.agents/des-skill/templates/16-semantic-model-design-template.md`

After writing the file, summarize the file path and recommend the next skill.

## Required Outputs

- Certified metric catalog with type classification and formula.
- Dimension catalog with hierarchy definitions.
- Semantic layer tool selection with rationale.
- RLS rules for multi-tenant or regional access.
- Metric-to-Gold-table lineage map.

## Quality Checklist

- [ ] Every metric has a single certified definition — no duplicate metric definitions across BI tools.
- [ ] Ratio and Derived metrics are defined in the semantic layer, not in Gold SQL.
- [ ] Date dimension has all required hierarchy levels (day → week → month → quarter → year).
- [ ] RLS rules are tested with role-specific test accounts.
- [ ] Every metric links back to its Gold source table via lineage documentation.
- [ ] Business glossary entries link to corresponding metric definitions.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Defining ratio metrics in Gold SQL (e.g., `conversion_rate` column) | Applying filters at query time changes the denominator; ratio becomes wrong |
| Building metric logic in each BI tool separately | Different BI tools produce different numbers; no single source of truth |
| Skipping the semantic layer for "simple" dashboards | Simple dashboards grow; retrofitting a semantic layer later is expensive |
| No RLS at the semantic layer | Regional or tenant data exposed to wrong consumers |
| Certified metrics without an owner | Definition drifts over time; no accountability when dashboards diverge |

## Undercurrent Coverage

| Undercurrent | Action Required at This Phase |
| :--- | :--- |
| Security | RLS policies enforce data access boundaries at the semantic layer |
| Data Management | Certified metric definitions registered in catalog with owner sign-off |
| DataOps | Semantic model schema tested in CI/CD (e.g., MetricFlow tests) |
| Data Architecture | Semantic layer is an architectural boundary — all BI consumers query it, not Gold directly |
| Orchestration | Semantic model refresh is triggered after Gold refresh completes |
| Software Engineering | Metric definitions are version-controlled in YAML/schema files; reviewed in PRs |

## Handoff To The Next Skill

Next use `de-serving-layer-design` to configure the final consumer-facing serving assets (dashboards, APIs, exports) that query the semantic model.
