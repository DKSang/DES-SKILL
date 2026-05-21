# 09 — Bronze Layer Specification

## Metadata

| Field | Value |
| --- | --- |
| Project |  |
| Domain |  |
| Skill | des-bronze-layer-design |
| Phase | 09 — Bronze Layer Design |
| Status | Draft |
| Owner |  |
| Last Updated |  |
| Upstream Artifact | 08-ingestion-specification.md |
| Next Skill | des-silver-layer-design |

## 1. Bronze Layer Summary

```text
<short summary of Bronze scope, source mappings, raw preservation, and major risks>
```

## 2. Bronze Scope

In scope:

*
*
*

Out of scope:

* Silver conformance
* Gold metrics/marts
* semantic model logic
* dashboard/API implementation
* business-level deduplication unless explicitly approved

## 3. Bronze Design Principles

| Principle                         | Decision / Notes |
| --------------------------------- | ---------------- |
| Preserve source truth             |                  |
| Enable replay/backfill            |                  |
| Keep lineage and audit metadata   |                  |
| Avoid premature conformance       |                  |
| Control raw access                |                  |
| Design for schema drift           |                  |
| Quarantine bad data with evidence |                  |
| Retain intentionally              |                  |

## 4. Source to Bronze Mapping

| Source ID | Source Object / Feed | Ingestion Pattern | Bronze Dataset        | Status                                       |
| --------- | -------------------- | ----------------- | --------------------- | -------------------------------------------- |
| SRC-001   |                      |                   | bronze.<dataset_name> | Draft / Approved / Risk / Blocked / Deferred |

## 5. Bronze Dataset Inventory

| Dataset               | Source ID | Description | Dataset Boundary                                                    | Status                                       |
| --------------------- | --------- | ----------- | ------------------------------------------------------------------- | -------------------------------------------- |
| bronze.<dataset_name> | SRC-001   |             | Source object / endpoint / topic / file family / logical raw object | Draft / Approved / Risk / Blocked / Deferred |

## 6. Raw Preservation Strategy

| Dataset               | Raw Preservation Policy                                                                                               | Retain Original Payload? | Notes |
| --------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------ | ----- |
| bronze.<dataset_name> | Exact raw / Parsed + original / Parsed only / Immutable files + metadata / Minimal subset / No raw retention / Custom | Yes / No / Partial / TBD |       |

## 7. Storage Format Decision

| Dataset               | Format                                                                                                                      | Rationale | Status                  |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------- | ----------------------- |
| bronze.<dataset_name> | Original files / JSON / CSV / Parquet / Transactional lake table / Warehouse staging table / Stream store / Hybrid / Custom |           | Draft / Approved / Risk |

## 8. File and Table Organization

| Dataset               | Path / Namespace Pattern | Naming Convention | Notes |
| --------------------- | ------------------------ | ----------------- | ----- |
| bronze.<dataset_name> |                          |                   |       |

Example pattern:

```text
bronze/<source_system>/<source_object>/ingestion_date=YYYY-MM-DD/
```

## 9. Partitioning Strategy

| Dataset               | Partition Key(s)                                                                                                       | Rationale | Risk                          |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------- | ----------------------------- |
| bronze.<dataset_name> | ingestion_date / source_event_date / source_system+ingestion_date / file_batch_date / none / platform-managed / custom |           | Low / Medium / High / Unknown |

## 10. Mandatory Metadata Columns

| Metadata Field    | Required?   | Purpose                                          | Applies To          |
| ----------------- | ----------- | ------------------------------------------------ | ------------------- |
| source_system     | Yes         | Identify source system                           | All                 |
| source_object     | Yes         | Identify source table/endpoint/topic/file family | All                 |
| ingestion_time    | Yes         | Track when data was ingested                     | All                 |
| ingestion_date    | Recommended | Partition/audit helper                           | Most batch/file/API |
| pipeline_run_id   | Recommended | Link to run evidence                             | Most                |
| source_batch_id   | Conditional | Track source batch/window                        | Batch               |
| source_file_name  | Conditional | Trace source file                                | File ingestion      |
| source_file_hash  | Conditional | Detect duplicate/changed file                    | File ingestion      |
| source_record_id  | Conditional | Trace source record                              | Record-based source |
| message_id        | Conditional | Trace message/event                              | Streaming/message   |
| record_hash       | Conditional | Dedup/change detection                           | Most                |
| schema_version    | Conditional | Track schema evolution                           | Where available     |
| load_status       | Recommended | loaded/quarantined/rejected                      | All                 |
| load_error_reason | Conditional | Explain rejected/quarantined data                | Quarantine          |

