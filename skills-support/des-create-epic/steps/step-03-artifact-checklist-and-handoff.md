# Step 03 — Artifact, Checklist, and Handoff

## Goal

Create or update the Epic Catalog, validate it, update workflow status, and recommend the next support skill.

## Required Inputs

- Epic draft from Step 02
- `template_file` from `customize.toml`
- `output_file` from `customize.toml`
- `checklist_file` from `customize.toml`
- `status_file` from `customize.toml`

## Actions

1. Create or update:

```text
.agents/des-skill/output/support/epic-catalog.md
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
des-create-stories
```

## HALT — Checklist Blocked

Stop if the checklist fails.

### Blocking examples

* Epic catalog has no implementation scope.
* Epics do not map to DES artifacts.
* Epics have no acceptance criteria.
* P1 data product has no epic.
* Source ingestion has no epic.
* Gold/serving output has no epic.
* Data quality/contract work is missing.
* CI/CD and testing work is missing.
* Epic granularity is unusable.
* User asked for stories but epic catalog pretends to be story catalog.

### Options

A. Fix the Epic Catalog now
B. Mark Epic Catalog as Draft with blockers
C. Return to Step 02 epic generation
D. Route back to missing DES main phase
E. Stop workflow

### Required response

Choose A/B/C/D/E.

## Workflow Status Update

Update `des-workflow-status.md` with:

```yaml
support_des_create_epic:
  skill: des-create-epic
  artifact: .agents/des-skill/output/support/epic-catalog.md
  status: Done | Draft | Blocked
  checklist_result: Passed | Passed with risks | Blocked
  epic_count: ...
  epics:
    - epic_id: EPIC-01
      name: ...
      priority: P1 | P2 | P3
      release_group: Foundation | MVP | P2 | Later | Optional
      status: Draft | Ready for Stories | Blocked | Deferred
  blockers:
    - ...
  open_questions:
    - ...
  next_recommended_skill: des-create-stories
```

## Completion Criteria

This step is complete when:

* Epic Catalog is created or updated;
* checklist result is recorded;
* workflow status is updated;
* next support skill is recommended;
* the agent has not generated detailed stories without explicit user request.
