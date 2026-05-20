---
name: de-data-product-definition
description: Use when defining dashboards, APIs, semantic models, Gold tables, exports, feature sets, or AI agent datasets as owned data products.
---

# de-data-product-definition

## When To Use

Use after business questions and KPI requirements. Use before source assessment or architecture when the project needs clear data product boundaries, consumers, owners, SLAs, and success criteria.

## Purpose

Define each deliverable as a data product with consumers, inputs, outputs, access policy, quality expectations, and measurable value — not just a table or pipeline.

## Conventions

- Bare paths (e.g. `steps/step-01-classify-products.md`) resolve from the skill root.
- `{skill-root}` resolves to this skill's installed directory.
- `{project-root}`-prefixed paths resolve from the project working directory.

## WORKFLOW ARCHITECTURE

This uses **step-file architecture** for disciplined execution:

- **Sequential Enforcement**: Complete steps in order, no skipping.
- **Human-in-the-Loop**: HALT at phase boundary decisions.

### Critical Rules (NO EXCEPTIONS)

- 🛑 **NEVER** load multiple step files simultaneously.
- ⏸️ **ALWAYS** halt at menus and wait for user input.

## On Activation

Run: `python3 {project-root}/_des/scripts/resolve_customization.py --skill {skill-root} --key workflow`

If script fails, read in order: `{skill-root}/customize.toml` → team override → user override.

Load config from `{project-root}/_des/des/config.yaml`. Greet `user_name`. Activation complete.

## Next Step

Read fully and follow: `./steps/step-01-classify-products.md`

## Inputs Required

- Business question catalog (`02-business-questions.md`).
- KPI and reporting requirements (`03-requirements-and-kpis.md`).
- Stakeholders and decision workflows.
- Known access, security, or freshness constraints.

## Decision Matrix — Data Product Type Classification

| Output Type | When to Choose | Serving Interface |
| :--- | :--- | :--- |
| **Dashboard / Report** | BI consumers need self-serve exploration | Power BI, Looker, Superset, Tableau |
| **Gold Table / Data Mart** | Downstream teams build their own queries | SQL endpoint, data warehouse access |
| **REST / GraphQL API** | Application integration, real-time lookups | REST endpoint with SLA commitment |
| **Semantic / Metrics Layer** | Single certified metric definition for all consumers | dbt Metrics, Cube.dev, Microsoft Fabric Semantic Model |
| **ML Feature Table** | ML model training or inference | Feature Store (Feast, Databricks, SageMaker) |
| **AI Agent Tool / Dataset** | LLM agent grounding or RAG system | Vector store or structured context API |
| **Reverse ETL Export** | Sync data back to operational systems | Hightouch, Census, platform export job |

**Default rule**: Prefer certified Gold Tables + Semantic Layer before building custom APIs — avoid proliferating custom endpoints for data that could be served from a shared certified layer.

## Step-By-Step Process

Refer to the individual step files in the `steps/` folder:
1. `steps/step-01-classify-products.md` — Liệt kê và phân loại data product theo Decision Matrix, tách Phase 1/2+.
2. `steps/step-02-define-products.md` — Định nghĩa spec chi tiết: consumer, owner, SLA, access policy, tiêu chí thành công.
3. `steps/step-03-draft-and-handoff.md` — Soạn thảo artifact, kiểm tra chất lượng, ghi artifact, bàn giao.

## Output File

The output_file path is configured in customize.toml. Default:

Write the final artifact to:

`{project-root}/_des-output/planning-artifacts/04-data-product-definition.md`

Use the matching template from:

`{skill-root}/../../templates/04-data-product-definition-template.md`

After writing the file, summarize the file path and recommend the next skill.

## Required Outputs

- Data product specification per product (type, consumer, SLA, owner, access policy).
- Consumer and decision traceability map.
- Prioritized product roadmap (Phase 1 / Phase 2+).
- Success criteria and adoption signals per product.

## Quality Checklist

- [ ] Every data product has a named consumer, owner, and measurable success criterion.
- [ ] Every product supports at least one documented business question or KPI.
- [ ] Inputs and outputs are concrete — no "TBD" columns or "data from the warehouse."
- [ ] SLA includes both refresh time and availability window (e.g., "daily by 7AM, 99.5% uptime").
- [ ] Access policy specifies roles — not just "internal only."
- [ ] Phase 2+ products are documented separately — not added to Phase 1 scope.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Treating every Silver table as a data product | Internal staging tables are implementation details, not managed products |
| Defining products without consumers | No consumer = no success criteria = no priority = never built correctly |
| Mixing staging and certified products in the same spec | Consumers cannot tell which datasets are trusted vs. work-in-progress |
| Ignoring ownership and support expectations | Products without owners degrade silently; incidents go unresolved |
| Building a custom API for data a Semantic Layer could serve | Creates fragmented, duplicate serving layer; doubles maintenance burden |

## Undercurrent Coverage

| Undercurrent | Action Required at This Phase |
| :--- | :--- |
| Security | PII classification and access policy defined per product before architecture |
| Data Management | Product catalog entries drafted here; formalized in Phase 19 governance |
| DataOps | Product SLA drives CI/CD test scope — products with Hard SLAs need automated tests |
| Data Architecture | Product type determines serving architecture (dashboard → BI; API → serving layer; feature → store) |
| Orchestration | SLA time windows constrain pipeline schedule design |
| Software Engineering | API products require versioning strategy — define v1 contract boundaries now |

## Handoff To The Next Skill

Next use `de-data-source-assessment` to evaluate whether available sources can support the prioritized data products.
