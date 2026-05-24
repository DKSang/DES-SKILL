contracts:
  - name: "<contract_name>"
    owner: "<owner>"
    version: "1.0"
    table: "<table_name>"
    on_violation: warn
    schema:
      columns:
        - name: "<column_name>"
          type: "<type>"
          checks:
            - not_null
    sla:
      freshness: 24h
      completeness: "95%"
      availability: "true"
