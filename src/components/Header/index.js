import React, {useState} from 'react'
import Nav from '../Nav'

function Header(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
      } = props

    return (
        <div className='header'>
            <h1>Pete Hodnefield</h1>
            <Nav          
                categories={categories}
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory} 
            ></Nav>
        </div>

    )
}


export default Header