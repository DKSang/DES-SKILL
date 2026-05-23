---
name: des-artifact-quiz
description: Use when the user wants to test understanding of a DES artifact, generate concept-check questions, or turn learning notes into a quiz.
---

# des-artifact-quiz

## Purpose

Use this learning skill to generate a quiz from a DES artifact and its learning notes.

This skill helps the user check whether they understand the artifact purpose, related Data Engineering concepts, key decisions, trade-offs, upstream dependencies, downstream impacts, and common mistakes.

The goal is not memorization. The goal is applied understanding.

---

## When To Use

Use this skill when:

- the user wants to test understanding of a DES artifact;
- the user asks for quiz questions after reading learning notes;
- `des-explain-artifact` has produced learning notes;
- the user wants to prepare for review, interview, report defense, or project explanation;
- the workflow router selects `des-artifact-quiz`;
- Learning Mode requires a concept check.

Use this skill after:

- any DES main lifecycle artifact;
- `des-explain-artifact`.

Do not use this skill to create or modify the source artifact.

---

## Required Inputs

The agent should look for:

```text
SOUL.md
knowledge/FUNDAMENTALS-MAP.md
```

Recommended input:

```text
_des-output/learning-artifacts/{phase}-*-learning-notes.md
```

The agent may also inspect the source artifact:

```text
_des-output/planning-artifacts/{phase-artifact}.md
```

If neither the learning notes nor the source artifact is available, stop and ask the user which artifact or phase to quiz.

---

## Output File

Create or update:

```text
_des-output/learning-artifacts/{phase}-artifact-quiz.md
```

Examples:

```text
_des-output/learning-artifacts/08-ingestion-artifact-quiz.md
_des-output/learning-artifacts/10-silver-layer-artifact-quiz.md
_des-output/learning-artifacts/14-data-quality-artifact-quiz.md
```

---

## Output Must Include

The quiz must include:

* quiz metadata;
* source artifact;
* DES phase;
* learning goal;
* concept-check questions;
* artifact-understanding questions;
* applied scenario questions;
* trade-off questions;
* common-mistake questions;
* answer key;
* scoring guide;
* recommended next action.

---

## Quiz Types

Use these categories:

### 1. Concept Check

Tests whether the user understands the fundamental concept.

Example:

```text
What is the difference between ingestion and transformation?
```

### 2. Artifact Understanding

Tests whether the user understands why the artifact exists.

Example:

```text
Which section of the ingestion specification controls replay and recovery?
```

### 3. Applied Scenario

Tests whether the user can apply the concept to a real project.

Example:

```text
An API changes field names without notice. Which part of the ingestion design should handle this risk?
```

### 4. Trade-off Question

Tests whether the user understands design choices.

Example:

```text
When would batch ingestion be preferable to streaming ingestion?
```

### 5. Common Mistake Question

Tests whether the user can detect bad practice.

Example:

```text
Why is it risky to drop source metadata in the Bronze layer?
```

---

## Difficulty Levels

Use these levels:

```text
Beginner
Intermediate
Applied
Challenge
```

Default mix:

```text
Beginner: 30%
Intermediate: 40%
Applied: 20%
Challenge: 10%
```

---

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Read `SOUL.md`.
4. Read `knowledge/FUNDAMENTALS-MAP.md`.
5. Identify source artifact or learning notes.
6. Identify DES phase.
7. Load only `steps/step-01-context-and-scope.md`.
8. Do not load step-02 or step-03 until instructed.
9. Stop at every `HALT` point.
10. Do not create questions unrelated to the artifact or concept map.
11. Do not use the quiz to introduce unsupported concepts.

---

## Process Overview

This skill will:

1. Identify the artifact or learning notes.
2. Identify the DES phase.
3. Map the phase to Data Engineering concepts.
4. Generate quiz questions.
5. Generate answer key and explanations.
6. Add scoring guidance.
7. Recommend next action.

Do not execute this overview directly. Follow the step files.

---

## Guardrails

The agent must not:

* create trivia-only questions;
* ask questions that can be answered by memorizing headings only;
* invent project details not present in the artifact;
* test concepts not mapped to the phase;
* claim the user has mastered the topic based only on quiz generation;
* modify the source artifact.

---

## HALT Policy

Stop when:

* no artifact, phase, or learning notes can be identified;
* `SOUL.md` is missing;
* `knowledge/FUNDAMENTALS-MAP.md` is missing;
* the artifact is too incomplete to generate meaningful questions;
* the user asks for answer evaluation but has not provided answers.

---

## Quality Checklist

* [ ] Source artifact or learning notes are identified.
* [ ] DES phase is identified.
* [ ] Related concepts are mapped.
* [ ] Quiz contains concept-check questions.
* [ ] Quiz contains artifact-understanding questions.
* [ ] Quiz contains applied scenario questions.
* [ ] Quiz contains trade-off questions.
* [ ] Quiz contains common-mistake questions.
* [ ] Answer key is included.
* [ ] Answer explanations are included.
* [ ] Scoring guide is included.
* [ ] Recommended next action is included.
* [ ] Questions are not trivia-only.

---

## Handoff To The Next Skill

Recommend one of:

* `des-gap-teacher` when available;
* `des-explain-artifact` if understanding appears weak;
* next DES main lifecycle skill;
* `des-learning-path` if the user wants a broader study plan.
