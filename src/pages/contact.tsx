import React from "react";
import ContactForm from "components/contact/ContactForm";
import Page from "components/layout/Page";

const Contact = () => (
  <Page
    title={"Contact"}
    description={"This is the contact Page"}
    className="mb-8 lg:mb-0"
  >
    <div className="text-left">
      <h2 className="section-title mt-16">Contact</h2>
      <p className="paragraph">
        This is not an actual contact form. It will send a Google Analytics event on
        submit to show how to do it.
      </p>

      <ContactForm />
    </div>
  </Page>
);

export default Contact;
