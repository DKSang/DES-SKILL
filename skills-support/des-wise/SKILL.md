---
name: des-wise
description: Use when the user needs help choosing the right DES skill, understanding the DES workflow, finding the next step, or routing between lifecycle, support, and learning skills.
---

# des-wise

## Purpose

Use this support skill as the DES-SKILL wise router and advisor.

`des-wise` helps the user understand where they are in the DES workflow, which skill to use next, and why that skill is appropriate.

This skill acts like a help, routing, and guidance layer across:

- 22 DES main lifecycle skills;
- DES support skills;
- DES learning skills;
- workflow status;
- learning status;
- available artifacts.

The goal is to reduce confusion and help users move through DES-SKILL intentionally.

---

## When To Use

Use this skill when the user asks:

- “tôi nên dùng skill nào?”;
- “bắt đầu từ đâu?”;
- “next step là gì?”;
- “DES-SKILL có những skill nào?”;
- “tôi đang ở phase nào?”;
- “tôi muốn học từ artifact thì dùng gì?”;
- “tôi muốn chuyển artifact thành story thì dùng gì?”;
- “tôi muốn review code thì dùng gì?”;
- “tôi bị kẹt ở phase này thì làm gì?”;
- “giống bmad-help thì DES dùng gì?”;
- “hãy hướng dẫn tôi dùng DES-SKILL”.

Use this skill before selecting another skill when the user intent is ambiguous.

Use this skill after status updates when the user needs a next route.

---

## Required Inputs

The agent should inspect where available:

```text
SOUL.md
DES-WORKFLOW.md
ARTIFACTS.md
README.md
knowledge/FUNDAMENTALS-MAP.md
_des-output/implementation-artifacts/des-workflow-status.md
_des-output/learning-artifacts/des-learning-status.md
_des-output/planning-artifacts/
_des-output/learning-artifacts/
```

If status files are missing, `des-wise` may still provide generic guidance.

---

## Output

This skill usually responds directly to the user.

Optionally create:

```text
_des-output/implementation-artifacts/des-wise-recommendation.md
```

Create the output file when:

* the user asks for a saved recommendation;
* the routing decision affects workflow;
* the recommendation should be tracked;
* the user is planning a new project.

---

## Output Must Include

The response should include:

* interpreted user intent;
* current workflow context if available;
* recommended skill;
* why this skill is recommended;
* required inputs for that skill;
* expected output;
* alternative skills if relevant;
* next prompt the user can copy;
* whether workflow status or learning status should be updated.

---

## Skill Families

`des-wise` must understand three DES skill families.

### 1. Main Lifecycle Skills

Use when the user is designing a Data Engineering project artifact.

Examples:

```text
des-business-discovery
des-business-question
des-requirements-kpi
des-data-product
des-source-assessment
des-domain-modeling
des-architecture-design
des-ingestion-design
des-bronze-layer-design
des-silver-layer-design
des-gold-layer-design
des-data-contract
des-transformation-design
des-data-quality
des-orchestration-observability
des-semantic-model
des-serving-layer
des-lineage-metadata
des-governance-security
des-cost-performance
des-cicd-testing
des-project-evaluation
```

### 2. Support Skills

Use when the user is turning design into delivery work.

Examples:

```text
des-create-epic
des-create-story
des-sprint-planning
des-story-readiness-check
des-dev-task-breakdown
des-implementation-plan
des-code-review
des-release-readiness-review
des-retrospective
des-correct-course
des-workflow-status-update
des-wise
```

### 3. Learning Skills

Use when the user wants to learn from artifacts.

Examples:

```text
des-explain-artifact
des-artifact-quiz
des-learning-path
des-gap-teacher
des-socratic-coach
des-learning-status-update
des-learning-review
```

---

## Intent Routing Rules

### New Project

If the user wants to start a new Data Engineering project, recommend:

```text
des-business-discovery
```

Then explain that DES starts with business problem and consumers before architecture or tools.

