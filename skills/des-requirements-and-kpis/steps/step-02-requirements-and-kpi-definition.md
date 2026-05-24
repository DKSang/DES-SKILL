# Step 02 - Requirements and KPI Definition

## Goal

Convert approved business questions into measurable requirements, KPI definitions, acceptance criteria, constraints, and evidence-mapped decisions.

This step prepares the Requirements and KPI Catalog and identifies which requirement/KPI decisions require evidence, support work, waiver, or accepted risk.

---

## Required Inputs

- Confirmed context from Step 01
- Business Discovery Brief
- Business Question Catalog
- Phase 02 to Phase 03 handoff, if available
- Phase 02 do-not-assume list
- User answers from HALT points
- Existing metric or KPI notes, if any

---

## Actions

1. Convert each P1/P2 business question into functional requirements.
2. Identify non-functional requirements:
   - freshness;
   - reliability;
   - availability;
   - latency;
   - quality;
   - security/privacy;
   - cost/performance;
   - usability/discoverability;
   - auditability/lineage;
   - maintainability.
3. Identify candidate KPIs and metrics.
4. For each KPI/metric, define:
   - business meaning;
   - formula;
   - grain;
   - owner;
   - consumer;
   - source dependency, if known;
   - freshness expectation;
   - acceptance threshold;
   - approval status.
5. Detect conflicts between metrics or stakeholder definitions.
6. Map each P1/P2 requirement and KPI to evidence.
7. Mark unsupported formulas, grains, owners, SLAs, and thresholds as `Candidate`, `Draft`, `Open`, `Conflict`, or `Risk`.
8. Identify required Phase 03 support work.
9. Use HALT checkpoints for unresolved formulas, grain, owner, SLA, acceptance criteria, or conflicts.
10. Prepare draft content for the Requirements and KPI Catalog.
11. Prepare content for the Phase 03 Support Plan.

---

## Hints

- A requirement should be testable later.
- A KPI should not exist only because it is easy to calculate.
- A KPI must answer a business question or evaluate delivery success.
- Separate product/business KPIs from engineering/platform KPIs.
- Candidate metric is allowed; approved KPI requires owner and definition.
- Grain must be expressed as “one measurement per ___”.
- Freshness must include time expectation, not just “daily” or “near real-time”.
- Acceptance criteria should be evidence-based.
- If the same metric name has multiple meanings, record a conflict instead of choosing one silently.
- Do not design tables, sources, pipelines, contracts, dashboards, semantic models, APIs, ML models, or code.
- Do not treat source hints from Phase 02 as approved source dependencies.

---

## Requirement Types

Classify each requirement as:

| Type | Meaning |
| --- | --- |
| Functional | What the data system must provide or support |
| Freshness/SLA | How current the data must be |
| Quality | Correctness, completeness, uniqueness, validity, consistency |
| Reliability | Pipeline success, retry, durability, failure behavior |
| Security/Privacy | Access, masking, compliance, sensitive fields |
| Performance | Runtime, query latency, throughput |
| Cost | Budget, capacity, usage limits |
| Usability | Discoverability, documentation, self-service |
| Governance | Ownership, lineage, approval, auditability |
| Maintainability | Testing, deployment, extensibility |

---

## KPI Definition Standard

Each KPI or metric must have:

| Field | Required? |
| --- | --- |
| Name | Required |
| Business meaning | Required |
| Linked business question | Required |
| Consumer | Required |
| Formula | Required for Approved |
| Grain | Required for Approved |
| Owner | Required for Approved |
| Freshness expectation | Required for P1 |
| Acceptance threshold | Required for P1 |
| Status | Required |

Allowed statuses:

```text
Candidate | Draft | Approved | Conflicting | Deferred
```

---

## Requirement and KPI Evidence Mapping

For every P1/P2 requirement or KPI, capture the evidence status.

| Field                     | Evidence Status                        | Allowed Output                                    |
| ------------------------- | -------------------------------------- | ------------------------------------------------- |
| Business question mapping | Confirmed / Assumed / Missing / Waived | Fact / Assumption / Open Question / Accepted Risk |
| Functional requirement    | Confirmed / Assumed / Missing / Waived | Approved / Draft / Open / Accepted Risk           |
| KPI formula               | Confirmed / Assumed / Missing / Waived | Approved / Draft / Candidate / Conflict           |
| Metric grain              | Confirmed / Assumed / Missing / Waived | Approved / Draft / Open / Risk                    |
| Metric owner              | Confirmed / Assumed / Missing / Waived | Approved / Draft / Unknown / Risk                 |
| Freshness/SLA             | Confirmed / Assumed / Missing / Waived | Approved / Draft / Open / Risk                    |
| Acceptance criteria       | Confirmed / Assumed / Missing / Waived | Approved / Draft / Open / Risk                    |
| Quality expectation       | Confirmed / Assumed / Missing / Waived | Approved / Draft / Open / Risk                    |

---

## Phase 03 Required Support Work

Based on the requirements and KPIs above, prepare a support plan using these categories:

