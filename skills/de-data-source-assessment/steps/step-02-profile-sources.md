# Bước 2: Đánh Giá Chi Tiết Từng Nguồn

## Quy tắc
- Đánh dấu rõ mỗi rủi ro — đừng bỏ qua vì "sẽ giải quyết sau".
- HALT nếu nguồn critical không có owner xác nhận schema.

## Hướng dẫn

### 1. Profile từng nguồn theo 7 tiêu chí FDE

Với mỗi nguồn, điền bảng profile:

**a) Volume & Velocity**
- Số lượng records hiện tại / dự kiến 12 tháng tới
- Tốc độ tạo mới (records/giờ hoặc records/ngày)

**b) Schema Stability**
- Schema có thay đổi thường xuyên không?
- Ai chịu trách nhiệm thông báo schema changes?
- Có Schema Registry không?

**c) SLA từ phía nguồn**
- Nguồn có downtime maintenance window không? Khi nào?
- Uptime SLA của nguồn là bao nhiêu %?

**d) Data Quality tại nguồn**
- Có known quality issues không? (nulls, duplicates, encoding issues)
- Ai là DQ owner tại nguồn?

**e) Access & Authentication**
- Phương thức xác thực: API key / OAuth / Service Account / Direct DB
- Ai cấp access? Timeline?

**f) Giới hạn kỹ thuật**
- Rate limits (nếu API)
- Transaction log retention (nếu CRUD database — dùng cho CDC)
- Pagination limit (nếu API)
- Max batch size

**g) Khả năng hỗ trợ ingestion mode**

| Nguồn | Hỗ trợ Full Snapshot? | Hỗ trợ Incremental? | Hỗ trợ CDC? | Hỗ trợ Streaming? |
| :--- | :--- | :--- | :--- | :--- |
| (tên) | ✅ / ❌ | ✅ / ❌ | ✅ / ❌ | ✅ / ❌ |

### 2. Xác định nguồn gây rủi ro cao

Gắn cờ đỏ 🚩 cho nguồn có bất kỳ điều kiện nào:
- Chủ sở hữu chưa xác nhận access
- CDC log retention < 24 giờ
- Không có thông báo schema change
- Known quality issues chưa có kế hoạch xử lý
- Uptime < 99%

### 3. Menu tương tác

- **[C] Tiếp tục**: Xác nhận profile đầy đủ, chuyển sang soạn thảo.
- **[F] Điền thiếu**: Bổ sung thông tin còn thiếu.
- **[E] Leo thang rủi ro**: Thêm open question cho rủi ro chưa giải quyết.

HALT và chờ người dùng chọn.

- On **[C]**: Chuyển sang `./step-03-draft-and-handoff.md`.
