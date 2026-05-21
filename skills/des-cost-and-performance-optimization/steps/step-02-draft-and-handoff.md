## HALT - Cost and Runtime Budget

Stop here. Do not continue until the user confirms this decision.

### Why this matters
Optimization cannot be evaluated without budget, runtime, local/cloud boundary, and query performance targets.

### Decision needed
Approve cost/runtime target and optimization priority.

### Options
A. Optimize for lowest cost
B. Optimize for fastest runtime
C. Balance cost and runtime
D. Defer optimization until measurements exist

### Recommended default
Choose C for production-like MVPs; choose D when no measurements exist yet and release is not blocked.

### Impact
- A: may increase latency or operational complexity
- B: may increase platform spend
- C: practical tradeoff with explicit thresholds
- D: avoids premature optimization but must record measurement plan

### Required user response
Please choose one option or provide a custom decision. Do not continue until the user responds.

# Soạn Thảo Optimization Plan và Bàn Giao

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Không mark Phase 20 completed nếu optimization thiếu baseline, expected saving, correctness validation, rollback, hoặc owner.
- HALT nếu plan tối ưu cost bằng cách bỏ DQ/security/retention controls.

## Hướng dẫn

### 1. Nạp template
Đọc: `20-cost-and-performance-optimization-template.md` và candidates từ step-01.

### 2. Soạn artifact

Artifact phải có:

| Section | Nội dung bắt buộc |
| :--- | :--- |
| Baseline | cost/month, cost/run, P90 latency/runtime, storage by tier |
| Top drivers | top 3 cost drivers and top 3 performance bottlenecks |
| Capacity model | reserved/on-demand/serverless/autoscale rationale |
| Optimization backlog | action, owner, expected saving, effort, priority |
| Correctness validation | row count, metric totals, DQ checks before/after |
| Rollback | how to undo partition/materialization/cluster changes |
| Monitoring | budget alerts, latency regression alerts, cost anomaly |

### 3. Optimization quality gate

| Gate | Pass condition |
| :--- | :--- |
| Evidence | Every action ties to measured bottleneck |
| ROI | Saving/performance gain estimated |
| Correctness | Validation checks defined |
| Governance | No security/DQ/retention weakening |
| Rollback | Reversal path and owner defined |
| Monitoring | Cost/performance regression alerts defined |

Nếu gate fail, HALT và không update status completed.

### 4. CI/CD handoff package

| CI/CD handoff item | Required value |
| :--- | :--- |
| Performance regression tests |  |
| Cost budget thresholds |  |
| Optimization jobs to schedule |  |
| Correctness checks after optimization |  |
| Rollback commands/procedure |  |

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
- Lưu vào `20-cost-and-performance-optimization.md`.
- Update workflow status cho Phase 20 là completed.

### 7. Menu bàn giao
- **[C] Hoàn thành**: Gợi ý `des-cicd-and-testing`.
- **[R] Soạn lại**: Quay lại step-01.
- **[G] Bổ sung gate còn thiếu**: Hoàn thiện evidence/validation/rollback/monitoring.

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
