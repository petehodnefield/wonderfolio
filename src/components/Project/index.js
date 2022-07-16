import React, {useState} from 'react'
import weather from '../../assets/images/weather-img.jpg'
import unleashed from '../../assets/images/unleashed.jpg'
import nba from '../../assets/images/nba-img.jpg'
import beatStore from '../../assets/images/beat-store.jpg'
import noteTaker from '../../assets/images/note-taker.jpg'
import aboutMonger from '../../assets/images/about-monger.jpg'

function Project() {
    const [projects] = useState([
        {
            name: "Weather Dashboard",
            image: weather,
            github: "https://github.com/petehodnefield/weather-dashboard",
            liveDeployment: "https://github.com/petehodnefield/weather-dashboard",
            alt: "My project Weather Dashboard"
        },
        {
            name: "NBA Song of the Year",
            image: nba,
            github: "https://github.com/Undisputed06/nba-song-of-the-year",
            liveDeployment: "https://undisputed06.github.io/nba-song-of-the-year/",
            alt: "My project NBA Song of the Year"
        },
        {
            name: "Unleashed",
            image: unleashed,
            github: "https://github.com/MegGedde/Unleashed",
            liveDeployment: "https://unleashed-pets-finder.herokuapp.com/",
            alt: "My project Unleashed Pets Finder"
        },
        {
            name: "All About Monger",
            image: aboutMonger,
            github: "https://github.com/petehodnefield/all-about-monger",
            liveDeployment: "https://all-about-monger.herokuapp.com/",
            alt: "My project All About Monger"
        },
        {
            name: "Producer Store",
            image: beatStore,
            github: "https://github.com/petehodnefield/beat-store",
            liveDeployment: "https://petehodnefield.github.io/beat-store/",
            alt: "My project Producer Store"
        },
        {
            name: "Monga Note Taker",
            image: noteTaker,
            github: "https://github.com/petehodnefield/note-taker",
            liveDeployment: "https://monga-note-taker.herokuapp.com/",
            alt: "My project Monga Note Taker"
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
                    alt={project.alt}
                    className='project-img'
                    key={project.alt}
                />
                <a className='project-links'key={project.github} href={project.github} rel='noreferrer' target='_blank'>GitHub</a>
                <a className='project-links' key={project.liveDeployment} href={project.liveDeployment} rel='noreferrer' target='_blank'>Deployment</a>
                </div>
              ))}
            </div>
        </div>
    )
}

export default Project