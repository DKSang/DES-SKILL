# Step 02 - Implement Task

Execute tasks in plan order.

For each task:

1. Re-read the task acceptance criteria.
2. Decide whether the task changes behavior. Behavior includes code paths, pipeline output, validation results, contracts, configuration that changes runtime behavior, or generated artifacts consumed by users.
3. For behavior changes, use RED/GREEN/REFACTOR:
   - RED: write or identify a failing test/check first and confirm it fails for the expected reason.
   - GREEN: write the minimal implementation needed to pass the failing test/check.
   - REFACTOR: improve structure while keeping tests green.
4. For non-code/documentation-only changes, define the equivalent evidence before editing.
5. Modify only the files needed for that task.
6. Keep data contracts, DQ rules, lineage, security, and observability requirements aligned with source artifacts.
7. Record implementation notes, decisions, and deviations immediately.
8. Stop before starting the next task if the current task cannot meet acceptance criteria.

Do not mark complete until the task evidence passes and the acceptance criteria are satisfied.

HALT when the implementation requires new scope, new architecture, changed requirements, or a failing test cannot be made to pass inside planned scope.
