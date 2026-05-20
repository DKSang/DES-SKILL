# Data Contracts

This template is used during Phase 12 (Data Contracts) to define formal, versioned agreements between data producers and consumers covering schema, quality guarantees, and SLA commitments.

---

## 1. Contract Scope & Parties

*   **Contract ID**: DC-[ID] *(e.g., DC-001)*
*   **Contract Version**: `v1.0.0` *(use semantic versioning: MAJOR.MINOR.PATCH)*
*   **Status**: Draft / Active / Deprecated / Superseded
*   **Effective Date**: YYYY-MM-DD
*   **Producer (Owner)**: (Team or system that produces the data, e.g., `sales-db-team`)
*   **Consumer(s)**: (List all downstream consumers, e.g., `analytics-bi`, `ml-feature-store`, `finance-reporting`)
*   **Mediator**: (Data Platform team responsible for enforcing the contract)

---

## 2. Dataset Schema Contract

Enumerate all agreed columns with explicit type, nullability, and semantic definitions:

| Column Name | Data Type | Nullable | Semantic Meaning | Compatibility Rule | PII Flag |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `order_id` | `STRING` | No | Unique order identifier (UUID v4) | BACKWARD: cannot change type or remove | No |
| `customer_id` | `STRING` | No | FK to `customers_silver.customer_id` | BACKWARD: cannot remove | No |
| `total_amount` | `DECIMAL(18,2)` | No | Total order value in USD after discounts | BACKWARD: precision may widen, not narrow | No |
| `order_status` | `STRING` | No | Enum: `PENDING`, `CONFIRMED`, `SHIPPED`, `CANCELLED` | FULL: no new enum values without a MINOR version bump | No |
| `created_at` | `TIMESTAMP` | No | UTC time the order was placed in the source system | BACKWARD: cannot remove or change timezone convention | No |
| `discount_code` | `STRING` | Yes | Promotional code applied (null if no discount) | BACKWARD: can add new columns as MINOR changes | No |

**Compatibility Mode Definitions**:
*   `BACKWARD`: New schema version can be read by consumers using the previous schema version.
*   `FORWARD`: Previous schema version can be read by consumers using the new schema version.
*   `FULL`: Both backward and forward compatible.
*   `NONE`: Incompatible change — consumers must migrate before producer updates.

---

## 3. Quality & Freshness Guarantees

Define what the producer commits to deliver:

| Guarantee Type | Metric | Committed SLA | Measurement Method | Severity if Breached |
| :--- | :--- | :--- | :--- | :--- |
| Freshness | Data latency | Data available within 15 min of source event | `MAX(ingestion_timestamp - event_timestamp)` | High — PagerDuty alert |
| Completeness | Null ratio on `order_id` | 0% null | `COUNT(*) WHERE order_id IS NULL` | Critical — halt downstream |
| Volume | Daily row count | ≥ 90% of 7-day rolling average | Daily monitoring job | High — Slack alert |
| Uniqueness | Duplicate `order_id` count | 0 duplicates | `COUNT(*) - COUNT(DISTINCT order_id)` | Critical — halt downstream |

---

## 4. Breaking Change Policy & Versioning

Define how schema evolution is managed to protect downstream consumers:

*   **PATCH (0.0.X)**: No schema changes — only bug fixes in pipeline logic or documentation updates. No consumer notification required.
*   **MINOR (0.X.0)**: Backward-compatible schema changes (e.g., adding a nullable column, widening a numeric type). Notify consumers 5 business days in advance via `#data-contracts` channel.
*   **MAJOR (X.0.0)**: Breaking changes (e.g., removing a column, changing a type, renaming a column). Requires:
    1. A migration guide published by the producer.
    2. A deprecation period of minimum 30 days for consumers to adapt.
    3. Written approval from the Governance Lead and all registered consumers.
    4. A new dataset version (e.g., `orders_silver_v2`) deployed in parallel during migration window.

---

## 5. Contract Enforcement & Monitoring

*   **Schema Registry**: (e.g., Contract schema is registered in Confluent Schema Registry / Datahub. Violations auto-block writes.)
*   **Contract Test Suite**: (e.g., dbt contract tests run on every pipeline execution to verify column types and nullability constraints.)
*   **Breach Escalation**: (e.g., Contract SLA breach triggers PagerDuty alert to the producer's on-call team and a notification to all registered consumers.)
