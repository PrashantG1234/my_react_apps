import React, { Component } from "react";

export default class ContactForm2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: "",
      enter: false,
    };
  }
  handleChange = (e) => {
    this.setState({ key: e.target.value, enter: false });
  };
  handleSubmit = (e) => {
    e.preventDefault(false);
    this.setState({
      enter: true,
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
        {this.state.enter === true && <p>You typed: {this.state.key} </p>}
      </div>
    );
  }
}
