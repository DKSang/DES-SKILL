# Phase 14 Support Plan — Data Quality Design

## 1. Purpose

This support plan defines the validation work required to complete Phase 14 Data Quality Design.

Phase 14 does not implement SQL, Python, dbt, Great Expectations, Spark, orchestration, monitoring, CI/CD workflow files, dashboards, APIs, or code.

It requires evidence that quality rules are scoped, risk-based, contract-aligned, transformation-aware, severity-classified, owned, observable, and gate-ready before Orchestration and Observability begins.

---

## 2. Phase Context

| Field | Value |
|---|---|
| Phase Number | 14 |
| Phase Name | Data Quality Design |
| Phase Core Skill | `des-data-quality` |
| Initial Artifact | `_des-output/planning-artifacts/14-data-quality-specification.md` |
| Upstream Artifact | `_des-output/planning-artifacts/13-transformation-specification.md` |
| Upstream Handoff | `_des-output/phase-handoffs/phase-13-to-14-handoff.md` |
| Workflow Status File | `_des-output/implementation-artifacts/des-workflow-status.md` |
| Created Date | YYYY-MM-DD |
| Last Updated | YYYY-MM-DD |
| Owner / Agent | |
| Current Status | Draft / Evidence Required / Evidence Collected / Validated / Done / Blocked |

---

## 3. What Must Be Validated

| ID | Item to Validate | Why It Matters | Criticality | Required Evidence |
|---|---|---|---|---|
| V-001 | Phase 13 handoff alignment | Ensures DQ follows transformation validation expectations | Critical | Phase 13 handoff |
| V-002 | Quality scope | Prevents over/under-validation | Critical | Scope decision |
| V-003 | Quality dimensions | Ensures correct rule types | High | Dimension decision |
| V-004 | Quality rule inventory | Ensures rules are listed | Critical | Rule catalog |
| V-005 | Dataset-to-rule mapping | Ensures rules target real outputs | Critical | Dataset mapping |
| V-006 | Layer-specific rules | Preserves Bronze/Silver/Gold quality boundaries | High | Layer specs |
| V-007 | Contract quality alignment | Ensures contractual obligations are checked | Critical | Contract mapping |
| V-008 | Transformation validation alignment | Ensures transform expectations are checked | Critical | Phase 13 mapping |
| V-009 | Freshness rules | Supports SLA and timeliness | High | Contract/product SLA |
| V-010 | Completeness/volume rules | Detects missing/partial data | High | Contract/profile |
| V-011 | Uniqueness/grain rules | Prevents duplicate grain | Critical | Grain evidence |
| V-012 | Validity/domain rules | Prevents invalid values | High | Domain/schema |
| V-013 | Referential integrity rules | Prevents invalid relationships | High when joins exist | Join evidence |
| V-014 | Consistency/reconciliation rules | Prevents metric/source drift | High | Metric/source evidence |
| V-015 | Schema/compatibility rules | Prevents downstream breakage | Critical for contracts | Contract schema |
| V-016 | Threshold/anomaly rules | Prevents arbitrary thresholds | High | Profiling/owner decision |
| V-017 | Severity classification | Sets impact and escalation | Critical | Owner decision |
| V-018 | Failure handling/gates | Controls publish/release behavior | Critical | Gate decision |
| V-019 | Ownership/stewardship | Makes failures actionable | Critical | Owner decision |
| V-020 | Evidence/reporting | Makes DQ auditable | High | Reporting decision |
| V-021 | Monitoring/observability expectations | Feeds Phase 15 | High | Observability requirement |
| V-022 | CI/CD/release gate candidates | Feeds Phase 21 | Medium/High | Gate decision |

---

## 4. Required Support Work

