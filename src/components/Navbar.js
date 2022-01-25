import React from 'react';
import logo from '../logo.png';

const Navbar = () => (
  <nav className="header-navbar">
    <div className="logo">
      <img
        alt=""
        src={logo}
        empty-myprofile
        width="50"
        height="50"
        className="header-logo"
      />
      <p className="space-travellers">Space Travelers&apos Hub</p>
    </div>
    <div className="header-nav">
      <ul className="header-nav_ul">
        <li className="profile">
          <NavLink to="/Profile" exact>My Profile</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
