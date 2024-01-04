import { useEffect, useState } from 'react';
import fetchWeatherInfo from '../../services/weather/weatherService';
import { TiWeatherSnow, TiWeatherCloudy, TiWeatherWindyCloudy } from "react-icons/ti";
import { FaTemperatureLow } from "react-icons/fa";

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
        console.log("Error with weather info");
        
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-black w-80 mx-auto p-4 rounded-3xl">
      {weatherInfo && (
        <div>
          <h2 className="font-bold text-white"><TiWeatherCloudy className="inline-block mr-2" /> Current Weather</h2>
          <p className="text-white"><FaTemperatureLow className="inline-block mr-2" /> Temperature: {weatherInfo.current.temperature2m} °C</p>
          <p className="text-white"><TiWeatherSnow className="inline-block mr-2" /> Snowfall: {weatherInfo.current.snowfall} mm</p>
          <p className="text-white"><TiWeatherWindyCloudy className="inline-block mr-2" /> Wind Speed: {weatherInfo.current.windSpeed10m} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;