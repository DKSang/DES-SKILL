# Step 01 — Context and Readiness

## Goal

Confirm that Gold Layer Design is the correct next step, that upstream Silver/KPI/product/question/architecture/serving context is available, and that Phase 10 handoff is ready or explicitly accepted as risk.

This step does not mark Phase 11 Done.

It prepares the context needed for:

```text
initial artifact
→ support plan
→ evidence pack
→ business question / KPI / grain / aggregation / serving validation
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
* `_des-output/planning-artifacts/10-silver-layer-specification.md`;
* `_des-output/phase-handoffs/phase-10-to-11-handoff.md`;
* `_des-output/evidence/phase-10/phase-10-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-10-done-gate.md`, if available;
* workflow status file;
* P1/P2 business questions;
* approved KPIs and metric definitions;
* P1/P2 functional and non-functional requirements;
* data product outputs;
* serving direction from architecture;
* Silver dataset inventory;
* Silver grain and identity rules;
* Silver quality risks;
* Silver source-of-truth/reconciliation decisions;
* freshness/SLA expectations;
* security/privacy constraints;
* consumer access expectations;
* existing `11-gold-layer-specification.md`, if present;
* existing `phase-11-support-plan.md`, if present;
* existing `phase-11-evidence-pack.md`, if present;
* existing `phase-11-to-12-handoff.md`, if present.

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
4. Check whether Phase 10 handoff exists.
5. Check whether Phase 10 Done Gate exists.
6. Read or summarize:

   * Business Discovery Brief;
   * Business Question Catalog;
   * Requirements and KPI Catalog;
   * Data Product Specification;
   * Data Source Inventory;
   * Conceptual Domain Model;
   * Architecture Decision Record;
   * Ingestion Specification;
   * Bronze Layer Specification;
   * Silver Layer Specification.
7. Read or summarize Phase 10 to Phase 11 Handoff if available.
8. Extract:

   * P1/P2 business questions;
   * approved KPIs and candidate metrics;
   * P1/P2 product outputs;
   * serving direction;
   * consumer groups;
   * Silver datasets and grains;
   * Silver quality risks and unresolved identity/source-of-truth issues;
   * required dimensions/slices from questions;
   * freshness/SLA expectations;
   * access/security constraints;
   * open questions;
   * do-not-assume items from Phase 10.
9. Check whether existing `11-gold-layer-specification.md` exists.
10. Check whether Phase 11 support/evidence/handoff files already exist.
11. Decide whether to:

* create a new Gold specification;
* update an existing Gold specification;
* continue Phase 11 evidence/handoff work;
* route back to Phase 10;
* route back to Phase 03;
* route back to Phase 04;
* stop at HALT.

---

## Hints

* Gold should be designed from business questions and product outputs, not from source tables.
* Gold outputs should be consumer-ready or serving-ready.
* Silver gives trusted entities/events; Gold packages them for use cases.
* Gold may be dimensional marts, aggregate tables, wide tables, feature datasets, serving datasets, export-ready outputs, or metric-ready datasets.
* Do not write transformation SQL/Python code, build dashboards, implement APIs, create semantic model internals, define full data contracts, or write pipeline implementation code.
* Do not duplicate semantic model logic unless the Gold dataset itself is the approved metrics layer input.
* If a KPI formula is not approved in Phase 03, keep it Draft.
* If Silver identity or source-of-truth is unresolved, mark Gold as Risk.
* If different consumers need different grains or definitions, split Gold outputs or stage releases.
* Avoid one giant Gold table for every possible question.
* Contract expectations should be identified here, but the full data contract belongs to Phase 12.

---

## Gold Readiness Lens

Use this lens before designing:

| Area        | Readiness Question                                       |
| ----------- | -------------------------------------------------------- |
| Question    | Which business question does this Gold output answer?    |
| KPI         | Which approved KPI/metric does it support?               |
| Product     | Which data product output does it serve?                 |
| Consumer    | Who uses this Gold output?                               |
| Serving     | How will this output be consumed later?                  |
| Silver      | Which approved Silver datasets feed it?                  |
| Grain       | What does one Gold record represent?                     |
| Aggregation | What calculations or rollups are needed?                 |
| Slicing     | Which dimensions or filters must be supported?           |
| Freshness   | How fresh must the output be?                            |
| Quality     | What makes this output trusted enough to serve?          |
| Security    | Who can access this output?                              |
| Contract    | Does this output need a data contract?                   |
| Lineage     | Can this Gold output trace back to Silver/Bronze/source? |

---

## Phase 10 Handoff Readiness

Before generating Phase 11 Gold design, classify Phase 10 readiness:

| Item                                  | Status                                                   | Action                              |
| ------------------------------------- | -------------------------------------------------------- | ----------------------------------- |
| Silver Layer Specification            | Found / Missing / Partial                                | Continue / Route back / Risk accept |
| Phase 10 Done Gate                    | Pass / Pass with risks / Missing / Fail / Blocked        | Continue / Route back / Risk accept |
| Phase 10 Handoff                      | Ready / Ready with Risks / Missing / Not Ready / Blocked | Continue / Route back / Risk accept |
| Silver dataset inventory              | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Silver grain and identity rules       | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Silver DQ and source-of-truth caveats | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Phase 10 Do-Not-Assume list           | Found / Missing                                          | Carry forward / Ask user            |
| Phase 10 open questions               | None / Some / Blocking                                   | Carry forward / Resolve             |

---

## HALT - Readiness Check Failed

Stop if upstream Silver context, KPI context, product context, or serving context is missing or too weak to design Gold safely.

### Trigger

Use this HALT if:

* `10-silver-layer-specification.md` is missing;
* Phase 10 handoff is missing;
* P1 Silver datasets are not defined;
* Silver grain or identity is unresolved for required concepts;
* Silver quality risks block P1 Gold outputs;
* required KPI definitions are missing or conflicting;
* business question mapping is missing;
* data product output or consumer is unclear;
* serving direction is unclear.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-silver-layer-design`
B. Route back to `des-requirements-and-kpis` if KPI definitions are missing
C. Route back to `des-data-product-definition` if product output/consumer is unclear
D. Continue Phase 11 as Draft using current context
E. User provides missing Gold context now
F. Stop workflow

