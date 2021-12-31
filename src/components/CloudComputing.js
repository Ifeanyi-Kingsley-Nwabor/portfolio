import React from "react";
// import aws from "../images/aws.png";
import aws from "../images/aws2.png";

const CloudComputing = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 l card-component">
          <h5 className="header">Cloud Computing with Amazon AWS</h5>
          <div className="card horizontal medium hoverable">
            <div className="card-image">
              <img
                className=" certification-image responsive-img"
                src={aws}
                alt="AWS SAA Certification"
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>
                  I am a Certified (AWS) Solution Architect Associate. I have a
                  good understanding of the AWS console at handling small to
                  intermediate bits of cloud provissioning. For me, the learning
                  never stops, so I hope to continue developing my skills in
                  this domain.
                </p>
              </div>
              <div className="card-action">
                <a
                  href="https://www.youracclaim.com/badges/628a4b4f-13d1-4dde-a775-1a00daaf662d?source=linked_in_profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verify
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudComputing;
