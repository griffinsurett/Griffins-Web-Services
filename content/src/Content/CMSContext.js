// CMSContext.js
import React, { createContext, useContext } from 'react';
import siteContent, { redirectMap } from './Content';

const CMSContext = createContext();

export const CMSProvider = ({ children }) => {
  const getCollectionBySlug = (slug) => {
    return siteContent.content.collections.find(col => col.slug === slug);
  };

  const getItemBySlug = (collectionSlug, itemSlug) => {
    const collection = getCollectionBySlug(collectionSlug);
    return collection?.content.find(item => item.slug === itemSlug);
  };

  const getRelatedItems = (item) => {
    if (!item.relations) return [];
    return item.relations.map(rel => getItemBySlug(rel.collection, rel.slug));
  };

  const contextValue = {
    getCollectionBySlug,
    getItemBySlug,
    getRelatedItems,
    redirectMap,
    siteContent,
  };

  return <CMSContext.Provider value={contextValue}>{children}</CMSContext.Provider>;
};

export const useCMS = () => useContext(CMSContext);
