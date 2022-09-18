import React, { useState } from "react";
import weather from "../../assets/images/weather-img.jpg";
import unleashed from "../../assets/images/unleashed.jpg";
import nba from "../../assets/images/nba-img.jpg";
import beatStore from "../../assets/images/beat-store.jpg";
import noteTaker from "../../assets/images/note-taker.jpg";
import aboutMonger from "../../assets/images/about-monger.jpg";
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
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
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
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
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
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      name: "All About Monger",
      image: aboutMonger,
      github: "https://github.com/petehodnefield/all-about-monger",
      liveDeployment: "https://all-about-monger.herokuapp.com/",
      alt: "My project All About Monger",
      technology: ["HTML"],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      name: "Producer Store",
      image: beatStore,
      github: "https://github.com/petehodnefield/beat-store",
      liveDeployment: "https://petehodnefield.github.io/beat-store/",
      alt: "My project Producer Store",
      technology: ["HTML", "JavasSript"],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      name: "Monga Note Taker",
      image: noteTaker,
      github: "https://github.com/petehodnefield/note-taker",
      liveDeployment: "https://monga-note-taker.herokuapp.com/",
      alt: "My project Monga Note Taker",
      technology: ["Node.js", "Express.js"],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
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
    <div className="grid-container">
      <h2 className="section-header "> Projects</h2>
      <div className="grid">
        {isModalOpen && (
          <Modal
            currentPhoto={currentPhoto}
            onClose={toggleModal}
            isModalOpen={isModalOpen}
          />
        )}

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
  );
}

export default Project;
