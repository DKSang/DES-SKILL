# Thiết Kế Access Controls và Masking

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- HALT tại checkpoint và chờ người dùng xác nhận.

## Hướng dẫn

### 1. Thiết kế access control
- Role-Based Access Control (RBAC): vai trò → quyền truy cập dataset
- Row-Level Security (RLS) nếu cần: điều kiện lọc per-user/role
- Column-Level Security: ẩn columns nhạy cảm per role

### 2. Thiết kế PII masking (dùng Decision Matrix trong SKILL.md)
PII level → masking method: Anonymize / Pseudonymize / Tokenize / Redact

### 3. Retention và deletion policy
- Data retention period theo từng dataset
- Right to erasure (GDPR) process

### 4. Menu tương tác
- **[C] Tiếp tục**: Xác nhận controls, chuyển sang soạn thảo.

HALT và chờ người dùng chọn.
- On **[C]**: Chuyển sang `./step-03-draft-and-handoff.md`.
