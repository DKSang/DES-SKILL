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
Decide whether `des-lineage-and-metadata` can continue, should route back to an upstream DES skill, or should continue only as an explicitly marked draft.

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

# Map Data Lineage

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- PII columns và certified metrics bắt buộc có column-level lineage.
- HALT nếu lineage chỉ ở table-level cho dataset chứa PII, regulated data, hoặc metric certified vì không đủ cho audit/impact analysis.

## Hướng dẫn

### 1. Nạp artifact đầu vào
Đọc: Architecture (07), Ingestion (08), Bronze/Silver/Gold designs, Transformation (13), Semantic model (16 nếu có), Governance classification nếu có.

### 2. Chọn lineage granularity

| Dataset/column type | Required lineage | Reason | Tooling expectation |
| :--- | :--- | :--- | :--- |
| PII/regulated column | Column-level | Audit privacy flow and masking proof | OpenLineage/dbt/Unity/Fabric/DataHub column lineage |
| Certified metric | Column-level + formula lineage | Trust and metric change impact | Metric source + transformation rule IDs |
| Shared Gold dataset | Table-level + key columns | Consumer impact analysis | dbt DAG/catalog lineage |
| Internal staging only | Dataset-level | Low external blast radius | Manual acceptable if owner assigned |

### 3. Build lineage chain

Với mỗi critical column hoặc metric:

| Target asset | Target column/metric | Source system | Source column | Transform rule ID | Layer hops | Classification |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| gold.fact_orders | revenue | orders_db | order_amount | BR-001 | Bronze -> Silver -> Gold | Certified metric source |

Layer hops phải ghi rõ:
- Source -> Bronze: ingestion metadata/offset.
- Bronze -> Silver: standardization, dedup, masking.
- Silver -> Gold: joins, aggregations, business rules.
- Gold -> Semantic/Serving: metric formula, RLS/filter effect.

### 4. Tool decision: OpenLineage/DataHub/Fabric/dbt

| Context | Recommended approach | HALT trigger |
| :--- | :--- | :--- |
| Airflow/Dagster/Prefect orchestration | Emit OpenLineage events | No automated emit plan for production pipelines |
| dbt transformations | dbt docs + exposures + tests | Column mapping not represented for critical columns |
| DataHub catalog | Ingest OpenLineage/dbt metadata into DataHub | Catalog entries manual-only for certified datasets |
| Microsoft Fabric/Unity | Use native catalog/lineage | Native lineage cannot show required column-level flow |

### 5. HALT — lineage coverage review

Trình bày:

| Asset | Required granularity | Current coverage | Gap | Blocking? |
| :--- | :--- | :--- | :--- | :--- |

Menu:
- **[C] Tiếp tục**: Xác nhận lineage map, chuyển sang metadata catalog.
- **[L] Bổ sung column lineage**: Hoàn thiện PII/metric lineage.
- **[T] Sửa tooling**: Chọn hoặc cấu hình automated lineage emission.

HALT và chờ người dùng chọn.

- On **[C]**: Chuyển sang `./step-02-catalog-metadata.md`.
