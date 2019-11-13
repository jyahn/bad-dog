import React, { Component } from "react";
import "./Post.css";
import { connect } from 'react-redux';
import {
  getPostFromAPI,
  sendCommentToAPI,
  removeCommentFromAPI,
  sendVoteToAPI
} from '../actions/posts';
import PostDisplay from '../components/PostDisplay';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';


class Post extends Component {
  constructor(props) {
    super(props);

    this.addComment = this.addComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.vote = this.vote.bind(this);
  }

  async componentDidMount() {
    if (!this.props.post) {
      await this.props.getPostFromAPI(this.props.id);
    }
  }

  addComment(text) {
    this.props.sendCommentToAPI(this.props.post.id, text);
  }

  deleteComment(commentId) {
    this.props.removeCommentFromAPI(this.props.post.id, commentId);
  }

  vote(direction) {
    let oppDirection;
    if (direction === 'up') {
      oppDirection = 'down';
    } else {
      oppDirection = 'up';
    }

    // if user has already voted on this post
    if (localStorage.getItem(this.props.post.id)) {
      let previousVote = localStorage.getItem(this.props.post.id);
      if (previousVote === oppDirection) {
        this.props.sendVoteToAPI(this.props.post.id, direction)
        localStorage.removeItem(this.props.post.id)
      }
    }
    //if user has not already voted on this post
    else {
      this.props.sendVoteToAPI(this.props.post.id, direction)
      localStorage.setItem(this.props.post.id, direction)
    }
  }

  render() {
    const post = this.props.post;
    if (!post) return <p>Loading</p>;
    console.log("props in post container", this.props)

    return (
      <div className="Post">
        <PostDisplay post={post} handleVote={this.vote} />
        <section className="Post-comments mb-4">
          <h4>Comments</h4>
          <CommentList comments={post.comments} deleteComment={this.deleteComment} />
          <CommentForm addComment={this.addComment} />
        </section>
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
    getPostFromAPI,
    sendCommentToAPI,
    removeCommentFromAPI,
    sendVoteToAPI
  }
)(Post);