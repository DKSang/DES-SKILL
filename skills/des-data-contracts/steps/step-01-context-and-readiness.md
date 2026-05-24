# Step 01 — Context and Readiness

## Goal

Confirm that Data Contracts is the correct next step, that upstream Gold/Silver/source/requirement/product/governance context is available, and that Phase 11 handoff is ready or explicitly accepted as risk.

This step does not mark Phase 12 Done.

It prepares the context needed for:

```text
initial artifact
→ support plan
→ evidence pack
→ producer / consumer / schema / grain / SLA / DQ / versioning validation
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
* `_des-output/planning-artifacts/11-gold-layer-specification.md`;
* `_des-output/phase-handoffs/phase-11-to-12-handoff.md`;
* `_des-output/evidence/phase-11/phase-11-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-11-done-gate.md`, if available;
* workflow status file;
* Gold datasets and outputs;
* Silver datasets that feed Gold;
* source feeds that require upstream expectation;
* data product outputs;
* consumers and producers;
* owners and approvers;
* KPI/metric definitions;
* grain definitions;
* freshness/SLA expectations;
* quality rules;
* access/security classification;
* contract expectations from Phase 04 or Phase 11;
* existing `12-data-contract-specification.md`, if present;
* existing `phase-12-support-plan.md`, if present;
* existing `phase-12-evidence-pack.md`, if present;
* existing `phase-12-to-13-handoff.md`, if present.

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
4. Check whether Phase 11 handoff exists.
5. Check whether Phase 11 Done Gate exists.
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
   * Silver Layer Specification;
   * Gold Layer Specification.
7. Read or summarize Phase 11 to Phase 12 Handoff if available.
8. Extract:

   * datasets or outputs marked as requiring contract;
   * Gold datasets and serving direction;
   * Silver datasets with downstream dependency;
   * upstream sources with source contract/SLA expectations;
   * producer, consumer, owner, and approver candidates;
   * schema, grain, KPI, freshness, quality, access, and lineage expectations;
   * contract level recommendations from Phase 11;
   * change management and versioning risks;
   * open questions;
   * do-not-assume items from Phase 11.
9. Check whether existing `12-data-contract-specification.md` exists.
10. Check whether Phase 12 support/evidence/handoff files already exist.
11. Decide whether to:

* create a new contract specification;
* update an existing contract specification;
* continue Phase 12 evidence/handoff work;
* route back to Phase 11;
* route back to Phase 03;
* route back to Phase 04;
* stop at HALT.

---

## Hints

* A data contract is not only a schema.
* A contract should capture what the producer promises and what the consumer can rely on.
* Not every dataset needs a full contract; contract level should match risk and consumer dependency.
* Production, external, API-facing, ML-serving, and shared semantic outputs usually need stronger contracts.
* Exploratory outputs may only need minimal contracts.
* If a Gold output will feed a dashboard, semantic model, API, ML system, external partner, or operational workflow, contract expectation should be explicit.
* If a contract depends on unresolved metric definition, route back to Phase 03 or keep as Draft.
* If a contract depends on unresolved Gold grain, route back to Phase 11.
* If owner/producer/consumer is unclear, mark the contract Draft/Risk/Blocked.
* Do not write transformation SQL/Python code, build dashboards, implement APIs, create semantic model internals, implement tests, or write pipeline implementation code.

---

## Contract Readiness Lens

Use this lens before designing:

| Area       | Readiness Question                                                 |
| ---------- | ------------------------------------------------------------------ |
| Output     | Which dataset/feed/output is covered by the contract?              |
| Producer   | Who produces or owns the data?                                     |
| Consumer   | Who relies on it?                                                  |
| Owner      | Who is accountable for the contract?                               |
| Meaning    | What does the data represent?                                      |
| Grain      | What does one record represent?                                    |
| Schema     | What structure and fields are promised?                            |
| Metric     | Which metric/KPI definitions are contractual?                      |
| Freshness  | How current must the data be?                                      |
| Quality    | What quality guarantees exist?                                     |
| Volume     | What completeness/volume expectations exist?                       |
| Access     | Who can use it and under what restrictions?                        |
| Change     | What happens when schema, meaning, metric, SLA, or access changes? |
| Incident   | What happens when the contract is violated?                        |
| Validation | How is the contract checked later?                                 |

---

## Phase 11 Handoff Readiness

Before generating Phase 12 contracts, classify Phase 11 readiness:

| Item                                | Status                                                   | Action                              |
| ----------------------------------- | -------------------------------------------------------- | ----------------------------------- |
| Gold Layer Specification            | Found / Missing / Partial                                | Continue / Route back / Risk accept |
| Phase 11 Done Gate                  | Pass / Pass with risks / Missing / Fail / Blocked        | Continue / Route back / Risk accept |
| Phase 11 Handoff                    | Ready / Ready with Risks / Missing / Not Ready / Blocked | Continue / Route back / Risk accept |
| Contract expectations               | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Gold grain and metric definitions   | Found / Missing / Partial / Conflict                     | Continue / Resolve / Risk accept    |
| Gold access/security classification | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Phase 11 Do-Not-Assume list         | Found / Missing                                          | Carry forward / Ask user            |
| Phase 11 open questions             | None / Some / Blocking                                   | Carry forward / Resolve             |

---

## HALT - Readiness Check Failed

Stop if upstream Gold context is missing or too weak to define contracts safely.

### Trigger

Use this HALT if:

* `11-gold-layer-specification.md` is missing;
* Phase 11 handoff is missing;
* P1 Gold outputs are unclear;
* Gold grain is missing;
* Gold consumer or serving path is unclear;
* contract expectations are missing for downstream-facing outputs;
* KPI definitions used by Gold are conflicting;
* access/security classification is unknown;
* ownership or producer/consumer expectations are unknown.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-gold-layer-design`
B. Route back to `des-requirements-and-kpis` if KPI definitions are missing
C. Route back to `des-data-product-definition` if consumer/output ownership is unclear
D. Continue Phase 12 as Draft using current context
E. User provides missing contract context now
F. Stop workflow

