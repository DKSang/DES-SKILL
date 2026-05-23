# Step 03 — Checklist and Handoff

## Goal

Validate the learning notes and recommend the next action.

---

## Required Reading

Read:

```text
skills-learning/des-explain-artifact/checklist.md
```

---

## Validation Procedure

Check that the learning notes include:

1. source artifact path;
2. DES phase;
3. artifact purpose;
4. related lifecycle concepts;
5. related undercurrents where relevant;
6. section-by-section explanation;
7. key decisions;
8. trade-offs;
9. upstream and downstream connections;
10. common mistakes;
11. practical example;
12. reflection questions;
13. recommended next step.

---

## Status Values

Use one of:

```text
Draft
Complete
Complete with Gaps
Blocked
Needs Artifact Improvement
```

Use `Complete with Gaps` when the artifact can be explained but has weak or missing sections.

Use `Needs Artifact Improvement` when the artifact is too incomplete to support useful learning.

---

## Handoff Rules

Recommend one next action:

### Continue Main Lifecycle

Use when the current artifact is strong enough and the user is ready for the next phase.

### Improve Current Artifact

Use when the explanation reveals missing decisions or weak artifact sections.

### Run Quiz

Use when `des-artifact-quiz` exists and the user wants to check understanding.

### Run Gap Teacher

Use when `des-gap-teacher` exists and the user wants personalized learning feedback.

### Update Workflow Status

Use when learning status tracking is enabled.

---

## Final Output

End with:

```md
## Checklist Result

- Checklist status:
- Learning notes status:
- Main gap:
- Recommended next action:
- Next recommended skill:
```

Do not claim the user has mastered the concept. Only state that learning notes were created.
