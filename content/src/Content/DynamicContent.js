import React from 'react';

const DynamicContent = ({ data }) => {
  if (!data) return <p>Content not found.</p>;
  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
};

export default DynamicContent;
