import React from "react";
// import { Link } from "react-router-dom";
// import LinkComponent from "./LinkComponent";

const Projects = ({ oneProject }) => {
  // console.log(oneProject);

  const {
    contributors,
    name,
    description,
    image,
    repo,
    url,
    tech,
    techstack
  } = oneProject;
  // console.log(description);
  // const k = (
  //   <a href="https://www.linkedin.com/in/kelvincode/">Kelvin Asomugha</a>
  // );

  return (
    <div className="container">
      <div className="card card-panel hoverable ">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={image} alt="how the project looks" />
        </div>
        <div className="card-content card-action ">
          <span className="card-title activator grey-text text-darken-4">
            <a href={url.frontend} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
            <i className="material-icons right pulse">more_vert</i>
          </span>

          <p>
            <a href={repo.backend} target="_blank" rel="noopener noreferrer">
              Backend
            </a>
          </p>
          <p>
            <a href={repo.frontend} target="_blank" rel="noopener noreferrer">
              Frontend
            </a>
          </p>
          <p>{techstack}</p>

          {tech.map((oneTech, index) => (
            <p key={index}>{oneTech}</p>
          ))}
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            {name}
            <i className="material-icons right">close</i>
          </span>
          <p className="flow-text description">{description}</p>
          <p>Created by:</p>
          {contributors.map((person, index) => (
            <p key={index}>{person}</p>
          ))}
        </div>
      </div>
      {/* <LinkComponent /> */}
    </div>
  );
};

export default Projects;
