import { fetchWeatherApi } from 'openmeteo';

export interface WeatherData {
    current: {
      time: Date;
      temperature2m: number;
      snowfall: number;
      windSpeed10m: number;
      windDirection10m: number;
    };
}

const fetchWeatherInfo = async (): Promise<WeatherData | null> => {
  try {
    const params = {
      "latitude": 62.6667,
      "longitude": 12.3833,
      "current": ["temperature_2m", "snowfall", "wind_speed_10m", "wind_direction_10m"],
      "hourly": ["temperature_2m", "snowfall", "wind_speed_10m", "wind_direction_10m"],
      "daily": ["sunrise", "daylight_duration"],
      "wind_speed_unit": "ms",
      "timezone": "Europe/Berlin",
      "forecast_days": 16
    };

    const url = import.meta.env.VITE_WEATHER_API_URL;
    const responses = await fetchWeatherApi(url, params);
    const response = responses[0];

    const utcOffsetSeconds = response.utcOffsetSeconds();
    const current = response.current()!;

    const weatherData: WeatherData = {
        current: {
          time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
          temperature2m: Math.round(current.variables(0)!.value()),
          snowfall: Math.round(current.variables(1)!.value()),
          windSpeed10m: Math.round(current.variables(2)!.value()),
          windDirection10m: Math.round(current.variables(3)!.value()),
        }
    };

    return weatherData;
  } catch (error) {
    console.error("Error with fetching weather", error);
    throw error;
  }
};

export default fetchWeatherInfo;