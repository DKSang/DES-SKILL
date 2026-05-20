# Bước 3: Soạn Thảo Spec và Bàn Giao

## Quy tắc
- Viết artifact bằng `document_output_language`.
- HALT tại checkpoint bàn giao.

## Hướng dẫn

### 1. Nạp template
Đọc: `{skill-root}/../../templates/04-data-product-definition-template.md`

### 2. Soạn thảo artifact

Điền template với:
- **Phase 1 products**: Spec đầy đủ cho tất cả MVP products
- **Phase 2+ backlog**: Danh sách ngắn với lý do hoãn
- **Dependency map**: Thứ tự triển khai dựa trên dependency
- **Tiêu chí thành công tổng thể**: Làm sao biết data platform đang tạo ra giá trị?

### 3. Kiểm tra chất lượng

- [ ] Mỗi Phase 1 product có consumer, owner, SLA, access policy, tiêu chí thành công
- [ ] Không có product nào có consumer là "tất cả mọi người"
- [ ] SLA của mỗi product nhất quán với Hard SLA trong KPI catalog
- [ ] Phase 2+ products được tách biệt — không mixed vào Phase 1 scope
- [ ] Dependency thứ tự triển khai được ghi rõ

### 4. Ghi artifact và cập nhật trạng thái

- Lưu vào: `{project-root}/_des-output/planning-artifacts/04-data-product-definition.md`
- Cập nhật: `{project-root}/_des-output/implementation-artifacts/des-workflow-status.md`
- Đánh dấu `de-data-product-definition` là `Đã hoàn thành`

### 5. Menu bàn giao

- **[C] Hoàn thành và Bàn giao**
- **[R] Soạn lại**

HALT và chờ người dùng chọn.

- On **[C]**: Tóm tắt số Phase 1 products, số products bị hoãn. Gợi ý: **`de-data-source-assessment`**.
- On **[R]**: Quay lại `./step-01-classify-products.md`.
