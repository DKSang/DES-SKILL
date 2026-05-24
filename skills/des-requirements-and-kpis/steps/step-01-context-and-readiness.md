# Step 01 - Context and Readiness

## Goal

Confirm that Requirements and KPIs is the correct next step, that approved business questions are available, and that Phase 02 handoff is ready or explicitly accepted as risk.

This step does not mark Phase 03 Done.

It prepares the context needed for:

```text
initial artifact
→ support plan
→ evidence pack
→ artifact revision
→ done gate
→ handoff
```

---

## Required Inputs

Look for:

* `_des-output/planning-artifacts/01-business-discovery-brief.md`;
* `_des-output/planning-artifacts/02-business-question-catalog.md`;
* `_des-output/phase-handoffs/phase-02-to-03-handoff.md`;
* `_des-output/evidence/phase-02/phase-02-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-02-done-gate.md`, if available;
* workflow status file;
* approved or draft P1/P2 business questions;
* known consumers;
* target decisions or use cases;
* project scope and non-scope;
* initial success criteria;
* existing metric/KPI notes, if any;
* existing `03-requirements-and-kpi-catalog.md`, if present;
* existing `phase-03-support-plan.md`, if present;
* existing `phase-03-evidence-pack.md`, if present;
* existing `phase-03-to-04-handoff.md`, if present.

---

## Actions

1. Read `customize.toml`.
2. Identify these configured paths:

   * `output_file`;
   * `template_file`;
   * `checklist_file`;
   * `status_file`;
   * `phase_support_plan_file`;
   * `phase_evidence_pack_file`;
   * `phase_artifact_revision_file`;
   * `phase_done_gate_file`;
   * `phase_handoff_file`.
3. Check whether required upstream artifacts exist.
4. Check whether Phase 02 handoff exists.
5. Check whether Phase 02 Done Gate exists.
6. Read or summarize the Business Discovery Brief.
7. Read or summarize the Business Question Catalog.
8. Read or summarize the Phase 02 to Phase 03 Handoff if available.
9. Extract:

   * P1/P2 business questions;
   * consumers;
   * decision/use-case mapping;
   * candidate metrics;
   * freshness hints;
   * grain hints;
   * source hints;
   * answerability risks;
   * constraints;
   * open questions;
   * do-not-assume items from Phase 02.
10. Check whether an existing `03-requirements-and-kpi-catalog.md` exists.
11. Check whether Phase 03 support/evidence/handoff files already exist.
12. Decide whether to:

* create a new catalog;
* update an existing catalog;
* continue Phase 03 evidence/handoff work;
* route back to Phase 02;
* stop at HALT.

---

## Hints

* Requirements should trace back to business questions.
* A metric is not ready if its formula, grain, owner, or business meaning is unclear.
* “Real-time”, “daily”, “accurate”, “trusted”, and “fast” are not sufficient requirements unless made measurable.
* Do not turn every candidate metric from Phase 02 into a KPI.
* If Phase 02 questions are not prioritized, stop before deriving requirements.
* If Phase 02 handoff is missing, do not silently continue as if Phase 02 were validated.
* If a KPI already exists in stakeholder language, preserve the name but clarify the definition.
* Phase 03 evidence may include Phase 02 handoff, user-approved formulas, stakeholder KPI notes, explicit HALT answers, or accepted risk.
* Treat unanswered Phase 02 open questions as risks for Phase 03.

---

## Requirements Readiness Lens

Use this lens before defining requirements:

| Area              | Readiness Question                                     |
| ----------------- | ------------------------------------------------------ |
| Business question | Which approved question does this requirement support? |
| Consumer          | Who needs this requirement?                            |
| Behavior          | What must the data system do?                          |
| Measurement       | How will success be measured?                          |
| Grain             | At what level is the metric or requirement evaluated?  |
| Freshness         | How current must the data be?                          |
| Quality           | What quality failure would make the output unusable?   |
| Acceptance        | What evidence proves this requirement is satisfied?    |
| Owner             | Who can approve or reject this requirement?            |
| Evidence          | What supports this requirement or metric definition?   |

---

## Phase 02 Handoff Readiness

Before generating Phase 03 requirements and KPIs, classify Phase 02 readiness:

| Item                        | Status                                                   | Action                              |
| --------------------------- | -------------------------------------------------------- | ----------------------------------- |
| Business Question Catalog   | Found / Missing / Partial                                | Continue / Route back / Risk accept |
| Phase 02 Done Gate          | Pass / Pass with risks / Missing / Fail / Blocked        | Continue / Route back / Risk accept |
| Phase 02 Handoff            | Ready / Ready with Risks / Missing / Not Ready / Blocked | Continue / Route back / Risk accept |
| Approved P1/P2 questions    | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Phase 02 Do-Not-Assume list | Found / Missing                                          | Carry forward / Ask user            |
| Phase 02 open questions     | None / Some / Blocking                                   | Carry forward / Resolve             |

---

## HALT - Missing or Weak Business Questions

Stop if Phase 02 context is missing or too weak to derive requirements safely.

### Trigger

Use this HALT if:

* `02-business-question-catalog.md` is missing;
* P1 questions are not approved or prioritized;
* questions do not map to consumers;
* questions do not map to target decisions or use cases;
* scope conflicts from Phase 02 are unresolved.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-business-questions`
B. Continue Phase 03 as Draft using current context
C. User provides missing question priorities now
D. Stop workflow

### Recommendation

Choose A if no P1 questions are approved.
Choose B only if the user accepts that requirements and KPIs remain Draft.

### Required response

Choose A/B/C/D.

---

## HALT - Missing Phase 02 Handoff

Stop if the Business Question Catalog exists but Phase 02 Done Gate or Phase 02 handoff is missing.

### Why this matters

Phase 03 should not rely on a Phase 02 artifact alone when using the Phase-Orchestrated Support Model.

### Options

A. Route back to `des-business-questions` to create Done Gate and handoff
B. Continue Phase 03 as Draft with accepted risk
C. Treat current Phase 02 artifact as accepted risk and create a temporary Phase 03 support plan
D. Stop workflow

### Required response

Choose A/B/C/D.

---

## Completion Criteria

This step is complete when:

* upstream artifacts are available or Draft continuation is approved;
* Phase 02 handoff is found or missing-handoff risk is accepted;
* P1/P2 questions are identified;
* candidate metrics and freshness/grain hints are extracted;
* do-not-assume items from Phase 02 are carried forward;
* unresolved upstream gaps are documented;
* existing Phase 03 files are detected if present;
* the agent knows whether to create, update, or defer the catalog.

---

## Next Step

After completion, load only:

```text
steps/step-02-requirements-and-kpi-definition.md
```
