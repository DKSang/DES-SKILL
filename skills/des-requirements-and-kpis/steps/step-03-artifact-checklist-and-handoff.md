# Step 03 - Artifact, Checklist, and Handoff

## Goal

Create or update the Requirements and KPI Catalog, validate it through Phase 03 support work, update workflow status, and prepare a safe handoff to Phase 04.

This step completes Phase 03 only if the Done Gate passes or passes with accepted risks.

---

## Required Inputs

- Requirements and KPI draft from Step 02
- Requirement and KPI evidence mapping from Step 02
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

1. Create or update the Requirements and KPI Catalog using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved requirements and metrics as `Draft`, `Candidate`, `Conflicting`, `Deferred`, or `Open`.
4. Create or update the Phase 03 Support Plan.
5. Create or update the Phase 03 Evidence Pack.
6. Record which requirements, KPIs, formulas, grains, owners, SLAs, thresholds, and acceptance criteria are confirmed, assumed, missing, waived, conflicting, or accepted with risk.
7. Revise the Requirements and KPI Catalog based on the evidence pack.
8. Create or update the Phase 03 Artifact Revision Report.
9. Run the configured Requirements and KPI checklist.
10. Run the Phase 03 Done Gate checklist.
11. Create or update the Phase 03 to Phase 04 Handoff.
12. Update workflow status using Workflow Status v2 sections.
13. Recommend the next skill only if the handoff is ready.

---

## Hints

- This artifact should become the measurable bridge between questions and design.
- Keep formulas and grains clear enough for later Gold and semantic design.
- Do not create physical table designs.
- Do not choose final data sources unless already known and approved.
- Do not write test implementation; only define what must be tested later.
- If metric conflict remains unresolved, keep the artifact Draft or Passed with risks.
- Candidate metrics are allowed, but Phase 04 must know they are not approved KPIs.
- The next phase uses these requirements to define the data product boundary.

---

## Artifact Sections

The Requirements and KPI Catalog should contain:

1. Requirement Summary
2. Functional Requirements
3. Non-Functional Requirements
4. KPI and Metric Catalog
5. Metric Definitions
6. Metric Grain
7. Metric Ownership
8. Business Question Mapping
9. Consumer Mapping
10. Acceptance Criteria
11. Freshness and SLA Expectations
12. Quality Expectations
13. Security and Privacy Constraints
14. Cost and Performance Constraints
15. Requirement Traceability
16. Conflicts
17. Assumptions
18. Open Questions
19. Phase 03 Evidence Summary
20. Phase 03 Handoff Notes
21. Next Skill Recommendation

---

## Phase 03 Support Plan

Create or update:

```text
_des-output/phase-support-plans/phase-03-support-plan.md
```

Minimum sections:

1. Phase context
2. Upstream inputs reviewed
3. Initial artifact summary
4. What must be validated
5. Required support work
6. Evidence output locations
7. Waivers and deferrals
8. HALT conditions
9. Completion criteria
10. Next support action

Use:

```text
templates/phase/phase-03-support-plan-template.md
```

if available.

---

## Phase 03 Evidence Pack

Create or update:

```text
_des-output/evidence/phase-03/phase-03-evidence-pack.md
```

Minimum evidence categories:

| Evidence ID | Evidence Area                                     |                         Required? |
| ----------- | ------------------------------------------------- | --------------------------------: |
| E-001       | Phase 02 handoff evidence                         |                               Yes |
| E-002       | Question-to-requirement traceability evidence     |                               Yes |
| E-003       | Functional requirement testability evidence       |                               Yes |
| E-004       | Non-functional requirement measurability evidence |                               Yes |
| E-005       | KPI formula evidence                              |          Yes for approved P1 KPIs |
| E-006       | Metric grain evidence                             |          Yes for approved P1 KPIs |
| E-007       | Metric owner evidence                             |          Yes for approved P1 KPIs |
| E-008       | Freshness/SLA evidence                            | Yes for P1 freshness requirements |
| E-009       | Acceptance criteria evidence                      |           Yes for P1 requirements |
| E-010       | Metric conflict evidence                          |     Required when conflicts exist |

For each evidence item, record status:

```text
Confirmed
Assumed
Missing
Waived with reason
Conflicting
Accepted with risk
```

Use:

```text
templates/phase/phase-03-evidence-pack-template.md
```

if available.

---

## Phase 03 Artifact Revision

Create or update:

