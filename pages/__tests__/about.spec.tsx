import { render } from "@testing-library/react";
import AboutPage from "pages/about";
import React from "react";

describe("With React Testing Library", () => {
  it('Shows "This is the About page"', () => {
    const { getByText } = render(<AboutPage />);

    expect(getByText("This is the About page")).not.toBeNull();
  });
});
