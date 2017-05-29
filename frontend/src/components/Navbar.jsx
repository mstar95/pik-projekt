import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { menuToggle } from '../actions';

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
        <li><NavLink to="/tests">Tests</NavLink></li>
        <li><NavLink to="/logout">Logout</NavLink></li>
      </ul>
    )
  }

  let open = props.open ? " open": "";

  return (
    <nav className={"navbar" + open}>
      <a className={"navbar-button" + open} onClick={() => props.dispatch(menuToggle())}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </a>
      {list}
    </nav>
  )
}

function mapStateToProps(state) {
  return {
    open: state.navbar.open,
    loggedIn: state.login.loggedIn
  }
}

Navbar = connect(mapStateToProps)(Navbar)

export default Navbar;
