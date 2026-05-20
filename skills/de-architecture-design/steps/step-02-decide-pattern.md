# Quyết Định Pattern Kiến Trúc (ADR)

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- HALT tại checkpoint và chờ người dùng xác nhận.

## Hướng dẫn

### 1. Chọn Storage Pattern (dùng Decision Matrix trong SKILL.md)
Documment quyết định + 2 alternatives + rationale. Label: Reversible / Irreversible.

### 2. Chọn Compute và Transformation pattern
SQL / Python / Spark / dbt / DuckDB — match với team skills.

### 3. HALT bắt buộc — Xác nhận quyết định Irreversible
Mọi "One-way door" decision phải được người dùng xác nhận rõ ràng trước khi tiếp tục.

- **[C] Xác nhận**: Tiếp tục soạn thảo ADR.
- **[R] Xem xét lại**: Đánh giá lại lựa chọn.

HALT và chờ người dùng chọn.
- On **[C]**: Chuyển sang `./step-03-draft-and-handoff.md`.
