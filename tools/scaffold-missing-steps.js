#!/usr/bin/env node
/**
 * scaffold-missing-steps.js
 * Creates placeholder step files for skills that have customize.toml but no steps/ directory.
 * Steps are functional placeholders with correct structure that can be detailed later.
 */

const fs = require('fs');
const path = require('path');

const skillsDir = path.join(__dirname, '..', 'skills');

// Skills needing steps scaffold
const STEPS_MAP = {
  'de-architecture-design': {
    steps: [
      { file: 'step-01-assess-constraints.md', title: 'Đánh Giá Ràng Buộc và Yêu Cầu', next: 'step-02-decide-pattern.md',
        content: `### 1. Nạp artifact đầu vào\nĐọc: KPI catalog, Source assessment, Domain model, Data product definitions.\n\n### 2. Trích xuất Hard SLAs và ràng buộc kiến trúc\nLiệt kê mọi SLA P1, platform constraints, team skill constraints, budget constraints.\n\n### 3. Xác định các khả năng cần thiết\nBatch? Streaming? ELT? ML? AI Agent? Reverse ETL?\n\n### 4. Menu tương tác\n- **[C] Tiếp tục**: Chuyển sang quyết định pattern.\n- **[E] Chỉnh sửa**: Cập nhật ràng buộc.\n\nHALT và chờ người dùng chọn.\n- On **[C]**: Chuyển sang \`./step-02-decide-pattern.md\`.` },
      { file: 'step-02-decide-pattern.md', title: 'Quyết Định Pattern Kiến Trúc (ADR)', next: 'step-03-draft-and-handoff.md',
        content: `### 1. Chọn Storage Pattern (dùng Decision Matrix trong SKILL.md)\nDocumment quyết định + 2 alternatives + rationale. Label: Reversible / Irreversible.\n\n### 2. Chọn Compute và Transformation pattern\nSQL / Python / Spark / dbt / DuckDB — match với team skills.\n\n### 3. HALT bắt buộc — Xác nhận quyết định Irreversible\nMọi "One-way door" decision phải được người dùng xác nhận rõ ràng trước khi tiếp tục.\n\n- **[C] Xác nhận**: Tiếp tục soạn thảo ADR.\n- **[R] Xem xét lại**: Đánh giá lại lựa chọn.\n\nHALT và chờ người dùng chọn.\n- On **[C]**: Chuyển sang \`./step-03-draft-and-handoff.md\`.` },
      { file: 'step-03-draft-and-handoff.md', title: 'Soạn Thảo ADR và Bàn Giao', next: null,
        content: `### 1. Nạp template\nĐọc template kiến trúc và ADR template.\n\n### 2. Soạn thảo artifact\n- Viết 07-architecture-design.md với full architecture overview\n- Viết 07b-architecture-decision-records.md với 1 ADR per major decision\n\n### 3. Kiểm tra 6 Undercurrents\nConfirm mỗi undercurrent được addressed trong architecture.\n\n### 4. Ghi file và cập nhật trạng thái\nLưu artifacts. Update workflow status. Đánh dấu completed.\n\n### 5. Menu bàn giao\n- **[C] Hoàn thành**: Gợi ý \`de-ingestion-design\`.\n- **[R] Soạn lại**: Quay lại step-01.` }
    ]
  },
  'de-ingestion-design': {
    steps: [
      { file: 'step-01-classify-ingestion.md', title: 'Phân Loại Ingestion Mode Cho Từng Nguồn', next: 'step-02-design-patterns.md',
        content: `### 1. Nạp artifact đầu vào\nĐọc: Source assessment (05), Architecture design (07).\n\n### 2. Phân loại ingestion mode (dùng Decision Matrix trong SKILL.md)\nVới mỗi nguồn → Batch / Micro-batch / Streaming / CDC / File landing.\nDựa trên: SLA, write pattern, log retention, team capability.\n\n### 3. Menu tương tác\n- **[C] Tiếp tục**: Xác nhận phân loại, chuyển sang thiết kế chi tiết.\n- **[E] Điều chỉnh**: Thay đổi mode cho nguồn cụ thể.\n\nHALT và chờ người dùng chọn.\n- On **[C]**: Chuyển sang \`./step-02-design-patterns.md\`.` },
      { file: 'step-02-design-patterns.md', title: 'Thiết Kế Pattern Chi Tiết', next: 'step-03-draft-and-handoff.md',
        content: `### 1. Với mỗi nguồn, thiết kế:\n- Offset/watermark tracking strategy\n- Failure handling và retry logic\n- DLQ (Dead Letter Queue) configuration\n- Idempotency guarantee\n- Raw metadata fields (ingestion_time, source_id, batch_id)\n\n### 2. Xác nhận với FDE checklist\n- CDC: Confirm log retention >= pipeline frequency\n- Streaming: Confirm ordering và late-arrival handling\n- Batch: Confirm idempotency khi re-run\n\n### 3. Menu tương tác\n- **[C] Tiếp tục**: Xác nhận design, chuyển sang soạn thảo.\n\nHALT và chờ người dùng chọn.\n- On **[C]**: Chuyển sang \`./step-03-draft-and-handoff.md\`.` },
      { file: 'step-03-draft-and-handoff.md', title: 'Soạn Thảo Ingestion Design và Bàn Giao', next: null,
        content: `### 1. Nạp template\nĐọc: 08-ingestion-design-template.md\n\n### 2. Soạn thảo artifact\nMỗi nguồn: mode, frequency, watermark, failure plan, DLQ, idempotency, raw metadata.\n\n### 3. Ghi file và cập nhật trạng thái\nLưu vào 08-ingestion-design.md. Update workflow status. Đánh dấu completed.\n\n### 4. Menu bàn giao\n- **[C] Hoàn thành**: Gợi ý \`de-bronze-layer-design\`.\n- **[R] Soạn lại**: Quay lại step-01.` }
    ]
  },
  'de-bronze-layer-design': {
    steps: [
      { file: 'step-01-design-tables.md', title: 'Thiết Kế Bronze Tables', next: 'step-02-draft-and-handoff.md',
        content: `### 1. Nạp artifact đầu vào\nĐọc: Source assessment (05), Ingestion design (08).\n\n### 2. Thiết kế Bronze table cho mỗi nguồn\n- Giữ nguyên raw schema từ nguồn — KHÔNG transform\n- Thêm metadata columns: _ingested_at, _source_id, _batch_id, _file_path (nếu file)\n- Quyết định serialization format: Parquet / Delta / Iceberg\n- Quyết định partition strategy: by ingestion date\n- Retention policy: bao lâu giữ raw data?\n\n### 3. FDE Checklist\n- [ ] Compute và Storage tách biệt\n- [ ] Partition cardinality phù hợp (không quá high)\n- [ ] Serialization format match với downstream query pattern\n\n### 4. Menu tương tác\n- **[C] Tiếp tục**: Chuyển sang soạn thảo.\n\nHALT và chờ người dùng chọn.\n- On **[C]**: Chuyển sang \`./step-02-draft-and-handoff.md\`.` },
      { file: 'step-02-draft-and-handoff.md', title: 'Soạn Thảo Bronze Design và Bàn Giao', next: null,
        content: `### 1. Nạp template\nĐọc: 09-bronze-layer-design-template.md\n\n### 2. Soạn thảo artifact\nMỗi table: schema, metadata columns, format, partition, retention.\n\n### 3. Ghi file và cập nhật trạng thái\nLưu vào 09-bronze-layer-design.md. Update workflow status.\n\n### 4. Menu bàn giao\n- **[C] Hoàn thành**: Gợi ý \`de-silver-layer-design\`.\n- **[R] Soạn lại**: Quay lại step-01.` }
    ]
  },
  'de-silver-layer-design': {
    steps: [
      { file: 'step-01-design-silver.md', title: 'Thiết Kế Silver Layer', next: 'step-02-draft-and-handoff.md',
        content: `### 1. Nạp artifact đầu vào\nĐọc: Bronze design (09), Domain model (06).\n\n### 2. Thiết kế transformations\n- Standardization: null handling, data type casting, timezone normalization\n- Deduplication strategy: primary key, event dedup\n- SCD handling: Type 1 / Type 2 cho entities\n- Business key mapping: generate surrogate keys nếu cần\n\n### 3. Menu tương tác\n- **[C] Tiếp tục**: Xác nhận Silver design, chuyển sang soạn thảo.\n\nHALT và chờ người dùng chọn.\n- On **[C]**: Chuyển sang \`./step-02-draft-and-handoff.md\`.` },
      { file: 'step-02-draft-and-handoff.md', title: 'Soạn Thảo Silver Design và Bàn Giao', next: null,
        content: `### 1. Nạp template\nĐọc: 10-silver-layer-design-template.md\n\n### 2. Soạn thảo artifact\nMỗi table: source Bronze, transformations, DQ rules applied, output schema.\n\n### 3. Ghi file và cập nhật trạng thái\nLưu vào 10-silver-layer-design.md. Update workflow status.\n\n### 4. Menu bàn giao\n- **[C] Hoàn thành**: Gợi ý \`de-gold-layer-design\`.\n- **[R] Soạn lại**: Quay lại step-01.` }
    ]
  },
  'de-gold-layer-design': {
    steps: [
      { file: 'step-01-choose-model-pattern.md', title: 'Chọn Pattern Modeling (Kimball/Inmon/OBT)', next: 'step-02-design-gold.md',
        content: `### 1. Nạp artifact đầu vào\nĐọc: Domain model (06), Data products (04), KPI catalog (03).\n\n### 2. Dùng Decision Matrix chọn pattern\nKimball / Inmon / OBT — dựa trên: use case, query complexity, team skill.\n\n### 3. HALT: Xác nhận pattern với stakeholder\nGold pattern là quyết định Irreversible quan trọng. Phải được confirm trước khi thiết kế table.\n\n- **[C] Xác nhận**: Tiếp tục thiết kế Gold tables.\n\nHALT và chờ người dùng chọn.\n- On **[C]**: Chuyển sang \`./step-02-design-gold.md\`.` },
      { file: 'step-02-design-gold.md', title: 'Thiết Kế Fact và Dimension Tables', next: 'step-03-draft-and-handoff.md',
        content: `### 1. Thiết kế Fact tables\nVới mỗi event từ domain model: grain (khai báo lại), measures, foreign keys, surrogate keys.\n\n### 2. Thiết kế Dimension tables\nVới mỗi entity: attributes, SCD type, natural key vs surrogate key.\n\n### 3. Traceability check\nMỗi Gold table phải trace được về ít nhất 1 business question.\n\n### 4. Menu tương tác\n- **[C] Tiếp tục**: Xác nhận design, chuyển sang soạn thảo.\n\nHALT và chờ người dùng chọn.\n- On **[C]**: Chuyển sang \`./step-03-draft-and-handoff.md\`.` },
      { file: 'step-03-draft-and-handoff.md', title: 'Soạn Thảo Gold Design và Bàn Giao', next: null,
        content: `### 1. Nạp template\nĐọc: 11-gold-layer-design-template.md\n\n### 2. Soạn thảo artifact\nFact + Dimension tables với schema, grain, measures, FK/SK mapping.\n\n### 3. Ghi file và cập nhật trạng thái\nLưu vào 11-gold-layer-design.md. Update workflow status.\n\n### 4. Menu bàn giao\n- **[C] Hoàn thành**: Gợi ý \`de-data-contracts\`.\n- **[R] Soạn lại**: Quay lại step-01.` }
    ]
  },
  'de-data-contracts': {
    steps: [
      { file: 'step-01-identify-contracts.md', title: 'Xác Định Các Hợp Đồng Dữ Liệu Cần Thiết', next: 'step-02-define-contract.md',
        content: `### 1. Nạp artifact đầu vào\nĐọc: Data products (04), Gold design (11), Source assessment (05).\n\n### 2. Xác định contract scope\nContract cần thiết khi: cross-team dependency, SLA commitment, downstream consumers không control được source.\n\n### 3. HALT: Xác nhận scope với producer và consumer teams\n- **[C] Xác nhận**: Chuyển sang định nghĩa contract.\n\nHALT và chờ người dùng chọn.\n- On **[C]**: Chuyển sang \`./step-02-define-contract.md\`.` },
      { file: 'step-02-define-contract.md', title: 'Định Nghĩa Contract Chi Tiết', next: 'step-03-draft-and-handoff.md',
        content: `### 1. Per contract definition\n- Schema với types và nullable\n- Freshness SLA\n- Quality guarantees (null rate, uniqueness)\n- Breaking vs Compatible change policy\n- Notification process\n- Version: MAJOR.MINOR.PATCH\n\n### 2. HALT bắt buộc — Xác nhận breaking change policy\nCả producer và consumer phải đồng ý policy trước khi ký contract.\n\n- **[C] Đã đồng ý**: Chuyển sang soạn thảo.\n\nHALT và chờ người dùng chọn.\n- On **[C]**: Chuyển sang \`./step-03-draft-and-handoff.md\`.` },
      { file: 'step-03-draft-and-handoff.md', title: 'Soạn Thảo Contracts và Bàn Giao', next: null,
        content: `### 1. Nạp template\nĐọc: 12-data-contracts-template.md\n\n### 2. Soạn thảo artifact\nMỗi contract: schema, SLA, quality guarantees, version, owners.\n\n### 3. Ghi file và cập nhật trạng thái\nLưu vào 12-data-contracts.md. Update workflow status.\n\n### 4. Menu bàn giao\n- **[C] Hoàn thành**: Gợi ý \`de-transformation-design\`.\n- **[R] Soạn lại**: Quay lại step-01.` }
    ]
  },
  'de-transformation-design': {
    steps: [
      { file: 'step-01-map-transformations.md', title: 'Ánh Xạ Transformation Logic', next: 'step-02-draft-and-handoff.md',
        content: `### 1. Nạp artifact đầu vào\nĐọc: Silver design (10), Gold design (11), Data contracts (12), DQ rules (14 nếu có).\n\n### 2. Với mỗi Gold table, định nghĩa transformation\n- Source tables (Silver)\n- JOIN logic và keys\n- Aggregation logic\n- Business rule implementations\n- Incremental vs full refresh strategy\n\n### 3. Phát hiện logic phức tạp cần review\nGắn cờ transformations có:\n- Multiple source JOINs (>3 tables)\n- Window functions\n- Recursive / CTE phức tạp\n→ Những này cần code review trong CI/CD\n\n### 4. Menu tương tác\n- **[C] Tiếp tục**: Xác nhận mapping, chuyển sang soạn thảo.\n\nHALT và chờ người dùng chọn.\n- On **[C]**: Chuyển sang \`./step-02-draft-and-handoff.md\`.` },
      { file: 'step-02-draft-and-handoff.md', title: 'Soạn Thảo Transformation Design và Bàn Giao', next: null,
        content: `### 1. Không có template riêng — dùng example output format\nVới mỗi transformation: source → target, logic, incremental key, review flag.\n\n### 2. Ghi file và cập nhật trạng thái\nLưu vào 13-transformation-design.md. Update workflow status.\n\n### 3. Menu bàn giao\n- **[C] Hoàn thành**: Gợi ý \`de-data-quality\`.\n- **[R] Soạn lại**: Quay lại step-01.` }
    ]
  },
  'de-data-quality': {
    steps: [
      { file: 'step-01-profile-and-classify.md', title: 'Profile và Phân Loại DQ Rules', next: 'step-02-define-rules.md',
        content: `### 1. Nạp artifact đầu vào\nĐọc: Source assessment (05), Silver design (10), Gold design (11).\n\n### 2. Profile từng dataset\n- Null rates, uniqueness, value ranges, distributions\n- Known quality issues từ source assessment\n\n### 3. Phân loại mỗi rule theo FDE 5 Dimensions\nAccuracy / Completeness / Timeliness / Validity / Uniqueness\n\n### 4. Phân loại severity (dùng Decision Matrix trong SKILL.md)\nFAIL (pipeline stops) / QUARANTINE (move to quarantine table) / WARN (alert only)\n\n### 5. HALT: Xác nhận FAIL-severity rules với business owner\nFAIL rules phải được business owner approve — không phải data engineer quyết định.\n\n- **[C] Đã xác nhận**: Chuyển sang định nghĩa thresholds.\n\nHALT và chờ người dùng chọn.\n- On **[C]**: Chuyển sang \`./step-02-define-rules.md\`.` },
      { file: 'step-02-define-rules.md', title: 'Định Nghĩa DQ Rules với Threshold Cụ Thể', next: 'step-03-draft-and-handoff.md',
        content: `### 1. Với mỗi DQ rule, định nghĩa đầy đủ\n- Threshold số cụ thể (không phải "check for nulls" — phải là "null_rate < 0.01")\n- Dimension (Accuracy/Completeness/Timeliness/Validity/Uniqueness)\n- Severity (FAIL/QUARANTINE/WARN)\n- Baseline window cho anomaly detection (e.g., "30-day rolling average ±3σ")\n- Tool implementation (dbt test / Soda / Great Expectations / custom)\n\n### 2. Anomaly detection baseline\nVới rules dựa trên distribution (không phải fixed threshold):\n- Window size: bao nhiêu ngày?\n- Alert khi nào: mean ±2σ? ±3σ?\n\n### 3. Menu tương tác\n- **[C] Tiếp tục**: Xác nhận rules, chuyển sang soạn thảo.\n\nHALT và chờ người dùng chọn.\n- On **[C]**: Chuyển sang \`./step-03-draft-and-handoff.md\`.` },
      { file: 'step-03-draft-and-handoff.md', title: 'Soạn Thảo DQ Rule Catalog và Bàn Giao', next: null,
        content: `### 1. Nạp template\nĐọc: 14-data-quality-template.md\n\n### 2. Soạn thảo artifact\nMỗi rule: dimension, threshold, severity, baseline window, tool, owner.\n\n### 3. Ghi file và cập nhật trạng thái\nLưu vào 14-data-quality.md. Update workflow status.\n\n### 4. Menu bàn giao\n- **[C] Hoàn thành**: Gợi ý \`de-orchestration-and-observability\`.\n- **[R] Soạn lại**: Quay lại step-01.` }
    ]
  },
  'de-orchestration-and-observability': {
    steps: [
      { file: 'step-01-design-orchestration.md', title: 'Thiết Kế Orchestration và DAG', next: 'step-02-draft-and-handoff.md',
        content: `### 1. Nạp artifact đầu vào\nĐọc: Ingestion design (08), Silver/Gold design (10/11), DQ rules (14), SLA (03).\n\n### 2. Thiết kế pipeline DAG\n- Dependency graph: nguồn → Bronze → Silver → Gold → Serving\n- Schedule per pipeline (match với Hard SLA times)\n- Retry policy và backoff strategy\n- SLA monitoring: alert khi pipeline trễ > X phút\n\n### 3. Thiết kế Observability\n- Pipeline run logs\n- DQ check alerts (FAIL → on-call, WARN → Slack)\n- Latency tracking\n- Data freshness monitoring\n\n### 4. Menu tương tác\n- **[C] Tiếp tục**: Xác nhận DAG design, chuyển sang soạn thảo.\n\nHALT và chờ người dùng chọn.\n- On **[C]**: Chuyển sang \`./step-02-draft-and-handoff.md\`.` },
      { file: 'step-02-draft-and-handoff.md', title: 'Soạn Thảo Orchestration Spec và Bàn Giao', next: null,
        content: `### 1. Nạp template\nĐọc: 15-orchestration-and-observability-template.md\n\n### 2. Soạn thảo artifact\nDAG design, schedule, retry policy, alert routing, observability setup.\n\n### 3. Ghi file và cập nhật trạng thái\nLưu vào 15-orchestration-and-observability.md. Update workflow status.\n\n### 4. Menu bàn giao\n- **[C] Hoàn thành**: Gợi ý \`de-semantic-model-design\`.\n- **[R] Soạn lại**: Quay lại step-01.` }
    ]
  },
  'de-semantic-model-design': {
    steps: [
      { file: 'step-01-design-semantic-model.md', title: 'Thiết Kế Semantic Model', next: 'step-02-draft-and-handoff.md',
        content: `### 1. Nạp artifact đầu vào\nĐọc: KPI catalog (03), Gold design (11), Data products (04).\n\n### 2. Thiết kế semantic model\n- Measures (KPIs với công thức chính xác)\n- Dimensions (hierarchies, attributes)\n- Relationships giữa semantic tables\n- Security roles (row-level security)\n\n### 3. Single metric layer principle\nMỗi KPI phải có exactly 1 certified definition trong semantic model.\nKhông cho phép calculated measures trùng lặp giữa các BI reports.\n\n### 4. Menu tương tác\n- **[C] Tiếp tục**: Xác nhận semantic design, chuyển sang soạn thảo.\n\nHALT và chờ người dùng chọn.\n- On **[C]**: Chuyển sang \`./step-02-draft-and-handoff.md\`.` },
      { file: 'step-02-draft-and-handoff.md', title: 'Soạn Thảo Semantic Model và Bàn Giao', next: null,
        content: `### 1. Nạp template\nĐọc: 16-semantic-model-design-template.md\n\n### 2. Soạn thảo artifact\nMeasures, dimensions, relationships, RLS roles.\n\n### 3. Ghi file và cập nhật trạng thái\nLưu vào 16-semantic-model-design.md. Update workflow status.\n\n### 4. Menu bàn giao\n- **[C] Hoàn thành**: Gợi ý \`de-serving-layer-design\`.\n- **[R] Soạn lại**: Quay lại step-01.` }
    ]
  },
  'de-serving-layer-design': {
    steps: [
      { file: 'step-01-design-serving.md', title: 'Thiết Kế Serving Layer', next: 'step-02-draft-and-handoff.md',
        content: `### 1. Nạp artifact đầu vào\nĐọc: Data products (04), Semantic model (16), Gold design (11).\n\n### 2. Với mỗi data product, thiết kế serving interface\n- Dashboard: layout, refresh schedule, filters\n- API: endpoints, auth, rate limit, response format\n- Export: format, frequency, destination\n- Feature store: feature names, types, update frequency\n\n### 3. Performance SLA design\n- Dashboard load time target: < X giây\n- Query timeout: X giây\n- Caching strategy (nếu cần)\n\n### 4. Menu tương tác\n- **[C] Tiếp tục**: Xác nhận serving design, chuyển sang soạn thảo.\n\nHALT và chờ người dùng chọn.\n- On **[C]**: Chuyển sang \`./step-02-draft-and-handoff.md\`.` },
      { file: 'step-02-draft-and-handoff.md', title: 'Soạn Thảo Serving Design và Bàn Giao', next: null,
        content: `### 1. Không có template riêng — dùng example output format\nMỗi data product: serving interface, performance SLA, access control.\n\n### 2. Ghi file và cập nhật trạng thái\nLưu vào 17-serving-layer-design.md. Update workflow status.\n\n### 3. Menu bàn giao\n- **[C] Hoàn thành**: Gợi ý \`de-lineage-and-metadata\`.\n- **[R] Soạn lại**: Quay lại step-01.` }
    ]
  },
  'de-lineage-and-metadata': {
    steps: [
      { file: 'step-01-map-lineage.md', title: 'Map Data Lineage', next: 'step-02-catalog-metadata.md',
        content: `### 1. Nạp artifact đầu vào\nĐọc: Architecture (07), Ingestion (08), Bronze/Silver/Gold designs, Transformation (13).\n\n### 2. Xây dựng lineage graph\nVới mỗi Gold table, trace ngược về:\nGold ← Silver ← Bronze ← Source System\n\nGhi rõ:\n- Column-level lineage (tên cột nguồn → tên cột đích)\n- Transformation logic tại mỗi bước\n- Tool tạo lineage: dbt, OpenLineage, DataHub, Fabric\n\n### 3. Menu tương tác\n- **[C] Tiếp tục**: Xác nhận lineage map, chuyển sang metadata catalog.\n\nHALT và chờ người dùng chọn.\n- On **[C]**: Chuyển sang \`./step-02-catalog-metadata.md\`.` },
      { file: 'step-02-catalog-metadata.md', title: 'Xây Dựng Metadata Catalog', next: 'step-03-draft-and-handoff.md',
        content: `### 1. Với mỗi dataset, định nghĩa metadata\n- Business definition (ngôn ngữ nghiệp vụ)\n- Technical owner và business steward\n- PII classification (nếu có)\n- Certification status (Draft / Certified / Deprecated)\n- Last updated, update frequency\n\n### 2. Schema registry\nNếu dùng streaming: confirm schema registry setup và compatibility mode.\n\n### 3. Menu tương tác\n- **[C] Tiếp tục**: Xác nhận metadata, chuyển sang soạn thảo.\n\nHALT và chờ người dùng chọn.\n- On **[C]**: Chuyển sang \`./step-03-draft-and-handoff.md\`.` },
      { file: 'step-03-draft-and-handoff.md', title: 'Soạn Thảo Lineage & Metadata và Bàn Giao', next: null,
        content: `### 1. Nạp template\nĐọc: 18-lineage-and-metadata-template.md\n\n### 2. Soạn thảo artifact\nLineage graph, column-level lineage, metadata catalog entries.\n\n### 3. Ghi file và cập nhật trạng thái\nLưu vào 18-lineage-and-metadata.md. Update workflow status.\n\n### 4. Menu bàn giao\n- **[C] Hoàn thành**: Gợi ý \`de-governance-and-security\`.\n- **[R] Soạn lại**: Quay lại step-01.` }
    ]
  },
  'de-governance-and-security': {
    steps: [
      { file: 'step-01-classify-data.md', title: 'Phân Loại Dữ Liệu và PII', next: 'step-02-design-controls.md',
        content: `### 1. Nạp artifact đầu vào\nĐọc: Data products (04), Lineage (18), Source assessment (05).\n\n### 2. Phân loại từng dataset\n- Public / Internal / Confidential / Restricted\n- PII identification: tên, email, CCCD, địa chỉ, tài khoản...\n- Regulatory scope: GDPR / PDPD / HIPAA / PCI-DSS?\n\n### 3. HALT bắt buộc — Xác nhận regulatory scope với Legal/Compliance\nRegulatory classification ảnh hưởng đến toàn bộ architecture. Không tự quyết định.\n\n- **[C] Đã xác nhận**: Chuyển sang thiết kế controls.\n\nHALT và chờ người dùng chọn.\n- On **[C]**: Chuyển sang \`./step-02-design-controls.md\`.` },
      { file: 'step-02-design-controls.md', title: 'Thiết Kế Access Controls và Masking', next: 'step-03-draft-and-handoff.md',
        content: `### 1. Thiết kế access control\n- Role-Based Access Control (RBAC): vai trò → quyền truy cập dataset\n- Row-Level Security (RLS) nếu cần: điều kiện lọc per-user/role\n- Column-Level Security: ẩn columns nhạy cảm per role\n\n### 2. Thiết kế PII masking (dùng Decision Matrix trong SKILL.md)\nPII level → masking method: Anonymize / Pseudonymize / Tokenize / Redact\n\n### 3. Retention và deletion policy\n- Data retention period theo từng dataset\n- Right to erasure (GDPR) process\n\n### 4. Menu tương tác\n- **[C] Tiếp tục**: Xác nhận controls, chuyển sang soạn thảo.\n\nHALT và chờ người dùng chọn.\n- On **[C]**: Chuyển sang \`./step-03-draft-and-handoff.md\`.` },
      { file: 'step-03-draft-and-handoff.md', title: 'Soạn Thảo Governance Plan và Bàn Giao', next: null,
        content: `### 1. Nạp template\nĐọc: 19-governance-and-security-template.md\n\n### 2. Soạn thảo artifact\nData classification, RBAC/RLS/CLS design, PII masking plan, retention policy.\n\n### 3. Ghi file và cập nhật trạng thái\nLưu vào 19-governance-and-security.md. Update workflow status.\n\n### 4. Menu bàn giao\n- **[C] Hoàn thành**: Gợi ý \`de-cost-and-performance-optimization\`.\n- **[R] Soạn lại**: Quay lại step-01.` }
    ]
  },
  'de-cost-and-performance-optimization': {
    steps: [
      { file: 'step-01-audit-costs.md', title: 'Audit Chi Phí và Performance', next: 'step-02-draft-and-handoff.md',
        content: `### 1. Thu thập metrics hiện tại\n- Query execution times (P50, P95, P99)\n- Storage costs per tier (Bronze/Silver/Gold)\n- Compute costs per pipeline\n- Scan volume per query\n\n### 2. Xác định top bottlenecks\n- Queries chậm nhất\n- Pipelines tốn compute nhất\n- Storage tiers không được tối ưu\n\n### 3. Đề xuất optimization\n- Partitioning / Clustering improvements\n- Query optimization (reduce full scans)\n- Storage format tuning\n- Compute scheduling (off-peak)\n- FinOps: reserved capacity vs. on-demand\n\n### 4. Menu tương tác\n- **[C] Tiếp tục**: Xác nhận optimization plan, chuyển sang soạn thảo.\n\nHALT và chờ người dùng chọn.\n- On **[C]**: Chuyển sang \`./step-02-draft-and-handoff.md\`.` },
      { file: 'step-02-draft-and-handoff.md', title: 'Soạn Thảo Optimization Plan và Bàn Giao', next: null,
        content: `### 1. Nạp template\nĐọc: 20-cost-and-performance-optimization-template.md\n\n### 2. Soạn thảo artifact\nCurrent state, bottlenecks, optimization actions, expected savings.\n\n### 3. Ghi file và cập nhật trạng thái\nLưu vào 20-cost-and-performance-optimization.md. Update workflow status.\n\n### 4. Menu bàn giao\n- **[C] Hoàn thành**: Gợi ý \`de-cicd-and-testing\`.\n- **[R] Soạn lại**: Quay lại step-01.` }
    ]
  },
  'de-cicd-and-testing': {
    steps: [
      { file: 'step-01-design-testing.md', title: 'Thiết Kế Testing Strategy', next: 'step-02-design-cicd.md',
        content: `### 1. Nạp artifact đầu vào\nĐọc: DQ rules (14), Data contracts (12), Transformation design (13).\n\n### 2. Phân loại test types\n- Unit tests: từng transformation logic\n- Integration tests: Bronze → Silver → Gold pipeline\n- Contract tests: schema và SLA compliance\n- DQ tests: từng rule trong DQ catalog\n- Regression tests: known past failures\n\n### 3. Test coverage targets\n- FAIL-severity DQ rules: 100% automated\n- Breaking-change contract violations: 100% caught in CI\n- Critical Gold table logic: > 90% coverage\n\n### 4. Menu tương tác\n- **[C] Tiếp tục**: Xác nhận testing strategy, chuyển sang CI/CD design.\n\nHALT và chờ người dùng chọn.\n- On **[C]**: Chuyển sang \`./step-02-design-cicd.md\`.` },
      { file: 'step-02-design-cicd.md', title: 'Thiết Kế CI/CD Pipeline', next: 'step-03-draft-and-handoff.md',
        content: `### 1. CI pipeline stages\n- Lint và format check\n- Unit test run\n- Contract test check\n- DQ rule validation (staging data)\n- Schema migration check\n\n### 2. CD pipeline stages\n- Deploy to staging → run integration tests → approve\n- Deploy to production → smoke test → alert if FAIL\n\n### 3. Branching strategy\n- Feature branch → PR → CI → merge to main → CD\n- Hotfix path cho production incidents\n\n### 4. Menu tương tác\n- **[C] Tiếp tục**: Xác nhận CI/CD design, chuyển sang soạn thảo.\n\nHALT và chờ người dùng chọn.\n- On **[C]**: Chuyển sang \`./step-03-draft-and-handoff.md\`.` },
      { file: 'step-03-draft-and-handoff.md', title: 'Soạn Thảo CI/CD Spec và Bàn Giao', next: null,
        content: `### 1. Không có template riêng — dùng example output format\nTest strategy, CI stages, CD stages, branching strategy.\n\n### 2. Ghi file và cập nhật trạng thái\nLưu vào 21-cicd-and-testing.md. Update workflow status.\n\n### 3. Menu bàn giao\n- **[C] Hoàn thành**: Gợi ý \`de-project-evaluation\`.\n- **[R] Soạn lại**: Quay lại step-01.` }
    ]
  },
  'de-project-evaluation': {
    steps: [
      { file: 'step-01-measure-outcomes.md', title: 'Đo Lường Kết Quả Thực Tế', next: 'step-02-evaluate-and-decide.md',
        content: `### 1. Nạp artifact đầu vào\nĐọc: KPI catalog (03), Data products (04), tất cả implementation artifacts.\n\n### 2. Đo lường từng tiêu chí thành công đã định nghĩa\nVới mỗi data product: so sánh kết quả thực tế vs tiêu chí thành công đã cam kết.\n\n### 3. Thu thập feedback từ stakeholders\n- Consumer adoption: bao nhiêu người dùng thực sự?\n- Quality complaints: bao nhiêu incidents?\n- Business value delivered: decision nào đã được đưa ra nhờ data?\n\n### 4. Menu tương tác\n- **[C] Tiếp tục**: Đã thu thập đủ data, chuyển sang đánh giá.\n\nHALT và chờ người dùng chọn.\n- On **[C]**: Chuyển sang \`./step-02-evaluate-and-decide.md\`.` },
      { file: 'step-02-evaluate-and-decide.md', title: 'Đánh Giá và Quyết Định Go/No-Go', next: 'step-03-draft-and-handoff.md',
        content: `### 1. Tổng hợp điểm mạnh và điểm yếu\n- Đã deliver được gì so với cam kết?\n- Gap nào còn lại?\n- Root cause của mỗi gap?\n\n### 2. HALT bắt buộc — Go / No-Go Decision\nNày là quyết định quan trọng nhất của project. Phải được stakeholder chính confirm.\n\nOptions:\n- **[GO] Mở rộng / Phase 2**: Đủ tiêu chí, proceed to next phase.\n- **[CONDITIONAL-GO] Go với điều kiện**: Proceed nếu và chỉ nếu [điều kiện cụ thể].\n- **[NO-GO] Dừng hoặc Pivot**: Không đủ tiêu chí, cần redesign.\n\nHALT và chờ người dùng chọn.` },
      { file: 'step-03-draft-and-handoff.md', title: 'Soạn Thảo Project Evaluation và Bàn Giao', next: null,
        content: `### 1. Nạp template\nĐọc: 22-project-evaluation-template.md\n\n### 2. Soạn thảo artifact\nKết quả thực tế, so sánh vs cam kết, go/no-go decision với rationale.\n\n### 3. Ghi file và cập nhật trạng thái\nLưu vào 22-project-evaluation.md. Update workflow status. Đánh dấu project phase COMPLETED.\n\n### 4. Menu bàn giao\n- **[C] Hoàn thành**: Project evaluation complete. Nếu GO → bắt đầu Phase 2 với \`de-business-discovery\`.\n- **[R] Soạn lại**: Quay lại step-01.` }
    ]
  },
  'de-semantic-and-serving-layer': {
    steps: [
      { file: 'step-01-route-to-skill.md', title: 'Route to Semantic or Serving Skill', next: null,
        content: `### 1. Xác định đích đến\nSkill này là routing coordinator:\n- Nếu cần thiết kế **Semantic Model** (dbt Metrics, Fabric Semantic Model, Cube): → \`de-semantic-model-design\`\n- Nếu cần thiết kế **Serving Layer** (dashboard, API, export): → \`de-serving-layer-design\`\n- Nếu cần cả hai: → bắt đầu với semantic model, sau đó serving layer\n\n### 2. Menu tương tác\n- **[S] Semantic Model**: Activate \`de-semantic-model-design\`.\n- **[V] Serving Layer**: Activate \`de-serving-layer-design\`.\n- **[B] Cả hai**: Bắt đầu với Semantic Model.\n\nHALT và chờ người dùng chọn.` }
    ]
  },
};

