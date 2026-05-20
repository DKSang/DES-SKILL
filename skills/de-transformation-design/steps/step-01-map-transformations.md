# Ánh Xạ Transformation Logic

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Mỗi transformation phải có source-to-target mapping, incremental/full-refresh strategy, edge-case policy, và testable business rule ID.
- HALT bắt buộc nếu incremental logic không idempotent hoặc không có late-arrival/delete handling.

## Hướng dẫn

### 1. Nạp artifact đầu vào
Đọc: Bronze design (09), Silver design (10), Gold design (11), Data contracts (12), DQ rules (14 nếu có), Architecture decision (07).

### 2. Map output table tới input và stage

| Output table | Stage | Input tables | Join keys | Output grain | Contract dependency |
| :--- | :--- | :--- | :--- | :--- | :--- |
| silver.* | Clean/Conform | bronze.* | source/natural keys | source/entity grain | producer contract |
| gold.* | Enrich/Aggregate/Serve | silver.* | surrogate/natural keys | declared Gold grain | consumer contract |

### 3. Chọn full-refresh vs incremental

| Source/output behavior | Recommended strategy | Idempotency proof | HALT trigger |
| :--- | :--- | :--- | :--- |
| Small reference table < 1M rows | Full refresh | Replace table/partition atomically | Không có atomic replace |
| Append-only events | Incremental by event/partition date | Re-running date window overwrites or dedups same keys | Không có event_id/dedup key |
| CRUD table with `updated_at` | Incremental MERGE by primary key | Same watermark range produces same latest row | Deletes không được capture |
| CDC stream/log | Incremental by LSN/offset | Replay offset range with ordered operations | Operation order không ổn định |
| Aggregated Gold fact | Incremental partition rebuild | Rebuild affected partitions from Silver truth | Late-arrival window chưa rõ |

### 4. Late-arriving data và deletes

Với mỗi transformation, điền:

| Table | Late-arrival window | Reprocess strategy | Delete handling | Data correction owner |
| :--- | :--- | :--- | :--- | :--- |

Quy tắc:
- Nếu source có late records, incremental window phải overlap hoặc rebuild affected partitions.
- Nếu source có deletes, strategy phải dùng CDC tombstone, soft-delete flag, hoặc periodic reconciliation.
- Không được ghi "ignore deletes" nếu KPI/consumer cần trạng thái hiện tại.

### 5. Window function và complexity gate

Gắn cờ review nếu transformation có:

| Complexity signal | Threshold | Required action |
| :--- | :--- | :--- |
| Multi-source joins | > 3 input tables | Mandatory code review + row-count reconciliation |
| Window functions | Any ranking/sessionization/dedup window | Explain partition/order keys and tie-breaker |
| Recursive/large CTE chain | > 3 nested CTEs | Split into named intermediate models |
| Non-deterministic logic | `now()`, random, implicit timezone | Replace with scheduler variables and explicit timezone |
| Metric formulas | Business KPI calculation | Link to certified metric owner |

### 6. Business rule catalog

| Rule ID | Business rule | SQL/Python implementation | Test expectation | Owner |
| :--- | :--- | :--- | :--- | :--- |
| BR-001 | (clear rule) | (expression) | (assertion) | (owner) |

### 7. HALT bắt buộc — idempotency và complexity review

Trình bày:

| Transformation | Strategy | Idempotent? | Late/delete handled? | Complexity flag | Required review |
| :--- | :--- | :--- | :--- | :--- | :--- |

Menu:
- **[C] Tiếp tục**: Xác nhận mapping, chuyển sang soạn thảo.
- **[I] Sửa incremental strategy**: Làm lại strategy để đảm bảo idempotency.
- **[L] Sửa late/delete policy**: Bổ sung late-arrival hoặc delete handling.
- **[R] Đánh dấu review**: Thêm review flag/test cho logic phức tạp.

HALT và chờ người dùng chọn.

- On **[C]**: Chuyển sang `./step-02-draft-and-handoff.md`.
