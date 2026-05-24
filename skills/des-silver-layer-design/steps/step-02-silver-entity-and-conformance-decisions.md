# Step 02 — Silver Entity, Conformance, Quality, and Evidence

## Goal

Define Silver datasets, domain alignment, logical structure, grain, identity, key strategy, conformance rules, quality rules, rejected/quarantined handling, security handling, metadata inheritance, and traceability.

This step prepares the Silver Layer Specification and identifies which Silver decisions require evidence, support work, waiver, or accepted risk.

---

## Required Inputs

- Confirmed context from Step 01
- Bronze Layer Specification
- Phase 09 to Phase 10 handoff, if available
- Phase 09 evidence pack, if available
- Conceptual Domain Model
- Data Source Inventory
- Requirements and KPI Catalog
- Data Product Specification
- User answers from HALT points
- Existing source schemas, data dictionaries, quality reports, profiling results, and mapping documents if available

---

## Actions

1. Define Silver scope and non-scope.
2. Define Silver design principles.
3. Map Bronze datasets to Silver datasets.
4. Create Silver dataset inventory.
5. Align each Silver dataset to domain entities/events or reusable low-level facts.
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
22. Define metadata inheritance from Bronze.
23. Define refresh and incremental behavior.
24. Map each critical Silver decision to evidence.
25. Mark unsupported Silver claims as `Draft`, `Open`, `Risk`, `Deferred`, `Blocked`, `Unknown`, or `Waived with reason`.
26. Identify required Phase 10 support work.
27. Use HALT checkpoints for unresolved decisions.
28. Prepare draft Silver specification content.
29. Prepare content for the Phase 10 Support Plan.

---

## Hints

- Silver should be reusable by multiple downstream Gold outputs.
- Silver should represent trusted entities/events, not raw source feeds.
- Use canonical naming carefully; it implies a stable business definition.
- If identity is not settled, use source-aligned Silver as an interim design.
- If multiple sources conflict, record survivorship rules or keep source-specific datasets.
- If a record cannot pass required conformance, quarantine/reject it with reason.
- Standardization must be explicit: timezone, units, currency, codes, categories, lifecycle states.
- Preserve enough metadata to trace back to Bronze.
- Do not silently drop columns or records that may be needed for audit/debugging.
- Do not design detailed Gold tables, final metrics, semantic models, dashboards, APIs, orchestration implementation, CI/CD files, or write pipeline implementation code.

---

## Silver Design Principles

Use these as defaults unless project constraints override them:

| Principle | Meaning |
| --- | --- |
| Domain-aligned | Silver models business entities/events from the domain model |
| Trusted but not final | Silver is cleaned and validated but not necessarily consumer-specific |
| Conformed where possible | Shared concepts should use consistent definitions and mappings |
| Traceable | Silver records must trace back to Bronze/source evidence |
| Explicit rules | Key, dedup, standardization, quality, privacy, and lineage rules must be documented |
| Preserve uncertainty | Ambiguous records should be flagged or quarantined, not hidden |
| Reusable | Silver datasets should support multiple Gold/product outputs |
| Secure | Sensitive fields must be handled according to classification |
| Evidence-based | Silver rules must be backed by domain, source, profiling, or user-approved evidence |

---

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
| Conceptual-to-logical mapping | Required |
| Deduplication/survivorship | Required where duplicates/conflicts exist |
| Standardization rules | Required where applicable |
| Data type normalization | Required |
| Temporal normalization | Required where relevant |
| Unit/currency normalization | Required where relevant |
| Code/status/category mapping | Required where relevant |
| Null/missing handling | Required |
| Schema evolution handling | Required |
| Source-of-truth reconciliation | Required where multiple sources exist |
| Quality rules | Required |
| Rejection/quarantine policy | Required |
| Security classification | Required |
| Lineage fields | Required |
| Bronze metadata inheritance | Required |
| Refresh behavior | Required |
| Status | Required |

Allowed statuses:

```text
Draft | Approved | Risk | Blocked | Deferred
```

---

## Silver Evidence Mapping

For every P1 Silver dataset, capture the evidence status.

