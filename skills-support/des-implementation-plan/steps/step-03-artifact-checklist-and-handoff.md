# Step 03 — Artifact, Checklist, and Handoff

## Goal

Create or update the Implementation Plan, validate it, update workflow status, and recommend implementation or the next support skill.

## Required Inputs

- Implementation plan draft from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`

## Actions

1. Create or update:

```text
.agents/des-skill/output/support/implementation-plan.md
```

2. Use the configured template.
3. Include all required sections from `customize.toml`.
4. Mark implementation readiness decision:

```text
Ready for Implementation
Ready with Risks
Blocked
Needs Clarification
Deferred
```

5. Run the configured checklist.
6. Record checklist result:

```text
Passed | Passed with risks | Blocked
```

7. If blocked, stop and ask the user how to resolve blockers.
8. If passed or passed with risks, update workflow status.
9. Recommend:

   * implementation handoff; or
   * `des-code-review` after implementation exists.

## HALT — Checklist Blocked

Stop if the checklist fails.

### Blocking examples

* Dev task breakdown is missing.
* Selected tasks are unclear.
* Dependency sequence is missing.
* Validation/test order is missing.
* Quality/security gates are missing.
* Blocked tasks are scheduled as normal work.
* Implementation plan writes code instead of planning.
* Coding-agent handoff prompt is missing.

### Options

A. Fix Implementation Plan now
B. Mark plan as Draft with blockers
C. Return to Step 02 sequencing
D. Route back to `des-dev-task-breakdown`
E. Stop workflow

### Required response

Choose A/B/C/D/E.

## Workflow Status Update

Update `des-workflow-status.md` with:

```yaml
support_des_implementation_plan:
  skill: des-implementation-plan
  artifact: .agents/des-skill/output/support/implementation-plan.md
  status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  implementation_scope: ...
  selected_stories:
    - story_id: ...
  implementation_readiness: Ready for Implementation | Ready with Risks | Blocked | Needs Clarification | Deferred
  blockers:
    - ...
  next_recommended_skill: des-code-review
```

## Completion Criteria

This step is complete when:

* Implementation Plan is created or updated;
* checklist result is recorded;
* workflow status is updated;
* implementation readiness decision is recorded;
* coding-agent handoff prompt is included;
* the agent has not written implementation code unless explicitly requested.
