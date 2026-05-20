# Bước 1: Phân Loại và Ưu Tiên Data Product

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Mỗi data product phải có người tiêu dùng cụ thể — không chấp nhận "all users".
- HALT tại checkpoint và chờ xác nhận.

## Hướng dẫn

### 1. Nạp artifact đầu vào

Đọc:
- Business questions: `{project-root}/_des-output/planning-artifacts/02-business-questions.md`
- KPI catalog: `{project-root}/_des-output/planning-artifacts/03-requirements-and-kpis.md`

### 2. Liệt kê data product ứng viên

Từ danh sách câu hỏi và KPI, liệt kê tất cả data product cần thiết.
Đặt tên bằng ngôn ngữ nghiệp vụ — không phải tên bảng database.

Ví dụ: "Bảng điều khiển Doanh thu theo Vùng", không phải "gold.fact_revenue"

### 3. Phân loại theo Decision Matrix

| Data Product | Loại | Khi nào chọn | Interface phục vụ |
| :--- | :--- | :--- | :--- |
| Dashboard / Báo cáo | BI self-serve | Analyst cần khám phá dữ liệu | Power BI, Superset, Looker |
| Gold Table / Data Mart | Downstream query | Team khác tự query | SQL endpoint |
| REST / GraphQL API | Application integration | App tích hợp realtime | REST endpoint |
| Semantic / Metrics Layer | Nguồn metric duy nhất | Nhiều tool dùng cùng metric | dbt Metrics, Cube, Fabric Semantic |
| ML Feature Table | Model training/inference | ML engineer | Feature Store |
| AI Agent Tool / Dataset | LLM grounding | AI agent cần context | Vector store, structured context |
| Reverse ETL Export | Sync về operational | Đẩy data trở lại CRM/CDP | Hightouch, Census |

**Quy tắc mặc định**: Ưu tiên Gold Table + Semantic Layer trước khi tạo API riêng.

### 4. Phân pha: Phase 1 (MVP) vs Phase 2+

Với mỗi product, hỏi: "Nếu chỉ có 1 tháng, deliver cái này không?"
- **Phase 1**: Phải có để nghiệp vụ hoạt động được
- **Phase 2+**: Có thì tốt, thiếu cũng không chặn

### 5. Menu tương tác

Trình bày danh sách đã phân loại và menu:
- **[C] Tiếp tục**: Xác nhận danh sách, chuyển sang định nghĩa chi tiết.
- **[A] Thêm**: Bổ sung product còn thiếu.
- **[P] Điều chỉnh pha**: Di chuyển product giữa Phase 1 và Phase 2+.

HALT và chờ người dùng chọn.

- On **[C]**: Chuyển sang `./step-02-define-products.md`.
