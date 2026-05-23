# Step 03 — Feedback and Handoff

## Goal

Validate the diagnosis and recommend the next learning action.

---

## Required Reading

Read:

```text
skills-learning/des-gap-teacher/checklist.md
```

---

## Validation Procedure

Check that the report includes:

1. reviewed evidence;
2. correct understanding;
3. missing concepts;
4. incorrect assumptions where present;
5. gap category;
6. severity;
7. artifact impact;
8. downstream risk;
9. study actions;
10. artifact corrections;
11. readiness assessment;
12. next recommended skill.

---

## Status Values

Use one of:

```text
Draft
Complete
Complete with Limited Evidence
Blocked
Needs More Evidence
```

Use `Complete with Limited Evidence` when the diagnosis is useful but based on partial evidence.

Use `Needs More Evidence` when the user must provide an answer, artifact, or explanation before meaningful diagnosis.

---

## Handoff Rules

Recommend one next action:

### Run Socratic Coach

Use when the user has a conceptual or trade-off gap that should be resolved through guided reasoning.

### Rerun Explain Artifact

Use when the user is missing foundational understanding.

### Retry Quiz

Use when the user has reviewed the gap and should check understanding again.

### Improve Artifact

Use when the gap affects artifact quality.

### Continue Lifecycle

Use only when no High or Blocking gaps remain.

---

## Final Output

End with:

```md
## Checklist Result

- Checklist status:
- Gap report status:
- Readiness assessment:
- Main gap:
- Recommended next action:
- Next recommended skill:
```
