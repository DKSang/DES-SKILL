# Route to Semantic or Serving Skill

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- HALT tại checkpoint và chờ người dùng xác nhận.

## Hướng dẫn

### 1. Xác định đích đến
Skill này là routing coordinator:
- Nếu cần thiết kế **Semantic Model** (dbt Metrics, Fabric Semantic Model, Cube): → `des-semantic-model-design`
- Nếu cần thiết kế **Serving Layer** (dashboard, API, export): → `des-serving-layer-design`
- Nếu cần cả hai: → bắt đầu với semantic model, sau đó serving layer

### 2. Menu tương tác
- **[S] Semantic Model**: Activate `des-semantic-model-design`.
- **[V] Serving Layer**: Activate `des-serving-layer-design`.
- **[B] Cả hai**: Bắt đầu với Semantic Model.

HALT và chờ người dùng chọn.
