import React, {useEffect} from 'react'

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props

    useEffect(() => {
        document.title = currentCategory.name
    }, [currentCategory]) 

    return(
        <ul className='nav-list'>
            {categories.map((category) => (
                    <li className={`mx-1 nav-list-item S${
                        currentCategory.name === category.name  && 'nav-active' }`}
                        key={category.name} >
                        <span className='nav-list-item-span' onClick={() => {
                            setCurrentCategory(category)}}>
                            {category.name}
                            {console.log(currentCategory.name)}
                        </span>
                    </li>
                ))}
        </ul>
    )
}


export default Nav