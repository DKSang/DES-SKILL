# Example IoT Project

## Goal
Build an equipment monitoring platform for sensor data.

## Sources
- MQTT or Kafka sensor events.
- Device registry.
- Maintenance records.
- Alert history.

## Gold Models
- `fact_sensor_reading`.
- `fact_device_alert`.
- `dim_device`.
- `dim_location`.
- `mart_device_health_daily`.

## Serving
- Operations dashboard.
- Alert API.
- Predictive maintenance feature store.
