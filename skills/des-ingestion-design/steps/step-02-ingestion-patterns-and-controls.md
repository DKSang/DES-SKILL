# Step 02 — Ingestion Patterns, Controls, and Evidence

## Goal

Define ingestion pattern, frequency, extraction method, incremental/checkpoint/idempotency logic, replay/backfill, schema drift, error handling, security, landing metadata, monitoring, and evidence expectations for each in-scope source.

This step prepares the Ingestion Specification and identifies which ingestion decisions require evidence, support work, waiver, or accepted risk.

---

## Required Inputs

- Confirmed context from Step 01
- Data Source Inventory
- Architecture Decision Record
- Phase 07 to Phase 08 handoff, if available
- Data Product Specification
- Requirements and KPI Catalog
- Conceptual Domain Model
- User answers from HALT points
- Source documentation, samples, API docs, schemas, contracts, owner notes, quotas, or access notes if available

---

## Actions

1. Define ingestion scope and non-scope.
2. Map each P1/P2 source to ingestion design.
3. Map each ingestion design to:
   - product output;
   - requirement;
   - KPI;
   - source need;
   - architecture constraint.
4. Classify data as bounded or unbounded.
5. Choose ingestion pattern per source.
6. Choose batch, streaming, event, or hybrid behavior per source.
7. Define frequency and trigger.
8. Define access and extraction method.
9. Define incremental/checkpoint strategy.
10. Define idempotency strategy.
11. Define replay and backfill behavior.
12. Define late-arriving data handling.
13. Define ordering and deduplication expectations.
14. Define payload and serialization expectations.
15. Define schema drift/evolution policy.
16. Define error handling, quarantine, and dead-letter expectations.
17. Define security and credential handling.
18. Define source impact, rate-limit, quota, and throttling strategy.
19. Define landing target expectations at high level.
20. Define ingestion metadata expectations.
21. Define monitoring evidence and audit expectations.
22. Map each critical ingestion decision to evidence.
23. Mark unsupported ingestion claims as `Draft`, `Open`, `Risk`, `Deferred`, `Blocked`, `Unknown`, or `Waived with reason`.
24. Identify required Phase 08 support work.
25. Use HALT checkpoints for unresolved decisions.
26. Prepare draft ingestion specification content.
27. Prepare content for the Phase 08 Support Plan.

---

## Hints

- Full refresh is simple but can be expensive or destructive.
- Incremental ingestion needs a reliable change indicator.
- CDC is powerful but requires source support, permissions, and operational care.
- API ingestion often needs pagination, retries, rate limits, authentication, and response schema handling.
- File ingestion often needs naming convention, delivery contract, encoding, format, and duplicate file handling.
- Streaming ingestion often needs ordering, replay, retention, delivery guarantee, buffering, and dead-letter handling.
- Manual reference data needs owner, validation, audit trail, and change process.
- Idempotency should be designed before implementation.
- Replay/backfill is not the same as retry.
- Do not choose streaming only to look modern.
- Do not design Bronze table schema here; only state landing expectations and required metadata.
- Do not implement pipeline code here.

---

## Ingestion Pattern Types

Use these pattern labels:

| Pattern | When It Fits |
| --- | --- |
| Full snapshot | Small or moderate source, no reliable incremental marker, acceptable overwrite/reload |
| Differential batch | Source provides changed records or date-window extraction |
| Append-only batch | Source creates immutable appended records |
| CDC/log-based | Source supports change logs and downstream needs inserts/updates/deletes |
| API scheduled pull | Data is fetched from API at fixed interval |
| API polling | Data is polled for changes repeatedly |
| Webhook/push | Source pushes events to endpoint |
| File drop | Source delivers files to landing location |
| Managed connector | Managed service handles extraction |
| Stream/message ingestion | Source emits continuous events/messages |
| Data sharing ingestion | Data is shared through platform/partner mechanism |
| Manual/reference ingestion | Human-maintained reference data |
| One-time migration | Historical or migration-only load |

---

## Ingestion Control Standards

Each P1 ingestion design must define:

