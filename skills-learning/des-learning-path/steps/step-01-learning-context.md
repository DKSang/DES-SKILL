# Step 01 — Learning Context

## Goal

Identify the learner's goal and available DES artifacts before building a learning path.

---

## Required Reading

Read:

```text
SOUL.md
knowledge/FUNDAMENTALS-MAP.md
skills-learning/des-learning-path/customize.toml
```

---

## Inputs To Identify

Find or ask for:

1. learner goal;
2. current project context;
3. available DES artifacts;
4. available learning notes;
5. workflow status file;
6. target learning depth;
7. desired output language.

Default values:

```text
learning_goal = learn Data Engineering through DES artifacts
depth = fundamental
language = user's language
mode = project-based if artifacts exist, generic if not
```

---

## Artifact Scan

Inspect these directories if available:

```text
_des-output/planning-artifacts/
_des-output/learning-artifacts/
_des-output/implementation-artifacts/des-workflow-status.md
```

Classify each phase as:

```text
Done
Draft
Missing
Not Started
Unknown
Weak Evidence
```

Do not mark a phase Done without artifact evidence.

---

## HALT Conditions

Stop if:

* `SOUL.md` is missing;
* `knowledge/FUNDAMENTALS-MAP.md` is missing;
* the user requires a personalized path but no artifacts/status are available;
* learner goal is too ambiguous and cannot be defaulted.

---

## Output From This Step

Produce:

```md
## Learning Path Context

- Learner goal:
- Project context:
- Mode:
- Available artifacts:
- Available learning notes:
- Workflow status:
- Target depth:
- Output file:
```

Then continue to:

```text
steps/step-02-build-learning-path.md
```
