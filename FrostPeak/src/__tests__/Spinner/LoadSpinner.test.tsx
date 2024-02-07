import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

describe("LoadingSpinner", () => {
    test("renders loading spinner", () => {
      render(<LoadingSpinner />);
      
      const spinnerContainer = screen.getByRole("status");
      expect(spinnerContainer).toBeInTheDocument();
  
      const svgIcon = spinnerContainer.firstChild as HTMLElement;
      expect(svgIcon).toBeInTheDocument();
      expect(svgIcon.tagName).toBe("svg");
      expect(svgIcon).toHaveClass("animate-spin");
  
      // Check if the loading text is rendered
      const loadingText = screen.getByText("Loading...");
      expect(loadingText).toBeInTheDocument();
      expect(loadingText).toHaveClass("sr-only");
    });
});