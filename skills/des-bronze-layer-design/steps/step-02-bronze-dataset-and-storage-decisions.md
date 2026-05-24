# Step 02 — Bronze Dataset, Storage, Metadata, and Evidence

## Goal

Define Bronze datasets, raw preservation, storage format, file/table organization, partitioning, metadata, schema drift, replay/backfill, idempotency boundary, retention, access, quarantine, lineage, and Bronze boundary quality expectations.

This step prepares the Bronze Layer Specification and identifies which Bronze decisions require evidence, support work, waiver, or accepted risk.

---

## Required Inputs

- Confirmed context from Step 01
- Architecture Decision Record
- Ingestion Specification
- Phase 08 to Phase 09 handoff, if available
- Phase 08 evidence pack, if available
- Data Source Inventory
- Requirements and KPI Catalog
- Data Product Specification
- User answers from HALT points
- Existing raw storage notes, sample files, schemas, or platform conventions if available

---

## Actions

1. Define Bronze scope and non-scope.
2. Define Bronze design principles.
3. Create source-to-Bronze mapping.
4. Create ingestion-to-Bronze mapping.
5. Define Bronze dataset inventory.
6. Define raw preservation strategy.
7. Select storage format at design level.
8. Define file/table organization.
9. Define partitioning strategy.
10. Define mandatory metadata columns.
11. Define ingestion audit metadata.
12. Define source traceability metadata.
13. Define schema drift and evolution handling.
14. Define replay and backfill support.
15. Define idempotency and deduplication boundary.
16. Define quarantine and rejected data handling.
17. Define retention and lifecycle policy.
18. Define access control and sensitivity classification.
19. Define Bronze boundary data quality expectations.
20. Define lineage, traceability, and operational evidence expectations.
21. Map each critical Bronze decision to evidence.
22. Mark unsupported Bronze claims as `Draft`, `Open`, `Risk`, `Deferred`, `Blocked`, `Unknown`, or `Waived with reason`.
23. Identify required Phase 09 support work.
24. Use HALT checkpoints for unresolved decisions.
25. Prepare draft Bronze specification content.
26. Prepare content for the Phase 09 Support Plan.

---

## Hints

- Bronze should generally be append-only or immutable-friendly unless architecture requires otherwise.
- Preserve original source values and raw payload where replay, audit, or debugging requires it.
- Minimal technical normalization is allowed if needed to store data safely, but business cleaning belongs to Silver.
- Do not cast away raw precision or source fields without approval.
- Partitioning should support ingestion operations, replay/backfill, retention, and common maintenance patterns.
- Common default partition is ingestion date, but this is not universal.
- Avoid high-cardinality partitions such as user_id, transaction_id, UUID, or highly unique object IDs.
- Mandatory metadata should enable audit, lineage, troubleshooting, and rerun safety.
- Schema drift handling should align with Phase 08 Ingestion Design.
- Sensitive raw data requires stricter access and possibly masking/tokenization in later layers.
- Quarantine should retain error reason and traceability to source/run/file/message.
- Do not clean, conform, deduplicate for business correctness, or design detailed Silver/Gold tables, physical transformations, or write pipeline implementation code.

---

## Bronze Design Principles

Use these as default principles unless project constraints override them:

| Principle | Meaning |
| --- | --- |
| Preserve source truth | Keep raw or near-raw data close to how it arrived |
| Enable replay | Retain enough data and metadata to reprocess |
| Keep lineage | Track source, run, file/message/batch, schema, and ingestion time |
| Avoid premature conformance | Business cleaning and standardization belong to Silver |
| Control access | Raw data may expose sensitive or unstable fields |
| Design for drift | Source schemas can change |
| Separate bad data | Quarantine/reject without losing evidence |
| Retain intentionally | Raw data retention must match value, cost, compliance, and privacy |
| Make failures auditable | Failed/partial ingestion must leave useful evidence |
| Keep Bronze source-aligned | Bronze should not hide source-specific meaning |

---

## Bronze Dataset Standard

Each Bronze dataset must define:

