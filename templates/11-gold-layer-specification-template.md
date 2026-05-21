# 11 — Gold Layer Specification

## Metadata

| Field | Value |
| --- | --- |
| Project |  |
| Domain |  |
| Skill | des-gold-layer-design |
| Phase | 11 — Gold Layer Design |
| Status | Draft |
| Owner |  |
| Last Updated |  |
| Upstream Artifact | 10-silver-layer-specification.md |
| Next Skill | des-data-contracts |

## 1. Gold Layer Summary

```text
<short summary of Gold outputs, consumers, model choices, and major risks>
```

## 2. Gold Scope

In scope:

*
*
*

Out of scope:

* SQL/Python transformation implementation code
* dashboard visual layout
* API endpoint implementation
* semantic model internals
* orchestration implementation
* unrelated exploratory datasets

## 3. Gold Design Principles

| Principle                   | Decision / Notes |
| --------------------------- | ---------------- |
| Question-driven             |                  |
| Consumer-ready              |                  |
| KPI-aligned                 |                  |
| Grain-explicit              |                  |
| Serving-aware               |                  |
| Traceable to Silver/Bronze  |                  |
| Quality-gated               |                  |
| Secure by classification    |                  |
| Contract-ready where needed |                  |

## 4. Business Question to Gold Mapping

| Business Question | Gold Dataset / Output | Consumer | Status                             |
| ----------------- | --------------------- | -------- | ---------------------------------- |
| BQ-001            | gold.<dataset_name>   |          | Draft / Approved / Risk / Deferred |

## 5. Requirement and KPI to Gold Mapping

| Requirement / KPI | Gold Dataset / Output | Usage                                             | Status                  |
| ----------------- | --------------------- | ------------------------------------------------- | ----------------------- |
| FR-001 / KPI-001  | gold.<dataset_name>   | metric input / reporting / API / ML / operational | Draft / Approved / Risk |

## 6. Silver to Gold Mapping

| Gold Dataset        | Silver Input Dataset(s)                | Join / Dependency Notes | Status                  |
| ------------------- | -------------------------------------- | ----------------------- | ----------------------- |
| gold.<dataset_name> | silver.<dataset_a>, silver.<dataset_b> |                         | Draft / Approved / Risk |

## 7. Gold Dataset Inventory

| Dataset             | Description | Output Type                                                                                                              | Status                                       |
| ------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| gold.<dataset_name> |             | Dimensional mart / Aggregate / Wide analytical / Metric-ready / Report-ready / API-serving / ML feature / Export / Audit | Draft / Approved / Risk / Blocked / Deferred |

## 8. Gold Output Type

| Dataset             | Output Type | Rationale |
| ------------------- | ----------- | --------- |
| gold.<dataset_name> |             |           |

## 9. Consumer and Serving Alignment

| Dataset             | Primary Consumer | Serving Direction                                                                   | Notes |
| ------------------- | ---------------- | ----------------------------------------------------------------------------------- | ----- |
| gold.<dataset_name> |                  | BI semantic / dashboard / analyst query / API / ML / export / governance / multiple |       |

## 10. Grain and Aggregation Rules

| Dataset             | Grain           | Aggregation Rule | Time Grain                                        |
| ------------------- | --------------- | ---------------- | ------------------------------------------------- |
| gold.<dataset_name> | one row per ... |                  | none / hourly / daily / weekly / monthly / custom |

## 11. Metric and KPI Definitions Used

| Metric / KPI | Definition Source                    | Formula / Definition | Gold Dataset        |
| ------------ | ------------------------------------ | -------------------- | ------------------- |
| KPI-001      | Phase 3 / approved owner / candidate |                      | gold.<dataset_name> |

## 12. Dimension Fact Aggregate and Output Model Decisions

| Dataset             | Model Pattern                                                                       | Components                              | Rationale |
| ------------------- | ----------------------------------------------------------------------------------- | --------------------------------------- | --------- |
| gold.<dataset_name> | Star schema / aggregate / wide table / read model / feature table / export / custom | facts, dimensions, attributes, measures |           |

## 13. Filtering and Slicing Expectations

| Dataset             | Required Slice / Filter                                        | Reason | Consumer |
| ------------------- | -------------------------------------------------------------- | ------ | -------- |
| gold.<dataset_name> | date / region / customer / product / status / segment / custom |        |          |

## 14. History and Slowly Changing Behavior

| Dataset             | History Behavior                                                                                                                     | Rationale | Notes |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | --------- | ----- |
| gold.<dataset_name> | current-state / snapshot / SCD Type 1 / SCD Type 2 / periodic snapshot / recompute affected windows / immutable event facts / custom |           |       |

## 15. Freshness and SLA Expectations

| Dataset             | Freshness / SLA | Timezone | Severity if Missed                 | Status           |
| ------------------- | --------------- | -------- | ---------------------------------- | ---------------- |
| gold.<dataset_name> |                 |          | P1 Blocking / P2 Warning / P3 Info | Draft / Approved |

## 16. Gold Boundary Data Quality Rules

| Rule ID    | Gold Dataset        | Rule | Severity                           | Failure Handling                        |
| ---------- | --------------------- | ---- | ---------------------------------- | --------------------------------------- |
| DQ-GLD-001 | gold.<dataset_name> |      | P1 Blocking / P2 Warning / P3 Info | Block publish / alert / flag / continue |

## 17. Access Control and Security Handling

| Dataset             | Sensitivity                                                  | Access Policy                                                                                     | Notes |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- | ----- |
| gold.<dataset_name> | Public / Internal / Confidential / PII / Regulated / Unknown | public / internal / restricted / role-based / row-level / column-level / masked / review required |       |

## 18. Contract Expectations

| Dataset             | Contract Level                                        | Reason | Required by Phase 12? |
| ------------------- | ----------------------------------------------------- | ------ | --------------------- |
| gold.<dataset_name> | none / minimal / standard / full / external-regulated |        | Yes / No / Later      |

## 19. Lineage and Traceability

| Dataset             | Required Lineage                                                                                                          | Notes |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------- | ----- |
| gold.<dataset_name> | Silver inputs, transformation run ID, metric version, source/Silver date window, upstream quality status, pipeline run ID |       |

## 20. Performance and Cost Considerations

| Dataset             | Consideration                                                                                    | Design Implication |
| ------------------- | ------------------------------------------------------------------------------------------------ | ------------------ |
| gold.<dataset_name> | query latency / refresh cost / storage size / concurrency / partitioning / aggregation / caching |                    |

## 21. Risks

| Risk | Dataset | Impact | Mitigation | Owner |
| ---- | ------- | ------ | ---------- | ----- |
|      |         |        |            |       |

## 22. Assumptions

| Assumption | Risk if Wrong | Validation Needed |
| ---------- | ------------- | ----------------- |
|            |               |                   |

## 23. Open Questions

| Open Question | Why It Matters | Owner | Needed By                                         |
| ------------- | -------------- | ----- | ------------------------------------------------- |
|               |                |       | Phase 12 / Phase 13 / Phase 14 / Phase 16 / Later |

## 24. Next Skill Recommendation

Recommended next skill:

```text
des-data-contracts
```

Reason:

```text
<why data contracts are the next safe step>
```
