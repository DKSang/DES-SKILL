# Step 01 — Coaching Context

## Goal

Identify the topic, DES phase, and coaching mode for the Socratic session.

---

## Required Reading

Read:

```text
SOUL.md
knowledge/FUNDAMENTALS-MAP.md
skills-learning/des-socratic-coach/customize.toml
```

---

## Inputs To Identify

Find or ask for:

1. coaching topic;
2. DES phase;
3. target concept;
4. source artifact if available;
5. gap report if available;
6. quiz result if available;
7. user confusion;
8. coaching mode;
9. interactive or draft mode.

Default values:

```text
language = user's language
mode = Concept Discovery
interactive = true
max_questions = 7
```

---

## Coaching Mode Selection

Use:

```text
Concept Discovery
```

when the user is new to a concept.

Use:

```text
Trade-off Reasoning
```

when the user compares choices.

Use:

```text
Artifact Defense
```

when the user needs to explain or defend an artifact.

Use:

```text
Mistake Diagnosis
```

when the user made an incorrect assumption.

Use:

```text
Design Decision Coaching
```

when the user must choose an option.

Use:

```text
Quiz Recovery
```

when the user answered quiz questions poorly.

---

## HALT Conditions

Stop if:

* no coaching topic is available;
* DES phase cannot be identified and phase context is required;
* `SOUL.md` is missing;
* `knowledge/FUNDAMENTALS-MAP.md` is missing;
* user requests interactive mode but has not answered the current question.

---

## Output From This Step

Produce:

```md
## Socratic Coaching Context

- Topic:
- DES phase:
- Target concept:
- Coaching mode:
- Interactive:
- Source artifact:
- Gap report:
- Quiz result:
- Output file:
- Status:
```

Then continue to:

```text
steps/step-02-run-socratic-session.md
```
