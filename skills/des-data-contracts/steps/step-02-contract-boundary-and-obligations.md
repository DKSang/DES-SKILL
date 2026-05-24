# Step 02 — Contract Boundary, Obligations, and Evidence

## Goal

Define contract boundaries, contract levels, producer-consumer obligations, schema, grain, freshness, quality, access, lineage, versioning, change management, incidents, validation, approval expectations, and supporting evidence.

This step prepares the Data Contract Specification and identifies which contract decisions require evidence, support work, waiver, or accepted risk.

---

## Required Inputs

- Confirmed context from Step 01
- Gold Layer Specification
- Phase 11 to Phase 12 handoff, if available
- Phase 11 evidence pack, if available
- Silver Layer Specification
- Requirements and KPI Catalog
- Data Product Specification
- Data Source Inventory
- User answers from HALT points
- Existing contracts, schemas, SLAs, data dictionaries, governance rules, or API specs if available

---

## Actions

1. Define contract scope and non-scope.
2. Define contract design principles.
3. Create contract inventory.
4. Map producers and consumers.
5. Assign contract level.
6. Define dataset/output identity.
7. Define business meaning and grain.
8. Define schema expectations.
9. Define field-level expectations.
10. Define metric and KPI expectations.
11. Define freshness and SLA expectations.
12. Define quality expectations.
13. Define volume and completeness expectations.
14. Define security and access expectations.
15. Define lineage and metadata expectations.
16. Define compatibility and versioning policy.
17. Define change management policy.
18. Define deprecation policy.
19. Define incident and escalation policy.
20. Define acceptance and validation criteria.
21. Define contract ownership and approval.
22. Map each critical contract decision to evidence.
23. Mark unsupported contract claims as `Draft`, `Proposed`, `Risk`, `Blocked`, `Unknown`, or `Waived with reason`.
24. Identify required Phase 12 support work.
25. Use HALT checkpoints for unresolved decisions.
26. Prepare draft Data Contract Specification content.
27. Prepare content for the Phase 12 Support Plan.

---

## Hints

- Start with the consumer dependency and risk level.
- Use minimal contracts for exploratory or internal MVP outputs.
- Use standard contracts for shared internal products.
- Use full contracts for production, system-facing, API-facing, ML-serving, or external outputs.
- Schema fields need meaning, type, requiredness, constraints, and change behavior.
- Grain must be explicit; otherwise schema alone is misleading.
- Contract quality rules should become test candidates later.
- Contract freshness rules should become observability checks later.
- Breaking changes require versioning and consumer notification.
- Contract violation should have an escalation path.
- Do not invent field lists if upstream Gold/Silver schema is not defined; mark schema as Draft.
- Do not write transformation SQL/Python code, build dashboards, implement APIs, create semantic model internals, define test implementation, or write pipeline implementation code.

---

## Contract Design Principles

Use these defaults unless project constraints override them:

| Principle | Meaning |
| --- | --- |
| Consumer-risk based | Contract strictness depends on consumer dependency and impact |
| More than schema | Meaning, grain, freshness, quality, access, lineage, and change rules are equally critical |
| Testable | Contract expectations should later become tests, checks, or gates |
| Versioned | Consumers must know when behavior changes |
| Owned | Every approved contract needs accountable producer/owner/approver |
| Change-aware | Breaking changes require notification, migration, and versioning |
| Security-aware | Access rules are part of the contract |
| Evidence-based | Contract claims need upstream artifact, owner, or accepted-risk evidence |

---

## Contract Levels

Use these generic levels:

| Contract Level | Use Case |
| --- | --- |
| None | Exploratory, temporary, low-risk output |
| Minimal | MVP/internal output with basic name, owner, grain, freshness, schema summary |
| Standard | Shared internal dataset with schema, grain, SLA, quality, lineage, change policy |
| Full | Production/system-facing output with strict schema, SLA, quality, access, versioning, incidents |
| External / Regulated | External, partner, compliance, regulated, or sensitive contractual output |

---

## Contract Standard

Each contract must define:

