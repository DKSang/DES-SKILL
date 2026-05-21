# Usage Examples

Các ví dụ thực tế về cách dùng DES-SKILL cho từng tình huống.

---

## Ví dụ 1 — Bắt đầu dự án hoàn toàn mới

**Tình huống:** Bạn đang xây dựng data platform cho dự án climate-smart agriculture, chưa có gì cả.

### Prompt gọi des-business-discovery

```text
Use DES skill: des-business-discovery

Project context:
Dự án: Climate-Smart Agriculture Data Platform
Mục tiêu: Xây dựng data platform phân tích dữ liệu khí hậu, đất đai và canh tác để hỗ trợ quyết định cho nông dân và cơ quan nông nghiệp.
Stakeholders sơ bộ: Nông dân, cán bộ khuyến nông, nhà nghiên cứu, cơ quan chính phủ.
Tech: Dự kiến dùng Microsoft Fabric hoặc DuckDB.

Objective:
Tạo Business Discovery Brief đầu tiên cho dự án.

Instructions:
1. Read `skills/des-business-discovery/SKILL.md`.
2. Read `skills/des-business-discovery/customize.toml`.
3. Load only step-01.
4. Stop at every HALT point and wait for my input.
5. Create `01-business-discovery-brief.md` at the configured output path.
6. Run the checklist before marking Done.
7. Update `.agents/des-skill/sprint-status/des-workflow-status.md`.
8. Recommend the next skill when done.
```

**Kết quả mong đợi:** Agent tạo `01-business-discovery-brief.md` với business problem, stakeholders, constraints, success criteria, và gợi ý chuyển sang `des-business-questions`.

---

## Ví dụ 2 — Thiết kế Gold layer sau khi đã có Bronze và Silver

**Tình huống:** Đã hoàn thành phases 01–10. Cần thiết kế Gold layer.

```text
Use DES skill: des-gold-layer-design

Project context:
Climate-Smart Agriculture platform. Bronze và Silver layers đã thiết kế xong.
Bronze có các bảng raw từ weather stations, soil sensors, farm records.
Silver đã clean và conform data.

Objective:
Thiết kế Gold layer — curated marts cho analytics và reporting.

Instructions:
1. Read `skills/des-gold-layer-design/SKILL.md`.
2. Read `skills/des-gold-layer-design/customize.toml`.
3. Load the silver layer specification from `_des-output/planning-artifacts/10-silver-layer-specification.md`.
4. Load the requirements and KPI catalog from `_des-output/planning-artifacts/03-requirements-and-kpi-catalog.md`.
5. Load only step-01 of the gold layer skill.
6. Stop at HALT for grain decisions.
7. Create `11-gold-layer-specification.md`.
8. Update workflow status.
```

---

## Ví dụ 3 — Tạo epic catalog từ design artifacts

**Tình huống:** Đã có 22 artifacts. Cần bắt đầu planning sprint.

```text
Use DES support skill: des-create-epic

Project context:
Climate-Smart Agriculture platform.
Tất cả 22 main skill artifacts đã có tại `_des-output/planning-artifacts/`.
Công nghệ: Microsoft Fabric (Lakehouse + Notebooks + Data Pipelines).

Objective:
Tạo epic catalog từ DES design artifacts để chuẩn bị backlog.

Instructions:
1. Read `skills-support/des-create-epic/SKILL.md`.
2. Read `skills-support/des-create-epic/customize.toml`.
3. Load the architecture decision record to understand platform choice.
4. Load the data product specification to understand scope.
5. Load only step-01.
6. Group related phases into epics (e.g., "Ingestion Epic", "Gold Layer Epic").
7. Do NOT create stories yet — only epics.
8. Create `epic-catalog.md` at the configured output path.
9. Recommend `des-create-story` as next step.
```

---

## Ví dụ 4 — Kiểm tra story readiness trước khi dev

**Tình huống:** Sprint plan đã có. Cần kiểm tra story nào sẵn sàng để dev bắt tay vào.

