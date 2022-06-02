import React from "react";
import psm1 from "../images/psm1.png";

const CloudComputing = () => {
  return (
    <div>
      <div className="card sticky-action hoverable service-card">
        <div className="card-image  waves-effect waves-block waves-light">
          <img
            className="activator  responsive-img"
            src={psm1}
            alt="Professional Scrum Master Certification"
          />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            Professional Scrum Master (PSM I)
            <i className="material-icons right">more_vert</i>
          </span>
          <div className="card-action">
            <p>
              <a
                href="https://www.scrum.org/certificates/604454"
                target="_blank"
                rel="noopener noreferrer"
              >
                Verify
              </a>
            </p>
            <p>nwaborkingsley@gmail.com.</p>
          </div>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Professional Scrum Master (PSM I)
            <i className="material-icons right">close</i>
          </span>
          <p>
            As a Certified Professional Scrum Master, I have a good
            understanding of the Agile methodologies. My mentality has always
            been <i>"Lead by serving... Learn by doing!"</i>. I was able to
            achieve set goals, by breaking huge tasks into smaller chunks and
            working towards achieving them in a given period of time. This skill
            came in quite handy during the Web and App DevelopmentTraining.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CloudComputing;
