## HALT - Secret and Environment Security

Stop here. Do not continue until the user confirms this decision.

### Why this matters
Security decisions must be explicit before CI/CD, deployment, production access, or release approval.

### Decision needed
Approve secret handling, environment separation, permissions, raw data restrictions, and service identity handling.

### Options
A. Approve current security plan
B. Require a managed secret store
C. Use CI/CD secrets for MVP
D. Block deployment until security is fixed

### Recommended default
Choose B or C only when access boundaries and secret rotation expectations are clear.

### Impact
- A: work can proceed to cost and CI/CD with recorded controls
- B: stronger control, more setup
- C: pragmatic MVP, must not leak into long-term production by accident
- D: prevents unsafe release

### Required user response
Please choose one option or provide a custom decision. Do not continue until the user responds.

# Thiết Kế Access Controls và Masking

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Access controls phải test được bằng role/test account, không chỉ mô tả chính sách.
- HALT nếu PII masking method không phù hợp với use case join/display/re-identification.

## Hướng dẫn

### 1. Thiết kế RBAC/RLS/CLS

| Role | Dataset | Permission | Row filter | Column policy | Test scenario |
| :--- | :--- | :--- | :--- | :--- | :--- |
| analyst | gold.* | read | region = user.region | hide direct PII | analyst cannot see other region |

Controls:
- RBAC: role -> dataset permission.
- RLS: row filter theo tenant/region/account.
- CLS: hide/mask sensitive columns.
- Service accounts: least privilege, no admin by default.

### 2. Masking vs tokenization decision matrix

| Need | Recommended method | Reversible? | Use when | Avoid when |
| :--- | :--- | :--- | :--- | :--- |
| Join same person across datasets without seeing value | Salted hash | No | Analytics identity matching | User support needs original value |
| Display partial value | Redaction/masking | No | Last 4 digits, masked phone/email | Re-identification risk too high |
| Authorized re-identification | Tokenization | Yes, controlled | Support, compliance, regulated workflows | No token vault/key management |
| Location/device analytics | Pseudonymization/generalization | Partial | Geo/device trends | Fine-grained identity not needed |
| Highly sensitive regulated data | Encryption + strict key access | Yes with key | Health/financial/sensitive records | Broad analyst access |

### 3. Retention, deletion, and audit

| Dataset | Retention | Enforcement mechanism | Delete path | Audit log retention | Owner |
| :--- | :--- | :--- | :--- | :--- | :--- |

Right-to-erasure workflow must include:
- Source system delete/request ID.
- Propagation to Bronze/Silver/Gold/Serving.
- Verification query.
- Audit evidence.

### 4. Security control gate

| Gate | Pass condition |
| :--- | :--- |
| PII treatment | Every PII column has masking/tokenization/encryption decision |
| Gold exposure | PII in Gold/Serving has explicit business need and access restriction |
| Role tests | Every RBAC/RLS/CLS rule has test scenario |
| Retention | Every dataset has enforceable retention/deletion mechanism |
| Audit | Query/export/admin actions are logged with retention |

Nếu gate fail, HALT.

### 5. Menu tương tác
- **[C] Tiếp tục**: Xác nhận controls, chuyển sang soạn thảo.
- **[P] Sửa PII treatment**: Chọn lại masking/tokenization/encryption.
- **[A] Sửa access control**: Bổ sung RBAC/RLS/CLS test.
- **[D] Sửa deletion/retention**: Hoàn thiện enforcement trước khi bàn giao.

HALT và chờ người dùng chọn.

- On **[C]**: Chuyển sang `./step-03-draft-and-handoff.md`.
