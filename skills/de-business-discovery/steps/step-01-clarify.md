# Step 1: Clarify Domain, Problem, and Decisions

## Rules
- Speak output in your agent style with the configured `communication_language`.
- Ingest input from the user session and previous conversation history.
- Always HALT at checkpoints or menus and wait for user selection.

## Instructions

### 1. Ingest User Input
Identify the user's initial project idea or prompt. If it is vague or technology-first (e.g., "I want to set up an Airflow pipeline for my retail data"), you must extract the underlying business domain.

### 2. Formulate Problem and Decisions
Analyze the business context to answer:
- What is the core business problem being solved? (Stated in plain language, without referencing specific tools like Spark, dbt, etc.)
- What specific business decisions must this data platform or report support? (e.g., "Determining when to restock low-margin products", "Identifying churn risks in retail accounts".)

### 3. List Stakeholders and Pain Points
Identify the key users of this data platform and define:
- Who are they? (e.g., Retail Sales Lead, Chief Financial Officer - avoid vague names like "the business".)
- What are their current pain points? (e.g., "Takes 3 days to get yesterday's sales figures", "Inventory numbers mismatch with CRM sales".)
- What is their success signal? (How do they know this data product is working?)

### 4. Interactive Review Menu
Present a summary of your findings to the user and present the following menu:

- **[C] Continue**: Confirm the problem, decisions, and stakeholders, and proceed to scope definition.
- **[E] Edit**: Correct or add details to the stakeholders, problem statement, or decisions.

HALT and wait for user selection.

- On **[C]**: Proceed to `./step-02-scope.md`.
- On **[E]**: Prompt the user for edits, refine the details, and re-present this menu.
