import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SlopeObject, { Slope } from "../../components/Slopes/SlopeObject/SlopeObject";

describe("SlopeObject", () => {
  test("renders slope number and name correctly", () => {
    const slope: Slope = { number: 1, name: "Example Slope", difficulty: "easy", length: "1km" };

    const { getByText } = render(<SlopeObject {...slope} />);
    
    expect(getByText(`${slope.number}. ${slope.name}`)).toBeInTheDocument();
  });
});