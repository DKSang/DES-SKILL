# Step 02 - Requirements and KPI Definition

## Goal

Convert approved business questions into measurable requirements, KPI definitions, acceptance criteria, and constraints.

## Required Inputs

- Confirmed context from Step 01
- Business Discovery Brief
- Business Question Catalog
- User answers from HALT points
- Existing metric or KPI notes, if any

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
6. Use HALT checkpoints for unresolved formulas, grain, owner, SLA, or conflicts.
7. Prepare draft content for the Requirements and KPI Catalog.

## Hints

- A requirement should be testable later.
- A KPI should not exist only because it is easy to calculate.
- A KPI must answer a business question or evaluate delivery success.
- Separate product/business KPIs from engineering/platform KPIs.
- Candidate metric is allowed; approved KPI requires owner and definition.
- Grain must be expressed as "one measurement per ___".
- Freshness must include time expectation, not just "daily" or "near real-time".
- Acceptance criteria should be evidence-based.
- If the same metric name has multiple meanings, record a conflict instead of choosing one silently.
- Do not design tables, sources, pipelines, contracts, dashboards, semantic models, APIs, ML models, or code.

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

## HALT - Metric Conflict

Stop if the same metric or requirement has conflicting definitions.

### Trigger examples

- Two stakeholders define "active user" differently.
- "Revenue" may mean gross, net, recognized, or collected.
- "Customer" may mean account, user, payer, or organization.
- "Freshness" may mean source event time or processing completion time.

### Decision needed

How should this conflict be handled?

### Options

A. Choose one canonical definition  
B. Keep multiple definitions with namespacing  
C. Escalate to owner for approval  
D. Defer metric until resolved

### Required response

Choose A/B/C/D.

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

## Completion Criteria

This step is complete when:

- P1/P2 questions are mapped to requirements;
- P1 requirements are measurable or marked Draft;
- KPIs have business meaning, formula, grain, owner, and status;
- freshness/SLA expectations are explicit or marked unresolved;
- conflicts are documented;
- acceptance criteria are defined for P1 requirements;
- draft catalog content is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
