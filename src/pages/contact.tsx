import Page from "components/layout/Page";
import { triggerAnalyticsEvent } from "lib/gtag";
import React from "react";

interface ContactPageState {
  message: string;
  errorMessage: string;
}

class Contact extends React.Component<any, ContactPageState> {
  constructor(props) {
    super(props);
    this.state = { message: "", errorMessage: "" };
  }

  public handleInput = e => {
    this.setState({ message: e.target.value });
  };

  public handleSubmit = e => {
    e.preventDefault();
    const message = this.state.message;

    if (!!message) {
      this.setState({ errorMessage: "" });

      triggerAnalyticsEvent({
        action: "submit_form",
        category: "Contact",
        label: "Form submission"
      });
    } else {
      this.setState({ errorMessage: "You can't send an empty message !" });
    }

    this.setState({ message: "" });
  };

  public render() {
    const { message, errorMessage } = this.state;
    return (
      <Page title={"Contact"} description={"This is the contact Page"}>
        <div className="text-left">
          <h2 className="section-title mt-16">Contact</h2>
          <p className="paragraph">
            This is not an actual contact form. It will send a Google Analytics event on
            submit to show how to do it.
          </p>

          <form className="mt-8 sm:w-1/2 xl:w-1/3" onSubmit={this.handleSubmit}>
            <div className="relative w-full">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                rows={4}
                cols={80}
                onChange={this.handleInput}
                value={message}
                className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                placeholder="Type a message..."
              />
            </div>

            <button className="btn btn-primary mt-2" type="submit">
              Send Message
            </button>
            <p className="error-message text-red-500 mt-2">{errorMessage}</p>
          </form>
        </div>
      </Page>
    );
  }
}

export default Contact;
