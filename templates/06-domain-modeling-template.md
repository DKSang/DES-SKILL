# Domain Modeling

This template is used during Phase 06 (Domain Modeling) to define the business domain boundaries, core entities, relationships, and analytical grain decisions that will shape the Silver and Gold layer designs.

> **Domain Modeling Principle**: Model the business, not the source system. Entities and relationships should reflect how the business thinks about data — not how the database schema was designed.

---

## 1. Domain Scope & Context

*   **Domain Name**: (e.g., `Sales Domain`, `Customer Domain`, `Financial Reporting Domain`)
*   **Bounded Context**: (e.g., The Sales Domain covers order lifecycle from cart to fulfillment. It does NOT include payments processing or warehouse inventory — those are separate domains.)
*   **Data Maturity of this Domain**: Level 1 / Level 2 / Level 3
*   **Domain Owner**: (Business SME responsible for verifying correctness)
*   **Technical Owner**: (Data Engineer or architect responsible for implementation)

---

## 2. Core Business Concepts & Definitions

Define the primary business concepts the domain works with — in business language:

| Concept Name | Business Definition | Source System(s) | Synonyms / Conflicting Names | Owner / SME |
| :--- | :--- | :--- | :--- | :--- |
| `Order` | A confirmed request from a customer to purchase one or more products | `sales_db.orders` | "Transaction", "Purchase" — avoid these terms | sales-director |
| `Customer` | An individual or business entity with an active account | `crm_db.customers` | "User", "Account", "Client" — map all to "Customer" | crm-product-owner |
| `Product` | A unique SKU available for purchase in the catalog | `catalog_db.products` | "Item", "SKU", "Variant" | catalog-team |
| `Revenue` | Gross order value in USD after discount, before tax and returns | Derived from `order.total_amount` | "Sales", "GMV", "Bookings" — always clarify which | finance-director |

---

## 3. Entities & Relationships

| Entity A | Relationship | Entity B | Cardinality | Business Meaning |
| :--- | :--- | :--- | :--- | :--- |
| Customer | places | Order | One-to-Many | A customer can place many orders |
| Order | contains | Product | Many-to-Many (via Order Line) | An order can have multiple products; a product appears in many orders |
| Order | belongs to | Geography | Many-to-One | Each order ships to one delivery region |
| Customer | is segmented into | Segment | Many-to-One | Each customer belongs to one active segment (e.g., Enterprise, SMB, Consumer) |

---

## 4. Analytical Grain Decisions

Define the lowest level of detail required for analytical queries in each dataset:

| Dataset / Subject Area | Proposed Grain | Rationale | Known Edge Cases / Open Issues |
| :--- | :--- | :--- | :--- |
| Orders Fact | One row per unique `order_id` | Finance reports at order level; BI team confirmed | Multi-currency orders use USD-converted total — FX rate applied at order date |
| Order Lines Fact | One row per `order_id + product_sku` | Product-level analysis (returns, revenue by SKU) required by catalog team | Bundles / kits must be split to line items |
| Customer Dim | One row per customer per version (SCD2) | Address and segment changes must be historically tracked | GDPR deletion must cascade to all historical SCD2 rows |
| Daily Sales Summary | One row per `date + region + segment` | Pre-aggregated for dashboard performance | Must exclude cancelled orders before aggregation |

---

## 5. Business Glossary

| Term | Agreed Definition | Synonyms to Retire | Notes |
| :--- | :--- | :--- | :--- |
| `Active Customer` | Customer with ≥1 non-cancelled order in the last 30 calendar days | "Engaged user", "Returning customer" | Time window must be configurable as a parameter |
| `Gross Revenue` | Sum of all `total_amount_usd` from non-cancelled orders in a period | "Sales", "Turnover" | Excludes returns and refunds (covered by separate `Net Revenue` metric) |
| `Churn` | Customer with no orders in the last 90 days after being active | "Lapsed", "Inactive" | Churn date = last order date + 90 days |

---

## 6. Assumptions & Open Questions

*   **Assumptions**:
    - (e.g., All monetary values are stored in source system native currency and converted to USD via a daily FX rate table.)
    - (e.g., Customer identity is considered unique by `email` — no deduplication by phone number.)
*   **Open Questions**:
    - (e.g., "Should cancelled orders be included in 'Active Customer' count for the 30-day window?")
    - (e.g., "Are B2B and B2C customers in the same `customers` table? Do they need separate modeling?")
