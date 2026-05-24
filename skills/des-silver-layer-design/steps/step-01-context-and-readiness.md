# Step 01 — Context and Readiness

## Goal

Confirm that Silver Layer Design is the correct next step, that upstream Bronze/domain/source/architecture/requirement/product context is available, and that Phase 09 handoff is ready or explicitly accepted as risk.

This step does not mark Phase 10 Done.

It prepares the context needed for:

```text
initial artifact
→ support plan
→ evidence pack
→ grain / identity / key / conformance / DQ / lineage validation
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
* `_des-output/planning-artifacts/06-conceptual-domain-model.md`;
* `_des-output/planning-artifacts/07-architecture-decision-record.md`;
* `_des-output/planning-artifacts/08-ingestion-specification.md`;
* `_des-output/planning-artifacts/09-bronze-layer-specification.md`;
* `_des-output/phase-handoffs/phase-09-to-10-handoff.md`;
* `_des-output/evidence/phase-09/phase-09-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-09-done-gate.md`, if available;
* workflow status file;
* Bronze dataset inventory;
* raw preservation and metadata rules;
* schema drift and quarantine policy;
* Bronze boundary quality expectations;
* conceptual domain entities/events;
* source-of-truth decisions;
* identity and grain rules;
* P1/P2 requirements and quality expectations;
* source sensitivity classifications;
* downstream product outputs;
* existing `10-silver-layer-specification.md`, if present;
* existing `phase-10-support-plan.md`, if present;
* existing `phase-10-evidence-pack.md`, if present;
* existing `phase-10-to-11-handoff.md`, if present.

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
4. Check whether Phase 09 handoff exists.
5. Check whether Phase 09 Done Gate exists.
6. Read or summarize:

   * Business Discovery Brief;
   * Business Question Catalog;
   * Requirements and KPI Catalog;
   * Data Product Specification;
   * Data Source Inventory;
   * Conceptual Domain Model;
   * Architecture Decision Record;
   * Ingestion Specification;
   * Bronze Layer Specification.
7. Read or summarize Phase 09 to Phase 10 Handoff if available.
8. Extract:

   * P1/P2 Bronze datasets;
   * Bronze metadata and lineage fields;
   * Bronze schema drift and quarantine behavior;
   * domain entities/events needed for downstream outputs;
   * conceptual grains and identity rules;
   * source-of-truth mappings;
   * known terminology conflicts;
   * source schema drift risks;
   * quality expectations;
   * privacy/security constraints;
   * downstream P1/P2 requirements;
   * open questions;
   * do-not-assume items from Phase 09.
9. Check whether existing `10-silver-layer-specification.md` exists.
10. Check whether Phase 10 support/evidence/handoff files already exist.
11. Decide whether to:

* create a new Silver specification;
* update an existing Silver specification;
* continue Phase 10 evidence/handoff work;
* route back to Phase 09;
* route back to Phase 06;
* stop at HALT.

---

## Hints

* Silver should be domain-aligned and trustworthy, not consumer-specific like Gold.
* Silver usually cleans, standardizes, deduplicates, validates, and conforms.
* Treat Bronze as evidence and raw input, not as a business model.
* Use the conceptual domain model to decide entity/event meaning.
* Use source-of-truth decisions to guide cross-source reconciliation.
* If identity is not settled, use source-aligned Silver as an interim design.
* If multiple sources conflict, record survivorship rules or keep source-specific datasets.
* If records fail Silver rules, define reject/quarantine handling rather than dropping silently.
* Keep lineage back to Bronze.
* Metadata can be reduced from Bronze, but not enough to break traceability.
* Do not design detailed Gold tables, final metrics, semantic models, dashboards, APIs, or write pipeline implementation code.

---

## Silver Readiness Lens

Use this lens before designing:

| Area            | Readiness Question                                               |
| --------------- | ---------------------------------------------------------------- |
| Input           | Which Bronze datasets feed this Silver dataset?                  |
| Domain          | Which entity/event/concept does this Silver dataset represent?   |
| Grain           | What does one Silver record represent?                           |
| Identity        | How is the entity/event identified across records and sources?   |
| Key             | Which key strategy supports this identity and refresh behavior?  |
| Source of truth | Which source wins when values conflict?                          |
| Conformance     | What must be standardized or mapped?                             |
| Quality         | What checks prove data is trustworthy enough for Gold?           |
| Rejection       | What happens to records that cannot be conformed?                |
| Security        | Which fields remain sensitive after Silver processing?           |
| Lineage         | Can each Silver record be traced back to Bronze/source evidence? |
| Metadata        | Which Bronze metadata must be preserved into Silver?             |

---

## Phase 09 Handoff Readiness

Before generating Phase 10 Silver design, classify Phase 09 readiness:

| Item                           | Status                                                   | Action                              |
| ------------------------------ | -------------------------------------------------------- | ----------------------------------- |
| Bronze Layer Specification     | Found / Missing / Partial                                | Continue / Route back / Risk accept |
| Phase 09 Done Gate             | Pass / Pass with risks / Missing / Fail / Blocked        | Continue / Route back / Risk accept |
| Phase 09 Handoff               | Ready / Ready with Risks / Missing / Not Ready / Blocked | Continue / Route back / Risk accept |
| Bronze dataset inventory       | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Bronze metadata and lineage    | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Schema drift/quarantine policy | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Phase 09 Do-Not-Assume list    | Found / Missing                                          | Carry forward / Ask user            |
| Phase 09 open questions        | None / Some / Blocking                                   | Carry forward / Resolve             |

---

## HALT - Readiness Check Failed

Stop if upstream Bronze context, architecture context, or source/domain context is missing or too weak to design Silver safely.

### Trigger

Use this HALT if:

* `09-bronze-layer-specification.md` is missing;
* Phase 09 handoff is missing;
* P1 Bronze datasets are not defined;
* Bronze metadata is missing;
* schema drift or quarantine policy is unclear;
* lineage fields needed for traceability are missing;
* raw sensitive access policy affects Silver but is unresolved;
* domain alignment, grain, or identity is missing for P1 concepts.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-bronze-layer-design`
B. Route back to `des-domain-modeling` if entity/grain/identity is unclear
C. Continue Phase 10 as Draft using current context
D. User provides missing Silver context now
E. Stop workflow

