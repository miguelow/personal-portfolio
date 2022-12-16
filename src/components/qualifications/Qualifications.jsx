import React, { useState } from "react";
import "./Qualifications.css";

function Qualifications() {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }
  return (
    <section className="qualifications section" id="qualifications">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            {/* -------------------------------- */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Ironhack</h3>
                <span className="qualification__subtitle">
                  FullStack web development Bootcamp
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* -------------------------------- */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
                <span className="qualification__rounder"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Polytechnic University of Madrid
                </h3>
                <span className="qualification__subtitle">
                  Computer Engineering
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2019 - 2021 Dropped out after second year
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            {/* -------------------------------- */}
            
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Frontend Developer</h3>
                <span className="qualification__subtitle">
                  Verisure
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>Sep 2022 - Currently
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* -------------------------------- */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
                <span className="qualification__rounder"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                Jr Frontend Developer
                </h3>
                <span className="qualification__subtitle">
                  Talenthackers
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>Jan 2022 - Sep 2022
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div class="shape-blob"></div>
        <div class="shape-blob one"></div>
        <div class="shape-blob two"></div>
    </section>
    
    
  );
}

export default Qualifications;
