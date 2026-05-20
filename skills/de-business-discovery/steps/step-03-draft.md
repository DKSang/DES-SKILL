# Step 3: Draft Brief, Quality Check, and Handoff

## Rules
- Speak output in your agent style with the configured `communication_language`.
- Generate the final brief in `document_output_language`.
- Always HALT at checkpoints or menus and wait for user selection.

## Instructions

### 1. Load Local Template and Checklist
Read the local template and checklist files:
- Template: `{skill-root}/templates/business_discovery_template.md`
- Checklist: `{skill-root}/checklists/business_readiness_checklist.md`

### 2. Draft the Business Discovery Brief
Compile the gathered problem statement, stakeholder matrix, scope boundaries, initial data products, and any assumptions/open questions into the draft brief using the template.

### 3. Run Quality Checklist Verification
Verify the drafted brief against the `business_readiness_checklist.md` checklist:
- Is the problem stated without tool names?
- Does every stakeholder have a decision?
- Is the scope narrow enough?
- Are open questions owned?
- Has implementation technology been kept out of the brief?

Output a brief checklist validation report.

### 4. Configured checklist gate

Trước khi ghi file hoặc update workflow status:
- Resolve checklist_file từ customize.toml.
- Load toàn bộ checklist file đã cấu hình.
- Kiểm tra draft artifact theo từng checklist item.
- Ghi checklist validation report ngắn với trạng thái Pass / Needs Work / Blocked.
- Nếu có item Blocked hoặc thiếu evidence bắt buộc, HALT và không mark phase completed.
- Chỉ cho phép override nếu người dùng xác nhận rõ ràng và ghi override vào artifact/status.


### 5. Write Final Output File
Save the finalized brief to the configured output path:
- File Path: `{project-root}/_des-output/planning-artifacts/01-business-discovery.md` (or the customized path from `customize.toml`).

Create parent directories recursively if they do not exist.

### 6. Update Status File
Update the status tracking file:
- File Path: `{project-root}/_des-output/implementation-artifacts/des-workflow-status.md` (or as configured).
Mark `de-business-discovery` as `Completed`.

### 7. Interactive Handoff Menu
Present the final brief path and show this menu:

- **[C] Complete and Handoff**: Finalize the current step and output the command to trigger the next skill (`de-business-questions`).
- **[R] Re-draft**: Re-evaluate the inputs and rewrite the brief.

HALT and wait for user selection.

- On **[C]**:
  - Summarize what changed.
  - Recommend the next skill: `de-business-questions` to translate the brief into business questions.
- On **[R]**:
  - Loop back to `./step-01-clarify.md`.
