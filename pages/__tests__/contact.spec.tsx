import { render } from "@testing-library/react";
import { triggerAnalyticsEvent } from "lib/gtag";
import React from "react";
import ContactPage from "../contact";

jest.mock("lib/gtag");

describe("With React Testing Library", () => {
  it('Shows "This is the Contact page"', () => {
    const { container } = render(<ContactPage />);

    expect(container.querySelector("h1").textContent).toBe(
      "This is the Contact page"
    );
  });

  it("should send a Google Analytics event when submitting the form", () => {
    const { container } = render(<ContactPage />);

    container.querySelector("button").click();

    expect(triggerAnalyticsEvent).toHaveBeenCalled();
  });
});
