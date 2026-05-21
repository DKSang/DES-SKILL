# 13 — Transformation Specification

## Metadata

| Field | Value |
| --- | --- |
| Project |  |
| Domain |  |
| Skill | des-transformation-design |
| Phase | 13 — Transformation Design |
| Status | Draft |
| Owner |  |
| Last Updated |  |
| Upstream Artifact | 12-data-contract-specification.md |
| Next Skill | des-data-quality |

## 1. Transformation Summary

```text
<short summary of transformation scope, major logic areas, dependencies, and risks>
```

## 2. Transformation Scope

In scope:

*
*
*

Out of scope:

* implementation SQL/Python/dbt/notebook code
* orchestration workflow implementation
* CD pipeline implementation
* dashboard/API serving implementation
* final test implementation

## 3. Transformation Design Principles

| Principle                | Decision / Notes |
| ------------------------ | ---------------- |
| Contract-aligned         |                  |
| Grain-explicit           |                  |
| Rule-driven              |                  |
| Traceable                |                  |
| Incremental-safe         |                  |
| Re-runnable              |                  |
| Validated before publish |                  |
| Secure by classification |                  |
| Composable               |                  |

## 4. Transformation Inventory

| Transformation ID | Name | Type                                                                                                                              | Output Dataset | Status                                       |
| ----------------- | ---- | --------------------------------------------------------------------------------------------------------------------------------- | -------------- | -------------------------------------------- |
| TR-001            |      | Cleaning / Standardization / Conformance / Deduplication / SCD / Aggregation / Metric / Feature / Read model / Validation / Audit |                | Draft / Approved / Risk / Blocked / Deferred |

## 5. Layer to Layer Transformation Mapping

| Transformation ID | Layer Path                                               | Input Layer | Output Layer | Notes |
| ----------------- | -------------------------------------------------------- | ----------- | ------------ | ----- |
| TR-001            | Bronze → Silver / Silver → Gold / Gold → Serving / Other |             |              |       |

## 6. Dependency Graph

```text
TR-001
  -> TR-002
  -> TR-003

TR-004 depends on:
  - TR-002
  - REF-001
```

## 7. Input and Output Dataset Mapping

| Transformation ID | Input Dataset(s) | Output Dataset   | Purpose |
| ----------------- | ---------------- | ---------------- | ------- |
| TR-001            | bronze.<dataset> | silver.<dataset> |         |

## 8. Transformation Grain

| Transformation ID | Output Grain    | Grain Source                                | Status                  |
| ----------------- | --------------- | ------------------------------------------- | ----------------------- |
| TR-001            | one row per ... | Silver spec / Gold spec / Contract / Custom | Draft / Approved / Risk |

## 9. Business Rules

| Rule ID | Transformation ID | Business Rule | Definition Source                                     | Status                  |
| ------- | ----------------- | ------------- | ----------------------------------------------------- | ----------------------- |
| BR-001  | TR-001            |               | Domain model / KPI catalog / Contract / Owner / Draft | Draft / Approved / Risk |

## 10. Cleaning and Conformance Rules

| Transformation ID | Rule Type                                                                                                   | Rule | Failure Handling                              |
| ----------------- | ----------------------------------------------------------------------------------------------------------- | ---- | --------------------------------------------- |
| TR-001            | Type cast / null handling / code mapping / timezone / unit / currency / identity / source-of-truth / custom |      | reject / quarantine / flag / continue / block |

## 11. Join and Relationship Rules

| Transformation ID | Left Dataset | Right Dataset | Join Rule | Cardinality                          | Unmatched Handling                              |
| ----------------- | ------------ | ------------- | --------- | ------------------------------------ | ----------------------------------------------- |
| TR-001            |              |               |           | 1:1 / 1:N / N:M / temporal / unknown | reject / keep left / flag / quarantine / custom |

## 12. Deduplication and Survivorship Rules

| Transformation ID | Duplicate Scenario | Rule                                                                           | Status                  |
| ----------------- | ------------------ | ------------------------------------------------------------------------------ | ----------------------- |
| TR-001            |                    | exact hash / latest update / source priority / keep versions / manual / custom | Draft / Approved / Risk |

## 13. SCD and History Handling

| Transformation ID | History Behavior                                                                      | Rule | Notes |
| ----------------- | ------------------------------------------------------------------------------------- | ---- | ----- |
| TR-001            | current-state / SCD1 / SCD2 / snapshot / immutable event / recompute windows / custom |      |       |

## 14. Aggregation and Metric Calculation Rules

| Transformation ID | Metric / Output | Formula / Aggregation | Definition Source                     |
| ----------------- | --------------- | --------------------- | ------------------------------------- |
| TR-001            |                 |                       | Phase 3 / Phase 11 / Contract / Draft |

## 15. Incremental Processing Strategy

| Transformation ID | Strategy                                                                                                                     | Change Detection | Checkpoint / Window |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------- | ------------------- |
| TR-001            | Full refresh / append / merge-upsert / partition overwrite / CDC-driven / snapshot compare / stream offset / manual / custom |                  |                     |

## 16. Backfill and Replay Strategy

| Transformation ID | Backfill / Replay Method                                                                                         | Limitation | Notes |
| ----------------- | ---------------------------------------------------------------------------------------------------------------- | ---------- | ----- |
| TR-001            | full rebuild / date-window / partition-list / Bronze replay / affected-window recompute / manual / none / custom |            |       |

## 17. Late Arriving and Corrected Data Handling

| Transformation ID | Policy                                                                                                               | Threshold / Window | Downstream Impact |
| ----------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------ | ----------------- |
| TR-001            | not relevant / reprocess affected windows / watermark / next refresh / keep correction history / quarantine / custom |                    |                   |

## 18. Error Handling and Quarantine Behavior

| Transformation ID | Error Condition | Handling                                                                              | Severity     |
| ----------------- | --------------- | ------------------------------------------------------------------------------------- | ------------ |
| TR-001            |                 | fail/block / quarantine / flag / continue warning / manual review / rollback / custom | P1 / P2 / P3 |

## 19. Validation and Test Expectations

| Transformation ID | Validation Type                                                                                                                                          | Expectation | Future Test Candidate? |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ---------------------- |
| TR-001            | schema / row count / uniqueness / required fields / referential integrity / metric reconciliation / freshness / contract / lineage / consumer acceptance |             | Yes / No               |

## 20. Contract Alignment

| Transformation ID | Contract ID | Contract Clause Supported                               | Alignment Status                                                    |
| ----------------- | ----------- | ------------------------------------------------------- | ------------------------------------------------------------------- |
| TR-001            | DC-001      | schema / grain / freshness / quality / lineage / access | Satisfies / Partially satisfies / Conflicts / Not applicable / Risk |

## 21. Lineage and Metadata Expectations

| Transformation ID | Required Metadata                                                                                                                     | Notes |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| TR-001            | input dataset version, output dataset version, transformation run ID, contract version, metric version, source window, quality status |       |

## 22. Performance and Cost Considerations

| Transformation ID | Concern                                                                                                     | Design Implication |
| ----------------- | ----------------------------------------------------------------------------------------------------------- | ------------------ |
| TR-001            | runtime / scan volume / join cost / shuffle / partitioning / incremental efficiency / concurrency / storage |                    |

## 23. Security and Privacy Handling

| Transformation ID | Sensitive Data Concern                                           | Handling                                                           |
| ----------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------ |
| TR-001            | PII / confidential / regulated / secret-bearing / none / unknown | retain restricted / mask / hash / tokenize / drop / split / review |

## 24. Implementation Boundary

This section clarifies what later implementation may use without prescribing code.

| Transformation ID | Preferred Implementation Direction                                                       | Notes                                     |
| ----------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------- |
| TR-001            | SQL / dbt / notebook / Spark / stored procedure / Python / managed transform / undecided | Design only; implementation happens later |

## 25. Risks

| Risk | Transformation | Impact | Mitigation | Owner |
| ---- | -------------- | ------ | ---------- | ----- |
|      |                |        |            |       |

## 26. Assumptions

| Assumption | Risk if Wrong | Validation Needed |
| ---------- | ------------- | ----------------- |
|            |               |                   |

## 27. Open Questions

| Open Question | Why It Matters | Owner | Needed By                                         |
| ------------- | -------------- | ----- | ------------------------------------------------- |
|               |                |       | Phase 14 / Phase 15 / Phase 20 / Phase 21 / Later |

## 28. Next Skill Recommendation

Recommended next skill:

```text
des-data-quality
```

Reason:

```text
<why data quality design is the next safe step>
```