| Field | Required? |
| --- | --- |
| Contract ID | Required |
| Dataset/output name | Required |
| Producer | Required |
| Consumer | Required |
| Owner/approver | Required |
| Contract level | Required |
| Business meaning | Required |
| Grain | Required |
| Schema expectation | Required |
| Field-level expectation | Required for Standard+ |
| Metric/KPI expectation | Required where metrics exist |
| Freshness/SLA | Required for P1 |
| Quality expectations | Required |
| Volume/completeness expectations | Required where relevant |
| Security/access policy | Required |
| Lineage/metadata expectation | Required |
| Compatibility/versioning policy | Required |
| Change management policy | Required |
| Deprecation policy | Required for Standard+ |
| Incident/escalation policy | Required for Standard+ |
| Validation criteria | Required |
| Status | Required |

Allowed statuses:

```text
Draft | Proposed | Approved | Risk | Blocked | Deprecated
```

---

## Contract Evidence Mapping

For every P1 contract, capture evidence status.

| Contract Field           | Evidence Status                                 | Allowed Output                    |
| ------------------------ | ----------------------------------------------- | --------------------------------- |
| Contract scope           | Confirmed / Partial / Missing / Waived          | Approved / Draft / Risk           |
| Contract inventory       | Confirmed / Partial / Missing / Waived          | Approved / Draft / Risk           |
| Producer/consumer/owner  | Confirmed / Assumed / Missing / Waived          | Approved / Draft / Risk / Blocked |
| Contract level           | Confirmed / Assumed / Missing / Waived          | Approved / Draft / Risk           |
| Dataset/output identity  | Confirmed / Partial / Missing / Waived          | Approved / Draft / Risk           |
| Business meaning/grain   | Confirmed / Assumed / Missing / Waived          | Approved / Draft / Risk           |
| Schema expectations      | Confirmed / Partial / Missing / Waived          | Approved / Draft / Risk           |
| Field-level expectations | Confirmed / Partial / Missing / Waived          | Approved / Draft / Risk           |
| Metric/KPI expectations  | Confirmed / Conflict / Missing / Not applicable | Approved / Draft / Risk / Blocked |
| Freshness/SLA            | Confirmed / Assumed / Missing / Waived          | Approved / Draft / Risk           |
| Quality expectations     | Confirmed / Partial / Missing / Waived          | Approved / Draft / Risk           |
| Volume/completeness      | Confirmed / Assumed / Missing / Not applicable  | Approved / Draft / Risk           |
| Security/access          | Confirmed / Assumed / Missing / Waived          | Approved / Draft / Risk / Blocked |
| Lineage/metadata         | Confirmed / Partial / Missing / Waived          | Approved / Draft / Risk           |
| Versioning/change policy | Confirmed / Assumed / Missing / Waived          | Approved / Draft / Risk           |
| Deprecation policy       | Confirmed / Assumed / Missing / Not applicable  | Approved / Draft / Risk           |
| Incident/escalation      | Confirmed / Assumed / Missing / Not applicable  | Approved / Draft / Risk           |
| Validation criteria      | Confirmed / Partial / Missing / Waived          | Approved / Draft / Risk           |
| Ownership/approval       | Confirmed / Assumed / Missing / Waived          | Approved / Draft / Risk / Blocked |

---

## Phase 12 Required Support Work

Based on the contract design above, prepare a support plan using these categories:

| Support Work                   | Required When               | Output           |
| ------------------------------ | --------------------------- | ---------------- |
| Phase 11 Handoff Review        | Always                      | Evidence pack    |
| Contract Scope Check           | Always                      | Evidence pack    |
| Contract Inventory Check       | Always                      | Evidence pack    |
| Producer/Consumer/Owner Check  | Always                      | Evidence pack    |
| Contract Level Check           | Always                      | Evidence pack    |
| Dataset/Output Identity Check  | Always                      | Evidence pack    |
| Business Meaning/Grain Check   | Always                      | Evidence pack    |
| Schema Expectation Check       | Always                      | Evidence pack    |
| Field-Level Expectation Check  | Required for Standard+      | Evidence pack    |
| Metric/KPI Expectation Check   | Required when metrics exist | Evidence pack    |
| Freshness/SLA Check            | Required for P1             | Evidence pack    |
| Quality Expectation Check      | Always                      | Evidence pack    |
| Volume/Completeness Check      | Required when relevant      | Evidence pack    |
| Security/Access Check          | Always                      | Evidence pack    |
| Lineage/Metadata Check         | Always                      | Evidence pack    |
| Compatibility/Versioning Check | Always                      | Evidence pack    |
| Change Management Check        | Always                      | Evidence pack    |
| Deprecation Policy Check       | Required for Standard+      | Evidence pack    |
| Incident/Escalation Check      | Required for Standard+      | Evidence pack    |
| Acceptance/Validation Check    | Always                      | Evidence pack    |
| Ownership/Approval Check       | Always                      | Evidence pack    |
| Done Gate                      | Always before marking Done  | Done Gate result |
| Handoff to Phase 13            | Always before Phase 13      | Handoff file     |

