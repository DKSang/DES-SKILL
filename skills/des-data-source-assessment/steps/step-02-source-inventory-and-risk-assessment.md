# Step 02 — Source Inventory, Evidence Collection, and Risk Assessment

## Goal

Inventory candidate source systems, map them to product needs, collect or reference source evidence, assess feasibility and risk, and identify source-of-truth, access, quality, freshness, security, ownership, licensing, and schema decisions.

This step prepares the Data Source Inventory and identifies which source decisions require evidence, support work, waiver, or accepted risk.

---

## Required Inputs

- Confirmed context from Step 01
- Data Product Specification
- Phase 04 to Phase 05 handoff, if available
- Requirements and KPI Catalog
- Business Question Catalog
- User answers from HALT points
- Existing source notes, documentation, samples, API docs, database schemas, file manifests, contracts, terms, licenses, or data dictionaries if available

---

## Actions

1. Create a candidate source inventory.
2. Map each source to:
   - product outputs;
   - source needs;
   - business questions;
   - requirements;
   - KPIs/metrics.
3. For each source, classify:
   - source type;
   - data generation pattern;
   - owner/contact;
   - access method;
   - permission status;
   - data format;
   - schema availability;
   - sample/probe evidence;
   - update frequency;
   - history/retention;
   - expected volume;
   - known quality issues;
   - reliability/availability;
   - schema change behavior;
   - security/privacy/compliance classification;
   - cost/licensing/usage limits;
   - operational dependencies.
4. For each P1 source, collect or reference evidence where possible:
   - documentation;
   - sample response;
   - sample data;
   - schema snapshot;
   - API docs;
   - data dictionary;
   - profiling report;
   - license/terms note;
   - access test result.
5. Identify source-of-truth candidates for each key business concept.
6. Identify upstream contract or SLA expectations.
7. Rate ingestion feasibility.
8. Record risks, assumptions, and open questions.
9. Map each critical source decision to evidence.
10. Mark unsupported source claims as `Unknown`, `Risk`, `Blocked`, `Deferred`, or `Waived with reason`.
11. Identify required Phase 05 support work.
12. Use HALT checkpoints for decisions the agent cannot safely infer.
13. Prepare draft content for the Data Source Inventory.
14. Prepare content for the Phase 05 Support Plan.

---

## Hints

- Source assessment is not production ingestion design.
- Source probing is allowed; production pipeline design is not.
- Do not define pipeline steps, schedules, Bronze schema, or transformation logic yet.
- For databases, assess read impact, CDC possibility, transaction patterns, ownership, schema stability, and access restrictions.
- For APIs, assess authentication, rate limits, pagination, response schema, error behavior, terms of use, and freshness.
- For files, assess format, naming convention, delivery location, delivery schedule, encoding, schema drift, and manual handoff risk.
- For streams/messages, assess ordering, replay, retention, delivery guarantees, schema registry, and consumer groups.
- For third-party or SaaS data, assess licensing, export limits, cost, contractual restrictions, and support path.
- For manual/spreadsheet sources, assess ownership, validation, change process, and auditability.
- Always separate source reliability from downstream pipeline reliability.
- If source is outside data engineering control, capture communication and incident expectations.
- If evidence cannot be collected, clearly mark the risk instead of guessing.

---

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

---

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

---

## Source Evidence Types

For each P1 source, try to collect or reference at least one strong evidence type.

| Evidence Type | Examples |
|---|---|
| Documentation | Official docs, README, source owner note, data dictionary |
| Access Probe | API call result, database connection test, file listing, sample download |
| Schema Evidence | JSON schema, database schema, inferred schema, sample columns |
| Sample Data | API sample response, CSV/JSON sample, query sample, file sample |
| Profiling Evidence | nulls, duplicates, row counts, freshness, value ranges, type checks |
| Freshness Evidence | update schedule, timestamp field, API metadata, source owner statement |
| License/Terms Evidence | license text, API terms, usage limits, quota, attribution requirement |
| Security/Privacy Evidence | classification note, PII indicator, access policy, governance review |
| Reliability Evidence | SLA/SLO, status page, owner statement, historical availability note |

---

## Ingestion Feasibility Rating

Use this rating:

| Rating | Meaning |
| --- | --- |
| Ready | Owner, access, format/schema, freshness, and risk are understood enough for ingestion design |
| Viable with risks | Source can likely be used, but risks need mitigation |
| Blocked | Access, ownership, legal, quality, or reliability issue blocks use |
| Unknown | Not enough evidence to decide |
| Deferred | Not needed for first release |

---

## Source Evidence Mapping

For every P1 source, capture the evidence status.

