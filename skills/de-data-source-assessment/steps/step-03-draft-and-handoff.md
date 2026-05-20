# Bước 3: Soạn Thảo Source Assessment và Bàn Giao

## Quy tắc
- Viết artifact bằng `document_output_language`.
- HALT tại checkpoint bàn giao.

## Hướng dẫn

### 1. Nạp template
Đọc: `{skill-root}/../../templates/05-data-source-assessment-template.md`

### 2. Soạn thảo artifact

Điền template với:
- **Source inventory**: Tất cả nguồn với write pattern và loại
- **Detailed profiles**: 7 tiêu chí cho mỗi nguồn
- **Risk register**: Nguồn có cờ đỏ 🚩 với kế hoạch giảm rủi ro
- **Ingestion mode recommendations**: Gợi ý mode phù hợp từ profile
- **Open questions**: Thông tin còn thiếu cần xác nhận

### 3. Kiểm tra chất lượng

- [ ] Tất cả nguồn có write pattern được phân loại
- [ ] Mọi CRUD source được hỏi về CDC log retention
- [ ] Mọi API source có rate limit và pagination được ghi
- [ ] Mọi nguồn 🚩 có owner action rõ ràng
- [ ] Access confirmation từ nguồn team cho ít nhất nguồn critical

### 4. Configured checklist gate

Trước khi ghi file hoặc update workflow status:
- Resolve checklist_file từ customize.toml.
- Load toàn bộ checklist file đã cấu hình.
- Kiểm tra draft artifact theo từng checklist item.
- Ghi checklist validation report ngắn với trạng thái Pass / Needs Work / Blocked.
- Nếu có item Blocked hoặc thiếu evidence bắt buộc, HALT và không mark phase completed.
- Chỉ cho phép override nếu người dùng xác nhận rõ ràng và ghi override vào artifact/status.


### 5. Ghi artifact và cập nhật trạng thái

- Lưu vào: `{project-root}/_des-output/planning-artifacts/05-data-source-assessment.md`
- Cập nhật: `{project-root}/_des-output/implementation-artifacts/des-workflow-status.md`
- Đánh dấu `de-data-source-assessment` là `Đã hoàn thành`

### 6. Menu bàn giao

- **[C] Hoàn thành và Bàn giao**
- **[R] Soạn lại**

HALT và chờ người dùng chọn.

- On **[C]**: Tóm tắt số nguồn, số nguồn rủi ro cao, ingestion mode được gợi ý. Gợi ý: **`de-domain-modeling`** (nếu chưa có) hoặc **`de-architecture-design`** (nếu domain model đã xong).
- On **[R]**: Quay lại `./step-01-enumerate-sources.md`.
