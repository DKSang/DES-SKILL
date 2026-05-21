# Step 02 — Transformation Logic and Dependencies

## Goal

Define transformation inventory, dependencies, input/output mapping, transformation grain, business logic, conformance logic, aggregation logic, incremental strategy, backfill/replay behavior, error handling, validation expectations, contract alignment, lineage, security, and implementation boundaries.

## Required Inputs

- Confirmed context from Step 01
- Bronze Layer Specification
- Silver Layer Specification
- Gold Layer Specification
- Data Contract Specification
- Requirements and KPI Catalog
- Architecture Decision Record
- User answers from HALT points
- Existing transformation notes, SQL prototypes, dbt models, notebooks, mapping docs, or rules if available

## Actions

1. Define transformation scope and non-scope.
2. Define transformation design principles.
3. Create transformation inventory.
4. Map layer-to-layer transformations:
   - Bronze → Silver;
   - Silver → Gold;
   - Gold → serving-ready outputs, if applicable at design level.
5. Define dependency graph.
6. Define input and output dataset mapping.
7. Define transformation grain.
8. Define business rules.
9. Define cleaning and conformance rules.
10. Define join and relationship rules.
11. Define deduplication and survivorship rules.
12. Define SCD and history handling.
13. Define aggregation and metric calculation rules.
14. Define incremental processing strategy.
15. Define backfill and replay strategy.
16. Define late-arriving and corrected data handling.
17. Define error handling and quarantine behavior.
18. Define validation and test expectations.
19. Define contract alignment.
20. Define lineage and metadata expectations.
21. Define performance and cost considerations.
22. Define security and privacy handling.
23. Define implementation boundary.
24. Use HALT checkpoints for unresolved decisions.

## Hints

- Transformation design is logic design, not code.
- Each transformation should have a stable purpose.
- Keep Bronze → Silver logic focused on cleaning, conformance, identity, and validation.
- Keep Silver → Gold logic focused on consumer-ready shaping, aggregation, metric-ready outputs, and product outputs.
- Do not mix unrelated output grains in one transformation.
- Do not join datasets without approved relationship and grain.
- Do not aggregate before deduplication and grain are clear.
- Prefer small composable transformations over one monolithic transformation.
- Transformation dependency graph should be understandable before orchestration design.
- Contract alignment should show which contract clauses are satisfied by which transformation output.
- If transformation cannot validate an important contract expectation, mark it as risk for Phase 14/15/21.

## Transformation Types

Classify each transformation as one or more:

| Type | Description |
| --- | --- |
| Cleaning | Type casting, null handling, basic validity handling |
| Standardization | Timezone, unit, currency, code/status/category normalization |
| Conformance | Aligning concepts across sources or to canonical definitions |
| Deduplication | Removing or flagging duplicates according to approved rule |
| Identity resolution | Mapping source identities to canonical or crosswalk identities |
| Enrichment | Adding reference, lookup, hierarchy, geospatial, or derived attributes |
| Filtering | Keeping records that satisfy approved criteria |
| SCD/history | Current/historical state handling |
| Aggregation | Rolling up records to approved grain |
| Metric calculation | Applying approved metric/KPI definitions |
| Feature engineering | Producing ML/AI feature values |
| Read model shaping | Creating API/application-serving shape |
| Validation support | Producing outputs used for quality or reconciliation |
| Audit/lineage | Creating traceability and operational evidence outputs |

## Transformation Standard

Each transformation must define:

| Field | Required? |
| --- | --- |
| Transformation ID | Required |
| Name | Required |
| Type | Required |
| Input datasets | Required |
| Output dataset | Required |
| Output grain | Required |
| Purpose | Required |
| Rules applied | Required |
| Dependency order | Required |
| Incremental behavior | Required |
| Validation expectation | Required |
| Contract alignment | Required for contracted outputs |
| Lineage fields | Required |
| Status | Required |

Allowed statuses:

```text
Draft | Approved | Risk | Blocked | Deferred
```

## HALT - Input and Output Mapping

Stop if a transformation does not have clear input and output datasets.

### Why this matters

Unclear mapping causes untraceable pipelines, duplicate logic, and broken orchestration.

### Decision needed

Approve input/output mapping for `<transformation>`.

### Options

A. Bronze → Silver
B. Silver → Gold
C. Gold → serving-ready output
D. Reference/enrichment dataset → Silver/Gold
E. Validation/audit transformation
F. Custom mapping
G. Keep Draft pending dataset clarification

### Required response

Choose A/B/C/D/E/F/G and list input/output datasets.

## HALT - Transformation Grain

Stop if output grain is unclear.

### Why this matters

Transformation grain determines correctness of joins, deduplication, aggregation, quality checks, and contracts.

### Decision needed

Approve output grain for `<transformation>`.

### Options

A. Same grain as input
B. One row per entity
C. One row per event
D. One row per entity per time period
E. One row per dimension combination per time period
F. One row per snapshot/as-of date
G. One row per feature entity-period
H. Custom grain
I. Unknown — keep Draft/Risk

### Required response

Choose A/B/C/D/E/F/G/H/I and describe grain.

## HALT - Business Rule Ambiguity

Stop if a transformation rule is vague or has multiple meanings.

### Trigger examples

* “active customer”
* “valid order”
* “completed transaction”
* “latest record”
* “current status”
* “business day”
* “eligible user”
* “trusted event”

### Decision needed

Approve the business rule.

### Options

A. Use approved domain/KPI/contract definition
B. Define rule now with owner approval
C. Keep multiple named definitions
D. Mark rule Draft and defer implementation
E. Route back to upstream phase that owns the definition

### Required response

Choose A/B/C/D/E and provide definition if approving.

