import React, { Component } from "react";

class PostDisplay extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    const { title, description, dog_pic, votes } = this.props.post;
    return (
      <div className="PostDisplay text-center">
        <div className="card col-lg-6 offset-3 text-center">
          <div className="card-body">
            <div className="card-title">
              {title}
            </div>
            <div className="dogPic" style={{ backgroundImage: `url(${dog_pic})` }} />
            <div className="card-text">
              <i>{description}</i>
            </div>
          </div>
          <div className="card-footer">
            <small>{votes} votes</small>
            <i className="fas fa-thumbs-up text-success ml-2" />
            <i className="fas fa-thumbs-down text-danger ml-2" />
          </div>
        </div>
        <br />
        <div className="PostDisplay-right">
          <div className="PostDisplay-edit-area">
            <i className="fas fa-edit text-primary"
              onClick={this.props.toggleEdit} />
            <i className="fas fa-times text-danger"
              onClick={this.props.delete} />
          </div>
        </div>
      </div>
    );
  }
}

export default PostDisplay;