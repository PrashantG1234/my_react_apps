import React, { Component } from "react";

export default class Clock extends Component {
  constructor() {
    super();
    this.state = {
      current: new Date(),
    };
    setInterval(this.changeTime, 1000);
  }
  changeTime = () => {
    this.setState({
      current: new Date(),
    });
  };
  render() {
    return (
      <div>
        <h2>Hello Everyone</h2>
        <h3>current date and time is {this.state.current.toLocaleString()}</h3>
      </div>
    );
  }
}