| Support Work                                        | Required When                    | Output           |
| --------------------------------------------------- | -------------------------------- | ---------------- |
| Phase 02 Handoff Review                             | Always                           | Evidence pack    |
| Business Question to Requirement Traceability Check | P1/P2 questions exist            | Evidence pack    |
| Functional Requirement Testability Check            | P1 requirements exist            | Evidence pack    |
| Non-Functional Requirement Measurability Check      | NFRs exist                       | Evidence pack    |
| KPI Formula Check                                   | KPIs or candidate metrics exist  | Evidence pack    |
| Metric Grain Check                                  | KPIs or candidate metrics exist  | Evidence pack    |
| Metric Owner Check                                  | Approved KPIs exist              | Evidence pack    |
| Acceptance Criteria Check                           | P1 requirements exist            | Evidence pack    |
| Freshness/SLA Check                                 | P1 freshness expectations exist  | Evidence pack    |
| Metric Conflict Check                               | Metric names/definitions overlap | Evidence pack    |
| Done Gate                                           | Always before marking Done       | Done Gate result |
| Handoff to Phase 04                                 | Always before Phase 04           | Handoff file     |

---

## HALT - KPI Formula Required

Stop if a P1 KPI has no clear formula.

### Why this matters

Downstream Gold tables, semantic models, dashboards, data contracts, and tests may encode this formula. Guessing creates inconsistent metrics.

### Decision needed

Approve or revise the formula for `<metric_name>`.

### Options

A. Approve current formula
B. Revise formula
C. Keep as Candidate, not Approved
D. Defer KPI from MVP

### Required response

Choose A/B/C/D and provide the approved formula if revising.

---

## HALT - Metric Grain Required

Stop if a P1 KPI has unclear grain.

### Why this matters

Metric grain affects source needs, domain modeling, Gold table design, semantic modeling, and data quality tests.

### Decision needed

Define the metric grain.

### Options

A. One measurement per event
B. One measurement per entity
C. One measurement per entity per time period
D. One measurement per consumer segment
E. Custom grain

### Required response

Choose A/B/C/D/E and describe the grain.

---

## HALT - Metric Owner Required

Stop if a P1 KPI has no owner.

### Why this matters

A metric without an owner cannot be approved, changed safely, or used as a contract for downstream consumers.

### Decision needed

Who owns this KPI definition?

### Options

A. Business owner
B. Product owner
C. Data/analytics owner
D. Engineering/platform owner
E. Shared ownership
F. Unknown - keep as Draft

### Required response

Choose A/B/C/D/E/F and provide owner name/team if known.

---

## HALT - Freshness and SLA Approval

Stop if a P1 requirement needs freshness but the expectation is vague.

### Why this matters

Freshness affects ingestion pattern, orchestration, cost, monitoring, and release readiness.

### Decision needed

Approve freshness/SLA expectation.

### Options

A. Real-time / streaming
B. Sub-hourly
C. Hourly
D. Daily by a specified time
E. Weekly/monthly batch
F. On-demand/manual
G. Unknown - keep as Draft

### Required response

Choose A/B/C/D/E/F/G and specify timezone/time if relevant.

---

## HALT - Metric Conflict

Stop if the same metric or requirement has conflicting definitions.

### Trigger examples

* Two stakeholders define “active user” differently.
* “Revenue” may mean gross, net, recognized, or collected.
* “Customer” may mean account, user, payer, or organization.
* “Freshness” may mean source event time or processing completion time.

### Decision needed

How should this conflict be handled?

### Options

A. Choose one canonical definition
B. Keep multiple definitions with namespacing
C. Escalate to owner for approval
D. Defer metric until resolved

### Required response

Choose A/B/C/D.

---

## HALT - Acceptance Criteria Required

Stop if a P1 requirement has no acceptance criteria.

### Decision needed

What evidence proves this requirement is satisfied?

### Options

A. Data output exists and matches expected schema
B. Metric value can be computed and validated
C. Freshness check passes
D. Data quality checks pass
E. Consumer review/approval completed
F. CI/CD or automated test passes
G. Custom evidence

### Required response

Choose one or more evidence types and define the threshold.

---

## HALT - Phase 02 Question Drift

Stop if Phase 03 reveals that Phase 02 questions are too vague, wrongly prioritized, or out of scope.

### Options

A. Continue and mark affected requirements/KPIs as Draft
B. Route back to `des-business-questions` to revise Phase 02
C. Run `des-correct-course`
D. Stop workflow

### Required response

Choose A/B/C/D.

---

## Completion Criteria

This step is complete when:

* P1/P2 questions are mapped to requirements;
* P1 requirements are measurable or marked Draft;
* KPIs have business meaning, formula, grain, owner, and status;
* freshness/SLA expectations are explicit or marked unresolved;
* conflicts are documented;
* acceptance criteria are defined for P1 requirements;
* evidence mapping is prepared;
* required support work is identified;
* draft catalog content is ready.

## Next Step

After completion, load only:

```text
steps/step-02-requirements-and-kpi-definition.md
```
