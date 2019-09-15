import { render, wait } from "@testing-library/react";
import HomePage from "pages";
import React from "react";

jest.mock("lib/apiGet");

describe("With React Testing Library", () => {
  it('Shows "Welcome to Next!"', () => {
    const { container } = render(<HomePage date={""} />);

    expect(container.querySelector(".title").textContent).toBe(
      "Welcome to Next!"
    );
  });

  it("should display the date", async () => {
    const MOCK_DATE = "2019-08-27 20:44:46";
    const { container } = render(<HomePage date={MOCK_DATE} />);

    await wait(() => expect(container.querySelector(".loading")).toBeFalsy());

    expect(container.querySelector(".date").textContent).toBe(
      "The date is: " + MOCK_DATE
    );
  });
});
