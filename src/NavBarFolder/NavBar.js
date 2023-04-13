import React, {useState} from 'react';
import './NavBar.css'; // Import CSS styles for the component
// import { NavLink } from 'react-router-dom';
// import darkmode from './iconImages/darkmode.png'
// import lightmode from './iconImages/lightmode.png'
// import brain from './iconImages/brain.png'
import { Link } from 'react-scroll';


function NavBar({isDarkMode, setIsDarkMode}) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div>
       <header className="navbar">
            <div className="left">Brooke Ross</div>
            <nav className="right">
              <Link to="home" smooth={true} duration={500}>Home</Link>
              <Link to="about" smooth={true} duration={500}>About</Link>
              <Link to="skills" smooth={true} duration={500}>Skills</Link>
              <Link to="projects" smooth={true} duration={500}>Projects</Link>
              <Link to="connect" smooth={true} duration={500}>Connect with Me!</Link>
              <Link to="map-element" smooth={true} duration={500}>Make your Mark</Link>
            </nav>
            <div className="hamburger" onClick={toggleMobileNav}>
              <div className={`bar1 ${isOpen ? 'animateBar1' : ''}`}></div>
              <div className={`bar2 ${isOpen ? 'animateBar2' : ''}`}></div>
              <div className={`bar3 ${isOpen ? 'animateBar3' : ''}`}></div>
            </div>
        </header>
        <nav className={`mobileNav ${isOpen ? 'openDrawer' : ''}`}>
          <Link to="home" smooth={true} duration={500}>Home</Link>
          <Link to="about" smooth={true} duration={500}>About</Link>
          <Link to="skills" smooth={true} duration={500}>Skills</Link>
          <Link to="projects" smooth={true} duration={500}>Projects</Link>
          <Link to="connect" smooth={true} duration={500}>Connect with Me!</Link>
          <Link to="map-element" smooth={true} duration={500}>Make your Mark</Link>
        </nav>
    </div>
  )
}

export default NavBar;