---

## Decision Area 1 - Contract Level Approval

Stop if contract level is unclear.

### HALT - Contract Level Approval

#### Why this matters

Contract level controls how strict schema, SLA, quality, versioning, access, and incident processes must be.

#### Options

A. None
B. Minimal
C. Standard
D. Full
E. External / regulated
F. Keep Draft pending consumer risk assessment

#### Required response

Choose A/B/C/D/E/F.

---

## Decision Area 2 - Producer, Consumer, and Owner

Stop if contract accountability is unclear.

### HALT - Producer, Consumer, and Owner

#### Required fields

* Producer team/system
* Primary consumer
* Contract owner
* Business approver, if needed
* Technical approver, if needed

#### Options

A. Assign producer and consumer from data product spec
B. Assign owner from dataset owner/steward
C. Shared ownership between business and data team
D. Unknown — keep contract Draft/Risk
E. Route back to data product ownership decision

#### Required response

Choose A/B/C/D/E and provide names/teams if known.

---

## Decision Area 3 - Schema Expectations

Stop if schema expectation is unclear.

### HALT - Schema Expectations

#### Options

A. Schema summary only for MVP
B. Required fields only
C. Full field list with types and requiredness
D. Full schema with descriptions, constraints, and examples
E. Versioned schema with compatibility rules
F. Schema unknown — keep contract Draft

#### Required response

Choose A/B/C/D/E/F.

---

## Decision Area 4 - Field-Level Expectations

Stop if Standard+ contract fields lack meaning, type, requiredness, constraint, or change behavior.

### HALT - Field-Level Expectations

#### Options

A. Define only critical fields now
B. Define all consumer-facing fields
C. Define all fields with type, description, requiredness, constraints, and examples
D. Define field expectations later in implementation but keep contract Draft
E. Use existing data dictionary/schema as source of truth
F. Unknown — keep contract Draft/Risk

#### Required response

Choose A/B/C/D/E/F.

---

## Decision Area 5 - Grain Expectation

Stop if contract grain is unclear.

### HALT - Grain Expectation

#### Why this matters

Consumers cannot safely aggregate, join, or validate data without grain.

#### Options

A. One row per entity
B. One row per event
C. One row per entity per time period
D. One row per dimension combination per time period
E. One row per snapshot/as-of date
F. One row per API response object/message
G. Custom grain
H. Unknown — keep Draft/Risk

#### Required response

Choose A/B/C/D/E/F/G/H and describe grain.

---

## Decision Area 6 - Metric and KPI Alignment

Stop if a contract includes metrics whose definitions are not approved.

### HALT - Metric and KPI Alignment

#### Options

A. Use approved Phase 03 KPI definitions
B. Include candidate metrics as non-contractual fields
C. Remove metric from contract until approved
D. Route back to Phase 03 KPI definition
E. Keep contract Draft/Risk

#### Required response

Choose A/B/C/D/E.

---

## Decision Area 7 - Freshness and SLA

Stop if freshness or delivery expectation is unclear.

### HALT - Freshness and SLA

#### Options

A. No freshness guarantee
B. Best effort
C. Daily by specified time
D. Hourly/sub-hourly
E. Streaming/event-time expectation
F. On-demand/manual
G. Custom SLA
H. Unknown — keep Draft/Risk

#### Required response

Choose A/B/C/D/E/F/G/H and specify timezone/time if relevant.

---

## Decision Area 8 - Quality Thresholds

Stop if quality guarantees are unclear.

### HALT - Quality Thresholds

#### Options

A. Technical validity only
B. Required fields not null
C. Uniqueness at declared grain
D. Referential integrity
E. Metric reconciliation tolerance
F. Freshness check
G. Completeness/volume threshold
H. Valid value/domain constraints
I. Consumer acceptance review
J. Custom rule set

#### Required response

Choose all applicable rules and severity.

---

## Decision Area 9 - Volume and Completeness Expectations

Stop if consumers rely on row/file/event completeness or expected volume and expectations are unclear.

### HALT - Volume and Completeness Expectations

#### Options

