# DES-SKILL

[![npm](https://img.shields.io/npm/v/@dksang/des-skill?color=0ea5e9&label=npm)](https://www.npmjs.com/package/@dksang/des-skill)
[![License: MIT](https://img.shields.io/badge/license-MIT-22c55e.svg)](LICENSE)
[![Tests](https://img.shields.io/badge/tests-8%2F8%20pass-22c55e)](test/)
[![Main Skills](https://img.shields.io/badge/main%20skills-22-7c3aed)](skills/)
[![Support Skills](https://img.shields.io/badge/support%20skills-12-0ea5e9)](skills-support/)
[![Learning Skills](https://img.shields.io/badge/learning%20skills-7-f59e0b)](skills-learning/)
[![Stack Skills](https://img.shields.io/badge/stack%20skills-5-111827)](skills-stack/)

**DES-SKILL** là bộ skill dành cho các AI agent như Codex, ChatGPT, Cursor, Claude Code hoặc các coding/data agent khác để hỗ trợ triển khai dự án **Data Engineering** theo quy trình có cấu trúc.

DES-SKILL được thiết kế theo phong cách workflow giống **BMAD-Method**, nhưng tập trung riêng cho vòng đời dự án data engineering. Mục tiêu là giúp agent không chỉ trả lời rời rạc, mà có thể làm việc theo từng phase, tạo artifact rõ ràng, kiểm tra checklist, cập nhật trạng thái workflow và chuyển tiếp sang bước phù hợp.

> **DES-SKILL không chỉ là bộ skill thiết kế data engineering.**
> **DES-SKILL là workflow system kiểu BMAD cho data engineering end-to-end.**

---

## 1. DES-SKILL giải quyết vấn đề gì?

Trong nhiều dự án data engineering, agent thường mắc các lỗi như:

- Nhảy vào viết code quá sớm
- Chưa rõ business question nhưng đã thiết kế schema
- Chưa rõ KPI nhưng đã tạo Gold layer
- Chưa rõ source nhưng đã viết pipeline
- Thiếu data contract, data quality rule, governance/security
- Thiếu CI/CD và release checklist
- Không biết workflow đang ở phase nào
- Không có epic/story/task rõ ràng để triển khai

DES-SKILL giải quyết bằng cách chia workflow thành **22 main skills + 12 support skills**.

---

## 2. Hai nhóm skill chính

### 2.1. Main skills — Thiết kế vòng đời data engineering

Main skills dùng để thiết kế toàn bộ vòng đời data engineering project, từ business problem đến project evaluation.

```text
Business → Requirements → Data Product → Source → Domain
→ Architecture → Ingestion → Bronze → Silver → Gold
→ Contract → Transformation → Quality → Orchestration
→ Semantic → Serving → Lineage → Governance
→ Cost/Performance → CI/CD → Evaluation
```

Main skills tạo ra các artifact thiết kế:

```text
01-business-discovery-brief.md
02-business-question-catalog.md
03-requirements-and-kpi-catalog.md
...
22-project-evaluation-report.md
```
### 2.2. Support skills — Triển khai thực tế

Support skills dùng sau khi đã có artifact thiết kế để chuyển sang backlog, sprint, task, review và release.

```text
des-create-epic
→ des-create-story
→ des-sprint-planning
→ des-story-readiness-check
→ des-dev-task-breakdown
→ des-implementation-plan
→ des-code-review
→ des-release-readiness-review
→ des-retrospective
→ des-correct-course
→ des-workflow-status-update
```

### 2.3. Stack-specific skills — Hỗ trợ kỹ thuật chuyên sâu

Stack skills cung cấp hướng dẫn và công cụ cho các công nghệ cụ thể trong quy trình DES.

```text
des-duckdb-local-engine
→ des-dlt-ingestion
→ des-dbt-engineering
→ des-provero-validation
→ des-airflow-orchestration
```

Xem chi tiết tại [docs/stack-skills.md](docs/stack-skills.md).

---

## 3. Support artifact outputs
```text
epic-catalog.md
story-catalog.md
sprint-plan.md
story-readiness-report.md
dev-task-breakdown.md
implementation-plan.md
code-review-report.md
release-readiness-report.md
retrospective-report.md
correct-course-plan.md
des-workflow-status.md
```

---

## 4. Workflow tổng quan

```text
22 DES Main Skills (phases 01–22)
           ↓
  des-create-epic
           ↓
  des-create-story
           ↓
  des-sprint-planning
           ↓
  des-story-readiness-check
           ↓
  des-dev-task-breakdown
           ↓
  des-implementation-plan
           ↓
  Implementation by agent/developer
           ↓
  des-code-review
           ↓
  des-release-readiness-review
           ↓
  des-retrospective
           ↓
  des-correct-course
           ↓
  des-workflow-status-update
```

---

## Phase-by-Phase Validated Delivery

DES-SKILL does not require users to finish all 22 phase artifacts before doing any support work.

The recommended practical workflow is:

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

A phase artifact is not the final deliverable by itself.

It is the execution contract used to activate the support skills needed to complete that phase.

A phase is Done only when:

```text
artifact exists
+ required support work is identified
+ evidence exists or is waived with reason
+ artifact is revised from evidence
+ handoff exists for the next phase
```

See:

[docs/phase-execution-contract.md](file:///C:/Users/dksan/Code/data-engineer/data-engineering-superpowers/docs/phase-execution-contract.md)

for the full phase completion contract.

### Phase 07 Reference Implementation

`des-architecture-design` is the seventh reference implementation of the Phase-Orchestrated Support Model.

It now supports:

```text
Architecture Decision Record
→ Phase 07 Support Plan
→ Architecture Option / Feasibility / Cost / Security / Reversibility Evidence
→ Phase 07 Evidence Pack
→ Artifact Revision
→ Done Gate
→ Phase 07 to Phase 08 Handoff
```

This means Phase 07 is not Done just because `07-architecture-decision-record.md` exists.

Phase 07 is Done when its Done Gate passes and its handoff to `des-ingestion-design` is ready.

Phase 07 may decide architecture direction, platform strategy, storage/compute direction, environment strategy, layer strategy, serving strategy, observability, security, governance, and reversibility.
It must not design detailed ingestion pipelines, physical schemas, transformations, dashboards, APIs, CI/CD files, or code.

### Phase 08 Reference Implementation

`des-ingestion-design` is the eighth reference implementation of the Phase-Orchestrated Support Model.

It now supports:

```text
Ingestion Specification
→ Phase 08 Support Plan
→ Ingestion Pattern / Idempotency / Replay / Schema Drift / Security / Observability Evidence
→ Phase 08 Evidence Pack
→ Artifact Revision
→ Done Gate
→ Phase 08 to Phase 09 Handoff
```

This means Phase 08 is not Done just because `08-ingestion-specification.md` exists.

Phase 08 is Done when its Done Gate passes and its handoff to `des-bronze-layer-design` is ready.

Phase 08 may define source-specific ingestion patterns, checkpointing, idempotency, replay/backfill, schema drift handling, error/quarantine, security/credential handling, landing expectations, and ingestion monitoring expectations.
It must not design detailed Bronze/Silver/Gold schemas, transformations, dashboards, APIs, full orchestration workflows, CI/CD files, or implementation code.

### Phase 09 Reference Implementation

`des-bronze-layer-design` is the ninth reference implementation of the Phase-Orchestrated Support Model.

It now supports:

```text
Bronze Layer Specification
→ Phase 09 Support Plan
→ Raw Preservation / Metadata / Schema Drift / Replay / Quarantine / Access Evidence
→ Phase 09 Evidence Pack
→ Artifact Revision
→ Done Gate
→ Phase 09 to Phase 10 Handoff
```

This means Phase 09 is not Done just because `09-bronze-layer-specification.md` exists.

Phase 09 is Done when its Done Gate passes and its handoff to `des-silver-layer-design` is ready.

Phase 09 may define Bronze dataset boundaries, raw preservation, storage format, file/table organization, partitioning, metadata columns, schema drift, replay, quarantine, retention, access, and traceability.
It must not design Silver conformance, Gold marts, semantic models, dashboards, APIs, transformations, orchestration implementation, CI/CD files, or code.

### Phase 10 Reference Implementation

`des-silver-layer-design` is the tenth reference implementation of the Phase-Orchestrated Support Model.

It now supports:

```text
Silver Layer Specification
→ Phase 10 Support Plan
→ Grain / Identity / Key / Conformance / DQ / Lineage Evidence
→ Phase 10 Evidence Pack
→ Artifact Revision
→ Done Gate
→ Phase 10 to Phase 11 Handoff
```

This means Phase 10 is not Done just because `10-silver-layer-specification.md` exists.

Phase 10 is Done when its Done Gate passes and its handoff to `des-gold-layer-design` is ready.

Phase 10 may define Silver datasets, grain, identity, keys, deduplication, survivorship, conformance, normalization, DQ rules, rejected record handling, privacy handling, lineage, metadata inheritance, and refresh behavior.
It must not design Gold marts, final metrics, semantic models, dashboards, APIs, orchestration implementation, CI/CD files, or code.

### Phase 11 Reference Implementation

`des-gold-layer-design` is the eleventh reference implementation of the Phase-Orchestrated Support Model.

It now supports:

```text
Gold Layer Specification
→ Phase 11 Support Plan
→ Business Question / KPI / Grain / Aggregation / Serving / Contract Evidence
→ Phase 11 Evidence Pack
→ Artifact Revision
→ Done Gate
→ Phase 11 to Phase 12 Handoff
```

This means Phase 11 is not Done just because `11-gold-layer-specification.md` exists.

Phase 11 is Done when its Done Gate passes and its handoff to `des-data-contracts` is ready.

Phase 11 may define Gold datasets, marts, metric-ready datasets, output types, grain, aggregation, modeling pattern, filtering/slicing, history behavior, freshness/SLA, quality rules, access/security, contract expectation, lineage, and performance/cost considerations.
It must not design semantic model internals, dashboard visuals, API implementation, full data contracts, orchestration implementation, CI/CD files, or code.

### Phase 12 Reference Implementation

`des-data-contracts` is the twelfth reference implementation of the Phase-Orchestrated Support Model.

It now supports:

```text
Data Contract Specification
→ Phase 12 Support Plan
→ Producer / Consumer / Schema / Grain / SLA / DQ / Versioning / Incident Evidence
→ Phase 12 Evidence Pack
→ Artifact Revision
→ Done Gate
→ Phase 12 to Phase 13 Handoff
```

This means Phase 12 is not Done just because `12-data-contract-specification.md` exists.

Phase 12 is Done when its Done Gate passes and its handoff to `des-transformation-design` is ready.

Phase 12 may define contract scope, inventory, producer/consumer/owner, contract level, dataset identity, business meaning, grain, schema, field expectations, KPI expectations, SLA, quality, volume, access, lineage, versioning, change, deprecation, incident, validation, and approval expectations.
It must not implement tests, transformations, dashboards, APIs, orchestration, CI/CD files, or code.

### Phase 13 Reference Implementation

`des-transformation-design` is the thirteenth reference implementation of the Phase-Orchestrated Support Model.

It now supports:

```text
Transformation Specification
→ Phase 13 Support Plan
→ Mapping / Rule / DAG / Incremental / Validation / Contract-Alignment Evidence
→ Phase 13 Evidence Pack
→ Artifact Revision
→ Done Gate
→ Phase 13 to Phase 14 Handoff
```

This means Phase 13 is not Done just because `13-transformation-specification.md` exists.

Phase 13 is Done when its Done Gate passes and its handoff to `des-data-quality` is ready.

Phase 13 may define transformation inventory, mappings, rules, dependencies, grain, incremental behavior, replay, error handling, validation expectations, contract alignment, lineage, performance, security, and implementation boundaries.
It must not implement SQL, Python, dbt, Spark, notebooks, orchestration, tests, CI/CD files, dashboards, APIs, or code.

### Phase 14 Reference Implementation

`des-data-quality` is the fourteenth reference implementation of the Phase-Orchestrated Support Model.

It now supports:

```text
Data Quality Specification
→ Phase 14 Support Plan
→ Rule / Threshold / Severity / Gate / Owner / Evidence Validation
→ Phase 14 Evidence Pack
→ Artifact Revision
→ Done Gate
→ Phase 14 to Phase 15 Handoff
```

This means Phase 14 is not Done just because `14-data-quality-specification.md` exists.

Phase 14 is Done when its Done Gate passes and its handoff to `des-orchestration-observability` is ready.

Phase 14 may define quality dimensions, rules, thresholds, severity, gates, owners, evidence, reporting, monitoring expectations, and release/CI/CD gate candidates.
It must not implement SQL, Python, dbt, Great Expectations, Spark, orchestration, monitoring, CI/CD files, dashboards, APIs, or code.

### Phase 15 Reference Implementation

`des-orchestration-observability` is the fifteenth reference implementation of the Phase-Orchestrated Support Model.

It now supports:

```text
Orchestration and Observability Specification
→ Phase 15 Support Plan
→ Workflow / Dependency / Gate / Retry / Alert / SLA / Evidence Validation
→ Phase 15 Evidence Pack
→ Artifact Revision
→ Done Gate
→ Phase 15 to Phase 16 Handoff
```

This means Phase 15 is not Done just because `15-orchestration-observability-specification.md` exists.

Phase 15 is Done when its Done Gate passes and its handoff to `des-semantic-model-design` is ready.

Phase 15 may define workflow inventory, triggers, schedules, dependencies, quality gate placement, publish gates, retry, recovery, backfill/replay, alerting, incident policy, observability signals, SLA monitoring, run evidence, and operational ownership.
It must not implement Airflow, Fabric, Databricks, Dagster, Prefect, GitHub Actions, SQL, Python, monitoring dashboards, CI/CD workflows, or infrastructure code.

### Phase 16 Reference Implementation

`des-semantic-model-design` is the sixteenth reference implementation of the Phase-Orchestrated Support Model.

It now supports:

```text
Semantic Model Specification
→ Phase 16 Support Plan
→ Metric / Dimension / Relationship / Security / Trust / Freshness Evidence
→ Phase 16 Evidence Pack
→ Artifact Revision
→ Done Gate
→ Phase 16 to Phase 17 Handoff
```

This means Phase 16 is not Done just because `16-semantic-model-specification.md` exists.

Phase 16 is Done when its Done Gate passes and its handoff to `des-serving-layer-design` is ready.

Phase 16 may define semantic models, entities, measures, KPIs, dimensions, hierarchies, relationships, aggregation behavior, filters, time intelligence, ownership, naming, security, trust status, freshness/quality display, lineage, and semantic testing expectations.
It must not implement DAX, SQL, LookML, Cube, dbt semantic model, Power BI model, dashboards, APIs, CI/CD, deployment, or code.

### Phase 17 Reference Implementation

`des-serving-layer-design` is the seventeenth reference implementation of the Phase-Orchestrated Support Model.

It now supports:

```text
Serving Layer Specification
→ Phase 17 Support Plan
→ Consumer / Channel / Access / Freshness / Performance / Feedback Evidence
→ Phase 17 Evidence Pack
→ Artifact Revision
→ Done Gate
→ Phase 17 to Phase 18 Handoff
```

This means Phase 17 is not Done just because `17-serving-layer-specification.md` exists.

Phase 17 is Done when its Done Gate passes and its handoff to `des-lineage-metadata-design` is ready.

Phase 17 may define consumer/persona mapping, serving channel inventory, serving patterns, BI/API/ML/export/reverse ETL/data sharing/agent expectations, access controls, freshness/quality visibility, latency, caching/materialization expectations, feedback loops, usage monitoring, and support ownership.
It must not implement dashboards, APIs, apps, ML jobs, reverse ETL jobs, exports, agents, caching, CI/CD, deployments, or code.

### Phase 18 Reference Implementation

`des-lineage-metadata-design` is the eighteenth reference implementation of the Phase-Orchestrated Support Model.

It now supports:

```text
Lineage and Metadata Specification
→ Phase 18 Support Plan
→ Asset / Catalog / Lineage / Ownership / Trust / Audit Evidence
→ Phase 18 Evidence Pack
→ Artifact Revision
→ Done Gate
→ Phase 18 to Phase 19 Handoff
```

This means Phase 18 is not Done just because `18-lineage-metadata-specification.md` exists.

Phase 18 is Done when its Done Gate passes and its handoff to `des-governance-security-design` is ready.

Phase 18 may define business, technical, operational, and reference metadata; catalog fields; field/schema metadata; metric/KPI metadata; contract metadata; dataset lineage; transformation lineage; column-level lineage expectations; semantic/serving lineage; quality/trust metadata; ownership metadata; usage metadata; audit metadata; capture responsibilities; and maintenance policy.
It must not implement catalog tools, scanners, crawlers, OpenLineage, Purview, DataHub, Collibra, dbt docs, metadata pipelines, CI/CD, or code.

### Phase 19 Reference Implementation

`des-governance-security-design` is the nineteenth reference implementation of the Phase-Orchestrated Support Model.

It now supports:

```text
Governance and Security Specification
→ Phase 19 Support Plan
→ Classification / Access / Privacy / Retention / Sharing / Audit / Exception Evidence
→ Phase 19 Evidence Pack
→ Artifact Revision
→ Done Gate
→ Phase 19 to Phase 20 Handoff
```

This means Phase 19 is not Done just because `19-governance-security-specification.md` exists.

Phase 19 is Done when its Done Gate passes and its handoff to `des-cost-and-performance-optimization` is ready.

Phase 19 may define governance policy, data classification, sensitivity handling, access control, RLS/CLS, masking/tokenization/anonymization, encryption expectations, secret handling, privacy, retention, deletion, sharing, API/AI access, reverse ETL governance, audit, approval, ownership, compliance, and incident response.
It must not implement IAM, ACLs, RLS/CLS, masking logic, encryption config, governance tooling, policy engines, CI/CD, infrastructure, or code.

### Phase 20 Reference Implementation

`des-cost-and-performance-optimization` is the twentieth reference implementation of the Phase-Orchestrated Support Model.

It now supports:

```text
Cost and Performance Optimization Specification
→ Phase 20 Support Plan
→ Workload / Baseline / Cost Driver / SLO / Trade-Off Evidence
→ Phase 20 Evidence Pack
→ Artifact Revision
→ Done Gate
→ Phase 20 to Phase 21 Handoff
```

This means Phase 20 is not Done just because `20-cost-performance-optimization-specification.md` exists.

Phase 20 is Done when its Done Gate passes and its handoff to `des-cicd-and-testing` is ready.

Phase 20 may define workload priorities, cost/performance drivers, baselines, storage/compute/ingestion/transformation/query/serving optimization strategies, caching/materialization rules, partitioning/clustering/file-size expectations, incremental recomputation, storage tiering, cost monitoring, SLOs, scalability planning, and trade-offs.
It must not rewrite SQL/Python/dbt code, tune indexes, resize clusters, configure autoscaling, deploy caching, change infrastructure, implement cost controls, or write implementation code.

### Phase 21 Reference Implementation

`des-cicd-and-testing` is the twenty-first reference implementation of the Phase-Orchestrated Support Model.

It now supports:

```text
CI/CD and Testing Specification
→ Phase 21 Support Plan
→ Repository / Test / Gate / Environment / Rollback / Release Evidence
→ Phase 21 Evidence Pack
→ Artifact Revision
→ Done Gate
→ Phase 21 to Phase 22 Handoff
```

This means Phase 21 is not Done just because `21-cicd-testing-specification.md` exists.

Phase 21 is Done when its Done Gate passes and its handoff to `des-project-evaluation` is ready.

Phase 21 may define repository/artifact inventory, branch strategy, environment promotion, test inventory, contract/DQ/transformation/orchestration/semantic/serving/security/cost-performance test gates, deployment gates, approval workflow, rollback/recovery, release evidence, test data strategy, secrets/config policy, and breaking change policy.
It must not implement GitHub Actions, Azure DevOps pipelines, Fabric deployment pipelines, dbt tests, pytest, SQL/Spark/notebook tests, IaC, infrastructure, deployment scripts, or release execution code.

### Phase 22 Reference Implementation

`des-project-evaluation` is the twenty-second and final reference implementation of the Phase-Orchestrated Support Model.

It now supports:

```text
Project Evaluation Report
→ Phase 22 Support Plan
→ Business / Readiness / Release / Adoption / Risk Evidence
→ Phase 22 Evidence Pack
→ Artifact Revision
→ Done Gate
→ Final Closeout
→ Workflow Complete or Next Iteration
```

This means Phase 22 is not Done just because `22-project-evaluation-report.md` exists.

Phase 22 is Done when its Done Gate passes and final closeout is documented.

Phase 22 may evaluate business value, technical readiness, data trust, governance posture, cost/performance readiness, CI/CD readiness, release readiness, adoption, risks, lessons learned, and next priorities.
It must not claim production readiness without evidence, hide missing evidence, implement fixes, deploy releases, or rewrite upstream phase artifacts.

### Workflow Status v2

DES-SKILL tracks phase completion through the workflow status file:

```text
_des-output/implementation-artifacts/des-workflow-status.md
```

The status file tracks not only phase artifacts, but also:

```text
support plan
evidence pack
artifact revision
done gate
handoff
overall phase status
```

A phase should be marked `Done` only when its Done Gate passes and its handoff is ready for the next phase.

Template:

```text
templates/00-workflow-status-template.md
```

### Code Verification Support

DES-SKILL supports lightweight code verification for phases where technical evidence is needed.

Code verification includes source probes, schema inspection, data profiling, DQ sampling, transformation spikes, contract validation, workflow dry-runs, serving smoke tests, performance baselines, cost probes, and CI test dry-runs.

It is not production implementation.

See:

```text
docs/code-verification-guidance.md
configs/code-verification-matrix.toml
templates/phase/code-verification-evidence-template.md
checklists/code-verification-checklist.md
```

The main rule is:

```text
If a phase decision depends on technical evidence, run the smallest safe verification and record the result in the evidence pack.
```

Strongly required phases:

```text
Phase 05 — Data Source Assessment
Phase 14 — Data Quality
Phase 20 — Cost and Performance Optimization
```

Recommended phases:

```text
Phase 08, 09, 10, 11, 12, 13, 15, 16, 17, 21
```

Optional phases:

```text
Phase 03, 06, 07, 18, 19
```

Normally non-code phases:

```text
Phase 01, 02, 04, 22
```

---

## 4. Khi nào dùng DES-SKILL?

Dùng DES-SKILL khi bạn muốn:

- Xây dựng data engineering project từ đầu
- Thiết kế data platform có Bronze/Silver/Gold
- Chuẩn hóa requirement, KPI, data product
- Tạo data contracts và data quality rules
- Thiết kế orchestration, observability, governance, CI/CD
- Chuyển design thành epic/story/task có thể triển khai
- Dùng Codex hoặc coding agent triển khai theo story
- Review code theo acceptance criteria
- Kiểm tra release readiness
- Giữ trạng thái workflow giống BMAD

---

## 5. Cách sử dụng nhanh

### Cài đặt

```bash
# Full project scaffold
npx @dksang/des-skill

# Full project scaffold (explicit)
npx @dksang/des-skill init

# Skill pack only (existing project)
npx @dksang/des-skill install

# Pinned version
npx @dksang/des-skill@0.2.0
```

### Prompt mẫu — Main skill

```text
Use DES skill: des-business-discovery

Project context:
Tôi đang xây dựng dự án data engineering cho climate-smart agriculture.

Objective:
Tạo Business Discovery Brief cho dự án.

Instructions:
1. Read `skills/des-business-discovery/SKILL.md`.
2. Read `skills/des-business-discovery/customize.toml`.
3. Load only step-01.
4. Stop at every HALT point.
5. Create or update the configured output artifact.
6. Run checklist.
7. Update workflow status.
```

### Prompt mẫu — Support skill

```text
Use DES support skill: des-create-epic

Project context:
Tôi đã có output của 22 main skills.

Objective:
Tạo Epic Catalog để chuẩn bị triển khai dự án.

Instructions:
1. Read `skills-support/des-create-epic/SKILL.md`.
2. Read `skills-support/des-create-epic/customize.toml`.
3. Load only step-01.
4. Use DES main artifacts as input.
5. Do not create stories.
6. Create `epic-catalog.md`.
7. Recommend `des-create-story`.
```

---

## 6. Danh mục Main Skills

| STT | Skill | Output Artifact |
|---:|:---|:---|
| 01 | `des-business-discovery` | `01-business-discovery-brief.md` |
| 02 | `des-business-questions` | `02-business-question-catalog.md` |
| 03 | `des-requirements-and-kpis` | `03-requirements-and-kpi-catalog.md` |
| 04 | `des-data-product-definition` | `04-data-product-specification.md` |
| 05 | `des-data-source-assessment` | `05-data-source-inventory.md` |
| 06 | `des-domain-modeling` | `06-conceptual-domain-model.md` |
| 07 | `des-architecture-design` | `07-architecture-decision-record.md` |
| 08 | `des-ingestion-design` | `08-ingestion-specification.md` |
| 09 | `des-bronze-layer-design` | `09-bronze-layer-specification.md` |
| 10 | `des-silver-layer-design` | `10-silver-layer-specification.md` |
| 11 | `des-gold-layer-design` | `11-gold-layer-specification.md` |
| 12 | `des-data-contracts` | `12-data-contract-specification.md` |
| 13 | `des-transformation-design` | `13-transformation-specification.md` |
| 14 | `des-data-quality` | `14-data-quality-specification.md` |
| 15 | `des-orchestration-observability` | `15-orchestration-observability-specification.md` |
| 16 | `des-semantic-model-design` | `16-semantic-model-specification.md` |
| 17 | `des-serving-layer-design` | `17-serving-layer-specification.md` |
| 18 | `des-lineage-metadata-design` | `18-lineage-metadata-specification.md` |
| 19 | `des-governance-security-design` | `19-governance-security-specification.md` |
| 20 | `des-cost-and-performance-optimization` | `20-cost-performance-optimization-specification.md` |
| 21 | `des-cicd-and-testing` | `21-cicd-testing-specification.md` |
| 22 | `des-project-evaluation` | `22-project-evaluation-report.md` |

---

## 7. Danh mục Support Skills

| STT | Skill | Mục tiêu | Output Artifact |
|---:|:---|:---|:---|
| 01 | `des-create-epic` | Tạo epic từ 22 artifact chính | `epic-catalog.md` |
| 02 | `des-create-story` | Tạo story từ epic và DES artifacts | `story-catalog.md` |
| 03 | `des-sprint-planning` | Chọn story cho sprint | `sprint-plan.md` |
| 04 | `des-story-readiness-check` | Kiểm tra story đã ready chưa | `story-readiness-report.md` |
| 05 | `des-dev-task-breakdown` | Chia story thành dev task | `dev-task-breakdown.md` |
| 06 | `des-implementation-plan` | Sắp xếp trình tự triển khai | `implementation-plan.md` |
| 07 | `des-code-review` | Review code so với story/task/artifact | `code-review-report.md` |
| 08 | `des-release-readiness-review` | Kiểm tra sẵn sàng release/handoff/demo | `release-readiness-report.md` |
| 09 | `des-retrospective` | Tổng kết sprint/release cycle | `retrospective-report.md` |
| 10 | `des-correct-course` | Điều hướng khi workflow bị lệch | `correct-course-plan.md` |
| 11 | `des-workflow-status-update` | Cập nhật trạng thái workflow | `des-workflow-status.md` |
| 12 | `des-wise` | Help users choose the right DES skill, understand workflow position, and get next-step recommendations | Direct response or `des-wise-recommendation.md` |

---

## DES Learning Skills

DES-SKILL also supports a learning layer.

Learning skills help users understand the Data Engineering concepts behind DES artifacts. Instead of only producing project documentation, DES-SKILL can explain why each artifact exists, which lifecycle concept it teaches, which decisions it forces, and what mistakes it helps prevent.

The learning layer is guided by:

```text
SOUL.md
knowledge/FUNDAMENTALS-MAP.md
skills-learning/
```

### Learning Skills Catalog

| Skill | Purpose | Output |
|---|---|---|
| `des-explain-artifact` | Explain a DES artifact as a learning object | `*-learning-notes.md` |
| `des-artifact-quiz` | Generate a quiz from an artifact or learning notes | `*-artifact-quiz.md` |
| `des-learning-path` | Build a structured learning path across 22 DES phases | `des-learning-path.md` |
| `des-gap-teacher` | Diagnose the user's learning gaps from an artifact, quiz answer, or explanation | `*-learning-gap-report.md` |
| `des-socratic-coach` | Teach a DES concept through guided Socratic questions | `*-socratic-coaching-session.md` |
| `des-learning-status-update` | Update phase-by-phase learning progress and readiness | `des-learning-status.md` |
| `des-learning-review` | Summarize learning progress, weak concepts, gaps, and next actions | `des-learning-review.md` |

### Example — Generate Quiz

```text
Use DES learning skill: des-artifact-quiz

Artifact:
_des-output/planning-artifacts/08-ingestion-specification.md

Objective:
Create a quiz to check whether I understand ingestion design.

Instructions:
1. Read SOUL.md.
2. Read knowledge/FUNDAMENTALS-MAP.md.
3. Read skills-learning/des-artifact-quiz/SKILL.md.
4. Load only step-01.
5. Generate concept-check, applied, trade-off, and common-mistake questions.
6. Include answer key and explanations.
```

### Example — Build Learning Path

```text
Use DES learning skill: des-learning-path

Objective:
Create a project-based Data Engineering learning path from the 22 DES phases.

Instructions:
1. Read SOUL.md.
2. Read knowledge/FUNDAMENTALS-MAP.md.
3. Read skills-learning/des-learning-path/SKILL.md.
4. Scan available DES artifacts.
5. Group phases into learning modules.
6. Recommend next learning actions.
```

### Example — Diagnose Learning Gaps

```text
Use DES learning skill: des-gap-teacher

Context:
I answered the quiz for Phase 10 Silver Layer.

Objective:
Diagnose what I understand correctly, what I misunderstand, and what I should review before moving to Gold Layer.

Instructions:
1. Read SOUL.md.
2. Read knowledge/FUNDAMENTALS-MAP.md.
3. Read skills-learning/des-gap-teacher/SKILL.md.
4. Load only step-01.
5. Diagnose gaps from my answers.
6. Recommend study actions and artifact corrections.
```

### Example — Socratic Coaching

```text
Use DES learning skill: des-socratic-coach

Topic:
Silver Layer vs Gold Layer

Objective:
Teach me through questions, one question at a time.

Instructions:
1. Read SOUL.md.
2. Read knowledge/FUNDAMENTALS-MAP.md.
3. Read skills-learning/des-socratic-coach/SKILL.md.
4. Load only step-01.
5. Use interactive Socratic mode.
6. Do not give the final answer too early.
```

## DES Wise Help

`des-wise` is the DES-SKILL help and routing assistant.

Use it when you are not sure which skill to run next.

Example:

```text
Use DES skill: des-wise

Objective:
Tôi không chắc nên dùng skill nào tiếp theo.

Context:
Tôi đã có Business Discovery và Data Source Inventory, nhưng chưa biết nên thiết kế architecture trước hay ingestion trước.

Instructions:
1. Read skills-support/des-wise/SKILL.md.
2. Read DES-WORKFLOW.md.
3. Inspect workflow status if available.
4. Recommend one next skill.
5. Explain why.
6. Provide a copy-paste prompt.
```

### Example — Update Learning Status

```text
Use DES learning skill: des-learning-status-update

Objective:
Cập nhật trạng thái học tập của tôi qua các DES phases.

Instructions:
1. Read SOUL.md.
2. Read knowledge/FUNDAMENTALS-MAP.md.
3. Read skills-learning/des-learning-status-update/SKILL.md.
4. Load only step-01.
5. Scan _des-output/planning-artifacts and _des-output/learning-artifacts.
6. Create or update _des-output/learning-artifacts/des-learning-status.md.
```

### Example — Review Learning Progress

```text
Use DES learning skill: des-learning-review

Objective:
Tổng kết tôi đã học đến đâu, còn yếu concept nào, và nên học gì tiếp.

Instructions:
1. Read SOUL.md.
2. Read knowledge/FUNDAMENTALS-MAP.md.
3. Read _des-output/learning-artifacts/des-learning-status.md.
4. Read skills-learning/des-learning-review/SKILL.md.
5. Load only step-01.
6. Summarize progress, weak concepts, gaps, and next actions.
```

---

## 8. Nguyên tắc hoạt động của agent

Mỗi skill trong DES-SKILL tuân theo nguyên tắc:

1. Đọc `SKILL.md`
2. Đọc `customize.toml`
3. Chỉ load `step-01` trước
4. Không load step sau khi chưa được hướng dẫn
5. Dừng tại mọi `HALT`
6. Tạo hoặc cập nhật artifact
7. Chạy checklist
8. Cập nhật workflow status
9. Đề xuất skill tiếp theo

> **Code implements approved data artifacts. Code does not replace discovery, requirements, architecture, contracts, or quality design.**

---

## 9. Trạng thái workflow

DES-SKILL sử dụng file trạng thái trung tâm:

```text
_des-output/implementation-artifacts/des-workflow-status.md
```

Quy trình hỗ trợ bốn chế độ workflow thích ứng (workflow modes):
- **Quick Fix**: Sửa đổi nhỏ, sửa tài liệu, thay đổi cấu hình hoặc dọn dẹp ít rủi ro.
- **Standard Feature**: Một tính năng dữ liệu gắn kết, thay đổi pipeline, thay đổi model hoặc cập nhật hợp đồng/DQ.
- **Enterprise Data Product**: Sản phẩm dữ liệu sản xuất mới, dữ liệu được quản lý, hoặc quyết định kiến trúc không thể đảo ngược.
- **Correct Course**: Điều chỉnh khi artifact thực tế bị lệch so với thực tế repo, phát hiện qua review hoặc sự cố.

Hệ thống cũng sử dụng các vai trò (personas) khác nhau để thực hiện các nhiệm vụ cụ thể, xem thêm chi tiết tại [docs/personas.md](docs/personas.md).

File này giúp agent biết:

- Phase nào đã xong
- Support skill nào đã chạy
- Story nào ready
- Sprint nào đang active
- Blocker nào còn mở
- Release có sẵn sàng không
- Skill tiếp theo nên chạy là gì

---

## 10. Cấu trúc repo

```text
DES-SKILL/
├── README.md
├── SOUL.md
├── docs/
│   ├── overview.md
│   ├── workflow.md
│   ├── skill-catalog.md
│   ├── support-skills.md
│   ├── quick-start.md
│   ├── usage-examples.md
│   ├── repo-structure.md
│   ├── agent-rules.md
│   └── contributing.md
├── knowledge/
│   └── FUNDAMENTALS-MAP.md
├── skills/
│   ├── des-business-discovery/
│   ├── des-business-questions/
│   └── ...  (22 main lifecycle skills)
├── skills-support/
│   ├── des-create-epic/
│   ├── des-create-story/
│   └── ...  (12 support skills)
├── skills-learning/
│   ├── des-explain-artifact/
│   ├── des-artifact-quiz/
│   ├── des-learning-path/
│   ├── des-gap-teacher/
│   ├── des-socratic-coach/
│   ├── des-learning-status-update/
│   └── des-learning-review/
├── templates/
│   ├── learning/
│   │   ├── artifact-explanation-template.md
│   │   ├── artifact-quiz-template.md
│   │   ├── learning-path-template.md
│   │   ├── learning-gap-report-template.md
│   │   └── socratic-coaching-session-template.md
│   └── support/
│       └── des-wise-response-template.md
├── checklists/
└── _des/
    ├── output/
    │   └── learning/
    ├── learning-status/
    │   └── des-learning-status.md
    ├── sprint-status/
    │   └── des-workflow-status.md
    └── templates/
```

---

## 11. Ai nên dùng repo này?

Repo này phù hợp cho:

- Sinh viên học data engineering
- Data engineer muốn chuẩn hóa workflow dự án
- Người xây dựng portfolio project
- Team nhỏ muốn dùng AI agent hỗ trợ phân tích và triển khai
- Dự án Microsoft Fabric, Databricks, dbt, DuckDB, lakehouse, ELT/ETL
- Người muốn xây dựng quy trình giống BMAD nhưng cho data engineering

---

## 12. Validation

```bash
npm test
npm run validate:skills
node tools/validate-artifacts.js
```

---

## 13. Contributing

Xem [CONTRIBUTING.md](CONTRIBUTING.md) để biết tiêu chuẩn skill, tiêu chuẩn step, quy trình validation và hướng dẫn pull request.

---

## 14. Changelog

Xem [CHANGELOG.md](CHANGELOG.md) để biết lịch sử phát hành.

---

## 15. License

MIT License. Xem [LICENSE](LICENSE).
