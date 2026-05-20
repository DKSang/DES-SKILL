# Xác Định Các Hợp Đồng Dữ Liệu Cần Thiết

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- HALT tại checkpoint và chờ người dùng xác nhận.

## Hướng dẫn

### 1. Nạp artifact đầu vào
Đọc: Data products (04), Gold design (11), Source assessment (05).

### 2. Xác định contract scope
Contract cần thiết khi: cross-team dependency, SLA commitment, downstream consumers không control được source.

### 3. HALT: Xác nhận scope với producer và consumer teams
- **[C] Xác nhận**: Chuyển sang định nghĩa contract.

HALT và chờ người dùng chọn.
- On **[C]**: Chuyển sang `./step-02-define-contract.md`.
