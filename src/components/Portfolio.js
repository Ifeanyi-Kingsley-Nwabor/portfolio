import React from "react";

import CloudComputing from "./CloudComputing";
import Scrum from "./Scrum";
import WebDev from "./WebDev";
import Masters from "./Masters";

const Portfolio = () => {
  return (
    <div className="container">
      <div className="row items">
        <div className="col s12 m8 l5">
          <WebDev />
        </div>

        <div className="col s12 m8 l5">
          <CloudComputing />
        </div>
      </div>
      <hr className="horizontal-line"></hr>
      <div className="row">
        <div className="col s12 m8 l5">
          <Scrum />
        </div>

        <div className="col s12 m8 l5">
          <Masters />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
