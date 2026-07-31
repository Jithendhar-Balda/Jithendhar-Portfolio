import type { Certificate } from "../types/certificate";

import webDevelopmentIntern from "../assets/certificates/B-Jithendhar_Aug_2022_internship_25924.pdf";
import pcapPython from "../assets/certificates/BJithendhar-PYTHON-certificate.pdf";
import tcsIon from "../assets/certificates/Jithendhar_Balda_TCS_ION.pdf";
import pythonFullStack from "../assets/certificates/vcube-python-fullstack.jpeg";
import udemyHtml from "../assets/certificates/Udemy-HTML-CSS-CERTIFICATE.pdf";

export const certificates: Certificate[] = [
  
  {
    id: 1,
    title: "PCAP: Programming Essentials in Python",
    organization: "Cisco Networking Academy & openEDG Python Institute",
    duration: "31 Oct 2022",
    icon: "verified",
    certificateUrl: pcapPython,
  },
  {
    id: 2,
    title: "TCS iON Career Edge - Young Professional",
    organization: "TCS iON (Tata Consultancy Services)",
    duration: "Jun 2024",
    icon: "school",
    certificateUrl: tcsIon,
  },
  {
    id: 3,
    title: "Python Full Stack Development",
    organization: "Vcube Software Solutions, Hyderabad",
    duration: "Aug 2023 - Jan 2024",
    icon: "workspace_premium",
    certificateUrl: pythonFullStack,
  },
  {
    id: 4,
    title: "Web Development Intern",
    organization: "Raise Digital, Hyderabad",
    duration: "Aug 2022 - Sep 2022",
    icon: "workspace_premium",
    certificateUrl: webDevelopmentIntern,
  },
  {
    id: 5,
    title: "HTML & CSS for Responsive Real-World websites",
    organization: "Udemy",
    duration: "Jul 2024",
    icon: "school",
    certificateUrl: udemyHtml,
  },
];