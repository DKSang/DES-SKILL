# 14 — Data Quality Specification

## Metadata

| Field | Value |
| --- | --- |
| Project |  |
| Domain |  |
| Skill | des-data-quality |
| Phase | 14 — Data Quality Design |
| Status | Draft |
| Owner |  |
| Last Updated |  |
| Upstream Artifact | 13-transformation-specification.md |
| Next Skill | des-orchestration-and-observability |

## 1. Data Quality Summary

```text
<short summary of quality scope, critical rules, gates, and risks>
```

## 2. Quality Scope

In scope:

*
*
*

Out of scope:

* test implementation code
* orchestration implementation
* monitoring dashboard implementation
* CI/CD workflow implementation
* manual data correction process implementation

## 3. Quality Design Principles

| Principle                         | Decision / Notes |
| --------------------------------- | ---------------- |
| Risk-based rules                  |                  |
| Contract-aligned                  |                  |
| Layer-aware                       |                  |
| Severity-explicit                 |                  |
| Evidence-backed                   |                  |
| Owned by accountable team/steward |                  |
| Fail safely                       |                  |
| Avoid noisy rules                 |                  |

## 4. Quality Dimensions

| Dimension            | Applies? | Notes |
| -------------------- | -------- | ----- |
| Freshness            | Yes / No |       |
| Completeness         | Yes / No |       |
| Validity             | Yes / No |       |
| Uniqueness           | Yes / No |       |
| Consistency          | Yes / No |       |
| Accuracy             | Yes / No |       |
| Integrity            | Yes / No |       |
| Timeliness           | Yes / No |       |
| Reliability          | Yes / No |       |
| Schema compatibility | Yes / No |       |
| Reasonableness       | Yes / No |       |
| Lineage completeness | Yes / No |       |

## 5. Quality Rule Inventory

| Rule ID | Dataset / Output    | Layer | Dimension | Rule | Severity                                   | Status                                       |
| ------- | ------------------- | ----- | --------- | ---- | ------------------------------------------ | -------------------------------------------- |
| DQ-001  | gold.<dataset_name> | Gold  | Freshness |      | P1 Blocking / P2 Warning / P3 Info / Draft | Draft / Approved / Risk / Blocked / Deferred |

## 6. Dataset to Rule Mapping

| Dataset / Output    | Required Rules | Contract ID | Transformation ID |
| ------------------- | -------------- | ----------- | ----------------- |
| gold.<dataset_name> | DQ-001, DQ-002 | DC-001      | TR-001            |

## 7. Layer Specific Quality Rules

| Layer              | Rule Focus                                                                      | Example / Notes |
| ------------------ | ------------------------------------------------------------------------------- | --------------- |
| Bronze             | technical load, metadata, raw readability, file/message counts, schema presence |                 |
| Silver             | conformance, identity, valid domain values, uniqueness, referential checks      |                 |
| Gold               | metric reconciliation, grain uniqueness, freshness, consumer readiness          |                 |
| Serving / Contract | SLA, schema compatibility, access, quality gate, acceptance                     |                 |

## 8. Contract Quality Alignment

| Contract ID | Quality Rule ID | Contract Clause                                                                 | Alignment Status                       |
| ----------- | --------------- | ------------------------------------------------------------------------------- | -------------------------------------- |
| DC-001      | DQ-001          | freshness / schema / uniqueness / completeness / metric reconciliation / access | Satisfies / Partial / Conflict / Draft |

## 9. Transformation Validation Alignment

| Transformation ID | Quality Rule ID | Validation Purpose |
| ----------------- | --------------- | ------------------ |
| TR-001            | DQ-001          |                    |

## 10. Freshness Rules

| Rule ID | Dataset / Output | Freshness Expectation | Timezone | Evidence                                                 | Severity |
| ------- | ---------------- | --------------------- | -------- | -------------------------------------------------------- | -------- |
| DQ-001  |                  |                       |          | run log / max event time / publish time / contract check |          |

## 11. Completeness and Volume Rules

| Rule ID | Dataset / Output | Rule                                                       | Threshold / Expected Range | Severity |
| ------- | ---------------- | ---------------------------------------------------------- | -------------------------- | -------- |
| DQ-002  |                  | row count / file count / partition completeness / coverage |                            |          |

