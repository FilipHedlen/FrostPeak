import { useEffect, useState } from 'react';
import fetchWeatherInfo from '../../services/weather/weatherService';

const WeatherComponent = () => {
    const [weatherInfo, setWeatherInfo] = useState<{
        current: {
          time: Date;
          temperature2m: number;
          snowfall: number;
          windSpeed10m: number;
          windDirection10m: number;
        };
      } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeatherInfo();
        setWeatherInfo(data);
      } catch (error) {
        // Handle error if needed
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {weatherInfo && (
        <div>
          <h2 className="font-bold">Current Weather</h2>
          <p>Temperature: {weatherInfo.current.temperature2m} °C</p>
          <p>Snowfall: {weatherInfo.current.snowfall} mm</p>
          <p>Wind Speed: {weatherInfo.current.windSpeed10m} m/s</p>
          <p>Wind Direction: {weatherInfo.current.windDirection10m} degrees</p>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;