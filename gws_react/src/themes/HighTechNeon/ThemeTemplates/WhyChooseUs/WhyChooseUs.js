// WhyChooseUs.js
import React from "react";
import ContentTemplate from "../../themeComponents/ContentTemplate/ContentTemplate";
import "./why-choose-us.css";
import Section from "../../themeComponents/Section/Section"; // Import your Section component
import ListItem from "../../themeComponents/ListItem/ListItem"; // Import your ListItem component
import { faCode } from "@fortawesome/free-solid-svg-icons";

const WhyChooseUs = () => {
  return (
    <Section
      className={
        "flex item-align-start full-height responsive responsive-center"
      }
      shadowClass={"left-shadow bottom"}
    >
      <div className="half-column flex item-align-start bottom-space whyChoose-title">
        <ContentTemplate
          className="whyChoose large-screen-spacing-right column choose-icons-title responsive-center"
          ifButton={true}
          ifParagraph={false}
          heading="Griffin's Web Services is transparent, committed, and a skilled partner in your digital journey." // Large heading
          title="Why Choose Us" // Smaller title
          paragraph1={
            "We are a team of professionals who are passionate about technology and helping businesses succeed. We specialize in custom software development and design."
          }
          paragraph1Class={"text-left responsive-center bottom-space"}
          buttonSecClass={"top-space"}
        />
      </div>
      <div className="choose-info flex column half-column">
        <div className="icon-list flex column justify-right">
          <ListItem
            hasIcon={false}
            icon={faCode}
            title={"Development"}
            description={
              "We build custom software solutions for businesses and startups."
            }
            className="custom-icon-list-item-class bottom-space top-space item-align-center justify-left"
          />
          <ListItem
            hasIcon={false}
            icon={faCode}
            title={"Design"}
            description={
              "We design engaging user interfaces that prioritize user experience."
            }
            className="custom-icon-list-item-class bottom-space top-space item-align-center justify-left"
          />
          <ListItem
            hasIcon={false}
            icon={faCode}
            title={"Support"}
            description={
              "We offer ongoing support and maintenance for all projects."
            }
            className="custom-icon-list-item-class bottom-space top-space item-align-center justify-left"
          />
          <ListItem
            hasIcon={false}
            icon={faCode}
            title={"Support"}
            description={
              "We offer ongoing support and maintenance for all projects."
            }
            className="custom-icon-list-item-class bottom-space top-space item-align-center justify-left"
          />
          <ListItem
            hasIcon={false}
            icon={faCode}
            title={"Support"}
            description={
              "We offer ongoing support and maintenance for all projects."
            }
            className="custom-icon-list-item-class bottom-space top-space item-align-center justify-left"
          />
          <ListItem
            hasIcon={false}
            icon={faCode}
            title={"Support"}
            description={
              "We offer ongoing support and maintenance for all projects."
            }
            className="custom-icon-list-item-class bottom-space top-space item-align-center justify-left"
          />
        </div>
      </div>
    </Section>
  );
};

export default WhyChooseUs;
