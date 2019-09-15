import { render, wait } from "@testing-library/react";
import getCurrentDateTime from "infrastructure/date";
import apiGet from "lib/apiGet";
import HomePage from "pages";
import React from "react";

jest.mock("lib/apiGet");
jest.mock("infrastructure/date");

describe("With React Testing Library", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

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

  it("should call the API if client side", () => {
    // @ts-ignore
    process.browser = true;
    HomePage.getInitialProps();

    expect(apiGet).toHaveBeenCalled();
  });

  it("should not call the API if server side", () => {
    // @ts-ignore
    process.browser = false;
    HomePage.getInitialProps();

    expect(apiGet).not.toHaveBeenCalled();
    expect(getCurrentDateTime).toHaveBeenCalled();
  });
});
