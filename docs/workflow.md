# DES-SKILL Workflow

## Workflow đầy đủ (22 phases + 12 support steps)

### Tầng 1 — Main lifecycle phases

```text
01  des-business-discovery          →  01-business-discovery-brief.md
02  des-business-questions          →  02-business-question-catalog.md
03  des-requirements-and-kpis       →  03-requirements-and-kpi-catalog.md
04  des-data-product-definition     →  04-data-product-specification.md
05  des-data-source-assessment      →  05-data-source-inventory.md
06  des-domain-modeling             →  06-conceptual-domain-model.md
07  des-architecture-design         →  07-architecture-decision-record.md
08  des-ingestion-design            →  08-ingestion-specification.md
09  des-bronze-layer-design         →  09-bronze-layer-specification.md
10  des-silver-layer-design         →  10-silver-layer-specification.md
11  des-gold-layer-design           →  11-gold-layer-specification.md
12  des-data-contracts              →  12-data-contract-specification.md
13  des-transformation-design       →  13-transformation-specification.md
14  des-data-quality                →  14-data-quality-specification.md
15  des-orchestration-observability →  15-orchestration-observability-specification.md
16  des-semantic-model-design       →  16-semantic-model-specification.md
17  des-serving-layer-design        →  17-serving-layer-specification.md
18  des-lineage-metadata-design     →  18-lineage-metadata-specification.md
19  des-governance-security-design  →  19-governance-security-specification.md
20  des-cost-and-performance-optimization → 20-cost-performance-optimization-specification.md
21  des-cicd-and-testing            →  21-cicd-testing-specification.md
22  des-project-evaluation          →  22-project-evaluation-report.md
```

### Tầng 2 — Support implementation loop

```text
des-create-epic             →  epic-catalog.md
des-create-story            →  story-catalog.md
des-sprint-planning         →  sprint-plan.md
des-story-readiness-check   →  story-readiness-report.md
des-dev-task-breakdown      →  dev-task-breakdown.md
des-implementation-plan     →  implementation-plan.md
[Implementation]
des-code-review             →  code-review-report.md
des-release-readiness-review →  release-readiness-report.md
des-retrospective           →  retrospective-report.md
des-correct-course          →  correct-course-plan.md
des-workflow-status-update  →  des-workflow-status.md
des-wise                    →  des-wise-recommendation.md (hoặc response trực tiếp)
```

---

## Phase-Orchestrated Support Model

DES-SKILL supports two complementary workflow models.

### Model A — Full Planning Then Implementation

This is the original workflow:

```text
22 main lifecycle phases
    ↓
support implementation loop
    ↓
implementation / review / release
```

This model is useful when the project needs a full planning baseline before implementation starts.

### Model B — Phase-Orchestrated Support

This is the validated phase-by-phase workflow:

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

Use Model B when downstream phases depend on facts that require technical, data, research, or review evidence.

Examples:

* Phase 05 may require source probing, schema inspection, profiling, and license checks before Phase 06 can safely use its output.
* Phase 07 may require cost, platform, runtime, and security feasibility evidence before architecture decisions are treated as final.
* Phase 10 may require sample transformation and data quality evidence before Silver rules are marked Done.

### Rule

Do not treat an initial phase artifact as final by default.

A phase is Done only when:

```text
artifact exists
+ required support work is identified
+ support evidence exists or is waived with reason
+ artifact is revised from evidence
+ handoff exists for the next phase
```

See:

