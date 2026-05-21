# Step 02 — Semantic Concepts, Measures, and Relationships

## Goal

Define semantic models, business entities, measures, dimensions, hierarchies, relationships, aggregation behavior, filters, time intelligence, naming, security, certification, freshness display, lineage, and testing expectations.

## Required Inputs

- Confirmed context from Step 01
- Gold Layer Specification
- Requirements and KPI Catalog
- Data Contract Specification
- Data Quality Specification
- Conceptual Domain Model
- User answers from HALT points
- Existing BI/semantic/metrics standards if available

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
22. Use HALT checkpoints for unresolved decisions.

## Hints

- Measures should be owned and defined, not duplicated in dashboards.
- Dimensions should be business-friendly and stable.
- Hierarchies should match how consumers actually analyze data.
- Time intelligence must use approved business calendar/date logic.
- Relationships must respect grain and cardinality.
- Many-to-many or ambiguous relationships should be avoided or explicitly controlled.
- Row-level security belongs in semantic design if business access varies by user/role.
- Certified semantic models need stronger quality, ownership, lineage, and contract support.
- Draft metrics should be visibly marked and not mixed with certified KPIs.

## Semantic Model Standard

Each semantic model must define:

| Field | Required? |
| --- | --- |
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
| Status | Required |

Allowed statuses:

```text
Draft | Promoted | Certified | Risk | Blocked | Deprecated
```

## Measure Standard

Each measure/KPI must define:

| Field                | Required? |
| -------------------- | --------- |
| Measure name         | Required  |
| Business definition  | Required  |
| Formula source       | Required  |
| Base Gold dataset    | Required  |
| Grain                | Required  |
| Aggregation behavior | Required  |
| Allowed dimensions   | Required  |
| Owner                | Required  |
| Status               | Required  |

Allowed measure statuses:

```text
Draft | Approved | Certified | Deprecated | Blocked
```

## HALT — Consumer and Use Case Mapping

Stop if semantic model has no clear consumer or use case.

### Decision needed

Approve consumer/use-case mapping.

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

## HALT — Measure and KPI Definition

Stop if a measure lacks approved definition or conflicts with existing KPI logic.

### Decision needed

Approve measure definition.

### Options

A. Use approved Phase 3 KPI definition
B. Use Gold metric definition from Phase 11
C. Keep as Draft measure, not certified
D. Route back to KPI definition phase
E. Remove/defer measure
F. Create separate candidate metric with warning

### Required response

Choose A/B/C/D/E/F.

## HALT — Aggregation Behavior

Stop if measure aggregation is unclear.

### Decision needed

Approve aggregation behavior for `<measure>`.

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

## HALT — Relationship and Join Behavior

Stop if semantic relationships may cause ambiguity or double counting.

### Decision needed

Approve relationship between semantic entities.

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

## HALT — Dimension and Hierarchy Approval

Stop if dimensions or hierarchies are unclear.

### Decision needed

Approve dimensions/hierarchies.

### Options

A. Use dimensions from Gold specification
B. Use business hierarchy from domain model
C. Create hierarchy for self-service slicing
D. Keep attribute as flat dimension only
E. Defer hierarchy until consumer validation
F. Remove dimension from P1 semantic model

### Required response

Choose A/B/C/D/E/F.

## HALT — Time Intelligence

Stop if time behavior is unclear.

### Decision needed

Approve time intelligence behavior.

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

## HALT — Security and Access Model

Stop if semantic access differs by user, role, region, customer, tenant, or sensitivity.

### Decision needed

Approve semantic security model.

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

## HALT — Certification and Trust Status

Stop if trust level is unclear.

### Decision needed

Approve semantic model trust status.

### Options

A. Draft
B. Promoted
C. Certified
D. Experimental
E. Deprecated
F. Blocked pending quality/contract/security review

### Recommendation

Only choose Certified when owner, contract, quality, lineage, and freshness expectations are approved.

### Required response

Choose A/B/C/D/E/F.

## HALT — Calculation Ownership

Stop if measure ownership is unclear.

### Decision needed

Who owns calculation logic?

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

## HALT — Semantic Contract and Quality Alignment

Stop if semantic model exposes metrics/fields not protected by quality or contract expectations.

### Decision needed

How should this alignment be handled?

### Options

A. Expose only contracted/certified fields and measures
B. Expose Draft fields with warning labels
C. Add missing contract/quality expectations before exposure
D. Keep semantic model Draft
E. Remove risky fields/measures from P1

### Required response

Choose A/B/C/D/E.

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
* draft semantic model specification content is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
