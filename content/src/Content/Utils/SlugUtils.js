// SlugUtils.js
export const applySlugRules = (content) => {
  content.collections.forEach(collection => {
    collection.slug = collection.slug || collection.title.toLowerCase().replace(/\s+/g, '-');
    collection.content.forEach(item => {
      item.slug = item.slug || item.title.toLowerCase().replace(/\s+/g, '-');
    });
  });
};
