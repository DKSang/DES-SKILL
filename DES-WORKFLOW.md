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
| Quick Fix | Lỗi nhỏ, sửa đổi tài liệu, thay đổi test/config phạm vi hẹp, hoặc dọn dẹp repo ít rủi ro | `de-build-from-artifacts` -> `de-verify-delivery`; thêm `de-review-implementation` nếu có thay đổi hành vi code |
| Standard Feature | Một tính năng dữ liệu gắn kết, thay đổi pipeline, thay đổi model, hoặc cập nhật contract/DQ | `de-brainstorm-change` nếu phạm vi chưa rõ ràng -> `de-implementation-planning` -> `de-build-from-artifacts` -> `de-review-implementation` -> `de-verify-delivery` |
| Enterprise Data Product | Sản phẩm dữ liệu mới hoặc thay đổi lớn, bàn giao giữa các team, dữ liệu có kiểm soát, rủi ro tuân thủ, hoặc quyết định kiến trúc khó đảo ngược | Hoàn thành các artifact yêu cầu từ Phase 01-22, sau đó chạy support loop |
| Correct Course | Các artifact đã duyệt xung đột với thực tế repo, phát hiện lỗi khi review/verify, sự cố thực tế, hoặc ràng buộc mới | `de-brainstorm-change` -> cập nhật phase skill bị ảnh hưởng -> `de-implementation-planning` |

## Lớp Persona Layer (Data Engineering Personas)

Sử dụng `docs/personas.md` để ánh xạ mỗi skill tới một trách nhiệm chính (primary responsibility). Personas là ranh giới trách nhiệm, không phải là giọng điệu nhập vai.

Router cần báo cáo persona được chọn, persona skill, mode, và artifact/support skill tương ứng. Nếu công việc vượt qua ranh giới trách nhiệm, hãy nêu rõ việc bàn giao (handoff) thay vì gộp các trách nhiệm vào một vai trò agent mơ hồ.

| Persona | Persona Skill | Phạm vi sở hữu (Typical Ownership) |
| :--- | :--- | :--- |
| Workflow Coordinator | `de-persona-workflow-coordinator` | routing, mode selection, status, handoff |
| Data Product Analyst | `de-persona-data-product-analyst` | business context, questions, KPIs, product definition |
| Source & Domain Analyst | `de-persona-source-domain-analyst` | source readiness, source behavior, domain model |
| Data Architect | `de-persona-data-architect` | architecture, ingestion, layers, contracts, transformations |
| Data Quality Engineer | `de-persona-data-quality-engineer` | DQ rules, orchestration, observability |
| Analytics Engineer | `de-persona-analytics-engineer` | semantic model and serving layer |
| Governance Reviewer | `de-persona-governance-reviewer` | lineage, metadata, privacy, security |
| DataOps Engineer | `de-persona-dataops-engineer` | cost, performance, CI/CD, release readiness |
| Implementation Developer | `de-persona-implementation-developer` | implementation planning and build work |
| Delivery Reviewer | `de-persona-delivery-reviewer` | review, verification, retrospective |

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

1. `de-business-discovery`
2. `de-business-questions`
3. `de-requirements-and-kpis`
4. `de-data-product-definition`

## Phase 2: Data & Domain (Dữ liệu & Domain)

5. `de-data-source-assessment`
6. `de-domain-modeling`

## Phase 3: Architecture & Layers (Kiến trúc & Các Lớp Dữ liệu)

7. `de-architecture-design`
8. `de-ingestion-design`
9. `de-bronze-layer-design`
10. `de-silver-layer-design`
11. `de-gold-layer-design`

## Phase 4: Quality, Contracts, Orchestration (Chất lượng, Hợp đồng dữ liệu & Điều phối)

12. `de-data-contracts`
13. `de-transformation-design`
14. `de-data-quality`
15. `de-orchestration-and-observability`

## Phase 5: Serving, Governance, Delivery (Cung cấp, Quản trị & Bàn giao)

16. `de-semantic-model-design`
17. `de-serving-layer-design`
18. `de-lineage-and-metadata`
19. `de-governance-and-security`
20. `de-cost-and-performance-optimization`
21. `de-cicd-and-testing`
22. `de-project-evaluation`

## Các Skill Hỗ trợ (Support Skills)

Sử dụng các skill này bên ngoài luồng phase có đánh số khi cần thực hiện công việc triển khai code, xử lý thay đổi, review, verify, hoặc ghi nhận retrospective. Chúng không thay thế các phase từ 01-22; chúng sử dụng các artifact đã duyệt từ các phase đó và bảo vệ tính truy vết từ bước lập kế hoạch đến code thực tế và bằng chứng bàn giao.

Luồng hỗ trợ khuyến nghị (Recommended support loop):

`de-brainstorm-change` -> `de-implementation-planning` -> `de-build-from-artifacts` -> `de-review-implementation` -> `de-verify-delivery` -> `de-implementation-retrospective`

Skill `de-implementation-planning` tạo ra cả `implementation-plan.md` và `implementation-story.md`. File story là gói tài liệu thực thi để bàn giao cho `de-build-from-artifacts`.

| Skill hỗ trợ | Khi nào sử dụng |
| :--- | :--- |
| `de-brainstorm-change` | Khám phá yêu cầu thay đổi mới, tính năng mới, xử lý sự cố, hoặc điều chỉnh scope trước khi lập kế hoạch triển khai |
| `de-implementation-planning` | Chuyển đổi các artifact DES đã duyệt thành một kế hoạch triển khai (implementation plan) cụ thể |
| `de-build-from-artifacts` | Triển khai code, cấu hình, test, hoặc tài liệu từ một kế hoạch triển khai đã duyệt |
| `de-review-implementation` | Review các file thay đổi so với artifact thiết kế, hợp đồng dữ liệu, DQ, và các kỳ vọng bảo mật |
| `de-verify-delivery` | Chạy bước xác thực cuối cùng và ghi lại bằng chứng dòng lệnh (command evidence) trước khi đánh dấu hoàn thành hoặc yêu cầu phát hành |
| `de-implementation-retrospective` | Đúc rút kinh nghiệm, ghi nhận độ lệch thiết kế (artifact drift), nợ kỹ thuật (technical debt), và tồn đọng (backlog) sau bàn giao |

## Khả năng tương thích ngược (Compatibility Skill)

Skill `de-semantic-and-serving-layer` được giữ lại như một cầu nối tương thích cho các dự án kết hợp thiết kế semantic model và serving layer trong cùng một bước. Khuyến khích sử dụng các skill riêng biệt `de-semantic-model-design` and `de-serving-layer-design` cho các công việc mới.
