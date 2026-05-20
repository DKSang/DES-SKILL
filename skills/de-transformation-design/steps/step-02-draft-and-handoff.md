# Soạn Thảo Transformation Design và Bàn Giao

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Không mark Phase 13 completed nếu transformation thiếu source-to-target mapping, idempotency proof, late/delete policy, hoặc business rule IDs.
- HALT nếu logic phức tạp không có review flag và test expectation.

## Hướng dẫn

### 1. Dùng output format chuẩn của skill
Skill này không có template riêng. Soạn `13-transformation-design.md` theo cấu trúc:

| Section | Nội dung bắt buộc |
| :--- | :--- |
| Source-to-target map | output table, input tables, join keys, output grain |
| Transformation stages | Clean, Conform, Enrich, Aggregate, Serve |
| Business rules | rule ID, rule statement, implementation, test expectation, owner |
| Incremental strategy | full-refresh/incremental choice, key/window, idempotency proof |
| Late/delete handling | late-arrival window, reprocess strategy, delete/tombstone policy |
| Complexity review | joins, windows, CTEs, non-deterministic logic, required review |
| Dependency graph | upstream -> downstream order |
| Backfill plan | date/offset range, rebuild method, validation |

### 2. Transformation completeness gate

Kiểm tra:

| Transformation | Mapping complete | Idempotent | Late/delete handled | Rule IDs | Tests defined | Review flag |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |

Blocking gaps:
- Incremental model không chứng minh được re-run an toàn.
- Window function không có partition/order/tie-breaker.
- Metric logic không trace về certified metric.
- Business rule chỉ nằm trong SQL expression nhưng không có rule ID/test.

Nếu có blocking gap, HALT và quay lại step-01.

### 3. Data Quality handoff package

Chuẩn bị thông tin cho `de-data-quality`:

| DQ handoff item | Required value |
| :--- | :--- |
| Critical output tables |  |
| Primary/unique keys |  |
| Business rules needing tests |  |
| Reconciliation expectations |  |
| Late-arrival windows |  |
| Known complexity risks |  |

### 4. Ghi file và cập nhật trạng thái

Nếu gate pass:
- Lưu vào `13-transformation-design.md`
- Update workflow status cho Phase 13 là completed
- Ghi rõ review flags cần CI/CD enforce ở Phase 21

### 5. Menu bàn giao

- **[C] Hoàn thành**: Gợi ý `de-data-quality`.
- **[R] Soạn lại**: Quay lại step-01.
- **[Q] Bổ sung DQ handoff**: Thêm rule/test expectation trước khi bàn giao.

HALT và chờ người dùng chọn.