| Control | Required? |
| --- | --- |
| Source ID | Required |
| Product/requirement/KPI mapping | Required |
| Architecture constraint mapping | Required |
| Pattern | Required |
| Frequency/trigger | Required |
| Access method | Required |
| Incremental/checkpoint logic | Required or marked not applicable |
| Idempotency | Required |
| Replay/backfill | Required |
| Late-arriving/ordering expectation | Required when relevant |
| Payload/serialization | Required |
| Schema drift policy | Required |
| Error handling/quarantine | Required |
| Security/credential handling | Required |
| Source impact/rate limit | Required when relevant |
| Landing metadata expectation | Required |
| Monitoring/audit evidence | Required |
| Status | Required |

Allowed statuses:

```text
Draft | Approved | Risk | Blocked | Deferred
```

---

## Ingestion Evidence Mapping

For every P1 source ingestion design, capture the evidence status.

| Ingestion Field             | Evidence Status                                | Allowed Output            |
| --------------------------- | ---------------------------------------------- | ------------------------- |
| Source-to-ingestion mapping | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk   |
| Architecture alignment      | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk   |
| Ingestion pattern           | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk   |
| Batch/stream/event choice   | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk   |
| Frequency/trigger           | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk   |
| Access/extraction           | Tested / Approved / Pending / Missing / Waived | Approved / Risk / Blocked |
| Incremental/checkpoint      | Confirmed / Assumed / Missing / Not applicable | Approved / Draft / Risk   |
| Idempotency                 | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk   |
| Replay/backfill             | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk   |
| Schema drift                | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk   |
| Error/quarantine            | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk   |
| Security/credential         | Confirmed / Assumed / Missing / Waived         | Approved / Risk / Blocked |
| Source impact/rate limit    | Confirmed / Assumed / Missing / Not applicable | Approved / Draft / Risk   |
| Landing metadata            | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk   |
| Monitoring/audit            | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk   |

---

## Phase 08 Required Support Work

Based on the ingestion design above, prepare a support plan using these categories:

| Support Work                            | Required When                                   | Output           |
| --------------------------------------- | ----------------------------------------------- | ---------------- |
| Phase 07 Handoff Review                 | Always                                          | Evidence pack    |
| Source-to-Ingestion Mapping Check       | Always                                          | Evidence pack    |
| Architecture Constraint Alignment Check | Always                                          | Evidence pack    |
| Ingestion Pattern Fit Check             | Always for P1 sources                           | Evidence pack    |
| Batch/Streaming/Event Alignment Check   | Always                                          | Evidence pack    |
| Frequency and Trigger Check             | Always                                          | Evidence pack    |
| Access and Extraction Check             | Always for P1 sources                           | Evidence pack    |
| Incremental/Checkpoint Check            | Required unless full refresh/not applicable     | Evidence pack    |
| Idempotency Check                       | Always                                          | Evidence pack    |
| Replay/Backfill Check                   | Always                                          | Evidence pack    |
| Schema Drift Policy Check               | Always                                          | Evidence pack    |
| Error/Quarantine/Recovery Check         | Always                                          | Evidence pack    |
| Security/Credential Handling Check      | Always                                          | Evidence pack    |
| Source Impact/Rate Limit Check          | Required for API, DB, CDC, vendor, SaaS, stream | Evidence pack    |
| Landing Metadata Expectation Check      | Always before Phase 09                          | Evidence pack    |
| Monitoring/Audit Expectation Check      | Always                                          | Evidence pack    |
| Done Gate                               | Always before marking Done                      | Done Gate result |
| Handoff to Phase 09                     | Always before Phase 09                          | Handoff file     |

---

## Decision Area 1 - Ingestion Pattern Selection

Evaluate and approve the pattern used to extract data from each source system.

### HALT - Ingestion Pattern Approval

Stop if ingestion pattern for a P1 source is unclear.

#### Why this matters

Ingestion pattern affects reliability, cost, complexity, storage design, replay, observability, and downstream freshness.

#### Decision needed

Approve ingestion pattern for the target source.

#### Options

A. Full snapshot
B. Differential batch
C. Append-only batch
D. CDC/log-based
E. API scheduled pull
F. API polling
G. Webhook/push
H. File drop
I. Managed connector
J. Stream/message ingestion
K. Data sharing ingestion
L. Manual/reference ingestion
M. One-time migration
N. Custom pattern

#### Required response

Choose one option or provide a custom pattern.

---

## Decision Area 2 - Batch, Streaming, or Event Choice

Determine the architectural processing mode for each ingestion flow.

### HALT - Batch, Streaming, or Event Choice

