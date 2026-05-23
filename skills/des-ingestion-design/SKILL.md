---
name: des-ingestion-design
description: Use when creating the Ingestion Specification for any data engineering project.
---

# des-ingestion-design

## Purpose

Use this skill to create the Ingestion Specification for any data engineering project.

This skill defines how data will move from source systems into the data platform at the ingestion boundary. It covers ingestion pattern, frequency, access method, bounded/unbounded data behavior, batch/streaming choice, push/pull/polling strategy, incremental strategy, idempotency, checkpointing, replay, backfill, schema drift handling, error handling, security, operational controls, and ingestion observability expectations.

The goal is to design ingestion intentionally before Bronze/storage layer design or pipeline implementation begins.

## When To Use

Use this skill when:

- Phase 7 Architecture Decision Record exists;
- candidate sources and source risks are known;
- the project needs to ingest data from databases, APIs, files, SaaS tools, streams, logs, third-party datasets, spreadsheets, sensors, data sharing feeds, or existing platforms;
- ingestion pattern, frequency, incremental logic, replay, backfill, schema drift, or failure handling is unclear;
- the user asks to build or implement ingestion pipelines;
- the workflow router selects Phase 8.

Do not use this skill to design detailed Bronze table schemas, Silver/Gold transformations, semantic models, dashboards, APIs, full orchestration workflows, data contracts in full, or implementation code.

## Required Inputs

The agent should look for:

- `_des-output/planning-artifacts/01-business-discovery-brief.md`;
- `_des-output/planning-artifacts/02-business-question-catalog.md`;
- `_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md`;
- `_des-output/planning-artifacts/04-data-product-specification.md`;
- `_des-output/planning-artifacts/05-data-source-inventory.md`;
- `_des-output/planning-artifacts/06-conceptual-domain-model.md`;
- `_des-output/planning-artifacts/07-architecture-decision-record.md`;
- workflow status file, if present;
- P1/P2 source systems;
- approved architecture layer strategy;
- approved batch/streaming/event strategy;
- source access status;
- source freshness and reliability expectations;
- source schema change behavior;
- source security/privacy classification;
- product freshness/SLA expectations;
- cost and team capability constraints.

If the Architecture Decision Record is missing or too weak, stop and ask whether to route back to `des-architecture-design`.

## Output File

The output_file path is configured in `customize.toml`. Default:

Write the final artifact to:

`_des-output/planning-artifacts/08-ingestion-specification.md`

Use the matching template from:

`_des/templates/08-ingestion-specification-template.md`

After writing the file, summarize the file path and recommend the next skill.

## Required Outputs

The artifact must capture:

- Ingestion Summary
- Ingestion Scope (In scope / Out of scope)
- Source-to-Ingestion Mapping
- Ingestion Pattern per Source
- Batch Streaming and Event Decision
- Frequency and Trigger
- Bounded and Unbounded Data Classification
- Access and Extraction Method
- Incremental and Checkpoint Strategy
- Idempotency Strategy
- Replay and Backfill Strategy
- Late Arriving Data Handling
- Ordering and Deduplication Expectations
- Payload and Serialization Expectations
- Schema Drift and Evolution Policy
- Error Handling and Quarantine
- Security and Credential Handling
- Source Impact Rate Limits and Throttling
- Landing Target Expectations
- Ingestion Metadata Expectations
- Monitoring Evidence and Audit Expectations
- Operational Dependencies
- Risks
- Assumptions
- Open Questions
- Next Skill Recommendation

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, `status_file`, and required upstream artifacts.
4. Load only `steps/step-01-context-and-readiness.md`.
5. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
6. Stop at every `HALT` point and wait for user input.
7. Do not invent source access, incremental keys, replay behavior, freshness guarantees, schema drift policy, credentials, or failure handling.
8. Do not design detailed Bronze/Silver/Gold schemas, transformations, semantic models, dashboards, APIs, full orchestration workflows, or code.
9. Before marking the artifact as Done, run the configured checklist and update workflow status.

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm upstream architecture, source, product, and requirement context.
2. Identify sources in ingestion scope.
3. Classify each source by bounded/unbounded data and generation pattern.
4. Choose ingestion pattern per source.
5. Define frequency, trigger, incremental/checkpoint/idempotency strategy.
6. Define replay, backfill, late-arriving data, ordering, and deduplication expectations.
7. Define schema drift, payload, serialization, error handling, and security controls.
8. Define ingestion evidence and observability expectations.
9. Ask HALT questions for unresolved ingestion decisions.
10. Draft the Ingestion Specification.
11. Run the checklist, update workflow status, and recommend the next skill.

Do not execute this overview directly. Follow the step files.

## Guardrails

The agent must not:

- assume ingestion is just copying data;
- use streaming when batch satisfies the approved freshness requirement;
- choose CDC unless source access and operational impact are understood;
- assume API limits, pagination, authentication, or schema behavior;
- assume file delivery is reliable without evidence;
- ignore replay, backfill, and idempotency;
- ignore schema drift and source change behavior;
- ignore error handling and quarantine/dead-letter needs;
- ignore credential and secret handling;
- design detailed storage/table schemas before Bronze layer design;
- mark the artifact Done if P1 sources have no ingestion pattern, frequency, access status, idempotency, or failure handling.

## HALT Policy

This skill must stop when an ingestion design decision cannot be safely inferred.

Stop especially when:

- upstream architecture or source context is missing;
- source access is not approved;
- ingestion pattern is unclear;
- batch versus streaming/event choice is unclear;
- frequency/freshness is unclear;
- incremental key or checkpoint logic is unknown;
- idempotency behavior is unclear;
- replay/backfill behavior is unclear;
- schema drift policy is unknown;
- source contains sensitive or regulated data;
- API quota, rate limit, file delivery, CDC impact, or source reliability may block ingestion;
- error handling and recovery expectations are missing.

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

- [ ] Each P1/P2 source has a defined ingestion pattern and frequency.
- [ ] Ingestion mode (batch vs. streaming vs. event) matches approved downstream freshness SLA.
- [ ] Extraction method and security access mechanism are fully documented.
- [ ] Incremental checkpoint key/strategy is defined or marked not applicable.
- [ ] Idempotency strategy for safe rerun and deduplication is specified.
- [ ] Replay and backfill mechanism is defined for historical recovery.
- [ ] Schema drift policy and error quarantine/dead-letter rules are set.
- [ ] Security access role, secrets storage, and PII handling are resolved.
- [ ] Landing target and expected metadata fields are specified.
- [ ] The artifact does not design detailed Bronze table schemas, Silver/Gold layer schemas, or write pipeline implementation code.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Treating ingestion as just copying files/tables | Ignores critical controls like idempotency, replay, and schema drift |
| Choosing streaming for everything to be modern | Streaming adds massive complexity, cost, and ordering concerns without business justification |
| CDC without knowing DB load or ownership constraints | CDC setup can degrade production database performance and block due to admin privileges |
| Skipping idempotency or replay design in the MVP | Leaves the pipeline fragile to failure, leading to duplicate records or missing data gaps |
| Designing physical schemas and writing code prematurely | Designs block agility before architecture boundaries and ingestion strategies are locked |

## Handoff To The Next Skill

Recommend `des-bronze-layer-design` only after the Ingestion Specification is complete or explicitly marked Draft with open questions and accepted risks.
