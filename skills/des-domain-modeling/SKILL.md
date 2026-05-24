---
name: des-domain-modeling
description: Use when identifying core business concepts, glossary, ontology-lite concepts, entities, events, relationships, grains, terminology, ownership, source alignment, and ambiguity risks before modeling tables.
---

# des-domain-modeling

## Purpose

Use this skill to create and validate the Conceptual Domain Model for any data engineering project.

This skill identifies the core business concepts, entities, events, relationships, grains, terminology, ownership, source alignment, source-of-truth decisions, source caveats, and ambiguity risks that should guide later architecture, ingestion, Silver, Gold, semantic, contract, quality, and serving design.

The goal is to model the domain before modeling tables.

In the Phase-Orchestrated Support Model, this phase is not Done when the Conceptual Domain Model is first written.

Phase 06 is Done only when:

```text
Conceptual Domain Model exists
+ Phase 05 artifact and handoff are reviewed
+ domain validation work is identified
+ domain evidence is collected or waived with reason
+ artifact is revised from evidence
+ Phase 06 Done Gate passes
+ Phase 06 to Phase 07 handoff exists
```

---

## When To Use

Use this skill when:

* Phase 05 Data Source Inventory exists;
* Phase 05 handoff exists or the user explicitly accepts the risk of continuing without it;
* the project has multiple sources describing overlapping business concepts;
* source schemas do not clearly represent business meaning;
* terms, entities, events, relationships, grains, identifiers, states, or time concepts are ambiguous;
* later Silver/Gold/semantic design needs a shared vocabulary;
* an ontology-lite or glossary layer is needed before implementation design;
* the workflow router selects Phase 06.

Do not use this skill to design physical schemas, database tables, Bronze/Silver/Gold layouts, star schemas, Data Vault models, semantic models, dashboards, APIs, transformations, orchestration, or code.

---

## Required Inputs

The agent should look for:

* `_des-output/planning-artifacts/01-business-discovery-brief.md`;
* `_des-output/planning-artifacts/02-business-question-catalog.md`;
* `_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md`;
* `_des-output/planning-artifacts/04-data-product-specification.md`;
* `_des-output/planning-artifacts/05-data-source-inventory.md`;
* `_des-output/phase-handoffs/phase-05-to-06-handoff.md`;
* `_des-output/evidence/phase-05/phase-05-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-05-done-gate.md`, if available;
* workflow status file, if present;
* known source-of-truth decisions;
* source-to-product and source-to-requirement/KPI mappings;
* source-to-source-need mappings;
* known business concepts, terms, entities, events, and metrics;
* known source schema/sample caveats;
* known quality/freshness/privacy/license caveats;
* known conflicts or ambiguous definitions.

If the Data Source Inventory or Phase 05 handoff is missing or too weak, stop and ask whether to route back to `des-data-source-assessment`.

---

## Output Files

Create or update the configured main output file:

```text
_des-output/planning-artifacts/06-conceptual-domain-model.md
```

Also create or update the Phase-Orchestrated Support outputs when using validated phase delivery:

```text
_des-output/phase-support-plans/phase-06-support-plan.md
_des-output/evidence/phase-06/phase-06-evidence-pack.md
_des-output/implementation-artifacts/phase-06-artifact-revision.md
_des-output/implementation-artifacts/phase-06-done-gate.md
_des-output/phase-handoffs/phase-06-to-07-handoff.md
```

The main artifact must capture:

* domain model summary;
* domain scope;
* business glossary;
* ontology-lite concept map;
* core entities;
* domain events;
* value objects and attributes;
* relationships;
* conceptual grains;
* identifiers and identity rules;
* source alignment;
* source-of-truth mapping;
* terminology conflicts;
* synonyms and controlled vocabulary;
* domain rules;
* lifecycle/state definitions;
* temporal concepts;
* ownership/stewardship;
* downstream use-case mapping;
* source caveats and data reality constraints;
* modeling assumptions;
* risks;
* open questions;
* Phase 06 evidence summary;
* Phase 06 handoff notes;
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
8. Do not invent entity meaning, business terms, source-of-truth decisions, grain, lifecycle states, or domain rules.
9. Do not design physical schemas, tables, Medallion layers, semantic models, dashboards, APIs, transformations, orchestration, or code.
10. Before marking Phase 06 as Done, create or update the support plan, evidence pack, artifact revision notes, Done Gate, handoff, and workflow status.

---

## Process Overview

The detailed execution procedure lives in `steps/`.

At a high level, this skill will:

