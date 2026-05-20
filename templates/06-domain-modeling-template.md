# Domain Modeling

Template này được dùng trong Phase 06 để định nghĩa business domain boundaries, core entities, relationships, và grain decisions. Người dùng tự điền; xóa ví dụ khi hoàn thành.

> **Nguyên tắc FDE**: Model the business, not the source system. Entities and relationships reflect how the business thinks — not how the database schema was designed.

> **FDE Bounded Context**: Một domain chỉ model các khái niệm trong phạm vi của nó. Order domain KHÔNG bao gồm Payment processing hay Warehouse inventory — đó là domain khác với model riêng.

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

## 4. Quyết Định Grain Phân Tích

> **FDE Grain Rule**: Khai báo grain bằng câu hoàn chỉnh: **"Mỗi hàng trong bảng này là một [X]"**. Nếu không viết được câu này, grain chưa đủ rõ để thiết kế bảng.

| Dataset | Grain ("Mỗi hàng là một ___") | Rationale | Edge Cases |
| :--- | :--- | :--- | :--- |
| Orders Fact | Một `order_id` duy nhất | Finance báo cáo ở mức đơn hàng | Multi-currency: dùng USD-converted at order date |
| Order Lines Fact | Một `order_id + product_sku` | Phân tích theo SKU cần thiết | Bundles phải split ra line items |
| Customer Dim | Một khách hàng theo từng phiên bản (SCD2) | Lịch sử địa chỉ và phân khúc phải được track | GDPR deletion phải cascade toàn bộ SCD2 rows |
| Daily Sales Summary | Một `date + region + segment` | Pre-aggregated cho dashboard | Phải exclude cancelled orders trước aggregation |

## 4b. Lựa Chọn Modeling Pattern (FDE)

| Pattern | Phù hợp khi nào | Không phù hợp khi | Trade-off |
| :--- | :--- | :--- | :--- |
| **Kimball (Dimensional)** | BI reporting, query đơn giản, team quen Star Schema | Cần ML features, streaming, flexible schema | Cần upfront design; ETL phức tạp |
| **Inmon (Normalized)** | Single version of truth; enterprise-wide consistency | BI team cần query trực tiếp; team nhỏ | Query chậm; join phức tạp; khó duyệt |
| **One Big Table (OBT)** | Dashboard đơn giản; BI tool không hỗ trợ join | Data volume lớn; nhiều use cases khác nhau | Redundancy cao; khó maintain consistency |

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
