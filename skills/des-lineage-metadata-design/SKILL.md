---
name: des-lineage-metadata-design
description: Use when designing data lineage, catalog metadata, business/technical/operational/reference metadata, run evidence, ownership, trust metadata, and auditability for data products.
---

# des-lineage-metadata-design

## Purpose

Use this skill to create and validate the Lineage and Metadata Specification for any data engineering project.

This skill defines how business metadata, technical metadata, operational metadata, reference metadata, lineage, catalog entries, ownership, definitions, quality status, contracts, run evidence, semantic metadata, serving metadata, usage metadata, change metadata, version metadata, and audit metadata will be captured, organized, exposed, and governed.

The goal is to make the data product discoverable, explainable, auditable, debuggable, traceable, and governable across source, ingestion, Bronze, Silver, Gold, semantic, and serving layers.

Lineage and Metadata Design should answer:

```text
Which assets need metadata?
What business meaning and ownership must be documented?
What technical schema and dependency metadata is required?
What run evidence proves how data was produced?
How far should lineage go?
Is column-level lineage required?
Which trust, quality, contract, and freshness metadata should be exposed?
Who maintains metadata?
How does metadata support governance, security, audit, troubleshooting, consumers, and AI/data agents?
```

In the Phase-Orchestrated Support Model, this phase is not Done when the Lineage and Metadata Specification is first written.

Phase 18 is Done only when:

```text
Lineage and Metadata Specification exists
+ Phase 17 artifact and handoff are reviewed
+ lineage and metadata validation work is identified
+ metadata evidence is collected or waived with reason
+ artifact is revised from evidence
+ Phase 18 Done Gate passes
+ Phase 18 to Phase 19 handoff exists
```

---

## When To Use

Use this skill when:

* Phase 17 Serving Layer Specification exists;
* Phase 17 handoff exists or the user explicitly accepts the risk of continuing without it;
* data products, datasets, metrics, contracts, transformations, quality rules, workflows, semantic objects, and serving outputs need lineage and metadata;
* users need a data catalog, data dictionary, glossary, ownership, field definitions, run metadata, quality status, trust status, or lineage graph;
* compliance, audit, troubleshooting, impact analysis, deletion requests, or incident response require traceability;
* AI/data-agent usage requires trustworthy semantic and lineage metadata;
* the workflow router selects Phase 18.

Do not use this skill to implement a catalog tool, write lineage extraction code, build metadata crawlers, deploy governance tools, configure Purview/DataHub/Collibra/dbt docs/OpenLineage, create metadata pipelines, create CI/CD workflows, or write implementation code.

Allowed in this phase:

```text
metadata scope design
metadata category design
metadata inventory design
business metadata design
technical metadata design
operational metadata design
reference metadata design
dataset catalog requirements
field and schema metadata requirements
metric and KPI metadata requirements
contract metadata requirements
transformation lineage design
dataset lineage design
column-level lineage expectation design
semantic and serving lineage design
quality and trust metadata design
ownership and stewardship metadata design
usage and consumer metadata design
change and version metadata design
audit and compliance metadata design
metadata capture responsibility design
metadata freshness and maintenance policy design
```

---

## Required Inputs

The agent should look for:

* `_des-output/planning-artifacts/01-business-discovery-brief.md`;
* `_des-output/planning-artifacts/02-business-question-catalog.md`;
* `_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md`;
* `_des-output/planning-artifacts/04-data-product-specification.md`;
* `_des-output/planning-artifacts/05-data-source-inventory.md`;
* `_des-output/planning-artifacts/06-conceptual-domain-model.md`;
* `_des-output/planning-artifacts/08-ingestion-specification.md`;
* `_des-output/planning-artifacts/09-bronze-layer-specification.md`;
* `_des-output/planning-artifacts/10-silver-layer-specification.md`;
* `_des-output/planning-artifacts/11-gold-layer-specification.md`;
* `_des-output/planning-artifacts/12-data-contract-specification.md`;
* `_des-output/planning-artifacts/13-transformation-specification.md`;
* `_des-output/planning-artifacts/14-data-quality-specification.md`;
* `_des-output/planning-artifacts/15-orchestration-observability-specification.md`;
* `_des-output/planning-artifacts/16-semantic-model-specification.md`;
* `_des-output/planning-artifacts/17-serving-layer-specification.md`;
* `_des-output/phase-handoffs/phase-17-to-18-handoff.md`;
* `_des-output/evidence/phase-17/phase-17-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-17-done-gate.md`, if available;
* workflow status file, if present;
* source inventory;
* Bronze/Silver/Gold dataset inventory;
* transformation dependency graph;
* contract inventory;
* quality rule inventory;
* workflow/run evidence expectations;
* semantic model inventory;
* serving output inventory;
* ownership and stewardship decisions.

