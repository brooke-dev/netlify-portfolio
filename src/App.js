import './App.css';
import { useState } from "react";
import React from 'react'
import { Element } from 'react-scroll';


// Components
import NavBar from './NavBarFolder/NavBar'
import Home from './NavBarFolder/Home'
import About from './NavBarFolder/About'
import Skills from './NavBarFolder/Skills'
import Projects from './NavBarFolder/Projects'
import Connect from './NavBarFolder/Connect'
import MapForm from './LeafletMap/MapForm'
// import LeafletMap from './LeafletMap/LeafletMap'
import Footer from './Footer'
// import ArchivedProjects from './ArchivedProjects/ArchivedProjects'



function App() {
  const [isDarkMode,setIsDarkMode] = useState(false)
  // const [isBrainMode,setIsBrainMode] = useState(false)

  return (
    // <div className="App">
      <div className={isDarkMode ? 'App dark-mode' : 'App light-mode'}>
      <NavBar 
        isDarkMode = {isDarkMode} 
        setIsDarkMode = {setIsDarkMode}    
      />
        <Element name="home">
          <Home />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="connect">
          <Connect />
        </Element>
        <Element name="map-element">
          <MapForm />
        </Element>
        <Footer />
    </div>
   
  );
}

export default App;