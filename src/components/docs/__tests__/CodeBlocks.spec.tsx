import { render, fireEvent } from "@testing-library/react";
import React from "react";
import CodeBlock from "../CodeBlock";

describe("CodeBlocks", () => {
  it("displays the code", async () => {
    const { findByText } = render(<CodeBlock>some code</CodeBlock>);
    expect(await findByText("some code")).toBeTruthy();
  });

  it("should copy the code", async () => {
    const mockExecCommand = jest.fn();
    Object.defineProperty(global.document, "execCommand", { value: mockExecCommand });

    const { container } = render(<CodeBlock>some code</CodeBlock>);
    const icon = container.querySelector("svg");
    expect(icon).toBeTruthy();

    fireEvent.click(icon);

    expect(mockExecCommand).toHaveBeenCalledWith("copy");
  });
});
