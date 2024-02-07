import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import LiftObject, { Lift } from "../../components/SkiLifts/LiftObject/LiftObject";

describe("LiftObject", () => {
  test("renders lift number and name correctly", () => {
    const lift: Lift = { number: 1, name: "Example Lift" };

    const { getByText } = render(<LiftObject {...lift} />);
    
    expect(getByText(`${lift.number}. ${lift.name}`)).toBeInTheDocument();
  });
});