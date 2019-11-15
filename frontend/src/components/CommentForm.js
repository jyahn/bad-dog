import React, { Component, } from 'react';
import './Comment.css';

/** Comment form
 *
 * Could be used for adding/editing: just shows form and tracks input.
 *
 */

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addComment(this.state.text);
    this.setState({ text: "" });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
      <div className="Comment-Form">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input onChange={this.handleChange}
              id="commentform-text"
              name="text"
              size="50"
              placeholder="New Comment"
              className="form-control"
              value={this.state.text} />
          </div>
          <div className="Button text-center">
            <button className="btn btn-primary ">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentForm;
