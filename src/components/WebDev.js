import React from "react";
import wbs from "../images/wbs-coding-logo.png";
import pdf from "./pdf/webdevcert.pdf";

const CloudComputing = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12  card-component">
          <h5 className="header">Full-stack Web And App Development</h5>
          <div className="card horizontal medium hoverable">
            <div className="card-image">
              <img
                className="certification-image responsive-img"
                src={wbs}
                alt="wbs coding school logo"
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>
                  I had the opportunity to participate in a 3-month intensive
                  Full-stack Web and App Developement Training at the WBS Coding
                  School and it was the best decission that I ever made. My Tech
                  skills includes but not limited to HTML, CSS, Javascript,
                  React, Node JS, Express and SQL/NOSQL. I find it really
                  fascinating how one can easily bring an idea to reality by
                  using various tools and frameworks.
                </p>
              </div>

              <div className="card-action">
                <p>
                  <a href={pdf} target="_blank" rel="noopener noreferrer">
                    View Certificate
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudComputing;
