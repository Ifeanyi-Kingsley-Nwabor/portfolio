import React from "react";
import avatar_1 from "../images/avatar_1.png";
// import { Link } from "react-router-dom";
import LinkComponent from "./LinkComponent";

const About = () => {
  return (
    <div className="container">
      <h1 className="welcome">About me... I am waiting to fill it in..</h1>
      <img src={avatar_1} className="avatar" alt="avatar_1" />
      <LinkComponent />
    </div>
  );
};

export default About;
