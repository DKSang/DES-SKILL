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
Decide whether `des-bronze-layer-design` can continue, should route back to an upstream DES skill, or should continue only as an explicitly marked draft.

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

# Thiết Kế Bronze Tables

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Bronze giữ source truth để replay/audit; không áp dụng business logic hoặc drop raw fields.
- HALT nếu serialization format hoặc partition strategy làm mất replay guarantee, tạo quá nhiều small files, hoặc lock-in không được chấp nhận.

## Hướng dẫn

### 1. Nạp artifact đầu vào
Đọc: Source assessment (05), Ingestion design (08), Architecture decision (07), Governance/Security nếu đã có.

### 2. Chọn serialization/table format

| Requirement | Parquet | Delta Lake | Iceberg | Avro/JSON landing |
| :--- | :---: | :---: | :---: | :---: |
| Columnar analytics scan | 5 | 5 | 5 | 1 |
| ACID/table evolution | 1 | 5 | 5 | 1 |
| Multi-engine portability | 4 | 3 | 5 | 3 |
| Streaming/schema registry fit | 2 | 4 | 4 | 5 |
| Operational simplicity | 5 | 3 | 3 | 4 |
| Time travel/replay | 1 | 5 | 5 | 2 |
| **Total** |  |  |  |  |

Guidance:
- Use raw JSON/Avro only for landing when exact payload fidelity is required; convert to columnar Bronze for analytics.
- Use Delta/Iceberg when replay, schema evolution, ACID writes, or time travel are required.
- Use plain Parquet only for append-only, low-governance, simple batch workloads.

### 3. Partition and file layout

| Design item | Default | HALT if |
| :--- | :--- | :--- |
| Partition key | `ingestion_date` | Proposed key is high-cardinality (`user_id`, UUID, order_id) |
| Target file size | 100MB-1GB compressed | Expected files are consistently < 50MB |
| Clustering/Z-order | top 1-3 frequent filters only | Clustering every column or no query pattern evidence |
| Replay write mode | append + run metadata, or partition overwrite for replay window | Re-run can duplicate records without dedup key |

### 4. Bronze schema and metadata

| Source | Bronze table/path | Format | Partition | Metadata columns | Retention | PII access |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |

Mandatory metadata:
- `des_ingestion_timestamp`
- `des_source_system`
- `des_source_offset`
- `des_pipeline_run_id`
- `des_payload_hash`

### 5. HALT — Bronze replay and storage review

Trình bày:

| Source | Format | Partition | Replay safe? | Small-file risk | Retention | Blocking gap |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |

Menu:
- **[C] Tiếp tục**: Chuyển sang soạn thảo.
- **[F] Sửa format**: Chọn lại Parquet/Delta/Iceberg/landing format.
- **[P] Sửa partition/file layout**: Giảm cardinality hoặc small-file risk.
- **[R] Sửa replay/retention**: Bổ sung replay và lifecycle policy.

HALT và chờ người dùng chọn.

- On **[C]**: Chuyển sang `./step-02-draft-and-handoff.md`.
