---
name: des-bronze-layer-design
description: Use when creating the Bronze Layer Specification for raw/near-raw storage, source fidelity, ingestion metadata, schema drift, replay, quarantine, retention, access control, and lineage before Silver design.
---

# des-bronze-layer-design

## Purpose

Use this skill to create and validate the Bronze Layer Specification for any data engineering project.

This skill defines how raw or near-raw ingested data will be stored, organized, partitioned, retained, audited, protected, and prepared for downstream Silver transformation.

The Bronze layer should preserve:

- source truth;
- raw payload or near-raw records;
- ingestion evidence;
- audit metadata;
- source traceability;
- schema drift evidence;
- replay/backfill capability;
- quarantine/rejected data evidence;
- raw data security controls.

The goal is to design Bronze as a trustworthy raw evidence layer, not as a cleaned business layer.

In the Phase-Orchestrated Support Model, this phase is not Done when the Bronze Layer Specification is first written.

Phase 09 is Done only when:

```text
Bronze Layer Specification exists
+ Phase 08 artifact and handoff are reviewed
+ Bronze validation work is identified
+ Bronze evidence is collected or waived with reason
+ artifact is revised from evidence
+ Phase 09 Done Gate passes
+ Phase 09 to Phase 10 handoff exists
```

---

## When To Use

Use this skill when:

* Phase 08 Ingestion Specification exists;
* Phase 08 handoff exists or the user explicitly accepts the risk of continuing without it;
* sources and ingestion patterns are known;
* raw/landing storage needs to be designed;
* source data must be retained for audit, replay, lineage, or troubleshooting;
* schema drift, raw payload retention, partitioning, storage format, access control, retention, or quarantine behavior is unclear;
* the workflow router selects Phase 09.

Do not use this skill to design Silver conformance, business cleaning, business deduplication, Gold marts, semantic models, dashboards, APIs, transformations, orchestration implementation, CI/CD workflow files, or code.

Allowed in this phase:

```text
Bronze dataset boundary design
raw preservation design
storage format and organization decision
partitioning design at Bronze level
metadata column definition
schema drift/rescued/quarantine behavior design
replay/backfill support design
retention and access classification
Bronze boundary technical quality expectations
```

---

## Required Inputs

The agent should look for:

* `_des-output/planning-artifacts/01-business-discovery-brief.md`;
* `_des-output/planning-artifacts/02-business-question-catalog.md`;
* `_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md`;
* `_des-output/planning-artifacts/04-data-product-specification.md`;
* `_des-output/planning-artifacts/05-data-source-inventory.md`;
* `_des-output/planning-artifacts/06-conceptual-domain-model.md`;
* `_des-output/planning-artifacts/07-architecture-decision-record.md`;
* `_des-output/planning-artifacts/08-ingestion-specification.md`;
* `_des-output/phase-handoffs/phase-08-to-09-handoff.md`;
* `_des-output/evidence/phase-08/phase-08-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-08-done-gate.md`, if available;
* workflow status file, if present;
* approved architecture layer strategy;
* source-to-ingestion mapping;
* source-to-product/requirement/KPI mapping;
* ingestion metadata expectations;
* monitoring/audit expectations;
* replay/backfill strategy;
* idempotency strategy;
* schema drift policy;
* security/privacy classification;
* retention expectations;
* access restrictions;
* error/quarantine expectations.

If the Ingestion Specification or Phase 08 handoff is missing or too weak, stop and ask whether to route back to `des-ingestion-design`.

---

## Output Files

Create or update the configured main output file:

```text
_des-output/planning-artifacts/09-bronze-layer-specification.md
```

Also create or update the Phase-Orchestrated Support outputs when using validated phase delivery:

```text
_des-output/phase-support-plans/phase-09-support-plan.md
_des-output/evidence/phase-09/phase-09-evidence-pack.md
_des-output/implementation-artifacts/phase-09-artifact-revision.md
_des-output/implementation-artifacts/phase-09-done-gate.md
_des-output/phase-handoffs/phase-09-to-10-handoff.md
```

The main artifact must capture:

* Bronze layer summary;
* Bronze scope;
* Bronze non-scope;
* Bronze design principles;
* source-to-Bronze mapping;
* ingestion-to-Bronze mapping;
* Bronze dataset inventory;
* raw preservation strategy;
* storage format decision;
* file and table organization;
* partitioning strategy;
* mandatory metadata columns;
* ingestion audit metadata;
* source traceability metadata;
* schema drift and evolution handling;
* replay and backfill support;
* idempotency and deduplication boundary;
* quarantine and rejected data handling;
* retention and lifecycle policy;
* access control and sensitivity classification;
* Bronze boundary data quality expectations;
* lineage and traceability expectations;
* operational evidence requirements;
* Bronze evidence summary;
* risks;
* assumptions;
* open questions;
* Phase 09 evidence summary;
* Phase 09 handoff notes;
* next skill recommendation.

