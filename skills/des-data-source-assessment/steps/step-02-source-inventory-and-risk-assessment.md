# Step 02 — Source Inventory and Risk Assessment

## Goal

Inventory candidate source systems, map them to product needs, assess feasibility and risk, and identify source-of-truth, access, quality, freshness, security, and ownership decisions.

## Required Inputs

- Confirmed context from Step 01
- Data Product Specification
- Requirements and KPI Catalog
- Business Question Catalog
- User answers from HALT points
- Existing source notes, documentation, samples, API docs, database schemas, file manifests, contracts, or data dictionaries if available

## Actions

1. Create a candidate source inventory.
2. For each source, classify:
   - source type;
   - data generation pattern;
   - owner/contact;
   - access method;
   - permission status;
   - data format;
   - schema availability;
   - update frequency;
   - history/retention;
   - expected volume;
   - known quality issues;
   - reliability/availability;
   - schema change behavior;
   - security/privacy/compliance classification;
   - cost/licensing/usage limits;
   - operational dependencies.
3. Map each source to:
   - product outputs;
   - business questions;
   - requirements;
   - KPIs/metrics.
4. Identify source-of-truth candidates for each key business concept.
5. Identify upstream contract or SLA expectations.
6. Rate ingestion feasibility.
7. Record risks, assumptions, and open questions.
8. Use HALT checkpoints for decisions the agent cannot safely infer.

## Hints

- Source assessment is not ingestion design.
- Do not define pipeline steps, schedules, Bronze schema, or transformation logic yet.
- For databases, assess read impact, CDC possibility, transaction patterns, ownership, schema stability, and access restrictions.
- For APIs, assess authentication, rate limits, pagination, response schema, error behavior, terms of use, and freshness.
- For files, assess format, naming convention, delivery location, delivery schedule, encoding, schema drift, and manual handoff risk.
- For streams/messages, assess ordering, replay, retention, delivery guarantees, schema registry, and consumer groups.
- For third-party or SaaS data, assess licensing, export limits, cost, contractual restrictions, and support path.
- For manual/spreadsheet sources, assess ownership, validation, change process, and auditability.
- Always separate source reliability from downstream pipeline reliability.
- If source is outside data engineering control, capture communication and incident expectations.

## Source Types

Classify each source as one or more:

| Source Type | Description |
| --- | --- |
| Application database | OLTP or operational database |
| Analytical database / warehouse | OLAP, warehouse, existing mart |
| API | REST, GraphQL, RPC, vendor API |
| File export | CSV, JSON, Parquet, Excel, XML, logs, documents |
| SaaS export / connector | CRM, ERP, marketing, finance, support tools |
| Message queue / stream | Kafka, Pub/Sub, Event Hubs, Kinesis, queues |
| Log source | Application, infrastructure, audit, event logs |
| Third-party dataset | Vendor, open data, purchased data |
| Data sharing feed | Shared table/dataset, marketplace, partner feed |
| Manual reference data | Spreadsheet or curated business reference |
| Sensor / IoT / device data | Device-generated events or telemetry |
| Existing lakehouse/warehouse table | Internal curated or raw data source |

## Source Generation Patterns

Classify data creation/update pattern:

| Pattern | Meaning |
| --- | --- |
| CRUD | Records are created, updated, and deleted |
| Insert-only | New records are appended |
| Snapshot | Periodic full state export |
| Differential export | Periodic changed records |
| CDC/log-based | Change log or database log captures changes |
| Event stream | Event messages emitted continuously |
| Batch file drop | Files delivered on schedule or manually |
| API pull/poll | Data fetched by request |
| Webhook/push | Source sends events to target |
| Manual curation | Human-maintained reference or spreadsheet |
| Unknown | Pattern not yet understood |

## Ingestion Feasibility Rating

Use this rating:

| Rating | Meaning |
| --- | --- |
| Ready | Owner, access, format, freshness, and risk are understood enough for ingestion design |
| Viable with risks | Source can likely be used, but risks need mitigation |
| Blocked | Access, ownership, legal, quality, or reliability issue blocks use |
| Unknown | Not enough evidence to decide |
| Deferred | Not needed for first release |

## Decision Area 1 - Source Ownership and Contacts

Identify who owns and supports each candidate source system.

### HALT — Source Owner Required

Stop if a P1 source has no owner or support contact.

#### Why this matters

Source owners are needed for access, schema changes, quality issues, incidents, and upstream communication.

#### Decision needed

Who owns or supports this source?

#### Options

A. Business/system owner  
B. Application engineering team  
C. Data/platform team  
D. Vendor or external provider  
E. Shared ownership  
F. Unknown — mark source as risky or blocked  

