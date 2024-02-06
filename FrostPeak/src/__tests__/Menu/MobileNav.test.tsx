import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MobileNavMenu from '../../components/Menu/Mobile/MobileNavMenu';

global.matchMedia = jest.fn().mockImplementation(query => ({ // Simulate mobile viewport
  matches: true,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
}));

describe("MobileNavMenu component", () => {
    test("toggles open and closed", () => {
      render(
        <MemoryRouter>
          <MobileNavMenu />
        </MemoryRouter>
      );
  
      // Menu should be initially closed
      expect(screen.queryByText("Home")).not.toBeInTheDocument();
  
      fireEvent.click(screen.getByRole("button"));
  
      expect(screen.getByText("Home")).toBeInTheDocument();
  
      fireEvent.click(screen.getByRole("button"));
  
      expect(screen.queryByText("Home")).not.toBeInTheDocument();
    });
  
    test("closes the menu when clicking a link", () => {
      render(
        <MemoryRouter>
          <MobileNavMenu />
        </MemoryRouter>
      );
  
      fireEvent.click(screen.getByRole("button"));
  
      fireEvent.click(screen.getByText("Locations"));
  
      expect(screen.queryByText("Home")).not.toBeInTheDocument();
    });
});