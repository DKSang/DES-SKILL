# DES-SKILL Improvement Backlog

This backlog outlines the prioritized batches for implementing the findings from the *Fundamentals of Data Engineering* gap analysis.

---

## Batch 2: Checklist Additions (Quality Gates)
*Create checklists under a central `checklists/` folder or within phase skill directories to enforce validation of lifecycle stages.*

- [ ] **Data Engineering Lifecycle Gate Checklist** (`checklists/data_engineering_lifecycle_checklist.md`)
  - [ ] Add entry/exit criteria for all major stages.
  - [ ] Add anti-pattern detection (e.g., skip business discovery, hardcoding credentials, tool-first design).
- [ ] **Source System Assessment Checklist** (`checklists/source_system_readiness_checklist.md`)
  - [ ] Add check for write patterns (CRUD vs. Insert-only).
  - [ ] Add check for transaction log retention (for CDC) and API pagination limits.
- [ ] **Ingestion Pattern Decision Checklist** (`checklists/ingestion_pattern_checklist.md`)
  - [ ] Add checks for watermarking, duplicate records, retry logic, and DLQ handling.
- [ ] **Storage & Architecture Design Checklist** (`checklists/storage_design_checklist.md`)
  - [ ] Add verification of separation of compute and storage.
  - [ ] Add checks for partitioning and clustering keys alignment.
- [ ] **Transformation Design Checklist** (`checklists/transformation_design_checklist.md`)
  - [ ] Add checks for standardization (nulls, datatypes, timezones).
  - [ ] Add validation of dimensional mapping rules (Kimball dimension/fact grains).
- [ ] **Data Quality & Observability Checklist** (`checklists/data_quality_readiness_checklist.md`)
  - [ ] Add check for data quality dimensions (timeliness, validity, accuracy).
  - [ ] Add check for anomaly detection baseline definitions.
- [ ] **Serving & Governance Checklist** (`checklists/serving_and_governance_checklist.md`)
  - [ ] Add check for metrics layer standardization and PII transformation policy.

---

## Batch 3: Template Improvements (Structuring Output)
*Refactor files in the `templates/` directory to force developers and AI agents to answer critical architectural questions.*

- [ ] **Data Ingestion Pattern Decision Template**
  - Update `templates/08-ingestion-design-template.md` to require selection of Batch vs. Streaming vs. CDC, failover plans, and DLQ metrics.
- [ ] **Source System Profile Template**
  - Update `templates/05-data-source-assessment-template.md` to define transaction volumes, schema drift notifications, and upstream ownership.
- [ ] **Storage Trade-off & Decision Record Template**
  - Create `templates/decision_record_template.md` to document reversible vs. irreversible storage decisions.
- [ ] **Data Lifecycle Review Template**
  - Create `templates/data_lifecycle_review_template.md` to audit retention policy, archive tiers, and FinOps costs.

---

## Batch 4: Phase Skill Updates (Injecting Guidelines)
*Add decision tables, lifecycle undercurrent checks, and anti-patterns directly into each phase's `SKILL.md`.*

- [ ] **Update Core Ingestion, Ingestion-Design, and Source-Assessment Skills**
  - Add Ingestion Mode selector matrix directly to `skills/des-ingestion-design/SKILL.md`.
- [ ] **Update Core Storage and Bronze/Silver/Gold Layer Skills**
  - Add serialization and partition guidelines to Bronze, Silver, and Gold skills.
- [ ] **Update Governance, Security, and Observability Skills**
  - Add column-level lineage and PII masking methods to governance skills.

---

## Batch 5: Validator Updates (Automation)
*Enhance the automated validator to enforce compliance.*

- [ ] **Add Reference Verification**
  - Update `tools/validate-skills.js` to scan files under `references/` for copyright compliance (no long paragraphs matching O'Reilly content).
- [ ] **Add Checklist & Template Link Checks**
  - Verify that each skill's `customize.toml` links to its corresponding template and checklist correctly.
