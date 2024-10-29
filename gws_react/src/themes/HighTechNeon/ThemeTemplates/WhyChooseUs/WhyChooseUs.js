// WhyChooseUs.js
import React from "react";
import ContentTemplate from "../../themeComponents/ContentTemplate/ContentTemplate";
import "./why-choose-us.css";
import Section from "../../themeComponents/Section/Section";
import ListItem from "../../themeComponents/ListItem/ListItem";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const WhyChooseUs = () => {
  // Define a list of items for dynamic rendering
  const listItems = [
    {
      title: 'Clear Communication, Limited "Tech Talk"',
      description: "We understand that tech jargon can be confusing, so we focus on clear, straightforward communication. You can expect us to explain everything in simple terms, ensuring you're comfortable and confident every step of the way.",
    },
    {
      title: "Customized Solutions That Fit Your Needs",
      description: "Your business is unique, and we respect that! We create custom solutions that align with your goals and work seamlessly with your current setup, making your life easier without unnecessary changes.",
    },
    {
      title: "Transparency and Honesty",
      description: "You’ll never get hidden fees or unexpected surprises. We believe in full transparency, so you’ll always know what’s happening and what you’re paying for. No surprises, just trust.",
    },
    {
      title: "Results That Drive Your Business Forward",
      description: "Our goal isn’t just to create a website or app; it’s to help your business succeed. With a focus on your goals, we design solutions that work for your customers and help drive growth.",
    },
    {
      title: "Experienced, Friendly Professionals Who Care",
      description: "Our team isn’t just skilled; they’re passionate about helping businesses like yours. You’ll be working with professionals who truly care about your success, ready to guide you with patience and understanding.",
    },
    // Add more items here as needed
  ];

  return (
    <Section
      className="flex item-align-start full-height responsive responsive-center section-gap"
      shadowClass="left-shadow bottom"
    >
      <div className="half-column flex item-align-start bottom-space whyChoose-title">
        <ContentTemplate
          className="whyChoose column choose-icons-title responsive-center"
          ifButton={true}
          ifParagraph={false}
          heading="Griffin's Web Services is transparent, committed, and skilled."
          title="Why Choose Us"
          paragraph1="We are a team of professionals who are passionate about technology and helping businesses succeed. We specialize in custom software development and design."
          paragraph1Class="text-left responsive-center bottom-space"
          buttonSecClass="larger-top-space"
        />
      </div>
      <div className="choose-info flex column half-column">
        <div className="icon-list flex column justify-right">
          {listItems.map((item, index) => (
            <ListItem
              key={index}
              hasIcon={false}
              icon={item.icon}
              title={item.title}
              description={item.description}
              className="custom-icon-list-item-class bottom-space top-space item-align-center justify-left"
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default WhyChooseUs;
