# Phase 16 Support Plan — Semantic Model Design

## 1. Purpose

This support plan defines the validation work required to complete Phase 16 Semantic Model Design.

Phase 16 does not implement DAX, SQL, LookML, Cube, dbt semantic model, Power BI model, dashboards, APIs, CI/CD, deployment, or code.

It requires evidence that semantic objects are business-aligned, metric-consistent, Gold-backed, relationship-safe, security-aware, freshness/quality-visible, and trust-labeled before Serving Layer Design begins.

---

## 2. Phase Context

| Field | Value |
|---|---|
| Phase Number | 16 |
| Phase Name | Semantic Model Design |
| Phase Core Skill | `des-semantic-model-design` |
| Initial Artifact | `_des-output/planning-artifacts/16-semantic-model-specification.md` |
| Upstream Artifact | `_des-output/planning-artifacts/15-orchestration-observability-specification.md` |
| Upstream Handoff | `_des-output/phase-handoffs/phase-15-to-16-handoff.md` |
| Workflow Status File | `_des-output/implementation-artifacts/des-workflow-status.md` |
| Created Date | YYYY-MM-DD |
| Last Updated | YYYY-MM-DD |
| Owner / Agent | |
| Current Status | Draft / Evidence Required / Evidence Collected / Validated / Done / Blocked |

---

## 3. What Must Be Validated

| ID | Item to Validate | Why It Matters | Criticality | Required Evidence |
|---|---|---|---|---|
| V-001 | Phase 15 handoff alignment | Ensures semantic model respects publish/freshness/quality constraints | Critical | Phase 15 handoff |
| V-002 | Semantic scope | Prevents unclear model boundaries | Critical | Scope decision |
| V-003 | Consumer/use-case mapping | Ensures model exists for real use | Critical | Consumer/use-case |
| V-004 | Gold-to-semantic mapping | Ensures semantic objects trace to trusted outputs | Critical | Gold mapping |
| V-005 | Business glossary alignment | Prevents ambiguous terms | High | Glossary/domain evidence |
| V-006 | Semantic entity | Defines exposed business objects | High | Domain/Gold evidence |
| V-007 | Measure/KPI definition | Prevents metric drift | Critical | Phase 03/11 |
| V-008 | Dimension/attribute | Enables safe slicing/filtering | High | Gold/domain evidence |
| V-009 | Hierarchy | Enables correct drill paths | Medium/High | Consumer/domain evidence |
| V-010 | Relationship/join behavior | Prevents double counting | Critical | Grain/cardinality evidence |
| V-011 | Grain/aggregation behavior | Prevents wrong metrics | Critical | KPI/Gold evidence |
| V-012 | Filter/slicer | Enables self-service analysis | Medium/High | Consumer evidence |
| V-013 | Time intelligence | Prevents time-based metric errors | High where relevant | Calendar/date evidence |
| V-014 | Calculation ownership | Makes measures governable | Critical where measures exist | Owner decision |
| V-015 | Naming/display convention | Improves usability | Medium | Naming convention |
| V-016 | Security/access model | Prevents unauthorized exposure | Critical | Access/security evidence |
| V-017 | Certification/trust status | Prevents false confidence | Critical | Quality/contract/owner evidence |
| V-018 | Freshness/quality display | Makes trust visible | High | Phase 14/15 signals |
| V-019 | Lineage/metadata | Enables audit/debug/AI explanation | High | Lineage evidence |
| V-020 | Semantic testing expectation | Enables later validation | High | Test candidates |
| V-021 | Contract/quality alignment | Ensures semantic objects are protected | Critical | Phase 12/14 |

---

## 4. Required Support Work

