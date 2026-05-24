# Step 01 — Context and Readiness

## Goal

Confirm that Semantic Model Design is the correct next step, that upstream Gold, KPI, contract, quality, operational, and serving context is available, and that Phase 15 handoff is ready or explicitly accepted as risk.

This step does not mark Phase 16 Done.

It prepares the context needed for:

```text
initial artifact
→ support plan
→ evidence pack
→ metric / dimension / relationship / security / trust / freshness validation
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
* `_des-output/planning-artifacts/06-conceptual-domain-model.md`;
* `_des-output/planning-artifacts/10-silver-layer-specification.md`;
* `_des-output/planning-artifacts/11-gold-layer-specification.md`;
* `_des-output/planning-artifacts/12-data-contract-specification.md`;
* `_des-output/planning-artifacts/13-transformation-specification.md`;
* `_des-output/planning-artifacts/14-data-quality-specification.md`;
* `_des-output/planning-artifacts/15-orchestration-observability-specification.md`;
* `_des-output/phase-handoffs/phase-15-to-16-handoff.md`;
* `_des-output/evidence/phase-15/phase-15-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-15-done-gate.md`, if available;
* workflow status file;
* Gold datasets and output types;
* business questions and KPIs;
* approved metric definitions;
* consumers/personas;
* serving direction;
* contract expectations;
* quality rules and trust status;
* security/access constraints;
* glossary/domain terms;
* freshness/SLA expectations;
* operational publish/freshness/quality assumptions;
* existing `16-semantic-model-specification.md`, if present;
* existing `phase-16-support-plan.md`, if present;
* existing `phase-16-evidence-pack.md`, if present;
* existing `phase-16-to-17-handoff.md`, if present.

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
4. Check whether Phase 15 handoff exists.
5. Check whether Phase 15 Done Gate exists.
6. Read or summarize:

   * Business Discovery Brief;
   * Business Question Catalog;
   * Requirements and KPI Catalog;
   * Data Product Specification;
   * Conceptual Domain Model;
   * Silver Layer Specification;
   * Gold Layer Specification;
   * Data Contract Specification;
   * Transformation Specification;
   * Data Quality Specification;
   * Orchestration and Observability Specification.
7. Read or summarize Phase 15 to Phase 16 Handoff if available.
8. Extract:

   * P1/P2 business questions;
   * approved KPIs and metrics;
   * Gold outputs suitable for semantic exposure;
   * Gold dataset grain;
   * consumers and use cases;
   * required dimensions/slices;
   * security/access restrictions;
   * freshness and quality display expectations;
   * certified/trusted status candidates;
   * publish gate and freshness assumptions from Phase 15;
   * semantic risks and open questions;
   * do-not-assume items from Phase 15.
9. Check whether existing `16-semantic-model-specification.md` exists.
10. Check whether Phase 16 support/evidence/handoff files already exist.
11. Decide whether to:

* create a new semantic model specification;
* update an existing semantic model specification;
* continue Phase 16 evidence/handoff work;
* route back to Phase 15;
* route back to Phase 11;
* route back to Phase 03;
* stop at HALT.

---

## Hints

* Semantic model should express business meaning, not physical schema detail.
* Metrics must trace back to approved KPI definitions.
* Grain and aggregation rules must be visible.
* Semantic relationships should not create accidental many-to-many double counting.
* If the Gold model is not stable, semantic model should remain Draft.
* If security is unresolved, semantic exposure should be Risk or Blocked.
* If users need self-service analytics, naming, descriptions, and certified metrics matter.
* If AI/data agents will use the model, glossary alignment and metadata become more important.
* Freshness/quality status should be exposed when it affects decision trust.
* Do not implement BI semantic layer code in this phase.

---

## Phase 15 Handoff Readiness

Before generating Phase 16 semantic design, classify Phase 15 readiness:

| Item                                          | Status                                                   | Action                              |
| --------------------------------------------- | -------------------------------------------------------- | ----------------------------------- |
| Orchestration and Observability Specification | Found / Missing / Partial                                | Continue / Route back / Risk accept |
| Phase 15 Done Gate                            | Pass / Pass with risks / Missing / Fail / Blocked        | Continue / Route back / Risk accept |
| Phase 15 Handoff                              | Ready / Ready with Risks / Missing / Not Ready / Blocked | Continue / Route back / Risk accept |
| Publish behavior for semantic inputs          | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Freshness/SLA monitoring assumptions          | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Quality gate behavior                         | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Phase 15 Do-Not-Assume list                   | Found / Missing                                          | Carry forward / Ask user            |
| Phase 15 open questions                       | None / Some / Blocking                                   | Carry forward / Resolve             |

---

## HALT — Missing or Weak Gold/KPI Context

Stop if upstream Gold, KPI, contract, quality, or operational context is missing or too weak to design semantic model safely.

### Trigger

Use this HALT if:

* `11-gold-layer-specification.md` is missing;
* Phase 15 handoff is missing;
* KPI definitions are missing or conflicting;
* Gold grain is unclear;
* Gold output type is unclear;
* semantic serving direction is unclear;
* security/access classification is unknown;
* quality/contract status is insufficient for semantic exposure;
* freshness or publish status assumptions are unknown for P1 semantic outputs.

### Options

A. Route back to `des-gold-layer-design`
B. Route back to `des-requirements-and-kpis`
C. Route back to `des-data-contracts` or `des-data-quality`
D. Route back to `des-orchestration-observability`
E. Continue Phase 16 as Draft using current context
F. User provides missing semantic context now
G. Stop workflow

### Recommendation

Choose A if Gold grain/output is unclear.
Choose B if KPI definitions are missing.
Choose D if freshness/publish/quality gate assumptions are unclear.
Choose E only if the user accepts that semantic model remains Draft.

### Required response

Choose A/B/C/D/E/F/G.

---

## HALT — Missing Phase 15 Handoff

Stop if the Orchestration and Observability Specification exists but Phase 15 Done Gate or Phase 15 handoff is missing.

### Options

A. Route back to `des-orchestration-observability` to create Done Gate and handoff
B. Continue Phase 16 as Draft with accepted risk
C. Treat current Phase 15 artifact as accepted risk and create a temporary Phase 16 support plan
D. Stop workflow

### Required response

Choose A/B/C/D.

---

## HALT — Semantic Scope Required

Stop if semantic model scope is unclear.

### Options

A. P1 Gold outputs only
B. One semantic model per data product
C. One semantic model per business domain
D. One semantic model per consumer group
E. Enterprise-wide shared metrics layer
F. AI/data-agent-ready semantic layer
G. Custom scope

### Recommendation

Choose B for data product alignment.
Choose C if the domain model is mature.

### Required response

Choose A/B/C/D/E/F/G.

---

## Completion Criteria

This step is complete when:

* upstream artifacts are available or Draft continuation is approved;
* Phase 15 handoff is found or missing-handoff risk is accepted;
* semantic scope is selected or marked unresolved;
* Gold datasets, KPIs, consumers, dimensions, security constraints, freshness/quality signals, and trust status candidates are extracted;
* unresolved semantic risks are documented;
* existing Phase 16 files are detected if present;
* the agent knows whether to create, update, or defer the semantic model specification.

## Next Step

After completion, load only:

```text
steps/step-02-semantic-concepts-measures-and-relationships.md
```
