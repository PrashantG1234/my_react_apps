import React, { Component } from "react";

export default class KeyGen extends Component {
  handleKey = (e) => {
    if (e.code === "Enter") {
      alert("you typed\n " + e.target.value);
    } else if (e.code === "Escape") {
      let ans = window.confirm("Are you sure you want to delete the text");
      if (ans) {
        e.target.value = "";
      }
    }
  };
  handleSubmit = (e) => {
    e.preventDefault(false);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Type Your Message</h1>
          <input
            type="text"
            placeholder="type something"
            onKeyDown={this.handleKey}
          />
        </form>
      </div>
    );
  }
}
