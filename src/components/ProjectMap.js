import React from "react";
import ProjectData from "./ProjectData";
import JsProjectData from "./JsProjectData";
import AwsProjectData from "./AwsProjectsData";
import Projects from "./Projects";

const ProjectMap = () => {
  // console.log(ProjectData);
  return (
    <div className="y">
      <div className="project-map">
        {/* <h3>Projects</h3>
        <p>
          <a
            href="https://aws.amazon.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS
          </a>{" "}
          cloud solution projects coming soon.
        </p> */}
      </div>
      <div className="row">
        <div className="myProjects">
          <h6 className="project-title">
            <i className="material-icons">code</i> JavaScript
          </h6>
          {JsProjectData &&
            JsProjectData.map((oneProject, index) => (
              <div className="row " key={index}>
                <div>
                  <Projects oneProject={oneProject} />
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="myProjects">
          <h6 className="project-title">
            {" "}
            <i className="material-icons">cloud</i> Amazon Web Services
          </h6>
          {AwsProjectData &&
            AwsProjectData.map((oneProject, index) => (
              <div className="row" key={index}>
                <div>
                  <Projects oneProject={oneProject} />
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="myProjects">
          <h6 className="project-title">
            <i className="material-icons">code</i> React Web Applications
          </h6>
          {ProjectData &&
            ProjectData.map((oneProject, index) => (
              <div className="row" key={index}>
                <div>
                  <Projects oneProject={oneProject} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectMap;
