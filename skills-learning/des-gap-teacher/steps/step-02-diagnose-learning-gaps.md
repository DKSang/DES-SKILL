# Step 02 — Diagnose Learning Gaps

## Goal

Diagnose the user's understanding and identify learning gaps.

---

## Required Inputs

Use:

```text
SOUL.md
knowledge/FUNDAMENTALS-MAP.md
templates/learning/learning-gap-report-template.md
evidence from step-01
```

---

## Diagnosis Procedure

### 1. Identify Correct Understanding

Start by identifying what the user understands correctly.

This builds confidence and separates correct reasoning from weak reasoning.

### 2. Identify Missing Concepts

Find important concepts that are missing from the user's explanation or artifact.

Examples:

```text
grain
freshness
schema evolution
source ownership
data quality severity
lineage
replayability
consumer trust
access control
cost trade-off
```

### 3. Identify Incorrect Assumptions

Find statements or design choices that are wrong, unsafe, or misleading.

Examples:

```text
Bronze should always be cleaned
Gold is just a prettier Silver table
Data quality means data must be perfect
Ingestion is only copying data
A dashboard is the same as a data product
```

### 4. Assign Gap Category

Use one of:

```text
Conceptual Gap
Artifact Gap
Decision Gap
Trade-off Gap
Terminology Gap
Lifecycle Connection Gap
Governance / Quality Gap
Evidence Gap
```

### 5. Assign Severity

Use one of:

```text
Low
Medium
High
Blocking
```

### 6. Explain Impact

For each gap, explain:

```text
why it matters
how it affects the artifact
how it affects downstream phases
what risk it creates
```

### 7. Recommend Study Actions

Recommend focused actions.

Examples:

```text
Rerun des-explain-artifact for Phase 08
Answer 5 applied questions about ingestion reliability
Improve the artifact section about schema evolution
Use des-socratic-coach to reason through Bronze vs Silver boundaries
```

---

## Output Format

Use this structure:

```md
# Learning Gap Report — {Artifact or Phase Title}

## Metadata

- Evidence reviewed:
- Source artifact:
- DES phase:
- Diagnosis status:
- Related lifecycle concepts:
- Related undercurrents:

## 1. What You Understand Correctly

## 2. Main Learning Gaps

## 3. Incorrect or Risky Assumptions

## 4. Artifact Impact

## 5. Downstream Risk

## 6. Recommended Study Actions

## 7. Recommended Artifact Corrections

## 8. Readiness Assessment

## 9. Recommended Next Step
```

---

## Readiness Assessment

Use:

```text
Ready for next phase
Ready with caution
Needs review
Blocked by learning gap
```

Do not use `Ready for next phase` if any Blocking gap exists.

---

## HALT Conditions

Stop if:

* evidence is too vague to diagnose;
* the phase mapping is missing;
* diagnosing would require guessing user intent.

---

## Continue

After drafting the report, continue to:

```text
steps/step-03-feedback-and-handoff.md
```
