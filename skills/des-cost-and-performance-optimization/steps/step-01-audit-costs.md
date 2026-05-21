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
Decide whether `des-cost-and-performance-optimization` can continue, should route back to an upstream DES skill, or should continue only as an explicitly marked draft.

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
