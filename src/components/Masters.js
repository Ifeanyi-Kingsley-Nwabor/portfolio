import React from "react";
import uni_bremen from "../images/uni_bremen.png";
import pdf_2 from "./pdf/masterurkunde.pdf";
import pdf_3 from "./pdf/master_thesis.pdf";

const CloudComputing = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12  card-component">
          <h5 className="header">Marine Geoscientist (MSc.)</h5>
          <div className="card horizontal medium hoverable">
            <div className="card-image">
              <img
                src={uni_bremen}
                alt="wbs coding school logo"
                className="certification-image responsive-img"
              />
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
