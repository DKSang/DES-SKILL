# Step 01 — Context and Status Scan

## Goal

Confirm that `des-workflow-status-update` is the correct support skill and scan available artifacts to determine current workflow status.

## Inputs To Scan

Existing status file:

```text
_des-output/implementation-artifacts/des-workflow-status.md
```

Support artifacts:

```text
_des-output/implementation-artifacts/epic-catalog.md
_des-output/implementation-artifacts/story-catalog.md
_des-output/implementation-artifacts/sprint-plan.md
_des-output/implementation-artifacts/story-readiness-report.md
_des-output/implementation-artifacts/dev-task-breakdown.md
_des-output/implementation-artifacts/implementation-plan.md
_des-output/implementation-artifacts/code-review-report.md
_des-output/implementation-artifacts/release-readiness-report.md
_des-output/implementation-artifacts/retrospective-report.md
_des-output/implementation-artifacts/correct-course-plan.md
```

Main DES artifacts:

```text
_des-output/planning-artifacts/01-business-discovery-brief.md
...
_des-output/planning-artifacts/22-project-evaluation-report.md
```

## Actions

1. Read `customize.toml`.
2. Check if existing status file exists.
3. Scan main DES phase outputs.
4. Scan support skill outputs.
5. Extract latest known status from each artifact where possible.
6. Identify current workflow state.
7. Identify open blockers.
8. Identify open risks.
9. Identify required next actions.
10. Check whether user requested a specific status update or full status refresh.
11. Decide whether to continue, draft, ask for clarification, or stop.

## Status Scan Rules

Use this logic:

```text
Artifact exists with Done/checklist pass evidence
  → Done

Artifact exists but has Draft status
  → Draft

Artifact exists with unresolved blockers
  → Blocked

Artifact expected but absent
  → Missing

Artifact not expected for current route
  → Not Applicable

Artifact exists but no status evidence
  → Unknown or Draft

User claims Done but artifact missing
  → HALT
```

## HALT — Status Scope

Stop if it is unclear what status should be updated.

### Decision needed

What status scope should be updated?

### Options

A. Full workflow status
B. Main DES phase status only
C. Support skill status only
D. Sprint/story status only
E. Release/correct-course status only
F. One specific item only
G. Custom scope

### Recommendation

Choose A after major workflow events. Choose F for small updates.

### Required response

Choose A/B/C/D/E/F/G.

## HALT — Conflicting Status Evidence

Stop if artifact evidence conflicts with existing status.

### Trigger examples

* status says Done but artifact says Draft;
* release says Ready but code review says Blocked;
* sprint says selected story ready but readiness report says Blocked;
* correct-course plan says route back but status says continue implementation.

### Decision needed

How should conflict be resolved?

### Options

A. Trust latest artifact timestamp/content
B. Trust existing workflow status
C. Mark conflict and set status to Unknown
D. Mark affected item Blocked until resolved
E. Ask user to choose source of truth
F. Keep both with conflict note

### Recommendation

Choose C or D for safety.

### Required response

Choose A/B/C/D/E/F.

## HALT — Missing Artifact but Done Requested

Stop if user asks to mark Done without evidence.

### Decision needed

How should this be handled?

### Options

A. Mark as Done only if user explicitly confirms evidence exists outside repo
B. Mark as Done with Risks
C. Mark as Unknown
D. Mark as Draft
E. Mark as Missing
F. Stop until artifact exists

### Recommendation

Choose C or E unless user provides evidence.

### Required response

Choose A/B/C/D/E/F.

## Completion Criteria

This step is complete when:

* status scope is selected;
* available artifacts are scanned;
* existing workflow status is checked;
* conflicts are identified;
* blockers and risks are identified;
* agent is ready to update status and route.

## Next Step

After completion, load only:

```text
steps/step-02-status-update-and-next-route.md
```
