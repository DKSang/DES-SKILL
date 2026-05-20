# Transformation Design

This template is used during Phase 13 (Transformation Design) to document the field-level mapping, business rules, incremental strategy, and test plan for each transformation job between layers.

---

## 1. Transformation Scope

*   **Pipeline / Job Name**: (e.g., `silver_orders_transform`)
*   **Source Layer → Target Layer**: Bronze → Silver / Silver → Gold *(choose)*
*   **Trigger**: Schedule / Event / Upstream Sensor
*   **Idempotent**: Yes / No — *(must be Yes before production approval)*
*   **Transformation Tool**: (e.g., dbt, Spark SQL, Python + Pandas, Azure Synapse Analytics)

---

## 2. Source-to-Target Column Mapping

Document every column derivation between source and target:

| Target Column | Target Type | Source Column(s) | Source Dataset | Transformation Rule / Derivation | Edge Cases / Nulls |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `order_id` | `STRING` | `id` | `orders_bronze` | Direct cast — `CAST(id AS STRING)` | NEVER NULL — pipeline FAILS if null |
| `order_date` | `DATE` | `created_at` | `orders_bronze` | `CAST(CONVERT_TIMEZONE('UTC', created_at) AS DATE)` | Default to `1900-01-01` sentinel if null |
| `total_amount_usd` | `DECIMAL(18,2)` | `amount`, `currency_code` | `orders_bronze` | `amount * ref_fx.rate_to_usd` WHERE `ref_fx.date = order_date` | Default to 0.00 if FX rate missing |
| `customer_segment` | `STRING` | `customer_id` | `customers_silver` | Lookup from `dim_customers.segment` via left join | `'Unknown'` if no match |
| `is_high_value` | `BOOLEAN` | `total_amount_usd` | Derived | `total_amount_usd > 1000.00` | FALSE if amount null |

---

## 3. Business Rules

Document named business rules and their logic:

| Rule ID | Rule Name | Applies To Column(s) | Logic Description | Edge Cases |
| :--- | :--- | :--- | :--- | :--- |
| BR-001 | High Value Order Flag | `is_high_value` | Order is high-value if `total_amount_usd > 1000` after FX conversion | Must use USD-converted value, not raw source amount |
| BR-002 | Active Customer | `is_active_customer` | Customer is active if they placed ≥1 order in the last 30 days | Calculated at time of Silver refresh — may lag 1 day |
| BR-003 | Cancelled Order Exclusion | `order_status` | Orders with `CANCELLED` status are excluded from Gold revenue fact | Kept in Silver with status flag for auditing |

---

## 4. Incremental Strategy & State Management

*   **Incremental Mode**: Full Refresh / Incremental Merge / Partition Overwrite *(choose)*
*   **Watermark Column**: (e.g., `updated_at` or `des_ingestion_timestamp` from Bronze)
*   **Lookback Window**: (e.g., Merge looks back 7 days of Bronze partitions to catch late-arriving CDC events)
*   **Write Mode**: (e.g., `MERGE INTO silver.orders ON order_id MATCHED → UPDATE, NOT MATCHED → INSERT`)
*   **Checkpoint Storage**: (e.g., Last successful `max(des_ingestion_timestamp)` stored in Airflow Variable `silver_orders_watermark`)
*   **Late-Arriving Data Handling**: (e.g., Records arriving after the daily SLA window are flagged `is_late_arrival = TRUE` and reprocessed in the next run)

---

## 5. Backfill Strategy

*   **Backfill Trigger**: (e.g., Manual Airflow CLI `airflow dags backfill -s 2024-01-01 -e 2024-03-31`)
*   **Backfill Safety**: (e.g., Partition overwrite ensures no duplicate rows when reprocessing historical ranges)
*   **Estimated Backfill Duration**: (e.g., 1 year of history ≈ 4 hours at current volume)
*   **Data Consistency Check Post-Backfill**: (e.g., Compare row counts and `SUM(revenue_usd)` between Silver and source system report)

---

## 6. Test Plan

| Test Type | Test Description | Tool | Expected Result | Trigger |
| :--- | :--- | :--- | :--- | :--- |
| Unit | BR-001 High Value Flag logic | dbt test / pytest | `is_high_value = TRUE` when `total_amount_usd > 1000` | PR merge |
| Schema | `order_id` is NOT NULL and unique | dbt `not_null` + `unique` | Zero nulls, zero duplicates | Every pipeline run |
| Referential | `customer_sk` exists in `dim_customers` | dbt `relationships` test | Zero orphan FKs | Every pipeline run |
| Row Count | Today's count ≥ 90% of 7-day average | Python / Great Expectations | `row_count >= p7_avg * 0.9` | Every pipeline run |
| Backfill | Run 30-day backfill → compare totals vs. report | Manual SQL | Variance < 0.01% | Before each major release |
