import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

let Navbar = (props) => {
  if(!props.loggedIn) {
    return (
      <nav className="navbar">
        <ul>
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
        </ul>
      </nav>
    )
  } else {
    return (
      <nav className="navbar">
        <ul>
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/test">Test</NavLink></li>
          <li><NavLink to="/logout">Logout</NavLink></li>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.login.loggedIn,
  }
}

Navbar = connect(mapStateToProps)(Navbar)

export default Navbar;
