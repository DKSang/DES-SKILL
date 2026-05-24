# Step 01 — Context and Readiness

## Goal

Confirm that Data Source Assessment is the correct next step, that upstream data product context is available, and that Phase 04 handoff is ready or explicitly accepted as risk.

This step does not mark Phase 05 Done.

It prepares the context needed for:

```text
initial artifact
→ support plan
→ evidence pack
→ source evidence collection
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
* `_des-output/phase-handoffs/phase-04-to-05-handoff.md`;
* `_des-output/evidence/phase-04/phase-04-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-04-done-gate.md`, if available;
* workflow status file;
* known candidate sources;
* known source owners or upstream teams;
* known access methods;
* known security, privacy, compliance, or licensing constraints;
* known source documentation, API docs, database schemas, file samples, data dictionaries, contracts, or data dictionaries;
* existing `05-data-source-inventory.md`, if present;
* existing `phase-05-support-plan.md`, if present;
* existing `phase-05-evidence-pack.md`, if present;
* existing `phase-05-to-06-handoff.md`, if present.

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
4. Check whether Phase 04 handoff exists.
5. Check whether Phase 04 Done Gate exists.
6. Read or summarize:

   * Business Discovery Brief;
   * Business Question Catalog;
   * Requirements and KPI Catalog;
   * Data Product Specification.
7. Read or summarize Phase 04 to Phase 05 Handoff if available.
8. Extract:

   * P1/P2 data product outputs;
   * first release output;
   * supported use cases;
   * P1/P2 requirements and KPIs;
   * source needs from Phase 04;
   * freshness/SLA expectations;
   * quality/trust expectations;
   * access and serving expectations;
   * security/privacy constraints;
   * product boundary and non-scope;
   * source hints;
   * do-not-assume items from Phase 04.
9. Identify candidate source systems mentioned by the user or upstream artifacts.
10. Identify known evidence sources:

* docs;
* samples;
* API specs;
* schemas;
* data dictionaries;
* owner statements;
* license/terms;
* profiling outputs.

11. Check whether existing `05-data-source-inventory.md` exists.
12. Check whether Phase 05 support/evidence/handoff files already exist.
13. Decide whether to:

* create a new source inventory;
* update an existing source inventory;
* continue Phase 05 evidence/handoff work;
* route back to Phase 04;
* stop at HALT.

---

## Hints

* A source system is where data is created, generated, captured, logged, or provided.
* Source systems can include application databases, APIs, files, SaaS exports, third-party data, data sharing feeds, logs, events, message queues, streams, spreadsheets, manual reference data, and existing warehouses/lakehouses.
* Treat source documentation, data samples, schemas, API responses, and owner statements as evidence.
* Do not confuse source availability with source suitability.
* Do not confuse source schema with business domain model.
* If no source maps to a P1 product output, the data product may need scope revision.
* If source ownership is unknown, mark the source as risky.
* If the source is external or third-party, assess cost, licensing, limits, and reliability.
* If Phase 04 handoff is missing, do not silently continue as if Phase 04 were validated.
* Phase 05 may run probes or sample inspections, but it must not design production ingestion.

---

## Source Readiness Lens

Use this lens before assessing details:

| Area        | Readiness Question                                                           |
| ----------- | ---------------------------------------------------------------------------- |
| Need        | Which product output, requirement, KPI, or source need requires this source? |
| Authority   | Is this source authoritative for the concept it provides?                    |
| Owner       | Who owns and supports this source?                                           |
| Access      | Can the data team legally and technically access it?                         |
| Pattern     | How is data created or updated?                                              |
| Freshness   | How current is the source, and how current must downstream data be?          |
| Quality     | What known issues exist?                                                     |
| Schema      | Is schema documented, inspectable, or sample-derived?                        |
| Stability   | How often does schema or meaning change?                                     |
| Security    | Does it contain sensitive, regulated, or credential-protected data?          |
| License     | Are terms, license, quota, or usage limits acceptable?                       |
| Feasibility | Can this source realistically support the first release?                     |
| Evidence    | What proof supports this assessment?                                         |

---

## Phase 04 Handoff Readiness

Before generating Phase 05 source assessment, classify Phase 04 readiness:

| Item                        | Status                                                   | Action                              |
| --------------------------- | -------------------------------------------------------- | ----------------------------------- |
| Data Product Specification  | Found / Missing / Partial                                | Continue / Route back / Risk accept |
| Phase 04 Done Gate          | Pass / Pass with risks / Missing / Fail / Blocked        | Continue / Route back / Risk accept |
| Phase 04 Handoff            | Ready / Ready with Risks / Missing / Not Ready / Blocked | Continue / Route back / Risk accept |
| P1 product outputs          | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Source needs                | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Phase 04 Do-Not-Assume list | Found / Missing                                          | Carry forward / Ask user            |
| Phase 04 open questions     | None / Some / Blocking                                   | Carry forward / Resolve             |

---

## HALT - Readiness Check Failed

Stop if upstream product context is missing or too weak to assess sources safely.

### Trigger

Use this HALT if:

* `04-data-product-specification.md` is missing;
* P1 product outputs are unclear;
* first release output is unclear;
* source needs are unclear;
* supported use cases are unclear;
* requirements/KPIs are not mapped to product outputs;
* freshness or trust expectations are unknown for P1 outputs;
* product boundary conflicts with candidate sources.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-data-product-definition`
B. Continue Phase 05 as Draft using current context
C. User provides missing product/source context now
D. Stop workflow

### Recommendation

Choose A if P1 outputs, source needs, or product boundary are unclear.
Choose B only if the user accepts that source assessment remains Draft.

### Required response

Choose A/B/C/D.

---

## HALT - Missing Phase 04 Handoff

Stop if the Data Product Specification exists but Phase 04 Done Gate or Phase 04 handoff is missing.

### Why this matters

Phase 05 should not rely on a Phase 04 artifact alone when using the Phase-Orchestrated Support Model.

### Options

A. Route back to `des-data-product-definition` to create Done Gate and handoff
B. Continue Phase 05 as Draft with accepted risk
C. Treat current Phase 04 artifact as accepted risk and create a temporary Phase 05 support plan
D. Stop workflow

### Required response

Choose A/B/C/D.

---

## HALT - No Candidate Sources Identified

Stop if no candidate source systems are known for P1 product outputs.

### Decision needed

How should candidate sources be identified?

### Options

A. User provides source list now
B. Mark P1 product output as blocked pending source discovery
C. Route back to data product scope and reduce first release
D. Continue with placeholder source risks only

### Required response

Choose A/B/C/D.

---

## Completion Criteria

This step is complete when:

* upstream artifacts are available or Draft continuation is approved;
* Phase 04 handoff is found or missing-handoff risk is accepted;
* P1/P2 outputs and requirements are extracted;
* source needs are extracted;
* candidate sources are listed or the lack of sources is recorded as a blocker;
* product-to-source mapping gaps are identified;
* existing Phase 05 files are detected if present;
* the agent knows whether to create, update, or defer the source inventory.

## Next Step

After completion, load only:

```text
steps/step-02-source-inventory-and-risk-assessment.md
```
