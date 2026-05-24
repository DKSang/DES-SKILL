# Step 03 — Artifact, Support Plan, Evidence, Done Gate, and Handoff

## Goal

Create or update the Data Quality Specification, validate it through Phase 14 support work, update workflow status, and prepare a safe handoff to Phase 15.

This step completes Phase 14 only if the Done Gate passes or passes with accepted risks.

---

## Required Inputs

- Data quality design draft from Step 02
- Data quality evidence mapping from Step 02
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

1. Create or update the Data Quality Specification using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved quality decisions as `Draft`, `Risk`, `Blocked`, `Deferred`, `Open`, or `Unknown`.
4. Create or update the Phase 14 Support Plan.
5. Create or update the Phase 14 Evidence Pack.
6. Record which rule, threshold, severity, gate, owner, evidence, monitoring, and release/CI candidate decisions are confirmed, assumed, missing, waived, blocked, or accepted with risk.
7. Revise the Data Quality Specification based on the evidence pack.
8. Create or update the Phase 14 Artifact Revision Report.
9. Run the configured Data Quality Design checklist.
10. Run the Phase 14 Done Gate checklist.
11. Create or update the Phase 14 to Phase 15 Handoff.
12. Update workflow status using Workflow Status v2 sections.
13. Recommend the next skill only if the handoff is ready.

---

## Artifact Sections

The Data Quality Specification should contain:

1. Data Quality Summary
2. Quality Scope
3. Quality Non-Scope
4. Quality Design Principles
5. Quality Dimensions
6. Quality Rule Inventory
7. Dataset to Rule Mapping
8. Layer Specific Quality Rules
9. Contract Quality Alignment
10. Transformation Validation Alignment
11. Freshness Rules
12. Completeness and Volume Rules
13. Uniqueness and Grain Rules
14. Validity and Domain Rules
15. Referential Integrity Rules
16. Consistency and Reconciliation Rules
17. Accuracy and Business Reasonableness Rules
18. Schema and Compatibility Rules
19. Null and Missing Value Rules
20. Anomaly and Threshold Rules
21. Severity Classification
22. Failure Handling and Quality Gates
23. Ownership and Stewardship
24. Evidence and Reporting Expectations
25. Monitoring and Observability Expectations
26. Release and CI/CD Gate Candidates
27. Data Quality Evidence Summary
28. Risks
29. Assumptions
30. Open Questions
31. Phase 14 Evidence Summary
32. Phase 14 Handoff Notes
33. Next Skill Recommendation

---

## Phase 14 Support Plan

Create or update:

```text
_des-output/phase-support-plans/phase-14-support-plan.md
```

Use:

```text
templates/phase/phase-14-support-plan-template.md
```

if available.

---

## Phase 14 Evidence Pack

Create or update:

```text
_des-output/evidence/phase-14/phase-14-evidence-pack.md
```

Minimum evidence categories:

| Evidence ID | Evidence Area                                 |                                         Required? |
| ----------- | --------------------------------------------- | ------------------------------------------------: |
| E-001       | Phase 13 handoff evidence                     |                                               Yes |
| E-002       | Quality scope evidence                        |                                               Yes |
| E-003       | Quality dimension evidence                    |                                               Yes |
| E-004       | Quality rule inventory evidence               |                                               Yes |
| E-005       | Dataset-to-rule mapping evidence              |                                               Yes |
| E-006       | Layer-specific rule evidence                  |                                               Yes |
| E-007       | Contract quality alignment evidence           |                                               Yes |
| E-008       | Transformation validation alignment evidence  |                                               Yes |
| E-009       | Freshness rule evidence                       |                 Required for P1 SLA-bound outputs |
| E-010       | Completeness/volume rule evidence             |                           Required where relevant |
| E-011       | Uniqueness/grain rule evidence                |                           Required where relevant |
| E-012       | Validity/domain rule evidence                 |                                               Yes |
| E-013       | Referential integrity rule evidence           |                        Required where joins exist |
| E-014       | Consistency/reconciliation rule evidence      | Required where metrics/cross-source outputs exist |
| E-015       | Accuracy/reasonableness rule evidence         |    Required where business reasonableness matters |
| E-016       | Schema/compatibility rule evidence            |                   Required for contracted outputs |
| E-017       | Null/missing rule evidence                    |                                               Yes |
| E-018       | Anomaly/threshold rule evidence               |        Required where thresholds/anomalies matter |
| E-019       | Severity classification evidence              |                                               Yes |
| E-020       | Failure handling/gate evidence                |                                               Yes |
| E-021       | Ownership/stewardship evidence                |                                               Yes |
| E-022       | Evidence/reporting evidence                   |                                               Yes |
| E-023       | Monitoring/observability expectation evidence |                                Required for P1/P2 |
| E-024       | CI/CD/release gate candidate evidence         |                             Required for P1 gates |

