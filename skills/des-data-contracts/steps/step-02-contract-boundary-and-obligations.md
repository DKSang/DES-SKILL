# Step 02 — Contract Boundary and Obligations

## Goal

Define contract boundaries, contract levels, producer-consumer obligations, schema, grain, freshness, quality, access, lineage, versioning, change management, incidents, validation, and approval expectations.

## Required Inputs

- Confirmed context from Step 01
- Gold Layer Specification
- Silver Layer Specification
- Requirements and KPI Catalog
- Data Product Specification
- Data Source Inventory
- User answers from HALT points
- Existing contracts, schemas, SLAs, data dictionaries, governance rules, or API specs if available

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
22. Use HALT checkpoints for unresolved decisions.

## Hints

- Start with the consumer dependency and risk level.
- Use minimal contracts for exploratory or internal MVP outputs.
- Use standard contracts for shared internal products.
- Use full contracts for production, system-facing, API-facing, ML-serving, or external outputs.
- Schema fields need meaning, type, requiredness, and change behavior.
- Grain must be explicit; otherwise schema alone is misleading.
- Contract quality rules should become test candidates later.
- Contract freshness rules should become observability checks later.
- Breaking changes require versioning and consumer notification.
- Contract violation should have an escalation path.
- Do not invent field lists if upstream Gold/Silver schema is not defined; mark schema as Draft.
- Do not write transformation SQL/Python code, build dashboards, implement APIs, create semantic model internals, define full data contracts, or write pipeline implementation code.

## Contract Levels

Use these generic levels:

| Contract Level | Use Case |
| --- | --- |
| None | Exploratory, temporary, low-risk output |
| Minimal | MVP/internal output with basic name, owner, grain, freshness, schema summary |
| Standard | Shared internal dataset with schema, grain, SLA, quality, lineage, change policy |
| Full | Production/system-facing output with strict schema, SLA, quality, access, versioning, incidents |
| External / Regulated | External, partner, compliance, regulated, or sensitive contractual output |

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
| Freshness/SLA | Required for P1 |
| Quality expectations | Required |
| Security/access policy | Required |
| Lineage/metadata expectation | Required |
| Change/versioning policy | Required |
| Incident/escalation policy | Required for Standard+ |
| Validation criteria | Required |
| Status | Required |

Allowed statuses:

```text
Draft | Proposed | Approved | Risk | Blocked | Deprecated
```

---

## HALT - Contract Level Approval

Stop if contract level is unclear.

### Why this matters

Contract level controls how strict schema, SLA, quality, versioning, access, and incident processes must be.

### Decision needed

Approve contract level for target dataset or output.

### Options

A. None
B. Minimal
C. Standard
D. Full
E. External / regulated
F. Keep Draft pending consumer risk assessment

### Required response

Choose A/B/C/D/E/F.

---

## HALT - Producer, Consumer, and Owner

Stop if contract accountability is unclear.

### Decision needed

Define producer, consumer, owner, and approver.

### Required fields

* Producer team/system
* Primary consumer
* Contract owner
* Business approver, if needed
* Technical approver, if needed

### Options

A. Assign producer and consumer from data product spec
B. Assign owner from dataset owner/steward
C. Shared ownership between business and data team
D. Unknown — keep contract Draft/Risk
E. Route back to data product ownership decision

### Required response

Choose A/B/C/D/E and provide names/teams if known.

---

## HALT - Schema Expectations

Stop if schema expectation is unclear.

### Decision needed

How strict should schema be?

### Options

A. Schema summary only for MVP
B. Required fields only
C. Full field list with types and requiredness
D. Full schema with descriptions, constraints, and examples
E. Versioned schema with compatibility rules
F. Schema unknown — keep contract Draft

### Required response

Choose A/B/C/D/E/F.

---

## HALT - Grain Expectation

Stop if contract grain is unclear.

### Why this matters

Consumers cannot safely aggregate, join, or validate data without grain.

### Decision needed

Approve contract grain.

### Options

A. One row per entity
B. One row per event
C. One row per entity per time period
D. One row per dimension combination per time period
E. One row per snapshot/as-of date
F. One row per API response object/message
G. Custom grain
H. Unknown — keep Draft/Risk