---

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, and `status_file`.
4. Load only `steps/step-01-context-and-readiness.md`.
5. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
6. Stop at every HALT point and wait for user input.
7. Do not invent Bronze datasets, retention periods, partition keys, access roles, metadata requirements, schema drift policy, or quarantine policy.
8. Do not clean, conform, deduplicate for business correctness, or design Silver/Gold logic in this phase.
9. Do not write pipeline code, transformation code, orchestration implementation, or CI/CD workflow files.
10. Before marking Phase 09 as Done, create or update the support plan, evidence pack, artifact revision notes, Done Gate, handoff, and workflow status.

---

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm upstream ingestion, architecture, source, product, and security context.
2. Confirm Phase 08 handoff readiness.
3. Identify in-scope sources and ingestion outputs.
4. Define Bronze datasets per source feed, source object, endpoint, topic, file family, or logical raw object.
5. Define raw preservation, storage format, file/table organization, and partitioning.
6. Define mandatory metadata, ingestion audit metadata, and source traceability metadata.
7. Define schema drift, replay/backfill, idempotency boundary, retention, quarantine, and access policies.
8. Define Bronze boundary quality checks and operational evidence expectations.
9. Ask HALT questions for unresolved storage, partition, metadata, retention, access, drift, and quarantine decisions.
10. Draft the Bronze Layer Specification.
11. Create the Phase 09 Support Plan.
12. Collect or reference Phase 09 evidence.
13. Revise the Bronze Layer Specification using evidence.
14. Run the Phase 09 Done Gate.
15. Create the Phase 09 to Phase 10 Handoff.
16. Update workflow status.
17. Recommend the next skill.

Do not execute this overview directly. Follow the step files.

---

## Phase-Orchestrated Support Model

Phase 09 uses Bronze validation support work.

The purpose is not Silver cleaning or Gold modeling. The purpose is to make raw/source-aligned storage safe, traceable, replayable, auditable, and useful for downstream transformation.

### Required Support Work

| Support Work                        | Purpose                                                                                     | Output                      |
| ----------------------------------- | ------------------------------------------------------------------------------------------- | --------------------------- |
| Phase 08 Handoff Review             | Check Bronze design follows approved ingestion decisions.                                   | Evidence pack section       |
| Source-to-Bronze Mapping Check      | Ensure every P1 ingestion source maps to Bronze dataset or is blocked/deferred.             | Evidence pack section       |
| Ingestion-to-Bronze Alignment Check | Ensure Bronze design preserves ingestion pattern, metadata, replay, and audit requirements. | Evidence pack section       |
| Bronze Dataset Boundary Check       | Validate dataset boundary by source object/feed/topic/file family/logical raw object.       | Evidence pack section       |
| Raw Preservation Check              | Validate what is stored exactly as received or near-raw.                                    | Evidence pack section       |
| Storage Format Check                | Validate chosen format/table representation.                                                | Evidence pack section       |
| File/Table Organization Check       | Validate path/table naming and organization.                                                | Evidence pack section       |
| Partitioning Strategy Check         | Validate partition choice against replay, cost, operations, and cardinality.                | Evidence pack section       |
| Mandatory Metadata Check            | Validate metadata required for lineage, replay, audit, and debugging.                       | Evidence pack section       |
| Ingestion Audit Metadata Check      | Validate run/window/count/status evidence.                                                  | Evidence pack section       |
| Schema Drift Handling Check         | Validate schema change behavior.                                                            | Evidence pack section       |
| Replay/Backfill Support Check       | Validate Bronze can support recovery and reprocessing.                                      | Evidence pack section       |
| Idempotency/Dedup Boundary Check    | Validate rerun-safe boundary without business dedup.                                        | Evidence pack section       |
| Quarantine/Rejected Data Check      | Validate bad data preservation and traceability.                                            | Evidence pack section       |
| Retention/Lifecycle Check           | Validate raw retention against cost/compliance/replay needs.                                | Evidence pack section       |
| Access/Sensitivity Check            | Validate raw access rules for sensitive data.                                               | Evidence pack section       |
| Bronze Boundary Quality Check       | Validate technical checks only, not business conformance.                                   | Evidence pack section       |
| Lineage/Traceability Check          | Validate downstream can trace Silver/Gold back to source/run/file.                          | Evidence pack section       |
| Phase 09 Done Gate                  | Decide whether Phase 09 is Done, Done with risks, or Blocked.                               | `phase-09-done-gate.md`     |
| Phase 09 Handoff                    | Tell Phase 10 what Silver design can safely consume.                                        | `phase-09-to-10-handoff.md` |

### Optional Support Work

Optional support work may include:

```text
bronze_sample_load_review
raw_schema_capture_review
metadata_field_review
rescued_data_review
quarantine_design_review
partition_strategy_review
access_control_review
des-wise
des-learning-status-update
des-explain-artifact
des-correct-course
```

Use `des-correct-course` if Phase 09 discovers that ingestion design, architecture, or source assessment is too weak to support a safe Bronze layer.

---

## Evidence Required

Phase 09 evidence should prove that Bronze design preserves raw/source fidelity, ingestion auditability, replayability, schema drift handling, and traceability.

Acceptable evidence includes:

