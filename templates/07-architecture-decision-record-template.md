# 07 — Architecture Decision Record

## Metadata

| Field | Value |
| --- | --- |
| Project |  |
| Domain |  |
| Skill | des-architecture-design |
| Phase | 07 — Architecture Design |
| Status | Draft |
| Owner |  |
| Last Updated |  |
| Upstream Artifact | 06-conceptual-domain-model.md |
| Next Skill | des-ingestion-design |

## 1. Architecture Summary

```text
<Provide a short summary of the target data architecture and the most critical decisions made.>
```

## 2. Decision Context

| Context Area                      | Summary |
| --------------------------------- | ------- |
| Business / product drivers        |         |
| P1 outputs                        |         |
| P1 requirements                   |         |
| Source patterns                   |         |
| Domain model implications         |         |
| Freshness / latency needs         |         |
| Security / privacy constraints    |         |
| Cost / capacity constraints       |         |
| Team capability constraints       |         |
| Existing architecture constraints |         |

## 3. Architecture Goals

| Goal ID | Goal | Linked Requirement / Product Output | Priority     |
| ------- | ---- | ----------------------------------- | ------------ |
| AG-001  |      |                                     | P1 / P2 / P3 |

## 4. Architecture Principles

| Principle                       | Rationale | Impact |
| ------------------------------- | --------- | ------ |
| Choose common components wisely |           |        |
| Plan for failure                |           |        |
| Architect for scalability       |           |        |
| Build loosely coupled systems   |           |        |
| Make reversible decisions       |           |        |
| Prioritize security             |           |        |
| Embrace cost awareness / FinOps |           |        |

## 5. Target Architecture Overview

```text
<Describe the high-level data flow, layer separation, compute and storage separation, and components.>
```

Optional ASCII diagram:

```text
Sources
  -> Ingestion
  -> Raw/Cleaned/Curated Layers
  -> Serving Outputs
  -> Consumers

Cross-cutting:
Security, Governance, Metadata, Observability, CI/CD, Data Quality
```

## 6. Lifecycle Alignment

| Lifecycle Stage             | Architecture Direction | Notes |
| --------------------------- | ---------------------- | ----- |
| Generation / Source Systems |                        |       |
| Storage                     |                        |       |
| Ingestion                   |                        |       |
| Transformation              |                        |       |
| Serving                     |                        |       |
| Security                    |                        |       |
| Data Management             |                        |       |
| DataOps                     |                        |       |
| Orchestration               |                        |       |
| Software Engineering        |                        |       |

## 7. Environment Strategy

| Environment     | Purpose | Promotion Rule | Access Notes |
| --------------- | ------- | -------------- | ------------ |
| Local / Feature |         |                |              |
| Dev             |         |                |              |
| Test / QA       |         |                |              |
| Prod            |         |                |              |

Decision status:

```text
Proposed | Approved | Deferred
```

## 8. Storage Strategy

| Storage Area        | Strategy | Rationale | Status                         |
| ------------------- | -------- | --------- | ------------------------------ |
| Raw / landing       |          |           | Proposed / Approved / Deferred |
| Cleaned / conformed |          |           | Proposed / Approved / Deferred |
| Curated / serving   |          |           | Proposed / Approved / Deferred |
| Archive / retention |          |           | Proposed / Approved / Deferred |

## 9. Compute Strategy

| Workload            | Compute Direction | Rationale | Status                         |
| ------------------- | ----------------- | --------- | ------------------------------ |
| Ingestion           |                   |           | Proposed / Approved / Deferred |
| Transformation      |                   |           | Proposed / Approved / Deferred |
| Data quality        |                   |           | Proposed / Approved / Deferred |
| Serving/query       |                   |           | Proposed / Approved / Deferred |
| Development/testing |                   |           | Proposed / Approved / Deferred |

## 10. Batch Streaming and Event Strategy

| Use Case / Source | Strategy                                                      | Rationale | Status                         |
| ----------------- | ------------------------------------------------------------- | --------- | ------------------------------ |
|                   | Batch / Streaming / Event-driven / Hybrid / Manual / Deferred |           | Proposed / Approved / Deferred |

## 11. Integration Pattern

| Integration Area         | Pattern                                                                        | Notes |
| ------------------------ | ------------------------------------------------------------------------------ | ----- |
| Source integration       | Pull / Push / CDC / File drop / Connector / Stream / Manual / Other            |       |
| Cross-system integration | API / Data sharing / Event bus / Warehouse/lake access / Other                 |       |
| Consumer integration     | Direct query / Semantic layer / Dashboard / API / Export / Reverse ETL / Other |       |

