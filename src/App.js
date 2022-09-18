import "./App.css";
import "./styles.css";
import React, { useState } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Project from "../src/components/Project";
import About from "../src/components/About";
import Skills from "../src/components/Skills";

function App() {
  return (
    <div className="master-container">
      <header>
        <Header></Header>
      </header>
      <main>
        <div className="section-container">
          {" "}
          <Project></Project>
          <About></About>
        </div>
        <Skills></Skills>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
