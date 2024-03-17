import React, { Component } from "react";

export default class ContactForm1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: "",
    };
  }
  handleChange = (e) => {
    this.setState({ key: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault(false);
    alert("you typed: " + this.state.key);
    this.setState({
      key: "",
    });
  };
  render() {
    return (
      <div>
        <h1>Contact Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Name</label>
          <input
            name="username"
            value={this.state.key}
            onChange={this.handleChange}
          ></input>
          <button>submit</button>
        </form>
      </div>
    );
  }
}
