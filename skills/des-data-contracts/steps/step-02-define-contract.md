## HALT - Data Contract Approval

Stop here. Do not continue until the user confirms this decision.

### Why this matters
A contract is invalid until owner, consumers, schema version, required columns, freshness SLA, and breaking-change policy are approved.

### Decision needed
Approve contract level and change policy for each source, table, or product boundary.

### Options
A. Approve as production contract
B. Approve as shared/internal contract
C. Mark experimental with no stability guarantee
D. Block until owner or consumer confirms

### Recommended default
Choose A for consumer-facing or release-critical data; choose C only for explicitly experimental surfaces.

### Impact
- A: downstream work can rely on schema and SLA
- B: internal stability is expected but release exposure may be limited
- C: consumers must not treat it as stable
- D: blocks dependent implementation and release

### Required user response
Please choose one option or provide a custom decision. Do not continue until the user responds.

# Định Nghĩa Contract Chi Tiết

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Mọi contract production phải có semver, compatibility policy, owner, notice period, và contract tests.
- HALT bắt buộc nếu breaking change policy chưa được producer và consumer đồng ý.

## Hướng dẫn

### 1. Contract definition

| Contract | Version | Producer | Consumer | Dataset/API | SLA | Owner |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |

Mỗi contract phải định nghĩa:
- Schema: field, type, nullable, allowed values, PII flag.
- Semantics: grain, metric formula, business definition.
- Freshness: expected delivery time, max lateness, alert owner.
- Quality guarantees: null rate, uniqueness, reconciliation tolerance.
- Availability: expected uptime or delivery reliability.

### 2. Semver enforcement guide

| Change | Semver impact | Required action |
| :--- | :--- | :--- |
| Add optional column | MINOR | Notify consumers, add contract test |
| Add required column | MAJOR | Consumer migration required |
| Rename/remove column | MAJOR | Deprecation notice + migration guide |
| Type narrowing or incompatible type change | MAJOR | Consumer recertification |
| Metric formula/grain change | MAJOR semantic | Business owner sign-off |
| Description/doc-only change | PATCH | No consumer migration |
| Add enum value | MINOR or MAJOR | MINOR if consumers tolerate unknown; MAJOR if strict enum |

### 3. Consumer-driven contract tests

| Test type | Example assertion | Owner | Runs where |
| :--- | :--- | :--- | :--- |
| Schema | required columns exist with expected types | producer | CI + production |
| Freshness | max(event_time) within SLA | producer | DAG monitor |
| Quality | primary key unique, null_rate <= threshold | producer | CI + production |
| Semantic | metric formula equals agreed definition | consumer + producer | staging certification |
| Compatibility | new schema satisfies previous consumer contract | producer | PR gate |

### 4. Notification and deprecation policy

| Criticality | Minimum notice | Required approval | Deprecation support |
| :--- | :--- | :--- | :--- |
| P0 | 60-90 days | producer, all consumers, business owner | parallel old/new contract |
| P1 | 30 days | producer + named consumers | migration guide |
| P2 | 14 days | producer + impacted consumer owner | release note |

### 5. HALT — breaking change policy

Trình bày:

| Contract | Breaking change examples | Semver rule | Notice period | Consumer sign-off required |
| :--- | :--- | :--- | :--- | :--- |

Menu:
- **[C] Đã đồng ý**: Chuyển sang soạn thảo.
- **[V] Sửa semver policy**: Điều chỉnh versioning/change classification.
- **[T] Bổ sung tests**: Thêm consumer-driven contract tests.
- **[N] Sửa notification**: Điều chỉnh notice/deprecation flow.

HALT và chờ người dùng chọn.

- On **[C]**: Chuyển sang `./step-03-draft-and-handoff.md`.
