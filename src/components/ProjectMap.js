import React from "react";
import ProjectData from "../ProjectData";
import Projects from "./Projects";

const ProjectMap = () => {
  return (
    <>
      <div className="container">
        <h4 className="project-map">
          Here are a few Projects I participated in during the Full-Stack Web
          and App Development Training. I would also be adding some{" "}
          <a
            href="https://aws.amazon.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS
          </a>{" "}
          cloud solution project soon.
        </h4>

        {ProjectData &&
          ProjectData.map((oneProject, index) => (
            <Projects key={index} oneProject={oneProject} />
          ))}
      </div>
    </>
  );
};

export default ProjectMap;
