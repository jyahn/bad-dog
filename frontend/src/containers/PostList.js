import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchTitlesFromAPI } from "../actions/titles";
import { Link } from "react-router-dom";
import "./Post.css";
import { sendVoteToAPI } from "../actions/posts";

class PostList extends Component {
  async componentDidMount() {
    if (this.props.titles.length === 0) {
      await this.props.fetchTitlesFromAPI();
    }
  }

  vote(direction, id) {
    let oppDirection;
    if (direction === "up") {
      oppDirection = "down";
    } else {
      oppDirection = "up";
    }

    // if user has already voted on this post
    if (localStorage.getItem(id)) {
      let previousVote = localStorage.getItem(id);
      if (previousVote === oppDirection) {
        this.props.sendVoteToAPI(id, direction);
        localStorage.removeItem(id);
      }
    }
    //if user has not already voted on this post
    else {
      this.props.sendVoteToAPI(id, direction);
      localStorage.setItem(id, direction);
    }
  }

  render() {
    console.log("props in postlist", this.props);
    return (
      <div className="PostContainer row">
        {this.props.titles.map(title => (
          <div key={title.id} className="Post-main col-lg-5 col-md-10 col-sm-10">
            <div className="Post text-center">
              <div className="Post-Footer body">
                <Link className="link" to={"/" + title.id}>
                  <div className="dogPic" id="dogPic" style={{ backgroundImage: `url(${title.dog_pic})` }}>
                    <div className="description px-5">
                      {title.description}{" "}
                      <i className="fas fa-paw"></i>
                    </div>
                  </div>
                </Link>
                <div className="footer">
                  <span className="votes-footer">
                    <small>{title.votes} votes</small>
                    <i className={
                      localStorage.getItem(title.id) === "down"
                        ? "grayedThumb fas fa-thumbs-up text-success ml-2 mt-2"
                        : "fas fa-thumbs-up text-success ml-2 mt-2"
                    }
                      onClick={() => this.vote("up", title.id)}
                    />
                    <i className={
                      localStorage.getItem(title.id) === "up"
                        ? "grayedThumb fas fa-thumbs-down text-danger ml-2 mt-2"
                        : "fas fa-thumbs-down text-danger ml-2 mt-2"
                    }
                      onClick={() => this.vote("down", title.id)}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    titles: state.titles
  };
}

export default connect(mapStateToProps, { fetchTitlesFromAPI, sendVoteToAPI })(
  PostList
);

{
  /* <img className="dogPic" src={title.dog_pic} /> */
}

{
  /* <div key={title.id} className="post col">
  <div className="title">
    <h4>{title.title}</h4>
  </div>
  <div className="dogPic" style={{ backgroundImage: `url(${title.dog_pic})` }} />
  <h5>{title.description}</h5>
</div> */
}
