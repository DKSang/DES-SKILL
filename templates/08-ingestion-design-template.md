# Ingestion Design Document

This design template is used during Phase 08 (Ingestion Design) to document target ingestion modes, watermarking, failure recovery policies, and audit logging columns.

---

## 1. Ingestion Pattern Inventory

Document the ingestion pattern for each target entity:

| Target Table | Source Entity | Ingestion Mode (Batch / CDC / Stream / Landing) | Frequency / Trigger Schedule | Primary Extraction Key (Watermark / Offset) | Expected Payload Format (JSON/Avro/Parquet) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| *sales_bronze* | *sales_db.orders* | *Log-based CDC* | *Continuous stream* | *LSN (Log Sequence Number)* | *Delta Lake (Parquet)* |
| | | | | | |

---

## 2. Extraction & Ingestion Mode Justification

Detail the engineering rationale for the chosen ingestion modes:
*   **Latency vs. Cost Trade-offs**: (e.g., Why CDC was chosen over Batch; cost comparison of continuous streaming vs. hourly batch schedules)
*   **Source Impact Minimization**: (e.g., Extracting from replica database, utilizing transaction log reads to prevent table lock conflicts on primary DB)

---

## 3. Idempotency & Write Strategy

Ensure that pipelines can be re-executed for any time window without introducing duplicate rows:
*   **Unique Merge Key**: (e.g., Primary Key or composite hash of columns)
*   **Write Mode**: (e.g., Append-only, Partition Overwrite, or Upsert/Merge)
*   **State / Checkpoint Storage**: (e.g., Where does the pipeline store the last successfully loaded offset or watermark? Airflow Variables, cloud state file, database table)
*   **Deduplication Logic**: (e.g., deduplicate in Spark memory using row number rank before writing, or rely on target DB unique constraints)

---

## 4. Failure Mode, Retries & Dead Letter Queue (DLQ)

Define resilience plans for when the ingestion stream encounters bad payloads or network dropouts:

*   **Connection Retry Rules**: (e.g., Auto-retry up to 5 times. Use exponential backoff starting at 30 seconds, maximum delay of 10 minutes, with randomized jitter enabled)
*   **DLQ Directory & Schema**: (e.g., Route invalid JSON rows or failed API payloads to `s3://bucket/quarantine/sales/` containing the raw string, timestamp, pipeline ID, and error stack trace)
*   **Alert Escalation**: (e.g., If pipeline fails 3 times consecutively, trigger a PagerDuty incident to the billing-on-call team)

---

## 5. Traceability Audit Metadata

Ensure every record written to the raw landing or Bronze layer contains audit columns:

*   **Required Ingestion Columns**:
    - `des_ingestion_timestamp`: UTC time of write.
    - `des_source_system`: Identifying code of source database/API.
    - `des_source_offset`: File path, S3 uri, Kafka offset, or CDC LSN.
    - `des_pipeline_run_id`: Airflow/Dataflow run ID.
    - `des_payload_hash`: SHA-256 fingerprint of raw record to trace modifications.
