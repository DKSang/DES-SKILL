# Ingestion Review Checklist

This checklist is used during Phase 08 (Ingestion Design) to review and approve ingestion pipeline designs before development begins.

---

## 1. Ingestion Mode Justification
- [ ] **Mode selected with rationale**: Batch Incremental / CDC / Event Streaming / File Landing is chosen based on business latency SLA — not tool familiarity.
- [ ] **Streaming justified**: If streaming is selected, business SLA requires < 5 min latency; otherwise batch is preferred.
- [ ] **Source impact minimized**: Extractions use read replicas or CDC log reads — not direct queries on the OLTP primary database.

## 2. Idempotency & State Management
- [ ] **Idempotent writes guaranteed**: Re-running the pipeline for any time window produces the same output without creating duplicate records.
- [ ] **Write mode documented**: Target write strategy is specified (Append-Only / Partition Overwrite / Upsert-Merge).
- [ ] **Watermark / offset checkpointing configured**: Last successfully loaded offset or timestamp is persisted in a durable state store.
- [ ] **No `datetime.now()` in pipeline code**: Date ranges use scheduler variables (e.g., `{{ ds }}`) — not system current time.

## 3. Schema Drift Handling
- [ ] **Schema drift action defined**: New column added by source → auto-merge or fail-fast behavior is specified.
- [ ] **Schema version tracked**: Ingestion pipeline captures schema version at load time in a metadata column.
- [ ] **Schema registry considered**: For streaming pipelines, schema registry (e.g., Confluent) is evaluated.

## 4. Failure Recovery & DLQ
- [ ] **Retry policy specified**: Connection failures trigger automatic retries with exponential backoff + jitter.
- [ ] **Maximum retry limit set**: Retry count bounded; after exhaustion, an alert is triggered.
- [ ] **Dead Letter Queue path defined**: Malformed payloads are routed to a quarantine location with error metadata preserved.
- [ ] **Partial write cleanup on retry**: Failed tasks clean any partial writes before re-executing to prevent duplicate rows.

## 5. Audit Metadata Completeness
Verify every Bronze target table includes these mandatory columns:
- [ ] `des_ingestion_timestamp` (UTC write time)
- [ ] `des_source_system` (source identifier)
- [ ] `des_source_offset` (file path, CDC LSN, or Kafka offset)
- [ ] `des_pipeline_run_id` (orchestration run ID)
- [ ] `des_payload_hash` (SHA-256 of raw payload)
