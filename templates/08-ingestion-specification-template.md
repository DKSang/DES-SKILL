# 08 — Ingestion Specification

## Metadata

| Field | Value |
| --- | --- |
| Project |  |
| Domain |  |
| Skill | des-ingestion-design |
| Phase | 08 — Ingestion Design |
| Status | Draft |
| Owner |  |
| Last Updated |  |
| Upstream Artifact | 07-architecture-decision-record.md |
| Next Skill | des-bronze-layer-design |

## 1. Ingestion Summary

```text
<short summary of ingestion scope, source patterns, major decisions, and risks>
```

## 2. Ingestion Scope

In scope:

*
*
*

Out of scope:

*
*
*

## 3. Source-to-Ingestion Mapping

| Source ID | Source Name | Product Output / Requirement | Ingestion Status                             | Notes |
| --------- | ----------- | ---------------------------- | -------------------------------------------- | ----- |
| SRC-001   |             | OUT-001 / FR-001             | Draft / Approved / Risk / Blocked / Deferred |       |

## 4. Ingestion Pattern per Source

| Source ID | Pattern                                                                                                                                                                                | Rationale | Status                                       |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | -------------------------------------------- |
| SRC-001   | Full snapshot / Differential batch / Append-only batch / CDC / API scheduled pull / API polling / Webhook / File drop / Managed connector / Stream / Data sharing / Manual / Migration |           | Draft / Approved / Risk / Blocked / Deferred |

## 5. Batch Streaming and Event Decision

| Source ID | Processing Mode                                               | Rationale | Status                            |
| --------- | ------------------------------------------------------------- | --------- | --------------------------------- |
| SRC-001   | Batch / Streaming / Event-driven / Hybrid / Manual / Deferred |           | Draft / Approved / Risk / Blocked |

## 6. Frequency and Trigger

| Source ID | Frequency / Trigger                                                             | Timezone | Downstream Freshness Supported | Status           |
| --------- | ------------------------------------------------------------------------------- | -------- | ------------------------------ | ---------------- |
| SRC-001   | Manual / One-time / Scheduled / Event-triggered / Continuous / Polling / Custom |          |                                | Draft / Approved |

## 7. Bounded and Unbounded Data Classification

| Source ID | Data Classification                   | Notes |
| --------- | ------------------------------------- | ----- |
| SRC-001   | Bounded / Unbounded / Mixed / Unknown |       |

## 8. Access and Extraction Method

| Source ID | Access Method                                                                         | Permission Status                     | Extraction Method | Notes |
| --------- | ------------------------------------------------------------------------------------- | ------------------------------------- | ----------------- | ----- |
| SRC-001   | API / DB connection / File share / Data sharing / Connector / Stream / Manual / Other | Approved / Pending / Denied / Unknown |                   |       |

## 9. Incremental and Checkpoint Strategy

| Source ID | Incremental Strategy                                                                                                                                  | Checkpoint / Watermark | Risk |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ---- |
| SRC-001   | Full refresh / Source timestamp / Sequence ID / Changed records / CDC offset / File manifest / Message offset / API cursor / Manual version / Unknown |                        |      |

## 10. Idempotency Strategy

| Source ID | Strategy                                                                                                                  | Rerun Behavior | Status                  |
| --------- | ------------------------------------------------------------------------------------------------------------------------- | -------------- | ----------------------- |
| SRC-001   | Overwrite window / Append + dedupe / Merge-upsert / Immutable raw + manifest / Stream effectively-once / Manual / Unknown |                | Draft / Approved / Risk |

## 11. Replay and Backfill Strategy

| Source ID | Strategy                                                                                                                      | Historical Coverage | Limitations |
| --------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------- | ----------- |
| SRC-001   | Full reload / Date-window backfill / File-list backfill / Stream-offset replay / Raw landing replay / Manual / None / Unknown |                     |             |

## 12. Late Arriving Data Handling

| Source ID | Policy                                                                                               | Lateness Threshold | Downstream Impact |
| --------- | ---------------------------------------------------------------------------------------------------- | ------------------ | ----------------- |
| SRC-001   | Not relevant / Correct affected windows / Watermark threshold / Quarantine / Resolve later / Unknown |                    |                   |

## 13. Ordering and Deduplication Expectations

| Source ID | Ordering Concern   | Deduplication Key / Rule | Notes |
| --------- | ------------------ | ------------------------ | ----- |
| SRC-001   | Yes / No / Unknown |                          |       |

## 14. Payload and Serialization Expectations