function buildStepFile(skillName, step) {
  return `# ${step.title}

## Quy tắc
- Trả lời bằng \`communication_language\` đã cấu hình.
- HALT tại checkpoint và chờ người dùng xác nhận.

## Hướng dẫn

${step.content}
${step.next ? `\n- On **[C]**: Chuyển sang \`./\${step.next}\`.` : ''}
`;
}

let created = 0;
for (const [skillName, config] of Object.entries(STEPS_MAP)) {
  const stepsDir = path.join(skillsDir, skillName, 'steps');
  if (fs.existsSync(stepsDir)) {
    console.log(`SKIP (steps/ exists): ${skillName}`);
    continue;
  }
  fs.mkdirSync(stepsDir, { recursive: true });
  for (const step of config.steps) {
    const stepPath = path.join(stepsDir, step.file);
    const content = `# ${step.title}\n\n## Quy tắc\n- Trả lời bằng \`communication_language\` đã cấu hình.\n- HALT tại checkpoint và chờ người dùng xác nhận.\n\n## Hướng dẫn\n\n${step.content}\n`;
    fs.writeFileSync(stepPath, content);
    created++;
  }
  console.log(`CREATED steps/ for: ${skillName} (${config.steps.length} steps)`);
}
console.log(`\nTotal step files created: ${created}`);
