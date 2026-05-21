# Soạn Thảo Ingestion Design và Bàn Giao

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Không mark Phase 08 completed nếu bất kỳ source nào thiếu mode, checkpoint, idempotency, retry, DLQ, hoặc raw metadata.
- HALT nếu ingestion design không đủ thông tin để Bronze layer thiết kế table/path/partition.

## Hướng dẫn

### 1. Nạp template và decisions đã chốt
Đọc:
- `08-ingestion-design-template.md`
- Source classification từ step-01
- Checkpoint/idempotency/DLQ design từ step-02
- Architecture storage pattern từ Phase 07

### 2. Soạn artifact theo từng source

Mỗi source phải có:

| Section | Nội dung bắt buộc |
| :--- | :--- |
| Source summary | owner, access method, source type, write pattern |
| Ingestion mode | Batch / CDC / Streaming / File landing / Backfill, với rationale |
| Trigger/frequency | schedule, sensor, event trigger, SLA |
| Destination | Bronze table/path, partition convention, naming convention |
| Checkpoint | watermark/offset/manifest strategy, checkpoint store |
| Idempotency | write pattern, dedup key, replay behavior |
| Failure handling | retry policy, timeout, DLQ/quarantine path |
| Raw metadata | audit columns added to every record |
| Backfill | historical range, replay method, expected duration |

### 3. Source-level completeness gate

Trước khi ghi file, kiểm tra bảng:

| Source | Mode confirmed | Checkpoint safe | Idempotent | DLQ defined | Backfill safe | Blocking gap |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |

Blocking gaps:
- CDC nhưng không biết log retention hoặc offset field.
- Incremental batch nhưng watermark không monotonic hoặc không bắt deletes cần thiết.
- Streaming nhưng không có event-time/late-arrival policy.
- File landing nhưng không có manifest/checksum duplicate policy.

Nếu có blocking gap, HALT và không update status completed.

### 4. Bronze handoff package

Chuẩn bị thông tin để `des-bronze-layer-design` dùng ngay:

| Bronze handoff item | Required value |
| :--- | :--- |
| Raw landing path/table per source |  |
| Partition key suggestion |  |
| Mandatory metadata columns |  |
| Schema drift policy |  |
| Retention/replay window |  |
| DLQ/quarantine path |  |

### 5. Configured checklist gate

Trước khi ghi file hoặc update workflow status:
- Resolve `checklist_file` từ `customize.toml`.
- Load toàn bộ checklist file đã cấu hình.
- Kiểm tra draft artifact theo từng checklist item.
- Ghi checklist validation report ngắn với trạng thái Pass / Needs Work / Blocked.
- Nếu có item Blocked hoặc thiếu evidence bắt buộc, HALT và không mark phase completed.
- Chỉ cho phép override nếu người dùng xác nhận rõ ràng và ghi override vào artifact/status.

### 6. Ghi file và cập nhật trạng thái

Nếu gate pass:
- Lưu vào `08-ingestion-design.md`
- Update workflow status cho Phase 08 là completed
- Ghi rõ remaining risks không blocking, nếu có

### 7. Menu bàn giao

- **[C] Hoàn thành**: Gợi ý `des-bronze-layer-design`.
- **[R] Soạn lại**: Quay lại step-01.
- **[D] Sửa checkpoint/DLQ**: Quay lại step-02 cho source bị gap.

HALT và chờ người dùng chọn.

## HALT - Checklist Blocked

Stop here before marking the artifact Done or advancing workflow status.

### Trigger
Use this HALT if the configured checklist does not pass, evidence is missing, approval is missing, or the artifact still contains unresolved blockers.

### Blocked checklist items
- List each blocked or unresolved checklist item.
- Name the artifact section and owner affected.
- State what evidence or decision is missing.

### Impact
This artifact cannot be marked Done and the workflow status must not advance.

### Options
A. Fix the artifact now
B. Mark as draft with blockers
C. Route back to an upstream skill
D. Stop

### Required response
Please choose A/B/C/D or provide a custom decision. Do not continue until the user responds.
