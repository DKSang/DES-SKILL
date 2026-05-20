# Transformation Design Checklist

This checklist is used during Phase 10 (Silver Layer Design), Phase 11 (Gold Layer Design), and Phase 13 (Transformation Design) to ensure data cleaning, structuring, and dimensional modeling follow core data warehouse principles.

---

## 1. Standardization & Data Cleaning
- [ ] **Timezones normalized to UTC**: All input timestamps are cast to a consistent UTC zone. Raw offsets are preserved if business-required.
- [ ] **Naming casing standardized**: All column names follow a uniform casing pattern (typically `snake_case`).
- [ ] **Datatype casting explicit**: Datatypes (especially numeric decimals, integers, and boolean strings) are explicitly cast. No reliance on dynamic engine inference.
- [ ] **Null value policy defined**: Missing or null values are handled systematically (e.g., using defaults like `-1` for missing foreign keys, or empty strings for null attributes).

## 2. Deduplication & Incremental Merges
- [ ] **Unique identifier mapped**: The primary merge key is defined for every target record.
- [ ] **Deduplication window explicit**: A deduplication logic is set (e.g., utilizing `row_number() over (partition by unique_key order by source_timestamp desc)`).
- [ ] **Late-arriving updates covered**: Ingestion latency is factored in; incremental merges search historical data buffers to update older records when late events arrive.

## 3. Schema Evolution & Drift
- [ ] **Schema evolution policy defined**: Target action is set for column additions, deletions, or type changes (e.g., auto-merge, fail-fast, or write to drift-table).
- [ ] **Type casting safety**: If source type widens (e.g. integer to float), target schema is updated without data loss.

## 4. Analytical Modeling (Gold Layer)
- [ ] **Modeling pattern selected**: Chosen pattern (Kimball Dimensional Model, Inmon Normalized, or One Big Table) is justified by analytical query usage.
- [ ] **Fact table grain defined**: The lowest level of detail recorded in the fact tables is documented (e.g., "one row per transaction per second").
- [ ] **Slowly Changing Dimensions (SCD) mapped**: Change-tracking strategy for dimensions is defined:
  - `SCD Type 1` (Overwrite historical values)
  - `SCD Type 2` (Maintain history with `start_date`, `end_date`, and `is_current` columns)
- [ ] **Foreign key integrity checked**: Dimensional relationships are verified. Left-joins check for orphan records and substitute missing key values.
