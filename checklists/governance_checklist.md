# Governance Checklist

This checklist is used during Phase 19 (Governance and Security) to verify that data assets are classified, access is controlled, PII is properly masked, and compliance obligations are met.

---

## 1. Data Classification
- [ ] **All datasets classified**: Every managed dataset has a sensitivity label (Public / Internal / Confidential / PII / Regulated).
- [ ] **PII columns inventoried**: All columns containing personal data (names, emails, phone numbers, IPs, financial data) are cataloged in the PII inventory.
- [ ] **Applicable regulations identified**: Each PII or regulated dataset lists the applicable regulations (GDPR, CCPA, HIPAA, PCI-DSS).

## 2. PII Masking & Privacy Controls
- [ ] **Masking method assigned per PII column**: Each PII column has an explicit masking method — Hash (SHA-256+salt), Tokenization, Redaction, or Pseudonymization.
- [ ] **Masking applied at Silver layer**: Raw PII is only present in Bronze (restricted access); masking is applied before data reaches Silver.
- [ ] **Right-to-be-forgotten process exists**: An automated or documented procedure to delete all records for a specific data subject upon request.
- [ ] **Deletion automation tested**: GDPR suppression jobs have been tested in staging for correctness.

## 3. Access Control
- [ ] **RBAC roles defined**: Role-based access control policies are deployed for all datasets (analyst, engineer, admin, partner roles).
- [ ] **Row-Level Security configured**: Multi-tenant or regional datasets apply RLS filters automatically based on user role/attribute.
- [ ] **Principle of least privilege enforced**: Service accounts and users have only the minimum permissions required.
- [ ] **Audit logs enabled**: All query executions, user logins, and data exports are logged and retained for ≥12 months.

## 4. Data Catalog & Lineage
- [ ] **Datasets registered in catalog**: All Silver and Gold datasets have catalog entries with business description, owner, classification, and column definitions.
- [ ] **Column-level lineage tracked**: Lineage from source field to serving column is documented for all critical metrics.
- [ ] **Data steward assigned**: Each domain has a named Business Steward (accuracy) and Technical Steward (pipeline health).

## 5. Retention & Lifecycle Compliance
- [ ] **Retention policy per dataset**: Every dataset has a defined retention period aligned with regulatory requirements.
- [ ] **Automated deletion rules active**: Lifecycle rules enforce hard-deletion after the retention window.
- [ ] **Deletion evidence recorded**: Completed data deletions (especially GDPR subject requests) are logged with timestamps and audit trail.
