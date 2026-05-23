# Step 02 — Update Learning Status

## Goal

Create or update the DES learning status file from available evidence.

---

## Required Inputs

Use:

```text
SOUL.md
knowledge/FUNDAMENTALS-MAP.md
templates/learning/learning-status-template.md
learning evidence scan
existing learning status if available
```

---

## Status Assignment Rules

### Main Artifact Exists

If a main artifact exists but no learning output exists:

```text
Learning Status = Artifact Available
Readiness = Needs Review
```

### Learning Notes Exist

If learning notes exist but no quiz exists:

```text
Learning Status = Explained
Readiness = Needs Review
Next Action = Run des-artifact-quiz
```

### Quiz Exists But No Answers

If quiz exists but no user answers or gap report exists:

```text
Learning Status = Quiz Generated
Readiness = Needs Review
Next Action = User answers quiz or run des-gap-teacher after answers
```

### Gap Report Exists

If gap report exists:

```text
Learning Status = Gap Diagnosed
Gap Status = based on highest severity in report
Readiness = based on gap severity
```

Readiness mapping:

```text
Low gap       -> Ready with Caution
Medium gap    -> Needs Review
High gap      -> Needs Review
Blocking gap  -> Blocked by Learning Gap
```

### Socratic Coaching Exists

If coaching session exists after gap report:

```text
Learning Status = Coached
Readiness = Ready with Caution unless follow-up quiz confirms readiness
```

### Follow-Up Quiz Or Resolved Evidence Exists

If there is evidence that the user retried quiz, improved answer, or gap was resolved:

```text
Learning Status = Ready
Gap Status = Resolved
Readiness = Ready for Next Phase
```

Only use this if evidence exists.

---

## Learning Status Table

Create a table with:

```text
Phase
Main Artifact
Learning Notes
Quiz
Gap Report
Coaching
Highest Gap
Readiness
Next Action
```

---

## Open Learning Blockers

List blockers such as:

```text
missing learning notes for completed artifact
quiz missing
quiz unanswered
High gap unresolved
Blocking gap unresolved
missing concept map
conflicting status evidence
```

---

## Weak Concepts

List weak concepts based on gap reports, quiz results, or missing evidence.

Examples:

```text
schema evolution
grain
data product trust
Silver vs Gold boundary
lineage
governance
quality severity
orchestration failure handling
CI/CD rollback
```

---

## HALT Conditions

Stop if:

* gap severity cannot be inferred but affects readiness;
* status conflict cannot be merged safely;
* user wants readiness override without evidence.

---

## Continue

After drafting or updating learning status, continue to:

```text
steps/step-03-checklist-and-handoff.md
```
