# 18 — Lineage and Metadata Specification

## Metadata

| Field | Value |
| --- | --- |
| Project |  |
| Domain |  |
| Skill | des-lineage-metadata-design |
| Phase | 18 — Lineage and Metadata Design |
| Status | Draft |
| Owner |  |
| Last Updated |  |
| Upstream Artifact | 17-serving-layer-specification.md |
| Next Skill | des-governance-security-design |

## 1. Lineage and Metadata Summary

```text
<short summary of metadata scope, lineage depth, catalog goals, and risks>
```

## 2. Metadata Scope

In scope:

*
*
*

Out of scope:

* catalog tool implementation
* lineage extraction code
* metadata crawler implementation
* governance platform deployment
* CI/CD implementation

## 3. Metadata Design Principles

| Principle                                               | Decision / Notes |
| ------------------------------------------------------- | ---------------- |
| Business + technical + operational + reference metadata |                  |
| Ownership is explicit                                   |                  |
| Lineage supports debugging and audit                    |                  |
| Metadata is maintained, not one-time documentation      |                  |
| Trust status is visible                                 |                  |
| AI/data-agent safe where needed                         |                  |
| Compliance-ready where required                         |                  |

## 4. Metadata Categories

| Category             | Required? | Notes                                    |
| -------------------- | --------- | ---------------------------------------- |
| Business metadata    | Yes / No  | definitions, owners, rules, usage        |
| Technical metadata   | Yes / No  | schema, fields, lineage, transformations |
| Operational metadata | Yes / No  | runs, status, counts, errors, timing     |
| Reference metadata   | Yes / No  | codes, units, calendars, mappings        |

## 5. Metadata Inventory

| Asset | Asset Type                                                                                                                             | Layer / Area | Metadata Status                   |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------- |
|       | source / dataset / field / metric / contract / transformation / quality_rule / workflow / semantic_object / serving_output / reference |              | Draft / Approved / Risk / Blocked |

## 6. Business Metadata

| Asset | Business Definition | Owner | Usage Notes |
| ----- | ------------------- | ----- | ----------- |
|       |                     |       |             |

## 7. Technical Metadata

| Asset | Technical Metadata Required                                                     | Notes |
| ----- | ------------------------------------------------------------------------------- | ----- |
|       | schema, fields, data types, keys, dependencies, lineage, transformation mapping |       |

## 8. Operational Metadata

| Workflow / Dataset | Operational Metadata Required                                                       | Notes |
| ------------------ | ----------------------------------------------------------------------------------- | ----- |
|                    | run ID, status, timestamps, counts, errors, retry count, SLA status, publish status |       |

## 9. Reference Metadata

| Reference Object | Meaning                                     | Owner | Change Policy |
| ---------------- | ------------------------------------------- | ----- | ------------- |
|                  | codes / units / calendar / mapping / lookup |       |               |

## 10. Dataset Catalog Requirements

| Catalog Field              | Required?   | Applies To            |
| -------------------------- | ----------- | --------------------- |
| asset name                 | Yes         | all                   |
| layer                      | Yes         | datasets              |
| description                | Yes         | all                   |
| business definition        | Yes         | consumer-facing       |
| owner                      | Yes         | all                   |
| steward                    | Recommended | governed assets       |
| source system              | Yes         | source-linked assets  |
| upstream dependencies      | Yes         | all derived assets    |
| downstream consumers       | Recommended | shared assets         |
| grain                      | Yes         | Silver/Gold/semantic  |
| schema version             | Recommended | contracted assets     |
| contract ID                | Conditional | contracted assets     |
| quality/trust status       | Yes         | serving/semantic/gold |
| freshness/SLA              | Conditional | P1 outputs            |
| sensitivity classification | Yes         | all datasets          |
| last updated               | Yes         | all                   |
| usage notes                | Recommended | shared assets         |

## 11. Field and Schema Metadata

| Dataset | Field | Type | Meaning | Required?              | Sensitivity                                        |
| ------- | ----- | ---- | ------- | ---------------------- | -------------------------------------------------- |
|         |       |      |         | Yes / No / Conditional | public / internal / confidential / PII / regulated |

## 12. Metric and KPI Metadata

| Metric / KPI | Definition Source                          | Formula Version | Owner | Trust Status                 |
| ------------ | ------------------------------------------ | --------------- | ----- | ---------------------------- |
|              | Phase 3 / Gold spec / Contract / Candidate |                 |       | Draft / Approved / Certified |

