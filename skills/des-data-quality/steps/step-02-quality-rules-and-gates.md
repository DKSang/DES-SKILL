# Step 02 — Quality Rules and Gates

## Goal

Define data quality dimensions, rules, thresholds, severity, quality gates, failure handling, ownership, evidence, and reporting expectations across Bronze, Silver, Gold, contracts, and transformations.

## Required Inputs

- Confirmed context from Step 01
- Data Contract Specification
- Transformation Specification
- Bronze Layer Specification
- Silver Layer Specification
- Gold Layer Specification
- Requirements and KPI Catalog
- User answers from HALT points
- Existing quality reports, profiling results, test notes, or monitoring requirements if available

## Actions

1. Define quality scope and non-scope.
2. Define quality design principles.
3. Define quality dimensions.
4. Create quality rule inventory.
5. Map rules to datasets, layers, contracts, and transformations.
6. Define layer-specific quality rules:
   - Bronze;
   - Silver;
   - Gold;
   - Contracted/serving outputs.
7. Define freshness rules.
8. Define completeness and volume rules.
9. Define uniqueness and grain rules.
10. Define validity and domain rules.
11. Define referential integrity rules.
12. Define consistency and reconciliation rules.
13. Define accuracy and business reasonableness rules.
14. Define schema and compatibility rules.
15. Define null and missing value rules.
16. Define anomaly and threshold rules.
17. Define severity classification.
18. Define failure handling and quality gates.
19. Define ownership and stewardship.
20. Define evidence and reporting expectations.
21. Use HALT checkpoints for unresolved decisions.

## Hints

- Quality rules should be traceable to contracts, transformations, business questions, KPIs, or layer specs.
- Avoid generic rules that nobody uses.
- Distinguish P1 Blocking, P2 Warning, and P3 Info.
- A Bronze rule may check load success and metadata, not business correctness.
- A Silver rule may check conformance, identity, mapping, nulls, uniqueness, and valid domains.
- A Gold rule may check metric correctness, freshness, reconciliation, and consumer readiness.
- Contract rules should be strong candidates for release gates.
- Thresholds should be approved by owner or based on profiling evidence.
- When thresholds are unknown, mark as Draft and require profiling.
- Record what happens when a rule fails.

## Quality Dimensions

Use these quality dimensions where relevant:

| Dimension | Meaning |
| --- | --- |
| Freshness | Data is available within expected time/SLA |
| Completeness | Expected data volume/coverage is present |
| Validity | Values conform to allowed types, ranges, domains, formats |
| Uniqueness | Records are unique at declared grain |
| Consistency | Data agrees across datasets, sources, or time |
| Accuracy | Data matches trusted reference or business expectation |
| Integrity | Relationships and references are valid |
| Timeliness | Data arrives and processes within required windows |
| Reliability | Pipeline/rule produces stable expected results |
| Schema compatibility | Structure matches expected contract/schema |
| Reasonableness | Values are plausible and not anomalous |
| Lineage completeness | Required metadata and traceability exist |

## Quality Rule Standard

Each quality rule must define:

| Field | Required? |
| --- | --- |
| Rule ID | Required |
| Dataset/output | Required |
| Layer | Required |
| Quality dimension | Required |
| Rule description | Required |
| Threshold/condition | Required or marked Draft |
| Severity | Required |
| Failure handling | Required |
| Owner/steward | Required or marked Draft |
| Evidence | Required |
| Related contract/transformation | Required where applicable |
| Status | Required |

Allowed statuses:

```text
Draft | Approved | Risk | Blocked | Deferred
```

## Severity Classification

Use this severity model:

| Severity       | Meaning                                                  |
| -------------- | -------------------------------------------------------- |
| P1 Blocking    | Failure blocks publish/release or downstream consumption |
| P2 Warning     | Failure alerts owner but does not block by default       |
| P3 Info        | Recorded for visibility and trend monitoring             |
| Draft          | Severity not yet approved                                |
| Not Applicable | Rule does not apply to this dataset/output               |

## HALT - Quality Rule Required Outputs

Stop if P1 datasets or contracted outputs lack quality rules.

### Decision needed

Which outputs must have quality rules?

### Options

