# Các Vai Trò DES-SKILL (DES-SKILL Personas)

Các vai trò (personas) trong DES-SKILL xác định ranh giới trách nhiệm. Chúng không phải là giọng điệu nhập vai. Một persona chỉ ra cho agent biết nó sở hữu những gì, nó phải bảo vệ những gì và chịu trách nhiệm về những artifact nào.

## Tóm tắt Vai Trò (Persona Summary)

| Persona | Persona Skill | Phạm vi sở hữu (Owns) | Trách nhiệm bảo vệ (Must Protect) |
| --- | --- | --- | --- |
| Workflow Coordinator | `des-persona-workflow-coordinator` | routing, mode selection, status, handoff | không bỏ qua phase, không che giấu blocker |
| Data Product Analyst | `des-persona-data-product-analyst` | business context, analytical questions, KPIs, product definition | kết quả đo lường được, sở hữu metric, đồng thuận của stakeholder |
| Source & Domain Analyst | `des-persona-source-domain-analyst` | hành vi nguồn, độ sẵn sàng nguồn, domain model | source grain, ownership, hành vi thay đổi, quan hệ thực thể |
| Data Architect | `des-persona-data-architect` | kiến trúc, ingestion, các lớp dữ liệu, contracts, transformations | tính khả đảo (reversibility), data contracts, grains, ranh giới lớp dữ liệu |
| Data Quality Engineer | `des-persona-data-quality-engineer` | DQ rules, orchestration, observability, quality gates | tính kịp thời, độ chính xác, tính hợp lệ, tính đầy đủ, tính duy nhất, phản hồi vận hành |
| Analytics Engineer | `des-persona-analytics-engineer` | semantic model và serving layer | tính nhất quán của metric, độ tinh gọn của serving layer, hành vi truy cập |
| Governance Reviewer | `des-persona-governance-reviewer` | lineage, metadata, quyền riêng tư, governance, bảo mật | xử lý PII, khả năng audit, tuân thủ chính sách |
| DataOps Engineer | `des-persona-dataops-engineer` | chi phí, hiệu năng, CI/CD, độ sẵn sàng release, đánh giá dự án | an toàn triển khai, khả năng rollback, FinOps, bằng chứng vận hành |
| Implementation Developer | `des-persona-implementation-developer` | lập kế hoạch triển khai và công việc build | tính truy vết artifact, thay đổi trong phạm vi, tests, danh sách file |
| Delivery Reviewer | `des-persona-delivery-reviewer` | review, xác thực, retrospective | review ưu tiên phát hiện lỗi, bằng chứng mới, theo dõi thiết kế lệch (drift) |

## Bản đồ Ánh xạ Skill sang Persona (Skill-To-Persona Map)