## 13. Contract Metadata

| Contract ID | Dataset / Output | Contract Level                                 | Version | Status                      |
| ----------- | ---------------- | ---------------------------------------------- | ------- | --------------------------- |
|             |                  | Minimal / Standard / Full / External-Regulated |         | Draft / Proposed / Approved |

## 14. Transformation Lineage

| Transformation ID | Input Assets | Output Assets | Rule/Logic Reference |
| ----------------- | ------------ | ------------- | -------------------- |
|                   |              |               |                      |

## 15. Dataset Lineage

| Dataset / Output | Upstream Assets | Downstream Assets | Lineage Depth                                       |
| ---------------- | --------------- | ----------------- | --------------------------------------------------- |
|                  |                 |                   | dataset / transformation / run-level / column-level |

## 16. Column Level Lineage Expectations

| Dataset / Field | Column Lineage Required? | Reason                                               | Scope |
| --------------- | ------------------------ | ---------------------------------------------------- | ----- |
|                 | Yes / No / Conditional   | metric / contract / sensitive / audit / not required |       |

## 17. Semantic and Serving Lineage

| Semantic / Serving Object | Upstream Gold / Contract / Metric | Notes |
| ------------------------- | --------------------------------- | ----- |
|                           |                                   |       |

## 18. Quality and Trust Metadata

| Asset | Quality Metadata                                                              | Trust Display                                    |
| ----- | ----------------------------------------------------------------------------- | ------------------------------------------------ |
|       | quality status, last rule result, failed count, known limitations, SLA status | Draft / Promoted / Certified / Warning / Blocked |

## 19. Ownership and Stewardship Metadata

| Asset | Owner | Steward | Responsibility |
| ----- | ----- | ------- | -------------- |
|       |       |         |                |

## 20. Usage and Consumer Metadata

| Asset | Consumer / Usage                            | Signal                                                    |
| ----- | ------------------------------------------- | --------------------------------------------------------- |
|       | dashboard, API, semantic, ML, export, agent | views / queries / API calls / exports / issues / feedback |

## 21. Change and Version Metadata

| Asset | Version Type                                                     | Change Policy                                  |
| ----- | ---------------------------------------------------------------- | ---------------------------------------------- |
|       | schema / contract / metric / transformation / semantic / dataset | compatible / breaking / deprecation / approval |

## 22. Audit and Compliance Metadata

| Asset | Audit Metadata Required                                                                              | Reason |
| ----- | ---------------------------------------------------------------------------------------------------- | ------ |
|       | access log, change log, approval log, quality gate evidence, incident history, deletion traceability |        |

## 23. Metadata Capture Responsibilities

| Metadata Area        | Capture Method                                     | Owner |
| -------------------- | -------------------------------------------------- | ----- |
| business definitions | manual steward / catalog / glossary                |       |
| schema metadata      | automated scan / contract / model docs             |       |
| lineage              | transformation spec / orchestration / lineage tool |       |
| operational metadata | orchestrator / logs / monitoring                   |       |
| quality metadata     | quality rules / test results                       |       |
| usage metadata       | BI/API/platform logs                               |       |

## 24. Metadata Freshness and Maintenance Policy

| Metadata Type       | Update Trigger             | Review Cadence |
| ------------------- | -------------------------- | -------------- |
| business definition | term change / owner review |                |
| schema              | schema change / release    |                |
| contract            | contract version change    |                |
| metric              | KPI definition change      |                |
| lineage             | transformation change      |                |
| quality status      | each run / publish         |                |
| ownership           | team/role change           |                |

## 25. Risks

| Risk | Asset | Impact | Mitigation | Owner |
| ---- | ----- | ------ | ---------- | ----- |
|      |       |        |            |       |

## 26. Assumptions

| Assumption | Risk if Wrong | Validation Needed |
| ---------- | ------------- | ----------------- |
|            |               |                   |

## 27. Open Questions

| Open Question | Why It Matters | Owner | Needed By                              |
| ------------- | -------------- | ----- | -------------------------------------- |
|               |                |       | Phase 19 / Phase 20 / Phase 21 / Later |

## 28. Next Skill Recommendation

Recommended next skill:

```text
des-governance-security-design
```

Reason:

```text
<why governance and security design is the next safe step>
```
