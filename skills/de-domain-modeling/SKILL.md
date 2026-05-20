---
name: de-domain-modeling
description: Use when defining business entities, events, relationships, grains, glossary terms, and fact or dimension candidates before architecture or Gold modeling.
---

# de-domain-modeling

## When To Use

Use after data product and source assessment, before architecture and Gold design. Use when the domain is complex enough that tables should not be designed directly from source schemas.

## Purpose

Create a conceptual domain model using business language — independently of tools, vendors, and raw source layouts — that anchors all downstream modeling decisions.

## Conventions

- Bare paths (e.g. `steps/step-01-identify-entities.md`) resolve from the skill root.
- `{skill-root}` resolves to this skill's installed directory.
- `{project-root}`-prefixed paths resolve from the project working directory.

## WORKFLOW ARCHITECTURE

This uses **step-file architecture** for disciplined execution:

- **Sequential Enforcement**: Complete steps in order, no skipping.
- **Human-in-the-Loop**: HALT mandatory at grain declaration and M:M bridge confirmation.

### Critical Rules (NO EXCEPTIONS)

- 🛑 **NEVER** load multiple step files simultaneously.
- ⏸️ **ALWAYS** halt at menus and wait for user input.
- 🚫 **NEVER** proceed without confirmed grain — grain ambiguity causes incorrect Gold tables.

## On Activation

Run: `python3 {project-root}/_des/scripts/resolve_customization.py --skill {skill-root} --key workflow`

If script fails, read in order: `{skill-root}/customize.toml` → team override → user override.

Load config from `{project-root}/_des/des/config.yaml`. Greet `user_name`. Activation complete.

## Next Step

Read fully and follow: `./steps/step-01-identify-entities.md`

## Inputs Required

- Business question catalog (`02-business-questions.md`).
- Data product definitions (`04-data-product-definition.md`).
- Source inventory (`05-data-source-assessment.md`).
- KPI catalog (`03-requirements-and-kpis.md`).
- Existing glossary or domain documentation if available.

## Decision Matrix — Entity vs. Event Classification

| Object Type | Definition | Gold Modeling Target | Example |
| :--- | :--- | :--- | :--- |
| **Entity** | A thing that exists in the business world | Dimension table | Customer, Product, Store, Employee |
| **Event** | Something that happened at a point in time | Fact table (transaction grain) | Order placed, Payment received, Login, Sensor reading |
| **Snapshot** | State of an entity at a periodic point in time | Periodic snapshot fact | Daily inventory level, Monthly account balance |
| **Accumulated Snapshot** | Lifecycle milestones of a process | Accumulating snapshot fact | Order lifecycle: placed → picked → shipped → delivered |

## Decision Matrix — Grain Selection

| Rule | Guidance |
| :--- | :--- |
| Declare grain before designing columns | "One row per ___" must be written before any column is listed |
| Grain drives the primary key | Primary key = all columns that uniquely identify one row at that grain |
| Grain must be approved by business consumer | The BI analyst or product owner must confirm the grain matches their query patterns |
| Finer grain is safer than coarser | Pre-aggregating at domain model stage restricts future analysis; aggregate in Gold instead |

## Step-By-Step Process

Refer to the individual step files in the `steps/` folder:
1. `steps/step-01-identify-entities.md` — Xác định entity/event, khai báo grain (HALT để xác nhận).
2. `steps/step-02-model-relationships.md` — Xây dựng quan hệ, xử lý M:M, xác định SCD (HALT bắt buộc tại M:M).
3. `steps/step-03-draft-and-handoff.md` — Soạn thảo domain model, glossary, kiểm tra chất lượng, bàn giao.

## Output File

The output_file path is configured in customize.toml. Default:

Write the final artifact to:

`{project-root}/_des-output/planning-artifacts/06-domain-modeling.md`

Use the matching template from:

`{skill-root}/../../templates/06-domain-modeling-template.md`

After writing the file, summarize the file path and recommend the next skill.

## Required Outputs

- Entity catalog (entity, key attributes, source candidates).
- Event catalog (event, grain, measures, related entities).
- Relationship map with cardinality.
- Slowly changing attribute list per entity (for SCD type pre-decision in Silver).
- Business glossary resolving all synonyms.
- Fact and dimension candidate list mapped to business questions.

## Quality Checklist

- [ ] Model uses business language — no source table names (e.g., "Customer", not "tbl_cust_master").
- [ ] Every event has a declared grain ("one row per ___").
- [ ] Every grain has been confirmed by the business consumer or BI analyst.
- [ ] All many-to-many relationships have a named bridge entity.
- [ ] Every ambiguous term in the glossary has a single canonical definition.
- [ ] Domain concepts trace back to at least one business question or KPI.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Copying source schemas as the domain model | Source schema reflects implementation, not business concepts; causes technical debt in Gold |
| Designing fact table columns before declaring grain | Grain ambiguity propagates to Gold; query results are incorrect |
| Ignoring many-to-many relationships | Undocumented M:M joins cause fan-out (row multiplication) bugs in Gold fact tables |
| Skipping the glossary because terms seem obvious | "Revenue" means different things to Finance, Sales, and Marketing — always document |
| Pre-aggregating in the domain model | Aggregated grains at this stage restrict future analytical flexibility |

## Undercurrent Coverage

| Undercurrent | Action Required at This Phase |
| :--- | :--- |
| Security | Flag entities containing PII attributes — these require masking in Silver design |
| Data Management | Business glossary created here is the foundation of the data catalog and metric certification |
| DataOps | Entity/event boundaries define the test scope for schema and business rule tests |
| Data Architecture | Event grain decisions constrain Gold modeling pattern selection (Kimball vs. OBT) |
| Orchestration | Entity lifecycle events constrain scheduling — slowly changing entities require scheduled snapshot jobs |
| Software Engineering | Bridge tables for M:M relationships require careful MERGE key design in Silver |

## Handoff To The Next Skill

Next use `de-architecture-design` to choose a platform architecture that supports the domain model, source realities, and data product SLAs.
