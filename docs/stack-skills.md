# Stack-Specific Support Skill Catalog

Stack-specific support skills cung cấp hướng dẫn và công cụ chuyên sâu cho các công nghệ cụ thể (dbt, DuckDB, Fabric, Spark, v.v.) khi chúng được sử dụng trong quy trình DES.

Các skill này giúp chuyển đổi các thiết kế logic từ DES artifacts thành implementation thực tế trên từng nền tảng kỹ thuật.

---

## Catalog hiện tại

| STT | Skill | Mục tiêu | Primary Stack | DES Phase Support |
|---:|:---|:---|:---|:---|
| 01 | `des-duckdb-local-engine` | Local-first profiling, validation, và prototyping | DuckDB | 05, 08, 09, 10, 11, 12, 16 |
| 02 | `des-dbt-engineering` | Implement transformation layer, tests, docs, và contracts | dbt | 10, 11, 12, 13, 14, 15, 16 |
| 03 | `des-dlt-ingestion` | Ingest source data, schema evolution, incremental state | dlt | 05, 08, 09, 10, 12, 13, 14, 16 |
| 04 | `des-provero-validation` | Declarative data quality, contracts, and evidence | Provero | 05, 09, 10, 11, 12, 13, 14, 16, 17 |
| 05 | `des-airflow-orchestration` | Orchestrate, schedule, retry, and monitor stack tasks | Apache Airflow | 08, 13, 14, 15, 16, 17, 18 |

---

## Khi nào dùng Stack Skills?

Dùng stack skills khi bạn đã có thiết kế từ các main lifecycle skills và cần:

1. **Local-first inspection**: Dùng `des-duckdb-local-engine` để soi dữ liệu thật, kiểm tra grain và prototype SQL nhanh trước khi code chính thức.
2. **Ingestion**: Dùng `des-dlt-ingestion` để extract dữ liệu từ nguồn, normalize nested data, theo dõi incremental state và load vào Bronze.
3. **Implementation**: Dùng `des-dbt-engineering` để tổ chức project dbt, viết model SQL, thiết kế unit tests và data contracts.
4. **Validation**: Dùng `des-provero-validation` để thực thi các kiểm tra chất lượng dữ liệu và hợp đồng dữ liệu. Dùng tất cả để tạo evidence pack (run results, test results, profiling reports) phục vụ cho Done Gate của từng phase.
5. **Orchestration**: Dùng `des-airflow-orchestration` để kết nối dlt, DuckDB, dbt, và Provero thành một workflow chạy tự động có schedule và retry.
6. **Handoff**: Chuyển giao kết quả từ local prototype sang production runtime (Fabric, Spark, Snowflake, v.v.).

---

## Chi tiết từng stack skill

### `des-duckdb-local-engine`

**Mục tiêu:** Sử dụng DuckDB làm local execution engine để đọc file, profile dữ liệu, validate grain và prototype SQL.

**Vai trò trong DES:**
- **Phase 05:** Profile source data thật để đánh giá rủi ro.
- **Phase 10/11:** Validate grain và prototype logic transformation.
- **Phase 12:** Tạo evidence về schema và grain cho data contract.

---

### `des-dlt-ingestion`

**Mục tiêu:** Thiết kế và triển khai dlt-based ingestion pipelines.

**Vai trò trong DES:**
- **Phase 08:** Thiết kế source/resource và write disposition.
- **Phase 09:** Đảm bảo data được load an toàn vào Bronze với đầy đủ schema/state info.
- **Phase 12:** Quản lý schema evolution và schema contracts tại ingestion layer.

---

### `des-provero-validation`

**Mục tiêu:** Chuyển đổi các kỳ vọng chất lượng từ DES thành các bộ kiểm tra Provero có thể thực thi và cung cấp evidence packs.

**Vai trò trong DES:**
- **Phases 09-11:** Đảm bảo chất lượng dữ liệu tại các lớp Bronze, Silver, và Gold.
- **Phase 12:** Thực thi schema/SLA validations thông qua data contracts.
- **Phase 16:** Khởi tạo bộ kiểm tra chất lượng chuẩn và bằng chứng monitoring.

---

### `des-airflow-orchestration`

**Mục tiêu:** Điều phối, lập lịch và giám sát toàn bộ các công việc (tasks) trong data stack.

**Vai trò trong DES:**
- **Phase 14:** Lên lịch (scheduling) và quản lý phụ thuộc (dependencies) giữa các hệ thống (dlt, dbt, Provero).
- **Phase 15:** Đảm bảo pipeline sẵn sàng deploy (operational readiness).
- **Phase 16-17:** Quản lý các Data Quality Gates, backfill logic, và alerting.

---

### `des-dbt-engineering`

**Mục tiêu:** Triển khai transformation layer theo chuẩn dbt, tích hợp với quy trình DES.

**Vai trò trong DES:**
- **Phase 10/11:** Triển khai Medallion layers (Staging, Intermediate, Marts).
- **Phase 12:** Thực thi model contracts và versions.
- **Phase 14:** Triển khai data quality tests và unit tests.
- **Phase 15:** Cấu hình selectors và CI/CD readiness.
