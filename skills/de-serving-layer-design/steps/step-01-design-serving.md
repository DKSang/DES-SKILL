# Thiết Kế Serving Layer

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Serving channels phải consume semantic/certified outputs; không tự định nghĩa metric logic riêng.
- HALT nếu consumer-facing interface bypass semantic layer, thiếu access control, hoặc performance SLA không có caching/materialization plan.

## Hướng dẫn

### 1. Nạp artifact đầu vào
Đọc: Data products (04), Semantic model (16), Gold design (11), Governance/Security (19), SLA/KPI (03).

### 2. Consumer-to-interface decision

| Consumer | Query pattern | Freshness | Latency target | Recommended interface |
| :--- | :--- | :--- | :--- | :--- |
| BI analysts | slice/filter certified metrics | hourly/daily | P90 < 5-10s | BI tool -> semantic model |
| Application | point lookup or small response | seconds/minutes | P99 < 500ms | API + cache/read replica |
| ML training | historical point-in-time features | batch | job SLA | feature store/offline table |
| Reverse ETL | push attributes to CRM/CDP | scheduled | delivery SLA | reverse ETL job with upsert |
| AI agent | grounded facts/context | near-current | tool SLA | structured context/vector/search with metadata filters |
| Partner export | file delivery | scheduled | delivery deadline | encrypted file + manifest |

### 3. Caching/materialization decision tree

| Symptom/requirement | Strategy | HALT if |
| :--- | :--- | :--- |
| Dashboard P90 > target and queries aggregate same metrics | Pre-aggregated Gold/semantic aggregate + BI cache | Metric definition duplicated outside semantic layer |
| API P99 < 500ms | Redis/cache/read replica with TTL | TTL can serve stale data beyond SLA |
| High concurrency BI | BI result cache + warehouse concurrency config | RLS not enforced in cache |
| Reverse ETL API rate limits | Batch upsert + idempotent sync state | No dedup/upsert key |
| AI search/agent | curated structured context + metadata filters | Agent can query raw Silver/Bronze directly |

### 4. Access and monitoring

| Interface | AuthN/AuthZ | RLS/CLS inheritance | Rate limit | Monitoring signal |
| :--- | :--- | :--- | :--- | :--- |

Signals:
- BI: P50/P90 query latency, error rate, cache hit rate.
- API: P50/P95/P99 latency, 4xx/5xx, rate-limit hits.
- Export: delivery success, manifest row count/checksum.
- Reverse ETL: upsert success/failure, API throttling.
- AI: tool error rate, retrieval freshness, blocked unauthorized access attempts.

### 5. HALT — serving readiness review

Trình bày:

| Data product | Interface | Semantic source? | SLA/caching safe? | Access control tested? | Blocking gap |
| :--- | :--- | :--- | :--- | :--- | :--- |

Menu:
- **[C] Tiếp tục**: Xác nhận serving design, chuyển sang soạn thảo.
- **[I] Sửa interface**: Chọn lại BI/API/export/feature/reverse ETL/AI.
- **[K] Sửa caching/materialization**: Bổ sung TTL, invalidation, or aggregate policy.
- **[A] Sửa access control**: Bổ sung RLS/RBAC/auth/rate limit.

HALT và chờ người dùng chọn.

- On **[C]**: Chuyển sang `./step-02-draft-and-handoff.md`.