| Silver Field                   | Evidence Status                                | Allowed Output            |
| ------------------------------ | ---------------------------------------------- | ------------------------- |
| Bronze-to-Silver mapping       | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk   |
| Domain alignment               | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk   |
| Conceptual-to-logical mapping  | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk   |
| Grain/identity                 | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk   |
| Key strategy                   | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk   |
| Dedup/survivorship             | Confirmed / Assumed / Missing / Not applicable | Approved / Draft / Risk   |
| Conformance/standardization    | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk   |
| Data type normalization        | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk   |
| Temporal normalization         | Confirmed / Assumed / Missing / Not applicable | Approved / Draft / Risk   |
| Unit/currency normalization    | Confirmed / Assumed / Missing / Not applicable | Approved / Draft / Risk   |
| Code/status/category mapping   | Confirmed / Assumed / Missing / Not applicable | Approved / Draft / Risk   |
| Null/missing handling          | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk   |
| Schema evolution               | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk   |
| Source-of-truth/reconciliation | Confirmed / Assumed / Conflict / Missing       | Approved / Draft / Risk   |
| Silver DQ rules                | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk   |
| Rejected/quarantine handling   | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk   |
| Privacy/security               | Confirmed / Assumed / Missing / Waived         | Approved / Risk / Blocked |
| Lineage/traceability           | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk   |
| Metadata inheritance           | Confirmed / Partial / Missing / Waived         | Approved / Draft / Risk   |
| Refresh/incremental behavior   | Confirmed / Assumed / Missing / Waived         | Approved / Draft / Risk   |

---

## Phase 10 Required Support Work

Based on the Silver design above, prepare a support plan using these categories:

| Support Work                          | Required When                               | Output           |
| ------------------------------------- | ------------------------------------------- | ---------------- |
| Phase 09 Handoff Review               | Always                                      | Evidence pack    |
| Bronze-to-Silver Mapping Check        | Always                                      | Evidence pack    |
| Domain Alignment Check                | Always for P1 Silver datasets               | Evidence pack    |
| Conceptual-to-Logical Mapping Check   | Always                                      | Evidence pack    |
| Grain/Identity Check                  | Always for P1 Silver datasets               | Evidence pack    |
| Key Strategy Check                    | Always                                      | Evidence pack    |
| Dedup/Survivorship Check              | Required when duplicates or conflicts exist | Evidence pack    |
| Conformance/Standardization Check     | Always                                      | Evidence pack    |
| Data Type Normalization Check         | Always                                      | Evidence pack    |
| Timezone/Temporal Normalization Check | Required when timestamps/dates exist        | Evidence pack    |
| Unit/Currency Normalization Check     | Required when units/currency exist          | Evidence pack    |
| Code/Status/Category Mapping Check    | Required when coded/category fields exist   | Evidence pack    |
| Null/Missing Handling Check           | Always                                      | Evidence pack    |
| Schema Evolution Handling Check       | Always                                      | Evidence pack    |
| Source-of-Truth Reconciliation Check  | Required when multiple sources overlap      | Evidence pack    |
| Silver Boundary Quality Check         | Always                                      | Evidence pack    |
| Rejected/Quarantine Handling Check    | Always                                      | Evidence pack    |
| Privacy/Security Handling Check       | Always                                      | Evidence pack    |
| Lineage/Traceability Check            | Always                                      | Evidence pack    |
| Metadata Inheritance Check            | Always                                      | Evidence pack    |
| Refresh/Incremental Behavior Check    | Always                                      | Evidence pack    |
| Done Gate                             | Always before marking Done                  | Done Gate result |
| Handoff to Phase 11                   | Always before Phase 11                      | Handoff file     |

---

## Decision Area 1 - Domain Alignment Approval

Stop if a Silver dataset cannot be mapped to a domain entity, event, or reusable low-level fact.

### HALT - Domain Alignment Approval

#### Why this matters

Silver should represent trustworthy domain-aligned data, not arbitrary raw source copies.

#### Options

A. Align to one domain entity
B. Align to one domain event
C. Align to reusable low-level fact/observation
D. Keep source-aligned Silver as interim
E. Defer dataset until domain model is clarified
F. Custom alignment

#### Required response

Choose A/B/C/D/E/F.

---

## Decision Area 2 - Grain and Identity Rule

Stop if grain or identity is unclear for a P1 Silver dataset.

### HALT - Grain and Identity Rule

#### Why this matters

Grain and identity affect deduplication, joins, data quality, Gold design, contracts, and semantic metrics.

#### Required fields

* one record represents what;
* natural/source identifier;
* canonical identifier if any;
* cross-source mapping rule if applicable.

#### Options

