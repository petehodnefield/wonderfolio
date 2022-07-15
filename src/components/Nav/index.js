import React, {useEffect} from 'react'

function Nav(props) {
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

    useEffect(() => {
        document.title = currentCategory.name
    }, [currentCategory]) 
    return(
        <ul className='nav-list'>
            {/* <li className={`mx-2 nav-list-item ${contactSelected && 'Snav-active'}`}>
                <span className='nav-list-item-span' onClick={() => setContactSelected(true)}>Contact</span>
            </li>
            <li className={`mx-2 nav-list-item ${resumeSelected && 'Snav-active'}`}>
                <span className='nav-list-item-span' onClick={() => setResumeSelected(true)}>Resume</span>
            </li> */}
            {categories.map((category) => (
                    <li className={`mx-1 nav-list-item S${
                        currentCategory.name === category.name && !contactSelected && 'nav-active' }`}
                        key={category.name} >
                        <span className='nav-list-item-span' onClick={() => {
                            setCurrentCategory(category)
                            setContactSelected(false)}}>
                            {category.name}
                        </span>
                    </li>
                ))}
        </ul>
    )
}


export default Nav