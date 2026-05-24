# Step 03 — Artifact, Support Plan, Evidence, Done Gate, and Handoff

## Goal

Create or update the Orchestration and Observability Specification, validate it through Phase 15 support work, update workflow status, and prepare a safe handoff to Phase 16.

This step completes Phase 15 only if the Done Gate passes or passes with accepted risks.

---

## Required Inputs

- Orchestration/observability design draft from Step 02
- Operational evidence mapping from Step 02
- Required support work from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`
- `phase_support_plan_file` from `customize.toml`
- `phase_evidence_pack_file` from `customize.toml`
- `phase_artifact_revision_file` from `customize.toml`
- `phase_done_gate_file` from `customize.toml`
- `phase_handoff_file` from `customize.toml`

---

## Actions

1. Create or update the Orchestration and Observability Specification using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved operational decisions as `Draft`, `Risk`, `Blocked`, `Deferred`, `Open`, or `Unknown`.
4. Create or update the Phase 15 Support Plan.
5. Create or update the Phase 15 Evidence Pack.
6. Record which workflow, dependency, trigger, gate, retry, failure, backfill, late-data, alert, incident, signal, SLA, evidence, cost, and ownership decisions are confirmed, assumed, missing, waived, blocked, or accepted with risk.
7. Revise the Orchestration and Observability Specification based on the evidence pack.
8. Create or update the Phase 15 Artifact Revision Report.
9. Run the configured Orchestration and Observability checklist.
10. Run the Phase 15 Done Gate checklist.
11. Create or update the Phase 15 to Phase 16 Handoff.
12. Update workflow status using Workflow Status v2 sections.
13. Recommend the next skill only if the handoff is ready.

---

## Artifact Sections

The Orchestration and Observability Specification should contain:

1. Orchestration and Observability Summary
2. Orchestration Scope
3. Orchestration Non-Scope
4. Orchestration Design Principles
5. Workflow Inventory
6. Dependency Graph
7. Schedule and Trigger Strategy
8. Source Readiness Checks
9. Ingestion Orchestration
10. Bronze Silver Gold Transformation Orchestration
11. Quality Gate Integration
12. Publish and Release Gates
13. Retry and Timeout Policy
14. Failure Handling and Recovery Policy
15. Backfill and Replay Operations
16. Late Data and Correction Operations
17. Alerting and Notification Policy
18. Incident and Escalation Policy
19. Observability Signal Inventory
20. Freshness and SLA Monitoring
21. Volume and Completeness Monitoring
22. Quality Result Monitoring
23. Runtime and Performance Monitoring
24. Cost and Usage Monitoring
25. Run Evidence and Audit Metadata
26. Operational Ownership
27. Operational Evidence Summary
28. Risks
29. Assumptions
30. Open Questions
31. Phase 15 Evidence Summary
32. Phase 15 Handoff Notes
33. Next Skill Recommendation

---

## Phase 15 Support Plan

Create or update:

```text
_des-output/phase-support-plans/phase-15-support-plan.md
```

Use:

```text
templates/phase/phase-15-support-plan-template.md
```

if available.

---

## Phase 15 Evidence Pack

Create or update:

```text
_des-output/evidence/phase-15/phase-15-evidence-pack.md
```

Minimum evidence categories:

| Evidence ID | Evidence Area                           |                                  Required? |
| ----------- | --------------------------------------- | -----------------------------------------: |
| E-001       | Phase 14 handoff evidence               |                                        Yes |
| E-002       | Workflow scope evidence                 |                                        Yes |
| E-003       | Workflow inventory evidence             |                                        Yes |
| E-004       | Dependency graph evidence               |                                        Yes |
| E-005       | Schedule/trigger evidence               |                                 Yes for P1 |
| E-006       | Source readiness evidence               | Required where source availability matters |
| E-007       | Ingestion orchestration evidence        |                 Yes where ingestion exists |
| E-008       | Transformation orchestration evidence   |                                        Yes |
| E-009       | Quality gate integration evidence       |                                        Yes |
| E-010       | Publish/release gate evidence           |       Required for consumer-facing outputs |
| E-011       | Retry/timeout evidence                  |                                        Yes |
| E-012       | Failure/recovery evidence               |                                        Yes |
| E-013       | Backfill/replay evidence                |        Required where reprocessing matters |
| E-014       | Late data/correction evidence           |                    Required where relevant |
| E-015       | Alerting/notification evidence          |                              Yes for P1/P2 |
| E-016       | Incident/escalation evidence            |        Required for P1 failures/SLA breach |
| E-017       | Observability signal evidence           |                                        Yes |
| E-018       | Freshness/SLA monitoring evidence       |                  Yes for SLA-bound outputs |
| E-019       | Volume/completeness monitoring evidence |                    Required where relevant |
| E-020       | Quality result monitoring evidence      |                                        Yes |
| E-021       | Runtime/performance monitoring evidence |                                        Yes |
| E-022       | Cost/usage monitoring evidence          |            Required where cost risk exists |
| E-023       | Run evidence/audit evidence             |                                        Yes |
| E-024       | Operational ownership evidence          |                                        Yes |

---

## Phase 15 Artifact Revision

Create or update:

```text
_des-output/implementation-artifacts/phase-15-artifact-revision.md
```

Record:

* what changed in the Orchestration and Observability Specification after evidence review;
* which workflows were approved, risky, blocked, or deferred;
* which schedules, dependencies, gates, retries, and failure policies were clarified;
* which observability signals were added;
* which alert/incident/ownership gaps remain;
* whether Phase 16 can safely use the operational assumptions for semantic model design.

---

## Phase 15 Done Gate

Create or update:

```text
_des-output/implementation-artifacts/phase-15-done-gate.md
```

Gate result options:

```text
Pass
Pass with risks
Fail
Blocked
```

Phase 15 can be marked Done only if:

```text
Done Gate = Pass or Pass with risks
```

---

## Phase 15 Handoff

Create or update:

```text
_des-output/phase-handoffs/phase-15-to-16-handoff.md
```

The handoff must tell Phase 16:

* workflow scope and non-scope;
* approved/risky/blocked/deferred workflows;
* publish behavior for semantic/consumer-facing outputs;
* freshness and SLA monitoring assumptions;
* quality gate behavior affecting semantic model readiness;
* run evidence and audit metadata available for semantic model consumers;
* operational ownership;
* observability signals available to semantic/reporting consumers;
* risks carried forward;
* open questions;
* do-not-assume list;
* whether Phase 16 may start.

Handoff status options:

```text
Ready
Ready with Risks
Not Ready
Blocked
```

Phase 16 should start only if:

```text
Handoff = Ready or Ready with Risks
```

---

## HALT — Checklist or Done Gate Blocked

Stop if the Orchestration and Observability checklist or Phase 15 Done Gate fails.

### Blocking examples

* P1 workflow has no trigger/schedule.
* P1 workflow has no dependency order.
* P1 quality gate behavior is missing.
* Publish behavior is missing for consumer-facing outputs.
* Retry is allowed for non-idempotent step without approval.
* Failure recovery is missing.
* Alert owner is missing.
* Freshness/SLA monitoring is missing.
* Run evidence/audit metadata is missing.
* Phase 15 evidence pack is missing and not waived.
* Phase 15 handoff is missing.
* Artifact includes orchestration implementation code prematurely.
* Phase 16 would rely on hidden operational assumptions.

### Options

A. Fix the orchestration/observability specification now
B. Mark Phase 15 as Draft with blockers
C. Return to Step 02 operational decisions
D. Route back to the upstream skill that owns the missing context
E. Accept specific risks and create `Ready with Risks` handoff
F. Stop workflow

### Required response

Choose A/B/C/D/E/F.

---

## Workflow Status Update

Update the status file with both legacy and Workflow Status v2 information.

Minimum YAML-style status block:

```yaml
phase_15_orchestration_observability:
  skill: des-orchestration-observability
  artifact: _des-output/planning-artifacts/15-orchestration-observability-specification.md
  support_plan: _des-output/phase-support-plans/phase-15-support-plan.md
  evidence_pack: _des-output/evidence/phase-15/phase-15-evidence-pack.md
  artifact_revision: _des-output/implementation-artifacts/phase-15-artifact-revision.md
  done_gate: _des-output/implementation-artifacts/phase-15-done-gate.md
  handoff: _des-output/phase-handoffs/phase-15-to-16-handoff.md
  artifact_status: Draft | Revised | Done | Blocked
  support_plan_status: Not Started | Draft | Complete | Blocked
  evidence_status: Missing | Partial | Accepted | Waived | Blocked
  done_gate_result: Pass | Pass with risks | Fail | Blocked
  handoff_status: Ready | Ready with Risks | Not Ready | Blocked
  overall_phase_status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  workflows:
    - workflow_id: ...
      trigger: ...
      schedule: ...
      dependencies:
        - ...
      quality_gates:
        - ...
      publish_behavior: ...
      status: Draft | Approved | Risk | Blocked | Deferred
      owner: ...
  gates:
    - gate_id: ...
      behavior: block | warn | info | manual approval
  alerts:
    - alert_id: ...
      owner: ...
      severity: P1 | P2 | P3
  risks:
    - ...
  open_questions:
    - ...
  next_recommended_skill: des-semantic-model-design
```

Also update these Workflow Status v2 sections if present:

```text
Phase Artifact Progress
Phase Execution Status
Phase Support Plan Progress
Phase Evidence Pack Progress
Phase Artifact Revision Progress
Phase Done Gate Progress
Phase Handoff Register
Phase Dependency and Readiness Matrix
Current Phase Operating Notes
Active Blockers
Risk Register
Key Decisions Log
Open Questions
```

---

## Completion Criteria

This step is complete when:

* Orchestration and Observability Specification is created or updated;
* Phase 15 Support Plan is created or updated;
* Phase 15 Evidence Pack is created or updated;
* Orchestration and Observability Specification is revised from evidence or evidence is explicitly waived;
* Phase 15 Artifact Revision Report is created or updated;
* Phase 15 Done Gate result is recorded;
* Phase 15 to Phase 16 Handoff is created or updated;
* workflow status is updated;
* next skill is recommended only if the handoff is Ready or Ready with Risks;
* the agent has not proceeded into Phase 16 without user approval.
