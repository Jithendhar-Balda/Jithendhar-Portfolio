import "./Footer.css";
// import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* <div className="footer__top">
          <div className="footer__brand">
            <h2>Jithendhar</h2>

            <p>
              Full Stack Developer focused on building scalable, modern and
              user-friendly web applications.
            </p>
          </div>

          <div className="footer__links">
            <h4>Quick Links</h4>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer__socials">
            <h4>Connect</h4>

            <a href="https://github.com/Jithendhar-Balda" target="_blank" rel="noopener noreferrer"><FaGithub /><span>GitHub</span></a>
          <a href="https://www.linkedin.com/in/your-linkedin/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /><span>LinkedIn</span></a>
          <a href="mailto:baldajithendhar@gmail.com"><FaEnvelope /><span>Email</span></a>
          </div>
        </div> */}

        <div className="footer__bottom">
          <p>© {currentYear} Jithendhar. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;