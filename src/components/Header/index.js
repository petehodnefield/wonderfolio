import React, {useState} from 'react'
import Nav from '../Nav'

function Header() {
    const [categories] = useState([
        {name: 'About Me'},
        {name: 'Portfolio'},
        {name: 'Contact'},
        {name: 'Resume'},
    ])
    const [contactSelected, setContactSelected] = useState(false)

    const [currentCategory, setCurrentCategory] = useState(categories[0])
    return (
        <div className='header'>
            <h1>Pete Hodnefield</h1>
            <Nav          
                categories={categories}
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            ></Nav>
        </div>

    )
}


export default Header