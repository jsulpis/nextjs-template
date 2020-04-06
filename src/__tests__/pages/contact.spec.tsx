import { render } from "@testing-library/react";
import { triggerAnalyticsEvent } from "lib/gtag";
import Contact from "pages/contact";
import React from "react";

jest.mock("lib/gtag");

describe("Contact Page", () => {
  it('Shows "This is the Contact page"', () => {
    const { container } = render(<Contact />);

    expect(container.querySelector("h1").textContent).toBe("This is the Contact page");
  });

  it("should send a Google Analytics event when submitting the form", () => {
    const { container } = render(<Contact />);

    container.querySelector("form button").click();

    expect(triggerAnalyticsEvent).toHaveBeenCalledWith({
      action: "submit_form",
      category: "Contact",
      label: "Form submission",
      value: ""
    });
  });
});
