import React from 'react';
import { Link } from 'react-router-dom';
import { useCMS } from '../CMSContext';

const RelatedContent = ({ item }) => {
  const { getRelatedItems } = useCMS();
  const relatedItems = getRelatedItems(item);

  if (!relatedItems.length) return null;

  return (
    <div>
      <h3>Related Content</h3>
      <ul>
        {relatedItems.map(relItem => (
          <li key={relItem.slug}>
            <Link to={`/${relItem.collection}/${relItem.slug}`}>{relItem.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedContent;
