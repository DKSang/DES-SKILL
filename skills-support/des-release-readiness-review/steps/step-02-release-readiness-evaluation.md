# Step 02 — Release Readiness Evaluation

## Goal

Evaluate whether the release candidate is ready for its target release level.

## Required Inputs

- Release scope from Step 01
- Release target from Step 01
- Story Catalog
- Sprint Plan
- Code Review Report
- Available release evidence
- Relevant DES artifacts
- User answers from HALT decisions

## Actions

1. Summarize release candidate.
2. Review story completion.
3. Review acceptance criteria satisfaction.
4. Review code review status.
5. Review test evidence.
6. Review data quality evidence.
7. Review data contract evidence.
8. Review CI/CD gate evidence.
9. Review governance/security evidence.
10. Review orchestration/observability evidence.
11. Review cost/performance risks.
12. Review documentation/metadata/status updates.
13. Review rollback/recovery path.
14. Identify blockers and risks.
15. Define required actions.
16. Assign release decision.

## Release Decision Rules

Use these rules:

```text
Ready for Release:
  All required evidence exists, no blockers, gates pass, rollback path exists.

Ready for Demo:
  Enough evidence for non-production demo, known risks documented.

Ready for Internal Review:
  Suitable for stakeholder/internal validation, not production.

Ready with Risks:
  Non-blocking risks remain and are accepted.

Changes Required:
  Implementation or evidence gaps must be fixed before release.

Blocked:
  Serious blocker exists, such as failed P1 gate, security risk, contract breakage, or no rollback for production.

Needs More Evidence:
  Cannot judge readiness due to missing evidence.
```

## HALT — Code Review Status

Stop if code review is missing or unresolved.

### Decision needed

How should missing/unresolved code review be handled?

### Options

A. Mark release decision `Needs More Evidence`
B. Mark release decision `Blocked`
C. Route back to `des-code-review`
D. Continue only for demo/internal review
E. User provides code review result now

### Required response

Choose A/B/C/D/E.

## HALT — Test Evidence Availability

Stop if tests are required but missing.

### Decision needed

How should missing test evidence be handled?

### Options

A. Mark `Needs More Evidence`
B. Mark `Changes Required`
C. Mark `Blocked` for production/P1 release
D. Allow demo/internal review with risk noted
E. User provides test evidence now
F. Route back to implementation/testing

### Required response

Choose A/B/C/D/E/F.

## HALT — Quality and Contract Evidence

Stop if release includes data outputs but quality/contract evidence is missing.

### Decision needed

How should missing quality/contract evidence be handled?

### Options

A. Mark `Needs More Evidence`
B. Mark `Changes Required`
C. Mark `Blocked` for P1/production output
D. Allow demo with explicit risk
E. Route back to Phase 12/14 or implementation
F. User provides evidence now

### Required response

Choose A/B/C/D/E/F.

## HALT — Governance and Security Evidence

Stop if release includes sensitive, serving, API, export, AI-agent, or external access and governance/security evidence is missing.

### Decision needed

How should missing governance/security evidence be handled?

### Options

A. Mark `Needs More Evidence`
B. Mark `Blocked` for production/serving release
C. Limit target to internal/demo only
D. Route back to Phase 19 or implementation
E. User provides security evidence now
F. Remove risky output from release scope

### Required response

Choose A/B/C/D/E/F.

## HALT — Rollback and Recovery Path

Stop if rollback is unclear for release target.

### Decision needed

How should rollback gap be handled?

### Options

A. Mark `Blocked` for production release
B. Mark `Ready for Demo` only
C. Mark `Needs More Evidence`
D. Require rollback plan before release
E. User provides rollback plan now
F. Route back to Phase 21 CI/CD and Testing

### Required response

Choose A/B/C/D/E/F.

## HALT — Blocker Handling

Stop if blockers exist.

### Decision needed

How should blockers be handled?

### Options

A. Block release
B. Downgrade target to demo/internal review
C. Remove blocked item from release scope
D. Accept risk with owner approval
E. Route back to implementation
F. Keep report Draft

### Required response

Choose A/B/C/D/E/F.

## Completion Criteria

This step is complete when:

* release candidate is evaluated;
* evidence review is completed;
* missing evidence is explicit;
* blockers are documented;
* required actions are listed;
* release decision is drafted;
* draft Release Readiness Report is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
