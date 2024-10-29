// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CMSProvider } from "./Content/CMSContext"; // Make sure this is imported

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CMSProvider>
      <App />
    </CMSProvider>
  </React.StrictMode>
);
