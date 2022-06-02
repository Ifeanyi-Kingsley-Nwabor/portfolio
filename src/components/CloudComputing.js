import React from "react";
import aws from "../images/aws.png";

const CloudComputing = () => {
  return (
    <div>
      <div className="card sticky-action hoverable service-card">
        <div className="card-image  waves-effect waves-block waves-light">
          <img
            className="activator  responsive-img"
            src={aws}
            alt="AWS SAA Certification"
          />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            Full-stack Web And App Development
            <i className="material-icons right">more_vert</i>
          </span>
          <div className="card-action">
            <p>
              <a
                href="https://www.youracclaim.com/badges/628a4b4f-13d1-4dde-a775-1a00daaf662d?source=linked_in_profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                Verify
              </a>
            </p>
          </div>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Full-stack Web And App Development
            <i className="material-icons right">close</i>
          </span>
          <p>
            I had the opportunity to participate in a 3-month intensive
            Full-stack Web and App Developement Training at the WBS Coding
            School and it was the best decission that I ever made. My Tech
            skills includes but not limited to HTML, CSS, Javascript, React,
            Node JS, Express and SQL/NOSQL. I find it really fascinating how one
            can easily bring an idea to reality by using various tools and
            frameworks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CloudComputing;