A. Use source natural key
B. Use composite business key
C. Generate canonical/surrogate key after conformance
D. Maintain source-specific identity
E. Use crosswalk/mapping table
F. Unknown — keep dataset Draft/Risk

#### Required response

Choose A/B/C/D/E/F and describe grain.

---

## Decision Area 3 - Key Strategy

Stop if the key strategy is unclear.

### HALT - Key Strategy

#### Options

A. Preserve source primary key only
B. Use natural business key
C. Use composite key
D. Generate surrogate/canonical key
E. Use hash key from stable business attributes
F. Use mapping/crosswalk key
G. No stable key; treat as event/observation with generated row ID
H. Unknown — keep as Risk

#### Required response

Choose A/B/C/D/E/F/G/H.

---

## Decision Area 4 - Source of Truth and Reconciliation

Stop if multiple sources provide conflicting values for the same concept.

### HALT - Source of Truth and Reconciliation

#### Why this matters

Conformed Silver data must declare which source wins or whether definitions remain separate.

#### Options

A. One authoritative source wins
B. Source priority order by attribute
C. Most recent value wins
D. Merge using business survivorship rules
E. Keep separate source-specific Silver datasets
F. Flag conflicts and require manual resolution
G. Defer conformance to later release

#### Required response

Choose A/B/C/D/E/F/G.

---

## Decision Area 5 - Deduplication and Survivorship

Stop if duplicate records or multiple versions exist and the rule is unclear.

### HALT - Deduplication and Survivorship

#### Options

A. Exact duplicate removal by record hash
B. Deduplicate by business key and latest source update time
C. Deduplicate by source key and ingestion time
D. Keep all versions and mark current record
E. Keep all records and defer deduplication to Gold/use case
F. Manual review for conflicts
G. Custom rule

#### Required response

Choose A/B/C/D/E/F/G.

---

## Decision Area 6 - Conformance and Standardization

Stop if standardization/conformance rules are unclear.

### HALT - Conformance and Standardization

#### Why this matters

Gold and semantic design need reusable trusted entities/events with consistent names, meanings, values, and classifications.

#### Options

A. Canonical naming and field standardization
B. Source-specific names retained with canonical aliases
C. Standardize only P1 attributes
D. Keep source-aligned Silver as interim
E. Use mapping/reference tables
F. Defer conformance to later release
G. Custom rule

#### Required response

Choose A/B/C/D/E/F/G.

---

## Decision Area 7 - Timezone and Temporal Normalization

Stop if time meaning or timezone normalization is unclear.

### HALT - Timezone and Temporal Normalization

#### Options

A. Convert timestamps to UTC and retain source timezone
B. Keep source timestamp and add normalized UTC field
C. Use business local date/calendar in addition to timestamp
D. Keep source time unchanged due to legal/business meaning
E. Unknown — keep temporal fields Draft/Risk
F. Custom rule

#### Required response

Choose A/B/C/D/E/F.

---

## Decision Area 8 - Unit and Currency Normalization

Stop if units, measurement systems, or currency conversions are unclear.

### HALT - Unit and Currency Normalization

#### Options

A. Normalize to one canonical unit/currency
B. Keep source unit and add normalized value
C. Keep source values only and defer normalization
D. Normalize only for selected P1 attributes
E. Unknown — keep as Risk
F. Custom rule

#### Required response

Choose A/B/C/D/E/F.

---

## Decision Area 9 - Code Status and Category Mapping

Stop if source codes/statuses/categories need canonical mapping.

### HALT - Code Status and Category Mapping

#### Options

A. Use canonical mapping table
B. Preserve source codes and add canonical category
C. Keep source-specific codes only
D. Map only P1 categories now
E. Unknown codes go to quarantine
F. Unknown codes are flagged but retained
G. Defer mapping to later phase

#### Required response

Choose A/B/C/D/E/F/G.

---

## Decision Area 10 - Null and Missing Value Handling

Stop if missing value behavior is unclear.

### HALT - Null and Missing Value Handling

#### Why this matters

Different missing values can mean unknown, not applicable, not collected, redacted, zero, or error.

#### Options

A. Preserve nulls and add missing_reason if known
B. Impute/default selected fields with explicit rule
C. Reject/quarantine records missing required fields
D. Flag missing values for downstream quality rules
E. Keep source-specific missing encodings
F. Custom rule

#### Required response

Choose A/B/C/D/E/F.

---

## Decision Area 11 - Schema Evolution Handling

Stop if Silver response to Bronze/source schema evolution is unclear.

