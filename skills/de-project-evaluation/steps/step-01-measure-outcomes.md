# Đo Lường Kết Quả Thực Tế

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Recommendation phải dựa trên evidence, không dựa trên schedule pressure.
- HALT nếu thiếu adoption metrics, business acceptance, hoặc operational evidence cho data product production.

## Hướng dẫn

### 1. Nạp artifact đầu vào
Đọc: KPI catalog (03), Data products (04), CI/CD evidence (21), DQ results (14), orchestration evidence (15), serving/onboarding evidence (17).

### 2. Outcome evidence matrix

| Data product | Success criterion | Actual result | Evidence source | Pass/Fail |
| :--- | :--- | :--- | :--- | :--- |

Evidence examples:
- CI/CD run logs.
- Staging DQ pass/fail summary.
- Pipeline P90 runtime and freshness.
- Consumer UAT sign-off.
- Dashboard/API usage metrics.
- Incident tickets/quality complaints.

### 3. Adoption metric collection

| Adoption metric | Formula | Target | Actual | Source |
| :--- | :--- | :--- | :--- | :--- |
| Active consumers | users/teams querying or opening dashboard in last 30 days |  |  | BI/API logs |
| Repeat usage | users with >= 2 sessions/week |  |  | usage logs |
| Data product coverage | active consumers / intended consumers |  |  | access logs + stakeholder list |
| Support burden | incidents or questions per week |  |  | ticketing |
| Business action evidence | decisions/actions recorded from data use |  |  | meeting notes/user feedback |

### 4. Operational evidence

| Area | Required evidence | No-Go signal |
| :--- | :--- | :--- |
| Data quality | zero unresolved FAIL rules in last staging runs | unresolved FAIL |
| Reliability | P90 runtime/freshness within SLA | SLA breach without plan |
| Security | credential scan, RBAC/RLS, PII audit | PII exposure or secret leak |
| Rollback | rehearsed rollback and duration | rollback untested |
| Onboarding | consumer guide and notification | consumers unaware |

### 5. HALT — evidence completeness

Trình bày:

| Evidence area | Complete? | Gap | Blocking? |
| :--- | :--- | :--- | :--- |

Menu:
- **[C] Tiếp tục**: Đã thu thập đủ data, chuyển sang đánh giá.
- **[A] Bổ sung adoption evidence**: Thu usage/consumer feedback.
- **[O] Bổ sung operational evidence**: Thu DQ/SLA/security/rollback evidence.

HALT và chờ người dùng chọn.

- On **[C]**: Chuyển sang `./step-02-evaluate-and-decide.md`.
