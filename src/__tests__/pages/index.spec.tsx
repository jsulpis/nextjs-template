import { render } from "@testing-library/react";
import Index from "pages";
import React from "react";
import * as router from "next/router";

jest.spyOn(router, "useRouter").mockReturnValue({} as any);

describe("HomePage", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("has a title", () => {
    const { container } = render(<Index />);
    expect(container.querySelector("h2").textContent).toBeTruthy();
  });
});
