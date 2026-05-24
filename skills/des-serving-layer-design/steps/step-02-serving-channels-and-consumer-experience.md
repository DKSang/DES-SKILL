# Step 02 — Serving Channels, Consumer Experience, and Evidence

## Goal

Define serving channels, consumer experience, Gold/Semantic-to-serving mapping, access model, freshness/quality visibility, performance expectations, caching/materialization expectations, feedback loop, usage monitoring, support ownership, and supporting evidence.

This step prepares the Serving Layer Specification and identifies which serving decisions require evidence, support work, waiver, or accepted risk.

---

## Required Inputs

- Confirmed context from Step 01
- Phase 16 to Phase 17 handoff, if available
- Phase 16 evidence pack, if available
- Semantic Model Specification
- Gold Layer Specification
- Data Contract Specification
- Data Quality Specification
- Orchestration and Observability Specification
- Architecture Decision Record
- User answers from HALT points
- Existing BI/API/ML/export/application requirements if available

---

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
   - export/file delivery;
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
15. Map each critical serving decision to evidence.
16. Mark unsupported serving claims as `Draft`, `Risk`, `Blocked`, `Deferred`, `Unknown`, or `Waived with reason`.
17. Identify required Phase 17 support work.
18. Use HALT checkpoints for unresolved decisions.
19. Prepare draft Serving Layer Specification content.
20. Prepare content for the Phase 17 Support Plan.

---

## Serving Design Principles

| Principle | Meaning |
|---|---|
| Consumer-first | Serving design starts from consumer job-to-be-done |
| Channel-aware | Dashboard, API, ML, export, reverse ETL, and AI agent access have different risks |
| Semantic-aligned | Business-facing serving should use approved semantic objects where applicable |
| Trust-visible | Freshness, quality, certification, warnings, and limitations should be visible where needed |
| Security-by-design | Serving must not relax access constraints |
| Performance-aware | Serving pattern should match latency/concurrency needs |
| Feedback-enabled | Users must have a path to report issues and request improvements |
| Observable | Usage and adoption signals should be measurable |
| Guardrailed | Reverse ETL, external sharing, federation, and AI-agent access need explicit controls |
| No implementation here | Design serving decisions, do not build serving interfaces |

---

## Serving Channel Types

| Channel Type | Description |
|---|---|
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

---

## Serving Output Standard

Each serving output must define:

| Field | Required? |
|---|---|
| Serving output ID | Required |
| Consumer/persona | Required |
| Serving channel | Required |
| Source Gold/Semantic object | Required |
| Business question/use case | Required |
| Trust/certification status | Required |
| Access/security policy | Required |
| Freshness/quality visibility | Required |
| Contract expectation | Required where system-facing |
| Performance/latency expectation | Required for P1 |
| Caching/materialization expectation | Required where latency/cost requires it |
| Support owner | Required |
| Feedback path | Required |
| Usage/adoption signal | Required for P1 |
| Status | Required |

Allowed statuses:

```text
Draft | Approved | Risk | Blocked | Deferred
```

---

## Serving Evidence Mapping

For every P1 serving output, capture evidence status.

| Serving Field                | Evidence Status                                | Allowed Output                    |
| ---------------------------- | ---------------------------------------------- | --------------------------------- |
| Phase 16 handoff             | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk           |
| Serving scope                | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk           |
| Consumer/persona             | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk           |
| Serving channel inventory    | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk           |
| Gold/Semantic mapping        | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk           |
| Serving pattern              | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk           |
| Access/security              | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk / Blocked |
| Freshness/quality visibility | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk           |
| Performance/latency          | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk           |
| Caching/materialization      | Confirmed / Assumed / Missing / Not applicable | Approved / Draft / Risk           |
| API/application contract     | Confirmed / Partial / Missing / Not applicable | Approved / Draft / Risk / Blocked |
| ML/AI serving expectation    | Confirmed / Partial / Missing / Not applicable | Approved / Draft / Risk           |
| Reverse ETL/export guardrail | Confirmed / Partial / Missing / Not applicable | Approved / Draft / Risk / Blocked |
| Data sharing/federation risk | Confirmed / Partial / Missing / Not applicable | Approved / Draft / Risk / Blocked |
| AI/data-agent access         | Confirmed / Partial / Missing / Not applicable | Approved / Draft / Risk           |
| Feedback/support             | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk           |
| Usage monitoring             | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk           |
| Ownership/support model      | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk / Blocked |

---

## HALT — Consumer and Persona Approval

Stop if consumer or persona is unclear.

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

---

## HALT — Serving Channel Decision

Stop if serving channel is unclear.

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

---

## HALT — Gold and Semantic to Serving Mapping

Stop if a serving output cannot be traced to Gold or semantic object.

### Options

A. Map to approved semantic model/object
B. Map to approved Gold dataset
C. Map to promoted semantic object with warning
D. Keep output Draft pending semantic model
E. Route back to `des-semantic-model-design`
F. Remove output from P1 serving scope

