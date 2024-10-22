// Projects.js
import React from "react";
import Section from "../../themeComponents/Section/Section";
import ContentTemplate from "../../themeComponents/ContentTemplate/ContentTemplate";
import ProjectContainer2 from "./ProjectItems/item2/Container/Container2"; // Import the new ProjectContainer
import "./projects.css"; // Ensure to keep unique styles for projects

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Project 1",
      description: "Project 1 description",
      link: "https://picsum.photos/200/300", // Placeholder image link
      image: "https://picsum.photos/200/300", // Image URL
    },
    {
      id: 2,
      name: "Project 2",
      description: "Project 2 description",
      link: "https://picsum.photos/200/300", // Placeholder image link
      image: "https://picsum.photos/200/300", // Image URL
    },
    {
      id: 3,
      name: "Project 3",
      description: "Project 3 description",
      link: "https://picsum.photos/200/300", // Placeholder image link
      image: "https://picsum.photos/200/300", // Image URL
    },
    {
      id: 4,
      name: "Project 4",
      description: "Project 4 description",
      link: "https://picsum.photos/200/300", // Placeholder image link
      image: "https://picsum.photos/200/300", // Image URL
    },
  ];

  return (
    <Section
      className={"flex justify-center full-height column text-center"}
      shadowClass={"left-shadow bottom"}
    >
      <ContentTemplate
        className="column bottom-space"
        ifButton={true}
        buttonBottom={true}
        heading="Our Work"
        title="Our Projects"
        buttonText="More Projects"
        buttonLink="#"
        buttonId="projects-header-btn"
        buttonSecClass="space"
      >
        {/* Render the ProjectContainer and pass projects as props */}
        <ProjectContainer2 projects={projects} />
      </ContentTemplate>
    </Section>
  );
};

export default Projects;
