import React from "react";
import Accordion from "../../themeComponents/Accordion/Accordion";
import ContentTemplate from "../../themeComponents/ContentTemplate/ContentTemplate"; // Updated to ContentTemplate
import Section from "../../themeComponents/Section/Section"; // Import your Section component
import "./faq.css"; // Import your FAQ styles

function FAQ() {
  // Define the FAQ items here
  const faqItems = [
    {
      title: "Section 1",
      content: "This is the content of section 1.",
    },
    {
      title: "Section 2",
      content: "This is the content of section 2.",
    },
    {
      title: "Section 3",
      content: "This is the content of section 3.",
    },
    // Add more items as needed
  ];

  return (
    <Section
      className={"flex justify-center full-height column"}
      shadowClass={"left-shadow bottom"}
    >
      <ContentTemplate
        className={"flex justify-center text-center column"}
        ifButton={false}
        ifParagraph={true}
        heading="Frequently Asked Questions" // Large heading
        headingClass={"text-center bottom-space"}
        title="FAQ" // Smaller title
        buttonText="Get Started"
        buttonLink="#"
        buttonId="faq-header-btn"
        paragraphClass={"flex justify-center column about-paragraphs"}
        paragraph1={
          "Discover answers to common questions about Griffin's Web Services."
        }
        paragraph1Class={"top-paragraph p-large text-center"} 
        buttonBottom={true}
        buttonSecClass={"flex justify-center bottom-space"}
      />
      {/* Pass the FAQ items to the Accordion */}
      <div className="faq-box flex justify-center item-align-center responsive">
        <Accordion items={faqItems} />
        <Accordion items={faqItems} />
      </div>
    </Section>
  );
}

export default FAQ;
