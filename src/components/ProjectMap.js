import React from "react";
import projectData from "../projectData";
import Projects from "./Projects";

const ProjectMap = () => {
  return (
    <>
      <div className="container">
        <h4>
          Here are a few Projects I participated in during the Full-Stack Web
          and App Development Training. I would also be putting up some cloud
          infrastructure built by me soon.
        </h4>

        {projectData &&
          projectData.map((oneProject, index) => (
            <Projects key={index} oneProject={oneProject} />
          ))}
      </div>
    </>
  );
};

export default ProjectMap;
