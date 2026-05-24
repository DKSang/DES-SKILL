# Step 03 - Artifact, Support Plan, Evidence, Done Gate, and Handoff

## Goal

Create or update the Business Question Catalog, validate it through Phase 02 support work, update workflow status, and prepare a safe handoff to Phase 03.

This step completes Phase 02 only if the Done Gate passes or passes with accepted risks.

---

## Required Inputs

- Prioritized questions from Step 02
- Question evidence mapping from Step 02
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

1. Create or update the Business Question Catalog using the configured template.
2. Include all required sections from `customize.toml`.
3. Mark unresolved questions as `Draft`, `Open`, `Deferred`, `Future`, or `Out of Scope`.
4. Create or update the Phase 02 Support Plan.
5. Create or update the Phase 02 Evidence Pack.
6. Record which questions, priorities, mappings, and answerability assumptions are confirmed, assumed, missing, waived, or accepted with risk.
7. Revise the Business Question Catalog based on the evidence pack.
8. Create or update the Phase 02 Artifact Revision Report.
9. Run the configured Business Question checklist.
10. Run the Phase 02 Done Gate checklist.
11. Create or update the Phase 02 to Phase 03 Handoff.
12. Update workflow status using Workflow Status v2 sections.
13. Recommend the next skill only if the handoff is ready.

---

## Hints

- The artifact should be understandable by business users and data engineers.
- Use business language first; add technical hints only where helpful.
- Do not turn candidate metrics into final KPI definitions.
- Do not create table designs in the question catalog.
- Do not decide data sources yet; use source hints only as clues for Phase 05.
- Prioritized questions should become the backbone of requirements, KPIs, Gold design, serving design, and release evaluation.
- If the phase lacks priority evidence but the user accepts the risk, mark the handoff as `Ready with Risks`, not simply `Ready`.
- Phase 03 must know which candidate metrics are only hints.

---

## Artifact Sections

The Business Question Catalog should contain:

1. Question Summary
2. Prioritized Business Questions
3. Question Classification
4. Consumer Mapping
5. Decision Mapping
6. Expected Answer Format
7. Candidate Metrics
8. Freshness Expectations
9. Grain Hints
10. Source Hints
11. Dependencies
12. Out of Scope Questions
13. Assumptions
14. Open Questions
15. Phase 02 Evidence Summary
16. Phase 02 Handoff Notes
17. Next Skill Recommendation

---

## Phase 02 Support Plan

Create or update:

```text
_des-output/phase-support-plans/phase-02-support-plan.md
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
templates/phase/phase-02-support-plan-template.md
```

if available.

---

## Phase 02 Evidence Pack

Create or update:

```text
_des-output/evidence/phase-02/phase-02-evidence-pack.md
```

Minimum evidence categories:

| Evidence ID | Evidence Area               | Required? |
| ----------- | --------------------------- | --------: |
| E-001       | Phase 01 handoff evidence   |       Yes |
| E-002       | Consumer mapping evidence   |       Yes |
| E-003       | Decision mapping evidence   |       Yes |
| E-004       | Question priority evidence  |       Yes |
| E-005       | Scope alignment evidence    |       Yes |
| E-006       | Answerability risk evidence |       Yes |

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
templates/phase/phase-02-evidence-pack-template.md
```

if available.

---

## Phase 02 Artifact Revision

Create or update:

```text
_des-output/implementation-artifacts/phase-02-artifact-revision.md
```

Record:

* what changed in the Business Question Catalog after evidence review;
* which question priorities were confirmed;
* which mappings were corrected;
* which questions were moved to out-of-scope/future/open;
* which risks were carried forward;
* whether Phase 03 can safely use the catalog.

---

## Phase 02 Done Gate

Create or update:

```text
_des-output/implementation-artifacts/phase-02-done-gate.md
```

Gate result options:

```text
Pass
Pass with risks
Fail
Blocked
```

Phase 02 can be marked Done only if:

```text
Done Gate = Pass or Pass with risks
```

If the gate is `Pass with risks`, the risks must be included in the handoff.

---

## Phase 02 Handoff

Create or update:

```text
_des-output/phase-handoffs/phase-02-to-03-handoff.md
```

The handoff must tell Phase 03:

* approved P1/P2 business questions;
* question priority;
* consumer mapping;
* decision/use-case mapping;
* expected answer format;
* candidate metrics, clearly marked as candidates;
* freshness expectations;
* grain hints;
* answerability risks;
* source hints, clearly marked as hints;
* out-of-scope questions;
* assumptions;
* risks carried forward;
* open questions;
* do-not-assume list;
* whether Phase 03 may start.

Handoff status options:

```text
Ready
Ready with Risks
Not Ready
Blocked
```

Phase 03 should start only if:

```text
Handoff = Ready or Ready with Risks
```

---

## HALT - Checklist Blocked or Done Gate Blocked

Stop if the Business Question checklist or Phase 02 Done Gate fails.

### Blocking examples

* no P1 questions map to a consumer;
* no P1 questions map to a target decision or use case;
* high-priority questions have no priority approval or accepted risk;
* questions conflict with Phase 01 scope;
* high-priority questions are not plausibly answerable and not flagged for Phase 05;
* catalog defines final KPI formulas or table designs prematurely;
* Phase 02 evidence pack is missing and not waived;
* Phase 02 handoff is missing;
* Phase 03 would depend on hidden assumptions.

### Options

A. Fix the catalog now
B. Mark Phase 02 as Draft with blockers
C. Return to Step 02 prioritization
D. Route back to `des-business-discovery`
E. Accept specific risks and create `Ready with Risks` handoff
F. Stop workflow

### Required response

Choose A/B/C/D/E/F.

---

## Workflow Status Update

Update the status file with both legacy and Workflow Status v2 information.

Minimum YAML-style status block:

```yaml
phase_02_business_questions:
  skill: des-business-questions
  artifact: _des-output/planning-artifacts/02-business-question-catalog.md
  support_plan: _des-output/phase-support-plans/phase-02-support-plan.md
  evidence_pack: _des-output/evidence/phase-02/phase-02-evidence-pack.md
  artifact_revision: _des-output/implementation-artifacts/phase-02-artifact-revision.md
  done_gate: _des-output/implementation-artifacts/phase-02-done-gate.md
  handoff: _des-output/phase-handoffs/phase-02-to-03-handoff.md
  artifact_status: Draft | Revised | Done | Blocked
  support_plan_status: Not Started | Draft | Complete | Blocked
  evidence_status: Missing | Partial | Accepted | Waived | Blocked
  done_gate_result: Pass | Pass with risks | Fail | Blocked
  handoff_status: Ready | Ready with Risks | Not Ready | Blocked
  overall_phase_status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  top_questions:
    - ...
  open_questions:
    - ...
  risks_carried_forward:
    - ...
  next_recommended_skill: des-requirements-and-kpis
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

* Business Question Catalog is created or updated;
* Phase 02 Support Plan is created or updated;
* Phase 02 Evidence Pack is created or updated;
* Business Question Catalog is revised from evidence or evidence is explicitly waived;
* Phase 02 Artifact Revision Report is created or updated;
* Phase 02 Done Gate result is recorded;
* Phase 02 to Phase 03 Handoff is created or updated;
* workflow status is updated;
* next skill is recommended only if the handoff is Ready or Ready with Risks;
* the agent has not proceeded into Phase 03 without user approval.
