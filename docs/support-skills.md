# Support Skill Catalog

Support skills dùng để chuyển output của 22 main skills thành backlog, sprint, task, implementation plan, review, release readiness và retrospective.

> **Không chạy support skills khi chưa có đủ main skill artifacts.**
> Support skills cần main skill artifacts làm input.

---

## Catalog đầy đủ

| STT | Skill | Mục tiêu | Input | Output Artifact |
|---:|:---|:---|:---|:---|
| 01 | `des-create-epic` | Tạo epic từ 22 artifact chính | DES main artifacts | `epic-catalog.md` |
| 02 | `des-create-story` | Tạo story từ epic và DES artifacts | epic-catalog + main artifacts | `story-catalog.md` |
| 03 | `des-sprint-planning` | Chọn story cho sprint hiện tại | story-catalog | `sprint-plan.md` |
| 04 | `des-story-readiness-check` | Kiểm tra story đã đủ điều kiện dev chưa | sprint-plan + story-catalog | `story-readiness-report.md` |
| 05 | `des-dev-task-breakdown` | Chia story thành dev task cụ thể | ready stories | `dev-task-breakdown.md` |
| 06 | `des-implementation-plan` | Sắp xếp trình tự triển khai | dev tasks + main artifacts | `implementation-plan.md` |
| 07 | `des-code-review` | Review code so với story/task/artifact | code + story + acceptance criteria | `code-review-report.md` |
| 08 | `des-release-readiness-review` | Kiểm tra sẵn sàng release/handoff/demo | code-review + test evidence | `release-readiness-report.md` |
| 09 | `des-retrospective` | Tổng kết sprint/release cycle | sprint kết thúc | `retrospective-report.md` |
| 10 | `des-correct-course` | Điều hướng khi workflow bị lệch | workflow status + blockers | `correct-course-plan.md` |
| 11 | `des-workflow-status-update` | Cập nhật trạng thái workflow trung tâm | tất cả artifacts | `des-workflow-status.md` |

---

## Flow support skills

```text
[22 Main Skills Done]
        ↓
des-create-epic
        ↓
des-create-story
        ↓
des-sprint-planning
        ↓
des-story-readiness-check ──── [Not Ready] ──▶ des-correct-course
        ↓ [Ready]
des-dev-task-breakdown
        ↓
des-implementation-plan
        ↓
[Implementation by agent/developer]
        ↓
des-code-review ──── [Fail] ──▶ [Back to Implementation]
        ↓ [Pass]
des-release-readiness-review ──── [Not Ready] ──▶ des-correct-course
        ↓ [Ready]
des-retrospective
        ↓
des-workflow-status-update
        ↓
[Next Sprint / End]
```

---

## Chi tiết từng support skill

### `des-create-epic`

**Mục tiêu:** Phân tích 22 DES artifacts và tổ chức thành epic có thể quản lý được.

**Input cần có:**
- Ít nhất artifacts của phase 01–07 (business context đến architecture)
- Càng nhiều main artifacts càng tốt

**Output:** `epic-catalog.md` với:
- Epic ID, tên, mô tả
- DES phases tương ứng
- Dependency giữa epics
- Ước tính độ phức tạp

**HALT khi:** Chưa đủ main artifacts để phân tích scope.

---

### `des-create-story`

**Mục tiêu:** Tạo story từ epic với đầy đủ acceptance criteria.

**Input cần có:** `epic-catalog.md`, main artifacts liên quan đến epic

**Output:** `story-catalog.md` với:
- Story ID, tên, mô tả
- Epic reference
- Acceptance criteria có thể test được
- Dependency giữa stories

**HALT khi:** Epic chưa đủ rõ ràng để tạo story có acceptance criteria.

---

### `des-sprint-planning`

**Mục tiêu:** Chọn story phù hợp cho sprint, cân nhắc dependency và capacity.

**Input cần có:** `story-catalog.md`, `des-workflow-status.md`

**Output:** `sprint-plan.md` với:
- Sprint goal
- Stories được chọn
- Lý do chọn/bỏ story
- Capacity estimate

**HALT khi:** Story catalog chưa có đủ ready stories.

---

### `des-story-readiness-check`

**Mục tiêu:** Kiểm tra từng story trong sprint có đủ điều kiện để dev bắt tay vào làm không.

**Input cần có:** `sprint-plan.md`, main artifacts liên quan

**Output:** `story-readiness-report.md` với:
- Từng story: Ready / Not Ready / Blocked
- Lý do nếu Not Ready
- Action items để resolve

**HALT khi:** Phần lớn stories Not Ready — cần review sprint plan.

---

### `des-dev-task-breakdown`

**Mục tiêu:** Chia ready story thành dev task cụ thể với file/module rõ ràng.

**Input cần có:** Ready stories, main artifacts, codebase context

**Output:** `dev-task-breakdown.md` với:
- Task ID, mô tả
- Files/modules cần thay đổi
- Validation commands
- Estimated effort

---

### `des-implementation-plan`

**Mục tiêu:** Sắp xếp thứ tự triển khai dev tasks, xác định dependencies.

**Input cần có:** `dev-task-breakdown.md`, main artifacts

**Output:** `implementation-plan.md` với:
- Thứ tự tasks
- Dependency graph
- Risk và mitigation
- Rollback plan

---

### `des-code-review`

**Mục tiêu:** Review code được implement so với story, acceptance criteria và main artifacts.

**Input cần có:** Code changes, story + acceptance criteria, relevant main artifacts

**Output:** `code-review-report.md` với:
- Pass / Fail per acceptance criteria
- Issues tìm thấy với severity
- Required fixes
- Evidence của tests pass

**HALT khi:** Critical issues chưa được fix.

---

### `des-release-readiness-review`

**Mục tiêu:** Kiểm tra có đủ điều kiện release/handoff/demo chưa.

**Input cần có:** `code-review-report.md`, test evidence, deployment artifacts

**Output:** `release-readiness-report.md` với:
- Checklist items: Pass / Fail / Blocked
- Risk assessment
- Go / No-Go decision
- Conditions nếu conditional Go

**HALT khi:** Bất kỳ blocker nào chưa được resolve.

---

### `des-retrospective`

**Mục tiêu:** Tổng kết sprint/release cycle, rút ra bài học.

**Input cần có:** Sprint plan, story outcomes, review reports

**Output:** `retrospective-report.md` với:
- What went well
- What didn't go well
- Action items cho sprint sau
- DES-SKILL improvement suggestions

---

### `des-correct-course`

**Mục tiêu:** Phân tích khi workflow bị lệch và tạo plan phục hồi.

**Trigger conditions:**
- Artifact cũ không khớp với thực tế code
- HALT chưa được resolve sau nhiều session
- Sprint blocked vì missing artifacts
- Business requirement thay đổi sau khi đã plan

**Output:** `correct-course-plan.md` với:
- Root cause analysis
- Affected phases và artifacts
- Recovery actions
- Updated workflow routing

---

### `des-workflow-status-update`

**Mục tiêu:** Cập nhật file trạng thái trung tâm sau mỗi milestone.

**Output:** `des-workflow-status.md` tại `.agents/des-skill/sprint-status/`

File này track:
- Phase nào Done / In Progress / Not Started / Blocked
- Support skills đã chạy
- Sprint hiện tại đang ở đâu
- Open blockers
- Next recommended skill
