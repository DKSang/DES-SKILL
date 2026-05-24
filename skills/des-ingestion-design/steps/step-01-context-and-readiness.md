# Step 01 — Context and Readiness

## Goal

Confirm that Ingestion Design is the correct next step, that upstream architecture/source/product/requirement/domain context is available, and that Phase 07 handoff is ready or explicitly accepted as risk.

This step does not mark Phase 08 Done.

It prepares the context needed for:

```text
initial artifact
→ support plan
→ evidence pack
→ ingestion control validation
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
* `_des-output/phase-handoffs/phase-07-to-08-handoff.md`;
* `_des-output/evidence/phase-05/phase-05-evidence-pack.md`, if available;
* `_des-output/evidence/phase-07/phase-07-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-07-done-gate.md`, if available;
* workflow status file;
* P1/P2 source inventory;
* source access status;
* source generation patterns;
* source update frequency and freshness;
* source schema and drift risks;
* source security/privacy classification;
* source reliability, cost, quota, and rate-limit risks;
* approved architecture layer strategy;
* approved batch/streaming/event strategy;
* approved environment strategy;
* approved storage/compute strategy;
* approved security/privacy posture;
* approved governance/metadata direction;
* product freshness/SLA expectations;
* quality/trust expectations;
* existing `08-ingestion-specification.md`, if present;
* existing `phase-08-support-plan.md`, if present;
* existing `phase-08-evidence-pack.md`, if present;
* existing `phase-08-to-09-handoff.md`, if present.

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
4. Check whether Phase 07 handoff exists.
5. Check whether Phase 07 Done Gate exists.
6. Read or summarize:

   * Business Discovery Brief;
   * Business Question Catalog;
   * Requirements and KPI Catalog;
   * Data Product Specification;
   * Data Source Inventory;
   * Conceptual Domain Model;
   * Architecture Decision Record.
7. Read or summarize Phase 07 to Phase 08 Handoff if available.
8. Extract:

   * P1/P2 sources;
   * product outputs and requirements needing ingestion;
   * source types and generation patterns;
   * source access and permission status;
   * source freshness and reliability expectations;
   * source schema drift behavior;
   * source security/privacy classification;
   * source cost/quota/rate-limit risks;
   * approved architecture constraints;
   * batch/streaming/event direction;
   * layer strategy;
   * environment strategy;
   * storage/compute direction;
   * security/privacy posture;
   * governance/metadata direction;
   * cost/team constraints;
   * open questions;
   * do-not-assume items from Phase 07.
9. Check whether existing `08-ingestion-specification.md` exists.
10. Check whether Phase 08 support/evidence/handoff files already exist.
11. Decide whether to:

* create a new ingestion specification;
* update an existing ingestion specification;
* continue Phase 08 evidence/handoff work;
* route back to Phase 07;
* route back to Phase 05 source assessment;
* stop at HALT.

---

## Hints

* Ingestion design should be source-specific.
* Do not design one generic ingestion pattern for all sources unless the sources truly share the same behavior.
* Treat architecture decisions as constraints, not suggestions.
* Treat source inventory risk ratings as input to ingestion design.
* If source access is blocked or unknown, do not mark ingestion as ready.
* If source freshness is best-effort, downstream SLA must account for that.
* If source schema change behavior is unknown, schema drift must be treated as a risk.
* If the source is manual or file-based, assess delivery reliability, naming convention, encoding, format, and duplicate file handling.
* If the source is API-based, assess authentication, pagination, rate limit, retry, and response schema.
* If the source is database-based, assess read impact, CDC feasibility, and extraction consistency.
* If the source is streaming/event-based, assess ordering, replay, retention, and delivery guarantees.
* Do not design detailed Bronze schemas, Silver or Gold layer schemas, physical transformations, full orchestration workflows, or pipeline implementation code.

---

## Ingestion Readiness Lens

Use this lens before designing:

| Area         | Readiness Question                                                         |
| ------------ | -------------------------------------------------------------------------- |
| Source       | Which approved source is being ingested?                                   |
| Need         | Which product output, requirement, KPI, or source need requires this data? |
| Architecture | Which Phase 07 constraints apply?                                          |
| Access       | Is access approved and technically possible?                               |
| Pattern      | Is the data batch, streaming, event, snapshot, CDC, file, API, or manual?  |
| Frequency    | How often must data be ingested to satisfy downstream needs?               |
| Incremental  | How will new or changed data be identified?                                |
| Idempotency  | Can ingestion be safely rerun?                                             |
| Replay       | Can historical data be replayed or backfilled?                             |
| Failure      | What happens when ingestion fails?                                         |
| Drift        | What happens when source schema changes?                                   |
| Security     | How are credentials and sensitive fields handled?                          |
| Landing      | What should be preserved for Phase 09 Bronze design?                       |
| Evidence     | What metadata proves ingestion happened correctly?                         |

---

## Phase 07 Handoff Readiness

Before generating Phase 08 ingestion design, classify Phase 07 readiness:

| Item                                   | Status                                                   | Action                              |
| -------------------------------------- | -------------------------------------------------------- | ----------------------------------- |
| Architecture Decision Record           | Found / Missing / Partial                                | Continue / Route back / Risk accept |
| Phase 07 Done Gate                     | Pass / Pass with risks / Missing / Fail / Blocked        | Continue / Route back / Risk accept |
| Phase 07 Handoff                       | Ready / Ready with Risks / Missing / Not Ready / Blocked | Continue / Route back / Risk accept |
| Architecture constraints for ingestion | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Source caveats                         | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Phase 07 Do-Not-Assume list            | Found / Missing                                          | Carry forward / Ask user            |
| Phase 07 open questions                | None / Some / Blocking                                   | Carry forward / Resolve             |

---

## HALT - Readiness Check Failed

Stop if upstream architecture, domain, or source context is missing or too weak to design ingestion safely.

### Trigger

Use this HALT if:

* `07-architecture-decision-record.md` is missing;
* Phase 07 handoff is missing;
* source inventory is missing;
* P1 sources have unknown access status;
* architecture layer strategy is unclear;
* batch/streaming/event strategy is unclear;
* source freshness or product SLA expectations conflict;
* source security/privacy classification is unknown for P1 sources.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-architecture-design`
B. Route back to `des-data-source-assessment`
C. Continue Phase 08 as Draft using current context
D. User provides missing ingestion context now
E. Stop workflow

