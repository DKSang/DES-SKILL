# dlt Core Concepts for DES

## Mental Model

```text
pipeline = moves data from Python code to destination
source = group of related resources
resource = function yielding data for one table/logical entity
destination = where data is loaded
dataset_name = logical group of destination tables/files
state = remembered progress and schema/runtime information
```

## DES Usage

dlt should mainly support:

* source feasibility;
* ingestion implementation;
* Bronze loading;
* schema inference/evolution;
* incremental state;
* load evidence.

## Not dlt's Main Role

dlt should not replace:

* DES source ownership decisions;
* business KPI modeling;
* Gold mart design;
* semantic layer design;
* dashboard logic;
* orchestration governance.
