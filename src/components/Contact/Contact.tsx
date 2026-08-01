// import { useState } from "react";
// import { FaGithub, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import "./Contact.css";

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = event.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     console.log(formData);

//     setFormData({
//       name: "",
//       email: "",
//       subject: "",
//       message: "",
//     });
//   };

//   return (
//     <section className="contact" id="contact" >
//       <div className="contact__container">
//         <div className="contact__content">
//           <span>CONTACT</span>

//           <h2>Let's Build Something Great Together</h2>

//           <p>
//             Whether it's a full-stack application, backend system, or frontend
//             interface, I'm always excited to work on meaningful projects.
//           </p>

          
//           <div className="contact__details">
//             <a href="mailto:jithulucky55@gmail.com" className="contact__detail mail"><FaEnvelope className="contact__icon " /><span>baldajithendhar@gmail.com</span></a>

//             <a href="https://github.com/Jithendhar-Balda" target="_blank" rel="noopener noreferrer" className="contact__detail github"><FaGithub className="contact__icon " /><span>github.com/Jithendhar</span></a>

//             <a href="https://www.linkedin.com/in/your-linkedin/" target="_blank" rel="noopener noreferrer" className="contact__detail linkedin"><FaLinkedinIn className="contact__icon " /><span>linkedin.com/Jithendhar</span></a>

//             <div className="contact__detail loc"><FaMapMarkerAlt className="contact__icon" /><span>Hyderabad, Telangana, India</span></div>
//           </div>

//         </div>

//         <form className="contact__form" onSubmit={handleSubmit} >
//           <input  type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />

//           <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
//           <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />

//           <textarea name="message" rows={6}  placeholder="Write your message..." value={formData.message} onChange={handleChange}  required />

//           <button type="submit" className="primary-btn">
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Contact;






import { useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key:
              import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,

            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: "✅ Message sent successfully!",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: "❌ Failed to send message.",
        });
      }
    } catch (error) {
      console.error(error);

      setStatus({
        type: "error",
        message: "❌ Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__content">
          <span>CONTACT</span>

          <h2>Let's Build Something Great Together</h2>

          <p>
            Whether it's a full-stack application, backend system, or frontend
            interface, I'm always excited to work on meaningful projects.
          </p>

          <div className="contact__details">
            <a  href="mailto:baldajithendhar@gmail.com" className="contact__detail mail" >
              <FaEnvelope className="contact__icon" />
              <span>baldajithendhar@gmail.com</span>
            </a>

            <a  href="https://github.com/Jithendhar-Balda" target="_blank" rel="noopener noreferrer" className="contact__detail github">
              <FaGithub className="contact__icon" />
              <span>github.com/Jithendhar-Balda</span>
            </a>

            <a href="https://www.linkedin.com/in/your-linkedin/" target="_blank" rel="noopener noreferrer" className="contact__detail linkedin" >
              <FaLinkedinIn className="contact__icon" />
              <span>linkedin.com/in/your-linkedin</span>
            </a>

            <div className="contact__detail loc">
              <FaMapMarkerAlt className="contact__icon" />
              <span>Hyderabad, Telangana, India</span>
            </div>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />


          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />


          <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />


          <textarea name="message" rows={6} placeholder="Write your message..." value={formData.message} onChange={handleChange} required />


          <button type="submit" className="primary-btn" disabled={loading}>{loading ? "Sending..." : "Send Message"}</button>


          {status.message && (
            <p className={status.type}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;