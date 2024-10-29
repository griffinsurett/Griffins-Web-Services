// RelationshipUtils.js

export const applyRelationships = (content) => {
    content.collections.forEach(collection => {
      collection.content.forEach(item => {
        if (item.relations) {
          item.relations = item.relations.map(rel => {
            const relatedCollection = content.collections.find(col => col.collection === rel.collection);
            return {
              ...rel,
              title: relatedCollection?.content.find(i => i.slug === rel.slug)?.title || ''
            };
          });
        }
      });
    });
  };
  