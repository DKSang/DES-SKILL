# Step 01 — Context and Readiness

## Goal

Confirm that Serving Layer Design is the correct next step, that upstream semantic, Gold, contract, quality, architecture, operational, and consumer context is available, and that Phase 16 handoff is ready or explicitly accepted as risk.

This step does not mark Phase 17 Done.

It prepares the context needed for:

```text
initial artifact
→ support plan
→ evidence pack
→ consumer / channel / access / freshness / performance / feedback validation
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
* `_des-output/planning-artifacts/07-architecture-decision-record.md`;
* `_des-output/planning-artifacts/11-gold-layer-specification.md`;
* `_des-output/planning-artifacts/12-data-contract-specification.md`;
* `_des-output/planning-artifacts/14-data-quality-specification.md`;
* `_des-output/planning-artifacts/15-orchestration-observability-specification.md`;
* `_des-output/planning-artifacts/16-semantic-model-specification.md`;
* `_des-output/phase-handoffs/phase-16-to-17-handoff.md`;
* `_des-output/evidence/phase-16/phase-16-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-16-done-gate.md`, if available;
* workflow status file;
* consumer personas;
* serving direction;
* Gold outputs;
* semantic models;
* contract levels;
* quality/trust status;
* freshness/SLA expectations;
* access/security constraints;
* performance/latency needs;
* feedback and support expectations;
* existing `17-serving-layer-specification.md`, if present;
* existing `phase-17-support-plan.md`, if present;
* existing `phase-17-evidence-pack.md`, if present;
* existing `phase-17-to-18-handoff.md`, if present.

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
4. Check whether Phase 16 handoff exists.
5. Check whether Phase 16 Done Gate exists.
6. Read or summarize:

   * Business Discovery Brief;
   * Business Question Catalog;
   * Requirements and KPI Catalog;
   * Data Product Specification;
   * Architecture Decision Record;
   * Gold Layer Specification;
   * Data Contract Specification;
   * Data Quality Specification;
   * Orchestration and Observability Specification;
   * Semantic Model Specification.
7. Read or summarize Phase 16 to Phase 17 Handoff if available.
8. Extract:

   * P1/P2 consumers;
   * P1/P2 business questions;
   * P1/P2 Gold outputs;
   * semantic models and certified/promoted/draft measures;
   * serving paths from architecture and Gold design;
   * contract expectations;
   * quality and freshness visibility needs;
   * security/access requirements;
   * performance/latency needs;
   * feedback/support risks;
   * do-not-assume items from Phase 16.
9. Check whether existing `17-serving-layer-specification.md` exists.
10. Check whether Phase 17 support/evidence/handoff files already exist.
11. Decide whether to:

* create a new serving specification;
* update an existing serving specification;
* continue Phase 17 evidence/handoff work;
* route back to Phase 16;
* route back to Phase 12/14/15 if trust, quality, contract, or operational assumptions are missing;
* stop at HALT.

---

## Hints

* Serving is the final lifecycle stage where data reaches users or systems.
* Serving should be designed around how consumers actually work.
* Do not assume every serving need is a dashboard.
* BI, ML, APIs, reverse ETL, data sharing, and AI agents have different serving risks.
* Reverse ETL creates feedback loops and needs guardrails.
* Federated query can be useful, but source impact and access control must be considered.
* Users must see trust signals: freshness, certification, warnings, known limitations, and quality state where relevant.
* Serving should create feedback loops so issues and improvement requests return to the data team.
* Do not implement serving interfaces in this phase.

---

## Phase 16 Handoff Readiness

Before generating Phase 17 serving design, classify Phase 16 readiness:

| Item                                      | Status                                                   | Action                              |
| ----------------------------------------- | -------------------------------------------------------- | ----------------------------------- |
| Semantic Model Specification              | Found / Missing / Partial                                | Continue / Route back / Risk accept |
| Phase 16 Done Gate                        | Pass / Pass with risks / Missing / Fail / Blocked        | Continue / Route back / Risk accept |
| Phase 16 Handoff                          | Ready / Ready with Risks / Missing / Not Ready / Blocked | Continue / Route back / Risk accept |
| Certified/promoted/draft semantic objects | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Security/access constraints               | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Freshness/quality display expectations    | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Phase 16 Do-Not-Assume list               | Found / Missing                                          | Carry forward / Ask user            |
| Phase 16 open questions                   | None / Some / Blocking                                   | Carry forward / Resolve             |

---

## HALT — Missing or Weak Semantic/Serving Context

Stop if upstream semantic or serving context is missing or too weak.

### Trigger

Use this HALT if:

* `16-semantic-model-specification.md` is missing;
* Phase 16 handoff is missing;
* Gold output is missing;
* serving channel is unclear;
* consumer is unclear;
* contract level is missing for system-facing output;
* security/access classification is unknown;
* freshness/quality visibility is missing.

### Options

A. Route back to `des-semantic-model-design`
B. Route back to `des-gold-layer-design`
C. Route back to `des-data-contracts` or `des-data-quality`
D. Route back to `des-orchestration-observability`
E. Continue Phase 17 as Draft using current context
F. User provides missing serving context now
G. Stop workflow

### Recommendation

Choose A if semantic model is missing.
Choose B if Gold output is unclear.
Choose C if contract/quality is unclear.
Choose D if freshness/publish assumptions are unclear.
Choose E only if the user accepts that serving design remains Draft.

### Required response

Choose A/B/C/D/E/F/G.

---

## HALT — Missing Phase 16 Handoff

Stop if the Semantic Model Specification exists but Phase 16 Done Gate or Phase 16 handoff is missing.

### Options

A. Route back to `des-semantic-model-design` to create Done Gate and handoff
B. Continue Phase 17 as Draft with accepted risk
C. Treat current Phase 16 artifact as accepted risk and create a temporary Phase 17 support plan
D. Stop workflow

### Required response

Choose A/B/C/D.

---

## HALT — Serving Scope Required

Stop if serving scope is unclear.

### Options

A. P1 dashboard/reporting only
B. P1 semantic/self-service analytics only
C. P1 API/application outputs only
D. P1 ML/AI datasets only
E. All P1 serving channels
F. P1 + P2 serving roadmap
G. Full project serving strategy
H. Custom scope

### Recommendation

Choose E for a complete first-release serving design.
Choose A/B/C/D if the product has one dominant serving path.

### Required response

Choose A/B/C/D/E/F/G/H.

---

## Completion Criteria

This step is complete when:

* upstream artifacts are available or Draft continuation is approved;
* Phase 16 handoff is found or missing-handoff risk is accepted;
* serving scope is selected or marked unresolved;
* P1/P2 consumers, Gold outputs, semantic models, contracts, quality, access, freshness, and serving risks are extracted;
* existing Phase 17 files are detected if present;
* the agent knows whether to create, update, or defer the serving specification.

## Next Step

After completion, load only:

```text
steps/step-02-serving-channels-and-consumer-experience.md
```
