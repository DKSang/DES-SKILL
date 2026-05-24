# Step 03 — Artifact, Support Plan, Evidence, Done Gate, and Handoff

## Goal

Create or update the CI/CD and Testing Specification, validate it through Phase 21 support work, update workflow status, and prepare a safe handoff to Phase 22.

This step completes Phase 21 only if the Done Gate passes or passes with accepted risks.

---

## Required Inputs

- CI/CD and testing design draft from Step 02
- CI/CD and testing evidence mapping from Step 02
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

1. Create or update the CI/CD and Testing Specification using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved CI/CD decisions as `Draft`, `Risk`, `Blocked`, `Deferred`, `Open`, or `Unknown`.
4. Create or update the Phase 21 Support Plan.
5. Create or update the Phase 21 Evidence Pack.
6. Record which repository, branch, environment, test inventory, contract, quality, transformation, orchestration, semantic/serving, security/governance, cost/performance, deployment, approval, rollback, release evidence, test data, secrets/config, and breaking-change decisions are confirmed, assumed, missing, waived, blocked, or accepted with risk.
7. Revise the CI/CD and Testing Specification based on the evidence pack.
8. Create or update the Phase 21 Artifact Revision Report.
9. Run the configured CI/CD and Testing checklist.
10. Run the Phase 21 Done Gate checklist.
11. Create or update the Phase 21 to Phase 22 Handoff.
12. Update workflow status using Workflow Status v2 sections.
13. Recommend the next skill only if the handoff is ready.

---

## Artifact Sections

The CI/CD and Testing Specification should contain:

1. CI CD and Testing Summary
2. CI CD Scope
3. CI CD Non-Scope
4. CI CD Design Principles
5. Repository and Artifact Inventory
6. Branch and Review Strategy
7. Environment and Promotion Strategy
8. Test Inventory
9. Unit Test Expectations
10. Integration Test Expectations
11. Data Contract Test Expectations
12. Data Quality Test Expectations
13. Transformation Test Expectations
14. Orchestration Test Expectations
15. Semantic and Serving Test Expectations
16. Security and Governance Test Expectations
17. Cost and Performance Test Expectations
18. Deployment Gates
19. Release Approval Workflow
20. Rollback and Recovery Strategy
21. Release Evidence and Audit Trail
22. Test Data and Fixture Strategy
23. Secrets and Environment Configuration Policy
24. Breaking Change Policy
25. CI CD and Testing Evidence Summary
26. Risks
27. Assumptions
28. Open Questions
29. Phase 21 Evidence Summary
30. Phase 21 Handoff Notes
31. Next Skill Recommendation

---

## Phase 21 Support Plan

Create or update:

```text
_des-output/phase-support-plans/phase-21-support-plan.md
```

Use:

```text
templates/phase/phase-21-support-plan-template.md
```

if available.

---

## Phase 21 Evidence Pack

Create or update:

```text
_des-output/evidence/phase-21/phase-21-evidence-pack.md
```

Minimum evidence categories:

| Evidence ID | Evidence Area                              |                                     Required? |
| ----------- | ------------------------------------------ | --------------------------------------------: |
| E-001       | Phase 20 handoff evidence                  |                                           Yes |
| E-002       | CI/CD scope evidence                       |                                           Yes |
| E-003       | Repository/artifact inventory evidence     |                                           Yes |
| E-004       | Branch/review strategy evidence            |                                           Yes |
| E-005       | Environment/promotion strategy evidence    |                                           Yes |
| E-006       | Test inventory evidence                    |                                           Yes |
| E-007       | Unit test expectation evidence             |                                           Yes |
| E-008       | Integration test expectation evidence      |                                           Yes |
| E-009       | Data contract test gate evidence           |                Required where contracts exist |
| E-010       | Data quality test gate evidence            |                       Required for P1 outputs |
| E-011       | Transformation test gate evidence          |          Required where transformations exist |
| E-012       | Orchestration test gate evidence           |                Required where workflows exist |
| E-013       | Semantic/serving test gate evidence        |        Required where semantic/serving exists |
| E-014       | Security/governance test gate evidence     | Required where sensitive/governed data exists |
| E-015       | Cost/performance test gate evidence        |       Required where Phase 20 defines targets |
| E-016       | Deployment gate evidence                   |                                           Yes |
| E-017       | Release approval workflow evidence         |                                           Yes |
| E-018       | Rollback/recovery strategy evidence        |                                           Yes |
| E-019       | Release evidence/audit trail evidence      |                                           Yes |
| E-020       | Test data/fixture strategy evidence        |                                           Yes |
| E-021       | Secrets/environment config policy evidence |                                           Yes |
| E-022       | Breaking change policy evidence            |                                           Yes |

