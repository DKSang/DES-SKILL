# Audit Chi Phí và Performance

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Không đề xuất optimization nếu chưa có baseline đo lường.
- HALT nếu optimization làm yếu DQ/security/lineage hoặc thay đổi partition/materialization mà không có rollback.

## Hướng dẫn

### 1. Thu thập baseline

| Area | Metric | Required value |
| :--- | :--- | :--- |
| Query performance | P50/P90/P99 latency, scan bytes, top slow queries |  |
| Pipeline cost | cost/run, duration, cluster size, retries |  |
| Storage cost | size by layer/tier, hot/cool/archive mix |  |
| Serving cost | cache hit rate, API/query concurrency, BI usage |  |
| Reliability | failed runs, retries, DQ failures |  |

### 2. FinOps capacity decision

| Workload pattern | Recommended capacity model | Why | HALT if |
| :--- | :--- | :--- | :--- |
| Predictable daily/hourly batch | Reserved/committed capacity if utilization > 60-70% | Lower unit cost | SLA spikes need burst but no overflow plan |
| Spiky exploratory BI | On-demand/serverless with budget guardrails | Avoid paying idle capacity | No budget alert or query controls |
| Always-on serving API | Reserved baseline + autoscale burst | Meets latency and cost stability | Cache/security not designed |
| One-time backfill | Temporary on-demand/burst cluster | Avoid long-term commitment | Backfill not idempotent |

### 3. Bottleneck/root cause matrix

| Symptom | Evidence | Likely root cause | Candidate action |
| :--- | :--- | :--- | :--- |
| Slow query | high scan bytes, no pruning | partition/filter mismatch | partition/clustering/materialized aggregate |
| High compute cost | low CPU utilization | over-provisioned cluster | right-size/autosuspend |
| Small file overhead | many files < 50MB | frequent small batches | compaction/OPTIMIZE/batch interval |
| Full-refresh cost | repeated full scan | missing incremental strategy | watermark/incremental MERGE |
| Serving latency | low cache hit, repeated query | no cache/aggregate | cache TTL/pre-aggregate |

### 4. Optimization candidate register

| Candidate | Expected saving | Performance impact | Correctness risk | Rollback plan | Priority |
| :--- | :--- | :--- | :--- | :--- | :--- |

Priority formula:
`priority_score = (monthly_saving_usd + SLA_penalty_reduction_value) / implementation_effort_days`

### 5. HALT — optimization approval

Trình bày:

| Candidate | Evidence | Estimated saving | Correctness validation | Rollback | Approve? |
| :--- | :--- | :--- | :--- | :--- | :--- |

Menu:
- **[C] Tiếp tục**: Xác nhận optimization plan, chuyển sang soạn thảo.
- **[M] Bổ sung measurement**: Thu thêm baseline trước khi quyết định.
- **[R] Sửa reserved/on-demand model**: Điều chỉnh capacity strategy.
- **[V] Bổ sung validation/rollback**: Không tiếp tục nếu thiếu correctness proof.

HALT và chờ người dùng chọn.

- On **[C]**: Chuyển sang `./step-02-draft-and-handoff.md`.
