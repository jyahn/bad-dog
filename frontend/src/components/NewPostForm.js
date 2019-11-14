import React, { Component } from "react";
import "./NewPostForm.css";

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
      <>
        <main>
          <figure>
            <picture>
              <source
                media="(min-width: 768px)"
                srcset="//my-assets.netlify.com/codepen/dailyui-001/img.png     340w,
                            //my-assets.netlify.com/codepen/dailyui-001/img@2x.png  680w,
                            //my-assets.netlify.com/codepen/dailyui-001/img@3x.png 1020w"
                sizes="360px"
              />
              <source
                srcset="//my-assets.netlify.com/codepen/dailyui-001/img-small.png     340w,
                            //my-assets.netlify.com/codepen/dailyui-001/img-small@2x.png  680w,
                            //my-assets.netlify.com/codepen/dailyui-001/img-small@3x.png 1020w"
                sizes="(min-width: 320px) 290px,
                            (min-width: 480px) 435px
                            (min-width: 640px) 580px"
              />
              <img
                src="//my-assets.netlify.com/codepen/dailyui-001/img.png"
                alt="Citymap illustration"
              />
            </picture>
          </figure>
          <div className="headline">
            <h2 class="text-headline">Vino Blanco</h2>
          </div>
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
                name="city"
                type="text"
                required
              />
            </span>
          </form>
        </main>

        <div className="text-center">
          <h1>New Bad Dog</h1>
          <form className="col-lg-6 offset-3" onSubmit={this.handleSubmit}>
            {/* <div className="form-group">
              <label htmlFor="editform-title">Title:</label>
              <input
                onChange={this.handleChange}
                id="editform-title"
                name="title"
                className="form-control"
                value={this.state.title}
              />
            </div> */}

            {/* <div className="form-group">
              <label htmlFor="editform-description">
                I'm a bad dog because:
              </label>
              <input
                onChange={this.handleChange}
                id="editform-description"
                name="description"
                className="form-control"
                value={this.state.description}
              />
            </div> */}

            <div className="form-group">
              <label htmlFor="editform-dogpic">Image:</label>
              <input
                onChange={this.handleChange}
                id="editform-dogpic"
                name="dog_pic"
                type="url"
                className="form-control"
                value={this.state.dog_pic}
              />
            </div>

            <button className="btn btn-primary mr-2">Save</button>
            <button onClick={this.props.cancel} className="btn btn-secondary">
              Cancel
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default NewPostForm;
