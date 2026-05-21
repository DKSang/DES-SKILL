# 12 — Data Contract Specification

## Metadata

| Field | Value |
| --- | --- |
| Project |  |
| Domain |  |
| Skill | des-data-contracts |
| Phase | 12 — Data Contracts |
| Status | Draft |
| Owner |  |
| Last Updated |  |
| Upstream Artifact | 11-gold-layer-specification.md |
| Next Skill | des-transformation-design |

## 1. Data Contract Summary

```text
<short summary of contract scope, contract levels, critical outputs, and major risks>
```

## 2. Contract Scope

In scope:

*
*
*

Out of scope:

* transformation implementation code
* data quality test implementation
* orchestration implementation
* dashboard/API implementation
* CI/CD workflow implementation

## 3. Contract Design Principles

| Principle                          | Decision / Notes |
| ---------------------------------- | ---------------- |
| Producer-consumer clarity          |                  |
| Contract only where useful         |                  |
| Schema plus meaning                |                  |
| Grain is mandatory                 |                  |
| Freshness and quality are explicit |                  |
| Security by classification         |                  |
| Version breaking changes           |                  |
| Validate before release            |                  |

## 4. Contract Inventory

| Contract ID | Dataset / Output    | Contract Level                                        | Status                                                    |
| ----------- | ------------------- | ----------------------------------------------------- | --------------------------------------------------------- |
| DC-001      | gold.<dataset_name> | None / Minimal / Standard / Full / External-Regulated | Draft / Proposed / Approved / Risk / Blocked / Deprecated |

## 5. Producer and Consumer Mapping

| Contract ID | Producer | Consumer(s) | Owner / Approver |
| ----------- | -------- | ----------- | ---------------- |
| DC-001      |          |             |                  |

## 6. Contract Level

| Contract ID | Level                                          | Rationale |
| ----------- | ---------------------------------------------- | --------- |
| DC-001      | Minimal / Standard / Full / External-Regulated |           |

## 7. Dataset and Output Identity

| Contract ID | Dataset / Output Name | Layer                                     | Serving Path                                             | Description |
| ----------- | --------------------- | ----------------------------------------- | -------------------------------------------------------- | ----------- |
| DC-001      | gold.<dataset_name>   | Source / Bronze / Silver / Gold / Serving | Table / Semantic / Dashboard / API / ML / Export / Other |             |

## 8. Business Meaning and Grain

| Contract ID | Business Meaning | Grain           | Notes |
| ----------- | ---------------- | --------------- | ----- |
| DC-001      |                  | one row per ... |       |

## 9. Schema Expectations

| Contract ID | Schema Strictness                                                                      | Schema Version | Compatibility Rule |
| ----------- | -------------------------------------------------------------------------------------- | -------------- | ------------------ |
| DC-001      | Summary / Required fields / Full schema / Full schema + constraints / Versioned schema | v0.1.0         |                    |

## 10. Field Level Expectations

| Contract ID | Field | Type | Required?              | Meaning | Constraint / Notes |
| ----------- | ----- | ---- | ---------------------- | ------- | ------------------ |
| DC-001      |       |      | Yes / No / Conditional |         |                    |

## 11. Metric and KPI Expectations

| Contract ID | Metric / KPI | Definition Source                    | Contract Status                     |
| ----------- | ------------ | ------------------------------------ | ----------------------------------- |
| DC-001      | KPI-001      | Phase 3 / approved owner / candidate | Contractual / Informational / Draft |

## 12. Freshness and SLA Expectations

| Contract ID | Freshness / SLA | Timezone | Severity if Missed                 | Evidence                                    |
| ----------- | --------------- | -------- | ---------------------------------- | ------------------------------------------- |
| DC-001      |                 |          | P1 Blocking / P2 Warning / P3 Info | freshness check / run log / consumer review |

## 13. Quality Expectations

