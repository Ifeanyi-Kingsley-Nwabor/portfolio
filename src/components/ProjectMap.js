import React from "react";
import ProjectData from "./ProjectData";
import Projects from "./Projects";

const ProjectMap = () => {
  // console.log(ProjectData);
  return (
    <div className="container">
      <p className="project-map">
        Here are a few Projects I participated in during the Full-Stack Web and
        App Development Training.
      </p>
      <p>
        I would also be adding more{" "}
        <a
          href="https://aws.amazon.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          AWS
        </a>{" "}
        cloud solution project soon.{" "}
      </p>
      <p>(Note: Zombeatz is still work in progress)</p>

      {ProjectData &&
        ProjectData.map((oneProject, index) => (
          <Projects key={index} oneProject={oneProject} />
        ))}
    </div>
  );
};

export default ProjectMap;
