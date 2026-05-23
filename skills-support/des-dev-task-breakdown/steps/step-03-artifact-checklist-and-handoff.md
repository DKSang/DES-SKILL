# Step 03 — Artifact, Checklist, and Handoff

## Goal

Create or update the Dev Task Breakdown, validate it, update workflow status, and recommend the next support skill or implementation handoff.

## Required Inputs

- Dev task breakdown draft from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`

## Actions

1. Create or update:

```text
_des-output/implementation-artifacts/dev-task-breakdown.md
```

2. Use the configured template.
3. Include all required sections from `customize.toml`.
4. Mark task status as:

```text
Ready | Blocked | Deferred | Needs Clarification
```

5. Run the configured checklist.
6. Record checklist result:

```text
Passed | Passed with risks | Blocked
```

7. If blocked, stop and ask the user how to resolve blockers.
8. If passed or passed with risks, update workflow status.
9. Recommend:

```text
des-implementation-plan
```

or implementation handoff if the user wants to code.

## HALT — Checklist Blocked

Stop if the checklist fails.

### Blocking examples

* Selected story is not ready.
* No task list exists.
* Tasks do not map to story acceptance criteria.
* Tasks have no validation/check.
* Tests are missing.
* Quality/contract/security tasks are missing where relevant.
* Tasks exceed story scope.
* Task breakdown includes production code prematurely.
* Blocked task is presented as ready.

### Options

A. Fix Dev Task Breakdown now
B. Mark breakdown as Draft with blockers
C. Return to Step 02 task decomposition
D. Route back to story readiness check
E. Stop workflow

### Required response

Choose A/B/C/D/E.

## Workflow Status Update

Update `des-workflow-status.md` with:

```yaml
support_des_dev_task_breakdown:
  skill: des-dev-task-breakdown
  artifact: _des-output/implementation-artifacts/dev-task-breakdown.md
  status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  story_id: ...
  tasks:
    - task_id: ...
      name: ...
      status: Ready | Blocked | Deferred | Needs Clarification
  blockers:
    - ...
  open_questions:
    - ...
  next_recommended_skill: des-implementation-plan
```

## Completion Criteria

This step is complete when:

* Dev Task Breakdown is created or updated;
* checklist result is recorded;
* workflow status is updated;
* ready tasks are clearly identified;
* blockers have next actions;
* coding agent handoff prompt is included;
* the agent has not written implementation code unless explicitly requested.
