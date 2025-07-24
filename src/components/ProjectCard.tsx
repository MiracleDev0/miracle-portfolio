import React from "react";
import type { Project } from "../data/projects";
import "./ProjectCard.css";

type Props = {
  project: Project;
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.imageUrl} alt={project.title} className="project-image" />

      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <button onClick={() => window.open(project.link, "_blank")}>{project.buttonText}</button>
      </div>
    </div>
  );
};

export default ProjectCard;
