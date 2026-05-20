# Ánh Xạ Transformation Logic

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- HALT tại checkpoint và chờ người dùng xác nhận.

## Hướng dẫn

### 1. Nạp artifact đầu vào
Đọc: Silver design (10), Gold design (11), Data contracts (12), DQ rules (14 nếu có).

### 2. Với mỗi Gold table, định nghĩa transformation
- Source tables (Silver)
- JOIN logic và keys
- Aggregation logic
- Business rule implementations
- Incremental vs full refresh strategy

### 3. Phát hiện logic phức tạp cần review
Gắn cờ transformations có:
- Multiple source JOINs (>3 tables)
- Window functions
- Recursive / CTE phức tạp
→ Những này cần code review trong CI/CD

### 4. Menu tương tác
- **[C] Tiếp tục**: Xác nhận mapping, chuyển sang soạn thảo.

HALT và chờ người dùng chọn.
- On **[C]**: Chuyển sang `./step-02-draft-and-handoff.md`.
