import React from 'react'
import resume from '../../assets/resume/PeteHodnefieldResume.pdf'

function Resume() {
    const frontEndProficiencies = [
        {skill: "HTML"},
        {skill: "CSS"},
        {skill: "Javascript"},
        {skill: "React"},
        {skill: "JQuery"},
        {skill: "Bootstrap"},
        {skill: "Responsive Design"},
    ]
    
    const backEndProficiences = [
        {skill: "Node"},
        {skill: "Express"},
        {skill: "APIs"},
        {skill: "MongoDb"},
        {skill: "MYSQL, Sequelize"},
    ]

    return (
        <div>
            <h2 className='section-header'>Resume</h2>
            <div className='proficiencies-container'>
                <h3 className='proficiencies-header'>Front-End Proficiences</h3>
                <ul className='proficiencies-list'>
                    {frontEndProficiencies.map(frontEnd => (
                        <li className='proficiencies-list-item'>{frontEnd.skill}</li>
                    ))}
                </ul>
            </div>
            <div className='proficiencies-container'>
                <h3 className='proficiencies-header'>Back-End Proficiences</h3>
                <ul className='proficiencies-list'>
                    {backEndProficiences.map(backEnd => (
                        <li className='proficiencies-list-item'>{backEnd.skill}</li>
                    ))}
                </ul>
            </div>
            <a className='download-btn' href={resume} download>Download my resume</a>

        </div>
    )
}

export default Resume