| Support Work | Purpose | Input | Expected Output | Requirement Status | Notes |
|---|---|---|---|---|---|
| Phase 13 Handoff Review | Validate Phase 14 derives from Phase 13 | Transform spec + handoff | Evidence E-001 | Required | |
| Quality Scope Check | Validate scope | Context | Evidence E-002 | Required | |
| Quality Dimension Check | Validate dimensions | Rules | Evidence E-003 | Required | |
| Quality Rule Inventory Check | Validate catalog exists | Rule list | Evidence E-004 | Required | |
| Dataset-to-Rule Mapping Check | Validate target datasets | Rule map | Evidence E-005 | Required | |
| Layer-Specific Rule Check | Validate Bronze/Silver/Gold boundaries | Layer specs | Evidence E-006 | Required | |
| Contract Quality Alignment Check | Validate contract coverage | Contracts | Evidence E-007 | Required | |
| Transformation Validation Alignment Check | Validate transform coverage | Phase 13 | Evidence E-008 | Required | |
| Freshness Rule Check | Validate freshness/SLA rules | Contract/SLA | Evidence E-009 | Required for P1 SLA-bound |
| Completeness/Volume Rule Check | Validate missing/partial data rules | Contract/profile | Evidence E-010 | Required where relevant |
| Uniqueness/Grain Rule Check | Validate declared grain uniqueness | Grain | Evidence E-011 | Required where relevant |
| Validity/Domain Rule Check | Validate domains/ranges/formats | Domain/schema | Evidence E-012 | Required |
| Referential Integrity Rule Check | Validate relationships | Join rules | Evidence E-013 | Required where joins exist |
| Consistency/Reconciliation Rule Check | Validate cross-source/metric consistency | Metric/source rules | Evidence E-014 | Required where relevant |
| Accuracy/Reasonableness Rule Check | Validate plausibility | Business expectations | Evidence E-015 | Required where relevant |
| Schema/Compatibility Rule Check | Validate schema compatibility | Contracts | Evidence E-016 | Required for contracts |
| Null/Missing Rule Check | Validate missing semantics | Layer specs | Evidence E-017 | Required |
| Anomaly/Threshold Rule Check | Validate thresholds | Profiling/owner | Evidence E-018 | Required where thresholds exist |
| Severity Classification Check | Validate impact | Owner/business input | Evidence E-019 | Required |
| Failure Handling/Gate Check | Validate block/warn/info behavior | Rule severity | Evidence E-020 | Required |
| Ownership/Stewardship Check | Validate owners | Owner map | Evidence E-021 | Required |
| Evidence/Reporting Check | Validate DQ evidence | Reporting plan | Evidence E-022 | Required |
| Monitoring/Observability Expectation Check | Prepare Phase 15 | Rule list | Evidence E-023 | Required for P1/P2 |
| CI/CD/Release Gate Candidate Check | Prepare Phase 21 | Gate list | Evidence E-024 | Required for P1 |
| Phase 14 Done Gate | Decide whether Phase 14 can close | Artifact + evidence | Done Gate result | Required | |
| Phase 14 Handoff | Prepare Phase 15 input | Artifact + Done Gate | Handoff file | Required | |

Requirement status values:

```text
Required
Optional
Waived with reason
Not applicable
Deferred with accepted risk
Blocked
```

---

## 5. Support Work Execution Order

```text
1. Phase 13 Handoff Review
2. Quality Scope Check
3. Quality Dimension Check
4. Quality Rule Inventory Check
5. Dataset-to-Rule Mapping Check
6. Layer-Specific Rule Check
7. Contract Quality Alignment Check
8. Transformation Validation Alignment Check
9. Freshness Rule Check
10. Completeness/Volume Rule Check
11. Uniqueness/Grain Rule Check
12. Validity/Domain Rule Check
13. Referential Integrity Rule Check
14. Consistency/Reconciliation Rule Check
15. Accuracy/Reasonableness Rule Check
16. Schema/Compatibility Rule Check
17. Null/Missing Rule Check
18. Anomaly/Threshold Rule Check
19. Severity Classification Check
20. Failure Handling/Gate Check
21. Ownership/Stewardship Check
22. Evidence/Reporting Check
23. Monitoring/Observability Expectation Check
24. CI/CD/Release Gate Candidate Check
25. Update Data Quality Specification from evidence
26. Run Phase 14 Done Gate
27. Create Phase 14 to Phase 15 Handoff
```

---

## 6. Evidence Output Location

```text
_des-output/evidence/phase-14/phase-14-evidence-pack.md
```

---

## 7. Waivers and Deferrals

| Item | Type | Waiver / Deferral Reason | Risk | Accepted By | Date |
| ---- | ---- | ------------------------ | ---- | ----------- | ---- |
| | Support Work / Evidence / Validation | | | | |

---

## 8. HALT Conditions

Stop and ask for user decision if any of the following occurs:

* Phase 13 handoff is missing.
* P1 contracted output has no quality rules.
* Quality rule has no dataset/output.
* Rule has no dimension.
* Threshold/pass-fail condition is missing.
* Severity is missing.
* Failure handling is missing.
* Owner/steward is missing for P1 rule.
* Contract quality expectations are not mapped.
* Freshness SLA quality rule is missing for P1 output.
* Metric reconciliation rule is missing where required.
* Evidence/reporting expectation is missing.
* Artifact starts implementing test code.

---

## 9. Completion Criteria

This support plan is complete when:

* [ ] Phase 13 artifact and handoff are reviewed.
* [ ] Required validation items are listed.
* [ ] Required support work is listed.
* [ ] Evidence output location is defined.
* [ ] Waivers or deferrals are documented.
* [ ] HALT conditions are clear.
* [ ] Next support action is recommended.

---

## 10. Next Support Action

Recommended next action:

```text
Create or update _des-output/evidence/phase-14/phase-14-evidence-pack.md
```

Reason:

Data quality design requires explicit rule catalog, threshold, severity, gate, owner, and evidence mapping before Phase 14 can be marked Done.

---

## 11. Change Log

| Date       | Change               | Reason              | Updated By |
| ---------- | -------------------- | ------------------- | ---------- |
| YYYY-MM-DD | Created support plan | Phase 14 validation |            |
