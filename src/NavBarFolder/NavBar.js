import React, {useState} from 'react';
import './NavBar.css'; // Import CSS styles for the component
// import { NavLink } from 'react-router-dom';
// import darkmode from './iconImages/darkmode.png'
// import lightmode from './iconImages/lightmode.png'
// import brain from './iconImages/brain.png'
import { Link } from 'react-scroll';


function NavBar({isDarkMode, setIsDarkMode}) {
  // const hamburger = document.querySelector(".hamburger");
  // const bar1 = document.querySelector(".bar1");
  // const bar2 = document.querySelector(".bar2");
  // const bar3 = document.querySelector(".bar3");
  // const mobileNav = document.querySelector(".mobileNav");

  // if (hamburger) {
  //   hamburger.addEventListener("click", () => {
  //     bar1.classList.toggle("animateBar1");
  //     bar2.classList.toggle("animateBar2");
  //     bar3.classList.toggle("animateBar3");
  //     mobileNav.classList.toggle("openDrawer");
  //   });
  //   console.log("clicked")
  // }

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
        </nav>
    </div>
  )
}

export default NavBar;


