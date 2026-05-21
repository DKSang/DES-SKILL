# Step 03 — Artifact, Checklist, and Handoff

## Goal

Create or update the Story Catalog, validate it, update workflow status, and recommend the next support skill.

## Required Inputs

- Story draft from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`

## Actions

1. Create or update:

```text
.agents/des-skill/output/support/story-catalog.md
```

2. Use the configured template.
3. Include all required sections from `customize.toml`.
4. Mark unresolved decisions as:

```text
Draft | Blocked | Deferred | Unknown
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
des-sprint-planning
```

## HALT — Checklist Blocked

Stop if the checklist fails.

### Blocking examples

* Story Catalog has no Epic Catalog input.
* Stories do not map to epics.
* Stories do not map to DES artifacts.
* P1 epics have no stories.
* Stories have no acceptance criteria.
* Stories have no test expectations.
* Contract/quality stories are missing.
* CI/CD/release stories are missing.
* Stories are actually tasks.
* Story catalog includes implementation code.

### Options

A. Fix the Story Catalog now
B. Mark Story Catalog as Draft with blockers
C. Return to Step 02 story generation
D. Route back to missing DES main phase
E. Stop workflow

### Required response

Choose A/B/C/D/E.

## Workflow Status Update

Update `des-workflow-status.md` with:

```yaml
support_des_create_story:
  skill: des-create-story
  artifact: .agents/des-skill/output/support/story-catalog.md
  status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  story_count: ...
  stories:
    - story_id: STORY-ING-001
      epic_id: EPIC-02
      title: ...
      priority: P1 | P2 | P3
      status: Draft | Ready for Readiness Check | Ready for Sprint Planning | Blocked | Deferred
  blockers:
    - ...
  open_questions:
    - ...
  next_recommended_skill: des-sprint-planning
```

## Completion Criteria

This step is complete when:

* Story Catalog is created or updated;
* checklist result is recorded;
* workflow status is updated;
* next support skill is recommended;
* the agent has not generated sprint plan or task breakdown without explicit request.
