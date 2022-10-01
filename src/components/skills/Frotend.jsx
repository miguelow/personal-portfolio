import React from "react";

function Frotend() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Skills</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxl-react"></i>
            <div>
              <h3 className="skills__name">React.js</h3>
              <span className="skills__level">Medium</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bxl-vuejs"></i>
            <div>
              <h3 className="skills__name">Vue.js</h3>
              <span className="skills__level">Medium</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bxl-sass"></i>
            <div>
              <h3 className="skills__name">SASS (BEM)</h3>
              <span className="skills__level">Medium</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxl-figma"></i>
            <div>
              <h3 className="skills__name">Figma</h3>
              <span className="skills__level">Novice</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Boostrap</h3>
              <span className="skills__level">Medium</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Quasar</h3>
              <span className="skills__level">Medium</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frotend;
