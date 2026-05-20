# Serving and Governance Checklist

This checklist is used during Phase 16 (Semantic Model Design), Phase 17 (Serving Layer Design), Phase 18 (Lineage and Metadata), and Phase 19 (Governance and Security) to secure access, map column lineage, and deliver stable data products.

---

## 1. Serving Layer Design & SLAs
- [ ] **Serving pattern specified**: Pattern is defined (Push via Reverse ETL, Pull via direct warehouse queries, semantic layer query, or API/microservice).
- [ ] **Performance SLAs established**: Maximum latency target for query responses is set (e.g., sub-second for apps, under 10 seconds for BI dashboards).
- [ ] **Concurrency sizing verified**: Serving engine is scaled to handle expected concurrent users without queuing.
- [ ] **Caching configured**: Standard BI query cache or materialization schedules are set to reduce warehouse scan costs.

## 2. Security & Access Control
- [ ] **Access policy active**: Permissions use Role-Based Access Control (RBAC) to isolate analyst, developer, and service accounts.
- [ ] **Row-Level Security (RLS) defined**: Multi-tenant data or regional data filters are automatically injected based on the user's role.
- [ ] **Audit logs enabled**: All read query history, user logins, and data exports are logged and retained for security audits.

## 3. PII & Privacy Compliance
- [ ] **PII classification completed**: Sensitive fields (emails, phone numbers, IP addresses, financial columns) are flagged.
- [ ] **PII masking policy active**: Sensitive fields use one of the following methods:
  - `Hashing`: SHA-256 with salt (e.g. for user mapping keys).
  - `Encryption / Tokenization`: Reversible only for authorized roles.
  - `Redaction`: Replaced with Null/masking string for general access.
- [ ] **Right-to-be-forgotten (GDPR) automated**: Procedures to hard-delete customer records upon request are implemented.

## 4. Metadata, Lineage & Semantic Layer
- [ ] **Data catalog updated**: Target datasets and columns are documented with definitions and registered in the corporate catalog.
- [ ] **Column lineage complete**: Column mapping from raw source system field down to Gold aggregate table is tracked.
- [ ] **Metrics layer defined**: Business definitions (e.g. "active user", "recurring revenue") are defined in a single metrics code file to prevent calculation discrepancies across BI tools.
