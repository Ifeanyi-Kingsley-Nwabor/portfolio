import React from "react";
import uni_bremen from "../images/uni.png";
import pdf_2 from "../pdf/masterurkunde.pdf";
import pdf_3 from "../pdf/master_thesis.pdf";

const CloudComputing = () => {
  return (
    <div>
      <div className="card sticky-action hoverable service-card">
        <div className="card-image  waves-effect waves-block waves-light">
          <img
            className="activator  responsive-img"
            src={uni_bremen}
            alt="uni-bremen logo"
          />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            Marine Geosciences (Masters)
            <i className="material-icons right">more_vert</i>
          </span>
          <div className="card-action action">
            <p>
              <a href={pdf_3} target="_blank" rel="noopener noreferrer">
                Master Thesis
              </a>
            </p>
            <p>
              <a href={pdf_2} target="_blank" rel="noopener noreferrer">
                View Certificate
              </a>
            </p>
          </div>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Marine Geosciences (Masters)
            <i className="material-icons right">close</i>
          </span>
          <p>
            During my Master studies at Universität Bremen, I acquired first
            hand knowledge with respect to Geoscientific research as well as
            saftey laboratory practices. My{" "}
            <a href={pdf_3} target="_blank" rel="noopener noreferrer">
              <i>Master Thesis</i>
            </a>{" "}
            was focused on Microbial degradation of Hydrocarbon compounds and
            there respective intermediary products which might be toxic for the
            environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CloudComputing;
