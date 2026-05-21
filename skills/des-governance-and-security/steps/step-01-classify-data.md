## HALT - Readiness Check Failed

Stop here before continuing.

### Trigger
Use this HALT if required upstream context is missing, contradictory, stale, or not approved.

Missing or blocked items:
- Required upstream artifact is missing.
- Workflow status says an earlier phase is incomplete.
- Owner, source, KPI, contract, quality rule, security control, or release evidence is unknown.
- Continuing would require the agent to guess.

### Decision needed
Decide whether `des-governance-and-security` can continue, should route back to an upstream DES skill, or should continue only as an explicitly marked draft.

### Options
A. Provide missing information now
B. Route back to the recommended upstream skill
C. Continue as draft with explicit assumptions and risks
D. Stop this workflow

### Recommendation
Choose B if the missing item affects downstream design, implementation, governance, or release readiness.

### Impact
- A: workflow can continue after the missing facts are recorded.
- B: preserves artifact quality and prevents downstream rework.
- C: creates a draft only; status must not be marked Done unless risk is explicitly accepted.
- D: no artifact/status change should be made except recording the stop reason.

### Required response
Please choose A/B/C/D or provide a custom decision. Do not continue until the user responds.

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
