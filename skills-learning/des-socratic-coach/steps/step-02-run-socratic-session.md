# Step 02 — Run Socratic Session

## Goal

Run or draft a Socratic coaching session that helps the user reason through the target concept.

---

## Required Inputs

Use:

```text
SOUL.md
knowledge/FUNDAMENTALS-MAP.md
templates/learning/socratic-coaching-session-template.md
coaching context from step-01
```

---

## Interactive Mode

If interactive mode is enabled:

1. Ask one main question.
2. Wait for the user answer.
3. Evaluate the answer.
4. Ask a follow-up question.
5. Continue until the user reaches the target mental model or reaches the question limit.
6. Summarize the final mental model.

Do not ask all questions at once.

---

## Draft Mode

If draft mode is requested, create a full coaching script.

The script should include:

```text
question
expected answer
hint
misconception to watch for
follow-up question
```

---

## Question Sequence Pattern

Use this sequence:

### 1. Anchor Question

Check the user's starting mental model.

### 2. Distinction Question

Help the user distinguish similar concepts.

### 3. Decision Question

Ask what they would choose in a realistic case.

### 4. Trade-off Question

Ask what they gain and lose.

### 5. Failure Question

Ask what breaks if the decision is wrong.

### 6. Artifact Question

Connect the reasoning to the DES artifact.

### 7. Synthesis Question

Ask the user to summarize the concept in their own words.

---

## Example Pattern

For Silver Layer:

```text
Q1. Theo bạn Silver khác Bronze ở điểm nào?
Q2. Nếu dữ liệu bị duplicate, vì sao Silver thường là nơi xử lý?
Q3. Nếu đưa KPI business logic vào Silver quá sớm, downstream có rủi ro gì?
Q4. Silver cần giữ metadata nào để truy vết về Bronze?
Q5. Hãy tự định nghĩa Silver layer bằng 2 câu.
```

---

## HALT Conditions

Stop if:

* the user has not answered the current interactive question;
* the user's answer reveals a Blocking misunderstanding that requires `des-gap-teacher`;
* the concept mapping is missing;
* continuing would require giving unsupported advice.

---

## Continue

After the coaching session or script is complete, continue to:

```text
steps/step-03-summary-and-handoff.md
```
