# DuckDB Spatial and Remote Files

## Spatial Data

Use this reference for:

```text
GeoJSON
GeoPackage
Shapefile
FlatGeobuf
KML
```

Check:

* geometry type;
* coordinate reference system;
* invalid geometry;
* empty geometry;
* administrative code/name consistency;
* join key to province/district/commune tables.

## Remote Files

Use this reference for:

```text
HTTPS
S3
GCS
Azure / ABFSS
```

Rules:

* document remote URL or storage path;
* do not expose secrets;
* prefer credential chain or environment-based auth;
* cache only when appropriate;
* record access limitations.

## DES Usage

Spatial and remote file checks often support:

* boundary source assessment;
* climate/agriculture region joins;
* exposure mapping;
* administrative hierarchy validation.
