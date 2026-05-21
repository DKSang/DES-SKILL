# Checklist — Code Review

## Required Context

- [ ] Implementation evidence exists or dry-run review is explicitly accepted.
- [ ] Target story is identified or unmapped implementation is documented.
- [ ] Story acceptance criteria are available or review is marked Needs more evidence.
- [ ] Dev Task Breakdown is considered.
- [ ] Implementation Plan is considered.
- [ ] Relevant DES artifacts are considered.
- [ ] Test expectations are considered.

## Review Coverage

- [ ] Code Review Summary is included.
- [ ] Review Scope is defined.
- [ ] Reviewed Story and Tasks are listed.
- [ ] Implementation Evidence Reviewed is documented.
- [ ] Acceptance Criteria Review is completed.
- [ ] Task Completion Review is completed.
- [ ] Architecture and Design Alignment Review is completed.
- [ ] Transformation Logic Review is completed or marked N/A.
- [ ] Data Contract Review is completed or marked N/A.
- [ ] Data Quality Review is completed or marked N/A.
- [ ] Test Coverage Review is completed.
- [ ] Orchestration and Observability Review is completed or marked N/A.
- [ ] Governance and Security Review is completed or marked N/A.
- [ ] Cost and Performance Review is completed or marked N/A.
- [ ] Documentation/Metadata/Status Review is completed.
- [ ] Findings are listed.
- [ ] Required Changes are listed.
- [ ] Optional Improvements are listed where useful.
- [ ] Merge Readiness Decision is included.
- [ ] Next Support Skill is recommended.

## Approval Safety

- [ ] No Blocker findings remain if decision is Approved.
- [ ] No unhandled Major findings remain if decision is Approved.
- [ ] Missing implementation evidence does not result in Approved.
- [ ] Missing test results do not result in Approved for test-critical changes.
- [ ] Contract-breaking changes are not approved without versioning/approval.
- [ ] Quality gate failures are not ignored.
- [ ] Hardcoded secrets block approval.
- [ ] Sensitive data exposure blocks approval unless governed.
- [ ] KPI/grain changes are not approved without explicit artifact alignment.
- [ ] Required docs/metadata/status updates are not ignored.

## Guardrails

- [ ] The report does not rewrite implementation code.
- [ ] The report does not perform production release approval.
- [ ] The report does not create new stories or tasks.
- [ ] The report does not hide blockers as suggestions.
- [ ] The report does not claim tests passed without evidence.
- [ ] The report does not approve out-of-scope changes silently.

## HALT Validation

- [ ] Implementation evidence HALT resolved or decision is Needs more evidence.
- [ ] Review scope HALT resolved or report remains Draft.
- [ ] Target story mapping HALT resolved or implementation is marked unmapped/out-of-scope.
- [ ] Acceptance criteria HALT resolved or decision is Needs more evidence/Blocked.
- [ ] Test result HALT resolved or missing test risk is reflected in decision.
- [ ] Contract/quality/security HALT resolved or issue is Blocker/Major.
- [ ] Breaking change HALT resolved or merge is blocked.
- [ ] Release/deploy request HALT resolved if applicable.

## Result

Choose one:

- [ ] Passed
- [ ] Passed with risks
- [ ] Blocked

## Notes

```text
<checklist notes>
```
