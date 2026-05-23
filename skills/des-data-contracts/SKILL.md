---
name: des-data-contracts
description: Use when creating the Data Contract Specification for any data engineering project.
---

# des-data-contracts

## Purpose

Use this skill to create the Data Contract Specification for any data engineering project.

This skill defines data contracts for source feeds, Silver datasets, Gold datasets, and serving outputs where consumers depend on stable structure, meaning, freshness, quality, access, ownership, lineage, and change behavior.

The goal is to make producer-consumer expectations explicit before transformation implementation, serving, testing, CI/CD, monitoring, and release gates are designed.

## When To Use

Use this skill when:

- Phase 11 Gold Layer Specification exists;
- one or more datasets or outputs will be consumed by dashboards, semantic models, APIs, ML/AI datasets, analysts, downstream systems, external partners, or production workflows;
- schema, grain, freshness, quality, access, versioning, or change expectations need to be explicit;
- upstream sources require agreed expectations before ingestion or transformation;
- dataset changes could break downstream consumers;
- the workflow router selects Phase 12.

Do not use this skill to write transformation code, implement data quality tests, deploy pipelines, build dashboards, implement APIs, or create CI/CD workflow files.

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
- workflow status file, if present;
- datasets or outputs requiring contract expectations;
- owners, producers, and consumers;
- grain and schema expectations;
- KPI/metric definitions;
- freshness/SLA expectations;
- data quality rules;
- access/security classification;
- lineage expectations;
- change/versioning expectations.

If the Gold Layer Specification is missing or too weak, stop and ask whether to route back to `des-gold-layer-design`.

## Output File

Create or update the configured `output_file`:

```text
_des-output/planning-artifacts/12-data-contract-specification.md
```

The artifact must capture:

* data contract summary;
* contract scope and non-scope;
* contract design principles;
* contract inventory;
* producer and consumer mapping;
* contract level;
* dataset/output identity;
* business meaning;
* schema expectations;
* grain expectations;
* field-level expectations;
* metric and KPI expectations;
* freshness and SLA expectations;
* quality expectations;
* volume and completeness expectations;
* security and access expectations;
* lineage and metadata expectations;
* compatibility and versioning policy;
* change management policy;
* deprecation policy;
* incident and escalation policy;
* acceptance and validation criteria;
* contract ownership and approval;
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
7. Do not invent contract owners, consumers, SLA, quality thresholds, schema fields, versioning rules, or incident policies.
8. Do not write test implementation, transformation code, orchestration code, dashboard code, API code, or CI/CD workflow files.
9. Before marking the artifact as Done, run the configured checklist and update workflow status.

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm upstream Gold, Silver, source, product, requirement, and governance context.
2. Identify which datasets or outputs require contracts.
3. Define contract boundaries and contract levels.
4. Define producer, consumer, owner, and approver expectations.
5. Define schema, grain, field, metric, freshness, quality, access, lineage, and change obligations.
6. Define compatibility, versioning, deprecation, incident, and escalation policies.
7. Ask HALT questions for unresolved contract decisions.
8. Draft the Data Contract Specification.
9. Run the checklist, update workflow status, and recommend the next skill.

Do not execute this overview directly. Follow the step files.

## Guardrails

The agent must not:

* create contracts for every dataset without need;
* skip contracts for production or downstream system-facing outputs;
* define schema without grain and meaning;
* define freshness/SLA without owner and evidence;
* define quality expectations without validation criteria;
* define breaking change policy without consumer notification path;
* treat a contract as only a schema;
* ignore access/security expectations;
* ignore ownership and approval;
* mark a contract Approved if producer, consumer, owner, schema, grain, freshness, quality, access, or change policy is unresolved.

## HALT Policy

This skill must stop when a contract decision cannot be safely inferred.

Stop especially when:

* upstream Gold or serving context is missing;
* it is unclear which outputs need contracts;
* producer or consumer is unknown;
* contract level is unclear;
* schema or field expectations are missing;
* grain is unclear;
* freshness/SLA is unclear;
* quality thresholds are missing;
* access/security classification is unclear;
* metric definition conflicts exist;
* versioning or breaking change policy is unclear;
* incident or escalation path is missing.

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

- [ ] Every contract has a named producer, consumer(s), and owner.
- [ ] Schema and semantic definitions are explicit — no "similar to X" references.
- [ ] Freshness and quality guarantees are testable — not just aspirational.
- [ ] Breaking change policy specifies minimum notice period and consumer migration support.
- [ ] Contract version is recorded using semantic versioning.
- [ ] Contract tests are implemented or explicitly scheduled.
- [ ] The artifact does not design detailed dashboard visuals, write SQL/Python transformation code, or include pipeline implementation code.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Writing contracts only after consumers break | Reactive contracts capture the current broken state, not the agreed-upon design |
| Treating schema as the whole contract | Freshness, semantics, and quality guarantees are equally critical |
| Forgetting semantic changes to metrics | Formula changes are breaking changes even if schema is unchanged |
| Defining guarantees without implementing tests | Unverified contracts are just documentation — they provide false confidence |
| No versioning on the contract | Consumers cannot detect when a breaking change occurred |

## Handoff To The Next Skill

Recommend `des-transformation-design` only after the Data Contract Specification is complete or explicitly marked Draft with open questions and accepted risks.