| Support Work | Purpose | Input | Expected Output | Requirement Status | Notes |
|---|---|---|---|---|---|
| Phase 15 Handoff Review | Validate Phase 16 derives from Phase 15 | Ops spec + handoff | Evidence E-001 | Required | |
| Semantic Scope Check | Validate scope | Context | Evidence E-002 | Required | |
| Consumer/Use-Case Mapping Check | Validate target users/use cases | Business questions/product | Evidence E-003 | Required | |
| Gold-to-Semantic Mapping Check | Validate semantic object sources | Gold spec | Evidence E-004 | Required | |
| Business Glossary Alignment Check | Validate terms | Domain model/glossary | Evidence E-005 | Required | |
| Semantic Entity Check | Validate entities | Domain/Gold | Evidence E-006 | Required | |
| Measure/KPI Definition Check | Validate measures | Phase 03/11 | Evidence E-007 | Required where metrics exist | |
| Dimension/Attribute Check | Validate dimensions | Gold/domain | Evidence E-008 | Required | |
| Hierarchy Check | Validate drill paths | Consumer/domain | Evidence E-009 | Required where relevant | |
| Relationship/Join Behavior Check | Validate cardinality/join behavior | Gold grain/model | Evidence E-010 | Required where multiple entities exist | |
| Grain/Aggregation Behavior Check | Validate aggregation | KPI/Gold | Evidence E-011 | Required where metrics exist | |
| Filter/Slicer Check | Validate user analysis paths | Consumer use cases | Evidence E-012 | Required where relevant | |
| Time Intelligence Check | Validate calendar/as-of/rolling behavior | KPI/consumer needs | Evidence E-013 | Required where relevant | |
| Calculation Ownership Check | Validate measure ownership | Owner decision | Evidence E-014 | Required where measures exist | |
| Naming/Display Convention Check | Validate friendly names | Convention/glossary | Evidence E-015 | Required | |
| Security/Access Model Check | Validate access constraints | Security/contract | Evidence E-016 | Required | |
| Certification/Trust Status Check | Validate Draft/Promoted/Certified/Risk status | Quality/contract/owner | Evidence E-017 | Required | |
| Freshness/Quality Display Check | Validate consumer-visible trust signals | Phase 14/15 | Evidence E-018 | Required for P1 | |
| Lineage/Metadata Check | Validate traceability | Gold/contract/ops | Evidence E-019 | Required | |
| Semantic Testing Expectation Check | Validate future tests | Semantic design | Evidence E-020 | Required | |
| Contract/Quality Alignment Check | Validate semantic objects are protected | Phase 12/14 | Evidence E-021 | Required | |
| Phase 16 Done Gate | Decide whether Phase 16 can close | Artifact + evidence | Done Gate result | Required | |
| Phase 16 Handoff | Prepare Phase 17 input | Artifact + Done Gate | Handoff file | Required | |

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
1. Phase 15 Handoff Review
2. Semantic Scope Check
3. Consumer/Use-Case Mapping Check
4. Gold-to-Semantic Mapping Check
5. Business Glossary Alignment Check
6. Semantic Entity Check
7. Measure/KPI Definition Check
8. Dimension/Attribute Check
9. Hierarchy Check
10. Relationship/Join Behavior Check
11. Grain/Aggregation Behavior Check
12. Filter/Slicer Check
13. Time Intelligence Check
14. Calculation Ownership Check
15. Naming/Display Convention Check
16. Security/Access Model Check
17. Certification/Trust Status Check
18. Freshness/Quality Display Check
19. Lineage/Metadata Check
20. Semantic Testing Expectation Check
21. Contract/Quality Alignment Check
22. Update Semantic Model Specification from evidence
23. Run Phase 16 Done Gate
24. Create Phase 16 to Phase 17 Handoff
```

---

## 6. Evidence Output Location

```text
_des-output/evidence/phase-16/phase-16-evidence-pack.md
```

---

## 7. Waivers and Deferrals

| Item | Type | Waiver / Deferral Reason | Risk | Accepted By | Date |
| ---- | ---- | ------------------------ | ---- | ----------- | ---- |
| | Support Work / Evidence / Validation | | | | |

---

## 8. HALT Conditions

Stop and ask for user decision if any of the following occurs:

* Phase 15 handoff is missing.
* P1 semantic model has no consumer/use case.
* Gold dataset mapping is missing.
* Measure definition conflicts with Phase 03 or Phase 11.
* Measure aggregation behavior is missing.
* Relationship/join behavior is unclear.
* Semantic model exposes fields that violate security constraints.
* Certified status is assigned without owner/quality/lineage/contract/freshness support.
* Freshness or quality display expectation is missing.
* Artifact starts implementing BI/semantic model code.

---

## 9. Completion Criteria

This support plan is complete when:

* [ ] Phase 15 artifact and handoff are reviewed.
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
Create or update _des-output/evidence/phase-16/phase-16-evidence-pack.md
```

Reason:

Semantic model design requires explicit mapping, entity, measure, relationship, security, trust, and display evidence before Phase 16 can be marked Done.

---

## 11. Change Log

| Date       | Change               | Reason              | Updated By |
| ---------- | -------------------- | ------------------- | ---------- |
| YYYY-MM-DD | Created support plan | Phase 16 validation |            |
