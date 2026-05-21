# Checklist — Silver Layer Design

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
- [ ] P1 Bronze datasets are identified.
- [ ] Domain entities/events are considered.
- [ ] Source-of-truth and identity decisions are considered.
- [ ] Security/privacy classification is considered.

## Silver Dataset Quality

- [ ] Each P1 Bronze dataset maps to a Silver dataset or is explicitly deferred.
- [ ] Each P1 Silver dataset has a dataset name.
- [ ] Each P1 Silver dataset has domain alignment.
- [ ] Each P1 Silver dataset has a declared grain.
- [ ] Each P1 Silver dataset has an identity rule.
- [ ] Each P1 Silver dataset has a key strategy.
- [ ] Bronze inputs are documented.
- [ ] Conceptual-to-logical mapping is documented.
- [ ] Deduplication/survivorship rules are documented where relevant.
- [ ] Conformance and standardization rules are documented.
- [ ] Data type normalization is documented where relevant.
- [ ] Timezone/temporal normalization is documented where relevant.
- [ ] Unit/currency normalization is documented where relevant.
- [ ] Code/status/category mapping is documented where relevant.
- [ ] Null/missing value handling is documented.
- [ ] Schema evolution handling is documented.
- [ ] Cross-source reconciliation is documented where relevant.
- [ ] Silver boundary data quality rules are documented.
- [ ] Rejected/quarantined record handling is documented.
- [ ] Privacy/security handling is documented.
- [ ] Lineage and traceability fields are documented.
- [ ] Refresh/incremental behavior is documented.

## Boundary and Reuse

- [ ] Silver does not contain final consumer-specific Gold marts.
- [ ] Silver does not define final semantic metrics unless they are reusable lower-level facts with approved grain.
- [ ] Silver preserves traceability to Bronze/source.
- [ ] Ambiguous entities or mappings are marked Draft/Risk/Blocked.
- [ ] Records are not silently dropped.
- [ ] Assumptions are explicitly marked.
- [ ] Risks are documented.
- [ ] Open questions are documented.

## Guardrails

- [ ] The artifact does not design detailed Gold tables.
- [ ] The artifact does not create final dashboard/API/application outputs.
- [ ] The artifact does not create full data contracts.
- [ ] The artifact does not design semantic model internals.
- [ ] The artifact does not include transformation code.
- [ ] Source conflicts are not silently resolved.
- [ ] Canonical keys are not invented without identity rules.
- [ ] Business-level mappings are not invented without approval.

## HALT Validation

- [ ] Missing Bronze context HALT resolved or artifact remains Draft.
- [ ] Silver dataset boundary HALT resolved or artifact remains Draft.
- [ ] Domain alignment HALT resolved or dataset remains Draft/Risk.
- [ ] Grain/identity HALT resolved or dataset remains Draft/Risk.
- [ ] Key strategy HALT resolved or dataset remains Draft/Risk.
- [ ] Source-of-truth/reconciliation HALT resolved or dataset remains Draft/Risk.
- [ ] Deduplication/survivorship HALT resolved or dataset remains Draft/Risk.
- [ ] Timezone/temporal HALT resolved or dataset remains Draft/Risk.
- [ ] Unit/currency HALT resolved or dataset remains Draft/Risk.
- [ ] Code/status/category HALT resolved or dataset remains Draft/Risk.
- [ ] Null/missing handling HALT resolved or dataset remains Draft/Risk.
- [ ] Silver quality rules HALT resolved or dataset remains Draft/Risk.
- [ ] Sensitive data handling HALT resolved or dataset remains Blocked/Needs Review.
- [ ] Lineage/traceability HALT resolved or dataset remains Draft/Risk.
- [ ] Silver design checklist blocked HALT resolved.

## Result

Choose one:

- [ ] Passed
- [ ] Passed with risks
- [ ] Blocked

## Notes

```text
<checklist notes>
```
