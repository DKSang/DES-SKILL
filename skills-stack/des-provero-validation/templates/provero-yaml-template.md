source:
  type: duckdb
  table: "<table_or_file_expression>"

checks:
  - row_count:
      min: 1

# Severity levels: info, warning, critical, blocker
# Add severity per check when required by project convention.

contracts: []

alerts: []
