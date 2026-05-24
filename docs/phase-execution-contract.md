# DES Phase Execution Contract

## Purpose

The DES Phase Execution Contract defines how a DES phase is completed.

This contract does not replace the existing DES-SKILL workflow, main skills, support skills, checklists, or workflow status file.

It adds a stricter completion model on top of the existing system:

> A phase is not Done when its artifact is written.  
> A phase is Done when the artifact has been used to guide the required support work, evidence has been collected, the artifact has been revised from that evidence, and a safe handoff exists for the next phase.

---

## Why This Contract Exists

The previous DES-SKILL workflow encouraged agents to create all 22 main artifacts first, then move into support skills and implementation.

That approach is useful for high-level planning, but it can become too waterfall for real data engineering work.

In real data engineering projects, later phases depend on facts that can only be discovered by doing limited support work inside the current phase.

Examples:

- Phase 05 Data Source Assessment cannot be Done from discussion only.
  It often requires API probing, sample extraction, schema inspection, data profiling, license checks, and ingestion feasibility checks.

- Phase 07 Architecture Design cannot be fully trusted without feasibility, cost, runtime, security, and platform constraints being checked.

- Phase 10 Silver Layer Design cannot be reliable without sample data profiling and transformation rule validation.

Therefore, DES-SKILL uses a phase-by-phase validated delivery model.

---

## Core Principle

Each phase follows this execution model:

```text
Phase Core Skill
    ↓
Initial Phase Artifact
    ↓
Phase Support Plan
    ↓
Run Required Support Skills
    ↓
Evidence Pack
    ↓
Revised Phase Artifact
    ↓
Phase Done Gate
    ↓
Validated Handoff to Next Phase
```

---

## Important Definitions

### Phase Core Skill

A Phase Core Skill is one of the main DES lifecycle skills.

Examples:

```text
des-business-discovery
des-business-questions
des-requirements-and-kpis
des-data-product-definition
des-data-source-assessment
des-domain-modeling
des-architecture-design
...
```

The Phase Core Skill is responsible for:

1. Reading upstream context.
2. Creating the initial phase artifact.
3. Identifying what must be validated.
4. Recommending required support skills.
5. Revising the artifact after evidence is collected.
6. Producing a safe handoff to the next phase.

---

### Initial Phase Artifact

The Initial Phase Artifact is the first structured output of a phase.

It captures the current understanding, assumptions, decisions, open questions, and candidate design choices.

However, the Initial Phase Artifact is not enough to mark a phase Done.

It is a working artifact used to coordinate support work.

Example:

```text
_des-output/planning-artifacts/05-data-source-inventory.md
```

At first, this file may contain candidate sources, assessment criteria, open questions, risks, and required probes.

It should not be treated as final until evidence has been collected and applied.

---

### Phase Support Plan

A Phase Support Plan defines which support skills must be used to complete the phase.

It answers:

1. What needs to be validated?
2. Which support skill should validate it?
3. What evidence should be produced?
4. Which support tasks are required?
5. Which support tasks are optional?
6. Which support tasks are waived, and why?

Recommended location:

```text
_des-output/phase-support-plans/phase-XX-support-plan.md
```

Example:

```text
_des-output/phase-support-plans/phase-05-support-plan.md
```

---

### Support Skill

A Support Skill is a specialized skill used to validate, implement, review, or produce evidence for part of a phase.

Support skills are no longer limited to post-22-phase implementation work.

They may be used inside a phase when needed.

Existing support skills can still be used after planning, but they can also support phase completion when relevant.

Examples of support work:

```text
source probing
schema inspection
data profiling
license review
ingestion feasibility check
cost check
security review
code review
artifact revision
workflow status update
```

---

### Evidence Pack

An Evidence Pack contains the proof that phase decisions are grounded in real findings.

Evidence may include:

```text
research notes
source documentation
sample API responses
schema snapshots
profiling reports
test output
spike results
cost notes
security review notes
code review notes
decision records
```

Recommended location:

```text
_des-output/evidence/phase-XX/
```

Example:

```text
_des-output/evidence/phase-05/
```

---

### Revised Phase Artifact

The Revised Phase Artifact is the updated version of the phase artifact after support work and evidence collection.

It should clearly show:

1. Which assumptions were confirmed.
2. Which assumptions were rejected.
3. Which decisions were made.
4. Which risks remain.
5. Which outputs are safe for downstream use.
6. Which items are still open or blocked.

A phase should not move to Done if its artifact was not revised after meaningful evidence was collected.

---

### Phase Done Gate

The Phase Done Gate checks whether the phase is truly complete.

A phase can only be marked Done when all required conditions pass.

Minimum gate:

```text
1. Initial artifact exists.
2. Required support skills were identified.
3. Required support skills were executed or explicitly waived with reason.
4. Evidence was collected.
5. Artifact was revised using evidence.
6. Key decisions were recorded.
7. Risks and open questions were documented.
8. Handoff to the next phase exists.
9. The next phase can safely consume the handoff.
```

---

### Validated Handoff

A Validated Handoff is the final output passed from one phase to the next.

It should tell the next phase:

1. What has been decided.
2. What can be safely assumed.
3. What must not be assumed.
4. What risks are carried forward.
5. What blockers remain.
6. What artifact and evidence should be used as input.

Recommended location:

```text
_des-output/phase-handoffs/phase-XX-to-YY-handoff.md
```

Example:

```text
_des-output/phase-handoffs/phase-05-to-06-handoff.md
```

---

## Phase Status Model

DES-SKILL may continue using the existing workflow status file.

However, phase completion should distinguish between artifact creation and validated completion.

Recommended phase statuses:

