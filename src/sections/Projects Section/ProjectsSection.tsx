import React from "react";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";
import "./ProjectSection.css";

const ProjectsSection: React.FC = () => {
  return (
    <section className="projects-section">
      <h2>Featured Projects</h2>
      {/* <p className="section-subtitle">
        A selection of my most impactful UX design projects, showcasing my
        approach to problem-solving and user-centered design.
      </p> */}

      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
