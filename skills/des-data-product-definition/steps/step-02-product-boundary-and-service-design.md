# Step 02 - Product Boundary and Service Design

## Goal

Define the data product boundary, consumers, supported use cases, product outputs, ownership, lifecycle status, service expectations, and source-assessment readiness.

This step prepares the Data Product Specification and identifies which product definition decisions require evidence, support work, waiver, or accepted risk.

---

## Required Inputs

- Confirmed context from Step 01
- Business Discovery Brief
- Business Question Catalog
- Requirements and KPI Catalog
- Phase 03 to Phase 04 handoff, if available
- Phase 03 do-not-assume list
- User answers from HALT points
- Existing product notes, if any

---

## Actions

1. Define candidate data product name and intent.
2. Identify primary and secondary consumers.
3. Map supported use cases to business questions and requirements.
4. Define product outputs.
5. Mark first release output.
6. Define what is inside the product boundary.
7. Define what is explicitly outside the product boundary.
8. Define service expectations:
   - freshness;
   - reliability;
   - availability;
   - quality/trust;
   - access;
   - discoverability;
   - support model.
9. Define ownership and stewardship.
10. Define lifecycle status.
11. Identify data contract expectations.
12. Identify governance and security considerations.
13. Identify source needs for Phase 05.
14. Identify dependencies, assumptions, risks, and open questions.
15. Map each critical product decision to evidence.
16. Mark unsupported product claims as `Draft`, `Open`, `Assumption`, `Risk`, `Deferred`, or `Blocked`.
17. Identify required Phase 04 support work.
18. Use HALT checkpoints before finalizing product definition.
19. Prepare draft content for the Data Product Specification.
20. Prepare content for the Phase 04 Support Plan.

---

## Hints

- Think in terms of product promise to the consumer.
- Product output may be a table, dataset, dashboard, metric layer, semantic model, API, file share, ML feature dataset, reverse ETL feed, data sharing object, or application-facing data service.
- Do not over-specify physical implementation.
- Product boundary should be small enough to own and support.
- If many outputs serve unrelated consumers, split into multiple data products or define release stages.
- Service expectations should be traceable to requirements, not invented.
- Data contract expectation is not the full data contract; Phase 12 will define contracts.
- Serving detail belongs later; here only define expected access pattern and output type.
- Do not design physical tables, sources, pipelines, transformations, full data contracts, dashboards, semantic model internals, APIs, application implementation, or code.
- Phase 05 needs clear product outputs and source needs, not vague product ambition.

---

## Data Product Output Types

Classify each product output as one or more:

| Output Type | Description |
| --- | --- |
| Analytical dataset | Curated table or dataset for analytics |
| Semantic / metrics layer | Standardized business logic and measures |
| Dashboard / report | Human-facing visualization output |
| API / application data service | Data served to software product or app |
| ML / AI dataset | Feature, label, training, evaluation, or inference dataset |
| Operational feed | Data used to trigger or support operations |
| Reverse ETL feed | Data pushed back to business tools |
| Data sharing product | Shared dataset for internal/external consumers |
| Notebook-ready dataset | Dataset optimized for exploration or data science |
| Governance/audit product | Data used for compliance, lineage, audit, or quality monitoring |

---

## Product Decision Evidence Mapping

For every critical product decision, capture the evidence status.

| Field | Evidence Status | Allowed Output |
|---|---|---|
| Product intent | Confirmed / Assumed / Missing / Waived | Approved / Draft / Open / Accepted Risk |
| Primary consumer | Confirmed / Assumed / Missing / Waived | Approved / Draft / Open / Accepted Risk |
| Supported use case | Confirmed / Assumed / Missing / Waived | Approved / Draft / Open / Accepted Risk |
| Product output | Confirmed / Assumed / Missing / Waived | Approved / Draft / Open / Accepted Risk |
| Product boundary | Confirmed / Assumed / Missing / Waived | Approved / Draft / Open / Accepted Risk |
| First release output | Confirmed / Assumed / Missing / Waived | Approved / Draft / Open / Accepted Risk |
| Service expectation | Confirmed / Assumed / Missing / Waived | Approved / Draft / Open / Accepted Risk |
| Trust expectation | Confirmed / Assumed / Missing / Waived | Approved / Draft / Open / Accepted Risk |
| Product owner/steward | Confirmed / Assumed / Missing / Waived | Approved / Draft / Unknown / Accepted Risk |
| Lifecycle status | Confirmed / Assumed / Missing / Waived | Approved / Draft / Open / Accepted Risk |
| Source needs | Confirmed / Assumed / Missing / Waived | Ready for Phase 05 / Draft / Open / Blocked |

---

## Phase 04 Required Support Work

Based on the product decisions above, prepare a support plan using these categories:

| Support Work | Required When | Output |
|---|---|---|
| Phase 03 Handoff Review | Always | Evidence pack |
| Product Boundary Check | Always | Evidence pack |
| Consumer and Use Case Alignment Check | Always | Evidence pack |
| Product Output Check | Always | Evidence pack |
| Service Expectation Check | P1 output exists | Evidence pack |
| Trust Expectation Check | Product is used for decisions, ML, operations, or shared reporting | Evidence pack |
| Ownership and Stewardship Check | Always | Evidence pack |
| Lifecycle Status Check | Always | Evidence pack |
| Phase 05 Source Need Readiness Check | Always before Phase 05 | Evidence pack |
| Done Gate | Always before marking Done | Done Gate result |
| Handoff to Phase 05 | Always before Phase 05 | Handoff file |

