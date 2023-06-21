import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { HiCube } from 'react-icons/hi';

import './navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left" onClick={toggleMenu}>
        <i>
          <HiCube />
        </i>
        <h2 className="nav-title">cohere</h2>
      </div>
      <div className={`navbar-center ${showMenu ? 'show' : ''}`}>
        <ul className="nav-items">
          <li>
            PRODUCTS
          </li>
          <li>
            FOR DEVELOPERS
          </li>
          <li>
            FOR BUSINESS
          </li>
          <i>
            PRICING
          </i>
          <i>
           BLOG
          </i>
          <li>
            ABOUT
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
