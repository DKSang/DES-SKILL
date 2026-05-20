# Ingestion Design Document

Template này được dùng trong Phase 08 để tài liệu hóa các pattern ingestion, watermark, chiến lược idempotency và xử lý lỗi. Người dùng tự điền; xóa ví dụ khi hoàn thành.

> **Nguyên tắc FDE Bounded vs. Unbounded**:
> - **Bounded data** (batch): Dữ liệu có điểm bắt đầu và kết thúc rõ ràng (daily snapshot, file export). Thích hợp với batch ingestion.
> - **Unbounded data** (streaming): Dữ liệu liên tục, không có điểm kết thúc (event stream, CDC log). Yêu cầu watermark và late-arrival window để xử lý.
> 
> **Khi nào không cần Streaming**: Nếu Hard SLA > 5 phút, batch micro-batch là đủ và rẻ hơn nhiều.

---

## 1. Ingestion Pattern Inventory

### Data Maturity vs. Ingestion Complexity (FDE)

| Data Maturity | Recommended Complexity | Anti-Pattern |
| :--- | :--- | :--- |
| Level 1 (Ad-hoc) | Batch incremental; 1-2 sources | Streaming trước khi batch hoạt động ổn định |
| Level 2 (Scaling) | CDC cho CRUD; micro-batch cho event | CDC không có DLQ; không có retry logic |
| Level 3 (Data-Led) | Streaming; exactly-once; schema registry | Phức tạp hóa Level 1 problem |

### Per-Source Ingestion Pattern

| Target Table | Source Entity | Mode (Batch / CDC / Stream / File) | Tần suất / Trigger | Watermark Key | Format |
| :--- | :--- | :--- | :--- | :--- | :--- |
| *sales_bronze* | *sales_db.orders* | *Log-based CDC* | *Continuous* | *LSN (Log Sequence Number)* | *Delta/Parquet* |
| | | | | | |

---

## 2. Rationale và Trade-offs Ingestion Mode

- **Latency vs. Cost**: (Ví dụ: Tại sao chọn CDC thay vì Batch? CDC: real-time nhưng đắt hơn về ops. Batch: rẻ hơn nhưng có thể bỏ qua deletes.)
- **Source Impact Minimization**: (Ví dụ: Đọc từ replica, tránh lock primary DB)
- **Late-arrival handling**: (Với Unbounded data, window size cho late arrival là bao lâu? 5 phút? 1 giờ?)

---

## 3. Idempotency và Write Strategy

> **Exactly-once vs. At-least-once**: Streaming thường đảm bảo *at-least-once* (có thể duplicate). Để đạt *exactly-once*, cần idempotent MERGE key + checkpoint state storage.

- **Unique Merge Key**: (Primary key hoặc composite hash của các cột nào?)
- **Write Mode**: (Append-only / Partition Overwrite / Upsert-MERGE)
- **State / Checkpoint Storage**: (Pipeline lưu watermark ở đâu? Airflow Variables / Cloud state file / DB table)
- **Deduplication Logic**: (Deduplicate trong Spark bằng ROW_NUMBER() trước khi write, hay rely on target unique constraint?)

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
