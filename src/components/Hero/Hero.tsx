import "./Hero.css";

import profileImage from "../../assets/images/profile/profile.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__container">
        <img
          src={profileImage}
          alt="Jithendhar"
          className="hero__image"
        />

        <h1 className="hero__title">
          Building <span>Scalable Web</span>
          <br />
          <span>Experiences</span> with Python
        </h1>

        <p className="hero__description">
          Full Stack Developer specializing in high-performance backends and
          modern interfaces. From complex logic to scalable systems.
          Engineering with precision, designing with intent.
        </p>

        <div className="hero__buttons">
          <a
            href="https://github.com/Jithendhar-Balda"
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="secondary-btn"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;