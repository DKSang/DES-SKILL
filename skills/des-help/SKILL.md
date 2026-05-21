---
name: des-help
description: Use when explaining DES-SKILL workflow, routing users to the correct DES skill, or diagnosing which artifact, HALT gate, or support skill should run next.
---

# des-help

## When To Use

Use when the user asks what to do next, which DES skill applies, why a HALT occurred, how phase artifacts connect to support skills, or how to resume a DES project.

## Purpose

Explain and route DES-SKILL usage without creating artifacts or changing workflow state.

## Workflow

1. Read DES workflow status when available.
2. Identify current mode: Quick Fix, Standard Feature, Enterprise Data Product, or Correct Course.
3. Identify the earliest missing or blocked artifact.
4. Explain the relevant HALT gate in plain language.
5. Recommend the next DES skill and required input.

## Output File

This skill does not write an artifact by default. If the user asks for a summary, write it under `_des-output/implementation-artifacts/help-note.md`.

## Quality Checklist

- [ ] Recommendation names exactly one next skill unless alternatives are necessary.
- [ ] Explanation references the blocking artifact or HALT gate.
- [ ] No planning or implementation artifact is created accidentally.
- [ ] User gets a concrete next prompt or action.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Explaining the whole method when one route is needed | Slows the workflow |
| Skipping status inspection | May route to the wrong phase |
| Treating help as approval | Only explicit user decisions clear HALT gates |

## Handoff To The Next Skill

Use `using-des-skill` for full routing, a `des-*` phase skill for planning artifacts, or support skills such as `des-create-story`, `des-dev-story`, and `des-code-review` for implementation flow.
