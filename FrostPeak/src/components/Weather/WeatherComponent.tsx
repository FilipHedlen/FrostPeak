import { useEffect, useState } from 'react';
import fetchWeatherInfo from '../../services/weather/weatherService';
import { TiWeatherSnow, TiWeatherCloudy, TiWeatherWindyCloudy } from "react-icons/ti";
import { FaTemperatureEmpty } from 'react-icons/fa6';

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
    <div className="bg-white shadow-lg w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto p-6 rounded-md font-poppins">
      {weatherInfo && (
        <div className="flex flex-col">
          <h2 className="font-bold text-gray-800 mb-4 text-3xl">
            <TiWeatherCloudy className="inline-block mr-2 text-black text-5xl" /> 
            Current Weather
          </h2>
          <p className="text-gray-700 mb-2">
            <FaTemperatureEmpty className="inline-block mr-2 text-black text-4xl" /> 
            Temperature: {weatherInfo.current.temperature2m} °C
          </p>
          <p className="text-gray-700 mb-2">
            <TiWeatherSnow className="inline-block mr-2 text-black text-4xl" /> 
            Snowfall: {weatherInfo.current.snowfall} mm
          </p>
          <p className="text-gray-700">
            <TiWeatherWindyCloudy className="inline-block mr-2 text-black text-4xl" /> 
            Wind Speed: {weatherInfo.current.windSpeed10m} m/s
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;