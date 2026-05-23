---
name: des-learning-path
description: Use when the user wants a structured learning path across DES phases, wants to study Data Engineering through DES artifacts, or wants a personalized plan based on completed artifacts.
---

# des-learning-path

## Purpose

Use this learning skill to create a structured Data Engineering learning path based on the 22 DES lifecycle phases and available project artifacts.

This skill helps the user learn Data Engineering through project-based artifacts rather than isolated theory.

The learning path should connect DES phases to Data Engineering lifecycle concepts, undercurrents, practical outputs, exercises, quizzes, and recommended next actions.

---

## When To Use

Use this skill when:

- the user wants to learn Data Engineering through DES-SKILL;
- the user asks for a study plan;
- the user wants to understand all 22 phases;
- the user wants a roadmap from beginner to implementation-ready;
- multiple DES artifacts already exist;
- the workflow router selects `des-learning-path`;
- the user wants to prepare for portfolio, interview, report defense, or project execution.

Use this skill after:

- Batch 1 learning foundation exists;
- `knowledge/FUNDAMENTALS-MAP.md` exists;
- optionally after several artifacts have been generated.

Do not use this skill to replace the 22 main DES lifecycle skills.

---

## Required Inputs

The agent should read:

```text
SOUL.md
knowledge/FUNDAMENTALS-MAP.md
```

Optional inputs:

```text
_des-output/planning-artifacts/
_des-output/learning-artifacts/
_des-output/implementation-artifacts/des-workflow-status.md
```

If no project artifacts exist, create a generic DES learning path.

If project artifacts exist, create a personalized learning path based on completed, draft, missing, or weak phases.

---

## Output File

Create or update:

```text
_des-output/learning-artifacts/des-learning-path.md
```

---

## Output Must Include

The learning path must include:

* learner goal;
* current artifact status if available;
* recommended learning modules;
* phase-by-phase concept mapping;
* learning objectives;
* artifact exercises;
* quiz checkpoints;
* estimated learning order;
* weak areas to revisit;
* next recommended DES skill.

---

## Learning Modules

Use this default module structure:

```text
Module 1 — Foundation and Business Context
Module 2 — Data Engineering Lifecycle Core
Module 3 — Modeling, Contracts, and Quality
Module 4 — Operations, Governance, and Reliability
Module 5 — Delivery, Review, and Portfolio Readiness
```

---

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Read `SOUL.md`.
4. Read `knowledge/FUNDAMENTALS-MAP.md`.
5. Inspect available DES artifacts if present.
6. Load only `steps/step-01-learning-context.md`.
7. Do not load step-02 or step-03 until instructed.
8. Stop at every `HALT` point.
9. Do not invent completed artifact status.
10. Mark missing artifacts as Missing or Not Started.

---

## Process Overview

This skill will:

1. Identify learner goal.
2. Inspect available artifact status.
3. Group 22 phases into learning modules.
4. Map each phase to concepts and exercises.
5. Recommend quiz checkpoints.
6. Create a learning path.
7. Recommend next learning skill or DES phase.

Do not execute this overview directly. Follow the step files.

---

## Guardrails

The agent must not:

* claim the user has completed phases without artifact evidence;
* create a generic course detached from DES artifacts;
* skip practical artifact exercises;
* overload the path with too much theory;
* use source material as copied content;
* ignore the user’s current project context.

---

## HALT Policy

Stop when:

* `SOUL.md` is missing;
* `knowledge/FUNDAMENTALS-MAP.md` is missing;
* the user asks for a personalized plan but project artifacts are inaccessible and the user does not allow a generic plan;
* learning goal is ambiguous and cannot be safely defaulted.

---

## Quality Checklist

* [ ] Learner goal is identified.
* [ ] Available artifact status is considered.
* [ ] All 22 DES phases are included or intentionally scoped.
* [ ] Phases are grouped into learning modules.
* [ ] Each module has learning objectives.
* [ ] Each module has artifact exercises.
* [ ] Quiz checkpoints are included.
* [ ] Weak areas are identified where evidence exists.
* [ ] Next recommended skill is included.
* [ ] The path is practical and project-based.

---

## Handoff To The Next Skill

Recommend one of:

* `des-explain-artifact`;
* `des-artifact-quiz`;
* next DES main lifecycle skill;
* `des-workflow-status-update` if learning status tracking is enabled.
