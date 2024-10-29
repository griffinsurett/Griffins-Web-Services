// CollectionItem.js
import React from 'react';
import { Link } from 'react-router-dom';
import RelatedContent from './RelatedContent';

const CollectionItem = ({ item }) => (
  <div>
    <h1>{item.title}</h1>
    <p>{item.description}</p>
    <RelatedContent item={item} />
  </div>
);

export default CollectionItem;