## HALT - Join and Relationship Rule

Stop if a transformation joins datasets but relationship or cardinality is unclear.

### Why this matters

Incorrect joins cause duplication, metric inflation, missing records, and broken contracts.

### Decision needed

Approve join rule.

### Required fields

* left dataset;
* right dataset;
* join keys;
* relationship cardinality;
* join type;
* expected unmatched handling;
* duplicate handling.

### Options

A. Inner join with required match
B. Left join preserving primary dataset
C. Full outer reconciliation join
D. Many-to-many bridge required
E. Temporal/as-of join
F. Fuzzy or identity-resolution join
G. Custom join rule
H. Keep Draft/Risk

### Required response

Choose A/B/C/D/E/F/G/H and specify keys/cardinality.

## HALT - Metric and Aggregation Rule

Stop if aggregation or metric calculation is unclear or conflicts with Phase 3/11.

### Decision needed

Approve aggregation/metric rule.

### Options

A. Use approved Phase 3 KPI formula
B. Use approved Phase 11 Gold aggregation rule
C. Revise upstream KPI/Gold definition first
D. Keep metric output as Draft/Risk
E. Exclude metric from transformation scope
F. Custom approved rule

### Required response

Choose A/B/C/D/E/F.

## HALT - Deduplication and Survivorship Rule

Stop if duplicates or multiple versions exist and the rule is unclear.

### Decision needed

Approve deduplication/survivorship behavior.

### Options

A. Exact duplicate removal by hash
B. Latest source update timestamp wins
C. Latest ingestion timestamp wins
D. Source priority wins
E. Keep all versions and flag current
F. Manual exception handling
G. No deduplication in this transformation
H. Custom rule

### Required response

Choose A/B/C/D/E/F/G/H.

## HALT - SCD and History Behavior

Stop if state/history behavior affects downstream correctness.

### Decision needed

Approve history handling.

### Options

A. Current-state overwrite
B. SCD Type 1
C. SCD Type 2 with valid_from/valid_to/current flag
D. Periodic snapshot
E. Immutable event history
F. Recompute affected windows
G. Keep history handling out of scope
H. Custom behavior

### Required response

Choose A/B/C/D/E/F/G/H.

## HALT - Incremental Processing Strategy

Stop if transformation incremental behavior is unclear.

### Why this matters

Incremental transformations can miss data, duplicate data, or corrupt aggregates if the strategy is wrong.

### Decision needed

Approve incremental processing strategy.

### Options

A. Full refresh
B. Incremental append
C. Incremental merge/upsert
D. Incremental by partition/window overwrite
E. CDC-driven transformation
F. Snapshot comparison
G. Stream/message offset processing
H. Manual/on-demand refresh
I. Custom strategy
J. Unknown — keep Draft/Risk

### Required response

Choose A/B/C/D/E/F/G/H/I/J.

## HALT - Backfill and Replay Strategy

Stop if historical recomputation behavior is unclear.

### Decision needed

Approve backfill/replay behavior.

### Options

A. Full rebuild from Bronze/Silver
B. Backfill by date/time window
C. Backfill by partition list
D. Replay from immutable raw/Bronze archive
E. Recompute only affected Gold windows
F. Manual backfill procedure
G. No backfill support for MVP
H. Custom behavior

### Required response

Choose A/B/C/D/E/F/G/H.

## HALT - Late-Arriving and Corrected Data

Stop if late or corrected records can affect output correctness.

### Decision needed

Approve late/corrected data handling.

### Options

A. Not relevant
B. Reprocess affected partitions/windows
C. Use watermark and allowed lateness threshold
D. Store corrections and apply in next refresh
E. Keep correction history and mark current
F. Quarantine late/corrected records for review
G. Custom behavior

### Required response

Choose A/B/C/D/E/F/G.

## HALT - Error Handling and Quarantine

Stop if invalid transformation outputs or failed rules have no handling policy.

### Decision needed

Approve error handling.

### Options

A. Fail transformation and block downstream publish
B. Quarantine invalid records with reason
C. Flag invalid records but publish valid subset
D. Continue with warning for non-blocking issues
E. Route to manual review queue
F. Roll back to previous successful output
G. Custom behavior

### Required response

Choose one or more options and define severity.

## HALT - Validation and Test Expectations

Stop if the transformation has no validation expectation.

### Decision needed

What must be validated?

### Options

A. Schema validation
B. Row count reconciliation
C. Grain uniqueness
D. Required fields not null
E. Referential integrity
F. Metric reconciliation
G. Freshness validation
H. Contract validation
I. Lineage metadata validation
J. Consumer acceptance validation
K. Custom validation

### Required response

Choose all applicable validation types and severity.

## HALT - Contract Alignment

Stop if a transformation output must satisfy a contract but the mapping is unclear.

### Decision needed

How does this transformation satisfy contract requirements?

### Required fields

* contract ID;
* output dataset;
* schema expectation;
* grain expectation;
* freshness expectation;
* quality expectation;
* lineage expectation;
* access/security expectation.

### Options

A. Transformation satisfies contract as designed
B. Transformation partially satisfies contract; Phase 14/15/21 must cover remaining checks
C. Contract and transformation conflict; route back to Phase 12
D. Output not contracted
E. Keep Draft/Risk

### Required response

Choose A/B/C/D/E.

## Completion Criteria

This step is complete when:

* transformation scope and principles are defined;
* transformation inventory is created;
* each P1 contracted output has a transformation path;
* each transformation has input/output mapping, output grain, rules, dependencies, incremental behavior, validation expectation, lineage, and status;
* metric and aggregation logic align with approved KPI/Gold specs;
* contract alignment is documented;
* risks and assumptions are explicit;
* draft transformation specification content is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
