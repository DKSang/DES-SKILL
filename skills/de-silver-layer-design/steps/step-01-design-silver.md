# Thiết Kế Silver Layer

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- HALT tại checkpoint và chờ người dùng xác nhận.

## Hướng dẫn

### 1. Nạp artifact đầu vào
Đọc: Bronze design (09), Domain model (06).

### 2. Thiết kế transformations
- Standardization: null handling, data type casting, timezone normalization
- Deduplication strategy: primary key, event dedup
- SCD handling: Type 1 / Type 2 cho entities
- Business key mapping: generate surrogate keys nếu cần

### 3. Menu tương tác
- **[C] Tiếp tục**: Xác nhận Silver design, chuyển sang soạn thảo.

HALT và chờ người dùng chọn.
- On **[C]**: Chuyển sang `./step-02-draft-and-handoff.md`.
