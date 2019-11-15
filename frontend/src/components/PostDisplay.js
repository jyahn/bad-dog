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
      <div className="PostDisplay text-center">
        <div className="card col-lg-6 offset-3 text-center">
          <div className="card-body">
            <div
              className="dogPic"
              style={{ backgroundImage: `url(${dog_pic})` }}
            >
              {/* <div className="card-text"> */}
              <div className="description mx-auto px-5">
                {description} <i class="fas fa-paw"></i>
              </div>
              <div className="footer">
                <span className="title-footer">{title}</span>
                <span className="votes-footer">
                  <small>{votes} votes</small>
                  <i
                    className={
                      localStorage.getItem(this.props.post.id) === "down"
                        ? "grayedThumb fas fa-thumbs-up text-success ml-2 "
                        : "fas fa-thumbs-up text-success ml-2 mt-2"
                    }
                    onClick={() => this.doVoteUp("up", title.id)}
                  />
                  <i
                    className={
                      localStorage.getItem(this.props.post.id) === "up"
                        ? "grayedThumb fas fa-thumbs-down text-danger ml-2"
                        : "fas fa-thumbs-down text-danger ml-2 mt-2"
                    }
                    onClick={() => this.doVoteDown("down", title.id)}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <br />
        {/* Edit a post */}
        {/* <div className="PostDisplay-right">
          <div className="PostDisplay-edit-area">
            <i className="fas fa-edit text-primary"
              onClick={this.props.toggleEdit} />
            <i className="fas fa-times text-danger"
              onClick={this.props.delete} />
          </div>
        </div> */}
      </div>
    );
  }
}

export default PostDisplay;