| Contract ID | Quality Rule                                                                                                       | Threshold | Severity     | Failure Handling                |
| ----------- | ------------------------------------------------------------------------------------------------------------------ | --------- | ------------ | ------------------------------- |
| DC-001      | uniqueness / completeness / required field / referential integrity / metric reconciliation / valid values / custom |           | P1 / P2 / P3 | block / alert / flag / continue |

## 14. Volume and Completeness Expectations

| Contract ID | Expectation                                                                     | Threshold / Range | Notes |
| ----------- | ------------------------------------------------------------------------------- | ----------------- | ----- |
| DC-001      | row count / event count / file count / volume range / completeness by partition |                   |       |

## 15. Security and Access Expectations

| Contract ID | Sensitivity                                                  | Access Policy                                                                        | Security Notes |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------ | -------------- |
| DC-001      | Public / Internal / Confidential / PII / Regulated / Unknown | public / internal / role-based / row-level / column-level / masked / review required |                |

## 16. Lineage and Metadata Expectations

| Contract ID | Metadata / Lineage Requirement                                                                 | Required?              | Notes |
| ----------- | ---------------------------------------------------------------------------------------------- | ---------------------- | ----- |
| DC-001      | upstream datasets, run ID, refresh time, quality status, metric version, schema version, owner | Yes / Conditional / No |       |

## 17. Compatibility and Versioning Policy

| Contract ID | Compatible Changes                          | Breaking Changes                                                                              | Versioning Rule                          |
| ----------- | ------------------------------------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------- |
| DC-001      | additive nullable field, metadata additions | field removal, rename, type change, grain change, metric definition change, SLA/access change | semantic version / date version / custom |

## 18. Change Management Policy

| Contract ID | Change Process                                                                    | Notice Period | Approval Needed                          |
| ----------- | --------------------------------------------------------------------------------- | ------------- | ---------------------------------------- |
| DC-001      | PR/review / consumer notification / governance review / emergency change / custom |               | Producer / consumer / owner / governance |

## 19. Deprecation Policy

| Contract ID | Deprecation Rule | Consumer Migration Expectation |
| ----------- | ---------------- | ------------------------------ |
| DC-001      |                  |                                |

## 20. Incident and Escalation Policy

| Contract ID | Violation Type                                           | Escalation Path | Expected Action                                     |
| ----------- | -------------------------------------------------------- | --------------- | --------------------------------------------------- |
| DC-001      | schema / freshness / quality / access / metric / lineage |                 | alert / block / ticket / rollback / manual approval |

## 21. Acceptance and Validation Criteria

| Contract ID | Validation Type                                                                          | Acceptance Criteria | Future Test Candidate? |
| ----------- | ---------------------------------------------------------------------------------------- | ------------------- | ---------------------- |
| DC-001      | schema / uniqueness / freshness / quality / access / lineage / consumer review / CI gate |                     | Yes / No               |

## 22. Contract Ownership and Approval

| Contract ID | Producer Owner | Consumer Approver | Technical Approver | Status                                       |
| ----------- | -------------- | ----------------- | ------------------ | -------------------------------------------- |
| DC-001      |                |                   |                    | Draft / Proposed / Approved / Risk / Blocked |

## 23. Risks

| Risk | Contract | Impact | Mitigation | Owner |
| ---- | -------- | ------ | ---------- | ----- |
|      |          |        |            |       |

## 24. Assumptions

| Assumption | Risk if Wrong | Validation Needed |
| ---------- | ------------- | ----------------- |
|            |               |                   |

## 25. Open Questions

| Open Question | Why It Matters | Owner | Needed By                                         |
| ------------- | -------------- | ----- | ------------------------------------------------- |
|               |                |       | Phase 13 / Phase 14 / Phase 15 / Phase 21 / Later |

## 26. Next Skill Recommendation

Recommended next skill:

```text
des-transformation-design
```

Reason:

```text
<why transformation design is the next safe step>
```
