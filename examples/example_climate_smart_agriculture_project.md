# Example Climate-Smart Agriculture Project

## Goal
Support climate risk detection, crop-specific recommendations, and regional analysis.

## Business Problem
Farmers, cooperatives, and agricultural managers need timely warning when weather and soil conditions increase climate risk for specific crops.

## Business Questions
- Which communes have high drought risk for rice in the next 7 days?
- Which crop areas are exposed to flood risk this week?
- Which recommendations should be sent to farmers for each high-risk crop and location?

## Data Products
- Climate risk dashboard for analysts and managers.
- Farmer recommendation API.
- Natural language data agent for regional risk questions.

## Sources
- Weather observations and forecasts.
- Administrative boundaries.
- Crop calendars.
- Soil and land condition data.
- Yield data.
- Risk thresholds and recommendation knowledge.

## Domain Model
- `Location`: province, district, commune, coordinate or boundary.
- `Crop`: crop, variety, growth stage, calendar.
- `WeatherObservation`: rainfall, temperature, humidity, wind, timestamp, location.
- `WeatherForecast`: forecast horizon, predicted weather metrics, location.
- `ClimateRisk`: risk type, risk level, crop, location, evidence, date.
- `Recommendation`: action, target crop, risk trigger, severity.

## Bronze
- `raw_weather_observation`.
- `raw_weather_forecast`.
- `raw_location_boundary`.
- `raw_crop_calendar`.
- `raw_soil_condition`.
- `raw_recommendation_knowledge`.

## Silver
- `clean_weather_daily`.
- `clean_forecast_daily`.
- `clean_location`.
- `clean_crop_calendar`.
- `clean_soil_condition_daily`.
- `clean_risk_threshold`.

## Gold Models
- `dim_location`.
- `dim_crop`.
- `fact_weather_daily`.
- `fact_climate_risk_daily`.
- `fact_recommendation_daily`.

## Example Rule
```text
IF rainfall_7d is low
AND soil_moisture is low
AND crop = rice
THEN risk_type = drought
AND risk_level = high
```

## Serving
- Farmer web app.
- Analyst dashboard.
- Recommendation API.
- Natural language data agent.

## Lineage Example
`weather API` -> `raw_weather_observation` -> `clean_weather_daily` -> `fact_climate_risk_daily` -> `risk dashboard` / `recommendation API`.
