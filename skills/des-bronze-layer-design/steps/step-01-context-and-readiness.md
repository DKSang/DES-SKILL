# Step 01 — Context and Readiness

## Goal

Confirm that Bronze Layer Design is the correct next step, that upstream ingestion/architecture/source/product/security context is available, and that Phase 08 handoff is ready or explicitly accepted as risk.

This step does not mark Phase 09 Done.

It prepares the context needed for:

```text
initial artifact
→ support plan
→ evidence pack
→ raw preservation / metadata / drift / replay / quarantine validation
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
* `_des-output/phase-handoffs/phase-08-to-09-handoff.md`;
* `_des-output/evidence/phase-08/phase-08-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-08-done-gate.md`, if available;
* workflow status file;
* in-scope P1/P2 sources;
* ingestion patterns;
* landing target expectations;
* ingestion metadata expectations;
* monitoring/audit expectations;
* replay/backfill strategy;
* idempotency strategy;
* schema drift policy;
* source security/privacy classification;
* retention or compliance requirements;
* architecture layer strategy;
* storage strategy;
* access control expectations;
* quarantine/rejected data expectations;
* existing `09-bronze-layer-specification.md`, if present;
* existing `phase-09-support-plan.md`, if present;
* existing `phase-09-evidence-pack.md`, if present;
* existing `phase-09-to-10-handoff.md`, if present.

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
4. Check whether Phase 08 handoff exists.
5. Check whether Phase 08 Done Gate exists.
6. Read or summarize:

   * Business Discovery Brief;
   * Business Question Catalog;
   * Requirements and KPI Catalog;
   * Data Product Specification;
   * Data Source Inventory;
   * Conceptual Domain Model;
   * Architecture Decision Record;
   * Ingestion Specification.
7. Read or summarize Phase 08 to Phase 09 Handoff if available.
8. Extract:

   * P1/P2 sources;
   * ingestion pattern per source;
   * source payload/format;
   * expected landing target;
   * source-to-ingestion mapping;
   * source-to-product/requirement/KPI mapping;
   * ingestion metadata requirements;
   * monitoring/audit requirements;
   * source sensitivity classification;
   * schema drift policy from Ingestion Design;
   * replay/backfill strategy;
   * idempotency strategy;
   * error/quarantine expectations;
   * retention constraints;
   * architecture storage/layer decisions;
   * open questions;
   * do-not-assume items from Phase 08.
9. Check whether existing `09-bronze-layer-specification.md` exists.
10. Check whether Phase 09 support/evidence/handoff files already exist.
11. Decide whether to:

* create a new Bronze specification;
* update an existing Bronze specification;
* continue Phase 09 evidence/handoff work;
* route back to Phase 08;
* route back to Phase 07;
* stop at HALT.

---

## Hints

* Bronze should preserve source truth and ingestion evidence.
* Bronze is not the place for business conformance or curated metrics.
* Bronze dataset boundaries usually align to source feed, source object, endpoint, topic, file family, or logical raw object.
* If ingestion design says raw payload must be retained, Bronze must support that.
* If replay/backfill is required, Bronze must preserve enough raw data and metadata.
* If schema drift is expected, Bronze design must record how drift is stored, detected, rescued, quarantined, or versioned.
* If source contains sensitive data, Bronze access should be stricter than curated layers.
* If bad records are quarantined, define where and how they remain traceable.
* If partitioning is unknown, avoid high-cardinality keys and record as Draft.
* Do not clean, conform, deduplicate for business correctness, or design detailed Silver/Gold tables, physical transformations, or write pipeline implementation code.

---

## Bronze Readiness Lens

Use this lens before designing:

| Area             | Readiness Question                                                            |
| ---------------- | ----------------------------------------------------------------------------- |
| Source           | Which ingestion source/feed/object creates this Bronze dataset?               |
| Ingestion        | Which ingestion pattern and metadata constraints apply?                       |
| Raw preservation | What must be retained exactly as received?                                    |
| Format           | What format/table/file representation is appropriate?                         |
| Organization     | How should files/tables/paths be organized?                                   |
| Partition        | How should data be organized for replay, cost, and operations?                |
| Metadata         | What evidence is needed to trace load, source, file, run, window, and schema? |
| Drift            | What happens when source schema changes?                                      |
| Replay           | Can Bronze support backfill and reprocessing?                                 |
| Quarantine       | Where do malformed/rejected records go?                                       |
| Retention        | How long should raw data be kept?                                             |
| Access           | Who can read raw data, especially sensitive fields?                           |
| Boundary         | What technical normalization is allowed versus deferred to Silver?            |

---

## Phase 08 Handoff Readiness

Before generating Phase 09 Bronze design, classify Phase 08 readiness:

| Item                            | Status                                                   | Action                              |
| ------------------------------- | -------------------------------------------------------- | ----------------------------------- |
| Ingestion Specification         | Found / Missing / Partial                                | Continue / Route back / Risk accept |
| Phase 08 Done Gate              | Pass / Pass with risks / Missing / Fail / Blocked        | Continue / Route back / Risk accept |
| Phase 08 Handoff                | Ready / Ready with Risks / Missing / Not Ready / Blocked | Continue / Route back / Risk accept |
| Ingestion metadata expectations | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Landing expectations            | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Schema drift policy             | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Replay/backfill support         | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Phase 08 Do-Not-Assume list     | Found / Missing                                          | Carry forward / Ask user            |
| Phase 08 open questions         | None / Some / Blocking                                   | Carry forward / Resolve             |

---

## HALT - Readiness Check Failed

Stop if upstream ingestion context, architecture context, or source context is missing or too weak to design Bronze safely.

### Trigger

Use this HALT if:

* `08-ingestion-specification.md` is missing;
* Phase 08 handoff is missing;
* P1 sources have no ingestion pattern;
* landing target expectations are missing;
* ingestion metadata expectations are missing;
* replay/backfill or schema drift policy is unclear;
* security/privacy classification is unknown for raw data.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-ingestion-design`
B. Route back to `des-architecture-design` if storage/layer strategy is unclear
C. Continue Phase 08 as Draft using current context
D. User provides missing Bronze context now
E. Stop workflow

