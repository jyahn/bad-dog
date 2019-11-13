import React, { Component, Fragment } from 'react';
import Nav from './Nav';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <Routes />
      </Fragment>
    )
  }
}

export default App;
