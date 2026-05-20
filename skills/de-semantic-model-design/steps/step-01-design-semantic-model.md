# Thiết Kế Semantic Model

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- HALT tại checkpoint và chờ người dùng xác nhận.

## Hướng dẫn

### 1. Nạp artifact đầu vào
Đọc: KPI catalog (03), Gold design (11), Data products (04).

### 2. Thiết kế semantic model
- Measures (KPIs với công thức chính xác)
- Dimensions (hierarchies, attributes)
- Relationships giữa semantic tables
- Security roles (row-level security)

### 3. Single metric layer principle
Mỗi KPI phải có exactly 1 certified definition trong semantic model.
Không cho phép calculated measures trùng lặp giữa các BI reports.

### 4. Menu tương tác
- **[C] Tiếp tục**: Xác nhận semantic design, chuyển sang soạn thảo.

HALT và chờ người dùng chọn.
- On **[C]**: Chuyển sang `./step-02-draft-and-handoff.md`.
