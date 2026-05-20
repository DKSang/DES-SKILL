# Governance and Security Plan

This template is used during Phase 19 (Governance and Security) to define the access control model, PII classification, data retention policy, and compliance evidence for managed data assets.

---

## 1. Dataset Governance Scope

*   **Domains in Scope**: (e.g., Sales, Customer, Financial, HR)
*   **Regulatory Frameworks**: (e.g., GDPR, CCPA, HIPAA, PCI-DSS — list applicable regulations)
*   **Governance Lead**: (Name and team responsible for ensuring compliance)
*   **Review Cycle**: (e.g., Governance policy reviewed every 6 months or after any major schema change)

---

## 2. Dataset Classification

Classify every dataset by its sensitivity level:

| Dataset | Domain | Data Classification (Public / Internal / Confidential / PII / Regulated) | Contains PII? (Yes/No) | Applicable Regulation | Business Owner |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `customers_silver` | Customer | PII | Yes | GDPR, CCPA | crm-product-owner |
| `orders_silver` | Sales | Confidential | No | None | sales-director |
| `payments_silver` | Finance | Regulated | Yes | PCI-DSS | finance-director |
| | | | | | |

---

## 3. PII Column Inventory & Masking Policy

For every PII column, define the masking method applied at each serving layer:

| Source Column | Dataset | PII Category | Bronze Treatment | Silver Treatment | Gold Treatment | Masking Method |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `email` | `customers` | Direct Identifier | Raw (restricted access) | SHA-256 hash + salt | Excluded or hash only | Hash (non-reversible) |
| `phone_number` | `customers` | Direct Identifier | Raw (restricted access) | Partial redaction (`+84-***-***-1234`) | Excluded | Redaction |
| `credit_card_number` | `payments` | Financial PII | Tokenized at ingestion | Token only | Excluded | Tokenization (reversible for authorized roles only) |
| `ip_address` | `events` | Indirect Identifier | Raw (restricted) | Last octet masked (`192.168.1.xxx`) | Excluded | Pseudonymization |
| | | | | | | |

---

## 4. Access Control Matrix (RBAC / RLS)

Define who can access what, at what level:

| Role / User Group | Dataset | Access Level (Read / Write / Admin) | Row-Level Security Filter | Approval Owner |
| :--- | :--- | :--- | :--- | :--- |
| `analyst-group` | `orders_silver` | Read | `WHERE region = USER_REGION()` | data-lead |
| `ml-engineers` | `customers_silver` | Read | No PII columns exposed (hashed email only) | ml-platform-team |
| `data-platform-team` | All datasets | Read + Write | No filter | engineering-director |
| `finance-auditors` | `payments_silver` | Read | `WHERE fiscal_year = CURRENT_YEAR()` | cfo |
| | | | | |

---

## 5. Data Retention & Deletion Policy

| Dataset | Data Classification | Retention Period (Active) | Archive Tier Transition | Hard Deletion Trigger | Deletion Automation (Yes/No) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `customers_silver` | PII (GDPR) | 3 years from last activity | Move to cold archive after 1 year | User submits deletion request ("Right to be Forgotten") | Yes — automated via `gdpr_deletion_job` |
| `events_bronze` | Internal | 90 days | Move to archive after 30 days | Auto-expire after 90 days | Yes — lifecycle rule on object storage |
| `payments_silver` | PCI-DSS Regulated | 7 years | Move to archive after 2 years | Manual audit review required | No — manual deletion after legal sign-off |
| | | | | | |

---

## 6. Compliance Evidence & Change Control

*   **Audit Logs Enabled**: (e.g., All query history, user logins, and data export events are logged and retained for 12 months in `audit_log` table.)
*   **Last Compliance Review Date**: YYYY-MM-DD
*   **Pending Compliance Actions**: (e.g., "GDPR deletion automation to be tested in staging before production rollout — due by YYYY-MM-DD.")
*   **Change Control Procedure**: (e.g., Any schema change to a PII or Regulated dataset requires written approval from the Governance Lead before merging to main branch.)
