// Services.js
import React from "react";
import "./services.css"; // Ensure to keep unique styles for services
import ContentTemplate from "../../themeComponents/ContentTemplate/ContentTemplate"; 
import Section from "../../themeComponents/Section/Section";
import ServiceBox from "./ServiceBox/ServiceBox"; // Import the ServiceBox component
import { faCode } from "@fortawesome/free-solid-svg-icons";

const servicesData = [
  {
    icon: faCode,
    title: "Service 1",
    description: "Description of service 1.",
    href: "#service1",
  },
  {
    icon: faCode,
    title: "Service 2",
    description: "Description of service 2.",
    href: "#service2",
  },
  {
    icon: faCode,
    title: "Service 3",
    description: "Description of service 3.",
    href: "#service3",
  },
  {
    icon: faCode,
    title: "Service 4",
    description: "Description of service 4.",
    href: "#service4",
  },
  {
    icon: faCode,
    title: "Service 5",
    description: "Description of service 5.",
    href: "#service5",
  },
  {
    icon: faCode,
    title: "Service 6",
    description: "Description of service 6.",
    href: "#service6",
  },
];

const Services = () => {
  return (
    <Section
      className={"services-section justify-center full-height column"}
      shadowClass={"right-shadow bottom"}
    >
      <ContentTemplate
        className={"justify-between-section responsive responsive-center"}
        ifButton={true}
        heading="What We Offer"
        title="Our Services"
        buttonText="Get Started"
        buttonLink="#"
        buttonId="services-header-btn"
        paragraph1="Explore our wide range of services."
        isHero={false} // Since it's a section, not a hero
      />
      <div className="space"></div>

      <div className="services-boxes flex justify-content-section">
        {servicesData.map((service, index) => (
          <ServiceBox
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            href={service.href}
            size="lg"
          />
        ))}
      </div>
    </Section>
  );
};

export default Services;
