import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { fetchTitlesFromAPI } from '../actions/titles';
import { Link } from 'react-router-dom';
import './PostList.css'
import { sendVoteToAPI } from '../actions/posts';



class PostList extends Component {
  async componentDidMount() {
    if (this.props.titles.length === 0) {
      await this.props.fetchTitlesFromAPI();
    }
  }

  vote(direction, id) {
    let oppDirection;
    if (direction === 'up') {
      oppDirection = 'down';
    } else {
      oppDirection = 'up';
    }

    // if user has already voted on this post
    if (localStorage.getItem(id)) {
      let previousVote = localStorage.getItem(id);
      if (previousVote === oppDirection) {
        this.props.sendVoteToAPI(id, direction)
        localStorage.removeItem(id)
      }
    }
    //if user has not already voted on this post
    else {
      this.props.sendVoteToAPI(id, direction)
      localStorage.setItem(id, direction)
    }
  }

  render() {
    console.log("props in postlist", this.props)
    return (
      <div className="postContainer row">
        {this.props.titles.map(title => (
          <div key={title.id} className="post col">
            <div className="card text-center">
              <div className="card-body">
                <div className="card-title">
                  <Link to={"/" + title.id}>{title.title}</Link>
                </div>
                <div className="dogPic" style={{ backgroundImage: `url(${title.dog_pic})` }} />
                <div className="card-text">
                  <i>{title.description}</i>
                </div>
              </div>
              <div className="card-footer">
                <small>{title.votes} votes</small>
                <i className={(localStorage.getItem(title.id) === 'down') ? "grayedThumb fas fa-thumbs-up text-success ml-2 " : "fas fa-thumbs-up text-success ml-2"}
                  onClick={() => this.vote("up", title.id)} />
                <i className={(localStorage.getItem(title.id) === 'up') ? "grayedThumb fas fa-thumbs-down text-danger ml-2" : "fas fa-thumbs-down text-danger ml-2"}
                  onClick={() => this.vote("down", title.id)} />
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
    titles: state.titles,
  }
}

export default connect(
  mapStateToProps,
  { fetchTitlesFromAPI, sendVoteToAPI }
)(PostList);

{/* <img className="dogPic" src={title.dog_pic} /> */ }

{/* <div key={title.id} className="post col">
  <div className="title">
    <h4>{title.title}</h4>
  </div>
  <div className="dogPic" style={{ backgroundImage: `url(${title.dog_pic})` }} />
  <h5>{title.description}</h5>
</div> */}