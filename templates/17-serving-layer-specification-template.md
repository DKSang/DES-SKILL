# 17 — Serving Layer Specification

## Metadata

| Field | Value |
| --- | --- |
| Project |  |
| Domain |  |
| Skill | des-serving-layer-design |
| Phase | 17 — Serving Layer Design |
| Status | Draft |
| Owner |  |
| Last Updated |  |
| Upstream Artifact | 16-semantic-model-specification.md |
| Next Skill | des-lineage-metadata-design |

## 1. Serving Layer Summary

```text
<short summary of serving channels, consumers, outputs, and serving risks>
```

## 2. Serving Scope

In scope:

*
*
*

Out of scope:

* dashboard visual implementation
* API implementation
* ML training/inference implementation
* reverse ETL job implementation
* infrastructure deployment
* CI/CD implementation

## 3. Serving Design Principles

| Principle                                  | Decision / Notes |
| ------------------------------------------ | ---------------- |
| Consumer-first                             |                  |
| Trust-visible                              |                  |
| Secure by default                          |                  |
| Contract-aware                             |                  |
| Feedback-loop enabled                      |                  |
| Fit-for-channel                            |                  |
| Avoid unnecessary production source impact |                  |
| Monitor usage and adoption                 |                  |

## 4. Consumer and Persona Mapping

| Consumer / Persona | Job To Be Done | Primary Serving Channel                                                                 |
| ------------------ | -------------- | --------------------------------------------------------------------------------------- |
|                    |                | dashboard / self-service BI / API / ML / export / reverse ETL / data sharing / AI agent |

## 5. Serving Channel Inventory

| Serving Output ID | Output Name | Channel                                                                                                                                            | Status                                       |
| ----------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| SO-001            |             | Dashboard / Self-service BI / Semantic layer / API / ML dataset / Reverse ETL / Export / Data sharing / Federation / Embedded analytics / AI agent | Draft / Approved / Risk / Blocked / Deferred |

## 6. Gold and Semantic to Serving Mapping

| Serving Output | Source Gold Dataset / Semantic Model | Notes |
| -------------- | ------------------------------------ | ----- |
| SO-001         | gold.<dataset> / semantic.<model>    |       |

## 7. Serving Pattern Decision

| Serving Output | Pattern                                                                                              | Rationale |
| -------------- | ---------------------------------------------------------------------------------------------------- | --------- |
| SO-001         | dashboard / self-service / API / ML / export / reverse ETL / sharing / federation / embedded / agent |           |

## 8. Dashboard and Reporting Expectations

| Output | Audience | Report Purpose | Notes |
| ------ | -------- | -------------- | ----- |
|        |          |                |       |

## 9. Self Service Analytics Expectations

| Output | Analyst Capability                                                                 | Guardrails |
| ------ | ---------------------------------------------------------------------------------- | ---------- |
|        | certified metrics / approved dimensions / exploration limits / glossary / training |            |

## 10. API and Application Serving Expectations

| Output | Consumer System | Contract / SLA | Notes |
| ------ | --------------- | -------------- | ----- |
|        |                 |                |       |

## 11. ML and AI Dataset Serving Expectations

| Output | ML/AI Use                                         | Feature/Label/Inference Expectation |
| ------ | ------------------------------------------------- | ----------------------------------- |
|        | training / feature / label / inference / AI agent |                                     |

## 12. Reverse ETL and Export Expectations

| Output | Destination                                                  | Guardrails                                                  |
| ------ | ------------------------------------------------------------ | ----------------------------------------------------------- |
|        | SaaS / CRM / marketing tool / file export / partner delivery | dry run / approval / monitoring / rollback / disable switch |

## 13. Data Sharing and Federation Expectations

| Output | Sharing/Federation Pattern                          | Access and Source Impact Notes |
| ------ | --------------------------------------------------- | ------------------------------ |
|        | data sharing / federated query / controlled extract |                                |

## 14. AI and Data Agent Access Expectations

| Output | Agent Use Case                                                  | Required Metadata / Guardrails                                                |
| ------ | --------------------------------------------------------------- | ----------------------------------------------------------------------------- |
|        | question answering / insight generation / advisory / automation | glossary, certified metrics, lineage, access policy, prompt-safe descriptions |

## 15. Access Control and Security Model

| Serving Output | Access Policy                                                                                                           | Security Notes |
| -------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------- |
| SO-001         | open internal / role-based / row-level / column-level / masked / external approval / tenant isolation / review required |                |

## 16. Freshness and Quality Visibility

| Serving Output | Freshness Display                                         | Quality/Trust Display                                                 |
| -------------- | --------------------------------------------------------- | --------------------------------------------------------------------- |
| SO-001         | last refresh / max event date / publish time / SLA status | certified badge / warning banner / quality status / known limitations |

## 17. Performance and Latency Expectations

| Serving Output | Performance Expectation                                                                  | Notes |
| -------------- | ---------------------------------------------------------------------------------------- | ----- |
| SO-001         | interactive / best-effort / low-latency API / batch window / sync window / no strict SLA |       |

## 18. Caching and Materialization Expectations

| Serving Output | Cache / Materialization Strategy                                                          | Notes |
| -------------- | ----------------------------------------------------------------------------------------- | ----- |
| SO-001         | live query / cached / materialized view/table / extract / API cache / feature store / TBD |       |

## 19. Feedback Loop and Issue Reporting

| Serving Output | Feedback Channel                                             | Triage Owner |
| -------------- | ------------------------------------------------------------ | ------------ |
| SO-001         | ticket / form / chat channel / review meeting / office hours |              |

## 20. Usage Monitoring and Adoption Signals

| Signal                  | Purpose                 |
| ----------------------- | ----------------------- |
| active users            | adoption                |
| query count             | usage                   |
| dashboard views         | consumption             |
| API calls               | system usage            |
| export delivery success | operational reliability |
| reverse ETL writes      | writeback monitoring    |
| feedback tickets        | improvement loop        |
| data issue reports      | trust monitoring        |

## 21. Ownership and Support Model

| Area                 | Owner | Responsibility |
| -------------------- | ----- | -------------- |
| Serving output owner |       |                |
| Business owner       |       |                |
| Technical owner      |       |                |
| Support owner        |       |                |
| Security approver    |       |                |

## 22. Risks

| Risk | Serving Output | Impact | Mitigation | Owner |
| ---- | -------------- | ------ | ---------- | ----- |
|      |                |        |            |       |

## 23. Assumptions

| Assumption | Risk if Wrong | Validation Needed |
| ---------- | ------------- | ----------------- |
|            |               |                   |

## 24. Open Questions

| Open Question | Why It Matters | Owner | Needed By                                         |
| ------------- | -------------- | ----- | ------------------------------------------------- |
|               |                |       | Phase 18 / Phase 19 / Phase 20 / Phase 21 / Later |

## 25. Next Skill Recommendation

Recommended next skill:

```text
des-lineage-metadata-design
```

Reason:

```text
<why lineage and metadata design is the next safe step>
```
