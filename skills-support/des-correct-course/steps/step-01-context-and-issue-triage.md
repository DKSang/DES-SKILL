# Step 01 — Context and Issue Triage

## Goal

Confirm that `des-correct-course` is the correct support skill and identify the issue, symptom, severity, and likely impacted workflow area.

## Useful Inputs

Support artifacts:

```text
.agents/des-skill/output/support/retrospective-report.md
.agents/des-skill/output/support/release-readiness-report.md
.agents/des-skill/output/support/code-review-report.md
.agents/des-skill/output/support/story-readiness-report.md
.agents/des-skill/output/support/sprint-plan.md
.agents/des-skill/output/support/story-catalog.md
.agents/des-skill/output/support/epic-catalog.md
.agents/des-skill/sprint-status/des-workflow-status.md
```

DES main artifacts may be needed depending on issue category.

Existing output to check:

```text
.agents/des-skill/output/support/correct-course-plan.md
```

## Actions

1. Read `customize.toml`.
2. Identify issue source:

   * retrospective;
   * release readiness;
   * code review;
   * story readiness;
   * sprint planning;
   * user report;
   * implementation failure;
   * missing evidence.
3. Extract symptoms:

   * blocked story;
   * failed release;
   * missing test;
   * missing quality gate;
   * missing contract;
   * dependency conflict;
   * unclear KPI;
   * unclear source;
   * governance/security issue;
   * implementation mismatch.
4. Classify issue category.
5. Estimate severity.
6. Identify impacted scope:

   * DES phase;
   * epic;
   * story;
   * sprint;
   * implementation task;
   * release candidate.
7. Check existing correct-course plan if updating.
8. Decide whether to continue, ask for evidence, route back, or stop.

## Issue Severity

Use:

```text
Blocker
Major
Minor
Suggestion
Unknown
```

Severity guidance:

```text
Blocker:
  prevents release, implementation, or correctness.

Major:
  does not fully block but creates high risk or rework.

Minor:
  local issue, can be fixed without changing direction.

Suggestion:
  improvement only.

Unknown:
  insufficient evidence.
```

## HALT — Issue Symptom

Stop if the issue symptom is unclear.

### Decision needed

What issue should be corrected?

### Options

A. Use issue from retrospective
B. Use issue from release readiness report
C. Use issue from code review report
D. Use issue from story readiness report
E. Use issue from sprint plan/blocker
F. User provides issue statement now
G. Stop workflow

### Required response

Choose A/B/C/D/E/F/G.

## HALT — Issue Severity

Stop if severity is unclear.

### Decision needed

How severe is the issue?

### Options

A. Blocker
B. Major
C. Minor
D. Suggestion
E. Unknown, investigate first
F. User assigns severity

### Required response

Choose A/B/C/D/E/F.

## HALT — Fix Request Detected

Stop if the user asks to fix implementation directly.

### Trigger

Use this HALT if user asks:

* fix code now;
* change the repo;
* update artifact directly;
* patch pipeline;
* rerun tests;
* deploy again.

### Decision needed

Continue correction planning or route elsewhere?

### Options

A. Continue correct-course planning only
B. Create correction action plan then hand off
C. Route to implementation/code fix workflow
D. Route to artifact update workflow
E. Stop workflow

### Recommendation

Choose B.

### Required response

Choose A/B/C/D/E.

## Completion Criteria

This step is complete when:

* issue symptom is identified;
* issue category is selected;
* severity is assigned or marked Unknown;
* impacted scope is roughly identified;
* existing correct-course plan is checked;
* agent is ready to analyze route.

## Next Step

After completion, load only:

```text
steps/step-02-correction-route-and-action-plan.md
```
