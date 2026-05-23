# Step 01 — Context and Evidence

## Goal

Identify the evidence that should be used to diagnose the user's learning gaps.

---

## Required Reading

Read:

```text
SOUL.md
knowledge/FUNDAMENTALS-MAP.md
skills-learning/des-gap-teacher/customize.toml
```

---

## Evidence To Collect

Look for one or more of:

1. user quiz answers;
2. user self-explanation;
3. source DES artifact;
4. learning notes;
5. artifact quiz;
6. design rationale;
7. user confusion or question.

---

## Inputs To Identify

Find or ask for:

```text
DES phase
source artifact path
learning notes path
quiz path
user answer or explanation
diagnosis purpose
desired depth
output language
```

Default values:

```text
language = user's language
depth = fundamental
diagnosis_purpose = identify learning gaps and next actions
```

---

## HALT Conditions

Stop if:

* no evidence is available;
* user asks for personalized feedback but provides no answer/explanation/artifact;
* DES phase cannot be identified;
* `SOUL.md` is missing;
* `knowledge/FUNDAMENTALS-MAP.md` is missing;
* evidence is too vague to assess.

---

## Output From This Step

Produce:

```md
## Gap Diagnosis Context

- Evidence reviewed:
- Source artifact:
- Learning notes:
- Quiz:
- User answer/explanation:
- DES phase:
- Diagnosis purpose:
- Output file:
- Relevant concepts:
- Status:
```

Then continue to:

```text
steps/step-02-diagnose-learning-gaps.md
```
