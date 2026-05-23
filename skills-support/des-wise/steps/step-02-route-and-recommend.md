# Step 02 — Route and Recommend

## Goal

Determine the recommended next skill based on user intent and available workflow/learning status evidence.

---

## Required Inputs

Use:

```text
DES-WORKFLOW.md
ARTIFACTS.md
README.md
SOUL.md
knowledge/FUNDAMENTALS-MAP.md
des-workflow-status.md if available
des-learning-status.md if available
```

---

## Routing Guidelines

### If Status Unknown

If status files are missing or user context is blank, recommend:

```text
des-workflow-status-update
```

### If Learning Status Missing

If the user asks about learning progress and no learning status exists, recommend:

```text
des-learning-status-update
```

### If Artifact Exists But No Learning Notes

Recommend:

```text
des-explain-artifact
```

### If Learning Notes Exist But No Quiz

Recommend:

```text
des-artifact-quiz
```

### If Quiz Answers Exist But No Gap Report

Recommend:

```text
des-gap-teacher
```

### If High Gap Exists

Recommend:

```text
des-socratic-coach
```

or:

```text
des-explain-artifact
```

depending on whether the gap is reasoning-based or foundation-based.

---

## HALT Conditions

Stop if:

* routing depends on missing evidence;
* user asks for release or implementation route without required design/review evidence;
* user asks to skip a required status or readiness gate.

---

## Continue

After preparing the recommendation, continue to:

```text
steps/step-03-response-and-handoff.md
```
