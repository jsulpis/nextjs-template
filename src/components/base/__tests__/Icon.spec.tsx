import { render } from "@testing-library/react";
import Icon from "components/base/Icon";

describe("Icon", () => {
  it("should display an image with alt text and a title", () => {
    const { container, getByText } = render(
      <Icon icon={{ name: "My Icon", file: "my-file.svg" }} />
    );

    const renderedImg = container.querySelector("img");
    expect(renderedImg.src).toBe("http://localhost/static/icons/my-file.svg");
    expect(renderedImg.alt).toBe("My Icon");

    expect(getByText("My Icon")).toBeTruthy();
  });
});
