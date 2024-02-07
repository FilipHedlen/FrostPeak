import { render } from "@testing-library/react";
import LiftList from "../../components/SkiLifts/LiftList/LiftList";
import liftData from "../../data/liftData"; 
import "@testing-library/jest-dom";

jest.mock("../../components/SkiLifts/LiftObject/LiftObject", () => {
    return jest.fn(() => <div data-testid="mock-lift-object"></div>);
  });
  
  describe("LiftList", () => {
    test("renders all lifts from liftData", () => {
      const { getAllByTestId } = render(<LiftList />);
  
      expect(getAllByTestId("mock-lift-object")).toHaveLength(liftData.length);
    });
});