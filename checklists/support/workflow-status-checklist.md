# Checklist — Workflow Status Update

## Required Context

- [ ] Existing status file is checked if present.
- [ ] Status update scope is defined.
- [ ] Main DES artifacts are scanned or marked not applicable.
- [ ] Support artifacts are scanned or marked not applicable.
- [ ] Conflicting evidence is checked.
- [ ] Missing artifacts are not marked Done without evidence.

## Status Coverage

- [ ] Workflow Status Summary is included.
- [ ] Project Metadata is included.
- [ ] Current Workflow State is included.
- [ ] Main DES Phase Status is included.
- [ ] Support Skill Status is included.
- [ ] Epic Status is included or marked N/A.
- [ ] Story Status is included or marked N/A.
- [ ] Sprint Status is included or marked N/A.
- [ ] Readiness Status is included or marked N/A.
- [ ] Implementation Status is included or marked N/A.
- [ ] Review Status is included or marked N/A.
- [ ] Release Status is included or marked N/A.
- [ ] Correct Course Status is included or marked N/A.
- [ ] Open Blockers are listed.
- [ ] Open Risks are listed.
- [ ] Required Next Actions are listed.
- [ ] Routing Decision is included.
- [ ] Status History is preserved or appended.

## Routing Safety

- [ ] Next route follows evidence.
- [ ] Correct-course blocker is not ignored.
- [ ] Blocked release does not route to release.
- [ ] Blocked code review does not route to release readiness without changes.
- [ ] Story without readiness check does not route to task breakdown.
- [ ] No task breakdown routes to implementation plan.
- [ ] Missing epic/story catalog routes to the correct support skill.
- [ ] Incomplete main phase routes to the next needed DES main phase.

## Guardrails

- [ ] Done is only used with evidence.
- [ ] Missing is not confused with Blocked.
- [ ] Unknown is used when evidence is insufficient.
- [ ] Existing history is not silently overwritten.
- [ ] User claims are recorded as user-provided if no artifact evidence exists.
- [ ] Status file does not invent artifact results.

## HALT Validation

- [ ] Status scope HALT resolved or status remains Draft.
- [ ] Conflicting status evidence HALT resolved or conflict documented.
- [ ] Missing artifact Done request HALT resolved or status not marked Done.
- [ ] Blocker severity HALT resolved or marked Unknown.
- [ ] Next route HALT resolved or routing marked Unknown.
- [ ] History overwrite HALT resolved if applicable.

## Result

Choose one:

- [ ] Passed
- [ ] Passed with risks
- [ ] Blocked

## Notes

```text
<checklist notes>
```
