# Soạn Thảo Orchestration Spec và Bàn Giao

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Không mark Phase 15 completed nếu pipeline thiếu owner, trigger, SLA monitor, retry/timeout, DQ gate, hoặc runbook.
- HALT nếu alert không có routing/escalation cụ thể.

## Hướng dẫn

### 1. Nạp template
Đọc:
- `15-orchestration-and-observability-template.md`
- `15b-pipeline-spec-template.md`
- decisions từ step-01

### 2. Soạn artifact chính

Artifact phải có:

| Section | Nội dung bắt buộc |
| :--- | :--- |
| DAG topology | source -> Bronze -> Silver -> Gold -> Serving dependencies |
| Trigger design | schedule, sensor, event, dataset dependency |
| Retry/timeout policy | formula, max retries, jitter, timeout per task type |
| SLA monitoring | freshness, duration, row count, DLQ, success rate |
| Alert routing | Slack/PagerDuty/email, severity, owner |
| DQ gate integration | blocking/non-blocking DQ tasks from Phase 14 |
| Runbooks | SLA breach, DLQ spike, source outage, backfill |
| Backfill | logical date/range, idempotency proof, validation |

### 3. Pipeline spec completeness gate

| Gate | Pass condition |
| :--- | :--- |
| Decoupled DAG | Tasks communicate through tables/files/contracts, not memory |
| Date parameterized | Uses scheduler logical dates, no `datetime.now()` |
| Dependency safety | Sensors/data availability checks replace fixed sleeps |
| Retry safety | Backoff + jitter for connection-facing tasks |
| Alertability | Every critical alert has owner and escalation |
| Observability | Logs, metrics, DQ outcomes, freshness stored/queryable |
| Runbook | Top failure modes have action steps |

Nếu gate fail, HALT và không update status completed.

### 4. Semantic model handoff package

| Semantic handoff item | Required value |
| :--- | :--- |
| Gold refresh completion signal |  |
| Semantic refresh trigger |  |
| Freshness SLA visible to consumers |  |
| DQ gate status available to semantic/BI layer |  |
| Incident status communication path |  |

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
- Lưu `15-orchestration-and-observability.md`.
- Lưu `15b-pipeline-specs.md` nếu có nhiều pipeline specs.
- Update workflow status cho Phase 15 là completed.

### 7. Menu bàn giao
- **[C] Hoàn thành**: Gợi ý `de-semantic-model-design`.
- **[R] Soạn lại**: Quay lại step-01.
- **[A] Bổ sung alert/runbook**: Hoàn thiện operational gate trước khi bàn giao.

HALT và chờ người dùng chọn.
