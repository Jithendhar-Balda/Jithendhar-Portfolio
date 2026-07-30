import "./Skills.css";

import {
  engineeringSkills,
  frameworks,
  coreSkills,
} from "../../data/skills";

function Skills() {
  return (
    <section
      className="skills"
      id="skills"
    >
      <div className="skills__container">
        <div className="skills__header">
          <span className="skills__tag">
            Expertise
          </span>

          <h2 className="skills__title">
            Technical Mastery &
            <br />
            <span>Architecture</span>
          </h2>

          <p className="skills__subtitle">
            A multidisciplinary approach to engineering, combining modern
            frontend development with scalable backend technologies to build
            efficient, responsive and production-ready applications.
          </p>
        </div>

        <div className="skills__grid">
          <div className="skills__card">
            <div className="skills__card-header">
              <span className="material-symbols-outlined">
                terminal
              </span>

              <h3>Engineering Skills</h3>
            </div>

            <p className="skills__card-text">
              Building fast, maintainable and scalable applications using modern
              web technologies and Python development.
            </p>

            <div className="skills__languages">
              {engineeringSkills.map((skill) => (
                <div
                  className="skills__language"
                  key={skill.id}
                >
                  {skill.icon && (
                    <span className="material-symbols-outlined">
                      {skill.icon}
                    </span>
                  )}

                  <h4>{skill.title}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="framework">
            <div className="framework__header">
              <h3>Frameworks & Tools</h3>

              <span className="material-symbols-outlined">
                layers
              </span>
            </div>

            <div className="framework__list">
              {frameworks.map((item) => (
                <span key={item.id}>
                  {item.name}
                </span>
              ))}
            </div>

            <p>
              Developing responsive user interfaces and robust backend
              applications using industry-standard technologies with clean
              architecture principles.
            </p>
          </div>
        </div>

        <div className="core-skills">
          <h3>
            <span className="material-symbols-outlined">
              verified
            </span>

            Core Skills
          </h3>

          <div className="core-skills__list">
            {coreSkills.map((skill) => (
              <div
                className="core-skills__item"
                key={skill.id}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;