---

## Phase 21 Artifact Revision

Create or update:

```text
_des-output/implementation-artifacts/phase-21-artifact-revision.md
```

Record:

* what changed in the CI/CD and Testing Specification after evidence review;
* which gates were approved, risky, blocked, or deferred;
* which P1 release checks are blocking vs warning vs informational;
* which release evidence is required;
* which rollback paths remain risky;
* which unresolved items must be evaluated in Phase 22.

---

## Phase 21 Done Gate

Create or update:

```text
_des-output/implementation-artifacts/phase-21-done-gate.md
```

Gate result options:

```text
Pass
Pass with risks
Fail
Blocked
```

Phase 21 can be marked Done only if:

```text
Done Gate = Pass or Pass with risks
```

---

## Phase 21 Handoff

Create or update:

```text
_des-output/phase-handoffs/phase-21-to-22-handoff.md
```

The handoff must tell Phase 22:

* CI/CD scope and non-scope;
* approved/risky/blocked/deferred release framework items;
* repository and artifact inventory;
* branch and review strategy;
* environment and promotion strategy;
* test inventory;
* blocking/warning/info release gates;
* data contract gate expectations;
* data quality gate expectations;
* transformation test expectations;
* orchestration test expectations;
* semantic/serving test expectations;
* security/governance gate expectations;
* cost/performance gate expectations;
* deployment gates;
* release approval workflow;
* rollback and recovery strategy;
* release evidence and audit trail;
* test data and fixture strategy;
* secrets/config policy;
* breaking change policy;
* risks carried forward;
* open questions;
* do-not-assume list;
* whether Phase 22 may start.

Handoff status options:

```text
Ready
Ready with Risks
Not Ready
Blocked
```

Phase 22 should start only if:

```text
Handoff = Ready or Ready with Risks
```

---

## HALT — Checklist or Done Gate Blocked

Stop if the CI/CD and Testing checklist or Phase 21 Done Gate fails.

### Blocking examples

* P1 artifacts are not identified.
* No branch/review strategy exists.
* No environment/promotion strategy exists.
* Contracted output has no contract test gate.
* P1 output has no quality gate.
* Sensitive data has no security/governance gate.
* Cost/performance targets from Phase 20 have no test/monitoring candidate.
* Secrets/config strategy is missing.
* Rollback path is missing.
* Release approval owner is missing.
* Release evidence/audit trail is missing.
* Phase 21 evidence pack is missing and not waived.
* Phase 21 handoff is missing.
* Artifact contains CI/CD implementation code prematurely.
* Phase 22 would evaluate a release framework with hidden assumptions.

### Options

A. Fix the CI/CD and Testing specification now
B. Mark Phase 21 as Draft with blockers
C. Return to Step 02 CI/CD decisions
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
phase_21_cicd_testing:
  skill: des-cicd-and-testing
  artifact: _des-output/planning-artifacts/21-cicd-testing-specification.md
  support_plan: _des-output/phase-support-plans/phase-21-support-plan.md
  evidence_pack: _des-output/evidence/phase-21/phase-21-evidence-pack.md
  artifact_revision: _des-output/implementation-artifacts/phase-21-artifact-revision.md
  done_gate: _des-output/implementation-artifacts/phase-21-done-gate.md
  handoff: _des-output/phase-handoffs/phase-21-to-22-handoff.md
  artifact_status: Draft | Revised | Done | Blocked
  support_plan_status: Not Started | Draft | Complete | Blocked
  evidence_status: Missing | Partial | Accepted | Waived | Blocked
  done_gate_result: Pass | Pass with risks | Fail | Blocked
  handoff_status: Ready | Ready with Risks | Not Ready | Blocked
  overall_phase_status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  release_gates:
    - gate_id: ...
      type: static | unit | integration | contract | quality | security | performance | approval | smoke | regression
      behavior: block | warn | info | manual approval
      status: Draft | Approved | Risk | Blocked | Deferred
  environments:
    - local
    - dev
    - test
    - staging
    - prod
  rollback_strategy:
    - ...
  risks:
    - ...
  open_questions:
    - ...
  next_recommended_skill: des-project-evaluation
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

* CI/CD and Testing Specification is created or updated;
* Phase 21 Support Plan is created or updated;
* Phase 21 Evidence Pack is created or updated;
* CI/CD and Testing Specification is revised from evidence or evidence is explicitly waived;
* Phase 21 Artifact Revision Report is created or updated;
* Phase 21 Done Gate result is recorded;
* Phase 21 to Phase 22 Handoff is created or updated;
* workflow status is updated;
* next skill is recommended only if the handoff is Ready or Ready with Risks;
* the agent has not proceeded into Phase 22 without user approval.
