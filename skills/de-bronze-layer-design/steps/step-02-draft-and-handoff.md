# Soạn Thảo Bronze Design và Bàn Giao

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Không mark Phase 09 completed nếu table thiếu format, partition, metadata columns, schema drift policy, replay policy, hoặc retention.
- HALT nếu Bronze design không đủ để Silver layer dedup/standardize/replay an toàn.

## Hướng dẫn

### 1. Nạp template
Đọc: `09-bronze-layer-design-template.md` và decisions từ step-01.

### 2. Soạn artifact

Artifact phải có:

| Section | Nội dung bắt buộc |
| :--- | :--- |
| Bronze inventory | one dataset per source feed/logical raw object |
| Storage format | Parquet/Delta/Iceberg/landing rationale |
| Schema policy | preserve raw fields, schema drift handling |
| Metadata columns | 5 mandatory audit columns |
| Partition/file layout | partition key, target file size, clustering if any |
| Replay/backfill | source offset/date range, idempotent write behavior |
| Retention/security | hot/cool/archive/delete, raw PII access restriction |

### 3. Bronze quality gate

| Gate | Pass condition |
| :--- | :--- |
| Raw fidelity | No business transforms or dropped source fields |
| Auditability | Mandatory metadata present |
| Replayability | Backfill/re-run path documented |
| File layout | Partition cardinality and file size acceptable |
| Security | Bronze raw access restricted |
| Retention | Lifecycle policy defined |

Nếu gate fail, HALT và không update status completed.

### 4. Silver handoff package

| Silver handoff item | Required value |
| :--- | :--- |
| Bronze source tables |  |
| Raw keys and offsets |  |
| Dedup candidate keys |  |
| Timestamp fields and timezone source |  |
| Schema drift cases |  |
| PII columns needing Silver treatment |  |

### 5. Configured checklist gate

Trước khi ghi file hoặc update workflow status:
- Resolve checklist_file từ customize.toml.
- Load toàn bộ checklist file đã cấu hình.
- Kiểm tra draft artifact theo từng checklist item.
- Ghi checklist validation report ngắn với trạng thái Pass / Needs Work / Blocked.
- Nếu có item Blocked hoặc thiếu evidence bắt buộc, HALT và không mark phase completed.
- Chỉ cho phép override nếu người dùng xác nhận rõ ràng và ghi override vào artifact/status.


### 6. Ghi file và cập nhật trạng thái
Nếu gate pass:
- Lưu vào `09-bronze-layer-design.md`.
- Update workflow status cho Phase 09 là completed.

### 7. Menu bàn giao
- **[C] Hoàn thành**: Gợi ý `de-silver-layer-design`.
- **[R] Soạn lại**: Quay lại step-01.
- **[G] Bổ sung gate còn thiếu**: Hoàn thiện format/partition/replay/retention trước khi bàn giao.

HALT và chờ người dùng chọn.