### Required response

Choose A/B/C/D/E/F/G/H and describe grain.

---

## HALT - Metric and KPI Alignment

Stop if a contract includes metrics whose definitions are not approved.

### Decision needed

How should metric expectations be handled?

### Options

A. Use approved Phase 3 KPI definitions
B. Include candidate metrics as non-contractual fields
C. Remove metric from contract until approved
D. Route back to Phase 3 KPI definition
E. Keep contract Draft/Risk

### Required response

Choose A/B/C/D/E.

---

## HALT - Freshness and SLA

Stop if freshness or delivery expectation is unclear.

### Decision needed

Approve freshness/SLA for the contract.

### Options

A. No freshness guarantee
B. Best effort
C. Daily by specified time
D. Hourly/sub-hourly
E. Streaming/event-time expectation
F. On-demand/manual
G. Custom SLA
H. Unknown — keep Draft/Risk

### Required response

Choose A/B/C/D/E/F/G/H and specify timezone/time if relevant.

---

## HALT - Quality Thresholds

Stop if quality guarantees are unclear.

### Decision needed

Approve quality expectations.

### Options

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

### Required response

Choose all applicable rules and severity.

---

## HALT - Security and Access Policy

Stop if access control is unclear.

### Decision needed

Approve security/access policy.

### Options

A. Public/open access
B. Internal standard access
C. Restricted role-based access
D. Row-level security required
E. Column-level security required
F. Masking/tokenization required
G. Governance/security review required
H. External/regulated access process
I. Unknown — keep Blocked/Risk

### Required response

Choose A/B/C/D/E/F/G/H/I.

---

## HALT - Lineage and Metadata Expectations

Stop if contract lineage expectations are unclear.

### Decision needed

Approve lineage and metadata expectations.

### Options

A. Basic lineage: dataset owner, upstream dataset, refresh time
B. Standard lineage: upstream datasets, run ID, quality status, metric version
C. Full lineage: source-to-serving traceability with versioning and audit metadata
D. External/audit-grade lineage
E. Keep Draft pending metadata design

### Required response

Choose A/B/C/D/E.

---

## HALT - Compatibility and Versioning Policy

Stop if change compatibility is unclear.

### Why this matters

Consumers need to know which changes are safe and which are breaking.

### Decision needed

Approve compatibility and versioning policy.

### Options

A. Additive changes are backward compatible
B. Field removal/rename/type change is breaking
C. Metric definition change is breaking
D. Grain change is breaking
E. SLA/access change requires notification
F. Semantic meaning change requires new version
G. Custom compatibility policy

### Required response

Choose all applicable policies.

---

## HALT - Change Management Policy

Stop if change notification and approval are unclear.

### Decision needed

Approve change process.

### Options

A. PR/review approval before contract change
B. Consumer notification before breaking change
C. Deprecation window required
D. Versioned contract release required
E. Emergency change allowed with post-incident review
F. Governance approval required
G. Custom process

### Required response

Choose all applicable processes and define notice period if relevant.

---

## HALT - Incident and Escalation Policy

Stop if contract violation handling is unclear.

### Decision needed

What happens if the contract is violated?

### Options

A. Alert producer only
B. Alert producer and consumer
C. Block publish/release
D. Publish with warning flag
E. Create incident ticket
F. Roll back to previous version/output
G. Manual approval required to proceed
H. Custom escalation

### Required response

Choose one or more options and define severity.

---

## HALT - Acceptance and Validation Criteria

Stop if there is no way to validate the contract.

### Decision needed

How will contract compliance be checked?

### Options

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

### Required response

Choose all applicable validation types.

## Completion Criteria

This step is complete when:

* contract inventory is drafted;
* each P1 contracted output has contract level, producer, consumer, owner, meaning, grain, schema expectation, freshness, quality, access, lineage, change policy, incident policy, validation criteria, and status;
* metric definitions align with Phase 3;
* contract risks and assumptions are explicit;
* unresolved contract items are marked Draft/Risk/Blocked;
* draft contract specification content is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
