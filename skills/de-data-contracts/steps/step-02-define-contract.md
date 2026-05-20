# Định Nghĩa Contract Chi Tiết

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- HALT tại checkpoint và chờ người dùng xác nhận.

## Hướng dẫn

### 1. Per contract definition
- Schema với types và nullable
- Freshness SLA
- Quality guarantees (null rate, uniqueness)
- Breaking vs Compatible change policy
- Notification process
- Version: MAJOR.MINOR.PATCH

### 2. HALT bắt buộc — Xác nhận breaking change policy
Cả producer và consumer phải đồng ý policy trước khi ký contract.

- **[C] Đã đồng ý**: Chuyển sang soạn thảo.

HALT và chờ người dùng chọn.
- On **[C]**: Chuyển sang `./step-03-draft-and-handoff.md`.
