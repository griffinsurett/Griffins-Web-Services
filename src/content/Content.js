// Content.js is a file that contains all the content types for the app. This is where you can register new content types and their relationships. 
const content = [];

// Function to register a new content type dynamically
function registerContentType({
  title, subtitle, excerpt, description, slug, hasPosts = false, isHierarchical = false, icon = false, relations = [], posts = []
}) {
  const newContent = {
    title,
    subtitle,
    excerpt,
    description,
    slug,
    hasPosts,
    isHierarchical,
    icon, // Boolean to determine if the content has an icon
    relations, // Array for parent or child relations
    posts: posts.map(post => ({
      ...post,
      icon: post.icon || false // Allow icons on individual posts as well
    }))
  };

  // Link parent-child relationships
  relations.forEach(({ type, relatedSlug }) => {
    const relatedContent = content.find(item => item.slug === relatedSlug);
    if (relatedContent) {
      if (type === 'parent') {
        relatedContent.relations.push({ type: 'child', relatedSlug: slug });
      } else if (type === 'child') {
        relatedContent.relations.push({ type: 'parent', relatedSlug: slug });
      }
    }
  });

  // Push new content type to the array
  content.push(newContent);
}

// Export the content and the function for use throughout the app
export { content, registerContentType };
