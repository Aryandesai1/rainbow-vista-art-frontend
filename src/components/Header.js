import React from 'react';
import '../styles.css';
import logo from '../assets/images/RVA_Logo.png';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Rainbow Vista Art" className="logo" />
      <nav>
        <a href="#about-us">About Us</a>
        <a href="#upcoming-shows">Shows</a>
        <a href="#artists">Artists</a>
        <a href="#contact-us">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
