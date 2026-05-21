## HALT - Critical Lineage Completeness

Stop here. Do not continue until the user confirms this decision.

### Why this matters
Consumer-facing outputs must have source-to-serving lineage before they can be called release-ready.

### Decision needed
Approve lineage completeness for each output from Source to Bronze to Silver to Gold to Semantic/Serving to Consumer.

### Options
A. Approve lineage as complete
B. Missing upstream mapping
C. Missing downstream consumer mapping
D. Mark output as not release-ready

### Recommended default
Choose A only when critical source, transform, metric, and consumer paths are traceable.

### Impact
- A: output can proceed to governance/security checks
- B: source/domain/layer artifacts need revision
- C: serving/product metadata needs revision
- D: release evaluation must block or accept risk

### Required user response
Please choose one option or provide a custom decision. Do not continue until the user responds.

# Xây Dựng Metadata Catalog

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Không catalog dataset bằng tên kỹ thuật trống nghĩa; mỗi dataset/column phải có business definition và steward.
- HALT nếu schema registry compatibility mode chưa rõ cho streaming/event contracts.

## Hướng dẫn

### 1. Dataset catalog entry

Với mỗi dataset managed:

| Dataset | Business definition | Classification | Certification | Business steward | Technical steward | SLA |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |

Certification values:
- Draft: chưa dùng production.
- Certified: được owner duyệt cho consumer chính thức.
- Deprecated: còn tồn tại nhưng có migration path.

### 2. Column metadata

| Dataset | Column | Business meaning | Data type | Sensitivity | Lineage link | Quality rule |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |

Không chấp nhận column description kiểu "ID column" nếu business key/entity không rõ.

### 3. Schema registry setup

Nếu có streaming/events/API contracts:

| Stream/API | Schema format | Registry | Compatibility mode | Breaking change owner |
| :--- | :--- | :--- | :--- | :--- |
| (topic) | Avro/JSON Schema/Protobuf | Confluent/Fabric/custom | BACKWARD/FORWARD/FULL/NONE | owner |

Decision guide:
- BACKWARD: consumer cũ đọc được schema mới; thường dùng cho event evolution.
- FULL: backward + forward; dùng khi nhiều consumer độc lập và deploy không đồng bộ.
- NONE: chỉ cho prototype; không dùng production contract.

### 4. Metadata completeness gate

| Gate | Pass condition |
| :--- | :--- |
| Dataset ownership | Every managed dataset has business + technical steward |
| Column definitions | Every exposed column has business meaning |
| Classification | Every dataset/column has sensitivity label |
| Lineage link | PII and certified metrics link to column-level lineage |
| Schema registry | Streaming/event datasets have compatibility mode |

Nếu gate fail, HALT.

### 5. Menu tương tác
- **[C] Tiếp tục**: Xác nhận metadata, chuyển sang soạn thảo.
- **[O] Bổ sung owner/steward**: Không tiếp tục nếu dataset managed thiếu owner.
- **[S] Sửa schema registry**: Chọn compatibility mode trước khi bàn giao.

HALT và chờ người dùng chọn.

- On **[C]**: Chuyển sang `./step-03-draft-and-handoff.md`.
