import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  getPostFromAPI
} from '../actions/posts';
import PostDisplay from '../components/PostDisplay'


class Post extends Component {
  constructor(props) {
    super(props);

  }

  async componentDidMount() {
    console.log("am i in here")
    if (!this.props.post) {
      await this.props.getPostFromAPI(this.props.id);
    }
    console.log("what about now")
  }



  render() {
    const post = this.props.post;
    if (!post) return <p>Loading</p>;
    console.log("props in post container", this.props)
    return (
      <div className="Post">
        <PostDisplay post={post}
        />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  // get the post ID from the route, and get the redux post (if present)

  let id = props.match.params.postId;
  return {
    id,
    post: state.posts[id]
  }
}

export default connect(
  mapStateToProps,
  {
    getPostFromAPI
  }
)(Post);