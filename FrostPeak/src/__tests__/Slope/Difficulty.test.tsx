import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SlopeDifficulty from "../../components/Slopes/SlopeDifficulty/SlopeDifficulty";

describe("SlopeDifficulty", () => {
  test("renders SlopeDifficulty component correctly", () => {
    const { getByText } = render(<SlopeDifficulty />);
    
    expect(getByText("Marker explanation")).toBeInTheDocument();
    expect(getByText("Very easy")).toBeInTheDocument();
    expect(getByText("Easy")).toBeInTheDocument();
    expect(getByText("Intermediate")).toBeInTheDocument();
    expect(getByText("Difficult")).toBeInTheDocument();
    expect(getByText("Very difficult")).toBeInTheDocument();
  });
});