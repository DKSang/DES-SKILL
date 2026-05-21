# Step 02 — Serving Channels and Consumer Experience

## Goal

Define serving channels, consumer experience, access model, freshness/quality visibility, performance expectations, feedback loop, usage monitoring, and support ownership.

## Required Inputs

- Confirmed context from Step 01
- Semantic Model Specification
- Gold Layer Specification
- Data Contract Specification
- Data Quality Specification
- Orchestration and Observability Specification
- Architecture Decision Record
- User answers from HALT points
- Existing BI/API/ML/export/application requirements if available

## Actions

1. Define serving scope and non-scope.
2. Define serving design principles.
3. Create consumer and persona mapping.
4. Create serving channel inventory.
5. Map Gold and semantic outputs to serving channels.
6. Decide serving pattern per output:
   - dashboard/report;
   - self-service BI;
   - semantic/metrics layer;
   - API/application-serving;
   - ML/AI dataset;
   - reverse ETL;
   - export;
   - data sharing;
   - federated query;
   - embedded analytics;
   - AI/data-agent interface.
7. Define channel-specific expectations.
8. Define access control and security model.
9. Define freshness and quality visibility.
10. Define performance and latency expectations.
11. Define caching and materialization expectations.
12. Define feedback loop and issue reporting.
13. Define usage monitoring and adoption signals.
14. Define ownership and support model.
15. Use HALT checkpoints for unresolved decisions.

## Serving Channel Types

| Channel Type | Description |
| --- | --- |
| Dashboard/report | Curated visual consumption for known questions |
| Self-service BI | Analysts explore certified semantic model/datasets |
| Semantic/metrics layer | Centralized business logic and metric definitions |
| API/application-serving | Data served to applications or services |
| ML/AI dataset | Feature, label, inference, or training dataset consumption |
| Reverse ETL | Data pushed back into operational/SaaS tools |
| Export/file delivery | Periodic files or extracts for consumers |
| Data sharing | Controlled sharing to internal/external parties |
| Federated query | Consumers query data across multiple systems |
| Embedded analytics | Data/visuals embedded in application UI |
| AI/data-agent interface | Agent uses semantic metadata, metrics, and governed data |

## Serving Output Standard

Each serving output must define:

| Field | Required? |
| --- | --- |
| Serving output ID | Required |
| Consumer/persona | Required |
| Serving channel | Required |
| Source Gold/Semantic object | Required |
| Business question/use case | Required |
| Access/security policy | Required |
| Freshness/quality visibility | Required |
| Contract expectation | Required where system-facing |
| Performance/latency expectation | Required for P1 |
| Support owner | Required |
| Feedback path | Required |
| Status | Required |

Allowed statuses:

```text
Draft | Approved | Risk | Blocked | Deferred
```

## HALT — Consumer and Persona Approval

Stop if consumer or persona is unclear.

### Decision needed

Approve consumer/persona for `<serving_output>`.

### Options

A. Executive / management
B. Business analyst
C. Data analyst
D. Data scientist / ML user
E. Operational user
F. Application/API consumer
G. External partner/customer
H. AI/data agent
I. Multiple consumers with separate views
J. Unknown — keep Draft

### Required response

Choose A/B/C/D/E/F/G/H/I/J.

## HALT — Serving Channel Decision

Stop if serving channel is unclear.

### Decision needed

Approve serving channel.

### Options

A. Dashboard/report
B. Self-service BI
C. Semantic/metrics layer
D. API/application-serving
E. ML/AI dataset
F. Reverse ETL
G. Export/file delivery
H. Data sharing
I. Federated query
J. Embedded analytics
K. AI/data-agent interface
L. Custom channel

### Required response

Choose one or more options.

## HALT — Access and Security Model

Stop if serving output has unclear access/security.

### Decision needed

Approve access/security policy.

### Options

A. Open internal access
B. Role-based access
C. Row-level security
D. Column-level security
E. Masking/tokenization
F. External sharing approval
G. Tenant/customer isolation
H. Governance/security review required
I. Custom policy

### Required response

Choose one or more options.

## HALT — Freshness and Quality Visibility

Stop if users need trust signals but visibility is unclear.

### Decision needed

What freshness/quality indicators should be visible?

### Options

A. Last refresh time
B. Max event/business date
C. SLA status
D. Quality gate status
E. Certification/trust badge
F. Known limitations warning
G. Data issue banner
H. Hidden from consumers, visible only to data team
I. Custom visibility

### Required response

Choose one or more options.

## HALT — Performance and Latency Expectation

Stop if serving latency or concurrency expectation is unclear.

### Decision needed

Approve performance expectation.

### Options

A. Interactive dashboard latency
B. Analyst query latency best-effort
C. API low-latency response requirement
D. Batch export delivery window
E. ML feature availability window
F. Reverse ETL sync window
G. No strict latency in MVP
H. Custom expectation

### Required response

Choose A/B/C/D/E/F/G/H and specify target if known.

## HALT — API/Application Contract

Stop if serving output is API/application-facing and contract behavior is unclear.

### Decision needed

Approve API/application-serving expectation.

### Required fields

* consumer system;
* output shape;
* freshness;
* availability;
* schema/versioning;
* error behavior;
* access/auth;
* rate limit/performance expectation.

### Options

A. Standard data contract is sufficient
B. API/application contract required
C. Read model required before API design
D. Keep Draft pending application requirements
E. Defer API/application serving

### Required response

Choose A/B/C/D/E.

## HALT — ML/AI Serving Expectation

Stop if serving output is used for ML/AI but feature/label/inference expectations are unclear.

### Decision needed

Approve ML/AI serving expectation.

### Options

A. Training dataset
B. Feature dataset
C. Label dataset
D. Batch inference input/output
E. Online inference feature serving
F. AI/data-agent semantic access
G. Draft pending ML requirements
H. Defer ML/AI serving

### Required response

Choose one or more options.

## HALT — Reverse ETL Guardrails

Stop if data is pushed back into operational tools.

### Why this matters

Reverse ETL can create feedback loops where served data changes operational systems, which then generate new data.

### Decision needed

Approve reverse ETL guardrails.

### Options

A. Monitoring and guardrails required before activation
B. Manual approval before writeback
C. Writeback limited to selected fields/entities
D. Dry-run mode before production
E. Rollback/disable switch required
F. No reverse ETL in MVP
G. Custom guardrails

### Required response

Choose one or more options.

## HALT — Data Sharing or Federation Risk

Stop if data sharing or federated query is planned and risk is unclear.

### Decision needed

Approve sharing/federation policy.

### Options

A. Data sharing with controlled access
B. Federated query for exploration only
C. Federated query allowed for production use
D. Avoid querying live production source systems
E. Source impact review required
F. External sharing requires governance approval
G. Custom policy

### Required response

Choose one or more options.

## HALT — Feedback and Support Owner

Stop if users have no way to report issues or request improvements.

### Decision needed

Approve feedback/support process.

### Options

A. Data product owner handles feedback
B. Data engineering team handles support
C. Business steward triages issues
D. Ticketing process required
E. Feedback form/channel required
F. Office hours/review cadence required
G. Unknown — keep Draft/Risk

### Required response

Choose one or more options.

## Completion Criteria

This step is complete when:

* serving scope and principles are defined;
* consumer/persona mapping is complete for P1;
* serving channel inventory is created;
* Gold/Semantic outputs map to serving channels;
* access, freshness, quality, performance, feedback, usage monitoring, and ownership are documented;
* channel-specific risks are documented;
* draft serving layer specification content is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
