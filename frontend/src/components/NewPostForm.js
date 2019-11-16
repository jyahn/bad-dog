import React, { Component } from "react";
import "./NewPostForm.css";
import logo from "./bad-dog-logo.png";

class NewPostForm extends Component {
  static defaultProps = {
    post: { title: "", description: "", dog_pic: "" }
  };

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.post.title,
      description: this.props.post.description,
      dog_pic: this.props.post.dog_pic
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.previewFile = this.previewFile.bind(this);

  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  3
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addPost(this.state);
  }

  previewFile = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState({ dog_pic: e.target.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="col-lg-8 offset-2">
          <div className="image-container mb-5">
            <img
              className="image"
              src={this.state.dog_pic || logo}
              alt="default"
            />
          </div>
          <div className="Form-container">
            <form onSubmit={this.handleSubmit}>
              {/* <div className="form-group">
              <input
                onChange={this.handleChange}
                id="editform-title"
                name="title"
                placeholder="TITLE"
                className="form-control"
                value={this.state.title}
              />
            </div> */}

              <div className="form-group">
                <input
                  onChange={this.handleChange}
                  id="editform-description"
                  name="description"
                  className="form-control"
                  placeholder="BAD DOG SAYS..."
                  value={this.state.description}
                />
              </div>

              {/* <div className="form-group">
              <input
                onChange={this.handleChange}
                id="editform-dogpic"
                name="dog_pic"
                type="url"
                placeholder="IMAGE"
                className="form-control"
                value={this.state.dog_pic}
              />
            </div> */}
              <div className='button'>
                <label>Submit a bad dog</label>
                <input type='file' id='single' onChange={this.previewFile} />
              </div>
              <br />
              <div className="buttons">
                <button className="btn btn-primary mr-2">Create</button>
                <button onClick={this.props.cancel} className="btn btn-secondary">
                  Cancel
              </button>
              </div>
            </form>
          </div>
        </div>
      </div >
    );
  }
}

export default NewPostForm;
