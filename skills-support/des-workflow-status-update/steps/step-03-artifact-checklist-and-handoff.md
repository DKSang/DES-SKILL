# Step 03 — Artifact, Checklist, and Handoff

## Goal

Create or update the workflow status file, validate it, and give the final routing recommendation.

## Required Inputs

- Draft workflow status from Step 02
- `template_file` from `customize.toml`
- `status_file` from `customize.toml`
- `checklist_file` from `customize.toml`

## Actions

1. Create or update:

```text
.agents/des-skill/sprint-status/des-workflow-status.md
```

2. Use the configured template if creating new.
3. Preserve existing useful history.
4. Append new history entry unless user requested another safe mode.
5. Include all required sections from `customize.toml`.
6. Run the configured checklist.
7. Record checklist result:

```text
Passed | Passed with risks | Blocked
```

8. If blocked, stop and ask the user how to resolve blockers.
9. State final next route.

## HALT — Checklist Blocked

Stop if the checklist fails.

### Blocking examples

* Current workflow state missing.
* Main/support statuses missing.
* Open blocker exists but not listed.
* Next route missing.
* Status says Done without evidence.
* History overwritten without approval.
* Correct-course blocker ignored.

### Options

A. Fix workflow status now
B. Mark status update Draft with blockers
C. Return to Step 02 status routing
D. Ask user for missing evidence
E. Stop workflow

### Required response

Choose A/B/C/D/E.

## Workflow Status Update Format

The status file should include a top-level YAML-like section:

```yaml
workflow_status:
  project: ...
  domain: ...
  last_updated: ...
  current_state: Main Lifecycle Design | Epic Planning | Story Planning | Sprint Planning | Story Readiness | Task Breakdown | Implementation Planning | Implementation In Progress | Code Review | Release Readiness | Retrospective | Correct Course | Ready for Next Sprint | Closed | Blocked | Unknown
  overall_status: Not Started | Draft | In Progress | Done | Done with Risks | Blocked | Deferred | Missing | Unknown | Not Applicable
  next_route:
    skill: ...
    reason: ...
  blockers:
    - ...
  risks:
    - ...
```

## Completion Criteria

This step is complete when:

* workflow status file is created or updated;
* checklist result is recorded;
* next route is explicit;
* history is preserved or safely updated;
* final handoff is clear.
