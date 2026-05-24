# Step 03 — Artifact, Support Plan, Evidence, Done Gate, and Final Closeout

## Goal

Create or update the Project Evaluation Report, validate it through Phase 22 support work, update workflow status, and close the workflow or route to a specific next iteration.

This step completes Phase 22 only if the Done Gate passes or passes with accepted risks.

---

## Required Inputs

- Evaluation draft from Step 02
- Evaluation evidence mapping from Step 02
- Required support work from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`
- `phase_support_plan_file` from `customize.toml`
- `phase_evidence_pack_file` from `customize.toml`
- `phase_artifact_revision_file` from `customize.toml`
- `phase_done_gate_file` from `customize.toml`
- `phase_closeout_file` from `customize.toml`

---

## Actions

1. Create or update the Project Evaluation Report using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark missing evidence as `Unknown`, not as success.
4. Mark unsupported readiness claims as `Draft`, `Risk`, `Blocked`, `Unknown`, or `Not Ready`.
5. Create or update the Phase 22 Support Plan.
6. Create or update the Phase 22 Evidence Pack.
7. Record which evaluation conclusions are supported, partial, missing, waived, blocked, or accepted with risk.
8. Revise the Project Evaluation Report based on the evidence pack.
9. Create or update the Phase 22 Artifact Revision Report.
10. Run the configured Project Evaluation checklist.
11. Run the Phase 22 Done Gate checklist.
12. Create or update the Phase 22 Final Closeout.
13. Update workflow status using Workflow Status v2 sections.
14. Recommend one of:
    - workflow complete;
    - workflow complete with risks;
    - ready for implementation handoff;
    - ready for MVP/demo;
    - ready for internal review;
    - not ready / blocked;
    - start next iteration from selected phase;
    - route back to a specific phase;
    - close as learning/portfolio project.

---

## Artifact Sections

The Project Evaluation Report should contain:

1. Project Evaluation Summary
2. Evaluation Scope
3. Evaluation Non-Scope
4. Evaluation Design Principles
5. Evidence Availability Summary
6. Business Goal Evaluation
7. Business Question Coverage
8. Requirement and KPI Evaluation
9. Data Product Delivery Evaluation
10. Source and Ingestion Evaluation
11. Domain Model Evaluation
12. Architecture Evaluation
13. Bronze Silver Gold Layer Evaluation
14. Contract Evaluation
15. Transformation Evaluation
16. Data Quality Evaluation
17. Orchestration and Observability Evaluation
18. Semantic and Serving Evaluation
19. Lineage and Metadata Evaluation
20. Governance and Security Evaluation
21. Cost and Performance Evaluation
22. CI CD and Testing Evaluation
23. Stakeholder Feedback
24. Usage and Adoption Evidence
25. Readiness Scorecard
26. Risks and Known Limitations
27. Lessons Learned
28. Next Iteration Recommendations
29. Final Decision and Handoff
30. Phase 22 Evidence Summary
31. Workflow Closeout

---

## Phase 22 Support Plan

Create or update:

```text
_des-output/phase-support-plans/phase-22-support-plan.md
```

Use:

```text
templates/phase/phase-22-support-plan-template.md
```

if available.

---

## Phase 22 Evidence Pack

Create or update:

```text
_des-output/evidence/phase-22/phase-22-evidence-pack.md
```

Minimum evidence categories:

| Evidence ID | Evidence Area                           |                                                         Required? |
| ----------- | --------------------------------------- | ----------------------------------------------------------------: |
| E-001       | Phase 21 handoff evidence               |                                                               Yes |
| E-002       | Upstream artifact completeness evidence |                                                               Yes |
| E-003       | Evaluation scope evidence               |                                                               Yes |
| E-004       | Success criteria evidence               |                                                               Yes |
| E-005       | Business goal evidence                  |                                                               Yes |
| E-006       | Business question coverage evidence     |                                                               Yes |
| E-007       | Requirement/KPI evidence                |                                                               Yes |
| E-008       | Data product delivery evidence          |                                                               Yes |
| E-009       | Source/ingestion evidence               |                                                               Yes |
| E-010       | Domain model evidence                   |                                                               Yes |
| E-011       | Architecture evidence                   |                                                               Yes |
| E-012       | Bronze/Silver/Gold evidence             |                                                               Yes |
| E-013       | Contract evidence                       |                                    Required where contracts exist |
| E-014       | Transformation evidence                 |                                                               Yes |
| E-015       | Data quality evidence                   |                                                               Yes |
| E-016       | Orchestration/observability evidence    |                                                               Yes |
| E-017       | Semantic/serving evidence               |                                                               Yes |
| E-018       | Lineage/metadata evidence               |                                                               Yes |
| E-019       | Governance/security evidence            |                                                               Yes |
| E-020       | Cost/performance evidence               |                                                               Yes |
| E-021       | CI/CD/testing evidence                  |                                                               Yes |
| E-022       | Stakeholder feedback evidence           | Required for adoption/business acceptance; otherwise mark missing |
| E-023       | Usage/adoption evidence                 |               Required for adoption claim; otherwise mark missing |
| E-024       | Readiness scorecard evidence            |                                                               Yes |
| E-025       | Risk/limitation evidence                |                                                               Yes |
| E-026       | Lessons learned evidence                |                                                               Yes |
| E-027       | Next iteration evidence                 |                                                               Yes |
| E-028       | Final decision evidence                 |                                                               Yes |

---

## Phase 22 Artifact Revision

Create or update:

```text
_des-output/implementation-artifacts/phase-22-artifact-revision.md
```

Record:

* what changed in the Project Evaluation Report after evidence review;
* which readiness ratings changed;
* which evidence gaps were added;
* which success claims were downgraded to Unknown/Yellow/Red;
* which risks were added or escalated;
* which next iteration recommendations were refined;
* which final closeout decision was selected.

---

## Phase 22 Done Gate

Create or update:

```text
_des-output/implementation-artifacts/phase-22-done-gate.md
```

Gate result options:

```text
Pass
Pass with risks
Fail
Blocked
```

Phase 22 can be marked Done only if:

```text
Done Gate = Pass or Pass with risks
```

---

## Phase 22 Final Closeout

Create or update:

```text
_des-output/phase-handoffs/phase-22-final-closeout.md
```

The closeout must include:

* final decision;
* readiness summary;
* evidence summary;
* major risks;
* known limitations;
* accepted risks;
* blockers, if any;
* next iteration priorities;
* route-back phase, if any;
* implementation/release handoff notes, if any;
* workflow closeout status.

Closeout status options:

```text
Complete
Complete with Risks
Ready for Implementation Handoff
Ready for MVP/Demo
Ready for Internal Review
Not Ready / Blocked
Next Iteration Required
Route Back to Specific Phase
Learning / Portfolio Complete
```

---

## HALT — Checklist or Done Gate Blocked

Stop if the Project Evaluation checklist or Phase 22 Done Gate fails.

### Blocking examples

* Evaluation scope is missing.
* Original goals are not referenced.
* Success criteria are missing.
* Readiness decision is unsupported.
* Missing evidence is treated as success.
* Serious risks are hidden.
* Next iteration recommendation is missing.
* Final closeout decision is missing.
* Artifact claims production readiness without release/test/security evidence.
* Phase 22 evidence pack is missing and not waived.
* Phase 22 final closeout is missing.

### Options

A. Fix the evaluation report now
B. Mark evaluation as Draft with blockers
C. Return to Step 02 evaluation decisions
D. Route back to upstream phase
E. Accept specific risks and close as `Complete with Risks`
F. Stop workflow

### Required response

Choose A/B/C/D/E/F.

---

## Workflow Status Update

Update the status file with both legacy and Workflow Status v2 information.

Minimum YAML-style status block:

```yaml
phase_22_project_evaluation:
  skill: des-project-evaluation
  artifact: _des-output/planning-artifacts/22-project-evaluation-report.md
  support_plan: _des-output/phase-support-plans/phase-22-support-plan.md
  evidence_pack: _des-output/evidence/phase-22/phase-22-evidence-pack.md
  artifact_revision: _des-output/implementation-artifacts/phase-22-artifact-revision.md
  done_gate: _des-output/implementation-artifacts/phase-22-done-gate.md
  final_closeout: _des-output/phase-handoffs/phase-22-final-closeout.md
  artifact_status: Draft | Revised | Done | Blocked
  support_plan_status: Not Started | Draft | Complete | Blocked
  evidence_status: Missing | Partial | Accepted | Waived | Blocked
  done_gate_result: Pass | Pass with risks | Fail | Blocked
  overall_phase_status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  final_decision: Ready for production release | Ready for MVP/demo release | Ready for internal review only | Not ready | Design complete implementation pending | Learning/portfolio complete | Custom
  readiness_summary:
    business_value: Green | Yellow | Red | Unknown | Not Applicable
    business_questions: Green | Yellow | Red | Unknown | Not Applicable
    requirements_kpis: Green | Yellow | Red | Unknown | Not Applicable
    data_product: Green | Yellow | Red | Unknown | Not Applicable
    data_quality: Green | Yellow | Red | Unknown | Not Applicable
    governance_security: Green | Yellow | Red | Unknown | Not Applicable
    operational_readiness: Green | Yellow | Red | Unknown | Not Applicable
    cost_performance: Green | Yellow | Red | Unknown | Not Applicable
    cicd_testing: Green | Yellow | Red | Unknown | Not Applicable
    adoption: Green | Yellow | Red | Unknown | Not Applicable
    production_readiness: Green | Yellow | Red | Unknown | Not Applicable
  next_iteration:
    - ...
  workflow_closeout: Complete | Complete with Risks | Ready for Implementation Handoff | Ready for MVP/Demo | Ready for Internal Review | Not Ready / Blocked | Next Iteration Required | Route Back to Specific Phase | Learning / Portfolio Complete
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
Workflow Closeout
Next Session Prompt
```

---

## Completion Criteria

This step is complete when:

* Project Evaluation Report is created or updated;
* Phase 22 Support Plan is created or updated;
* Phase 22 Evidence Pack is created or updated;
* Project Evaluation Report is revised from evidence or evidence gaps are explicitly documented;
* Phase 22 Artifact Revision Report is created or updated;
* Phase 22 Done Gate result is recorded;
* Phase 22 Final Closeout is created or updated;
* workflow status is updated;
* final decision is documented;
* next iteration or closeout path is clear;
* no production readiness claim is made without evidence.
