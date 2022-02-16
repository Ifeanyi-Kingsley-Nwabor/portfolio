import React from "react";
import ProjectData from "./ProjectData";
import Projects from "./Projects";

const ProjectMap = () => {
  // console.log(ProjectData);
  return (
    <div className="container">
      <p className="project-map">
        Here are a few Projects I participated in during the Full-Stack Web and
        App Development Training. I would also be adding more{" "}
        <a
          href="https://aws.amazon.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          AWS
        </a>{" "}
        cloud solution project soon. I had to take down the Zombeatz Amplify App
        as this was built using the free tier AWS resources. Since my 12 months
        Grace period has ran out, I intend to recreate this application and some
        others in a new AWS account. This would eventually take a couple of days
        so I'll really appreciate your understanding.
      </p>

      {ProjectData &&
        ProjectData.map((oneProject, index) => (
          <Projects key={index} oneProject={oneProject} />
        ))}
    </div>
  );
};

export default ProjectMap;
