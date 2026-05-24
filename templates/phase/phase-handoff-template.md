# Phase {{PHASE_NUMBER}} to Phase {{NEXT_PHASE_NUMBER}} Handoff

## 1. Purpose

This handoff defines what Phase {{NEXT_PHASE_NUMBER}} can safely use from Phase {{PHASE_NUMBER}}.

It separates approved decisions from assumptions, risks, open questions, and do-not-assume items.

---

## 2. Handoff Metadata

| Field | Value |
|---|---|
| From Phase | {{PHASE_NUMBER}} — {{PHASE_NAME}} |
| To Phase | {{NEXT_PHASE_NUMBER}} — {{NEXT_PHASE_NAME}} |
| From Skill | `{{PHASE_CORE_SKILL}}` |
| Next Skill | `{{NEXT_PHASE_CORE_SKILL}}` |
| Phase Artifact | `{{PHASE_ARTIFACT}}` |
| Support Plan | `{{PHASE_SUPPORT_PLAN}}` |
| Evidence Pack | `{{PHASE_EVIDENCE_PACK}}` |
| Done Gate | `{{PHASE_DONE_GATE}}` |
| Handoff Date | {{YYYY-MM-DD}} |
| Handoff Status | Ready / Ready with Risks / Not Ready / Blocked |

---

## 3. Final Decisions From Current Phase

| Decision ID | Decision | Evidence Source | Status | Reversibility |
|---|---|---|---|---|
| DEC-001 | {{DECISION}} | E-001 | Approved / Draft / Open | Easy / Medium / Hard |
| DEC-002 | {{DECISION}} | E-002 | Approved / Draft / Open | Easy / Medium / Hard |

---

## 4. Approved Inputs for Next Phase

The next phase may use the following as approved inputs:

| Input | Description | Source Artifact / Evidence | Notes |
|---|---|---|---|
| {{INPUT_NAME}} | {{DESCRIPTION}} | `{{SOURCE}}` | |
| {{INPUT_NAME}} | {{DESCRIPTION}} | `{{SOURCE}}` | |

---

## 5. Constraints for Next Phase

The next phase must respect the following constraints:

| Constraint ID | Constraint | Reason | Source |
|---|---|---|---|
| C-001 | {{CONSTRAINT}} | {{REASON}} | {{SOURCE}} |
| C-002 | {{CONSTRAINT}} | {{REASON}} | {{SOURCE}} |

---

## 6. Risks Carried Forward

| Risk ID | Risk | Severity | Impact on Next Phase | Required Handling |
|---|---|---|---|---|
| RISK-001 | {{RISK}} | Critical / High / Medium / Low | {{IMPACT}} | {{HANDLING}} |
| RISK-002 | {{RISK}} | Critical / High / Medium / Low | {{IMPACT}} | {{HANDLING}} |

---

## 7. Open Questions

| Question ID | Open Question | Owner | Needed By | Impact |
|---|---|---|---|---|
| Q-001 | {{QUESTION}} | {{OWNER}} | Phase {{NEXT_PHASE_NUMBER}} / Later | {{IMPACT}} |
| Q-002 | {{QUESTION}} | {{OWNER}} | Phase {{NEXT_PHASE_NUMBER}} / Later | {{IMPACT}} |

---

## 8. Do-Not-Assume List

The next phase must not assume:

- {{DO_NOT_ASSUME_1}}
- {{DO_NOT_ASSUME_2}}
- {{DO_NOT_ASSUME_3}}

If the next phase needs one of these assumptions, it must either:

1. Collect evidence.
2. Ask for user decision.
3. Route back to the previous phase.
4. Mark the item as accepted risk.

---

## 9. Evidence References

| Evidence ID | Evidence Name | Location | Relevance to Next Phase |
|---|---|---|---|
| E-001 | {{EVIDENCE_NAME}} | `{{EVIDENCE_PATH}}` | {{RELEVANCE}} |
| E-002 | {{EVIDENCE_NAME}} | `{{EVIDENCE_PATH}}` | {{RELEVANCE}} |

---

## 10. Recommended Next Skill

Recommended next DES skill:

```text
{{NEXT_PHASE_CORE_SKILL}}
````

Reason:

{{REASON}}

---

## 11. Next Phase Starting Instructions

When starting Phase {{NEXT_PHASE_NUMBER}}, the agent should read:

```text
1. _des-output/implementation-artifacts/des-workflow-status.md
2. {{PHASE_ARTIFACT}}
3. {{PHASE_EVIDENCE_PACK}}
4. {{PHASE_DONE_GATE}}
5. {{THIS_HANDOFF_FILE}}
6. skills/{{NEXT_PHASE_CORE_SKILL}}/SKILL.md
```

The agent should not start from the next phase artifact directly without reading this handoff.

---

## 12. Handoff Decision

Choose one:

```text
Ready
Ready with Risks
Not Ready
Blocked
```

### Handoff Status

{{HANDOFF_STATUS}}

### Explanation

{{EXPLANATION}}

### Conditions

If `Ready with Risks`, list conditions:

* {{CONDITION_1}}
* {{CONDITION_2}}

If `Not Ready` or `Blocked`, list required actions:

* {{ACTION_1}}
* {{ACTION_2}}

---

## 13. Change Log

| Date           | Change          | Reason           | Updated By         |
| -------------- | --------------- | ---------------- | ------------------ |
| {{YYYY-MM-DD}} | Created handoff | Phase transition | {{OWNER_OR_AGENT}} |

