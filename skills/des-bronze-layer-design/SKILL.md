---
name: des-bronze-layer-design
description: Use when creating the Bronze Layer Specification for any data engineering project.
---

# des-bronze-layer-design

## Purpose

Use this skill to create the Bronze Layer Specification for any data engineering project.

This skill defines how raw or near-raw ingested data will be stored, organized, partitioned, retained, audited, protected, and prepared for downstream Silver transformation.

The Bronze layer should preserve source truth, ingestion evidence, and replay capability while avoiding premature business cleaning or modeling.

## When To Use

Use this skill when:

- Phase 8 Ingestion Specification exists;
- sources and ingestion patterns are known;
- raw/landing storage needs to be designed;
- source data must be retained for audit, replay, lineage, or troubleshooting;
- schema drift, raw payload retention, partitioning, storage format, access control, retention, or quarantine behavior is unclear;
- the workflow router selects Phase 9.

Do not use this skill to design Silver conformance, Gold marts, semantic models, dashboards, APIs, transformations, orchestration implementation, or code.

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
- workflow status file, if present;
- approved architecture layer strategy;
- source-to-ingestion mapping;
- ingestion metadata expectations;
- replay/backfill strategy;
- schema drift policy;
- security/privacy classification;
- retention expectations;
- access restrictions;
- error/quarantine expectations.

If the Ingestion Specification is missing or too weak, stop and ask whether to route back to `des-ingestion-design`.

## Output File

The output_file path is configured in `customize.toml`. Default:

Write the final artifact to:

`_des-output/planning-artifacts/09-bronze-layer-specification.md`

Use the matching template from:

`_des/templates/09-bronze-layer-specification-template.md`

After writing the file, summarize the file path and recommend the next skill.

## Required Outputs

The artifact must capture:

- Bronze layer summary
- Bronze scope and non-scope
- Bronze design principles
- Source-to-Bronze dataset mapping
- Bronze dataset inventory
- Raw preservation strategy
- Storage format decision
- File/table organization
- Partitioning strategy
- Mandatory metadata columns
- Ingestion audit metadata
- Schema drift and evolution handling
- Replay and backfill support
- Idempotency and deduplication boundary
- Quarantine and rejected data handling
- Retention and lifecycle policy
- Access control and sensitivity classification
- Data quality expectations at Bronze boundary
- Lineage and traceability expectations
- Operational evidence requirements
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
7. Do not invent Bronze datasets, retention periods, partition keys, access roles, metadata requirements, or schema drift policy.
8. Do not clean, conform, deduplicate for business correctness, or design Silver/Gold logic in this phase.
9. Do not write pipeline code or transformation code.
10. Before marking the artifact as Done, run the configured checklist and update workflow status.

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm upstream ingestion and architecture context.
2. Identify in-scope sources and ingestion outputs.
3. Define Bronze datasets per source feed or logical raw object.
4. Define raw preservation, storage format, organization, and partitioning.
5. Define mandatory audit metadata and lineage metadata.
6. Define schema drift, replay/backfill, retention, quarantine, and access policies.
7. Define Bronze boundary quality checks and operational evidence expectations.
8. Ask HALT questions for unresolved storage, partition, metadata, retention, access, and drift decisions.
9. Draft the Bronze Layer Specification.
10. Run the checklist, update workflow status, and recommend the next skill.

Do not execute this overview directly. Follow the step files.

## Guardrails

The agent must not:

- treat Bronze as a cleaned business layer;
- over-clean or conform source data in Bronze;
- remove raw fields without explicit retention and replay decision;
- choose partition keys without considering cardinality, query/replay patterns, and cost;
- hide schema drift;
- store sensitive raw data without access policy;
- drop bad records without quarantine/evidence;
- mark Bronze datasets Ready if mandatory metadata, retention, drift, replay, and access policies are missing;
- design Silver/Gold tables in this phase.

## HALT Policy

This skill must stop when a Bronze design decision cannot be safely inferred.

Stop especially when:

- upstream ingestion specification is missing;
- Bronze dataset boundary is unclear;
- raw preservation requirement is unclear;
- storage format is unclear;
- partition key is unclear or high-risk;
- metadata/audit requirements are unclear;
- schema drift policy is unclear;
- replay/backfill requirement is unclear;
- retention policy is unclear;
- source contains sensitive or regulated data and access policy is unclear;
- quarantine/rejected data policy is missing;
- Bronze design conflicts with architecture or ingestion decisions.

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

- [ ] Each P1/P2 source maps to a Bronze dataset with name, source, and object details.
- [ ] Raw preservation policy is documented, ensuring no premature business cleaning.
- [ ] Storage format (e.g. Parquet, Delta Lake, Iceberg) is decided and justified.
- [ ] Partitioning strategy is chosen based on cardinality and query patterns.
- [ ] Mandatory metadata fields for audit and lineage are defined.
- [ ] Schema drift policy is documented.
- [ ] Replay and backfill support from raw files/tables is specified.
- [ ] Access control and sensitive data rules are defined.
- [ ] Quarantine and rejected data rules are established.
- [ ] Retention lifecycle policies are set.
- [ ] The artifact does not design detailed Silver/Gold tables, write transformations, or include pipeline implementation code.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Applying business logic or conformance in Bronze | Breaks the "raw replay" guarantee; Silver cannot recover if business rules change |
| Dropping raw source fields permanently | Irreversible data loss; fields needed later cannot be recovered |
| Partitioning by user_id or high-cardinality keys | Creates millions of tiny files; kills query performance and increases metadata overhead |
| Storing raw JSON at scale without columnar conversion | Row-oriented JSON scans 10-100x more data than Parquet/Delta, increasing compute costs |
| Lack of metadata columns | Cannot trace pipeline run IDs, ingestion time, or source filenames, making audit impossible |

## Handoff To The Next Skill

Recommend `des-silver-layer-design` only after the Bronze Layer Specification is complete or explicitly marked Draft with open questions and accepted risks.
