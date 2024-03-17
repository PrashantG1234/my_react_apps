import React, { Component } from "react";

export default class MyClicker extends Component {
  state = { counter: 1 };
  handleClick = (step) => {
    this.setState({ counter: this.state.counter + step });
  };

  render() {
    return (
      <div>
        <h2>Counter is: {this.state.counter}</h2>
        <button
          onClick={() => {
            this.handleClick(1);
          }}
        >
          Increment by 1
        </button>
        <button
          onClick={() => {
            this.handleClick(2);
          }}
        >
          Increment by 2
        </button>
        <button
          onClick={() => {
            this.handleClick(3);
          }}
        >
          Increment by 3
        </button>
      </div>
    );
  }
}
