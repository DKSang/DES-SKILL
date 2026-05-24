# Step 03 — Artifact, Support Plan, Evidence, Done Gate, and Handoff

## Goal

Create or update the Cost and Performance Optimization Specification, validate it through Phase 20 support work, update workflow status, and prepare a safe handoff to Phase 21.

This step completes Phase 20 only if the Done Gate passes or passes with accepted risks.

---

## Required Inputs

- Cost/performance optimization draft from Step 02
- Cost/performance evidence mapping from Step 02
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

1. Create or update the Cost and Performance Optimization Specification using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved optimization decisions as `Draft`, `Risk`, `Blocked`, `Deferred`, `Open`, or `Unknown`.
4. Create or update the Phase 20 Support Plan.
5. Create or update the Phase 20 Evidence Pack.
6. Record which workload, cost driver, performance driver, baseline, storage, compute, ingestion, transformation, query, serving, orchestration, quality, caching, partitioning, incremental, retention, monitoring, SLO, scalability, and trade-off decisions are confirmed, assumed, missing, waived, blocked, or accepted with risk.
7. Revise the Cost and Performance Optimization Specification based on the evidence pack.
8. Create or update the Phase 20 Artifact Revision Report.
9. Run the configured Cost and Performance Optimization checklist.
10. Run the Phase 20 Done Gate checklist.
11. Create or update the Phase 20 to Phase 21 Handoff.
12. Update workflow status using Workflow Status v2 sections.
13. Recommend the next skill only if the handoff is ready.

---

## Artifact Sections

The Cost and Performance Optimization Specification should contain:

1. Cost and Performance Summary
2. Optimization Scope
3. Optimization Non-Scope
4. Optimization Design Principles
5. Workload Inventory
6. Cost Driver Inventory
7. Performance Driver Inventory
8. Baseline Measurement Plan
9. Storage Optimization Strategy
10. Compute Optimization Strategy
11. Ingestion Optimization Strategy
12. Transformation Optimization Strategy
13. Query and Semantic Model Optimization Strategy
14. Serving Performance Strategy
15. Orchestration Runtime Optimization
16. Data Quality Cost and Performance Considerations
17. Caching and Materialization Strategy
18. Partitioning Clustering and File Sizing Expectations
19. Incremental Processing and Recomputation Strategy
20. Retention Lifecycle and Storage Tiering
21. Cost Monitoring and Budget Guardrails
22. Performance Monitoring and SLOs
23. Scalability and Capacity Planning
24. Trade Off Decisions
25. Cost and Performance Evidence Summary
26. Risks
27. Assumptions
28. Open Questions
29. Phase 20 Evidence Summary
30. Phase 20 Handoff Notes
31. Next Skill Recommendation

---

## Phase 20 Support Plan

Create or update:

```text
_des-output/phase-support-plans/phase-20-support-plan.md
```

Use:

```text
templates/phase/phase-20-support-plan-template.md
```

if available.

---

## Phase 20 Evidence Pack

Create or update:

```text
_des-output/evidence/phase-20/phase-20-evidence-pack.md
```

Minimum evidence categories:

| Evidence ID | Evidence Area                                 |                                          Required? |
| ----------- | --------------------------------------------- | -------------------------------------------------: |
| E-001       | Phase 19 handoff evidence                     |                                                Yes |
| E-002       | Optimization scope evidence                   |                                                Yes |
| E-003       | Workload inventory evidence                   |                                                Yes |
| E-004       | Workload priority evidence                    |                                                Yes |
| E-005       | Cost driver inventory evidence                |                                                Yes |
| E-006       | Performance driver inventory evidence         |                                                Yes |
| E-007       | Baseline measurement plan evidence            |                                                Yes |
| E-008       | Storage optimization evidence                 |                                                Yes |
| E-009       | Compute optimization evidence                 |                                                Yes |
| E-010       | Ingestion optimization evidence               |                         Yes where ingestion exists |
| E-011       | Transformation optimization evidence          |                                                Yes |
| E-012       | Query/semantic optimization evidence          |                       Yes where semantic/BI exists |
| E-013       | Serving performance evidence                  |                         Yes for P1 serving outputs |
| E-014       | Orchestration runtime evidence                |                                                Yes |
| E-015       | Data quality cost/performance evidence        |                                                Yes |
| E-016       | Caching/materialization evidence              | Required where caching/materialization is proposed |
| E-017       | Partitioning/clustering/file sizing evidence  |             Required where layout decisions matter |
| E-018       | Incremental processing/recomputation evidence |                                                Yes |
| E-019       | Retention/storage tiering evidence            |                                                Yes |
| E-020       | Cost monitoring/budget guardrail evidence     |                                                Yes |
| E-021       | Performance monitoring/SLO evidence           |                                                Yes |
| E-022       | Scalability/capacity planning evidence        |                                                Yes |
| E-023       | Trade-off decision evidence                   |                    Required where trade-offs exist |

