# Step 03 — Artifact, Checklist, and Handoff

## Goal

Create or update the Code Review Report, validate it, update workflow status, and recommend the next support skill.

## Required Inputs

- Code review draft from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`

## Actions

1. Create or update:

```text
_des-output/implementation-artifacts/code-review-report.md
```

2. Use the configured template.
3. Include all required sections from `customize.toml`.
4. Assign review decision:

```text
Approved
Approved with minor comments
Changes requested
Blocked
Needs more evidence
```

5. Run the configured checklist.
6. Record checklist result:

```text
Passed | Passed with risks | Blocked
```

7. If blocked, stop and ask the user how to resolve blockers.
8. If passed or passed with risks, update workflow status.
9. Recommend next support skill based on decision:

   * if data quality evidence needs deeper review: `des-data-quality-review`;
   * if code is approved and release is near: `des-release-readiness-review`;
   * if changes are required: route back to implementation.

## HALT — Checklist Blocked

Stop if the checklist fails.

### Blocking examples

* No implementation evidence.
* No target story mapping.
* Acceptance criteria not reviewed.
* Tests missing but approval recommended.
* Contract/security/quality risk hidden.
* Blocker finding exists but review says Approved.
* Required changes are vague.
* Review decision missing.

### Options

A. Fix Code Review Report now
B. Mark report as Draft with blockers
C. Return to Step 02 review evaluation
D. Route back to implementation
E. Stop workflow

### Required response

Choose A/B/C/D/E.

## Workflow Status Update

Update `des-workflow-status.md` with:

```yaml
support_des_code_review:
  skill: des-code-review
  artifact: _des-output/implementation-artifacts/code-review-report.md
  status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  reviewed_scope: ...
  reviewed_stories:
    - story_id: ...
  review_decision: Approved | Approved with minor comments | Changes requested | Blocked | Needs more evidence
  findings:
    - severity: Blocker | Major | Minor | Suggestion | Question
      summary: ...
  required_changes:
    - ...
  next_recommended_skill: des-data-quality-review
```

## Completion Criteria

This step is complete when:

* Code Review Report is created or updated;
* checklist result is recorded;
* workflow status is updated;
* findings and required changes are clear;
* merge readiness decision is recorded;
* next support step is recommended.
