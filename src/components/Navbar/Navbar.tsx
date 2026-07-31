import "./Navbar.css";

import { navigation } from "../../data/navigation";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <nav className="navbar__nav">
          <ul className="navbar__list">
            {navigation.map((item) => (
              <li key={item.id}>
                <a href={item.href} className="navbar__link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        
        {/* <a href="/Jithendhar_Balda_Resume.pdf" download="Jithendhar_Balda_Resume.pdf" className="resume-btn navbar__resume">Download Resume</a> */}
        <a href="/pdf/resume.pdf" download="Jithendhar_Resume.pdf" className="navbar__resume">
          Download Resume
        </a>
      </div>
    </header>
  );
}

export default Navbar;