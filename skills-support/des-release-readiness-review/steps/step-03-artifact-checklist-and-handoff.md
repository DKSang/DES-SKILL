# Step 03 — Artifact, Checklist, and Handoff

## Goal

Create or update the Release Readiness Report, validate it, update workflow status, and recommend next support skill.

## Required Inputs

- Release readiness draft from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`

## Actions

1. Create or update:

```text
.agents/des-skill/output/support/release-readiness-report.md
```

2. Use the configured template.
3. Include all required sections from `customize.toml`.
4. Assign release decision:

```text
Ready for Release
Ready for Demo
Ready for Internal Review
Ready with Risks
Changes Required
Blocked
Needs More Evidence
```

5. Run the configured checklist.
6. Record checklist result:

```text
Passed | Passed with risks | Blocked
```

7. If blocked, stop and ask the user how to resolve blockers.
8. If passed or passed with risks, update workflow status.
9. Recommend next support skill:

   * `des-retrospective` after sprint/release review;
   * `des-correct-course` if major blockers require routing back;
   * `des-workflow-status-update` if only status sync is needed.

## HALT — Checklist Blocked

Stop if the checklist fails.

### Blocking examples

* Release scope missing.
* Release target missing.
* Code review status missing.
* Test evidence missing but release approved.
* Quality/contract evidence missing for P1 data output.
* Security evidence missing for serving/sensitive output.
* Rollback missing for production release.
* Blocker exists but release marked ready.

### Options

A. Fix Release Readiness Report now
B. Mark report as Draft with blockers
C. Return to Step 02 release evaluation
D. Route back to implementation/code review/testing
E. Stop workflow

### Required response

Choose A/B/C/D/E.

## Workflow Status Update

Update `des-workflow-status.md` with:

```yaml
support_des_release_readiness_review:
  skill: des-release-readiness-review
  artifact: .agents/des-skill/output/support/release-readiness-report.md
  status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  release_scope: ...
  release_target: Demo | Internal Review | Dev | Test | Staging | Production | Handoff
  release_decision: Ready for Release | Ready for Demo | Ready for Internal Review | Ready with Risks | Changes Required | Blocked | Needs More Evidence
  blockers:
    - ...
  required_actions:
    - ...
  next_recommended_skill: des-retrospective
```

## Completion Criteria

This step is complete when:

* Release Readiness Report is created or updated;
* checklist result is recorded;
* workflow status is updated;
* release decision is explicit;
* required actions are clear;
* next support skill is recommended.
