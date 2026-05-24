# Phase {{PHASE_NUMBER}} Evidence Pack — {{PHASE_NAME}}

## 1. Purpose

This evidence pack records the evidence collected to validate Phase {{PHASE_NUMBER}} decisions, assumptions, risks, and handoff readiness.

A phase should not be marked Done unless critical decisions are supported by evidence or explicitly waived with accepted risk.

---

## 2. Evidence Pack Metadata

| Field | Value |
|---|---|
| Phase Number | {{PHASE_NUMBER}} |
| Phase Name | {{PHASE_NAME}} |
| Phase Core Skill | `{{PHASE_CORE_SKILL}}` |
| Initial Artifact | `{{INITIAL_PHASE_ARTIFACT}}` |
| Support Plan | `{{PHASE_SUPPORT_PLAN}}` |
| Evidence Directory | `_des-output/evidence/phase-{{PHASE_NUMBER}}/` |
| Created Date | {{YYYY-MM-DD}} |
| Last Updated | {{YYYY-MM-DD}} |
| Evidence Status | Not Started / In Progress / Collected / Insufficient / Accepted / Rejected / Waived |

---

## 3. Evidence Summary

| Evidence ID | Evidence Name | Produced By | Evidence Type | Status | Supports |
|---|---|---|---|---|---|
| E-001 | {{EVIDENCE_NAME}} | `{{SUPPORT_SKILL}}` | Technical / Data / Research / Review / Decision / Test | Accepted / Rejected / Partial / Waived | V-001 |
| E-002 | {{EVIDENCE_NAME}} | `{{SUPPORT_SKILL}}` | Technical / Data / Research / Review / Decision / Test | Accepted / Rejected / Partial / Waived | V-002 |

Evidence type guide:

| Type | Meaning |
|---|---|
| Technical | Code, spike, script, platform check, API call, notebook, query, runtime behavior. |
| Data | Sample data, schema, profiling, null rates, outliers, volume, freshness, duplicate checks. |
| Research | Documentation, official source, licensing, terms, standard, product docs. |
| Review | Human or agent review of artifact, design, code, security, governance, quality. |
| Decision | Recorded choice, trade-off, accepted risk, owner sign-off. |
| Test | Unit test, integration test, DQ test, CI output, validation command result. |

---

## 4. Validation Coverage

Map each validation item from the support plan to evidence.

| Validation ID | Validation Item | Required Evidence | Evidence ID | Coverage | Notes |
|---|---|---|---|---|---|
| V-001 | {{VALIDATION_ITEM}} | {{REQUIRED_EVIDENCE}} | E-001 | Full / Partial / Missing / Waived | |
| V-002 | {{VALIDATION_ITEM}} | {{REQUIRED_EVIDENCE}} | E-002 | Full / Partial / Missing / Waived | |

Coverage guide:

| Coverage | Meaning |
|---|---|
| Full | Evidence is sufficient for the decision. |
| Partial | Evidence reduces risk but does not fully close the question. |
| Missing | Required evidence does not exist. |
| Waived | Evidence requirement was waived with accepted risk. |

---

## 5. Technical Evidence

Use this section for probes, scripts, notebooks, platform checks, local experiments, or implementation spikes.

### Technical Evidence T-001 — {{TITLE}}

| Field | Value |
|---|---|
| Produced By | `{{SUPPORT_SKILL}}` |
| Command / Method | `{{COMMAND_OR_METHOD}}` |
| Input | {{INPUT}} |
| Output Location | `{{OUTPUT_PATH}}` |
| Result | Pass / Fail / Partial / Blocked |
| Related Validation IDs | V-001 |

#### Summary

{{SUMMARY}}

#### Key Findings

- {{FINDING_1}}
- {{FINDING_2}}

#### Limitations

- {{LIMITATION_1}}
- {{LIMITATION_2}}

#### Impact on Phase Artifact

{{HOW_THIS_CHANGES_THE_ARTIFACT}}

---

## 6. Data Evidence

Use this section for sample data, schema snapshots, profiling results, quality checks, source freshness, or volume estimates.

### Data Evidence D-001 — {{TITLE}}

| Field | Value |
|---|---|
| Produced By | `{{SUPPORT_SKILL}}` |
| Source | {{SOURCE_NAME}} |
| Sample Location | `{{SAMPLE_PATH_OR_REFERENCE}}` |
| Schema Location | `{{SCHEMA_PATH_OR_REFERENCE}}` |
| Profiling Location | `{{PROFILE_PATH_OR_REFERENCE}}` |
| Result | Pass / Fail / Partial / Blocked |
| Related Validation IDs | V-001 |