| Field | Required? |
| --- | --- |
| Dataset name | Required |
| Source ID | Required |
| Source object/feed | Required |
| Ingestion pattern | Required |
| Product/requirement mapping | Recommended |
| Raw preservation policy | Required |
| Storage format | Required |
| File/table organization | Required |
| Partition strategy | Required or marked not applicable |
| Mandatory metadata | Required |
| Ingestion audit metadata | Required |
| Source traceability metadata | Required |
| Schema drift policy | Required |
| Replay/backfill support | Required |
| Idempotency/deduplication boundary | Required |
| Retention policy | Required |
| Access classification | Required |
| Quarantine policy | Required if errors possible |
| Bronze boundary quality | Required |
| Status | Required |

Allowed statuses:

```text
Draft | Approved | Risk | Blocked | Deferred
```

---

## Bronze Evidence Mapping

For every P1 Bronze dataset, capture the evidence status.

| Bronze Field                  | Evidence Status                                | Allowed Output            |
| ----------------------------- | ---------------------------------------------- | ------------------------- |
| Source-to-Bronze mapping      | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk   |
| Ingestion-to-Bronze alignment | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk   |
| Dataset boundary              | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk   |
| Raw preservation              | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk   |
| Storage format                | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk   |
| File/table organization       | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk   |
| Partitioning                  | Confirmed / Assumed / Missing / Not applicable | Approved / Draft / Risk   |
| Metadata columns              | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk   |
| Schema drift                  | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk   |
| Replay/backfill               | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk   |
| Idempotency boundary          | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk   |
| Quarantine/rejected data      | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk   |
| Retention/lifecycle           | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk   |
| Access/sensitivity            | Confirmed / Assumed / Missing / Waived         | Approved / Risk / Blocked |
| Boundary quality              | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk   |
| Lineage/traceability          | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk   |

---

## Phase 09 Required Support Work

Based on the Bronze design above, prepare a support plan using these categories:

| Support Work                        | Required When                                            | Output           |
| ----------------------------------- | -------------------------------------------------------- | ---------------- |
| Phase 08 Handoff Review             | Always                                                   | Evidence pack    |
| Source-to-Bronze Mapping Check      | Always                                                   | Evidence pack    |
| Ingestion-to-Bronze Alignment Check | Always                                                   | Evidence pack    |
| Bronze Dataset Boundary Check       | Always                                                   | Evidence pack    |
| Raw Preservation Check              | Always                                                   | Evidence pack    |
| Storage Format Check                | Always                                                   | Evidence pack    |
| File/Table Organization Check       | Always                                                   | Evidence pack    |
| Partitioning Strategy Check         | Always, unless small/unpartitioned                       | Evidence pack    |
| Mandatory Metadata Check            | Always                                                   | Evidence pack    |
| Ingestion Audit Metadata Check      | Always                                                   | Evidence pack    |
| Schema Drift Handling Check         | Always                                                   | Evidence pack    |
| Replay/Backfill Support Check       | Always                                                   | Evidence pack    |
| Idempotency/Dedup Boundary Check    | Always                                                   | Evidence pack    |
| Quarantine/Rejected Data Check      | Required when malformed/schema-invalid records can occur | Evidence pack    |
| Retention/Lifecycle Check           | Always                                                   | Evidence pack    |
| Access/Sensitivity Check            | Always                                                   | Evidence pack    |
| Bronze Boundary Quality Check       | Always                                                   | Evidence pack    |
| Lineage/Traceability Check          | Always                                                   | Evidence pack    |
| Done Gate                           | Always before marking Done                      | Done Gate result |
| Handoff to Phase 10                 | Always before Phase 10                                   | Handoff file     |

---

## Decision Area 1 - Raw Preservation Strategy

### HALT - Raw Preservation Strategy

Stop if it is unclear whether raw payload/source fields must be retained.

#### Why this matters

Raw preservation affects auditability, replay, debugging, storage cost, privacy, and downstream trust.

#### Decision needed

Approve raw preservation strategy for the target source or dataset.

#### Options

A. Store exact raw payload as received
B. Store parsed structured raw records plus original payload
C. Store parsed structured raw records only
D. Store source files/events unchanged and register metadata separately
E. Store minimal subset only
F. Do not retain raw data after processing
G. Custom strategy

#### Required response

Choose A/B/C/D/E/F/G.

---

## Decision Area 2 - Storage Format Decision

