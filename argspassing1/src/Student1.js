import React, { Component } from "react";

export default class Student1 extends Component {
  constructor() {
    super();
    this.handleArgClick = this.handleArgClick.bind(this);
  }

  handleClick(roll, name) {
    console.log(roll, name);
  }
  handleArgClick() {
    this.handleClick(this.props.name, this.props.roll);
  }
  render() {
    return (
      <div>
        <p>
          Hello {this.props.name},your roll no. is {this.props.roll}
          <button onClick={this.handleArgClick}>Click me</button>
        </p>
      </div>
    );
  }
}
