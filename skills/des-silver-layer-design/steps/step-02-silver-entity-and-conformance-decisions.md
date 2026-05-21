# Step 02 — Silver Entity and Conformance Decisions

## Goal

Define Silver datasets, domain alignment, logical structure, grain, identity, key strategy, conformance rules, quality rules, rejection handling, security handling, and traceability.

## Required Inputs

- Confirmed context from Step 01
- Bronze Layer Specification
- Conceptual Domain Model
- Data Source Inventory
- Requirements and KPI Catalog
- Data Product Specification
- User answers from HALT points
- Existing source schemas, data dictionaries, quality reports, and mapping documents if available

## Actions

1. Define Silver scope and non-scope.
2. Define Silver design principles.
3. Map Bronze datasets to Silver datasets.
4. Create Silver dataset inventory.
5. Align each Silver dataset to domain entities/events.
6. Define conceptual-to-logical mapping.
7. Define grain and identity rules.
8. Define key strategy.
9. Define deduplication and survivorship rules.
10. Define conformance and standardization rules.
11. Define data type normalization rules.
12. Define timezone and temporal normalization.
13. Define unit and currency normalization.
14. Define code/status/category mapping.
15. Define null and missing value handling.
16. Define schema evolution handling.
17. Define source-of-truth and cross-source reconciliation.
18. Define Silver boundary data quality rules.
19. Define rejected/quarantined record handling.
20. Define privacy and security handling.
21. Define lineage and traceability requirements.
22. Define refresh and incremental behavior.
23. Use HALT checkpoints for unresolved decisions.

## Hints

- Silver should be reusable by multiple downstream Gold outputs.
- Silver should represent trusted entities/events, not raw source feeds.
- Do not clean, conform, or design detailed Gold tables, semantic models, dashboards, APIs, or write pipeline implementation code.
- Use canonical naming carefully; it implies a stable business definition.
- If identity is not settled, use source-aligned Silver as an interim design.
- If multiple sources conflict, record survivorship rules or keep source-specific datasets.
- If a record cannot pass required conformance, quarantine/reject it with reason.
- Standardization must be explicit: timezone, units, currency, codes, categories, lifecycle states.
- Preserve enough metadata to trace back to Bronze.
- Do not silently drop columns or records that may be needed for audit/debugging.

## Silver Design Principles

Use these as defaults unless project constraints override them:

| Principle | Meaning |
| --- | --- |
| Domain-aligned | Silver models business entities/events from the domain model |
| Trusted but not final | Silver is cleaned and validated but not necessarily consumer-specific |
| Conformed where possible | Shared concepts should use consistent definitions and mappings |
| Traceable | Silver records must trace back to Bronze/source evidence |
| Explicit rules | Key, dedup, standardization, and quality rules must be documented |
| Preserve uncertainty | Ambiguous records should be flagged or quarantined, not hidden |
| Reusable | Silver datasets should support multiple Gold/product outputs |
| Secure | Sensitive fields must be handled according to classification |

## Silver Dataset Standard

Each Silver dataset must define:

| Field | Required? |
| --- | --- |
| Dataset name | Required |
| Domain concept | Required |
| Input Bronze datasets | Required |
| Grain | Required |
| Identity rule | Required for P1 |
| Key strategy | Required |
| Deduplication/survivorship | Required where duplicates/conflicts exist |
| Standardization rules | Required where applicable |
| Quality rules | Required |
| Rejection/quarantine policy | Required |
| Security classification | Required |
| Lineage fields | Required |
| Refresh behavior | Required |
| Status | Required |

Allowed statuses:

```text
Draft | Approved | Risk | Blocked | Deferred
```

## HALT - Domain Alignment Approval

Stop if a Silver dataset cannot be mapped to a domain entity, event, or reusable low-level fact.

### Why this matters

Silver should represent trustworthy domain-aligned data, not arbitrary raw source copies.

### Decision needed

Approve the domain alignment for target dataset.

### Options

A. Align to one domain entity
B. Align to one domain event
C. Align to reusable low-level fact/observation
D. Keep source-aligned Silver as interim
E. Defer dataset until domain model is clarified
F. Custom alignment

### Required response

Choose A/B/C/D/E/F.

---

## HALT - Grain and Identity Rule

Stop if grain or identity is unclear for a P1 Silver dataset.

### Why this matters

Grain and identity affect deduplication, joins, data quality, Gold design, contracts, and semantic metrics.

### Decision needed

Approve grain and identity rule.

### Required fields

* one record represents what;
* natural/source identifier;
* canonical identifier if any;
* cross-source mapping rule if applicable.

### Options

A. Use source natural key
B. Use composite business key
C. Generate canonical/surrogate key after conformance
D. Maintain source-specific identity
E. Use crosswalk/mapping table
F. Unknown — keep dataset Draft/Risk

### Required response

Choose A/B/C/D/E/F and describe grain.

---

## HALT - Key Strategy

Stop if the key strategy is unclear.

### Decision needed

How should this Silver dataset be keyed?

### Options

A. Preserve source primary key only
B. Use natural business key
C. Use composite key
D. Generate surrogate/canonical key
E. Use hash key from stable business attributes
F. Use mapping/crosswalk key
G. No stable key; treat as event/observation with generated row ID
H. Unknown — keep as Risk

