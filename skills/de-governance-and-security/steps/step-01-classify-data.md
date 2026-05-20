# Phân Loại Dữ Liệu và PII

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Không tự quyết regulatory scope; phải xác nhận với Legal/Compliance hoặc owner được chỉ định.
- HALT bắt buộc nếu phát hiện PII trong Gold/Serving vì đây là lớp consumer-facing và cần quyết định masking/access trước khi bàn giao.

## Hướng dẫn

### 1. Nạp artifact đầu vào
Đọc: Data products (04), Lineage/Metadata (18), Source assessment (05), Gold/Semantic/Serving designs nếu có, Data contracts (12).

### 2. Phân loại dataset và column

| Dataset | Layer | Column | Data class | PII category | Regulatory scope | Consumer exposure |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| (dataset) | Bronze/Silver/Gold/Serving | (column) | Public/Internal/Confidential/PII/Regulated | direct/quasi/sensitive | PDPD/GDPR/PCI/HIPAA/None | internal/external |

PII categories:
- Direct identifiers: name, email, phone, national ID/CCCD, account ID.
- Quasi-identifiers: IP, device ID, location, birthdate.
- Sensitive data: health, finance, biometrics, children data.

### 3. PDPD Vietnam and regulatory scope check

Nếu project ở Việt Nam hoặc xử lý dữ liệu cá nhân cư dân Việt Nam, kiểm tra PDPD-style requirements:

| Requirement area | Design implication |
| :--- | :--- |
| Consent/purpose limitation | Dataset phải ghi purpose và allowed use |
| Data subject rights | Cần delete/export/correction workflow |
| Cross-border transfer | Cần approval/record nếu data rời region |
| Sensitive personal data | Cần stricter access, audit, encryption/tokenization |
| Retention limitation | Retention phải enforce bằng job/lifecycle rule |

### 4. HALT — PII in Gold/Serving

Nếu PII xuất hiện ở Gold, Semantic, hoặc Serving:

| Dataset | PII columns | Consumer | Business need for raw PII | Proposed treatment | Risk |
| :--- | :--- | :--- | :--- | :--- | :--- |

Menu:
- **[C] Đã xác nhận regulatory scope**: Chuyển sang thiết kế controls.
- **[M] Mask/tokenize trước Gold**: Yêu cầu sửa transformation/governance plan.
- **[R] Restrict access**: Giữ PII nhưng thêm RBAC/RLS/CLS/audit.
- **[L] Hỏi Legal/Compliance**: Dừng để xác nhận regulatory scope.

HALT và chờ người dùng chọn.

- On **[C]**, **[M]**, hoặc **[R]** sau khi có decision: Chuyển sang `./step-02-design-controls.md`.
