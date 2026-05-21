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
Decide whether `des-orchestration-and-observability` can continue, should route back to an upstream DES skill, or should continue only as an explicitly marked draft.

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

# Thiết Kế Orchestration và DAG

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- DAG phải tối đa hóa decoupling: task truyền dữ liệu qua storage/table contracts, không truyền state in-memory.
- HALT nếu retry, timeout, SLA threshold, hoặc ownership chưa rõ vì pipeline production sẽ fail silent hoặc alert sai người.

## Hướng dẫn

### 1. Nạp artifact đầu vào
Đọc: Ingestion design (08), Silver/Gold design (10/11), Transformation (13), DQ rules (14), SLA (03), Architecture tooling (07).

### 2. Pipeline inventory

| Pipeline | Trigger | Logical date | SLA deadline | Owner | Criticality | Upstream dependency |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |

Không dùng `datetime.now()` làm logical date. Dùng scheduler date/data interval.

### 3. Schedule vs sensor/event decision

| Dependency type | Recommended trigger | Avoid |
| :--- | :--- | :--- |
| Upstream file arrival | File/object sensor + manifest check | Fixed sleep/wait |
| Upstream DAG completion | External task/dataset sensor | Blind time-based schedule |
| Event stream | Event-driven trigger or continuous job | Batch cron if SLA < 5 min |
| Daily business report | Time schedule + source readiness sensor | Schedule without data availability check |
| Asset-centric pipelines | Dagster asset sensors/materializations | Manual dependency docs only |

### 4. Retry backoff formula

Với mỗi task type:

| Task type | Max retries | Backoff formula | Timeout | Jitter | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| API/source extraction | 3-5 | `delay = min(base * 2^attempt, max_delay) + jitter(0, base)` | source-specific | required | protect source from thundering herd |
| Warehouse transform | 1-2 | exponential or fixed small delay | query SLA + buffer | optional | fail fast on SQL logic errors |
| DQ checks | 0-1 | no blind retry for deterministic FAIL | short | no | retry only infrastructure errors |
| Notification/export | 3 | exponential + jitter | short | required | idempotent send/export required |

### 5. Monitoring and SLA thresholds

| Signal | Formula/threshold | Action | Owner |
| :--- | :--- | :--- | :--- |
| Freshness | `now - max(data_timestamp) <= SLA` | page/warn based on criticality |  |
| Pipeline duration | current duration > P90 + 2 * stddev or fixed SLA buffer | alert |  |
| Row count anomaly | use DQ baseline from Phase 14 | warn/quarantine/fail |  |
| DLQ spike | DLQ_count > 0 for critical source or > threshold | alert |  |
| Success rate | failed_runs / total_runs over 7 days > tolerance | incident review |  |

### 6. HALT — operational readiness review

Trình bày:

| Pipeline | DAG trigger safe? | Retry/timeout defined? | SLA alert defined? | Owner/on-call | Blocking gap |
| :--- | :--- | :--- | :--- | :--- | :--- |

Menu:
- **[C] Tiếp tục**: Xác nhận DAG design, chuyển sang soạn thảo.
- **[R] Sửa retry/timeout**: Hoàn thiện failure policy.
- **[S] Sửa sensors/SLA**: Thay fixed waits bằng sensors hoặc thêm SLA monitor.
- **[O] Bổ sung owner**: Không tiếp tục nếu critical pipeline thiếu owner.

HALT và chờ người dùng chọn.

- On **[C]**: Chuyển sang `./step-02-draft-and-handoff.md`.
