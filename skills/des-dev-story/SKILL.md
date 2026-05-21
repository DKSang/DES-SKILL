---
name: des-dev-story
description: Use when implementing code, configuration, data models, pipelines, tests, or docs from an approved DES-SKILL implementation plan and planning artifacts.
---

# des-dev-story

## When To Use

Use after `des-implementation-planning` has produced an approved `implementation-plan.md` and `implementation-story.md`. Use to implement tasks while preserving artifact traceability, implementation status, evidence, and scope control.

## Purpose

Execute a DES implementation story without drifting from approved artifacts. This skill mirrors BMad dev-story discipline: load the plan and story packet, update status, implement only planned tasks, update allowed sections, log deviations, run evidence commands, and prepare a review handoff.

## Workflow Architecture

1. `step-01-load-plan-and-status.md` loads the plan, checks status, and confirms editable scope.
2. `step-02-implement-task.md` executes planned tasks in order with minimal, scoped changes.
3. `step-03-run-validation.md` runs planned tests and records fresh evidence.
4. `step-04-complete-and-handoff.md` updates the implementation log and prepares review.

## Execution Rules

- Do not start without an approved implementation plan and `implementation-story.md` unless the user explicitly overrides and accepts the risk.
- Update implementation status before and after work: planned, in-progress, blocked, ready-for-review, or complete.
- Only modify files needed for plan tasks. If unrelated changes exist, work around them without reverting.
- HALT when the plan is wrong, an artifact conflict appears, tests cannot be run, or a task requires unplanned scope.
- Record deviations in the implementation log immediately; do not hide them in final prose.
- In `implementation-story.md`, only update allowed sections: Status, Tasks / Subtasks checkboxes, Dev Agent Record, File List, Review Findings status, and Change Log.
- Before marking ready-for-review or complete, apply the Definition of Done in `checklists/definition-of-done-checklist.md`.
- For behavior changes, follow RED/GREEN/REFACTOR: write or identify a failing test, make the minimal implementation pass, then refactor with tests still green.
- Do not mark complete until acceptance criteria, evidence, and Definition of Done pass.

## Inputs Required

- `_des-output/implementation-artifacts/implementation-plan.md`.
- `_des-output/implementation-artifacts/implementation-story.md`.
- Relevant planning artifacts and optional `change-brief.md`.
- Repository files, tests, CI config, and local commands.
- Existing `implementation-log.md` if continuing prior work.

## Output File

The output_file path is configured in `customize.toml`. Default:

`{project-root}/_des-output/implementation-artifacts/implementation-log.md`

This skill also updates:

`{project-root}/_des-output/implementation-artifacts/implementation-story.md`

## Required Output Sections

- Implementation status.
- Tasks completed and task-to-artifact traceability.
- Files changed.
- Decisions and deviations from plan.
- Commands run and results.
- Open risks, blockers, and review handoff.
- Updates to allowed sections in `implementation-story.md`.

## Quality Checklist

- [ ] Every change maps to an implementation-plan task.
- [ ] Every completed task is checked in `implementation-story.md`.
- [ ] Unplanned deviations are recorded with reason and impact.
- [ ] Tests from the plan are run or explicitly blocked.
- [ ] Implementation log includes changed files and evidence.
- [ ] Handoff is ready for `des-code-review`.
- [ ] Definition of Done passes or blockers are explicit.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Coding from memory | Breaks artifact traceability |
| Broad opportunistic refactor | Review scope becomes unclear |
| Continuing after a plan conflict | The implementation may solve the wrong problem |
| Claiming tests pass without fresh output | Evidence cannot support completion |
| Editing source requirements in the story packet | Build work must not rewrite approved planning context |
| Tests-after for behavior changes | It proves what the code does, not what it was required to do |

## Handoff To The Next Skill

Use `des-code-review` after status is ready-for-review. Return to `des-implementation-planning` when the plan must change.
