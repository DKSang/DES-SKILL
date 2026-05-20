# Phân Loại Dữ Liệu và PII

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- HALT tại checkpoint và chờ người dùng xác nhận.

## Hướng dẫn

### 1. Nạp artifact đầu vào
Đọc: Data products (04), Lineage (18), Source assessment (05).

### 2. Phân loại từng dataset
- Public / Internal / Confidential / Restricted
- PII identification: tên, email, CCCD, địa chỉ, tài khoản...
- Regulatory scope: GDPR / PDPD / HIPAA / PCI-DSS?

### 3. HALT bắt buộc — Xác nhận regulatory scope với Legal/Compliance
Regulatory classification ảnh hưởng đến toàn bộ architecture. Không tự quyết định.

- **[C] Đã xác nhận**: Chuyển sang thiết kế controls.

HALT và chờ người dùng chọn.
- On **[C]**: Chuyển sang `./step-02-design-controls.md`.
