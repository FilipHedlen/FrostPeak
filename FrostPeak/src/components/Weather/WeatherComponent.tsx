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
    <div className="bg-white shadow-lg sm:w-[70%] md:w-[50%] lg:w-[20%] p-2 rounded-md font-poppins m-5">
      {weatherInfo && (
        <div className="flex flex-col">
          <h2 className="font-bold text-grey mb-4 text-3xl">
            <TiWeatherCloudy className="inline-block mr-2 text-black text-5xl" /> 
            Current Weather
          </h2>
          <p className="text-grey mb-2">
            <FaTemperatureEmpty className="inline-block mr-2 text-black text-4xl" /> 
            Temperature: {weatherInfo.current.temperature2m} °C
          </p>
          <p className="text-grey mb-2">
            <TiWeatherSnow className="inline-block mr-2 text-black text-4xl" /> 
            Snowfall: {weatherInfo.current.snowfall} mm
          </p>
          <p className="text-grey">
            <TiWeatherWindyCloudy className="inline-block mr-2 text-black text-4xl" /> 
            Wind Speed: {weatherInfo.current.windSpeed10m} m/s
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;