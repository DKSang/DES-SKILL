---
name: de-governance-and-security
description: Use when defining ownership, stewardship, access control, privacy, lineage, retention, compliance, and change management for data products.
---

# de-governance-and-security

## When To Use

Use before production release and whenever sensitive data, shared metrics, external access, compliance obligations, or cross-team ownership is involved.

## Purpose

Create governance and security controls that make the data platform trustworthy, compliant, and accountable — covering PII classification, access control, retention enforcement, and audit logging.

## Inputs Required

- Dataset inventory (all Silver and Gold datasets).
- Data contracts (`12-data-contracts.md`).
- Semantic and serving design.
- Applicable regulatory frameworks (GDPR, CCPA, HIPAA, PCI-DSS).
- Organization roles and ownership model.

## Decision Matrix — Data Classification

| Sensitivity Level | Examples | Access Policy | PII Treatment |
| :--- | :--- | :--- | :--- |
| **Public** | Aggregated stats, published reports | Open read access | None needed |
| **Internal** | Revenue by region, product metrics | Authenticated employees only | None needed |
| **Confidential** | Raw orders, pricing data | Role-based; need-to-know only | No PII but still restricted |
| **PII** | Names, emails, phone, IP address | Strict RBAC; masked in Silver+ | Hash / Redact / Tokenize |
| **Regulated** | Credit card, health data | RBAC + RLS + encryption at rest | Tokenization + audit trail required |

## Decision Matrix — PII Masking Method

| PII Category | Recommended Method | Reversible? | When to Use |
| :--- | :--- | :--- | :--- |
| Email, name, username | **SHA-256 hash + salt** | No | Join keys where value not needed |
| Phone, ID numbers | **Partial redaction** (`+84-***-1234`) | No | Display only, no join requirement |
| Credit card numbers | **Tokenization** (format-preserving) | Yes (authorized roles) | PCI-DSS regulated data |
| IP address | **Pseudonymization** (mask last octet) | Partial | Analytics requiring geo, not identity |
| Health records | **Encryption at column level** | Yes (with key) | HIPAA regulated data |

## Step-By-Step Process

1. Classify all datasets using the Data Classification matrix.
2. Inventory every PII column; assign masking method using the Masking Method matrix.
3. Define RBAC roles and permissions per dataset (analyst, engineer, admin, partner).
4. Configure Row-Level Security (RLS) for multi-tenant or regional datasets.
5. Enable audit logging for all query executions, user logins, and data exports.
6. Define retention policy per dataset (aligned with GDPR/PCI-DSS/HIPAA as applicable).
7. Configure automated lifecycle rules (deletion after retention window).
8. Document Right-to-be-Forgotten procedure for GDPR subject requests.
9. Define schema change control process (approval required for PII/regulated datasets).

## Output File


The output_file path is configured in `customize.toml`. Default:

Write the final artifact to:

`{project-root}/_des-output/planning-artifacts/19-governance-and-security.md`

Use the matching template from:

`{skill-root}/../../templates/19-governance-and-security-template.md`

After writing the file, summarize the file path and recommend the next skill.

## Required Outputs

- Dataset classification register.
- PII column inventory with masking methods.
- RBAC/RLS access control matrix.
- Retention and deletion policy per dataset.
- Audit log configuration.
- GDPR Right-to-be-Forgotten procedure.

## Quality Checklist

- [ ] Every dataset has a sensitivity classification label.
- [ ] Every PII column has a masking method applied at Silver layer or before.
- [ ] Bronze PII access is restricted to `bronze-raw-readers` role only.
- [ ] RBAC roles are tested with role-specific test accounts in staging.
- [ ] RLS filters are tested for every consumer role.
- [ ] Audit logs are enabled and retained for ≥ 12 months.
- [ ] Automated deletion rules are active for all datasets past their retention window.
- [ ] GDPR deletion procedure is documented and tested.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Treating governance as documentation after release | Access control gaps are exploited before documentation is written |
| Broad read access to Bronze/raw data | Raw PII is exposed without masking; compliance breach risk |
| Service accounts with admin permissions | A compromised service account can exfiltrate or delete all data |
| No audit log on data exports | GDPR requires proof of who accessed PII data and when |
| Retention policy documented but not enforced | Over-retained PII is a GDPR violation; documentation is not a defense |
| Manual GDPR deletion without testing | Partial deletions leave PII in derived tables; incomplete compliance |

## Undercurrent Coverage

| Undercurrent | Action Required at This Phase |
| :--- | :--- |
| Security | This is the core security phase — all access control, encryption, and audit logging defined here |
| Data Management | Catalog entries updated with classification; stewards assigned; lineage verified |
| DataOps | Schema change control process enforced via CI/CD PR gates for PII datasets |
| Data Architecture | RBAC/RLS design may require architectural changes (separate schemas, federated catalog) |
| Orchestration | Retention lifecycle deletion jobs scheduled and monitored |
| Software Engineering | Credentials never in code; column masking implemented at Silver transform layer, not ad-hoc |

## Handoff To The Next Skill

Next use `de-cost-and-performance-optimization` to review partitioning, compute, query performance, and platform cost before final CI/CD and release controls.
