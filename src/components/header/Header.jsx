import React, { useState } from "react";
import "./Header.css";
import { motion } from 'framer-motion'
const Header = () => {
  // Toggle menu
  const [Toggle, showMenu] = useState(false);
  // Change background
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("show-header");
    else header.classList.remove("show-header");
  });

  return (
    <motion.header className="header" initial={{opacity: 0, y: -180}} animate={{opacity: 1, y: 0}} transition={{ease: "easeInOut", duration:1,delay:0.4}}>
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Miguel
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="uil uil-estate nav__icon"></i>
                Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file nav__icon"></i>Skills
              </a>
            </li>

            {/* <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i>Services
              </a>
            </li>  */}

            {/* <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>Portfolio
              </a>
            </li> */}

            {/* <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li> */}

            <li>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
            </li>
          </ul>

        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
