# 10 — Silver Layer Specification

## Metadata

| Field | Value |
| --- | --- |
| Project |  |
| Domain |  |
| Skill | des-silver-layer-design |
| Phase | 10 — Silver Layer Design |
| Status | Draft |
| Owner |  |
| Last Updated |  |
| Upstream Artifact | 09-bronze-layer-specification.md |
| Next Skill | des-gold-layer-design |

## 1. Silver Layer Summary

```text
<short summary of Silver scope, core entities/events, conformance decisions, and major risks>
```

## 2. Silver Scope

In scope:

*
*
*

Out of scope:

* Gold marts and final aggregates
* semantic model measures
* dashboard/API/application implementation
* business-specific reporting views unless approved as reusable entities/facts

## 3. Silver Design Principles

| Principle                     | Decision / Notes |
| ----------------------------- | ---------------- |
| Domain-aligned                |                  |
| Trusted but not final         |                  |
| Conformed where possible      |                  |
| Traceable to Bronze           |                  |
| Explicit transformation rules |                  |
| Preserve uncertainty          |                  |
| Reusable across Gold outputs  |                  |
| Secure by classification      |                  |

## 4. Bronze to Silver Mapping

| Bronze Dataset        | Silver Dataset        | Domain Concept | Mapping Status                               | Notes |
| --------------------- | --------------------- | -------------- | -------------------------------------------- | ----- |
| bronze.<dataset_name> | silver.<dataset_name> |                | Draft / Approved / Risk / Blocked / Deferred |       |

## 5. Silver Dataset Inventory

| Dataset               | Type                                                                               | Description | Status                                       |
| --------------------- | ---------------------------------------------------------------------------------- | ----------- | -------------------------------------------- |
| silver.<dataset_name> | Entity / Event / Reference / Observation / Low-level fact / Source-aligned interim |             | Draft / Approved / Risk / Blocked / Deferred |

## 6. Domain Entity and Event Alignment

| Silver Dataset        | Domain Entity/Event | Alignment Type                                                                   | Status                  |
| --------------------- | ------------------- | -------------------------------------------------------------------------------- | ----------------------- |
| silver.<dataset_name> |                     | Entity / Event / Value object / Reference / Observation / Source-aligned interim | Draft / Approved / Risk |

## 7. Conceptual to Logical Mapping

| Domain Concept | Silver Dataset        | Key Attributes / Fields | Notes |
| -------------- | --------------------- | ----------------------- | ----- |
|                | silver.<dataset_name> |                         |       |

## 8. Grain and Identity Rules

| Silver Dataset        | Grain              | Identity Rule | Status                  |
| --------------------- | ------------------ | ------------- | ----------------------- |
| silver.<dataset_name> | one record per ... |               | Draft / Approved / Risk |

## 9. Key Strategy

| Silver Dataset        | Key Strategy                                                                                                    | Key Fields | Notes |
| --------------------- | --------------------------------------------------------------------------------------------------------------- | ---------- | ----- |
| silver.<dataset_name> | Source PK / Natural key / Composite key / Surrogate key / Hash key / Crosswalk key / Generated row ID / Unknown |            |       |

## 10. Deduplication and Survivorship Rules

| Silver Dataset        | Duplicate Scenario | Rule                                                                                | Status                  |
| --------------------- | ------------------ | ----------------------------------------------------------------------------------- | ----------------------- |
| silver.<dataset_name> |                    | Exact hash / latest update time / source priority / keep versions / manual / custom | Draft / Approved / Risk |

## 11. Conformance and Standardization Rules

| Silver Dataset        | Field / Concept | Standardization Rule | Notes |
| --------------------- | --------------- | -------------------- | ----- |
| silver.<dataset_name> |                 |                      |       |

## 12. Data Type Normalization

| Silver Dataset        | Field / Concept | Source Type | Target Type | Rule |
| --------------------- | --------------- | ----------- | ----------- | ---- |
| silver.<dataset_name> |                 |             |             |      |

## 13. Timezone and Temporal Normalization

| Silver Dataset        | Time Field / Concept | Source Meaning                                                                      | Normalized Meaning | Rule |
| --------------------- | -------------------- | ----------------------------------------------------------------------------------- | ------------------ | ---- |
| silver.<dataset_name> |                      | event_time / processing_time / business_date / updated_at / snapshot_date / unknown |                    |      |

