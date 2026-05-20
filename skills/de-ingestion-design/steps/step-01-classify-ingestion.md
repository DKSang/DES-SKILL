# Phân Loại Ingestion Mode Cho Từng Nguồn

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- HALT tại checkpoint và chờ người dùng xác nhận.

## Hướng dẫn

### 1. Nạp artifact đầu vào
Đọc: Source assessment (05), Architecture design (07).

### 2. Phân loại ingestion mode (dùng Decision Matrix trong SKILL.md)
Với mỗi nguồn → Batch / Micro-batch / Streaming / CDC / File landing.
Dựa trên: SLA, write pattern, log retention, team capability.

### 3. Menu tương tác
- **[C] Tiếp tục**: Xác nhận phân loại, chuyển sang thiết kế chi tiết.
- **[E] Điều chỉnh**: Thay đổi mode cho nguồn cụ thể.

HALT và chờ người dùng chọn.
- On **[C]**: Chuyển sang `./step-02-design-patterns.md`.
