# Step 02 — Semantic Concepts, Measures, Relationships, and Evidence

## Goal

Define semantic models, business entities, measures, dimensions, hierarchies, relationships, aggregation behavior, filters, time intelligence, naming, security, certification, freshness display, quality display, lineage, semantic testing expectations, and supporting evidence.

This step prepares the Semantic Model Specification and identifies which semantic decisions require evidence, support work, waiver, or accepted risk.

---

## Required Inputs

- Confirmed context from Step 01
- Phase 15 to Phase 16 handoff, if available
- Phase 15 evidence pack, if available
- Gold Layer Specification
- Requirements and KPI Catalog
- Data Contract Specification
- Data Quality Specification
- Orchestration and Observability Specification
- Conceptual Domain Model
- User answers from HALT points
- Existing BI/semantic/metrics standards if available

---

## Actions

1. Define semantic scope and non-scope.
2. Define semantic design principles.
3. Create semantic model inventory.
4. Map consumers and use cases.
5. Map Gold datasets to semantic entities, measures, and dimensions.
6. Align semantic terms with business glossary.
7. Define semantic entities.
8. Define measures and KPIs.
9. Define dimensions and attributes.
10. Define hierarchies.
11. Define relationships and join behavior.
12. Define grain and aggregation behavior.
13. Define filters and slicers.
14. Define time intelligence expectations.
15. Define calculation ownership.
16. Define naming and display conventions.
17. Define security and access model.
18. Define certification and trust status.
19. Define freshness and quality display expectations.
20. Define lineage and metadata expectations.
21. Define semantic testing expectations.
22. Define contract and quality alignment.
23. Map each critical semantic decision to evidence.
24. Mark unsupported semantic claims as `Draft`, `Risk`, `Blocked`, `Deprecated`, `Unknown`, or `Waived with reason`.
25. Identify required Phase 16 support work.
26. Use HALT checkpoints for unresolved decisions.
27. Prepare draft Semantic Model Specification content.
28. Prepare content for the Phase 16 Support Plan.

---

## Semantic Design Principles

| Principle | Meaning |
|---|---|
| Business-first | Expose business terms, not raw physical naming |
| Metric-consistent | Measures must follow approved KPI/Gold definitions |
| Grain-explicit | Users must understand aggregation and one-record meaning |
| Relationship-safe | Avoid ambiguous joins and double counting |
| Trust-visible | Freshness, quality, certification, and warnings should be visible where useful |
| Security-aware | Access rules are part of semantic design |
| Owner-backed | Certified metrics need owners and governance |
| Glossary-aligned | Terms should align with domain/business glossary |
| Tool-neutral | Design semantics before BI/metric-layer implementation |
| Evidence-based | Do not certify or expose semantic objects without evidence |

---

## Semantic Model Standard

Each semantic model must define:

| Field | Required? |
|---|---|
| Semantic model name | Required |
| Consumer/use case | Required |
| Gold input datasets | Required |
| Exposed entities | Required |
| Measures/KPIs | Required where metrics exist |
| Dimensions | Required |
| Relationships | Required where multiple entities exist |
| Grain/aggregation behavior | Required |
| Security/access rule | Required |
| Owner | Required |
| Trust/certification status | Required |
| Freshness/quality display | Required for P1 |
| Semantic testing expectation | Required |
| Status | Required |

Allowed statuses:

```text
Draft | Promoted | Certified | Risk | Blocked | Deprecated
```

---

## Measure Standard

Each measure/KPI must define:

| Field                     | Required?                 |
| ------------------------- | ------------------------- |
| Measure name              | Required                  |
| Business definition       | Required                  |
| Formula source            | Required                  |
| Base Gold dataset         | Required                  |
| Grain                     | Required                  |
| Aggregation behavior      | Required                  |
| Allowed dimensions        | Required                  |
| Freshness/quality display | Required for P1/certified |
| Owner                     | Required                  |
| Status                    | Required                  |

Allowed measure statuses:

```text
Draft | Approved | Certified | Deprecated | Blocked
```

