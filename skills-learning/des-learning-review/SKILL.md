---
name: des-learning-review
description: Use when the user wants a summary review of learning progress across DES phases, weak concepts, readiness, and next study actions.
---

# des-learning-review

## Purpose

Use this learning skill to review the user's learning progress across DES phases.

This skill summarizes learning status, identifies strengths, weak concepts, unresolved gaps, readiness by module, and recommended next study actions.

The goal is to help the user decide what to study next and whether they are ready to continue the DES lifecycle.

---

## When To Use

Use this skill when:

- the user asks “tôi học đến đâu rồi?”;
- the user asks “tổng kết tiến độ học của tôi”;
- the user asks “tôi yếu phần nào?”;
- the user asks “tôi đã sẵn sàng qua phase tiếp chưa?”;
- several learning artifacts exist;
- `des-learning-status-update` has updated the learning status;
- the workflow router selects `des-learning-review`.

Use this skill after:

- `des-learning-status-update`;
- `des-learning-path`;
- several `des-explain-artifact` or `des-artifact-quiz` runs;
- several `des-gap-teacher` reports.

Do not use this skill to create quizzes or teach one concept in depth.

---

## Required Inputs

The agent should inspect:

```text
SOUL.md
knowledge/FUNDAMENTALS-MAP.md
_des-output/learning-artifacts/des-learning-status.md
_des-output/learning-artifacts/
_des-output/implementation-artifacts/des-workflow-status.md
```

If learning status is missing, recommend running `des-learning-status-update` first.

---

## Output File

Create or update:

```text
_des-output/learning-artifacts/des-learning-review.md
```

---

## Output Must Include

The learning review must include:

* overall progress summary;
* module-by-module readiness;
* phase readiness summary;
* strengths;
* weak concepts;
* unresolved gaps;
* learning blockers;
* recommended review plan;
* recommended next learning skill;
* recommended next DES lifecycle phase.

---

## Review Modules

Use these modules:

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
5. Read `des-learning-status.md`.
6. Inspect learning outputs where needed.
7. Load only `steps/step-01-review-context.md`.
8. Do not load step-02 or step-03 until instructed.
9. Stop at every `HALT` point.
10. Do not claim readiness if status evidence is missing.
11. Do not ignore open High or Blocking gaps.

---

## Process Overview

This skill will:

1. Read learning status.
2. Group phase progress by module.
3. Identify strengths.
4. Identify weak concepts.
5. Identify blockers.
6. Assess readiness.
7. Recommend review actions.
8. Recommend next learning skill or lifecycle phase.

Do not execute this overview directly. Follow the step files.

---

## Guardrails

The agent must not:

* claim readiness without evidence;
* ignore unresolved gaps;
* confuse artifact completion with learning readiness;
* produce a generic review when personalized evidence exists;
* recommend next DES phase if Blocking learning gaps remain;
* shame the user for weak areas.

---

## HALT Policy

Stop when:

* `SOUL.md` is missing;
* `knowledge/FUNDAMENTALS-MAP.md` is missing;
* learning status file is missing and user wants a personalized review;
* evidence conflicts and readiness cannot be assessed safely.

---

## Quality Checklist

* [ ] Learning status is read.
* [ ] Module progress is summarized.
* [ ] Phase readiness is summarized.
* [ ] Strengths are identified.
* [ ] Weak concepts are identified.
* [ ] Open gaps are identified.
* [ ] Learning blockers are identified.
* [ ] Review plan is recommended.
* [ ] Next learning skill is recommended.
* [ ] Next DES lifecycle action is recommended where safe.

---

## Handoff To The Next Skill

Recommend one of:

* `des-learning-status-update` if status is missing or stale;
* `des-explain-artifact` for missing explanations;
* `des-artifact-quiz` for unchecked understanding;
* `des-gap-teacher` for unresolved quiz answers;
* `des-socratic-coach` for conceptual weakness;
* next DES main lifecycle skill if readiness is sufficient.
