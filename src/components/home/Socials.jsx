
import React from 'react'
import { motion } from 'framer-motion'

function Socials() {
  return (
    <motion.div className="home__social" initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 50}} transition={{ease: "easeInOut", duration:1,delay:0.4}}>
      <a
        rel="noreferrer"
        href="https://www.linkedin.com/in/miguel-ortega-ward/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-linkedin"></i>
      </a>
      <a
        rel="noreferrer"
        href="https://github.com/miguelow"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-github"></i>
      </a>
    </motion.div>
  );
}

export default Socials