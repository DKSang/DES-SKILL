# Checklist — Transformation Design

## Required Context

- [ ] Phase 1 Business Discovery brief exists or Draft continuation is explicitly accepted.
- [ ] Phase 2 Business Question Catalog exists or Draft continuation is explicitly accepted.
- [ ] Phase 3 Requirements and KPI Catalog exists or Draft continuation is explicitly accepted.
- [ ] Phase 4 Data Product Specification exists or Draft continuation is explicitly accepted.
- [ ] Phase 5 Data Source Inventory exists or Draft continuation is explicitly accepted.
- [ ] Phase 6 Conceptual Domain Model exists or Draft continuation is explicitly accepted.
- [ ] Phase 7 Architecture Decision Record exists or Draft continuation is explicitly accepted.
- [ ] Phase 8 Ingestion Specification exists or Draft continuation is explicitly accepted.
- [ ] Phase 9 Bronze Layer Specification exists or Draft continuation is explicitly accepted.
- [ ] Phase 10 Silver Layer Specification exists or Draft continuation is explicitly accepted.
- [ ] Phase 11 Gold Layer Specification exists or Draft continuation is explicitly accepted.
- [ ] Phase 12 Data Contract Specification exists or Draft continuation is explicitly accepted.
- [ ] P1 contracted outputs and transformation paths are identified.
- [ ] Conformance, aggregation, and quality expectations are considered.

## Transformation Scope and Inventory

- [ ] Transformation scope and non-scope are defined.
- [ ] Transformation design principles are defined.
- [ ] Transformation inventory is created with type and status.
- [ ] Every P1 contracted output has a documented transformation path.

## Transformation Specifications

- [ ] Each transformation has a stable purpose.
- [ ] Input and output dataset mapping is defined.
- [ ] Transformation output grain is explicitly defined.
- [ ] Business rules are documented and named (Rule IDs).
- [ ] Cleaning and conformance rules are defined with failure handling.
- [ ] Join and relationship rules specify cardinality, keys, and unmatched handling.
- [ ] Deduplication and survivorship rules are defined.
- [ ] SCD and history handling is defined.
- [ ] Aggregation and metric calculation rules are defined.

## Operational and Lifecycle Strategy

- [ ] Incremental processing strategy and change detection keys are defined.
- [ ] Backfill and replay strategy is documented.
- [ ] Late-arriving and corrected data handling is defined.
- [ ] Error handling and quarantine behavior is defined.
- [ ] Validation and test expectations are documented.
- [ ] Contract alignment shows how contract clauses are satisfied.
- [ ] Lineage and metadata expectations are documented.
- [ ] Performance and cost considerations are documented.
- [ ] Security and privacy handling is documented.
- [ ] Implementation boundary preferences are clarified.

## Guardrails

- [ ] The artifact does not include transformation SQL/Python/dbt/notebook code.
- [ ] The artifact does not include orchestration pipeline code.
- [ ] The artifact does not define metric logic that conflicts with Phase 3 or Phase 11.
- [ ] The artifact does not join datasets without approved grain and relationship rules.
- [ ] The artifact does not ignore contract expectations.

## HALT Validation

- [ ] Missing Gold/Contract context HALT resolved or artifact remains Draft.
- [ ] Transformation scope HALT resolved or artifact remains Draft.
- [ ] Input and output mapping HALT resolved or artifact remains Draft.
- [ ] Transformation grain HALT resolved or artifact remains Draft.
- [ ] Business rule ambiguity HALT resolved or artifact remains Draft.
- [ ] Join and relationship rule HALT resolved or artifact remains Draft.
- [ ] Metric and aggregation rule HALT resolved or artifact remains Draft.
- [ ] Deduplication and survivorship rule HALT resolved or artifact remains Draft.
- [ ] SCD and history behavior HALT resolved or artifact remains Draft.
- [ ] Incremental processing strategy HALT resolved or artifact remains Draft.
- [ ] Backfill and replay strategy HALT resolved or artifact remains Draft.
- [ ] Late-arriving and corrected data HALT resolved or artifact remains Draft.
- [ ] Error handling and quarantine HALT resolved or artifact remains Draft.
- [ ] Validation and test expectations HALT resolved or artifact remains Draft.
- [ ] Contract alignment HALT resolved or artifact remains Draft.
- [ ] Checklist blocked HALT resolved.

## Result

Choose one:

- [ ] Passed
- [ ] Passed with risks
- [ ] Blocked

## Notes

```text
<checklist notes>
```
