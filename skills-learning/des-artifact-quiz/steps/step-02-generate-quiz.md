# Step 02 — Generate Quiz

## Goal

Generate a quiz that tests understanding of the artifact and its related Data Engineering concepts.

---

## Required Inputs

Use:

```text
SOUL.md
knowledge/FUNDAMENTALS-MAP.md
templates/learning/artifact-quiz-template.md
source artifact and/or learning notes
```

---

## Quiz Construction Rules

Create questions across five categories:

1. Concept Check
2. Artifact Understanding
3. Applied Scenario
4. Trade-off
5. Common Mistake

Each question must include:

* question;
* difficulty;
* expected answer;
* explanation;
* related concept.

---

## Question Design Guidance

Good questions ask the user to explain, compare, decide, diagnose, or apply.

Avoid questions that only ask the user to repeat headings.

Good verbs:

```text
Explain
Compare
Decide
Diagnose
Identify
Justify
Apply
```

Weak verbs:

```text
List
Name
Copy
Repeat
```

Use weak verbs only when needed for beginner questions.

---

## Output Format

Use this structure:

```md
# Quiz — {Artifact Title}

## Metadata

- Source artifact:
- Learning notes:
- DES phase:
- Quiz purpose:
- Difficulty:
- Question count:
- Related lifecycle concepts:
- Related undercurrents:

## 1. Concept Check

## 2. Artifact Understanding

## 3. Applied Scenario

## 4. Trade-off Questions

## 5. Common Mistake Questions

## 6. Answer Key and Explanations

## 7. Scoring Guide

## 8. Recommended Next Step
```

---

## Scoring Guide

Use this scoring model:

```text
0–50%   = Review fundamentals again
51–70%  = Partial understanding, revisit weak sections
71–85%  = Good understanding, continue with caution
86–100% = Strong understanding, ready for next phase
```

---

## HALT Conditions

Stop if:

* relevant concept mapping is missing;
* the artifact has too little content to generate applied questions;
* generating quiz would require inventing project context.

---

## Continue

After drafting the quiz, continue to:

```text
steps/step-03-evaluate-and-handoff.md
```
