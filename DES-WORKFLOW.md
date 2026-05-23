# Quy trình làm việc DES-WORKFLOW (DES-SKILL Workflow)

Sử dụng quy trình này khi bắt đầu, tiếp tục hoặc cải thiện một dự án data engineering.

## Need Help Choosing a Skill?

Use:

```text
des-wise
```

`des-wise` is the DES-SKILL router and advisor.

It helps answer:

* Which DES skill should I use next?
* Where am I in the workflow?
* Should I continue lifecycle design, learning, delivery planning, or review?
* Which artifact is required before the next step?
* Which status file should be updated?

### Router Rule

If the user intent is unclear, run `des-wise` before selecting a lifecycle, support, or learning skill.

## Hướng dẫn cho Agent (Agent Instruction)

Bạn đang sử dụng DES-SKILL. Bắt đầu với `using-des-skill` đóng vai trò là bộ định tuyến quy trình (workflow router).

Tuyệt đối KHÔNG nhảy vào viết code ngay lập tức. Xác định chế độ quy trình (workflow mode), phase hiện tại của dự án, các artifact thượng nguồn (upstream artifacts), skill phù hợp (matching skill), artifact đầu ra yêu cầu (required output artifact), cập nhật trạng thái (status update), và bước bàn giao tiếp theo (next handoff).

Nếu một task được yêu cầu phụ thuộc vào các artifact thượng nguồn còn thiếu, DỪNG LẠI và tạo các artifact thiếu đó trước, hoặc yêu cầu người dùng cung cấp thông tin đầu vào tối thiểu còn thiếu.

## Các Chế độ Quy trình Thích ứng (Adaptive Workflow Modes)

Sử dụng chế độ nhẹ nhàng nhất có thể nhưng vẫn đảm bảo tính truy vết của artifact (traceability) và bằng chứng bàn giao (delivery evidence). Xem `docs/workflow-modes.md` để biết thêm quy tắc chi tiết.

| Mode | Use When | Default Route |
| :--- | :--- | :--- |
| Quick Fix | Lỗi nhỏ, sửa đổi tài liệu, thay đổi test/config phạm vi hẹp, hoặc dọn dẹp repo ít rủi ro | `des-implementation-plan` -> `des-code-review` -> `des-retrospective` |
| Standard Feature | Một tính năng dữ liệu gắn kết, thay đổi pipeline, thay đổi model, hoặc cập nhật contract/DQ | `des-create-epic` -> `des-create-story` -> `des-story-readiness-check` -> `des-implementation-plan` -> `des-code-review` -> `des-release-readiness-review` |
| Enterprise Data Product | Sản phẩm dữ liệu mới hoặc thay đổi lớn, bàn giao giữa các team, dữ liệu có kiểm soát, rủi ro tuân thủ, hoặc quyết định kiến trúc khó đảo ngược | Hoàn thành các artifact yêu cầu từ Phase 01-22, sau đó chạy support loop |
| Correct Course | Các artifact đã duyệt xung đột với thực tế repo, phát hiện lỗi khi review/verify, sự cố thực tế, hoặc ràng buộc mới | `des-correct-course` -> cập nhật phase skill bị ảnh hưởng -> `des-implementation-plan` |

## Lớp Persona Layer (Data Engineering Personas)

Sử dụng `docs/personas.md` để ánh xạ mỗi skill tới một trách nhiệm chính (primary responsibility). Personas là ranh giới trách nhiệm, không phải là giọng điệu nhập vai.

Router cần báo cáo persona được chọn, persona skill, mode, và artifact/support skill tương ứng. Nếu công việc vượt qua ranh giới trách nhiệm, hãy nêu rõ việc bàn giao (handoff) thay vì gộp các trách nhiệm vào một vai trò agent mơ hồ.

| Persona | Persona Skill | Phạm vi sở hữu (Typical Ownership) |
| :--- | :--- | :--- |
| Workflow Coordinator | `des-persona-workflow-coordinator` | routing, mode selection, status, handoff |
| Data Product Analyst | `des-persona-data-product-analyst` | business context, questions, KPIs, product definition |
| Source & Domain Analyst | `des-persona-source-domain-analyst` | source readiness, source behavior, domain model |
| Data Architect | `des-persona-data-architect` | architecture, ingestion, layers, contracts, transformations |
| Data Quality Engineer | `des-persona-data-quality-engineer` | DQ rules, orchestration, observability |
| Analytics Engineer | `des-persona-analytics-engineer` | semantic model and serving layer |
| Governance Reviewer | `des-persona-governance-reviewer` | lineage, metadata, privacy, security |
| DataOps Engineer | `des-persona-dataops-engineer` | cost, performance, CI/CD, release readiness |
| Implementation Developer | `des-persona-implementation-developer` | implementation planning and build work |
| Delivery Reviewer | `des-persona-delivery-reviewer` | review, verification, retrospective |

