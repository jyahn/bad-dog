import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import NewPost from '../containers/NewPost';
import Post from '../containers/Post'

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/new"
            render={(props) => <NewPost {...props} />} />
          <Route exact path="/"
            render={() => <Home />} />
          <Route exact path="/:postId"
            render={(props) => <Post {...props} />} />
        </Switch>
      </div >
    );
  }
}

export default Routes;