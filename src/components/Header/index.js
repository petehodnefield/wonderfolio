import React, {useState} from 'react'
import Nav from '../Nav'
import Modal from '../Modal'
import hamburger from '../../assets/icons/hamburger.svg'

function Header(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
      } = props

      const [isModalOpen, setModalOpen] = useState(false)

      const toggleModal = () => {
        setModalOpen(!isModalOpen)
      }


    return (
        <div className='header'>
            {isModalOpen && <Modal onClose={toggleModal} />}
            <img 
            onClick={toggleModal}
                className='hamburger'
                src={hamburger}
                alt="hamburger menu icon"
            />
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