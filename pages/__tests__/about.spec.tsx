import { render } from "@testing-library/react";
import React from "react";
import AboutPage from "../about";

describe("With React Testing Library", () => {
  it('Shows "This is the About page"', () => {
    const { getByText } = render(<AboutPage />);

    expect(getByText("This is the About page")).not.toBeNull();
  });
});
