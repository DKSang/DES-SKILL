# Checklist — Serving Layer Design

## Required Context

- [ ] Phase 1 Business Discovery artifact exists or Draft continuation is explicitly accepted.
- [ ] Phase 2 Business Question Catalog exists or Draft continuation is explicitly accepted.
- [ ] Phase 3 Requirements and KPI Catalog exists or Draft continuation is explicitly accepted.
- [ ] Phase 4 Data Product Specification exists or Draft continuation is explicitly accepted.
- [ ] Phase 7 Architecture Decision Record exists or Draft continuation is explicitly accepted.
- [ ] Phase 11 Gold Layer Specification exists or Draft continuation is explicitly accepted.
- [ ] Phase 12 Data Contract Specification exists or Draft continuation is explicitly accepted.
- [ ] Phase 14 Data Quality Specification exists or Draft continuation is explicitly accepted.
- [ ] Phase 15 Orchestration and Observability Specification exists or Draft continuation is explicitly accepted.
- [ ] Phase 16 Semantic Model Specification exists or Draft continuation is explicitly accepted.
- [ ] P1 Gold/Semantic outputs are identified.
- [ ] Consumers/personas are identified.
- [ ] Serving direction is considered.
- [ ] Access/security constraints are considered.

## Serving Coverage

- [ ] Serving scope is defined.
- [ ] Serving design principles are defined.
- [ ] Consumer/persona mapping is documented.
- [ ] Serving channel inventory is created.
- [ ] Gold/Semantic-to-serving mapping is documented.
- [ ] Serving pattern decision is documented per output.
- [ ] Dashboard/reporting expectations are documented where relevant.
- [ ] Self-service analytics expectations are documented where relevant.
- [ ] API/application-serving expectations are documented where relevant.
- [ ] ML/AI dataset expectations are documented where relevant.
- [ ] Reverse ETL/export expectations are documented where relevant.
- [ ] Data sharing/federation expectations are documented where relevant.
- [ ] AI/data-agent access expectations are documented where relevant.

## Serving Quality and Safety

- [ ] Each P1 serving output has a consumer.
- [ ] Each P1 serving output has a channel.
- [ ] Each P1 serving output maps to Gold or semantic source.
- [ ] Access/security policy is documented.
- [ ] Freshness/quality visibility is documented.
- [ ] Performance/latency expectation is documented.
- [ ] Caching/materialization expectation is documented or marked not applicable.
- [ ] Feedback loop is documented.
- [ ] Usage monitoring/adoption signals are documented.
- [ ] Ownership/support model is documented.
- [ ] Risks are documented.
- [ ] Assumptions are explicitly marked.
- [ ] Open questions are documented.

## Guardrails

- [ ] The artifact does not implement dashboards.
- [ ] The artifact does not implement APIs.
- [ ] The artifact does not implement ML pipelines.
- [ ] The artifact does not implement reverse ETL jobs.
- [ ] The artifact does not implement BI/semantic model code.
- [ ] Draft metrics are not exposed as Certified.
- [ ] Access/security risks are not hidden.
- [ ] Reverse ETL feedback-loop risks are documented.
- [ ] Federated query/source impact risks are documented.

## HALT Validation

- [ ] Missing semantic/serving context HALT resolved or artifact remains Draft.
- [ ] Serving scope HALT resolved or artifact remains Draft.
- [ ] Consumer/persona HALT resolved or output remains Draft.
- [ ] Serving channel HALT resolved or output remains Draft.
- [ ] Access/security HALT resolved or output remains Draft/Blocked.
- [ ] Freshness/quality visibility HALT resolved or output remains Draft.
- [ ] Performance/latency HALT resolved or output remains Draft.
- [ ] API/application contract HALT resolved or output remains Draft/Risk.
- [ ] ML/AI serving HALT resolved or output remains Draft/Risk.
- [ ] Reverse ETL guardrails HALT resolved or output remains Risk/Blocked.
- [ ] Data sharing/federation HALT resolved or output remains Risk/Blocked.
- [ ] Feedback/support owner HALT resolved or output remains Draft/Risk.

## Result

Choose one:

- [ ] Passed
- [ ] Passed with risks
- [ ] Blocked

## Notes

```text
<checklist notes>
```
