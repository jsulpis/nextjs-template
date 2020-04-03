import { render } from "@testing-library/react";
import About from "pages/about";
import React from "react";

describe("With React Testing Library", () => {
  it('Shows "This is the About page"', () => {
    const { getByText } = render(<About />);

    expect(getByText("This is the About page")).not.toBeNull();
  });
});