---

## Phase 14 Artifact Revision

Create or update:

```text
_des-output/implementation-artifacts/phase-14-artifact-revision.md
```

Record:

* what changed in the Data Quality Specification after evidence review;
* which rules were approved, risky, blocked, or deferred;
* which thresholds/severity/gates were clarified;
* which owners/stewards remain missing;
* which monitoring expectations were added for Phase 15;
* which CI/CD/release gate candidates were added for Phase 21.

---

## Phase 14 Done Gate

Create or update:

```text
_des-output/implementation-artifacts/phase-14-done-gate.md
```

Gate result options:

```text
Pass
Pass with risks
Fail
Blocked
```

Phase 14 can be marked Done only if:

```text
Done Gate = Pass or Pass with risks
```

---

## Phase 14 Handoff

Create or update:

```text
_des-output/phase-handoffs/phase-14-to-15-handoff.md
```

The handoff must tell Phase 15:

* quality scope and non-scope;
* approved/risky/blocked/deferred quality rules;
* rule severity;
* failure handling;
* quality gates;
* owners/stewards;
* evidence/reporting expectations;
* freshness and SLA signals;
* rule result metrics to emit;
* alerting candidates;
* dashboard/reporting candidates;
* incident/escalation candidates;
* release/CI/CD gate candidates to carry later;
* risks carried forward;
* open questions;
* do-not-assume list;
* whether Phase 15 may start.

Handoff status options:

```text
Ready
Ready with Risks
Not Ready
Blocked
```

Phase 15 should start only if:

```text
Handoff = Ready or Ready with Risks
```

---

## HALT - Checklist or Done Gate Blocked

Stop if the Data Quality Design checklist or Phase 14 Done Gate fails.

### Blocking examples

* P1 contracted output has no quality rules.
* Quality rule has no dataset/output.
* Rule has no dimension.
* Threshold or pass/fail condition is missing.
* Severity is missing.
* Failure handling is missing.
* Owner/steward is missing for P1 rule.
* Contract quality expectations are not mapped.
* Freshness SLA quality rule is missing for P1 output.
* Metric reconciliation rule is missing where required.
* Evidence/reporting expectation is missing.
* Phase 14 evidence pack is missing and not waived.
* Phase 14 handoff is missing.
* Artifact includes SQL/Python/dbt/Great Expectations/test implementation code prematurely.
* Phase 15 would rely on hidden quality assumptions.

### Options

A. Fix the quality specification now
B. Mark Phase 14 as Draft with blockers
C. Return to Step 02 quality decisions
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
phase_14_data_quality_design:
  skill: des-data-quality
  artifact: _des-output/planning-artifacts/14-data-quality-specification.md
  support_plan: _des-output/phase-support-plans/phase-14-support-plan.md
  evidence_pack: _des-output/evidence/phase-14/phase-14-evidence-pack.md
  artifact_revision: _des-output/implementation-artifacts/phase-14-artifact-revision.md
  done_gate: _des-output/implementation-artifacts/phase-14-done-gate.md
  handoff: _des-output/phase-handoffs/phase-14-to-15-handoff.md
  artifact_status: Draft | Revised | Done | Blocked
  support_plan_status: Not Started | Draft | Complete | Blocked
  evidence_status: Missing | Partial | Accepted | Waived | Blocked
  done_gate_result: Pass | Pass with risks | Fail | Blocked
  handoff_status: Ready | Ready with Risks | Not Ready | Blocked
  overall_phase_status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  quality_rules:
    - rule_id: ...
      dataset: ...
      dimension: ...
      severity: P1 Blocking | P2 Warning | P3 Info | Draft | Not Applicable
      threshold: ...
      failure_handling: block | warn | quarantine | alert | manual approval | info
      owner: ...
      status: Draft | Approved | Risk | Blocked | Deferred
  gates:
    - name: ...
      applies_to: ...
      behavior: block | warn | info | manual approval
  risks:
    - ...
  open_questions:
    - ...
  next_recommended_skill: des-orchestration-observability
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

* Data Quality Specification is created or updated;
* Phase 14 Support Plan is created or updated;
* Phase 14 Evidence Pack is created or updated;
* Data Quality Specification is revised from evidence or evidence is explicitly waived;
* Phase 14 Artifact Revision Report is created or updated;
* Phase 14 Done Gate result is recorded;
* Phase 14 to Phase 15 Handoff is created or updated;
* workflow status is updated;
* next skill is recommended only if the handoff is Ready or Ready with Risks;
* the agent has not proceeded into Phase 15 without user approval.
