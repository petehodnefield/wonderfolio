import React from "react";
import githubIcon from "../../assets/icons/logo-github.svg";
import linkedInIcon from "../../assets/icons/logo-linkedin.svg";
import emailIcon from "../../assets/icons/mail-outline.svg";

function Footer() {
  return (
    <div className="footer">
      <ul className="footer-list">
        <li>
          <div class="icon-container">
            <a
              className="icon-anchor"
              href="https://github.com/petehodnefield"
              target="_blank"
            >
              <img src={githubIcon} className="icon" />
            </a>
          </div>
        </li>
        <li>
          <div class="icon-container">
            <a
              className="icon-anchor"
              href="https://www.linkedin.com/in/petehodnefield/"
              target="_blank"
            >
              <img src={linkedInIcon} className="icon" />
            </a>
          </div>
        </li>
        <li>
          <div class="icon-container ">
            <a className="icon-anchor" href="mailto:pete.hod1@gmail.com">
              <img src={emailIcon} className="icon " />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
