import React from 'react';
import { FaGithub, FaMedium, FaLinkedin } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <a href="https://www.linkedin.com/in/brooke-ross-se/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/brookeross99" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://medium.com/@brooke.ross2800" target="_blank" rel="noopener noreferrer"><FaMedium /></a>
    </div>
  );
};

export default Footer;
