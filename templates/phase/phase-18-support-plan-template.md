# Phase 18 Support Plan — Lineage and Metadata Design

## 1. Purpose

This support plan defines the validation work required to complete Phase 18 Lineage and Metadata Design.

Phase 18 does not implement catalog tools, scanners, metadata crawlers, OpenLineage, Purview, DataHub, Collibra, dbt docs, metadata pipelines, CI/CD workflows, or code.

It requires evidence that metadata assets are inventoried, lineage is scoped, definitions and owners are documented, trust metadata is visible, operational run metadata exists, and metadata maintenance is accountable before Governance and Security Design begins.

---

## 2. Phase Context

| Field | Value |
|---|---|
| Phase Number | 18 |
| Phase Name | Lineage and Metadata Design |
| Phase Core Skill | `des-lineage-metadata-design` |
| Initial Artifact | `_des-output/planning-artifacts/18-lineage-metadata-specification.md` |
| Upstream Artifact | `_des-output/planning-artifacts/17-serving-layer-specification.md` |
| Upstream Handoff | `_des-output/phase-handoffs/phase-17-to-18-handoff.md` |
| Workflow Status File | `_des-output/implementation-artifacts/des-workflow-status.md` |
| Created Date | YYYY-MM-DD |
| Last Updated | YYYY-MM-DD |
| Owner / Agent | |
| Current Status | Draft / Evidence Required / Evidence Collected / Validated / Done / Blocked |

---

## 3. Upstream Inputs Reviewed

| Input | Required? | Status | Notes |
|---|---:|---|---|
| Phase 17 Serving Layer Specification | Yes | Found / Missing / Partial | |
| Phase 17 to Phase 18 Handoff | Yes | Found / Missing / Partial / Risk Accepted | |
| Phase 17 Evidence Pack | Recommended | Found / Missing / Partial | |
| Phase 17 Done Gate | Recommended | Found / Missing / Partial | |
| Workflow status | Yes | Found / Missing / Partial | |

---

## 4. What Must Be Validated

| ID | Item to Validate | Why It Matters | Criticality | Required Evidence |
|---|---|---|---|---|
| V-001 | Phase 17 handoff alignment | Ensures metadata follows serving needs | Critical | Phase 17 handoff |
| V-002 | Metadata scope | Prevents unclear metadata boundary | Critical | Scope decision |
| V-003 | Metadata category coverage | Ensures business/technical/operational/reference coverage | Critical | Category decision |
| V-004 | Metadata asset inventory | Ensures all important assets are listed | Critical | Asset inventory |
| V-005 | Business metadata | Enables user understanding and ownership | High | Definition/owner evidence |
| V-006 | Technical metadata | Enables schema, dependency, and field understanding | High | Schema/design artifacts |
| V-007 | Operational metadata | Enables debug, audit, and run evidence | Critical | Phase 15 run evidence |
| V-008 | Reference metadata | Enables code/unit/calendar/mapping explanation | Medium/High | Reference specs |
| V-009 | Dataset catalog requirements | Enables discoverability | High | Catalog field decision |
| V-010 | Field/schema metadata | Enables safe data use | High | Schema artifacts |
| V-011 | Metric/KPI metadata | Prevents metric ambiguity | Critical where metrics exist | Phase 03/11/16 |
| V-012 | Contract metadata | Enables governed outputs | Critical where contracts exist | Phase 12 |
| V-013 | Transformation lineage | Enables transformation traceability | Critical | Phase 13 |
| V-014 | Dataset lineage | Enables source-to-serving traceability | Critical | Layer specs |
| V-015 | Column-level lineage expectation | Enables critical field traceability | High where scoped | Scope/tooling decision |
| V-016 | Semantic/serving lineage | Enables consumer-facing traceability | Critical | Phase 16/17 |
| V-017 | Quality/trust metadata | Enables trust visibility | Critical | Phase 14/16/17 |
| V-018 | Ownership/stewardship metadata | Enables accountability | Critical | Owner decision |
| V-019 | Usage/consumer metadata | Enables impact analysis and adoption review | Medium/High | Phase 17 |
| V-020 | Change/version metadata | Enables change impact control | High | Contract/schema/metric versions |
| V-021 | Audit/compliance metadata | Enables audit/security/governance | High where relevant | Compliance/security need |
| V-022 | Metadata capture responsibility | Ensures metadata can be produced | Critical | Responsibility decision |
| V-023 | Metadata freshness/maintenance | Prevents stale metadata | Critical | Maintenance policy |

