# Data Source Readiness Checklist

This checklist is used during Phase 05 (Data Source Assessment) to confirm that upstream sources are fully characterized and ready for ingestion pipeline development.

---

## 1. Source Characterization
- [ ] **Write pattern identified**: Source is classified as CRUD (requires CDC or snapshot) or Insert-Only (supports incremental append).
- [ ] **Transaction volume documented**: Expected daily record count, data size (GB), and peak throughput (TPS) are measured.
- [ ] **Data types documented**: All columns, types, nullable constraints, and primary keys are cataloged.
- [ ] **Watermark keys identified**: High-watermark columns for incremental extraction (`updated_at`, `created_at`, `sequence_id`) are confirmed.

## 2. Access & Connectivity
- [ ] **Access credentials secured**: No hardcoded credentials — all secrets stored in a secrets manager (Key Vault, AWS Secrets Manager, etc.).
- [ ] **Least-privilege role provisioned**: Read-Only access to target tables; no DDL or DML permissions granted to ingestion service account.
- [ ] **Network path validated**: VPC peering, IP whitelist, or VPN connection tested successfully.
- [ ] **Read replica available**: For CDC or high-volume extractions, a dedicated read replica is confirmed to avoid impact on the source production OLTP system.

## 3. CDC-Specific Requirements (if applicable)
- [ ] **Transaction log retention confirmed**: Binlog / WAL / CDC log retention ≥ 24 hours (minimum for recovery window).
- [ ] **Log-based CDC supported**: Source DB version supports log-based CDC (e.g., PostgreSQL logical replication, MySQL binlog row format).

## 4. Schema & Data Contract
- [ ] **Schema documented**: Column names, types, and constraints recorded in the source assessment template.
- [ ] **PII columns flagged**: All columns containing PII, financial, or health data are identified.
- [ ] **Upstream SLA agreement signed**: Source team confirms response time for issues, scheduled maintenance windows, and schema change notification process.
- [ ] **Schema evolution notice agreed**: Source team commits to 5 business days notice before any DDL migration.

## 5. Data Quality Pre-Assessment
- [ ] **Null rates sampled**: Columns have been sampled for null rate to identify quality risks before ingestion.
- [ ] **Duplicate key risk assessed**: Whether the source enforces primary key constraints, or duplicates are possible, is documented.
- [ ] **Known data quirks documented**: Any irregular patterns (e.g., historical null IDs, mixed timezone timestamps, special character encoding) are noted.