#### Required response

Choose A/B/C/D/E/F and provide owner/contact if known.

## Decision Area 2 - Source of Truth and Concept Mapping

Determine which source is the authoritative source of truth for each key business concept.

### HALT — Source of Truth Decision

Stop if multiple sources provide the same business concept.

#### Why this matters

Downstream domain modeling, Gold tables, contracts, and metrics depend on authoritative source decisions.

#### Decision needed

Choose source of truth for `<business_concept>`.

#### Options

A. Use one authoritative source  
B. Use conformed/merged source strategy  
C. Use source priority order  
D. Keep separate source-specific definitions  
E. Defer concept from first release  

#### Required response

Choose A/B/C/D/E and explain the decision.

## Decision Area 3 - Technical and Legal Access

Confirm access capability, permissions, and credential handling methods.

### HALT — Access and Permission Approval

Stop if source access is unknown or not approved.

#### Why this matters

A source cannot support ingestion design until legal, technical, and operational access is understood.

#### Decision needed

What is the access status?

#### Options

A. Access approved and tested  
B. Access approved but not tested  
C. Access requested, pending approval  
D. Access requires legal/security/vendor review  
E. No access; source blocked  
F. Unknown  

#### Required response

Choose A/B/C/D/E/F.

## Decision Area 4 - Sensitive Data and Privacy Classification

Evaluate whether source contains sensitive or regulated data.

### HALT — Sensitive Data Classification

Stop if the source may contain sensitive, personal, regulated, confidential, or credential-protected data.

#### Why this matters

Security and privacy decisions affect access, storage, masking, retention, governance, and release gates.

#### Decision needed

Classify sensitivity.

#### Options

A. Public / open data  
B. Internal non-sensitive  
C. Confidential business data  
D. Personal data / PII  
E. Sensitive personal / regulated data  
F. Credential/secret-bearing data  
G. Unknown — require governance review  

#### Required response

Choose A/B/C/D/E/F/G.

## Decision Area 5 - Freshness and Reliability Expectations

Identify upstream SLA/SLO or reliability expectations.

### HALT — Freshness and Reliability Expectation

Stop if a P1 source must meet freshness/reliability requirements but upstream guarantees are unknown.

#### Decision needed

What expectation applies to this source?

#### Options

A. Formal SLA/SLO exists  
B. Informal expectation agreed with owner  
C. Best-effort source, downstream must tolerate delay  
D. Unknown — must be clarified before ingestion design  
E. Not relevant for first release  

#### Required response

Choose A/B/C/D/E and specify freshness/reliability expectation if known.

## Decision Area 6 - Source Quality and Profiling

Evaluate known issues or determine if source data profiling is needed.

### HALT — Source Quality Unknown

Stop if a P1 source quality profile is unknown.

#### Decision needed

How should quality risk be handled?

#### Options

A. Profile/sample the source before ingestion design  
B. Continue to ingestion design with explicit quality risks  
C. Require upstream owner validation  
D. Defer source from first release  
E. Replace with alternative source  

#### Required response

Choose A/B/C/D/E.

## Decision Area 7 - Upstream Schema Change Management

Understand how upstream schema changes will be detected and communicated.

### HALT — Schema Change Behavior

Stop if schema change behavior is unknown for a P1 source.

#### Why this matters

Schema changes can break ingestion, storage, transformations, contracts, and downstream consumers.

#### Decision needed

How are schema changes handled?

#### Options

A. Formal change notification exists  
B. Schema registry or versioning exists  
C. Informal owner communication only  
D. No change process; downstream must detect drift  
E. Unknown — mark as risk  
F. Not applicable  

#### Required response

Choose A/B/C/D/E/F.

## Decision Area 8 - Cost, Licensing, and Usage Limits

Confirm usage licensing, quotas, or pricing constraints.

### HALT — Cost, License, or Usage Limit

Stop if source usage may be blocked by cost, license, API quota, export limit, or legal restriction.

#### Decision needed

How should this constraint be handled?

#### Options

A. Constraint acceptable for first release  
B. Constraint requires design mitigation  
C. Constraint requires business/legal approval  
D. Source blocked until resolved  
E. Replace with alternative source  

#### Required response

Choose A/B/C/D/E.

## Completion Criteria

This step is complete when:

- candidate sources are inventoried;
- each P1 product output maps to at least one source or is marked blocked;
- P1 source ownership is known or marked risky/blocked;
- source of truth conflicts are resolved or documented;
- access status is documented;
- sensitive data classification is documented;
- freshness/reliability expectation is documented;
- quality and schema change risks are documented;
- ingestion feasibility is rated;
- draft inventory content is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
