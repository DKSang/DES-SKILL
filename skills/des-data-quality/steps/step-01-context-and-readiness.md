# Step 01 — Context and Readiness

## Goal

Confirm that Data Quality Design is the correct next step, that upstream transformation, contract, Gold, Silver, Bronze, and requirement context is available, and that Phase 13 handoff is ready or explicitly accepted as risk.

This step does not mark Phase 14 Done.

It prepares the context needed for:

```text
initial artifact
→ support plan
→ evidence pack
→ rule / threshold / severity / gate / owner / evidence validation
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
* `_des-output/planning-artifacts/13-transformation-specification.md`;
* `_des-output/phase-handoffs/phase-13-to-14-handoff.md`;
* `_des-output/evidence/phase-13/phase-13-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-13-done-gate.md`, if available;
* workflow status file;
* contracted outputs;
* transformation validation expectations;
* Bronze technical quality expectations;
* Silver conformance quality expectations;
* Gold boundary quality expectations;
* freshness/SLA expectations;
* metric reconciliation requirements;
* security/access constraints;
* consumer acceptance criteria;
* existing `14-data-quality-specification.md`, if present;
* existing `phase-14-support-plan.md`, if present;
* existing `phase-14-evidence-pack.md`, if present;
* existing `phase-14-to-15-handoff.md`, if present.

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
4. Check whether Phase 13 handoff exists.
5. Check whether Phase 13 Done Gate exists.
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
   * Data Contract Specification;
   * Transformation Specification.
7. Read or summarize Phase 13 to Phase 14 Handoff if available.
8. Extract:

   * P1/P2 datasets and outputs;
   * P1 contracted outputs;
   * contract quality expectations;
   * transformation validation expectations;
   * layer-specific quality rules already proposed;
   * metric/KPI reconciliation expectations;
   * freshness/SLA expectations;
   * source quality risks;
   * consumer acceptance expectations;
   * unresolved quality risks and open questions;
   * do-not-assume items from Phase 13.
9. Check whether existing `14-data-quality-specification.md` exists.
10. Check whether Phase 14 support/evidence/handoff files already exist.
11. Decide whether to:

* create a new data quality specification;
* update an existing data quality specification;
* continue Phase 14 evidence/handoff work;
* route back to Phase 13;
* route back to Phase 12;
* route back to Phase 11;
* stop at HALT.

---

## Hints

* Quality design should be risk-based, not rule-spam.
* Bronze quality is mostly technical and ingestion evidence.
* Silver quality is mostly conformance, identity, validity, standardization, and trust.
* Gold quality is mostly consumer, metric, contract, freshness, reconciliation, and serving readiness.
* Contract quality rules should become strong candidates for blocking gates.
* Not every warning should block publish.
* Not every rule needs the same severity.
* Quality failures should have owners and expected action.
* If no one owns a rule, it is hard to operate.
* If no evidence is captured, the rule is not auditable.
* Do not implement SQL/Python/dbt/Great Expectations/monitoring/CI-CD code.

---

## Phase 13 Handoff Readiness

Before generating Phase 14 quality design, classify Phase 13 readiness:

| Item                         | Status                                                   | Action                              |
| ---------------------------- | -------------------------------------------------------- | ----------------------------------- |
| Transformation Specification | Found / Missing / Partial                                | Continue / Route back / Risk accept |
| Phase 13 Done Gate           | Pass / Pass with risks / Missing / Fail / Blocked        | Continue / Route back / Risk accept |
| Phase 13 Handoff             | Ready / Ready with Risks / Missing / Not Ready / Blocked | Continue / Route back / Risk accept |
| Validation/test expectations | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Contract alignment           | Found / Missing / Partial / Conflict                     | Continue / Resolve / Risk accept    |
| Phase 13 Do-Not-Assume list  | Found / Missing                                          | Carry forward / Ask user            |
| Phase 13 open questions      | None / Some / Blocking                                   | Carry forward / Resolve             |

---

## HALT - Readiness Check Failed

Stop if upstream transformation or contract context is missing or too weak to design quality safely.

### Trigger

Use this HALT if:

* `13-transformation-specification.md` is missing;
* Phase 13 handoff is missing;
* `12-data-contract-specification.md` is missing for contracted outputs;
* transformation validation expectations are missing;
* Gold/Silver/Bronze quality expectations are missing;
* P1 outputs cannot be mapped to quality rules;
* quality expectations conflict with contracts.

### Options

A. Route back to `des-transformation-design`
B. Route back to `des-data-contracts`
C. Route back to `des-gold-layer-design` or layer design that owns missing quality context
D. Continue Phase 14 as Draft using current context
E. User provides missing quality context now
F. Stop workflow

### Recommendation

Choose A if transformation validation is missing.
Choose B if contract quality expectations are missing.
Choose D only if the user accepts that quality design remains Draft.

### Required response

Choose A/B/C/D/E/F.

---

## HALT - Missing Phase 13 Handoff

Stop if the Transformation Specification exists but Phase 13 Done Gate or Phase 13 handoff is missing.

### Why this matters

Phase 14 should not rely on a Phase 13 artifact alone when using the Phase-Orchestrated Support Model.

### Options

A. Route back to `des-transformation-design` to create Done Gate and handoff
B. Continue Phase 14 as Draft with accepted risk
C. Treat current Phase 13 artifact as accepted risk and create a temporary Phase 14 support plan
D. Stop workflow

### Required response

Choose A/B/C/D.

---

## HALT - Quality Scope Required

Stop if quality design scope is unclear.

### Options

A. P1 contracted Gold outputs only
B. P1 Bronze, Silver, and Gold datasets
C. All P1 transformation outputs
D. P1 + P2 datasets and outputs
E. Only rules needed for release gates
F. Full project quality framework
G. Custom scope

### Recommendation

Choose B for first-release reliability.
Choose E if the project is close to implementation/release.

### Required response

Choose A/B/C/D/E/F/G.

---

## Completion Criteria

This step is complete when:

* upstream artifacts are available or Draft continuation is approved;
* Phase 13 handoff is found or missing-handoff risk is accepted;
* quality scope is selected or marked unresolved;
* P1/P2 datasets and contracted outputs are identified;
* existing quality expectations are extracted;
* missing thresholds, owners, severity, and evidence are documented;
* existing Phase 14 files are detected if present;
* the agent knows whether to create, update, or defer the quality specification.

## Next Step

After completion, load only:

```text
steps/step-02-quality-rules-and-gates.md
```
