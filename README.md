# DES-SKILL

[![npm](https://img.shields.io/npm/v/@dksang/des-skill?color=0ea5e9&label=npm)](https://www.npmjs.com/package/@dksang/des-skill)
[![License: MIT](https://img.shields.io/badge/license-MIT-22c55e.svg)](LICENSE)
[![Tests](https://img.shields.io/badge/tests-8%2F8%20pass-22c55e)](test/)
[![Skills](https://img.shields.io/badge/skills-32-7c3aed)](skills/)
[![Step Files](https://img.shields.io/badge/step%20files-89-0ea5e9)](skills/)

Các skill Agent có thể tái sử dụng để bàn giao dự án Data Engineering từ đầu đến cuối (end-to-end).

Kho lưu trữ này là gói kỹ năng Agent (Agent Skills) trung lập với nhà cung cấp, dành cho các dự án data engineering chuyên nghiệp trong nhiều lĩnh vực như nông nghiệp, tài chính, bán lẻ, y tế, logistics, phân tích SaaS và IoT.

Gói hỗ trợ phát triển local-first với SQL, Python, DuckDB và dbt, cũng như phát triển cloud-first với các nền tảng như Databricks, Snowflake, BigQuery, Microsoft Fabric, Azure Data Factory, Airflow, Dagster, Kafka, Great Expectations, Soda, Power BI, Superset và GitHub Actions.

## Quick Evaluation (Đánh giá nhanh)

> **Dành cho người muốn đánh giá nhanh trước khi dùng.**

DES-SKILL giải quyết vấn đề gì? Agent AI thường nhảy thẳng vào viết code khi được giao một data project. DES-SKILL buộc agent phải đi qua **22 phases có kiểm soát** — từ business discovery đến project evaluation — với **human-in-the-loop HALT** tại mọi điểm quyết định quan trọng.

| Đặc điểm | DES-SKILL | Agent không có skill |
| :--- | :--- | :--- |
| Bắt đầu từ đâu | Business questions → KPI → Source → Architecture | Thường bắt đầu từ code |
| Quyết định nghiệp vụ | HALT bắt buộc, chờ người dùng xác nhận | Agent tự quyết định |
| Metric conflicts | Phải được business owner giải quyết | Engineer tự chọn một định nghĩa |
| Grain declaration | Khai báo "Mỗi hàng là một ___" trước khi thiết kế bảng | Schema được copy từ source |
| SLA classification | P1 Cứng / P2 Mềm / P3 Tùy chọn có hệ quả cụ thể | "refresh daily" không có thời gian cụ thể |
| Output | Artifact có thể review và track (`.md` files có số thứ tự) | Code và comments |

**Thử ngay**: dùng `init` để scaffold project mới, hoặc `install` nếu chỉ muốn cài skill pack.

## Cài đặt (Installation)

### Lựa chọn 1: Thiết lập cấu trúc dự án đầy đủ với `init`

Sử dụng lệnh này cho một dự án mới áp dụng phương pháp DES. Nó tạo toàn bộ không gian làm việc của dự án và cài đặt các skill:

```bash
npx @dksang/des-skill init
```

Tùy chỉnh thư mục lưu trữ các skill cục bộ của dự án:

```bash
npx @dksang/des-skill init --dir .agents/skills
```

Ghi đè lên các file cấu trúc hiện có khi an toàn:

```bash
npx @dksang/des-skill init --force
```

Lệnh `init` sẽ tạo ra:

```text
_des/
└── config.toml
_des-output/
├── planning-artifacts/
└── implementation-artifacts/
docs/
.agents/
├── skills/
│   ├── using-des-skill/
│   ├── de-business-discovery/
│   │   ├── SKILL.md
│   │   ├── customize.toml
│   │   └── steps/
│   └── ...
└── des-skill/
    ├── output/
    ├── planning/
    ├── sprint-status/
    │   └── des-workflow-status.md
    ├── templates/
    ├── checklists/
    ├── docs/
    ├── workflows/
    ├── examples/
    ├── DES-WORKFLOW.md
    └── ARTIFACTS.md
```

### Lựa chọn 2: Chỉ cài đặt gói skill (Skill pack install only)

Sử dụng lệnh này khi bạn chỉ muốn cài đặt hoặc cập nhật các skill DES-SKILL và không gian làm việc hỗ trợ `.agents/des-skill`:

```bash
npx @dksang/des-skill install
```

Cài đặt vào một thư mục tùy chỉnh:

```bash
npx @dksang/des-skill install --dir .agents/skills
```

Ghi đè lên các skill hiện có:

```bash
npx @dksang/des-skill install --force
```

Lệnh `install` sẽ tạo mới hoặc cập nhật:

```text
.agents/
├── skills/
│   ├── using-des-skill/
│   ├── de-business-discovery/
│   ├── de-ingestion-design/
│   └── ...
└── des-skill/
    ├── output/
    ├── planning/
    ├── sprint-status/
    │   └── des-workflow-status.md
    ├── templates/
    ├── checklists/
    ├── docs/
    ├── workflows/
    ├── examples/
    ├── DES-WORKFLOW.md
    └── ARTIFACTS.md
```

### Lựa chọn 3: Sử dụng GitHub CLI

Sử dụng GitHub CLI khi bạn muốn cài đặt từng skill một:

```bash
gh skill install DKSang/DES-SKILL using-des-skill
```

Nếu bạn chạy lệnh này mà không có tên skill, GitHub CLI có thể nhắc bạn chọn một:

```bash
gh skill install DKSang/DES-SKILL
```

### Lựa chọn 4: Cài đặt thủ công bằng một câu lệnh

Cài đặt toàn cục cho các agent đọc thư mục `~/.agents/skills`:

```bash
git clone https://github.com/DKSang/DES-SKILL.git
cd DES-SKILL
bash install.sh
```

Cài đặt vào dự án hiện tại:

```bash
bash install.sh .agents/skills
```

### Lựa chọn 5: Copy thủ công

Cài đặt cục bộ vào dự án:

```bash
mkdir -p .agents/skills
cp -r skills/* .agents/skills/
```

Cài đặt cá nhân/toàn cục:

```bash
mkdir -p ~/.agents/skills
cp -r skills/* ~/.agents/skills/
```

Sau khi cài đặt, hãy khởi động lại agent của bạn hoặc chạy lệnh làm mới skill nếu được hỗ trợ.

## Gợi ý Prompt Khởi động nhanh (Quick Start Prompt)

```text
Tôi muốn sử dụng DES-SKILL cho một dự án data engineering mới.

Ý tưởng dự án:
[mô tả dự án của bạn tại đây]

Vui lòng tuân thủ quy trình làm việc DES-SKILL:
1. Bắt đầu với using-des-skill.
2. Đọc DES-WORKFLOW.md, ARTIFACTS.md, và des-workflow-status.md nếu có.
3. Phát hiện phase hiện tại của dự án.
4. Kiểm tra xem các artifact thượng nguồn bắt buộc đã tồn tại chưa.
5. Sử dụng skill phù hợp từ các skill đã cài đặt.
6. Tuyệt đối không viết code trước khi làm rõ bối cảnh nghiệp vụ, các yêu cầu, nguồn dữ liệu, kiến trúc và kỳ vọng chất lượng.
7. Tạo ra artifact được yêu cầu bằng cách sử dụng thư mục templates/.
8. Chạy checklist_file đã cấu hình trước khi đánh dấu artifact là Done.
9. Cập nhật file .agents/des-skill/sprint-status/des-workflow-status.md.
10. Khuyến nghị skill tiếp theo khi artifact hiện tại hoàn thành.
```

Phiên bản ngắn gọn:

```text
Cài đặt DES-SKILL, sau đó bắt đầu với using-des-skill.
Đóng vai trò là agent bàn giao Data Engineering.
Phát hiện phase hiện tại, kiểm tra các artifact thượng nguồn còn thiếu, kích hoạt skill phù hợp.
Đọc từng file step của skill một — KHÔNG bỏ qua các bước.
Tạo artifact được yêu cầu từ template, chạy checklist_file đã cấu hình, cập nhật trạng thái quy trình và bàn giao.
Tuyệt đối không viết code trước khi làm rõ bối cảnh nghiệp vụ, các KPI, nguồn dữ liệu, kiến trúc và kỳ vọng chất lượng.
```

## Kiến trúc — Quy trình làm việc với Step-File (Step-File Workflow)

Mỗi skill phase sử dụng **kiến trúc step-file** để đảm bảo tính kỷ luật trong thực thi của agent:

```text
skill/
├── SKILL.md            # Kích hoạt giao thức On Activation → nạp step-01
├── customize.toml      # Cấu hình output_file, template, checklist paths
└── steps/
    ├── step-01-*.md    # Được nạp đầu tiên; dừng (HALT) tại các điểm quyết định
    ├── step-02-*.md    # Chỉ được nạp sau khi step-01 hoàn thành
    └── step-03-*.md    # Soạn thảo draft artifact + quality checklist + bàn giao
```

Các quy tắc chính mà agent phải tuân thủ:
- **KHÔNG BAO GIỜ** nạp nhiều file step cùng một lúc.
- **LUÔN LUÔN** dừng (HALT) tại các menu và chờ phản hồi từ người dùng.
- **LUÔN LUÔN** chạy file checklist đã cấu hình trước khi đánh dấu một artifact là Done.
- **KHÔNG BAO GIỜ** đi tiếp khi chưa giải quyết các xung đột metric, các contract chưa ký, thiếu bằng chứng kiểm thử, hoặc các checkpoint checklist bị chặn.

## Điểm bắt đầu Quy trình (Workflow Entrypoint)

Sử dụng [skills/using-des-skill/SKILL.md](skills/using-des-skill/SKILL.md) làm định tuyến skill (router skill), [DES-WORKFLOW.md](DES-WORKFLOW.md) làm bản đồ phase, và [ARTIFACTS.md](ARTIFACTS.md) làm bản đồ artifact chuẩn hóa.

Bộ định tuyến hỗ trợ bốn chế độ quy trình thích ứng (workflow modes): `Quick Fix`, `Standard Feature`, `Enterprise Data Product`, và `Correct Course` (xem thêm tại [docs/workflow-modes.md](docs/workflow-modes.md)). Nó cũng ánh xạ các trách nhiệm bằng cách sử dụng lớp vai trò [docs/personas.md](docs/personas.md).

Theo dõi tiến độ trong:

```text
.agents/des-skill/sprint-status/des-workflow-status.md
```

Tạo file trạng thái từ:

```text
.agents/des-skill/templates/00-workflow-status-template.md
```

## Vị trí lưu trữ Artifact (Artifact Locations)

DES-SKILL hiện hỗ trợ cả đầu ra cấu trúc dự án và đầu ra hỗ trợ của agent:

| Khu vực | Đường dẫn | Mục đích |
| --- | --- | --- |
| Phase artifacts | `.agents/des-skill/output/` | Đầu ra chuẩn hóa của các phase từ `ARTIFACTS.md` |
| Trạng thái quy trình | `.agents/des-skill/sprint-status/des-workflow-status.md` | Trạng thái quy trình giữa các phiên làm việc |
| Thư mục lập kế hoạch dự án | `_des-output/planning-artifacts/` | Khu vực lưu trữ bằng chứng lập kế hoạch và các bản sao |
| Hỗ trợ triển khai | `_des-output/implementation-artifacts/` | Change brief, implementation plan, logs, review, verification, retrospective |

Khi có nghi ngờ, hãy tuân theo `ARTIFACTS.md` để biết tên và đường dẫn chính xác của artifact.

## Xác thực (Validation)

Chạy các lệnh kiểm tra kho lưu trữ trước khi publish hoặc thay đổi các skill:

```bash
npm test
npm run validate:skills
node tools/validate-artifacts.js
```

Các script xác thực sẽ kiểm tra hành vi của trình cài đặt, các file skill bắt buộc, frontmatter, các tiêu đề chính, metadata của package, các tham chiếu quy trình, bản đồ artifact và các template.

## Nguyên tắc hoạt động (Operating Principle)

Tuyệt đối không nhảy trực tiếp vào viết code. Một dự án dữ liệu hướng tới môi trường production cần bắt đầu với bối cảnh nghiệp vụ, kết quả đo lường được, độ sẵn sàng của nguồn dữ liệu, các lựa chọn kiến trúc, kỳ vọng chất lượng và nhu cầu cung cấp dữ liệu rõ ràng. Code chỉ nên dùng để hiện thực hóa các artifact đã thống nhất, chứ không thay thế bước khám phá (discovery).

## Danh mục Skill (Skill Index)

| Skill | Artifact chính |
| --- | --- |
| `using-des-skill` | Định tuyến quy trình và phối hợp trạng thái |
| `de-business-discovery` | Tài liệu tóm tắt khám phá nghiệp vụ (Business discovery brief) |
| `de-business-questions` | Danh mục câu hỏi nghiệp vụ (Business question catalog) |
| `de-requirements-and-kpis` | Danh mục yêu cầu và KPI (Requirements and KPI catalog) |
| `de-data-product-definition` | Đặc tả sản phẩm dữ liệu (Data product specification) |
| `de-data-source-assessment` | Bản đánh giá nguồn dữ liệu (Data source inventory) |
| `de-domain-modeling` | Mô hình domain khái niệm (Conceptual domain model) |
| `de-architecture-design` | Tài liệu quyết định kiến trúc (Architecture decision record) |
| `de-ingestion-design` | Đặc tả thu thập dữ liệu (Ingestion specification) |
| `de-bronze-layer-design` | Đặc tả bảng Bronze (Bronze table specifications) |
| `de-silver-layer-design` | Đặc tả bảng Silver (Silver table specifications) |
| `de-gold-layer-design` | Đặc tả bảng Gold (Gold table specifications) |
| `de-data-contracts` | Hợp đồng dữ liệu (Data contracts) |
| `de-transformation-design` | Thiết kế chuyển đổi (Transformation design) |
| `de-data-quality` | Danh mục quy tắc chất lượng dữ liệu (Data quality rule catalog) |
| `de-orchestration-and-observability` | Đặc tả điều phối và giám sát pipeline |
| `de-semantic-model-design` | Đặc tả mô hình semantic (Semantic model specification) |
| `de-serving-layer-design` | Đặc tả lớp cung cấp dữ liệu (Serving layer specification) |
| `de-semantic-and-serving-layer` | Cầu nối tương thích cho các công việc semantic và serving |
| `de-lineage-and-metadata` | Danh mục lineage và metadata |
| `de-governance-and-security` | Checklist quản trị dữ liệu (Governance checklist) |
| `de-cost-and-performance-optimization` | Đánh giá chi phí và hiệu năng |
| `de-cicd-and-testing` | Kế hoạch CI/CD và kiểm thử |
| `de-project-evaluation` | Đánh giá độ sẵn sàng release |

## Danh mục Skill Hỗ trợ (Support Skill Index)

Các skill tùy chọn này giúp chuyển đổi các artifact thiết kế đã duyệt thành mã nguồn, review, xác thực và thực hiện retrospective. Chúng tuân theo luồng hỗ trợ kiểu BMad: brainstorm change, lập kế hoạch triển khai, xây dựng từ artifact, review, xác thực với bằng chứng mới, và ghi nhận công việc theo dõi.

| Skill | Artifact chính |
| --- | --- |
| `de-brainstorm-change` | Change brief |
| `de-implementation-planning` | Kế hoạch triển khai (Implementation plan) + câu chuyện triển khai (implementation story) |
| `de-build-from-artifacts` | Nhật ký triển khai (Implementation log) |
| `de-review-implementation` | Báo cáo review (Review report) |
| `de-verify-delivery` | Báo cáo xác thực (Verification report) |
| `de-implementation-retrospective` | Nhật ký đúc rút kinh nghiệm (Implementation retrospective) |

Hỗ trợ triển khai sử dụng hai cổng kiểm soát bàn giao (delivery gates):

- `checklists/implementation-readiness-checklist.md` trước khi bàn giao build.
- `checklists/definition-of-done-checklist.md` trước khi sẵn sàng review, hoàn thành, release hoặc đánh dấu hoàn tất.

Hỗ trợ build/review/verify cũng áp dụng quy tắc red-green-refactor đối với các thay đổi hành vi code, review phân tầng ưu tiên phát hiện lỗi, và bằng chứng mới trước khi đánh dấu hoàn thành.

## Ghim phiên bản phát hành (Release Pinning)

Tạo một thẻ git (git tag) và bản phát hành npm trước khi đề xuất cài đặt ghim phiên bản:

```bash
git tag v0.1.2
git push origin v0.1.2
npm publish --access public
```

Sau đó xuất bản GitHub Release tương ứng từ tag `v0.1.2`. Người dùng có thể ghim phiên bản cài đặt npm bằng cách chạy:

```bash
npx @dksang/des-skill@0.1.2 install
```

## Repository Metadata (Siêu dữ liệu Kho lưu trữ)

Mô tả GitHub khuyến nghị:

```text
Reusable Agent Skills for end-to-end Data Engineering project delivery.
```

Các chủ đề (topics) khuyến nghị:

```text
agent-skills
data-engineering
codex-skills
claude-skills
copilot-skills
gemini-cli
bmad-method
data-platform
lakehouse
dbt
duckdb
fabric
```

## Đóng góp (Contributing)

Xem thêm tại [CONTRIBUTING.md](CONTRIBUTING.md) để biết về các tiêu chuẩn skill, tiêu chí chất lượng step, và quy trình gửi Pull Request.

## Nhật ký thay đổi (Changelog)

Xem thêm tại [CHANGELOG.md](CHANGELOG.md) để biết lịch sử phiên bản.
