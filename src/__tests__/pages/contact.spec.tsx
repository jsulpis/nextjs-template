import { render } from "@testing-library/react";
import Contact from "pages/contact";
import React from "react";

jest.mock("lib/gtag");

describe("Contact Page", () => {
  it("has a title", () => {
    const { container } = render(<Contact />);

    expect(container.querySelector("h2").textContent).toBe("Contact");
  });

  it("contains a contact form", () => {
    const { container } = render(<Contact />);

    expect(container.querySelector("form")).toBeTruthy();
  });
});
