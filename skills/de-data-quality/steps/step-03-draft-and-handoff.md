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

Chuẩn bị thông tin cho `de-orchestration-and-observability`:

| Orchestration handoff item | Required value |
| :--- | :--- |
| Blocking DQ gates |  |
| Non-blocking warning checks |  |
| Quarantine tasks |  |
| Alert channels and owners |  |
| Audit log table/path |  |
| SLA/freshness checks |  |

### 5. Ghi file và cập nhật trạng thái

Nếu gate pass:
- Lưu vào `14-data-quality.md`
- Update workflow status cho Phase 14 là completed
- Ghi rõ rules cần CI/CD enforcement ở Phase 21

### 6. Menu bàn giao

- **[C] Hoàn thành**: Gợi ý `de-orchestration-and-observability`.
- **[R] Soạn lại**: Quay lại step-01.
- **[T] Sửa threshold/baseline/action**: Quay lại step-02.

HALT và chờ người dùng chọn.
