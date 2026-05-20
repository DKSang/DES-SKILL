# Thiết Kế Silver Layer

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Silver chỉ chuẩn hóa, dedup, conform, validate; không aggregate business metrics.
- HALT nếu SCD Type 2 được chọn nhưng MERGE key, effective dating, hoặc current-row policy chưa rõ.

## Hướng dẫn

### 1. Nạp artifact đầu vào
Đọc: Bronze design (09), Domain model (06), Source assessment (05), Data contracts (12 nếu có), Governance (19 nếu có).

### 2. Silver table specification

| Silver table | Source Bronze | Entity/event grain | Business key | Merge key | Write mode | PII treatment |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |

### 3. Dedup and CDC handling

| Source behavior | Strategy | Required keys | HALT if |
| :--- | :--- | :--- | :--- |
| Insert-only events | `row_number() over(partition by event_id order by des_ingestion_timestamp desc)=1` | event_id, ingestion timestamp | event_id missing |
| CRUD snapshot | hash diff + MERGE current state | primary key, hash columns | deletes/current-state requirement unclear |
| CDC log | ordered MERGE by LSN/offset and op type | primary key, op, source_lsn | delete/tombstone not handled |
| SaaS export | full snapshot compare | natural key, payload_hash | snapshot time missing |

### 4. SCD Type 2 MERGE key design

Khi business cần lịch sử thay đổi attribute, điền:

| Entity | Natural key | Surrogate key | Change detection columns | Effective from | Effective to | Current flag | Delete handling |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |

SCD2 rules:
- Natural key identifies the business entity.
- Surrogate key identifies a historical version.
- New version starts when tracked attribute hash changes.
- Close old version: `valid_to = new_valid_from - epsilon`, `is_current = false`.
- Current row uniqueness: exactly one `is_current = true` per natural key.
- Deletes become closed rows or `is_deleted = true`; do not silently drop history.

### 5. Standardization and quarantine

| Rule area | Required decision |
| :--- | :--- |
| Naming | source names -> `snake_case` business names |
| Timestamps | timezone source -> UTC conversion |
| Types | explicit casts and invalid cast behavior |
| Nulls | default/quarantine/fail per critical column |
| Reference values | map to canonical codes (ISO country/currency, domain enums) |
| Invalid records | `[table]_quarantine` with rule ID and failure reason |

### 6. HALT — Silver correctness review

Trình bày:

| Table | Merge key clear? | Dedup safe? | SCD policy clear? | Late/delete handled? | Blocking gap |
| :--- | :--- | :--- | :--- | :--- | :--- |

Menu:
- **[C] Tiếp tục**: Xác nhận Silver design, chuyển sang soạn thảo.
- **[K] Sửa keys/MERGE**: Làm rõ business key, merge key, surrogate key.
- **[S] Sửa SCD**: Chọn lại Type 1/2/3 hoặc hoàn thiện SCD2.
- **[Q] Sửa quarantine/null policy**: Bổ sung validation behavior.

HALT và chờ người dùng chọn.

- On **[C]**: Chuyển sang `./step-02-draft-and-handoff.md`.
