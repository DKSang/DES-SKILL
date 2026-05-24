# Phase {{PHASE_NUMBER}} Execution Index — {{PHASE_NAME}}

## 1. Purpose

This index lists all artifacts, support plans, evidence files, revision reports, done gates, and handoffs related to Phase {{PHASE_NUMBER}}.

It is optional but recommended for complex phases.

---

## 2. Phase Metadata

| Field | Value |
|---|---|
| Phase Number | {{PHASE_NUMBER}} |
| Phase Name | {{PHASE_NAME}} |
| Phase Core Skill | `{{PHASE_CORE_SKILL}}` |
| Current Status | Not Started / Draft / Evidence Required / Evidence Collected / Validated / Done / Blocked / Skipped |
| Last Updated | {{YYYY-MM-DD}} |
| Next Recommended Skill | `{{NEXT_RECOMMENDED_SKILL}}` |

---

## 3. Phase Files

| File Type | Path | Status | Notes |
|---|---|---|---|
| Phase Artifact | `{{PHASE_ARTIFACT}}` | Draft / Revised / Final / Missing | |
| Support Plan | `{{PHASE_SUPPORT_PLAN}}` | Draft / Complete / Missing | |
| Evidence Pack | `{{PHASE_EVIDENCE_PACK}}` | Not Started / In Progress / Accepted / Missing | |
| Artifact Revision Report | `{{ARTIFACT_REVISION_REPORT}}` | Draft / Complete / Missing | |
| Done Gate | `{{PHASE_DONE_GATE}}` | Pass / Pass with risks / Fail / Missing | |
| Handoff | `{{PHASE_HANDOFF}}` | Ready / Ready with Risks / Not Ready / Missing | |

---

## 4. Support Skills Used

| Support Skill | Purpose | Output | Status |
|---|---|---|---|
| `{{SUPPORT_SKILL}}` | {{PURPOSE}} | `{{OUTPUT}}` | Not Started / In Progress / Done / Blocked / Waived |
| `{{SUPPORT_SKILL}}` | {{PURPOSE}} | `{{OUTPUT}}` | Not Started / In Progress / Done / Blocked / Waived |

---

## 5. Evidence Files

| Evidence ID | Evidence File | Type | Status | Used in Artifact Revision? |
|---|---|---|---|---:|
| E-001 | `{{EVIDENCE_FILE}}` | Technical / Data / Research / Review / Decision / Test | Accepted / Partial / Rejected / Waived | Yes / No |
| E-002 | `{{EVIDENCE_FILE}}` | Technical / Data / Research / Review / Decision / Test | Accepted / Partial / Rejected / Waived | Yes / No |

---

## 6. Phase Result

| Result Area | Status | Notes |
|---|---|---|
| Artifact | Draft / Revised / Final | |
| Evidence | Missing / Partial / Accepted | |
| Done Gate | Not Run / Pass / Pass with risks / Fail / Blocked | |
| Handoff | Not Ready / Ready / Ready with Risks / Blocked | |

---

## 7. Current Blockers

| Blocker | Impact | Owner | Next Action |
|---|---|---|---|
| {{BLOCKER}} | {{IMPACT}} | {{OWNER}} | {{ACTION}} |

---

## 8. Next Action

Recommended next action:

```text
{{NEXT_ACTION}}
````

Reason:

{{REASON}}

---

## 9. Change Log

| Date           | Change                        | Reason         | Updated By         |
| -------------- | ----------------------------- | -------------- | ------------------ |
| {{YYYY-MM-DD}} | Created phase execution index | Phase tracking | {{OWNER_OR_AGENT}} |

