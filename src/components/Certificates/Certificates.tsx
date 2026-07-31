import "./Certificates.css";

import { certificates } from "../../data/certificates";

function Certificates() {
  return (
    <section className="certificates">
      <div className="certificates__container">
        <div className="certificates__header">
          <h2>Certificates & Internships</h2>

          <p>
            Building Scalable Web Experiences with Python
          </p>
        </div>

        <div className="certificates__grid">
          {certificates.map((certificate) => (
            <article className="certificate-card" key={certificate.id}>
              <span className="material-symbols-outlined certificate-card__icon">
                {certificate.icon}
              </span>

              <h4>{certificate.title}</h4>
              <span>{certificate.organization}</span>
              <p>{certificate.duration}</p>
              <a href={certificate.certificateUrl}  target="_blank"  rel="noopener noreferrer"  className="certificate-card__button">View Certificate</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;