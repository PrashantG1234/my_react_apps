import React, { Component } from "react";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = { key: "" };
  }

  handleChange = (e) => {
    this.setState({ key: e.target.value });
  };
  render() {
    return (
      <div>
        <h1>Contact Form</h1>
        <form>
          <label htmlFor="username">Name</label>
          <input name="username" onChange={this.handleChange}></input>
          <p>you typed: {this.state.key}</p>
        </form>
      </div>
    );
  }
}