### Recommendation

Choose A if Silver grain/identity/quality is unresolved.
Choose B if metric formulas or KPI ownership are missing.
Choose C if consumer/product output is unclear.
Choose D only if the user accepts that Gold design remains Draft.

### Required response

Choose A/B/C/D/E/F.

---

## HALT - Missing Phase 10 Handoff

Stop if the Silver Layer Specification exists but Phase 10 Done Gate or Phase 10 handoff is missing.

### Why this matters

Phase 11 should not rely on a Phase 10 artifact alone when using the Phase-Orchestrated Support Model.

### Options

A. Route back to `des-silver-layer-design` to create Done Gate and handoff
B. Continue Phase 11 as Draft with accepted risk
C. Treat current Phase 10 artifact as accepted risk and create a temporary Phase 11 support plan
D. Stop workflow

### Required response

Choose A/B/C/D.

---

## HALT - Gold Dataset Boundary

Stop if it is unclear how many Gold outputs are needed or what each output serves.

### Decision needed

How should Gold dataset boundaries be defined?

### Options

A. One Gold dataset per business question group
B. One Gold dataset per data product output
C. One Gold mart per consumer/use case
D. Dimensional mart with facts and dimensions
E. Metric-ready aggregate datasets
F. ML/AI feature or training dataset
G. API/application-serving dataset
H. Export/reverse ETL-ready dataset
I. Custom boundary
J. Keep as Draft pending serving clarification

### Recommendation

Choose B or C for data product alignment.
Choose D when BI/semantic/reporting is the main serving path.

### Required response

Choose A/B/C/D/E/F/G/H/I/J.

---

## Completion Criteria

This step is complete when:

* upstream artifacts are available or Draft continuation is approved;
* Phase 10 handoff is found or missing-handoff risk is accepted;
* P1/P2 business questions are identified;
* P1/P2 Silver datasets are identified;
* approved KPI/metric definitions are extracted;
* product output and serving direction are known or marked unresolved;
* Gold dataset boundary decision is known or marked unresolved;
* existing Phase 11 files are detected if present;
* the agent knows whether to create, update, or defer the Gold specification.

## Next Step

After completion, load only:

```text
steps/step-02-gold-output-and-metric-design.md
```
