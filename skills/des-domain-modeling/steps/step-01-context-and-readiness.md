# Step 01 — Context and Readiness

## Goal

Confirm that Domain Modeling is the correct next step, that upstream business/product/requirement/source context is available, and that Phase 05 handoff is ready or explicitly accepted as risk.

This step does not mark Phase 06 Done.

It prepares the context needed for:

```text
initial artifact
→ support plan
→ evidence pack
→ glossary/source-to-concept validation
→ artifact revision
→ done gate
→ handoff
```

---

## Required Inputs

Look for:

* `_des-output/planning-artifacts/01-business-discovery-brief.md`;
* `_des-output/planning-artifacts/02-business-question-catalog.md`;
* `_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md`;
* `_des-output/planning-artifacts/04-data-product-specification.md`;
* `_des-output/planning-artifacts/05-data-source-inventory.md`;
* `_des-output/phase-handoffs/phase-05-to-06-handoff.md`;
* `_des-output/evidence/phase-05/phase-05-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-05-done-gate.md`, if available;
* workflow status file;
* known product outputs;
* P1/P2 business questions;
* P1/P2 requirements and KPIs;
* source-to-product mapping;
* source-to-requirement/KPI mapping;
* source-to-source-need mapping;
* source-of-truth decisions;
* known term conflicts;
* known source quality/schema/freshness/security/privacy/license risks;
* source schema/sample evidence;
* existing `06-conceptual-domain-model.md`, if present;
* existing `phase-06-support-plan.md`, if present;
* existing `phase-06-evidence-pack.md`, if present;
* existing `phase-06-to-07-handoff.md`, if present.

---

## Actions

1. Read `customize.toml`.
2. Identify these configured paths:

   * `output_file`;
   * `template_file`;
   * `checklist_file`;
   * `status_file`;
   * `phase_support_plan_file`;
   * `phase_evidence_pack_file`;
   * `phase_artifact_revision_file`;
   * `phase_done_gate_file`;
   * `phase_handoff_file`.
3. Check whether required upstream artifacts exist.
4. Check whether Phase 05 handoff exists.
5. Check whether Phase 05 Done Gate exists.
6. Read or summarize:

   * Business Discovery Brief;
   * Business Question Catalog;
   * Requirements and KPI Catalog;
   * Data Product Specification;
   * Data Source Inventory.
7. Read or summarize Phase 05 to Phase 06 Handoff if available.
8. Extract:

   * P1/P2 use cases;
   * P1/P2 business questions;
   * data product outputs;
   * source needs;
   * candidate business concepts;
   * candidate source systems;
   * source-of-truth decisions;
   * source conflicts;
   * source schema/sample caveats;
   * source quality/freshness/privacy/license caveats;
   * terms already used in artifacts;
   * candidate metrics and grains;
   * known temporal concepts;
   * open questions;
   * do-not-assume items from Phase 05.
9. Check whether existing `06-conceptual-domain-model.md` exists.
10. Check whether Phase 06 support/evidence/handoff files already exist.
11. Decide whether to:

* create a new conceptual model;
* update an existing conceptual model;
* continue Phase 06 evidence/handoff work;
* route back to Phase 05;
* stop at HALT.

---

## Hints

* Domain modeling should start from business meaning, not from source tables.
* Source schemas are evidence, not the model itself.
* Do not use this skill to design physical schemas, database tables, Bronze/Silver/Gold layouts, star schemas, Data Vault models, semantic models, dashboards, APIs, transformations, orchestration, or code.
* Business questions often reveal important entities, events, and grains.
* KPIs often reveal required grain and temporal concepts.
* Source-of-truth conflicts from Phase 05 should not be hidden.
* If no source exists for a core concept, mark the concept as business-needed but source-unconfirmed.
* If several source systems use the same term differently, record a terminology conflict.
* If the same real-world thing appears under different names, record synonym candidates.
* Carry Phase 05 caveats forward instead of cleaning them away.
* Do not treat a source field as a domain concept unless its business meaning is clear.

---

## Domain Readiness Lens

Use this lens before modeling:

