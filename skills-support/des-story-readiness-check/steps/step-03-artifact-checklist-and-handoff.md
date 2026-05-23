# Step 03 — Artifact, Checklist, and Handoff

## Goal

Create or update the Story Readiness Report, validate it, update workflow status, and recommend the next support skill.

## Required Inputs

- Readiness evaluation draft from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`

## Actions

1. Create or update:

```text
_des-output/implementation-artifacts/story-readiness-report.md
```

2. Use the configured template.
3. Include all required sections from `customize.toml`.
4. Mark story readiness status as one of:

```text
Ready for Task Breakdown
Needs Refinement
Blocked
Deferred
Route Back to DES Phase
Route Back to Support Skill
```

5. Run the configured checklist.
6. Record checklist result:

```text
Passed | Passed with risks | Blocked
```

7. If blocked, stop and ask the user how to resolve blockers.
8. If passed or passed with risks, update workflow status.
9. Recommend next support skill:

```text
des-dev-task-breakdown
```

only for stories marked `Ready for Task Breakdown`.

## HALT — Checklist Blocked

Stop if the checklist fails.

### Blocking examples

* Story Catalog is missing.
* No story was selected.
* Readiness status is not assigned.
* Ready story has missing acceptance criteria.
* Ready story has missing test expectations.
* Ready story has unresolved dependency blocker.
* Ready story has missing quality/contract expectation.
* Ready serving/security story lacks governance constraints.
* Report recommends task breakdown for blocked stories.

### Options

A. Fix the Story Readiness Report now
B. Mark report as Draft with blockers
C. Return to Step 02 readiness evaluation
D. Route back to the relevant DES/support skill
E. Stop workflow

### Required response

Choose A/B/C/D/E.

## Workflow Status Update

Update `des-workflow-status.md` with:

```yaml
support_des_story_readiness_check:
  skill: des-story-readiness-check
  artifact: _des-output/implementation-artifacts/story-readiness-report.md
  status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  reviewed_stories:
    - story_id: ...
      readiness_status: Ready for Task Breakdown | Needs Refinement | Blocked | Deferred | Route Back to DES Phase | Route Back to Support Skill
      required_action: ...
  ready_for_task_breakdown:
    - story_id: ...
  blocked_stories:
    - story_id: ...
      blocker: ...
  next_recommended_skill: des-dev-task-breakdown
```

## Completion Criteria

This step is complete when:

* Story Readiness Report is created or updated;
* checklist result is recorded;
* workflow status is updated;
* ready stories are clearly identified;
* blocked/refinement stories have next actions;
* the agent has not created task breakdown without explicit request.
