# Soạn Thảo DQ Rule Catalog và Bàn Giao

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Không mark Phase 14 completed nếu rule catalog thiếu threshold formula, owner, action, alert path, hoặc audit/quarantine design.
- HALT nếu Critical/FAIL rule chưa có business owner approval.

## Hướng dẫn

### 1. Nạp template và rules đã chốt
Đọc:
- `14-data-quality-template.md`
- Candidate rule catalog từ step-01
- Threshold/baseline/action decisions từ step-02
- Transformation design và SLA catalog

### 2. Soạn DQ artifact

Artifact phải có:

| Section | Nội dung bắt buộc |
| :--- | :--- |
| Dataset coverage | Bronze/Silver/Gold datasets and quality gates |
| Rule catalog | rule ID, dataset, dimension, threshold formula, severity, action |
| Baseline/anomaly config | formula, window, minimum history, seasonality note |
| Failure protocol | FAIL / QUARANTINE / WARN behavior, retry/escalation |
| Quarantine design | target table/path and required failure metadata |
| Audit log design | log schema for PASS/FAIL/WARN/QUARANTINE results |
| Ownership | owner, alert channel, escalation for every critical rule |
| Tooling | dbt/Soda/Great Expectations/custom implementation target |

### 3. DQ completeness gate

Kiểm tra:

| Gate | Pass condition |
| :--- | :--- |
| Dimension coverage | Required DQ dimensions represented for each layer |
| Critical rule approval | Every FAIL rule has owner approval |
| Threshold specificity | No vague thresholds like "reasonable", "normal", or "30-day rolling" without formula |
| Quarantine/audit | QUARANTINE target and audit log defined |
| PII safety | Audit/quarantine logs do not expose raw PII unnecessarily |
| Orchestration readiness | Each rule has blocking/non-blocking behavior for DAG integration |

Nếu gate fail, HALT và không update status completed.

### 4. Orchestration handoff package

Chuẩn bị thông tin cho `des-orchestration-and-observability`:

| Orchestration handoff item | Required value |
| :--- | :--- |
| Blocking DQ gates |  |
| Non-blocking warning checks |  |
| Quarantine tasks |  |
| Alert channels and owners |  |
| Audit log table/path |  |
| SLA/freshness checks |  |

### 5. Configured checklist gate

Trước khi ghi file hoặc update workflow status:
- Resolve `checklist_file` từ `customize.toml`.
- Load toàn bộ checklist file đã cấu hình.
- Kiểm tra draft artifact theo từng checklist item.
- Ghi checklist validation report ngắn với trạng thái Pass / Needs Work / Blocked.
- Nếu có item Blocked hoặc thiếu evidence bắt buộc, HALT và không mark phase completed.
- Chỉ cho phép override nếu người dùng xác nhận rõ ràng và ghi override vào artifact/status.

### 6. Ghi file và cập nhật trạng thái

Nếu gate pass:
- Lưu vào `14-data-quality.md`
- Update workflow status cho Phase 14 là completed
- Ghi rõ rules cần CI/CD enforcement ở Phase 21

### 7. Menu bàn giao

- **[C] Hoàn thành**: Gợi ý `des-orchestration-and-observability`.
- **[R] Soạn lại**: Quay lại step-01.
- **[T] Sửa threshold/baseline/action**: Quay lại step-02.

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
