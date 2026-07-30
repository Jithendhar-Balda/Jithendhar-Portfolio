import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <h2>Jithendhar</h2>

            <p>
              Full Stack Developer focused on building scalable, modern and
              user-friendly web applications.
            </p>
          </div>

          <div className="footer__links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer__socials">
            <a href="https://github.com/Jithendhar-Balda/" target="_blank" rel="noreferrer" > GitHub
            </a>

            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" >
              LinkedIn
            </a>

            <a href="mailto:baldajithendhar@gmail.com">
              Email
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {currentYear} Jithendhar. All Rights Reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;