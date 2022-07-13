import React, {useState} from 'react'
import weather from '../../assets/images/weather-img.jpg'
import unleashed from '../../assets/images/unleashed.jpg'
import nba from '../../assets/images/nba-img.jpg'
import beatStore from '../../assets/images/beat-store.jpg'
import loops from '../../assets/images/loops-img.jpg'

function Project() {
    const [projects] = useState([
        {
            name: "Weather Dashboard",
            image: weather,
            github: "https://github.com/petehodnefield/weather-dashboard",
            liveDeployment: "https://github.com/petehodnefield/weather-dashboard",
        },
        {
            name: "NBA Song of the Year",
            image: nba,
            github: "https://github.com/Undisputed06/nba-song-of-the-year",
            liveDeployment: "https://undisputed06.github.io/nba-song-of-the-year/",
        },
        {
            name: "Unleashed",
            image: unleashed,
            github: "https://github.com/MegGedde/Unleashed",
            liveDeployment: "https://unleashed-pets-finder.herokuapp.com/",
        },
        {
            name: "All About Monger",
            image: loops,
            github: "https://github.com/petehodnefield/all-about-monger",
            liveDeployment: "https://all-about-monger.herokuapp.com/",
        },
        {
            name: "Producer Store",
            image: beatStore,
            github: "https://github.com/petehodnefield/beat-store",
            liveDeployment: "https://petehodnefield.github.io/beat-store/",
        },
        {
            name: "Monga Note Taker",
            image: beatStore,
            github: "https://github.com/petehodnefield/note-taker",
            liveDeployment: "https://monga-note-taker.herokuapp.com/",
        },
    ])
    return (
        <div className='grid-container'>
            <h2 className='section-header'>My Projects</h2>
            <div className='grid'>
              {projects.map(project => (
                <div className='project-container'>
                <h3 className='project-title'>{project.name}</h3>
                <img
                    src={project.image}
                    alt="a photo of yaya"
                    className='project-img'
                />
                <a className='project-links' href={project.github} target='_blank'>GitHub</a>
                <a className='project-links' href={project.liveDeployment} target='_blank'>Deployment</a>
                </div>
              ))}
            </div>
        </div>
    )
}

export default Project