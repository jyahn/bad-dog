import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./bad-dog-logo.png";

import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <NavLink exact to="/">
          <a className="logo navbar-brand">
            <img
              src={require("./bad-dog-logo.png")}
              class="d-inline-block align-top"
              className="bad-dog-logo"
              alt="bad-dog-logo"
            />
            Bad Dog!
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
