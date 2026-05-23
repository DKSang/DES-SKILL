---
name: des-silver-layer-design
description: Use when creating the Silver Layer Specification for any data engineering project.
---

# des-silver-layer-design

## Purpose

Use this skill to create the Silver Layer Specification for any data engineering project.

This skill defines how raw or Bronze data will be cleaned, normalized, conformed, validated, deduplicated, keyed, and prepared as trusted entity/event datasets for downstream Gold, semantic, contract, and serving layers.

The Silver layer should create reliable, traceable, domain-aligned data without prematurely aggregating or packaging outputs for final consumers.

## When To Use

Use this skill when:

- Phase 9 Bronze Layer Specification exists;
- raw/Bronze datasets need cleaning, conformance, validation, or standardization;
- multiple sources describe overlapping entities or events;
- source keys, natural keys, deduplication rules, timezone handling, unit conversion, code mapping, or lifecycle states are unclear;
- downstream Gold or semantic design needs trusted entity/event foundations;
- the workflow router selects Phase 10.

Do not use this skill to design Gold marts, final business metrics, dashboards, APIs, full semantic models, orchestration implementation, or transformation code.

## Required Inputs

The agent should look for:

- `_des-output/planning-artifacts/01-business-discovery-brief.md`;
- `_des-output/planning-artifacts/02-business-question-catalog.md`;
- `_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md`;
- `_des-output/planning-artifacts/04-data-product-specification.md`;
- `_des-output/planning-artifacts/05-data-source-inventory.md`;
- `_des-output/planning-artifacts/06-conceptual-domain-model.md`;
- `_des-output/planning-artifacts/07-architecture-decision-record.md`;
- `_des-output/planning-artifacts/08-ingestion-specification.md`;
- `_des-output/planning-artifacts/09-bronze-layer-specification.md`;
- workflow status file, if present;
- Bronze dataset inventory;
- conceptual domain model;
- source-of-truth decisions;
- identity and grain rules;
- schema drift and quarantine policies;
- data quality expectations;
- security/privacy classifications;
- downstream P1/P2 requirements.

If the Bronze Layer Specification is missing or too weak, stop and ask whether to route back to `des-bronze-layer-design`.

## Output File

The output_file path is configured in `customize.toml`. Default:

Write the final artifact to:

`_des-output/planning-artifacts/10-silver-layer-specification.md`

Use the matching template from:

`_des/templates/10-silver-layer-specification-template.md`

After writing the file, summarize the file path and recommend the next skill.

## Required Outputs

The artifact must capture:

- Silver layer summary
- Silver scope and non-scope
- Silver design principles
- Bronze to Silver Mapping
- Silver Dataset Inventory
- Domain Entity and Event Alignment
- Conceptual to Logical Mapping
- Grain and Identity Rules
- Key Strategy
- Deduplication and Survivorship Rules
- Conformance and Standardization Rules
- Data Type Normalization
- Timezone and Temporal Normalization
- Unit and Currency Normalization
- Code Status and Category Mapping
- Null and Missing Value Handling
- Schema Evolution Handling
- Source of Truth and Cross Source Reconciliation
- Silver Boundary Data Quality Rules
- Rejected and Quarantined Record Handling
- Privacy and Security Handling
- Lineage and Traceability
- Refresh and Incremental Behavior
- Risks
- Assumptions
- Open Questions
- Next Skill Recommendation

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, `status_file`, and required upstream artifacts.
4. Load only `steps/step-01-context-and-readiness.md`.
5. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
6. Stop at every `HALT` point and wait for user input.
7. Do not invent canonical definitions, key strategies, deduplication rules, survivorship rules, unit conversions, timezone rules, or status mappings.
8. Do not design detailed Gold tables, semantic models, dashboards, APIs, or write pipeline implementation code.
9. Before marking the artifact as Done, run the configured checklist and update workflow status.

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm upstream Bronze, domain, source, requirement, and architecture context.
2. Identify in-scope Bronze datasets.
3. Define Silver entity/event datasets aligned to the conceptual domain model.
4. Define grain, identity, key, deduplication, and survivorship rules.
5. Define normalization and conformance rules.
6. Define Silver boundary quality rules and rejected record handling.
7. Define privacy/security, lineage, and incremental refresh expectations.
8. Ask HALT questions for unresolved entity, identity, conformance, quality, or source-of-truth decisions.
9. Draft the Silver Layer Specification.
10. Run the checklist, update workflow status, and recommend the next skill.

