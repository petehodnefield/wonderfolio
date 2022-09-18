import React, { useEffect } from "react";
import githubIcon from "../../assets/icons/logo-github.svg";
import linkedInIcon from "../../assets/icons/logo-linkedin.svg";
import emailIcon from "../../assets/icons/mail-outline.svg";
import resume from "../../assets/resume/PeteHodnefieldResume.pdf";

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  return (
    <div className="row nav">
      <a download href={resume} className="anchor-link">
        Resume
      </a>{" "}
      <ul className="nav-list">
        <li>
          <a
            href="https://github.com/petehodnefield"
            target="_blank"
            className="nav-list-item"
          >
            <div className="icon-container">
              {" "}
              <img src={githubIcon} className="icon"></img>
            </div>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/petehodnefield/"
            target="_blank"
            className="nav-list-item"
          >
            <div className="icon-container">
              {" "}
              <img src={linkedInIcon} className="icon"></img>
            </div>
          </a>
        </li>
        <li>
          <a
            href="mailto:pete.hod1@gmail.com"
            target="_blank"
            className="nav-list-item"
          >
            <div className="icon-container">
              {" "}
              <img src={emailIcon} className="icon email-icon"></img>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
