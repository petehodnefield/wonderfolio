import "./App.css";
import "./styles.css";
import React, { useState } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Project from "../src/components/Project";
import Contact from "../src/components/Contact";
import Resume from "../src/components/Resume";
import About from "../src/components/About";

function App() {
  const [categories] = useState([
    { name: "Portfolio" },
    { name: "About Me" },
    { name: "Resume" },
    { name: "Contact" },
  ]);

  // const [contactSelected, setContactSelected] = useState(false)
  // const [resumeSelected, setResumeSelected] = useState(false)
  // const [aboutSelected, setAboutSelected] = useState(false)
  const [currentCategory, setCurrentCategory] = useState(categories[1]);

  return (
    <div className="master-container">
      <header>
        <Header
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        ></Header>
      </header>
      <main>
        <Project></Project>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
