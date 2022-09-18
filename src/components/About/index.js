import React from "react";
import pete from "../../assets/images/headshot.jpg";
import resume from "../../assets/resume/PeteHodnefieldResume.pdf";

function About() {
  return (
    <div className="about-container">
      <div>
        <h2 className="section-header ">About Me</h2>
        <div class="about-contents">
          <img
            src={pete}
            alt="A photo of Pete Hodnefield"
            className="pete-img"
          />
          <p className="about-text">
            Front-end web developer utilizing a background in Audio Engineering
            and Psychology to help build practical applications and services for
            musicians. Currently earning a certificate in full stack web
            development through the University of Minnesota coding bootcamp.
            Skills in HTML, CSS, & JavaScript, as well as extensive knowledge in
            the Digital Audio Workstations Ableton Live and FL Studio.
            Previously studied Audio Engineering at the prestigious Berklee
            School of Music in Boston and Psychology at the University of
            Minnesota - Twin Cities. A chronic learner who is passionate about
            teaching others along the way.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