## Cổng kiểm soát Checklist (Configured Checklist Gate)

Trước khi ghi file thiết kế hoặc cập nhật trạng thái quy trình, Agent bắt buộc phải đi qua cổng kiểm soát chất lượng sau:
- Xác định file checklist (`checklist_file`) được khai báo trong `customize.toml` của skill hiện tại.
- Tải toàn bộ nội dung file checklist đã cấu hình.
- Đối chiếu bản thảo thiết kế (draft artifact) với từng tiêu chí kiểm tra (checklist item).
- Ghi lại báo cáo validation ngắn gọn chứa trạng thái kiểm tra: `Pass` (Đạt) / `Needs Work` (Cần bổ sung) / `Blocked` (Bị chặn).
- Nếu phát hiện có tiêu chí bị `Blocked` hoặc thiếu bằng chứng (evidence) bắt buộc, Agent phải **DỪNG LẠI (HALT)** và không đánh dấu phase hiện tại là hoàn thành (`completed`).
- Việc bỏ qua chốt chặn (override) chỉ được chấp nhận nếu người dùng xác nhận rõ ràng và hành động ghi đè này được lưu vết trong artifact hoặc báo cáo trạng thái.

## Trạng thái Quy trình (Workflow Status)

Theo dõi tiến độ trong file:

`.agents/des-skill/sprint-status/des-workflow-status.md`

Tạo file này từ template:

`.agents/des-skill/templates/support/des-workflow-status-template.md`

## Phase 0: Router

0. `using-des-skill`

## Phase 1: Business & Requirements (Nghiệp vụ & Yêu cầu)

1. `des-business-discovery`
2. `des-business-questions`
3. `des-requirements-and-kpis`
4. `des-data-product-definition`

## Phase 2: Data & Domain (Dữ liệu & Domain)

5. `des-data-source-assessment`
6. `des-domain-modeling`

## Phase 3: Architecture & Layers (Kiến trúc & Các Lớp Dữ liệu)

7. `des-architecture-design`
8. `des-ingestion-design`
9. `des-bronze-layer-design`
10. `des-silver-layer-design`
11. `des-gold-layer-design`

## Phase 4: Quality, Contracts, Orchestration (Chất lượng, Hợp đồng dữ liệu & Điều phối)

12. `des-data-contracts`
13. `des-transformation-design`
14. `des-data-quality`
15. `des-orchestration-observability`

## Phase 5: Serving, Governance, Delivery (Cung cấp, Quản trị & Bàn giao)

16. `des-semantic-model-design`
17. `des-serving-layer-design`
18. `des-lineage-metadata-design`
19. `des-governance-security-design`
20. `des-cost-and-performance-optimization`
21. `des-cicd-and-testing`
22. `des-project-evaluation`

## Các Skill Hỗ trợ (Support Skills)

Sử dụng các skill này bên ngoài luồng phase có đánh số khi cần thực hiện công việc triển khai code, xử lý thay đổi, review, verify, hoặc ghi nhận retrospective. Chúng không thay thế các phase từ 01-22; chúng sử dụng các artifact đã duyệt từ các phase đó và bảo vệ tính truy vết từ bước lập kế hoạch đến code thực tế và bằng chứng bàn giao.

Luồng hỗ trợ khuyến nghị (Recommended support loop):

`des-create-epic` -> `des-create-story` -> `des-story-readiness-check` -> `des-dev-task-breakdown` -> `des-implementation-plan` -> `des-code-review` -> `des-release-readiness-review` -> `des-retrospective` -> `des-correct-course` -> `des-workflow-status-update`

Skill `des-implementation-plan` thay thế `des-implementation-plan` cũ. Với luồng BMAD-style đầy đủ, hãy đi qua các chốt chặn readiness và review trước khi phát hành.

