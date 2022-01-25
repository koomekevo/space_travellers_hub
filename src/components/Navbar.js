import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.png';

const Navbar = () => {
  const r = '';
  return (
    <nav className='header-navbar'>
      <div className='logo'>
        <img
          alt=""
          src={logo}
          width="50"
          height="50"
          className="header-logo"
        />
        {''}
        <p className='space-travellers'>Space Traveler's Hub</p>
      
    </nav>
  );
};

export default Navbar;