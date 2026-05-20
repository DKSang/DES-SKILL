# Xây Dựng Metadata Catalog

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- HALT tại checkpoint và chờ người dùng xác nhận.

## Hướng dẫn

### 1. Với mỗi dataset, định nghĩa metadata
- Business definition (ngôn ngữ nghiệp vụ)
- Technical owner và business steward
- PII classification (nếu có)
- Certification status (Draft / Certified / Deprecated)
- Last updated, update frequency

### 2. Schema registry
Nếu dùng streaming: confirm schema registry setup và compatibility mode.

### 3. Menu tương tác
- **[C] Tiếp tục**: Xác nhận metadata, chuyển sang soạn thảo.

HALT và chờ người dùng chọn.
- On **[C]**: Chuyển sang `./step-03-draft-and-handoff.md`.