| Status               | Meaning                                                                               |
| -------------------- | ------------------------------------------------------------------------------------- |
| `Not Started`        | The phase has not started.                                                            |
| `Draft`              | Initial artifact exists, but evidence is missing or incomplete.                       |
| `Evidence Required`  | The phase has identified required support work.                                       |
| `Evidence Collected` | Required support outputs exist, but artifact revision or gate review is not complete. |
| `Validated`          | Artifact has been revised using evidence and is ready for Done Gate.                  |
| `Done`               | Done Gate passed and handoff exists.                                                  |
| `Blocked`            | The phase cannot continue until a blocker is resolved.                                |
| `Skipped`            | The phase was skipped with an explicit reason and accepted risk.                      |

Do not mark a phase `Done` only because the initial artifact exists.

---

## Required Output Pattern Per Phase

Each phase should produce or update the following:

```text
_des-output/planning-artifacts/XX-phase-artifact.md
_des-output/phase-support-plans/phase-XX-support-plan.md
_des-output/evidence/phase-XX/
_des-output/phase-handoffs/phase-XX-to-YY-handoff.md
_des-output/implementation-artifacts/des-workflow-status.md
```

Not every phase requires heavy technical evidence.

However, every phase must explicitly decide whether support work is:

```text
Required
Optional
Waived with reason
Not applicable
```

---

## General Phase Completion Flow

For every phase:

```text
1. Read upstream handoff and workflow status.
2. Run the Phase Core Skill.
3. Create or update the initial phase artifact.
4. Identify required support skills.
5. Create the Phase Support Plan.
6. Run support skills or explicitly waive them.
7. Store support outputs in the Evidence Pack.
8. Revise the phase artifact using the evidence.
9. Run the Phase Done Gate.
10. Create the Validated Handoff.
11. Update workflow status.
12. Recommend the next phase.
```

---

## Support Skill Waiver Policy

A required support skill may be waived only when the reason is explicit.

Allowed waiver reasons:

```text
Not applicable to this project
Already satisfied by existing evidence
Deferred with accepted risk
Blocked by missing access
Out of scope for current workflow mode
Replaced by another support skill
```

Bad waiver reasons:

```text
Need to move fast
Assumed to be fine
Will check later
No time
Not important
```

If a support skill is waived, the risk must be recorded in the phase artifact and handoff.

---

## Phase Done Gate Checklist

A phase passes Done Gate only if:

```text
- [ ] Initial phase artifact exists.
- [ ] Upstream inputs were read or missing inputs were documented.
- [ ] Required support work was identified.
- [ ] Required support skills were executed or waived with reason.
- [ ] Evidence exists for all critical phase decisions.
- [ ] Evidence was stored in the phase evidence folder or referenced clearly.
- [ ] Initial artifact was revised using evidence.
- [ ] Key decisions are explicit.
- [ ] Assumptions are explicit.
- [ ] Risks are explicit.
- [ ] Open questions are explicit.
- [ ] Handoff to the next phase exists.
- [ ] Next phase input expectations are clear.
- [ ] Workflow status was updated.
```

---

## Phase Handoff Checklist

A phase handoff should include:

```text
- [ ] Final decisions from the phase.
- [ ] Approved inputs for the next phase.
- [ ] Evidence references.
- [ ] Constraints for the next phase.
- [ ] Risks carried forward.
- [ ] Open questions.
- [ ] Do-not-assume list.
- [ ] Next recommended skill.
```

---

## Example: Phase 05 Data Source Assessment

Phase 05 should not be considered Done when the Data Source Inventory table is created.

Phase 05 should usually include support work such as:

```text
source access check
API or file probe
sample response capture
schema inspection
data profiling
freshness check
license or terms review
ingestion feasibility check
```

Possible outputs:

```text
_des-output/planning-artifacts/05-data-source-inventory.md
_des-output/phase-support-plans/phase-05-support-plan.md
_des-output/evidence/phase-05/source-probe-results.md
_des-output/evidence/phase-05/schema-inspection.md
_des-output/evidence/phase-05/data-profiling-report.md
_des-output/evidence/phase-05/license-review.md
_des-output/phase-handoffs/phase-05-to-06-handoff.md
```

Phase 05 is Done only when:

```text
1. Candidate sources are mapped to product outputs and KPIs.
2. Access feasibility is checked.
3. Schema and sample data are inspected where possible.
4. Quality and freshness risks are documented.
5. License, usage, or access risks are documented.
6. Ingestion feasibility is rated.
7. The artifact is revised from evidence.
8. A handoff exists for Phase 06 Domain Modeling.
```

---

## Relationship With Existing DES-SKILL Workflow

This contract is compatible with the current DES-SKILL system.

It does not remove:

```text
22 main lifecycle skills
support skills
learning skills
workflow status
checklists
HALT policy
step-file architecture
```

It changes the interpretation of completion:

```text
Old interpretation:
Phase artifact created → phase may be Done

New interpretation:
Phase artifact created → support work planned → evidence collected → artifact revised → Done Gate passed → phase Done
```

---

## Relationship With Support Skills

Support skills have two valid usage modes.

### Mode A — Post-Planning Implementation

Support skills can still be used after multiple planning artifacts exist.

Example:

```text
22 main artifacts
→ des-create-epic
→ des-create-story
→ des-sprint-planning
→ des-dev-task-breakdown
→ des-implementation-plan
→ implementation
```

### Mode B — Inside-Phase Completion

Support skills can also be used inside a phase to complete that phase.

Example:

```text
des-data-source-assessment
→ phase-05-support-plan
→ source probe / profiling / schema inspection
→ evidence pack
→ revised 05-data-source-inventory
→ phase-05-done-gate
→ phase-05-to-06-handoff
```

