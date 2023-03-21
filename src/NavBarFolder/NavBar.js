import React from 'react';
import './NavBar.css'; // Import CSS styles for the component
// import { NavLink } from 'react-router-dom';
import darkmode from './iconImages/darkmode.png'
import lightmode from './iconImages/lightmode.png'
import brain from './iconImages/brain.png'
import { Link } from 'react-scroll';
import Modal from '../Modal'

function NavBar({isDarkMode, setIsDarkMode, isBrainMode, setIsBrainMode}) {

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  return (
    <nav className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <button onClick={toggleDarkMode}>
        <img src={isDarkMode ? lightmode : darkmode} alt="Toggle dark mode" />
      </button>

      <button className={isBrainMode ? 'brain-button rotate' : 'brain-button'} onClick={() => setIsBrainMode(!isBrainMode)}>
        <img src={brain} alt="Brain icon" />
      </button>
      
      <div className='nav-right'>
        <Link to="home" smooth={true} duration={500}>Home</Link>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="connect" smooth={true} duration={500}>Connect with Me!</Link>
      </div>
     
    </nav>
  );
}

export default NavBar;


