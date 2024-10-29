// RedirectUtils.js
export const createRedirectMap = (content) => {
  const map = {};
  content.collections.forEach(collection => {
    if (collection.redirectFrom) {
      collection.redirectFrom.forEach(oldSlug => map[oldSlug] = collection.slug);
    }
    collection.content.forEach(item => {
      if (item.redirectFrom) {
        item.redirectFrom.forEach(oldSlug => map[oldSlug] = `${collection.slug}/${item.slug}`);
      }
    });
  });
  return map;
};