Mode B is preferred when downstream phases depend on facts that cannot be known from discussion alone.

---

## Agent Rules

When following this contract, the agent must:

```text
1. Never mark a phase Done only because an artifact exists.
2. Always identify required support work before Done.
3. Store or reference evidence clearly.
4. Revise the phase artifact after meaningful evidence is collected.
5. Carry forward unresolved risks instead of hiding them.
6. Create a handoff before recommending the next phase.
7. Update workflow status after phase completion.
8. Respect all existing HALT points.
```

---

## Recommended Next Repository Updates

After adding this contract, update the repository gradually:

```text
1. Link this contract from README.md.
2. Link this contract from docs/workflow.md.
3. Clarify docs/support-skills.md so support skills can run inside phases.
4. Update templates/00-workflow-status-template.md with evidence and handoff tracking.
5. Update Phase 05 as the first reference phase.
6. Extend the pattern to other phases gradually.
```

---

## Phase Execution Templates and Checklists Reference

Update 2 introduces standard templates and checklists for executing each phase according to this contract:

### Phase Templates
- [Phase Support Plan Template](file:///C:/Users/dksan/Code/data-engineer/data-engineering-superpowers/templates/phase/phase-support-plan-template.md)
- [Phase Evidence Pack Template](file:///C:/Users/dksan/Code/data-engineer/data-engineering-superpowers/templates/phase/phase-evidence-pack-template.md)
- [Phase Artifact Revision Template](file:///C:/Users/dksan/Code/data-engineer/data-engineering-superpowers/templates/phase/phase-artifact-revision-template.md)
- [Phase Done Gate Template](file:///C:/Users/dksan/Code/data-engineer/data-engineering-superpowers/templates/phase/phase-done-gate-template.md)
- [Phase Handoff Template](file:///C:/Users/dksan/Code/data-engineer/data-engineering-superpowers/templates/phase/phase-handoff-template.md)
- [Phase Execution Index Template](file:///C:/Users/dksan/Code/data-engineer/data-engineering-superpowers/templates/phase/phase-execution-index-template.md)

### Phase Checklists
- [Phase Support Plan Checklist](file:///C:/Users/dksan/Code/data-engineer/data-engineering-superpowers/checklists/phase-support-plan-checklist.md)
- [Phase Evidence Pack Checklist](file:///C:/Users/dksan/Code/data-engineer/data-engineering-superpowers/checklists/phase-evidence-pack-checklist.md)
- [Phase Artifact Revision Checklist](file:///C:/Users/dksan/Code/data-engineer/data-engineering-superpowers/checklists/phase-artifact-revision-checklist.md)
- [Phase Done Gate Checklist](file:///C:/Users/dksan/Code/data-engineer/data-engineering-superpowers/checklists/phase-done-gate-checklist.md)
- [Phase Handoff Checklist](file:///C:/Users/dksan/Code/data-engineer/data-engineering-superpowers/checklists/phase-handoff-checklist.md)

---

## Workflow Status v2

DES-SKILL uses the workflow status file as the control plane for phase-by-phase validated delivery.

Template:

```text
templates/00-workflow-status-template.md
```

Runtime project file:

```text
_des-output/implementation-artifacts/des-workflow-status.md
```

The workflow status file must track more than whether a phase artifact exists.

It should track:

```text
Phase Artifact
Phase Support Plan
Phase Evidence Pack
Phase Artifact Revision
Phase Done Gate
Phase Handoff
Overall Phase Status
```

A phase may be marked `Done` only when:

```text
Done Gate = Pass or Pass with risks
and
Handoff = Ready or Ready with Risks
```

The next phase should not start from the previous phase artifact alone.

It should start from:

```text
1. des-workflow-status.md
2. previous phase artifact
3. previous phase evidence pack
4. previous phase Done Gate
5. previous phase handoff
```

If evidence contradicts an existing artifact, the workflow status file should record artifact drift and route to either:

```text
des-correct-course
or
the affected phase skill
```

---

## Phase 07 Reference Implementation

Phase 07 Architecture Design is the seventh reference implementation of the Phase-Orchestrated Support Model.

Updated skill:

```text
skills/des-architecture-design/
```

Phase 07 uses architecture validation support work:

```text
phase 06 handoff review
architecture driver traceability check
architecture option comparison
platform feasibility check
environment strategy check
storage/compute fit check
batch/streaming/event fit check
layer strategy check
serving strategy check
security/privacy architecture check
governance/metadata architecture check
cost and operational burden check
reversibility and lock-in check
done gate
handoff
```

Phase 07 expected outputs:

```text
_des-output/planning-artifacts/07-architecture-decision-record.md
_des-output/phase-support-plans/phase-07-support-plan.md
_des-output/evidence/phase-07/phase-07-evidence-pack.md
_des-output/implementation-artifacts/phase-07-artifact-revision.md
_des-output/implementation-artifacts/phase-07-done-gate.md
_des-output/phase-handoffs/phase-07-to-08-handoff.md
```

Phase 07 is Done only when:

```text
Done Gate = Pass or Pass with risks
and
Handoff = Ready or Ready with Risks
```

Phase 08 should not start from `07-architecture-decision-record.md` alone.
It should also read the Phase 07 evidence pack, Done Gate, and handoff.

Phase 07 may decide target architecture, platform direction, environment strategy, storage/compute direction, layer strategy, serving direction, observability, security, governance, and reversibility.
It must not design detailed ingestion pipelines, physical schemas, transformations, dashboards, APIs, CI/CD files, or implementation code.

---

## Phase 08 Reference Implementation

Phase 08 Ingestion Design is the eighth reference implementation of the Phase-Orchestrated Support Model.

Updated skill:

```text
skills/des-ingestion-design/
```

Phase 08 uses source-specific ingestion validation support work:

```text
phase 07 handoff review
source-to-ingestion mapping check
architecture constraint alignment check
ingestion pattern fit check
batch/streaming/event alignment check
frequency and trigger check
access and extraction check
incremental/checkpoint check
idempotency check
replay/backfill check
schema drift policy check
error/quarantine/recovery check
security/credential handling check
source impact/rate limit check
landing metadata expectation check
monitoring/audit expectation check
done gate
handoff
```

Phase 08 expected outputs:

```text
_des-output/planning-artifacts/08-ingestion-specification.md
_des-output/phase-support-plans/phase-08-support-plan.md
_des-output/evidence/phase-08/phase-08-evidence-pack.md
_des-output/implementation-artifacts/phase-08-artifact-revision.md
_des-output/implementation-artifacts/phase-08-done-gate.md
_des-output/phase-handoffs/phase-08-to-09-handoff.md
```

Phase 08 is Done only when:

```text
Done Gate = Pass or Pass with risks
and
Handoff = Ready or Ready with Risks
```

Phase 09 should not start from `08-ingestion-specification.md` alone.
It should also read the Phase 08 evidence pack, Done Gate, and handoff.

Phase 08 may define source-specific ingestion patterns, checkpointing, idempotency, replay/backfill, schema drift handling, error/quarantine, security/credential handling, landing expectations, and ingestion monitoring expectations.
It must not design detailed Bronze/Silver/Gold schemas, transformations, dashboards, APIs, full orchestration workflows, CI/CD files, or implementation code.

---

## Phase 09 Reference Implementation

Phase 09 Bronze Layer Design is the ninth reference implementation of the Phase-Orchestrated Support Model.

Updated skill:

```text
skills/des-bronze-layer-design/
```

Phase 09 uses Bronze validation support work:

```text
phase 08 handoff review
source-to-Bronze mapping check
ingestion-to-Bronze alignment check
Bronze dataset boundary check
raw preservation check
storage format check
file/table organization check
partitioning strategy check
mandatory metadata check
ingestion audit metadata check
schema drift handling check
replay/backfill support check
idempotency/dedup boundary check
quarantine/rejected data check
retention/lifecycle check
access/sensitivity check
Bronze boundary quality check
lineage/traceability check
done gate
handoff
```

Phase 09 expected outputs:

```text
_des-output/planning-artifacts/09-bronze-layer-specification.md
_des-output/phase-support-plans/phase-09-support-plan.md
_des-output/evidence/phase-09/phase-09-evidence-pack.md
_des-output/implementation-artifacts/phase-09-artifact-revision.md
_des-output/implementation-artifacts/phase-09-done-gate.md
_des-output/phase-handoffs/phase-09-to-10-handoff.md
```

Phase 09 is Done only when:

```text
Done Gate = Pass or Pass with risks
and
Handoff = Ready or Ready with Risks
```

Phase 10 should not start from `09-bronze-layer-specification.md` alone.
It should also read the Phase 09 evidence pack, Done Gate, and handoff.

Phase 09 may define Bronze dataset boundaries, raw preservation, storage format, file/table organization, partitioning, metadata columns, schema drift, replay, quarantine, retention, access, and traceability.
It must not design Silver conformance, Gold marts, semantic models, dashboards, APIs, transformations, orchestration implementation, CI/CD files, or code.

---

## Phase 10 Reference Implementation

Phase 10 Silver Layer Design is the tenth reference implementation of the Phase-Orchestrated Support Model.

Updated skill:

```text
skills/des-silver-layer-design/
```

Phase 10 uses Silver validation support work:

```text
phase 09 handoff review
Bronze-to-Silver mapping check
domain alignment check
conceptual-to-logical mapping check
grain/identity check
key strategy check
dedup/survivorship check
conformance/standardization check
data type normalization check
timezone/temporal normalization check
unit/currency normalization check
code/status/category mapping check
null/missing handling check
schema evolution handling check
source-of-truth reconciliation check
Silver boundary quality check
rejected/quarantine handling check
privacy/security handling check
lineage/traceability check
metadata inheritance check
refresh/incremental behavior check
done gate
handoff
```

Phase 10 expected outputs:

```text
_des-output/planning-artifacts/10-silver-layer-specification.md
_des-output/phase-support-plans/phase-10-support-plan.md
_des-output/evidence/phase-10/phase-10-evidence-pack.md
_des-output/implementation-artifacts/phase-10-artifact-revision.md
_des-output/implementation-artifacts/phase-10-done-gate.md
_des-output/phase-handoffs/phase-10-to-11-handoff.md
```

Phase 10 is Done only when:

```text
Done Gate = Pass or Pass with risks
and
Handoff = Ready or Ready with Risks
```

Phase 11 should not start from `10-silver-layer-specification.md` alone.
It should also read the Phase 10 evidence pack, Done Gate, and handoff.

Phase 10 may define Silver datasets, grain, identity, keys, deduplication, survivorship, conformance, normalization, DQ rules, rejected record handling, privacy handling, lineage, metadata inheritance, and refresh behavior.
It must not design Gold marts, final metrics, semantic models, dashboards, APIs, orchestration implementation, CI/CD files, or code.

---

## Phase 11 Reference Implementation

Phase 11 Gold Layer Design is the eleventh reference implementation of the Phase-Orchestrated Support Model.

Updated skill:

```text
skills/des-gold-layer-design/
```

Phase 11 uses Gold validation support work:

```text
phase 10 handoff review
business question to Gold mapping check
KPI/requirement to Gold mapping check
data product output to Gold mapping check
Silver-to-Gold mapping check
Gold dataset boundary check
consumer/serving alignment check
grain/aggregation check
metric definition alignment check
modeling pattern check
filtering/slicing check
history/SCD behavior check
freshness/SLA check
Gold boundary quality check
access/security check
contract expectation check
lineage/traceability check
performance/cost check
done gate
handoff
```

Phase 11 expected outputs:

```text
_des-output/planning-artifacts/11-gold-layer-specification.md
_des-output/phase-support-plans/phase-11-support-plan.md
_des-output/evidence/phase-11/phase-11-evidence-pack.md
_des-output/implementation-artifacts/phase-11-artifact-revision.md
_des-output/implementation-artifacts/phase-11-done-gate.md
_des-output/phase-handoffs/phase-11-to-12-handoff.md
```

Phase 11 is Done only when:

```text
Done Gate = Pass or Pass with risks
and
Handoff = Ready or Ready with Risks
```

Phase 12 should not start from `11-gold-layer-specification.md` alone.
It should also read the Phase 11 evidence pack, Done Gate, and handoff.

Phase 11 may define Gold datasets, marts, metric-ready datasets, output types, grain, aggregation, modeling pattern, filtering/slicing, history behavior, freshness/SLA, quality rules, access/security, contract expectation, lineage, and performance/cost considerations.
It must not design semantic model internals, dashboard visuals, API implementation, full data contracts, orchestration implementation, CI/CD files, or code.

---

## Phase 12 Reference Implementation

Phase 12 Data Contracts is the twelfth reference implementation of the Phase-Orchestrated Support Model.

Updated skill:

```text
skills/des-data-contracts/
```

Phase 12 uses contract validation support work:

```text
phase 11 handoff review
contract scope check
contract inventory check
producer/consumer/owner check
contract level check
dataset/output identity check
business meaning/grain check
schema expectation check
field-level expectation check
metric/KPI expectation check
freshness/SLA check
quality expectation check
volume/completeness check
security/access check
lineage/metadata check
compatibility/versioning check
change management check
deprecation policy check
incident/escalation check
acceptance/validation check
ownership/approval check
done gate
handoff
```

Phase 12 expected outputs:

```text
_des-output/planning-artifacts/12-data-contract-specification.md
_des-output/phase-support-plans/phase-12-support-plan.md
_des-output/evidence/phase-12/phase-12-evidence-pack.md
_des-output/implementation-artifacts/phase-12-artifact-revision.md
_des-output/implementation-artifacts/phase-12-done-gate.md
_des-output/phase-handoffs/phase-12-to-13-handoff.md
```

Phase 12 is Done only when:

```text
Done Gate = Pass or Pass with risks
and
Handoff = Ready or Ready with Risks
```

Phase 13 should not start from `12-data-contract-specification.md` alone.
It should also read the Phase 12 evidence pack, Done Gate, and handoff.

Phase 12 may define contract scope, inventory, producer/consumer/owner, contract level, dataset identity, business meaning, grain, schema, field expectations, KPI expectations, SLA, quality, volume, access, lineage, versioning, change, deprecation, incident, validation, and approval expectations.
It must not implement tests, transformations, dashboards, APIs, orchestration, CI/CD files, or code.

---

## Phase 13 Reference Implementation

Phase 13 Transformation Design is the thirteenth reference implementation of the Phase-Orchestrated Support Model.

Updated skill:

```text
skills/des-transformation-design/
```

Phase 13 uses transformation validation support work:

```text
phase 12 handoff review
contract-to-transformation mapping check
layer-to-layer mapping check
transformation inventory check
dependency graph check
input/output mapping check
transformation grain check
business rule check
cleaning/conformance rule check
join/relationship rule check
dedup/survivorship rule check
SCD/history behavior check
aggregation/metric rule check
incremental processing check
backfill/replay check
late/corrected data check
error/quarantine check
validation/test expectation check
contract alignment check
lineage/metadata check
performance/cost check
security/privacy check
implementation boundary check
done gate
handoff
```

Phase 13 expected outputs:

```text
_des-output/planning-artifacts/13-transformation-specification.md
_des-output/phase-support-plans/phase-13-support-plan.md
_des-output/evidence/phase-13/phase-13-evidence-pack.md
_des-output/implementation-artifacts/phase-13-artifact-revision.md
_des-output/implementation-artifacts/phase-13-done-gate.md
_des-output/phase-handoffs/phase-13-to-14-handoff.md
```

Phase 13 is Done only when:

```text
Done Gate = Pass or Pass with risks
and
Handoff = Ready or Ready with Risks
```

Phase 14 should not start from `13-transformation-specification.md` alone.
It should also read the Phase 13 evidence pack, Done Gate, and handoff.

Phase 13 may define transformation inventory, mappings, rules, dependencies, grain, incremental behavior, replay, error handling, validation expectations, contract alignment, lineage, performance, security, and implementation boundaries.
It must not implement SQL, Python, dbt, Spark, notebooks, orchestration, tests, CI/CD, dashboards, APIs, semantic models, or code.

---

## Phase 14 Reference Implementation

Phase 14 Data Quality Design is the fourteenth reference implementation of the Phase-Orchestrated Support Model.

Updated skill:

```text
skills/des-data-quality/
```

Phase 14 uses data quality validation support work:

```text
phase 13 handoff review
quality scope check
quality dimension check
quality rule inventory check
dataset-to-rule mapping check
layer-specific rule check
contract quality alignment check
transformation validation alignment check
freshness rule check
completeness/volume rule check
uniqueness/grain rule check
validity/domain rule check
referential integrity rule check
consistency/reconciliation rule check
accuracy/reasonableness rule check
schema/compatibility rule check
null/missing rule check
anomaly/threshold rule check
severity classification check
failure handling/gate check
ownership/stewardship check
evidence/reporting check
monitoring/observability expectation check
CI/CD/release gate candidate check
done gate
handoff
```

Phase 14 expected outputs:

```text
_des-output/planning-artifacts/14-data-quality-specification.md
_des-output/phase-support-plans/phase-14-support-plan.md
_des-output/evidence/phase-14/phase-14-evidence-pack.md
_des-output/implementation-artifacts/phase-14-artifact-revision.md
_des-output/implementation-artifacts/phase-14-done-gate.md
_des-output/phase-handoffs/phase-14-to-15-handoff.md
```

Phase 14 is Done only when:

```text
Done Gate = Pass or Pass with risks
and
Handoff = Ready or Ready with Risks
```

Phase 15 should not start from `14-data-quality-specification.md` alone.
It should also read the Phase 14 evidence pack, Done Gate, and handoff.

Phase 14 may define quality dimensions, rules, thresholds, severity, gates, owners, evidence, reporting, monitoring expectations, and release/CI/CD gate candidates.
It must not implement SQL, Python, dbt, Great Expectations, Spark, orchestration, monitoring, CI/CD files, dashboards, APIs, or code.

---

## Phase 15 Reference Implementation

Phase 15 Orchestration and Observability is the fifteenth reference implementation of the Phase-Orchestrated Support Model.

Updated skill:

```text
skills/des-orchestration-observability/
```

Phase 15 uses operational validation support work:

```text
phase 14 handoff review
workflow scope check
workflow inventory check
dependency graph check
schedule/trigger check
source readiness check
ingestion orchestration check
transformation orchestration check
quality gate integration check
publish/release gate check
retry/timeout check
failure/recovery check
backfill/replay check
late data/correction check
alerting/notification check
incident/escalation check
observability signal check
freshness/SLA monitoring check
volume/completeness monitoring check
quality result monitoring check
runtime/performance monitoring check
cost/usage monitoring check
run evidence/audit check
operational ownership check
done gate
handoff
```

Phase 15 expected outputs:

```text
_des-output/planning-artifacts/15-orchestration-observability-specification.md
_des-output/phase-support-plans/phase-15-support-plan.md
_des-output/evidence/phase-15/phase-15-evidence-pack.md
_des-output/implementation-artifacts/phase-15-artifact-revision.md
_des-output/implementation-artifacts/phase-15-done-gate.md
_des-output/phase-handoffs/phase-15-to-16-handoff.md
```

Phase 15 is Done only when:

```text
Done Gate = Pass or Pass with risks
and
Handoff = Ready or Ready with Risks
```

Phase 16 should not start from `15-orchestration-observability-specification.md` alone.
It should also read the Phase 15 evidence pack, Done Gate, and handoff.

Phase 15 may define workflow inventory, triggers, schedules, dependencies, quality gate placement, publish gates, retry, recovery, backfill/replay, alerting, incident policy, observability signals, SLA monitoring, run evidence, and operational ownership.
It must not implement Airflow, Fabric, Databricks, Dagster, Prefect, GitHub Actions, SQL, Python, monitoring dashboards, CI/CD workflows, or infrastructure code.

---

## Phase 16 Reference Implementation

Phase 16 Semantic Model Design is the sixteenth reference implementation of the Phase-Orchestrated Support Model.

Updated skill:

```text
skills/des-semantic-model-design/
```

Phase 16 uses semantic validation support work:

```text
phase 15 handoff review
semantic scope check
consumer/use-case mapping check
Gold-to-semantic mapping check
business glossary alignment check
semantic entity check
measure/KPI definition check
dimension/attribute check
hierarchy check
relationship/join behavior check
grain/aggregation behavior check
filter/slicer check
time intelligence check
calculation ownership check
naming/display convention check
security/access model check
certification/trust status check
freshness/quality display check
lineage/metadata check
semantic testing expectation check
contract/quality alignment check
done gate
handoff
```

Phase 16 expected outputs:

```text
_des-output/planning-artifacts/16-semantic-model-specification.md
_des-output/phase-support-plans/phase-16-support-plan.md
_des-output/evidence/phase-16/phase-16-evidence-pack.md
_des-output/implementation-artifacts/phase-16-artifact-revision.md
_des-output/implementation-artifacts/phase-16-done-gate.md
_des-output/phase-handoffs/phase-16-to-17-handoff.md
```

Phase 16 is Done only when:

```text
Done Gate = Pass or Pass with risks
and
Handoff = Ready or Ready with Risks
```

Phase 17 should not start from `16-semantic-model-specification.md` alone.
It should also read the Phase 16 evidence pack, Done Gate, and handoff.

Phase 16 may define semantic models, entities, measures, KPIs, dimensions, hierarchies, relationships, aggregation behavior, filters, time intelligence, ownership, naming, security, trust status, freshness/quality display, lineage, and semantic testing expectations.
It must not implement DAX, SQL, LookML, Cube, dbt semantic model, Power BI model, dashboards, APIs, CI/CD, deployment, or code.

---

## Phase 17 Reference Implementation

Phase 17 Serving Layer Design is the seventeenth reference implementation of the Phase-Orchestrated Support Model.

Updated skill:

```text
skills/des-serving-layer-design/
```

Phase 17 uses serving validation support work:

```text
phase 16 handoff review
serving scope check
consumer/persona check
serving channel inventory check
Gold/Semantic-to-serving mapping check
serving pattern check
dashboard/reporting expectation check
self-service analytics expectation check
API/application-serving expectation check
ML/AI dataset serving expectation check
reverse ETL/export expectation check
data sharing/federation expectation check
AI/data-agent access expectation check
access/security model check
freshness/quality visibility check
performance/latency check
caching/materialization check
feedback/issue reporting check
usage monitoring/adoption check
ownership/support model check
done gate
handoff
```

Phase 17 expected outputs:

```text
_des-output/planning-artifacts/17-serving-layer-specification.md
_des-output/phase-support-plans/phase-17-support-plan.md
_des-output/evidence/phase-17/phase-17-evidence-pack.md
_des-output/implementation-artifacts/phase-17-artifact-revision.md
_des-output/implementation-artifacts/phase-17-done-gate.md
_des-output/phase-handoffs/phase-17-to-18-handoff.md
```

Phase 17 is Done only when:

```text
Done Gate = Pass or Pass with risks
and
Handoff = Ready or Ready with Risks
```

Phase 18 should not start from `17-serving-layer-specification.md` alone.
It should also read the Phase 17 evidence pack, Done Gate, and handoff.

Phase 17 may define consumer/persona mapping, serving channel inventory, serving patterns, BI/API/ML/export/reverse ETL/data sharing/agent expectations, access controls, freshness/quality visibility, latency, caching/materialization expectations, feedback loops, usage monitoring, and support ownership.
It must not implement dashboards, APIs, apps, ML jobs, reverse ETL jobs, exports, agents, caching, CI/CD, deployments, or code.

---

## Phase 18 Reference Implementation

Phase 18 Lineage and Metadata Design is the eighteenth reference implementation of the Phase-Orchestrated Support Model.

Updated skill:

```text
skills/des-lineage-metadata-design/
```

Phase 18 uses lineage and metadata validation support work:

```text
phase 17 handoff review
metadata scope check
metadata category coverage check
metadata asset inventory check
business metadata check
technical metadata check
operational metadata check
reference metadata check
dataset catalog requirement check
field/schema metadata check
metric/KPI metadata check
contract metadata check
transformation lineage check
dataset lineage check
column-level lineage expectation check
semantic/serving lineage check
quality/trust metadata check
ownership/stewardship metadata check
usage/consumer metadata check
change/version metadata check
audit/compliance metadata check
metadata capture responsibility check
metadata freshness/maintenance check
done gate
handoff
```

Phase 18 expected outputs:

```text
_des-output/planning-artifacts/18-lineage-metadata-specification.md
_des-output/phase-support-plans/phase-18-support-plan.md
_des-output/evidence/phase-18/phase-18-evidence-pack.md
_des-output/implementation-artifacts/phase-18-artifact-revision.md
_des-output/implementation-artifacts/phase-18-done-gate.md
_des-output/phase-handoffs/phase-18-to-19-handoff.md
```

Phase 18 is Done only when:

```text
Done Gate = Pass or Pass with risks
and
Handoff = Ready or Ready with Risks
```

Phase 19 should not start from `18-lineage-metadata-specification.md` alone.
It should also read the Phase 18 evidence pack, Done Gate, and handoff.

Phase 18 may define business, technical, operational, and reference metadata; catalog fields; field/schema metadata; metric/KPI metadata; contract metadata; dataset lineage; transformation lineage; column-level lineage expectations; semantic/serving lineage; quality/trust metadata; ownership metadata; usage metadata; audit metadata; capture responsibilities; and maintenance policy.
It must not implement catalog tools, scanners, crawlers, OpenLineage, Purview, DataHub, Collibra, dbt docs, metadata pipelines, CI/CD, or code.

---

## Phase 19 Reference Implementation

Phase 19 Governance and Security Design is the nineteenth reference implementation of the Phase-Orchestrated Support Model.

Updated skill:

```text
skills/des-governance-security-design/
```

Phase 19 uses governance and security validation support work:

```text
phase 18 handoff review
governance scope check
data classification check
asset sensitivity inventory check
field-level sensitivity handling check
access control model check
role/persona access matrix check
row-level security policy check
column-level security policy check
masking/tokenization/anonymization check
encryption/secret handling check
privacy/consent check
retention lifecycle/deletion check
data sharing/external access check
API/application/AI-agent access check
reverse ETL governance check
audit logging/access monitoring check
approval/exception handling check
ownership/stewardship/accountability check
compliance/regulatory check
incident response/escalation check
done gate
handoff
```

Phase 19 expected outputs:

```text
_des-output/planning-artifacts/19-governance-security-specification.md
_des-output/phase-support-plans/phase-19-support-plan.md
_des-output/evidence/phase-19/phase-19-evidence-pack.md
_des-output/implementation-artifacts/phase-19-artifact-revision.md
_des-output/implementation-artifacts/phase-19-done-gate.md
_des-output/phase-handoffs/phase-19-to-20-handoff.md
```

Phase 19 is Done only when:

```text
Done Gate = Pass or Pass with risks
and
Handoff = Ready or Ready with Risks
```

Phase 20 should not start from `19-governance-security-specification.md` alone.
It should also read the Phase 19 evidence pack, Done Gate, and handoff.

Phase 19 may define governance policy, data classification, sensitivity handling, access control, RLS/CLS, masking/tokenization/anonymization, encryption expectations, secret handling, privacy, retention, deletion, sharing, API/AI access, reverse ETL governance, audit, approval, ownership, compliance, and incident response.
It must not implement IAM, ACLs, RLS/CLS, masking logic, encryption config, governance tooling, policy engines, CI/CD, infrastructure, or code.

---

## Phase 20 Reference Implementation

Phase 20 Cost and Performance Optimization is the twentieth reference implementation of the Phase-Orchestrated Support Model.

Updated skill:

```text
skills/des-cost-and-performance-optimization/
```

Phase 20 uses cost and performance validation support work:

```text
phase 19 handoff review
optimization scope check
workload inventory check
workload priority check
cost driver inventory check
performance driver inventory check
baseline measurement plan check
storage optimization check
compute optimization check
ingestion optimization check
transformation optimization check
query/semantic optimization check
serving performance check
orchestration runtime check
data quality cost/performance check
caching/materialization check
partitioning/clustering/file sizing check
incremental processing/recomputation check
retention lifecycle/storage tiering check
cost monitoring/budget guardrail check
performance monitoring/SLO check
scalability/capacity planning check
tradeoff_decision check
done gate
handoff
```

Phase 20 expected outputs:

```text
_des-output/planning-artifacts/20-cost-performance-optimization-specification.md
_des-output/phase-support-plans/phase-20-support-plan.md
_des-output/evidence/phase-20/phase-20-evidence-pack.md
_des-output/implementation-artifacts/phase-20-artifact-revision.md
_des-output/implementation-artifacts/phase-20-done-gate.md
_des-output/phase-handoffs/phase-20-to-21-handoff.md
```

Phase 20 is Done only when:

```text
Done Gate = Pass or Pass with risks
and
Handoff = Ready or Ready with Risks
```

Phase 21 should not start from `20-cost-performance-optimization-specification.md` alone.
It should also read the Phase 20 evidence pack, Done Gate, and handoff.

Phase 20 may define workload priorities, cost/performance drivers, baselines, storage/compute/ingestion/transformation/query/serving optimization strategies, caching/materialization rules, partitioning/clustering/file-size expectations, incremental recomputation, storage tiering, cost monitoring, SLOs, scalability planning, and trade-offs.
It must not rewrite SQL/Python/dbt code, tune indexes, resize clusters, configure autoscaling, deploy caching, change infrastructure, implement cost controls, or write implementation code.

---

## Phase 21 Reference Implementation

Phase 21 CI/CD and Testing is the twenty-first reference implementation of the Phase-Orchestrated Support Model.

Updated skill:

```text
skills/des-cicd-and-testing/
```

Phase 21 uses CI/CD and testing validation support work:

```text
phase 20 handoff review
CI/CD scope check
repository/artifact inventory check
branch/review strategy check
environment/promotion strategy check
test inventory check
unit test expectation check
integration test expectation check
data contract test gate check
data quality test gate check
transformation test gate check
orchestration test gate check
semantic/serving test gate check
security/governance test gate check
cost/performance test gate check
deployment gate check
release approval workflow check
rollback/recovery strategy check
release evidence/audit trail check
test data/fixture strategy check
secrets/environment config policy check
breaking change policy check
done gate
handoff
```

Phase 21 expected outputs:

```text
_des-output/planning-artifacts/21-cicd-testing-specification.md
_des-output/phase-support-plans/phase-21-support-plan.md
_des-output/evidence/phase-21/phase-21-evidence-pack.md
_des-output/implementation-artifacts/phase-21-artifact-revision.md
_des-output/implementation-artifacts/phase-21-done-gate.md
_des-output/phase-handoffs/phase-21-to-22-handoff.md
```

Phase 21 is Done only when:

```text
Done Gate = Pass or Pass with risks
and
Handoff = Ready or Ready with Risks
```

Phase 22 should not start from `21-cicd-testing-specification.md` alone.
It should also read the Phase 21 evidence pack, Done Gate, and handoff.

Phase 21 may define repository/artifact inventory, branch strategy, environment promotion, test inventory, contract/DQ/transformation/orchestration/semantic/serving/security/cost-performance test gates, deployment gates, approval workflow, rollback/recovery, release evidence, test data strategy, secrets/config policy, and breaking change policy.
It must not implement GitHub Actions, Azure DevOps pipelines, Fabric deployment pipelines, dbt tests, pytest, SQL/Spark/notebook tests, IaC, infrastructure, deployment scripts, or release execution code.

---

## Phase 22 Reference Implementation

Phase 22 Project Evaluation is the twenty-second and final reference implementation of the Phase-Orchestrated Support Model.

Updated skill:

```text
skills/des-project-evaluation/
```

Phase 22 uses final evaluation validation support work:

```text
phase 21 handoff review
upstream artifact completeness check
evaluation scope check
success criteria check
business goal evaluation check
business question coverage check
requirement/KPI evaluation check
data product delivery evaluation check
source/ingestion evaluation check
domain model evaluation check
architecture evaluation check
Bronze/Silver/Gold evaluation check
contract evaluation check
transformation evaluation check
data quality evaluation check
orchestration/observability evaluation check
semantic/serving evaluation check
lineage/metadata evaluation check
governance/security evaluation check
cost/performance evaluation check
CI/CD/testing evaluation check
stakeholder feedback check
usage/adoption evidence check
readiness scorecard check
risk/limitation check
lessons learned check
next iteration recommendation check
final decision check
done gate
final closeout
```

Phase 22 expected outputs:

```text
_des-output/planning-artifacts/22-project-evaluation-report.md
_des-output/phase-support-plans/phase-22-support-plan.md
_des-output/evidence/phase-22/phase-22-evidence-pack.md
_des-output/implementation-artifacts/phase-22-artifact-revision.md
_des-output/implementation-artifacts/phase-22-done-gate.md
_des-output/phase-handoffs/phase-22-final-closeout.md
```

Phase 22 is Done only when:

```text
Done Gate = Pass or Pass with risks
and
Final Closeout is documented
```

Phase 22 closes the workflow or routes to a next iteration.

It may evaluate business value, technical readiness, data trust, governance posture, cost/performance readiness, CI/CD readiness, release readiness, adoption, risks, lessons learned, and next priorities.

It must not claim production readiness without evidence, hide missing evidence, implement fixes, deploy releases, create new production evidence, or rewrite upstream phase artifacts.