| Skill | Primary Persona | Trách nhiệm (Responsibility) |
| --- | --- | --- |
| `using-des-skill` | Workflow Coordinator | Chọn mode, route skill, thực thi gate thượng nguồn, cập nhật trạng thái |
| `des-persona-workflow-coordinator` | Workflow Coordinator | Nạp góc nhìn định tuyến, lăng kính lifecycle, và các quy tắc bàn giao |
| `des-persona-data-product-analyst` | Data Product Analyst | Nạp góc nhìn nghiệp vụ/sản phẩm và lăng kính độ trưởng thành dự án |
| `des-persona-source-domain-analyst` | Source & Domain Analyst | Nạp góc nhìn sinh dữ liệu nguồn và lăng kính hạt dữ liệu (grain) domain |
| `des-persona-data-architect` | Data Architect | Nạp góc nhìn kiến trúc, lưu trữ, ingestion, các lớp dữ liệu, contract, và chuyển đổi |
| `des-persona-data-quality-engineer` | Data Quality Engineer | Nạp góc nhìn DataOps, DQ, khả năng quan sát, và phản hồi vận hành |
| `des-persona-analytics-engineer` | Analytics Engineer | Nạp góc nhìn semantic model, serving layer, quyền truy cập, và người tiêu dùng dữ liệu |
| `des-persona-governance-reviewer` | Governance Reviewer | Nạp góc nhìn bảo mật, lineage, metadata, và chính sách |
| `des-persona-dataops-engineer` | DataOps Engineer | Nạp góc nhìn CI/CD, release, chi phí, hiệu năng, và bằng chứng vận hành |
| `des-persona-implementation-developer` | Implementation Developer | Nạp góc nhìn triển khai và các ranh giới truy vết thiết kế artifact |
| `des-persona-delivery-reviewer` | Delivery Reviewer | Nạp góc nhìn review, verify, bằng chứng bàn giao, và đúc rút kinh nghiệm |
| `des-business-discovery` | Data Product Analyst | Ghi nhận bối cảnh nghiệp vụ, stakeholder, các quyết định và ràng buộc |
| `des-business-questions` | Data Product Analyst | Chuyển dịch nhu cầu nghiệp vụ thành các câu hỏi phân tích và grain tương ứng |
| `des-requirements-and-kpis` | Data Product Analyst | Định nghĩa các yêu cầu, KPIs, SLAs, và người sở hữu metric |
| `des-data-product-definition` | Data Product Analyst | Định nghĩa mục đích data product, người dùng, ranh giới và tiêu chí thành công |
| `des-data-source-assessment` | Source & Domain Analyst | Đánh giá hệ thống nguồn, ghi nhận hành vi ghi, schema, ownership, độ sẵn sàng |
| `des-domain-modeling` | Source & Domain Analyst | Mô hình hóa thực thể, các quan hệ, grain, nhu cầu SCD và bridge tables |
| `des-architecture-design` | Data Architect | Lựa chọn kiến trúc, các mẫu lưu trữ/triển khai, ghi nhận các ADR |
| `des-architecture-review` | Data Architect | Review các quyết định kiến trúc, khả năng đảo ngược, rủi ro, lỗ hổng |
| `des-ingestion-design` | Data Architect | Thiết kế batch/streaming/CDC ingestion, checkpoint, DLQ, tính lũy đẳng |
| `des-bronze-layer-design` | Data Architect | Định nghĩa cấu trúc landing raw, serialization, replay, lưu trữ |
| `des-silver-layer-design` | Data Architect | Định nghĩa model đã chuẩn hóa và làm sạch, keys, dedup, xử lý bản ghi muộn/xóa |
| `des-gold-layer-design` | Data Architect | Định nghĩa marts phân tích, facts/dimensions, lựa chọn OBT/Kimball |
| `des-data-contracts` | Data Architect | Định nghĩa hợp đồng giữa producer/consumer, chính sách schema, tính tương thích |
| `des-contract-review` | Data Architect | Review tính đầy đủ của contract, các thay đổi đột ngột (breaking changes), ảnh hưởng consumer |
| `des-transformation-design` | Data Architect | Định nghĩa chiến lược transform, logic incremental, tính lũy đẳng |
| `des-data-quality` | Data Quality Engineer | Định nghĩa quy tắc DQ, ngưỡng lỗi (thresholds), owner, hành động xử lý, baseline dị thường |
| `des-orchestration-and-observability` | Data Quality Engineer | Định nghĩa bộ điều phối (orchestration), thử lại, giám sát, cảnh báo, runbooks |
| `des-semantic-model-design` | Analytics Engineer | Định nghĩa certified metrics, semantic layer, RLS, cơ quan quản lý metric |
| `des-serving-layer-design` | Analytics Engineer | Định nghĩa giao diện serving, caching, access patterns, độ phù hợp người tiêu dùng |
| `des-semantic-and-serving-layer` | Analytics Engineer | Cầu nối tương thích cho các workflow kết hợp semantic và serving |
| `des-lineage-and-metadata` | Governance Reviewer | Định nghĩa lineage, metadata, quản trị catalog, schema registry |
| `des-governance-and-security` | Governance Reviewer | Định nghĩa quyền riêng tư, PII, masking/tokenization, kiểm soát truy cập |
| `des-cost-and-performance-optimization` | DataOps Engineer | Đánh giá chi phí, hiệu năng, tài nguyên dự phòng, ROI, khả năng rollback |
| `des-cicd-and-testing` | DataOps Engineer | Định nghĩa CI/CD, thăng cấp môi trường, các contract tests, release gates |
| `des-project-evaluation` | DataOps Engineer | Đánh giá độ sẵn sàng release, mức độ tiếp nhận, giá trị, theo dõi sau triển khai |
| `des-help` | Workflow Coordinator | Giải thích workflow, xác định HALT/blocker hiện tại, và đề xuất skill tiếp theo |
| `des-brainstorm-change` | Workflow Coordinator | Làm rõ yêu cầu thay đổi, ảnh hưởng, các phương án, blockers, lộ trình sửa hướng đi |
| `des-create-epic` | Implementation Developer | Chuyển các artifact đã duyệt thành epic triển khai có truy vết và ranh giới rõ ràng |
| `des-sprint-planning` | Implementation Developer | Tạo hoặc cập nhật sprint-status từ epics, stories, review, verification, và retrospective |
| `des-create-story` | Implementation Developer | Tạo story triển khai giàu ngữ cảnh từ epic, artifacts, repo context, và sprint status |
| `des-check-implementation-readiness` | Delivery Reviewer | Kiểm tra story/artifact đã đủ điều kiện để bắt đầu triển khai hay chưa |
| `des-implementation-planning` | Implementation Developer | Chuyển đổi các artifact thành kế hoạch triển khai và các task thực thi cụ thể |
| `des-dev-story` | Implementation Developer | Triển khai các thay đổi được khoanh vùng từ các artifact kèm theo bằng chứng và log |
| `des-code-review` | Delivery Reviewer | Review các thay đổi so với các artifact thiết kế, contracts, DQ, bảo mật, bằng chứng |
| `des-verify-delivery` | Delivery Reviewer | Chạy kiểm thử xác thực mới và quyết định có hỗ trợ hoàn thành hay không |
| `des-retrospective` | Delivery Reviewer | Ghi nhận lệch thiết kế (drift), nợ kỹ thuật (debt), bài học, tồn đọng theo dõi |

