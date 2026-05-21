# Step 02 — Evaluation Scorecard and Lessons

## Goal

Evaluate business, technical, operational, governance, cost, quality, serving, adoption, and release readiness using evidence from the full workflow.

## Required Inputs

- Confirmed context from Step 01
- All available Phase 01–21 artifacts
- User answers from HALT points
- Release evidence, test results, quality results, operational metrics, cost/performance metrics, stakeholder feedback, and usage evidence if available

## Actions

1. Define evaluation scope and non-scope.
2. Define evaluation design principles.
3. Evaluate business goals.
4. Evaluate business question coverage.
5. Evaluate requirements and KPIs.
6. Evaluate data product delivery.
7. Evaluate sources and ingestion.
8. Evaluate Bronze/Silver/Gold layers.
9. Evaluate contracts.
10. Evaluate transformations.
11. Evaluate data quality.
12. Evaluate orchestration and observability.
13. Evaluate semantic and serving readiness.
14. Evaluate lineage and metadata.
15. Evaluate governance and security.
16. Evaluate cost and performance.
17. Evaluate CI/CD and testing.
18. Collect stakeholder feedback.
19. Collect usage and adoption evidence.
20. Create readiness scorecard.
21. Document risks and known limitations.
22. Document lessons learned.
23. Recommend next iteration priorities.
24. Define final decision and handoff.

## Evaluation Ratings

Use these ratings:

| Rating | Meaning |
| --- | --- |
| Green | Evidence supports readiness/success |
| Yellow | Mostly ready but has risks or missing evidence |
| Red | Not ready or significant blocker exists |
| Unknown | Not enough evidence |
| Not Applicable | Does not apply to this project |

## Readiness Categories

Evaluate these categories:

| Category | Focus |
| --- | --- |
| Business value | Problem, user, decision, value |
| Business questions | Coverage and answerability |
| Requirements and KPIs | Acceptance criteria, metric correctness |
| Data product | Outputs, ownership, lifecycle |
| Source and ingestion | Feasibility, access, reliability |
| Domain model | Concepts, grain, identity |
| Architecture | Fit-for-purpose and trade-offs |
| Bronze/Silver/Gold | Layer correctness and boundaries |
| Contracts | Producer-consumer guarantees |
| Transformations | Logic, dependencies, incremental safety |
| Data quality | Rules, gates, evidence |
| Orchestration | Workflow, monitoring, recovery |
| Serving | Consumer access and usability |
| Lineage/metadata | Discoverability and traceability |
| Governance/security | Access, privacy, audit, compliance |
| Cost/performance | Baselines, guardrails, scalability |
| CI/CD/testing | Tests, promotion, rollback |
| Adoption | Usage, feedback, stakeholder acceptance |

## HALT — Release Evidence Availability

Stop if release readiness is being judged but release evidence is missing.

### Decision needed

How should missing release evidence be handled?

### Options

A. Mark release readiness Unknown  
B. Mark release readiness Not Ready  
C. Evaluate design readiness only  
D. User provides release evidence now  
E. Route back to Phase 21 CI/CD and Testing  

### Required response

Choose A/B/C/D/E.

## HALT — Quality and Test Result Availability

Stop if quality/test readiness is being judged but results are missing.

### Decision needed

How should missing quality/test results be handled?

### Options

A. Mark quality/testing readiness Unknown  
B. Mark production readiness Not Ready  
C. Evaluate specification/design readiness only  
D. User provides results now  
E. Route back to Phase 14 or Phase 21  

### Required response

Choose A/B/C/D/E.

## HALT — Stakeholder Feedback Availability

Stop if business value/adoption is being judged but feedback is missing.

### Decision needed

How should missing feedback be handled?

### Options

A. Mark stakeholder acceptance Unknown  
B. Use documented business goals only  
C. Evaluate technical readiness only  
D. User provides feedback now  
E. Add feedback collection as next iteration action  

### Required response

Choose A/B/C/D/E.

## HALT — Usage and Adoption Evidence

Stop if adoption is being judged but usage evidence is missing.

### Decision needed

How should missing usage/adoption evidence be handled?

### Options

A. Mark adoption Unknown  
B. Use serving design as intended adoption path only  
C. Use stakeholder acceptance instead of usage telemetry  
D. User provides usage evidence now  
E. Add usage instrumentation as next iteration action  

### Required response

Choose A/B/C/D/E.

## HALT — Readiness Decision

Stop before final recommendation if readiness decision is unclear.

### Decision needed

What is the final readiness decision?

### Options

A. Ready for production release  
B. Ready for MVP/demo release  
C. Ready for internal review only  
D. Not ready; blockers remain  
E. Design complete; implementation pending  
F. Learning/portfolio project complete  
G. Custom decision  

### Required response

Choose A/B/C/D/E/F/G.

## HALT — Blocking Risk Decision

Stop if a serious unresolved risk exists.

### Decision needed

How should blocking risks be handled?

### Options

A. Block release until resolved  
B. Accept risk with owner approval  
C. Downgrade scope to MVP/demo  
D. Route back to relevant phase  
E. Add to next iteration backlog  
F. Custom handling  

### Required response

Choose A/B/C/D/E/F.

## HALT — Next Iteration Priority

Stop if next iteration priorities are unclear.

### Decision needed

What should happen next?

### Options

A. Improve business question/KPI definition  
B. Improve source access or ingestion  
C. Improve Silver/Gold modeling  
D. Improve contracts and quality gates  
E. Improve orchestration/observability  
F. Improve semantic/serving/adoption  
G. Improve lineage/governance/security  
H. Improve cost/performance  
I. Improve CI/CD/testing/release process  
J. Move to implementation  
K. Close project  
L. Custom next iteration  

### Required response

Choose one or more options.

## Completion Criteria

This step is complete when:

- evaluation ratings are assigned or marked Unknown;
- each major project area is reviewed;
- missing evidence is explicit;
- risks and known limitations are documented;
- lessons learned are documented;
- next iteration recommendations are created;
- final readiness/handoff decision is drafted.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