If the Serving Layer Specification or Phase 17 handoff is missing or too weak, stop and ask whether to route back to `des-serving-layer-design`.

---

## Output Files

Create or update the configured main output file:

```text
_des-output/planning-artifacts/18-lineage-metadata-specification.md
```

Also create or update the Phase-Orchestrated Support outputs when using validated phase delivery:

```text
_des-output/phase-support-plans/phase-18-support-plan.md
_des-output/evidence/phase-18/phase-18-evidence-pack.md
_des-output/implementation-artifacts/phase-18-artifact-revision.md
_des-output/implementation-artifacts/phase-18-done-gate.md
_des-output/phase-handoffs/phase-18-to-19-handoff.md
```

The main artifact must capture:

* lineage and metadata summary;
* metadata scope;
* metadata non-scope;
* metadata design principles;
* metadata categories;
* metadata inventory;
* business metadata;
* technical metadata;
* operational metadata;
* reference metadata;
* dataset catalog requirements;
* field and schema metadata;
* metric and KPI metadata;
* contract metadata;
* transformation lineage;
* dataset lineage;
* column-level lineage expectations;
* semantic and serving lineage;
* quality and trust metadata;
* ownership and stewardship metadata;
* usage and consumer metadata;
* change and version metadata;
* audit and compliance metadata;
* metadata capture responsibilities;
* metadata freshness and maintenance policy;
* lineage and metadata evidence summary;
* risks;
* assumptions;
* open questions;
* Phase 18 evidence summary;
* Phase 18 handoff notes;
* next skill recommendation.

---

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, `status_file`, and required upstream artifacts.
4. Identify Phase-Orchestrated Support files:

   * `phase_support_plan_file`;
   * `phase_evidence_pack_file`;
   * `phase_artifact_revision_file`;
   * `phase_done_gate_file`;
   * `phase_handoff_file`.
5. Load only `steps/step-01-context-and-readiness.md`.
6. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
7. Stop at every HALT point and wait for user input.
8. Do not invent owners, definitions, lineage paths, catalog fields, quality status, metadata maintenance processes, or compliance requirements.
9. Do not implement catalog, lineage extractor, crawler, OpenLineage, Purview, DataHub, Collibra, dbt docs, metadata pipelines, CI/CD, or code.
10. Before marking Phase 18 as Done, create or update the support plan, evidence pack, artifact revision notes, Done Gate, handoff, and workflow status.

---

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm upstream dataset, transformation, contract, quality, semantic, serving, and ownership context.
2. Confirm Phase 17 handoff readiness.
3. Identify assets requiring metadata and lineage.
4. Define metadata categories and inventory.
5. Define business, technical, operational, and reference metadata requirements.
6. Define dataset, transformation, and column-level lineage scope.
7. Define trust, quality, contract, usage, version, and audit metadata.
8. Define metadata capture and maintenance policies.
9. Ask HALT questions for unresolved metadata decisions.
10. Draft the Lineage and Metadata Specification.
11. Create the Phase 18 Support Plan.
12. Collect or reference Phase 18 evidence.
13. Revise the Lineage and Metadata Specification using evidence.
14. Run the Phase 18 Done Gate.
15. Create the Phase 18 to Phase 19 Handoff.
16. Update workflow status.
17. Recommend the next skill.

Do not execute this overview directly. Follow the step files.

---

## Phase-Orchestrated Support Model

Phase 18 uses lineage and metadata validation support work.

The purpose is not catalog implementation. The purpose is to make the data product discoverable, explainable, auditable, debuggable, governable, and ready for governance/security design.

### Required Support Work

