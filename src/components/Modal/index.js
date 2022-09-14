import React from "react";

function Modal({ onClose, currentPhoto }) {
  console.log(currentPhoto);
  const { name, image, github, liveDeployment, technology } = currentPhoto;
  console.log("name", name);
  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img src={image} className="project-img" alt="current category" />
        <div className="list">
          <h3>Technology Used:</h3>
          {technology.map((project) => (
            <li>{project}</li>
          ))}
        </div>
        <div className="row">
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
        <button onClick={onClose} type="btn" className="btn close-btn">
          Close this modal
        </button>
      </div>
    </div>
  );
}

export default Modal;
