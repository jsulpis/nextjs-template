import { render, fireEvent } from "@testing-library/react";
import Header from "../Header";
import * as router from "next/router";

jest.spyOn(router, "useRouter").mockReturnValue({} as any);

describe("Header", () => {
  it("should expand when clicking on the burger menu", () => {
    // Given
    const { container } = render(<Header />);
    expect(container.querySelector("#list-mobile").classList).toContain("h-0");

    // When
    fireEvent.click(container.querySelector("button"));

    // Then
    expect(container.querySelector("#list-mobile").classList).toContain("h-24");
  });
});
