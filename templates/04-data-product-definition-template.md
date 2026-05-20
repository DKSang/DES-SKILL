# Data Product Definition

This template is used during Phase 04 (Data Product Definition) to formally specify a data product as a managed, consumer-facing artifact with an explicit contract, owner, and quality commitment.

> **Data Product Principle**: A data product is not a table or a pipeline — it is a managed, reliable, documented, and consumer-ready data asset with a clear owner and SLA.

---

## 1. Product Summary

*   **Product Name**: (e.g., `Regional Revenue Dashboard Dataset`)
*   **Product ID**: DP-[ID] *(e.g., DP-001)*
*   **Version**: `v1.0.0`
*   **Status**: Draft / Active / Deprecated
*   **Product Owner**: (Individual accountable for accuracy and reliability)
*   **Domain**: (e.g., Sales, Customer, Finance)
*   **Business Purpose**: (e.g., "Provides certified weekly revenue by region, used for executive reporting and sales team territory planning.")

---

## 2. Consumers & Use Cases

| Consumer / Team | Use Case | Decision or Action Enabled | Access Method | SLA Expectation |
| :--- | :--- | :--- | :--- | :--- |
| *Regional Sales Managers* | Weekly territory performance review | Reallocate field reps to underperforming regions | Power BI Dashboard | Available by 8AM Monday |
| *CFO* | Quarterly revenue forecast approval | Approve or adjust financial forecast | Power BI Dashboard | Available by 8AM 1st of each month |
| *Finance Team* | Monthly financial close reconciliation | Reconcile bookings against ERP | CSV file export (SFTP) | Delivered by 6AM on 1st of month |

---

## 3. Data Product Contract

| Attribute | Value |
| :--- | :--- |
| **Grain** | One row per `order_id` (Fact table) / One row per `region + date` (Aggregate table) |
| **Refresh Frequency** | Daily — pipeline runs at 04:00 UTC |
| **Availability SLA** | Data available by 07:00 UTC daily |
| **Data Freshness** | Data represents events up to midnight of the previous day |
| **Completeness Guarantee** | ≥ 99.5% of expected daily records present |
| **Latency Budget** | End-to-end ingestion to serving in < 3 hours |
| **Owner** | data-platform-team |
| **Criticality** | High — executive reporting depends on this product |
| **Data Classification** | Confidential — internal only |
| **PII** | No PII exposed in this product (customer names hashed) |

---

## 4. Inputs & Outputs

| Type | Dataset / Source | Layer | Purpose | Schema Documented? |
| :--- | :--- | :--- | :--- | :--- |
| Input | `orders_silver` | Silver | Primary order data — deduplicated, standardized | Yes |
| Input | `dim_customers` | Gold | Customer segment lookup | Yes |
| Input | `ref_region_targets` | Reference | Revenue targets by region and week (static Google Sheet) | Yes |
| Output | `fact_orders` | Gold | Certified order fact table for BI consumption | Yes |
| Output | `gold.regional_revenue_weekly` | Gold | Pre-aggregated weekly summary for Power BI performance | Yes |

---

## 5. Success & Failure Criteria

*   **Success Criteria**:
    - Revenue figures match Finance ERP system within 0.5% variance.
    - Dashboard loads in < 5 seconds for standard weekly filter.
    - Product is available by 7AM with zero manual intervention.

*   **Failure Triggers** (when the product must be flagged as degraded or unavailable):
    - Data freshness SLA missed (not available by 8AM).
    - Row count drops > 20% below expected without explanation.
    - Any FAIL-severity DQ rule triggers.

*   **Incident Response**: (e.g., Automatic alert to `#data-serving-ops` Slack channel. Product owner notified by 8:30AM if issue unresolved.)

---

## 6. Risks & Assumptions

*   **Risks**:
    - Source system schema change from `sales_db` will break Bronze ingestion — mitigation: schema contract agreed.
    - FX rate reference table may lag by 1 day — mitigation: document as known limitation in product description.
*   **Assumptions**:
    - Revenue targets are maintained in the Google Sheet by the VP Sales team. Any gap in the sheet = zero target, not missing data.
    - CFO has approved the metric definition for "Gross Revenue" as documented in the KPI catalog.
