---
name: des-gap-teacher
description: Use when the user wants personalized feedback on their understanding of a DES artifact, quiz answer, explanation, or Data Engineering concept.
---

# des-gap-teacher

## Purpose

Use this learning skill to diagnose the user's learning gaps from a DES artifact, quiz answer, self-explanation, design decision, or learning notes.

This skill does not merely mark answers as right or wrong. It identifies conceptual gaps, incorrect assumptions, weak reasoning, missing trade-offs, and misunderstood Data Engineering principles.

The goal is to help the user improve both the artifact and their Data Engineering thinking.

---

## When To Use

Use this skill when:

- the user answers a `des-artifact-quiz`;
- the user explains a DES artifact in their own words;
- the user asks “tôi hiểu vậy đúng không?”;
- the user asks “tôi đang thiếu gì?”;
- a DES artifact has weak or missing sections;
- the user wants feedback before moving to the next phase;
- the workflow router selects `des-gap-teacher`;
- Learning Mode requires personalized diagnosis.

Use this skill after:

- `des-explain-artifact`;
- `des-artifact-quiz`;
- any DES main lifecycle artifact;
- any user-submitted explanation or answer.

Do not use this skill to create the main artifact from scratch.

---

## Required Inputs

The agent should read:

```text
SOUL.md
knowledge/FUNDAMENTALS-MAP.md
```

The agent should inspect one or more of:

```text
_des-output/planning-artifacts/{phase-artifact}.md
_des-output/learning-artifacts/{phase}-*-learning-notes.md
_des-output/learning-artifacts/{phase}-artifact-quiz.md
```

User-provided evidence may include:

```text
quiz answers
self-explanation
design rationale
artifact draft
confusion/questions
```

If there is no user answer, artifact, or explanation to diagnose, stop and ask for evidence.

---

## Output File

Create or update:

```text
_des-output/learning-artifacts/{phase}-learning-gap-report.md
```

Examples:

```text
_des-output/learning-artifacts/08-ingestion-learning-gap-report.md
_des-output/learning-artifacts/10-silver-layer-learning-gap-report.md
_des-output/learning-artifacts/14-data-quality-learning-gap-report.md
```

---

## Output Must Include

The Learning Gap Report must include:

* source evidence reviewed;
* DES phase;
* related lifecycle concepts;
* related undercurrents;
* what the user understands correctly;
* missing concepts;
* incorrect assumptions;
* weak reasoning;
* artifact impact;
* downstream risk;
* recommended study actions;
* recommended artifact corrections;
* next learning skill.

---

## Gap Categories

Use these categories:

```text
Conceptual Gap
Artifact Gap
Decision Gap
Trade-off Gap
Terminology Gap
Lifecycle Connection Gap
Governance / Quality Gap
Evidence Gap
```

---

## Severity Levels

Use these severity levels:

```text
Low
Medium
High
Blocking
```

Definitions:

```text
Low       = minor wording or shallow explanation issue
Medium    = concept partially understood but incomplete
High      = misunderstanding can cause poor artifact/design decisions
Blocking  = misunderstanding prevents safe progress to the next DES phase
```

---

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Read `SOUL.md`.
4. Read `knowledge/FUNDAMENTALS-MAP.md`.
5. Identify evidence to diagnose.
6. Identify DES phase.
7. Load only `steps/step-01-context-and-evidence.md`.
8. Do not load step-02 or step-03 until instructed.
9. Stop at every `HALT` point.
10. Do not invent user understanding.
11. Do not claim a gap without evidence.
12. Do not be harsh; explain gaps as learning opportunities.

---

## Process Overview

This skill will:

1. Identify the evidence to diagnose.
2. Map evidence to DES phase and Data Engineering concepts.
3. Identify correct understanding.
4. Identify missing concepts.
5. Identify wrong assumptions.
6. Explain why each gap matters.
7. Recommend study actions and artifact corrections.
8. Recommend next learning step.

Do not execute this overview directly. Follow the step files.

---

## Guardrails

The agent must not:

* shame the user;
* overstate mastery or failure;
* invent gaps without evidence;
* diagnose based on missing context when a HALT is required;
* rewrite the entire artifact unless explicitly requested;
* skip downstream risk analysis;
* mark the user ready for the next phase if Blocking gaps remain.

---

## HALT Policy

Stop when:

* no evidence is available;
* DES phase cannot be identified;
* `SOUL.md` is missing;
* `knowledge/FUNDAMENTALS-MAP.md` is missing;
* the user asks for personalized diagnosis but only generic context is available;
* the evidence is too vague to assess.

---

## Quality Checklist

* [ ] Evidence is identified.
* [ ] DES phase is identified.
* [ ] Related concepts are mapped.
* [ ] Correct understanding is acknowledged.
* [ ] Missing concepts are identified.
* [ ] Incorrect assumptions are identified where present.
* [ ] Gap categories are assigned.
* [ ] Severity levels are assigned.
* [ ] Artifact impact is explained.
* [ ] Downstream risk is explained.
* [ ] Study actions are recommended.
* [ ] Artifact corrections are recommended where relevant.
* [ ] Next recommended skill is included.

---

## Handoff To The Next Skill

Recommend one of:

* `des-socratic-coach` if the user should reason through the concept interactively;
* `des-explain-artifact` if the user needs to revisit fundamentals;
* `des-artifact-quiz` if the user should retry a quiz;
* next DES main lifecycle skill if no High or Blocking gaps remain;
* improve current artifact if artifact gaps are significant.
