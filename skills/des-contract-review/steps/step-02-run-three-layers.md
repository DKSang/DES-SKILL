# Bước 2: Chạy 3 Lớp Review Contract

## Quy tắc
- Chạy mỗi layer **độc lập** — không để layer này filter findings của layer kia.
- Ghi raw findings đầy đủ trước khi triage.

---

## Layer 1: Schema Auditor

**Vai trò**: Bạn là data modeler. Kiểm tra schema contract có đầy đủ, nhất quán, và evolution-safe không.

### 1.1 Column Completeness Checklist

Với mỗi column trong contract schema, kiểm tra:

| Column | Data type rõ ràng? | Nullable policy có không? | PII flag? | Description có không? | Finding |
| :--- | :--- | :--- | :--- | :--- | :--- |
| (điền từ contract) | Y/N | Y/N | Y/N | Y/N | |

**Check đặc biệt**:
- Có primary key được define không?
- Có timestamp columns nào chưa rõ timezone không? (UTC vs local time)
- Có column nào type là `TEXT` hoặc `VARCHAR` không giới hạn length không?

### 1.2 PII Policy

| Column PII | Masking rule | Ai có quyền xem unmasked? | Audit log có không? |
| :--- | :--- | :--- | :--- |
| (điền từ contract) | | | |

### 1.3 Schema Evolution Plan

| Kiểm tra | Có trong contract? | Finding |
| :--- | :--- | :--- |
| Breaking change definition rõ ràng (xóa/rename column, type change = breaking) | | |
| Non-breaking change definition (thêm nullable column = non-breaking) | | |
| Notification window trước breaking change | | |
| Schema version strategy (v1, v2 hay semantic versioning) | | |
| Deprecation policy cho old schema version | | |

**Ghi raw Layer 1 findings.**

---

## Layer 2: SLA Challenger

**Vai trò**: Bạn là infrastructure expert paranoid. Kiểm tra SLA có thực tế không.

### 2.1 Freshness SLA vs. Infrastructure

Cross-check SLA freshness với source assessment:

| SLA được claim | Source write pattern | Ingestion mode | Realistic? | Gap |
| :--- | :--- | :--- | :--- | :--- |
| (điền từ contract) | (từ 05-data-source-assessment) | | Y/N | |

**Câu hỏi challenge**:
- Nếu source là CRUD với daily batch ingestion, SLA "data mới trong 1 giờ" có khả thi không?
- Nếu SLA là 99.9% uptime, maintenance window hằng tuần có vi phạm không?
- Nếu volume tăng 2x, SLA freshness có vẫn đạt được không?

### 2.2 Volume & Performance SLA

| Metric | Value trong contract | Evidence hỗ trợ | Finding |
| :--- | :--- | :--- | :--- |
| Số records/ngày | | | |
| Max latency per query | | | |
| Row count variance ngưỡng | | | |

### 2.3 SLA Violation Consequences

- Contract có define penalty khi vi phạm SLA không? (Alert / Incident / Compensation)
- Có monitoring/alerting mechanism không? Ai sẽ được notify?
- Có grace period cho planned maintenance không?

**Ghi raw Layer 2 findings.**

---

## Layer 3: Consumer Safety Hunter

**Vai trò**: Bạn là consumer advocate. Tìm mọi điểm contract không bảo vệ được consumer khi producer thay đổi.

### 3.1 Breaking Change Protection

| Câu hỏi | Có trong contract? | Finding |
| :--- | :--- | :--- |
| Breaking change notification window (7 ngày? 30 ngày?) | | |
| Deprecation period trước khi xóa column (2 sprints? 3 tháng?) | | |
| Parallel run period (old + new version chạy song song) | | |
| Rollback plan nếu consumer phát hiện breaking change sau khi deploy | | |

### 3.2 Consumer Access & Auth

- Consumer cần credentials gì để access data? Credentials rotate định kỳ không?
- Nếu producer rotate credentials, consumer được thông báo khi nào?
- Consumer có thể test schema với staging environment không?

### 3.3 Multi-Consumer Conflict

- Có nhiều consumers không? (nếu có, liệt kê)
- Nếu Consumer A cần schema v1 và Consumer B cần schema v2 — contract handle thế nào?
- Ai được quyền yêu cầu schema change? Phải có bao nhiêu consumer đồng ý?

### 3.4 Contract Drift Detection

- Có automated schema validation nào đang chạy không? (schema registry, dbt test, ...)
- Nếu producer accidentally push breaking change, consumer sẽ biết khi nào?
- Có CI/CD check backward compatibility không?

**Ghi raw Layer 3 findings.**

---

## Cuối Bước 2: Consolidate Raw Findings

Tổng hợp tất cả raw findings từ 3 layers vào 1 danh sách thô.

Chuyển sang `./step-03-triage-and-report.md`.
