# 06 — Conceptual Domain Model

## Metadata

| Field | Value |
| --- | --- |
| Project |  |
| Domain |  |
| Skill | des-domain-modeling |
| Phase | 06 — Domain Modeling |
| Status | Draft |
| Owner |  |
| Last Updated |  |
| Upstream Artifact | 05-data-source-inventory.md |
| Next Skill | des-architecture-design |

## 1. Domain Model Summary

```text
<short summary of domain scope, core concepts, and key modeling risks>
```

## 2. Domain Scope

In scope:

*
*
*

Out of scope for this model:

*
*
*

Scope rationale:

```text
<why this domain boundary is appropriate>
```

## 3. Business Glossary

| Term | Definition | Synonyms | Status                                  | Notes |
| ---- | ---------- | -------- | --------------------------------------- | ----- |
|      |            |          | Draft / Approved / Ambiguous / Deferred |       |

## 4. Core Entities

| Entity | Business Definition | Conceptual Grain     | Identity Rule | Status                                  |
| ------ | ------------------- | -------------------- | ------------- | --------------------------------------- |
|        |                     | one instance per ... |               | Draft / Approved / Ambiguous / Deferred |

## 5. Domain Events

| Event | Definition | Event Subject | Event Time Meaning                                                      | Mutability                        | Status                                  |
| ----- | ---------- | ------------- | ----------------------------------------------------------------------- | --------------------------------- | --------------------------------------- |
|       |            |               | Event time / Processing time / Effective date / Snapshot date / Unknown | Immutable / Correctable / Unknown | Draft / Approved / Ambiguous / Deferred |

## 6. Value Objects and Attributes

This section describes important conceptual attributes without designing physical columns.

| Concept | Attribute / Value Object | Meaning | Notes |
| ------- | ------------------------ | ------- | ----- |
|         |                          |         |       |

## 7. Relationships

| Relationship | From Concept | To Concept | Cardinality               | Temporal?          | Notes |
| ------------ | ------------ | ---------- | ------------------------- | ------------------ | ----- |
|              |              |            | 1:1 / 1:N / N:M / Unknown | Yes / No / Unknown |       |

## 8. Conceptual Grains

| Concept | Grain                | Why It Matters | Downstream Impact                        |
| ------- | -------------------- | -------------- | ---------------------------------------- |
|         | one instance per ... |                | Silver / Gold / Semantic / Contract / DQ |

## 9. Identifiers and Identity Rules

| Entity | Known Identifiers | Identity Rule | Cross-Source Mapping Needed? | Status                       |
| ------ | ----------------- | ------------- | ---------------------------- | ---------------------------- |
|        |                   |               | Yes / No / Unknown           | Draft / Approved / Ambiguous |

## 10. Source Alignment

| Concept | Candidate Sources | Evidence                                                      | Notes |
| ------- | ----------------- | ------------------------------------------------------------- | ----- |
|         | SRC-001, SRC-002  | Source schema / owner statement / artifact / sample / unknown |       |

## 11. Source of Truth Mapping

| Concept | Source of Truth Strategy | Source(s) | Status | Risk |
| --- | --- | --- | --- | --- |
|         | Authoritative source / Conformed merge / Priority order / Separate definitions / Deferred |           | Approved / Draft / Open |      |

## 12. Terminology Conflicts

| Term / Concept | Conflict | Options | Owner | Status                     |
| -------------- | -------- | ------- | ----- | -------------------------- |
|                |          |         |       | Open / Resolved / Deferred |

## 13. Domain Rules

| Rule ID | Domain Rule | Affected Concept | Source / Owner | Status                  |
| ------- | ----------- | ---------------- | -------------- | ----------------------- |
| DR-001  |             |                  |                | Draft / Approved / Open |

## 14. Lifecycle and State Definitions

| Concept | State / Lifecycle | Meaning | Source Mapping | Status                       |
| ------- | ----------------- | ------- | -------------- | ---------------------------- |
|         |                   |         |                | Draft / Approved / Ambiguous |

## 15. Temporal Concepts

| Temporal Concept    | Meaning | Applies To | Notes |
| ------------------- | ------- | ---------- | ----- |
| Event time          |         |            |       |
| Processing time     |         |            |       |
| Effective date      |         |            |       |
| Validity interval   |         |            |       |
| Snapshot/as-of date |         |            |       |

## 16. Ownership and Stewardship

| Concept | Business Owner / Steward | Technical Owner | Notes |
| ------- | ------------------------ | --------------- | ----- |
|         |                          |                 |       |

## 17. Downstream Use Case Mapping

| Concept | Business Questions | Requirements / KPIs | Product Outputs |
| ------- | ------------------ | ------------------- | --------------- |
|         | BQ-001             | FR-001, KPI-001     | OUT-001         |

## 18. Modeling Assumptions

| Assumption | Risk if Wrong | Validation Needed |
| ---------- | ------------- | ----------------- |
|            |               |                   |

## 19. Risks

| Risk | Affected Concept | Impact | Mitigation | Owner |
| ---- | ---------------- | ------ | ---------- | ----- |
|      |                  |        |            |       |

## 20. Open Questions

| Open Question | Why It Matters | Owner | Needed By                                       |
| ------------- | -------------- | ----- | ----------------------------------------------- |
|               |                |       | Phase 7 / Phase 8 / Phase 10 / Phase 11 / Later |

## 21. Next Skill Recommendation

Recommended next skill:

```text
des-architecture-design
```

Reason:

```text
<why architecture design is the next safe step>
```
