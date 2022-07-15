import React, {useState} from 'react'
import Nav from '../Nav'

function Header(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected,
        resumeSelected,
        setResumeSelected,
        aboutSelected,
        setAboutSelected
      } = props

    return (
        <div className='header'>
            <h1>Pete Hodnefield</h1>
            <Nav          
                categories={categories}
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
                resumeSelected={resumeSelected}
                setResumeSelected={setResumeSelected}
            ></Nav>
        </div>

    )
}


export default Header