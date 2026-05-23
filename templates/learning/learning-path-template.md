# DES Learning Path

## Metadata

| Field | Value |
|---|---|
| Learner goal | {{learner_goal}} |
| Project context | {{project_context}} |
| Mode | {{mode}} |
| Depth | {{depth}} |
| Output status | {{status}} |

---

## Current Learning Context

Summarize what is currently known:

- Available DES artifacts:
- Available learning notes:
- Missing phases:
- Strong areas:
- Weak or unknown areas:

---

## Module 1 — Foundation and Business Context

### Learning Objective

Understand why Data Engineering starts from business value, consumers, decisions, and KPIs before tools and schemas.

### Phases

| Phase | Artifact | Status | Learning Focus |
|---|---|---|---|
| 01 | Business Discovery Brief | {{status}} | Business problem and consumers |
| 02 | Business Question Catalog | {{status}} | Decision-oriented questions |
| 03 | Requirements and KPI Catalog | {{status}} | KPI definition, grain, trust |
| 04 | Data Product Specification | {{status}} | Data product thinking |

### Artifact Exercise

Create or review the artifacts in this module and explain how each one constrains downstream design.

### Quiz Checkpoint

Run:

```text
des-artifact-quiz
```

for Phase 03 or Phase 04 before moving to lifecycle design.

---

## Module 2 — Data Engineering Lifecycle Core

### Learning Objective

Understand how data moves from source systems into storage, then through ingestion, transformation, and serving.

### Phases

| Phase | Artifact                     | Status     | Learning Focus                          |
| ----- | ---------------------------- | ---------- | --------------------------------------- |
| 05    | Data Source Inventory        | {{status}} | Source systems and reliability          |
| 08    | Ingestion Specification      | {{status}} | Batch/stream, reliability, schema drift |
| 09    | Bronze Layer Specification   | {{status}} | Raw storage and replayability           |
| 10    | Silver Layer Specification   | {{status}} | Cleaning, validation, standardization   |
| 11    | Gold Layer Specification     | {{status}} | Business-ready data                     |
| 13    | Transformation Specification | {{status}} | Logic, modeling, materialization        |
| 17    | Serving Layer Specification  | {{status}} | Consumers and access patterns           |

### Artifact Exercise

Trace one business question from source to serving.

### Quiz Checkpoint

Run quizzes for:

```text
05 Data Source Assessment
08 Ingestion Design
10 Silver Layer Design
11 Gold Layer Design
```

---

## Module 3 — Modeling, Contracts, and Quality

### Learning Objective

Understand how meaning, expectations, quality, and metric consistency are controlled.

### Phases

| Phase | Artifact                     | Status     | Learning Focus                      |
| ----- | ---------------------------- | ---------- | ----------------------------------- |
| 06    | Conceptual Domain Model      | {{status}} | Business concepts and relationships |
| 12    | Data Contract Specification  | {{status}} | Producer-consumer expectations      |
| 14    | Data Quality Specification   | {{status}} | Fitness for use and trust           |
| 16    | Semantic Model Specification | {{status}} | Shared metrics and definitions      |

### Artifact Exercise

Pick one KPI and trace its meaning through domain model, contract, quality rule, and semantic layer.

### Quiz Checkpoint

Run quizzes for:

```text
12 Data Contracts
14 Data Quality
16 Semantic Model
```

---

## Module 4 — Operations, Governance, and Reliability

### Learning Objective

Understand how a data system becomes reliable, secure, observable, cost-aware, and maintainable.

### Phases

| Phase | Artifact                         | Status     | Learning Focus                        |
| ----- | -------------------------------- | ---------- | ------------------------------------- |
| 07    | Architecture Decision Record     | {{status}} | Architecture decisions and trade-offs |
| 15    | Orchestration Observability Spec | {{status}} | DataOps, scheduling, monitoring       |
| 18    | Lineage Metadata Spec            | {{status}} | Traceability and metadata             |
| 19    | Governance Security Spec         | {{status}} | Security, privacy, access             |
| 20    | Cost Performance Spec            | {{status}} | FinOps and optimization               |
| 21    | CI/CD Testing Spec               | {{status}} | Testing, deployment, automation       |

### Artifact Exercise

Explain how a failed pipeline would be detected, traced, fixed, and safely redeployed.

### Quiz Checkpoint

