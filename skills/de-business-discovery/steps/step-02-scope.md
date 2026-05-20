# Step 2: Define Scope, Constraints, and Data Products

## Rules
- Speak output in your agent style with the configured `communication_language`.
- Keep the scope narrow enough for a first delivery.
- Always HALT at checkpoints or menus and wait for user selection.

## Instructions

### 1. Define In-Scope and Out-of-Scope Capabilities
Clearly state what will be built in this phase and what will be deferred:
- **In-Scope**: (e.g., Ingesting Shopify orders, building a daily inventory snapshot table, calculating gross margins.)
- **Out-of-Scope (Deferred)**: (e.g., Real-time streaming ingestion, machine learning forecast for stock levels, CRM sync.)

### 2. Capture Operational Constraints
Identify constraints that will impact downstream technical decisions:
- Budget constraints.
- Latency needs (e.g., Daily refresh, hourly refresh, real-time).
- Regulatory limits (e.g., GDPR, CCPA, PII masking).
- Team skillsets (e.g., Python, SQL only).

### 3. List Initial Data Products
State the delivery format of the data:
- BI Dashboard, Semantic Model, Webhook / Reverse ETL, REST API, or static files.

### 4. Interactive Review Menu
Present a summary of the scope, constraints, and data products, then show this menu:

- **[C] Continue**: Confirm the scope and constraints, and proceed to drafting the brief.
- **[E] Edit**: Modify in-scope/out-of-scope boundaries, constraints, or data products.

HALT and wait for user selection.

- On **[C]**: Proceed to `./step-03-draft.md`.
- On **[E]**: Prompt the user for edits, refine the details, and re-present this menu.
