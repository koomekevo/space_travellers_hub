import React from 'react';
import logo from '../logo.png';

const Navbar = () => (
  <nav className="header-navbar">
    <div className="logo">
      <img
        alt=""
        src={logo}
        width="35"
        height="35"
        className="header-logo"
      />
      {' '}

      Space Travelers Hub
    </div>
  </nav>
);

export default Navbar;
