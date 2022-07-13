import React, {useState} from 'react'
import photo from '../../assets/images/weather-img.jpg'

function Project() {
    const [projects] = useState([
        {
            name: "Weather Dashboard",
            image: photo,
            github: "https://www.google.com",
            liveDeployment: "https://www.google.com",
        },
        {
            name: "NBA Song of the Year",
            image: photo,
            github: "https://www.google.com",
            liveDeployment: "https://www.google.com",
        },
        {
            name: "Unleashed",
            image: photo,
            github: "https://www.google.com",
            liveDeployment: "https://www.google.com",
        },
        {
            name: "Weather Dashboard",
            image: photo,
            github: "https://www.google.com",
            liveDeployment: "https://www.google.com",
        },
        {
            name: "NBA Song of the Year",
            image: photo,
            github: "https://www.google.com",
            liveDeployment: "https://www.google.com",
        },
        {
            name: "Unleashed",
            image: photo,
            github: "https://www.google.com",
            liveDeployment: "https://www.google.com",
        },
    ])
    return (
        <div className='grid'>
          {projects.map(project => (
            <div className='project-container'>
            <h1>{project.name}</h1>
            <img
                src={project.image} 
                alt="a photo of yaya"
                className='project-img'
            />
            <a href={project.github}>GitHub</a>
            <a href={project.liveDeployment}>Live Deployment</a>
            </div>
          ))}
        </div>
    )
}

export default Project