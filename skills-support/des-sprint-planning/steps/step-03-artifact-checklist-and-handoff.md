# Step 03 — Artifact, Checklist, and Handoff

## Goal

Create or update the Sprint Plan, validate it, update workflow status, and recommend the next support skill.

## Required Inputs

- Sprint planning draft from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`

## Actions

1. Create or update:

```text
_des-output/implementation-artifacts/sprint-plan.md
```

2. Use the configured template.
3. Include all required sections from `customize.toml`.
4. Assign sprint status:

```text
Draft
Ready for Story Readiness Check
Ready for Implementation Planning
Blocked
Deferred
```

5. Run the configured checklist.
6. Record checklist result:

```text
Passed | Passed with risks | Blocked
```

7. If blocked, stop and ask the user how to resolve blockers.
8. If passed or passed with risks, update workflow status.
9. Recommend the next support skill:

```text
des-story-readiness-check
```

## HALT — Checklist Blocked

Stop if the checklist fails.

### Blocking examples

* Sprint plan has no sprint goal.
* Sprint plan has no selected stories.
* Selected stories have unresolved dependency conflicts.
* Blocked stories are committed without risk handling.
* Sprint capacity is not addressed.
* Definition of Ready is missing.
* Definition of Done is missing.
* Readiness check plan is missing.
* Story Catalog is missing.
* Sprint plan includes task breakdown or code.

### Options

A. Fix the Sprint Plan now
B. Mark Sprint Plan as Draft with blockers
C. Return to Step 02 sprint selection
D. Route back to `des-create-story`
E. Stop workflow

### Required response

Choose A/B/C/D/E.

## Workflow Status Update

Update `des-workflow-status.md` with:

```yaml
support_des_sprint_planning:
  skill: des-sprint-planning
  artifact: _des-output/implementation-artifacts/sprint-plan.md
  status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  sprint_goal: ...
  sprint_status: Draft | Ready for Story Readiness Check | Ready for Implementation Planning | Blocked | Deferred
  selected_stories:
    - story_id: ...
      title: ...
      sprint_status: Selected | Needs readiness check | Stretch | Blocked
  stretch_stories:
    - story_id: ...
      reason: ...
  blocked_stories:
    - story_id: ...
      blocker: ...
  deferred_stories:
    - story_id: ...
      reason: ...
  next_recommended_skill: des-story-readiness-check
```

## Completion Criteria

This step is complete when:

* Sprint Plan is created or updated;
* checklist result is recorded;
* workflow status is updated;
* selected, stretch, deferred, and blocked stories are clear;
* next support skill is recommended;
* the agent has not created task breakdown or code.
