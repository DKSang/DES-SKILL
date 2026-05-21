# Checklist — Gold Layer Design

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
- [ ] P1 business questions are identified.
- [ ] P1 product outputs are identified.
- [ ] KPI/metric definitions are considered.
- [ ] Silver datasets are identified.
- [ ] Serving direction is considered.

## Gold Dataset Quality

- [ ] Each P1 business question maps to a Gold output or is explicitly deferred.
- [ ] Each P1 product output maps to a Gold dataset or is explicitly deferred.
- [ ] Each P1 Gold dataset has a dataset name.
- [ ] Each P1 Gold dataset has a consumer.
- [ ] Each P1 Gold dataset has a serving direction.
- [ ] Each P1 Gold dataset has Silver input datasets.
- [ ] Each P1 Gold dataset has a declared grain.
- [ ] Each P1 Gold dataset has an output type/model pattern.
- [ ] Aggregation rules are documented where relevant.
- [ ] Metric/KPI definitions align with Phase 3.
- [ ] Required filters/slices are documented.
- [ ] History/SCD behavior is documented where relevant.
- [ ] Freshness/SLA is documented for P1 outputs.
- [ ] Gold boundary quality rules are documented.
- [ ] Access/security handling is documented.
- [ ] Contract expectation is documented.
- [ ] Lineage and traceability are documented.
- [ ] Performance/cost considerations are documented.

## Boundary and Serving Readiness

- [ ] Gold outputs are shaped for approved consumers/use cases.
- [ ] Gold outputs do not mix unrelated consumers without reason.
- [ ] Gold does not redefine KPIs inconsistently.
- [ ] Gold does not hide unresolved Silver risks.
- [ ] Gold outputs are ready to support Phase 12 contracts and Phase 16/17 serving design.
- [ ] Assumptions are explicitly marked.
- [ ] Risks are documented.
- [ ] Open questions are documented.

## Guardrails

- [ ] The artifact does not include transformation SQL/Python code.
- [ ] The artifact does not design dashboard visuals.
- [ ] The artifact does not implement API endpoints.
- [ ] The artifact does not define semantic model internals.
- [ ] The artifact does not create full data contracts.
- [ ] The artifact does not design orchestration implementation.
- [ ] Gold datasets are not created without business question/product output mapping.
- [ ] Aggregations are not defined without approved grain and metric rules.

## HALT Validation

- [ ] Missing Silver context HALT resolved or artifact remains Draft.
- [ ] Gold dataset boundary HALT resolved or artifact remains Draft.
- [ ] Business question mapping HALT resolved or dataset remains Draft.
- [ ] Consumer/serving alignment HALT resolved or dataset remains Draft.
- [ ] Metric definition alignment HALT resolved or metric remains Draft/Risk.
- [ ] Grain/aggregation HALT resolved or dataset remains Draft/Risk.
- [ ] Modeling pattern HALT resolved or dataset remains Draft.
- [ ] History/SCD behavior HALT resolved or dataset remains Draft/Risk.
- [ ] Freshness/SLA HALT resolved or dataset remains Draft.
- [ ] Gold quality rules HALT resolved or dataset remains Draft.
- [ ] Access/security HALT resolved or dataset remains Draft/Blocked.
- [ ] Contract expectation HALT resolved or deferred to Phase 12.
- [ ] Lineage/traceability HALT resolved or dataset remains Draft/Risk.
- [ ] Gold design checklist blocked HALT resolved.

## Result

Choose one:

- [ ] Passed
- [ ] Passed with risks
- [ ] Blocked

## Notes

```text
<checklist notes>
```
