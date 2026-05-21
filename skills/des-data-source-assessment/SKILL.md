---
name: des-data-source-assessment
description: Use when identifying, profiling, comparing, or approving source systems before ingestion, architecture, modeling, or transformation design.
---

# des-data-source-assessment

## Purpose

Use this skill to create the Data Source Inventory and Assessment for any data engineering project.

This skill identifies, evaluates, and classifies candidate source systems needed to support the approved data product, business questions, requirements, and KPIs.

The goal is to understand source ownership, access method, data creation pattern, expected volume, freshness, reliability, quality, schema stability, security, privacy, compliance, cost, and operational risks before ingestion design begins.

## When To Use

Use this skill when:

- Phase 4 Data Product Specification exists;
- a data product requires one or more source systems;
- the user asks to ingest data, connect to APIs, copy databases, read files, process events, use SaaS data, or collect logs;
- source of truth is unclear;
- source access, ownership, quality, freshness, or reliability is uncertain;
- upstream contracts, SLAs, or communication expectations are missing;
- the workflow router selects Phase 5.

Do not use this skill to design ingestion pipelines, storage layout, Bronze tables, Silver transformations, Gold schemas, data contracts in full, orchestration, or implementation code.

## Required Inputs

The agent should look for:

- `.agents/des-skill/output/01-business-discovery-brief.md`;
- `.agents/des-skill/output/02-business-question-catalog.md`;
- `.agents/des-skill/output/03-requirements-and-kpi-catalog.md`;
- `.agents/des-skill/output/04-data-product-specification.md`;
- workflow status file, if present;
- known candidate sources;
- known source owners;
- known access constraints;
- known source freshness, quality, schema, privacy, and cost constraints.

If the Data Product Specification is missing or too weak, stop and ask whether to route back to `des-data-product-definition`.

## Output File

Create or update the configured `output_file`:

```text
.agents/des-skill/output/05-data-source-inventory.md
```

The artifact must capture:

* source inventory summary;
* source-to-use-case mapping;
* source-to-requirement/KPI mapping;
* source type and generation pattern;
* source owner and contact;
* access method;
* source of truth decision;
* data format and schema;
* update frequency and freshness;
* expected volume and growth;
* history and retention;
* quality profile and known issues;
* reliability and availability;
* schema change behavior;
* security and privacy classification;
* compliance and regulatory concerns;
* cost and usage limits;
* operational dependencies;
* upstream contract/SLA expectations;
* ingestion feasibility rating;
* risks;
* assumptions;
* open questions;
* next skill recommendation.

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, `status_file`, and required upstream artifacts.
4. Load only `steps/step-01-context-and-readiness.md`.
5. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
6. Stop at every `HALT` point and wait for user input.
7. Do not invent source ownership, source of truth, access permission, freshness, schema stability, privacy classification, or reliability guarantees.
8. Do not design ingestion pipelines, Bronze tables, transformations, contracts, orchestration, or code.
9. Before marking the artifact as Done, run the configured checklist and update workflow status.

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm upstream product, requirement, and question context.
2. Identify candidate source systems needed for the data product.
3. Classify each source by type, access pattern, owner, and data generation pattern.
4. Assess source quality, freshness, schema stability, reliability, security, privacy, cost, and operational risk.
5. Decide source-of-truth candidates and unresolved conflicts.
6. Identify upstream contract, SLA, and communication expectations.
7. Rate ingestion feasibility.
8. Ask HALT questions for missing ownership, source of truth, access, security, and reliability decisions.
9. Draft the Data Source Inventory.
10. Run the checklist, update workflow status, and recommend the next skill.

Do not execute this overview directly. Follow the step files.

## Guardrails

The agent must not:

* treat available data as automatically suitable data;
* assume a source is authoritative without approval;
* assume API/database/file access exists;
* ignore source ownership or contact path;
* ignore schema change and quality risk;
* ignore security, privacy, compliance, or credential handling;
* design ingestion implementation in this phase;
* mark a source as Ready if ownership, access, quality, and reliability are unknown;
* mark the artifact Done if P1 data product outputs have no plausible source mapping.

## HALT Policy

This skill must stop when a source assessment decision cannot be safely inferred.

Stop especially when:

* data product outputs cannot be mapped to candidate sources;
* source owner is unknown;
* source of truth is unclear;
* access method or permission is unknown;
* source contains sensitive or regulated data;
* upstream freshness or reliability is unclear;
* source quality is unknown for a P1 output;
* schema change behavior is unknown;
* source cost, limits, or licensing may block usage.

Detailed HALT checkpoints are defined in `steps/`.

## Conventions

- Bare paths such as `steps/step-01-context-and-readiness.md` resolve from the skill root.
- `{skill-root}` resolves to this skill's installed directory.
- `{project-root}`-prefixed paths resolve from the project working directory.
- Document output language follows project config.

## WORKFLOW ARCHITECTURE

This uses step-file architecture for disciplined execution:

- read only the current step file;
- execute steps in order;
- stop at every HALT checkpoint;
- keep unresolved decisions as open questions, not assumptions;
- run the configured checklist before status advances.

## Quality Checklist

- [ ] Each candidate source has a source ID and description.
- [ ] Each P1 product output maps to at least one candidate source or is marked blocked.
- [ ] Source type, generation pattern, owner, access method, and permission status are documented.
- [ ] Freshness, schema stability, volume, quality, reliability, security, and privacy are documented.
- [ ] Source of truth decisions are resolved or documented.
- [ ] The artifact does not design ingestion pipelines, Bronze tables, Silver transformations, or Gold schemas.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Treating available data as automatically suitable data | Downstream quality and reliability expectations are ignored |
| Assuming API/database/file access exists | Pipeline design proceeds without legal or technical connectivity |
| Querying production databases directly | Read load impacts source system operations |
| Marking Done with unknown source ownership | Schema changes break pipelines with no upstream accountability |

## Handoff To The Next Skill

Recommend `des-domain-modeling` only after the Data Source Inventory is complete or explicitly marked Draft with open questions and accepted risk.
