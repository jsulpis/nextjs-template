import Page from "components/Page";
import { triggerAnalyticsEvent } from "lib/gtag";
import { Component } from "react";
import style from "./contact.scss";

interface ContactPageState {
  message: string;
}

class ContactPage extends Component<null, ContactPageState> {
  public state = { message: "" };

  public handleInput = e => {
    this.setState({ message: e.target.value });
  };

  public handleSubmit = e => {
    e.preventDefault();

    triggerAnalyticsEvent({
      action: "submit_form",
      category: "Contact",
      label: "Form submission",
      value: this.state.message
    });

    this.setState({ message: "" });
  };

  public render() {
    return (
      <Page title={"Contact"} description={"This is the contact Page"}>
        <h1>This is the Contact page</h1>
        <form className={style.myform} onSubmit={this.handleSubmit}>
          <label htmlFor="message">Message</label>
          <textarea
            id={"message"}
            onChange={this.handleInput}
            value={this.state.message}
          />
          <button type="submit">submit</button>
        </form>
      </Page>
    );
  }
}

export default ContactPage;
