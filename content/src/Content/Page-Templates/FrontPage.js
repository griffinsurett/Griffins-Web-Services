// FrontPage.js
import React from "react";
import { useCMS } from "../CMSContext";
import DynamicContent from "../DynamicContent";

const HomePage = () => {
  const cmsContent = useCMS();
  const { siteDetails, content } = cmsContent;

  return (
    <div className="homepage">
      <header className="homepage-header">
        <p>{siteDetails.tagline}</p>
        <p>{siteDetails.description}</p>
      </header>

      <div className="collections">
        {content.collections.map((collection, index) => (
          <DynamicContent key={index} collection={collection} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