| Area          | Readiness Question                                                                               |
| ------------- | ------------------------------------------------------------------------------------------------ |
| Scope         | Which part of the business domain is in this project?                                            |
| Concept       | What real-world things or events does the product need to understand?                            |
| Meaning       | What does each term mean to the business?                                                        |
| Identity      | How do we know two records refer to the same thing?                                              |
| Grain         | What does one instance of a concept represent?                                                   |
| Relationship  | How do concepts relate to each other?                                                            |
| Time          | Which timestamps matter and what do they mean?                                                   |
| Source        | Which source supports or owns each concept?                                                      |
| Caveat        | What source quality/freshness/privacy/license caveat affects this concept?                       |
| Consumer      | Which use case depends on this concept?                                                          |
| Ambiguity     | Which meanings are unresolved or conflicting?                                                    |
| Ontology-lite | Which concepts should become classes, relationships, controlled vocabularies, or glossary terms? |

---

## Phase 05 Handoff Readiness

Before generating Phase 06 domain model, classify Phase 05 readiness:

| Item                        | Status                                                   | Action                              |
| --------------------------- | -------------------------------------------------------- | ----------------------------------- |
| Data Source Inventory       | Found / Missing / Partial                                | Continue / Route back / Risk accept |
| Phase 05 Done Gate          | Pass / Pass with risks / Missing / Fail / Blocked        | Continue / Route back / Risk accept |
| Phase 05 Handoff            | Ready / Ready with Risks / Missing / Not Ready / Blocked | Continue / Route back / Risk accept |
| Approved candidate sources  | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Source-of-truth decisions   | Found / Missing / Conflict / Open                        | Continue / Resolve / Risk accept    |
| Schema/sample evidence      | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Phase 05 Do-Not-Assume list | Found / Missing                                          | Carry forward / Ask user            |
| Phase 05 open questions     | None / Some / Blocking                                   | Carry forward / Resolve             |

---

## HALT - Readiness Check Failed

Stop if upstream source assessment is missing or too weak to model the domain safely.

### Trigger

Use this HALT if:

* `05-data-source-inventory.md` is missing;
* Phase 05 handoff is missing;
* P1 product outputs have no mapped sources;
* source-of-truth decisions are missing for core concepts;
* source conflicts are unresolved and affect P1 use cases;
* source schemas or descriptions are too vague to identify concepts;
* sensitive or regulated data classification affects domain modeling but is unknown.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-data-source-assessment`
B. Continue Phase 06 as Draft using current context
C. User provides missing source/domain context now
D. Stop workflow

### Recommendation

Choose A if source-of-truth or source mapping is missing for P1 concepts.
Choose B only if the user accepts that the conceptual model remains Draft.

### Required response

Choose A/B/C/D.

---

## HALT - Missing Phase 05 Handoff

Stop if the Data Source Inventory exists but Phase 05 Done Gate or Phase 05 handoff is missing.

### Why this matters

Phase 06 should not rely on a Phase 05 artifact alone when using the Phase-Orchestrated Support Model.

### Options

A. Route back to `des-data-source-assessment` to create Done Gate and handoff
B. Continue Phase 06 as Draft with accepted risk
C. Treat current Phase 05 artifact as accepted risk and create a temporary Phase 06 support plan
D. Stop workflow

### Required response

Choose A/B/C/D.

---

## HALT - Domain Scope Required

Stop if the business domain boundary is unclear.

### Decision needed

What domain scope should this conceptual model cover?

### Options

A. Only first-release product outputs
B. P1 + P2 use cases from the data product specification
C. Entire known business domain for the project
D. One bounded context / subdomain at a time
E. Custom scope

### Recommendation

Choose A or D for MVP delivery.
Choose B if downstream design needs near-term extensibility.

### Required response

Choose A/B/C/D/E.

---

## Completion Criteria

This step is complete when:

* upstream artifacts are available or Draft continuation is approved;
* Phase 05 handoff is found or missing-handoff risk is accepted;
* domain scope is selected or marked unresolved;
* candidate concepts, entities, events, metrics, sources, source caveats, and conflicts are extracted;
* source-of-truth gaps are documented;
* existing Phase 06 files are detected if present;
* the agent knows whether to create, update, or defer the conceptual model.

## Next Step

After completion, load only:

```text
steps/step-02-domain-concepts-and-relationships.md
```
