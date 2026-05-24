# Step 03 - Artifact, Support Plan, Evidence, Done Gate, and Handoff

## Goal

Create or update the Business Discovery Brief, validate it through Phase 01 support work, update workflow status, and prepare a safe handoff to Phase 02.

This step completes Phase 01 only if the Done Gate passes or passes with accepted risks.

---

## Required Inputs

- Decisions and draft content from Step 02
- Decision evidence mapping from Step 02
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

1. Create or update the Business Discovery Brief using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved decisions as `Open Question`, not as assumed facts.
4. Create or update the Phase 01 Support Plan.
5. Create or update the Phase 01 Evidence Pack.
6. Record which discovery claims are confirmed, assumed, missing, waived, or accepted with risk.
7. Revise the Business Discovery Brief based on the evidence pack.
8. Create or update the Phase 01 Artifact Revision Report.
9. Run the configured Business Discovery checklist.
10. Run the Phase 01 Done Gate checklist.
11. Create or update the Phase 01 to Phase 02 Handoff.
12. Update workflow status using Workflow Status v2 sections.
13. Recommend the next skill only if the handoff is ready.

---

## Hints

- The artifact should be readable by a business stakeholder, not only a data engineer.
- Avoid implementation detail unless it is a constraint.
- Capture technology preferences as constraints, not as business value.
- Do not design physical tables, architecture, ingestion, contracts, semantic models, or CI/CD.
- The artifact should enable Phase 2 to generate business questions.
- If the user provides incomplete answers, create a Draft artifact and list open questions.
- If the phase lacks evidence but the user accepts the risk, mark the handoff as `Ready with Risks`, not simply `Ready`.
- Phase 02 must know what not to assume.

---

## Artifact Sections

The Business Discovery Brief should contain:

1. Project Intent
2. Business Problem
3. Stakeholders and Consumers
4. Target Decisions or Use Cases
5. Expected Value
6. Data Maturity Context
7. Scope
8. Non-Scope
9. Constraints
10. Assumptions
11. Risks
12. Initial Success Criteria
13. Open Questions
14. Phase 01 Evidence Summary
15. Phase 01 Handoff Notes
16. Next Skill Recommendation

---

## Phase 01 Support Plan

Create or update:

```text
_des-output/phase-support-plans/phase-01-support-plan.md
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
templates/phase/phase-01-support-plan-template.md
```

if available.

---

## Phase 01 Evidence Pack

Create or update:

```text
_des-output/evidence/phase-01/phase-01-evidence-pack.md
```

Minimum evidence categories:

| Evidence ID | Evidence Area             | Required? |
| ----------- | ------------------------- | --------: |
| E-001       | Project intent evidence   |       Yes |
| E-002       | Primary consumer evidence |       Yes |
| E-003       | Target use case evidence  |       Yes |
| E-004       | MVP scope evidence        |       Yes |
| E-005       | Success criteria evidence |       Yes |

For each evidence item, record status:

```text
Confirmed
Assumed
Missing
Waived with reason
Accepted with risk
```

Use:

```text
templates/phase/phase-01-evidence-pack-template.md
```

if available.

---

## Phase 01 Artifact Revision

Create or update:

```text
_des-output/implementation-artifacts/phase-01-artifact-revision.md
```

Record:

* what changed in the Business Discovery Brief after evidence review;
* which assumptions were confirmed;
* which assumptions remained open;
* which risks were carried forward;
* whether Phase 02 can safely use the artifact.

---

## Phase 01 Done Gate

Create or update:

```text
_des-output/implementation-artifacts/phase-01-done-gate.md
```

Gate result options:

```text
Pass
Pass with risks
Fail
Blocked
```

Phase 01 can be marked Done only if:

```text
Done Gate = Pass or Pass with risks
```

If the gate is `Pass with risks`, the risks must be included in the handoff.

---

## Phase 01 Handoff

Create or update:

```text
_des-output/phase-handoffs/phase-01-to-02-handoff.md
```

The handoff must tell Phase 02:

* final project intent;
* approved consumers or unresolved consumer risks;
* target use cases;
* expected value;
* MVP scope and non-scope;
* success criteria;
* assumptions;
* risks carried forward;
* open questions;
* do-not-assume list;
* whether Phase 02 may start.

Handoff status options:

```text
Ready
Ready with Risks
Not Ready
Blocked
```

Phase 02 should start only if:

```text
Handoff = Ready or Ready with Risks
```

---

## HALT - Checklist Blocked or Done Gate Blocked

Stop if the Business Discovery checklist or Phase 01 Done Gate fails.

### Blocking examples

* project intent is unknown;
* primary consumer is unknown and not accepted as risk;
* target decision or use case is unknown and not accepted as risk;
* expected value is unclear;
* MVP scope is undefined;
* success criteria are missing;
* artifact contains technical design before business discovery is approved;
* Phase 01 evidence pack is missing and not waived;
* Phase 01 handoff is missing;
* Phase 02 would depend on hidden assumptions.

### Options

A. Fix the Business Discovery Brief now
B. Mark Phase 01 as Draft with blockers
C. Return to Step 02 decisions
D. Accept specific risks and create `Ready with Risks` handoff
E. Stop workflow

### Required response

Choose A/B/C/D/E.

---

## Workflow Status Update

Update the status file with both legacy and Workflow Status v2 information.

Minimum YAML-style status block:

```yaml
phase_01_business_discovery:
  skill: des-business-discovery
  artifact: _des-output/planning-artifacts/01-business-discovery-brief.md
  support_plan: _des-output/phase-support-plans/phase-01-support-plan.md
  evidence_pack: _des-output/evidence/phase-01/phase-01-evidence-pack.md
  artifact_revision: _des-output/implementation-artifacts/phase-01-artifact-revision.md
  done_gate: _des-output/implementation-artifacts/phase-01-done-gate.md
  handoff: _des-output/phase-handoffs/phase-01-to-02-handoff.md
  artifact_status: Draft | Revised | Done | Blocked
  support_plan_status: Not Started | Draft | Complete | Blocked
  evidence_status: Missing | Partial | Accepted | Waived | Blocked
  done_gate_result: Pass | Pass with risks | Fail | Blocked
  handoff_status: Ready | Ready with Risks | Not Ready | Blocked
  overall_phase_status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  open_questions:
    - ...
  risks_carried_forward:
    - ...
  next_recommended_skill: des-business-questions
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

* Business Discovery Brief is created or updated;
* Phase 01 Support Plan is created or updated;
* Phase 01 Evidence Pack is created or updated;
* Business Discovery Brief is revised from evidence or evidence is explicitly waived;
* Phase 01 Artifact Revision Report is created or updated;
* Phase 01 Done Gate result is recorded;
* Phase 01 to Phase 02 Handoff is created or updated;
* workflow status is updated;
* next skill is recommended only if the handoff is Ready or Ready with Risks;
* the agent has not proceeded into Phase 2 without user approval.
