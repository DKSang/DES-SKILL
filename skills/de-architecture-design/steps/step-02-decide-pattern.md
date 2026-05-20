# Quyết Định Pattern Kiến Trúc (ADR)

## Quy tắc
- Trả lời bằng `communication_language` đã cấu hình.
- Mọi quyết định storage, compute, serving, orchestration, và deployment path phải có ADR.
- HALT bắt buộc tại quyết định "one-way door" vì đây là điểm có chi phí migration, lock-in, hoặc thay đổi vận hành lớn.

## Hướng dẫn

### 1. Lập danh sách quyết định kiến trúc cần ADR

Tạo bảng quyết định từ SLA, source pattern, data product, và team constraints:

| Decision ID | Quyết định | Input bắt buộc | Tác động lifecycle | Candidate options |
| :--- | :--- | :--- | :--- | :--- |
| ADR-01 | Storage pattern | Data volume, file/table access pattern, retention, governance | Storage chạy ngang toàn bộ lifecycle FDE | Warehouse / Lakehouse / Object storage + query engine / Local-first |
| ADR-02 | Compute pattern | Team skill, scale, latency, transformation complexity | Ingestion + Transformation + Serving | SQL warehouse / dbt / Spark / DuckDB / Python |
| ADR-03 | Deployment path | Security, cost, data residency, local development needs | Data Architecture undercurrent | Local-first / Cloud-first / Hybrid |
| ADR-04 | Serving pattern | Consumer type, freshness, access SLA | Serving phase | BI semantic layer / SQL mart / API / Reverse ETL |

Nếu thiếu input bắt buộc cho một ADR, ghi rõ "Blocked input" và không chọn tool bằng cảm tính.

### 2. Phân loại reversibility theo FDE architecture principle

FDE nhấn mạnh kiến trúc tốt phải giảm coupling và ưu tiên quyết định có thể đảo ngược. Phân loại từng ADR:

| Loại | Dấu hiệu nhận biết | Ví dụ | Cách xử lý |
| :--- | :--- | :--- | :--- |
| **Reversible / Two-way door** | Có thể đổi bằng config hoặc migration nhỏ, ít ảnh hưởng historical data | Cluster size, scheduler interval, dashboard cache TTL | Quyết nhanh, ghi rationale ngắn |
| **Partially reversible** | Đổi được nhưng cần backfill hoặc dual-run | dbt vs warehouse SQL, partition key, orchestration tool | Cần rollback plan và migration estimate |
| **Irreversible / One-way door** | Đổi sẽ cần rewrite storage, reload history, hoặc thay đổi contract với consumer | Lakehouse vs warehouse, table format Delta/Iceberg, vendor-managed warehouse, semantic metric authority | HALT và yêu cầu xác nhận |

### 3. Chấm điểm Storage Pattern

Chấm mỗi option từ 1-5. Không chọn option nếu không đạt hard SLA hoặc compliance constraint.

| Criteria | Warehouse | Lakehouse | Object + Query Engine | Local-first DuckDB/Parquet |
| :--- | :---: | :---: | :---: | :---: |
| Meets freshness SLA |  |  |  |  |
| Supports source volume growth |  |  |  |  |
| Fits team skill |  |  |  |  |
| Low operational burden |  |  |  |  |
| Supports governance/lineage |  |  |  |  |
| Avoids vendor lock-in |  |  |  |  |
| Backfill/replay practical |  |  |  |  |
| **Total** |  |  |  |  |

Ghi rationale:
- Winner:
- Second-best alternative:
- Rejected option:
- Reversibility label:
- Migration cost if wrong:

### 4. Chọn local-first, cloud-first, hoặc hybrid

| Context | Recommended path | HALT trigger |
| :--- | :--- | :--- |
| Team cần develop offline, dữ liệu < 100GB, chưa có cloud budget | Local-first DuckDB/Parquet, promote later | Không HALT nếu chỉ prototype |
| PII, governance, nhiều consumer, production SLA rõ | Cloud-first managed warehouse/lakehouse | HALT nếu dữ liệu rời khỏi vùng compliance |
| Muốn test local nhưng production trên cloud | Hybrid: local fixtures + cloud production | HALT nếu local path không tương đương production semantics |

### 5. Chọn compute và transformation pattern

| Pattern | Chọn khi | Tránh khi | Reversibility |
| :--- | :--- | :--- | :--- |
| dbt / SQL | Logic analytical, cần lineage/test/docs | Logic Python/ML phức tạp | Partially reversible |
| Spark / PySpark | Volume lớn, window/joins nặng, lakehouse | Team không có Spark vận hành | Partially reversible |
| DuckDB | Local-first, batch nhỏ/vừa, CI fixture | Multi-user production serving | Reversible cho prototype, partially reversible cho production |
| Warehouse SQL | Warehouse là platform chính, SLA BI | Cross-engine portability quan trọng | Partially reversible |

### 6. HALT bắt buộc — xác nhận one-way-door decisions

Nếu bất kỳ ADR nào có label **Irreversible** hoặc **Partially reversible với migration estimate > 5 ngày**, HALT và trình bày:

| ADR | Chosen option | Why now | Alternatives rejected | Migration cost if wrong | Business risk |
| :--- | :--- | :--- | :--- | :--- | :--- |

Yêu cầu người dùng chọn:
- **[C] Xác nhận**: Chấp nhận quyết định và rủi ro, tiếp tục soạn ADR.
- **[R] Xem xét lại**: Quay lại scoring matrix cho ADR cụ thể.
- **[S] Giảm lock-in**: Chọn design giảm coupling hoặc thêm migration plan trước khi tiếp tục.

HALT và chờ người dùng chọn.

- On **[C]**: Chuyển sang `./step-03-draft-and-handoff.md`.
- On **[R]** hoặc **[S]**: Cập nhật matrix, rồi HALT lại nếu vẫn còn one-way-door decision.
