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

### 5. Ghi file và cập nhật trạng thái
Nếu gate pass:
- Lưu vào `20-cost-and-performance-optimization.md`.
- Update workflow status cho Phase 20 là completed.

### 6. Menu bàn giao
- **[C] Hoàn thành**: Gợi ý `de-cicd-and-testing`.
- **[R] Soạn lại**: Quay lại step-01.
- **[G] Bổ sung gate còn thiếu**: Hoàn thiện evidence/validation/rollback/monitoring.

HALT và chờ người dùng chọn.