| Source Field | Evidence Status | Allowed Output |
|---|---|---|
| Product/source need mapping | Confirmed / Assumed / Missing / Waived | Ready / Draft / Open / Blocked |
| Owner/contact | Confirmed / Assumed / Missing / Waived | Approved / Risk / Blocked |
| Access/permission | Tested / Approved / Pending / Missing / Waived | Ready / Risk / Blocked |
| Schema/sample | Confirmed / Partial / Missing / Waived | Ready / Risk / Blocked |
| Quality profile | Profiled / Known issues / Missing / Waived | Ready / Risk / Blocked |
| Freshness/update pattern | Confirmed / Assumed / Missing / Waived | Ready / Risk / Blocked |
| License/terms | Confirmed / Assumed / Missing / Waived | Ready / Risk / Blocked |
| Security/privacy | Classified / Assumed / Missing / Waived | Ready / Risk / Blocked |
| Source of truth | Approved / Draft / Conflict / Missing | Ready / Risk / Blocked |
| Ingestion feasibility | Ready / Viable with risks / Blocked / Unknown / Deferred | Ready / Risk / Blocked |

---

## Phase 05 Required Support Work

Based on the source inventory above, prepare a support plan using these categories:

| Support Work | Required When | Output |
|---|---|---|
| Phase 04 Handoff Review | Always | Evidence pack |
| Source Need Mapping Check | Always | Evidence pack |
| Candidate Source Inventory Check | Always | Evidence pack |
| Source Access Probe | P1 source has accessible endpoint/file/db/API | Evidence pack |
| Schema Inspection | P1 source has schema or sample | Evidence pack |
| Sample Data or Response Capture | P1 source supports sample/probe | Evidence pack |
| Data Quality Profile or Sampling | P1 source sample is available | Evidence pack |
| Freshness and Update Pattern Check | P1 output has freshness expectation | Evidence pack |
| License/Terms and Usage Limit Review | External/vendor/API/open data source | Evidence pack |
| Security/Privacy Classification Check | Always | Evidence pack |
| Source of Truth Check | Multiple sources/concepts exist | Evidence pack |
| Ingestion Feasibility Check | Always before Phase 06/08 | Evidence pack |
| Done Gate | Always before marking Done | Done Gate result |
| Handoff to Phase 06 | Always before Phase 06 | Handoff file |

---

## Probe Execution Guidance

For each P1 source, choose the lightest safe probe method.

| Source Type | Recommended Probe | Evidence |
|---|---|---|
| REST API | Python `requests.get()` with a small parameter set | status code, sample JSON, top-level keys, schema hints |
| GraphQL API | Small introspection or sample query where allowed | response shape, fields, pagination behavior |
| CSV / Excel file | Python `pandas.read_csv/read_excel()` with limited rows | columns, dtypes, null counts, sample rows |
| Parquet / Delta / DuckDB-readable file | DuckDB or pandas sample read | schema, row count estimate, sample records |
| Database table | Read-only `SELECT ... LIMIT` query | connection status, columns, sample rows |
| SaaS export | Sample export or connector metadata | file format, fields, freshness |
| Manual spreadsheet | Sample sheet inspection | owner, columns, validation issues |
| Stream / queue | Metadata/topic/schema review or controlled sample | schema, retention, replay notes |

Do not run destructive operations.
Do not run full extraction.
Do not stress source systems.
Do not store credentials in artifacts.
Do not design production ingestion here.

---

## Python Probe Evidence Pattern

When Python is used for a probe, record:

- script or notebook path, if saved;
- source name;
- endpoint, file, table, or query tested;
- timestamp;
- row/sample count;
- status code or connection result;
- schema/columns captured;
- null/missing summary;
- observed errors;
- limitation of the probe.

The probe result should be summarized in:

```text
_des-output/evidence/phase-05/phase-05-evidence-pack.md
```

Detailed outputs, if retained, should go under:

```text
_des-output/evidence/phase-05/code-verification/
```

---

## Minimal API Probe Example

```python
import requests
import pandas as pd

url = "https://example.com/api/resource"
params = {"limit": 100}

response = requests.get(url, params=params, timeout=30)
print("Status:", response.status_code)
response.raise_for_status()

payload = response.json()

print("Top-level keys:", payload.keys())

# Adjust according to response shape
records = payload if isinstance(payload, list) else payload.get("data", [])
df = pd.DataFrame(records)

print(df.head())
print(df.dtypes)
print(df.isna().sum())
```

This code is only a probe.
It is not production ingestion implementation.

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

## HALT — Probe Evidence Missing

Stop if a P1 source has no documentation, sample, schema, probe result, or accepted evidence waiver.

### Why this matters

Phase 06 domain modeling and later ingestion design should not depend on source claims with no evidence.

### Options

A. Collect source documentation or sample now  
B. Run a lightweight probe or sample inspection  
C. Continue with explicit accepted risk  
D. Mark source as Unknown or Blocked  
E. Replace with alternative source  

### Required response

Choose A/B/C/D/E.

---

## HALT — Ingestion Feasibility Unknown

Stop if a P1 source cannot be rated for ingestion feasibility.

### Why this matters

Later ingestion design depends on whether source access, format, freshness, volume, quality, and reliability are understood enough to define ingestion jobs.

### Options

A. Research source capabilities now
B. Mark source as Unknown feasibility
C. Route back to `des-data-product-definition` to revise outputs
D. Stop workflow

### Required response

Choose A/B/C/D.

---

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
- sample, schema, or probe evidence is documented or waived;
- source-to-product mappings and feasibility are validated;
- required support work is identified;
- draft inventory content is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
