import React from "react";
// import { Link } from "react-router-dom";
// import LinkComponent from "./LinkComponent";
import CloudComputing from "./CloudComputing";
import Scrum from "./Scrum";
import WebDev from "./WebDev";
import Masters from "./Masters";

const Portfolio = () => {
  return (
    <div className="portolio-container ">
      <div className="col s12 m6 l10">
        <WebDev />
      </div>

      <div className="col s12 m5 l3">
        <CloudComputing />
      </div>

      <div className="col s12 m5 l3">
        <Scrum />
      </div>

      <div className="col s12 m5 l3">
        <Masters />
      </div>
    </div>
  );
};

export default Portfolio;
