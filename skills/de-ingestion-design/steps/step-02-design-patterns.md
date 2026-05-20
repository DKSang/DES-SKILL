# Thiết Kế Pattern Ingestion Chi Tiết

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Mọi pipeline phải idempotent: chạy lại cùng input/date window không tạo duplicate hoặc mất dữ liệu.
- HALT bắt buộc nếu không chứng minh được offset/watermark/checkpoint strategy cho mode đã chọn.

## Hướng dẫn

### 1. Thiết kế contract vận hành cho từng nguồn

| Source | Mode | Trigger | Destination Bronze | Checkpoint store | Backfill window | Owner |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| (source) | Batch / CDC / Streaming / File | cron / sensor / event | path/table | table/file/topic offset | date/offset range | team/person |

### 2. Chọn offset/watermark/checkpoint pattern

| Mode | Tracking strategy | Checkpoint record | Exactly-once note |
| :--- | :--- | :--- | :--- |
| Incremental batch | High-watermark by source timestamp or numeric ID | `{source, last_watermark, run_id, row_count, committed_at}` | Exactly-once chỉ đạt ở sink nếu write atomic + dedup/merge |
| CDC | Source log offset/LSN + transaction commit timestamp | `{source, last_lsn, commit_ts, run_id}` | Giữ ordering theo log; reprocess bằng offset range |
| Streaming | Topic partition + offset + event-time watermark | `{topic, partition, offset, watermark_ts}` | Dùng checkpointed sink; duplicate vẫn cần payload hash/key dedup |
| File landing | Manifest/checksum + processed file registry | `{file_name, checksum, size, row_count, processed_at}` | File resend phải idempotent theo checksum |

### 3. Thiết kế idempotency và duplicate control

| Source behavior | Recommended sink write | Dedup key | Failure recovery |
| :--- | :--- | :--- | :--- |
| Append-only events | Append + unique event key dedup | event_id hoặc payload_hash | Re-run window, dedup trước promote |
| CRUD/CDC | MERGE by primary key + operation ordering | primary key + source_lsn | Replay từ last committed LSN |
| Daily partition snapshot | Replace/overwrite partition atomically | partition_date + natural key | Rebuild partition from source snapshot |
| Files | Load to run staging, validate manifest, then commit | checksum + file path | Do not mark processed until commit succeeds |

### 4. Failure handling, retry, và DLQ

Với mỗi pipeline, định nghĩa:

| Failure type | Action | Retry policy | DLQ/quarantine payload |
| :--- | :--- | :--- | :--- |
| Network/API timeout | Retry with exponential backoff + jitter | max attempts, max elapsed time | request params, error, run_id |
| Schema mismatch | Stop or quarantine based on contract severity | no blind retry | raw payload, schema version, diff |
| Bad record parse | Quarantine record and continue if non-critical | no retry unless parser fixed | raw_record, parser_error, source_offset |
| Checkpoint write failure | FAIL run, do not advance checkpoint | retry checkpoint commit | run_id, attempted checkpoint |

### 5. Raw metadata bắt buộc

Thêm vào mọi Bronze output:
- `des_ingestion_timestamp`
- `des_source_system`
- `des_source_offset`
- `des_pipeline_run_id`
- `des_payload_hash`
- `des_schema_version` nếu source có schema registry hoặc contract version

### 6. HALT bắt buộc — xác nhận checkpoint safety

Trước khi soạn artifact, trình bày:

| Source | Checkpoint strategy | Idempotency proof | Backfill proof | Residual risk |
| :--- | :--- | :--- | :--- | :--- |

Menu:
- **[C] Tiếp tục**: Xác nhận design, chuyển sang soạn thảo.
- **[R] Sửa checkpoint**: Chọn lại tracking strategy.
- **[D] Bổ sung DLQ/retry**: Hoàn thiện failure plan trước khi tiếp tục.

HALT và chờ người dùng chọn.

- On **[C]**: Chuyển sang `./step-03-draft-and-handoff.md`.
