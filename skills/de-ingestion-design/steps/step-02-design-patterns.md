# Thiết Kế Pattern Chi Tiết

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- HALT tại checkpoint và chờ người dùng xác nhận.

## Hướng dẫn

### 1. Với mỗi nguồn, thiết kế:
- Offset/watermark tracking strategy
- Failure handling và retry logic
- DLQ (Dead Letter Queue) configuration
- Idempotency guarantee
- Raw metadata fields (ingestion_time, source_id, batch_id)

### 2. Xác nhận với FDE checklist
- CDC: Confirm log retention >= pipeline frequency
- Streaming: Confirm ordering và late-arrival handling
- Batch: Confirm idempotency khi re-run

### 3. Menu tương tác
- **[C] Tiếp tục**: Xác nhận design, chuyển sang soạn thảo.

HALT và chờ người dùng chọn.
- On **[C]**: Chuyển sang `./step-03-draft-and-handoff.md`.
