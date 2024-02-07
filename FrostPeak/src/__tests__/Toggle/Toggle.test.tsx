import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SlopeLiftToggle from "../../components/SlopeLiftToggle/SlopeLiftToggle";

describe("SlopeLiftToggle", () => {
  test("renders SlopeList by default", () => {
    const { getByText } = render(<SlopeLiftToggle />);
    
    expect(getByText("Slopes")).toBeInTheDocument();
  });

  test("switches to LiftList when Lifts button is clicked", () => {
    const { getByText } = render(<SlopeLiftToggle />);
    const liftsButton = getByText("Lifts");

    fireEvent.click(liftsButton);

    expect(getByText("Lifts")).toBeInTheDocument();
  });
});