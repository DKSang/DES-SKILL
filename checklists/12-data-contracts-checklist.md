# Checklist — Data Contracts

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
- [ ] P1 Gold outputs are identified.
- [ ] Contract expectations from Phase 11 are considered.
- [ ] Consumers and serving paths are considered.

## Contract Coverage

- [ ] Outputs requiring contracts are identified.
- [ ] Contract scope is defined.
- [ ] Contract level is assigned.
- [ ] P1 system-facing, production, external, ML-serving, or shared semantic outputs have appropriate contracts or documented deferral.
- [ ] Exploratory outputs are not over-governed unless risk requires it.

## Contract Quality

- [ ] Each contract has a contract ID.
- [ ] Each contract has a dataset/output name.
- [ ] Each contract has producer and consumer.
- [ ] Each contract has owner or approver.
- [ ] Each contract has business meaning.
- [ ] Each contract has grain.
- [ ] Each contract has schema expectations.
- [ ] Field-level expectations are documented at the required contract level.
- [ ] Metric/KPI expectations align with Phase 3.
- [ ] Freshness/SLA expectations are documented.
- [ ] Quality expectations are documented.
- [ ] Volume/completeness expectations are documented where relevant.
- [ ] Security/access expectations are documented.
- [ ] Lineage/metadata expectations are documented.
- [ ] Compatibility/versioning policy is documented.
- [ ] Change management policy is documented.
- [ ] Deprecation policy is documented where relevant.
- [ ] Incident/escalation policy is documented for Standard+ contracts.
- [ ] Acceptance/validation criteria are documented.

## Governance and Risk

- [ ] Contract ownership and approval status are documented.
- [ ] Breaking changes are defined.
- [ ] Consumer notification expectation is documented where relevant.
- [ ] Access/security risks are not hidden.
- [ ] Metric conflicts are not hidden.
- [ ] Assumptions are explicitly marked.
- [ ] Risks are documented.
- [ ] Open questions are documented.

## Guardrails

- [ ] The artifact does not include transformation code.
- [ ] The artifact does not implement data quality tests.
- [ ] The artifact does not implement orchestration or CI/CD.
- [ ] The artifact does not implement dashboard/API logic.
- [ ] The artifact does not treat contract as schema only.
- [ ] Contract approval is not assumed without owner/consumer evidence.
- [ ] Full contracts are not created for every dataset without need.

## HALT Validation

- [ ] Missing Gold context HALT resolved or artifact remains Draft.
- [ ] Contract required outputs HALT resolved or artifact remains Draft.
- [ ] Contract level HALT resolved or contract remains Draft.
- [ ] Producer/consumer/owner HALT resolved or contract remains Draft/Risk.
- [ ] Schema expectation HALT resolved or contract remains Draft.
- [ ] Grain expectation HALT resolved or contract remains Draft/Risk.
- [ ] Metric/KPI alignment HALT resolved or contract remains Draft/Risk.
- [ ] Freshness/SLA HALT resolved or contract remains Draft/Risk.
- [ ] Quality thresholds HALT resolved or contract remains Draft/Risk.
- [ ] Security/access HALT resolved or contract remains Draft/Blocked.
- [ ] Lineage/metadata HALT resolved or contract remains Draft/Risk.
- [ ] Compatibility/versioning HALT resolved or contract remains Draft.
- [ ] Change management HALT resolved or contract remains Draft.
- [ ] Incident/escalation HALT resolved or contract remains Draft/Risk.
- [ ] Acceptance/validation HALT resolved or contract remains Draft.
- [ ] Data contracts checklist blocked HALT resolved.

## Result

Choose one:

- [ ] Passed
- [ ] Passed with risks
- [ ] Blocked

## Notes

```text
<checklist notes>
```
