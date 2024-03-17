import React, { PureComponent } from "react";

export default class CounterImp extends PureComponent {
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
