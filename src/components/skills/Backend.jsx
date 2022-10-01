import React from "react";

function Backend() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Skills</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxl-nodejs"></i>
            <div>
              <h3 className="skills__name">Node.js</h3>
              <span className="skills__level">Medium</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bxl-mongodb"></i>
            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Medium</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Express.js</h3>
              <span className="skills__level">Novice</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">API Rest</h3>
              <span className="skills__level">Novice</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Backend;
