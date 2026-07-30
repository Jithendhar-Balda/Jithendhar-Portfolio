import { useState } from "react";

import "./Projects.css";

import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Full Stack", "Backend"];

  return (
    <section
      className="projects"
      id="projects"
    >
      <div className="projects__header">
        <div className="projects__title">
          <h2>Featured Projects</h2>

          <p>Real-world solutions for complex problems.</p>
        </div>

        <div className="projects__filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`projects__filter-btn ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;