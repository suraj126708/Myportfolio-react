import React from "react";

function ContactForm() {
  return (
    <>
      <h1 className="formHeading">contact me</h1>
      <div className="containerForm">
        <form action="https://api.web3forms.com/submit" method="POST">
          <input
            type="hidden"
            name="access_key"
            value="87de7c13-d6d6-4c5b-ad1e-2cc1bb163209"
          />
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <input type="checkbox" name="botcheck" className="hidden" />
          <button type="submit">Submit Form</button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