---

## Semantic Evidence Mapping

For every P1 semantic object, capture evidence status.

| Semantic Field               | Evidence Status                                | Allowed Output                    |
| ---------------------------- | ---------------------------------------------- | --------------------------------- |
| Phase 15 handoff             | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk           |
| Semantic scope               | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk           |
| Consumer/use case mapping    | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk           |
| Gold-to-semantic mapping     | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk           |
| Business glossary alignment  | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk           |
| Semantic entity              | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk           |
| Measure/KPI definition       | Confirmed / Conflict / Missing / Waived        | Approved / Draft / Risk / Blocked |
| Dimension/attribute          | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk           |
| Hierarchy                    | Confirmed / Assumed / Missing / Not applicable | Approved / Draft / Risk           |
| Relationship/join behavior   | Confirmed / Assumed / Conflict / Missing       | Approved / Draft / Risk / Blocked |
| Grain/aggregation behavior   | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk           |
| Filter/slicer                | Confirmed / Assumed / Missing / Not applicable | Approved / Draft / Risk           |
| Time intelligence            | Confirmed / Assumed / Missing / Not applicable | Approved / Draft / Risk           |
| Calculation ownership        | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk           |
| Naming/display convention    | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk           |
| Security/access model        | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk / Blocked |
| Certification/trust status   | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk           |
| Freshness/quality display    | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk           |
| Lineage/metadata             | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk           |
| Semantic testing expectation | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk           |
| Contract/quality alignment   | Confirmed / Partial / Conflict / Missing       | Approved / Draft / Risk / Blocked |

---

## HALT — Consumer and Use Case Mapping

Stop if semantic model has no clear consumer or use case.

### Options

A. Business analyst self-service
B. Executive KPI consumption
C. Operational user monitoring
D. Data scientist / ML user
E. AI/data agent consumption
F. Embedded analytics / application
G. Multiple consumers with separate semantic views
H. Keep Draft pending consumer clarification

### Required response

Choose A/B/C/D/E/F/G/H.

---

## HALT — Gold to Semantic Mapping

Stop if semantic object cannot be traced to Gold output.

### Options

A. Map to approved Gold dataset
B. Map to approved Gold aggregate/metric-ready dataset
C. Map to Gold output with risk warning
D. Keep object Draft pending Gold design
E. Route back to `des-gold-layer-design`
F. Remove object from P1 semantic scope

### Required response

Choose A/B/C/D/E/F.

---

## HALT — Business Glossary Alignment

Stop if business term, synonym, or definition is ambiguous.

### Options

A. Use term from Phase 06 conceptual domain model
B. Use term from business question/KPI catalog
C. Use term from data product specification
D. Create preferred term and list synonyms
E. Keep term Draft pending owner approval
F. Route to business owner/domain steward

### Required response

Choose A/B/C/D/E/F.

---

## HALT — Measure and KPI Definition

Stop if a measure lacks approved definition or conflicts with existing KPI logic.

### Options

A. Use approved Phase 03 KPI definition
B. Use Gold metric definition from Phase 11
C. Keep as Draft measure, not certified
D. Route back to KPI definition phase
E. Remove/defer measure
F. Create separate candidate metric with warning

### Required response

Choose A/B/C/D/E/F.

---

## HALT — Aggregation Behavior

Stop if measure aggregation is unclear.

### Options

A. Sum
B. Count
C. Count distinct
D. Average
E. Weighted average
F. Min/max
G. Ratio from aggregated numerator/denominator
H. Non-additive; restrict aggregation
I. Semi-additive over time
J. Custom aggregation

### Required response

Choose A/B/C/D/E/F/G/H/I/J.

---

## HALT — Relationship and Join Behavior

Stop if semantic relationships may cause ambiguity or double counting.

### Required fields

* from entity;
* to entity;
* relationship cardinality;
* join key;
* filter direction;
* active/inactive status;
* ambiguity/double-count risk.

### Options

