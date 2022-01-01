import React, { useRef, useEffect } from "react";
import M from "materialize-css";

import { Link } from "react-router-dom";
import LinkComponent from "./LinkComponent";
import bg_2 from "../images/bg_2.jpg";
import ContactForm from "./ContactForm";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  const mySuperModal = useRef();
  useEffect(() => {
    if (mySuperModal.current) {
      M.Modal.init(mySuperModal.current);
    }
  }, []);

  const me = {
    name: "Ifeanyi Kingsley Nwabor",
    email: "nwaborkingsley@gmail.com",
    Linkedin: "https://de.linkedin.com/in/iknwabor",
    GitHub: "https://github.com/Ifeanyi-Kingsley-Nwabor"
  };
  return (
    <div className="container contact-page">
      <h3>{me.name}</h3>
      <div className="row">
        <div className="col s12 l6">
          <div className="card contact-card">
            <div className="card-image">
              <img src={bg_2} alt="and this is me" />
              <span className="card-title"></span>
              {/* <Link
                to={{
                  pathname: "/contact-form"
                  // search: "?sort=name",
                  // hash: "#the-hash",
                  // state: { serviceId },
                }}
                className="waves-effect waves-light btn-floating halfway-fab red modal-trigger"
              >
                <i className="material-icons">person</i>
              </Link> */}
              <a
                className="waves-effect waves-light btn-floating halfway-fab  red modal-trigger"
                href="#modal1"
              >
                <i className="material-icons">email</i>
              </a>
              <div id="modal1" className="modal col s12 m8 " ref={mySuperModal}>
                <div className="modal-content ">
                  <h4>Send me a message...</h4>
                  <p>
                    I check my email quite regularly, so you can always expect a
                    prompt response from me.
                  </p>
                  <ContactForm />
                </div>
                <div className="modal-footer">
                  <a
                    href="/contact"
                    className="modal-close waves-effect waves-green btn-flat"
                  >
                    Close
                  </a>
                </div>
              </div>
            </div>
            <div className="card-content">
              <p>
                Interested to know more or would like to contribute or discuss
                about anything... Then click on the <i>red button</i> to shoot
                me a quick message. You can also check out the contact links
                shown below. I am always open to your feedback and look forward
                to building super fantastic products with youuu...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-container">
        {/* <p className="email-contact">Email: {me.email}</p> */}
        {/* <div className="gin"> */}
        <div className="linkedin-contact">
          <a
            // className="waves-effect waves-light btn-floating social linkedin"
            className="waves-effect waves-light btn "
            href={me.Linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
            {/* <i className="fa fa-linkedin"></i> */}
          </a>
        </div>
        <div className="github-contact">
          <a
            // className="waves-effect waves-light btn-floating social github"
            className="waves-effect waves-light btn "
            href={me.GitHub}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            {/* <i className="fa fa-github"></i> */}
          </a>
        </div>
      </div>
      {/* </div> */}
      {/* <LinkComponent /> */}
    </div>
  );
};

export default Contact;
