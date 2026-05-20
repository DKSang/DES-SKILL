# Silver Layer Design

This template is used during Phase 10 (Silver Layer Design) to design the standardized, validated, and deduplicated "conformed" layer. Silver is the source of truth for domain logic before analytical aggregation.

> **Silver Layer Principle**: One clean, trusted, deduplicated version of each business entity. Business logic belongs here. No aggregation yet.

---

## 1. Silver Dataset Inventory

| Silver Dataset | Source Bronze Dataset(s) | Grain (row description) | Primary / Merge Key | Write Mode | SLA (Available by) | Owner |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `orders_silver` | `orders_bronze` | One row per unique order ID (latest state) | `order_id` | Upsert / Merge | 7AM daily | data-platform-team |
| | | | | | | |

---

## 2. Standardization Rules

Define the cleaning and normalization applied when promoting data from Bronze to Silver:

| Field / Domain | Rule Applied | Reason | Test / Validation |
| :--- | :--- | :--- | :--- |
| All timestamps | Cast to UTC, store as `TIMESTAMP WITHOUT TIME ZONE` | Consistent timezone across sources | Assert `event_timestamp` IS NOT NULL and is UTC |
| All column names | Converted to `snake_case` | Naming consistency across datasets | Schema validation in CI/CD |
| `email` | Lowercased, trimmed whitespace | Normalize key for joins | Regex format check in Silver DQ rules |
| `order_status` | Mapped to canonical enum (`PENDING`, `CONFIRMED`, `SHIPPED`, `CANCELLED`) | Source uses varied strings | Allowed values check |
| `total_amount` | Cast to `DECIMAL(18,2)`, default `0.00` if null | Type safety for financial calcs | Assert no NULL after cast |
| `country_code` | Validated against ISO 3166-1 alpha-2 reference table | Reject invalid codes | Join to reference table; quarantine unmatched |

---

## 3. Deduplication Policy

*   **Merge Key**: (e.g., `order_id` — the unique business identifier that must appear only once in Silver)
*   **Deduplication Logic**: (e.g., `ROW_NUMBER() OVER (PARTITION BY order_id ORDER BY source_event_timestamp DESC) = 1` — keep the latest version)
*   **Late-Arriving Data Window**: (e.g., Merge looks back at the last 7 days of Bronze partitions to capture late events. Records older than 7 days trigger an alert for manual review.)
*   **SCD Strategy for Historical Changes**: 
    - SCD Type 1 (Overwrite): (e.g., `order_status` — only current state needed)
    - SCD Type 2 (Keep History): (e.g., `customer_address` — keep full address change history with `valid_from`, `valid_to`, `is_current` columns)

---

## 4. Schema Evolution Policy

*   **New Column from Bronze**: (e.g., Auto-added to Silver with `NULLABLE` default. Silver tests updated within 1 sprint.)
*   **Removed Column from Bronze**: (e.g., Retained in Silver as nullable. Downstream consumers notified. Remove only after a MAJOR contract version bump.)
*   **Type Change**: (e.g., Safe widening (INT → BIGINT) is auto-applied. Narrowing or incompatible changes trigger a quarantine + alert.)

---

## 5. Invalid Record Handling

| Condition | Severity | Action | Quarantine Table |
| :--- | :--- | :--- | :--- |
| NULL primary key (`order_id`) | Critical | FAIL — halt pipeline | — |
| Invalid `country_code` (not in ISO list) | High | QUARANTINE — load valid rows only | `orders_silver_quarantine` |
| `total_amount` < 0 | High | QUARANTINE | `orders_silver_quarantine` |
| `email` format invalid | Low | WARN — load row, flag column | — |

---

## 6. Reference / Mapping Requirements

*   **Reference Tables Used**: (e.g., `ref_country_codes`, `ref_product_catalog`, `ref_currency_exchange_rates`)
*   **Lookup Strategy**: (e.g., Broadcast join for small reference tables < 100MB; dynamic join for large reference tables)
*   **Currency Conversion**: (e.g., All monetary values converted to USD at `event_date` exchange rate from `ref_currency_exchange_rates`)
