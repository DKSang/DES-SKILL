# Step 02 - Discovery Decisions

## Goal

Resolve the key business discovery decisions required before downstream data engineering design begins.

This step prepares the decision content for the Business Discovery Brief and identifies which decisions require evidence, support work, waiver, or accepted risk.

---

## Required Inputs

- Context summary from Step 01
- User answers to readiness HALT
- Existing notes about stakeholders, consumers, goals, constraints, or scope
- Available evidence sources identified in Step 01
- Existing Business Discovery Brief, if updating

---

## Actions

1. Identify candidate stakeholders and consumers.
2. Identify the core business problem.
3. Identify the target decisions or use cases the data project should support.
4. Identify expected value.
5. Identify current data maturity and delivery ambition.
6. Define MVP scope and non-scope.
7. Capture constraints, assumptions, risks, and initial success criteria.
8. Map each important decision to evidence.
9. Mark unsupported claims as `Assumption`, `Open Question`, or `Risk`.
10. Identify required Phase 01 support work.
11. Use HALT checkpoints for decisions the agent cannot safely infer.
12. Prepare draft content for the Business Discovery Brief.
13. Prepare content for the Phase 01 Support Plan.

---

## Hints

- Stakeholder is not always the same as consumer.
- Downstream consumers may include analysts, executives, data scientists, ML systems, application users, operations teams, external customers, auditors, or other services.
- Avoid turning every possible use case into MVP scope.
- Do not define final KPI formulas here; capture candidate success criteria only.
- Do not design Gold tables, data contracts, dashboards, ML models, or APIs here.
- Treat "dashboard," "API," "semantic model," "notebook," "ML model," and "web app" as possible serving ideas, not business goals by themselves.
- A strong business discovery artifact should help Phase 2 generate concrete business questions.
- Do not design physical tables, pipelines, architecture, contracts, or serving layers in this phase.
- Do not turn unsupported assumptions into validated facts.

---

## Decision Evidence Mapping

For every major decision, capture the evidence status.

| Decision Area | Evidence Status | Allowed Output |
|---|---|---|
| Project intent | Confirmed / Assumed / Missing / Waived | Fact / Assumption / Open Question / Accepted Risk |
| Primary consumer | Confirmed / Assumed / Missing / Waived | Fact / Assumption / Open Question / Accepted Risk |
| Target use case | Confirmed / Assumed / Missing / Waived | Fact / Assumption / Open Question / Accepted Risk |
| Expected value | Confirmed / Assumed / Missing / Waived | Fact / Assumption / Open Question / Accepted Risk |
| MVP scope | Confirmed / Assumed / Missing / Waived | Fact / Assumption / Open Question / Accepted Risk |
| Success criteria | Confirmed / Assumed / Missing / Waived | Fact / Assumption / Open Question / Accepted Risk |

---

## Decision Area 1 - Primary Consumer

Identify who or what the first release mainly serves.

### HALT - Primary Consumer Priority

The primary consumer determines later business questions, KPIs, data product boundaries, Gold tables, serving design, contracts, and quality expectations.

Options:

A. Business analyst / data analyst  
B. Executive or management stakeholder  
C. Data scientist / ML user  
D. Operational team  
E. Application or product user  
F. External customer or partner  
G. Internal platform/data team  
H. Machine/system consumer  
I. Multiple consumers with prioritized order  
J. Custom consumer  

Required response:

Choose one option or provide a prioritized list.

---

## Decision Area 2 - Target Decision or Use Case

Identify what decision, workflow, or downstream use case the data project should support.

### HALT - Target Decision or Use Case Approval

A data project without a target decision or use case becomes a collection of tables.

Options:

A. Descriptive analytics / reporting  
B. Operational monitoring  
C. Forecasting or predictive analytics  
D. Machine learning feature/data foundation  
E. Customer-facing or embedded analytics  
F. Reverse ETL / operational activation  
G. Data platform foundation  
H. Compliance, audit, or governance  
I. Migration or modernization  
J. Custom use case  