[docs/phase-execution-contract.md](file:///C:/Users/dksan/Code/data-engineer/data-engineering-superpowers/docs/phase-execution-contract.md)

for the full contract.

---

## Luồng tối thiểu cho project học tập / portfolio

Nếu là project học tập hoặc portfolio nhỏ, có thể dùng luồng rút gọn:

```text
Phase 01  des-business-discovery
Phase 02  des-business-questions
Phase 03  des-requirements-and-kpis
Phase 04  des-data-product-definition
Phase 05  des-data-source-assessment
Phase 07  des-architecture-design
Phase 08  des-ingestion-design
Phase 09  des-bronze-layer-design
Phase 10  des-silver-layer-design
Phase 11  des-gold-layer-design
Phase 14  des-data-quality
Phase 21  des-cicd-and-testing
          ↓
  des-create-epic
  des-create-story
  des-sprint-planning
  des-dev-task-breakdown
  des-code-review
```

---

## Luồng đầy đủ cho project nghiêm túc

Dùng toàn bộ 22 main skills và 12 support skills. Không bỏ qua phase nào mà không có lý do rõ ràng.

---

## Workflow modes

| Mode | Dùng khi | Hành vi |
|:---|:---|:---|
| `Quick Fix` | Sửa nhỏ, bounded change | Tìm path artifact và verification tối thiểu |
| `Standard Feature` | Feature mới, pipeline change | Dùng planning → design → build → review → verify |
| `Enterprise Data Product` | Data product mới, high-impact | Full lifecycle với HALT gates và evidence mạnh |
| `Correct Course` | Workflow bị lệch, artifact cũ không khớp thực tế | Reassess artifact và route về recovery phase |

---

## Quy tắc chuyển phase

Không chuyển sang phase sau nếu:

- Artifact chính của phase hiện tại còn thiếu
- HALT chưa được resolve
- Checklist còn item bị blocked
- Workflow status đang `Blocked`
- Decision quan trọng chưa có owner
- Upstream artifact phụ thuộc chưa tồn tại

---

## HALT policy

`HALT` là điểm dừng bắt buộc trong step files. Agent **phải dừng** khi gặp HALT và chờ quyết định từ người dùng.

Ví dụ HALT điển hình:

| HALT trigger | Phase |
|:---|:---|
| Không rõ business owner là ai | des-business-discovery |
| KPI formula chưa được confirm | des-requirements-and-kpis |
| Gold grain chưa rõ | des-gold-layer-design |
| Contract owner chưa sign off | des-data-contracts |
| Story chưa có acceptance criteria | des-story-readiness-check |
| Test evidence còn thiếu | des-release-readiness-review |

---

## Artifact dependency map

```text
01-business-discovery-brief
    └─▶ 02-business-question-catalog
            └─▶ 03-requirements-and-kpi-catalog
                    ├─▶ 04-data-product-specification
                    └─▶ 05-data-source-inventory
                              └─▶ 06-conceptual-domain-model
                                        └─▶ 07-architecture-decision-record
                                                  ├─▶ 08-ingestion-specification
                                                  ├─▶ 09-bronze-layer-specification
                                                  ├─▶ 10-silver-layer-specification
                                                  └─▶ 11-gold-layer-specification
                                                            ├─▶ 12-data-contract-specification
                                                            ├─▶ 13-transformation-specification
                                                            ├─▶ 14-data-quality-specification
                                                            └─▶ 15-orchestration-observability-specification
                                                                          ├─▶ 16-semantic-model-specification
                                                                          ├─▶ 17-serving-layer-specification
                                                                          ├─▶ 18-lineage-metadata-specification
                                                                          └─▶ 19-governance-security-specification
                                                                                        ├─▶ 20-cost-performance-optimization
                                                                                        ├─▶ 21-cicd-testing-specification
                                                                                        └─▶ 22-project-evaluation-report
```

---

## Workflow Status v2

The workflow status file is the central control plane for DES-SKILL execution.

Template:

```text
templates/00-workflow-status-template.md
```

Runtime file:

```text
_des-output/implementation-artifacts/des-workflow-status.md
```

In the Phase-Orchestrated Support Model, workflow status must track:

```text
phase artifact
support plan
evidence pack
artifact revision
done gate
handoff
overall phase status
```

The next phase should not start only because the previous artifact exists.

The next phase can start when:

```text
previous Done Gate = Pass or Pass with risks
and
previous Handoff = Ready or Ready with Risks
```

If the previous phase is only `Draft`, `Evidence Required`, or `Evidence Collected`, the next phase should not treat its output as final.

---

## Phase 07 Reference Flow

Phase 07 Architecture Design follows the reference flow:

```text
des-architecture-design
    ↓
07-architecture-decision-record.md
    ↓
phase-07-support-plan.md
    ↓
architecture option review / feasibility / cost / security / reversibility evidence
    ↓
phase-07-evidence-pack.md
    ↓
phase-07-artifact-revision.md
    ↓
phase-07-done-gate.md
    ↓
phase-07-to-08-handoff.md
    ↓
des-ingestion-design
```

Phase 07 support work is architecture-evidence-focused.

It validates:

```text
Phase 06 handoff alignment
architecture driver traceability
architecture option comparison
platform feasibility
environment strategy
storage/compute fit
batch/streaming/event fit
layer strategy
serving strategy
security/privacy posture
governance/metadata direction
cost and operational burden
reversibility and lock-in
```

Do not start Phase 08 unless Phase 07 Done Gate passes or passes with risks and the Phase 07 handoff is ready.

Phase 07 may decide target architecture, platform direction, environment strategy, storage/compute direction, layer strategy, serving direction, observability, security, governance, and reversibility.
Phase 07 must not design detailed ingestion pipelines, physical schemas, transformations, dashboards, APIs, CI/CD files, or code.

---

## Phase 08 Reference Flow

Phase 08 Ingestion Design follows the reference flow:

```text
des-ingestion-design
    ↓
08-ingestion-specification.md
    ↓
phase-08-support-plan.md
    ↓
ingestion pattern / idempotency / replay / schema drift / security / observability evidence
    ↓
phase-08-evidence-pack.md
    ↓
phase-08-artifact-revision.md
    ↓
phase-08-done-gate.md
    ↓
phase-08-to-09-handoff.md
    ↓
des-bronze-layer-design
```

Phase 08 support work is ingestion-control-focused.

It validates:

```text
Phase 07 handoff alignment
source-to-ingestion mapping
architecture constraint alignment
ingestion pattern fit
batch/streaming/event alignment
frequency and trigger
access and extraction
incremental/checkpoint strategy
idempotency
replay/backfill
schema drift policy
error/quarantine/recovery
security/credential handling
source impact/rate limits
landing metadata expectations
monitoring/audit expectations
```

Do not start Phase 09 unless Phase 08 Done Gate passes or passes with risks and the Phase 08 handoff is ready.

Phase 08 may define source-specific ingestion patterns, checkpointing, idempotency, replay/backfill, schema drift handling, error/quarantine, security/credential handling, landing expectations, and monitoring expectations.
Phase 08 must not design detailed Bronze/Silver/Gold schemas, transformations, dashboards, APIs, full orchestration workflows, CI/CD files, or implementation code.

---

## Phase 09 Reference Flow

Phase 09 Bronze Layer Design follows the reference flow:

```text
des-bronze-layer-design
    ↓
09-bronze-layer-specification.md
    ↓
phase-09-support-plan.md
    ↓
raw preservation / metadata / schema drift / replay / quarantine / access evidence
    ↓
phase-09-evidence-pack.md
    ↓
phase-09-artifact-revision.md
    ↓
phase-09-done-gate.md
    ↓
phase-09-to-10-handoff.md
    ↓
des-silver-layer-design
```

Phase 09 support work is Bronze-evidence-focused.

It validates:

```text
Phase 08 handoff alignment
source-to-Bronze mapping
ingestion-to-Bronze alignment
Bronze dataset boundary
raw preservation
storage format
file/table organization
partitioning strategy
mandatory metadata
ingestion audit metadata
schema drift handling
replay/backfill support
idempotency/dedup boundary
quarantine/rejected data
retention/lifecycle
access/sensitivity
Bronze boundary quality
lineage/traceability
```

Do not start Phase 10 unless Phase 09 Done Gate passes or passes with risks and the Phase 09 handoff is ready.

Phase 09 may define Bronze dataset boundaries, raw preservation, storage format, file/table organization, partitioning, metadata columns, schema drift, replay, quarantine, retention, access, and traceability.
Phase 09 must not design Silver conformance, Gold marts, semantic models, dashboards, APIs, transformations, orchestration implementation, CI/CD files, or code.

---

## Phase 10 Reference Flow

Phase 10 Silver Layer Design follows the reference flow:

```text
des-silver-layer-design
    ↓
10-silver-layer-specification.md
    ↓
phase-10-support-plan.md
    ↓
grain / identity / key / conformance / DQ / lineage evidence
    ↓
phase-10-evidence-pack.md
    ↓
phase-10-artifact-revision.md
    ↓
phase-10-done-gate.md
    ↓
phase-10-to-11-handoff.md
    ↓
des-gold-layer-design
```

Phase 10 support work is Silver-evidence-focused.

It validates:

```text
Phase 09 handoff alignment
Bronze-to-Silver mapping
domain alignment
conceptual-to-logical mapping
grain and identity
key strategy
deduplication and survivorship
conformance and standardization
data type normalization
timezone and temporal normalization
unit and currency normalization
code/status/category mapping
null and missing value handling
schema evolution handling
source-of-truth reconciliation
Silver boundary quality rules
rejected/quarantine handling
privacy/security handling
lineage and traceability
metadata inheritance
refresh and incremental behavior
```

Do not start Phase 11 unless Phase 10 Done Gate passes or passes with risks and the Phase 10 handoff is ready.

Phase 10 may define Silver datasets, grain, identity, keys, deduplication, survivorship, conformance, normalization, DQ rules, rejected record handling, privacy handling, lineage, metadata inheritance, and refresh behavior.
Phase 10 must not design Gold marts, final metrics, semantic models, dashboards, APIs, orchestration implementation, CI/CD files, or code.

---

## Phase 11 Reference Flow

Phase 11 Gold Layer Design follows the reference flow:

```text
des-gold-layer-design
    ↓
11-gold-layer-specification.md
    ↓
phase-11-support-plan.md
    ↓
business question / KPI / grain / aggregation / serving / contract evidence
    ↓
phase-11-evidence-pack.md
    ↓
phase-11-artifact-revision.md
    ↓
phase-11-done-gate.md
    ↓
phase-11-to-12-handoff.md
    ↓
des-data-contracts
```

Phase 11 support work is Gold-evidence-focused.

It validates:

```text
Phase 10 handoff alignment
business question to Gold mapping
KPI/requirement to Gold mapping
data product output to Gold mapping
Silver-to-Gold mapping
Gold dataset boundary
consumer/serving alignment
grain and aggregation
metric definition alignment
modeling pattern
filtering and slicing
history/SCD behavior
freshness/SLA
Gold boundary quality
access/security
contract expectation
lineage and traceability
performance and cost
```

Do not start Phase 12 unless Phase 11 Done Gate passes or passes with risks and the Phase 11 handoff is ready.

Phase 11 may define Gold datasets, marts, metric-ready datasets, output types, grain, aggregation, modeling pattern, filtering/slicing, history behavior, freshness/SLA, quality rules, access/security, contract expectation, lineage, and performance/cost considerations.
Phase 11 must not design semantic model internals, dashboard visuals, API implementation, full data contracts, orchestration implementation, CI/CD files, or code.

---

## Phase 12 Reference Flow

Phase 12 Data Contracts follows the reference flow:

```text
des-data-contracts
    ↓
12-data-contract-specification.md
    ↓
phase-12-support-plan.md
    ↓
producer / consumer / schema / grain / SLA / DQ / versioning / incident evidence
    ↓
phase-12-evidence-pack.md
    ↓
phase-12-artifact-revision.md
    ↓
phase-12-done-gate.md
    ↓
phase-12-to-13-handoff.md
    ↓
des-transformation-design
```

Phase 12 support work is contract-evidence-focused.

It validates:

```text
Phase 11 handoff alignment
contract scope
contract inventory
producer/consumer/owner
contract level
dataset/output identity
business meaning and grain
schema expectations
field-level expectations
metric/KPI expectations
freshness/SLA
quality expectations
volume/completeness
security/access
lineage/metadata
compatibility/versioning
change management
deprecation policy
incident/escalation
acceptance/validation
ownership/approval
```

Do not start Phase 13 unless Phase 12 Done Gate passes or passes with risks and the Phase 12 handoff is ready.

Phase 12 may define contract obligations and validation expectations.
Phase 12 must not implement tests, transformations, dashboards, APIs, orchestration, CI/CD files, or code.

---

## Phase 13 Reference Flow

Phase 13 Transformation Design follows the reference flow:

```text
des-transformation-design
    ↓
13-transformation-specification.md
    ↓
phase-13-support-plan.md
    ↓
mapping / rule / DAG / incremental / validation / contract-alignment evidence
    ↓
phase-13-evidence-pack.md
    ↓
phase-13-artifact-revision.md
    ↓
phase-13-done-gate.md
    ↓
phase-13-to-14-handoff.md
    ↓
des-data-quality
```

Phase 13 support work is transformation-evidence-focused.

It validates:

```text
Phase 12 handoff alignment
contract-to-transformation mapping
layer-to-layer mapping
transformation inventory
dependency graph
input/output mapping
transformation grain
business rules
cleaning and conformance rules
join and relationship rules
deduplication and survivorship
SCD/history behavior
aggregation and metric rules
incremental processing
backfill and replay
late/corrected data
error/quarantine behavior
validation and test expectations
contract alignment
lineage and metadata
performance and cost
security and privacy
implementation boundary
```

Do not start Phase 14 unless Phase 13 Done Gate passes or passes with risks and the Phase 13 handoff is ready.

Phase 13 may define transformation logic and validation expectations.
Phase 13 must not implement SQL, Python, dbt, Spark, notebooks, orchestration, tests, CI/CD files, dashboards, APIs, or code.

---

## Phase 14 Reference Flow

Phase 14 Data Quality Design follows the reference flow:

```text
des-data-quality
    ↓
14-data-quality-specification.md
    ↓
phase-14-support-plan.md
    ↓
rule / threshold / severity / gate / owner / evidence validation
    ↓
phase-14-evidence-pack.md
    ↓
phase-14-artifact-revision.md
    ↓
phase-14-done-gate.md
    ↓
phase-14-to-15-handoff.md
    ↓
des-orchestration-observability
```

Phase 14 support work is data-quality-evidence-focused.

It validates:

```text
Phase 13 handoff alignment
quality scope
quality dimensions
quality rule inventory
dataset-to-rule mapping
layer-specific quality rules
contract quality alignment
transformation validation alignment
freshness rules
completeness and volume rules
uniqueness and grain rules
validity and domain rules
referential integrity rules
consistency and reconciliation rules
accuracy and business reasonableness rules
schema and compatibility rules
null and missing value rules
anomaly and threshold rules
severity classification
failure handling and gates
ownership and stewardship
evidence and reporting
monitoring and observability expectations
CI/CD and release gate candidates
```

Do not start Phase 15 unless Phase 14 Done Gate passes or passes with risks and the Phase 14 handoff is ready.

Phase 14 may define quality rules and gates.
Phase 14 must not implement SQL, Python, dbt, Great Expectations, Spark, orchestration, monitoring, CI/CD files, dashboards, APIs, or code.

---

## Phase 15 Reference Flow

Phase 15 Orchestration and Observability follows the reference flow:

```text
des-orchestration-observability
    ↓
15-orchestration-observability-specification.md
    ↓
phase-15-support-plan.md
    ↓
workflow / dependency / gate / retry / alert / SLA / evidence validation
    ↓
phase-15-evidence-pack.md
    ↓
phase-15-artifact-revision.md
    ↓
phase-15-done-gate.md
    ↓
phase-15-to-16-handoff.md
    ↓
des-semantic-model-design
```

Phase 15 support work is operational-evidence-focused.

It validates:

```text
Phase 14 handoff alignment
workflow scope
workflow inventory
dependency graph
schedule and trigger strategy
source readiness checks
ingestion orchestration
Bronze/Silver/Gold transformation orchestration
quality gate integration
publish and release gates
retry and timeout policy
failure handling and recovery
backfill and replay operations
late data and correction operations
alerting and notification
incident and escalation
observability signals
freshness and SLA monitoring
volume and completeness monitoring
quality result monitoring
runtime and performance monitoring
cost and usage monitoring
run evidence and audit metadata
operational ownership
```

Do not start Phase 16 unless Phase 15 Done Gate passes or passes with risks and the Phase 15 handoff is ready.

Phase 15 may define operational design and observability expectations.
Phase 15 must not implement DAGs, pipelines, monitoring dashboards, CI/CD workflows, infrastructure, SQL, Python, or platform-specific code.

---

## Phase 16 Reference Flow

Phase 16 Semantic Model Design follows the reference flow:

```text
des-semantic-model-design
    ↓
16-semantic-model-specification.md
    ↓
phase-16-support-plan.md
    ↓
metric / dimension / relationship / security / trust / freshness evidence
    ↓
phase-16-evidence-pack.md
    ↓
phase-16-artifact-revision.md
    ↓
phase-16-done-gate.md
    ↓
phase-16-to-17-handoff.md
    ↓
des-serving-layer-design
```

Phase 16 support work is semantic-evidence-focused.

It validates:

```text
Phase 15 handoff alignment
semantic scope
consumer and use-case mapping
Gold-to-semantic mapping
business glossary alignment
semantic entities
measures and KPIs
dimensions and attributes
hierarchies
relationships and join behavior
grain and aggregation behavior
filters and slicers
time intelligence expectations
calculation ownership
naming and display conventions
security and access model
certification and trust status
freshness and quality display expectations
lineage and metadata expectations
semantic testing expectations
contract and quality alignment
```

Do not start Phase 17 unless Phase 16 Done Gate passes or passes with risks and the Phase 16 handoff is ready.

Phase 16 may define business-facing semantic objects and trust expectations.
Phase 16 must not implement BI semantic model code, dashboard visuals, APIs, deployments, CI/CD workflows, SQL, DAX, LookML, Cube, or dbt semantic code.

---

## Phase 17 Reference Flow

Phase 17 Serving Layer Design follows the reference flow:

```text
des-serving-layer-design
    ↓
17-serving-layer-specification.md
    ↓
phase-17-support-plan.md
    ↓
consumer / channel / access / freshness / performance / feedback evidence
    ↓
phase-17-evidence-pack.md
    ↓
phase-17-artifact-revision.md
    ↓
phase-17-done-gate.md
    ↓
phase-17-to-18-handoff.md
    ↓
des-lineage-metadata-design
```

Phase 17 support work is serving-evidence-focused.

It validates:

```text
Phase 16 handoff alignment
serving scope
consumer and persona mapping
serving channel inventory
Gold/Semantic-to-serving mapping
serving pattern decision
dashboard and reporting expectations
self-service analytics expectations
API and application-serving expectations
ML and AI dataset serving expectations
reverse ETL and export expectations
data sharing and federation expectations
AI and data-agent access expectations
access control and security model
freshness and quality visibility
performance and latency expectations
caching and materialization expectations
feedback loop and issue reporting
usage monitoring and adoption signals
ownership and support model
```

Do not start Phase 18 unless Phase 17 Done Gate passes or passes with risks and the Phase 17 handoff is ready.

Phase 17 may define serving decisions and consumer experience.
Phase 17 must not implement dashboards, APIs, apps, ML jobs, reverse ETL jobs, exports, agents, caching, deployments, CI/CD workflows, or code.

---

## Phase 18 Reference Flow

Phase 18 Lineage and Metadata Design follows the reference flow:

```text
des-lineage-metadata-design
    ↓
18-lineage-metadata-specification.md
    ↓
phase-18-support-plan.md
    ↓
asset / catalog / lineage / ownership / trust / audit evidence
    ↓
phase-18-evidence-pack.md
    ↓
phase-18-artifact-revision.md
    ↓
phase-18-done-gate.md
    ↓
phase-18-to-19-handoff.md
    ↓
des-governance-security-design
```

Phase 18 support work is lineage-and-metadata-evidence-focused.

It validates:

```text
Phase 17 handoff alignment
metadata scope
metadata category coverage
metadata asset inventory
business metadata
technical metadata
operational metadata
reference metadata
dataset catalog requirements
field and schema metadata
metric and KPI metadata
contract metadata
transformation lineage
dataset lineage
column-level lineage expectations
semantic and serving lineage
quality and trust metadata
ownership and stewardship metadata
usage and consumer metadata
change and version metadata
audit and compliance metadata
metadata capture responsibilities
metadata freshness and maintenance policy
```

Do not start Phase 19 unless Phase 18 Done Gate passes or passes with risks and the Phase 18 handoff is ready.

Phase 18 may define lineage and metadata requirements.
Phase 18 must not implement catalog tools, lineage scanners, metadata crawlers, OpenLineage, Purview, DataHub, Collibra, dbt docs, metadata pipelines, CI/CD workflows, or code.

---

## Phase 19 Reference Flow

Phase 19 Governance and Security Design follows the reference flow:

```text
des-governance-security-design
    ↓
19-governance-security-specification.md
    ↓
phase-19-support-plan.md
    ↓
classification / access / privacy / retention / sharing / audit / exception evidence
    ↓
phase-19-evidence-pack.md
    ↓
phase-19-artifact-revision.md
    ↓
phase-19-done-gate.md
    ↓
phase-19-to-20-handoff.md
    ↓
des-cost-and-performance-optimization
```

Phase 19 support work is governance-and-security-evidence-focused.

It validates:

```text
Phase 18 handoff alignment
governance scope
data classification
asset sensitivity inventory
field-level sensitivity handling
access control model
role and persona access matrix
row-level security policy
column-level security policy
masking, tokenization, and anonymization
encryption and secret handling
privacy and consent
retention lifecycle and deletion
data sharing and external access
API, application, and AI-agent access
reverse ETL governance
audit logging and access monitoring
approval workflow and exception handling
ownership, stewardship, and accountability
compliance and regulatory considerations
incident response and escalation
```

Do not start Phase 20 unless Phase 19 Done Gate passes or passes with risks and the Phase 19 handoff is ready.

Phase 19 may define governance and security policy.
Phase 19 must not implement IAM, ACLs, RLS/CLS, masking logic, encryption config, governance tooling, policy engines, CI/CD workflows, infrastructure, or code.

---

## Phase 20 Reference Flow

Phase 20 Cost and Performance Optimization follows the reference flow:

```text
des-cost-and-performance-optimization
    ↓
20-cost-performance-optimization-specification.md
    ↓
phase-20-support-plan.md
    ↓
workload / baseline / cost driver / SLO / trade-off evidence
    ↓
phase-20-evidence-pack.md
    ↓
phase-20-artifact-revision.md
    ↓
phase-20-done-gate.md
    ↓
phase-20-to-21-handoff.md
    ↓
des-cicd-and-testing
```

Phase 20 support work is cost-and-performance-evidence-focused.

It validates:

```text
Phase 19 handoff alignment
optimization scope
workload inventory
workload priority
cost driver inventory
performance driver inventory
baseline measurement plan
storage optimization strategy
compute optimization strategy
ingestion optimization strategy
transformation optimization strategy
query and semantic model optimization strategy
serving performance strategy
orchestration runtime optimization
data quality cost/performance considerations
caching and materialization strategy
partitioning, clustering, and file sizing expectations
incremental processing and recomputation strategy
retention lifecycle and storage tiering
cost monitoring and budget guardrails
performance monitoring and SLOs
scalability and capacity planning
trade-off decisions
```

Do not start Phase 21 unless Phase 20 Done Gate passes or passes with risks and the Phase 20 handoff is ready.

Phase 20 may define cost and performance optimization strategy.
Phase 20 must not implement SQL tuning, code rewrites, cluster resizing, autoscaling, indexes, caching deployments, infrastructure changes, CI/CD workflows, or cost controls.

---

## Phase 21 Reference Flow

Phase 21 CI/CD and Testing follows the reference flow:

```text
des-cicd-and-testing
    ↓
21-cicd-testing-specification.md
    ↓
phase-21-support-plan.md
    ↓
repository / test / gate / environment / rollback / release evidence
    ↓
phase-21-evidence-pack.md
    ↓
phase-21-artifact-revision.md
    ↓
phase-21-done-gate.md
    ↓
phase-21-to-22-handoff.md
    ↓
des-project-evaluation
```

Phase 21 support work is CI/CD-and-testing-evidence-focused.

It validates:

```text
Phase 20 handoff alignment
CI/CD scope
repository and artifact inventory
branch and review strategy
environment and promotion strategy
test inventory
unit test expectations
integration test expectations
data contract test gates
data quality test gates
transformation test gates
orchestration test gates
semantic and serving test gates
security and governance test gates
cost and performance test gates
deployment gates
release approval workflow
rollback and recovery strategy
release evidence and audit trail
test data and fixture strategy
secrets and environment configuration policy
breaking change policy
```

Do not start Phase 22 unless Phase 21 Done Gate passes or passes with risks and the Phase 21 handoff is ready.

Phase 21 may define CI/CD and testing strategy.
Phase 21 must not implement GitHub Actions, Azure DevOps pipelines, Fabric deployment pipelines, dbt tests, pytest, SQL/Spark/notebook tests, IaC, infrastructure, deployment scripts, or release execution code.

---

## Phase 22 Reference Flow

Phase 22 Project Evaluation follows the final reference flow:

```text
des-project-evaluation
    ↓
22-project-evaluation-report.md
    ↓
phase-22-support-plan.md
    ↓
business / readiness / release / adoption / risk evidence
    ↓
phase-22-evidence-pack.md
    ↓
phase-22-artifact-revision.md
    ↓
phase-22-done-gate.md
    ↓
phase-22-final-closeout.md
    ↓
workflow-complete-or-next-iteration
```

Phase 22 support work is final-evaluation-evidence-focused.

It validates:

```text
Phase 21 handoff alignment
upstream artifact completeness
evaluation scope
success criteria
business goal evaluation
business question coverage
requirement and KPI evaluation
data product delivery
source and ingestion
domain model
architecture
Bronze/Silver/Gold layers
contracts
transformations
data quality
orchestration and observability
semantic and serving
lineage and metadata
governance and security
cost and performance
CI/CD and testing
stakeholder feedback
usage and adoption evidence
readiness scorecard
risks and limitations
lessons learned
next iteration recommendation
final decision
```

Phase 22 may close the workflow, close with risks, mark design complete, recommend MVP/demo readiness, recommend internal review, route back to a specific phase, or recommend next iteration.

Phase 22 must not claim production readiness without release/test/security evidence.