## 14. Unit and Currency Normalization

| Silver Dataset        | Field / Concept | Source Unit/Currency | Canonical Unit/Currency | Rule |
| --------------------- | --------------- | -------------------- | ----------------------- | ---- |
| silver.<dataset_name> |                 |                      |                         |      |

## 15. Code Status and Category Mapping

| Silver Dataset        | Source Code/Status/Category | Canonical Value | Mapping Rule | Unknown Handling                     |
| --------------------- | --------------------------- | --------------- | ------------ | ------------------------------------ |
| silver.<dataset_name> |                             |                 |              | Flag / Quarantine / Preserve / Defer |

## 16. Null and Missing Value Handling

| Silver Dataset        | Field / Concept | Missing Meaning                                                           | Handling Rule                              |
| --------------------- | --------------- | ------------------------------------------------------------------------- | ------------------------------------------ |
| silver.<dataset_name> |                 | Unknown / Not applicable / Not collected / Redacted / Error / Source null | Preserve / Impute / Reject / Flag / Custom |

## 17. Schema Evolution Handling

| Silver Dataset        | Evolution Scenario                                                             | Policy                                                        | Notes |
| --------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------- | ----- |
| silver.<dataset_name> | Additive field / removed field / type change / renamed field / semantic change | Allow / Block / Quarantine / Version / Manual review / Custom |       |

## 18. Source of Truth and Cross Source Reconciliation

| Concept / Attribute | Candidate Sources | Reconciliation Rule                                                                              | Status                  |
| ------------------- | ----------------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
|                     | SRC-001, SRC-002  | authoritative source / source priority / latest wins / merge / keep separate / manual / deferred | Draft / Approved / Risk |

## 19. Silver Boundary Data Quality Rules

| Rule ID    | Silver Dataset        | Rule | Severity                           | Failure Handling                              |
| ---------- | --------------------- | ---- | ---------------------------------- | --------------------------------------------- |
| DQ-SIL-001 | silver.<dataset_name> |      | P1 Blocking / P2 Warning / P3 Info | Reject / Quarantine / Flag / Alert / Continue |

## 20. Rejected and Quarantined Record Handling

| Silver Dataset        | Reject Condition | Target / Handling                                                         | Required Evidence                                  |
| --------------------- | ---------------- | ------------------------------------------------------------------------- | -------------------------------------------------- |
| silver.<dataset_name> |                  | quarantine / reject table / flagged record / manual review / upstream fix | reason, source reference, bronze reference, run ID |

## 21. Privacy and Security Handling

| Silver Dataset        | Sensitivity                                                  | Handling                                                           | Access Policy |
| --------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------ | ------------- |
| silver.<dataset_name> | Public / Internal / Confidential / PII / Regulated / Unknown | retain / mask / tokenize / hash / drop / split restricted / review |               |

## 22. Lineage and Traceability

| Silver Dataset        | Required Lineage Fields                                                                                                                                           | Traceability Notes |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| silver.<dataset_name> | source_system, source_object, source_record_id/source_file/message_id, bronze_dataset, bronze_ingestion_time, pipeline_run_id, transformation_run_id, record_hash |                    |

## 23. Refresh and Incremental Behavior

| Silver Dataset        | Refresh Mode                                                                            | Incremental Rule | Notes |
| --------------------- | --------------------------------------------------------------------------------------- | ---------------- | ----- |
| silver.<dataset_name> | Full refresh / Incremental merge / Append-only / Snapshot / SCD-ready / Manual / Custom |                  |       |

## 24. Risks

| Risk | Dataset | Impact | Mitigation | Owner |
| ---- | ------- | ------ | ---------- | ----- |
|      |         |        |            |       |

## 25. Assumptions

| Assumption | Risk if Wrong | Validation Needed |
| ---------- | ------------- | ----------------- |
|            |               |                   |

## 26. Open Questions

| Open Question | Why It Matters | Owner | Needed By                              |
| ------------- | -------------- | ----- | -------------------------------------- |
|               |                |       | Phase 11 / Phase 12 / Phase 14 / Later |

## 27. Next Skill Recommendation

Recommended next skill:

```text
des-gold-layer-design
```

Reason:

```text
<why Gold layer design is the next safe step>
```
