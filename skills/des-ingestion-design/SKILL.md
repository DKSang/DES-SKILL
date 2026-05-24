---
name: des-ingestion-design
description: Use when creating the Ingestion Specification for any data engineering project, including source-specific ingestion pattern, frequency, access method, checkpointing, idempotency, replay, schema drift, security, error handling, landing expectations, and ingestion observability.
---

# des-ingestion-design

## Purpose

Use this skill to create and validate the Ingestion Specification for any data engineering project.

This skill defines how data will move from source systems into the data platform at the ingestion boundary.

It covers:

- ingestion pattern;
- frequency and trigger;
- access and extraction method;
- bounded/unbounded data behavior;
- batch/streaming/event choice;
- push/pull/polling strategy;
- incremental and checkpoint strategy;
- idempotency;
- replay and backfill;
- late-arriving data;
- ordering and deduplication expectations;
- payload and serialization;
- schema drift handling;
- error handling and quarantine;
- security and credential handling;
- source impact, quota, rate limit, and throttling;
- landing target expectations;
- ingestion metadata expectations;
- monitoring, audit, and operational evidence expectations.

The goal is to design ingestion intentionally before Bronze/storage layer design or pipeline implementation begins.

In the Phase-Orchestrated Support Model, this phase is not Done when the Ingestion Specification is first written.

Phase 08 is Done only when:

```text
Ingestion Specification exists
+ Phase 07 artifact and handoff are reviewed
+ ingestion validation work is identified
+ ingestion evidence is collected or waived with reason
+ artifact is revised from evidence
+ Phase 08 Done Gate passes
+ Phase 08 to Phase 09 handoff exists
```

---

## When To Use

Use this skill when:

* Phase 07 Architecture Decision Record exists;
* Phase 07 handoff exists or the user explicitly accepts the risk of continuing without it;
* candidate sources and source risks are known;
* the project needs an architecture blueprint before implementation;
* the project needs to ingest data from databases, APIs, files, SaaS tools, streams, logs, third-party datasets, spreadsheets, sensors, data sharing feeds, or existing platforms;
* ingestion pattern, frequency, incremental logic, replay, backfill, schema drift, or failure handling is unclear;
* the user asks to build or implement ingestion pipelines;
* the workflow router selects Phase 08.

Do not use this skill to design detailed Bronze table schemas, Silver/Gold transformations, semantic models, dashboards, APIs, full orchestration workflows, data contracts in full, CI/CD workflow files, or implementation code.

Allowed in this phase:

