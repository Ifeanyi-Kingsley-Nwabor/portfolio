import React from "react";
// import { Link } from "react-router-dom";
// import LinkComponent from "./LinkComponent";
import CloudComputing from "./CloudComputing";
import Scrum from "./Scrum";
import WebDev from "./WebDev";
import Masters from "./Masters";

const Portfolio = () => {
  return (
    <div className="container ">
      {/* <div id="flex-container"> */}
      <div className="col s12 m5 l3">
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
      {/* </div> */}

      {/* <LinkComponent /> */}
    </div>
  );
};

export default Portfolio;
