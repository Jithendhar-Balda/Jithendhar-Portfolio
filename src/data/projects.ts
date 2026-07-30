

import type { Project } from "../types/project";

import bgscetclg from "../App/assets/images/projects/bgscet.png";
import portfolio from "../App/assets/images/projects/portfolio.png";

export const projects: Project[] = [
  {
    id: 1,
    title: "BGSCET College Website",
    description:
      "A modern, responsive college website built using React, TypeScript, and CSS3, featuring a scalable component architecture, dynamic department pages, reusable UI components, and an intuitive user experience.",
    image: bgscetclg,
    github: "https://github.com/naveen-manthri/bgscet",
    technologies: ["React", "TypeScript"],
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description:
      "A fully responsive portfolio showcasing my projects, skills, and experience. Built using React, TypeScript, and CSS3 with a minimal, modern interface and component-based architecture.",
    image: portfolio,
    github: "https://github.com/Jithendhar-Balda/Jithendhar-Portfolio",
    technologies: ["React", "Typescript", "CSS3"],
    category: "Backend",
  },
];