# Provero Data Contracts vs DES Data Contracts

## Key Distinction

```text
Provero contract = executable validation spec.
DES Data Contract = full producer-consumer agreement.
```

## Provero Contract Covers

* schema;
* column types;
* column checks;
* freshness SLA;
* completeness SLA;
* availability;
* violation behavior.

## DES Contract Also Covers

* business meaning;
* grain;
* producer;
* consumer;
* ownership;
* access/security;
* lineage;
* versioning;
* change/deprecation policy;
* incident policy.

## Rule

A passing Provero contract supports Phase 12 evidence, but does not by itself complete Phase 12.

Phase 12 is Done only when the DES Data Contract artifact is complete and Provero validation evidence is attached or waived.