Required response:

Choose the top 1-3 target use cases.

---

## Decision Area 3 - Expected Value

Clarify why this work matters.

### HALT - Value Statement Required

Do not proceed if the expected value is unclear.

Options:

A. Faster or more reliable reporting  
B. Better business decisions  
C. Reduced manual work  
D. Improved data quality and trust  
E. Production-ready ML/AI foundation  
F. Lower cost or better performance  
G. Compliance or risk reduction  
H. Better customer/product experience  
I. Learning/portfolio demonstration  
J. Custom value  

Required response:

Choose one or more value drivers.

---

## Decision Area 4 - MVP Boundary

Define the first useful version.

### HALT - MVP Scope Boundary

Scope must be constrained before requirements, sources, and architecture.

Options:

A. Single source to single consumer output  
B. Multi-source analytics MVP  
C. Foundational lakehouse/warehouse MVP  
D. Data quality/governance MVP  
E. ML/AI data foundation MVP  
F. Migration MVP  
G. Full platform release  
H. Custom staged MVP  

Required response:

Choose one option and define what is explicitly out of scope.

---

## Decision Area 5 - Data Maturity Context

Classify the project maturity.

Use these categories:

| Level | Meaning |
| --- | --- |
| Starting with data | Early stage, fuzzy goals, ad hoc needs, foundational architecture needed |
| Scaling with data | Formal practices, scalable architecture, DataOps/testing needed |
| Leading with data | Mature platform, automation, governance, self-service, strong controls |
| Portfolio / learning simulation | Learning project designed to demonstrate professional practice |

### HALT - Maturity Level

Data maturity affects governance, automation, contracts, CI/CD, security, and evidence requirements.

Options:

A. Starting with data  
B. Scaling with data  
C. Leading with data  
D. Portfolio / learning simulation  
E. Unknown  

Required response:

Choose A/B/C/D/E.

---

## Decision Area 6 - Initial Success Criteria

Capture early success criteria without final KPI design.

Examples:

- top business questions can be answered;
- first trusted data product output is available;
- data freshness is visible;
- quality checks exist for critical outputs;
- consumers can access data through the agreed serving path;
- local or CI validation exists;
- lineage from source to serving is documented.

### HALT - Success Criteria

Do not proceed if success is undefined.

Options:

A. Learning/portfolio success criteria  
B. Internal analytics success criteria  
C. MVP product success criteria  
D. Production-readiness success criteria  
E. Migration/modernization success criteria  
F. Mixed success criteria  

Required response:

Choose one option and list 3-5 initial success criteria.

---

## Phase 01 Required Support Work

Based on the decisions above, prepare a support plan using these categories:

| Support Work | Required When | Output |
|---|---|---|
| Context Source Review | Always | Evidence pack |
| Business Intent Validation | Always | Evidence pack |
| Stakeholder and Consumer Check | Primary consumer affects Phase 02 | Evidence pack |
| Scope Boundary Check | MVP scope affects Phase 02 and 03 | Evidence pack |
| Success Criteria Check | Success criteria affect Phase 03 | Evidence pack |
| Done Gate | Always before marking Done | Done Gate result |
| Handoff to Phase 02 | Always before Phase 02 | Handoff file |

---

## Completion Criteria

This step is complete when:

- primary consumer is known or explicitly marked unresolved;
- target decision or use case is known or explicitly marked unresolved;
- expected value is known or explicitly marked unresolved;
- MVP scope is known or explicitly marked unresolved;
- maturity context is known or explicitly marked unresolved;
- initial success criteria are known or explicitly marked unresolved;
- decision evidence mapping is prepared;
- required support work is identified;
- unresolved items are explicitly marked as open questions.

---

## Next Step

After completion, load only:

```text
steps/step-03-artifact-checklist-and-handoff.md
```