### Recommendation

Choose A if Gold grain/output/serving context is unclear.
Choose B if KPI definition is missing or conflicting.
Choose C if consumer/output ownership is unclear.
Choose D only if the user accepts that contracts remain Draft.

### Required response

Choose A/B/C/D/E/F.

---

## HALT - Missing Phase 11 Handoff

Stop if the Gold Layer Specification exists but Phase 11 Done Gate or Phase 11 handoff is missing.

### Why this matters

Phase 12 should not rely on a Phase 11 artifact alone when using the Phase-Orchestrated Support Model.

### Options

A. Route back to `des-gold-layer-design` to create Done Gate and handoff
B. Continue Phase 12 as Draft with accepted risk
C. Treat current Phase 11 artifact as accepted risk and create a temporary Phase 12 support plan
D. Stop workflow

### Required response

Choose A/B/C/D.

---

## HALT - Contract Required Outputs

Stop if it is unclear which datasets or outputs require contracts.

### Decision needed

Which outputs should receive data contracts?

### Options

A. P1 Gold outputs only
B. P1 Gold outputs plus critical Silver datasets
C. Source feeds plus Gold outputs
D. All shared production datasets
E. Only external/system-facing outputs
F. Minimal contracts for all P1 datasets, full contracts for system-facing outputs
G. Custom contract scope

### Recommendation

Choose F for balanced governance.
Choose A for lightweight MVP.

### Required response

Choose A/B/C/D/E/F/G.

---

## Completion Criteria

This step is complete when:

* upstream artifacts are available or Draft continuation is approved;
* Phase 11 handoff is found or missing-handoff risk is accepted;
* contract scope is selected or marked unresolved;
* datasets/outputs requiring contracts are identified;
* producer, consumer, owner, grain, schema, freshness, quality, access, and change risks are extracted;
* existing Phase 12 files are detected if present;
* the agent knows whether to create, update, or defer the contract specification.

## Next Step

After completion, load only:

```text
steps/step-02-contract-boundary-and-obligations.md
```
