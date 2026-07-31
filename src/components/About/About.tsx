import "./About.css";

import aboutImage from "../../assets/images/profile/about.jpg";

function About() {
  return (
    <section className="about" id="about" >
      <div className="about__container">
        <div className="about__content">
          <span className="about__tag">
            ABOUT ME
          </span>

          <h2 className="about__title">
            Engineering with
            <br />
            precision, designing
            <br />
            with intent.
          </h2>

          <p className="about__description">
            I'm a Computer Science student and aspiring Software Engineer with a
            passion for developing modern, responsive, and user-centric
            applications. My primary expertise includes React.js, TypeScript,
            JavaScript, CSS3, HTML5, and Python, with a strong focus on building
            scalable, maintainable, and high-performance software.
          </p>

          <p className="about__description">
            I enjoy transforming ideas into practical solutions by combining
            clean architecture with intuitive user interfaces. Through hands-on
            projects—including a comprehensive engineering college website and
            Python-based applications—I've strengthened my skills in frontend
            development, component-based design, responsive web development, and
            problem solving.
          </p>

          <p className="about__description">
            I believe in continuous learning and consistently challenge myself
            by exploring new technologies, improving development practices, and
            working on real-world projects. My goal is to build software that
            delivers meaningful value while growing into a well-rounded software
            engineer capable of contributing to innovative and impactful teams.
          </p>
        </div>

        <div className="about__image-wrapper">
          <img
            src={aboutImage}
            alt="About"
            className="about__image"
          />
        </div>
      </div>
    </section>
  );
}

export default About;