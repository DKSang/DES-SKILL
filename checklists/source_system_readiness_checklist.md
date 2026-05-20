# Source System Readiness Checklist

This checklist is used during Phase 05 (Data Source Assessment) to evaluate the capability, stability, and structure of upstream data sources before developing ingestion pipelines.

---

## 1. Upstream Characteristics & Write Patterns
- [ ] **Write pattern identified**: Determine if the source writes via `CRUD` (requires CDC or snapshotting) or `Insert-Only` (allows incremental append).
- [ ] **Transaction volumes documented**: Expected daily volume, record size, and peak transaction rates are measured.
- [ ] **Log retention verified (for CDC)**: For transactional databases using CDC, the binlog/transaction log retention window is confirmed (minimum 24 hours).
- [ ] **API limits analyzed**: For API-based sources, request rate limits, token expiration, and pagination schemes are documented.

## 2. Ingestion Connection & Security
- [ ] **Access credentials secured**: No hardcoded API keys or database passwords. All access credentials reside in a secure Key Vault/Secret Manager.
- [ ] **Access role restricted**: Database read permissions follow the principle of least privilege (Read-Only access to target tables/schemas).
- [ ] **Network path opened**: VPC peering, IP whitelist, or VPN connection between source and ingestion cluster is validated and tested.

## 3. Data Schema & Contracts
- [ ] **Schema structure documented**: The source tables, fields, data types, and primary key constraints are cataloged.
- [ ] **PII columns flagged**: Data columns containing Personally Identifiable Information (PII) or sensitive health/financial metrics are cataloged.
- [ ] **Watermark keys defined**: High-watermark columns (e.g. `updated_at`, `created_at`, incremental transaction IDs) are identified.

## 4. Operational SLAs & Change Notice
- [ ] **Source team contact identified**: A primary technical contact or team who owns the source system is assigned.
- [ ] **Upstream downtime schedule mapped**: Scheduled maintenance windows or nightly batch jobs on the source system are documented.
- [ ] **Schema evolution notice agreed**: An SLA agreement is signed with the source team to notify data engineering at least 5 business days *prior* to any database schema migration.
