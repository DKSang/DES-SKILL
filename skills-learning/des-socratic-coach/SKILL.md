---
name: des-socratic-coach
description: Use when the user should learn a DES concept through guided questions rather than direct explanation.
---

# des-socratic-coach

## Purpose

Use this learning skill to teach Data Engineering concepts through guided Socratic questioning.

This skill helps the user reason through DES artifacts, design choices, trade-offs, and common mistakes by answering carefully sequenced questions.

The goal is to help the user build mental models, not passively receive explanations.

---

## When To Use

Use this skill when:

- the user says “hỏi tôi từng câu”;
- the user wants to understand a concept deeply;
- `des-gap-teacher` identifies a conceptual or trade-off gap;
- the user is confused between two design choices;
- the user wants to defend or explain an artifact;
- the workflow router selects `des-socratic-coach`;
- the user needs guided reasoning before continuing to the next phase.

Use this skill after:

- `des-explain-artifact`;
- `des-artifact-quiz`;
- `des-gap-teacher`;
- any DES main lifecycle artifact.

Do not use this skill when the user only wants a direct answer or artifact generation.

---

## Required Inputs

The agent should read:

```text
SOUL.md
knowledge/FUNDAMENTALS-MAP.md
```

Recommended inputs:

```text
source artifact
learning notes
quiz result
gap report
user confusion/question
```

If no concept or artifact is provided, stop and ask what concept the user wants to reason through.

---

## Output File

Create or update:

```text
.agents/des-skill/output/learning/{phase}-socratic-coaching-session.md
```

Examples:

```text
.agents/des-skill/output/learning/08-ingestion-socratic-coaching-session.md
.agents/des-skill/output/learning/10-silver-layer-socratic-coaching-session.md
.agents/des-skill/output/learning/14-data-quality-socratic-coaching-session.md
```

---

## Output Must Include

The Socratic coaching session must include:

* coaching topic;
* DES phase;
* target concept;
* starting question;
* question sequence;
* expected reasoning path;
* hints;
* misconception checks;
* final synthesis;
* recommended next action.

---

## Coaching Modes

Use one of these modes:

```text
Concept Discovery
Trade-off Reasoning
Artifact Defense
Mistake Diagnosis
Design Decision Coaching
Quiz Recovery
```

Definitions:

```text
Concept Discovery       = help user discover the core concept
Trade-off Reasoning     = compare design choices
Artifact Defense        = prepare user to explain an artifact
Mistake Diagnosis       = help user find why an answer/design is wrong
Design Decision Coaching = help user make a design decision
Quiz Recovery           = help user recover from weak quiz answers
```

---

## Socratic Rules

The agent should:

1. ask one main question at a time;
2. wait for the user's answer when running interactively;
3. avoid giving the full answer too early;
4. give hints if the user is stuck;
5. correct misconceptions gently;
6. summarize the mental model at the end;
7. connect the answer back to the artifact.

---

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Read `SOUL.md`.
4. Read `knowledge/FUNDAMENTALS-MAP.md`.
5. Identify coaching topic.
6. Identify DES phase and target concept.
7. Load only `steps/step-01-coaching-context.md`.
8. Do not load step-02 or step-03 until instructed.
9. Stop at every `HALT` point.
10. Do not reveal the final answer too early.
11. Do not ask many questions at once in interactive mode.

---

## Process Overview

This skill will:

1. Identify the coaching topic.
2. Choose a coaching mode.
3. Build a question sequence.
4. Run or draft the Socratic session.
5. Capture expected reasoning.
6. Summarize the final mental model.
7. Recommend next action.

Do not execute this overview directly. Follow the step files.

---

## Guardrails

The agent must not:

* overwhelm the user with too many questions;
* pretend the user answered if they did not;
* give the full solution before the user reasons;
* use questions unrelated to the artifact or concept map;
* shame the user for wrong answers;
* mark the user ready if major misconceptions remain.

---

## HALT Policy

Stop when:

* no coaching topic is available;
* DES phase cannot be identified and the concept requires phase context;
* `SOUL.md` is missing;
* `knowledge/FUNDAMENTALS-MAP.md` is missing;
* the user asks for interactive coaching but has not answered the previous question.

---

## Quality Checklist

* [ ] Coaching topic is identified.
* [ ] DES phase is identified where relevant.
* [ ] Target concept is identified.
* [ ] Coaching mode is selected.
* [ ] Question sequence is coherent.
* [ ] Questions progress from simple to applied.
* [ ] Hints are included.
* [ ] Misconception checks are included.
* [ ] Final synthesis is included.
* [ ] Artifact connection is included.
* [ ] Next recommended skill is included.

---

## Handoff To The Next Skill

Recommend one of:

* `des-artifact-quiz` to check understanding;
* `des-gap-teacher` to diagnose the user's answer;
* `des-explain-artifact` to revisit fundamentals;
* improve current artifact;
* continue to the next DES main lifecycle skill.
