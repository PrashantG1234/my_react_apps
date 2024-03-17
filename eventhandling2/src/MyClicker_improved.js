import React, { Component } from "react";

export default class MyClicker_improved extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleTripleClick = this.handleTripleClick.bind(this);
  }
  handleClick() {
    this.setState(this.increment);
  }

  handleTripleClick() {
    this.setState(this.increment);
    this.setState(this.increment);
    this.setState(this.increment);
  }

  increment(prevStates) {
    return { counter: prevStates.counter + 1 };
  }
  render() {
    return (
      <div>
        <h2>Counter is {this.state.counter}</h2>
        <button onClick={this.handleClick}>Increment counter by 1</button>
        <button onClick={this.handleTripleClick}>Increment counter by 3</button>
      </div>
    );
  }
}
