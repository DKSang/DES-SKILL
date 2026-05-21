## HALT - Release Go/No-Go

Stop here. Do not continue until the user confirms this decision.

### Why this matters
This is the final release decision; the agent must not mark release-ready without explicit approval and evidence.

### Decision needed
Choose release status after reviewing business outputs, KPIs, sources, architecture, Gold specs, contracts, DQ, CI/CD, security, and risks.

### Options
A. Go - release-ready
B. Go with known risks
C. No-go - blockers remain
D. Defer release evaluation

### Recommended default
Choose A only when fresh evidence supports every release claim; choose B only with named risk owner and expiry.

### Impact
- A: project can be marked release-ready
- B: release may proceed but risks must be visible and owned
- C: route blockers back to the affected phase or support skill
- D: no release claim may be made

### Required user response
Please choose one option or provide a custom decision. Do not continue until the user responds.

# Đánh Giá và Quyết Định Go/No-Go

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Go/No-Go là quyết định release/business, phải được stakeholder chính confirm.
- HALT nếu có P1 risk chưa resolve hoặc Conditional-Go không có điều kiện cụ thể, owner, deadline.

## Hướng dẫn

### 1. Go/No-Go scoring matrix

| Area | Go criteria | Actual evidence | Decision |
| :--- | :--- | :--- | :--- |
| Business acceptance | Consumer accepted outputs and metric definitions |  | Go/Conditional/No-Go |
| Data quality | zero unresolved FAIL DQ violations |  |  |
| Reliability | SLA met across staging evidence window |  |  |
| Security | secrets/RBAC/RLS/PII checks pass |  |  |
| Rollback | rollback tested and duration acceptable |  |  |
| Adoption/onboarding | target users notified and usage path ready |  |  |

### 2. Risk severity classification

| Risk | Severity | Impact | Owner | Deadline | Required action |
| :--- | :--- | :--- | :--- | :--- | :--- |

Severity:
- P1 Blocker: data loss, security breach, hard SLA failure. Must resolve before Go.
- P2 High: significant degradation. Conditional-Go allowed only with owner/deadline.
- P3 Medium: backlog item; not release blocker.
- P4 Low: continuous improvement.

### 3. Decision rules

| Recommendation | Conditions |
| :--- | :--- |
| GO | All Go criteria pass; no unresolved P1/P2 without accepted plan |
| CONDITIONAL-GO | No P1; P2 has owner, deadline, monitoring, rollback plan |
| NO-GO | Any unresolved P1; missing business acceptance; security/DQ/rollback blocker |

### 4. HALT bắt buộc — Go / No-Go Decision

Trình bày:

| Recommendation | Rationale | Conditions before release | Owner approvals needed |
| :--- | :--- | :--- | :--- |

Options:
- **[GO] Mở rộng / Phase 2**: Đủ tiêu chí, proceed to next phase.
- **[CONDITIONAL-GO] Go với điều kiện**: Proceed nếu và chỉ nếu điều kiện cụ thể được hoàn thành.
- **[NO-GO] Dừng hoặc Pivot**: Không đủ tiêu chí, cần redesign/remediation.

HALT và chờ người dùng chọn.

- On any option: Chuyển sang `./step-03-draft-and-handoff.md` để ghi decision và evidence.
