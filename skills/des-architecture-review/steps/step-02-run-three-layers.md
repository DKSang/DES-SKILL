# Bước 2: Chạy 3 Lớp Review Adversarial

## Quy tắc
- Chạy mỗi layer **độc lập** — không để layer này ảnh hưởng layer kia khi phát hiện findings.
- Liệt kê raw findings trước khi triage.
- Không filter hay suppress findings ở bước này.

---

## Layer 1: FDE Alignment Hunter

**Vai trò**: Bạn là FDE expert. Kiểm tra architecture có đúng với Fundamentals of Data Engineering không.

Với architecture document đã nạp, kiểm tra từng mục sau:

### 1.1 Data Maturity Fit

| Kiểm tra | Kết quả | Finding |
| :--- | :--- | :--- |
| Architecture complexity có phù hợp với Data Maturity Level đã khai báo không? | | |
| Level 1 tổ chức có đang dùng streaming không (anti-pattern)? | | |
| Level 2 tổ chức có thiếu orchestration / DQ không? | | |
| Level 3 tổ chức có thiếu data contracts / FinOps không? | | |

### 1.2 Ingestion Mode Correctness

| Nguồn | Write Pattern (CRUD/Insert-Only/Stream/API) | Ingestion Mode trong design | Đúng không? |
| :--- | :--- | :--- | :--- |
| (điền từ architecture doc) | | | |

Kiểm tra: CRUD source → phải dùng CDC (không phải Incremental Watermark). Insert-Only → Watermark OK. Event Stream → Streaming/Micro-batch.

### 1.3 Six Undercurrents Coverage

| Undercurrent | Có trong architecture không? | Gap |
| :--- | :--- | :--- |
| Security | | |
| Data Management | | |
| DataOps | | |
| Data Architecture | | |
| Orchestration | | |
| Software Engineering | | |

### 1.4 One-Way Door Decisions

Liệt kê tất cả quyết định được gán "One-way door" trong design:

| Decision | Alternatives đã xem xét? | Rollback plan có không? | Finding |
| :--- | :--- | :--- | :--- |
| (điền từ ADRs) | | | |

**Ghi raw Layer 1 findings** (chưa triage) trước khi chuyển Layer 2.

---

## Layer 2: Failure Mode Hunter

**Vai trò**: Bạn là Senior DE paranoid về failure. Tìm mọi thứ có thể sai trong production.

### 2.1 Single Points of Failure (SPOF)

| Component | SPOF? | Evidence | Mitigation có không? |
| :--- | :--- | :--- | :--- |
| CDC connector | | | |
| Orchestration (Airflow/Prefect) | | | |
| Storage layer | | | |
| Serving layer | | | |
| External API dependencies | | | |

### 2.2 Pipeline Resilience

| Kiểm tra | Có trong design? | Gap |
| :--- | :--- | :--- |
| DLQ (Dead Letter Queue) cho CDC failures | | |
| Retry logic với exponential backoff | | |
| Idempotency / exactly-once semantics | | |
| Late-arriving data handling | | |
| Schema drift detection | | |
| Partial load prevention | | |

### 2.3 Disaster Recovery

- Có backup/restore plan cho storage layer không?
- Nếu pipeline fail lúc 3AM, ai được alert? Qua kênh nào?
- RTO (Recovery Time Objective) và RPO (Recovery Point Objective) đã được định nghĩa chưa?

**Ghi raw Layer 2 findings** trước khi chuyển Layer 3.

---

## Layer 3: Implementation Auditor

**Vai trò**: Bạn là pragmatist. Kiểm tra team thực tế có triển khai được không.

### 3.1 Team Skill Gap

| Technology trong design | Required skill | Team có không? | Gap |
| :--- | :--- | :--- | :--- |
| (điền từ architecture doc) | | | |

### 3.2 Operational Burden

| Component | Ai maintain? | Ops complexity | Finding |
| :--- | :--- | :--- | :--- |
| CDC connector | | High/Med/Low | |
| Orchestration | | | |
| DQ framework | | | |
| Serving layer | | | |

### 3.3 Cost Validation

| Cost item | Estimated/month | Budget constraint | Gap |
| :--- | :--- | :--- | :--- |
| Storage | | | |
| Compute (batch) | | | |
| Compute (streaming) | | | |
| Orchestration | | | |
| **Total** | | | |

### 3.4 Timeline Feasibility

- Với team size và skill set hiện tại, timeline implement có realistic không?
- Có dependency ngoài tầm kiểm soát team không (vendor contract, infrastructure provisioning)?

**Ghi raw Layer 3 findings** trước khi chuyển step tiếp theo.

---

## Cuối Bước 2: Consolidate Raw Findings

Tổng hợp tất cả raw findings từ 3 layers vào 1 danh sách thô. Chưa triage — chỉ list.

Chuyển sang `./step-03-triage-and-report.md`.