* Phase 08 Ingestion Specification;
* Phase 08 to Phase 09 handoff;
* Phase 08 evidence pack;
* source-to-ingestion mapping;
* ingestion metadata expectation;
* source schema/sample evidence;
* storage/platform constraint;
* raw preservation decision;
* partitioning rationale;
* schema drift decision;
* quarantine policy decision;
* access/security classification;
* retention requirement;
* accepted risk statement when information is missing.

Minimum evidence categories:

```text
phase_08_handoff_evidence
source_to_bronze_mapping_evidence
ingestion_to_bronze_alignment_evidence
bronze_dataset_boundary_evidence
raw_preservation_evidence
storage_format_evidence
file_table_organization_evidence
partitioning_strategy_evidence
mandatory_metadata_evidence
ingestion_audit_metadata_evidence
schema_drift_handling_evidence
replay_backfill_support_evidence
idempotency_dedup_boundary_evidence
quarantine_rejected_data_evidence
retention_lifecycle_evidence
access_sensitivity_evidence
bronze_boundary_quality_evidence
lineage_traceability_evidence
```

If evidence is missing, mark the item as `Draft`, `Open`, `Risk`, `Deferred`, `Blocked`, `Unknown`, or `Waived with reason`.

---

## HALT Policy

This skill must stop when a required decision cannot be safely inferred.

Stop especially when:

* upstream ingestion specifications are unknown;
* source payloads are blocked.

Detailed HALT checkpoints are defined in steps/.

---

## Guardrails

The agent must not:

* treat Bronze as a cleaned business layer;
* over-clean or conform source data in Bronze;
* remove raw fields without explicit retention and replay decision;
* flatten or parse raw payload in a way that destroys source evidence;
* choose partition keys without considering cardinality, query/replay patterns, file size, and cost;
* hide schema drift;
* store sensitive raw data without access policy;
* drop bad records without quarantine/evidence;
* define business deduplication rules in Bronze unless explicitly limited to ingestion safety;
* mark Bronze datasets Ready if mandatory metadata, retention, drift, replay, access, and quarantine policies are missing;
* design Silver/Gold tables in this phase;
* write pipeline implementation code.

---

## Quality Checklist

* [ ] Phase 08 Ingestion Specification exists or Draft continuation is explicitly accepted.
* [ ] Phase 08 handoff exists or missing handoff risk is explicitly accepted.
* [ ] Each P1/P2 source maps to a Bronze dataset with name, source, and object/feed details.
* [ ] Raw preservation policy is documented.
* [ ] Storage format is decided and justified.
* [ ] File/table organization is documented.
* [ ] Partitioning strategy is chosen based on replay, maintenance, cost, and cardinality.
* [ ] Mandatory metadata fields for audit and lineage are defined.
* [ ] Ingestion audit metadata is defined.
* [ ] Source traceability metadata is defined.
* [ ] Schema drift policy is documented.
* [ ] Replay and backfill support is specified.
* [ ] Idempotency and deduplication boundary is clear.
* [ ] Quarantine and rejected data rules are established.
* [ ] Retention lifecycle policies are set.
* [ ] Access control and sensitive data rules are defined.
* [ ] Bronze boundary quality expectations are technical/source-level only.
* [ ] Phase 09 support plan exists or is explicitly waived with reason.
* [ ] Phase 09 evidence pack exists or evidence is explicitly waived with reason.
* [ ] Phase 09 artifact revision notes exist.
* [ ] Phase 09 Done Gate result is recorded.
* [ ] Phase 09 to Phase 10 handoff exists.
* [ ] The artifact does not design detailed Silver/Gold tables, business transformations, semantic models, dashboards, APIs, orchestration implementation, or code.

---

## Anti-Patterns to Avoid

| Anti-Pattern                                           | Why It Fails                                                                     |
| :----------------------------------------------------- | :------------------------------------------------------------------------------- |
| Applying business logic or conformance in Bronze       | Breaks the raw replay guarantee; Silver cannot recover if business rules change. |
| Dropping raw source fields permanently                 | Causes irreversible data loss; fields needed later cannot be recovered.          |
| Partitioning by high-cardinality keys                  | Creates small-file and metadata overhead problems.                               |
| Storing raw JSON at scale without a queryable strategy | Can increase scan cost and make downstream processing slow.                      |
| Missing metadata columns                               | Makes lineage, debugging, replay, and audit nearly impossible.                   |
| Treating quarantined data as disposable                | Loses evidence needed for source debugging and quality analysis.                 |
| Giving broad access to raw sensitive data              | Bronze often contains unmasked and unstable sensitive fields.                    |

---

## Handoff To The Next Skill

Recommend `des-silver-layer-design` only after:

```text
Bronze Layer Specification exists
+ Phase 09 support plan exists or is waived with reason
+ Phase 09 evidence pack exists or evidence is waived with reason
+ Phase 09 Done Gate is Pass or Pass with risks
+ Phase 09 to Phase 10 handoff is Ready or Ready with Risks
```

If the phase is Draft or Blocked, recommend one of:

```text
continue des-bronze-layer-design
return to Step 02 Bronze dataset and storage decisions
resolve HALT question
route back to des-ingestion-design
route back to des-architecture-design
des-wise
des-correct-course
```
