---
name: de-implementation-planning
description: Use when converting DES-SKILL planning artifacts, change briefs, contracts, transformation designs, or CI/CD plans into a concrete implementation plan before coding.
---

# de-implementation-planning

## When To Use

Use after planning artifacts or a `change-brief.md` are approved and before implementation starts. Use when work must be converted into buildable tasks with artifact traceability, acceptance criteria, file boundaries, and verification commands.

## Purpose

Create an implementation plan and implementation story packet that are detailed enough for a developer agent to execute without inventing requirements. The plan links every task to source artifacts, defines readiness gates, and blocks work when critical inputs are missing.

## Workflow Architecture

This skill follows a BMad-style story/readiness pattern adapted to DES artifacts.

1. `step-01-discover-inputs.md` gathers artifacts, repo context, prior implementation logs, and change briefs.
2. `step-02-check-readiness.md` validates completeness, conflicts, dependencies, and missing decisions.
3. `step-03-draft-implementation-plan.md` writes tasks, acceptance criteria, test plan, file boundaries, rollback, and the `implementation-story.md` dev packet.
4. `step-04-final-validation.md` checks that the plan and implementation story are executable and ready for `de-build-from-artifacts`.

## Execution Rules

- Do not code during planning.
- Every task must trace to an artifact, user-approved change, or explicit blocker.
- Missing acceptance criteria, contracts, test data, owners, or rollback strategy are readiness blockers.
- If artifacts conflict, HALT and route back to `de-brainstorm-change` or the affected phase skill.
- Prefer smaller executable tasks over broad "implement pipeline" work items.
- Produce `implementation-story.md` from `templates/implementation-story-template.md` when build work is expected.
- Apply the readiness gate in `checklists/implementation-readiness-checklist.md`; blocked readiness prevents build handoff.

## Inputs Required

- Approved DES planning artifacts.
- Optional `_des-output/implementation-artifacts/change-brief.md`.
- Existing implementation logs, review reports, or verification reports if this is follow-up work.
- Repository structure and likely files/modules to change.
- Known validation commands from repo docs, package scripts, CI config, or existing tests.

## Output File

The output_file path is configured in `customize.toml`. Default:

`{project-root}/_des-output/implementation-artifacts/implementation-plan.md`

This skill also produces the executable implementation story packet:

`{project-root}/_des-output/implementation-artifacts/implementation-story.md`

Template:

`templates/implementation-story-template.md`

## Required Output Sections

- Planning status and readiness decision.
- Source artifact map.
- Implementation tasks with acceptance criteria.
- File ownership and non-goals.
- Test, validation, and evidence plan.
- Rollback, migration, and operational safety notes.
- Review checkpoints and handoff instructions.
- Implementation story sections: Status, Source Artifact Map, Acceptance Criteria, Tasks / Subtasks, Dev Notes, Data Engineering Guardrails, Test Plan, Dev Agent Record, File List, Review Findings, Change Log.

## Quality Checklist

- [ ] Every task has artifact traceability.
- [ ] Acceptance criteria are observable and testable.
- [ ] Readiness blockers are explicit.
- [ ] File boundaries and non-goals prevent scope creep.
- [ ] Verification commands are listed before coding starts.
- [ ] `implementation-story.md` is ready for dev and contains no unowned blockers.
- [ ] `checklists/implementation-readiness-checklist.md` passes or accepted risks are recorded.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Planning from memory | Implementation drifts from approved artifacts |
| Vague task names | Developer agents invent hidden requirements |
| Omitting tests | Review cannot prove behavior |
| Ignoring rollback | Data work can fail after deployment, not only at build time |

## Handoff To The Next Skill

Use `de-build-from-artifacts` after the plan is marked ready. If readiness fails, return to the named DES phase skill or `de-brainstorm-change`.
