# Step 01 — Context and Retrospective Scope

## Goal

Confirm that `des-retrospective` is the correct support skill and define the retrospective scope.

## Required Inputs

Required:

```text
_des-output/implementation-artifacts/sprint-plan.md
_des-output/implementation-artifacts/story-catalog.md
```

Recommended:

```text
_des-output/implementation-artifacts/code-review-report.md
_des-output/implementation-artifacts/release-readiness-report.md
_des-output/implementation-artifacts/implementation-plan.md
_des-output/implementation-artifacts/dev-task-breakdown.md
_des-output/implementation-artifacts/story-readiness-report.md
_des-output/implementation-artifacts/des-workflow-status.md
```

Existing output to check:

```text
_des-output/implementation-artifacts/retrospective-report.md
```

## Actions

1. Read `customize.toml`.
2. Check required and recommended artifacts.
3. Extract:

   * sprint goal;
   * selected stories;
   * completed stories;
   * deferred stories;
   * blocked stories;
   * code review result;
   * release readiness decision;
   * blockers;
   * required actions;
   * test/quality/CI/CD issues;
   * stakeholder feedback if available.
4. Determine retrospective scope.
5. Determine whether this is:

   * sprint retrospective;
   * release retrospective;
   * demo retrospective;
   * implementation cycle retrospective;
   * workflow/process retrospective;
   * learning/portfolio retrospective.
6. Check existing `retrospective-report.md` if updating.
7. Decide whether to continue, draft with gaps, route back, or stop.

## Retrospective Scope Lens

Use this lens:

| Area       | Question                                           |
| ---------- | -------------------------------------------------- |
| Plan       | What did we plan to do?                            |
| Outcome    | What was completed?                                |
| Gap        | What was not completed and why?                    |
| Evidence   | What evidence supports the outcome?                |
| Blockers   | What blocked delivery?                             |
| Process    | Which support skill or DES artifact worked/failed? |
| Quality    | Were tests/quality/contracts sufficient?           |
| Governance | Did security/governance create risk or delay?      |
| Release    | Was it ready for demo/release/handoff?             |
| Next       | What should change next iteration?                 |

## HALT — Retrospective Scope

Stop if the retrospective target is unclear.

### Decision needed

What should be reviewed?

### Options

A. Current sprint
B. Release readiness cycle
C. One story implementation
D. One epic implementation increment
E. Full support workflow cycle
F. Demo/internal review cycle
G. Learning/portfolio cycle
H. Custom scope

### Recommendation

Choose A after sprint completion. Choose B after release readiness review.

### Required response

Choose A/B/C/D/E/F/G/H.

## HALT — Planned and Completed Evidence

Stop if planned vs completed work is unknown.

### Decision needed

How should missing planned/completed evidence be handled?

### Options

A. Use sprint plan and workflow status
B. Use user-provided summary
C. Continue with Draft retrospective and mark evidence gaps
D. Route to `des-workflow-status-update` first
E. Stop workflow

### Required response

Choose A/B/C/D/E.

## HALT — Fix Request Detected

Stop if user asks to fix implementation directly.

### Trigger

Use this HALT if user asks:

* fix code;
* implement missing task;
* rewrite story;
* update artifact directly;
* deploy again.

### Decision needed

Continue retrospective or route elsewhere?

### Options

A. Continue retrospective only
B. Route to `des-correct-course`
C. Route to implementation/code review
D. Create action item only
E. Stop workflow

### Recommendation

Choose A or D for retro. Choose B if process direction changed.

### Required response

Choose A/B/C/D/E.

## Completion Criteria

This step is complete when:

* retrospective scope is selected;
* planned/completed evidence source is selected;
* available evidence is extracted;
* missing evidence is documented;
* existing retrospective report is checked;
* agent is ready to analyze.

## Next Step

After completion, load only:

```text
steps/step-02-retrospective-analysis.md
```