### Existing Project, Unknown Status

If the user has an existing DES project but status is unknown, recommend:

```text
des-workflow-status-update
```

If Learning Mode is involved, also recommend:

```text
des-learning-status-update
```

### User Wants to Learn

If the user wants to learn from an artifact, recommend:

```text
des-explain-artifact
```

If the user already has learning notes, recommend:

```text
des-artifact-quiz
```

If the user has quiz answers or confusion, recommend:

```text
des-gap-teacher
```

If the user wants guided questioning, recommend:

```text
des-socratic-coach
```

### User Wants a Study Roadmap

Recommend:

```text
des-learning-path
```

If learning progress already exists, recommend:

```text
des-learning-review
```

### User Wants to Convert Design to Work

If the user has completed enough lifecycle artifacts and wants implementation planning, recommend:

```text
des-create-epic
```

Then:

```text
des-create-story
des-sprint-planning
des-story-readiness-check
des-dev-task-breakdown
des-implementation-plan
```

### User Wants to Review Code

Recommend:

```text
des-code-review
```

Required inputs should include:

* story;
* implementation plan;
* changed files;
* relevant DES artifacts;
* tests or evidence.

### User Wants to Release

Recommend:

```text
des-release-readiness-review
```

Only recommend release if code review and required evidence exist.

### User Is Blocked or Direction Changed

Recommend:

```text
des-correct-course
```

Then update status:

```text
des-workflow-status-update
```

### User Asks “What Skill Next?”

Use evidence from workflow status, learning status, and artifacts.

If evidence is missing, recommend status update before guessing.

---

## Response Style

Respond like a senior Data Engineering mentor.

The response should be:

* direct;
* practical;
* not overly long;
* clear about the next skill;
* clear about why;
* clear about required inputs;
* clear about expected output.

When useful, provide a copy-paste prompt.

---

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Read `DES-WORKFLOW.md` if available.
4. Read `SOUL.md` if Learning Mode or explanation is involved.
5. Inspect workflow status if available.
6. Inspect learning status if available.
7. Load only `steps/step-01-understand-user-intent.md`.
8. Do not load step-02 or step-03 until instructed.
9. Stop at every `HALT` point.
10. Do not route to implementation or release without evidence.
11. Do not pretend status files exist if missing.

---

## Process Overview

This skill will:

1. Understand the user's intent.
2. Determine the relevant DES skill family.
3. Inspect workflow and learning status when available.
4. Recommend the next skill.
5. Explain why.
6. Provide the exact next prompt.
7. Recommend status update when needed.

Do not execute this overview directly. Follow the step files.

---

## Guardrails

The agent must not:

* invent workflow status;
* invent artifact completion;
* route to implementation without design evidence;
* route to release without review evidence;
* recommend learning readiness without learning evidence;
* overwhelm the user with all 40+ skills when one route is enough;
* choose a skill only by keyword without considering workflow context.

---

## HALT Policy

Stop when:

* the user asks to proceed but required artifact/status evidence is missing;
* multiple routes are possible and choosing one would be unsafe;
* the user asks to mark work complete without evidence;
* status files conflict and routing depends on them.

When stopping, ask for the minimum missing input or recommend a status update skill.

---

## Quality Checklist

* [ ] User intent is interpreted.
* [ ] Skill family is identified.
* [ ] Current workflow context is considered where available.
* [ ] Current learning context is considered where relevant.
* [ ] One primary skill is recommended.
* [ ] Reason is explained.
* [ ] Required inputs are listed.
* [ ] Expected output is listed.
* [ ] Alternative route is included only if useful.
* [ ] Copy-paste prompt is provided.
* [ ] Status update recommendation is included when needed.

---

## Handoff To The Next Skill

Always end with one clear next skill.

Examples:

```text
Next recommended skill: des-business-discovery
Next recommended skill: des-explain-artifact
Next recommended skill: des-workflow-status-update
Next recommended skill: des-code-review
```