## 12. Uniqueness and Grain Rules

| Rule ID | Dataset / Output | Grain / Key | Rule                         | Severity |
| ------- | ---------------- | ----------- | ---------------------------- | -------- |
| DQ-003  |                  |             | uniqueness at declared grain |          |

## 13. Validity and Domain Rules

| Rule ID | Dataset / Output | Field / Concept | Valid Domain / Range | Severity |
| ------- | ---------------- | --------------- | -------------------- | -------- |
| DQ-004  |                  |                 |                      |          |

## 14. Referential Integrity Rules

| Rule ID | Dataset / Output | Reference Dataset | Rule                                                       | Failure Handling |
| ------- | ---------------- | ----------------- | ---------------------------------------------------------- | ---------------- |
| DQ-005  |                  |                   | required match / optional match / orphan allowed with flag |                  |

## 15. Consistency and Reconciliation Rules

| Rule ID | Dataset / Output | Reconciliation Target                                        | Tolerance                             | Severity |
| ------- | ---------------- | ------------------------------------------------------------ | ------------------------------------- | -------- |
| DQ-006  |                  | Silver total / source total / prior report / contract metric | exact / percentage / absolute / trend |          |

## 16. Accuracy and Business Reasonableness Rules

| Rule ID | Dataset / Output | Rule                                                   | Threshold | Notes |
| ------- | ---------------- | ------------------------------------------------------ | --------- | ----- |
| DQ-007  |                  | value range / plausible trend / business cap / anomaly |           |       |

## 17. Schema and Compatibility Rules

| Rule ID | Dataset / Output | Schema Expectation                                         | Breaking Change Handling               |
| ------- | ---------------- | ---------------------------------------------------------- | -------------------------------------- |
| DQ-008  |                  | required fields / types / compatibility / contract version | block / warn / version / manual review |

## 18. Null and Missing Value Rules

| Rule ID | Dataset / Output | Field | Missing Handling                                       | Severity |
| ------- | ---------------- | ----- | ------------------------------------------------------ | -------- |
| DQ-009  |                  |       | preserve / flag / reject / quarantine / impute by rule |          |

## 19. Anomaly and Threshold Rules

| Rule ID | Dataset / Output | Metric / Signal                                    | Threshold Type                               | Response |
| ------- | ---------------- | -------------------------------------------------- | -------------------------------------------- | -------- |
| DQ-010  |                  | row count / metric value / runtime / freshness lag | fixed / trend / anomaly / profiling baseline |          |

## 20. Severity Classification

| Rule ID | Severity                                   | Rationale |
| ------- | ------------------------------------------ | --------- |
| DQ-001  | P1 Blocking / P2 Warning / P3 Info / Draft |           |

## 21. Failure Handling and Quality Gates

| Rule ID | Failure Handling                                                                             | Gate                                                                 | Notes |
| ------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ----- |
| DQ-001  | block publish / fail stage / quarantine / flag / alert / ticket / rollback / manual approval | Bronze gate / Silver gate / Gold gate / Contract gate / Release gate |       |

## 22. Ownership and Stewardship

| Rule ID | Owner / Steward | Escalation Path |
| ------- | --------------- | --------------- |
| DQ-001  |                 |                 |

## 23. Evidence and Reporting Expectations

| Rule ID | Evidence Captured                                                               | Reporting Expectation                                      |
| ------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| DQ-001  | pass/fail, checked count, failed count, sample, run ID, contract version, trend | run log / quality report / dashboard later / CI gate later |

## 24. Risks

| Risk | Rule / Dataset | Impact | Mitigation | Owner |
| ---- | -------------- | ------ | ---------- | ----- |
|      |                |        |            |       |

## 25. Assumptions

| Assumption | Risk if Wrong | Validation Needed |
| ---------- | ------------- | ----------------- |
|            |               |                   |

## 26. Open Questions

| Open Question | Why It Matters | Owner | Needed By                              |
| ------------- | -------------- | ----- | -------------------------------------- |
|               |                |       | Phase 15 / Phase 20 / Phase 21 / Later |

## 27. Next Skill Recommendation

Recommended next skill:

```text
des-orchestration-observability
```

Reason:

```text
<why orchestration and observability are the next safe step>
```