### HALT - Schema Evolution Handling

#### Options

A. Allow additive fields with explicit mapping review
B. Block Silver on breaking schema changes
C. Quarantine records with unexpected required schema
D. Use schema version-specific transforms
E. Store unmapped fields in extension/rescued structure
F. Manual review required for all changes
G. Custom policy

#### Required response

Choose A/B/C/D/E/F/G.

---

## Decision Area 12 - Silver Boundary Data Quality Rules

Stop if Silver quality rules are unclear.

### HALT - Silver Boundary Data Quality Rules

#### Options

A. Required key fields not null
B. Valid timestamp/date fields
C. Valid domain/status/category mapping
D. Valid numeric range/unit normalization
E. Referential integrity to required reference datasets
F. Uniqueness at declared grain
G. Source-specific validity rules
H. Completeness/freshness checks
I. Custom rule set

#### Required response

Choose all applicable rule types and severity.

---

## Decision Area 13 - Rejected and Quarantined Record Handling

Stop if invalid record handling is unclear.

### HALT - Rejected and Quarantined Record Handling

#### Options

A. Reject invalid records to Silver quarantine with error reason
B. Flag invalid records but retain in Silver with status
C. Keep invalid records only in Bronze quarantine
D. Split valid/invalid records into separate datasets
E. Manual review queue
F. Custom policy

#### Required response

Choose A/B/C/D/E/F.

---

## Decision Area 14 - Sensitive Data Handling

Stop if Silver contains sensitive, regulated, confidential, or personal data.

### HALT - Sensitive Data Handling

#### Options

A. Retain sensitive fields with restricted access
B. Mask/tokenize sensitive fields
C. Hash/pseudonymize identifiers
D. Drop sensitive fields after Bronze retention
E. Split sensitive attributes into restricted dataset
F. Governance/security review required
G. Not applicable

#### Required response

Choose A/B/C/D/E/F/G.

---

## Decision Area 15 - Lineage and Traceability

Stop if Silver records cannot trace back to Bronze/source evidence.

### HALT - Lineage and Traceability

#### Required fields

* source_system;
* source_object;
* source_record_id or source file/message/batch reference;
* bronze_dataset;
* bronze_ingestion_time;
* ingestion_run_id;
* transformation_run_id, if applicable;
* record_hash or source_hash where useful.

#### Options

A. Approve recommended lineage fields
B. Add project-specific lineage fields
C. Reduce lineage fields for MVP
D. Keep lineage decision Draft/Risk

#### Required response

Choose A/B/C/D.

---

## Decision Area 16 - Metadata Inheritance From Bronze

Stop if it is unclear which Bronze metadata should remain in Silver.

### HALT - Metadata Inheritance From Bronze

#### Why this matters

Silver should not carry every Bronze technical field blindly, but it must retain enough lineage to debug and trace results.

#### Options

A. Preserve minimum source/run lineage metadata only
B. Preserve source/run/window/file metadata needed for debugging
C. Preserve full Bronze metadata for P1 datasets
D. Reduce metadata aggressively for simplicity
E. Split lineage metadata into companion audit table
F. Custom policy

#### Recommendation

Choose B for most analytical products.
Choose C when audit/replay requirements are strong.

#### Required response

Choose A/B/C/D/E/F.

---

## Decision Area 17 - Refresh and Incremental Behavior

Stop if Silver update behavior is unclear.

### HALT - Refresh and Incremental Behavior

#### Options

A. Full rebuild from Bronze
B. Incremental append
C. Incremental merge/upsert
D. Windowed reprocessing
E. SCD Type 1 current-state update
F. SCD Type 2 history tracking
G. Hybrid behavior by dataset
H. Unknown — keep Draft/Risk

#### Required response

Choose A/B/C/D/E/F/G/H.

---

## Completion Criteria

This step is complete when:

* Silver scope and principles are defined;
* each P1 Bronze dataset maps to a Silver dataset or is deferred with reason;
* each P1 Silver dataset has domain alignment, grain, key strategy, lineage, and status;
* conceptual-to-logical mapping is drafted;
* conformance and normalization rules are documented;
* deduplication and survivorship rules are documented where needed;
* quality rules are documented;
* rejection/quarantine policy is documented;
* sensitive data handling is documented;
* metadata inheritance is documented;
* refresh/incremental behavior is documented;
* evidence mapping is prepared;
* required support work is identified;
* risks and assumptions are explicit;
* draft Silver specification content is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
