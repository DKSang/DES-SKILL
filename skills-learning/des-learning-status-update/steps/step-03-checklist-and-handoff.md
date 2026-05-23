# Step 03 — Checklist and Handoff

## Goal

Validate the learning status update and recommend the next learning action.

---

## Required Reading

Read:

```text
skills-learning/des-learning-status-update/checklist.md
```

---

## Validation Procedure

Check that the status file includes:

1. all 22 phases;
2. main artifact status;
3. learning notes status;
4. quiz status;
5. gap status;
6. coaching status;
7. readiness status;
8. open blockers;
9. weak concepts;
10. recommended next action.

---

## Status Values

Use one of:

```text
Draft
Complete
Complete with Unknowns
Blocked
Needs Evidence Review
```

Use `Complete with Unknowns` when status is useful but some evidence is missing.

Use `Needs Evidence Review` when evidence conflicts.

---

## Handoff Rules

Recommend one next action:

### Explain Missing Artifact

Use when a main artifact exists but no learning notes exist.

### Generate Quiz

Use when explanation exists but quiz is missing.

### Diagnose Gap

Use when answers exist but gap report is missing.

### Coach Weak Concept

Use when a High or Blocking conceptual gap exists.

### Review Progress

Use when several phases have learning outputs and the user wants a summary.

### Continue Lifecycle

Use only when current phase readiness is sufficient.

---

## Final Output

End with:

```md
## Checklist Result

- Checklist status:
- Learning status file status:
- Main open blocker:
- Weakest concept:
- Recommended next action:
- Next recommended skill:
```
