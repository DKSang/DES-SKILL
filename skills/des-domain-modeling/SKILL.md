---
name: des-domain-modeling
description: Use when identifying the core business concepts, entities, events, relationships, grains, terminology, ownership, source alignment, and ambiguity risks before modeling tables.
---

# des-domain-modeling

## Purpose

Use this skill to create the Conceptual Domain Model for any data engineering project.

This skill identifies the core business concepts, entities, events, relationships, grains, terminology, ownership, source alignment, and ambiguity risks that should guide later architecture, ingestion, Silver, Gold, semantic, contract, quality, and serving design.

The goal is to model the domain before modeling tables.

## When To Use

Use this skill when:

- Phase 5 Data Source Inventory exists;
- the project has multiple sources describing overlapping business concepts;
- source schemas do not clearly represent business meaning;
- terms, entities, events, or grains are ambiguous;
- later Silver/Gold/semantic design needs a shared vocabulary;
- the workflow router selects Phase 6.

Do not use this skill to design physical schemas, database tables, Bronze/Silver/Gold layouts, star schemas, Data Vault models, semantic models, dashboards, APIs, transformations, orchestration, or code.

## Required Inputs

The agent should look for:

- `_des-output/planning-artifacts/01-business-discovery-brief.md`;
- `_des-output/planning-artifacts/02-business-question-catalog.md`;
- `_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md`;
- `_des-output/planning-artifacts/04-data-product-specification.md`;
- `_des-output/planning-artifacts/05-data-source-inventory.md`;
- workflow status file, if present;
- known source-of-truth decisions;
- source-to-product and source-to-requirement mappings;
- known business concepts, terms, entities, events, and metrics;
- known conflicts or ambiguous definitions.

If the Data Source Inventory is missing or too weak, stop and ask whether to route back to `des-data-source-assessment`.

## Output File

Create or update the configured `output_file`:

```text
_des-output/planning-artifacts/06-conceptual-domain-model.md
```

The artifact must capture:

* domain model summary;
* domain scope;
* business glossary;
* core entities;
* domain events;
* value objects and attributes;
* relationships;
* grains;
* identifiers and keys at conceptual level;
* source alignment;
* source-of-truth mapping;
* terminology conflicts;
* domain rules;
* lifecycle/state definitions;
* temporal concepts;
* ownership/stewardship;
* downstream use-case mapping;
* modeling assumptions;
* unresolved ambiguities;
* risks;
* open questions;
* next skill recommendation.

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, `status_file`, and required upstream artifacts.
4. Load only `steps/step-01-context-and-readiness.md`.
5. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
6. Stop at every `HALT` point and wait for user input.
7. Do not invent entity meaning, business terms, source-of-truth decisions, grain, lifecycle states, or domain rules.
8. Do not design physical schemas, tables, Medallion layers, semantic models, dashboards, APIs, transformations, or code.
9. Before marking the artifact as Done, run the configured checklist and update workflow status.

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm upstream source, product, requirement, and question context.
2. Extract candidate business concepts from business questions, requirements, product outputs, and source inventory.
3. Define core domain entities, events, value objects, relationships, and terminology.
4. Identify conceptual grains and identifiers.
5. Map domain concepts to candidate sources and source-of-truth decisions.
6. Capture domain rules, lifecycle states, and temporal concepts.
7. Ask HALT questions for ambiguous terms, grain, identity, source-of-truth, and relationship decisions.
8. Draft the Conceptual Domain Model.
9. Run the checklist, update workflow status, and recommend the next skill.

Do not execute this overview directly. Follow the step files.

## Guardrails

The agent must not:

* copy source schema as the domain model;
* design physical tables;
* assume source field names are correct business terminology;
* merge distinct business concepts without approval;
* split one business concept into multiple concepts without approval;
* assume primary keys from source systems are universal business identifiers;
* define Gold or Silver grain in this phase;
* choose dimensional modeling, Data Vault, normalized model, or wide table patterns in this phase;
* mark the artifact Done if core entity meaning, grain, or source-of-truth is unresolved for P1 outputs.

## HALT Policy

This skill must stop when a domain modeling decision cannot be safely inferred.

Stop especially when:

* source inventory is missing or incomplete;
* a core business term has multiple meanings;
* an entity identity is unclear;
* grain is unclear;
* multiple sources define the same concept differently;
* source-of-truth decision is unresolved;
* a relationship between concepts is ambiguous;
* event time versus processing time is unclear;
* lifecycle/state definitions are unclear;
* downstream P1 questions depend on unresolved domain concepts.

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

- [ ] Domain scope is defined or marked unresolved.
- [ ] Glossary terms are defined.
- [ ] P1 entities have business definitions, grain, identity rule, and source alignment.
- [ ] P1 events have subject, timing meaning, and mutability.
- [ ] Important relationships and conceptual grains are documented.
- [ ] Source-of-truth mappings and terminology conflicts are captured.
- [ ] The artifact does not copy source schema or design physical columns and tables.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Copying source schemas as the domain model | Source schema reflects implementation, not business concepts; causes technical debt in Gold |
| Designing table columns before declaring grain | Grain ambiguity propagates to Gold; query results are incorrect |
| Ignoring many-to-many relationships | Undocumented M:M joins cause fan-out (row multiplication) bugs in Gold fact tables |
| Skipping the glossary because terms seem obvious | "Revenue" means different things to Finance, Sales, and Marketing — always document |
| Pre-aggregating in the domain model | Aggregated grains at this stage restrict future analytical flexibility |

## Handoff To The Next Skill

Recommend `des-architecture-design` only after the Conceptual Domain Model is complete or explicitly marked Draft with open questions and accepted risk.
