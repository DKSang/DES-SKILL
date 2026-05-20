# Bước 1: Kiểm Kê và Phân Tích Nguồn Dữ Liệu

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- KHÔNG bỏ qua bất kỳ nguồn nào — kể cả nguồn khó tiếp cận.
- HALT tại checkpoint xác nhận nguồn và chờ người dùng xác nhận.

## Hướng dẫn

### 1. Nạp artifact đầu vào

Đọc:
- Business discovery: `{project-root}/_des-output/planning-artifacts/01-business-discovery.md`
- Data products: `{project-root}/_des-output/planning-artifacts/04-data-product-definition.md`

### 2. Liệt kê tất cả nguồn dữ liệu ứng viên

Từ business discovery và data products, liệt kê tất cả hệ thống có thể cung cấp dữ liệu.
Không đánh giá ở bước này — chỉ liệt kê.

Với mỗi nguồn, thu thập thông tin cơ bản:
- Tên hệ thống và loại (RDBMS / API / File / Streaming / SaaS / IoT)
- Team owner
- Môi trường (Production / Staging / Dev)

### 3. Phân loại theo FDE Write Pattern (Quan trọng với CDC)

Đây là thông tin quan trọng nhất với thiết kế ingestion — hỏi team owner của từng nguồn:

| Nguồn | Write Pattern | Ý nghĩa |
| :--- | :--- | :--- |
| CRUD (Create / Update / Delete) | Updates và deletes xảy ra | CDC hoặc Full Snapshot — snapshot không an toàn nếu deletes quan trọng |
| Insert-Only (Append-Only) | Chỉ thêm rows mới | Watermark incremental an toàn |
| Event Stream | Mỗi sự kiện là 1 row bất biến | Streaming ingestion phù hợp nhất |
| File landing | Files được drop theo lịch | File-based batch ingestion |
| API pull | Query endpoint theo yêu cầu | API pagination cần xem xét |

**Lưu ý CDC**: Nếu nguồn dùng CRUD và lịch sử thay đổi quan trọng → cần xác nhận Transaction Log Retention period. Log phải tồn tại đủ dài cho CDC pipeline đọc được.

### 4. Menu tương tác

Trình bày danh sách nguồn đã phân loại:
- **[C] Tiếp tục**: Xác nhận danh sách, chuyển sang đánh giá chi tiết.
- **[A] Thêm**: Bổ sung nguồn còn thiếu.
- **[X] Loại bỏ**: Xóa nguồn không liên quan.

HALT và chờ người dùng chọn.

- On **[C]**: Chuyển sang `./step-02-profile-sources.md`.
