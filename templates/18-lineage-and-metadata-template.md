# Lineage and Metadata Catalog

This template is used during Phase 18 (Lineage and Metadata) to document column-level data lineage from source systems through to serving layers, and to register datasets in the corporate data catalog.

---

## 1. Dataset Catalog Registration

For each key dataset, register the following metadata in the data catalog:

| Dataset ID | Dataset Name | Layer (Bronze/Silver/Gold) | Domain | Business Owner | Technical Owner | Data Classification (Public/Internal/Confidential/PII) | Catalog Status (Draft/Registered/Deprecated) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| DS-001 | `orders_silver` | Silver | Sales | billing-manager@co | data-platform-team | Confidential | Registered |
| | | | | | | | |

*   **Column Glossary**: (e.g., Define what `total_amount` means: "Sum of all order line items after discount, before tax, in USD.")
*   **Business Terms Linked**: (e.g., This dataset powers the "Gross Revenue" KPI as defined in the Metrics Layer.)

---

## 2. Column-Level Lineage Map

Trace each significant column from its original source to the final serving artifact:

| Target Column | Target Table | Upstream Source Column | Upstream Table / System | Transformation Applied | Pipeline / Job Name |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `revenue_usd` | `sales_gold.daily_summary` | `total_amount` | `sales_db.orders` | Cast to DECIMAL(18,2); multiply by exchange_rate_usd | `daily_sales_aggregate` |
| `customer_email_hash` | `customers_silver` | `email` | `crm_db.customers` | SHA-256 hash with salt `CRM_SALT_KEY` | `customer_ingest_cdc` |
| | | | | | |

*   **Lineage Graph Tool**: (e.g., Lineage visualized in OpenLineage + Marquez. Auto-captured via dbt lineage graph.)

---

## 3. Metadata Fields Standard

Define the standard technical metadata columns added to all managed datasets:

| Metadata Field | Data Type | Required | Purpose |
| :--- | :--- | :--- | :--- |
| `des_ingestion_timestamp` | `TIMESTAMP` | Yes | UTC time the record was written to storage |
| `des_source_system` | `STRING` | Yes | Identifier of the source system |
| `des_source_offset` | `STRING` | Yes | Kafka offset, file path, or CDC LSN |
| `des_pipeline_run_id` | `STRING` | Yes | Airflow/Prefect run ID for traceability |
| `des_payload_hash` | `STRING` | Yes | SHA-256 of raw payload; detects source tampering |
| `des_schema_version` | `STRING` | No | Schema version at the time of ingestion |

---

## 4. Schema Change History

Track schema evolution events for each managed dataset:

| Change Date | Dataset | Change Type (Add / Remove / Rename / Type Change) | Column Affected | Migration Notes | Approved By |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 2024-03-15 | `orders_silver` | Add | `discount_amount DECIMAL(10,2)` | Back-filled with 0.00 for historical records | data-lead |
| | | | | | |

---

## 5. Data Stewardship & Ownership

*   **Business Steward**: (Person responsible for defining business rules and validating data accuracy — typically a Product/Domain lead.)
*   **Technical Steward**: (Person responsible for pipeline health, schema evolution, and quality checks — typically a Senior Data Engineer.)
*   **Escalation Path**: (e.g., Data quality incident → Technical Steward (30 min SLA) → Business Steward (if business impact confirmed) → VP/Director (if SLA breach > 2 hours).)
*   **Access Request Process**: (e.g., Request via `#data-access` Slack channel → approved by Business Steward → provisioned by data platform team within 1 business day.)
