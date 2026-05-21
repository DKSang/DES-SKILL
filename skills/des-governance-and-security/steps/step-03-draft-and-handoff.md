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

### 5. Configured checklist gate

Trước khi ghi file hoặc update workflow status:
- Resolve checklist_file từ customize.toml.
- Load toàn bộ checklist file đã cấu hình.
- Kiểm tra draft artifact theo từng checklist item.
- Ghi checklist validation report ngắn với trạng thái Pass / Needs Work / Blocked.
- Nếu có item Blocked hoặc thiếu evidence bắt buộc, HALT và không mark phase completed.
- Chỉ cho phép override nếu người dùng xác nhận rõ ràng và ghi override vào artifact/status.


### 6. Ghi file và cập nhật trạng thái
Nếu gate pass:
- Lưu vào `19-governance-and-security.md`.
- Update workflow status cho Phase 19 là completed.

### 7. Menu bàn giao
- **[C] Hoàn thành**: Gợi ý `des-cost-and-performance-optimization`.
- **[R] Soạn lại**: Quay lại step-01.
- **[S] Sửa security controls**: Quay lại step-02.

HALT và chờ người dùng chọn.

## HALT - Checklist Blocked

Stop here before marking the artifact Done or advancing workflow status.

### Trigger
Use this HALT if the configured checklist does not pass, evidence is missing, approval is missing, or the artifact still contains unresolved blockers.

### Blocked checklist items
- List each blocked or unresolved checklist item.
- Name the artifact section and owner affected.
- State what evidence or decision is missing.

### Impact
This artifact cannot be marked Done and the workflow status must not advance.

### Options
A. Fix the artifact now
B. Mark as draft with blockers
C. Route back to an upstream skill
D. Stop

### Required response
Please choose A/B/C/D or provide a custom decision. Do not continue until the user responds.
