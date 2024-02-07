import { render } from "@testing-library/react";
import SlopeList from "../../components/Slopes/SlopeList/SlopeList";
import slopeData from "../../data/slopeData";
import "@testing-library/jest-dom";

jest.mock("../../components/Slopes/SlopeObject/SlopeObject", () => {
  return jest.fn(() => <div data-testid="mock-slope-object"></div>);
});

describe("SlopeList", () => {
  test("renders all slopes from slopeData", () => {
    const { getAllByTestId } = render(<SlopeList />);

    expect(getAllByTestId("mock-slope-object")).toHaveLength(slopeData.length);
  });
});