# Soạn Thảo Ingestion Design và Bàn Giao

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- HALT tại checkpoint và chờ người dùng xác nhận.

## Hướng dẫn

### 1. Nạp template
Đọc: 08-ingestion-design-template.md

### 2. Soạn thảo artifact
Mỗi nguồn: mode, frequency, watermark, failure plan, DLQ, idempotency, raw metadata.

### 3. Ghi file và cập nhật trạng thái
Lưu vào 08-ingestion-design.md. Update workflow status. Đánh dấu completed.

### 4. Menu bàn giao
- **[C] Hoàn thành**: Gợi ý `de-bronze-layer-design`.
- **[R] Soạn lại**: Quay lại step-01.