| Support Work                           | Purpose                                                                 | Output                      |
| -------------------------------------- | ----------------------------------------------------------------------- | --------------------------- |
| Phase 17 Handoff Review                | Check metadata design follows serving requirements.                     | Evidence pack section       |
| Metadata Scope Check                   | Validate metadata boundary.                                             | Evidence pack section       |
| Metadata Category Coverage Check       | Validate business/technical/operational/reference coverage.             | Evidence pack section       |
| Metadata Asset Inventory Check         | Ensure assets requiring metadata are listed.                            | Evidence pack section       |
| Business Metadata Check                | Validate definitions, glossary, rules, owners, usage.                   | Evidence pack section       |
| Technical Metadata Check               | Validate schema, fields, dependencies, constraints.                     | Evidence pack section       |
| Operational Metadata Check             | Validate run IDs, status, counts, errors, runtime, publish status.      | Evidence pack section       |
| Reference Metadata Check               | Validate codes, units, calendars, mappings, lookups.                    | Evidence pack section       |
| Dataset Catalog Requirement Check      | Validate catalog fields.                                                | Evidence pack section       |
| Field/Schema Metadata Check            | Validate field-level meaning/type/constraint metadata.                  | Evidence pack section       |
| Metric/KPI Metadata Check              | Validate metric definition, formula, owner, status, version.            | Evidence pack section       |
| Contract Metadata Check                | Validate contract/version/SLA/schema/owner metadata.                    | Evidence pack section       |
| Transformation Lineage Check           | Validate input/output/rule lineage.                                     | Evidence pack section       |
| Dataset Lineage Check                  | Validate source→Bronze→Silver→Gold→Semantic→Serving paths.              | Evidence pack section       |
| Column-Level Lineage Expectation Check | Validate scope and feasibility of column-level lineage.                 | Evidence pack section       |
| Semantic/Serving Lineage Check         | Validate semantic and consumer-facing lineage.                          | Evidence pack section       |
| Quality/Trust Metadata Check           | Validate quality status, trust badge, freshness, warnings.              | Evidence pack section       |
| Ownership/Stewardship Metadata Check   | Validate owner, steward, support contact, accountability.               | Evidence pack section       |
| Usage/Consumer Metadata Check          | Validate downstream usage, consumers, API/export/dashboard/agent usage. | Evidence pack section       |
| Change/Version Metadata Check          | Validate schema, contract, metric, and model version metadata.          | Evidence pack section       |
| Audit/Compliance Metadata Check        | Validate access/change/quality/incident/deletion traceability.          | Evidence pack section       |
| Metadata Capture Responsibility Check  | Validate who captures what and when.                                    | Evidence pack section       |
| Metadata Freshness/Maintenance Check   | Validate metadata update policy.                                        | Evidence pack section       |
| Phase 18 Done Gate                     | Decide whether Phase 18 is Done, Done with risks, or Blocked.           | `phase-18-done-gate.md`     |
| Phase 18 Handoff                       | Tell Phase 19 what governance/security must control.                    | `phase-18-to-19-handoff.md` |

---

## Guardrails

The agent must not:

* treat metadata as only table descriptions;
* treat lineage as a static diagram only;
* ignore operational metadata from workflows and runs;
* ignore reference metadata such as code lists, units, calendars, and mappings;
* ignore ownership and accountability;
* expose undocumented or uncertified datasets as trusted;
* claim column-level lineage exists unless scope and capture method are defined;
* ignore metadata maintenance and freshness;
* ignore downstream usage metadata;
* ignore compliance/audit traceability;
* hide trust, quality, contract, or freshness signals from catalog/consumer metadata where needed;
* implement catalog, scanner, lineage, crawler, OpenLineage, Purview, DataHub, Collibra, dbt docs, metadata pipelines, CI/CD, or code in this phase;
* mark lineage design Done if P1 outputs cannot trace back to upstream datasets, transformations, contracts, quality status, serving output, and owners.

---

## Handoff To The Next Skill

Recommend `des-governance-security-design` only after:

```text
Lineage and Metadata Specification exists
+ Phase 18 support plan exists or is waived with reason
+ Phase 18 evidence pack exists or evidence is waived with reason
+ Phase 18 Done Gate is Pass or Pass with risks
+ Phase 18 to Phase 19 handoff is Ready or Ready with Risks
```

If the phase is Draft or Blocked, recommend one of:

```text
continue des-lineage-metadata-design
return to Step 02 lineage, metadata, and catalog design
resolve HALT question
route back to des-serving-layer-design
route back to des-semantic-model-design
route back to des-orchestration-observability
route back to des-data-quality
des-wise
des-correct-course
```
