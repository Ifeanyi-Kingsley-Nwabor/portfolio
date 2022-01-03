import React, { useRef, useEffect } from "react";
import emailjs from "emailjs-com";
const { REACT_APP_USER_ID } = process.env;
const { REACT_APP_TEMPLATE_ID } = process.env;
const { REACT_APP_SERVICE_ID } = process.env;

const ContactForm = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        form.current,
        REACT_APP_USER_ID
      )

      // .sendForm(
      //   "service_akeri5h",
      //   "template_co1hnul",
      //   form.current,
      //   "user_2Nb5pJ0GlB55tEoLnnLyY"
      // )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="container contact-form">
      <div className="row">
        <form ref={form} className="col s12 m10 l8 xl8" onSubmit={sendEmail}>
          <div className="row ">
            <div className="input-field col s12 m10 l8 xl8">
              {/* <i className="material-icons prefix">account_circle</i> */}
              <input
                id="name"
                type="text"
                className="validate"
                placeholder="Name"
                name="name"
                required
              />
            </div>
            <div className="row">
              <div className="input-field col s12 m10 l8 xl8">
                {/* <i className="material-icons prefix">email</i> */}
                <input
                  id="email"
                  type="email"
                  className="validate "
                  placeholder="Email Address"
                  name="email"
                  required
                />

                {/* <span
                  className="helper-text"
                  data-error="wrong"
                  data-success="right"
                >
                  Helper text
                </span> */}
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 m10 l8 xl8">
                <input
                  id="subject"
                  type="text"
                  className="validate"
                  placeholder="Subject"
                  name="subject"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 m10 l8 xl8">
                <textarea
                  className="materialize-textarea "
                  id="textarea2"
                  cols="30"
                  rows="8"
                  placeholder="Your message"
                  name="message"
                  required
                ></textarea>
              </div>
            </div>
            <div className="send-btn">
              {/* <input
                type="submit"
                className="btn btn-info"
                value="Send Message"
              /> */}
              <button
                className="btn waves-effect waves-light blue accent-3"
                type="submit"
                name="action"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
