## HALT - Transformation Engine Decision

Stop here. Do not continue until the user confirms this decision.

### Why this matters
Transformation engine choice affects local development, CI, deployment, runtime, testing, and maintainability.

### Decision needed
Choose the engine and layer ownership for Bronze, Silver, Gold, tests, and deployment.

### Options
A. Platform notebooks / PySpark
B. dbt + DuckDB or local SQL
C. Hybrid: platform for ingestion/Silver, local/dbt for Gold
D. Custom engine split

### Recommended default
Choose C when local Gold modeling is valuable and platform execution still matters.

### Impact
- A: strong platform parity but slower local iteration
- B: fast local CI but needs deployment integration
- C: balances local modeling and platform workloads
- D: flexible but must define ownership explicitly

### Required user response
Please choose one option or provide a custom decision. Do not continue until the user responds.

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

Chuẩn bị thông tin cho `des-data-quality`:

| DQ handoff item | Required value |
| :--- | :--- |
| Critical output tables |  |
| Primary/unique keys |  |
| Business rules needing tests |  |
| Reconciliation expectations |  |
| Late-arrival windows |  |
| Known complexity risks |  |

### 4. Configured checklist gate

Trước khi ghi file hoặc update workflow status:
- Resolve checklist_file từ customize.toml.
- Load toàn bộ checklist file đã cấu hình.
- Kiểm tra draft artifact theo từng checklist item.
- Ghi checklist validation report ngắn với trạng thái Pass / Needs Work / Blocked.
- Nếu có item Blocked hoặc thiếu evidence bắt buộc, HALT và không mark phase completed.
- Chỉ cho phép override nếu người dùng xác nhận rõ ràng và ghi override vào artifact/status.


### 5. Ghi file và cập nhật trạng thái

Nếu gate pass:
- Lưu vào `13-transformation-design.md`
- Update workflow status cho Phase 13 là completed
- Ghi rõ review flags cần CI/CD enforce ở Phase 21

### 6. Menu bàn giao

- **[C] Hoàn thành**: Gợi ý `des-data-quality`.
- **[R] Soạn lại**: Quay lại step-01.
- **[Q] Bổ sung DQ handoff**: Thêm rule/test expectation trước khi bàn giao.

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
