# 16 — Semantic Model Specification

## Metadata

| Field | Value |
| --- | --- |
| Project |  |
| Domain |  |
| Skill | des-semantic-model-design |
| Phase | 16 — Semantic Model Design |
| Status | Draft |
| Owner |  |
| Last Updated |  |
| Upstream Artifact | 15-orchestration-observability-specification.md |
| Next Skill | des-serving-layer-design |

## 1. Semantic Model Summary

```text
<short summary of semantic scope, consumers, models, measures, and trust risks>
```

## 2. Semantic Scope

In scope:

*
*
*

Out of scope:

* BI/dashboard visual implementation
* DAX/LookML/SQL/Cube/dbt semantic code
* API/application implementation
* orchestration or CI/CD implementation

## 3. Semantic Design Principles

| Principle                        | Decision / Notes |
| -------------------------------- | ---------------- |
| Business-friendly                |                  |
| KPI-aligned                      |                  |
| Grain-aware                      |                  |
| Relationship-safe                |                  |
| Security-aware                   |                  |
| Certified only when justified    |                  |
| Freshness and quality visible    |                  |
| Reusable across consumers        |                  |
| AI/data-agent ready where needed |                  |

## 4. Semantic Model Inventory

| Semantic Model        | Purpose | Consumer | Trust Status                                                       | Status                            |
| --------------------- | ------- | -------- | ------------------------------------------------------------------ | --------------------------------- |
| semantic.<model_name> |         |          | Draft / Promoted / Certified / Experimental / Deprecated / Blocked | Draft / Approved / Risk / Blocked |

## 5. Consumer and Use Case Mapping

| Consumer / Persona | Use Case | Semantic Model        | Notes |
| ------------------ | -------- | --------------------- | ----- |
|                    |          | semantic.<model_name> |       |

## 6. Gold to Semantic Mapping

| Gold Dataset        | Semantic Entity / Model    | Usage                                                |
| ------------------- | -------------------------- | ---------------------------------------------------- |
| gold.<dataset_name> | semantic.<entity_or_model> | fact / dimension / measure source / attribute source |

## 7. Business Glossary Alignment

| Business Term | Semantic Name | Definition Source                                 | Status                       |
| ------------- | ------------- | ------------------------------------------------- | ---------------------------- |
|               |               | Domain model / KPI catalog / Gold spec / Contract | Draft / Approved / Certified |

## 8. Semantic Entities

| Entity | Business Definition | Source Gold Dataset | Grain           |
| ------ | ------------------- | ------------------- | --------------- |
|        |                     | gold.<dataset_name> | one row per ... |

## 9. Measures and KPIs

| Measure / KPI | Business Definition | Formula Source                            | Aggregation                                                                            | Status                                              |
| ------------- | ------------------- | ----------------------------------------- | -------------------------------------------------------------------------------------- | --------------------------------------------------- |
|               |                     | Phase 3 / Phase 11 / Contract / Candidate | sum / count / count distinct / average / ratio / non-additive / semi-additive / custom | Draft / Approved / Certified / Deprecated / Blocked |

## 10. Dimensions and Attributes

| Dimension / Attribute | Business Meaning | Source              | Allowed For                  |
| --------------------- | ---------------- | ------------------- | ---------------------------- |
|                       |                  | gold.<dataset_name> | measure/filter/slicer/detail |

## 11. Hierarchies

| Hierarchy | Levels                                 | Applies To | Notes |
| --------- | -------------------------------------- | ---------- | ----- |
|           | country → region → province → district |            |       |

## 12. Relationships and Join Behavior

| From Entity | To Entity | Cardinality                                      | Join Key | Filter Direction                     | Risk                            |
| ----------- | --------- | ------------------------------------------------ | -------- | ------------------------------------ | ------------------------------- |
|             |           | 1:1 / 1:N / N:M / role-playing / inactive / none |          | single / both / explicit only / none | double count / ambiguity / none |

## 13. Grain and Aggregation Behavior

| Measure / Entity | Grain | Aggregation Behavior | Restrictions |
| ---------------- | ----- | -------------------- | ------------ |
|                  |       |                      |              |

## 14. Filters and Slicers

| Filter / Slicer | Applies To | Default? | Notes |
| --------------- | ---------- | -------- | ----- |
|                 |            | Yes / No |       |

## 15. Time Intelligence Expectations

| Time Behavior                                                                                                      | Applies To | Rule |
| ------------------------------------------------------------------------------------------------------------------ | ---------- | ---- |
| standard calendar / fiscal calendar / business date / event date / as-of date / rolling window / period comparison |            |      |

## 16. Calculation Ownership

| Measure / Calculation | Owner | Approval Status              |
| --------------------- | ----- | ---------------------------- |
|                       |       | Draft / Approved / Certified |

## 17. Naming and Display Conventions

| Area                    | Convention |
| ----------------------- | ---------- |
| Model name              |            |
| Entity name             |            |
| Measure name            |            |
| Dimension name          |            |
| Hidden technical fields |            |
| Description requirement |            |
| Deprecated field label  |            |

## 18. Security and Access Model

| Security Area         | Policy                                                    | Notes |
| --------------------- | --------------------------------------------------------- | ----- |
| Model access          | open internal / role-based / restricted / review required |       |
| Row-level security    | yes / no / TBD                                            |       |
| Column-level security | yes / no / TBD                                            |       |
| Measure restriction   | yes / no / TBD                                            |       |
| Masking               | yes / no / TBD                                            |       |

## 19. Certification and Trust Status

| Model / Measure | Trust Status                                                       | Reason |
| --------------- | ------------------------------------------------------------------ | ------ |
|                 | Draft / Promoted / Certified / Experimental / Deprecated / Blocked |        |

## 20. Freshness and Quality Display Expectations

| Semantic Model / Measure | Freshness Display                                         | Quality Display                                           |
| ------------------------ | --------------------------------------------------------- | --------------------------------------------------------- |
|                          | last refresh / max event time / publish time / SLA status | quality status / warning badge / certified badge / hidden |

## 21. Lineage and Metadata Expectations

| Semantic Object                      | Required Metadata                                                                               |
| ------------------------------------ | ----------------------------------------------------------------------------------------------- |
| model / entity / measure / dimension | owner, definition, source Gold dataset, contract ID, quality status, refresh time, lineage link |

## 22. Semantic Testing Expectations

| Test Area          | Expectation                           |
| ------------------ | ------------------------------------- |
| measure definition | aligns with approved KPI              |
| aggregation        | correct at allowed grains             |
| relationship       | no unintended double counting         |
| security           | role/row/column access enforced later |
| freshness display  | visible and accurate                  |
| metadata           | definitions and owners present        |

## 23. Risks

| Risk | Semantic Object | Impact | Mitigation | Owner |
| ---- | --------------- | ------ | ---------- | ----- |
|      |                 |        |            |       |

## 24. Assumptions

| Assumption | Risk if Wrong | Validation Needed |
| ---------- | ------------- | ----------------- |
|            |               |                   |

## 25. Open Questions

| Open Question | Why It Matters | Owner | Needed By                                         |
| ------------- | -------------- | ----- | ------------------------------------------------- |
|               |                |       | Phase 17 / Phase 18 / Phase 19 / Phase 21 / Later |

## 26. Next Skill Recommendation

Recommended next skill:

```text
des-serving-layer-design
```

Reason:

```text
<why serving layer design is the next safe step>
```
