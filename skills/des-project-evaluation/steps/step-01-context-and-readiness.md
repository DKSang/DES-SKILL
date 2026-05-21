# Step 01 — Context and Readiness

## Goal

Confirm that Project Evaluation is the correct final step and that upstream artifacts, release evidence, success criteria, test results, quality results, feedback, and usage evidence are available.

## Required Inputs

Look for:

- all artifacts from Phase 01 to Phase 21;
- workflow status file;
- business success criteria;
- approved business questions;
- approved KPIs;
- data product outputs;
- quality results;
- contract validation results;
- CI/CD test results;
- deployment or release evidence;
- operational run evidence;
- cost/performance metrics;
- stakeholder feedback;
- usage/adoption evidence;
- open risks and limitations.

## Actions

1. Read `customize.toml`.
2. Check whether required upstream artifacts exist.
3. Read or summarize all available phase outputs:
   - Phase 01 through Phase 21.
4. Extract:
   - original business goals;
   - business questions;
   - requirements and KPIs;
   - target data products;
   - release criteria;
   - test/quality results;
   - contract and governance readiness;
   - operational readiness;
   - serving/adoption signals;
   - unresolved risks;
   - lessons learned candidates.
5. Check whether existing `22-project-evaluation-report.md` exists.
6. Decide whether to create a new evaluation report, update an existing one, continue as Draft, or route back to an upstream phase.

## Hints

- Evaluation should be evidence-based.
- Completing documentation does not equal delivering business value.
- If there is no release evidence, mark production readiness as Draft or Not Ready.
- If there is no stakeholder feedback, mark business adoption as Unknown.
- If usage data is unavailable, do not claim adoption.
- If P1 quality/security/contract gates are unresolved, do not recommend production release.
- Evaluation should produce either closure or a clear next iteration plan.

## Evaluation Readiness Lens

Use this lens before evaluating:

| Area | Readiness Question |
| --- | --- |
| Business | Did the project address the original business problem? |
| Questions | Can approved business questions be answered? |
| Data Product | Were intended outputs delivered? |
| Quality | Did required quality gates pass? |
| Contract | Are consumer expectations protected? |
| Operations | Can workflows run, monitor, alert, and recover? |
| Security | Are sensitive assets governed? |
| Serving | Can consumers access and use outputs? |
| Adoption | Are users actually using it or accepting it? |
| Cost | Is cost/performance acceptable? |
| Release | Is there enough evidence to release or hand off? |

## HALT — Upstream Artifact Completeness

Stop if too many upstream artifacts are missing to evaluate fairly.

### Trigger

Use this HALT if:

- Phase 01–21 artifacts are missing or incomplete;
- workflow status is unavailable;
- project scope is unclear;
- evaluation cannot map outcomes back to original goals.

### Decision needed

How should the agent proceed?

### Options

A. Continue evaluation using available artifacts and mark gaps  
B. Route back to missing phase(s)  
C. Create Draft evaluation focused on known evidence only  
D. User provides missing evidence now  
E. Stop workflow  

### Recommendation

Choose A or C if this is a learning/portfolio project. Choose B if this is production release review.

### Required response

Choose A/B/C/D/E.

## HALT — Evaluation Scope Required

Stop if evaluation scope is unclear.

### Decision needed

What should the evaluation cover?

### Options

A. MVP / first release only  
B. Full project lifecycle Phase 01–21  
C. Production readiness review  
D. Portfolio/learning evaluation  
E. Stakeholder/business value review  
F. Technical architecture and implementation readiness review  
G. Custom scope  

### Recommendation

Choose B for full DES-SKILL closure. Choose C if production release is the main decision.

### Required response

Choose A/B/C/D/E/F/G.

## HALT — Success Criteria Availability

Stop if original success criteria are missing.

### Decision needed

How should success be judged?

### Options

A. Use Phase 01 success criteria  
B. Use Phase 03 acceptance criteria and KPIs  
C. Use Phase 04 data product success criteria  
D. Use Phase 21 release gates  
E. Define evaluation criteria now  
F. Mark success evaluation as Draft/Unknown  

### Required response

Choose A/B/C/D/E/F.

## Completion Criteria

This step is complete when:

- upstream artifacts are checked;
- evaluation scope is selected;
- success criteria source is selected;
- available evidence is extracted;
- missing evidence is explicitly documented;
- the agent knows whether to create, update, or defer the evaluation report.

## Next Step

After completion, load only:

```text
steps/step-02-evaluation-scorecard-and-lessons.md
```
