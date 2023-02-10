import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoChevronBackSharp } from 'react-icons/io5';
import { IoMdSettings } from 'react-icons/io';
import { FaMicrophone } from 'react-icons/fa';

import './Navbar.css';

const Navbar = () => (
  <header className="header">
    <NavLink to="/" className="btn-before">
      <IoChevronBackSharp />
    </NavLink>
    <p>most views</p>
    <div className="nav-icons">
      <FaMicrophone />
      <IoMdSettings />
    </div>
  </header>
);
export default Navbar;
