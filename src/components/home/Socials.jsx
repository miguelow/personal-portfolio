
import React from 'react'
import { motion } from 'framer-motion'

function Socials() {
  return (
    <div className="home__social">
      <a
        rel="noreferrer"
        href="https://www.linkedin.com/in/miguel-ortega-ward/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a
        rel="noreferrer"
        href="https://github.com/miguelow"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github"></i>
      </a>
    </div>
  );
}

export default Socials