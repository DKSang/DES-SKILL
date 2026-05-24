# Step 01 — Context and Readiness

## Goal

Confirm that Lineage and Metadata Design is the correct next step, that upstream dataset, transformation, contract, quality, semantic, serving, and ownership context is available, and that Phase 17 handoff is ready or explicitly accepted as risk.

This step does not mark Phase 18 Done.

It prepares the context needed for:

```text
initial artifact
→ support plan
→ evidence pack
→ asset / catalog / lineage / ownership / trust / audit validation
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
* `_des-output/planning-artifacts/08-ingestion-specification.md`;
* `_des-output/planning-artifacts/09-bronze-layer-specification.md`;
* `_des-output/planning-artifacts/10-silver-layer-specification.md`;
* `_des-output/planning-artifacts/11-gold-layer-specification.md`;
* `_des-output/planning-artifacts/12-data-contract-specification.md`;
* `_des-output/planning-artifacts/13-transformation-specification.md`;
* `_des-output/planning-artifacts/14-data-quality-specification.md`;
* `_des-output/planning-artifacts/15-orchestration-observability-specification.md`;
* `_des-output/planning-artifacts/16-semantic-model-specification.md`;
* `_des-output/planning-artifacts/17-serving-layer-specification.md`;
* `_des-output/phase-handoffs/phase-17-to-18-handoff.md`;
* `_des-output/evidence/phase-17/phase-17-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-17-done-gate.md`, if available;
* workflow status file;
* source inventory;
* Bronze/Silver/Gold dataset inventory;
* transformation dependency graph;
* contract inventory;
* quality rule inventory;
* semantic model inventory;
* serving output inventory;
* workflow run evidence expectations;
* ownership/stewardship decisions;
* existing `18-lineage-metadata-specification.md`, if present;
* existing `phase-18-support-plan.md`, if present;
* existing `phase-18-evidence-pack.md`, if present;
* existing `phase-18-to-19-handoff.md`, if present.

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
4. Check whether Phase 17 handoff exists.
5. Check whether Phase 17 Done Gate exists.
6. Read or summarize:

   * Business Discovery Brief;
   * Business Question Catalog;
   * Requirements and KPI Catalog;
   * Data Product Specification;
   * Data Source Inventory;
   * Conceptual Domain Model;
   * Ingestion Specification;
   * Bronze Layer Specification;
   * Silver Layer Specification;
   * Gold Layer Specification;
   * Data Contract Specification;
   * Transformation Specification;
   * Data Quality Specification;
   * Orchestration and Observability Specification;
   * Semantic Model Specification;
   * Serving Layer Specification.
7. Read or summarize Phase 17 to Phase 18 Handoff if available.
8. Extract:

   * datasets and outputs requiring catalog entries;
   * metrics and KPIs requiring definitions;
   * transformations requiring lineage;
   * contracts requiring metadata;
   * quality status to expose;
   * operational metadata/run evidence;
   * reference data and mappings;
   * semantic and serving metadata needs;
   * AI/data-agent metadata needs, if any;
   * owners, stewards, consumers;
   * compliance/audit needs;
   * missing definitions or ownership gaps;
   * do-not-assume items from Phase 17.
9. Check whether existing `18-lineage-metadata-specification.md` exists.
10. Check whether Phase 18 support/evidence/handoff files already exist.
11. Decide whether to:

* create a new lineage/metadata specification;
* update an existing lineage/metadata specification;
* continue Phase 18 evidence/handoff work;
* route back to Phase 17;
* route back to Phase 16/15/14 if semantic, operational, quality, or trust metadata is missing;
* stop at HALT.

---

## Hints

* Metadata should support both humans and systems.
* Business metadata explains meaning and ownership.
* Technical metadata explains schema, fields, lineage, transformations, and dependencies.
* Operational metadata explains run status, counts, errors, timings, quality results, and evidence.
* Reference metadata explains codes, units, calendars, mappings, lookup tables, and standard classifications.
* Lineage should support debugging, impact analysis, audit, AI/data-agent grounding, and consumer trust.
* Column-level lineage is useful but can be costly; require it where risk justifies it.
* Metadata must be maintained, not written once and forgotten.
* Serving outputs should show trust signals like freshness, quality status, owner, and certified status.

---

## Phase 17 Handoff Readiness

Before generating Phase 18 lineage/metadata design, classify Phase 17 readiness:

| Item                        | Status                                                   | Action                              |
| --------------------------- | -------------------------------------------------------- | ----------------------------------- |
| Serving Layer Specification | Found / Missing / Partial                                | Continue / Route back / Risk accept |
| Phase 17 Done Gate          | Pass / Pass with risks / Missing / Fail / Blocked        | Continue / Route back / Risk accept |
| Phase 17 Handoff            | Ready / Ready with Risks / Missing / Not Ready / Blocked | Continue / Route back / Risk accept |
| Serving output inventory    | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Metadata/lineage needs      | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Phase 17 Do-Not-Assume list | Found / Missing                                          | Carry forward / Ask user            |
| Phase 17 open questions     | None / Some / Blocking                                   | Carry forward / Resolve             |

---

## HALT — Missing or Weak Serving Context

Stop if upstream serving or semantic context is missing or too weak.

### Trigger

Use this HALT if:

* `17-serving-layer-specification.md` is missing;
* Phase 17 handoff is missing;
* semantic model inventory is missing;
* serving outputs are unclear;
* consumer usage is unclear;
* freshness/quality visibility expectations are missing;
* ownership/support model is missing.

### Options

A. Route back to `des-serving-layer-design`
B. Route back to `des-semantic-model-design`
C. Route back to `des-data-quality` or `des-orchestration-observability`
D. Continue Phase 18 as Draft using current context
E. User provides missing lineage/metadata context now
F. Stop workflow

### Recommendation

Choose A if serving output or consumer usage is missing.
Choose B if semantic model metadata is missing.
Choose C if trust/quality/operational metadata is missing.
Choose D only if the user accepts that lineage/metadata design remains Draft.

### Required response

Choose A/B/C/D/E/F.

---

## HALT — Missing Phase 17 Handoff

Stop if the Serving Layer Specification exists but Phase 17 Done Gate or Phase 17 handoff is missing.

### Options

A. Route back to `des-serving-layer-design` to create Done Gate and handoff
B. Continue Phase 18 as Draft with accepted risk
C. Treat current Phase 17 artifact as accepted risk and create a temporary Phase 18 support plan
D. Stop workflow

### Required response

Choose A/B/C/D.

---

## HALT — Metadata Scope Required

Stop if metadata scope is unclear.

### Options

A. P1 Gold and serving outputs only
B. P1 Bronze/Silver/Gold datasets
C. P1 end-to-end source → serving lineage
D. P1 + P2 data product assets
E. Full project catalog and lineage framework
F. AI/data-agent-ready metadata scope
G. Custom scope

### Recommendation

Choose C for first-release trust and auditability.
Choose F if AI/data-agent access is important.

### Required response

Choose A/B/C/D/E/F/G.

---

## Completion Criteria

This step is complete when:

* upstream artifacts are available or Draft continuation is approved;
* Phase 17 handoff is found or missing-handoff risk is accepted;
* metadata scope is selected or marked unresolved;
* datasets, metrics, contracts, transformations, quality rules, serving outputs, owners, and metadata gaps are extracted;
* existing Phase 18 files are detected if present;
* the agent knows whether to create, update, or defer the lineage/metadata specification.

## Next Step

After completion, load only:

```text
steps/step-02-lineage-metadata-and-catalog-design.md
```
