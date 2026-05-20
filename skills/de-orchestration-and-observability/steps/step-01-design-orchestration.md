# Thiết Kế Orchestration và DAG

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- HALT tại checkpoint và chờ người dùng xác nhận.

## Hướng dẫn

### 1. Nạp artifact đầu vào
Đọc: Ingestion design (08), Silver/Gold design (10/11), DQ rules (14), SLA (03).

### 2. Thiết kế pipeline DAG
- Dependency graph: nguồn → Bronze → Silver → Gold → Serving
- Schedule per pipeline (match với Hard SLA times)
- Retry policy và backoff strategy
- SLA monitoring: alert khi pipeline trễ > X phút

### 3. Thiết kế Observability
- Pipeline run logs
- DQ check alerts (FAIL → on-call, WARN → Slack)
- Latency tracking
- Data freshness monitoring

### 4. Menu tương tác
- **[C] Tiếp tục**: Xác nhận DAG design, chuyển sang soạn thảo.

HALT và chờ người dùng chọn.
- On **[C]**: Chuyển sang `./step-02-draft-and-handoff.md`.
