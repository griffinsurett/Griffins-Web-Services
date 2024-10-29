// Content.js
import { applySlugRules } from './Utils/SlugUtils';
import { createRedirectMap } from './Utils/RedirectUtils';
import { applyRelationships } from './Utils/RelationshipUtils';

const siteContent = {
  siteDetails: {
    title: "Griffin’s Web Services",
    tagline: "Websites and All Things Digital.",
    description: "Your premier one-stop shop for website design...",
    companyName: "Griffin’s Web Services LLC",
    adminEmail: "griffinswebservices@gmail.com",
  },
  content: {
    collections: [
      {
        collection: "about",
        title: "About Us",
        slug: "about",
        itemsHavePage: false,
        redirectFrom: ["about-us", "about-me"],
        content: {
          mission: "Empowering businesses...",
          vision: "To be the go-to digital agency for businesses.",
        }
      },
      {
        collection: "contact",
        title: "Contact Us",
        slug: "contact",
        itemsHavePage: false,
        redirectFrom: ["contact-us", "get-in-touch"],
        content: {
          email: "griffin@griffinswebservices.com",
          phone: "(732) 939-1309"
        }
      },
      {
        collection: "services",
        title: "Our Services",
        slug: "services",
        redirectFrom: ["service"],
        itemsHavePage: true,
        content: [
          {
            title: "Website Design",
            slug: "website-design",
            redirectFrom: ["web-design", "site-design"],
            description: "We build custom, responsive websites...",
          },
          {
            title: "Digital Marketing",
            slug: "digital-marketing",
            redirectFrom: ["marketing-services", "digital-ads"],
            description: "Boost your brand with our expert digital marketing services."
          }
        ]
      },
      {
        collection: "projects",
        title: "Our Projects",
        slug: "projects",
        redirectFrom: ["project"],
        itemsHavePage: true,
        content: [
          {
            title: "E-Commerce Store",
            slug: "ecommerce-store",
            description: "A fully responsive e-commerce store optimized for SEO...",
            relations: [
              { collection: "services", slug: "website-design" }, 
              { collection: "testimonials", slug: "john-doe" }
            ]
          },
          {
            title: "Portfolio Website",
            slug: "portfolio-website",
            description: "A personalized portfolio website that showcases...",
            relations: [
              { collection: "services", slug: "website-design" }, 
          ]
        }  
        ]
      },
      {
        collection: "testimonials",
        title: "Client Testimonials",
        slug: "testimonials",
        redirectFrom: ["testimonial"],
        itemsHavePage: false,
        content: [
          {
            title: "John Doe",
            slug: "john-doe",
            description: "\"Working with Griffin’s Web Services was a game-changer!\"",
            relations: [{ collection: "projects", slug: "ecommerce-store" }] // Relates back to E-Commerce Store
          },
          {
            title: "Jane Smith",
            description: "\"They helped elevate our brand and reach a wider audience...\""
          }
        ]
      }
    ]
  }
};

// Apply slugs and create the redirect map
applySlugRules(siteContent.content);
const redirectMap = createRedirectMap(siteContent.content);
applyRelationships(siteContent.content); // Apply relationships

export { siteContent, redirectMap };
export default siteContent;