Run quizzes for:

```text
07 Architecture
15 Orchestration
19 Governance and Security
21 CI/CD and Testing
```

---

## Module 5 — Delivery, Review, and Portfolio Readiness

### Learning Objective

Understand how DES design artifacts become epics, stories, tasks, implementation plans, reviews, releases, and portfolio evidence.

### Skills

| Skill                        | Status     | Learning Focus               |
| ---------------------------- | ---------- | ---------------------------- |
| des-create-epic              | {{status}} | Convert design into epics    |
| des-create-story             | {{status}} | Convert epics into stories   |
| des-sprint-planning          | {{status}} | Plan sprint scope            |
| des-story-readiness-check    | {{status}} | Check story quality          |
| des-dev-task-breakdown       | {{status}} | Break stories into dev tasks |
| des-implementation-plan      | {{status}} | Plan implementation          |
| des-code-review              | {{status}} | Review against artifacts     |
| des-release-readiness-review | {{status}} | Release readiness            |
| des-retrospective            | {{status}} | Improvement loop             |
| des-correct-course           | {{status}} | Fix drift                    |
| des-workflow-status-update   | {{status}} | Maintain continuity          |

### Artifact Exercise

Choose one story and explain which DES artifacts justify its acceptance criteria.

---

## Phase-by-Phase Study Table

| Phase | Concept                | Artifact                                          | Study Action     | Quiz        |
| ----- | ---------------------- | ------------------------------------------------- | ---------------- | ----------- |
| 01    | Business value         | 01-business-discovery-brief.md                    | Explain artifact | Optional    |
| 02    | Business questions     | 02-business-question-catalog.md                   | Explain artifact | Optional    |
| 03    | KPIs and requirements  | 03-requirements-and-kpi-catalog.md                | Explain artifact | Recommended |
| 04    | Data product           | 04-data-product-specification.md                  | Explain artifact | Recommended |
| 05    | Source systems         | 05-data-source-inventory.md                       | Explain artifact | Recommended |
| 06    | Domain modeling        | 06-conceptual-domain-model.md                     | Explain artifact | Optional    |
| 07    | Architecture           | 07-architecture-decision-record.md                | Explain artifact | Recommended |
| 08    | Ingestion              | 08-ingestion-specification.md                     | Explain artifact | Recommended |
| 09    | Bronze storage         | 09-bronze-layer-specification.md                  | Explain artifact | Recommended |
| 10    | Silver standardization | 10-silver-layer-specification.md                  | Explain artifact | Recommended |
| 11    | Gold serving           | 11-gold-layer-specification.md                    | Explain artifact | Recommended |
| 12    | Data contracts         | 12-data-contract-specification.md                 | Explain artifact | Recommended |
| 13    | Transformation         | 13-transformation-specification.md                | Explain artifact | Recommended |
| 14    | Data quality           | 14-data-quality-specification.md                  | Explain artifact | Recommended |
| 15    | Orchestration          | 15-orchestration-observability-specification.md   | Explain artifact | Recommended |
| 16    | Semantic model         | 16-semantic-model-specification.md                | Explain artifact | Recommended |
| 17    | Serving                | 17-serving-layer-specification.md                 | Explain artifact | Recommended |
| 18    | Lineage metadata       | 18-lineage-metadata-specification.md              | Explain artifact | Optional    |
| 19    | Governance security    | 19-governance-security-specification.md           | Explain artifact | Recommended |
| 20    | Cost performance       | 20-cost-performance-optimization-specification.md | Explain artifact | Optional    |
| 21    | CI/CD testing          | 21-cicd-testing-specification.md                  | Explain artifact | Recommended |
| 22    | Evaluation             | 22-project-evaluation-report.md                   | Explain artifact | Recommended |

---

## Recommended Study Order

1. Module 1
2. Module 2
3. Module 3
4. Module 4
5. Module 5

Do not skip Module 1 unless business context and KPI definitions are already strong.

---

## Weak Areas and Review Plan

| Weak Area     | Evidence     | Recommended Review |
| ------------- | ------------ | ------------------ |
| {{weak_area}} | {{evidence}} | {{review_action}}  |

---

## Next Recommended Action

Recommended next action:

```text
{{recommended_next_action}}
```

Next recommended skill:

```text
{{next_recommended_skill}}
```
