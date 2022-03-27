import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="page-footer  blue darken-2" id="footer">
      <div className="container container_footer">
        <div className="row ">
          <div className="col s12 m4 l3">
            <h5 className="white-text">Contact</h5>
            <ul className="grey-text text-lighten-4">
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="nwaborkingsley@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email: nwaborkingsley@gmail.com
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://github.com/Ifeanyi-Kingsley-Nwabor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://de.linkedin.com/in/iknwabor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
          <div className="col l4 s12">
            <h5 className="white-text">Tech-stack</h5>
            <ul>
              <li>
                <Link
                  className="grey-text text-lighten-3"
                  to="https://www.freecodecamp.org/news/learn-the-pern-stack-full-course/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PERN stack
                </Link>
              </li>
              <li>
                <Link
                  className="grey-text text-lighten-3"
                  to="https://www.mongodb.com/mern-stack"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MERN stack
                </Link>
              </li>
            </ul>
          </div>
          <div className="col l4 s12">
            <h5 className="white-text">Content</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="/about">
                  About
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="/projects"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <p className="footer-copyright">© 2021 Copyright</p> */}
      </div>

      {/* <div className="footer-copyright">
      </div> */}
    </footer>
  );
};

export default Footer;
