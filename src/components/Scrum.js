import React from "react";
import psm1 from "../images/psm1.png";

const CloudComputing = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col col s12 m8 l6 card-component">
          <h5 className="header">Professional Scrum Master (PSM I)</h5>
          <div className="card service-card horizontal  hoverable">
            <div className="card-image">
              <img
                className="certification-image responsive-img"
                src={psm1}
                alt="AWS SAA Certification"
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>
                  As a Certified Professional Scrum Master, I have a good
                  understanding of the Agile methodologies. My mentality has
                  always been <i>"Lead by serving... Learn by doing!"</i>. I was
                  able to achieve set goals, by breaking huge tasks into smaller
                  chunks and working towards achieving them in a given period of
                  time. This skill came in quite handy during the Web and App
                  DevelopmentTraining.
                </p>
              </div>

              <div className="card-action">
                <p> Enter my email address when verifying.</p>
                <p>
                  <a
                    href="https://www.scrum.org/certificates/604454"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verify
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