#### Summary

{{SUMMARY}}

#### Observed Schema

| Field | Type | Nullable | Example | Notes |
|---|---|---:|---|---|
| {{FIELD}} | {{TYPE}} | Yes / No | {{EXAMPLE}} | {{NOTES}} |

#### Data Quality Snapshot

| Check | Result | Notes |
|---|---|---|
| Missing values | Pass / Fail / Partial / Unknown | |
| Duplicates | Pass / Fail / Partial / Unknown | |
| Outliers | Pass / Fail / Partial / Unknown | |
| Freshness | Pass / Fail / Partial / Unknown | |
| Field consistency | Pass / Fail / Partial / Unknown | |

#### Impact on Phase Artifact

{{HOW_THIS_CHANGES_THE_ARTIFACT}}

---

## 7. Research Evidence

Use this section for source docs, official docs, license checks, standard references, or business documentation.

### Research Evidence R-001 — {{TITLE}}

| Field | Value |
|---|---|
| Produced By | `{{SUPPORT_SKILL}}` |
| Source / Document | {{SOURCE_OR_DOCUMENT}} |
| Reference Location | {{URL_OR_PATH}} |
| Result | Accepted / Rejected / Partial / Blocked |
| Related Validation IDs | V-001 |

#### Summary

{{SUMMARY}}

#### Key Findings

- {{FINDING_1}}
- {{FINDING_2}}

#### Licensing / Terms Notes

{{LICENSE_OR_TERMS_NOTES}}

#### Impact on Phase Artifact

{{HOW_THIS_CHANGES_THE_ARTIFACT}}

---

## 8. Review Evidence

Use this section for artifact review, security review, data quality review, code review, or architecture review.

### Review Evidence REV-001 — {{TITLE}}

| Field | Value |
|---|---|
| Reviewer | {{REVIEWER_OR_AGENT}} |
| Review Type | Artifact / Code / Security / Governance / Quality / Architecture / Cost |
| Reviewed Item | `{{REVIEWED_ITEM}}` |
| Result | Pass / Pass with risks / Fail / Blocked |
| Related Validation IDs | V-001 |

#### Findings

| Severity | Finding | Required Action |
|---|---|---|
| Critical / High / Medium / Low | {{FINDING}} | {{ACTION}} |

#### Impact on Phase Artifact

{{HOW_THIS_CHANGES_THE_ARTIFACT}}

---

## 9. Decision Evidence

Use this section for decisions made based on evidence.

| Decision ID | Decision | Evidence Used | Rationale | Reversibility | Status |
|---|---|---|---|---|---|
| DEC-001 | {{DECISION}} | E-001, E-002 | {{RATIONALE}} | Easy / Medium / Hard | Approved / Draft / Open |

---

## 10. Evidence Gaps

List missing or insufficient evidence.

| Gap ID | Missing Evidence | Impact | Recommended Action | Blocking? |
|---|---|---|---|---:|
| G-001 | {{MISSING_EVIDENCE}} | {{IMPACT}} | {{ACTION}} | Yes / No |

---

## 11. Risks Identified From Evidence

| Risk ID | Risk | Evidence Source | Severity | Mitigation | Carry Forward? |
|---|---|---|---|---|---:|
| RISK-001 | {{RISK}} | E-001 | Critical / High / Medium / Low | {{MITIGATION}} | Yes / No |

---

## 12. Artifact Revision Requirements

List what must be changed in the phase artifact because of the evidence.

| Revision ID | Artifact Section | Required Change | Evidence Source | Priority |
|---|---|---|---|---|
| REVREQ-001 | {{SECTION}} | {{CHANGE}} | E-001 | Critical / High / Medium / Low |

---

## 13. Evidence Pack Result

Choose one:

```text
Accepted
Accepted with risks
Insufficient
Rejected
Blocked
````

### Result

{{RESULT}}

### Explanation

{{EXPLANATION}}

---

## 14. Next Action

Recommended next action:

```text
{{NEXT_ACTION}}
```

Reason:

{{REASON}}

---

## 15. Change Log

| Date           | Change                | Reason                      | Updated By         |
| -------------- | --------------------- | --------------------------- | ------------------ |
| {{YYYY-MM-DD}} | Created evidence pack | Initial evidence collection | {{OWNER_OR_AGENT}} |

