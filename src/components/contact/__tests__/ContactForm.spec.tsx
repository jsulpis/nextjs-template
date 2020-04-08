import { render, fireEvent } from "@testing-library/react";
import { triggerAnalyticsEvent } from "lib/gtag";
import React from "react";
import ContactForm from "../ContactForm";

jest.mock("lib/gtag");

describe("Contact Form", () => {
  it("should not send any event and should display an error message if submitting an empty message", async () => {
    // Given
    const { container } = render(<ContactForm />);

    // When
    fireEvent.click(container.querySelector("form button"));

    // Then
    expect(triggerAnalyticsEvent).not.toHaveBeenCalled();
    expect(container.querySelector(".error-message").textContent).toBe(
      "You can't send an empty message !"
    );
  });

  it("should remove the error message if a valid message is sent", async () => {
    // Given
    const { container } = render(<ContactForm />);

    // Then
    fireEvent.click(container.querySelector("form button"));
    expect(triggerAnalyticsEvent).not.toHaveBeenCalled();
    expect(container.querySelector(".error-message").textContent).toBe(
      "You can't send an empty message !"
    );
    // When
    const textarea = container.querySelector("textarea");
    fireEvent.change(textarea, { target: { value: "valid message" } });

    fireEvent.click(container.querySelector("form button"));

    // Then
    expect(triggerAnalyticsEvent).toHaveBeenCalled();
    expect(container.querySelector(".error-message").textContent).toBeFalsy();
  });

  it("should send a Google Analytics event when submitting the form", () => {
    //Given
    const { container } = render(<ContactForm />);

    const textarea = container.querySelector("textarea");

    // When
    fireEvent.change(textarea, { target: { value: "valid message" } });
    fireEvent.click(container.querySelector("form button"));

    // Then
    expect(triggerAnalyticsEvent).toHaveBeenCalledWith({
      action: "submit_form",
      category: "Contact",
      label: "Form submission"
    });
  });
});
