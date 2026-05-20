# Bước 2: Xác Thực Nguồn Dữ Liệu và Làm Giàu Câu Hỏi

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Gắn cờ các câu hỏi không thể trả lời được từ nguồn hiện tại.
- HALT tại checkpoint và chờ người dùng xác nhận.

## Hướng dẫn thực hiện

### 1. Kiểm tra khả năng trả lời

Với mỗi câu hỏi nghiệp vụ từ bước 1, đánh giá:

| Câu hỏi | Chỉ số cần | Nguồn có sẵn? | Trạng thái |
| :--- | :--- | :--- | :--- |
| (câu hỏi) | (measure, dimension) | Có / Không / Cần hỏi | ✅ / ⚠️ Thiếu / ❌ Chặn |

Đánh dấu câu hỏi:
- **✅ Có thể trả lời**: Nguồn dữ liệu đã biết có thể cung cấp
- **⚠️ Có thể thiếu**: Cần xác nhận thêm ở phase đánh giá nguồn
- **❌ Chặn**: Không có nguồn dữ liệu — đây là open question cần owner

### 2. Phát hiện thuật ngữ mơ hồ

Scan toàn bộ câu hỏi, gắn cờ các thuật ngữ kinh doanh chưa được định nghĩa rõ.

Ví dụ cần gắn cờ:
- "Doanh thu" — tổng hay net? Bao gồm trả hàng không?
- "Người dùng active" — 7 ngày? 30 ngày? Tính login hay transaction?
- "Churn" — cancel subscription? Không hoạt động 90 ngày?

### 3. Ánh xạ câu hỏi tới chỉ số KPI ứng viên

Với mỗi câu hỏi ✅, gợi ý tên KPI ứng viên:
- "Doanh thu theo vùng theo tuần" → KPI: `weekly_revenue_by_region`
- "Tỷ lệ chuyển đổi funnel" → KPI: `lead_to_close_conversion_rate`

### 4. Menu tương tác

Trình bày:
- Danh sách câu hỏi đã validate với trạng thái
- Danh sách thuật ngữ mơ hồ cần giải quyết
- KPI ứng viên

Menu:
- **[C] Tiếp tục**: Chấp nhận danh sách, chuyển sang soạn thảo artifact.
- **[R] Giải quyết**: Xử lý từng thuật ngữ mơ hồ với người dùng trước khi tiếp tục.
- **[E] Xóa câu hỏi chặn**: Loại các câu hỏi ❌ ra khỏi phạm vi phase 1.

HALT và chờ người dùng chọn.

- On **[C]** hoặc sau khi giải quyết: Chuyển sang `./step-03-draft-and-handoff.md`.