A. One-to-many relationship
B. One-to-one relationship
C. Many-to-many with bridge table/view
D. Role-playing dimension relationship
E. Inactive relationship used only by explicit measure
F. No relationship; keep separate semantic views
G. Keep Draft/Risk pending model review

### Required response

Choose A/B/C/D/E/F/G.

---

## HALT — Dimension and Hierarchy Approval

Stop if dimensions or hierarchies are unclear.

### Options

A. Use dimensions from Gold specification
B. Use business hierarchy from domain model
C. Create hierarchy for self-service slicing
D. Keep attribute as flat dimension only
E. Defer hierarchy until consumer validation
F. Remove dimension from P1 semantic model

### Required response

Choose A/B/C/D/E/F.

---

## HALT — Time Intelligence

Stop if time behavior is unclear.

### Options

A. Standard calendar date
B. Business calendar/fiscal calendar
C. Event date-based reporting
D. Snapshot/as-of date reporting
E. Rolling window metrics
F. Period-over-period comparison
G. No time intelligence in P1
H. Custom calendar/time behavior

### Required response

Choose A/B/C/D/E/F/G/H.

---

## HALT — Security and Access Model

Stop if semantic access differs by user, role, region, customer, tenant, or sensitivity.

### Options

A. Open internal access
B. Role-based access by consumer group
C. Row-level security
D. Column-level security
E. Object-level security
F. Measure-level restriction
G. Masked sensitive fields
H. Governance/security review required
I. Custom policy

### Required response

Choose one or more options.

---

## HALT — Certification and Trust Status

Stop if trust level is unclear.

### Options

A. Draft
B. Promoted
C. Certified
D. Experimental
E. Deprecated
F. Blocked pending quality/contract/security review

### Recommendation

Only choose Certified when owner, contract, quality, lineage, freshness, and operational expectations are approved.

### Required response

Choose A/B/C/D/E/F.

---

## HALT — Freshness and Quality Display

Stop if consumer-visible freshness or quality status is unclear.

### Options

A. Show last refresh timestamp
B. Show data freshness status
C. Show quality status or score
D. Show warning banner for failed P1/P2 quality rules
E. Show contract compliance status
F. Hide operational status from semantic layer
G. Defer to serving/dashboard layer
H. Custom display expectation

### Required response

Choose one or more options.

---

## HALT — Calculation Ownership

Stop if measure ownership is unclear.

### Options

A. Business metric owner
B. Analytics owner
C. Data product owner
D. Finance/domain steward
E. Data engineering owner
F. Shared ownership
G. Unknown — keep Draft/Risk

### Required response

Choose A/B/C/D/E/F/G.

---

## HALT — Semantic Contract and Quality Alignment

Stop if semantic model exposes metrics/fields not protected by quality or contract expectations.

### Options

A. Expose only contracted/certified fields and measures
B. Expose Draft fields with warning labels
C. Add missing contract/quality expectations before exposure
D. Keep semantic model Draft
E. Remove risky fields/measures from P1

### Required response

Choose A/B/C/D/E.

---

## HALT — Semantic Testing Expectations

Stop if semantic model has no validation expectation.

### Options

A. Measure reconciliation tests
B. Relationship/cardinality tests
C. Security access tests
D. Freshness/quality display tests
E. Naming/metadata completeness checks
F. Consumer acceptance review
G. BI/semantic model smoke tests in implementation phase
H. Defer to Phase 21 CI/CD

### Required response

Choose one or more options.

---

## Completion Criteria

This step is complete when:

* semantic scope and principles are defined;
* semantic model inventory is created;
* Gold datasets map to semantic entities/measures/dimensions;
* measures align with approved KPI/Gold definitions;
* aggregation behavior is documented;
* relationships and join behavior are documented;
* dimensions/hierarchies/time intelligence are documented;
* security/access model is documented;
* owner and certification/trust status are documented;
* freshness/quality/lineage expectations are documented;
* semantic testing expectations are documented;
* evidence mapping is prepared;
* required support work is identified;
* risks and assumptions are explicit;
* draft semantic model specification content is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
