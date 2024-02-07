import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MapContainer from "../../components/Map/MapComponent";

// Mock the GoogleMap component
jest.mock("@react-google-maps/api", () => ({
    __esModule: true,
    GoogleMap: () => <div data-testid="google-map"></div>, // Mock GoogleMap to render a div
  }));
  
  // Mock the useGoogleMaps hook
  jest.mock("../../services/maps/mapService", () => ({
    __esModule: true,
    default: jest.fn(() => ({ isLoaded: true })),
  }));
  
  describe("MapContainer", () => {
    test("renders GoogleMap component when Google Maps API is loaded", () => {
      render(<MapContainer center={{ lat: 0, lng: 0 }} />);
      const googleMapElement = screen.getByTestId("google-map");
      expect(googleMapElement).toBeInTheDocument();
    });
});