---

## Phase 20 Artifact Revision

Create or update:

```text
_des-output/implementation-artifacts/phase-20-artifact-revision.md
```

Record:

* what changed in the Cost and Performance Optimization Specification after evidence review;
* which workloads were approved, risky, blocked, or deferred;
* which baselines were confirmed or still missing;
* which cost/performance targets became SLO candidates;
* which optimization strategies remain Draft due to missing measurements;
* which trade-offs require owner approval;
* which targets and guardrails should be carried into Phase 21 testing/release gates.

---

## Phase 20 Done Gate

Create or update:

```text
_des-output/implementation-artifacts/phase-20-done-gate.md
```

Gate result options:

```text
Pass
Pass with risks
Fail
Blocked
```

Phase 20 can be marked Done only if:

```text
Done Gate = Pass or Pass with risks
```

---

## Phase 20 Handoff

Create or update:

```text
_des-output/phase-handoffs/phase-20-to-21-handoff.md
```

The handoff must tell Phase 21:

* optimization scope and non-scope;
* approved/risky/blocked/deferred workloads;
* workload priority;
* cost drivers;
* performance drivers;
* baseline measurement plan;
* cost monitoring signals;
* budget guardrails;
* performance SLOs;
* scalability/capacity assumptions;
* optimization decisions that should become tests or release gates;
* cost/performance checks that should run in CI/CD or release validation;
* trade-offs and accepted risks;
* constraints from governance/security that cannot be weakened;
* constraints from quality/contracts that cannot be weakened;
* risks carried forward;
* open questions;
* do-not-assume list;
* whether Phase 21 may start.

Handoff status options:

```text
Ready
Ready with Risks
Not Ready
Blocked
```

Phase 21 should start only if:

```text
Handoff = Ready or Ready with Risks
```

---

## HALT — Checklist or Done Gate Blocked

Stop if the Cost and Performance Optimization checklist or Phase 20 Done Gate fails.

### Blocking examples

* P1 workload has no optimization review.
* No baseline measurement plan exists.
* Cost drivers are unknown.
* Performance drivers are unknown.
* SLA-bound workload has no performance target.
* Optimization conflicts with security/governance.
* Optimization weakens quality or contract without approval.
* Caching/materialization bypasses freshness/security constraints.
* Cost monitoring is missing.
* Scalability planning is missing for expected growth.
* Phase 20 evidence pack is missing and not waived.
* Phase 20 handoff is missing.
* Artifact includes implementation/tuning code prematurely.
* Phase 21 would test against hidden or unapproved cost/performance assumptions.

### Options

A. Fix the optimization specification now
B. Mark Phase 20 as Draft with blockers
C. Return to Step 02 optimization decisions
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
phase_20_cost_performance_optimization:
  skill: des-cost-and-performance-optimization
  artifact: _des-output/planning-artifacts/20-cost-performance-optimization-specification.md
  support_plan: _des-output/phase-support-plans/phase-20-support-plan.md
  evidence_pack: _des-output/evidence/phase-20/phase-20-evidence-pack.md
  artifact_revision: _des-output/implementation-artifacts/phase-20-artifact-revision.md
  done_gate: _des-output/implementation-artifacts/phase-20-done-gate.md
  handoff: _des-output/phase-handoffs/phase-20-to-21-handoff.md
  artifact_status: Draft | Revised | Done | Blocked
  support_plan_status: Not Started | Draft | Complete | Blocked
  evidence_status: Missing | Partial | Accepted | Waived | Blocked
  done_gate_result: Pass | Pass with risks | Fail | Blocked
  handoff_status: Ready | Ready with Risks | Not Ready | Blocked
  overall_phase_status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  optimized_workloads:
    - workload_id: ...
      type: ingestion | transformation | quality | semantic | serving | monitoring
      priority: P1 | P2 | P3
      status: Draft | Approved | Risk | Blocked | Deferred
      baseline_status: Missing | Plan only | Confirmed | Waived
      risks:
        - ...
  cost_guardrails:
    - ...
  performance_slos:
    - ...
  risks:
    - ...
  open_questions:
    - ...
  next_recommended_skill: des-cicd-and-testing
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

* Cost and Performance Optimization Specification is created or updated;
* Phase 20 Support Plan is created or updated;
* Phase 20 Evidence Pack is created or updated;
* Cost and Performance Optimization Specification is revised from evidence or evidence is explicitly waived;
* Phase 20 Artifact Revision Report is created or updated;
* Phase 20 Done Gate result is recorded;
* Phase 20 to Phase 21 Handoff is created or updated;
* workflow status is updated;
* next skill is recommended only if the handoff is Ready or Ready with Risks;
* the agent has not proceeded into Phase 21 without user approval.
