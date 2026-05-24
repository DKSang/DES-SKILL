# Step 02 — Evaluation Scorecard, Lessons, and Evidence

## Goal

Evaluate business, technical, operational, governance, cost, quality, serving, adoption, and release readiness using evidence from the full workflow.

This step prepares the Project Evaluation Report and identifies which evaluation conclusions are supported by evidence, missing evidence, waiver, or accepted risk.

---

## Required Inputs

- Confirmed context from Step 01
- All available Phase 01–21 artifacts
- Phase 21 to Phase 22 handoff, if available
- Phase 21 evidence pack, if available
- User answers from HALT points
- Release evidence, test results, quality results, operational metrics, cost/performance metrics, stakeholder feedback, and usage evidence if available

---

## Actions

1. Define evaluation scope and non-scope.
2. Define evaluation design principles.
3. Create evidence availability summary.
4. Evaluate business goals.
5. Evaluate business question coverage.
6. Evaluate requirements and KPIs.
7. Evaluate data product delivery.
8. Evaluate sources and ingestion.
9. Evaluate domain model.
10. Evaluate architecture.
11. Evaluate Bronze/Silver/Gold layers.
12. Evaluate contracts.
13. Evaluate transformations.
14. Evaluate data quality.
15. Evaluate orchestration and observability.
16. Evaluate semantic and serving readiness.
17. Evaluate lineage and metadata.
18. Evaluate governance and security.
19. Evaluate cost and performance.
20. Evaluate CI/CD and testing.
21. Collect stakeholder feedback.
22. Collect usage and adoption evidence.
23. Create readiness scorecard.
24. Document risks and known limitations.
25. Document lessons learned.
26. Recommend next iteration priorities.
27. Define final decision and handoff.
28. Map each conclusion to evidence or mark missing.
29. Identify required Phase 22 support work.
30. Use HALT checkpoints for unresolved decisions.
31. Prepare draft Project Evaluation Report content.
32. Prepare content for the Phase 22 Support Plan.

---

## Evaluation Design Principles

Use these defaults unless overridden:

| Principle | Meaning |
|---|---|
| Evidence first | Do not claim success without evidence |
| Separate readiness types | Business, design, implementation, release, adoption, and production readiness are different |
| Unknown is valid | Missing evidence should be marked Unknown, not Green |
| Risks stay visible | Known limitations must be documented |
| Business value matters | Technical completion is not business success |
| Release requires evidence | Production readiness requires test/release/security evidence |
| Adoption requires usage or feedback | Do not infer adoption from artifact completion |
| Next iteration must be focused | Recommend specific next steps, not vague improvement |
| No implementation here | Evaluate and close or route; do not fix or deploy |

---

## Evaluation Ratings

Use these ratings:

| Rating | Meaning |
|---|---|
| Green | Evidence supports readiness/success |
| Yellow | Mostly ready but has risks or missing evidence |
| Red | Not ready or significant blocker exists |
| Unknown | Not enough evidence |
| Not Applicable | Does not apply to this project |

---

## Readiness Categories

Evaluate these categories:

| Category | Focus |
|---|---|
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

---

## Evaluation Evidence Mapping

For every major conclusion, capture evidence status.

