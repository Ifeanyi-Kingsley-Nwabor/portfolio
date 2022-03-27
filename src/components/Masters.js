import React from "react";
import uni_bremen from "../images/uni_bremen.png";
import pdf_2 from "./pdf/masterurkunde.pdf";
import pdf_3 from "./pdf/master_thesis.pdf";

const CloudComputing = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m8 l6 card-component">
          <div className="card service-card horizontal  hoverable">
            <div className="row">
              <div className="card-image col s10 m5 l5 ">
                <img
                  src={uni_bremen}
                  alt="wbs coding school logo"
                  className="certification-image responsive-img"
                />
              </div>
              <div className="col s10 m5 l5 ">
                <h5 className="header">Marine Geoscientist (MSc.)</h5>
              </div>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>
                  During my Master studies at Universität Bremen, I acquired
                  first hand knowledge with respect to Geoscientific research as
                  well as saftey laboratory practices. My{" "}
                  <a href={pdf_3} target="_blank" rel="noopener noreferrer">
                    <i>Master Thesis</i>
                  </a>{" "}
                  was focused on Microbial degradation of Hydrocarbon compounds
                  and there respective intermediary products which might be
                  toxic for the environment.
                </p>
              </div>
              <div className="card-action">
                <p>
                  <a href={pdf_2} target="_blank" rel="noopener noreferrer">
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
