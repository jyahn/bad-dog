import React, { Component } from "react";
import './NewPostForm.css';


class NewPostForm extends Component {
  static defaultProps = {
    post: { title: "", description: "", dog_pic: "" },
  };

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.post.title,
      description: this.props.post.description,
      dog_pic: this.props.post.dog_pic,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addPost(this.state);
  }

  render() {
    return (
      <div className="text-center">
        <h1>New Bad Dog</h1>
        <form className="col-lg-6 offset-3" onSubmit={this.handleSubmit}>

          <div className="form-group">
            <label htmlFor="editform-title">Title:</label>
            <input onChange={this.handleChange}
              id="editform-title"
              name="title"
              className="form-control"
              value={this.state.title} />
          </div>

          <div className="form-group">
            <label htmlFor="editform-description">I'm a bad dog because:</label>
            <input onChange={this.handleChange}
              id="editform-description"
              name="description"
              className="form-control"
              value={this.state.description} />
          </div>

          <div className="form-group">
            <label htmlFor="editform-dogpic">Image:</label>
            <input onChange={this.handleChange}
              id="editform-dogpic"
              name="dog_pic"
              type="url"
              className="form-control"
              value={this.state.dog_pic} />
          </div>

          <button className="btn btn-primary mr-2">Save</button>
          <button onClick={this.props.cancel} className="btn btn-secondary">Cancel</button>
        </form>
      </div>
    );
  }
}

export default NewPostForm;