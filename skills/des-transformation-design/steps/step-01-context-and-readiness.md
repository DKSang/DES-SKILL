# Step 01 — Context and Readiness

## Goal

Confirm that Transformation Design is the correct next step, that upstream contracts, layer specifications, KPI definitions, architecture, and requirements are available, and that Phase 12 handoff is ready or explicitly accepted as risk.

This step does not mark Phase 13 Done.

It prepares the context needed for:

```text
initial artifact
→ support plan
→ evidence pack
→ mapping / rules / dependency / incremental / contract-alignment validation
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
* `_des-output/planning-artifacts/12-data-contract-specification.md`;
* `_des-output/phase-handoffs/phase-12-to-13-handoff.md`;
* `_des-output/evidence/phase-12/phase-12-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-12-done-gate.md`, if available;
* workflow status file;
* Bronze, Silver, and Gold dataset inventories;
* data contracts;
* P1/P2 requirements and KPIs;
* approved metric definitions;
* grain and identity rules;
* conformance rules;
* Gold aggregation rules;
* freshness/SLA expectations;
* contract validation expectations;
* architecture compute/tool constraints;
* existing `13-transformation-specification.md`, if present;
* existing `phase-13-support-plan.md`, if present;
* existing `phase-13-evidence-pack.md`, if present;
* existing `phase-13-to-14-handoff.md`, if present.

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
4. Check whether Phase 12 handoff exists.
5. Check whether Phase 12 Done Gate exists.
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
   * Gold Layer Specification;
   * Data Contract Specification.
7. Read or summarize Phase 12 to Phase 13 Handoff if available.
8. Extract:

   * P1/P2 transformation paths;
   * Bronze → Silver mappings;
   * Silver → Gold mappings;
   * contracted outputs;
   * grain and key rules;
   * business rules;
   * conformance and standardization rules;
   * metric and aggregation rules;
   * quality expectations;
   * freshness/SLA expectations;
   * lineage requirements;
   * security/privacy constraints;
   * contract validation expectations;
   * unresolved risks and open questions;
   * do-not-assume items from Phase 12.
9. Check whether existing `13-transformation-specification.md` exists.
10. Check whether Phase 13 support/evidence/handoff files already exist.
11. Decide whether to:

* create a new transformation specification;
* update an existing transformation specification;
* continue Phase 13 evidence/handoff work;
* route back to Phase 12;
* route back to Phase 11;
* route back to Phase 10;
* stop at HALT.

---

## Hints

* Transformation design should be traceable from source layer to contracted output.
* Do not start writing SQL or Python yet.
* If a rule is not approved in upstream artifacts, mark it Draft instead of implementing it.
* If a Gold metric depends on an unapproved KPI formula, route back to Phase 03 or keep as Risk.
* If a transformation depends on unresolved Silver identity, mark downstream Gold transformation as Risk.
* If contract expectations cannot be validated by transformation outputs, record a contract alignment risk.
* Every P1 contracted output should have a transformation path.
* Every transformation should have input, output, grain, dependency, and validation expectation.

---

## Phase 12 Handoff Readiness

Before generating Phase 13 transformation design, classify Phase 12 readiness:

| Item                                      | Status                                                   | Action                              |
| ----------------------------------------- | -------------------------------------------------------- | ----------------------------------- |
| Data Contract Specification               | Found / Missing / Partial                                | Continue / Route back / Risk accept |
| Phase 12 Done Gate                        | Pass / Pass with risks / Missing / Fail / Blocked        | Continue / Route back / Risk accept |
| Phase 12 Handoff                          | Ready / Ready with Risks / Missing / Not Ready / Blocked | Continue / Route back / Risk accept |
| Contract inventory                        | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Contract schema/grain/SLA/DQ expectations | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Phase 12 Do-Not-Assume list               | Found / Missing                                          | Carry forward / Ask user            |
| Phase 12 open questions                   | None / Some / Blocking                                   | Carry forward / Resolve             |

---

## HALT - Readiness Check Failed

Stop if upstream contracts or layer specs are missing or too weak to design transformations safely.

### Trigger

Use this HALT if:

* `12-data-contract-specification.md` is missing;
* Phase 12 handoff is missing;
* Gold contracts are missing for P1 downstream outputs;
* Bronze/Silver/Gold specs are missing;
* transformation paths cannot be mapped;
* contract expectations conflict with Gold/Silver specs;
* KPI definitions or grain are unresolved.

### Options

A. Route back to `des-data-contracts`
B. Route back to `des-gold-layer-design`
C. Route back to `des-silver-layer-design`
D. Continue Phase 13 as Draft using current context
E. User provides missing transformation context now
F. Stop workflow

### Recommendation

Choose A if contracts are missing or inconsistent.
Choose B if Gold output/grain/metric logic is unclear.
Choose C if Silver identity/conformance is unclear.
Choose D only if the user accepts that transformation design remains Draft.

### Required response

Choose A/B/C/D/E/F.

---

## HALT - Missing Phase 12 Handoff

Stop if the Data Contract Specification exists but Phase 12 Done Gate or Phase 12 handoff is missing.

### Why this matters

Phase 13 should not rely on a Phase 12 artifact alone when using the Phase-Orchestrated Support Model.

### Options

A. Route back to `des-data-contracts` to create Done Gate and handoff
B. Continue Phase 13 as Draft with accepted risk
C. Treat current Phase 12 artifact as accepted risk and create a temporary Phase 13 support plan
D. Stop workflow

### Required response

Choose A/B/C/D.

---

## HALT - Transformation Scope Required

Stop if transformation scope is unclear.

### Decision needed

What transformation scope should this phase cover?

### Options

A. P1 Bronze → Silver transformations only
B. P1 Silver → Gold transformations only
C. All P1 Bronze → Silver → Gold transformations
D. P1 + P2 transformations
E. Only transformations needed by contracted outputs
F. Custom scope

### Recommendation

Choose C for complete first-release design.
Choose E if contracts define the first implementation boundary.

### Required response

Choose A/B/C/D/E/F.

---

## Completion Criteria

This step is complete when:

* upstream artifacts are available or Draft continuation is approved;
* Phase 12 handoff is found or missing-handoff risk is accepted;
* transformation scope is selected or marked unresolved;
* P1/P2 transformation paths are identified;
* contract, Gold, Silver, Bronze, KPI, and quality dependencies are extracted;
* unresolved transformation risks are documented;
* existing Phase 13 files are detected if present;
* the agent knows whether to create, update, or defer the transformation specification.

## Next Step

After completion, load only:

```text
steps/step-02-transformation-logic-and-dependencies.md
```
