import { render } from "@testing-library/react";
import { triggerAnalyticsEvent } from "lib/gtag";
import Contact from "pages/contact";
import React from "react";

jest.mock("lib/gtag");

describe("With React Testing Library", () => {
  it('Shows "This is the Contact page"', () => {
    const { container } = render(<Contact />);

    expect(container.querySelector("h1").textContent).toBe("This is the Contact page");
  });

  it("should send a Google Analytics event when submitting the form", () => {
    const { container } = render(<Contact />);

    container.querySelector("button").click();

    expect(triggerAnalyticsEvent).toHaveBeenCalled();
  });
});
