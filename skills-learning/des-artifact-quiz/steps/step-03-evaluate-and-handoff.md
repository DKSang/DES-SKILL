# Step 03 — Evaluate and Handoff

## Goal

Validate the quiz and recommend the next learning action.

---

## Required Reading

Read:

```text
skills-learning/des-artifact-quiz/checklist.md
```

---

## Validation Procedure

Check:

1. the quiz maps to the artifact;
2. the quiz maps to the concept map;
3. the quiz includes multiple question types;
4. the quiz includes answer explanations;
5. the quiz avoids trivia-only questions;
6. the quiz gives a next action.

---

## Quiz Status Values

Use one of:

```text
Draft
Complete
Complete with Gaps
Blocked
Needs Better Source Artifact
```

Use `Complete with Gaps` when the quiz is useful but limited by weak artifact content.

Use `Needs Better Source Artifact` when the artifact is too weak for meaningful applied questions.

---

## Handoff Rules

Recommend one next action:

### Review Learning Notes

Use when the quiz reveals that the user should revisit the explanation.

### Continue Main Lifecycle

Use when the user is likely ready for the next DES phase.

### Run Gap Teacher

Use when `des-gap-teacher` exists and the user wants personalized feedback.

### Build Learning Path

Use when the user wants a broader study plan across phases.

---

## Final Output

End with:

```md
## Checklist Result

- Checklist status:
- Quiz status:
- Main limitation:
- Recommended next action:
- Next recommended skill:
```
