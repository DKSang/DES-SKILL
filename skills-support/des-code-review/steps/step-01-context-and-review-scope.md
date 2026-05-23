# Step 01 — Context and Review Scope

## Goal

Confirm that `des-code-review` is the correct support skill, identify the implementation evidence to review, and select the target story/tasks.

## Required Inputs

Required planning artifacts:

```text
_des-output/implementation-artifacts/story-catalog.md
_des-output/implementation-artifacts/dev-task-breakdown.md
_des-output/implementation-artifacts/implementation-plan.md
```

Recommended:

```text
_des-output/implementation-artifacts/story-readiness-report.md
_des-output/implementation-artifacts/sprint-plan.md
_des-output/implementation-artifacts/epic-catalog.md
```

Implementation evidence required:

```text
changed files / code diff / PR summary / implementation summary / notebook / SQL / Python / dbt / pipeline config / test result
```

Existing output to check:

```text
_des-output/implementation-artifacts/code-review-report.md
```

## Actions

1. Read `customize.toml`.
2. Check required planning artifacts.
3. Check whether implementation evidence is available.
4. Identify reviewed story or stories:

   * from user input;
   * from implementation plan;
   * from PR/change summary;
   * from dev task breakdown.
5. Extract:

   * story acceptance criteria;
   * dev tasks;
   * task acceptance checks;
   * implementation constraints;
   * test expectations;
   * quality/contract/security expectations;
   * docs/status update requirements.
6. Identify relevant DES artifacts by implementation type.
7. Determine review scope.
8. Check existing review report if updating.
9. Decide whether to continue, draft with gaps, route back, or stop.

## Review Scope Lens

Use this lens:

| Area       | Question                                                |
| ---------- | ------------------------------------------------------- |
| Evidence   | What code/diff/files/results are being reviewed?        |
| Story      | Which story does the implementation claim to satisfy?   |
| Acceptance | Which acceptance criteria must be checked?              |
| Tasks      | Which dev tasks should be completed?                    |
| Tests      | What tests should exist and what results are available? |
| Quality    | Are quality/contract expectations implemented?          |
| Security   | Are secrets/access/sensitive fields safe?               |
| Scope      | Did the implementation exceed story scope?              |
| Docs       | Were docs/metadata/status updated?                      |
| Decision   | Can this be approved, or are changes required?          |

## HALT — Implementation Evidence Availability

Stop if there is no implementation evidence to review.

### Trigger

Use this HALT if no code, diff, changed file list, PR summary, implementation summary, notebook, SQL, pipeline config, or test output is available.

### Decision needed

How should the agent proceed?

### Options

A. Ask user to provide implementation evidence
B. Review planning artifacts only and mark `Needs more evidence`
C. Route back to `des-implementation-plan`
D. Stop workflow

### Recommendation

Choose A for real code review. Choose B only for dry-run review.

### Required response

Choose A/B/C/D.

## HALT — Review Scope

Stop if review scope is unclear.

### Decision needed

What should be reviewed?

### Options

A. One selected story implementation
B. All changed files in current PR/diff
C. One notebook or script
D. One pipeline/workflow config
E. One data model/transformation
F. Tests only
G. Documentation/status updates only
H. Full implementation package
I. Custom scope

### Recommendation

Choose A or B.

### Required response

Choose A/B/C/D/E/F/G/H/I.

## HALT — Target Story Mapping

Stop if implementation cannot be mapped to a story.

### Decision needed

How should unmapped implementation be handled?

### Options

A. Map to user-provided story ID
B. Infer mapping from changed files and implementation summary
C. Mark review as Needs more evidence
D. Route back to `des-create-story`
E. Treat as out-of-scope change
F. Stop review

### Required response

Choose A/B/C/D/E/F.

## HALT — Release/Deploy Request Detected

Stop if the user asks to deploy/release instead of review.

### Trigger

Use this HALT if user asks:

* merge and deploy;
* release to production;
* run deployment;
* promote environment;
* approve release readiness.

### Decision needed

Continue code review or route to release readiness?

### Options

A. Continue code review only
B. Complete code review, then recommend `des-release-readiness-review`
C. Stop and route to `des-release-readiness-review`
D. Stop workflow

### Recommendation

Choose B.

### Required response

Choose A/B/C/D.

## Completion Criteria

This step is complete when:

* implementation evidence is available or dry-run review is accepted;
* review scope is selected;
* target story/tasks are identified;
* acceptance/test/quality/security expectations are extracted;
* relevant DES artifacts are identified;
* existing review report is checked;
* the agent is ready to perform review.

## Next Step

After completion, load only:

```text
steps/step-02-code-review-evaluation.md
```
