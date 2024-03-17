import React, { Component } from "react";
import Child from "./Child";
export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Prashant",
    };
    console.log("Parent Component constructor called.");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Parent component getDerivedStateFromProps() called");
    return null;
  }
  render() {
    console.log("Parent component render() called");
    return (
      <div>
        <h2>Parent</h2>
        <Child />
      </div>
    );
  }
  componentDidMount() {
    console.log("Parent component componentDidMount() called");
  }
}
