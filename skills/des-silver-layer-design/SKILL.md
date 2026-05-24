---
name: des-silver-layer-design
description: Use when creating the Silver Layer Specification for cleaned, normalized, conformed, validated, deduplicated, keyed, traceable, domain-aligned entity/event datasets before Gold design.
---

# des-silver-layer-design

## Purpose

Use this skill to create and validate the Silver Layer Specification for any data engineering project.

This skill defines how raw or Bronze data will be cleaned, normalized, conformed, validated, deduplicated, keyed, privacy-handled, and prepared as trusted entity/event datasets for downstream Gold, semantic, contract, and serving layers.

The Silver layer should create reliable, traceable, domain-aligned data without prematurely aggregating or packaging outputs for final consumers.

Silver should answer:

```text
What trusted entity/event datasets do we need,
at what grain,
with what identity/key rules,
using what conformance, quality, security, and lineage rules?
```

In the Phase-Orchestrated Support Model, this phase is not Done when the Silver Layer Specification is first written.

Phase 10 is Done only when:

```text
Silver Layer Specification exists
+ Phase 09 artifact and handoff are reviewed
+ Silver validation work is identified
+ Silver evidence is collected or waived with reason
+ artifact is revised from evidence
+ Phase 10 Done Gate passes
+ Phase 10 to Phase 11 handoff exists
```

---

## When To Use

Use this skill when:

* Phase 09 Bronze Layer Specification exists;
* Phase 09 handoff exists or the user explicitly accepts the risk of continuing without it;
* raw/Bronze datasets need cleaning, conformance, validation, or standardization;
* multiple sources describe overlapping entities or events;
* source keys, natural keys, deduplication rules, timezone handling, unit conversion, code mapping, or lifecycle states are unclear;
* downstream Gold or semantic design needs trusted entity/event foundations;
* the workflow router selects Phase 10.

Do not use this skill to design Gold marts, final business metrics, dashboards, APIs, full semantic models, orchestration implementation, CI/CD workflow files, or transformation code.

Allowed in this phase:

