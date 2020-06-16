import { render } from "@testing-library/react";
import React from "react";
import Docs from "pages/docs";
import * as router from "next/router";

jest.mock("lib/gtag");
jest.spyOn(router, "useRouter").mockReturnValue({} as any);

describe("Documentation Page", () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = render(<Docs />).container;
  });

  it("has a title", () => {
    expect(container.querySelector("h2").textContent).toBe("Documentation");
  });

  it("has three sections for installation, configuration and deployment", () => {
    const sections = container.querySelectorAll("h3");

    expect(sections[0].textContent).toBe("Installation");
    expect(sections[1].textContent).toBe("Configuration");
    expect(sections[2].textContent).toBe("Deployment");
  });
});