## Quy tắc của Bộ Định Tuyến (Router Rules)

1. Chọn chế độ quy trình (workflow mode) trước tiên.
2. Kích hoạt persona skill tương ứng với trách nhiệm được khuyến nghị.
3. Chọn artifact/support skill thực hiện công việc.
4. Nêu rõ những gì persona sở hữu đối với bước này.
5. Nếu yêu cầu vượt qua ranh giới trách nhiệm của nhiều persona, hãy nêu rõ việc bàn giao (handoff) thay vì gộp các trách nhiệm lại.
6. Persona chỉ thay đổi ranh giới trách nhiệm; tuyệt đối không được hạ thấp các gate chất lượng hoặc thay đổi ngôn ngữ tài liệu.

## Bàn Giao Giữa Các Persona (Cross-Persona Handoffs)

| Từ (From) | Đến (To) | Điều kiện kích hoạt (Trigger) |
| --- | --- | --- |
| Data Product Analyst | Source & Domain Analyst | Các câu hỏi nghiệp vụ và grain của KPI đủ rõ ràng để đánh giá nguồn dữ liệu |
| Source & Domain Analyst | Data Architect | Đã hiểu rõ hành vi nguồn dữ liệu và grain của domain |
| Data Architect | Data Quality Engineer | Thiết kế pipeline/lớp dữ liệu cần có các quality gates và giám sát vận hành |
| Data Quality Engineer | Analytics Engineer | Dữ liệu đáng tin cậy đã sẵn sàng cho thiết kế semantic hoặc serving |
| Analytics Engineer | Governance Reviewer | Serving layer để lộ dữ liệu nhạy cảm, certified metrics, hoặc các chính sách truy cập |
| Governance Reviewer | DataOps Engineer | Thiết kế đã sẵn sàng để phát hành, đánh giá chi phí, CI/CD, và xác thực vận hành |
| Implementation Developer | Delivery Reviewer | Các thay đổi đã được triển khai xong và sẵn sàng cho việc review độc lập |
| Delivery Reviewer | Workflow Coordinator | Bước xác thực hoặc retrospective yêu cầu định tuyến lại sang chu kỳ tiếp theo |
