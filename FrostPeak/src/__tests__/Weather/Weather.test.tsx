import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import WeatherComponent from "../../components/Weather/WeatherComponent";

// Mock the fetchWeatherInfo function
jest.mock("../../services/weather/weatherService", () => ({
  __esModule: true,
  default: jest.fn(() =>
    Promise.resolve({
      current: {
        temperature2m: 10,
        snowfall: 5,
        windSpeed10m: 3,
      },
    })
  ),
}));

describe("WeatherComponent", () => {
  test("renders current weather information", async () => {
    const { findByText } = render(<WeatherComponent />);
    const temperature = await findByText("Temperature: 10 °C");
    const snowfall = await findByText("Snowfall: 5 mm");
    const windSpeed = await findByText("Wind Speed: 3 m/s");

    expect(temperature).toBeInTheDocument();
    expect(snowfall).toBeInTheDocument();
    expect(windSpeed).toBeInTheDocument();
  });

  test("renders loading state", async () => {
    const { findByText } = render(<WeatherComponent />);
    const loading = await findByText("Current Weather");

    expect(loading).toBeInTheDocument();
  });
});