| Skill hỗ trợ | Khi nào sử dụng |
| :--- | :--- |
| `des-create-epic` | Chia các artifact DES đã duyệt thành epic triển khai có traceability, scope, dependencies, và acceptance outcomes |
| `des-create-story` | Tạo story triển khai giàu ngữ cảnh từ epic, artifacts, repo context, và sprint status |
| `des-story-readiness-check` | Đảm bảo story đủ thông tin (traceability, AC, tests, quality, security) trước khi breakdown task |
| `des-dev-task-breakdown` | Chia story đã sẵn sàng thành các task kỹ thuật cụ thể cho agent/developer |
| `des-implementation-plan` | Sắp xếp trình tự thực thi, checkpoint và validation cho các task/story trong đợt triển khai |
| `des-code-review` | Review implementation so với story, design, quality, contract, governance và test expectations |
| `des-release-readiness-review` | Đánh giá bằng chứng (test, quality, contract, security) để xác định sẵn sàng phát hành hoặc handoff |
| `des-retrospective` | Tổng kết bài học, thành công, blocker và đề xuất cải tiến sau mỗi vòng lặp hoặc release |
| `des-correct-course` | Chẩn đoán và lập kế hoạch điều chỉnh khi workflow bị lệch hướng hoặc gặp blocker nghiêm trọng |
| `des-workflow-status-update` | Cập nhật file trạng thái tổng thể để duy trì tính liên tục của quy trình qua nhiều agent và phiên làm việc |

## Khả năng tương thích ngược (Compatibility Skill)

Các skill cũ đã được thay thế bằng bộ skill hỗ trợ mới để đảm bảo tính chặt chẽ của quy trình BMAD-style.

## DES Learning Workflow

DES Learning Skills are optional but recommended when the user wants to learn from DES artifacts.

```text
DES main artifact
        ↓
des-explain-artifact
        ↓
des-artifact-quiz
        ↓
des-learning-path, if broader roadmap is needed
```

### Learning Routes

| User Intent                                     | Recommended Skill      |
| ----------------------------------------------- | ---------------------- |
| “Giải thích artifact này”                       | `des-explain-artifact` |
| “Tôi học được gì từ phase này?”                 | `des-explain-artifact` |
| “Tạo câu hỏi kiểm tra”                          | `des-artifact-quiz`    |
| “Quiz tôi phase này”                            | `des-artifact-quiz`    |
| “Lên lộ trình học 22 phase”                     | `des-learning-path`    |
| “Tôi muốn học Data Engineering qua project này” | `des-learning-path`    |

### Learning Handoff

After any DES main phase completes, the agent may recommend:

```text
Run des-explain-artifact to learn from the artifact.
```

After `des-explain-artifact`, the agent may recommend:

```text
Run des-artifact-quiz to check understanding.
```

After several phases are complete, the agent may recommend:

```text
Run des-learning-path to build a broader study roadmap.
```

## Learning Diagnosis and Coaching Workflow

```text
des-explain-artifact
        ↓
des-artifact-quiz
        ↓
user answers quiz
        ↓
des-gap-teacher
        ↓
des-socratic-coach
        ↓
des-artifact-quiz retry
        ↓
continue next DES phase
```

### Diagnosis Routes

| User Intent                                    | Recommended Skill    |
| ---------------------------------------------- | -------------------- |
| “Tôi hiểu vậy đúng không?”                     | `des-gap-teacher`    |
| “Tôi đang thiếu gì?”                           | `des-gap-teacher`    |
| “Chấm câu trả lời quiz của tôi”                | `des-gap-teacher`    |
| “Hỏi tôi từng câu”                             | `des-socratic-coach` |
| “Dạy tôi bằng Socratic”                        | `des-socratic-coach` |
| “Tôi bị nhầm giữa A và B”                      | `des-socratic-coach` |
| “Tôi cần bảo vệ artifact này khi thuyết trình” | `des-socratic-coach` |

## Learning Status Workflow

DES Learning Skills can track learning progress separately from project delivery progress.

```text
des-explain-artifact
        ↓
des-artifact-quiz
        ↓
des-gap-teacher
        ↓
des-socratic-coach
        ↓
des-learning-status-update
        ↓
des-learning-review
```

### Learning Status Routes

| User Intent                            | Recommended Skill            |
| -------------------------------------- | ---------------------------- |
| “Cập nhật trạng thái học”              | `des-learning-status-update` |
| “Tôi học đến đâu rồi?”                 | `des-learning-review`        |
| “Phase nào còn gap?”                   | `des-learning-status-update` |
| “Tôi yếu phần nào?”                    | `des-learning-review`        |
| “Tôi đã sẵn sàng qua phase tiếp chưa?” | `des-learning-review`        |
| “Tổng kết quá trình học”               | `des-learning-review`        |

### Learning Readiness Rule

A DES phase can be considered learning-ready only when:

```text
main artifact exists
learning notes exist
quiz is generated or answered if required
no open High or Blocking gap remains
readiness is not Unknown
```

Artifact completion and learning readiness are different states.
