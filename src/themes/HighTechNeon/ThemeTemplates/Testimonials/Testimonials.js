import React from "react";
import Section from "../../themeComponents/Section/Section";
import ContentTemplate from "../../themeComponents/ContentTemplate/ContentTemplate"; // Updated to ContentTemplate
import TestimonialCarousel from "./TestimonialBox1/TestimonialContainer"; // Import the TestimonialCarousel component
import "./testimonials.css"; // Ensure to keep unique styles for testimonials

// Define testimonials content directly in this file
const testimonials = [
  {
    name: "John Doe",
    quote: "This service is fantastic! It really helped my business grow.",
    position: "CEO, Example Corp",
  },
  {
    name: "Jane Smith",
    quote: "Highly recommend! The team was professional and efficient.",
    position: "Marketing Director, ABC Ltd.",
  },
  {
    name: "Michael Johnson",
    quote: "Great experience from start to finish.",
    position: "CTO, Tech Innovators",
  },
];

const Testimonials = () => {
  return (
    <Section
      className={"testimonials flex justify-center full-height column"}
      shadowClass={"right-shadow bottom"}
    >
      <ContentTemplate
        className={"testimonials-content flex item-align-center justify-between bottom-space responsive responsive-center"}
        ifButton={true}
        heading="Hear From Our Clients"
        title="Our Testimonials"
        buttonText="Get Started"
        buttonLink="#"
        buttonId="testimonials-header-btn"
      />
      {/* Pass the testimonials content as a prop to the TestimonialCarousel */}
      <TestimonialCarousel testimonials={testimonials} />
    </Section>
  );
};

export default Testimonials;
