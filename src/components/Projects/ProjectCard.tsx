import type { Project } from "../../types/project";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-card__image"
        />

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="project-card__github"
        >
          <span className="material-symbols-outlined">
            code
          </span>

          GitHub
        </a>
      </div>

      <div className="project-card__technologies">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="project-card__technology"
          >
            {technology}
          </span>
        ))}
      </div>

      <h3 className="project-card__title">
        {project.title}
      </h3>

      <p className="project-card__description">
        {project.description}
      </p>
    </article>
  );
}

export default ProjectCard;