Do not execute this overview directly. Follow the step files.

## Guardrails

The agent must not:

- treat Silver as a final reporting mart;
- create final business aggregates in Silver unless explicitly justified as reusable conformed entities;
- hide source conflicts by silently picking a source;
- deduplicate without an approved rule;
- create surrogate/canonical keys without identity rules;
- standardize units, statuses, categories, or timezones without explicit mapping;
- drop records silently;
- remove sensitive fields without documenting handling;
- break traceability back to Bronze;
- mark Silver datasets Ready if grain, key, source mapping, quality rules, or lineage are unresolved.

## HALT Policy

This skill must stop when a Silver design decision cannot be safely inferred.

Stop especially when:

- upstream Bronze specification is missing;
- Silver dataset boundary is unclear;
- domain entity/event alignment is unclear;
- grain or identity rule is unclear;
- source-of-truth or cross-source reconciliation is unresolved;
- key strategy is unclear;
- deduplication/survivorship rule is unclear;
- timezone, unit, code, status, or category mapping is unclear;
- null/missing value handling is unclear;
- Silver quality rules are unclear;
- sensitive data handling is unclear;
- lineage from Silver back to Bronze is missing.

## Conventions

- Bare paths such as `steps/step-01-context-and-readiness.md` resolve from the skill root.
- `{skill-root}` resolves to this skill's installed directory.
- `{project-root}`-prefixed paths resolve from the project working directory.
- Document output language follows project config.

## WORKFLOW ARCHITECTURE

This uses step-file architecture for disciplined execution:

- read only the current step file;
- execute steps in order;
- stop at every HALT checkpoint;
- keep unresolved decisions as open questions, not assumptions;
- run the configured checklist before status advances.

## Quality Checklist

- [ ] Each P1 Bronze dataset maps to a Silver dataset or is explicitly deferred.
- [ ] Each P1 Silver dataset has a declared grain, identity rule, and key strategy.
- [ ] Conformance and standardization rules (timezone, naming, typing, currency) are documented.
- [ ] Deduplication and survivorship rules are specified.
- [ ] Null/missing value handling is explicitly defined.
- [ ] Schema evolution policy is defined.
- [ ] Silver boundary data quality rules are established.
- [ ] Rejected/quarantined record handling is documented.
- [ ] Privacy and security classification/handling is decided.
- [ ] Lineage and traceability fields back to Bronze are defined.
- [ ] The artifact does not design detailed Gold tables, write transformations, or include pipeline implementation code.

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
| :--- | :--- |
| Mixing business aggregates into Silver | Silver is a conformed source layer, not a reporting layer; aggregates belong in Gold |
| Hiding invalid records (silent drop) | Invisible data loss; no way to audit or fix root cause |
| Leaving source-specific naming (e.g., `tbl_ord_id`) | Downstream consumers inherit technical debt; cross-domain joins break |
| Ignoring late-arriving data | Late CDC events silently create duplicates if not handled in the merge window |
| SCD Type 2 for every dimension by default | Over-complicates data model; only use SCD2 when history is explicitly required |
| Re-running Silver without idempotency | Multiple runs create duplicate rows; partition overwrite or MERGE must be confirmed idempotent |

## Handoff To The Next Skill

Recommend `des-gold-layer-design` only after the Silver Layer Specification is complete or explicitly marked Draft with open questions and accepted risks.
