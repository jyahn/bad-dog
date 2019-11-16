import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "./bad-dog-logo.png";

import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <NavLink exact to="/">
          <a href="#" className="logo navbar-brand">
            <img
              src={logo}
              class="d-inline-block align-top"
              className="bad-dog-logo"
              alt="bad-dog-logo"
            />
            <span className="bad-dog-text">Bad Dog! </span>
          </a>
        </NavLink>
        <NavLink exact to="/new">
          <i className="new" class="far fa-edit"></i>
        </NavLink>
      </nav>
    );
  }
}

export default Nav;
