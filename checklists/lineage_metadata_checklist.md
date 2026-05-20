# Lineage and Metadata Checklist

This checklist is used during Phase 18 (Lineage and Metadata) to ensure all datasets have complete column-level lineage, are registered in the data catalog, and carry standardized metadata columns.

---

## 1. Column-Level Lineage
- [ ] **Source-to-serving lineage traced**: Every critical metric or KPI column has documented lineage from raw source field to Gold/Serving layer.
- [ ] **Transformation steps documented**: Each lineage hop includes the transformation logic applied (e.g., "SHA-256 hash applied at Silver layer").
- [ ] **Lineage tool configured**: Lineage is captured automatically by a lineage tool (e.g., OpenLineage + Marquez, dbt lineage graph, Unity Catalog) — not only in documentation.
- [ ] **Derived columns documented**: Calculated or derived columns (e.g., `is_high_value`) have their derivation formula documented in the catalog.

## 2. Data Catalog Registration
- [ ] **Dataset registered**: All Silver and Gold datasets are registered in the corporate data catalog.
- [ ] **Business description written**: Each dataset has a non-technical, plain-language description of its purpose and content.
- [ ] **Column descriptions present**: Every column has a catalog entry with its business meaning.
- [ ] **Business terms linked**: Catalog entries link to the agreed business glossary term (e.g., "Total Revenue" links to the certified KPI definition).
- [ ] **Classification label applied**: Data sensitivity classification (Public/Internal/Confidential/PII/Regulated) is set in the catalog.

## 3. Standard Metadata Columns
Verify every managed dataset contains the following audit columns:
- [ ] `des_ingestion_timestamp` — UTC time of write
- [ ] `des_source_system` — Source system identifier
- [ ] `des_source_offset` — File path, Kafka offset, or CDC LSN
- [ ] `des_pipeline_run_id` — Orchestration run ID
- [ ] `des_payload_hash` — SHA-256 fingerprint of raw payload

## 4. Schema Change History
- [ ] **Schema changelog maintained**: A `schema_history` table or changelog document records all DDL changes (add/remove/rename/type-change) with dates and approvals.
- [ ] **Backward compatibility assessed**: Each schema change is classified as backward-compatible or breaking; consumers notified appropriately.

## 5. Stewardship & Ownership
- [ ] **Business Steward assigned**: A named individual is accountable for verifying data accuracy and business correctness.
- [ ] **Technical Steward assigned**: A named engineer is responsible for pipeline health and schema evolution management.
- [ ] **Escalation path documented**: The response path for data quality incidents is defined (technical steward → business steward → management).
