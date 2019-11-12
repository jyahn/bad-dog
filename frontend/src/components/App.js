import React, { Component, Fragment } from 'react';
import { Route, Switch, NavLink } from "react-router-dom";
import Home from './Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
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
        <div>
          <Switch>
            {/* <Route exact path="/new"
            render={(props) => <NewPost {...props} />} /> */}
            <Route exact path="/"
              render={() => <Home />} />
            {/* <Route exact path="/:postId"
            render={(props) => <Post {...props} />} /> */}
          </Switch>
        </div >
      </Fragment>
    )
  }
}

export default App;
