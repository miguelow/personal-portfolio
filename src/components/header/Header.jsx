import React, { useState } from "react";
import "./Header.css";
import { motion } from 'framer-motion'

const Header = () => {
  const [toggle, setToggle] = useState(false);

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("show-header");
    else header.classList.remove("show-header");
  });

  const headerItems = [
    {name: 'Home', href: '#home'},
    {name: 'About', href: '#about'},
    {name: 'Skills', href: '#skills'},
  
  ]

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Miguel
        </a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
              {headerItems.map((item) => (
                <li className="nav__item">
                  <a href={item.href} className="nav__link">
                      {item.name}
                  </a>
                </li>
              ))}
          
            <li>
              <i
                className="uil uil-times nav__close"
                onClick={() => setToggle(!toggle)}
              ></i>
            </li>
          </ul>

        </div>
        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
