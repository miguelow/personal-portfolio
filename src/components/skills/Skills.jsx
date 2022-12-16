import React from "react";
import "./Skills.css"
import Frotend from "./Frotend";
import Backend from "./Backend";


function Skills() {
    return (
      <section className="skills section" id="skills">
        <div class="shape-blob"></div>
        <div class="blob-c">
	      <div class="shape-blob"></div>      
        <div class="shape-blob six"></div>
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