### Recommendation

Choose A if architecture direction or handoff is missing.
Choose B if source access, source type, or source risk is missing.
Choose C only if the user accepts that ingestion design remains Draft.

### Required response

Choose A/B/C/D/E.

---

## HALT - Missing Phase 07 Handoff

Stop if the Architecture Decision Record exists but Phase 07 Done Gate or Phase 07 handoff is missing.

### Why this matters

Phase 08 should not rely on a Phase 07 artifact alone when using the Phase-Orchestrated Support Model.

### Options

A. Route back to `des-architecture-design` to create Done Gate and handoff
B. Continue Phase 08 as Draft with accepted risk
C. Treat current Phase 07 artifact as accepted risk and create a temporary Phase 08 support plan
D. Stop workflow

### Required response

Choose A/B/C/D.

---

## HALT - Source Access Status

Stop if a P1 source has unknown, pending, denied, or untested access.

### Decision needed

How should ingestion design proceed for this source?

### Options

A. Continue only as Draft until access is approved and tested
B. Design ingestion assuming access will be approved, mark risk
C. Replace source or route back to source assessment
D. Defer this source from first release
E. Stop workflow until access is resolved

### Required response

Choose A/B/C/D/E.

---

## HALT - Ingestion Scope Required

Stop if ingestion scope is unclear.

### Decision needed

Which sources are in Phase 08 ingestion scope?

### Options

A. Only P1 sources needed for first-release product output
B. P1 + P2 sources from Phase 05
C. All candidate sources from Phase 05
D. Only sources marked Ready or Viable with risks
E. Custom scope

### Recommendation

Choose A for MVP delivery.
Choose D if source readiness is mixed.

### Required response

Choose A/B/C/D/E.

---

## Completion Criteria

This step is complete when:

* upstream artifacts are available or Draft continuation is approved;
* Phase 07 handoff is found or missing-handoff risk is accepted;
* P1/P2 sources are identified;
* ingestion scope is selected or marked unresolved;
* access status and architecture constraints are known or marked as blockers;
* ingestion context gaps are documented;
* existing Phase 08 files are detected if present;
* the agent knows whether to create, update, or defer the ingestion specification.

## Next Step

After completion, load only:

```text
steps/step-02-ingestion-patterns-and-controls.md
```
