import React, { useRef, useEffect } from "react";
import M from "materialize-css";
import contact from "../images/contact.jpg";
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
    <div className="contact-bg">
      <div className=" contact-page">
        {/* <h5>{me.name}</h5> */}
        <div className="row">
          <div className="col s12 m6 offset-m1">
            <div className="card contact-card">
              <div className="card-image">
                <img src={contact} alt="and this is me" />
                <span className="card-title">Contact Me</span>

                <a
                  className="waves-effect waves-light btn-floating halfway-fab  blue darken-2
 modal-trigger"
                  href="#modal1"
                >
                  <i className="material-icons">email</i>
                </a>
                <div
                  id="modal1"
                  className="modal col s12 m8 "
                  ref={mySuperModal}
                >
                  <div className="modal-content message_modal ">
                    <div className="col s4">
                      <h4 className="send_message_text">
                        Send me a message...
                      </h4>
                      <p className="message_text">
                        I check my email quite regularly, so you can always
                        expect a prompt response from me!!!
                      </p>
                    </div>

                    <ContactForm />
                  </div>
                  <div className="modal-footer">
                    <a
                      href="/contact"
                      className="modal-close waves-effect waves-green btn-flat blue accent-3"
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
                  shown below. I am always open to your feedback and look
                  forward to building super fantastic products with youuu...
                </p>
              </div>
              <div className="contact-container">
                <div className="linkedin-contact">
                  <a
                    // className="waves-effect waves-light btn-floating social linkedin"
                    className="waves-effect waves-light btn   blue accent-3
"
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
                    className="waves-effect waves-light btn   blue accent-3
"
                    href={me.GitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                    {/* <i className="fa fa-github"></i> */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
