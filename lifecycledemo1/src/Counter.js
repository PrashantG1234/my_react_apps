import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
    };
  }
  handleClick = () => {
    this.setState((state) => {
      return { counter: state.counter + 1 };
    });
  };
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.counter !== nextState.counter) {
      return true;
    }
    return false;
  }
  render() {
    console.log("render() called");
    return (
      <div>
        {this.state.counter} <br></br>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}
