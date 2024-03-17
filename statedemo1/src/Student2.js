import React, { Component } from "react";

export default class Student2 extends Component {
  constructor() {
    super();
    this.state = {
      name: "amit",
      roll: 101,
    };
  }
  render() {
    return <div>
        <p>Name is: {this.state.name}</p>
        <p>Name is: {this.state.roll}</p>
    </div>;
  }
}
