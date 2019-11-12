import React, { Component } from "react";
import { connect } from 'react-redux';
import { addPostToAPI } from "../actions/posts";
import NewPostForm from '../components/NewPostForm';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  add({ title, description, dog_pic }) {
    this.props.addPostToAPI(title, description, dog_pic);
    this.props.history.push("/");
  }
  cancel() {
    this.props.history.push("/");
  };
  render() {
    console.log("props in NewPost container", this.props)
    return (
      <NewPostForm addPost={this.add} cancel={this.cancel} />
    );
  }
}

export default connect(null, { addPostToAPI })(NewPost);