# Provero Anomaly, History, and Monitoring

## Purpose

Use this when validation moves from one-time gate to ongoing monitoring.

## Anomaly Detection

Use anomaly checks for metrics with enough historical baseline.

Methods:

```text
zscore
mad
iqr
```

## History

Use result history to compare current run against previous runs.

Good for:

* row_count_change;
* anomaly;
* recurring SLA monitoring;
* trend analysis.

## Monitoring

Use watch/alerts only after:

* check semantics are stable;
* severity is agreed;
* ownership is known;
* incident response is defined.

## DES Rule

Monitoring without ownership creates noise. Do not enable alerts until owner and response policy are clear.
