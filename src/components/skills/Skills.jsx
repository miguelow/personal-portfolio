import React from "react";
import "./Skills.css"

function Skills() {

  const frontendSkills = [
    {name: 'React.js', icon: 'bx bxl-react'},
    {name: 'Vue.js', icon: 'bx bxl-vuejs'},
    {name: 'Quasar', icon: 'bx bx-badge-check'},
    {name: 'Tailwind', icon: 'bx  bx-badge-check'},
    {name: 'Figma', icon: 'bx bxl-figma'},
    {name: 'Spline', icon: 'bx  bx-badge-check'},
  ]

  const backendSkills = [
    {name: 'Java', icon: 'bx bxl-java'},
    {name: 'Node.js', icon: 'bx bxl-nodejs'},
    {name: 'Express.js', icon: 'bx bx-badge-check'},
    {name: 'SQL', icon: 'bx bx-badge-check'},
    {name: 'MongoDB', icon: 'bx bxl-mongodb'},
    {name: 'Liferay', icon: 'bx bx-badge-check'},
  ]

    return (
      <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
          <div className="skills__content">
            <h3 className="skills__title">Frontend Skills</h3>
              <div className="skills__box">
                <div className="skills__group">
                  {frontendSkills.map((skill) => (
                    <div className="skills__data">
                      <i className={skill.icon}></i>
                      <h3 className="skills__name">{skill.name}</h3>
                    </div>
                  ))}
                </div>
              </div>
          </div>

          <div className="skills__content">
            <h3 className="skills__title">Backend Skills</h3>
              <div className="skills__box">
                <div className="skills__group">
                  {backendSkills.map((skill) => (
                    <div className="skills__data">
                      <i className={skill.icon}></i>
                      <h3 className="skills__name">{skill.name}</h3>
                    </div>
                  ))}
                </div>
              </div>
          </div>
        </div>
      </section>
    );
}

export default Skills;
