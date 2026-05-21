# Checklist — Semantic Model Design

## Required Context

- [ ] Phase 1 Business Discovery artifact exists or Draft continuation is explicitly accepted.
- [ ] Phase 2 Business Question Catalog exists or Draft continuation is explicitly accepted.
- [ ] Phase 3 Requirements and KPI Catalog exists or Draft continuation is explicitly accepted.
- [ ] Phase 4 Data Product Specification exists or Draft continuation is explicitly accepted.
- [ ] Phase 6 Conceptual Domain Model exists or Draft continuation is explicitly accepted.
- [ ] Phase 10 Silver Layer Specification exists or Draft continuation is explicitly accepted.
- [ ] Phase 11 Gold Layer Specification exists or Draft continuation is explicitly accepted.
- [ ] Phase 12 Data Contract Specification exists or Draft continuation is explicitly accepted.
- [ ] Phase 13 Transformation Specification exists or Draft continuation is explicitly accepted.
- [ ] Phase 14 Data Quality Specification exists or Draft continuation is explicitly accepted.
- [ ] Phase 15 Orchestration and Observability Specification exists or Draft continuation is explicitly accepted.
- [ ] P1 Gold outputs are identified.
- [ ] KPI/metric definitions are identified.
- [ ] Consumers/use cases are identified.
- [ ] Access/security constraints are considered.

## Semantic Coverage

- [ ] Semantic scope is defined.
- [ ] Semantic design principles are defined.
- [ ] Semantic model inventory is created.
- [ ] Consumer/use-case mapping is documented.
- [ ] Gold-to-semantic mapping is documented.
- [ ] Business glossary alignment is documented.
- [ ] Semantic entities are documented.
- [ ] Measures/KPIs are documented.
- [ ] Dimensions/attributes are documented.
- [ ] Hierarchies are documented where relevant.
- [ ] Relationships/join behavior is documented.
- [ ] Grain/aggregation behavior is documented.
- [ ] Filters/slicers are documented.
- [ ] Time intelligence expectations are documented.
- [ ] Calculation ownership is documented.
- [ ] Naming/display conventions are documented.
- [ ] Security/access model is documented.
- [ ] Certification/trust status is documented.
- [ ] Freshness/quality display expectations are documented.
- [ ] Lineage/metadata expectations are documented.
- [ ] Semantic testing expectations are documented.

## Metric and Relationship Safety

- [ ] Measures align with approved KPI/Gold definitions.
- [ ] Draft measures are clearly marked.
- [ ] Certified measures have owner and definition source.
- [ ] Aggregation behavior is explicit.
- [ ] Non-additive or semi-additive measures are marked.
- [ ] Relationships respect grain and cardinality.
- [ ] Many-to-many risks are documented.
- [ ] Double-counting risks are documented.
- [ ] Security-sensitive fields/measures are restricted or marked Risk.

## Guardrails

- [ ] The artifact does not include DAX/SQL/LookML/Cube/dbt semantic implementation code.
- [ ] The artifact does not design dashboard visuals.
- [ ] The artifact does not implement API/application logic.
- [ ] The artifact does not deploy semantic model objects.
- [ ] Metric definitions are not invented.
- [ ] Certified status is not assigned without evidence.
- [ ] Technical names are not exposed without business-friendly naming decision.
- [ ] Security rules are not assumed silently.

## HALT Validation

- [ ] Missing Gold/KPI context HALT resolved or artifact remains Draft.
- [ ] Semantic scope HALT resolved or artifact remains Draft.
- [ ] Consumer/use-case mapping HALT resolved or model remains Draft.
- [ ] Measure/KPI definition HALT resolved or measure remains Draft/Risk.
- [ ] Aggregation behavior HALT resolved or measure remains Draft/Risk.
- [ ] Relationship/join behavior HALT resolved or model remains Draft/Risk.
- [ ] Dimension/hierarchy HALT resolved or hierarchy remains Draft.
- [ ] Time intelligence HALT resolved or model remains Draft.
- [ ] Security/access HALT resolved or model remains Draft/Blocked.
- [ ] Certification/trust status HALT resolved or model remains Draft/Risk.
- [ ] Calculation ownership HALT resolved or measure remains Draft/Risk.
- [ ] Contract/quality alignment HALT resolved or model remains Draft/Risk.

## Result

Choose one:

- [ ] Passed
- [ ] Passed with risks
- [ ] Blocked

## Notes

```text
<checklist notes>
```
