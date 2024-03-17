import React, { Component } from "react";

export default class ContactForm3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      pass: "",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault(false);
    alert(
      "You typed: \n" + this.state.username + this.state.email + this.state.pass
    );
    this.setState({ username: "", email: "", pass: "" });
  };
  render() {
    return (
      <div>
        <h1>Contact Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Name</label>
          <input
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          {this.state.username}
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          {this.state.email}
          <br />
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            name="pass"
            value={this.state.pass}
            onChange={this.handleChange}
          />
          {this.state.pass}
          <br />
          <button>submit</button>
        </form>
        {this.state.enter === true && <p>You typed: {this.state.key} </p>}
      </div>
    );
  }
}
