# Quy trình làm việc DES-WORKFLOW (DES-SKILL Workflow)

Sử dụng quy trình này khi bắt đầu, tiếp tục hoặc cải thiện một dự án data engineering.

## Hướng dẫn cho Agent (Agent Instruction)

Bạn đang sử dụng DES-SKILL. Bắt đầu với `using-des-skill` đóng vai trò là bộ định tuyến quy trình (workflow router).

Tuyệt đối KHÔNG nhảy vào viết code ngay lập tức. Xác định chế độ quy trình (workflow mode), phase hiện tại của dự án, các artifact thượng nguồn (upstream artifacts), skill phù hợp (matching skill), artifact đầu ra yêu cầu (required output artifact), cập nhật trạng thái (status update), và bước bàn giao tiếp theo (next handoff).

Nếu một task được yêu cầu phụ thuộc vào các artifact thượng nguồn còn thiếu, DỪNG LẠI và tạo các artifact thiếu đó trước, hoặc yêu cầu người dùng cung cấp thông tin đầu vào tối thiểu còn thiếu.

## Các Chế độ Quy trình Thích ứng (Adaptive Workflow Modes)

Sử dụng chế độ nhẹ nhàng nhất có thể nhưng vẫn đảm bảo tính truy vết của artifact (traceability) và bằng chứng bàn giao (delivery evidence). Xem `docs/workflow-modes.md` để biết thêm quy tắc chi tiết.

| Mode | Use When | Default Route |
| :--- | :--- | :--- |
| Quick Fix | Lỗi nhỏ, sửa đổi tài liệu, thay đổi test/config phạm vi hẹp, hoặc dọn dẹp repo ít rủi ro | `des-dev-story` -> `des-verify-delivery`; thêm `des-code-review` nếu có thay đổi hành vi code |
| Standard Feature | Một tính năng dữ liệu gắn kết, thay đổi pipeline, thay đổi model, hoặc cập nhật contract/DQ | `des-brainstorm-change` nếu phạm vi chưa rõ ràng -> `des-implementation-planning` -> `des-dev-story` -> `des-code-review` -> `des-verify-delivery` |
| Enterprise Data Product | Sản phẩm dữ liệu mới hoặc thay đổi lớn, bàn giao giữa các team, dữ liệu có kiểm soát, rủi ro tuân thủ, hoặc quyết định kiến trúc khó đảo ngược | Hoàn thành các artifact yêu cầu từ Phase 01-22, sau đó chạy support loop |
| Correct Course | Các artifact đã duyệt xung đột với thực tế repo, phát hiện lỗi khi review/verify, sự cố thực tế, hoặc ràng buộc mới | `des-brainstorm-change` -> cập nhật phase skill bị ảnh hưởng -> `des-implementation-planning` |

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

`.agents/des-skill/templates/00-workflow-status-template.md`

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
15. `des-orchestration-and-observability`

## Phase 5: Serving, Governance, Delivery (Cung cấp, Quản trị & Bàn giao)

16. `des-semantic-model-design`
17. `des-serving-layer-design`
18. `des-lineage-and-metadata`
19. `des-governance-and-security`
20. `des-cost-and-performance-optimization`
21. `des-cicd-and-testing`
22. `des-project-evaluation`

## Các Skill Hỗ trợ (Support Skills)

Sử dụng các skill này bên ngoài luồng phase có đánh số khi cần thực hiện công việc triển khai code, xử lý thay đổi, review, verify, hoặc ghi nhận retrospective. Chúng không thay thế các phase từ 01-22; chúng sử dụng các artifact đã duyệt từ các phase đó và bảo vệ tính truy vết từ bước lập kế hoạch đến code thực tế và bằng chứng bàn giao.

Luồng hỗ trợ khuyến nghị (Recommended support loop):

`des-brainstorm-change` -> `des-create-epic` -> `des-sprint-planning` -> `des-create-story` -> `des-check-implementation-readiness` -> `des-dev-story` -> `des-code-review` -> `des-verify-delivery` -> `des-retrospective`

Skill `des-implementation-planning` vẫn có thể tạo `implementation-plan.md` và `implementation-story.md` cho luồng cũ hoặc công việc nhỏ. Với luồng BMAD-style đầy đủ, dùng `des-create-epic`, `des-sprint-planning`, `des-create-story`, và `des-check-implementation-readiness` trước khi bàn giao cho `des-dev-story`.

| Skill hỗ trợ | Khi nào sử dụng |
| :--- | :--- |
| `des-help` | Giải thích workflow, xác định HALT/blocker hiện tại, và đề xuất skill tiếp theo |
| `des-brainstorm-change` | Khám phá yêu cầu thay đổi mới, tính năng mới, xử lý sự cố, hoặc điều chỉnh scope trước khi lập kế hoạch triển khai |
| `des-create-epic` | Chia các artifact DES đã duyệt thành epic triển khai có traceability, scope, dependencies, và acceptance outcomes |
| `des-sprint-planning` | Tạo hoặc cập nhật sprint-status từ epics/stories để agent có thể resume đúng trạng thái |
| `des-create-story` | Tạo story triển khai giàu ngữ cảnh từ epic, artifacts, repo context, và sprint status |
| `des-check-implementation-readiness` | Chặn dev-story nếu story còn thiếu artifact traceability, acceptance criteria, owners, tests, hoặc blockers |
| `des-implementation-planning` | Chuyển đổi các artifact DES đã duyệt thành một kế hoạch triển khai (implementation plan) cụ thể |
| `des-dev-story` | Triển khai code, cấu hình, test, hoặc tài liệu từ một kế hoạch triển khai đã duyệt |
| `des-code-review` | Review các file thay đổi so với artifact thiết kế, hợp đồng dữ liệu, DQ, và các kỳ vọng bảo mật |
| `des-verify-delivery` | Chạy bước xác thực cuối cùng và ghi lại bằng chứng dòng lệnh (command evidence) trước khi đánh dấu hoàn thành hoặc yêu cầu phát hành |
| `des-retrospective` | Đúc rút kinh nghiệm, ghi nhận độ lệch thiết kế (artifact drift), nợ kỹ thuật (technical debt), và tồn đọng (backlog) sau bàn giao |

## Khả năng tương thích ngược (Compatibility Skill)

Skill `des-semantic-and-serving-layer` được giữ lại như một cầu nối tương thích cho các dự án kết hợp thiết kế semantic model và serving layer trong cùng một bước. Khuyến khích sử dụng các skill riêng biệt `des-semantic-model-design` and `des-serving-layer-design` cho các công việc mới.
