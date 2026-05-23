# Tổng quan DES-SKILL

DES-SKILL là một **workflow system** cho data engineering agent, được thiết kế theo phong cách BMAD-Method nhưng tập trung riêng cho vòng đời dự án data engineering.

Thay vì yêu cầu agent làm mọi thứ trong một prompt dài, DES-SKILL chia quá trình thành các skill nhỏ. Mỗi skill có:

- Mục tiêu rõ ràng
- Input rõ ràng
- Output artifact rõ ràng
- Checklist
- HALT policy
- Hướng dẫn chuyển tiếp sang skill tiếp theo

---

## Hai tầng workflow

### Tầng 1 — Main lifecycle skills (22 skills)

Dùng để **thiết kế** data engineering project từ business problem đến project evaluation.

Mỗi main skill trả lời câu hỏi thiết kế:

| Câu hỏi | Phase |
|:---|:---|
| Business problem là gì? | Business Discovery |
| Cần trả lời câu hỏi phân tích nào? | Business Questions |
| KPI nào cần đo? | Requirements & KPIs |
| Data product trông như thế nào? | Data Product Definition |
| Source data ở đâu, chất lượng ra sao? | Data Source Assessment |
| Domain model gồm những entity nào? | Domain Modeling |
| Kiến trúc platform chọn gì? | Architecture Design |
| Ingestion strategy như thế nào? | Ingestion Design |
| Bronze layer lưu gì, schema ra sao? | Bronze Layer Design |
| Silver layer clean, conform thế nào? | Silver Layer Design |
| Gold layer model như thế nào? | Gold Layer Design |
| Data contract ai own, breaking change xử lý ra sao? | Data Contracts |
| Transformation logic như thế nào? | Transformation Design |
| Quality rule và threshold là gì? | Data Quality Design |
| Schedule, retry, alerting ra sao? | Orchestration & Observability |
| Semantic model expose metrics gì? | Semantic Model Design |
| Data serving qua BI, API, file nào? | Serving Layer Design |
| Lineage và metadata quản lý thế nào? | Lineage & Metadata Design |
| Access control, masking, retention ra sao? | Governance & Security Design |
| Chi phí và performance tối ưu thế nào? | Cost & Performance Optimization |
| CI/CD pipeline và test strategy như thế nào? | CI/CD & Testing |
| Release có sẵn sàng không? | Project Evaluation |

### Tầng 2 — Support skills (11 skills)

Dùng để biến thiết kế thành backlog, sprint, task, implementation plan, review, release readiness và retrospective.

Mỗi support skill trả lời câu hỏi triển khai:

| Câu hỏi | Support Skill |
|:---|:---|
| Triển khai bằng epic nào? | `des-create-epic` |
| Story nào làm trước? | `des-create-story` |
| Sprint này làm gì? | `des-sprint-planning` |
| Story đã ready chưa? | `des-story-readiness-check` |
| Task cho coder là gì? | `des-dev-task-breakdown` |
| Triển khai theo thứ tự nào? | `des-implementation-plan` |
| Code có đúng không? | `des-code-review` |
| Có release được không? | `des-release-readiness-review` |
| Sprint sau cải thiện gì? | `des-retrospective` |
| Workflow đang bị lệch ở đâu? | `des-correct-course` |
| Trạng thái hiện tại như thế nào? | `des-workflow-status-update` |

---

## Vì sao cần hai tầng?

Không tách hai tầng thì agent thường:

- Thiết kế xong rồi không biết bắt đầu triển khai từ đâu
- Tạo code mà không có story có acceptance criteria
- Review code mà không có checklist rõ ràng
- Không có artifact để track lại quyết định cũ

Với hai tầng, agent luôn biết:

1. Đang ở phase nào trong lifecycle
2. Artifact nào đã có, artifact nào còn thiếu
3. Sprint hiện tại đang làm story gì
4. Story có đủ điều kiện để dev không
5. Release có sẵn sàng không

---

## Trạng thái workflow trung tâm

File trung tâm theo dõi toàn bộ trạng thái:

```text
_des-output/implementation-artifacts/des-workflow-status.md
```

Agent phải cập nhật file này sau mỗi artifact quan trọng, để phiên làm việc tiếp theo biết đang ở đâu.

---

## So sánh với cách làm không có DES-SKILL

| Không có DES-SKILL | Với DES-SKILL |
|:---|:---|
| Agent đoán KPI formula | KPI formula, grain, owner được capture rõ ràng |
| Schema design từ source | Domain model → architecture → layer design |
| Không rõ data contract | Contract owner, breaking change policy rõ ràng |
| Quality check thêm muộn | Quality rule thiết kế trước khi code |
| Không có sprint tracking | Epic → story → sprint → task → review |
| Trạng thái mất sau session | Workflow status file persist qua sessions |
| Agent nhảy bước | Mỗi skill có HALT, không cho phép nhảy |

---

## Tài liệu liên quan

- [workflow.md](workflow.md) — Workflow đầy đủ và luồng rút gọn
- [skill-catalog.md](skill-catalog.md) — Danh mục 22 main skills
- [support-skills.md](support-skills.md) — Danh mục 12 support skills
- [quick-start.md](quick-start.md) — Hướng dẫn bắt đầu nhanh
- [agent-rules.md](agent-rules.md) — Quy tắc bắt buộc cho agent
