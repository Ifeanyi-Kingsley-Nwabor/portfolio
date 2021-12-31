import React from "react";
// import { Link } from "react-router-dom";
import LinkComponent from "./LinkComponent";
import CloudComputing from "./CloudComputing";
import Scrum from "./Scrum";
import WebDev from "./WebDev";
import Masters from "./Masters";

const Portfolio = () => {
  return (
    <div className="container ">
      <div id="flex-container">
        <WebDev />
        <CloudComputing />
        <Scrum />
        <Masters />
      </div>

      {/* <LinkComponent /> */}
    </div>
  );
};

export default Portfolio;