A. No volume guarantee
B. Expected row/file/event count range
C. Minimum completeness percentage
D. Source-to-contract reconciliation required
E. Trend/anomaly threshold required
F. Consumer acceptance required for partial publish
G. Unknown — keep Draft/Risk

#### Required response

Choose A/B/C/D/E/F/G.

---

## Decision Area 10 - Security and Access Policy

Stop if access control is unclear.

### HALT - Security and Access Policy

#### Options

A. Public/open access
B. Internal standard access
C. Restricted role-based access
D. Row-level security required
E. Column-level security required
F. Masking/tokenization required
G. Governance/security review required
H. External/regulated access process
I. Unknown — keep Blocked/Risk

#### Required response

Choose A/B/C/D/E/F/G/H/I.

---

## Decision Area 11 - Lineage and Metadata Expectations

Stop if contract lineage expectations are unclear.

### HALT - Lineage and Metadata Expectations

#### Options

A. Basic lineage: dataset owner, upstream dataset, refresh time
B. Standard lineage: upstream datasets, run ID, quality status, metric version
C. Full lineage: source-to-serving traceability with versioning and audit metadata
D. External/audit-grade lineage
E. Keep Draft pending metadata design

#### Required response

Choose A/B/C/D/E.

---

## Decision Area 12 - Compatibility and Versioning Policy

Stop if change compatibility is unclear.

### HALT - Compatibility and Versioning Policy

#### Why this matters

Consumers need to know which changes are safe and which are breaking.

#### Options

A. Additive changes are backward compatible
B. Field removal/rename/type change is breaking
C. Metric definition change is breaking
D. Grain change is breaking
E. SLA/access change requires notification
F. Semantic meaning change requires new version
G. Use semantic versioning for contract versions
H. Custom compatibility policy

#### Required response

Choose all applicable policies.

---

## Decision Area 13 - Change Management Policy

Stop if change notification and approval are unclear.

### HALT - Change Management Policy

#### Options

A. PR/review approval before contract change
B. Consumer notification before breaking change
C. Deprecation window required
D. Versioned contract release required
E. Emergency change allowed with post-incident review
F. Governance approval required
G. Custom process

#### Required response

Choose all applicable processes and define notice period if relevant.

---

## Decision Area 14 - Deprecation Policy

Stop if output/field/metric retirement behavior is unclear.

### HALT - Deprecation Policy

#### Options

A. No deprecation policy needed for MVP
B. Deprecation notice required before removal
C. Migration path required before removal
D. Parallel old/new versions during deprecation window
E. Consumer sign-off required before removal
F. Governance approval required
G. Custom deprecation policy

#### Required response

Choose A/B/C/D/E/F/G and define deprecation window if relevant.

---

## Decision Area 15 - Incident and Escalation Policy

Stop if contract violation handling is unclear.

### HALT - Incident and Escalation Policy

#### Options

A. Alert producer only
B. Alert producer and consumer
C. Block publish/release
D. Publish with warning flag
E. Create incident ticket
F. Roll back to previous version/output
G. Manual approval required to proceed
H. Custom escalation

#### Required response

Choose one or more options and define severity.

---

## Decision Area 16 - Acceptance and Validation Criteria

Stop if there is no way to validate the contract.

### HALT - Acceptance and Validation Criteria

#### Options

A. Schema validation
B. Grain/uniqueness validation
C. Required field validation
D. Freshness validation
E. Quality rule validation
F. Access/security validation
G. Lineage/metadata validation
H. Consumer review/acceptance
I. CI/CD gate in later phase
J. Custom validation

#### Required response

Choose all applicable validation types.

---

## Decision Area 17 - Contract Ownership and Approval

Stop if approval authority is unclear.

### HALT - Contract Ownership and Approval

#### Options

A. Data team approval only
B. Business owner approval required
C. Technical owner approval required
D. Producer and consumer sign-off required
E. Governance/security approval required
F. External/legal approval required
G. Unknown — keep Draft/Blocked

#### Required response

Choose A/B/C/D/E/F/G.

---

## Completion Criteria

This step is complete when:

* contract scope and principles are defined;
* contract inventory is drafted;
* each P1 contracted output has contract level, producer, consumer, owner, meaning, grain, schema expectation, freshness, quality, access, lineage, change policy, incident policy, validation criteria, and status;
* metric definitions align with Phase 03;
* contract risks and assumptions are explicit;
* unresolved contract items are marked Draft/Risk/Blocked;
* evidence mapping is prepared;
* required support work is identified;
* draft contract specification content is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
