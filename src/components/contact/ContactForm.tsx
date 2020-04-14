import React, { useState } from "react";
import { triggerAnalyticsEvent } from "lib/gtag";

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!!message) {
      setErrorMessage("");
      triggerAnalyticsEvent({
        action: "submit_form",
        category: "Contact",
        label: "Form submission"
      });
    } else {
      setErrorMessage("You can't send an empty message !");
    }

    setMessage("");
  };

  return (
    <form className="mt-8 sm:w-1/2 xl:w-1/3" onSubmit={handleSubmit}>
      <div className="relative w-full">
        <label className="block text-sm font-semibold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          rows={4}
          cols={80}
          onChange={e => setMessage(e.target.value)}
          value={message}
          className="px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
          placeholder="Type a message..."
        />
      </div>

      <button className="btn btn-primary mt-2" type="submit">
        Send Message
      </button>
      <p className="error-message opacity-100 font-semibold text-red-500 mt-2">
        {errorMessage}
      </p>
    </form>
  );
};

export default ContactForm;
