import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Prashant",
    };
    console.log("Child Component constructor called.");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Child component getDerivedStateFromProps() called");
    return null;
  }
  render() {
    console.log("Child component render() called");
    return (
      <div>
        <h2>Child</h2>
      </div>
    );
  }
  componentDidMount() {
    console.log("Child component componentDidMount() called");
  }
}
