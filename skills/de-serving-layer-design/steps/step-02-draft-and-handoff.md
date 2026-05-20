# Soạn Thảo Serving Design và Bàn Giao

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Không mark Phase 17 completed nếu data product thiếu interface, SLA, access control, monitoring, hoặc consumer onboarding path.
- HALT nếu serving design cho phép consumer định nghĩa metric riêng ngoài semantic model.

## Hướng dẫn

### 1. Dùng output format chuẩn của skill
Skill này không có template riêng. Soạn `17-serving-layer-design.md` theo cấu trúc:

| Section | Nội dung bắt buộc |
| :--- | :--- |
| Consumer mapping | data product, consumer, interface, semantic source |
| Access pattern | filters/endpoints/export schedule/request shape |
| Performance strategy | P90/P99 target, cache/materialization/partition strategy |
| Security | auth, RBAC/RLS/CLS, rate limits, encryption |
| Monitoring | latency, errors, cache hit, delivery manifest, freshness |
| Consumer onboarding | connection guide, glossary link, SLA, support owner |
| Change/versioning | API/export/dashboard semantic versioning and breaking change path |

### 2. Serving quality gate

| Gate | Pass condition |
| :--- | :--- |
| Semantic consistency | Metrics come from certified semantic model |
| Interface fit | Interface matches consumer pattern and SLA |
| Cache safety | TTL/invalidation respects freshness and RLS |
| Access control | Auth/RLS/rate limit tested or test scenario defined |
| Observability | Consumer-facing errors and latency are monitored |
| Onboarding | Consumer knows how to use and escalate issues |

Nếu gate fail, HALT và không update status completed.

### 3. Lineage/metadata handoff package

| Lineage handoff item | Required value |
| :--- | :--- |
| Serving assets |  |
| Semantic metric sources |  |
| Consumer-facing columns |  |
| PII/secured outputs |  |
| Refresh/cache dependencies |  |

### 4. Configured checklist gate

Trước khi ghi file hoặc update workflow status:
- Resolve checklist_file từ customize.toml.
- Load toàn bộ checklist file đã cấu hình.
- Kiểm tra draft artifact theo từng checklist item.
- Ghi checklist validation report ngắn với trạng thái Pass / Needs Work / Blocked.
- Nếu có item Blocked hoặc thiếu evidence bắt buộc, HALT và không mark phase completed.
- Chỉ cho phép override nếu người dùng xác nhận rõ ràng và ghi override vào artifact/status.


### 5. Ghi file và cập nhật trạng thái
Nếu gate pass:
- Lưu vào `17-serving-layer-design.md`.
- Update workflow status cho Phase 17 là completed.

### 6. Menu bàn giao
- **[C] Hoàn thành**: Gợi ý `de-lineage-and-metadata`.
- **[R] Soạn lại**: Quay lại step-01.
- **[G] Bổ sung gate còn thiếu**: Hoàn thiện SLA/access/monitoring/onboarding.

HALT và chờ người dùng chọn.
