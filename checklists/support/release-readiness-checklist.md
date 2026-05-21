# Checklist — Release Readiness Review

## Required Context

- [ ] Release scope is defined.
- [ ] Release target is defined.
- [ ] Story Catalog is considered.
- [ ] Sprint Plan is considered.
- [ ] Code Review Report is considered.
- [ ] Relevant DES artifacts are considered.
- [ ] Release evidence availability is documented.

## Release Readiness Coverage

- [ ] Release Readiness Summary is included.
- [ ] Release Scope is included.
- [ ] Release Candidate Inventory is included.
- [ ] Story Completion Review is completed.
- [ ] Acceptance Criteria Review is completed.
- [ ] Code Review Status is completed.
- [ ] Test Evidence Review is completed.
- [ ] Data Quality Evidence Review is completed.
- [ ] Data Contract Evidence Review is completed.
- [ ] CI/CD Gate Review is completed.
- [ ] Governance and Security Review is completed.
- [ ] Orchestration and Observability Review is completed.
- [ ] Cost and Performance Risk Review is completed.
- [ ] Documentation/Metadata/Status Review is completed.
- [ ] Rollback and Recovery Review is completed.
- [ ] Release Risks and Blockers are documented.
- [ ] Required Actions are documented.
- [ ] Release Decision is included.
- [ ] Handoff Notes are included.
- [ ] Next Support Skill is recommended.

## Decision Safety

- [ ] `Ready for Release` is not used if required evidence is missing.
- [ ] `Ready for Release` is not used if blocker exists.
- [ ] `Ready for Release` is not used if code review is unresolved.
- [ ] `Ready for Release` is not used if required tests are missing/failing.
- [ ] `Ready for Release` is not used if P1 quality/contract gates are missing/failing.
- [ ] `Ready for Release` is not used if security evidence is missing for sensitive/serving outputs.
- [ ] Production readiness is not claimed without rollback/recovery path.
- [ ] Demo/internal review is clearly separated from production release.
- [ ] Missing evidence is marked `Missing` or `Unknown`.

## Guardrails

- [ ] The report does not implement fixes.
- [ ] The report does not deploy or promote.
- [ ] The report does not create new stories.
- [ ] The report does not hide blockers.
- [ ] The report does not claim tests passed without evidence.
- [ ] The report does not treat code review approval as enough for production release.
- [ ] The report documents required actions clearly.

## HALT Validation

- [ ] Release scope HALT resolved or report remains Draft.
- [ ] Release target HALT resolved or report remains Draft.
- [ ] Release evidence HALT resolved or decision is Needs More Evidence/Dry-run.
- [ ] Code review status HALT resolved or release is not approved.
- [ ] Test evidence HALT resolved or release is not approved for production.
- [ ] Quality/contract evidence HALT resolved or P1 output release is blocked.
- [ ] Governance/security evidence HALT resolved or serving/sensitive release is blocked.
- [ ] Rollback/recovery HALT resolved or production release is blocked.
- [ ] Blocker handling HALT resolved or release remains Blocked.
- [ ] Deploy request HALT resolved if applicable.

## Result

Choose one:

- [ ] Passed
- [ ] Passed with risks
- [ ] Blocked

## Notes

```text
<checklist notes>
```
