# Semantic Model Design

This template is used during Phase 16 (Semantic Model Design) to define a shared, certified metrics layer that ensures all BI tools, dashboards, and reports calculate business metrics consistently.

> **Semantic Model Principle**: Define business metrics once. Serve everywhere. Prevent metric inconsistencies across teams using different SQL snippets.

---

## 1. Semantic Model Scope

*   **Model Name**: (e.g., `sales_semantic_model`)
*   **Business Domain**: (e.g., Sales, Customer, Finance)
*   **Source Gold Dataset(s)**: (e.g., `fact_orders`, `dim_customers`, `dim_products`, `dim_date`)
*   **Primary BI Tool**: (e.g., Power BI, Tableau, Looker, Metabase)
*   **Model Owner**: (Team responsible for certifying and maintaining metric definitions)

---

## 2. Business Entities & Relationships

| Entity Name | Maps To | Grain | Role (Fact / Dimension) | Relationship Type |
| :--- | :--- | :--- | :--- | :--- |
| Orders | `fact_orders` | One row per order | Fact | — |
| Customers | `dim_customers` | One row per customer (current) | Dimension | Many-to-one from Orders |
| Products | `dim_products` | One row per product SKU | Dimension | Many-to-one from Orders |
| Date | `dim_date` | One row per calendar day | Dimension | Many-to-one from Orders |

---

## 3. Certified Measures (Metrics Layer)

Define every business measure with a single authoritative formula. These definitions are the official reference for all BI reports:

| Measure Name | Business Definition | Aggregation Formula | Format | Filter Conditions | Certified By |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `Total Revenue` | Gross revenue from all confirmed orders | `SUM(fact_orders.revenue_usd)` | Currency (USD, 2dp) | Exclude `order_status = 'CANCELLED'` | finance-director |
| `Order Count` | Total number of distinct orders | `COUNT(DISTINCT fact_orders.order_id)` | Integer | Exclude cancelled orders | product-owner |
| `Average Order Value` | Mean revenue per order | `[Total Revenue] / [Order Count]` | Currency (USD, 2dp) | Same as above | product-owner |
| `Active Customers` | Unique customers with ≥1 order in last 30 days | `COUNT(DISTINCT customer_id WHERE order_date >= TODAY() - 30)` | Integer | Non-cancelled orders only | product-owner |
| `Customer LTV` | Lifetime total revenue per customer | `SUM(revenue_usd) GROUP BY customer_id` | Currency (USD, 2dp) | All time, all statuses | finance-director |

---

## 4. Dimensions & Hierarchies

Define the analytical dimensions available for slicing and dicing measures:

| Dimension | Attributes Available for Slicing | Hierarchy (if applicable) | Notes |
| :--- | :--- | :--- | :--- |
| Date | `year`, `quarter`, `month`, `week`, `day`, `day_of_week` | Year → Quarter → Month → Week → Day | Use `dim_date` for all time-based slicing |
| Customer | `customer_segment`, `customer_region`, `is_active` | — | Use `is_current = TRUE` filter for SCD Type 2 |
| Product | `product_category`, `product_subcategory`, `brand` | Category → Subcategory → SKU | — |
| Geography | `country`, `region`, `city` | Country → Region → City | Join via `dim_geography` |

---

## 5. Row-Level Security (RLS) Rules

| Role | Filter Applied | Example |
| :--- | :--- | :--- |
| `regional-analyst` | `region = USER_ATTRIBUTE('region')` | APAC analyst only sees APAC orders |
| `finance-team` | No row filter — full access | Finance sees all regions and all time |
| `partner-viewer` | `partner_id = USER_ATTRIBUTE('partner_id')` | External partner sees only their own orders |

---

## 6. BI Tool Compatibility & Publish Checklist

*   **Power BI**: Published to Power BI Service workspace `sales-certified`. Import mode with DirectQuery fallback.
*   **Tableau**: Published as certified data source to Tableau Server. Column descriptions synced from data catalog.
*   **Looker / LookML**: Metrics defined in `sales_explore.lookml`. Certified metrics use `label: "Certified ✓"` convention.
*   **Publish Checklist**:
    - [ ] All measures peer-reviewed and approved by data lead
    - [ ] Metric definitions published to data catalog (Datahub/Unity Catalog)
    - [ ] RLS rules tested with test accounts for each role
    - [ ] No raw PII columns exposed in semantic model
    - [ ] Refresh schedule aligned with Gold layer SLA
