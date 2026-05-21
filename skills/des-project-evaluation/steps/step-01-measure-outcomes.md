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
Decide whether `des-project-evaluation` can continue, should route back to an upstream DES skill, or should continue only as an explicitly marked draft.

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
