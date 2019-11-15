import React, { Component } from "react";
import "./NewPostForm.css";
// import "./bad-dog-logo.png";

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
      <div className="container">
        <div className="row">
          <div className="image-container col-lg-6 col-md-4 mb-5">
            {/* <div className="image" style={{ backgroundImage: require("bad-dog-logo.png")}}></div> */}
            <img
              className="image"
              src="https://www.rover.com/blog/wp-content/uploads/2017/10/bad-dogs-or-bored-dogs-dogshaming-HERO-960x540.jpg"
              alt="default"
            />
          </div>
<<<<<<< Updated upstream
          <form className="col-lg-6" onSubmit={this.handleSubmit}>
            <div className="form-group">
=======
          <form onSubmit={this.handleSubmit}>
            {/* <div>
              <h1>
              New Bad Dog
              </h1>
            </div> */}
            <span>
              <input
                class="text-body"
                id="editform-title"
                name="title"
                type="text"
                placeholder="Title"
                required
                onChange={this.handleChange}
                value={this.state.title}
              />
            </span>
            <span>
              <input
                class="text-body"
                id="editform-description"
                name="description"
                type="text"
                placeholder="I'm a bad dog because"
                required
                onChange={this.handleChange}
                value={this.state.description}
              />
            </span>
            <span>
              <input
                class="text-body"
                id="editform-dogpic"
                name="dog_pic"
                type="url"
                className="form-control"
              />
            </span>
          </form>
        </main>

        <div className="text-center">
          <h1>New Bad Dog</h1>
          <form className="col-lg-6 offset-3" onSubmit={this.handleSubmit}>
            {/* <div className="form-group">
              <label htmlFor="editform-title">Title:</label>
>>>>>>> Stashed changes
              <input
                onChange={this.handleChange}
                id="editform-title"
                name="title"
                placeholder="TITLE"
                className="form-control"
                value={this.state.title}
              />
            </div>

            <div className="form-group">
              {/* <label htmlFor="editform-description">
                I'm a bad dog because:
              </label> */}
              <input
                onChange={this.handleChange}
                id="editform-description"
                name="description"
                className="form-control"
                placeholder="I'M A BAD DOG BECAUSE"
                value={this.state.description}
              />
            </div>

            <div className="form-group">
              {/* <label htmlFor="editform-dogpic">Image:</label> */}
              <input
                onChange={this.handleChange}
                id="editform-dogpic"
                name="dog_pic"
                type="url"
                placeholder="IMAGE"
                className="form-control"
                value={this.state.dog_pic}
              />
            </div>
              <button className="btn btn-primary mr-2">Create</button>
              <button onClick={this.props.cancel} className="btn btn-secondary">
                Cancel
              </button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewPostForm;
