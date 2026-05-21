## HALT - Silver Conformance Rule Approval

Stop here. Do not continue until the user confirms this decision.

### Why this matters
Silver defines trusted conformed data; key mapping, timezone, units, duplicates, and missing values cannot be guessed.

### Decision needed
Approve conformance, deduplication, key, timezone, unit conversion, and missing-value rules for each entity or table.

### Options
A. Use source natural key
B. Generate surrogate key
C. Use composite key
D. Defer until source mapping is confirmed

### Recommended default
Choose the key strategy that preserves source traceability and supports Gold grain.

### Impact
- A: simple and traceable but source-dependent
- B: stable analytics key but needs mapping rules
- C: accurate when no single key exists but more complex
- D: blocks downstream conformance until source truth is clearer

### Required user response
Please choose one option or provide a custom decision. Do not continue until the user responds.

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
- Lưu vào `10-silver-layer-design.md`.
- Update workflow status cho Phase 10 là completed.

### 7. Menu bàn giao
- **[C] Hoàn thành**: Gợi ý `des-gold-layer-design`.
- **[R] Soạn lại**: Quay lại step-01.
- **[G] Bổ sung gate còn thiếu**: Hoàn thiện keys/SCD/DQ/quarantine trước khi bàn giao.

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
