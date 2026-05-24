# Step 01 - Context and Readiness

## Goal

Confirm that Data Product Definition is the correct next step, that upstream business/question/requirement context is available, and that Phase 03 handoff is ready or explicitly accepted as risk.

This step does not mark Phase 04 Done.

It prepares the context needed for:

```text
initial artifact
→ support plan
→ evidence pack
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
* `_des-output/phase-handoffs/phase-03-to-04-handoff.md`;
* `_des-output/evidence/phase-03/phase-03-evidence-pack.md`, if available;
* `_des-output/implementation-artifacts/phase-03-done-gate.md`, if available;
* workflow status file;
* approved consumers;
* P1/P2 business questions;
* P1/P2 functional and non-functional requirements;
* approved, draft, or candidate KPIs;
* scope and non-scope;
* initial success criteria;
* known output expectations such as dashboard, dataset, API, semantic model, ML dataset, data sharing, report, or application feature;
* existing `04-data-product-specification.md`, if present;
* existing `phase-04-support-plan.md`, if present;
* existing `phase-04-evidence-pack.md`, if present;
* existing `phase-04-to-05-handoff.md`, if present.

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
4. Check whether Phase 03 handoff exists.
5. Check whether Phase 03 Done Gate exists.
6. Read or summarize Business Discovery Brief.
7. Read or summarize Business Question Catalog.
8. Read or summarize Requirements and KPI Catalog.
9. Read or summarize Phase 03 to Phase 04 Handoff if available.
10. Extract:

* primary and secondary consumers;
* target decisions or use cases;
* P1/P2 business questions;
* P1/P2 requirements;
* approved or draft KPIs;
* success criteria;
* constraints;
* scope and non-scope;
* output expectations;
* trust expectations, if already known;
* open questions;
* do-not-assume items from Phase 03.

11. Check whether existing `04-data-product-specification.md` exists.
12. Check whether Phase 04 support/evidence/handoff files already exist.
13. Decide whether to:

* create a new product specification;
* update an existing product specification;
* continue Phase 04 evidence/handoff work;
* route back to Phase 03;
* stop at HALT.

---

## Hints

* A data product must serve a consumer or system.
* A data product is more than a table. It includes expectations around usability, trust, ownership, and consumption.
* Do not assume a dashboard, API, or ML dataset is the data product by itself; it may be an output of the product.
* If Phase 03 has no approved requirements, this phase can continue only as Draft or with accepted risk.
* If Phase 03 handoff is missing, do not silently continue as if Phase 03 were validated.
* If multiple consumers have conflicting needs, identify whether this is one data product with multiple views or multiple data products.
* If the project is platform/infrastructure-focused, the consumer may be internal data teams, analysts, ML teams, or downstream systems.
* Treat candidate metrics from Phase 03 as candidate outputs unless approved.
* Phase 04 evidence may include Phase 03 handoff, user-approved product boundary, service/trust expectation decisions, owner decisions, or accepted risk.

---

## Data Product Readiness Lens

Use this lens before defining the product:

| Area        | Readiness Question                                                        |
| ----------- | ------------------------------------------------------------------------- |
| Consumer    | Who or what consumes this product?                                        |
| Use Case    | Which decisions, workflows, analytics, ML, or operations does it support? |
| Value       | What value does the product create?                                       |
| Output      | What form does the consumer receive?                                      |
| Boundary    | What is inside and outside the product?                                   |
| Service     | How fresh, reliable, trustworthy, and accessible must it be?              |
| Owner       | Who owns product definition and change approval?                          |
| Lifecycle   | Is this experimental, MVP, shared, production, or deprecated?             |
| Source Need | What source evidence will Phase 05 need to assess?                        |
| Evidence    | What supports the product boundary and promise?                           |

---

## Phase 03 Handoff Readiness

Before generating Phase 04 product definition, classify Phase 03 readiness:

| Item                         | Status                                                   | Action                              |
| ---------------------------- | -------------------------------------------------------- | ----------------------------------- |
| Requirements and KPI Catalog | Found / Missing / Partial                                | Continue / Route back / Risk accept |
| Phase 03 Done Gate           | Pass / Pass with risks / Missing / Fail / Blocked        | Continue / Route back / Risk accept |
| Phase 03 Handoff             | Ready / Ready with Risks / Missing / Not Ready / Blocked | Continue / Route back / Risk accept |
| Approved P1/P2 requirements  | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Approved/draft KPIs          | Found / Missing / Partial                                | Continue / Resolve / Risk accept    |
| Phase 03 Do-Not-Assume list  | Found / Missing                                          | Carry forward / Ask user            |
| Phase 03 open questions      | None / Some / Blocking                                   | Carry forward / Resolve             |

---

## HALT - Missing or Weak Requirements Context

Stop if upstream requirements are missing or too weak to define a product safely.

### Trigger

Use this HALT if:

* `03-requirements-and-kpi-catalog.md` is missing;
* P1 requirements are not identified;
* primary consumer is missing;
* target use case is missing;
* success criteria are missing;
* requirements contain unresolved conflicts that affect product boundary.

### Decision needed

How should the agent proceed?

### Options

A. Route back to `des-requirements-and-kpis`
B. Continue Phase 04 as Draft using current context
C. User provides missing requirement/product context now
D. Stop workflow

### Recommendation

Choose A if P1 requirements or primary consumer are missing.
Choose B only if the user accepts that the product specification remains Draft.

### Required response

Choose A/B/C/D.

---

## HALT - Missing Phase 03 Handoff

Stop if the Requirements and KPI Catalog exists but Phase 03 Done Gate or Phase 03 handoff is missing.

### Why this matters

Phase 04 should not rely on a Phase 03 artifact alone when using the Phase-Orchestrated Support Model.

### Options

A. Route back to `des-requirements-and-kpis` to create Done Gate and handoff
B. Continue Phase 04 as Draft with accepted risk
C. Treat current Phase 03 artifact as accepted risk and create a temporary Phase 04 support plan
D. Stop workflow

### Required response

Choose A/B/C/D.

---

## Completion Criteria

This step is complete when:

* upstream artifacts are available or Draft continuation is approved;
* Phase 03 handoff is found or missing-handoff risk is accepted;
* primary consumers and P1 use cases are identified or marked unresolved;
* P1 requirements and success criteria are extracted;
* do-not-assume items from Phase 03 are carried forward;
* product definition gaps are documented;
* existing Phase 04 files are detected if present;
* the agent knows whether to create, update, or defer the product specification.

---

## Next Step

After completion, load only:

```text
steps/step-02-product-boundary-and-service-design.md
```
