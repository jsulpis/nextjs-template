import { render, wait } from "@testing-library/react";
import fetchDate from "lib/fetchDate";
import HomePage from "pages/index";
import React from "react";

jest.mock("lib/fetchDate");

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
    fetchDate.mockResolvedValueOnce(MOCK_DATE);
    const { container } = render(<HomePage />);

    expect(fetchDate).toHaveBeenCalled();
    await wait(() => expect(container.querySelector(".loading")).toBeFalsy());

    expect(container.querySelector(".date").textContent).toBe(
      "The date is: " + MOCK_DATE
    );
  });
});
