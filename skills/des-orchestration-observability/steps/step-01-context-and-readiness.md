# Step 01 — Context and Readiness

## Goal

Confirm that Orchestration and Observability Design is the correct next step, that upstream quality, transformation, contract, architecture, and SLA context is available, and that Phase 14 handoff is ready or explicitly accepted as risk.

This step does not mark Phase 15 Done.

It prepares the context needed for:

```text
initial artifact
→ support plan
→ evidence pack
→ workflow / dependency / gate / retry / alert / SLA / evidence validation
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
* `_des-output/planning-artifacts/14-data-quality-specification.md`;
* `_des-output/phase-handoffs/phase-14-to-15-handoff.md`;
* `_des-output/evidence/phase-14/phase-14-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-14-done-gate.md`, if available;
* workflow status file;
* architecture orchestration boundary;
* ingestion schedules/triggers;
* transformation dependency graph;
* quality rules and severity;
* quality gate behavior;
* freshness/SLA expectations;
* contract expectations;
* backfill/replay requirements;
* late/corrected data handling;
* incident/escalation expectations;
* operational owners;
* existing `15-orchestration-observability-specification.md`, if present;
* existing `phase-15-support-plan.md`, if present;
* existing `phase-15-evidence-pack.md`, if present;
* existing `phase-15-to-16-handoff.md`, if present.

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
4. Check whether Phase 14 handoff exists.
5. Check whether Phase 14 Done Gate exists.
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
   * Transformation Specification;
   * Data Quality Specification.
7. Read or summarize Phase 14 to Phase 15 Handoff if available.
8. Extract:

   * P1/P2 workflows;
   * ingestion triggers and frequencies;
   * transformation dependency graph;
   * contracted outputs;
   * quality gates and severity;
   * publish requirements;
   * SLA/freshness expectations;
   * retry/idempotency constraints;
   * backfill/replay constraints;
   * alert owners and escalation paths;
   * monitoring signals required;
   * evidence required for audit;
   * do-not-assume items from Phase 14.
9. Check whether existing `15-orchestration-observability-specification.md` exists.
10. Check whether Phase 15 support/evidence/handoff files already exist.
11. Decide whether to:

* create a new orchestration/observability specification;
* update an existing orchestration/observability specification;
* continue Phase 15 evidence/handoff work;
* route back to Phase 14;
* route back to Phase 13;
* route back to Phase 12;
* stop at HALT.

---

## Hints

* Orchestration should follow dependency and quality gate design, not just chronological order.
* Do not retry non-idempotent steps unless rerun behavior is approved.
* P1 Blocking quality failures should usually block publish.
* Freshness SLA needs a measurable timestamp.
* Observability should include data signals, not only job success/failure.
* Alerting should have owner and severity, otherwise it becomes noise.
* Backfill and replay should be designed as operations, not ad hoc manual hacks.
* The previous successful output may need to remain available when publish is blocked.
* If source readiness is uncertain, design pre-checks.
* If contract violation occurs, align with Phase 12 incident policy.
* Do not write orchestration/monitoring implementation code in this phase.

---

## Phase 14 Handoff Readiness

Before generating Phase 15 operational design, classify Phase 14 readiness:

| Item                        | Status                                                   | Action                              |
| --------------------------- | -------------------------------------------------------- | ----------------------------------- |
| Data Quality Specification  | Found / Missing / Partial                                | Continue / Route back / Risk accept |
| Phase 14 Done Gate          | Pass / Pass with risks / Missing / Fail / Blocked        | Continue / Route back / Risk accept |
| Phase 14 Handoff            | Ready / Ready with Risks / Missing / Not Ready / Blocked | Continue / Route back / Risk accept |
| Quality gate behavior       | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Severity and owner mapping  | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Monitoring expectations     | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Phase 14 Do-Not-Assume list | Found / Missing                                          | Carry forward / Ask user            |
| Phase 14 open questions     | None / Some / Blocking                                   | Carry forward / Resolve             |

---

## HALT — Missing or Weak Quality Context

Stop if upstream quality or transformation context is missing or too weak to design orchestration safely.

### Trigger

Use this HALT if:

* `14-data-quality-specification.md` is missing;
* Phase 14 handoff is missing;
* `13-transformation-specification.md` is missing;
* quality gate behavior is missing;
* transformation dependency graph is missing;
* freshness/SLA expectation is unclear;
* P1 contracted outputs lack validation/failure behavior.

### Options

A. Route back to `des-data-quality`
B. Route back to `des-transformation-design`
C. Route back to `des-data-contracts` if contract incident behavior is missing
D. Continue Phase 15 as Draft using current context
E. User provides missing orchestration context now
F. Stop workflow

### Recommendation

Choose A if quality gate behavior is missing.
Choose B if transformation dependencies are missing.
Choose D only if the user accepts that orchestration design remains Draft.

### Required response

Choose A/B/C/D/E/F.

---

## HALT — Missing Phase 14 Handoff

Stop if the Data Quality Specification exists but Phase 14 Done Gate or Phase 14 handoff is missing.

### Options

A. Route back to `des-data-quality` to create Done Gate and handoff
B. Continue Phase 15 as Draft with accepted risk
C. Treat current Phase 14 artifact as accepted risk and create a temporary Phase 15 support plan
D. Stop workflow

### Required response

Choose A/B/C/D.

---

## HALT — Workflow Scope Required

Stop if orchestration scope is unclear.

### Options

A. P1 end-to-end workflow only
B. All P1 ingestion → Bronze → Silver → Gold workflows
C. P1 + P2 workflows
D. Only contracted output workflows
E. Only operational monitoring and alerting design
F. Full project orchestration framework
G. Custom scope

### Recommendation

Choose B for first-release reliability.
Choose D if contracts define the release boundary.

### Required response

Choose A/B/C/D/E/F/G.

---

## Completion Criteria

This step is complete when:

* upstream artifacts are available or Draft continuation is approved;
* Phase 14 handoff is found or missing-handoff risk is accepted;
* workflow scope is selected or marked unresolved;
* workflow candidates, dependencies, triggers, gates, SLAs, alert owners, and evidence needs are extracted;
* unresolved orchestration/observability risks are documented;
* existing Phase 15 files are detected if present;
* the agent knows whether to create, update, or defer the orchestration/observability specification.

## Next Step

After completion, load only:

```text
steps/step-02-workflow-scheduling-and-monitoring.md
```