## 11. Ingestion Audit Metadata

| Dataset               | Audit Evidence                                                                                           | Required?              | Notes |
| --------------------- | -------------------------------------------------------------------------------------------------------- | ---------------------- | ----- |
| bronze.<dataset_name> | row_count / file_count / event_count / checksum / checkpoint / extraction_window / runtime / error_count | Yes / Conditional / No |       |

## 12. Schema Drift and Evolution Handling

| Dataset               | Drift Policy                                                                                                                            | Detection Method | Response | Status                  |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | -------- | ----------------------- |
| bronze.<dataset_name> | Allow additive / Store raw and defer parsing / Quarantine unexpected schema / Block mismatch / Version schemas / Manual review / Custom |                  |          | Draft / Approved / Risk |

## 13. Replay and Backfill Support

| Dataset               | Replay Strategy                                                                                                                        | Backfill Strategy | Limitations |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ----------- |
| bronze.<dataset_name> | Immutable raw archive / ingestion_date window / source_event_date window / file manifest / source replay only / manual / none / custom |                   |             |

## 14. Idempotency and Deduplication Boundary

| Dataset               | Bronze Boundary Policy                                                                                                       | Business Dedup Deferred? | Notes |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ----- |
| bronze.<dataset_name> | Preserve all arrivals / prevent duplicate file-batch / exact raw record hash dedupe / source key + timestamp dedupe / custom | Yes / No / TBD           |       |

## 15. Quarantine and Rejected Data Handling

| Dataset               | Quarantine Policy                                                                                  | Quarantine Target | Required Evidence                                               |
| --------------------- | -------------------------------------------------------------------------------------------------- | ----------------- | --------------------------------------------------------------- |
| bronze.<dataset_name> | Bad records / whole file-batch / dead-letter events / fail load / invalid status / manual / custom |                   | error_reason, source reference, ingestion_time, pipeline_run_id |

## 16. Retention and Lifecycle Policy

| Dataset               | Retention Policy                                                                                                             | Hot/Warm/Cold Lifecycle | Deletion/Archive Rule | Status                  |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ----------------------- | --------------------- | ----------------------- |
| bronze.<dataset_name> | Indefinite / fixed period / hot-warm-cold / metadata-only after period / delete after processing / source-dependent / custom |                         |                       | Draft / Approved / Risk |

## 17. Access Control and Sensitivity Classification

| Dataset               | Sensitivity                                                                   | Access Policy                                                                                     | Notes |
| --------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ----- |
| bronze.<dataset_name> | Public / Internal / Confidential / PII / Regulated / Secret-bearing / Unknown | Public / internal restricted / least privilege / governance approval / block/quarantine / unknown |       |

## 18. Bronze Boundary Data Quality Expectations

| Dataset               | Quality Check                                                                                                                  | Severity     | Notes |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------ | ----- |
| bronze.<dataset_name> | readability / required metadata / non-empty batch / schema presence / row count / duplicate file detection / checksum / custom | P1 / P2 / P3 |       |

## 19. Lineage and Traceability Expectations

| Dataset               | Traceability Requirement                                          | Notes |
| --------------------- | ----------------------------------------------------------------- | ----- |
| bronze.<dataset_name> | source → ingestion run → raw record/file/message → Bronze dataset |       |

## 20. Operational Evidence Requirements

| Evidence                 | Required?   | Purpose                 |
| ------------------------ | ----------- | ----------------------- |
| Pipeline run ID          | Yes         | Link Bronze data to run |
| Source extraction window | Conditional | Audit incremental loads |
| Checkpoint value         | Conditional | Restart/replay          |
| File manifest            | Conditional | File idempotency        |
| Row/file/event counts    | Yes         | Completeness check      |
| Error/quarantine counts  | Conditional | Failure monitoring      |
| Schema drift log         | Conditional | Drift monitoring        |
| Retention action log     | Conditional | Lifecycle audit         |

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
|               |                |       | Phase 10 / Phase 14 / Phase 15 / Phase 19 / Later |

## 24. Next Skill Recommendation

Recommended next skill:

```text
des-silver-layer-design
```

Reason:

```text
<why Silver layer design is the next safe step>
```