```text
Use DES support skill: des-story-readiness-check

Project context:
Sprint 1 đang active. Sprint plan tại `_des-output/implementation-artifacts/sprint-plan.md`.
Story catalog tại `_des-output/implementation-artifacts/story-catalog.md`.

Objective:
Kiểm tra từng story trong Sprint 1 đã đủ điều kiện để dev không.

Instructions:
1. Read `skills-support/des-story-readiness-check/SKILL.md`.
2. Load the sprint plan.
3. Load the story catalog.
4. For each story in sprint, check:
   - Does it have clear acceptance criteria?
   - Are upstream artifacts available?
   - Are dependencies resolved?
   - Is scope clearly bounded?
5. Create `story-readiness-report.md`.
6. For not-ready stories, list what is missing.
7. Recommend next step: `des-dev-task-breakdown` for ready stories.
```

---

## Ví dụ 5 — Code review sau implementation

**Tình huống:** Agent đã implement Bronze ingestion pipeline. Cần review.

```text
Use DES support skill: des-code-review

Project context:
Story: "Implement Bronze ingestion for weather station data"
Acceptance criteria: Data lands raw in Bronze, partitioned by date, with metadata columns.
Related artifact: `09-bronze-layer-specification.md`
Code location: `src/pipelines/bronze/weather_station_ingestion.py`

Objective:
Review the implementation against the acceptance criteria and bronze layer specification.

Instructions:
1. Read `skills-support/des-code-review/SKILL.md`.
2. Load the bronze layer specification.
3. Load the story and its acceptance criteria.
4. Review the implementation file.
5. Check: Does it match the specified schema? Are metadata columns present? Is partitioning correct?
6. Create `code-review-report.md` with Pass/Fail per acceptance criterion.
7. List issues found with severity: Critical / Major / Minor.
8. Halt if Critical issues found and require fix before proceeding.
```

---

## Ví dụ 6 — Khi workflow bị lệch

**Tình huống:** Một team member đã bắt đầu viết Gold layer code nhưng chưa có DES Gold layer specification. Cần tìm recovery path.

```text
Use DES support skill: des-correct-course

Project context:
Phát hiện vấn đề: Code đã được viết cho Gold layer nhưng phase 11 (Gold Layer Design) chưa có artifact.
Workflow status file: `.agents/des-skill/sprint-status/des-workflow-status.md`

Objective:
Phân tích root cause và tạo recovery plan.

Instructions:
1. Read `skills-support/des-correct-course/SKILL.md`.
2. Read the workflow status file to understand current state.
3. Identify: What artifacts are missing? What phases were skipped?
4. Analyze risk: Is the existing code salvageable?
5. Create `correct-course-plan.md` with:
   - Root cause
   - Affected phases to (re)run
   - Priority order to restore design integrity
   - Decision needed from user
6. Recommend immediate next step.
```

---

## Ví dụ 7 — Dự án dbt + DuckDB local

**Tình huống:** Sinh viên làm portfolio project với dbt + DuckDB, không cần enterprise scale.

```text
Use DES skill: des-architecture-design

Project context:
Portfolio project: E-commerce sales analytics.
Tech stack đã chọn: DuckDB (storage), dbt (transformation), Python (ingestion), Metabase (serving).
Team: 1 người (sinh viên).
Scale: ~100MB data, local machine only.

Objective:
Thiết kế architecture phù hợp với tech stack đã chọn, không cần enterprise patterns.

Instructions:
1. Read `skills/des-architecture-design/SKILL.md`.
2. Load the requirements catalog if available.
3. Load only step-01.
4. Note: Tech stack is FIXED (DuckDB + dbt). Do not recommend alternatives.
5. Focus on: layer design, partition strategy, dbt project structure.
6. Create `07-architecture-decision-record.md`.
7. Update workflow status.
```

---

## Pattern chung cho mọi prompt

Mỗi prompt hiệu quả cần đủ:

```text
1. [Tên skill rõ ràng] — main skill hay support skill
2. [Project context] — đủ để agent hiểu scope và stack
3. [Objective] — mục tiêu cụ thể của lần call này
4. [Instructions] — bước-by-bước, bao gồm:
   - Read SKILL.md
   - Read customize.toml
   - Load relevant upstream artifacts
   - Load only step-01
   - Stop at HALT
   - Create artifact
   - Update workflow status
   - Recommend next skill
```
