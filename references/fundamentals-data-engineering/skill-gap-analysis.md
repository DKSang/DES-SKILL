# DES-SKILL Gap Analysis

This analysis evaluates the current implementation of the `DES-SKILL` workspace and templates against the core recommendations and practices from *Fundamentals of Data Engineering*. It identifies specific vulnerabilities, missing guides, and the targeted files for future updates.

---

## 1. Data Engineering Lifecycle & Undercurrent Gaps

The primary gap is that while `DES-SKILL` covers 22 lifecycle phases, the individual phase instructions, templates, and checklists do not explicitly force the agent or developer to address key operational concepts.

### Gap A: Ingestion Design (Phase 08)
*   **Current State**: Basic placeholder template.
*   **Book Standard**: Clear division of ingestion modes (Batch, Streaming, CDC, File Landing), explicit offset/watermarking tracking, failure plans, and raw metadata auditing.
*   **Vulnerability**: AI agents will default to writing custom scripts that lack idempotency, duplicate records upon rerun, or fail silently during source schema changes.
*   **Target File(s)**:
    - [ ] `templates/08-ingestion-design-template.md` (Update structure)
    - [ ] `checklists/ingestion_pattern_checklist.md` (New file)

### Gap B: Source System Assessment (Phase 05)
*   **Current State**: Relies heavily on identifying fields and types without characterizing the source system's operational behavior.
*   **Book Standard**: Identification of database write modes (CRUD vs. Insert-Only), transaction log retention periods (critical for CDC), API query parameters/limitations, source team SLAs, and change notices.
*   **Vulnerability**: Pipelines break when source developers run updates or purge logs before the ingestion system captures changes.
*   **Target File(s)**:
    - [ ] `templates/05-data-source-assessment-template.md` (Update structure)
    - [ ] `checklists/source_system_readiness_checklist.md` (New file)

### Gap C: Storage & Bronze Layer (Phases 07 & 09)
*   **Current State**: Lists fields and tables, but lacks guidelines on serialization formats or retention cycles.
*   **Book Standard**: Separating compute from storage, choosing optimal serialization formats (Parquet, Iceberg, Delta) based on file sizes, compression tradeoffs, and partitioning/clustering based on downstream analytical access.
*   **Vulnerability**: Slow analytical queries and inflated storage/compute costs due to bad partitioning (e.g. partition cardinality too high).
*   **Target File(s)**:
    - [ ] `templates/07-architecture-design-template.md` (Update structure)
    - [ ] `templates/09-bronze-layer-design-template.md` (Update structure)
    - [ ] `checklists/storage_design_checklist.md` (New file)

### Gap D: Data Quality & SLAs (Phase 14)
*   **Current State**: The data quality template does not define numerical thresholds, validation failure rules, or alerting paths.
*   **Book Standard**: Data quality must evaluate specific dimensions (Accuracy, Completeness, Timeliness, Validity, Uniqueness). Anomaly detection and distribution drift require baseline windows.
*   **Vulnerability**: Validation checks trigger false positives or fail to halt pipelines when bad data enters, resulting in poisoned downstream datasets.
*   **Target File(s)**:
    - [ ] `templates/14-data-quality-template.md` (Update structure)
    - [ ] `checklists/data_quality_readiness_checklist.md` (New file)

### Gap E: Governance & Lineage (Phases 18 & 19)
*   **Current State**: Simple checklists without operational integration templates.
*   **Book Standard**: Governance requires metadata cataloging, explicit column-level lineage, compliance mapping (PII/GDPR), and data deletion/retention lifecycle policies.
*   **Vulnerability**: Non-compliance with data privacy laws and difficulty tracking data flow path during upstream source schema changes.
*   **Target File(s)**:
    - [ ] `templates/18-lineage-metadata-specification-template.md` (Update structure)
    - [ ] `templates/19-governance-and-security-template.md` (Update structure)

---

## 2. Structural Phase Gate Gaps (Router)

### Gap F: Phase Transition Criteria
*   **Current State**: The router (`using-des-skill`) transitions between phases simply based on whether an artifact exists.
*   **Book Standard**: Each phase in the lifecycle must satisfy clear maturity and completeness criteria (e.g., you cannot design ingestion until you have a signed-off source contract and schema profile).
*   **Vulnerability**: The agent skips essential upstream analysis (e.g., domain modeling) and rushes to write code, resulting in refactoring loops later.
*   **Target File(s)**:
    - [ ] `skills/using-des-skill/SKILL.md` (Add gate validation step)
    - [ ] `checklists/data_engineering_lifecycle_checklist.md` (New file)
