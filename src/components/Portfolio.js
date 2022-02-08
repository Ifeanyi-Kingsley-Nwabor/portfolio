import React from "react";
// import { Link } from "react-router-dom";
// import LinkComponent from "./LinkComponent";
import CloudComputing from "./CloudComputing";
import Scrum from "./Scrum";
import WebDev from "./WebDev";
import Masters from "./Masters";

const Portfolio = () => {
  return (
    <div className="portolio-container col s12 m6 l10">
      <div className="col ">
        <WebDev />
      </div>

      <div className="col ">
        <CloudComputing />
      </div>

      <div className="col ">
        <Scrum />
      </div>

      <div className="col ">
        <Masters />
      </div>
    </div>
  );
};

export default Portfolio;
