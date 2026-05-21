---
name: des-create-story
description: Use when creating a context-rich implementation story from DES epics, artifacts, repo context, and sprint status before developer execution.
---

# des-create-story

## When To Use

Use after `des-create-epic` and `des-sprint-planning`, or when a specific DES epic/story needs a developer-ready packet.

## Purpose

Create a story file that gives `des-dev-story` enough context to implement without inventing requirements, locations, acceptance criteria, tests, or guardrails.

## Workflow

1. Load sprint status and choose the first backlog story unless the user names a story.
2. Load relevant DES artifacts, previous stories, review findings, and repo context.
3. Extract acceptance criteria, file boundaries, data engineering guardrails, test expectations, and blockers.
4. HALT when acceptance criteria, owners, source artifacts, or file boundaries are missing.
5. Write the story and update sprint status to `ready-for-dev`.

## Output File

Write story files under `_des-output/implementation-artifacts/` using a stable story key such as `1-1-ingest-weather-observations.md`.

## Quality Checklist

- [ ] Story has source artifact map.
- [ ] Acceptance criteria are observable.
- [ ] Dev notes include relevant architecture, data, quality, contract, and security guardrails.
- [ ] Tasks are small enough for `des-dev-story`.
- [ ] Sprint status is updated only after the story passes validation.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Copying epic text without repo context | Dev agents miss established patterns |
| Vague acceptance criteria | Implementation cannot be reviewed |
| Asking the dev story to resolve planning decisions | Breaks DES governance gates |

## Handoff To The Next Skill

Use `des-check-implementation-readiness` for readiness validation or `des-dev-story` when the story is ready.