1. Confirm upstream source, product, requirement, and question context.
2. Confirm Phase 05 handoff readiness.
3. Extract candidate business concepts from business questions, requirements, product outputs, source inventory, and source evidence.
4. Define the domain scope.
5. Build a business glossary.
6. Build an ontology-lite concept map.
7. Define core domain entities, events, value objects, relationships, and terminology.
8. Identify conceptual grains and identity rules.
9. Map domain concepts to candidate sources and source-of-truth decisions.
10. Carry forward source caveats from Phase 05.
11. Capture domain rules, lifecycle states, and temporal concepts.
12. Ask HALT questions for ambiguous terms, identity, grain, source-of-truth, relationship, temporal, lifecycle, and ontology-boundary decisions.
13. Draft the Conceptual Domain Model.
14. Create the Phase 06 Support Plan.
15. Collect or reference Phase 06 evidence.
16. Revise the Conceptual Domain Model using evidence.
17. Run the Phase 06 Done Gate.
18. Create the Phase 06 to Phase 07 Handoff.
19. Update workflow status.
20. Recommend the next skill.

Do not execute this overview directly. Follow the step files.

---

## Phase-Orchestrated Support Model

Phase 06 uses domain validation support work.

The purpose is not physical modeling. The purpose is to prevent downstream architecture and data design from depending on vague terms, source-shaped schemas, unresolved source-of-truth decisions, or ambiguous grains.

### Required Support Work

| Support Work                    | Purpose                                                                                 | Output                      |
| ------------------------------- | --------------------------------------------------------------------------------------- | --------------------------- |
| Phase 05 Handoff Review         | Check domain model follows source evidence and caveats.                                 | Evidence pack section       |
| Business Glossary Check         | Validate terms, definitions, synonyms, and controlled vocabulary.                       | Evidence pack section       |
| Source-to-Concept Mapping Check | Map source evidence to business concepts without copying schema.                        | Evidence pack section       |
| Ontology-Lite Boundary Check    | Define classes/concepts/relationships at lightweight semantic level.                    | Evidence pack section       |
| Core Entity Identity Check      | Validate identity rule for P1 entities.                                                 | Evidence pack section       |
| Conceptual Grain Check          | Validate one-instance meaning for P1 concepts.                                          | Evidence pack section       |
| Relationship Cardinality Check  | Validate important business relationships.                                              | Evidence pack section       |
| Source-of-Truth Mapping Check   | Preserve authoritative source decisions and conflicts.                                  | Evidence pack section       |
| Terminology Conflict Check      | Record ambiguous terms and unresolved definitions.                                      | Evidence pack section       |
| Temporal Concept Check          | Define event time, processing time, effective date, snapshot/as-of date where relevant. | Evidence pack section       |
| Lifecycle State Check           | Define important entity or event states.                                                | Evidence pack section       |
| Source Caveat Propagation Check | Carry quality/freshness/privacy/license/schema caveats forward.                         | Evidence pack section       |
| Phase 06 Done Gate              | Decide whether Phase 06 is Done, Done with risks, or Blocked.                           | `phase-06-done-gate.md`     |
| Phase 06 Handoff                | Tell Phase 07 what domain assumptions architecture must support.                        | `phase-06-to-07-handoff.md` |

### Optional Support Work

Optional support work may include:

```text
ontology_lite_review
domain_term_review
source_schema_to_concept_review
concept_conflict_review
des-wise
des-learning-status-update
des-explain-artifact
des-correct-course
```

Use `des-correct-course` if Phase 06 discovers that Phase 05 source assessment is too weak or that Phase 04/03 scope conflicts with source reality.

---

## Evidence Required

Phase 06 evidence should be grounded in both business context and source evidence.

Acceptable evidence includes:

* Phase 05 Data Source Inventory;
* Phase 05 to Phase 06 handoff;
* Phase 05 evidence pack;
* source schema/sample evidence;
* source-of-truth decision;
* business glossary or stakeholder definition;
* requirement/KPI definitions;
* user-approved term definition, grain, identity, relationship, or lifecycle decision;
* accepted risk statement when information is missing.

Minimum evidence categories:

```text
phase_05_handoff_evidence
business_glossary_evidence
source_to_concept_mapping_evidence
ontology_lite_boundary_evidence
entity_identity_evidence
conceptual_grain_evidence
relationship_evidence
source_of_truth_mapping_evidence
terminology_conflict_evidence
temporal_concept_evidence
lifecycle_state_evidence
source_caveat_evidence
```

If evidence is missing, mark the item as `Ambiguous`, `Open`, `Risk`, `Deferred`, `Unknown`, or `Waived with reason`.

---

