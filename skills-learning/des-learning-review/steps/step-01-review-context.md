# Step 01 — Review Context

## Goal

Identify whether enough learning status evidence exists to review the user's learning progress.

---

## Required Reading

Read:

```text
SOUL.md
knowledge/FUNDAMENTALS-MAP.md
skills-learning/des-learning-review/customize.toml
```

---

## Inputs To Identify

Find:

```text
learning status file
learning outputs
workflow status
user review goal
target scope
desired depth
output language
```

Default values:

```text
scope = all available DES phases
depth = summary plus recommendations
language = user's language
review_goal = identify progress, gaps, and next learning action
```

---

## Scope Options

Use one of:

```text
Single Phase
Module
All 22 Phases
Current Workflow Phase
Portfolio Readiness
```

Default:

```text
All 22 Phases
```

---

## HALT Conditions

Stop if:

* `SOUL.md` is missing;
* `knowledge/FUNDAMENTALS-MAP.md` is missing;
* user wants a personalized review but `des-learning-status.md` is missing;
* evidence conflicts and cannot be safely interpreted.

If learning status is missing, recommend running:

```text
des-learning-status-update
```

---

## Output From This Step

Produce:

```md
## Learning Review Context

- Review goal:
- Scope:
- Learning status file:
- Learning outputs:
- Workflow status:
- Evidence quality:
- Output file:
- Status:
```

Then continue to:

```text
steps/step-02-evaluate-learning-progress.md
```
