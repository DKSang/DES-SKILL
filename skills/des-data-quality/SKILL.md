---
name: des-data-quality
description: Use when defining or designing data quality dimensions, rules, thresholds, severity, and gates across Bronze, Silver, Gold, contracts, transformations, and serving outputs.
---

# des-data-quality

## Purpose

Use this skill to create the Data Quality Specification for any data engineering project.

This skill defines data quality dimensions, rules, thresholds, severity, ownership, validation scope, quality gates, failure handling, evidence, and monitoring expectations across source, Bronze, Silver, Gold, contracts, transformations, and serving outputs.

The goal is to make quality expectations explicit before implementing tests, orchestration, monitoring, CI/CD gates, or release workflows.

## When To Use

Use this skill when:

- Phase 13 Transformation Specification exists;
- data contracts contain quality expectations;
- Bronze, Silver, Gold, or serving outputs need validation rules;
- transformations need validation before publish;
- freshness, completeness, uniqueness, validity, consistency, accuracy, reconciliation, schema, or referential integrity checks are needed;
- the user asks to create tests, quality gates, validation checks, Great Expectations suites, dbt tests, SQL checks, or data quality monitoring;
- the workflow router selects Phase 14.

Do not use this skill to implement tests, write SQL/Python/dbt code, create orchestration workflows, build dashboards, implement monitoring tools, or create CI/CD workflow files.

## Required Inputs

The agent should look for:

- `.agents/des-skill/output/01-business-discovery-brief.md`;
- `.agents/des-skill/output/02-business-question-catalog.md`;
- `.agents/des-skill/output/03-requirements-and-kpi-catalog.md`;
- `.agents/des-skill/output/04-data-product-specification.md`;
- `.agents/des-skill/output/05-data-source-inventory.md`;
- `.agents/des-skill/output/06-conceptual-domain-model.md`;
- `.agents/des-skill/output/07-architecture-decision-record.md`;
- `.agents/des-skill/output/08-ingestion-specification.md`;
- `.agents/des-skill/output/09-bronze-layer-specification.md`;
- `.agents/des-skill/output/10-silver-layer-specification.md`;
- `.agents/des-skill/output/11-gold-layer-specification.md`;
- `.agents/des-skill/output/12-data-contract-specification.md`;
- `.agents/des-skill/output/13-transformation-specification.md`;
- workflow status file, if present;
- contract quality expectations;
- transformation validation expectations;
- Bronze, Silver, Gold quality expectations;
- freshness/SLA expectations;
- metric reconciliation expectations;
- access/security constraints;
- consumer acceptance criteria.

If the Transformation Specification is missing or too weak, stop and ask whether to route back to `des-transformation-design`.

## Output File

Create or update:

```text
.agents/des-skill/output/14-data-quality-specification.md
```

The artifact must capture:

* data quality summary;
* quality scope and non-scope;
* quality design principles;
* quality dimensions;
* quality rule inventory;
* dataset-to-rule mapping;
* layer-specific quality rules;
* contract quality alignment;
* transformation validation alignment;
* freshness rules;
* completeness and volume rules;
* uniqueness and grain rules;
* validity and domain rules;
* referential integrity rules;
* consistency and reconciliation rules;
* accuracy and business reasonableness rules;
* schema and compatibility rules;
* null and missing value rules;
* anomaly and threshold rules;
* severity classification;
* failure handling and quality gates;
* ownership and stewardship;
* evidence and reporting expectations;
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
7. Do not invent quality thresholds, blocking rules, reconciliation tolerances, owners, or acceptance criteria.
8. Do not write SQL, Python, dbt, Spark, Great Expectations, orchestration, monitoring, or CI/CD code.
9. Before marking the artifact as Done, run the configured checklist and update workflow status.

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm upstream transformation, contract, Gold, Silver, Bronze, and requirement context.
2. Identify datasets and outputs requiring quality rules.
3. Define data quality dimensions and rule categories.
4. Map rules to datasets, contracts, transformations, and layers.
5. Define thresholds, severity, failure handling, and quality gates.
6. Define evidence, reporting, ownership, and monitoring expectations.
7. Ask HALT questions for unresolved quality decisions.
8. Draft the Data Quality Specification.
9. Run the checklist, update workflow status, and recommend the next skill.

Do not execute this overview directly. Follow the step files.

## Guardrails

The agent must not:

* treat data quality as only null checks;
* create quality rules without business or contract relevance;
* mark a rule as blocking without approval;
* invent thresholds without evidence or owner approval;
* ignore freshness and completeness;
* ignore grain uniqueness;
* ignore metric reconciliation where metrics are contractual;
* ignore layer boundaries: Bronze technical quality, Silver conformance quality, Gold consumer quality;
* silently accept quality failures;
* implement tests in this phase;
* mark quality design Done if P1 contracted outputs lack quality rules, severity, failure handling, or ownership.

## HALT Policy

This skill must stop when a quality decision cannot be safely inferred.

Stop especially when:

* upstream transformation or contract context is missing;
* quality scope is unclear;
* P1 datasets lack quality expectations;
* quality threshold is unclear;
* severity is unclear;
* blocking vs warning behavior is unclear;
* freshness SLA is unclear;
* metric reconciliation tolerance is unclear;
* owner/steward is missing;
* failure handling is unclear;
* evidence/reporting expectation is missing.

## WORKFLOW ARCHITECTURE

This uses step-file architecture for disciplined execution:

- read only the current step file;
- execute steps in order;
- stop at every HALT checkpoint;
- keep unresolved decisions as open questions, not assumptions;
- run the configured checklist before status advances.

## Quality Checklist

See [14-data-quality-design-checklist.md](file:///c:/Users/dksan/Code/data-engineer/data-engineering-superpowers/checklists/14-data-quality-design-checklist.md) for details.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Only checking schema (not values) | Schema can be valid while data is completely wrong (nulls, zeros, wrong ranges) |
| Creating WARNs nobody monitors | Warnings without owners and dashboards are noise — they desensitize teams to real problems |
| Blocking pipelines on low-severity checks | Timeliness SLAs should WARN, not halt a pipeline — blocking creates outage-level incidents for minor delays |
| Skipping cross-table reconciliation | Fact table totals drift from Silver source silently; reports show different numbers than source |
| Hard-coded thresholds without historical baseline | Static thresholds break during business seasonality (e.g., Black Friday volume spike triggers false alerts) |

## Undercurrent Coverage

| Undercurrent | Action Required at This Phase |
| :--- | :--- |
| Security | DQ audit logs must not expose PII column values in log entries |
| Data Management | DQ rules are part of the data contract — changes to rules must follow contract versioning |
| DataOps | DQ checks must run automatically in CI/CD pipeline (not only in production) |
| Data Architecture | Layer gates enforce the Medallion architecture principle: bad data cannot advance to next layer |
| Orchestration | DQ gate results must be integrated into pipeline DAG as blocking or non-blocking tasks |
| Software Engineering | DQ tests should be version-controlled alongside pipeline code; reviewed in PRs |

## Handoff To The Next Skill

Recommend `des-orchestration-observability` only after Phase 14 is complete.
