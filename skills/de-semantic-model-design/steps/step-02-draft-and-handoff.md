# Soạn Thảo Semantic Model và Bàn Giao

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Không mark Phase 16 completed nếu còn duplicate metric definition, RLS chưa test được, hoặc metric không trace về Gold.
- HALT nếu semantic model không enforce single metric layer.

## Hướng dẫn

### 1. Nạp template
Đọc: `16-semantic-model-design-template.md` và decisions từ step-01.

### 2. Soạn artifact

Artifact phải có:

| Section | Nội dung bắt buộc |
| :--- | :--- |
| Tool/pattern decision | Fabric / dbt Metrics / Cube / structured registry, rationale |
| Certified metrics | name, type, formula, owner, grain, filter semantics |
| Dimensions | hierarchy, attributes, conformed dimension source |
| Relationships | semantic entity relationships, cardinality, filter direction |
| RLS | role, filter expression, test account/scenario |
| Lineage | metric -> Gold table/column -> business question |
| Governance | change owner, versioning, deprecation policy |

### 3. Semantic model quality gate

| Gate | Pass condition |
| :--- | :--- |
| Single metric authority | Each KPI appears once as certified definition |
| Non-additive safety | Ratio/derived metrics not materialized as filterable Gold facts |
| RLS testability | Every role has a test scenario |
| Lineage | Every metric maps to Gold source and owner |
| Consumer readiness | Dashboards/APIs/AI agents know to query semantic layer |

Nếu gate fail, HALT và không update status completed.

### 4. Serving handoff package

| Serving handoff item | Required value |
| :--- | :--- |
| Certified metric endpoint/model |  |
| Allowed dimensions and filters |  |
| RLS roles |  |
| Consumer-specific semantic constraints |  |
| Deprecated duplicate metrics to remove |  |

### 5. Configured checklist gate

Trước khi ghi file hoặc update workflow status:
- Resolve checklist_file từ customize.toml.
- Load toàn bộ checklist file đã cấu hình.
- Kiểm tra draft artifact theo từng checklist item.
- Ghi checklist validation report ngắn với trạng thái Pass / Needs Work / Blocked.
- Nếu có item Blocked hoặc thiếu evidence bắt buộc, HALT và không mark phase completed.
- Chỉ cho phép override nếu người dùng xác nhận rõ ràng và ghi override vào artifact/status.


### 6. Ghi file và cập nhật trạng thái
Nếu gate pass:
- Lưu vào `16-semantic-model-design.md`.
- Update workflow status cho Phase 16 là completed.
- Ghi rõ semantic layer authority và consumer instructions.

### 7. Menu bàn giao
- **[C] Hoàn thành**: Gợi ý `de-serving-layer-design`.
- **[R] Soạn lại**: Quay lại step-01.
- **[M] Sửa metric/RLS**: Bổ sung gate còn thiếu trước khi bàn giao.

HALT và chờ người dùng chọn.
