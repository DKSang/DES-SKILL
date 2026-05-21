# Step 03 — Artifact, Checklist, and Handoff

## Goal

Create or update the Retrospective Report, validate it, update workflow status, and recommend next support skill.

## Required Inputs

- Retrospective draft from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`

## Actions

1. Create or update:

```text
.agents/des-skill/output/support/retrospective-report.md
```

2. Use the configured template.
3. Include all required sections from `customize.toml`.
4. Assign retrospective outcome:

```text
Continue to next sprint
Run des-correct-course
Update workflow status
Route back to main DES phase
Close iteration
Blocked pending evidence
```

5. Run the configured checklist.
6. Record checklist result:

```text
Passed | Passed with risks | Blocked
```

7. If blocked, stop and ask the user how to resolve blockers.
8. If passed or passed with risks, update workflow status.
9. Recommend next support skill:

   * `des-correct-course` if direction/pivot is needed;
   * `des-workflow-status-update` if only status sync is needed;
   * `des-sprint-planning` if next sprint is ready.

## HALT — Checklist Blocked

Stop if the checklist fails.

### Blocking examples

* Retrospective scope missing.
* Planned vs completed review missing.
* Blockers not documented.
* Root causes not analyzed.
* Lessons learned missing.
* Action items missing.
* Next iteration recommendation missing.
* Missing evidence treated as success.

### Options

A. Fix Retrospective Report now
B. Mark report as Draft with blockers
C. Return to Step 02 retro analysis
D. Route to workflow status update
E. Stop workflow

### Required response

Choose A/B/C/D/E.

## Workflow Status Update

Update `des-workflow-status.md` with:

```yaml
support_des_retrospective:
  skill: des-retrospective
  artifact: .agents/des-skill/output/support/retrospective-report.md
  status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  retrospective_scope: ...
  outcome: Continue to next sprint | Run des-correct-course | Update workflow status | Route back to main DES phase | Close iteration | Blocked pending evidence
  completed_stories:
    - ...
  blocked_stories:
    - ...
  action_items:
    - ...
  next_recommended_skill: des-correct-course
```

## Completion Criteria

This step is complete when:

* Retrospective Report is created or updated;
* checklist result is recorded;
* workflow status is updated;
* outcome is explicit;
* action items are clear;
* next support skill is recommended.
