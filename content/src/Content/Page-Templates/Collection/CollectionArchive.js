import React from 'react';
import { Link } from 'react-router-dom';

const CollectionArchive = ({ collection }) => (
  <div>
    <h1>{collection.title}</h1>
    <ul>
      {collection.content.map(item => (
        <li key={item.slug}>
          <Link to={`/${collection.slug}/${item.slug}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default CollectionArchive;