| Evaluation Field | Evidence Status | Allowed Rating |
|---|---|---|
| Phase 21 handoff | Confirmed / Partial / Missing / Waived | Green / Yellow / Red / Unknown |
| Upstream artifacts | Complete / Partial / Missing / Waived | Green / Yellow / Red / Unknown |
| Success criteria | Confirmed / Partial / Missing / Waived | Green / Yellow / Unknown |
| Business goals | Confirmed / Partial / Missing / Waived | Green / Yellow / Unknown |
| Business questions | Confirmed / Partial / Missing / Waived | Green / Yellow / Red / Unknown |
| Requirements/KPIs | Confirmed / Partial / Missing / Waived | Green / Yellow / Red / Unknown |
| Data product delivery | Confirmed / Partial / Missing / Waived | Green / Yellow / Red / Unknown |
| Source/ingestion | Confirmed / Partial / Missing / Waived | Green / Yellow / Red / Unknown |
| Domain model | Confirmed / Partial / Missing / Waived | Green / Yellow / Red / Unknown |
| Architecture | Confirmed / Partial / Missing / Waived | Green / Yellow / Red / Unknown |
| B/S/G layers | Confirmed / Partial / Missing / Waived | Green / Yellow / Red / Unknown |
| Contracts | Confirmed / Partial / Missing / Waived | Green / Yellow / Red / Unknown |
| Transformations | Confirmed / Partial / Missing / Waived | Green / Yellow / Red / Unknown |
| Data quality | Results confirmed / Design only / Missing / Waived | Green / Yellow / Red / Unknown |
| Orchestration | Run evidence / Design only / Missing / Waived | Green / Yellow / Red / Unknown |
| Semantic/serving | Confirmed / Partial / Missing / Waived | Green / Yellow / Red / Unknown |
| Lineage/metadata | Confirmed / Partial / Missing / Waived | Green / Yellow / Red / Unknown |
| Governance/security | Confirmed / Partial / Missing / Waived | Green / Yellow / Red / Unknown |
| Cost/performance | Baseline confirmed / Plan only / Missing / Waived | Green / Yellow / Red / Unknown |
| CI/CD/testing | Results confirmed / Design only / Missing / Waived | Green / Yellow / Red / Unknown |
| Stakeholder feedback | Confirmed / Partial / Missing / Waived | Green / Yellow / Unknown |
| Usage/adoption | Confirmed / Partial / Missing / Waived | Green / Yellow / Unknown |
| Release evidence | Confirmed / Partial / Missing / Waived | Green / Yellow / Red / Unknown |

---

## HALT — Release Evidence Availability

Stop if release readiness is being judged but release evidence is missing.

### Options

A. Mark release readiness Unknown  
B. Mark release readiness Not Ready  
C. Evaluate design readiness only  
D. User provides release evidence now  
E. Route back to Phase 21 CI/CD and Testing  

### Required response

Choose A/B/C/D/E.

---

## HALT — Quality and Test Result Availability

Stop if quality/test readiness is being judged but results are missing.

### Options

A. Mark quality/testing readiness Unknown  
B. Mark production readiness Not Ready  
C. Evaluate specification/design readiness only  
D. User provides results now  
E. Route back to Phase 14 or Phase 21  

### Required response

Choose A/B/C/D/E.

---

## HALT — Stakeholder Feedback Availability

Stop if business value/adoption is being judged but feedback is missing.

### Options

A. Mark stakeholder acceptance Unknown  
B. Use documented business goals only  
C. Evaluate technical readiness only  
D. User provides feedback now  
E. Add feedback collection as next iteration action  

### Required response

Choose A/B/C/D/E.

---

## HALT — Usage and Adoption Evidence

Stop if adoption is being judged but usage evidence is missing.

### Options

A. Mark adoption Unknown  
B. Use serving design as intended adoption path only  
C. Use stakeholder acceptance instead of usage telemetry  
D. User provides usage evidence now  
E. Add usage instrumentation as next iteration action  

### Required response

Choose A/B/C/D/E.

---

## HALT — Readiness Decision

Stop before final recommendation if readiness decision is unclear.

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

---

## HALT — Blocking Risk Decision

Stop if a serious unresolved risk exists.

### Options

A. Block release until resolved  
B. Accept risk with owner approval  
C. Downgrade scope to MVP/demo  
D. Route back to relevant phase  
E. Add to next iteration backlog  
F. Custom handling  

### Required response

Choose A/B/C/D/E/F.

---

## HALT — Next Iteration Priority

Stop if next iteration priorities are unclear.

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

---

## HALT — Workflow Closeout Decision

Stop if final closeout status is unclear.

### Options

A. Workflow complete  
B. Workflow complete with risks  
C. Ready for implementation handoff  
D. Ready for MVP/demo  
E. Ready for internal review  
F. Not ready; blocked  
G. Next iteration required  
H. Route back to specific phase  
I. Learning/portfolio complete  
J. Custom closeout  

### Required response

Choose A/B/C/D/E/F/G/H/I/J.

---

## Completion Criteria

This step is complete when:

- evaluation ratings are assigned or marked Unknown;
- each major project area is reviewed;
- missing evidence is explicit;
- risks and known limitations are documented;
- lessons learned are documented;
- next iteration recommendations are created;
- final readiness/closeout decision is drafted;
- evidence mapping is prepared;
- required support work is identified;
- draft Project Evaluation Report content is ready.

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
