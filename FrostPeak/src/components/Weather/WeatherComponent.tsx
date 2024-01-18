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
        console.log("Error with weather fetching");
        
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white shadow-lg w-52 mx-auto p-4 rounded-3xl font-nunito">
      {weatherInfo && (
        <div>
          <h2 className="font-bold text-gray-800 mb-5">
            <TiWeatherCloudy className="inline-block mr-2 text-blue-500" /> 
            Current Weather
          </h2>
          <p className="text-gray-700 mb-2">
            <FaTemperatureLow className="inline-block mr-2 text-blue-500" /> 
            Temperature: {weatherInfo.current.temperature2m} °C
          </p>
          <p className="text-gray-700 mb-2">
            <TiWeatherSnow className="inline-block mr-2 text-blue-500" /> 
            Snowfall: {weatherInfo.current.snowfall} mm
          </p>
          <p className="text-gray-700">
            <TiWeatherWindyCloudy className="inline-block mr-2 text-blue-500" /> 
            Wind Speed: {weatherInfo.current.windSpeed10m} m/s
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;