# Thiết Kế Serving Layer

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- HALT tại checkpoint và chờ người dùng xác nhận.

## Hướng dẫn

### 1. Nạp artifact đầu vào
Đọc: Data products (04), Semantic model (16), Gold design (11).

### 2. Với mỗi data product, thiết kế serving interface
- Dashboard: layout, refresh schedule, filters
- API: endpoints, auth, rate limit, response format
- Export: format, frequency, destination
- Feature store: feature names, types, update frequency

### 3. Performance SLA design
- Dashboard load time target: < X giây
- Query timeout: X giây
- Caching strategy (nếu cần)

### 4. Menu tương tác
- **[C] Tiếp tục**: Xác nhận serving design, chuyển sang soạn thảo.

HALT và chờ người dùng chọn.
- On **[C]**: Chuyển sang `./step-02-draft-and-handoff.md`.
