---
name: de-build-from-artifacts
description: Use when implementing code, configuration, data models, pipelines, tests, or docs from an approved DES-SKILL implementation plan and planning artifacts.
---

# de-build-from-artifacts

## When To Use

Use after `de-implementation-planning` has produced an approved `implementation-plan.md`. Use to implement tasks while preserving artifact traceability, implementation status, evidence, and scope control.

## Purpose

Execute a DES implementation plan without drifting from approved artifacts. This skill mirrors BMad dev-story discipline: load the plan, update status, implement only planned tasks, log deviations, run evidence commands, and prepare a review handoff.

## Workflow Architecture

1. `step-01-load-plan-and-status.md` loads the plan, checks status, and confirms editable scope.
2. `step-02-implement-task.md` executes planned tasks in order with minimal, scoped changes.
3. `step-03-run-validation.md` runs planned tests and records fresh evidence.
4. `step-04-complete-and-handoff.md` updates the implementation log and prepares review.

## Execution Rules

- Do not start without an approved implementation plan unless the user explicitly overrides and accepts the risk.
- Update implementation status before and after work: planned, in-progress, blocked, ready-for-review, or complete.
- Only modify files needed for plan tasks. If unrelated changes exist, work around them without reverting.
- HALT when the plan is wrong, an artifact conflict appears, tests cannot be run, or a task requires unplanned scope.
- Record deviations in the implementation log immediately; do not hide them in final prose.

## Inputs Required

- `_des-output/implementation-artifacts/implementation-plan.md`.
- Relevant planning artifacts and optional `change-brief.md`.
- Repository files, tests, CI config, and local commands.
- Existing `implementation-log.md` if continuing prior work.

## Output File

The output_file path is configured in `customize.toml`. Default:

`{project-root}/_des-output/implementation-artifacts/implementation-log.md`

## Required Output Sections

- Implementation status.
- Tasks completed and task-to-artifact traceability.
- Files changed.
- Decisions and deviations from plan.
- Commands run and results.
- Open risks, blockers, and review handoff.

## Quality Checklist

- [ ] Every change maps to an implementation-plan task.
- [ ] Unplanned deviations are recorded with reason and impact.
- [ ] Tests from the plan are run or explicitly blocked.
- [ ] Implementation log includes changed files and evidence.
- [ ] Handoff is ready for `de-review-implementation`.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Coding from memory | Breaks artifact traceability |
| Broad opportunistic refactor | Review scope becomes unclear |
| Continuing after a plan conflict | The implementation may solve the wrong problem |
| Claiming tests pass without fresh output | Evidence cannot support completion |

## Handoff To The Next Skill

Use `de-review-implementation` after status is ready-for-review. Return to `de-implementation-planning` when the plan must change.
