# Checklist — Data Quality Design

## Required Context

- [ ] Phase 1 Business Discovery artifact exists or Draft continuation is explicitly accepted.
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
- [ ] Phase 13 Transformation Specification exists or Draft continuation is explicitly accepted.
- [ ] P1 contracted outputs are identified.
- [ ] Transformation validation expectations are considered.
- [ ] Contract quality expectations are considered.

## Quality Coverage

- [ ] Quality scope is defined.
- [ ] Quality design principles are defined.
- [ ] Quality dimensions are selected.
- [ ] Quality rule inventory is created.
- [ ] Dataset-to-rule mapping is documented.
- [ ] Layer-specific quality rules are documented.
- [ ] Contract quality alignment is documented.
- [ ] Transformation validation alignment is documented.
- [ ] P1 contracted outputs have quality rules.
- [ ] P1 freshness/SLA rules are documented.
- [ ] P1 grain/uniqueness rules are documented where relevant.
- [ ] Metric reconciliation rules are documented where required.

## Rule Quality

- [ ] Each rule has a rule ID.
- [ ] Each rule has dataset/output.
- [ ] Each rule has layer.
- [ ] Each rule has quality dimension.
- [ ] Each rule has description.
- [ ] Each rule has threshold/condition or is marked Draft.
- [ ] Each rule has severity.
- [ ] Each rule has failure handling.
- [ ] Each P1 rule has owner/steward or is marked Risk.
- [ ] Each rule has evidence expectation.
- [ ] Rule status is documented.

## Gates and Operations

- [ ] Blocking rules are explicitly approved or marked Draft.
- [ ] Warning rules do not silently block publish.
- [ ] Failure behavior is documented.
- [ ] Quality gates are documented.
- [ ] Evidence/reporting expectations are documented.
- [ ] Consumer acceptance quality is documented where relevant.
- [ ] Risks are documented.
- [ ] Assumptions are explicitly marked.
- [ ] Open questions are documented.

## Guardrails

- [ ] The artifact does not include SQL/Python/dbt/Great Expectations implementation code.
- [ ] The artifact does not implement orchestration workflows.
- [ ] The artifact does not implement CI/CD.
- [ ] The artifact does not implement dashboards or monitoring UI.
- [ ] Quality is not reduced to null checks only.
- [ ] Thresholds are not invented without evidence or approval.
- [ ] Contract expectations are not ignored.
- [ ] Owners are not assumed silently.
- [ ] Every P1 quality failure has expected action.

## HALT Validation

- [ ] Missing transformation context HALT resolved or artifact remains Draft.
- [ ] Quality scope HALT resolved or artifact remains Draft.
- [ ] Quality required outputs HALT resolved or artifact remains Draft.
- [ ] Quality threshold HALT resolved or rule remains Draft.
- [ ] Severity HALT resolved or rule remains Draft.
- [ ] Blocking/warning behavior HALT resolved or rule remains Draft.
- [ ] Freshness SLA HALT resolved or rule remains Draft/Risk.
- [ ] Metric reconciliation tolerance HALT resolved or rule remains Draft/Risk.
- [ ] Quality owner HALT resolved or rule remains Draft/Risk.
- [ ] Failure handling HALT resolved or rule remains Draft.
- [ ] Evidence/reporting HALT resolved or rule remains Draft.
- [ ] Consumer acceptance quality HALT resolved or marked not applicable.

## Result

Choose one:

- [ ] Passed
- [ ] Passed with risks
- [ ] Blocked

## Notes

```text
<checklist notes>
```
