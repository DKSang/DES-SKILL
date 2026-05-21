# Checklist — Data Source Assessment

## Required Context

- [ ] Phase 1 Business Discovery artifact exists or Draft continuation is explicitly accepted.
- [ ] Phase 2 Business Question Catalog exists or Draft continuation is explicitly accepted.
- [ ] Phase 3 Requirements and KPI Catalog exists or Draft continuation is explicitly accepted.
- [ ] Phase 4 Data Product Specification exists or Draft continuation is explicitly accepted.
- [ ] P1 product outputs are identified.
- [ ] P1 requirements and KPIs are considered.
- [ ] Candidate sources are identified or source discovery is explicitly blocked.

## Source Inventory Quality

- [ ] Each candidate source has a source ID and description.
- [ ] Each P1 product output maps to at least one candidate source or is marked blocked.
- [ ] Source type is classified.
- [ ] Source generation/update pattern is documented.
- [ ] Source owner/contact is documented or marked unknown.
- [ ] Access method and permission status are documented.
- [ ] Data format and schema availability are documented.
- [ ] Update frequency and freshness are documented.
- [ ] Volume and growth are documented or marked unknown.
- [ ] History and retention are documented or marked unknown.
- [ ] Source reliability/availability is documented or marked unknown.

## Source of Truth and Fit

- [ ] Source-to-product mapping is documented.
- [ ] Source-to-requirement/KPI mapping is documented.
- [ ] Source of truth decisions are documented where multiple sources overlap.
- [ ] Source conflicts are documented.
- [ ] Ingestion feasibility rating is assigned for each source.
- [ ] Blocked or deferred sources are clearly marked.

## Risk, Security, and Governance

- [ ] Known quality issues are documented.
- [ ] Schema change behavior is documented or marked unknown.
- [ ] Sensitive data classification is documented or marked unknown.
- [ ] Compliance/regulatory concerns are documented where relevant.
- [ ] Cost, licensing, API quota, export, or usage limits are documented.
- [ ] Operational dependencies are documented.
- [ ] Contract/SLA expectations are documented.
- [ ] Assumptions are explicitly marked.
- [ ] Open questions are documented.

## Guardrails

- [ ] The artifact does not design ingestion pipelines.
- [ ] The artifact does not design Bronze/Silver/Gold schemas.
- [ ] The artifact does not create full data contracts.
- [ ] The artifact does not design orchestration.
- [ ] The artifact does not include implementation code.
- [ ] Source availability is not treated as source suitability.
- [ ] Source authority is not assumed without evidence.

## HALT Validation

- [ ] Missing upstream product context HALT resolved or artifact remains Draft.
- [ ] No candidate sources HALT resolved or artifact remains Draft/Blocked.
- [ ] Source owner HALT resolved or source remains Risk/Blocked.
- [ ] Source of truth HALT resolved or decision remains Open.
- [ ] Access permission HALT resolved or source remains Risk/Blocked.
- [ ] Sensitive data classification HALT resolved or source remains Needs Review.
- [ ] Freshness/reliability HALT resolved or source remains Risk/Unknown.
- [ ] Source quality unknown HALT resolved or source remains Risk/Unknown.
- [ ] Schema change behavior HALT resolved or source remains Risk/Unknown.
- [ ] Cost/license/usage limit HALT resolved or source remains Risk/Blocked.

## Result

Choose one:

- [ ] Passed
- [ ] Passed with risks
- [ ] Blocked

## Notes

```text
<checklist notes>
```
