---
name: des-sprint-planning
description: Use when generating or refreshing sprint status from approved DES artifacts, epics, stories, implementation plans, or existing implementation artifacts.
---

# des-sprint-planning

## When To Use

Use after DES planning artifacts are approved and before story execution begins. Use when the project needs a resumable sprint status file that tracks epics, stories, review, verification, and retrospective states.

## Purpose

Create or refresh `_des-output/implementation-artifacts/sprint-status.yaml` from DES artifacts so implementation can proceed without guessing current work state.

## Workflow

1. Load `.agents/des-skill/output/`, `ARTIFACTS.md`, and existing `_des-output/implementation-artifacts/`.
2. Discover approved epics, story packets, implementation plans, review reports, verification reports, and retrospective notes.
3. Generate ordered status entries: epic, story, review, verification, retrospective.
4. Preserve advanced states and never downgrade `done`, `review`, or `in-progress`.
5. HALT if approved artifacts conflict with existing status.

## Output File

Write or update `_des-output/implementation-artifacts/sprint-status.yaml`.

## Quality Checklist

- [ ] Every listed epic maps to approved DES artifacts.
- [ ] Every story status is legal: backlog, ready-for-dev, in-progress, review, done, blocked.
- [ ] Existing advanced statuses are preserved.
- [ ] Blockers name the owning artifact and next skill.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Generating sprint status from memory | Breaks session continuity |
| Downgrading story status | Loses review and delivery state |
| Mixing planning artifact status with dev story status | Makes implementation handoff unclear |

## Handoff To The Next Skill

Use `des-create-epic` when epics do not exist. Use `des-create-story` when the next backlog story needs a context-rich story file.
