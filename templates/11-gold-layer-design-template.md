# Gold Layer Design

This template is used during Phase 11 (Gold Layer Design) to design the analytical presentation layer — pre-aggregated, consumer-optimized datasets structured for BI, reporting, and ML feature consumption.

> **Gold Layer Principle**: Model data for how downstream consumers *query* it, not how the source stores it. Performance and clarity matter. Choose aggregation grain based on the lowest required level of analytical detail.

---

## 1. Consumer Requirements & Modeling Choice

*   **Primary Consumers**: (e.g., BI Analysts via Power BI, ML Engineers via Feature Store, Finance via scheduled exports)
*   **Query Access Patterns**: (e.g., Filter by `order_date`, `region`, `product_category`. Group by `customer_segment`. Aggregate `revenue`, `quantity_sold`.)
*   **Analytical Modeling Pattern Selected**: Kimball Dimensional / Inmon Normalized / One Big Table (OBT)
    - **Rationale**: (e.g., "Kimball chosen because team uses Power BI star schema relationships and business analysts prefer simple joins to a central fact table.")

---

## 2. Gold Dataset Inventory

| Gold Dataset | Type (Fact / Dimension / Mart / OBT) | Grain | Primary Key | Source Silver Dataset(s) | Consumer(s) | Refresh SLA |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `fact_orders` | Fact | One row per order | `order_sk` (surrogate) | `orders_silver` | Power BI, Finance | By 7AM daily |
| `dim_customers` | Dimension (SCD Type 2) | One row per customer version | `customer_sk` | `customers_silver` | Power BI | By 7AM daily |
| `dim_products` | Dimension (SCD Type 1) | One row per current product | `product_sk` | `products_silver` | Power BI, ML | By 7AM daily |
| `dim_date` | Dimension (Static) | One row per calendar day | `date_key` | Generated | All BI datasets | Static (loaded once) |

---

## 3. Fact Table Design

For each Fact table, document the grain, measures, and foreign keys:

**Fact: `fact_orders`**
*   **Grain**: One row per completed order transaction
*   **Measures (additive)**:
    - `revenue_usd DECIMAL(18,2)` — Total order revenue in USD
    - `quantity_sold INT` — Total units sold
    - `discount_amount_usd DECIMAL(18,2)` — Total discount applied
*   **Degenerate Dimensions** (keys on fact with no separate dim table):
    - `order_id STRING` — Natural key from source system
*   **Foreign Keys to Dimensions**:
    - `customer_sk → dim_customers.customer_sk`
    - `product_sk → dim_products.product_sk`
    - `date_key → dim_date.date_key`
*   **Orphan FK Handling**: (e.g., If `customer_sk` not found in `dim_customers`, use sentinel key `-1` mapped to "Unknown Customer")

---

## 4. Dimension Table Design

For each Dimension, document SCD type and key attributes:

**Dimension: `dim_customers` (SCD Type 2)**

| Column | Type | SCD Role | Notes |
| :--- | :--- | :--- | :--- |
| `customer_sk` | `BIGINT` | Surrogate Key | Auto-increment, never reused |
| `customer_id` | `STRING` | Natural Key | FK from source system |
| `customer_name` | `STRING` | Attribute | Tracked for changes |
| `customer_segment` | `STRING` | Attribute | e.g., `Enterprise`, `SMB`, `Consumer` |
| `valid_from` | `DATE` | SCD2 Start | Date this version became active |
| `valid_to` | `DATE` | SCD2 End | NULL if current row |
| `is_current` | `BOOLEAN` | SCD2 Flag | `TRUE` for the active version |

---

## 5. Certified Metric Definitions

Define all business metrics served from the Gold layer — single source of truth:

| Metric Name | Business Definition | Formula | Grain | Certified By | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `Gross Revenue` | Total sales value before returns or adjustments | `SUM(revenue_usd)` | Order / Day / Region | finance-director | Excludes cancelled orders |
| `Active Customers` | Customers with ≥1 order in the last 30 days | `COUNT(DISTINCT customer_id WHERE order_date >= CURRENT_DATE - 30)` | Monthly | product-owner | — |
| `Average Order Value` | Mean spend per order | `SUM(revenue_usd) / COUNT(order_id)` | Daily | — | Use `fact_orders` only |

---

## 6. Consumer SLA & Access Mapping

| Consumer | Dataset Used | Access Method | Expected Query Volume | Latency SLA | Caching Strategy |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Power BI Analysts | `fact_orders`, `dim_*` | Direct Lake / Import mode | 200 queries/day | < 5 sec | Import cache refreshed at 7AM |
| ML Feature Store | `dim_customers` | JDBC read | Batch daily | < 30 min pipeline | No cache — direct read |
| Finance Reports | `fact_orders` | Scheduled SQL export | Weekly | By 8AM Monday | Pre-computed aggregate table |