### HALT - Storage Format Decision

Stop if Bronze storage format is unclear.

#### Why this matters

Storage format affects schema evolution, queryability, performance, cost, interoperability, and replay.

#### Options

A. Raw files in original format
B. JSON/NDJSON
C. CSV/Delimited
D. Parquet/ORC columnar files
E. Transactional lake table format
F. Warehouse/staging table
G. Stream/message retention store
H. Hybrid: raw file archive + queryable Bronze table
I. Custom format

#### Recommendation

Use H when both audit/replay and queryable downstream processing are needed.
Use A when exact original file preservation is required.

#### Required response

Choose A/B/C/D/E/F/G/H/I.

---

## Decision Area 3 - File and Table Organization

### HALT - File/Table Organization

Stop if file path, table naming, dataset naming, or organization is unclear.

#### Why this matters

Organization affects discoverability, lineage, automation, retention, access control, and operational troubleshooting.

#### Options

A. Organize by source system / source object / ingestion date
B. Organize by source system / dataset / load type
C. Organize by data product / source / object
D. Organize by environment / layer / source / object
E. Platform-managed table organization
F. Custom organization
G. Keep Draft pending platform convention

#### Required response

Choose A/B/C/D/E/F/G.

---

## Decision Area 4 - Partitioning Strategy

### HALT - Partitioning Strategy

Stop if partition strategy is unclear or risky.

#### Why this matters

Partitioning affects query performance, small files, cost, replay, backfill, deletion, retention, and operations.

#### Options

A. Partition by ingestion_date
B. Partition by source event/business date
C. Partition by source system + ingestion_date
D. Partition by file/batch date
E. No partitioning for small dataset
F. Platform-managed partitioning/clustering
G. Custom partitioning
H. Keep Draft pending data volume/query pattern evidence

#### Recommendation

Use A as a safe default for raw ingestion operations unless replay/query patterns require another date.

#### Required response

Choose A/B/C/D/E/F/G/H.

---

## Decision Area 5 - Mandatory Metadata Columns

### HALT - Mandatory Metadata Approval

Stop if audit metadata is missing or incomplete.

#### Why this matters

Metadata enables lineage, debugging, replay, deduplication, quality checks, and operational evidence.

#### Recommended minimum

```text
des_source_system
des_source_object
des_ingestion_run_id
des_ingestion_timestamp
des_payload_hash
```

#### Strong recommended metadata

```text
des_source_id
des_source_file_path
des_extract_window_start
des_extract_window_end
des_source_event_timestamp
des_source_update_timestamp
des_record_hash
des_schema_version
des_ingestion_status
```

#### Options

A. Approve recommended minimum metadata
B. Approve recommended + strong recommended metadata
C. Add project-specific metadata
D. Reduce metadata for MVP
E. Keep metadata decision Draft

#### Required response

Choose A/B/C/D/E.

---

## Decision Area 6 - Schema Drift and Evolution Policy

### HALT - Schema Drift and Evolution Policy

Stop if schema drift policy is unclear.

#### Options

A. Allow additive columns and record drift metadata
B. Store raw payload and defer parsing to Silver
C. Quarantine records/files with unexpected schema
D. Block load on schema mismatch
E. Version schemas and route by schema version
F. Store rescued data / unknown fields separately
G. Manual review for all schema changes
H. Custom policy

#### Required response

Choose A/B/C/D/E/F/G/H.

---

## Decision Area 7 - Replay and Backfill Support

### HALT - Replay and Backfill Support

Stop if replay/backfill support is unclear.

#### Why this matters

Bronze often provides the evidence and raw material for replay, correction, audit, and recovery.

#### Options

A. Full replay from immutable raw archive
B. Replay by ingestion_date partition/window
C. Replay by source event/business date partition/window
D. Replay by file/batch manifest
E. Replay from source only; Bronze does not retain full raw history
F. Manual replay/backfill only
G. No replay support for MVP
H. Custom strategy

#### Required response

Choose A/B/C/D/E/F/G/H.

---

## Decision Area 8 - Idempotency and Deduplication Boundary

### HALT - Idempotency and Deduplication Boundary

Stop if Bronze rerun/deduplication boundary is unclear.

#### Why this matters

