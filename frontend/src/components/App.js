import React, { Component, Fragment } from 'react';
import Nav from './Nav';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Nav />
        <Routes />
      </div>
    )
  }
}

export default App;
