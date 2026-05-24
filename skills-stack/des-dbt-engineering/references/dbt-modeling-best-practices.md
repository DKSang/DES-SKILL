# dbt Modeling Best Practices for DES

## Layering

Use layers intentionally:

```text
sources
→ staging
→ intermediate
→ marts / Gold
```

## Sources

Source definitions should represent raw upstream systems.

Expected source metadata:

* source system name;
* table name;
* owner if known;
* freshness expectation if relevant;
* loaded_at field if available;
* source-level tests.

## Staging

Staging models should be source-conformed.

They may include:

* renaming;
* casting;
* simple cleaning;
* light normalization;
* source metadata preservation.

They should avoid:

* heavy business logic;
* joins across business entities;
* mart-level aggregations.

## Intermediate

Intermediate models should hold purposeful transformation logic.

Use them for:

* joins;
* deduplication;
* business rules;
* reusable derived fields;
* window functions;
* complex conformance.

## Marts / Gold

Mart models should be business-facing.

Each mart should have:

* clear grain;
* primary key;
* dimensions;
* measures;
* owner or consumer;
* documentation;
* tests;
* downstream expectation.

## Naming

Recommended pattern:

```text
stg_<source>__<entity>
int_<domain>__<purpose>
dim_<entity>
fact_<process>
mart_<domain>__<output>
```

## Grain Rule

Never write a model without being able to complete this sentence:

```text
One row in this model represents one ______.
```