Stop if processing mode is unclear or conflicts with requirements.

#### Why this matters

Batch, streaming, and event-driven ingestion have different cost, complexity, ordering, replay, failure, and latency behavior.

#### Options

A. Batch ingestion
B. Streaming ingestion
C. Event-driven ingestion
D. Hybrid: batch baseline plus selected streaming/events
E. Manual/on-demand ingestion
F. Defer streaming/events until justified

#### Recommendation

Choose A when approved freshness is periodic/daily.
Choose B/C/D only when source behavior and downstream freshness justify it.

#### Required response

Choose A/B/C/D/E/F.

---

## Decision Area 3 - Frequency and Trigger

Specify when and how each ingestion run is initiated.

### HALT - Frequency and Trigger Approval

Stop if frequency or trigger is unclear.

#### Decision needed

Approve ingestion frequency/trigger for the target source.

#### Options

A. Manual/on-demand
B. One-time historical load
C. Scheduled batch hourly/daily/weekly/monthly
D. Event-triggered on file arrival/message arrival
E. Continuous streaming
F. Polling interval
G. Custom schedule

#### Required response

Choose one option and specify timing/timezone if relevant.

---

## Decision Area 4 - Incremental and Checkpoint Strategy

Define how ingestion identifies new or changed records.

### HALT - Incremental and Checkpoint Strategy

Stop if new/changed data detection is unclear.

#### Why this matters

Incremental strategy affects correctness, duplicates, missing records, cost, and replay.

#### Options

A. Full refresh, no incremental marker
B. Watermark by source event/update timestamp
C. Increasing source ID or sequence number
D. Source-provided changed records
E. CDC/log offset
F. File manifest or file name/date pattern
G. Message offset/partition checkpoint
H. API cursor/page token
I. Manual version/date field
J. Unknown — keep ingestion blocked or Draft

#### Required response

Choose A/B/C/D/E/F/G/H/I/J.

---

## Decision Area 5 - Idempotency Strategy

Design rerun behavior to prevent duplicates or corrupted landing data.

### HALT - Idempotency Strategy

Stop if rerun behavior is unclear.

#### Why this matters

Ingestion must be safe to retry after failure without creating duplicates or corrupting data.

#### Options

A. Overwrite same partition/window
B. Append with deduplication key
C. Merge/upsert by source key and timestamp/version
D. Store immutable raw files with manifest and skip duplicates
E. Exactly-once or effectively-once stream semantics
F. Manual reconciliation required
G. Unknown — keep as risk/blocker

#### Required response

Choose A/B/C/D/E/F/G.

---

## Decision Area 6 - Replay and Backfill Strategy

Determine how historical windows or failed periods can be reprocessed.

### HALT - Replay and Backfill Strategy

Stop if replay/backfill behavior is unclear.

#### Why this matters

Replay/backfill affects recovery, corrections, historical loads, audits, and downstream trust.

#### Options

A. Full historical reload supported
B. Backfill by date/time window
C. Backfill by source partition/file list
D. Replay from stream/log offset within retention period
E. Source does not support replay; store raw immutable landing data
F. Manual backfill only
G. No backfill in MVP
H. Unknown — keep as risk/blocker

#### Required response

Choose A/B/C/D/E/F/G/H.

---

## Decision Area 7 - Late-Arriving Data and Ordering

Address out-of-order records or delayed events from sources.

### HALT - Late-Arriving Data and Ordering

Stop if late data or ordering can affect correctness.

#### Options

A. Not expected or not relevant
B. Accept late data and correct affected partitions/windows
C. Use watermark and lateness threshold
D. Quarantine late/out-of-order records
E. Keep immutable records and resolve later in Silver/Gold
F. Unknown — mark as risk

#### Required response

Choose A/B/C/D/E/F.

---

## Decision Area 8 - Payload and Serialization

Handle file encodings, API payload formats, and schemas at the boundary.

### HALT - Payload and Serialization

Stop if payload format or deserialization risk is unclear.

#### Options

A. Structured schema known and stable
B. Semi-structured payload retained raw and parsed later
C. Binary/encoded payload requires decoder
D. Multiple formats require normalization later
E. Unknown format — profiling required
F. Not applicable

#### Required response

Choose A/B/C/D/E/F.

---

## Decision Area 9 - Schema Drift and Evolution Policy

