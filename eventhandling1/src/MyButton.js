import React, { Component } from "react";

export default class MyButton extends Component {
  handleClick() {
    alert("current date and time are:" + new Date().toLocaleString());
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>click me</button>
      </div>
    );
  }
}
