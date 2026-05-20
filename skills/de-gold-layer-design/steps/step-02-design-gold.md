# Thiết Kế Fact và Dimension Tables

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- HALT tại checkpoint và chờ người dùng xác nhận.

## Hướng dẫn

### 1. Thiết kế Fact tables
Với mỗi event từ domain model: grain (khai báo lại), measures, foreign keys, surrogate keys.

### 2. Thiết kế Dimension tables
Với mỗi entity: attributes, SCD type, natural key vs surrogate key.

### 3. Traceability check
Mỗi Gold table phải trace được về ít nhất 1 business question.

### 4. Menu tương tác
- **[C] Tiếp tục**: Xác nhận design, chuyển sang soạn thảo.

HALT và chờ người dùng chọn.
- On **[C]**: Chuyển sang `./step-03-draft-and-handoff.md`.
