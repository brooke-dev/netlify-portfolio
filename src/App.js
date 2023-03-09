import './App.css';
import { useState } from "react";
import React from 'react'
import { Element } from 'react-scroll';


// Components
import NavBar from './NavBarFolder/NavBar'
import Home from './NavBarFolder/Home'
import About from './NavBarFolder/About'
import Projects from './NavBarFolder/Projects'
import Connect from './NavBarFolder/Connect'



function App() {
  const [isDarkMode,setIsDarkMode] = useState(false)


  return (
    // <div className="App">
      <div className={isDarkMode ? 'App dark-mode' : 'App light-mode'}>
      <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Element name="home">
          <Home />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="connect">
          <Connect />
        </Element>
    </div>
   
  );
}

export default App;