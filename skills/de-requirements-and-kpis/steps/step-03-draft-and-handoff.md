# Bước 3: Soạn Thảo KPI Catalog và Bàn Giao

## Quy tắc
- Viết artifact bằng `document_output_language`.
- HALT tại checkpoint bàn giao.

## Hướng dẫn

### 1. Nạp template
Đọc: `{skill-root}/../../templates/03-requirements-and-kpis-template.md`

### 2. Soạn thảo artifact

Điền template với:
- **KPI Catalog**: Tất cả KPI đã xác nhận với công thức, grain, điều kiện lọc, owner
- **Bảng SLA**: Phân loại P1/P2/P3 với thời gian và hệ quả
- **Yêu cầu lịch sử**: Độ sâu backfill theo data product
- **Open Questions**: Xung đột bị hoãn với deadline và owner

### 3. Kiểm tra chất lượng

- [ ] Mỗi KPI có đủ 5 tiêu chí: Công thức, Grain, Điều kiện lọc, Owner, Không xung đột
- [ ] Không còn xung đột metric chưa giải quyết
- [ ] Hard SLA (P1) được tách biệt rõ khỏi Soft SLA (P2/P3)
- [ ] Yêu cầu backfill được xác nhận là khả thi từ nguồn dữ liệu đã đánh giá
- [ ] Thời gian SLA cụ thể (không phải "hằng ngày" chung chung — phải ghi "by 7:00 SA")

### 4. Ghi artifact và cập nhật trạng thái

- Lưu vào: `{project-root}/_des-output/planning-artifacts/03-requirements-and-kpis.md`
- Cập nhật: `{project-root}/_des-output/implementation-artifacts/des-workflow-status.md`
- Đánh dấu `de-requirements-and-kpis` là `Đã hoàn thành`

### 5. Menu bàn giao

- **[C] Hoàn thành và Bàn giao**
- **[R] Soạn lại**

HALT và chờ người dùng chọn.

- On **[C]**: Tóm tắt số KPI, số SLA P1, số open question. Gợi ý: **`de-data-product-definition`**.
- On **[R]**: Quay lại `./step-01-collect-requirements.md`.
