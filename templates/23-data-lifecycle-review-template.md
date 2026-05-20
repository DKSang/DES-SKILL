# Data Lifecycle Review

This template is used periodically (recommended quarterly) to audit the full lifecycle of data assets — from ingestion through to archival and deletion — ensuring retention policies align with business requirements, regulatory obligations, and FinOps cost targets.

---

## 1. Lifecycle Review Scope

*   **Review Date**: YYYY-MM-DD
*   **Review Owner**: (Data Platform Lead or Governance Lead)
*   **Domains in Scope**: (e.g., Sales, Customer, Events, Payments)
*   **Regulatory Context**: (e.g., GDPR Article 5 "Storage Limitation", CCPA, PCI-DSS 7-year retention)

---

## 2. Storage Tier Audit

Map each dataset across storage lifecycle tiers:

| Dataset | Total Size | Current Tier | Hot Access Period | Cool/Warm Transition (Days) | Archive Transition (Days) | Retention End (Days) | Automated Lifecycle Rule Active? |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `events_bronze` | 45 TB | Hot | Last 3 days | Day 7 (auto-tiered) | Day 30 (auto-archived) | Day 90 (auto-deleted) | Yes |
| `customers_silver` | 8 TB | Hot | Ongoing (active CRM) | None | Day 365 | 3 years from last activity | Partial — deletion not yet automated |
| `payments_silver` | 12 TB | Hot | Ongoing | None | Day 730 | 7 years (PCI-DSS) | No — manual review required |
| | | | | | | | |

---

## 3. Retention Policy Compliance Check

Verify that each dataset's actual retention aligns with its agreed policy:

| Dataset | Agreed Retention | Actual Oldest Record Date | Compliance Status (Compliant / Over-Retained / Under-Retained) | Action Required |
| :--- | :--- | :--- | :--- | :--- |
| `events_bronze` | 90 days | 2024-01-01 | Over-Retained (stored 150+ days) | Enable automated deletion rule |
| `customers_silver` | 3 years from last activity | 2021-06-15 (inactive users) | Over-Retained | Run GDPR suppression job for users inactive > 3 years |
| | | | | |

---

## 4. Right-to-be-Forgotten & Data Subject Requests

Track fulfillment of user-initiated data deletion requests:

| Request ID | Request Date | Subject Type (Customer / Employee) | Datasets Affected | Deletion Completed? | Completion Date | Evidence Reference |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| GDPR-2024-001 | 2024-03-10 | Customer | `customers_silver`, `orders_silver` | Yes | 2024-03-11 | Deletion audit log ticket #2241 |
| | | | | | | |

---

## 5. FinOps Lifecycle Review

Evaluate storage costs and identify archival/deletion opportunities:

*   **Total Storage Cost This Quarter**: (e.g., $4,500 / month; up from $3,800 last quarter)
*   **Top Cost Drivers**: (e.g., `events_bronze` — 45 TB at Hot tier when 95% of queries only access last 3 days)
*   **Recommended Optimizations**:
    1.  Transition `events_bronze` data older than 7 days to Cool tier → Estimated saving: $600/month.
    2.  Enable compaction on `orders_silver` (merge 50K small files into 500 larger Parquet files) → Estimated saving: $200/month.
*   **Estimated Total Savings from This Review**: $XXX / month

---

## 6. Action Items & Next Review

| Action | Owner | Target Date | Status |
| :--- | :--- | :--- | :--- |
| Enable automated deletion rule for `events_bronze` | data-platform-team | YYYY-MM-DD | Open |
| Run GDPR suppression job for inactive customers > 3 years | data-governance-team | YYYY-MM-DD | Open |
| | | | |

*   **Next Scheduled Review Date**: YYYY-MM-DD *(recommend every quarter)*