### Recommendation

Choose A if Bronze datasets, metadata, drift, or lineage policy is missing.
Choose B if domain alignment, grain, or identity is missing.
Choose C only if the user accepts that Silver design remains Draft.

### Required response

Choose A/B/C/D/E.

---

## HALT - Missing Phase 09 Handoff

Stop if the Bronze Layer Specification exists but Phase 09 Done Gate or Phase 09 handoff is missing.

### Why this matters

Phase 10 should not rely on a Phase 09 artifact alone when using the Phase-Orchestrated Support Model.

### Options

A. Route back to `des-bronze-layer-design` to create Done Gate and handoff
B. Continue Phase 10 as Draft with accepted risk
C. Treat current Phase 09 artifact as accepted risk and create a temporary Phase 10 support plan
D. Stop workflow

### Required response

Choose A/B/C/D.

---

## HALT - Silver Dataset Boundary

Stop if it is unclear how Bronze datasets should map to Silver datasets.

### Decision needed

How should Silver dataset boundaries be defined?

### Options

A. One Silver dataset per domain entity
B. One Silver dataset per domain event
C. One Silver dataset per source-conformed entity/event
D. One Silver dataset per source object with light cleaning only
E. One Silver dataset per reusable low-level fact
F. Custom boundary
G. Keep as Draft pending domain/source clarification

### Recommendation

Prefer A/B for domain-aligned Silver.
Use C when cross-source conformance is not ready.

### Required response

Choose A/B/C/D/E/F/G.

---

## Completion Criteria

This step is complete when:

* upstream artifacts are available or Draft continuation is approved;
* Phase 09 handoff is found or missing-handoff risk is accepted;
* P1 Bronze datasets are identified;
* P1 domain entities/events are identified;
* Silver dataset boundary decision is known or marked unresolved;
* identity, conformance, quality, lineage, metadata inheritance, and security gaps are documented;
* existing Phase 10 files are detected if present;
* the agent knows whether to create, update, or defer the Silver specification.

## Next Step

After completion, load only:

```text
steps/step-02-silver-entity-and-conformance-decisions.md
```
