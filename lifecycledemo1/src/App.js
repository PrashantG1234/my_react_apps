import React, { Component } from "react";
import ParentA from "./ParentA";
// import Parent from "./Parent";
// import Counter from "./Counter";
// import CounterImp from "./CounterImp";
export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Parent /> */}
        {/* <Counter />
        <CounterImp /> */}
        <ParentA />
      </div>
    );
  }
}
