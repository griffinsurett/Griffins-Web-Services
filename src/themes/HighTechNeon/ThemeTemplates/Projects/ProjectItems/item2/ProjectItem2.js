// projectItem2.js
import React from "react";
import PropTypes from "prop-types";
import "./project-item2.css"; // Assuming you have some CSS for styling
import Button from "../../../../themeComponents/Buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProjectItem = ({ project }) => {
  return (
    <div className="project-item flex column justify-center responsive-center">
      <a
        href={project.link}
        className="project-link"
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px", // You can adjust the height as necessary
        }}
      >
        <div className="project-content flex column text-left">
          <h6>{project.name}</h6>
          <p className="project-item-onhover p-small">{project.description}</p>
        </div>
        <div className="project-item-icon project-item-onhover">
          <FontAwesomeIcon className="arrow" size="xl" icon={faArrowRight} />
        </div>
      </a>
    </div>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectItem;
