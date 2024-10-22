// Container.js
import React from "react";
import PropTypes from "prop-types";
import ProjectItem from "../ProjectItem2"; // Adjust the path if necessary
import "./container2.css"; // Container-specific styles

const ProjectContainer = ({ projects }) => {
  return (
    <div className="project-container flex justify-center wrap top-space bottom-space">
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
};

ProjectContainer.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProjectContainer;
