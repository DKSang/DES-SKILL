# Step 02 — Evaluate Learning Progress

## Goal

Evaluate learning progress, readiness, strengths, weak concepts, and next actions.

---

## Required Inputs

Use:

```text
SOUL.md
knowledge/FUNDAMENTALS-MAP.md
templates/learning/learning-review-template.md
des-learning-status.md
learning outputs if needed
```

---

## Evaluation Procedure

### 1. Summarize Overall Progress

Include:

```text
number of artifacts available
number of learning notes
number of quizzes
number of gap reports
number of coaching sessions
number of ready phases
number of open High or Blocking gaps
```

### 2. Group by Module

Use the five learning modules:

```text
Module 1 — Foundation and Business Context
Module 2 — Data Engineering Lifecycle Core
Module 3 — Modeling, Contracts, and Quality
Module 4 — Operations, Governance, and Reliability
Module 5 — Delivery, Review, and Portfolio Readiness
```

### 3. Identify Strengths

A strength may be based on:

```text
ready phase
resolved gap
strong quiz evidence
clear artifact explanation
successful coaching synthesis
```

### 4. Identify Weak Concepts

Weak concepts may be based on:

```text
open gap reports
missing quizzes
failed quiz answers
repeated user confusion
missing learning notes
```

### 5. Identify Blockers

Blockers include:

```text
Open Blocking Gap
Open High Gap before dependent phase
Missing learning notes for current phase
Quiz unanswered before next phase
Unresolved Silver vs Gold boundary
Unclear KPI grain
Unclear data contract ownership
Unclear governance/security expectation
```

### 6. Recommend Review Plan

Recommend a short plan:

```text
First review these concepts
Then rerun these quizzes
Then continue to this phase
```

---

## Output Format

Use:

```md
# DES Learning Review

## Metadata

## 1. Overall Progress

## 2. Module-by-Module Review

## 3. Phase Readiness Summary

## 4. Strengths

## 5. Weak Concepts

## 6. Open Gaps and Blockers

## 7. Recommended Review Plan

## 8. Recommended Next Learning Action

## 9. Recommended Next DES Lifecycle Action
```

---

## Readiness Rules

Do not recommend continuing to the next dependent DES phase if:

```text
current phase has Open Blocking Gap
current phase has Open High Gap
required previous artifact has no learning notes
required previous quiz is unanswered and user requested learning assurance
```

Use `Ready with Caution` when only Low or Medium gaps remain.

---

## HALT Conditions

Stop if:

* learning status evidence is missing;
* readiness cannot be assessed due to conflicting status;
* the user asks for a guarantee of mastery.

---

## Continue

After drafting the review, continue to:

```text
steps/step-03-summary-and-handoff.md
```
