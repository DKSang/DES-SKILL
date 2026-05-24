# Step 01 — Context and Readiness

## Goal

Confirm that Project Evaluation is the correct final step and that upstream artifacts, Phase 21 handoff, release evidence, success criteria, test results, quality results, feedback, and usage evidence are available or explicitly marked missing.

This step does not mark Phase 22 Done.

It prepares the context needed for:

```text
initial artifact
→ support plan
→ evidence pack
→ business / readiness / release / adoption / risk evaluation
→ artifact revision
→ done gate
→ final closeout
```

---

## Required Inputs

Look for:

* all artifacts from Phase 01 to Phase 21;
* `_des-output/phase-handoffs/phase-21-to-22-handoff.md`;
* `_des-output/evidence/phase-21/phase-21-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-21-done-gate.md`, if available;
* workflow status file;
* business success criteria;
* approved business questions;
* approved KPIs;
* data product outputs;
* quality results;
* contract validation results;
* CI/CD test results;
* deployment or release evidence;
* operational run evidence;
* cost/performance metrics;
* stakeholder feedback;
* usage/adoption evidence;
* open risks and limitations;
* existing `22-project-evaluation-report.md`, if present;
* existing `phase-22-support-plan.md`, if present;
* existing `phase-22-evidence-pack.md`, if present;
* existing `phase-22-final-closeout.md`, if present.

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
   * `phase_closeout_file`.
3. Check whether required upstream artifacts exist.
4. Check whether Phase 21 handoff exists.
5. Check whether Phase 21 Done Gate exists.
6. Read or summarize all available phase outputs:

   * Phase 01 through Phase 21.
7. Read or summarize Phase 21 to Phase 22 Handoff if available.
8. Extract:

   * original business goals;
   * business questions;
   * requirements and KPIs;
   * target data products;
   * release criteria;
   * test/quality results;
   * contract and governance readiness;
   * operational readiness;
   * serving/adoption signals;
   * unresolved risks;
   * lessons learned candidates;
   * do-not-assume items from Phase 21.
9. Create an evidence availability map:

   * available;
   * missing;
   * partial;
   * waived;
   * not applicable.
10. Check whether existing `22-project-evaluation-report.md` exists.
11. Check whether Phase 22 support/evidence/closeout files already exist.
12. Decide whether to:

* create a new evaluation report;
* update an existing evaluation report;
* continue Phase 22 evidence/closeout work;
* continue as Draft/design-readiness-only evaluation;
* route back to an upstream phase;
* stop at HALT.

---

## Hints

* Evaluation should be evidence-based.
* Completing documentation does not equal delivering business value.
* If there is no release evidence, mark production readiness as Draft, Unknown, or Not Ready.
* If there is no stakeholder feedback, mark business adoption as Unknown.
* If usage data is unavailable, do not claim adoption.
* If P1 quality/security/contract gates are unresolved, do not recommend production release.
* Evaluation should produce either closure or a clear next iteration plan.
* Design readiness and production readiness are different decisions.

---

## Phase 21 Handoff Readiness

Before generating Phase 22 evaluation, classify Phase 21 readiness:

| Item                            | Status                                                   | Action                              |
| ------------------------------- | -------------------------------------------------------- | ----------------------------------- |
| CI/CD and Testing Specification | Found / Missing / Partial                                | Continue / Route back / Risk accept |
| Phase 21 Done Gate              | Pass / Pass with risks / Missing / Fail / Blocked        | Continue / Route back / Risk accept |
| Phase 21 Handoff                | Ready / Ready with Risks / Missing / Not Ready / Blocked | Continue / Route back / Risk accept |
| Test/release gate inventory     | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Release evidence expectations   | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Phase 21 Do-Not-Assume list     | Found / Missing                                          | Carry forward / Ask user            |
| Phase 21 open questions         | None / Some / Blocking                                   | Carry forward / Resolve             |

---

## Evaluation Readiness Lens

Use this lens before evaluating:

| Area         | Readiness Question                                     |
| ------------ | ------------------------------------------------------ |
| Business     | Did the project address the original business problem? |
| Questions    | Can approved business questions be answered?           |
| Data Product | Were intended outputs delivered?                       |
| Quality      | Did required quality gates pass?                       |
| Contract     | Are consumer expectations protected?                   |
| Operations   | Can workflows run, monitor, alert, and recover?        |
| Security     | Are sensitive assets governed?                         |
| Serving      | Can consumers access and use outputs?                  |
| Adoption     | Are users actually using it or accepting it?           |
| Cost         | Is cost/performance acceptable?                        |
| Release      | Is there enough evidence to release or hand off?       |

---

## HALT — Upstream Artifact Completeness

Stop if too many upstream artifacts are missing to evaluate fairly.

### Trigger

Use this HALT if:

* Phase 01–21 artifacts are missing or incomplete;
* workflow status is unavailable;
* project scope is unclear;
* evaluation cannot map outcomes back to original goals.

### Options

A. Continue evaluation using available artifacts and mark gaps
B. Route back to missing phase(s)
C. Create Draft evaluation focused on known evidence only
D. User provides missing evidence now
E. Stop workflow

### Recommendation

Choose A or C if this is a learning/portfolio project.
Choose B if this is production release review.

### Required response

Choose A/B/C/D/E.

---

## HALT — Missing Phase 21 Handoff

Stop if the CI/CD and Testing Specification exists but Phase 21 Done Gate or Phase 21 handoff is missing.

### Options

A. Route back to `des-cicd-and-testing` to create Done Gate and handoff
B. Continue Phase 22 as Draft with accepted risk
C. Treat current Phase 21 artifact as accepted risk and create a temporary Phase 22 support plan
D. Stop workflow

### Required response

Choose A/B/C/D.

---

## HALT — Evaluation Scope Required

Stop if evaluation scope is unclear.

### Options

A. MVP / first release only
B. Full project lifecycle Phase 01–21
C. Production readiness review
D. Portfolio/learning evaluation
E. Stakeholder/business value review
F. Technical architecture and implementation readiness review
G. Custom scope

### Recommendation

Choose B for full DES-SKILL closure.
Choose C if production release is the main decision.

### Required response

Choose A/B/C/D/E/F/G.

---

## HALT — Success Criteria Availability

Stop if original success criteria are missing.

### Options

A. Use Phase 01 success criteria
B. Use Phase 03 acceptance criteria and KPIs
C. Use Phase 04 data product success criteria
D. Use Phase 21 release gates
E. Define evaluation criteria now
F. Mark success evaluation as Draft/Unknown

### Required response

Choose A/B/C/D/E/F.

---

## Completion Criteria

This step is complete when:

* upstream artifacts are checked;
* Phase 21 handoff is found or missing-handoff risk is accepted;
* evaluation scope is selected;
* success criteria source is selected;
* available evidence is extracted;
* missing evidence is explicitly documented;
* existing Phase 22 files are detected if present;
* the agent knows whether to create, update, or defer the evaluation report.

## Next Step

After completion, load only:

```text
steps/step-02-evaluation-scorecard-and-lessons.md
```
