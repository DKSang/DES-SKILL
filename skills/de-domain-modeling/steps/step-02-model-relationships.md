# Bước 2: Xây Dựng Quan Hệ và Xử Lý SCD

## Quy tắc
- Mọi quan hệ nhiều-nhiều (M:M) phải có bridge entity — không được bỏ qua.
- HALT bắt buộc khi phát hiện M:M quan hệ chưa có bridge.

## Hướng dẫn

### 1. Xác định quan hệ giữa các entity và event

Với mỗi cặp entity/event, xác định cardinality:

| Entity A | Quan hệ | Entity B | Loại | Xử lý |
| :--- | :--- | :--- | :--- | :--- |
| Khách hàng | đặt | Đơn hàng | 1:N | Thông thường |
| Sản phẩm | thuộc | Danh mục | N:1 | Thông thường |
| Đơn hàng | chứa | Sản phẩm | **M:M** | Cần bridge entity |

### 2. HALT bắt buộc cho M:M

Với mỗi quan hệ M:M, **HALT** và yêu cầu đặt tên bridge entity:
> "Quan hệ giữa [A] và [B] là nhiều-nhiều. Bridge entity này sẽ tên gì trong ngôn ngữ nghiệp vụ?"

Ví dụ: Đơn hàng ↔ Sản phẩm → bridge entity: **Chi tiết đơn hàng (Order Line Item)**

### 3. Xác định thuộc tính thay đổi chậm (SCD)

Với mỗi Entity, hỏi: "Thuộc tính nào có thể thay đổi theo thời gian và lịch sử thay đổi quan trọng với phân tích?"

Ví dụ SCD cần ghi lại:
- Địa chỉ khách hàng (SCD Type 2 — giữ lịch sử)
- Giá sản phẩm (SCD Type 2)
- Trạng thái đơn hàng (SCD Type 1 — chỉ cần giá trị hiện tại)
- Danh mục sản phẩm (SCD Type 2 nếu cần phân tích "sản phẩm thuộc danh mục nào vào lúc đó")

### 4. Xây dựng Glossary nghiệp vụ

Liệt kê tất cả thuật ngữ từ entity/event catalog, giải quyết đồng nghĩa:
- "Khách hàng" = "Customer" = "Client" → **Chuẩn hoá thành: Khách hàng**
- "Đơn hàng" = "Order" = "Transaction" → **Chuẩn hoá thành: Đơn hàng**

### 5. Menu tương tác

- **[C] Tiếp tục**: Xác nhận quan hệ, bridge entities, SCD, glossary.
- **[B] Thêm bridge**: Bổ sung bridge entity cho M:M chưa xử lý.
- **[S] Chỉnh SCD**: Điều chỉnh loại SCD cho entity cụ thể.

HALT và chờ người dùng chọn.

- On **[C]**: Chuyển sang `./step-03-draft-and-handoff.md`.