```text
source-specific ingestion pattern design
lightweight ingestion feasibility spike
API/file/database ingestion spike
secret handling review
retry/idempotency review
schema drift policy review
landing and metadata expectation definition
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
* `_des-output/phase-handoffs/phase-07-to-08-handoff.md`;
* `_des-output/evidence/phase-05/phase-05-evidence-pack.md`, if available;
* `_des-output/evidence/phase-07/phase-07-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-07-done-gate.md`, if available;
* workflow status file, if present;
* P1/P2 source systems;
* approved architecture layer strategy;
* approved batch/streaming/event strategy;
* approved environment strategy;
* approved security/privacy posture;
* approved governance/metadata direction;
* source access status;
* source freshness and reliability expectations;
* source schema change behavior;
* source security/privacy classification;
* product freshness/SLA expectations;
* cost and team capability constraints.

If the Architecture Decision Record or Phase 07 handoff is missing or too weak, stop and ask whether to route back to `des-architecture-design`.

---

## Output Files

Create or update the configured main output file:

```text
_des-output/planning-artifacts/08-ingestion-specification.md
```

Also create or update the Phase-Orchestrated Support outputs when using validated phase delivery:

```text
_des-output/phase-support-plans/phase-08-support-plan.md
_des-output/evidence/phase-08/phase-08-evidence-pack.md
_des-output/implementation-artifacts/phase-08-artifact-revision.md
_des-output/implementation-artifacts/phase-08-done-gate.md
_des-output/phase-handoffs/phase-08-to-09-handoff.md
```

The main artifact must capture:

* ingestion summary;
* ingestion scope;
* source-to-ingestion mapping;
* source-to-requirement and product output mapping;
* ingestion pattern per source;
* batch/streaming/event decision;
* frequency and trigger;
* bounded/unbounded data classification;
* access and extraction method;
* incremental/checkpoint strategy;
* idempotency strategy;
* replay/backfill strategy;
* late-arriving data handling;
* ordering and deduplication expectations;
* payload and serialization expectations;
* schema drift/evolution policy;
* error handling and quarantine;
* security and credential handling;
* source impact, rate limits, and throttling;
* landing target expectations;
* ingestion metadata expectations;
* monitoring evidence and audit expectations;
* operational dependencies;
* ingestion evidence summary;
* risks;
* assumptions;
* open questions;
* Phase 08 evidence summary;
* Phase 08 handoff notes;
* next skill recommendation.

---

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, and `status_file`.
4. Load only `steps/step-01-context-and-readiness.md`.
5. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
6. Stop at every HALT point and wait for user input.
7. Do not invent source access, incremental keys, replay behavior, freshness guarantees, schema drift policy, credentials, error handling, or failure recovery.
8. Do not design detailed Bronze/Silver/Gold schemas, transformations, semantic models, dashboards, APIs, full orchestration workflows, CI/CD files, or code.
9. Before marking Phase 08 as Done, create or update the support plan, evidence pack, artifact revision notes, Done Gate, handoff, and workflow status.

---

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm upstream architecture, source, product, requirement, and domain context.
2. Confirm Phase 07 handoff readiness.
3. Identify sources in ingestion scope.
4. Map sources to product outputs, requirements, KPIs, and architecture constraints.
5. Classify each source by bounded/unbounded data and generation pattern.
6. Choose ingestion pattern per source.
7. Define frequency, trigger, incremental/checkpoint/idempotency strategy.
8. Define replay, backfill, late-arriving data, ordering, and deduplication expectations.
9. Define schema drift, payload, serialization, error handling, quarantine, and security controls.
10. Define landing target expectations and ingestion metadata expectations.
11. Define ingestion monitoring, audit, and evidence expectations.
12. Ask HALT questions for unresolved ingestion decisions.
13. Draft the Ingestion Specification.
14. Create the Phase 08 Support Plan.
15. Collect or reference Phase 08 evidence.
16. Revise the Ingestion Specification using evidence.
17. Run the Phase 08 Done Gate.
18. Create the Phase 08 to Phase 09 Handoff.
19. Update workflow status.
20. Recommend the next skill.

Do not execute this overview directly. Follow the step files.

---

## Phase-Orchestrated Support Model

Phase 08 uses source-specific ingestion validation support work.

The purpose is not implementation. The purpose is to prevent Bronze design and pipeline implementation from depending on vague ingestion assumptions.

### Required Support Work

| Support Work                            | Purpose                                                                                  | Output                      |
| --------------------------------------- | ---------------------------------------------------------------------------------------- | --------------------------- |
| Phase 07 Handoff Review                 | Check ingestion design follows approved architecture constraints.                        | Evidence pack section       |
| Source-to-Ingestion Mapping Check       | Ensure P1/P2 sources map to ingestion designs.                                           | Evidence pack section       |
| Architecture Constraint Alignment Check | Ensure ingestion follows platform, environment, layer, security, and metadata decisions. | Evidence pack section       |
| Ingestion Pattern Fit Check             | Validate ingestion pattern per source.                                                   | Evidence pack section       |
| Batch/Streaming/Event Alignment Check   | Validate ingestion mode against ADR and freshness needs.                                 | Evidence pack section       |
| Frequency and Trigger Check             | Validate run schedule or trigger.                                                        | Evidence pack section       |
| Access and Extraction Check             | Validate access and extraction method.                                                   | Evidence pack section       |
| Incremental/Checkpoint Check            | Validate new/change detection and checkpointing.                                         | Evidence pack section       |
| Idempotency Check                       | Validate safe rerun behavior.                                                            | Evidence pack section       |
| Replay/Backfill Check                   | Validate recovery and historical load behavior.                                          | Evidence pack section       |
| Schema Drift Policy Check               | Validate schema change handling.                                                         | Evidence pack section       |
| Error/Quarantine/Recovery Check         | Validate failure handling.                                                               | Evidence pack section       |
| Security/Credential Handling Check      | Validate credential and sensitive data controls.                                         | Evidence pack section       |
| Source Impact/Rate Limit Check          | Validate source load, quota, CDC impact, and throttling concerns.                        | Evidence pack section       |
| Landing Metadata Expectation Check      | Validate landing and metadata requirements for Phase 09.                                 | Evidence pack section       |
| Monitoring/Audit Expectation Check      | Validate evidence of ingestion correctness and observability expectations.               | Evidence pack section       |
| Phase 08 Done Gate                      | Decide whether Phase 08 is Done, Done with risks, or Blocked.                            | `phase-08-done-gate.md`     |
| Phase 08 Handoff                        | Tell Phase 09 what Bronze design must preserve.                                          | `phase-08-to-09-handoff.md` |

### Optional Support Work

Optional support work may include:

```text
api_ingestion_spike
file_ingestion_spike
database_ingestion_spike
cdc_feasibility_check
managed_connector_feasibility_check
secret_handling_review
retry_idempotency_review
schema_drift_review
des-wise
des-learning-status-update
des-explain-artifact
des-correct-course
```

Use `des-correct-course` if Phase 08 discovers that architecture, source assessment, or product expectations cannot support a safe ingestion design.

---

## Evidence Required

Phase 08 evidence should justify ingestion controls.

Acceptable evidence includes:

* Phase 07 Architecture Decision Record;
* Phase 07 to Phase 08 handoff;
* Phase 07 evidence pack;
* Phase 05 source evidence pack;
* source access note;
* API documentation;
* file manifest/naming convention;
* database extraction feasibility note;
* CDC feasibility note;
* credential/security review note;
* rate limit/quota note;
* schema drift policy decision;
* idempotency/retry review;
* accepted risk statement when information is missing.

Minimum evidence categories:

```text
phase_07_handoff_evidence
source_to_ingestion_mapping_evidence
architecture_constraint_alignment_evidence
ingestion_pattern_fit_evidence
batch_streaming_event_alignment_evidence
frequency_trigger_evidence
access_extraction_evidence
incremental_checkpoint_evidence
idempotency_evidence
replay_backfill_evidence
schema_drift_policy_evidence
error_quarantine_recovery_evidence
security_credential_handling_evidence
source_impact_rate_limit_evidence
landing_metadata_evidence
monitoring_audit_evidence
```

If evidence is missing, mark the item as `Draft`, `Open`, `Risk`, `Deferred`, `Blocked`, `Unknown`, or `Waived with reason`.

---

## Guardrails

The agent must not:

* assume ingestion is just copying data;
* use streaming when batch satisfies the approved freshness requirement;
* choose CDC unless source access and operational impact are understood;
* assume API limits, pagination, authentication, or schema behavior;
* assume file delivery is reliable without evidence;
* ignore replay, backfill, and idempotency;
* ignore schema drift and source change behavior;
* ignore error handling and quarantine/dead-letter needs;
* ignore credential and secret handling;
* ignore ingestion metadata and audit evidence;
* design detailed storage/table schemas before Bronze layer design;
* write pipeline implementation code;
* mark Phase 08 Done if P1 sources have no ingestion pattern, frequency, access status, idempotency, failure handling, evidence pack, or handoff.

---

## Quality Checklist

* [ ] Phase 07 Architecture Decision Record exists or Draft continuation is explicitly accepted.
* [ ] Phase 07 handoff exists or missing handoff risk is explicitly accepted.
* [ ] Each P1/P2 source has a defined ingestion pattern and frequency.
* [ ] Ingestion mode matches approved downstream freshness/SLA and ADR.
* [ ] Extraction method and security access mechanism are documented.
* [ ] Incremental/checkpoint key or strategy is defined or marked not applicable.
* [ ] Idempotency strategy for safe rerun and deduplication is specified.
* [ ] Replay and backfill mechanism is defined.
* [ ] Late-arriving data and ordering expectations are documented where relevant.
* [ ] Schema drift policy and error quarantine/dead-letter rules are set.
* [ ] Security access role, secrets storage, and PII handling are resolved or marked as risk.
* [ ] Landing target expectations are high-level only.
* [ ] Expected metadata fields are specified.
* [ ] Monitoring evidence and audit expectations are specified.
* [ ] Phase 08 support plan exists or is explicitly waived with reason.
* [ ] Phase 08 evidence pack exists or evidence is explicitly waived with reason.
* [ ] Phase 08 artifact revision notes exist.
* [ ] Phase 08 Done Gate result is recorded.
* [ ] Phase 08 to Phase 09 handoff exists.
* [ ] The artifact does not design detailed Bronze table schemas, Silver/Gold layer schemas, full orchestration workflows, or pipeline implementation code.

---

## Anti-Patterns to Avoid

| Anti-Pattern                                                  | Why It Fails                                                                                              |
| :------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------- |
| Treating ingestion as just copying files/tables               | Ignores idempotency, replay, schema drift, audit, and source impact.                                      |
| Choosing streaming for everything to be modern                | Streaming adds complexity, cost, ordering, replay, and operational burden without business justification. |
| CDC without knowing DB load or ownership constraints          | CDC setup can degrade production systems and requires strong permissions/ownership.                       |
| Skipping idempotency or replay design in MVP                  | Failures cause duplicates, gaps, and untrusted downstream data.                                           |
| Designing Bronze schema in Phase 08                           | Bronze design belongs to Phase 09; Phase 08 only defines ingestion and landing expectations.              |
| Writing pipeline code before ingestion decisions are approved | Implementation locks in assumptions before risks are visible.                                             |

---

## Handoff To The Next Skill

Recommend `des-bronze-layer-design` only after:

```text
Ingestion Specification exists
+ Phase 08 support plan exists or is waived with reason
+ Phase 08 evidence pack exists or evidence is waived with reason
+ Phase 08 Done Gate is Pass or Pass with risks
+ Phase 08 to Phase 09 handoff is Ready or Ready with Risks
```

If the phase is Draft or Blocked, recommend one of:

```text
continue des-ingestion-design
return to Step 02 ingestion patterns and controls
resolve HALT question
route back to des-architecture-design
route back to des-data-source-assessment
des-wise
des-correct-course
```
