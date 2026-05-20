# Ingestion Pattern Checklist

This checklist is used during Phase 08 (Ingestion Design) and Phase 09 (Bronze Layer Design) to ensure ingestion pipelines are resilient, repeatable, and trace data history accurately.

---

## 1. Ingestion Pattern & Mode
- [ ] **Ingestion mode selected**: Mode is defined (Batch Incremental, Full Snapshot, Log-based CDC, Event Streaming, or File Landing).
- [ ] **Throughput sizing completed**: Network throughput, batch size, and peak ingestion latency constraints are calculated.
- [ ] **Frequency aligned with SLAs**: Ingestion schedule matches downstream business SLA requirements (e.g., hourly, daily, near-real-time).

## 2. Idempotency & Repeatability
- [ ] **Idempotent target writes designed**: Re-running the pipeline for a specific window does not cause duplicate records (e.g., uses `overwrite-by-partition` or `merge/upsert`).
- [ ] **State / Watermark checkpointing configured**: For incremental nads, the offset/timestamp of the last successful record is persisted in a state store.
- [ ] **No silent overwrites**: Incremental loads do not lose updates that occurred during pipeline execution.

## 3. Resilience, Error Handling & DLQs
- [ ] **Poison payload handling defined**: Malformed messages or invalid JSON records do not crash the pipeline. They are captured and redirected.
- [ ] **Dead Letter Queue (DLQ) path set**: Failed payloads are written to a quarantine folder/table with failure metadata.
- [ ] **Retry policy configured**: Connection errors trigger retries with exponential backoff and randomized jitter to prevent overloading target systems.
- [ ] **Failure alerts mapped**: Critical ingestion failures alert operations channels (PagerDuty, Slack, email).

## 4. Ingestion Traceability Metadata
- [ ] **Standard metadata columns added**: The target Bronze table includes the following fields:
  - `ingestion_timestamp`: UTC time when the record was processed.
  - `source_system`: Name/ID of the originating system.
  - `source_file_or_event_id`: Path of input file, Kafka partition-offset, or event ID.
  - `pipeline_run_id`: Unique identifier for the orchestration engine run.
  - `raw_payload_hash`: SHA-256 hash of the input payload to trace payload changes.
