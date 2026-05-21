# Checklist — Bronze Layer Design

## Required Context

- [ ] Phase 1 Business Discovery brief exists or Draft continuation is explicitly accepted.
- [ ] Phase 2 Business Question Catalog exists or Draft continuation is explicitly accepted.
- [ ] Phase 3 Requirements and KPI Catalog exists or Draft continuation is explicitly accepted.
- [ ] Phase 4 Data Product Specification exists or Draft continuation is explicitly accepted.
- [ ] Phase 5 Data Source Inventory exists or Draft continuation is explicitly accepted.
- [ ] Phase 6 Conceptual Domain Model exists or Draft continuation is explicitly accepted.
- [ ] Phase 7 Architecture Decision Record exists or Draft continuation is explicitly accepted.
- [ ] Phase 8 Ingestion Specification exists or Draft continuation is explicitly accepted.
- [ ] P1 sources and ingestion patterns are identified.
- [ ] Architecture layer/storage strategy is considered.
- [ ] Ingestion metadata expectations are considered.
- [ ] Security/privacy classification is considered.

## Bronze Dataset Quality

- [ ] Ingestion Summary is drafted.
- [ ] Ingestion Scope (In scope / Out of scope) is documented.
- [ ] Source to Bronze Mapping maps P1/P2 sources.
- [ ] Each P1 ingestion source maps to a Bronze dataset.
- [ ] Bronze dataset boundary is defined.
- [ ] Bronze dataset name is defined.
- [ ] Source ID and source object/feed are documented.
- [ ] Ingestion pattern is linked.
- [ ] Raw preservation strategy is documented.
- [ ] Storage format is documented.
- [ ] File/table organization is documented.
- [ ] Partitioning strategy is documented or marked not applicable.
- [ ] Mandatory metadata fields are documented.
- [ ] Ingestion audit metadata is documented.
- [ ] Schema drift/evolution handling is documented.
- [ ] Replay/backfill support is documented.
- [ ] Idempotency/deduplication boundary is documented.
- [ ] Quarantine/rejected data policy is documented.
- [ ] Retention/lifecycle policy is documented.
- [ ] Access control/sensitivity classification is documented.
- [ ] Bronze boundary DQ expectations are documented.
- [ ] Lineage/traceability expectations are documented.
- [ ] Operational evidence requirements are documented.

## Boundary and Governance

- [ ] Bronze does not perform business conformance.
- [ ] Business-level deduplication is deferred to Silver unless explicitly approved.
- [ ] Sensitive raw data has appropriate access policy.
- [ ] Retention policy balances replay, audit, cost, and compliance.
- [ ] Quarantine preserves source truth for bad records.

## Guardrails

- [ ] The artifact does not design detailed Silver/Gold tables.
- [ ] The artifact does not design physical database transformations.
- [ ] The artifact does not include pipeline implementation code.
- [ ] Partitioning strategy does not use high-cardinality keys.

## HALT Validation

- [ ] Missing upstream ingestion context HALT resolved or artifact remains Draft.
- [ ] Bronze dataset boundary HALT resolved.
- [ ] Raw preservation strategy HALT resolved.
- [ ] Storage format HALT resolved.
- [ ] Partitioning strategy HALT resolved.
- [ ] Mandatory metadata HALT resolved.
- [ ] Schema drift policy HALT resolved.
- [ ] Replay/backfill support HALT resolved.
- [ ] Retention policy HALT resolved.
- [ ] Sensitive raw access policy HALT resolved.
- [ ] Quarantine policy HALT resolved.
- [ ] Bronze boundary quality HALT resolved.
- [ ] Bronze design checklist blocked HALT resolved.

## Result

Choose one:

- [ ] Passed
- [ ] Passed with risks
- [ ] Blocked

## Notes

```text
<checklist notes>
```
