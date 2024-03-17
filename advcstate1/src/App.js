import React, { Component } from "react";
import Lottery from "./Lottery";

export default class App extends Component {
  render() {
    return (
      <div>
        <Lottery numBalls={3} />
        <Lottery title="Rajjo" maxValue={60} />
      </div>
    );
  }
}
