---
name: des-orchestration-observability
description: Use when designing schedules, triggers, dependencies, quality gates, retries, failure handling, recovery, backfills, run evidence, alerting, incident behavior, and operational monitoring for data pipelines.
---

# des-orchestration-observability

## Purpose

Use this skill to create and validate the Orchestration and Observability Specification for any data engineering project.

This skill defines workflow scheduling, triggers, dependencies, retry policy, failure handling, quality gate integration, publish gates, alerting, incident handling, monitoring signals, run evidence, operational metadata, SLA tracking, backfill operations, and recovery expectations.

The goal is to make data pipelines operable, observable, recoverable, and auditable before implementation begins.

Orchestration and Observability should answer:

```text
What workflows exist?
What triggers them?
What must run before what?
Where are quality gates placed?
When is an output safe to publish?
What can be retried safely?
What happens on failure?
Who is alerted?
How are incidents escalated?
What signals prove freshness, quality, runtime, volume, and cost?
What operational evidence is captured for audit/debugging?
```

In the Phase-Orchestrated Support Model, this phase is not Done when the Orchestration and Observability Specification is first written.

Phase 15 is Done only when:

```text
Orchestration and Observability Specification exists
+ Phase 14 artifact and handoff are reviewed
+ operational validation work is identified
+ operational evidence is collected or waived with reason
+ artifact is revised from evidence
+ Phase 15 Done Gate passes
+ Phase 15 to Phase 16 handoff exists
```

---

## When To Use

Use this skill when:

* Phase 14 Data Quality Specification exists;
* Phase 14 handoff exists or the user explicitly accepts the risk of continuing without it;
* ingestion, Bronze, Silver, Gold, transformation, and quality rules need to be orchestrated;
* the project needs scheduling, dependency management, retries, alerts, SLAs, observability, backfill, or recovery design;
* quality gates need to block or warn before publishing outputs;
* pipeline health, freshness, runtime, row counts, quality results, cost, or incidents need monitoring;
* the user asks to create Airflow DAGs, Fabric pipelines, Databricks workflows, Prefect flows, Dagster assets, GitHub Actions, or orchestration logic;
* the workflow router selects Phase 15.

Do not use this skill to implement orchestration code, write DAGs, create Fabric pipeline JSON, create monitoring dashboards, write CI/CD workflows, deploy infrastructure, or implement alerting integrations.

Allowed in this phase:

```text
workflow inventory design
logical dependency graph design
schedule and trigger strategy
source readiness check design
ingestion orchestration design
Bronze/Silver/Gold orchestration design
quality gate placement
publish and release gate design
retry and timeout policy
failure recovery policy
backfill and replay operation design
late data and correction operation design
alerting and notification policy
incident and escalation policy
observability signal inventory
freshness/SLA monitoring design
volume/completeness monitoring design
quality result monitoring design
runtime/performance monitoring design
cost/usage monitoring design
run evidence and audit metadata design
operational ownership design
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
* `_des-output/planning-artifacts/09-bronze-layer-specification.md`;
* `_des-output/planning-artifacts/10-silver-layer-specification.md`;
* `_des-output/planning-artifacts/11-gold-layer-specification.md`;
* `_des-output/planning-artifacts/12-data-contract-specification.md`;
* `_des-output/planning-artifacts/13-transformation-specification.md`;
* `_des-output/planning-artifacts/14-data-quality-specification.md`;
* `_des-output/phase-handoffs/phase-14-to-15-handoff.md`;
* `_des-output/evidence/phase-14/phase-14-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-14-done-gate.md`, if available;
* workflow status file, if present;
* approved architecture orchestration boundary;
* ingestion frequency and trigger;
* transformation dependency graph;
* data quality gates;
* freshness/SLA expectations;
* contract validation expectations;
* failure handling expectations;
* alerting and owner expectations.

If the Data Quality Specification or Phase 14 handoff is missing or too weak, stop and ask whether to route back to `des-data-quality`.

---

## Output Files

Create or update the configured main output file:

```text
_des-output/planning-artifacts/15-orchestration-observability-specification.md
```

Also create or update the Phase-Orchestrated Support outputs when using validated phase delivery:

```text
_des-output/phase-support-plans/phase-15-support-plan.md
_des-output/evidence/phase-15/phase-15-evidence-pack.md
_des-output/implementation-artifacts/phase-15-artifact-revision.md
_des-output/implementation-artifacts/phase-15-done-gate.md
_des-output/phase-handoffs/phase-15-to-16-handoff.md
```

The main artifact must capture:

* orchestration and observability summary;
* orchestration scope;
* orchestration non-scope;
* orchestration design principles;
* workflow inventory;
* dependency graph;
* schedule and trigger strategy;
* source readiness checks;
* ingestion orchestration;
* Bronze/Silver/Gold transformation orchestration;
* quality gate integration;
* publish and release gates;
* retry and timeout policy;
* failure handling and recovery policy;
* backfill and replay operations;
* late-arriving and corrected data handling;
* alerting and notification policy;
* incident and escalation policy;
* observability signal inventory;
* freshness and SLA monitoring;
* volume and completeness monitoring;
* quality result monitoring;
* runtime and performance monitoring;
* cost and usage monitoring;
* run evidence and audit metadata;
* operational ownership;
* operational evidence summary;
* risks;
* assumptions;
* open questions;
* Phase 15 evidence summary;
* Phase 15 handoff notes;
* next skill recommendation.

---

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, `status_file`, and required upstream artifacts.
4. Identify Phase-Orchestrated Support files:

   * `phase_support_plan_file`;
   * `phase_evidence_pack_file`;
   * `phase_artifact_revision_file`;
   * `phase_done_gate_file`;
   * `phase_handoff_file`.
5. Load only `steps/step-01-context-and-readiness.md`.
6. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
7. Stop at every HALT point and wait for user input.
8. Do not invent schedules, retries, alerts, owners, SLAs, incident paths, or publish gates.
9. Do not write Airflow, Fabric, Databricks, Dagster, Prefect, GitHub Actions, SQL, Python, monitoring dashboard, CI/CD, or infrastructure code.
10. Before marking Phase 15 as Done, create or update the support plan, evidence pack, artifact revision notes, Done Gate, handoff, and workflow status.

---

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm upstream transformation, contract, Gold, Silver, Bronze, and requirement context.
2. Confirm Phase 14 handoff readiness.
3. Identify datasets and outputs requiring quality rules.
4. Define data quality dimensions and rule categories.
5. Map rules to datasets, contracts, transformations, and layers.
6. Define thresholds, severity, failure handling, and quality gates.
7. Define evidence, reporting, ownership, and monitoring expectations.
8. Ask HALT questions for unresolved quality decisions.
9. Draft the Data Quality Specification.
10. Create the Phase 14 Support Plan.
11. Collect or reference Phase 14 evidence.
12. Revise the Data Quality Specification using evidence.
13. Run the Phase 14 Done Gate.
14. Create the Phase 14 to Phase 15 Handoff.
15. Update workflow status.
16. Recommend the next skill.

Do not execute this overview directly. Follow the step files.

---

## Phase-Orchestrated Support Model

Phase 15 uses operational validation support work.

The purpose is not DAG implementation. The purpose is to make workflows operable, observable, recoverable, auditable, and safe for downstream semantic modeling and serving phases.

### Required Support Work

| Support Work                         | Purpose                                                         | Output                      |
| ------------------------------------ | --------------------------------------------------------------- | --------------------------- |
| Phase 14 Handoff Review              | Check operational design follows quality gate expectations.     | Evidence pack section       |
| Workflow Scope Check                 | Validate operational boundary.                                  | Evidence pack section       |
| Workflow Inventory Check             | Ensure workflows are listed.                                    | Evidence pack section       |
| Dependency Graph Check               | Validate logical ordering and dependency risks.                 | Evidence pack section       |
| Schedule/Trigger Check               | Validate workflow start behavior.                               | Evidence pack section       |
| Source Readiness Check               | Validate source availability/pre-checks.                        | Evidence pack section       |
| Ingestion Orchestration Check        | Validate source-to-Bronze orchestration.                        | Evidence pack section       |
| Transformation Orchestration Check   | Validate Bronze/Silver/Gold execution order.                    | Evidence pack section       |
| Quality Gate Integration Check       | Validate DQ gate placement and behavior.                        | Evidence pack section       |
| Publish/Release Gate Check           | Validate consumer-facing publish behavior.                      | Evidence pack section       |
| Retry/Timeout Check                  | Validate safe retry and timeout policy.                         | Evidence pack section       |
| Failure/Recovery Check               | Validate failure behavior and recovery path.                    | Evidence pack section       |
| Backfill/Replay Check                | Validate historical reprocessing operations.                    | Evidence pack section       |
| Late Data/Correction Check           | Validate late/corrected data operations.                        | Evidence pack section       |
| Alerting/Notification Check          | Validate alert routing and severity.                            | Evidence pack section       |
| Incident/Escalation Check            | Validate incident path.                                         | Evidence pack section       |
| Observability Signal Check           | Validate monitoring signals.                                    | Evidence pack section       |
| Freshness/SLA Monitoring Check       | Validate freshness measurement.                                 | Evidence pack section       |
| Volume/Completeness Monitoring Check | Validate volume/completeness monitoring.                        | Evidence pack section       |
| Quality Result Monitoring Check      | Validate DQ result monitoring.                                  | Evidence pack section       |
| Runtime/Performance Monitoring Check | Validate runtime and performance signals.                       | Evidence pack section       |
| Cost/Usage Monitoring Check          | Validate cost/usage signals where needed.                       | Evidence pack section       |
| Run Evidence/Audit Check             | Validate audit/debug metadata.                                  | Evidence pack section       |
| Operational Ownership Check          | Validate owners and escalation.                                 | Evidence pack section       |
| Phase 15 Done Gate                   | Decide whether Phase 15 is Done, Done with risks, or Blocked.   | `phase-15-done-gate.md`     |
| Phase 15 Handoff                     | Tell Phase 16 what semantic modeling can rely on operationally. | `phase-15-to-16-handoff.md` |

---

## Guardrails

The agent must not:

* treat orchestration as only scheduling;
* ignore dependencies between ingestion, transformation, quality, and publish;
* ignore data quality gates;
* retry unsafe or non-idempotent steps without approval;
* continue publishing when P1 quality gates fail unless explicitly approved;
* alert nobody;
* create noisy alerts without severity;
* omit evidence needed for audit and debugging;
* ignore backfill/replay operations;
* ignore SLA/freshness monitoring;
* implement DAGs or pipeline code in this phase;
* mark the artifact Done if P1 workflows lack schedule/trigger, dependency, retry/failure handling, quality gate, alerting, and ownership.

---

## Handoff To The Next Skill

Recommend `des-semantic-model-design` only after:

```text
Orchestration and Observability Specification exists
+ Phase 15 support plan exists or is waived with reason
+ Phase 15 evidence pack exists or evidence is waived with reason
+ Phase 15 Done Gate is Pass or Pass with risks
+ Phase 15 to Phase 16 handoff is Ready or Ready with Risks
```

If the phase is Draft or Blocked, recommend one of:

```text
continue des-orchestration-observability
return to Step 02 workflow scheduling and monitoring
resolve HALT question
route back to des-data-quality
route back to des-transformation-design
route back to des-data-contracts
des-wise
des-correct-course
```