### Recommendation

Choose A if ingestion pattern, metadata, replay, or drift policy is missing.
Choose B if architecture storage/layer strategy is missing.
Choose C only if the user accepts that Bronze design remains Draft.

### Required response

Choose A/B/C/D/E.

---

## HALT - Missing Phase 08 Handoff

Stop if the Ingestion Specification exists but Phase 08 Done Gate or Phase 08 handoff is missing.

### Why this matters

Phase 09 should not rely on a Phase 08 artifact alone when using the Phase-Orchestrated Support Model.

### Options

A. Route back to `des-ingestion-design` to create Done Gate and handoff
B. Continue Phase 09 as Draft with accepted risk
C. Treat current Phase 08 artifact as accepted risk and create a temporary Phase 09 support plan
D. Stop workflow

### Required response

Choose A/B/C/D.

---

## HALT - Bronze Dataset Boundary

Stop if it is unclear how source data should map to Bronze datasets.

### Decision needed

How should Bronze dataset boundaries be defined?

### Options

A. One Bronze dataset per source system
B. One Bronze dataset per source object/table/endpoint/topic/file family
C. One Bronze dataset per ingestion pipeline
D. One Bronze dataset per business concept
E. Custom boundary
F. Keep as Draft pending source clarification

### Recommendation

Prefer B for traceability and replay.
Avoid D unless source already emits business-conformed data.

### Required response

Choose A/B/C/D/E/F.

---

## Completion Criteria

This step is complete when:

* upstream artifacts are available or Draft continuation is approved;
* Phase 08 handoff is found or missing-handoff risk is accepted;
* P1/P2 sources and ingestion patterns are extracted;
* Bronze dataset boundary decision is known or marked unresolved;
* raw preservation, metadata, drift, replay, retention, quarantine, and access gaps are identified;
* existing Phase 09 files are detected if present;
* the agent knows whether to create, update, or defer the Bronze specification.

## Next Step

After completion, load only:

```text
steps/step-02-bronze-dataset-and-storage-decisions.md
```
