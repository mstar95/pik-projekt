import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => (
  <nav className="navbar">
    <ul>
      <li><NavLink to="/home">Home</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to="/test">Test</NavLink></li>
      <li><NavLink to="/404">404</NavLink></li>
    </ul>
  </nav>
)

export default Navbar;
