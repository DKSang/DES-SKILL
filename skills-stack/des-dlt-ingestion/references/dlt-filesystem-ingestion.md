# dlt Filesystem Ingestion

## Design Checks

Document:

```text
path:
glob:
file format:
partitioning:
schema consistency:
source file metadata:
late files:
file overwrite behavior:
```

## DES Rules

* Preserve source file path.
* Record file modified time where useful.
* Track loaded files.
* Treat file replacement as a source behavior risk.
* Convert only into derived locations, never overwrite raw files.
