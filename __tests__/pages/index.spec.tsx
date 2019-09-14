import { render, wait } from "@testing-library/react";
import apiGet from "lib/apiGet";
import HomePage from "pages";
import React from "react";

jest.mock("lib/apiGet");

describe("With React Testing Library", () => {
  it('Shows "Welcome to Next!"', () => {
    const { container } = render(<HomePage />);

    expect(container.querySelector(".title").textContent).toBe(
      "Welcome to Next!"
    );
  });

  it("should display the date", async () => {
    const MOCK_DATE = "2019-08-27 20:44:46";
    // @ts-ignore
    apiGet.mockResolvedValueOnce({ date: MOCK_DATE });
    const { container } = render(<HomePage />);

    expect(apiGet).toHaveBeenCalled();
    await wait(() => expect(container.querySelector(".loading")).toBeFalsy());

    expect(container.querySelector(".date").textContent).toBe(
      "The date is: " + MOCK_DATE
    );
  });
});