```text
Silver dataset boundary design
domain entity/event alignment
conceptual-to-logical mapping
grain and identity rule design
key strategy
deduplication and survivorship rule design
conformance and standardization rules
data type/timezone/unit/code normalization
Silver boundary DQ rules
rejected/quarantined record handling
metadata inheritance and lineage design
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
* `_des-output/planning-artifacts/07-architecture-decision-record.md`;
* `_des-output/planning-artifacts/08-ingestion-specification.md`;
* `_des-output/planning-artifacts/09-bronze-layer-specification.md`;
* `_des-output/phase-handoffs/phase-09-to-10-handoff.md`;
* `_des-output/evidence/phase-09/phase-09-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-09-done-gate.md`, if available;
* workflow status file, if present;
* Bronze dataset inventory;
* Bronze metadata and lineage rules;
* Bronze schema drift and quarantine policy;
* conceptual domain model;
* source-of-truth decisions;
* identity and grain rules;
* source caveats and terminology conflicts;
* P1/P2 requirements and quality expectations;
* source sensitivity classifications;
* downstream product outputs.

If the Bronze Layer Specification or Phase 09 handoff is missing or too weak, stop and ask whether to route back to `des-bronze-layer-design`.

---

## Output Files

Create or update the configured main output file:

```text
_des-output/planning-artifacts/10-silver-layer-specification.md
```

Also create or update the Phase-Orchestrated Support outputs when using validated phase delivery:

```text
_des-output/phase-support-plans/phase-10-support-plan.md
_des-output/evidence/phase-10/phase-10-evidence-pack.md
_des-output/implementation-artifacts/phase-10-artifact-revision.md
_des-output/implementation-artifacts/phase-10-done-gate.md
_des-output/phase-handoffs/phase-10-to-11-handoff.md
```

The main artifact must capture:

* Silver layer summary;
* Silver scope;
* Silver non-scope;
* Silver design principles;
* Bronze to Silver mapping;
* Silver dataset inventory;
* domain entity and event alignment;
* conceptual to logical mapping;
* grain and identity rules;
* key strategy;
* deduplication and survivorship rules;
* conformance and standardization rules;
* data type normalization;
* timezone and temporal normalization;
* unit and currency normalization;
* code/status/category mapping;
* null and missing value handling;
* schema evolution handling;
* source-of-truth and cross-source reconciliation;
* Silver boundary data quality rules;
* rejected and quarantined record handling;
* privacy and security handling;
* lineage and traceability;
* metadata inheritance from Bronze;
* refresh and incremental behavior;
* Silver evidence summary;
* risks;
* assumptions;
* open questions;
* Phase 10 evidence summary;
* Phase 10 handoff notes;
* next skill recommendation.

---

## On Activation

1. Read this `SKILL.md` completely.
2. Read `customize.toml`.
3. Identify `output_file`, `template_file`, `checklist_file`, and `status_file`.
4. Load only `steps/step-01-context-and-readiness.md`.
5. Do not load step-02 or step-03 until the current step explicitly instructs you to continue.
6. Stop at every HALT point and wait for user input.
7. Do not invent canonical definitions, key strategies, deduplication rules, survivorship rules, unit conversions, timezone rules, status mappings, or source-of-truth choices.
8. Do not design detailed Gold tables, final metrics, semantic models, dashboards, APIs, orchestration implementation, CI/CD files, or transformation code.
9. Before marking Phase 10 as Done, create or update the support plan, evidence pack, artifact revision notes, Done Gate, handoff, and workflow status.

---

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm upstream Bronze, domain, source, requirement, and architecture context.
2. Confirm Phase 09 handoff readiness.
3. Identify in-scope Bronze datasets.
4. Define Silver entity/event datasets aligned to the conceptual domain model.
5. Define conceptual-to-logical mapping.
6. Define grain, identity, key, deduplication, and survivorship rules.
7. Define normalization and conformance rules.
8. Define Silver boundary quality rules and rejected/quarantined record handling.
9. Define privacy/security, metadata inheritance, lineage, and incremental refresh expectations.
10. Ask HALT questions for unresolved entity, identity, conformance, quality, source-of-truth, privacy, or lineage decisions.
11. Draft the Silver Layer Specification.
12. Create the Phase 10 Support Plan.
13. Collect or reference Phase 10 evidence.
14. Revise the Silver Layer Specification using evidence.
15. Run the Phase 10 Done Gate.
16. Create the Phase 10 to Phase 11 Handoff.
17. Update workflow status.
18. Recommend the next skill.

Do not execute this overview directly. Follow the step files.

---

## Phase-Orchestrated Support Model

Phase 10 uses Silver validation support work.

The purpose is not final reporting. The purpose is to make trusted, reusable entity/event datasets that Gold can aggregate or package safely.

### Required Support Work

| Support Work                          | Purpose                                                                                 | Output                      |
| ------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------- |
| Phase 09 Handoff Review               | Check Silver design follows approved Bronze constraints and caveats.                    | Evidence pack section       |
| Bronze-to-Silver Mapping Check        | Ensure each P1 Bronze dataset maps to Silver or is deferred/blocked.                    | Evidence pack section       |
| Domain Alignment Check                | Validate Silver datasets align to domain entities/events/facts.                         | Evidence pack section       |
| Conceptual-to-Logical Mapping Check   | Validate domain concepts map to logical Silver fields.                                  | Evidence pack section       |
| Grain/Identity Check                  | Validate one-record meaning and identity rules.                                         | Evidence pack section       |
| Key Strategy Check                    | Validate natural/composite/surrogate/hash/crosswalk key choice.                         | Evidence pack section       |
| Dedup/Survivorship Check              | Validate duplicate/conflict handling.                                                   | Evidence pack section       |
| Conformance/Standardization Check     | Validate naming, values, statuses, units, and source conformance.                       | Evidence pack section       |
| Data Type Normalization Check         | Validate type and precision rules.                                                      | Evidence pack section       |
| Timezone/Temporal Normalization Check | Validate event/business/processing time handling.                                       | Evidence pack section       |
| Unit/Currency Normalization Check     | Validate measurement and currency conversions.                                          | Evidence pack section       |
| Code/Status/Category Mapping Check    | Validate canonical or source-specific mappings.                                         | Evidence pack section       |
| Null/Missing Handling Check           | Validate unknown/not-applicable/redacted/error semantics.                               | Evidence pack section       |
| Schema Evolution Handling Check       | Validate Silver response to Bronze/schema drift.                                        | Evidence pack section       |
| Source-of-Truth Reconciliation Check  | Validate authoritative source and conflict rules.                                       | Evidence pack section       |
| Silver Boundary Quality Check         | Validate required rules for trusted Silver.                                             | Evidence pack section       |
| Rejected/Quarantine Handling Check    | Validate invalid record handling.                                                       | Evidence pack section       |
| Privacy/Security Handling Check       | Validate masking, restricted columns/datasets, pseudonymization, or retention handling. | Evidence pack section       |
| Lineage/Traceability Check            | Validate trace back to Bronze/source/run/file.                                          | Evidence pack section       |
| Metadata Inheritance Check            | Validate which Bronze metadata must remain in Silver.                                   | Evidence pack section       |
| Refresh/Incremental Behavior Check    | Validate Silver update strategy.                                                        | Evidence pack section       |
| Phase 10 Done Gate                    | Decide whether Phase 10 is Done, Done with risks, or Blocked.                           | `phase-10-done-gate.md`     |
| Phase 10 Handoff                      | Tell Phase 11 what Gold design can safely consume.                                      | `phase-10-to-11-handoff.md` |

### Optional Support Work

Optional support work may include:

```text
silver_transform_spike
profiling_review
dq_sampling_review
standardization_rule_review
schema_evolution_review
lineage_metadata_review
privacy_security_review
des-wise
des-learning-status-update
des-explain-artifact
des-correct-course
```

Use `des-correct-course` if Phase 10 discovers that Bronze design, domain model, source-of-truth decisions, or privacy posture are too weak to support safe Silver design.

---

## Evidence Required

Phase 10 evidence should justify ingestion controls.

Acceptable evidence includes:

* Phase 09 Bronze Layer Specification;
* Phase 09 to Phase 10 handoff;
* Phase 09 evidence pack;
* Phase 06 Conceptual Domain Model;
* source-of-truth decisions;
* grain/identity decisions;
* source schema/profile evidence;
* mapping tables or approved vocabulary;
* DQ sampling/profiling result;
* privacy/security classification;
* lineage metadata requirement;
* accepted risk statement when information is missing.

Minimum evidence categories:

```text
phase_09_handoff_evidence
bronze_to_silver_mapping_evidence
domain_alignment_evidence
conceptual_to_logical_mapping_evidence
grain_identity_evidence
key_strategy_evidence
dedup_survivorship_evidence
conformance_standardization_evidence
data_type_normalization_evidence
timezone_temporal_normalization_evidence
unit_currency_normalization_evidence
code_status_category_mapping_evidence
null_missing_handling_evidence
schema_evolution_handling_evidence
source_of_truth_reconciliation_evidence
silver_boundary_quality_evidence
rejected_quarantine_handling_evidence
privacy_security_handling_evidence
lineage_traceability_evidence
metadata_inheritance_evidence
refresh_incremental_behavior_evidence
```

If evidence is missing, mark the item as `Draft`, `Open`, `Risk`, `Deferred`, `Blocked`, `Unknown`, or `Waived with reason`.

---

## HALT Policy

This skill must stop when a required decision cannot be safely inferred.

Stop especially when:

* upstream bronze layers are unknown;
* source records are untraceable.

Detailed HALT checkpoints are defined in steps/.

---

## Guardrails

The agent must not:

* treat Silver as a final reporting mart;
* create final business aggregates in Silver unless explicitly justified as reusable conformed low-level facts;
* hide source conflicts by silently picking a source;
* deduplicate without an approved rule;
* create surrogate/canonical keys without identity rules;
* standardize units, statuses, categories, or timezones without explicit mapping;
* drop records silently;
* remove sensitive fields without documenting handling;
* break traceability back to Bronze;
* drop all Bronze metadata without a traceability replacement;
* mark Silver datasets Ready if grain, key, source mapping, quality rules, privacy/security handling, or lineage are unresolved;
* design detailed Gold tables, final metrics, semantic models, dashboards, APIs, orchestration implementation, CI/CD files, or code.

---

## Quality Checklist

* [ ] Phase 09 Bronze Layer Specification exists or Draft continuation is explicitly accepted.
* [ ] Phase 09 handoff exists or missing handoff risk is explicitly accepted.
* [ ] Each P1 Bronze dataset maps to a Silver dataset or is explicitly deferred/blocked.
* [ ] Each P1 Silver dataset has declared domain alignment.
* [ ] Each P1 Silver dataset has declared grain, identity rule, and key strategy.
* [ ] Conformance and standardization rules are documented.
* [ ] Data type normalization rules are documented.
* [ ] Timezone/temporal normalization is documented where relevant.
* [ ] Unit/currency normalization is documented where relevant.
* [ ] Code/status/category mapping is documented where relevant.
* [ ] Deduplication and survivorship rules are specified where duplicates/conflicts exist.
* [ ] Null/missing value handling is explicitly defined.
* [ ] Schema evolution policy is defined.
* [ ] Source-of-truth and reconciliation rules are documented.
* [ ] Silver boundary data quality rules are established.
* [ ] Rejected/quarantined record handling is documented.
* [ ] Privacy and security classification/handling is decided.
* [ ] Lineage and traceability fields back to Bronze/source are defined.
* [ ] Bronze metadata inheritance is documented.
* [ ] Phase 10 support plan exists or is explicitly waived with reason.
* [ ] Phase 10 evidence pack exists or evidence is explicitly waived with reason.
* [ ] Phase 10 artifact revision notes exist.
* [ ] Phase 10 Done Gate result is recorded.
* [ ] Phase 10 to Phase 11 handoff exists.
* [ ] The artifact does not design detailed Gold tables, final metrics, semantic models, dashboards, APIs, orchestration implementation, CI/CD files, or code.

---

## Anti-Patterns to Avoid

| Anti-Pattern                                 | Why It Fails                                                                                |
| :------------------------------------------- | :------------------------------------------------------------------------------------------ |
| Mixing business aggregates into Silver       | Silver is a conformed entity/event layer, not a reporting layer; aggregates belong in Gold. |
| Hiding invalid records with silent drop      | Creates invisible data loss and no way to audit or fix root cause.                          |
| Leaving source-specific naming as canonical  | Downstream consumers inherit technical debt; cross-domain joins break.                      |
| Ignoring late-arriving data                  | Late CDC/events can create duplicates or incorrect current state.                           |
| Using SCD Type 2 for every entity by default | Over-complicates the model; only track history where explicitly required.                   |
| Re-running Silver without idempotency        | Multiple runs create duplicate rows; overwrite/MERGE/idempotent logic must be designed.     |
| Dropping lineage metadata too early          | Gold/debugging cannot trace back to Bronze/source when issues appear.                       |

---

## Handoff To The Next Skill

Recommend `des-gold-layer-design` only after:

```text
Silver Layer Specification exists
+ Phase 10 support plan exists or is waived with reason
+ Phase 10 evidence pack exists or evidence is waived with reason
+ Phase 10 Done Gate is Pass or Pass with risks
+ Phase 10 to Phase 11 handoff is Ready or Ready with Risks
```

If the phase is Draft or Blocked, recommend one of:

```text
continue des-silver-layer-design
return to Step 02 Silver entity and conformance decisions
resolve HALT question
route back to des-bronze-layer-design
route back to des-domain-modeling
route back to des-data-source-assessment
des-wise
des-correct-course
```