Bronze must not accidentally create duplicate raw records without traceability, but business deduplication usually belongs later.

#### Options

A. No deduplication; preserve all arrivals with metadata
B. Prevent duplicate file/batch ingestion only
C. Deduplicate exact duplicate raw records by hash
D. Deduplicate by source primary key + source update timestamp
E. Defer all business deduplication to Silver
F. Custom boundary

#### Recommendation

Use B or C for ingestion safety. Use E for business-level deduplication.

#### Required response

Choose A/B/C/D/E/F.

---

## Decision Area 9 - Quarantine and Rejected Data Policy

### HALT - Quarantine and Rejected Data Policy

Stop if malformed, unauthorized, or schema-invalid data handling is unclear.

#### Options

A. Quarantine bad records with error reason
B. Quarantine whole file/batch/message
C. Dead-letter failed stream/message events
D. Fail load and do not write partial Bronze data
E. Store raw payload with invalid status for later review
F. Manual handling only
G. Custom policy

#### Required response

Choose A/B/C/D/E/F/G.

---

## Decision Area 10 - Retention and Lifecycle Policy

### HALT - Retention and Lifecycle Policy

Stop if raw retention is unclear.

#### Why this matters

Raw retention affects cost, compliance, replay, auditability, and privacy.

#### Options

A. Retain indefinitely
B. Retain for fixed period, then archive
C. Retain hot/warm/cold lifecycle by access frequency
D. Retain only metadata after fixed period
E. Delete raw data after successful Silver/Gold processing
F. Retention depends on source classification
G. Custom policy

#### Required response

Choose A/B/C/D/E/F/G and specify duration where relevant.

---

## Decision Area 11 - Sensitive Raw Access Policy

### HALT - Sensitive Raw Access Policy

Stop if Bronze contains sensitive, regulated, confidential, or credential-bearing data.

#### Options

A. Public/non-sensitive Bronze access
B. Internal restricted raw access
C. Confidential raw access with least privilege
D. PII/regulated access requiring governance approval
E. Secret-bearing payload must be blocked/quarantined/redacted
F. Unknown — block until security review

#### Required response

Choose A/B/C/D/E/F.

---

## Decision Area 12 - Bronze Boundary Quality Expectations

### HALT - Bronze Boundary Quality Expectations

Stop if Bronze quality boundary is unclear.

#### Why this matters

Bronze should not perform full business validation, but it must capture ingestion-level quality evidence.

#### Options

A. Technical load checks only: file/readability/counts/schema presence
B. Technical checks + required metadata checks
C. Technical checks + source-level validity checks
D. Business quality checks deferred to Silver
E. Custom quality boundary

#### Recommendation

Use B as a default. Add C where source contract requires it. Keep business conformance for Silver.

#### Required response

Choose A/B/C/D/E.

---

## Decision Area 13 - Lineage and Traceability Expectations

### HALT - Lineage and Traceability Expectations

Stop if downstream phases cannot trace Bronze records/files/events back to source and ingestion evidence.

#### Why this matters

Silver, Gold, quality, incident response, audit, and debugging depend on traceability back to source system, source object, ingestion run, file/message, extraction window, and schema version.

#### Options

A. Trace to source system + ingestion run only
B. Trace to source system + source object + ingestion run + ingestion timestamp
C. Trace to source file/message/API endpoint/table + run + extract window
D. Trace to full raw payload/file/object plus manifest and run evidence
E. Compliance/audit-grade traceability
F. Unknown — keep as risk/blocker

#### Required response

Choose A/B/C/D/E/F.

---

## Completion Criteria

This step is complete when:

* Bronze scope and principles are defined;
* each P1 ingestion source maps to a Bronze dataset;
* Bronze datasets have name, source, object/feed, format, partition, metadata, retention, access, drift, replay, and quarantine policy;
* raw preservation strategy is documented;
* storage format and file/table organization are documented;
* mandatory metadata is approved or marked Draft;
* schema drift/rescued/quarantine behavior is documented;
* sensitive raw access policy is documented;
* Bronze boundary quality expectation is defined;
* lineage and traceability expectation is documented;
* evidence mapping is prepared;
* required support work is identified;
* risks and assumptions are explicit;
* draft Bronze specification content is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
