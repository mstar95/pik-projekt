import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

let Navbar = (props) => {
  let list;
  if(!props.loggedIn) {
    list = (
      <ul>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
      </ul>
    )
  } else {
    list = (
      <ul>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/test">Test</NavLink></li>
        <li><NavLink to="/logout">Logout</NavLink></li>
      </ul>
    )
  }

  return (
    <nav className="navbar">
      <a className="navbar-button">X</a>
      {list}
    </nav>
  )
}

function mapStateToProps(state) {
  return {
    loggedIn: state.login.loggedIn,
  }
}

Navbar = connect(mapStateToProps)(Navbar)

export default Navbar;