---

## HALT - Primary Consumer Approval

Stop if the data product has no clear primary consumer.

### Why this matters

The consumer determines the product boundary, output format, SLA, access pattern, documentation, and support model.

### Decision needed

Approve the primary consumer.

### Options

A. Business analyst / data analyst  
B. Executive or management stakeholder  
C. Data scientist / ML user  
D. Operational team  
E. Application or product user  
F. External customer or partner  
G. Internal platform/data team  
H. Machine/system consumer  
I. Multiple consumers with priority order  
J. Custom consumer  

### Required response

Choose one option or provide a prioritized list.

---

## HALT - Product Boundary Approval

Stop if the product boundary is too broad, too vague, or overlaps unrelated use cases.

### Why this matters

A vague product boundary creates unclear ownership, unstable requirements, weak contracts, and uncontrolled scope growth.

### Decision needed

Approve what is inside and outside the data product.

### Options

A. Keep one product with clearly staged releases  
B. Split into multiple data products by consumer  
C. Split into multiple data products by use case  
D. Reduce MVP scope  
E. Keep as Draft until boundary is clearer  

### Required response

Choose A/B/C/D/E.

---

## HALT - First Release Output Approval

Stop if the first release output is unclear.

### Why this matters

The first output drives source assessment, architecture, Gold design, semantic design, serving design, testing, and release evaluation.

### Decision needed

Approve the first product output.

### Options

A. Curated analytical dataset/table  
B. Semantic model or metrics layer  
C. Dashboard/report  
D. API or application-facing data service  
E. ML/AI dataset  
F. Operational feed  
G. Reverse ETL feed  
H. Data sharing object  
I. Governance/audit output  
J. Custom output  

### Required response

Choose one or more outputs and mark which is first release.

---

## HALT - Service Expectation Approval

Stop if freshness, reliability, or support expectation is unclear for a P1 output.

### Why this matters

Service expectations affect ingestion, orchestration, observability, quality, cost, and release gates.

### Decision needed

Approve service expectation for the first release.

### Required fields

- Freshness expectation
- Availability or support expectation
- Reliability expectation
- Quality/trust expectation
- Consumer support or escalation path

### Options

A. Lightweight MVP service expectation  
B. Internal shared product service expectation  
C. Production-grade service expectation  
D. Experimental/no guarantee  
E. Custom service expectation  

### Required response

Choose A/B/C/D/E and specify expectations.

---

## HALT - Product Owner Required

Stop if no owner or steward is defined.

### Why this matters

A data product without ownership cannot manage changes, contracts, documentation, incidents, or consumer trust.

### Decision needed

Who owns this data product?

### Options

A. Business owner  
B. Product owner  
C. Data/analytics owner  
D. Engineering/platform owner  
E. Shared business + data ownership  
F. Unknown - keep as Draft  

### Required response

Choose A/B/C/D/E/F and provide owner/team if known.

---

## HALT - Lifecycle Status

Stop if lifecycle status is unclear.

### Why this matters

Lifecycle status changes contract strictness, SLA, documentation, testing, governance, and release requirements.

### Options

A. Experimental  
B. Draft  
C. MVP  
D. Internal shared  
E. Production  
F. Deprecated  

### Required response

Choose A/B/C/D/E/F.

---

## HALT - Trust Expectation Required

Stop if consumers require trust but quality, definition, or support expectations are unclear.

### Trigger examples

- Consumers will make business decisions from the output.
- Output feeds ML/AI or operational systems.
- Output is customer-facing.
- Output has compliance/audit impact.
- Output uses standardized metrics or definitions.

### Decision needed

What trust expectation applies?

### Options

A. Exploratory only; no guarantee  
B. Internal decision-support; documented limitations  
C. Trusted shared product with quality checks  
D. Production-grade product with contracts and monitoring  
E. Compliance/audit-grade product  

### Required response

Choose A/B/C/D/E.

---

## HALT - Phase 05 Source Need Not Ready

Stop if Phase 04 cannot explain what source evidence Phase 05 needs to assess.

### Trigger examples

- Product output is vague.
- First release output is unclear.
- Supported use case is not mapped to requirements.
- KPIs/requirements are too draft to assess sources.
- Source needs are described only as “find useful data”.

### Options

A. Refine product outputs and source needs now  
B. Mark Phase 04 as Draft with blockers  
C. Route back to `des-requirements-and-kpis`  
D. Continue to Phase 05 with accepted risk  
E. Stop workflow  

### Required response

Choose A/B/C/D/E.

---

## Completion Criteria

This step is complete when:

- data product name and intent are drafted;
- primary consumer is approved or marked Draft/Risk;
- supported use cases are mapped to questions/requirements;
- product outputs are defined;
- first release output is defined;
- product boundary and non-scope are defined;
- service expectations are defined or marked unresolved;
- ownership and lifecycle status are defined;
- trust expectation is defined;
- source needs for Phase 05 are explicit enough to assess candidate sources;
- evidence mapping is prepared;
- required support work is identified;
- draft specification content is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