## 12. Layer Strategy

| Layer              | Purpose | Data State | Notes |
| ------------------ | ------- | ---------- | ----- |
| Raw / Bronze       |         |            |       |
| Cleaned / Silver   |         |            |       |
| Curated / Gold     |         |            |       |
| Serving / Semantic |         |            |       |

## 13. Serving Strategy

| Product Output | Serving Direction                                                                           | Consumer | Notes |
| -------------- | ------------------------------------------------------------------------------------------- | -------- | ----- |
| OUT-001        | Direct table / Semantic layer / Dashboard / API / ML dataset / Export / Reverse ETL / Other |          |       |

## 14. Orchestration Boundary

| Area                   | Direction | Notes |
| ---------------------- | --------- | ----- |
| Pipeline scheduling    |           |       |
| Dependency management  |           |       |
| Retry/failure handling |           |       |
| Backfill/replay        |           |       |
| Manual intervention    |           |       |

## 15. Observability Direction

| Signal                | Expected Direction | Notes |
| --------------------- | ------------------ | ----- |
| Pipeline status       |                    |       |
| Freshness             |                    |       |
| Row counts / volume   |                    |       |
| Data quality          |                    |       |
| Runtime / performance |                    |       |
| Cost / usage          |                    |       |
| Incidents / alerts    |                    |       |

## 16. Security and Privacy Posture

| Area                    | Direction | Status                         |
| ----------------------- | --------- | ------------------------------ |
| Access control          |           | Proposed / Approved / Deferred |
| Secrets management      |           | Proposed / Approved / Deferred |
| Sensitive data handling |           | Proposed / Approved / Deferred |
| Encryption              |           | Proposed / Approved / Deferred |
| Audit logging           |           | Proposed / Approved / Deferred |
| Environment isolation   |           | Proposed / Approved / Deferred |

## 17. Governance and Metadata Direction

| Area                | Direction | Notes |
| ------------------- | --------- | ----- |
| Ownership           |           |       |
| Catalog / discovery |           |       |
| Lineage             |           |       |
| Data contracts      |           |       |
| Quality rules       |           |       |
| Retention           |           |       |
| Change management   |           |       |

## 18. DataOps and Software Engineering Direction

| Area                | Direction | Notes |
| ------------------- | --------- | ----- |
| Version control     |           |       |
| Branching / PR flow |           |       |
| Testing strategy    |           |       |
| CI/CD direction     |           |       |
| Artifact management |           |       |
| Release gates       |           |       |
| Documentation       |           |       |

## 19. Build Versus Buy Considerations

| Capability     | Build / Buy / Use Managed / Defer | Rationale |
| -------------- | --------------------------------- | --------- |
| Ingestion      |                                   |           |
| Storage        |                                   |           |
| Transformation |                                   |           |
| Orchestration  |                                   |           |
| Observability  |                                   |           |
| Serving        |                                   |           |

## 20. Technology Constraints and Options

| Technology / Platform | Role | Constraint or Option?                        | Status | Notes |
| --------------------- | ---- | -------------------------------------------- | ------ | ----- |
|                       |      | Constraint / Candidate / Rejected / Approved |        |       |

## 21. Architecture Decisions

| ADR ID  | Decision | Context | Chosen Option | Status                                                 |
| ------- | -------- | ------- | ------------- | ------------------------------------------------------ |
| ADR-001 |          |         |               | Proposed / Approved / Deferred / Rejected / Superseded |

## 22. Trade-Offs

| Decision | Benefit | Cost / Risk | Mitigation |
| -------- | ------- | ----------- | ---------- |
|          |         |             |            |

## 23. Reversibility Classification

| Decision | Reversibility          | Why | Follow-Up |
| -------- | ---------------------- | --- | --------- |
|          | Easy / Moderate / Hard |     |           |

## 24. Risks

| Risk | Impact | Mitigation | Owner |
| ---- | ------ | ---------- | ----- |
|      |        |            |       |

## 25. Assumptions

| Assumption | Risk if Wrong | Validation Needed |
| ---------- | ------------- | ----------------- |
|            |               |                   |

## 26. Open Questions

| Open Question | Why It Matters | Owner | Needed By                                       |
| ------------- | -------------- | ----- | ----------------------------------------------- |
|               |                |       | Phase 8 / Phase 9 / Phase 10 / Phase 11 / Later |

## 27. Next Skill Recommendation

Recommended next skill:

```text
des-ingestion-design
```

Reason:

```text
<Explain why ingestion design is the next safe and logical step in the workflow.>
```
