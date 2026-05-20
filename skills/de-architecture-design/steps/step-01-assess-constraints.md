# Đánh Giá Ràng Buộc và Yêu Cầu

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- HALT tại checkpoint và chờ người dùng xác nhận.

## Hướng dẫn

### 1. Nạp artifact đầu vào
Đọc: KPI catalog, Source assessment, Domain model, Data product definitions.

### 2. Trích xuất Hard SLAs và ràng buộc kiến trúc
Liệt kê mọi SLA P1, platform constraints, team skill constraints, budget constraints.

### 3. Xác định các khả năng cần thiết
Batch? Streaming? ELT? ML? AI Agent? Reverse ETL?

### 4. Menu tương tác
- **[C] Tiếp tục**: Chuyển sang quyết định pattern.
- **[E] Chỉnh sửa**: Cập nhật ràng buộc.

HALT và chờ người dùng chọn.
- On **[C]**: Chuyển sang `./step-02-decide-pattern.md`.
