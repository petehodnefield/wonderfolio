import React from "react";

import resume from "../../assets/resume/PeteHodnefieldResume.pdf";
const Skills = () => {
  const frontEndSkills = [
    "React.js",
    "JavaScript ES6",
    "JQuery",
    "Handlebars.js",
    "HTML",
    "CSS",
  ];
  const backEndSkills = [
    "Node.js",
    "Express.js",
    "REST APIs",
    "GraphQL",
    "MongoDB",
    "MySQL",
    "AWS S3",
  ];
  return (
    <div>
      <div className=" skills-container">
        <h2 className="section-header ">Skills</h2>
        <div className="row full-width flush">
          {" "}
          <div className="list-container">
            {" "}
            <h3>Front-end </h3>
            <ul className="skills-list">
              {frontEndSkills.map((skill) => (
                <li>- {skill}</li>
              ))}
            </ul>
          </div>
          <div className="list-container">
            {" "}
            <h3>Back-end </h3>
            <ul className="skills-list">
              {backEndSkills.map((skill) => (
                <li>- {skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <p className="about-text">
        Click{" "}
        <a href={resume} download className="download-link">
          here
        </a>{" "}
        to download my resume
      </p>
    </div>
  );
};
export default Skills;
