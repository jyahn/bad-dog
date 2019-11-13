import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="App container">
        <header className="App-header jumbotron mt-2">
          <h1 className="App-title display-4">Bad Dog!</h1>
          <p className="lead">A place to publicly shame your disobedient dogs.</p>
          <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/new">Submit a bad dog</NavLink>
          </nav>
        </header>
      </div>
    );
  }
}

export default Nav;