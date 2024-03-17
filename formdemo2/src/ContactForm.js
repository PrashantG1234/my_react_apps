import React, { Component } from "react";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.myRef1 = React.createRef();
    this.myRef2 = React.createRef();
    this.myRef3 = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "you typed: " +
        this.myRef1.current.value +
        "\n" +
        this.myRef2.current.value +
        "\n" +
        this.myRef3.current.value
    );
    this.myRef1.current.value = "";
    this.myRef2.current.value = "";
    this.myRef3.current.value = "";
  };
  render() {
    return (
      <div>
        <h1>Contact Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Name</label>
          <input name="username" ref={this.myRef1}></input>
          <br />
          <label htmlFor="email">Email</label>
          <input name="email" ref={this.myRef2}></input>
          <br />
          <label htmlFor="pass">password</label>
          <input name="pass" ref={this.myRef3}></input>
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