| Source ID | Payload Type                                                           | Serialization / Format                                   | Deserialization Risk          |
| --------- | ---------------------------------------------------------------------- | -------------------------------------------------------- | ----------------------------- |
| SRC-001   | Structured / Semi-structured / Unstructured / Binary / Mixed / Unknown | JSON / CSV / Parquet / Avro / XML / Excel / Logs / Other | Low / Medium / High / Unknown |

## 15. Schema Drift and Evolution Policy

| Source ID | Policy                                                                                               | Detection Method | Response |
| --------- | ---------------------------------------------------------------------------------------------------- | ---------------- | -------- |
| SRC-001   | Allow additive / Block mismatch / Quarantine / Version schemas / Store raw / Manual review / Unknown |                  |          |

## 16. Error Handling and Quarantine

| Source ID | Error Policy                                                                                 | Retry Policy | Quarantine / Dead-Letter Policy | Severity     |
| --------- | -------------------------------------------------------------------------------------------- | ------------ | ------------------------------- | ------------ |
| SRC-001   | Fail fast / Retry / Quarantine bad records / Dead-letter / Partial success / Manual / Custom |              |                                 | P1 / P2 / P3 |

## 17. Security and Credential Handling

| Source ID | Credential Handling                                       | Sensitive Data Handling                                           | Audit Requirement |
| --------- | --------------------------------------------------------- | ----------------------------------------------------------------- | ----------------- |
| SRC-001   | None / Secret manager / SSO / Key vault / Token / Unknown | None / Restrict / Mask / Encrypt / Governance review / Quarantine |                   |

## 18. Source Impact Rate Limits and Throttling

| Source ID | Constraint                                                                             | Mitigation | Status                  |
| --------- | -------------------------------------------------------------------------------------- | ---------- | ----------------------- |
| SRC-001   | API quota / DB load / Vendor limit / File delivery / Stream retention / None / Unknown |            | Draft / Approved / Risk |

## 19. Landing Target Expectations

This section describes high-level landing expectations only. Detailed Bronze design belongs to Phase 9.

| Source ID | Landing Expectation                                                                    | Retain Raw?    | Notes |
| --------- | -------------------------------------------------------------------------------------- | -------------- | ----- |
| SRC-001   | Raw file/object/table/event landing / Connector-managed landing / Manual landing / TBD | Yes / No / TBD |       |

## 20. Ingestion Metadata Expectations

| Metadata Field          | Purpose                  | Required?   |
| ----------------------- | ------------------------ | ----------- |
| source_system           | Identify source          | Yes         |
| ingestion_time          | Track processing time    | Yes         |
| ingestion_date          | Partition/audit helper   | Recommended |
| pipeline_run_id         | Trace run                | Recommended |
| source_file_or_batch_id | Trace batch/file         | Conditional |
| source_record_id        | Trace source record      | Conditional |
| record_hash             | Dedup/change detection   | Conditional |
| schema_version          | Track schema evolution   | Conditional |
| load_status             | Track success/quarantine | Recommended |

## 21. Monitoring Evidence and Audit Expectations

| Evidence                 | Purpose                           | Required?   |
| ------------------------ | --------------------------------- | ----------- |
| Run status               | Know whether ingestion succeeded  | Yes         |
| Row/event/file count     | Detect missing or duplicate loads | Yes         |
| Freshness timestamp      | Validate SLA                      | Yes for P1  |
| Error count              | Monitor failures                  | Yes         |
| Quarantine count         | Monitor bad records               | Conditional |
| Checkpoint value         | Support restart/replay            | Conditional |
| Source extraction window | Audit extraction                  | Conditional |
| Duration/runtime         | Monitor performance               | Recommended |

## 22. Operational Dependencies

| Source ID | Dependency | Impact | Owner |
| --------- | ---------- | ------ | ----- |
| SRC-001   |            |        |       |

## 23. Risks

| Risk | Source | Impact | Mitigation | Owner |
| ---- | ------ | ------ | ---------- | ----- |
|      |        |        |            |       |

## 24. Assumptions

| Assumption | Risk if Wrong | Validation Needed |
| ---------- | ------------- | ----------------- |
|            |               |                   |

## 25. Open Questions

| Open Question | Why It Matters | Owner | Needed By                             |
| ------------- | -------------- | ----- | ------------------------------------- |
|               |                |       | Phase 9 / Phase 14 / Phase 15 / Later |

## 26. Next Skill Recommendation

Recommended next skill:

```text
des-bronze-layer-design
```

Reason:

```text
<why Bronze layer design is the next safe step>
```
