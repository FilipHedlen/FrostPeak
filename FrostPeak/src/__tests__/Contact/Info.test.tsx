import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';
import ContactInfo from "../../components/Contact/ContactInfo/ContactInfo";

describe("ContactInfo", () => {
  afterEach(cleanup);

  test("renders contact information with correct text", () => {
    render(<ContactInfo />);
    
    const emailElement = screen.getByText(/Email:/i);
    const phoneElement = screen.getByText(/Phone:/i);
    const addressElement = screen.getByText(/Address:/i);
    
    expect(emailElement).toHaveTextContent("frostpeak@gmail.com");
    expect(phoneElement).toHaveTextContent("+123 123 123");
    expect(addressElement).toHaveTextContent("Bergarvägen 31, 846 97 Bruksvallarna");
  });

  test("renders contact information with correct styling", () => {
    render(<ContactInfo />);
    
    const contactInfoContainer = screen.getByRole("heading", { name: /contact information/i }).closest("div");
    
    expect(contactInfoContainer).toHaveClass("flex", "flex-col", "mx-8", "my-16", "text-white", "animate-slide-in-right");
  });
});