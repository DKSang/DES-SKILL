# Step 01 — Context and Scope

## Goal

Identify which DES artifact or learning notes should be converted into a quiz.

---

## Required Reading

Read:

```text
SOUL.md
knowledge/FUNDAMENTALS-MAP.md
skills-learning/des-artifact-quiz/customize.toml
```

---

## Inputs To Identify

Find or ask for:

1. source artifact path;
2. learning notes path;
3. DES phase number;
4. quiz purpose;
5. target difficulty;
6. number of questions;
7. language.

Default values:

```text
language = user's language
question_count = 12
difficulty = mixed
purpose = check understanding
```

---

## Artifact Detection Rules

If the user provides learning notes, use them as the primary input.

If the user provides a source artifact, use it directly.

If the user provides only a phase number, infer both possible paths:

```text
_des-output/planning-artifacts/{phase-artifact}.md
_des-output/learning-artifacts/{phase}-*-learning-notes.md
```

If learning notes exist, prefer learning notes.

If learning notes do not exist but the source artifact exists, generate quiz from source artifact and concept map.

---

## HALT Conditions

Stop if:

* no artifact, learning notes, or phase can be inferred;
* source artifact and learning notes are both missing;
* DES phase cannot be identified;
* `SOUL.md` is missing;
* `knowledge/FUNDAMENTALS-MAP.md` is missing;
* the artifact is too incomplete to generate meaningful questions.

---

## Output From This Step

Produce:

```md
## Quiz Context

- Source artifact:
- Learning notes:
- DES phase:
- Quiz purpose:
- Question count:
- Difficulty:
- Output file:
- Relevant concepts:
- Status:
```

Then continue to:

```text
steps/step-02-generate-quiz.md
```