---

## 5. Required Support Work

| Support Work | Purpose | Input | Expected Output | Requirement Status | Notes |
|---|---|---|---|---|---|
| Phase 17 Handoff Review | Validate Phase 18 derives from Phase 17 | Serving spec + handoff | Evidence E-001 | Required | |
| Metadata Scope Check | Validate scope | Context | Evidence E-002 | Required | |
| Metadata Category Coverage Check | Validate category coverage | Category list | Evidence E-003 | Required | |
| Metadata Asset Inventory Check | Validate asset inventory | Upstream artifacts | Evidence E-004 | Required | |
| Business Metadata Check | Validate definitions/owners | Domain/product/KPI | Evidence E-005 | Required | |
| Technical Metadata Check | Validate schema/field/dependencies | Layer specs | Evidence E-006 | Required | |
| Operational Metadata Check | Validate run evidence | Phase 15 | Evidence E-007 | Required | |
| Reference Metadata Check | Validate codes/units/mappings | Domain/source specs | Evidence E-008 | Required or waived | |
| Dataset Catalog Requirement Check | Validate catalog fields | Scope decision | Evidence E-009 | Required | |
| Field/Schema Metadata Check | Validate field metadata | Schema specs | Evidence E-010 | Required | |
| Metric/KPI Metadata Check | Validate metric metadata | Phase 03/11/16 | Evidence E-011 | Required where metrics exist | |
| Contract Metadata Check | Validate contract metadata | Phase 12 | Evidence E-012 | Required where contracts exist | |
| Transformation Lineage Check | Validate input/output/rule lineage | Phase 13 | Evidence E-013 | Required | |
| Dataset Lineage Check | Validate layer lineage | Phase 08-17 | Evidence E-014 | Required | |
| Column-Level Lineage Expectation Check | Validate scope/feasibility | Tooling/risk | Evidence E-015 | Required where scoped | |
| Semantic/Serving Lineage Check | Validate consumer lineage | Phase 16/17 | Evidence E-016 | Required | |
| Quality/Trust Metadata Check | Validate trust metadata | Phase 14/16/17 | Evidence E-017 | Required | |
| Ownership/Stewardship Metadata Check | Validate accountability | Owner map | Evidence E-018 | Required | |
| Usage/Consumer Metadata Check | Validate downstream usage metadata | Phase 17 | Evidence E-019 | Required for P1 serving outputs | |
| Change/Version Metadata Check | Validate version metadata | Schema/contract/metric | Evidence E-020 | Required | |
| Audit/Compliance Metadata Check | Validate audit metadata | Contract/security | Evidence E-021 | Required where relevant | |
| Metadata Capture Responsibility Check | Validate who captures metadata | Responsibility model | Evidence E-022 | Required | |
| Metadata Freshness/Maintenance Check | Validate maintenance policy | Owner/process | Evidence E-023 | Required | |
| Phase 18 Done Gate | Decide whether Phase 18 can close | Artifact + evidence | Done Gate result | Required | |
| Phase 18 Handoff | Prepare Phase 19 input | Artifact + Done Gate | Handoff file | Required | |

---

## 6. Evidence Output Location

```text
_des-output/evidence/phase-18/phase-18-evidence-pack.md
```

---

## 7. HALT Conditions

Stop if:

* Phase 17 handoff is missing.
* P1 serving outputs cannot trace to Gold.
* Business definitions have no owner.
* Operational run evidence is missing.
* Metadata categories are not covered or waived.
* Column lineage is claimed but no scope or capture method exists.
* Quality/trust metadata is missing for trusted outputs.
* Contract metadata is missing for governed/system-facing outputs.
* Ownership/stewardship metadata is missing.
* Metadata maintenance owner is missing.
* Artifact starts implementing catalog/lineage tooling code.

---

## 8. Next Support Action

```text
Create or update _des-output/evidence/phase-18/phase-18-evidence-pack.md
```

---

## 9. Change Log

| Date | Change | Reason | Updated By |
|---|---|---|---|
| YYYY-MM-DD | Created support plan | Phase 18 validation | |
