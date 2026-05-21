# Step 02 — Bronze Dataset and Storage Decisions

## Goal

Define Bronze datasets, raw preservation, storage format, organization, partitioning, metadata, schema drift, replay/backfill, retention, access, quarantine, and Bronze boundary quality expectations.

## Required Inputs

- Confirmed context from Step 01
- Architecture Decision Record
- Ingestion Specification
- Data Source Inventory
- Requirements and KPI Catalog
- Data Product Specification
- User answers from HALT points
- Existing raw storage notes, sample files, schemas, or platform conventions if available

## Actions

1. Define Bronze scope and non-scope.
2. Define Bronze design principles.
3. Create source-to-Bronze mapping.
4. Define Bronze dataset inventory.
5. Define raw preservation strategy.
6. Select storage format at design level.
7. Define file/table organization.
8. Define partitioning strategy.
9. Define mandatory metadata columns.
10. Define ingestion audit metadata.
11. Define schema drift and evolution handling.
12. Define replay and backfill support.
13. Define idempotency and deduplication boundary.
14. Define quarantine and rejected data handling.
15. Define retention and lifecycle policy.
16. Define access control and sensitivity classification.
17. Define Bronze boundary data quality expectations.
18. Define lineage, traceability, and operational evidence expectations.
19. Use HALT checkpoints for unresolved decisions.

## Hints

- Bronze should generally be append-only or immutable-friendly unless architecture requires otherwise.
- Preserve original source values and raw payload where replay/audit/debugging requires it.
- Minimal technical normalization is allowed if needed to store the data safely, but business cleaning belongs to Silver.
- Do not cast away raw precision or source fields without approval.
- Partitioning should support ingestion operations, replay/backfill, and common maintenance patterns.
- Common default partition is ingestion date, but this is not universal.
- Avoid high-cardinality partitions such as user_id, transaction_id, or UUID.
- Mandatory metadata should enable audit, lineage, troubleshooting, and rerun safety.
- Schema drift handling should align with Phase 8 Ingestion design.
- Sensitive raw data requires stricter access and possibly masking/tokenization in later layers.
- Quarantine should retain error reason and traceability to source/run/file/message.
- Do not clean, conform, deduplicate for business correctness, or design detailed Silver/Gold tables, physical transformations, or write pipeline implementation code.

## Bronze Design Principles

Use these as default principles unless project constraints override them:

| Principle | Meaning |
| --- | --- |
| Preserve source truth | Keep raw or near-raw data close to how it arrived |
| Enable replay | Retain enough data and metadata to reprocess |
| Keep lineage | Track source, run, file/message/batch, and ingestion time |
| Avoid premature conformance | Business cleaning and standardization belong to Silver |
| Control access | Raw data may expose sensitive or unstable fields |
| Design for drift | Source schemas can change |
| Separate bad data | Quarantine/reject without losing evidence |
| Retain intentionally | Raw data retention must match value, cost, and compliance |

## Bronze Dataset Standard

Each Bronze dataset must define:

| Field | Required? |
| --- | --- |
| Dataset name | Required |
| Source ID | Required |
| Source object/feed | Required |
| Ingestion pattern | Required |
| Raw preservation policy | Required |
| Storage format | Required |
| Partition strategy | Required or marked not applicable |
| Mandatory metadata | Required |
| Schema drift policy | Required |
| Replay/backfill support | Required |
| Retention policy | Required |
| Access classification | Required |
| Quarantine policy | Required if errors possible |
| Status | Required |

Allowed statuses:

```text
Draft | Approved | Risk | Blocked | Deferred
```

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

#### Decision needed

Approve Bronze storage format for the target dataset.

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

## Decision Area 3 - Partitioning Strategy

### HALT - Partitioning Strategy

Stop if partition strategy is unclear or risky.

#### Why this matters

Partitioning affects query performance, small files, cost, replay, backfill, deletion, retention, and operations.

#### Decision needed

Approve partition strategy for the target dataset.

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

## Decision Area 4 - Mandatory Metadata Columns

### HALT - Mandatory Metadata Approval

Stop if audit metadata is missing or incomplete.

#### Why this matters

Metadata enables lineage, debugging, replay, deduplication, quality checks, and operational evidence.

#### Decision needed

Approve mandatory Bronze metadata columns/fields.

#### Recommended minimum

* des_source_system (Identify source system)
* des_source_object (Identify source table/endpoint/topic)
* des_ingestion_timestamp (Track when data was ingested)
* des_pipeline_run_id (Link to run evidence)
* des_payload_hash (Detect duplicate/changed data)

#### Options

A. Approve recommended minimum metadata  
B. Add project-specific metadata  
C. Reduce metadata for MVP  
D. Keep metadata decision Draft  

#### Required response

Choose A/B/C/D.

---

## Decision Area 5 - Schema Drift and Evolution Policy

### HALT - Schema Drift and Evolution Policy

Stop if schema drift policy is unclear.

#### Decision needed

Approve Bronze schema drift behavior.

#### Options

A. Allow additive columns and record drift metadata  
B. Store raw payload and defer parsing to Silver  
C. Quarantine records/files with unexpected schema  
D. Block load on schema mismatch  
E. Version schemas and route by schema version  
F. Manual review for all schema changes  
G. Custom policy  

#### Required response

Choose A/B/C/D/E/F/G.

---

## Decision Area 6 - Replay and Backfill Support

### HALT - Replay and Backfill Support

Stop if replay/backfill support is unclear.

#### Why this matters

Bronze often provides the evidence and raw material for replay, correction, audit, and recovery.

#### Decision needed

How should Bronze support replay/backfill?

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

## Decision Area 7 - Idempotency and Deduplication Boundary

### HALT - Idempotency and Deduplication Boundary

Stop if Bronze rerun/deduplication boundary is unclear.

#### Why this matters

Bronze must not accidentally create duplicate raw records without traceability, but business deduplication usually belongs later.

#### Decision needed

What deduplication is allowed in Bronze?

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

## Decision Area 8 - Quarantine and Rejected Data Policy

### HALT - Quarantine and Rejected Data Policy

Stop if malformed, unauthorized, or schema-invalid data handling is unclear.

#### Decision needed

Where should rejected data go and what evidence is required?

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

## Decision Area 9 - Retention and Lifecycle Policy

### HALT - Retention and Lifecycle Policy

Stop if raw retention is unclear.

#### Why this matters

Raw retention affects cost, compliance, replay, auditability, and privacy.

#### Decision needed

Approve Bronze retention/lifecycle policy.

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

## Decision Area 10 - Sensitive Raw Access Policy

### HALT - Sensitive Raw Access Policy

Stop if Bronze contains sensitive, regulated, confidential, or credential-bearing data.

#### Decision needed

Approve raw access policy.

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

## Decision Area 11 - Bronze Boundary Quality Expectations

### HALT - Bronze Boundary Quality Expectations

Stop if Bronze quality boundary is unclear.

#### Why this matters

Bronze should not perform full business validation, but it must capture ingestion-level quality evidence.

#### Decision needed

What quality checks belong at Bronze boundary?

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

## Completion Criteria

This step is complete when:

* Bronze scope and principles are defined;
* each P1 ingestion source maps to a Bronze dataset;
* Bronze datasets have name, source, object/feed, format, partition, metadata, retention, access, drift, replay, and quarantine policy;
* raw preservation strategy is documented;
* mandatory metadata is approved or marked Draft;
* sensitive raw access policy is documented;
* quality boundary is defined;
* risks and assumptions are explicit;
* draft Bronze specification content is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
