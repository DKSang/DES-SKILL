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
Decide whether `des-semantic-model-design` can continue, should route back to an upstream DES skill, or should continue only as an explicitly marked draft.

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

# Thiết Kế Semantic Model

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Mỗi KPI certified phải có đúng 1 định nghĩa chính thức trong semantic layer.
- HALT nếu phát hiện metric trùng định nghĩa giữa BI report, Gold table, API, hoặc AI context vì đây là nguồn gây lệch số giữa consumer.

## Hướng dẫn

### 1. Nạp artifact đầu vào
Đọc: KPI catalog (03), Data products (04), Gold design (11), governance/security assumptions nếu có, và consumer query patterns.

### 2. Classify metric type

| Metric | Business owner | Type | Gold source | Grain | Additive? | Semantic-only? |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| (metric) | (owner) | Simple / Ratio / Derived / Cumulative / Period-over-period | (table.column) | (grain) | Yes/No | Yes/No |

Quy tắc:
- Simple metrics có thể là SUM/COUNT/AVG trực tiếp từ Gold measure.
- Ratio/Derived metrics phải tính trong semantic layer để filters không làm sai denominator.
- Period-over-period cần date hierarchy chính thức.

### 3. Chọn certified metric layer pattern

| Context | Recommended pattern | Enforcement check |
| :--- | :--- | :--- |
| Power BI/Fabric là consumer chính | Fabric Semantic Model / Power BI Dataset | Measures chỉ định nghĩa trong dataset certified |
| dbt-native stack | dbt Metrics / MetricFlow | Metric YAML version-controlled, CI validates metric graph |
| Nhiều BI tools hoặc API cùng dùng metric | Cube semantic layer | BI tools query Cube, không tự viết metric riêng |
| AI agent cần grounding | Structured metric registry JSON/YAML | Agent chỉ đọc metric registry, không suy diễn formula |

### 4. Enforce single metric layer

Tạo bảng duplicate detection:

| KPI | Certified definition location | Duplicate location found? | Action |
| :--- | :--- | :--- | :--- |
| (kpi) | Semantic model | report/API/Gold column | Remove duplicate / mark deprecated / block handoff |

HALT nếu:
- Cùng một KPI có nhiều formula.
- Ratio metric đang materialized trong Gold như một cột mà consumer filter trực tiếp.
- BI report có calculated measure trùng KPI certified.

### 5. Thiết kế dimensions, relationships, và RLS

| Semantic entity | Dimensions/hierarchy | Relationship | Filter direction | RLS rule | Test account |
| :--- | :--- | :--- | :--- | :--- | :--- |

RLS phải có:
- Role name.
- Filter expression.
- Dataset/tenant/region boundary.
- Test account hoặc test scenario.

### 6. HALT bắt buộc — metric authority và RLS review

Trình bày:

| Check | Result | Blocking issue |
| :--- | :--- | :--- |
| Every KPI has exactly one certified definition | Pass/Fail |  |
| Ratio/derived metrics live in semantic layer | Pass/Fail |  |
| RLS has test scenario per role | Pass/Fail |  |
| Metric-to-Gold lineage complete | Pass/Fail |  |

Menu:
- **[C] Tiếp tục**: Xác nhận semantic design, chuyển sang soạn thảo.
- **[M] Sửa metric authority**: Gỡ duplicate hoặc chọn certified definition.
- **[R] Sửa RLS**: Bổ sung rule/test account.

HALT và chờ người dùng chọn.

- On **[C]**: Chuyển sang `./step-02-draft-and-handoff.md`.
