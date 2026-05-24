# Step 02 — Quality Rules, Gates, and Evidence

## Goal

Define data quality dimensions, rules, thresholds, severity, quality gates, failure handling, ownership, evidence, reporting, monitoring expectations, CI/CD gate candidates, and supporting evidence across Bronze, Silver, Gold, contracts, and transformations.

This step prepares the Data Quality Specification and identifies which quality decisions require evidence, support work, waiver, or accepted risk.

---

## Required Inputs

- Confirmed context from Step 01
- Phase 13 to Phase 14 handoff, if available
- Phase 13 evidence pack, if available
- Data Contract Specification
- Transformation Specification
- Bronze Layer Specification
- Silver Layer Specification
- Gold Layer Specification
- Requirements and KPI Catalog
- User answers from HALT points
- Existing quality reports, profiling results, test notes, or monitoring requirements if available

---

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
   - contracted/serving outputs.
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
21. Define monitoring and observability expectations for Phase 15.
22. Define release and CI/CD gate candidates for Phase 21.
23. Map each critical quality decision to evidence.
24. Mark unsupported quality claims as `Draft`, `Risk`, `Blocked`, `Deferred`, `Unknown`, or `Waived with reason`.
25. Identify required Phase 14 support work.
26. Use HALT checkpoints for unresolved decisions.
27. Prepare draft Data Quality Specification content.
28. Prepare content for the Phase 14 Support Plan.

---

## Quality Design Principles

| Principle | Meaning |
|---|---|
| Risk-based | Focus rules on important failures, not rule spam |
| Contract-aligned | Contract clauses become quality rules where applicable |
| Transformation-aware | Transformation validation expectations feed DQ rules |
| Layer-aware | Bronze, Silver, and Gold quality have different purposes |
| Severity-explicit | Every rule needs P1/P2/P3/Draft/NA severity |
| Actionable | Every failure needs handling and owner |
| Evidence-producing | Rule results should produce audit/debug evidence |
| Monitoring-ready | Rules should become observability signals where useful |
| Gate-ready | Critical rules should become release/CI/CD gates later |
| No implementation here | Design rules, do not write test code |

---

## Quality Rule Standard

Each quality rule must define:

| Field | Required? |
|---|---|
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
| Monitoring expectation | Required for P1/P2 |
| CI/CD or release gate candidate | Required for P1 |
| Status | Required |

Allowed statuses:

```text
Draft | Approved | Risk | Blocked | Deferred
```

---

## Quality Evidence Mapping

For every P1 quality rule, capture evidence status.

| Quality Field            | Evidence Status                                | Allowed Output                    |
| ------------------------ | ---------------------------------------------- | --------------------------------- |
| Scope                    | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk           |
| Dimension                | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk           |
| Rule inventory           | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk           |
| Dataset-to-rule mapping  | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk           |
| Layer-specific rule      | Confirmed / Partial / Missing / Not applicable | Approved / Draft / Risk           |
| Contract alignment       | Confirmed / Partial / Conflict / Missing       | Approved / Draft / Risk / Blocked |
| Transformation alignment | Confirmed / Partial / Conflict / Missing       | Approved / Draft / Risk / Blocked |
| Threshold/condition      | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk           |
| Severity                 | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk           |
| Failure handling/gate    | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk           |
| Owner/steward            | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk / Blocked |
| Evidence/reporting       | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk           |
| Monitoring expectation   | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk           |
| CI/CD gate candidate     | Confirmed / Assumed / Missing / Not applicable | Approved / Draft / Risk           |

---

## HALT - Quality Rule Required Outputs

Stop if P1 datasets or contracted outputs lack quality rules.

### Options

A. P1 contracted Gold outputs
B. P1 Gold outputs
C. P1 Silver datasets feeding Gold
D. P1 Bronze datasets feeding Silver
E. All P1 transformation outputs
F. Custom selection

### Required response

Choose one or more options.

---

## HALT - Quality Threshold Approval

Stop if threshold or pass/fail condition is unclear.

### Options

A. Use strict 100% threshold
B. Use approved tolerance from contract/KPI owner
C. Use profiling baseline and define warning/blocking thresholds
D. Use trend/anomaly detection instead of fixed threshold
E. Mark threshold Draft pending profiling
F. Remove or defer rule

### Required response

Choose A/B/C/D/E/F and specify threshold if known.

---

## HALT - Severity Classification

Stop if severity is unclear.

### Options

