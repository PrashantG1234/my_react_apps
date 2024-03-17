import React, { Component } from "react";

export default class MyClicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
    };
    //here we are binding to MyClicker compo since it will the body on onClicks
    this.genRandom = this.genRandom.bind(this);
  }
  genRandom() {
    let randNum = Math.floor(Math.random() * 10 + 1);
    this.setState({ counter: randNum });
  }
  render() {
    return (
      <div>
        <h2>Counter is {this.state.counter}</h2>

        {this.state.counter === 6 ? (
          <b>You win</b>
        ) : (
          <button onClick={this.genRandom}>generate new counter</button>
        )}
      </div>
    );
  }
}
