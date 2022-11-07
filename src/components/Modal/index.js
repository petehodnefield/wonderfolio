import React from "react";

function Modal({ onClose, currentPhoto, isModalOpen }) {
  console.log(currentPhoto);
  const { name, image, github, liveDeployment, technology, description } =
    currentPhoto;
  console.log("name", name);
  return (
    <div
      className={
        isModalOpen ? `modalOpen modalBackdrop` : "modalClose modalBackdrop"
      }
    >
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img src={image} className="modal__img" alt="current category" />
        <p className="description-text">{description}</p>
        <div className="modal-wrapper">
          <div className="list">
            <h3 className="modal__subheader">Tech Used:</h3>
            <div className=" tech-grid">
              {technology.map((project) => (
                <li
                  className={`list-item ${
                    project === "HTML" ||
                    project === "CSS" ||
                    project === "JavaScript" ||
                    project === "Bulma" ||
                    project === "Handlebars"
                      ? "front-end-tech"
                      : "back-end-tech"
                  } `}
                >
                  {project}
                </li>
              ))}
            </div>
          </div>
          <div className="list">
            <h3 className="modal__subheader">Sources:</h3>
            <div className="links-wrapper full-width ">
              <a
                className="project-links"
                href={github}
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="project-links"
                href={liveDeployment}
                rel="noreferrer"
                target="_blank"
              >
                Deployment
              </a>
            </div>
          </div>
        </div>
        <button onClick={onClose} type="btn" className=" close-btn">
          ❌
        </button>
      </div>
    </div>
  );
}

export default Modal;
