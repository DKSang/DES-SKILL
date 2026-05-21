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
Decide whether `des-data-contracts` can continue, should route back to an upstream DES skill, or should continue only as an explicitly marked draft.

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

# Xác Định Các Hợp Đồng Dữ Liệu Cần Thiết

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Dataset có consumer ngoài producing team hoặc SLA production thì bắt buộc có contract.
- HALT nếu producer và consumer không thống nhất contract scope vì contract là interface vận hành giữa teams.

## Hướng dẫn

### 1. Nạp artifact đầu vào
Đọc: Data products (04), Gold design (11), Source assessment (05), Semantic model (16), Serving design nếu có, Governance (19 nếu có).

### 2. Contract scope decision matrix

| Dataset/use case | Consumer | Contract required? | Reason |
| :--- | :--- | :--- | :--- |
| Cross-team dataset | another domain/team | Yes | Consumer cannot control producer changes |
| Production dashboard/report | business users | Yes | SLA and metric trust required |
| API/application/AI agent | app/agent | Yes | Interface must be stable and testable |
| ML feature/training data | ML team/model | Yes | Schema/freshness drift breaks model |
| Internal staging table | same team only | No | Implementation detail |
| Scratch/exploratory | temporary user | No | Not production dependency |

### 3. Producer-consumer map

| Contract candidate | Producer | Consumers | SLA | Criticality | Owner | Scope decision |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |

Criticality:
- P0: consumer-facing app/report breaks if contract breaks.
- P1: important analytics/ML dependency.
- P2: internal operational dependency.

### 4. HALT — confirm contract scope

Trình bày:

| Dataset | Recommended contract? | Producer | Consumers | Risk if no contract |
| :--- | :--- | :--- | :--- | :--- |

Menu:
- **[C] Xác nhận**: Chuyển sang định nghĩa contract.
- **[A] Thêm contract**: Bổ sung dataset/use case còn thiếu.
- **[E] Loại khỏi scope**: Ghi rationale vì sao không cần contract.

HALT và chờ người dùng chọn.

- On **[C]**: Chuyển sang `./step-02-define-contract.md`.
