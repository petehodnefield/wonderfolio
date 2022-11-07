import React, { useState } from "react";
import weather from "../../assets/images/weather-img.jpg";
import unleashed from "../../assets/images/unleashed.jpg";
import nba from "../../assets/images/nba-img.jpg";
import producerStore from "../../assets/images/producer-img.jpg";
import dei from "../../assets/images/dei-img.jpg";
import aboutMonger from "../../assets/images/about-monger.jpg";

import weatherDemo from "../../assets/videos/weather-demo.mp4";
import meloroids from "../../assets/images/meloroids-img.jpg";
import Modal from "../Modal";

function Project() {
  const [projects] = useState([
    {
      name: "Weather Dashboard",
      image: weather,
      github: "https://github.com/petehodnefield/weather-dashboard",
      liveDeployment: "https://github.com/petehodnefield/weather-dashboard",
      alt: "My project Weather Dashboard",
      technology: ["JavaScript", "CSS", "HTML", "OpenWeather API"],
      description:
        "Weather Dashboard is a forecast app that allows the user to enter a city. Upon submission you are shown the current forecast, as well as the five-day forecast for that city. Weather Dashboard also remembers previous searches.",
    },

    {
      name: "Unleashed",
      image: unleashed,
      github: "https://github.com/MegGedde/Unleashed",
      liveDeployment: "https://unleashed-pets-finder.herokuapp.com/",
      alt: "My project Unleashed Pets Finder",
      technology: [
        "HTML",
        "Bulma",
        "Node.js",
        "AWS S3",
        "Express.js",
        "Handlebars",
      ],
      description:
        "Unleashed is a place to connect and see if someone has seen your lost pet. Or if you have found an “unleashed” animal, you can look to this site to see if you can contact their owner.",
    },
    {
      name: "DEI Calendar",
      image: dei,
      github: "https://github.com/petehodnefield/project-three",
      liveDeployment: "https://serene-mesa-60189.herokuapp.com/",
      alt: "My project DEI Calendar",
      technology: ["CSS", "React.js", "Express.js", "Mongoose", "Node.js"],
      description:
        "DEI Calendar is a place for employees to learn about upcoming cultural festivals and holidays to enable them to connect with each other to plan for celebrations. Employees / Users will be able to express their interest in participating in an event or celebration.",
    },
    {
      name: "NBA Song of the Year",
      image: nba,
      github: "https://github.com/Undisputed06/nba-song-of-the-year",
      liveDeployment: "https://undisputed06.github.io/nba-song-of-the-year/",
      alt: "My project NBA Song of the Year",
      technology: [
        "JavaScript",
        "Bulma",
        "HTML",
        "YouTube API",
        "Ball Don't Lie API",
      ],
      description:
        "NBA Song of the Year allows the user to input a current NBA player and immediately get player stats such as their jersey number, current team, and draft year. They will also receive a YouTube video containing the most popular songs of that player's draft year.",
    },
    {
      name: "Producerfolio ",
      image: producerStore,
      github: "https://github.com/petehodnefield/beat-store-react",
      liveDeployment: "https://petehodnefield.github.io/beat-store-react/",
      alt: "My project Producer Store",
      technology: ["CSS", "React.js", "Javasript", "Email.JS"],
      description:
        "This is the place where producers can access my royalty-free guitar loops. They can also request custom guitar work if they have a big enough audience.",
    },
    {
      name: "Meloroids",
      image: meloroids,
      github: "https://github.com/petehodnefield/meloroids",
      // liveDeployment: "https://monga-note-taker.herokuapp.com/",
      alt: "My project Monga Note Taker",
      technology: [
        "CSS",
        "React.js",
        "Node.js",
        "Express.js",
        "GraphQL",
        "Mongoose",
      ],
      description:
        "Meloroids will be a training service for producers looking to get better at creating melodies. It will have a database which has analyzed the most popular chord progressions used by major artists.",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const toggleModal = (image) => {
    setCurrentPhoto({ ...image });
    setIsModalOpen(!isModalOpen);
  };
  console.log("currentPhoto", currentPhoto);

  return (
    <div className="wrapper">
      {" "}
      {isModalOpen && (
        <Modal
          currentPhoto={currentPhoto}
          onClose={toggleModal}
          isModalOpen={isModalOpen}
        />
      )}
      <div className="grid-container">
        <h2 className="section-header "> Projects</h2>
        <div className="grid">
          {projects.map((project) => (
            <div
              className="project-container"
              onClick={() => toggleModal(project)}
              key={project.name}
            >
              <img src={project.image} className="project-background" />{" "}
              <div className="project-contents">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="project-img"
                />

                <h3 className="project-title">{project.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
