# Bước 3: Soạn Thảo Catalog và Bàn Giao

## Quy tắc
- Viết artifact bằng `document_output_language` đã cấu hình.
- Trả lời bằng `communication_language` đã cấu hình.
- HALT tại checkpoint bàn giao và chờ người dùng xác nhận.

## Hướng dẫn thực hiện

### 1. Nạp template

Đọc template từ: `{skill-root}/../../templates/02-business-questions-template.md`

### 2. Soạn thảo Business Question Catalog

Điền template với:
- Toàn bộ câu hỏi đã validate từ bước 1-2
- Grain và khung thời gian cho mỗi câu hỏi
- Loại phân tích (Descriptive / Diagnostic / Predictive / Prescriptive / Operational)
- Trạng thái trả lời (✅ / ⚠️ / ❌)
- KPI ứng viên
- Backlog thuật ngữ mơ hồ với owner giải quyết

### 3. Kiểm tra chất lượng

Trước khi lưu, tự kiểm tra:
- [ ] Mỗi câu hỏi có grain rõ ràng (không phải "theo thời gian" chung chung)
- [ ] Mỗi câu hỏi gắn với quyết định của một stakeholder cụ thể
- [ ] Tất cả thuật ngữ mơ hồ được ghi vào backlog với owner
- [ ] Không có tên tool hay technology trong câu hỏi

### 4. Configured checklist gate

Trước khi ghi file hoặc update workflow status:
- Resolve checklist_file từ customize.toml.
- Load toàn bộ checklist file đã cấu hình.
- Kiểm tra draft artifact theo từng checklist item.
- Ghi checklist validation report ngắn với trạng thái Pass / Needs Work / Blocked.
- Nếu có item Blocked hoặc thiếu evidence bắt buộc, HALT và không mark phase completed.
- Chỉ cho phép override nếu người dùng xác nhận rõ ràng và ghi override vào artifact/status.


### 5. Ghi file artifact

Lưu vào: `{project-root}/_des-output/planning-artifacts/02-business-questions.md`

Tạo thư mục cha nếu chưa tồn tại.

### 6. Cập nhật trạng thái workflow

Cập nhật file status: `{project-root}/_des-output/implementation-artifacts/des-workflow-status.md`
Đánh dấu `de-business-questions` là `Đã hoàn thành`.

### 7. Menu bàn giao

Hiện thị đường dẫn file đã lưu và menu:

- **[C] Hoàn thành và Bàn giao**: Xác nhận artifact, gợi ý skill tiếp theo.
- **[R] Soạn lại**: Xem xét lại và viết lại catalog.

HALT và chờ người dùng chọn.

- On **[C]**:
  - Tóm tắt: số câu hỏi, số KPI ứng viên, số thuật ngữ mơ hồ cần giải quyết.
  - Gợi ý skill tiếp theo: **`de-requirements-and-kpis`** để chuyển câu hỏi thành KPI có thể đo lường.
- On **[R]**: Quay lại `./step-01-convert-decisions.md`.