Establish what the ingestion boundary does when source schema changes.

### HALT - Schema Drift and Evolution Policy

Stop if source schema can change and policy is unclear.

#### Options

A. Allow additive columns and record drift
B. Block ingestion on schema mismatch
C. Quarantine unexpected schema records/files
D. Version schemas and route by version
E. Store raw payload only and parse later
F. Manual review required before continuing
G. Unknown — keep as risk/blocker

#### Required response

Choose A/B/C/D/E/F/G.

---

## Decision Area 10 - Error Handling and Recovery

Define how ingestion fails, retries, quarantines, or alerts.

### HALT - Error Handling and Recovery

Stop if failure behavior is unclear.

#### Options

A. Fail fast and alert
B. Retry with backoff, then fail
C. Quarantine bad records/files and continue
D. Dead-letter failed events/messages
E. Partial success allowed with evidence
F. Manual intervention required
G. Custom policy

#### Required response

Choose one or more options and define severity.

---

## Decision Area 11 - Sensitive Data and Credential Handling

Approve credential vaulting and masking of PII at the entry boundary.

### HALT - Sensitive Data and Credential Handling

Stop if ingestion touches sensitive data, regulated data, confidential data, or credentials.

#### Options

A. Public/non-sensitive source; no credentials
B. Internal source with managed credentials/secrets
C. Confidential source with restricted access
D. PII/regulated source requiring governance review
E. Credential-bearing payload requiring quarantine or filtering
F. Unknown — block until reviewed

#### Required response

Choose A/B/C/D/E/F.

---

## Decision Area 12 - API Quota, Rate Limit, or Source Impact

Control access load and avoid degrading production source systems or violating usage limits.

### HALT - API Quota, Rate Limit, or Source Impact

Stop if ingestion may affect source systems or violate usage limits.

#### Options

A. Rate limit and throttle ingestion
B. Use source-provided export/replica
C. Schedule during off-peak hours
D. Use managed connector with built-in limits
E. Reduce scope/frequency
F. Block until owner/vendor approves
G. Not applicable

#### Required response

Choose A/B/C/D/E/F/G.

---

## Decision Area 13 - Landing Target and Metadata Expectations

Define high-level landing target and required ingestion metadata before Bronze design.

### HALT - Landing Metadata Expectation

Stop if Phase 09 would not know what raw/landing metadata to preserve.

#### Why this matters

Bronze design depends on ingestion evidence, traceability, audit fields, run IDs, source file paths, source object IDs, extract windows, and source timestamps.

#### Options

A. Immutable raw landing with ingestion metadata
B. Raw payload plus manifest and audit metadata
C. Source-aligned landing dataset with audit metadata
D. Stream/event landing with offset/checkpoint metadata
E. Manual/reference landing with version and owner metadata
F. Custom landing expectation
G. Unknown — keep as risk/blocker

#### Required response

Choose A/B/C/D/E/F/G.

---

## Decision Area 14 - Monitoring Evidence and Audit Expectations

Define what evidence proves ingestion happened correctly.

### HALT - Monitoring Evidence and Audit Expectations

Stop if ingestion audit/evidence is unclear.

#### Options

A. Basic run status, row/file count, and error log
B. Run ID, source window, row count, checksum/sample validation
C. Metadata manifest plus freshness and completeness checks
D. Full operational monitoring with alerts and incident trail
E. Compliance/audit-grade ingestion evidence
F. Unknown — keep as risk/blocker

#### Required response

Choose A/B/C/D/E/F.

---

## Completion Criteria

This step is complete when:

* each P1 source has an ingestion pattern;
* each P1 ingestion maps to product output, requirement/KPI, and architecture constraints;
* batch/streaming/event choice is documented;
* frequency/trigger is documented;
* access/extraction method is documented;
* incremental/checkpoint strategy is documented or marked not applicable;
* idempotency strategy is documented;
* replay/backfill strategy is documented;
* late data/order handling is documented where relevant;
* payload/serialization expectations are documented;
* schema drift policy is documented;
* error handling and recovery are documented;
* security and credential handling are documented;
* source impact/rate limit/quota handling is documented;
* landing target and metadata expectations are documented;
* monitoring/audit expectations are documented;
* evidence mapping is prepared;
* required support work is identified;
* unresolved ingestion risks are explicit;
* draft ingestion specification content is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
