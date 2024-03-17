import React, { Component } from "react";

export default class MyClicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
    };
    //here we are binding to MyClicker compo since it will the body on onClicks
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div>
        <h2>Counter is {this.state.counter}</h2>
        <button onClick={this.handleClick}>Increment counter</button>
      </div>
    );
  }
}
