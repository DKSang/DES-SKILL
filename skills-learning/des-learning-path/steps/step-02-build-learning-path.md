# Step 02 — Build Learning Path

## Goal

Create a structured, artifact-driven learning path across DES phases.

---

## Required Inputs

Use:

```text
SOUL.md
knowledge/FUNDAMENTALS-MAP.md
templates/learning/learning-path-template.md
artifact scan result
```

---

## Module Structure

Use this structure by default:

```text
Module 1 — Foundation and Business Context
Module 2 — Data Engineering Lifecycle Core
Module 3 — Modeling, Contracts, and Quality
Module 4 — Operations, Governance, and Reliability
Module 5 — Delivery, Review, and Portfolio Readiness
```

---

## Module 1 — Foundation and Business Context

Include phases:

```text
01 Business Discovery
02 Business Questions
03 Requirements and KPIs
04 Data Product Definition
```

Learning focus:

```text
business value, downstream consumers, decision support, KPI meaning, data product thinking
```

---

## Module 2 — Data Engineering Lifecycle Core

Include phases:

```text
05 Data Source Assessment
08 Ingestion Design
09 Bronze Layer Design
10 Silver Layer Design
11 Gold Layer Design
13 Transformation Design
17 Serving Layer Design
```

Learning focus:

```text
source systems, storage, ingestion, transformation, serving, medallion design
```

---

## Module 3 — Modeling, Contracts, and Quality

Include phases:

```text
06 Domain Modeling
12 Data Contracts
14 Data Quality
16 Semantic Model Design
```

Learning focus:

```text
domain concepts, contracts, quality, metrics, semantic consistency
```

---

## Module 4 — Operations, Governance, and Reliability

Include phases:

```text
07 Architecture Design
15 Orchestration and Observability
18 Lineage and Metadata
19 Governance and Security
20 Cost and Performance Optimization
21 CI/CD and Testing
```

Learning focus:

```text
architecture, DataOps, governance, reliability, cost, testing
```

---

## Module 5 — Delivery, Review, and Portfolio Readiness

Include:

```text
22 Project Evaluation
des-create-epic
des-create-story
des-sprint-planning
des-story-readiness-check
des-dev-task-breakdown
des-implementation-plan
des-code-review
des-release-readiness-review
des-retrospective
des-correct-course
des-workflow-status-update
```

Learning focus:

```text
turning design into delivery, review, release readiness, portfolio explanation
```

---

## For Each Module

Include:

1. learning objective;
2. phases included;
3. concepts to learn;
4. artifacts to create or study;
5. practical exercise;
6. quiz checkpoint;
7. common mistakes;
8. recommended next skill.

---

## Output Format

Use:

```md
# DES Learning Path

## Metadata

## Current Learning Context

## Module 1 — Foundation and Business Context

## Module 2 — Data Engineering Lifecycle Core

## Module 3 — Modeling, Contracts, and Quality

## Module 4 — Operations, Governance, and Reliability

## Module 5 — Delivery, Review, and Portfolio Readiness

## Phase-by-Phase Study Table

## Recommended Study Order

## Quiz Checkpoints

## Weak Areas and Review Plan

## Next Recommended Action
```

---

## HALT Conditions

Stop if:

* required concept mappings are missing;
* user requested personalized path but artifact status is unavailable;
* building the path would require pretending missing artifacts exist.

---

## Continue

After drafting the learning path, continue to:

```text
steps/step-03-checklist-and-handoff.md
```
