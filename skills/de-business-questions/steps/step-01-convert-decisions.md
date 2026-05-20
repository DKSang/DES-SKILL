# Bước 1: Đọc Brief và Chuyển Thành Câu Hỏi Nghiệp Vụ

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Không đề xuất tool hay technology ở bước này.
- HALT tại các checkpoint và chờ người dùng xác nhận.

## Hướng dẫn thực hiện

### 1. Nạp artifact đầu vào

Đọc brief khám phá nghiệp vụ từ:
- File: `{project-root}/_des-output/planning-artifacts/01-business-discovery.md`

Nếu file không tồn tại, **HALT** và thông báo: "Chưa có Business Discovery Brief. Hãy chạy `de-business-discovery` trước."

### 2. Trích xuất các quyết định kinh doanh

Từ brief, liệt kê tất cả **quyết định kinh doanh** được đề cập. Mỗi quyết định phải có:
- Người ra quyết định (tên vai trò cụ thể, không phải "business")
- Hành động quyết định đó kích hoạt

### 3. Phân loại loại phân tích cần thiết

Với mỗi quyết định, phân loại theo Decision Matrix:

| Loại câu hỏi | Kiểu phân tích | Hạ tầng gợi ý |
| :--- | :--- | :--- |
| "Chuyện gì đã xảy ra / bao nhiêu?" | Mô tả (Descriptive) | Gold batch, dashboard |
| "Tại sao lại xảy ra?" | Chẩn đoán (Diagnostic) | Drill-down, cohort |
| "Điều gì sẽ xảy ra?" | Dự báo (Predictive) | ML, feature store |
| "Chúng ta nên làm gì?" | Chỉ thị (Prescriptive) | Optimization engine |
| "Điều gì đang xảy ra?" | Vận hành (Operational) | Streaming, near-realtime |

### 4. Chuyển quyết định thành câu hỏi nghiệp vụ

Mỗi quyết định → 1-3 câu hỏi nghiệp vụ cụ thể. Mỗi câu hỏi phải có:
- **Độ granularity (grain)**: "Mỗi hàng là gì?" (e.g., "theo vùng theo tuần")
- **Khung thời gian**: (e.g., "7 ngày gần nhất", "năm tài chính hiện tại")
- **Loại phân tích**: (từ Decision Matrix ở trên)

### 5. Menu tương tác

Trình bày danh sách câu hỏi đã tạo và menu:

- **[C] Tiếp tục**: Xác nhận danh sách câu hỏi, chuyển sang bước xác định nguồn dữ liệu.
- **[T] Thêm**: Bổ sung câu hỏi bị thiếu.
- **[X] Xóa**: Loại bỏ câu hỏi không cần thiết.

HALT và chờ người dùng chọn.

- On **[C]**: Chuyển sang `./step-02-validate-and-enrich.md`.
- On **[T]** hoặc **[X]**: Cập nhật danh sách và hiện lại menu.
