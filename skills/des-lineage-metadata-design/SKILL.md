---
name: des-lineage-metadata-design
description: Use when documenting data lineage, cataloging business/technical/operational metadata, assigning stewardship, and ensuring auditability for data trust.
---

# des-lineage-metadata-design

## Purpose

Use this skill to create the Lineage and Metadata Specification for any data engineering project.

This skill defines how business metadata, technical metadata, operational metadata, reference metadata, lineage, catalog entries, ownership, definitions, quality status, contracts, run evidence, and usage metadata will be captured, organized, exposed, and governed.

The goal is to make the data product discoverable, explainable, auditable, debuggable, and governable across source, ingestion, Bronze, Silver, Gold, semantic, and serving layers.

## When To Use

Use this skill when:

- Phase 17 Serving Layer Specification exists;
- data products, datasets, metrics, contracts, transformations, quality rules, and serving outputs need lineage and metadata;
- users need data catalog, data dictionary, glossary, ownership, field definitions, run metadata, quality status, or lineage graph;
- compliance, audit, troubleshooting, impact analysis, or deletion requests require traceability;
- AI/data-agent usage requires trustworthy semantic and lineage metadata;
- the workflow router selects Phase 18.

Do not use this skill to implement a catalog tool, write lineage extraction code, build metadata crawlers, deploy governance tools, or create CI/CD workflows.

## Required Inputs

The agent should look for:

- `.agents/des-skill/output/01-business-discovery-brief.md`;
- `.agents/des-skill/output/02-business-question-catalog.md`;
- `.agents/des-skill/output/03-requirements-and-kpi-catalog.md`;
- `.agents/des-skill/output/04-data-product-specification.md`;
- `.agents/des-skill/output/05-data-source-inventory.md`;
- `.agents/des-skill/output/06-conceptual-domain-model.md`;
- `.agents/des-skill/output/08-ingestion-specification.md`;
- `.agents/des-skill/output/09-bronze-layer-specification.md`;
- `.agents/des-skill/output/10-silver-layer-specification.md`;
- `.agents/des-skill/output/11-gold-layer-specification.md`;
- `.agents/des-skill/output/12-data-contract-specification.md`;
- `.agents/des-skill/output/13-transformation-specification.md`;
- `.agents/des-skill/output/14-data-quality-specification.md`;
- `.agents/des-skill/output/15-orchestration-observability-specification.md`;
- `.agents/des-skill/output/16-semantic-model-specification.md`;
- `.agents/des-skill/output/17-serving-layer-specification.md`;
- workflow status file, if present;
- dataset inventory;
- metric inventory;
- contract inventory;
- transformation inventory;
- quality rule inventory;
- workflow/run evidence;
- serving output inventory;
- ownership and stewardship decisions.

If Serving Layer Specification is missing or too weak, stop and ask whether to route back to `des-serving-layer-design`.

## Output File

Create or update:

```text
.agents/des-skill/output/18-lineage-metadata-specification.md
```

The artifact must capture:

* lineage and metadata summary;
* metadata scope and non-scope;
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
* risks;
* assumptions;
* open questions;
* next skill recommendation.

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, `status_file`, and required upstream artifacts.
4. Load only `steps/step-01-context-and-readiness.md`.
5. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
6. Stop at every `HALT` point and wait for user input.
7. Do not invent owners, definitions, lineage paths, catalog fields, quality status, or compliance requirements.
8. Do not implement catalog, lineage extractor, crawler, OpenLineage, Purview, DataHub, Collibra, dbt docs, or any metadata tool code.
9. Before marking the artifact as Done, run the configured checklist and update workflow status.

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm upstream dataset, transformation, contract, quality, semantic, serving, and ownership context.
2. Define metadata categories (business, technical, operational, reference).
3. Inventory data assets and map metadata requirements.
4. Design lineage depth and column-level expectations.
5. Define catalog fields and trust metadata exposure.
6. Define usage, audit, version, and compliance metadata.
7. Define metadata capture responsibilities and maintenance policy.
8. Ask HALT questions for unresolved lineage/metadata decisions.
9. Draft the Lineage and Metadata Specification.
10. Run the checklist, update workflow status, and recommend the next skill.

Do not execute this overview directly. Follow the step files.

## Guardrails

The agent must not:

* treat metadata as only table descriptions;
* ignore operational metadata from workflows and runs;
* ignore reference metadata such as code lists, units, calendars, and mappings;
* ignore ownership and accountability;
* expose undocumented or uncertified datasets as trusted;
* claim column-level lineage exists unless capture method is defined;
* ignore metadata maintenance and freshness;
* ignore downstream usage metadata;
* ignore compliance/audit traceability;
* mark lineage design Done if P1 outputs cannot trace back to upstream datasets, transformations, contracts, quality status, and owners.

## HALT Policy

This skill must stop when a lineage or metadata decision cannot be safely inferred.

Stop especially when:

* serving output or dataset inventory is missing;
* ownership is unclear;
* business definitions are missing;
* lineage depth is unclear;
* column-level lineage requirement is unclear;
* metric metadata conflicts with KPI definitions;
* quality/trust metadata is unclear;
* operational run metadata is missing;
* catalog exposure level is unclear;
* compliance/audit requirement is unclear;
* metadata maintenance owner is missing.

Detailed HALT checkpoints are defined in `steps/`.

## Quality Checklist

- [ ] Metadata scope and principles are defined.
- [ ] Business, technical, operational, and reference metadata are covered.
- [ ] Metadata inventory is created.
- [ ] Dataset catalog requirements and field definitions are documented.
- [ ] Lineage depth and column-level expectations are specified.
- [ ] Quality, trust, and contract metadata exposure is defined.
- [ ] Ownership and stewardship metadata is complete.
- [ ] Usage, version, and audit metadata requirements are captured.
- [ ] Metadata capture methods and maintenance policy are defined.
- [ ] Artifact does not implement catalog or lineage tooling code.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Metadata as one-time documentation | Metadata becomes stale and untrustworthy almost immediately |
| Ignoring operational metadata | Prevents debugging, audit, and understanding actual run state |
| Missing ownership | Assets without owners are neither maintained nor governed |
| Claiming lineage without capture method | Designs a "wish list" that implementation cannot deliver |
| Hiding trust signals | Consumers cannot distinguish between Draft and Certified data |
| Treating metadata as technical only | Business users cannot discover or understand the data product |

## Handoff To The Next Skill

Recommend `des-governance-security-design` only after the Lineage and Metadata Specification is complete or explicitly marked Draft with open questions and accepted risk.
