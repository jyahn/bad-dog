import React, { Component } from 'react';
import Comment from "./Comment"
import './Comment.css';
/** CommentList: shows list of comments passed down as props.
 *
 * Comments can be deleted by clicking next to them; this is handled by
 * the parent.
 *
 */

class CommentList extends Component {
  static defaultProps = {
    comments: []
  }

  render() {
    return (
      <div>
        <h4 className="Comments-header">Comments</h4>
        <div className="Comments-list">
          {this.props.comments.map(c => (
            <Comment key={c.id}
              id={c.id}
              text={c.text}
              deleteComment={this.props.deleteComment} />
          ))}
        </div>
      </div>
    );
  }
}

export default CommentList;
