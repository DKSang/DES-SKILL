# Step 01 - Context and Readiness

## Goal

Confirm that Business Questions is the correct next step, that Phase 01 discovery context is available, and that Phase 01 handoff is ready or explicitly accepted as risk.

This step does not mark Phase 02 Done.

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
* `_des-output/phase-handoffs/phase-01-to-02-handoff.md`;
* `_des-output/evidence/phase-01/phase-01-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-01-done-gate.md`, if available;
* current workflow status file;
* current user request;
* any existing business question list, dashboard request, report request, ML use case, API request, or analytics backlog;
* scope and non-scope from Phase 01;
* existing `02-business-question-catalog.md`, if present;
* existing `phase-02-support-plan.md`, if present;
* existing `phase-02-evidence-pack.md`, if present;
* existing `phase-02-to-03-handoff.md`, if present.

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
4. Check whether Phase 01 handoff exists.
5. Check whether Phase 01 Done Gate exists.
6. Read or summarize the Business Discovery Brief.
7. Read or summarize the Phase 01 to Phase 02 Handoff if available.
8. Extract:

   * project intent;
   * primary consumers;
   * stakeholders;
   * target decisions or use cases;
   * expected value;
   * scope and non-scope;
   * constraints;
   * open questions;
   * do-not-assume items from Phase 01.
9. Check whether an existing `02-business-question-catalog.md` exists.
10. Check whether Phase 02 support/evidence/handoff files already exist.
11. Decide whether to:

* create a new catalog;
* update an existing catalog;
* continue Phase 02 evidence/handoff work;
* route back to Phase 01;
* stop at HALT.

---

## Hints

* Do not generate business questions from technology choices alone.
* If the user asks for a dashboard, ask what decisions or questions the dashboard should answer.
* If the user asks for an ML dataset, ask what prediction, ranking, classification, or recommendation task it supports.
* If the user asks for a data pipeline, ask what downstream use case depends on it.
* If Phase 01 artifact is incomplete, proceed only as Draft or with accepted risk.
* If Phase 01 handoff is missing, do not silently continue as if Phase 01 were validated.
* Treat unanswered Phase 01 open questions as risks for Phase 02.
* Phase 02 evidence may include the Phase 01 handoff, user-approved priorities, existing question lists, report requests, or accepted risk.

---

## Question Readiness Lens

Use this lens before generating questions:

| Area | Readiness Question |
| --- | --- |
| Consumer | Who will use the answer? |
| Decision | What decision or workflow will the answer improve? |
| Value | Why does answering this matter? |
| Scope | Is this question in the approved project boundary? |
| Answerability | Is there likely data to answer it? |
| Freshness | How current does the answer need to be? |
| Granularity | At what level does the answer need to be expressed? |
| Action | What will someone do differently after seeing the answer? |
| Evidence | What supports this question or priority? |

---

## Phase 01 Handoff Readiness

Before generating Phase 02 questions, classify Phase 01 readiness:

| Item | Status | Action |
| --- | --- | --- |
| Business Discovery Brief | Found / Missing / Partial | Continue / Route back / Risk accept |
| Phase 01 Done Gate | Pass / Pass with risks / Missing / Fail / Blocked | Continue / Route back / Risk accept |
| Phase 01 Handoff | Ready / Ready with Risks / Missing / Not Ready / Blocked | Continue / Route back / Risk accept |
| Phase 01 Do-Not-Assume list | Found / Missing | Carry forward / Ask user |
| Phase 01 open questions | None / Some / Blocking | Carry forward / Resolve |

---

## HALT - Missing or Weak Phase 1 Context

Stop if Phase 01 context is missing or too weak to derive questions safely.

### Trigger

Use this HALT if:

* `01-business-discovery-brief.md` is missing;
* primary consumer is unknown;
* target decision or use case is unknown;
* project scope is unclear;
* expected value is unclear.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-business-discovery`
B. Continue Phase 02 as Draft using current context
C. User provides missing discovery context now
D. Stop workflow

### Recommendation

Choose A if primary consumer or target decision is missing.
Choose B only if the user accepts that questions may remain draft/unapproved.

### Required response

Choose A/B/C/D.

---

## HALT - Missing Phase 01 Handoff

Stop if the Business Discovery Brief exists but Phase 01 Done Gate or Phase 01 handoff is missing.

### Why this matters

Phase 02 should not rely on a Phase 01 artifact alone when using the Phase-Orchestrated Support Model.

### Options

A. Route back to `des-business-discovery` to create Done Gate and handoff
B. Continue Phase 02 as Draft with accepted risk
C. Treat current Phase 01 artifact as accepted risk and create a temporary Phase 02 support plan
D. Stop workflow

### Required response

Choose A/B/C/D.

---

## Completion Criteria

This step is complete when:

* Phase 01 context is confirmed or risk accepted;
* Phase 01 handoff is found or missing-handoff risk is accepted;
* consumers and target decisions are available or marked unresolved;
* scope and non-scope are available;
* do-not-assume items from Phase 01 are carried forward;
* existing Phase 02 files are detected if present;
* the agent knows whether to create, update, or defer the question catalog.

---

## Next Step

After completion, load only:

```text
steps/step-02-question-discovery-and-prioritization.md
```