```text
_des-output/implementation-artifacts/phase-03-artifact-revision.md
```

Record:

* what changed in the Requirements and KPI Catalog after evidence review;
* which formulas, grains, owners, SLAs, or thresholds were confirmed;
* which KPIs remained Candidate/Draft;
* which metric conflicts remained unresolved;
* which risks were carried forward;
* whether Phase 04 can safely use the catalog.

---

## Phase 03 Done Gate

Create or update:

```text
_des-output/implementation-artifacts/phase-03-done-gate.md
```

Gate result options:

```text
Pass
Pass with risks
Fail
Blocked
```

Phase 03 can be marked Done only if:

```text
Done Gate = Pass or Pass with risks
```

If the gate is `Pass with risks`, the risks must be included in the handoff.

---

## Phase 03 Handoff

Create or update:

```text
_des-output/phase-handoffs/phase-03-to-04-handoff.md
```

The handoff must tell Phase 04:

* approved functional requirements;
* approved non-functional requirements;
* approved KPIs and metric definitions;
* candidate or draft metrics;
* metric formulas;
* metric grains;
* metric owners;
* acceptance criteria;
* freshness/SLA expectations;
* quality expectations;
* security/privacy constraints;
* cost/performance constraints;
* requirement traceability to business questions;
* unresolved metric conflicts;
* assumptions;
* risks carried forward;
* open questions;
* do-not-assume list;
* whether Phase 04 may start.

Handoff status options:

```text
Ready
Ready with Risks
Not Ready
Blocked
```

Phase 04 should start only if:

```text
Handoff = Ready or Ready with Risks
```

---

## HALT - Checklist Blocked

Stop if the Requirements/KPI checklist or Phase 03 Done Gate fails.

### Blocking examples

* P1 business questions have no requirements.
* P1 requirements have no acceptance criteria.
* P1 approved KPIs lack formula, grain, or owner.
* Freshness expectations are vague and not accepted as risk.
* Metric conflicts are unresolved and blocking.
* Artifact contains table design or implementation code prematurely.
* Phase 03 evidence pack is missing and not waived.
* Phase 03 handoff is missing.
* Phase 04 would depend on Draft KPIs as if they were Approved.

### Options

A. Fix the catalog now
B. Mark Phase 03 as Draft with blockers
C. Return to Step 02 requirements/KPI definition
D. Route back to `des-business-questions`
E. Accept specific risks and create `Ready with Risks` handoff
F. Stop workflow

### Required response

Choose A/B/C/D/E/F.

---

## Workflow Status Update

Update the status file with both legacy and Workflow Status v2 information.

Minimum YAML-style status block:

```yaml
phase_03_requirements_and_kpis:
  skill: des-requirements-and-kpis
  artifact: _des-output/planning-artifacts/03-requirements-and-kpi-catalog.md
  support_plan: _des-output/phase-support-plans/phase-03-support-plan.md
  evidence_pack: _des-output/evidence/phase-03/phase-03-evidence-pack.md
  artifact_revision: _des-output/implementation-artifacts/phase-03-artifact-revision.md
  done_gate: _des-output/implementation-artifacts/phase-03-done-gate.md
  handoff: _des-output/phase-handoffs/phase-03-to-04-handoff.md
  artifact_status: Draft | Revised | Done | Blocked
  support_plan_status: Not Started | Draft | Complete | Blocked
  evidence_status: Missing | Partial | Accepted | Waived | Blocked
  done_gate_result: Pass | Pass with risks | Fail | Blocked
  handoff_status: Ready | Ready with Risks | Not Ready | Blocked
  overall_phase_status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  approved_kpis:
    - ...
  candidate_kpis:
    - ...
  draft_kpis:
    - ...
  conflicts:
    - ...
  open_questions:
    - ...
  risks_carried_forward:
    - ...
  next_recommended_skill: des-data-product-definition
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

* Requirements and KPI Catalog is created or updated;
* Phase 03 Support Plan is created or updated;
* Phase 03 Evidence Pack is created or updated;
* Requirements and KPI Catalog is revised from evidence or evidence is explicitly waived;
* Phase 03 Artifact Revision Report is created or updated;
* Phase 03 Done Gate result is recorded;
* Phase 03 to Phase 04 Handoff is created or updated;
* workflow status is updated;
* next skill is recommended only if the handoff is Ready or Ready with Risks;
* the agent has not proceeded into Phase 04 without user approval.
