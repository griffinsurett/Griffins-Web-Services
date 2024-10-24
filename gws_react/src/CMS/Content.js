const siteContent = {
  siteDetails: {
    title: "Griffin’s Web Services",
    tagline: "Websites and All Things Digital.",
    description: "Your premier one-stop shop for website design and development, expert social media and digital marketing, and creative graphic design services.",
    companyName: "Griffin’s Web Services LLC",
    copyright: `© ${new Date().getFullYear()} Griffin’s Web Services LLC`,
    ctaLink: "/quote"
  },
  content: {
    sections: {
      services: {
        title: "Our Services",
        slug: "/services",
        description: "Explore our range of digital services designed to boost your business.",
        posts: [
          {
            title: "Website Design",
            slug: "/services/website-design",
            description: "We build custom websites tailored to your business.",
            relatedProjects: ["/projects/project-1"]
          },
          {
            title: "Digital Marketing",
            slug: "/services/digital-marketing",
            description: "From paid ads to content creation, we handle it all.",
            relatedProjects: []
          }
        ]
      },
      projects: {
        title: "Our Projects",
        slug: "/projects",
        posts: [
          {
            title: "E-Commerce Store",
            slug: "/projects/project-1",
            description: "A fully responsive e-commerce store optimized for SEO.",
            relatedServices: ["/services/website-design"],
            relatedTestimonials: ["/testimonials/john-doe"]
          }
        ]
      },
      testimonials: {
        title: "Our Testimonials",
        slug: "/testimonials",
        posts: [
          {
            title: "John Doe",
            slug: "/testimonials/john-doe",
            description: "\"Working with Griffin’s Web Services was a game-changer!\"",
            relatedProject: "/projects/project-1"
          }
        ]
      }
    }
  }
};

export default siteContent;