### Required response

Choose A/B/C/D/E/F/G/H.

---

## HALT - Source of Truth and Reconciliation

Stop if multiple sources provide conflicting values for the same concept.

### Why this matters

Conformed Silver data must declare which source wins or whether definitions remain separate.

### Decision needed

Approve reconciliation strategy.

### Options

A. One authoritative source wins
B. Source priority order by attribute
C. Most recent value wins
D. Merge using business survivorship rules
E. Keep separate source-specific Silver datasets
F. Flag conflicts and require manual resolution
G. Defer conformance to later release

### Required response

Choose A/B/C/D/E/F/G.

---

## HALT - Deduplication and Survivorship

Stop if duplicate records or multiple versions exist and the rule is unclear.

### Decision needed

Approve deduplication/survivorship rule.

### Options

A. Exact duplicate removal by record hash
B. Deduplicate by business key and latest source update time
C. Deduplicate by source key and ingestion time
D. Keep all versions and mark current record
E. Keep all records and defer deduplication to Gold/use case
F. Manual review for conflicts
G. Custom rule

### Required response

Choose A/B/C/D/E/F/G.

---

## HALT - Timezone and Temporal Normalization

Stop if time meaning or timezone normalization is unclear.

### Decision needed

Approve temporal normalization.

### Options

A. Convert timestamps to UTC and retain source timezone
B. Keep source timestamp and add normalized UTC field
C. Use business local date/calendar in addition to timestamp
D. Keep source time unchanged due to legal/business meaning
E. Unknown — keep temporal fields Draft/Risk
F. Custom rule

### Required response

Choose A/B/C/D/E/F.

---

## HALT - Unit and Currency Normalization

Stop if units, measurement systems, or currency conversions are unclear.

### Decision needed

Approve normalization rule.

### Options

A. Normalize to one canonical unit/currency
B. Keep source unit and add normalized value
C. Keep source values only and defer normalization
D. Normalize only for selected P1 attributes
E. Unknown — keep as Risk
F. Custom rule

### Required response

Choose A/B/C/D/E/F.

---

## HALT - Code Status and Category Mapping

Stop if source codes/statuses/categories need canonical mapping.

### Decision needed

Approve mapping strategy.

### Options

A. Use canonical mapping table
B. Preserve source codes and add canonical category
C. Keep source-specific codes only
D. Map only P1 categories now
E. Unknown codes go to quarantine
F. Unknown codes are flagged but retained
G. Defer mapping to later phase

### Required response

Choose A/B/C/D/E/F/G.

---

## HALT - Null and Missing Value Handling

Stop if missing value behavior is unclear.

### Why this matters

Different missing values can mean unknown, not applicable, not collected, redacted, zero, or error.

### Decision needed

Approve missing value handling.

### Options

A. Preserve nulls and add missing_reason if known
B. Impute/default selected fields with explicit rule
C. Reject/quarantine records missing required fields
D. Flag missing values for downstream quality rules
E. Keep source-specific missing encodings
F. Custom rule

### Required response

Choose A/B/C/D/E/F.

---

## HALT - Silver Boundary Data Quality Rules

Stop if Silver quality rules are unclear.

### Decision needed

What quality rules must a record pass to enter trusted Silver?

### Options

A. Required key fields not null
B. Valid timestamp/date fields
C. Valid domain/status/category mapping
D. Valid numeric range/unit normalization
E. Referential integrity to required reference datasets
F. Uniqueness at declared grain
G. Source-specific validity rules
H. Custom rule set

### Required response

Choose all applicable rule types and severity.

---

## HALT - Sensitive Data Handling

Stop if Silver contains sensitive, regulated, confidential, or personal data.

### Decision needed

Approve Silver privacy/security handling.

### Options

A. Retain sensitive fields with restricted access
B. Mask/tokenize sensitive fields
C. Hash/pseudonymize identifiers
D. Drop sensitive fields after Bronze retention
E. Split sensitive attributes into restricted dataset
F. Governance/security review required
G. Not applicable

### Required response

Choose A/B/C/D/E/F/G.

---

## HALT - Lineage and Traceability

Stop if Silver records cannot trace back to Bronze/source evidence.

### Decision needed

Approve lineage fields and traceability rule.

### Required fields

* source_system;
* source_object;
* source_record_id or source file/message/batch reference;
* bronze_dataset;
* bronze_ingestion_time;
* pipeline_run_id;
* transformation_run_id, if applicable;
* record_hash or source_hash where useful.

### Options

A. Approve recommended lineage fields
B. Add project-specific lineage fields
C. Reduce lineage fields for MVP
D. Keep lineage decision Draft/Risk

### Required response

Choose A/B/C/D.

## Completion Criteria

This step is complete when:

* Silver scope and principles are defined;
* each P1 Bronze dataset maps to a Silver dataset or is deferred with reason;
* each P1 Silver dataset has domain alignment, grain, key strategy, lineage, and status;
* conformance and normalization rules are documented;
* deduplication and survivorship rules are documented where needed;
* quality rules are documented;
* rejection/quarantine policy is documented;
* sensitive data handling is documented;
* risks and assumptions are explicit;
* draft Silver specification content is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
