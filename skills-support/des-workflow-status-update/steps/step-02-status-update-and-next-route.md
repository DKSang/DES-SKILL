# Step 02 — Status Update and Next Route

## Goal

Update workflow status based on evidence and determine the correct next route.

## Required Inputs

- Status scan from Step 01
- Existing workflow status if available
- Relevant artifacts
- User answers from HALT decisions

## Actions

1. Create or update project metadata.
2. Update current workflow state.
3. Update main DES phase statuses.
4. Update support skill statuses.
5. Update epic statuses.
6. Update story statuses.
7. Update sprint status.
8. Update readiness status.
9. Update implementation status.
10. Update review status.
11. Update release status.
12. Update correct-course status.
13. List open blockers.
14. List open risks.
15. List required next actions.
16. Determine routing decision.
17. Append status history entry.

## Routing Rules

Use these rules:

```text
If correct-course plan has unresolved route
  → next route = route specified by correct-course plan

If release readiness is Ready for Release / Demo / Internal Review
  → next route = des-retrospective or close/handoff

If release readiness is Blocked / Changes Required
  → next route = des-correct-course or implementation loop

If code review is Changes Requested / Blocked
  → next route = implementation loop or des-correct-course

If implementation plan is Ready but implementation not done
  → next route = implementation by agent/developer

If dev task breakdown is Done but no implementation plan
  → next route = des-implementation-plan

If story readiness has ready stories but no task breakdown
  → next route = des-dev-task-breakdown

If story readiness has ready stories but no task breakdown
  → next route = des-dev-task-breakdown

If sprint plan exists but stories not readiness-checked
  → next route = des-story-readiness-check

If story catalog exists but no sprint plan
  → next route = des-sprint-planning

If epic catalog exists but no story catalog
  → next route = des-create-story

If main DES artifacts exist but no epic catalog
  → next route = des-create-epic

If main DES phase incomplete
  → next route = next incomplete DES main phase
```

## HALT — Blocker Severity

Stop if blockers exist but severity is unclear.

### Decision needed

How should blocker severity be handled?

### Options

A. Mark severity Unknown
B. Mark as Blocker conservatively
C. Ask user to classify
D. Create investigation action
E. Continue with risk note

### Required response

Choose A/B/C/D/E.

## HALT — Next Route

Stop if next route is ambiguous.

### Decision needed

What should be the next route?

### Options

A. Next incomplete DES main phase
B. des-create-epic
C. des-create-story
D. des-sprint-planning
E. des-story-readiness-check
F. des-dev-task-breakdown
G. des-implementation-plan
H. implementation by agent/developer
I. des-code-review
J. des-release-readiness-review
K. des-retrospective
L. des-correct-course
M. close iteration
N. custom route

### Required response

Choose A/B/C/D/E/F/G/H/I/J/K/L/M/N.

## HALT — History Overwrite

Stop if status update would overwrite history.

### Decision needed

How should status history be handled?

### Options

A. Append new history entry
B. Correct previous entry with note
C. Replace status file entirely
D. Archive old status and create new status
E. Ask user

### Recommendation

Choose A.

### Required response

Choose A/B/C/D/E.

## Completion Criteria

This step is complete when:

* current workflow state is set;
* main/support statuses are updated;
* blockers/risks/actions are listed;
* next route is explicit;
* status history entry is appended;
* draft workflow status update is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
