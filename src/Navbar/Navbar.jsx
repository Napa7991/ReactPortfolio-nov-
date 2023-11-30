import React, { useState } from "react";
import "./NavStyle.css";
import { FiMenu, FiX } from "react-icons/fi";


const Navbar = ({scrollToSection,aboutRef,skillRef,projectRef,contactRef,homeRef}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="App">
        <nav>
          <div className="logo">Tailang Napa</div>
          <div className="hamburgerIcon" onClick={toggleMenu}>
            {isMenuOpen ? <FiX className="close-icon"/> : <FiMenu />}
          </div>
          <ul className={`nav-links${isMenuOpen ? " open" : ""}`}>
          <li
              className="nav-item"
              onClick={() => {
                scrollToSection(homeRef);
              }}
            >
              Home
            </li>
            <li
              className="nav-item"
              onClick={() => {
                scrollToSection(projectRef);
              }}
            >
              Projects
            </li>
            <li
              className="nav-item"
              onClick={() => {
                scrollToSection(skillRef);
              }}
            >
              Skills
            </li>
            <li
              className="nav-item"
              onClick={() => {
                scrollToSection(aboutRef);
              }}
            >
              About
            </li>
            <li
              className="nav-item"
              onClick={() => {
                scrollToSection(contactRef);
              }}
            >
              Contact
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
