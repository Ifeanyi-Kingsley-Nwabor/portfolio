import React from "react";
import { Link } from "react-router-dom";

const LinkComponent = () => {
  return (
    <div className="my-links">
      <Link
        className="App-link"
        to="/"
        // target="_blank"
        // rel="noopener noreferrer"
      >
        Back to Home
      </Link>
      <Link
        className="App-link"
        to="/portfolio"
        // target="_blank"
        rel="noopener noreferrer"
      >
        To my Portfolio...
      </Link>
      <Link
        className="App-link"
        to="/about"
        // target="_blank"
        rel="noopener noreferrer"
      >
        About me...
      </Link>
      <Link
        className="App-link"
        to="/projects"
        // target="_blank"
        rel="noopener noreferrer"
      >
        To my Projects...
      </Link>
      <Link
        className="App-link"
        to="/contact"
        // target="_blank"
        rel="noopener noreferrer"
      >
        Contact me...
      </Link>
    </div>
  );
};

export default LinkComponent;
