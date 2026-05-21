# Step 03 — Artifact, Checklist, and Handoff

## Goal

Create or update the Correct Course Plan, validate it, update workflow status, and recommend next support skill or DES phase route.

## Required Inputs

- Correct course draft from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`

## Actions

1. Create or update:

```text
.agents/des-skill/output/support/correct-course-plan.md
```

2. Use the configured template.
3. Include all required sections from `customize.toml`.
4. Assign correction outcome:

```text
Route back to DES main phase
Route back to support skill
Refine story
Replan sprint
Update implementation plan
Request evidence
Block release
Downgrade release target
Accept risk
```

5. Run the configured checklist.
6. Record checklist result:

```text
Passed | Passed with risks | Blocked
```

7. If blocked, stop and ask the user how to resolve blockers.
8. If passed or passed with risks, update workflow status.
9. Recommend next support skill:

   * `des-workflow-status-update` after correction route is approved;
   * relevant DES main phase if upstream artifact must change;
   * relevant support skill if backlog/sprint/implementation must change.

## HALT — Checklist Blocked

Stop if the checklist fails.

### Blocking examples

* Issue not stated.
* Root cause missing.
* Impacted artifact unknown.
* Correction route missing.
* Required action vague.
* Release impact ignored.
* Accepted risk has no owner.
* Plan claims correction complete without artifact update.

### Options

A. Fix Correct Course Plan now
B. Mark plan as Draft with blockers
C. Return to Step 02 correction route
D. Ask user for missing evidence
E. Stop workflow

### Required response

Choose A/B/C/D/E.

## Workflow Status Update

Update `des-workflow-status.md` with:

```yaml
support_des_correct_course:
  skill: des-correct-course
  artifact: .agents/des-skill/output/support/correct-course-plan.md
  status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  issue_summary: ...
  severity: Blocker | Major | Minor | Suggestion | Unknown
  root_cause: ...
  impacted_artifacts:
    - ...
  correction_route:
    - ...
  release_impact: Blocks release | Demo/internal only | Release with risk | No impact | Needs evidence | Remove from scope
  required_actions:
    - ...
  next_recommended_skill: des-workflow-status-update
```

## Completion Criteria

This step is complete when:

* Correct Course Plan is created or updated;
* checklist result is recorded;
* workflow status update is recommended;
* correction route is explicit;
* impacted artifacts and required actions are clear;
* next support skill or DES phase route is recommended.
