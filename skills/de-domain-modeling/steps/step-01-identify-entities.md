# Bước 1: Xác Định Entity, Event và Phân Loại

## Quy tắc
- Dùng ngôn ngữ nghiệp vụ — KHÔNG dùng tên bảng database hay tên trường kỹ thuật.
- HALT tại checkpoint phân loại và chờ xác nhận.

## Hướng dẫn

### 1. Nạp artifact đầu vào

Đọc:
- Business questions: `{project-root}/_des-output/planning-artifacts/02-business-questions.md`
- Data product definitions: `{project-root}/_des-output/planning-artifacts/04-data-product-definition.md`
- Source assessment (nếu có): `{project-root}/_des-output/planning-artifacts/05-data-source-assessment.md`

### 2. Phân loại theo Decision Matrix — Entity vs Event

| Loại | Định nghĩa | Target Gold | Ví dụ |
| :--- | :--- | :--- | :--- |
| **Entity** | Thứ tồn tại trong thế giới nghiệp vụ | Dimension table | Khách hàng, Sản phẩm, Cửa hàng |
| **Event** | Điều đã xảy ra tại một thời điểm | Fact table (transaction) | Đơn hàng, Thanh toán, Lượt xem |
| **Snapshot định kỳ** | Trạng thái của entity tại thời điểm định kỳ | Periodic snapshot fact | Tồn kho cuối ngày, Số dư tài khoản |
| **Accumulated snapshot** | Các mốc lifecycle của một quy trình | Accumulating snapshot fact | Vòng đời đơn hàng: tạo→xử lý→giao→hoàn thành |

Tạo 2 catalog:
- **Entity catalog**: Tên entity, thuộc tính chính, nguồn dữ liệu ứng viên
- **Event catalog**: Tên event, grain cần khai báo, các measure liên quan

### 3. Khai báo Grain cho mỗi Event

> **Quy tắc quan trọng**: Viết "Mỗi hàng là một ___" TRƯỚC KHI liệt kê bất kỳ cột nào.

Ví dụ:
- ✅ "Mỗi hàng là một dòng đơn hàng (order_line_item)"
- ❌ "Bảng đơn hàng có các cột: order_id, customer_id, product_id..."

Grain phải được người dùng xác nhận là đúng với nhu cầu phân tích thực tế.

### 4. Menu tương tác — Xác nhận phân loại

Trình bày Entity catalog và Event catalog, yêu cầu xác nhận:

- **[C] Tiếp tục**: Grain và phân loại đúng, chuyển sang xây dựng quan hệ.
- **[E] Chỉnh sửa**: Điều chỉnh entity/event hoặc grain cụ thể.
- **[A] Thêm**: Bổ sung entity/event còn thiếu.

HALT và chờ người dùng chọn.

- On **[C]**: Chuyển sang `./step-02-model-relationships.md`.
