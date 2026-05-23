# Step 01 — Understand User Intent

## Goal

Understand what the user is trying to do and classify the request into a DES route.

---

## Required Reading

Read:

```text
skills-support/des-wise/customize.toml
DES-WORKFLOW.md
README.md
```

Read `SOUL.md` and `knowledge/FUNDAMENTALS-MAP.md` when the user intent includes learning, explanation, quiz, coaching, or study planning.

---

## Intent Categories

Classify the user request into one primary category:

```text
New Project Start
Main Lifecycle Design
Workflow Status
Learning / Explanation
Learning Quiz
Learning Gap Diagnosis
Learning Coaching
Learning Review
Delivery Planning
Story / Sprint Planning
Implementation Planning
Code Review
Release Readiness
Correct Course
General Help
Unknown
```

---

## Intent Signals

### New Project Start

Signals:

```text
bắt đầu project
làm project data engineering
tạo dự án mới
start from scratch
```

Primary route:

```text
des-business-discovery
```

### Main Lifecycle Design

Signals:

```text
thiết kế ingestion
thiết kế bronze
thiết kế silver
gold layer
data contract
data quality
architecture
```

Primary route:

```text
corresponding DES main lifecycle skill
```

### Learning / Explanation

Signals:

```text
giải thích
học từ artifact
tôi chưa hiểu
fundamental
giống sách
```

Primary route:

```text
des-explain-artifact
```

### Learning Quiz

Signals:

```text
quiz
kiểm tra tôi
câu hỏi ôn tập
test understanding
```

Primary route:

```text
des-artifact-quiz
```

### Learning Gap Diagnosis

Signals:

```text
tôi hiểu vậy đúng không
tôi sai gì
tôi thiếu gì
chấm câu trả lời
```

Primary route:

```text
des-gap-teacher
```

### Learning Coaching

Signals:

```text
hỏi tôi từng câu
Socratic
gợi mở
đừng trả lời ngay
```

Primary route:

```text
des-socratic-coach
```

### Learning Review

Signals:

```text
tôi học đến đâu rồi
tôi yếu phần nào
tổng kết học tập
sẵn sàng qua phase chưa
```

Primary route:

```text
des-learning-review
```

### Delivery Planning

Signals:

```text
tạo epic
thiết kế thành epic
epics
```

Primary route:

```text
des-create-epic
```

### Story / Sprint Planning

Signals:

```text
tạo story
chia story
sprint planning
readiness check
sẵn sàng story
```

Primary route:

```text
des-create-story
des-story-readiness-check
des-sprint-planning
```

### Implementation Planning

Signals:

```text
implementation plan
task breakdown
kế hoạch triển khai
chia task
```

Primary route:

```text
des-implementation-plan
des-dev-task-breakdown
```

### Code Review

Signals:

```text
code review
review code
chấm code
đánh giá PR
```

Primary route:

```text
des-code-review
```

### Release Readiness

Signals:

```text
release
phát hành
ready to release
release readiness review
handoff to production
```

Primary route:

```text
des-release-readiness-review
```

### Correct Course

Signals:

```text
lệch hướng
sửa sai workflow
blocker nghiêm trọng
retrospective
```

Primary route:

```text
des-correct-course
des-retrospective
```

---

## HALT Conditions

Stop if:

* user intent is completely ambiguous and cannot be defaulted;
* required base files (`DES-WORKFLOW.md` or `README.md`) are missing.

---

## Output From This Step

Produce:

```md
## User Intent Analysis

- Raw user prompt:
- Classified intent:
- Skill family:
- Status checklist:
- Target route hint:
- Status:
```

Then continue to:

```text
steps/step-02-route-and-recommend.md
```
