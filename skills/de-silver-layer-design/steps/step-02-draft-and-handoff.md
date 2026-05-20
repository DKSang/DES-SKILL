# Soạn Thảo Silver Design và Bàn Giao

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Không mark Phase 10 completed nếu Silver table thiếu grain, merge key, dedup strategy, SCD decision, DQ gate, hoặc quarantine path.
- HALT nếu Silver output không đủ tin cậy để Gold modeling dùng làm conformed source.

## Hướng dẫn

### 1. Nạp template
Đọc: `10-silver-layer-design-template.md` và decisions từ step-01.

### 2. Soạn artifact

Artifact phải có:

| Section | Nội dung bắt buộc |
| :--- | :--- |
| Silver inventory | table, source Bronze, grain, owner |
| Standardization rules | naming, types, timezone, reference values |
| Merge/dedup | business key, merge key, replay strategy |
| SCD design | Type 1/2/3 per entity and tracked attributes |
| Late/delete handling | lookback window, tombstone/delete behavior |
| Quality gates | not-null/unique/validity rules before Gold |
| Quarantine | invalid record target and required failure metadata |
| PII treatment | hash/redact/tokenize/encrypt before Silver/Gold exposure |

### 3. Silver quality gate

| Gate | Pass condition |
| :--- | :--- |
| Conformed schema | Names/types/timezones standardized |
| Idempotency | Re-running same Bronze window produces same Silver state |
| Keys | Merge key and unique/current constraints defined |
| SCD correctness | SCD2 has effective dates/current flag/version policy |
| No aggregation | Business aggregates deferred to Gold |
| Quarantine | Invalid records are not silently dropped |

Nếu gate fail, HALT và không update status completed.

### 4. Gold handoff package

| Gold handoff item | Required value |
| :--- | :--- |
| Conformed entities/events |  |
| Business keys and surrogate keys |  |
| SCD dimensions and current/history behavior |  |
| Quality limitations |  |
| Quarantine counts/known source issues |  |

### 5. Ghi file và cập nhật trạng thái
Nếu gate pass:
- Lưu vào `10-silver-layer-design.md`.
- Update workflow status cho Phase 10 là completed.

### 6. Menu bàn giao
- **[C] Hoàn thành**: Gợi ý `de-gold-layer-design`.
- **[R] Soạn lại**: Quay lại step-01.
- **[G] Bổ sung gate còn thiếu**: Hoàn thiện keys/SCD/DQ/quarantine trước khi bàn giao.

HALT và chờ người dùng chọn.
