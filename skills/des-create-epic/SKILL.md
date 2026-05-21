---
name: des-create-epic
description: Use when splitting approved DES planning artifacts into implementation epics before creating developer stories.
---

# des-create-epic

## When To Use

Use after enough DES artifacts exist to define buildable outcomes, especially after product, source, domain, architecture, Gold, contract, DQ, orchestration, or serving artifacts are approved.

## Purpose

Convert approved DES artifacts into implementation epics with traceability, scope boundaries, acceptance outcomes, dependencies, and risk notes.

## Workflow

1. Load canonical DES artifacts and workflow status.
2. Group work into epics by deliverable value, not by technical layer alone.
3. For each epic, record source artifact references, expected outputs, dependencies, blockers, and acceptance signals.
4. HALT when an epic depends on unresolved KPI, source, contract, quality, security, or release decisions.
5. Update sprint planning inputs after epics are written.

## Output File

Write epics to `_des-output/implementation-artifacts/epics.md` unless project config overrides the path.

## Quality Checklist

- [ ] Every epic traces to approved DES artifacts.
- [ ] Epic scope can be completed and reviewed independently.
- [ ] Dependencies and blockers are explicit.
- [ ] No epic asks a dev agent to invent requirements.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| One epic per technical layer by default | Can hide user value and acceptance criteria |
| Epics without artifact references | Dev stories drift from approved planning |
| Including unresolved decisions as tasks | Pushes governance decisions into implementation |

## Handoff To The Next Skill

Use `des-sprint-planning` to refresh status, then `des-create-story` to create the next context-rich story.
