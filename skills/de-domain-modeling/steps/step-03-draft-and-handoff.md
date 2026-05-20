# Bước 3: Soạn Thảo Domain Model và Bàn Giao

## Quy tắc
- Viết artifact bằng `document_output_language`.
- HALT tại checkpoint bàn giao.

## Hướng dẫn

### 1. Nạp template
Đọc: `{skill-root}/../../templates/06-domain-modeling-template.md`

### 2. Soạn thảo artifact

Điền template với:
- **Entity catalog**: Tên, thuộc tính chính, SCD type, nguồn dữ liệu ứng viên
- **Event catalog**: Tên, grain khai báo, measure, entities liên quan
- **Relationship map**: Bảng cardinality và bridge entities
- **Fact & Dimension candidates**: Ánh xạ từ domain concept sang Gold model candidates
- **Business Glossary**: Thuật ngữ chuẩn với các từ đồng nghĩa đã loại bỏ

### 3. Ánh xạ tới business questions

Với mỗi entity và event, trace lại xem nó hỗ trợ câu hỏi nghiệp vụ nào.
Nếu có entity/event không trace được về câu hỏi nào → đánh dấu "Cần đánh giá lại".

### 4. Kiểm tra chất lượng

- [ ] Model dùng ngôn ngữ nghiệp vụ — không có tên bảng kỹ thuật
- [ ] Mọi event đều có grain khai báo ("Mỗi hàng là một ___")
- [ ] Grain đã được người dùng xác nhận là đúng
- [ ] Mọi M:M đều có bridge entity được đặt tên
- [ ] Mọi thuật ngữ mơ hồ có định nghĩa duy nhất trong glossary

### 5. Ghi artifact và cập nhật trạng thái

- Lưu vào: `{project-root}/_des-output/planning-artifacts/06-domain-modeling.md`
- Cập nhật: `{project-root}/_des-output/implementation-artifacts/des-workflow-status.md`
- Đánh dấu `de-domain-modeling` là `Đã hoàn thành`

### 6. Menu bàn giao

- **[C] Hoàn thành và Bàn giao**
- **[R] Soạn lại**

HALT và chờ người dùng chọn.

- On **[C]**: Tóm tắt số entity, event, bridge entity, thuật ngữ glossary. Gợi ý: **`de-architecture-design`**.
- On **[R]**: Quay lại `./step-01-identify-entities.md`.
