import { render, fireEvent } from '@testing-library/react';
import ShowMoreComponent from '../../components/ShowMore/ShowMore';

describe("ShowMoreComponent", () => {
  test("calls showMore function when button is clicked", () => {
    const showMoreMock = jest.fn();

    const { getByText } = render(<ShowMoreComponent showMore={showMoreMock} />);
    
    const showMoreButton = getByText("Show more");
    fireEvent.click(showMoreButton);

    expect(showMoreMock).toHaveBeenCalledTimes(1);
  });
});