### Required response

Choose A/B/C/D/E/F.

---

## HALT — Serving Pattern Decision

Stop if serving pattern is unclear.

### Options

A. Direct BI/semantic query
B. Materialized serving table/view
C. Cached serving layer
D. API read model
E. File/export delivery
F. Reverse ETL writeback
G. Feature/ML dataset
H. Embedded analytics dataset
I. AI-agent semantic interface
J. Custom pattern

### Required response

Choose one or more options.

---

## HALT — Access and Security Model

Stop if serving output has unclear access/security.

### Options

A. Open internal access
B. Role-based access
C. Row-level security
D. Column-level security
E. Object-level security
F. Measure-level restriction
G. Masking/tokenization
H. External sharing approval
I. Tenant/customer isolation
J. Governance/security review required
K. Custom policy

### Required response

Choose one or more options.

---

## HALT — Freshness and Quality Visibility

Stop if users need trust signals but visibility is unclear.

### Options

A. Last refresh time
B. Max event/business date
C. SLA status
D. Quality gate status
E. Certification/trust badge
F. Known limitations warning
G. Data issue banner
H. Contract compliance status
I. Hidden from consumers, visible only to data team
J. Custom visibility

### Required response

Choose one or more options.

---

## HALT — Performance and Latency Expectation

Stop if serving latency or concurrency expectation is unclear.

### Options

A. Interactive dashboard latency
B. Analyst query latency best-effort
C. API low-latency response requirement
D. Batch export delivery window
E. ML feature availability window
F. Reverse ETL sync window
G. AI-agent retrieval latency expectation
H. No strict latency in MVP
I. Custom expectation

### Required response

Choose A/B/C/D/E/F/G/H/I and specify target if known.

---

## HALT — Caching and Materialization Expectation

Stop if serving output has performance/cost/freshness constraints and caching/materialization is unclear.

### Options

A. No caching/materialization required
B. Materialized Gold/serving table
C. Cached semantic/BI dataset
D. API read model cache
E. Precomputed aggregate table
F. Feature/ML offline store style output
G. Export snapshot
H. Custom materialization

### Required response

Choose A/B/C/D/E/F/G/H.

---

## HALT — API/Application Contract

Stop if serving output is API/application-facing and contract behavior is unclear.

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

---

## HALT — ML/AI Serving Expectation

Stop if serving output is used for ML/AI but feature/label/inference expectations are unclear.

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

---

## HALT — Reverse ETL Guardrails

Stop if data is pushed back into operational tools.

### Why this matters

Reverse ETL can create feedback loops where served data changes operational systems, which then generate new data.

### Options

A. Monitoring and guardrails required before activation
B. Manual approval before writeback
C. Writeback limited to selected fields/entities
D. Dry-run mode before production
E. Rollback/disable switch required
F. Contract and DQ gates must pass before writeback
G. No reverse ETL in MVP
H. Custom guardrails

### Required response

Choose one or more options.

---

## HALT — Data Sharing or Federation Risk

Stop if data sharing or federated query is planned and risk is unclear.

### Options

A. Data sharing with controlled access
B. Federated query for exploration only
C. Federated query allowed for production use
D. Avoid querying live production source systems
E. Source impact review required
F. External sharing requires governance approval
G. Query/resource limits required
H. Custom policy

### Required response

Choose one or more options.

---

## HALT — AI/Data-Agent Access

Stop if AI/data-agent access is planned but semantic, security, grounding, and limitation boundaries are unclear.

### Options

A. Agent may access certified semantic objects only
B. Agent may access promoted objects with warning
C. Agent must expose metric definitions and lineage when answering
D. Agent must show freshness/quality status
E. Agent must not access restricted fields
F. Human review required for operational actions
G. AI-agent access deferred
H. Custom policy

### Required response

Choose one or more options.

---

## HALT — Feedback and Support Owner

Stop if users have no way to report issues or request improvements.

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

---

## HALT — Usage Monitoring and Adoption

Stop if usage monitoring is unclear.

### Options

A. Track active users
B. Track report/API/export usage
C. Track query volume or API calls
D. Track failed/slow requests
E. Track feedback tickets/issues
F. Track adoption by persona/team
G. Track unused outputs for deprecation review
H. Defer usage monitoring to later phase

### Required response

Choose one or more options.

---

## Completion Criteria

This step is complete when:

* serving scope and principles are defined;
* consumer/persona mapping is complete for P1;
* serving channel inventory is created;
* Gold/Semantic outputs map to serving channels;
* serving pattern is documented per P1 output;
* access, freshness, quality, performance, caching/materialization, feedback, usage monitoring, and ownership are documented;
* channel-specific risks are documented;
* evidence mapping is prepared;
* required support work is identified;
* risks and assumptions are explicit;
* draft serving layer specification content is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
