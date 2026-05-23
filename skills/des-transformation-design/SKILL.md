---
name: des-transformation-design
description: Use when designing transformation logic, dependency flow, incremental behavior, business rules, conformance rules, and metric logic across Bronze, Silver, Gold, and serving-ready outputs.
---

# des-transformation-design

## Purpose

Use this skill to create the Transformation Specification for any data engineering project.

This skill defines transformation logic, dependency flow, incremental behavior, business rules, conformance rules, aggregation rules, metric logic, error handling, lineage, validation expectations, and implementation boundaries for moving data across Bronze, Silver, Gold, and serving-ready outputs.

The goal is to design transformation behavior clearly before writing SQL, Python, dbt models, notebooks, stored procedures, or pipeline implementation code.

## When To Use

Use this skill when:

- Phase 12 Data Contract Specification exists;
- Bronze, Silver, and Gold layer designs exist;
- transformation logic needs to be made explicit before implementation;
- business rules, joins, filters, deduplication, conformance, aggregation, SCD, or metric logic need approval;
- incremental transformation, backfill, replay, rollback, or dependency order is unclear;
- the user asks to write SQL, dbt models, notebooks, Spark jobs, stored procedures, or transformation code;
- the workflow router selects Phase 13.

Do not use this skill to implement transformation code, run data quality tests, create orchestration workflows, build dashboards, implement APIs, or create CI/CD workflows.

## Required Inputs

The agent should look for:

- `_des-output/planning-artifacts/01-business-discovery-brief.md`;
- `_des-output/planning-artifacts/02-business-question-catalog.md`;
- `_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md`;
- `_des-output/planning-artifacts/04-data-product-specification.md`;
- `_des-output/planning-artifacts/05-data-source-inventory.md`;
- `_des-output/planning-artifacts/06-conceptual-domain-model.md`;
- `_des-output/planning-artifacts/07-architecture-decision-record.md`;
- `_des-output/planning-artifacts/08-ingestion-specification.md`;
- `_des-output/planning-artifacts/09-bronze-layer-specification.md`;
- `_des-output/planning-artifacts/10-silver-layer-specification.md`;
- `_des-output/planning-artifacts/11-gold-layer-specification.md`;
- `_des-output/planning-artifacts/12-data-contract-specification.md`;
- workflow status file, if present;
- Bronze/Silver/Gold dataset inventory;
- data contracts;
- metric and KPI definitions;
- grain and identity rules;
- source-of-truth decisions;
- quality expectations;
- freshness/SLA expectations;
- access/security constraints;
- architecture compute/tool constraints.

If the Data Contract Specification is missing or too weak, stop and ask whether to route back to `des-data-contracts`.

## Output File

Create or update the configured `output_file`:

```text
_des-output/planning-artifacts/13-transformation-specification.md
```

The artifact must capture:

* transformation summary;
* transformation scope and non-scope;
* transformation design principles;
* transformation inventory;
* layer-to-layer transformation mapping;
* dependency graph;
* input and output dataset mapping;
* transformation grain;
* business rules;
* cleaning and conformance rules;
* join and relationship rules;
* deduplication and survivorship rules;
* SCD and history handling;
* aggregation and metric calculation rules;
* incremental processing strategy;
* backfill and replay strategy;
* late-arriving and corrected data handling;
* error handling and quarantine behavior;
* validation and test expectations;
* contract alignment;
* lineage and metadata expectations;
* performance and cost considerations;
* security and privacy handling;
* implementation boundary;
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
7. Do not invent transformation rules, joins, metric formulas, incremental keys, SCD behavior, or error handling.
8. Do not write SQL, Python, dbt, Spark, notebook, stored procedure, orchestration, or CD code.
9. Before marking the artifact as Done, run the configured checklist and update workflow status.

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm upstream contracts, Gold, Silver, Bronze, architecture, and KPI context.
2. Identify transformation scope across Bronze → Silver and Silver → Gold.
3. Define transformation inventory and dependencies.
4. Define business rules, cleaning rules, conformance rules, joins, deduplication, SCD, aggregation, and metric logic.
5. Define incremental, backfill, replay, late data, and correction behavior.
6. Define validation, test, lineage, security, and performance expectations.
7. Ask HALT questions for unresolved transformation decisions.
8. Draft the Transformation Specification.
9. Run the checklist, update workflow status, and recommend the next skill.

Do not execute this overview directly. Follow the step files.

## Guardrails

The agent must not:

* write implementation code in this phase;
* turn vague business logic into approved transformation logic without confirmation;
* define metric logic that conflicts with Phase 3 or Phase 11;
* join datasets without approved grain and relationship rules;
* deduplicate without approved rules;
* aggregate without approved grain;
* ignore contract expectations;
* ignore lineage and testability;
* ignore incremental and replay behavior;
* silently drop invalid records;
* hide performance, cost, or operational risks;
* mark transformation design Done if P1 outputs lack transformation mapping, dependencies, validation expectations, or contract alignment.

## HALT Policy

This skill must stop when a transformation decision cannot be safely inferred.

Stop especially when:

* upstream contract or layer specs are missing;
* input/output mapping is unclear;
* transformation grain is unclear;
* business rule is ambiguous;
* join rule is unclear;
* metric formula or aggregation rule conflicts with prior artifacts;
* deduplication or survivorship rule is unclear;
* SCD/history behavior is unclear;
* incremental key/checkpoint is unclear;
* late-arriving or corrected data behavior is unclear;
* error/quarantine behavior is unclear;
* validation/test expectation is missing;
* transformation conflicts with data contract.

## Quality Checklist

- [ ] Every output column has a documented source or derivation formula.
- [ ] Incremental logic is idempotent — running twice for the same date produces the same result.
- [ ] Business rules are named and testable (not embedded in anonymous CASE expressions).
- [ ] Backfill behavior is explicitly documented and tested in staging.
- [ ] Transformations respect all data contract schema and quality guarantees.
- [ ] Dependency graph orders all transformations correctly — no circular dependencies.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Encoding undocumented business logic in code | Logic without a name cannot be tested, reviewed, or explained to the business |
| Non-idempotent incremental logic | Re-runs create duplicate rows; backfills produce wrong historical aggregates |
| Using notebooks as production transformation logic | No CI/CD integration, no lineage, no unit tests, no parameterization |
| Ignoring deletes and late-arriving data | Silent data errors accumulate; downstream KPIs become unreliable |
| Complex CASE chains without named rules | Engineers cannot explain what the logic does; changes introduce regressions |

## Handoff To The Next Skill

Recommend `des-data-quality` only after the Transformation Specification is complete or explicitly marked Draft with open questions and accepted risks.
