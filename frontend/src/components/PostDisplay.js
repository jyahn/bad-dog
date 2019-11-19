import React, { Component } from "react";
import "../containers/Post.css";

class PostDisplay extends Component {
  constructor(props) {
    super(props);
    this.doVoteUp = this.doVoteUp.bind(this);
    this.doVoteDown = this.doVoteDown.bind(this);
  }

  doVoteUp() {
    this.props.handleVote("up");
  }

  doVoteDown() {
    this.props.handleVote("down");
  }

  render() {
    const { title, description, dog_pic, votes } = this.props.post;
    return (
      <div className="PostDisplay mb-5">
        <div className="Post">
          <div className="body">
            <div
              className="dogPic"
              id="dogPicSolo"
              style={{ backgroundImage: `url(${dog_pic})` }}
            >
              <div className="description mx-auto px-5">
                {description} <i class="fas fa-paw"></i>
              </div>
            </div>
            <div className="footer" id="footer">
                <div className="comments-footer-nohover my-2 ml-3">
                  <i class="far fa-comment-alt"></i>
                  <span className="comments-text ml-3">Comments</span>
                </div>
              <span className="votes-footer">
                <small>{votes} votes</small>
                <i
                  className={
                    localStorage.getItem(this.props.post.id) === "down"
                      ? "grayedThumb fas fa-thumbs-up text-success ml-2 mt-2"
                      : "fas fa-thumbs-up text-success ml-2 mt-2"
                  }
                  onClick={() => this.doVoteUp("up", title.id)}
                />
                <i
                  className={
                    localStorage.getItem(this.props.post.id) === "up"
                      ? "grayedThumb fas fa-thumbs-down text-danger ml-2 mt-2"
                      : "fas fa-thumbs-down text-danger ml-2 mt-2"
                  }
                  onClick={() => this.doVoteDown("down", title.id)}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostDisplay;
