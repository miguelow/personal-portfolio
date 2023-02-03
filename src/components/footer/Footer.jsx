import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
          <li>
            <a href="#qualifications" className="footer__link">
              Qualifications
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/miguel-ortega-ward/"
            className="home__social-icon"
            target="_blank"
          >
            <i className="uil uil-linkedin"></i>
          </a>
          <a
            href="https://github.com/miguelow"
            className="home__social-icon"
            target="_blank"
          >
            <i className="uil uil-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer