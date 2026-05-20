# Soạn Thảo Governance Plan và Bàn Giao

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Không mark Phase 19 completed nếu PII column thiếu treatment, access rule thiếu test, hoặc retention policy không enforce được.
- HALT nếu regulatory scope chưa được owner/legal xác nhận.

## Hướng dẫn

### 1. Nạp template
Đọc: `19-governance-and-security-template.md`, classification từ step-01, controls từ step-02.

### 2. Soạn artifact

Artifact phải có:

| Section | Nội dung bắt buộc |
| :--- | :--- |
| Data classification register | dataset/column sensitivity, regulatory scope |
| PII inventory | category, layer, lineage, treatment |
| Access matrix | RBAC/RLS/CLS rules and test scenarios |
| Masking/tokenization plan | method, reversibility, key/token owner |
| Retention/deletion | period, enforcement job, right-to-erasure flow |
| Audit logging | query/export/admin events, retention, owner |
| Compliance assumptions | PDPD/GDPR/PCI/HIPAA scope and approval owner |

### 3. Governance gate

| Gate | Pass condition |
| :--- | :--- |
| Classification | Every dataset has sensitivity label |
| PII controls | Every PII column has treatment and owner |
| Gold/Serving safety | Consumer-facing PII has explicit need and restricted access |
| Access tests | Every role policy has test scenario |
| Retention enforcement | Policy maps to scheduled lifecycle/delete job |
| Auditability | Access/export/admin actions retained for audit |

Nếu gate fail, HALT và không update status completed.

### 4. Cost/performance handoff package

| Handoff item | Required value |
| :--- | :--- |
| Access policies affecting query design |  |
| Retention windows affecting storage cost |  |
| Encryption/tokenization performance impact |  |
| Audit logging volume assumptions |  |
| Restricted datasets requiring isolated compute |  |

### 5. Ghi file và cập nhật trạng thái
Nếu gate pass:
- Lưu vào `19-governance-and-security.md`.
- Update workflow status cho Phase 19 là completed.

### 6. Menu bàn giao
- **[C] Hoàn thành**: Gợi ý `de-cost-and-performance-optimization`.
- **[R] Soạn lại**: Quay lại step-01.
- **[S] Sửa security controls**: Quay lại step-02.

HALT và chờ người dùng chọn.
