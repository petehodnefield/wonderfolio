import './App.css';
import './styles.css'
import React, {useState} from 'react'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Project from '../src/components/Project'
import Contact from '../src/components/Contact'
import Resume from '../src/components/Resume'
import About from '../src/components/About'

function App() {
  const [categories] = useState([
    {name: 'Portfolio'},
    {name: 'About Me'},
    {name: 'Resume'},
    {name: 'Contact'},

  ])

  // const [contactSelected, setContactSelected] = useState(false)
  // const [resumeSelected, setResumeSelected] = useState(false)
  // const [aboutSelected, setAboutSelected] = useState(false)
  const [currentCategory, setCurrentCategory] = useState(categories[0])

  function renderComponent() {
    if(currentCategory.name === "Portfolio") {
      return <Project></Project>
    } 
    else if(currentCategory.name === "About Me") {
      return <About></About>
    }
    else if(currentCategory.name === "Resume") {
      return <Resume></Resume>
    }
    else if(currentCategory.name === "Contact") {
      return <Contact></Contact>
    }

  }

  return (
    <div>
      <header>
        <Header
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        >
        </Header>
      </header>
      <main>
        {renderComponent()}
        <Footer></Footer>
      </main> 
    </div>
    
  );
}

export default App;