A. P1 Blocking
B. P2 Warning
C. P3 Info
D. Draft pending owner approval
E. Not applicable

### Required response

Choose A/B/C/D/E.

---

## HALT - Blocking vs Warning Behavior

Stop if failure behavior is unclear.

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

---

## HALT - Freshness SLA Quality Rule

Stop if freshness rule is needed but SLA is unclear.

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

---

## HALT - Completeness and Volume Rule

Stop if completeness/volume expectation is unclear.

### Options

A. Row/file/event count must match upstream control total
B. Minimum completeness percentage
C. Expected volume range from profiling baseline
D. No strict volume guarantee; trend warning only
E. Consumer acceptance required for partial publish
F. Draft pending profiling
G. Not applicable

### Required response

Choose A/B/C/D/E/F/G.

---

## HALT - Uniqueness and Grain Rule

Stop if uniqueness at grain is unclear.

### Options

A. Unique by declared primary key
B. Unique by natural/composite grain key
C. Unique by contract grain
D. Duplicate allowed but flagged
E. Duplicate handling belongs to transformation design
F. Draft pending grain clarification
G. Not applicable

### Required response

Choose A/B/C/D/E/F/G.

---

## HALT - Referential Integrity Rule

Stop if joins/relationships exist but referential integrity expectations are unclear.

### Options

A. Required match; missing reference blocks output
B. Required match; missing reference quarantines records
C. Optional match; missing reference allowed and flagged
D. RI warning only
E. Not applicable
F. Draft pending join relationship clarification

### Required response

Choose A/B/C/D/E/F.

---

## HALT - Metric Reconciliation Tolerance

Stop if metric output needs reconciliation but tolerance is unclear.

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

---

## HALT - Schema Compatibility Rule

Stop if schema compatibility behavior is unclear.

### Options

A. Enforce contract schema exactly
B. Allow additive optional fields
C. Block breaking changes: remove/rename/type change
D. Warn on non-breaking schema drift
E. Route schema drift to contract versioning process
F. Draft pending contract clarification

### Required response

Choose one or more options.

---

## HALT - Anomaly and Threshold Rule

Stop if anomaly detection is needed but threshold logic is unclear.

### Options

A. Static threshold
B. Rolling baseline
C. Seasonal baseline
D. Statistical anomaly detection
E. Business calendar/event-aware threshold
F. Draft pending profiling/history
G. Not applicable

### Required response

Choose A/B/C/D/E/F/G.

---

## HALT - Quality Owner Required

Stop if a P1 quality rule has no owner/steward.

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

---

## HALT - Evidence and Reporting Expectation

Stop if rule evidence or reporting is unclear.

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

---

## HALT - Consumer Acceptance Quality

Stop if consumer acceptance depends on quality but criteria are unclear.

### Options

A. Consumer signs off after sample review
B. Consumer validates metric values against known report/system
C. Consumer validates dashboard/API/ML output later
D. Acceptance is based only on automated quality rules
E. Acceptance criteria unknown — keep Draft
F. Not applicable

### Required response

Choose A/B/C/D/E/F.

---

## HALT - Monitoring and Observability Expectation

Stop if a P1/P2 quality rule should become an operational signal but monitoring behavior is unclear.

### Options

A. Emit rule result as pipeline metric
B. Emit failed count and failure rate
C. Emit freshness/status signal
D. Emit contract compliance signal
E. Alert on P1 only
F. Alert on P1 and repeated P2 warnings
G. Dashboard/report only
H. Defer to Phase 15

### Required response

Choose one or more options.

---

## HALT - CI/CD or Release Gate Candidate

Stop if a rule may block release but gate behavior is unclear.

### Options

A. Candidate for CI/CD schema gate
B. Candidate for contract validation gate
C. Candidate for transformation unit/integration test
D. Candidate for deployment/release readiness gate
E. Candidate for production runtime gate only
F. Not a CI/CD gate
G. Defer to Phase 21

### Required response

Choose one or more options.

---

## Completion Criteria

This step is complete when:

* quality scope and principles are defined;
* quality dimensions are selected;
* quality rule inventory is created;
* P1 contracted outputs have rules;
* Bronze/Silver/Gold quality boundaries are defined;
* thresholds, severity, failure handling, owner, evidence, monitoring expectation, gate candidate, and status are documented;
* contract and transformation alignment are documented;
* evidence mapping is prepared;
* required support work is identified;
* risks and assumptions are explicit;
* draft quality specification content is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
