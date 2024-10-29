// Router.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Page-Templates/FrontPage";
import CollectionArchive from "./Page-Templates/Collection/CollectionArchive";
import CollectionItem from "./Page-Templates/Collection/CollectionItem";
import { redirectMap } from "./Content"; // Updated import
import Header from "./Header";
import Footer from "./Footer";

const CMSRouter = () => {
  return (
    <Router>
    <Header />
      <Routes>
        {Object.entries(redirectMap).map(([from, to], index) => (
          <Route key={index} path={from} element={<Navigate to={to} replace />} />
        ))}

        <Route path="/" element={<HomePage />} />
        <Route path="/:collectionSlug" element={<CollectionArchive />} />
        <Route path="/:collectionSlug/:itemSlug" element={<CollectionItem />} />

        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default CMSRouter;