## Guardrails

The agent must not:

* copy source schema as the domain model;
* design physical tables;
* assume source field names are correct business terminology;
* treat every source column as a business concept;
* treat source schema as ontology;
* merge distinct business concepts without approval;
* split one business concept into multiple concepts without approval;
* assume primary keys from source systems are universal business identifiers;
* define Gold or Silver grain in this phase;
* choose dimensional modeling, Data Vault, normalized model, or wide table patterns in this phase;
* hide source-of-truth conflicts;
* drop Phase 05 quality/freshness/privacy/license caveats;
* mark Phase 06 Done if core entity meaning, grain, or source-of-truth is unresolved for P1 outputs without accepted risk.

---

## Quality Checklist

* [ ] Phase 05 Data Source Inventory exists or Draft continuation is explicitly accepted.
* [ ] Phase 05 handoff exists or missing handoff risk is explicitly accepted.
* [ ] Domain scope is defined or marked unresolved.
* [ ] Business glossary exists.
* [ ] Ontology-lite concept map exists or is waived with reason.
* [ ] P1 entities have business definitions, conceptual grain, identity rule, source alignment, and status.
* [ ] P1 events have subject, timing meaning, and mutability.
* [ ] Important relationships and conceptual grains are documented.
* [ ] Source-to-concept mapping is documented.
* [ ] Source-of-truth mappings and terminology conflicts are captured.
* [ ] Source caveats from Phase 05 are carried forward.
* [ ] Phase 06 support plan exists or is explicitly waived with reason.
* [ ] Phase 06 evidence pack exists or evidence is explicitly waived with reason.
* [ ] Phase 06 artifact revision notes exist.
* [ ] Phase 06 Done Gate result is recorded.
* [ ] Phase 06 to Phase 07 handoff exists.
* [ ] The artifact does not copy source schema or design physical columns, tables, Medallion layers, star schemas, semantic models, APIs, transformations, orchestration, or code.

---

## Anti-Patterns to Avoid

| Anti-Pattern                                     | Why It Fails                                                                                      |
| :----------------------------------------------- | :------------------------------------------------------------------------------------------------ |
| Copying source schemas as the domain model       | Source schema reflects implementation, not business concepts; causes technical debt in Gold.      |
| Treating source schema as ontology               | Ontology/domain model needs business meaning, not only field names.                               |
| Designing table columns before declaring grain   | Grain ambiguity propagates to Gold; query results become incorrect.                               |
| Ignoring many-to-many relationships              | Undocumented M:M joins cause fan-out bugs in Gold fact tables.                                    |
| Skipping the glossary because terms seem obvious | Terms like revenue, customer, active, crop, region, risk, or exposure can have multiple meanings. |
| Pre-aggregating in the domain model              | Aggregated grains at this stage restrict future analytical flexibility.                           |
| Ignoring source caveats                          | Architecture and design will over-trust weak or risky sources.                                    |

---

## Handoff To The Next Skill

Recommend `des-architecture-design` only after:

```text
Conceptual Domain Model exists
+ Phase 06 support plan exists or is waived with reason
+ Phase 06 evidence pack exists or evidence is waived with reason
+ Phase 06 Done Gate is Pass or Pass with risks
+ Phase 06 to Phase 07 handoff is Ready or Ready with Risks
```

If the phase is Draft or Blocked, recommend one of:

```text
continue des-domain-modeling
return to Step 02 domain concepts and relationships
resolve HALT question
route back to des-data-source-assessment
des-wise
des-correct-course
```

---

## HALT Policy

This skill must stop when a domain modeling decision cannot be safely inferred.

Stop especially when:

* source inventory is missing or incomplete;
* a core business term has multiple meanings;
* an entity identity is unclear;
* grain is unclear;
* multiple sources define the same concept differently;
* source-of-truth decision is unresolved;
* a relationship between concepts is ambiguous;
* event time versus processing time is unclear;
* lifecycle/state definitions are unclear;
* downstream P1 questions depend on unresolved domain concepts.

Detailed HALT checkpoints are defined in `steps/`.

---

## Conventions

- Bare paths such as `steps/step-01-context-and-readiness.md` resolve from the skill root.
- `{skill-root}` resolves to this skill's installed directory.
- `{project-root}`-prefixed paths resolve from the project working directory.
- Document output language follows project config.

---

## WORKFLOW ARCHITECTURE

This uses step-file architecture for disciplined execution:

- read only the current step file;
- execute steps in order;
- stop at every HALT checkpoint;
- keep unresolved decisions as open questions, not assumptions;
- run the configured checklist before status advances.
