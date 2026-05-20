# Medallion Layer Checklist

This checklist is used across Phases 09, 10, and 11 (Bronze/Silver/Gold Layer Design) to verify each Medallion architecture layer meets its quality, structure, and behavior standards.

---

## Bronze Layer
> *Raw data preserved as close to source as possible. Only audit columns added. No business logic.*

- [ ] **Append-only write mode**: Bronze tables use append-only writes. No in-place updates or deletes of raw records.
- [ ] **Source fidelity preserved**: Raw payload is stored without transformation. Data types match source as closely as possible.
- [ ] **5 mandatory audit columns present**: `des_ingestion_timestamp`, `des_source_system`, `des_source_offset`, `des_pipeline_run_id`, `des_payload_hash`.
- [ ] **Partition by ingestion date**: Primary partition key is `ingestion_date` (not event date) to ensure safe partition overwrite on re-runs.
- [ ] **Schema drift policy defined**: Behavior for new/removed/type-changed columns is explicitly specified (auto-merge / fail-fast / quarantine).
- [ ] **Access restricted**: Bronze tables are only accessible to `bronze-raw-readers` role; PII not masked at this layer.
- [ ] **Retention policy set**: Automated lifecycle rule transitions Bronze data from Hot → Archive → Delete.

## Silver Layer
> *Standardized, deduplicated, validated — one trusted version of each business entity.*

- [ ] **Grain explicitly defined**: The lowest level of detail stored is documented (e.g., "one row per unique `order_id`").
- [ ] **Deduplication applied**: Merge key is defined; duplicate records from CDC replay or late-arriving events are handled.
- [ ] **Standardization rules applied**: Timezones converted to UTC, column names in `snake_case`, datatypes explicitly cast, nulls handled.
- [ ] **SCD type decided**: For slowly changing attributes, SCD Type 1 (overwrite) or SCD Type 2 (history tracking with `valid_from/valid_to/is_current`) is implemented.
- [ ] **Schema evolution policy active**: New/removed/changed columns from Bronze are handled gracefully.
- [ ] **Invalid record quarantine path set**: Failed DQ checks route bad rows to `[table]_quarantine` with failure reason metadata.

## Gold Layer
> *Consumer-ready analytical layer optimized for query performance and business metric trust.*

- [ ] **Analytical modeling pattern selected**: Kimball Dimensional / Inmon / OBT is chosen and justified based on consumer query patterns.
- [ ] **Fact table grain documented**: The exact grain of every fact table (e.g., "one row per transaction") is documented and agreed by consumers.
- [ ] **Surrogate keys used**: Fact tables use surrogate keys (auto-increment integers) — not natural keys from source systems.
- [ ] **Dimension foreign key integrity checked**: Orphan fact records (no matching dimension key) use sentinel values (e.g., `-1` = "Unknown") — never nulls.
- [ ] **Certified metrics defined**: All business metrics served from Gold are defined in a single metrics layer (Metrics Layer / Semantic Model) with owner sign-off.
- [ ] **Consumer SLA validated**: Dashboard and API response times meet SLA requirements in load-test (staging environment).
- [ ] **Quality gate between Silver → Gold**: Row count and aggregation totals validated between Silver source and Gold output before serving.
