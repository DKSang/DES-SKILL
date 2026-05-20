# Bước 2: Giải Quyết Xung Đột và Xác Nhận Định Nghĩa

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- KHÔNG tiếp tục nếu còn xung đột định nghĩa metric chưa được giải quyết.
- HALT bắt buộc tại bước xác nhận stakeholder.

## Hướng dẫn thực hiện

### 1. Phát hiện xung đột định nghĩa metric

Kiểm tra xem có KPI nào có thể bị định nghĩa khác nhau giữa các phòng ban không.

Ví dụ điển hình cần kiểm tra:
- "Doanh thu" — Finance dùng gross revenue, Marketing dùng net?
- "Người dùng active" — Product dùng 7 ngày, Sales dùng 30 ngày?
- "Tỷ lệ chuyển đổi" — Marketing (click → signup), Sales (lead → close)?

Tạo bảng xung đột:

| KPI | Định nghĩa phòng A | Định nghĩa phòng B | Trạng thái | Owner giải quyết |
| :--- | :--- | :--- | :--- | :--- |
| (tên KPI) | (cách tính A) | (cách tính B) | ⚠️ Xung đột | (tên người/phòng) |

### 2. HALT bắt buộc — Xác nhận giải quyết xung đột

Nếu có bất kỳ xung đột nào ở trạng thái "⚠️ Xung đột":

**HALT hoàn toàn. Thông báo rõ:**
> "Còn [N] xung đột định nghĩa chưa được giải quyết. Không thể tiến hành thiết kế kiến trúc và data model cho đến khi tất cả xung đột được business owner ký tắt."

Liệt kê từng xung đột và yêu cầu người dùng:
- **[R] Giải quyết ngay**: Nhập định nghĩa đã được thống nhất.
- **[D] Hoãn**: Đánh dấu là open question với deadline cụ thể và owner.

> **Nguyên tắc**: Xung đột metric là vấn đề nghiệp vụ, không phải kỹ thuật. Engineer không được tự quyết định.

### 3. Xác nhận yêu cầu lịch sử

Với mỗi data product, xác nhận:
- Cần backfill bao nhiêu năm dữ liệu lịch sử?
- Dữ liệu lịch sử có sẵn không hay phải migrate?

### 4. Menu tương tác

Sau khi tất cả xung đột được giải quyết hoặc được đánh dấu có deadline:

- **[C] Tiếp tục**: Xác nhận danh sách KPI đã sạch, chuyển sang soạn thảo.
- **[R] Giải quyết thêm**: Xử lý xung đột còn lại.

HALT và chờ người dùng chọn.

- On **[C]**: Chuyển sang `./step-03-draft-and-handoff.md`.
