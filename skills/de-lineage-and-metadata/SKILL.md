---
name: de-lineage-and-metadata
description: Use when documenting data lineage, registering datasets in a catalog, assigning stewardship, and ensuring metadata completeness for governance and trust.
---

# de-lineage-and-metadata

## When To Use

Use after serving layer design, before governance and security. Use whenever dataset traceability, metric trust, or regulatory audit requirements are identified.

## Purpose

Document column-level lineage from source to serving, register all managed datasets in the data catalog with certified metadata, and assign stewards for long-term accountability.

## Inputs Required

- All layer design artifacts (Bronze, Silver, Gold, Serving).
- Source-to-target transformation maps (`13-transformation-design.md`).
- PII classification from data contracts and governance design.
- Business glossary from domain modeling.

## Decision Matrix — Lineage Granularity

| Requirement | Lineage Level | Implementation |
| :--- | :--- | :--- |
| Regulatory compliance (GDPR, HIPAA, SOX) | **Column-level** — mandatory | OpenLineage + Marquez, Unity Catalog lineage, dbt lineage |
| Business trust, metric certification | **Table-level + transformation logic** | dbt docs graph, Catalog with transformation notes |
| Impact analysis (schema change blast radius) | **Dataset-level dependency graph** | dbt DAG, Airflow task dependency map |
| Exploratory / low-risk internal datasets | **Dataset-level only** | Manual catalog entry sufficient |

**Default**: Always implement at least **table-level lineage**. Column-level is required for any dataset containing PII or certified metrics.

## Stewardship Model

Two distinct roles must be assigned per dataset:

| Role | Responsibility | Who |
| :--- | :--- | :--- |
| **Business Steward** | Data accuracy, business definition correctness | Business analyst or product owner |
| **Technical Steward** | Pipeline health, schema evolution, incident response | Data engineer or platform engineer |

## Step-By-Step Process

1. For each critical metric and PII dataset, trace column-level lineage from source to serving.
2. Document transformation steps at each lineage hop (e.g., "SHA-256 hash applied at Silver layer").
3. Register all Silver and Gold datasets in the corporate data catalog with:
   - Business description (non-technical, plain language)
   - Column definitions and business glossary links
   - Classification label (Public/Internal/Confidential/PII/Regulated)
   - Owner, Business Steward, Technical Steward
4. Verify 5 mandatory audit columns are present on all managed datasets.
5. Record schema change history: DDL change date, change type, approval.
6. Configure lineage tool integration (OpenLineage emit, dbt docs, Unity Catalog lineage).

## Output File


The output_file path is configured in `customize.toml`. Default:

Write the final artifact to:

`{project-root}/_des-output/planning-artifacts/18-lineage-and-metadata.md`

Use the matching template from:

`{skill-root}/../../templates/18-lineage-and-metadata-template.md`

After writing the file, summarize the file path and recommend the next skill.

## Required Outputs

- Column-level lineage for all PII and certified metric columns.
- Table-level lineage DAG for all managed datasets.
- Catalog entries for all Silver and Gold datasets.
- Stewardship assignments (Business + Technical) per dataset.
- Schema change history log.

## Quality Checklist

- [ ] Column-level lineage is documented for all PII columns and certified metrics.
- [ ] Every Silver and Gold dataset is registered in the data catalog with a business description.
- [ ] Every column has a catalog entry with business meaning (not just column name).
- [ ] Business Steward and Technical Steward are named for every managed dataset.
- [ ] All 5 audit columns present: `des_ingestion_timestamp`, `des_source_system`, `des_source_offset`, `des_pipeline_run_id`, `des_payload_hash`.
- [ ] Schema change history records all DDL changes with dates and approvals.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Only documenting table-level lineage for PII datasets | Regulators require column-level proof of where PII flows; table-level is insufficient |
| Catalog entries with empty column descriptions | Empty catalog = no trust; analysts query data blindly; errors proliferate |
| No steward assigned | Datasets without owners degrade silently; incidents have no response path |
| Manual lineage documentation only | Manual docs go stale immediately after the next pipeline change; use automated tools |
| Treating schema change history as optional | Audit and debugging require knowing exactly when a column was added or changed |

## Undercurrent Coverage

| Undercurrent | Action Required at This Phase |
| :--- | :--- |
| Security | PII column lineage is required evidence for GDPR Article 30 Records of Processing |
| Data Management | This is the core data management phase — catalog, lineage, stewardship, and metadata all documented here |
| DataOps | Lineage tool configured to emit lineage events automatically on every pipeline run |
| Data Architecture | Lineage architecture (OpenLineage, Unity Catalog, dbt docs) selected and integrated |
| Orchestration | Lineage events emitted by orchestration tasks automatically via OpenLineage integration |
| Software Engineering | Catalog entry updates are part of the PR checklist for any new or modified dataset |

## Handoff To The Next Skill

Next use `de-governance-and-security` to turn lineage and metadata into access control, retention enforcement, privacy controls, and change-management policies.
