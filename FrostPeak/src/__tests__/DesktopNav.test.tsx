import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DesktopNavMenu from '../components/Menu/Desktop/DesktopNavMenu';

describe('DesktopNavMenu component', () => {
  test("renders links correctly", () => {
    render(
      <MemoryRouter>
        <DesktopNavMenu />
      </MemoryRouter>
    );

    const links = [
      { text: "Home", href: "/" },
      { text: "Locations", href: "/locations" },
      { text: "Slopes", href: "/slopes"},
      { text: "About us", href: "/about" },
      { text: "Contact", href: "/contact" }
    ];

    links.forEach(link => {
      const renderedLink = screen.getByText(link.text);
      expect(renderedLink).toBeInTheDocument();
      expect(renderedLink).toHaveAttribute('href', link.href);
    });
  });
});