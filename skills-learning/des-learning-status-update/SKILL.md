---
name: des-learning-status-update
description: Use when learning notes, quizzes, gap reports, or Socratic coaching sessions have changed and the DES learning status file should be updated.
---

# des-learning-status-update

## Purpose

Use this learning skill to update the DES learning status file.

This skill tracks the user's learning progress across the 22 DES lifecycle phases and learning skills.

The goal is to provide continuity across learning sessions, so the agent can know what the user has studied, what has been explained, what has been quizzed, what gaps remain, and whether the user is ready to continue.

---

## When To Use

Use this skill when:

- `des-explain-artifact` creates or updates learning notes;
- `des-artifact-quiz` creates or updates a quiz;
- `des-gap-teacher` creates or updates a learning gap report;
- `des-socratic-coach` completes a coaching session;
- the user asks “tôi học đến đâu rồi?”;
- the user asks “phase nào còn gap?”;
- the user asks “tôi đã sẵn sàng qua phase tiếp chưa?”;
- the workflow router selects `des-learning-status-update`.

Use this skill after:

- `des-explain-artifact`;
- `des-artifact-quiz`;
- `des-gap-teacher`;
- `des-socratic-coach`;
- `des-learning-path`;
- any DES main lifecycle phase when Learning Mode is enabled.

Do not use this skill to teach concepts directly.

---

## Required Inputs

The agent should inspect:

```text
SOUL.md
knowledge/FUNDAMENTALS-MAP.md
.agents/des-skill/output/
.agents/des-skill/output/learning/
.agents/des-skill/learning-status/des-learning-status.md
.agents/des-skill/sprint-status/des-workflow-status.md
```

If existing learning status is missing, create it.

---

## Output File

Create or update:

```text
.agents/des-skill/learning-status/des-learning-status.md
```

---

## Output Must Include

The learning status file must include:

* project metadata;
* overall learning state;
* phase-by-phase learning status;
* learning artifact inventory;
* quiz status;
* gap status;
* coaching status;
* readiness status;
* open learning blockers;
* weak concepts;
* recommended next learning action;
* recommended next DES skill.

---

## Learning Status Values

Use these values:

```text
Not Started
Artifact Available
Explained
Quiz Generated
Quiz Answered
Gap Diagnosed
Coached
Ready
Ready with Caution
Needs Review
Blocked
Unknown
```

---

## Learning Readiness Values

Use these values:

```text
Ready for Next Phase
Ready with Caution
Needs Review
Blocked by Learning Gap
Unknown
```

---

## Gap Status Values

Use these values:

```text
No Known Gap
Open Low Gap
Open Medium Gap
Open High Gap
Open Blocking Gap
Resolved
Unknown
```

---

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Read `SOUL.md`.
4. Read `knowledge/FUNDAMENTALS-MAP.md`.
5. Inspect available DES artifacts.
6. Inspect available learning outputs.
7. Load only `steps/step-01-scan-learning-evidence.md`.
8. Do not load step-02 or step-03 until instructed.
9. Stop at every `HALT` point.
10. Do not mark a phase Ready without evidence.
11. Do not mark a gap Resolved without evidence.
12. Mark unknown items as `Unknown`, not `Ready`.

---

## Process Overview

This skill will:

1. Scan main DES artifacts.
2. Scan learning notes.
3. Scan artifact quizzes.
4. Scan learning gap reports.
5. Scan Socratic coaching sessions.
6. Determine learning status per phase.
7. Determine readiness per phase.
8. Update `des-learning-status.md`.
9. Recommend next learning action.

Do not execute this overview directly. Follow the step files.

---

## Guardrails

The agent must not:

* claim learning completion without evidence;
* claim quiz completion if only quiz generation exists;
* claim gaps are resolved without a follow-up quiz, coaching session, or user answer;
* overwrite prior status history silently;
* confuse artifact completion with learning readiness;
* route to next phase if Blocking gaps remain.

---

## HALT Policy

Stop when:

* `SOUL.md` is missing;
* `knowledge/FUNDAMENTALS-MAP.md` is missing;
* existing learning status conflicts with evidence;
* the user wants to mark a phase Ready without evidence;
* gap severity is ambiguous and affects readiness.

---

## Quality Checklist

* [ ] Main artifacts are scanned.
* [ ] Learning notes are scanned.
* [ ] Quizzes are scanned.
* [ ] Gap reports are scanned.
* [ ] Coaching sessions are scanned.
* [ ] Phase status is updated.
* [ ] Gap status is updated.
* [ ] Readiness status is updated.
* [ ] Unknowns are marked as Unknown.
* [ ] Open blockers are listed.
* [ ] Next recommended learning action is included.

---

## Handoff To The Next Skill

Recommend one of:

* `des-explain-artifact` if artifact exists but learning notes are missing;
* `des-artifact-quiz` if explanation exists but quiz is missing;
* `des-gap-teacher` if quiz answers or weak understanding need diagnosis;
* `des-socratic-coach` if a conceptual gap remains;
* `des-learning-review` if the user wants a summary across phases;
* next DES main lifecycle skill if readiness is sufficient.
