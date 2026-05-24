# Step 01 — Context and Readiness

## Goal

Confirm that Architecture Design is the correct next step, that upstream business/product/source/domain context is available, and that Phase 06 handoff is ready or explicitly accepted as risk.

This step does not mark Phase 07 Done.

It prepares the context needed for:

```text
initial artifact
→ support plan
→ evidence pack
→ option/trade-off/reversibility validation
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
* `_des-output/phase-handoffs/phase-06-to-07-handoff.md`;
* `_des-output/evidence/phase-06/phase-06-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-06-done-gate.md`, if available;
* workflow status file;
* known platform constraints;
* known team capabilities;
* known cloud/on-prem/hybrid constraints;
* known security, privacy, compliance, and governance constraints;
* known cost/capacity constraints;
* known data freshness and latency expectations;
* known serving expectations;
* known source caveats from Phase 05;
* known domain constraints from Phase 06;
* known existing architecture if this is a brownfield project;
* existing `07-architecture-decision-record.md`, if present;
* existing `phase-07-support-plan.md`, if present;
* existing `phase-07-evidence-pack.md`, if present;
* existing `phase-07-to-08-handoff.md`, if present.

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
4. Check whether Phase 06 handoff exists.
5. Check whether Phase 06 Done Gate exists.
6. Read or summarize:

   * Business Discovery Brief;
   * Business Question Catalog;
   * Requirements and KPI Catalog;
   * Data Product Specification;
   * Data Source Inventory;
   * Conceptual Domain Model.
7. Read or summarize Phase 06 to Phase 07 Handoff if available.
8. Extract:

   * product outputs;
   * P1/P2 requirements;
   * freshness/SLA expectations;
   * quality/trust expectations;
   * security/privacy constraints;
   * source types and access patterns;
   * source reliability, license, cost, schema, and quality risks;
   * core domain concepts and grains;
   * source-of-truth and identity constraints;
   * serving expectations;
   * cost/performance constraints;
   * governance and metadata needs;
   * known platform/tool constraints;
   * open questions;
   * do-not-assume items from Phase 06.
9. Check whether existing `07-architecture-decision-record.md` exists.
10. Check whether Phase 07 support/evidence/handoff files already exist.
11. Decide whether to:

* create a new ADR;
* update an existing ADR;
* continue Phase 07 evidence/handoff work;
* route back to Phase 06;
* route back to another upstream phase;
* stop at HALT.

---

## Hints

* Architecture is strategic; tools are tactical.
* Architecture should explain what, why, and when. Tools explain how.
* Do not choose tools before clarifying architecture goals and constraints.
* Use domain model and source assessment as architecture evidence.
* If source patterns include streaming/events, evaluate streaming/event architecture, but do not assume it is required.
* If freshness requirements are batch-friendly, do not over-engineer streaming.
* If the project is brownfield, understand existing constraints before recommending replacement.
* Prefer reversible decisions when uncertainty is high.
* Treat security, governance, observability, and cost as architecture concerns, not add-ons.
* Architecture may mention candidate technologies, but must state rationale, trade-offs, and reversibility.
* Do not design physical schemas, detailed ingestion pipelines, transformations, dashboards, APIs, CI/CD files, or code in this phase.

---

## Architecture Readiness Lens

Use this lens before designing:

| Area          | Readiness Question                                                                                |
| ------------- | ------------------------------------------------------------------------------------------------- |
| Business fit  | Which business questions and product outputs drive architecture?                                  |
| Source fit    | What source types, generation patterns, volumes, and risks must be supported?                     |
| Domain fit    | Which domain concepts, grains, identity rules, and source-of-truth decisions affect architecture? |
| Freshness     | Are requirements batch, near-real-time, streaming, or mixed?                                      |
| Serving       | How will consumers access outputs?                                                                |
| Security      | What sensitivity, access, and compliance constraints exist?                                       |
| Operations    | How will orchestration, monitoring, failure handling, and change management work?                 |
| Cost          | What cost/capacity limits exist?                                                                  |
| Team          | What skills and operational burden can the team handle?                                           |
| Reversibility | Which decisions are safe to change later, and which are costly?                                   |
| Evidence      | Which upstream artifact or support evidence justifies this architecture decision?                 |

---

## Phase 06 Handoff Readiness

Before generating Phase 07 architecture, classify Phase 06 readiness:

| Item                        | Status                                                   | Action                              |
| --------------------------- | -------------------------------------------------------- | ----------------------------------- |
| Conceptual Domain Model     | Found / Missing / Partial                                | Continue / Route back / Risk accept |
| Phase 06 Done Gate          | Pass / Pass with risks / Missing / Fail / Blocked        | Continue / Route back / Risk accept |
| Phase 06 Handoff            | Ready / Ready with Risks / Missing / Not Ready / Blocked | Continue / Route back / Risk accept |
| Domain concepts and grains  | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Source caveats              | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Phase 06 Do-Not-Assume list | Found / Missing                                          | Carry forward / Ask user            |
| Phase 06 open questions     | None / Some / Blocking                                   | Carry forward / Resolve             |

---

## HALT - Readiness Check Failed

Stop if upstream domain or source context is missing or too weak to design architecture safely.

### Trigger

Use this HALT if:

* `06-conceptual-domain-model.md` is missing;
* Phase 06 handoff is missing;
* source inventory is missing or P1 sources are unknown;
* data product outputs are unclear;
* P1 requirements are unclear;
* freshness/security/serving expectations are missing;
* architecture drivers conflict with unresolved upstream decisions.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-domain-modeling`
B. Route back to another upstream skill that owns the missing context
C. Continue Phase 07 as Draft using current context
D. User provides missing architecture context now
E. Stop workflow

### Recommendation

Choose A or B if missing context affects P1 architecture decisions.
Choose C only if the user accepts that the ADR remains Draft.

### Required response

Choose A/B/C/D/E.

---

## HALT - Missing Phase 06 Handoff

Stop if the Conceptual Domain Model exists but Phase 06 Done Gate or Phase 06 handoff is missing.

### Why this matters

Phase 07 should not rely on a Phase 06 artifact alone when using the Phase-Orchestrated Support Model.

### Options

A. Route back to `des-domain-modeling` to create Done Gate and handoff
B. Continue Phase 07 as Draft with accepted risk
C. Treat current Phase 06 artifact as accepted risk and create a temporary Phase 07 support plan
D. Stop workflow

### Required response

Choose A/B/C/D.

---

## HALT - Architecture Scope Required

Stop if the architecture boundary is unclear.

### Decision needed

What scope should this architecture cover?

### Options

A. First-release data product only
B. P1 and P2 data product roadmap
C. Project-wide data platform foundation
D. Organization-wide data architecture pattern
E. Migration/modernization target architecture
F. Custom scope

### Recommendation

Choose A for MVP speed.
Choose C if the project is explicitly a platform foundation.

### Required response

Choose A/B/C/D/E/F.

---

## Completion Criteria

This step is complete when:

* upstream artifacts are available or Draft continuation is approved;
* Phase 06 handoff is found or missing-handoff risk is accepted;
* architecture scope is selected or marked unresolved;
* architecture drivers and constraints are extracted;
* known platform/tool constraints are separated from architecture decisions;
* source/domain caveats are carried forward;
* existing Phase 07 files are detected if present;
* open risks are documented;
* the agent knows whether to create, update, or defer the ADR.

## Next Step

After completion, load only:

```text
steps/step-02-architecture-options-and-decisions.md
```
