// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="site-header">
    <h1>Griffin’s Web Services</h1>
    <nav>
      <Link to="/">Go Back Home</Link>
    </nav>
  </header>
);

export default Header;
