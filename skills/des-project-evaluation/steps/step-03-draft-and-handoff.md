# Soạn Thảo Project Evaluation và Bàn Giao

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Không mark project phase COMPLETED nếu recommendation thiếu evidence, owner approvals, risk register, hoặc remediation plan.
- HALT nếu GO được chọn khi còn P1 blocker.

## Hướng dẫn

### 1. Nạp template
Đọc:
- `22-project-evaluation-template.md`
- `23-data-lifecycle-review-template.md` nếu đây là post-production/quarterly review
- Evidence từ step-01 và decision từ step-02

### 2. Soạn artifact evaluation

Artifact phải có:

| Section | Nội dung bắt buộc |
| :--- | :--- |
| Executive recommendation | GO / CONDITIONAL-GO / NO-GO |
| Evidence matrix | business, DQ, reliability, security, rollback, adoption |
| Adoption metrics | active users, repeat usage, support burden, business action evidence |
| Risk register | P1/P2/P3/P4 severity, owner, deadline |
| Remediation plan | required actions for P1/P2 |
| Approval record | stakeholder/business/data lead approvals |
| Continuous improvement | P3/P4 backlog |

### 3. Evaluation quality gate

| Gate | Pass condition |
| :--- | :--- |
| Evidence-based | Every decision area references evidence |
| P1 handling | No GO with unresolved P1 |
| Conditional clarity | Conditional-Go has explicit condition/owner/deadline |
| Adoption | Usage/consumer readiness recorded |
| Rollback | Rollback evidence included |
| Next iteration | Phase 2 or remediation path clear |

Nếu gate fail, HALT và không update status completed.

### 4. Configured checklist gate

Trước khi ghi file hoặc update workflow status:
- Resolve checklist_file từ customize.toml.
- Load toàn bộ checklist file đã cấu hình.
- Kiểm tra draft artifact theo từng checklist item.
- Ghi checklist validation report ngắn với trạng thái Pass / Needs Work / Blocked.
- Nếu có item Blocked hoặc thiếu evidence bắt buộc, HALT và không mark phase completed.
- Chỉ cho phép override nếu người dùng xác nhận rõ ràng và ghi override vào artifact/status.


### 5. Ghi file và cập nhật trạng thái
Nếu gate pass:
- Lưu vào `22-project-evaluation.md`.
- Nếu là lifecycle review, lưu thêm `23-data-lifecycle-review.md`.
- Update workflow status: completed only for GO or accepted Conditional-Go; otherwise mark remediation required.

### 6. Menu bàn giao
- **[C] Hoàn thành**: Project evaluation complete. Nếu GO -> bắt đầu Phase 2 với `des-business-discovery`.
- **[R] Soạn lại**: Quay lại step-01.
- **[P] Lập remediation plan**: Nếu NO-GO hoặc Conditional-Go còn action.

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
