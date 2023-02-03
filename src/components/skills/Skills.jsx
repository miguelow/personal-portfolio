import React from "react";
import "./Skills.css"
import Frotend from "./Frotend";
import Backend from "./Backend";


function Skills() {
    return (
      <section className="skills section" id="skills">
        <div className="blob-c">
	      <div className="shape-blob"></div>      
        <div className="shape-blob six"></div>
	      </div>
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
          <Frotend />
          <Backend />
        </div>
      </section>
    );
}

export default Skills;