A. P1 contracted Gold outputs
B. P1 Gold outputs
C. P1 Silver datasets feeding Gold
D. P1 Bronze datasets feeding Silver
E. All P1 transformation outputs
F. Custom selection

### Required response

Choose one or more options.

## HALT - Quality Threshold Approval

Stop if threshold or pass/fail condition is unclear.

### Decision needed

Approve threshold for `<quality_rule>`.

### Options

A. Use strict 100% threshold
B. Use approved tolerance from contract/KPI owner
C. Use profiling baseline and define warning/blocking thresholds
D. Use trend/anomaly detection instead of fixed threshold
E. Mark threshold Draft pending profiling
F. Remove or defer rule

### Required response

Choose A/B/C/D/E/F and specify threshold if known.

## HALT - Severity Classification

Stop if severity is unclear.

### Decision needed

Approve severity for `<quality_rule>`.

### Options

A. P1 Blocking
B. P2 Warning
C. P3 Info
D. Draft pending owner approval
E. Not applicable

### Required response

Choose A/B/C/D/E.

## HALT - Blocking vs Warning Behavior

Stop if failure behavior is unclear.

### Decision needed

What happens when `<quality_rule>` fails?

### Options

A. Block publish/release
B. Fail transformation or pipeline stage
C. Quarantine invalid records and continue
D. Publish with warning flag
E. Alert owner only
F. Create incident/ticket
G. Roll back to previous successful output
H. Manual approval required to continue
I. Custom behavior

### Required response

Choose one or more options.

## HALT - Freshness SLA Quality Rule

Stop if freshness rule is needed but SLA is unclear.

### Decision needed

Approve freshness quality rule.

### Required fields

* dataset/output;
* expected availability time;
* timezone;
* allowed delay;
* severity;
* evidence source;
* owner.

### Options

A. Use freshness SLA from contract
B. Use freshness SLA from data product specification
C. Use freshness SLA from Gold specification
D. Best-effort, warning only
E. Draft pending owner approval

### Required response

Choose A/B/C/D/E.

## HALT - Metric Reconciliation Tolerance

Stop if metric output needs reconciliation but tolerance is unclear.

### Decision needed

Approve reconciliation tolerance.

### Options

A. Exact match required
B. Percentage tolerance
C. Absolute value tolerance
D. Partition-level reconciliation
E. Trend/anomaly-based reconciliation
F. Draft pending profiling/owner approval
G. Not required

### Required response

Choose A/B/C/D/E/F/G and specify tolerance if known.

## HALT - Quality Owner Required

Stop if a P1 quality rule has no owner/steward.

### Why this matters

A failed quality rule without an owner becomes noise.

### Decision needed

Who owns this quality rule?

### Options

A. Data engineering owner
B. Data product owner
C. Business data steward
D. Source system owner
E. Consumer representative
F. Shared ownership
G. Unknown — keep rule Draft/Risk

### Required response

Choose A/B/C/D/E/F/G.

## HALT - Evidence and Reporting Expectation

Stop if rule evidence or reporting is unclear.

### Decision needed

What evidence should be recorded?

### Options

A. Pass/fail status only
B. Pass/fail plus checked row count
C. Pass/fail plus failed record sample/count
D. Quality score/trend over time
E. Rule result tied to pipeline run ID
F. Rule result tied to contract version
G. Rule result visible in quality dashboard/report later
H. Custom evidence

### Required response

Choose one or more options.

## HALT - Consumer Acceptance Quality

Stop if consumer acceptance depends on quality but acceptance criteria are unclear.

### Decision needed

What consumer acceptance quality criteria apply?

### Options

A. Consumer signs off after sample review
B. Consumer validates metric values against known report/system
C. Consumer validates dashboard/API/ML output later
D. Acceptance is based only on automated quality rules
E. Acceptance criteria unknown — keep Draft
F. Not applicable

### Required response

Choose A/B/C/D/E/F.

## Completion Criteria

This step is complete when:

* quality scope and principles are defined;
* quality dimensions are selected;
* quality rule inventory is created;
* P1 contracted outputs have rules;
* Bronze/Silver/Gold quality boundaries are defined;
* thresholds, severity, failure handling, owner, evidence, and status are documented;
* contract and transformation alignment are documented;
* risks and assumptions are explicit;
* draft quality specification content is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
